class Layout extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const layout = this.getAttribute("type") || "grid";

    shadow.innerHTML = `
            <style>
                .type-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: .5em;
                }
            </style>
            <div class="type-${layout}">
                <slot></slot>
            </div>
        `;

    const button = shadow.querySelector("button");

    button?.addEventListener(
      "click",
      () =>
        this.ownerDocument.querySelectorAll("e-answer").forEach((el) =>
          el.validate()
        ),
    );
  }
}

customElements.define("e-layout", Layout);
