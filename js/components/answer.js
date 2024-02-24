class Answer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
            <style>
                input,
                select {
                    margin: 0;
                    background: white;
                    font-family: inherit;
                    font-size: 110%;
                    text-align: center;
                    color: inherit;
                    padding: 0;
                    border: solid 1px #0003;
                    box-shadow: inset 0 1px 3px #0002;
                    border-radius: 5px;
                    min-width: 3em;
                }
                select:focus,
                input:focus {
                    box-shadow: var(--shadow);
                    position: relative;
                    z-index: 2;
                }
                select:hover,
                input:hover {
                    border-color: #0006;
                }
                input::placeholder {
                    color: var(--gray);
                }
                .is-right {
                    box-shadow: 0 0 0 1px var(--correct);
                    background: none;
                }
                .is-wrong {
                    box-shadow: 0 0 0 3px var(--error), var(--shadow);
                    color: var(--error);
                }
                .is-highlight {
                    background: rgba(255,255,0,0.5);
                }
                .answer {
                    position: relative;
                    margin: 0 .3em;
                    display: inline-block;
                }
                .message {
                    position: absolute;
                    left: 100%;
                    top: .2em;
                    font-size: 1.2em;
                    line-height: 1;
                }
            </style>
            <span class="answer">
                <span class="message"></span>
            </span>
        `;

    this.input = createInput(this);
    shadow.querySelector(".answer").prepend(this.input);
    this.message = shadow.querySelector(".message");
    this.input.addEventListener("focus", () => this.reset());

    if (this.hasAttribute("highlight")) {
      this.input.classList.add("is-highlight");
    }
  }

  validate() {
    const solution = this.innerHTML.trim();
    const value = this.input.value.trim();

    if (value.toLowerCase() === solution.toLowerCase()) {
      this.input.classList.add("is-right");
      this.input.classList.remove("is-wrong");
      this.message.innerHTML = "👍";
      return true;
    }

    this.input.classList.remove("is-right");
    this.input.classList.add("is-wrong");
    this.message.innerHTML = "👎";
    return false;
  }

  reset() {
    this.input.classList.remove("is-right", "is-wrong");
    this.message.innerHTML = "";
  }
}

customElements.define("e-answer", Answer);

function createInput(el) {
  if (el.getAttribute("options")) {
    const select = document.createElement("select");
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.label = el.getAttribute("placeholder") || "...";
    select.appendChild(placeholder);

    el.getAttribute("options").split(",").forEach((value) => {
      const option = document.createElement("option");
      option.label = value;
      option.value = value;
      select.appendChild(option);
    });

    if (el.hasAttribute("readonly")) {
      select.readOnly = true;
      select.disabled = true;
      select.value = el.innerHTML.trim();
    }

    return select;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.size = el.getAttribute("size") ||
    Math.max(el.innerHTML.trim().length, 7);
  input.placeholder = el.getAttribute("placeholder") || "...";
  if (el.hasAttribute("readonly")) {
    input.readOnly = true;
    input.disabled = true;
    input.value = el.innerHTML.trim();
  }
  return input;
}
