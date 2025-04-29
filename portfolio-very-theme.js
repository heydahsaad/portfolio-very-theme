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
    this.logo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p-w4nlvFtTYR6Si0UrQMugHaBf%26pid%3DApi&f=1&ipt=896ba85b7235c52fa81858a963d982777d4a1ff21df9f4fa75b10dfbbfb58a26&ipo=images";

    this.bio = "";
    this.headshot = "";
    this.mission = "";
    this.activeSection = "about";
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
      logo: {type:String},

      bio: { type: String },
      headshot: { type: String },
      mission: { type: String },
 
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
          font-family: var(--ddd-font-navigation); */
          /* background-color: var(--portfolio-primary); */
          /* color: var(--portfolio-text); */
           min-height: 100vh;
        }

        .header{
          /* padding:100px; */
          /* margin:50px; */
          height:200px;
          background-color: red;
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


        /* banner a {
          border: 2px solid green;
          padding: 10px;
          display: inline-block;
          margin: 10px;
          background-color: green;
          color: white;
          text-decoration: none;
        }

        banner {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #00000066;
          position: fixed;
          top: 100px;
          left: 0;
          height: 100px;
          right: 0;
          z-index: 1;
        } */

        scroll-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000px;
        }

        /* .logo {
          width: 60px;
          height: 60px;
          margin-right: var(--ddd-spacing-2);
        }
        .site-title {
          font-size: var(--ddd-font-size-3xl);
          margin: 0;
          color: var(--portfolio-text);
        }
        .nav {
          display: flex;
          justify-content: center;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-2);
          background-color: var(--portfolio-primary);
        }
        .nav-item {
          color: var(--portfolio-text);
          text-decoration: none;
          padding: var(--ddd-spacing-2);
          cursor: pointer;
        }
        .nav-item:hover,
        .nav-item.active {
          color: var(--portfolio-accent);
        }
        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--ddd-spacing-4);
        }
        .about-section {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--ddd-spacing-4);
          align-items: start;
        }
        .headshot {
          width: 100%;
          border-radius: var(--ddd-radius-md);
        }
        .bio {
          font-size: var(--ddd-font-size-m);
          line-height: 1.6;
        }
        .mission {
          margin-top: var(--ddd-spacing-4);
          font-style: italic;
        }
        .section-title {
          font-size: var(--ddd-font-size-2xl);
          color: var(--portfolio-accent);
          margin-bottom: var(--ddd-spacing-4);
        } */
      `
    ];
  }

  // _handleNavClick(section) {
  //   this.activeSection = section;
  // }

  // Lit render the HTML
  render() {
    return html`
    <!-- <nav-bar></nav-bar> -->
    <scroll-button></scroll-button>
    <div class="header">
      <img src=${this.logo} class="logo">
    </div>
    <div><nav-bar .titles="${this.sectionTitles}"></nav-bar></div>
    <div class="wrapper">
      <slot></slot>
    </div>
      <!-- <banner>
          <a href="/login.php" tabindex="-1" class="menu-item menu-login"><button>Login</button></a>
          <a href="#section-2" tabindex="-1" class="menu-item"><button data-target="section-2">About</button></a>
          <a href="#section-3" tabindex="-1" class="menu-item"><button data-target="section-3">Research</button></a>
          <a href="#section-4" tabindex="-1" class="menu-item"><button data-target="section-4">Presentations & Publications</button></a>
          <a href="#section-5" tabindex="-1" class="menu-item"><button data-target="section-5">Professional Development</button></a>
          <a href="#section-5" tabindex="-1" class="menu-item"><button data-target="section-6">Contact</button></a>
      </banner> -->
      <!-- <div class="header">
        <simple-img
          class="logo"
          src="assets/logo.svg"
          alt="Portfolio Logo">
        </simple-img>
        <h1 class="site-title">${this.t.title}</h1>
      </div> -->
      
      <!-- <nav class="nav">
        <a class="nav-item ${this.activeSection === 'about' ? 'active' : ''}"
           @click="${() => this._handleNavClick('about')}">${this.t.about}</a>
        <a class="nav-item ${this.activeSection === 'research' ? 'active' : ''}"
           @click="${() => this._handleNavClick('research')}">${this.t.research}</a>
        <a class="nav-item ${this.activeSection === 'presentations' ? 'active' : ''}"
           @click="${() => this._handleNavClick('presentations')}">${this.t.presentations}</a>
        <a class="nav-item ${this.activeSection === 'development' ? 'active' : ''}"
           @click="${() => this._handleNavClick('development')}">${this.t.development}</a>
        <a class="nav-item ${this.activeSection === 'contact' ? 'active' : ''}"
           @click="${() => this._handleNavClick('contact')}">${this.t.contact}</a>
      </nav> -->


      <main class="content">
      <!-- <div class="red">
        <h2>About</h2>
      </div> -->
      <!-- <div class="blue">
        <h2>Research</h2>
      </div>
      <a name="3"></a>
      <div class="green">
        <h2>Presentations & Publications</h2>
      </div>
      <div class="purple">
        <h2>Professional Development</h2>
      </div>
      <div class="brown">
        <h2>Funsies</h2>
      </div> -->

        <!-- ${this.activeSection === 'about' ? html`
          <section class="about-section">
            <div>
              <simple-img
                class="headshot"
                src="${this.headshot || 'assets/default-headshot.jpg'}"
                alt="Professional headshot">
              </simple-img>
            </div>
            <div>
              <h2 class="section-title">${this.t.about}</h2>
              <div class="bio">${this.bio || 'Add your professional bio here...'}</div>
              <div class="mission">${this.mission || 'Add your mission statement or research interests here...'}</div>
            </div>
          </section>
        ` : ''}
        
        ${this.activeSection === 'research' ? html`
          <section>
            <h2 class="section-title">${this.t.research}</h2>
            <slot name="research"></slot>
          </section>
        ` : ''}
        
        ${this.activeSection === 'presentations' ? html`
          <section>
            <h2 class="section-title">${this.t.presentations}</h2>
            <slot name="presentations"></slot>
          </section>
        ` : ''}
        
        ${this.activeSection === 'development' ? html`
          <section>
            <h2 class="section-title">${this.t.development}</h2>
            <slot name="development"></slot>
          </section>
        ` : ''}
        
        ${this.activeSection === 'contact' ? html`
          <section>
            <h2 class="section-title">${this.t.contact}</h2>
            <slot name="contact"></slot>
          </section>
        ` : ''} -->
      </main>
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