import IMask from 'imask';
import { customElement, html, LitElement } from 'lit-element';

/**
 * Emirates Id Element
 */
@customElement('emirates-id')
export class EmiratesId extends LitElement {



  connectedCallback() {
    super.connectedCallback()
    let mask = IMask(this.shadowRoot?.activeElement as HTMLElement, {
      mask: '{784}-0000-0000000-0',
    });
    console.log(mask)
  }
  get separator() {
    return;
    //return html`&hyphen;`;
  }
  get uaeISO3166Numeric() {
    return html` <input type="tel" size="3" readonly value="784" />`;
  }
  get year() {
    return html` <input type="tel" size="4" maxlength="4" value="" />`;
  }

  get randomNumber() {
    return html`<input type="tel" size="7" maxlength="7" value="" />`;
  }

  get checkDigit() {
    return html`<input type="tel" size="1" maxlength="1" value="" />`;
  }

  render() {
    return html`
      <input  type="tel" size="15" maxlength="15" value=""  />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'emirates-id': EmiratesId;
  }
}
