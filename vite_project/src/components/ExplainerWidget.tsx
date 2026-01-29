import {useRef, useState} from "react";
import {type WidgetConfig} from "../ExplainerConfig";
import {Card} from "./Card";
import {useExplainerTrigger} from "../hooks/useExplainerTrigger.tsx";
import {useExplainerDismiss} from "../hooks/useExplainerDismiss.tsx";

type Props = {
    config: WidgetConfig
};

export const ExplainerWidget = ({ config }: Props) => {
    const [open, setOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useExplainerTrigger(config.selector, setOpen);
    useExplainerDismiss(open, cardRef, setOpen);

    if (!open) {
        return null;
    }

    return <div ref={cardRef} role="tooltip">
        <Card title={config.title}
           notes={config.notes}
           illustration={config.illustration?.svg}
           layout={config.layout}
        />
    </div>
};

