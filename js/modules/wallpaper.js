/* ==========================================
   NOVA DASHBOARD
   Wallpaper Module
========================================== */

window.Wallpaper = {
  element: null,

  currentWallpaper: null,

  init() {
    this.element = document.getElementById("background");

    if (!this.element) {
      console.error("Background element not found.");

      return;
    }

    this.load();

    this.updateBlur();
  },

  load() {
    const savedWallpaper = Storage.get(STORAGE_KEYS.WALLPAPER);

    if (savedWallpaper) {
      this.set(savedWallpaper);

      return;
    }

    this.set(CONFIG.WALLPAPER.DEFAULT);
  },

  updateBlur() {
    const blur = Settings.get("backgroundBlur");

    document.documentElement.style.setProperty(
      "--wallpaper-blur",

      `${blur}px`,
    );
  },

  set(imageUrl) {
    this.currentWallpaper = imageUrl;

    this.element.style.backgroundImage = `url("${imageUrl}")`;

    Storage.set(STORAGE_KEYS.WALLPAPER, imageUrl);
  },

  reset() {
    this.set(CONFIG.WALLPAPER.DEFAULT);
  },

  destroy() {
    this.currentWallpaper = null;
  },
};
