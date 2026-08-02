/* ==========================================
   NOVA DASHBOARD
   Time Module
========================================== */

const Time = {

    elements: {

        clock: document.getElementById("clock"),

        greeting: document.getElementById("greeting"),

        date: document.getElementById("current-date")

    },

    init() {

        this.update();

        setInterval(() => {

            this.update();

        }, 1000);

    },

    update() {

        const now = Utils.now();

        const settings = Storage.get(

            STORAGE_KEYS.SETTINGS,

            {}

        );

        const use24Hour =

            settings.clock24Hour ?? false;

        this.elements.clock.textContent =

            Utils.formatTime(

                now,

                use24Hour

            );

        this.elements.greeting.textContent =

            Utils.getGreeting(now);

        this.elements.date.textContent =

            Utils.formatDate(now);

    }

};