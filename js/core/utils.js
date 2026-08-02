/* ==========================================
   NOVA DASHBOARD
   Utility Functions
========================================== */

const Utils = {

    /**
     * Returns current Date object.
     */
    now() {

        return new Date();

    },

    /**
     * Format time.
     */
    formatTime(date, use24Hour = false) {

        return date.toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit",

            hour12: !use24Hour

        });

    },

    /**
     * Format date.
     */
    formatDate(date) {

        return date.toLocaleDateString([], {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric"

        });

    },

    /**
     * Greeting.
     */
    getGreeting(date) {

        const hour = date.getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 18) return "Good Afternoon";

        return "Good Evening";

    },

    /**
     * Capitalize text.
     */
    capitalize(text) {

        if (!text) return "";

        return text.charAt(0).toUpperCase() + text.slice(1);

    },

    /**
     * Random item.
     */
    random(array) {

        return array[
            Math.floor(Math.random() * array.length)
        ];

    },

    /**
     * Clamp value.
     */
    clamp(value, min, max) {

        return Math.min(
            Math.max(value, min),
            max
        );

    }

};