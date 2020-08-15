import { fixture, html } from '@open-wc/testing';

import { EmiratesId } from '../emirates-id.js';

const assert = chai.assert;

suite('emirates-id', () => {
  test('is defined', () => {
    const el = document.createElement('emirates-id');
    assert.instanceOf(el, EmiratesId);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<emirates-id></emirates-id>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<emirates-id data-name="Test"></emirates-id>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<emirates-id></emirates-id>`)) as EmiratesId;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
