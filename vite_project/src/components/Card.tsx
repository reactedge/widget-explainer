interface CardProps {
    title: string;
    notes: string;
    illustration?: string;
    layout?: "left" | "right";
}

export function Card({
         title,
         notes,
         illustration,
         layout = "left",
     }: CardProps) {
    const layoutClass =
        layout === "right" ? "re-layout-right" : "re-layout-left";

    return (
        <div className={`re-explainer-card ${layoutClass}`}>
            {illustration && (
                <div className="re-explainer-illustration" aria-hidden="true">
                    <img
                        src={illustration}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            )}

            <div className="re-explainer-content">
                <h3 className="re-explainer-title">{title}</h3>
                <div
                    className="re-explainer-notes"
                    dangerouslySetInnerHTML={{ __html: notes }}
                />
            </div>
        </div>
    );
}
