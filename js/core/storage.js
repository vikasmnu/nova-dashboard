/* ==========================================
   NOVA DASHBOARD
   Storage Service
========================================== */

const STORAGE_KEYS = {

    SETTINGS: "settings",

    FOCUS: "focus",

    TASKS: "tasks",

    WALLPAPER: "wallpaper",

    WEATHER: "weather",

    QUICK_LINKS: "quickLinks"

};

const Storage = {

    /**
     * Save data
     */

    set(key, value) {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    },

    /**
     * Read data
     */

    get(key, defaultValue = null) {

        const value = localStorage.getItem(key);

        if (value === null) {

            return defaultValue;

        }

        try {

            return JSON.parse(value);

        }

        catch {

            return defaultValue;

        }

    },

    /**
     * Remove one item
     */

    remove(key) {

        localStorage.removeItem(key);

    },

    /**
     * Clear dashboard data
     */

    clear() {

        Object.values(STORAGE_KEYS).forEach(key => {

            localStorage.removeItem(key);

        });

    }

};