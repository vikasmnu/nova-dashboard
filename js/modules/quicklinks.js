window.QuickLinks = {
  links: [
    {
      id: 1,
      title: "Google",
      url: "https://google.com",
    },

    {
      id: 2,
      title: "ChatGPT",
      url: "https://chatgpt.com",
    },

    {
      id: 3,
      title: "GitHub",
      url: "https://github.com",
    },

    {
      id: 4,
      title: "YouTube",
      url: "https://youtube.com",
    },

    {
      id: 5,
      title: "Gmail",
      url: "https://mail.google.com",
    },

    {
      id: 6,
      title: "TradingView",
      url: "https://tradingview.com",
    },
  ],

  data: [],

  elements: {
    container: null,
  },

  init() {
    this.cache();

    this.load();

    this.render();

    this.events();
  },

  cache() {
    this.elements.container = document.getElementById("quick-links");
  },

  events() {
    this.elements.container?.addEventListener(
      "click",

      (event) => {
        const card = event.target.closest(".quick-link");

        if (!card) {
          return;
        }

        const id = Number(card.dataset.id);

        const link = this.data.find((item) => item.id === id);

        if (!link) {
          return;
        }

        window.open(
          link.url,

          "_blank",
        );
      },
    );
  },

  load() {
    const savedLinks = Storage.get(STORAGE_KEYS.QUICK_LINKS);

    if (savedLinks) {
      this.data = savedLinks;

      return;
    }

    this.data = [...this.links];

    this.save();
  },

  render() {
    this.elements.container.innerHTML = "";

    this.data.forEach((link) => {
      this.elements.container.appendChild(this.createCard(link));
    });
  },

  createCard(link) {
    const card = document.createElement("div");

    card.className = "quick-link glass";

    card.dataset.id = link.id;

    const domain = new URL(link.url).hostname;

    card.innerHTML = `

        <div class="quick-link-icon">

            <img
                src="https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64"
                alt="${link.title}"
            >

        </div>

        <div class="quick-link-title">

            ${link.title}

        </div>

        <div class="quick-link-domain">

            ${domain}

        </div>

    `;

    return card;
  },

  save() {
    Storage.set(
      STORAGE_KEYS.QUICK_LINKS,

      this.data,
    );
  },

  add() {},

  edit() {},

  remove() {},

  reset() {},

  destroy() {},
};
