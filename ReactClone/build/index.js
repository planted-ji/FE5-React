import { createElement, render } from "./react.js";
function Title() {
  return /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "hello react title");
}
render();