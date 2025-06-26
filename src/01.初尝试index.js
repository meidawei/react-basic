import React from "react";
import ReactDOM from "react-dom/client";
const element = <div className="title" style={{ color: "red" }}>
    <span>hello world</span>
</div>;
// 创建真实DOMRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// 将React元素渲染到DOMRoot中
root.render(element);