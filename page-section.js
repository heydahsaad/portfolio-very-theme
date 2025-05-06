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
 * @element page-section
 */
export class PageSection extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "page-section";
  }

  constructor() {
    super();
    this.title = "";

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
          display:flex;
          flex-wrap: wrap;
        }

        .wrapper{
          padding: 20px;
          width: 100vw;
          min-height: 1000px;
          min-width: 790px;
          background: var(--ddd-theme-primary);
          color: var(--portfolio-text);
          box-sizing: border-box;
          /* overflow-x: hidden; */
        }

        .title{
          padding:5px;
          margin:10px;
          color: var(--portfolio-text);
          text-align: center;
        }
      `
    ];
  }


  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <h1 class="title">${this.title}</h1>
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

globalThis.customElements.define(PageSection.tag, PageSection);