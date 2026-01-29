import { mountWidget } from "./mountWidget";

class ExplainerWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

customElements.define("explainer-widget", ExplainerWidget);
