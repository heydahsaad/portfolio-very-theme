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
      title: "Portfolio",
      about: "About",
      research: "Research",
      presentations: "Presentations & Publications",
      development: "Professional Development",
      contact: "Contact"
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
            //make the buttons center nanti
            display:flex;
            background-color:black;
            justify-content:center;
            align-items:center;
            position:fixed;
            left: 0;
            height: 100px;
            right: 0;
            z-index: 1;
            top:150px;
        }
      `
    ];
  }


  // Lit render the HTML
  render() {
    return html`
    <div class="banner">
        <simple-cta><a href="#About">About</a></simple-cta>
        <simple-cta><a href="#Career">Career</a></simple-cta>
        <simple-cta><a href="#Skills">Skills</a></simple-cta>
        <simple-cta><a href="#Work">Work Experience</a></simple-cta>
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