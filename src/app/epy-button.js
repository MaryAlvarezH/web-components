class EpyButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host {
          --orange: #E67E22;
          --space: 1.5em;
        }
        .btn-container {
          border: 2px dashed var(--orange);
          padding: var(--space);
          text-align: center;
        }
        .btn {
          background-color: var(--orange);
          border: 0;
          border-radius: 5px;
          color: white;
          padding: var(--space);
          text-transform: uppercase;
        }
      </style>
      <div class="btn-container">
        <button class="btn">Comprar Ahora</button>
      </div>
    `;
  }
}
customElements.define("epy-button", EpyButton);
