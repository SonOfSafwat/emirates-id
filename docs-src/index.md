---
layout: page.11ty.cjs
title: <emirates-id> ⌲ Home
---

# &lt;emirates-id>

`<emirates-id>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<emirates-id>` is just an HTML element. You can it anywhere you can use HTML!

```html
<emirates-id></emirates-id>
```

  </div>
  <div>

<emirates-id></emirates-id>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<emirates-id>` can be configured with attributed in plain HTML.

```html
<emirates-id name="HTML"></emirates-id>
```

  </div>
  <div>

<emirates-id name="HTML"></emirates-id>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<emirates-id>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;emirates-id&gt;</h2>
    <emirates-id .name=${name}></emirates-id>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;emirates-id&gt;</h2>
<emirates-id name="lit-html"></emirates-id>

  </div>
</section>
