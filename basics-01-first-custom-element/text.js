class Text extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const text = document.createElement('div');
    text.textContent = 'Here is we display text message';
    this.appendChild(text)
  }
}

customElements.define('b-text', Text);