class Tip extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    
    shadow.innerHTML = `
            <style>
                :host {
                  position: relative;
                }
                .tip {
                    position: absolute;
                    bottom: calc(100% + .5em);
                    left: 0;
                    z-index: 1;
                    background: color-mix(in srgb, var(--background), black 5%);
                    border: solid 1px color-mix(in srgb, var(--background), black 20%);
                    box-shadow: 0 0 3px #0002;
                    border-radius: 5px;
                    padding: .5em;
                    width: 20ch;
                    max-width: max-content;
                    font-size: 1rem;
                }
                button {
                    background: none;
                    border: none;
                    padding: .5em;
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                    border-radius: 50%;
                    color: var(--primary);
                }
                button[aria-expanded="true"] {
                    background: #0001;
                }
                svg {
                    width: 1.5em;
                    height: 1.5em;
                    fill: currentColor;
                    display: block;
                }
            </style>
            <div class="tip" hidden>
              <slot></slot>
            </div>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path></svg>
            </button>
        `;
    const button = shadow.querySelector("button");
    const tip = shadow.querySelector(".tip");

    let clicked = false;

    button.addEventListener("click", () => {
      clicked = !clicked;
      tip.hidden = !clicked;
      button.setAttribute("aria-expanded", clicked);
    });

    this.addEventListener("mouseenter", () => {
      if (!clicked) {
        tip.hidden = false;
      }
    });
    this.addEventListener("mouseleave", () => {
      if (!clicked) {
        tip.hidden = true;
      }
    });
  }
}

customElements.define("e-tip", Tip);
