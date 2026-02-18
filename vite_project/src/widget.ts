import { mountWidget } from "./mountWidget";

class ExplainerWidget extends HTMLElement {
    connectedCallback() {
        mountWidget(this);
    }
}

if (!customElements.get("explainer-widget")) {
    customElements.define("explainer-widget", ExplainerWidget);
}