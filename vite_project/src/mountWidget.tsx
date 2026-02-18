import {explainerStyles} from "./styles/explainer.styles";
import {injectStyles} from "./lib/style";
import {ExplainerWidgetWrapper} from "./ExplainerWidgetWrapper";
import {fallback} from "./lib/fallback";
import {createRoot} from "react-dom/client";

export const WIDGET_ID = 'explainer';

export function mountWidget(hostElement: HTMLElement) {
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of explainerStyles) {
        injectStyles(shadow, css);
    }

    let mountNode = shadow.querySelector('[data-widget-root]');
    if (!mountNode) {
        mountNode = document.createElement('div');
        mountNode.setAttribute('data-widget-root', '');
        shadow.appendChild(mountNode);
    }

    const element = (
        <ExplainerWidgetWrapper host={hostElement} />
    );

    createRoot(mountNode).render(
        <div className="reactedge-explainer">
            {element}
        </div>);

    fallback(hostElement)
}
