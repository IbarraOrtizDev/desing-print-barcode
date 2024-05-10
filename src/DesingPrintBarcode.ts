import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { IObjectMenu } from './Interfaces/IObjectMenu';
import './Components/MenuLateral/MenuLateral';
export class DesingPrintBarcode extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--desing-print-barcode-text-color, #000);
    }
    .content{
      display:flex;
    }
  `;
  @property({ type: Array<IObjectMenu> }) menuList = [];
  @property({ type: Boolean }) open = true;

  __clickItem(item: CustomEvent) {
    console.log(item.detail);
  }

  render() {
    return html`
      <h1>Desing Print Barcode <button @click=${()=> this.open= true }>Open ${this.open}</button></h1>
      <article class="content" >
        <section>
          <menu-lateral .list=${this.menuList} .open=${this.open} @click-item=${this.__clickItem} @close-menu=${()=> this.open = false } ></menu-lateral>
        </section>
        <section>
          <section>
            <h1>Header</h1>
          </section>
          <section>
            <h1>Content</h1>
          </section>
        </section>
      </article>
    `;
  }
}
