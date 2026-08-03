/* ==========================================
   NOVA DASHBOARD
   Search Module
========================================== */

window.Search = {

    elements: {

        form: null,

        input: null

    },

    init() {

        this.cache();

        this.events();

        this.elements.input?.focus();

    },

    cache() {

        this.elements.form =
            document.getElementById("search-form");

        this.elements.input =
            document.getElementById("search-input");

    },

    events() {

        this.elements.form?.addEventListener(

            "submit",

            (event) => {

                event.preventDefault();

                this.search();

            }

        );

        this.elements.input?.addEventListener(

            "focus",

            () => {

                this.elements.input.select();

            }

        );

        this.elements.input?.addEventListener(

            "keydown",

            (event) => {

                if (event.key === "Escape") {

                    if (this.elements.input.value) {

                        this.elements.input.value = "";

                    } else {

                        this.elements.input.blur();

                    }

                }

            }

        );

        document.addEventListener(

            "keydown",

            (event) => {

                if (

                    event.key === "/" &&

                    document.activeElement !== this.elements.input

                ) {

                    event.preventDefault();

                    this.elements.input.focus();

                    this.elements.input.select();

                }

            }

        );

    },

    search() {

        const query =

            this.elements.input.value.trim();

        if (!query) {

            return;

        }

        const engine =

            Settings.get("searchEngine");

        const url =

            this.buildUrl(

                engine,

                query

            );

        this.open(url);

        this.elements.input.value = "";

        this.elements.input.focus();

    },

    buildUrl(engine, query) {

        const encodedQuery =

            encodeURIComponent(query);

        switch (engine) {

            case "google":

                return `https://www.google.com/search?q=${encodedQuery}`;

            case "chatgpt":

                return `https://chatgpt.com/?q=${encodedQuery}`;

            case "gemini":

                return `https://gemini.google.com/app`;

            case "perplexity":

                return `https://www.perplexity.ai/search?q=${encodedQuery}`;

            case "github":

                return `https://github.com/search?q=${encodedQuery}`;

            case "youtube":

                return `https://www.youtube.com/results?search_query=${encodedQuery}`;

            default:

                return `https://www.google.com/search?q=${encodedQuery}`;

        }

    },

    open(url) {

        window.open(

            url,

            "_blank"

        );

    },

    destroy() {

    }

};