'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ClickOutside = ({ children, onClickOutside, className, style, }) => {
    const wrapperRef = React.useRef(null);
    const isTouchRef = React.useRef(false);
    const handle = (e) => {
        if (e.type === "touchend")
            isTouchRef.current = true;
        if (e.type === "click" && isTouchRef.current)
            return;
        const el = wrapperRef.current;
        if (el && !el.contains(e.target))
            onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside(e);
    };
    React.useEffect(() => {
        document.addEventListener("touchend", handle, true);
        document.addEventListener("click", handle, true);
        return () => {
            document.removeEventListener("touchend", handle, true);
            document.removeEventListener("click", handle, true);
        };
    }, []);
    return (React__default["default"].createElement("div", { ref: wrapperRef, className: className, style: style }, children));
};

module.exports = ClickOutside;
