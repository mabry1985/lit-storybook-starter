import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-starter')
export class LitStarter extends LitElement {
  @property() title: string = 'My app';

  static styles = css`
    :host {
      align-items: center;
      background-color: var(--lit-starter-background-color);
      color: #1a2b42;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      max-width: 100vw;
      min-height: 100vh;
      text-align: center;
    }

    main {
      background: white;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      height: 60vh;
      justify-content: center;
      justify-self: center;
      width: 60vw;
    }

    .title {
      font-size: 3rem;
    }

    .footer {
      font-size: 0.8rem;
      justify-self: flex-end;
      margin-top: 3rem;
    }
  `;

  render() {
    return html`
      <main>
        <h1 class="title">${this.title}</h1>

        <p>Edit <code>src/LitStarter.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
        <p class="footer">Generated with OpenWC</p>
      </main>
    `;
  }
}
