/* ==========================================
   NOVA DASHBOARD
   Weather Module
========================================== */

window.Weather = {

    elements: {

        icon: null,

        temperature: null,

        location: null,

        description: null

    },

    interval: null,

    init() {

        this.elements.icon =
            document.getElementById("weather-icon");

        this.elements.temperature =
            document.getElementById("temperature");

        this.elements.location =
            document.getElementById("location");

        this.elements.description =
            document.getElementById("weather-description");

        this.load();

    },

    load() {

        if (!navigator.geolocation) {

            this.showError("Location unavailable");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            position => {

                this.fetchWeather(

                    position.coords.latitude,

                    position.coords.longitude

                );

            },

            () => {

                this.showError("Location permission denied");

            }

        );

    },

    async fetchWeather(lat, lon) {

        const weather = await API.getWeather(lat, lon);

        if (!weather) {

            this.showError("Weather unavailable");

            return;

        }

        this.update(weather);

    },

    update(weather) {

        this.elements.temperature.textContent =

            `${Math.round(weather.main.temp)}°`;

        this.elements.location.textContent =

            weather.name;

        this.elements.description.textContent =

            Utils.capitalize(

                weather.weather[0].description

            );

        this.elements.icon.src =

            `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    },

    showError(message) {

        this.elements.location.textContent = message;

    },

    destroy() {

        clearInterval(this.interval);

    }

};