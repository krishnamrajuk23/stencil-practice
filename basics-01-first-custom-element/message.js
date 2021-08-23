class Message extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const message = document.createElement('div');
    message.textContent = "message content";
    this.appendChild(message);
  }
}

customElements.define('b-message', Message);