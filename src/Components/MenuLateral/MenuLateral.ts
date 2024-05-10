import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IObjectMenu } from "../../Interfaces/IObjectMenu";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { stylesShared } from "../../styles";
@customElement('menu-lateral')
export class MenuLateral extends LitElement{
    static styles = [stylesShared,css`
        :host {
          display: block;
        }
        .transition-close {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
        .transition-close.closed {
          opacity: 0;
        }
    `];
    @property({ type: Boolean }) open = false;
    @property({ type: Boolean }) closed = false;
    @property({ type: Array<IObjectMenu> }) list = [];

    __closeMenu() {
        this.closed = true;
        setTimeout(() => {
        this.dispatchEvent(new CustomEvent('close-menu', {
            bubbles: true,
            composed: true
        }));
        this.closed = false;
      }, 300);
    }

    __clickItem(id: string) {
      const item = this.list.find((item: IObjectMenu) => item.id === id);
      this.dispatchEvent(new CustomEvent('click-item', {
        detail: item,
        bubbles: true,
        composed: true
      }));
    }

    render() {
      if(this.open){
        return html`
        <section class="${this.closed ? 'card transition-close closed' : 'card transition-close'}">
        <div style="text-align:end; color:#6e6e6e">
          <svg  @click=${this.__closeMenu} style="cursor:pointer" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </div>
          <h1>Menu Lateral</h1>
          <div class="item-list" style="user-select:none">
            ${this.list.map((item : IObjectMenu) => html`
              <div class="item-section" @click=${()=> this.__clickItem(item.id)} >
                <div class="flex">
                  <div class="flex">${ unsafeHTML(item.icon)}</div>
                  <div class="align-self-center" style="margin-left:5px">${item.text}</div>
                </div>
                <div style="display:flex">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            `)}
          </div>
        </section>
        `;
      }
    }
}
