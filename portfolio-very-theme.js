/**
 * Copyright 2025 heydahsaad
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";
import "@haxtheweb/simple-img/simple-img.js";
import "@haxtheweb/scroll-button";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.title = "";
    this.logo = "https://dod-scholarship.ist.psu.edu/wp-content/uploads/sites/16/2022/04/PSU_IST_RGB_2C.png";
    this.cta = false;

    this.activeSection = "about";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      
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
      logo: {type:String},
      cta: {type:Boolean},
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
          /* background-color: var(--portfolio-primary); */
          /* color: var(--portfolio-text); */
          /* min-height: 100vh; */
        }

        .header{
          /* padding:100px; */
          /* margin:50px; */
          height:240px;
          min-width: 790px;
          background-color: var(--ddd-theme-default-slateLight);
          display:flex;
          justify-content:space-between;          
        }

        .wrapper {
        height: 100%;
        width: 100%;
        display: flex; 
        flex-direction: column;
      }

        img{
        display: block;
        height: auto;
        width:auto;
        /* margin-left: auto;
        margin-right: auto;
        max-width: 80%; */
        /* height: auto; */
      }

      .logo{
        display:block;
        padding: 40px 10px 10px 10px;
        height: 30%;
        width: auto;
      } 

        scroll-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000px;
        }
      `
    ];
  }

  // Lit render the HTML
  render() {
    return html`
    <scroll-button></scroll-button>

    <div class="header">
      <img src=${this.logo} class="logo">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd1699c1-baaa-4632-8a2f-c609bcb3cb0e/dj7utrv-77890d2c-3323-46cc-a0ff-697bca24afb5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkMTY5OWMxLWJhYWEtNDYzMi04YTJmLWM2MDliY2IzY2IwZVwvZGo3dXRydi03Nzg5MGQyYy0zMzIzLTQ2Y2MtYTBmZi02OTdiY2EyNGFmYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8eFTPsTs7tAO9lWWr78kZjyVWvwk4JD8tuh9TYCtCZc">
    </div>

    <nav-bar></nav-bar>
    <div class="wrapper">
      <slot></slot>
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

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);