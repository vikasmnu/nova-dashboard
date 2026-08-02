/* ==========================================
   NOVA DASHBOARD
   Weather Module
========================================== */

const Weather = {

    elements: {

        icon: document.getElementById("weather-icon"),

        temperature: document.getElementById("temperature"),

        location: document.getElementById("location")

    },

    init() {

        if (!navigator.geolocation) {

            this.elements.location.textContent =
                "Location unavailable";

            return;

        }

        navigator.geolocation.getCurrentPosition(

            position => {

                this.load(

                    position.coords.latitude,

                    position.coords.longitude

                );

            },

            () => {

                this.elements.location.textContent =
                    "Permission denied";

            }

        );

    },

    async load(lat, lon) {

        const data = await API.getWeather(lat, lon);

        if (!data) {

            this.elements.location.textContent =
                "Weather unavailable";

            return;

        }

        this.update(data);

    },

    update(data) {

        this.elements.temperature.textContent =

            `${Math.round(data.main.temp)}°`;

        this.elements.location.textContent =

            data.name;

        this.elements.icon.src =

            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

};