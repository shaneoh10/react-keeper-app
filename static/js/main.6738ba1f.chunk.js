(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(5),j=n.n(r),a=n(43),i=n(22),o=n(35),s=n.n(o),l=n(2);var u=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(s.a,{})," Keeper"]})})},b=(new Date).getFullYear();var O=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \xa9 ",b]})})},d=n(41),h=n.n(d);var x=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(l.jsx)(h.a,{})})]})},f=n(26),p=n(34),v=n(42),m=n.n(v),g=n(75),k=n(76);var C=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],j=n[1],a=Object(c.useState)({title:"",content:""}),o=Object(i.a)(a,2),s=o[0],u=o[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,c))}))}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[r&&Object(l.jsx)("input",{name:"title",onChange:b,value:s.title,placeholder:"Title"}),Object(l.jsx)("textarea",{onClick:function(){j(!0)},name:"content",onChange:b,value:s.content,placeholder:"Take a note...",rows:r?3:1}),Object(l.jsx)(k.a,{in:r,children:Object(l.jsx)(g.a,{onClick:function(t){e.onAdd(s),u({title:"",content:""}),t.preventDefault()},children:Object(l.jsx)(m.a,{})})})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(C,{onAdd:function(e){r((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(x,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(l.jsx)(O,{})]})};j.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.6738ba1f.chunk.js.map