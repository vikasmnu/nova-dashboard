/* ==========================================
   NOVA DASHBOARD
   Wallpaper Module
========================================== */

window.Wallpaper = {

    element: null,

    init() {

        this.element = document.getElementById("background");

        if (!this.element) {

            console.error("Background element not found.");

            return;

        }

        this.loadDefault();

    },

    loadDefault() {

        this.element.style.backgroundImage =
            `url(${CONFIG.WALLPAPER.DEFAULT})`;

    },

    set(imageUrl) {

        this.element.style.backgroundImage =
            `url(${imageUrl})`;

    }

};