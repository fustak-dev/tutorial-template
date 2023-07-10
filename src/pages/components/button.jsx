export function Button({ children, ...props }) {
    const buttonAttrs = [
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "name",
        "popovertarget",
        "popovertargetaction",
        "type",
        "value",
    ];

    const buttonConfig = {
        tag: "button",
        type: "button",
        attributes: buttonAttrs,
        backgroundColor: "#1f2937",
        borderRadius: ".5rem",
        color: "#fff",
        cursor: "pointer",
        fontSize: ".875rem",
        fontWeight: "500",
        lineHeight: "1.25rem",
        minHeight: "48px",
        paddingLeft: "24px",
        paddingRight: "24px",
        style: {
            ":focus": {
                background: "#1f2937",
                color: "#fff",
            },
            ":hover": {
                background: "#1f2937",
                color: "#fff",
            },
        },
        ...props,
    };
    
    return <U {...buttonConfig}>{children}</U>;
}