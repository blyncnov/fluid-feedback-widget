import { createElement } from "react";

class FluidWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

createElement("fluid-widget", FluidWidget);
