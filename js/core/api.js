/* ==========================================
   NOVA DASHBOARD
   API Service
========================================== */

window.API = {

    /**
     * Generic GET Request
     */

    async get(url) {

        try {

            const response = await fetch(url);

            if (!response.ok) {

                throw new Error(`HTTP ${response.status}`);

            }

            return await response.json();

        }

        catch (error) {

            console.error(error);

            return null;

        }

    },

    /**
     * Current Weather
     */

    async getWeather(latitude, longitude) {

        const url =

            `${CONFIG.WEATHER.BASE_URL}` +
            `?lat=${latitude}` +
            `&lon=${longitude}` +
            `&units=${CONFIG.WEATHER.UNITS}` +
            `&appid=${CONFIG.WEATHER.API_KEY}`;

        return await this.get(url);

    }

};