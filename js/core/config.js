/* ==========================================
   NOVA DASHBOARD
   Configuration
========================================== */

const CONFIG = {

    APP: {

        NAME: "Nova Dashboard",

        VERSION: "1.0.0"

    },

    WEATHER: {

        BASE_URL:
            "https://api.openweathermap.org/data/2.5/weather",

        API_KEY:
            "17b387a1ed3ed47d215b741ecff8fed9",

        UNITS: "metric",

        REFRESH_INTERVAL:
            30 * 60 * 1000

    },

    WALLPAPER: {

        DEFAULT:
            "assets/images/default-bg.png",

        CATEGORY:
            "nature"

    },

    SEARCH: {

        DEFAULT_ENGINE:
            "google"

    }

};