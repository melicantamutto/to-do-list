(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(t,e,s){},12:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),j=(s(9),s(3)),o=(s(10),s(0)),r=function(){return Object(o.jsx)("div",{className:"select-container",children:Object(o.jsxs)("select",{name:"showTasks",className:"filter-button",id:"showTasks",children:[Object(o.jsx)("option",{value:"all",children:"Todas"}),Object(o.jsx)("option",{value:"done",children:"Completas"}),Object(o.jsx)("option",{value:"pending",children:"Incompletas"})]})})},l=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("input",{type:"text"}),Object(o.jsx)("button",{className:"add-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})})]})})},d=function(t){var e=t.setTasks,s=t.tasks,c=t.setInputText,n=t.inputText;return Object(o.jsxs)("form",{children:[Object(o.jsx)(l,{setTasks:e,tasks:s,setInputText:c,inputText:n}),Object(o.jsx)(r,{})]})},u=function(t){var e=t.task;return Object(o.jsxs)("li",{className:"task",id:e.id,children:[Object(o.jsx)("p",{className:"task-text ".concat(e.completed&&"completed"),children:e.text}),Object(o.jsx)("button",{className:"check-button ".concat(e.completed&&"red-button"),children:Object(o.jsx)("i",{className:"fas ".concat(e.completed?"fa-times":"fa-check")})}),Object(o.jsx)("button",{className:"delete-button",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.tasks,s=t.setTasks;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(o.jsx)(u,{task:t,tasks:e,setTasks:s},t.id)}))})})},x=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),s=e[0],n=e[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],l=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"To-do List"})}),Object(o.jsx)(d,{setTasks:n,tasks:s,setInputText:l,inputText:r}),Object(o.jsx)(b,{setTasks:n,tasks:s})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},9:function(t,e,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.bb6af679.chunk.js.map