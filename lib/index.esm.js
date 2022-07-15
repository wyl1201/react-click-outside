import React, { useRef, useEffect } from 'react';

const ClickOutside = ({ children, onClickOutside, className, style, }) => {
    const wrapperRef = useRef(null);
    const isTouchRef = useRef(false);
    const handle = (e) => {
        if (e.type === "touchend")
            isTouchRef.current = true;
        if (e.type === "click" && isTouchRef.current)
            return;
        const el = wrapperRef.current;
        if (el && !el.contains(e.target))
            onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
    };
    useEffect(() => {
        document.addEventListener("touchend", handle, true);
        document.addEventListener("click", handle, true);
        return () => {
            document.removeEventListener("touchend", handle, true);
            document.removeEventListener("click", handle, true);
        };
    }, []);
    return (React.createElement("div", { ref: wrapperRef, className: className, style: style }, children));
};

export { ClickOutside as default };
