/* ==========================================
   NOVA DASHBOARD
   API Service
========================================== */

const API = {

    /**
     * Generic GET Request
     */

    async get(url) {

        try {

            const response = await fetch(url);

            if (!response.ok) {

                throw new Error(

                    `HTTP ${response.status}`

                );

            }

            return await response.json();

        }

        catch (error) {

            console.error(

                "API Error:",

                error

            );

            return null;

        }

    },

    /* ======================================
       Unsplash
    ====================================== */

    async getBackground(category = "nature") {

        const url =

            `${CONFIG.UNSPLASH.BASE_URL}?` +

            `query=${category}` +

            `&orientation=landscape` +

            `&client_id=${CONFIG.UNSPLASH.ACCESS_KEY}`;

        return await this.get(url);

    },

    /* ======================================
       Weather
    ====================================== */

    async getWeather(lat, lon) {

        const url =

            `${CONFIG.WEATHER.BASE_URL}` +

            `?lat=${lat}` +

            `&lon=${lon}` +

            `&units=metric` +

            `&appid=${CONFIG.WEATHER.API_KEY}`;

        return await this.get(url);

    },



    /* ======================================
       Market
    ====================================== */

    async getMarket(symbol) {

        const url =

            `${CONFIG.MARKET.BASE_URL}` +

            `?symbol=${symbol}` +

            `&apikey=${CONFIG.MARKET.API_KEY}`;

        return await this.get(url);

    }

};