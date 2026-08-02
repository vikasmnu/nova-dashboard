/* ==========================================
   NOVA DASHBOARD
   Time Module
========================================== */

window.Time = {

    interval: null,

    elements: {

        clock: null,

        greeting: null,

        date: null

    },

    init() {

        this.elements.clock =
            document.getElementById("clock");

        this.elements.greeting =
            document.getElementById("greeting");

        this.elements.date =
            document.getElementById("current-date");

        this.update();

        this.interval = setInterval(() => {

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

        if (this.elements.clock) {

            this.elements.clock.textContent =

                Utils.formatTime(

                    now,

                    use24Hour

                );

        }

        if (this.elements.greeting) {

            this.elements.greeting.textContent =

                Utils.getGreeting(now);

        }

        if (this.elements.date) {

            this.elements.date.textContent =

                Utils.formatDate(now);

        }

    },

    destroy() {

        clearInterval(this.interval);

    }

};