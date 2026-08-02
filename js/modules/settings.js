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

  init() {
    this.load();

    this.cache();

    this.events();
  },

  cache() {
    this.panel = document.getElementById("settings-panel");

    this.openButton = document.getElementById("settings-button");

    this.closeButton = document.getElementById("settings-close");
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
};
