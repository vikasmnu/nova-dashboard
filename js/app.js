/* ==========================================
   NOVA DASHBOARD
   App
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(`${CONFIG.APP.NAME} v${CONFIG.APP.VERSION}`);

    window.Settings.init();

    window.Wallpaper.init();

    window.Time.init();

    window.Weather.init();

    Search.init();

    QuickLinks.init();

    Modal.init();

});