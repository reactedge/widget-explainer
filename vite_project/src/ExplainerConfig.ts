export interface ExplainerIllustration {
    svg: string;        // inline SVG string OR URL
    ariaHidden?: true;  // default true, no captions in v1
}

export interface WidgetConfig {
    selector: string;
    title: string;
    notes: string; // constrained HTML
    illustration?: ExplainerIllustration;
    layout?: "left" | "right";
}

interface SystemConfig {
    widgets?: Record<string, WidgetConfig>;
}

export function readWidgetConfig(hostElement: HTMLElement): WidgetConfig | null {
    const root = document.getElementById('reactedge-config');

    if (!root?.textContent) {
        throw new Error('ReactEdge: reactedge-config not found');
    }

    const configKey = hostElement.getAttribute("config-key");
    if (!configKey) {
        throw new Error("ReactEdge: missing config-key on explainer widget");
    }

    let config: SystemConfig;

    try {
        config = JSON.parse(root.textContent);
    } catch {
        throw new Error("ReactEdge: reactedge-config contains invalid JSON");
    }

    const widgetConfig = config.widgets?.[configKey];

    // Config missing → silent no-op (demo safe)
    if (!widgetConfig) {
        return null;
    }

    return Object.freeze(widgetConfig);
}

export function resolveTrigger(selector: string): HTMLElement | null {
    return document.querySelector(selector);
}
