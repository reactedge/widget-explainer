import {useMemo} from "react";
import { readWidgetConfig, type WidgetConfig} from "../ExplainerConfig.ts";

export function useWidgetConfig(
    host: HTMLElement
): WidgetConfig | null {
    return useMemo(() => {
        const baseConfig = readWidgetConfig(host);
        if (!baseConfig) return null;

        return baseConfig
    }, [host]);
}



