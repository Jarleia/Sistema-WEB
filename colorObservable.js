// ==================================================
// OBSERVABLE DE COR
// ==================================================
const colorObservable = {
  _subscribers: [],
  _color: "black",

  subscribe(fn) {
    this._subscribers.push(fn);
    fn(this._color);
  },

  setColor(newColor) {
    this._color = newColor;
    this._subscribers.forEach(fn => fn(newColor));
  }
};

// ==================================================
// COMPONENTE <color-text>
// ==================================================
class ColorText extends HTMLElement {
  constructor() {
    super();
    this._color = "black";
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        p {
          font-size: 20px;
          font-weight: bold;
          transition: color 0.3s ease;
        }
      </style>
      <p>Texto reativo!</p>
    `;

    this._text = this.shadowRoot.querySelector("p");
  }

  connectedCallback() {
    colorObservable.subscribe((newColor) => {
      this._color = newColor;
      this._text.style.color = this._color;
    });
  }
}

customElements.define("color-text", ColorText);

// ==================================================
// BOTÃO: ALTERAR COR
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnColor");

  btn.addEventListener("click", () => {
    const novaCor = colorObservable._color === "black" ? "red" : "black";
    colorObservable.setColor(novaCor);
  });
});
