/* ==========================================
   NOVA DASHBOARD
   Settings Module
========================================== */

window.Settings = {

    defaults: {

        clock24Hour: false,

        temperatureUnit: "metric",

        searchEngine: "google"

    },

    data: {},

    init() {

        this.load();

    },

    load() {

        this.data = Storage.get(

            STORAGE_KEYS.SETTINGS,

            this.defaults

        );

    },

    save() {

        Storage.set(

            STORAGE_KEYS.SETTINGS,

            this.data

        );

    },

    get(key) {

        return this.data[key];

    },

    set(key, value) {

        this.data[key] = value;

        this.save();

    },

    reset() {

        this.data = {

            ...this.defaults

        };

        this.save();

    },

    destroy() {

    }

};

console.log("settings.js loaded");