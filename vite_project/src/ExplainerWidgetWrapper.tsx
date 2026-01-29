import {useWidgetConfig} from "./hooks/useWidgetConfig.ts";
import {ExplainerWidget} from "./components/ExplainerWidget.tsx";
import {activity} from "./activity";

type Props = {
    host: HTMLElement;
};

export const ExplainerWidgetWrapper = ({ host }: Props) => {
    const config = useWidgetConfig(host);

    if (!config) {
        activity('failed-mount', '[ContactUs] Widget is not correctly configured', { host }, 'warn');
        return null;
    }

    return <ExplainerWidget config={config} />
};

