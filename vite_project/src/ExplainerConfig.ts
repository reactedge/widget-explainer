import {activity} from "./activity";
import {WIDGET_ID} from "./mountWidget.tsx";

export interface ExplainerIllustration {
    svg: string;        // inline SVG string OR URL
    ariaHidden?: true;  // default true, no captions in v1
}

export type SectionType = "friction" | "impact" | "neutral";

export interface SectionData {
    type: SectionType;
    title: string;
    items: string[];
}

export interface CardData {
    selector: string;
    title: string;
    summary: string;
    sections: SectionData[];
    closing: string;
    illustration: ExplainerIllustration;
    layout?: "left" | "right";
}

export interface WidgetConfig {
    data: CardData,
    binding: {
        trigger: string
    }
}

export function readWidgetConfig(hostElement: HTMLElement): WidgetConfig | null {
    const configScript = hostElement.querySelector<HTMLScriptElement>(
        'script[type="application/json"][data-config]'
    );

    if (!configScript) {
        throw new Error(`${WIDGET_ID} widget requires a <script data-config> block.`);
    }

    try {
        const parsed = JSON.parse(configScript.textContent || "{}");

        const triggerSelector = parsed.binding?.trigger;

        if (!triggerSelector) {
            activity('config', "Explainer: no trigger defined", {triggerSelector}, 'error');
            return null;
        }

        return Object.freeze(parsed);
    } catch {
        return null;
    }
}

export function resolveTrigger(selector: string): HTMLElement | null {
    return document.querySelector(selector);
}
