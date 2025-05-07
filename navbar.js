/**
 * Copyright 2025 heydahsaad
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }

  constructor() {
    super();
    this.title = "";

    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "",

    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :root{
          scroll-behavior:smooth;
        }
        :host {
          display: block;
          --portfolio-primary: #14284B;
          --portfolio-accent: #7FB2F0;
          --portfolio-text: #ffffff;
          font-family: var(--ddd-font-navigation);
          background-color: var(--portfolio-primary);
          color: var(--portfolio-text);
        }

        .banner{
            display:flex;
            padding:10px;
            background-color: rgb(0,0,0,0.50);
            position:fixed;
            left: 0;
            height: 80px;
            right: 0;
            z-index: 1000;
            top:150px;
            /* text-align:center; */
            align-items:center;
            justify-content: center;
        }

        simple-cta{
            background-color: white;
            display:flex;
            flex-wrap: wrap;
            margin: 0 25px;
        }

      `
    ];
  }

  firstUpdated() {
    this.shadowRoot.querySelectorAll('button[data-target]').forEach(button => {
      button.addEventListener('click', (e) => {
        const targetId = button.getAttribute('data-target');
        const section = document.querySelector(`#${targetId}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="banner">
        <simple-cta><a href="#About">About</a></simple-cta>
        <simple-cta><a href="#Career">Career</a></simple-cta>
        <simple-cta><a href="#Work">Works</a></simple-cta>
        <simple-cta><a href="#Funfact">Funfact</a></simple-cta>
        <simple-cta><a href="#Contact">Contact</a></simple-cta>
    </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);