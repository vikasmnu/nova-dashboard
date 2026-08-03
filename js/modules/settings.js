/* ==========================================
   NOVA DASHBOARD
   Settings Module
========================================== */

window.Settings = {
  defaults: {
    clock24Hour: false,

    temperatureUnit: "metric",

    searchEngine: "google",
  },

  data: {},

  panel: null,

  openButton: null,

  closeButton: null,

  clockToggle: null,

  temperatureSelect: null,

  wallpaperCategory: "nature",

  wallpaperSelect: null,

  backgroundBlur: 8,

  blurSlider: null,

  init() {
    this.load();

    this.cache();

    this.events();
  },

  cache() {
    this.panel = document.getElementById("settings-panel");

    this.openButton = document.getElementById("settings-button");

    this.closeButton = document.getElementById("settings-close");

    this.clockToggle = document.getElementById("clock-format");

    if (this.clockToggle) {
      this.clockToggle.checked = this.get("clock24Hour");
    }

    this.temperatureSelect = document.getElementById("temperature-unit");

    if (this.temperatureSelect) {
      this.temperatureSelect.value = this.get("temperatureUnit");
    }

    this.wallpaperCategorySelect =
      document.getElementById("wallpaper-category");

    if (this.wallpaperCategorySelect) {
      this.wallpaperCategorySelect.value = this.get("wallpaperCategory");
    }

    this.wallpaperSelect = document.getElementById("wallpaper-category");

    if (this.wallpaperSelect) {
      this.wallpaperSelect.value = this.get("wallpaperCategory");
    }

    this.blurSlider = document.getElementById("background-blur");

    if (this.blurSlider) {
      this.blurSlider.value = this.get("backgroundBlur");
    }
  },

  events() {
    this.openButton?.addEventListener(
      "click",

      () => this.open(),
    );

    this.closeButton?.addEventListener(
      "click",

      () => this.close(),
    );

    this.clockToggle?.addEventListener(
      "change",

      (event) => {
        this.set(
          "clock24Hour",

          event.target.checked,
        );

        Time.update();
      },
    );

    this.temperatureSelect?.addEventListener(
      "change",

      (event) => {
        this.set(
          "temperatureUnit",

          event.target.value,
        );

        Weather.refresh();
      },
    );

    this.wallpaperSelect?.addEventListener(
      "change",

      (event) => {
        this.set(
          "wallpaperCategory",

          event.target.value,
        );

        Wallpaper.refresh();
      },
    );

    this.blurSlider?.addEventListener(
      "input",

      (event) => {
        this.set(
          "backgroundBlur",

          Number(event.target.value),
        );

        Wallpaper.updateBlur();
      },
    );
  },

  open() {
    this.panel.classList.add("open");
  },

  close() {
    this.panel.classList.remove("open");
  },

  load() {
    this.data = Storage.get(
      STORAGE_KEYS.SETTINGS,

      this.defaults,
    );
  },

  save() {
    Storage.set(
      STORAGE_KEYS.SETTINGS,

      this.data,
    );
  },

  get(key) {
    return this.data[key];
  },

  set(key, value) {
    if (!(key in this.defaults)) {
      console.warn(`Unknown setting: ${key}`);

      return;
    }

    this.data[key] = value;

    this.save();
  },

  reset() {
    this.data = {
      ...this.defaults,
    };

    this.save();
  },
};
