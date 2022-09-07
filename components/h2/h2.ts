export function init() {
  class H2 extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.display = "block";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "38px";
      this.style.fontWeight = "700";
      this.style.color = "black";
      this.style.margin = "0px";
    }
  }
  customElements.define("custom-h2", H2);
}
