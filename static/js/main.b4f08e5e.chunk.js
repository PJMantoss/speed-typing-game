(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(5),a=n.n(s),o=(n(11),n(2));var u=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(15),s=Object(o.a)(r,2),a=s[0],u=s[1],j=Object(i.useState)(!1),d=Object(o.a)(j,2),b=d[0],l=d[1],h=Object(i.useState)(0),f=Object(o.a)(h,2),g=f[0],O=f[1],x=Object(i.useRef)(null);Object(i.useEffect)((function(){b&&a>0?setTimeout((function(){u((function(e){return e-1}))}),1e3):0===a&&m()}),[a,b]);var m=function(){l(!1),O(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(n))};return{textBoxRef:x,text:n,handleChange:function(e){var t=e.target.value;c(t)},isTimeRunning:b,timeRemaining:a,startGame:function(){l(!0),c(""),O(0),u(15),x.current.disabled=!1,x.current.focus()},wordCount:g}};n(4);var j=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Speed Typing Game"})}),Object(c.jsx)("p",{children:"Copyright 2020"}),Object(c.jsxs)("div",{id:"love",children:[Object(c.jsx)("span",{children:"Made With"}),Object(c.jsx)("img",{src:"https://img.icons8.com/dusk/64/000000/like.png",alt:"love"}),Object(c.jsxs)("span",{children:["by ",Object(c.jsx)("a",{href:"https://github.com/PJMantoss",target:"_blank",rel:"noreferrer",children:"Mantoss"})]})]})]})};var d=function(){var e=u(),t=e.textBoxRef,n=e.text,i=e.handleChange,r=e.isTimeRunning,s=e.timeRemaining,a=e.startGame,o=e.wordCount;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"How fast do you type?"}),Object(c.jsx)("textarea",{onChange:i,value:n,disabled:!r,ref:t}),Object(c.jsxs)("h4",{children:["Time remaining: ",s]}),Object(c.jsx)("button",{onClick:a,disabled:r,children:"Start"}),Object(c.jsxs)("h1",{children:["Word Count: ",o]}),Object(c.jsx)(j,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),b()},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b4f08e5e.chunk.js.map