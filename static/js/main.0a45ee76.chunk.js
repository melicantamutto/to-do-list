(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{22:function(t,e,c){},23:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(6),s=c.n(n),a=c(15),o=c.n(a),i=(c(22),c(9)),r=c(11),l=(c(23),c(2)),u=function(t){var e=t.setStatus;return Object(l.jsx)("div",{className:"select-container",children:Object(l.jsxs)("select",{name:"showTasks",className:"filter-button",id:"showTasks",onChange:function(t){return e(t.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"Todas"}),Object(l.jsx)("option",{value:"done",children:"Completas"}),Object(l.jsx)("option",{value:"pending",children:"Incompletas"})]})})},d=c(17),j=c(16),b=(c(27),j.a.initializeApp({apiKey:"AIzaSyD8tonH-R-L5YmiK6Mv3ojGZSdF3Rtgs0g",authDomain:"to-do-list-d76aa.firebaseapp.com",projectId:"to-do-list-d76aa",storageBucket:"to-do-list-d76aa.appspot.com",messagingSenderId:"215976367676",appId:"1:215976367676:web:183587c07f9705dc361539"}).firestore()),f=function(t){var e=t.setTasks,c=t.tasks,n=t.setInputText,s=t.inputText;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{type:"text",onChange:function(t){return n(t.target.value)},value:s}),Object(l.jsx)("button",{disabled:0===s.trim().length,onClick:function(t){t.preventDefault();var a={text:s,completed:!1,id:1e4*Math.random()};e([].concat(Object(d.a)(c),[a])),function(t){b.collection("tasks").add(t).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}(a),n("")},className:"add-button",type:"submit",children:Object(l.jsx)("i",{className:"fas fa-plus-square"})})]})})},p=function(t){var e=t.setTasks,c=t.tasks,n=t.setInputText,s=t.inputText,a=t.setStatus;return Object(l.jsxs)("form",{children:[Object(l.jsx)(f,{setTasks:e,tasks:c,setInputText:n,inputText:s}),Object(l.jsx)(u,{setStatus:a})]})},m=function(t){var e=t.task;return Object(l.jsxs)("li",{className:"task",id:e.id,children:[Object(l.jsx)("p",{className:"task-text ".concat(e.completed&&"completed"),children:e.text}),Object(l.jsx)("button",{onClick:function(){return t=e,void b.collection("tasks").doc(t.id).set(Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed})).then((function(){console.log("Document successfully written!")})).catch((function(t){console.error("Error writing document: ",t)}));var t},className:"check-button ".concat(e.completed&&"red-button"),children:Object(l.jsx)("i",{className:"fas ".concat(e.completed?"fa-times":"fa-check")})}),Object(l.jsx)("button",{onClick:function(){b.collection("tasks").doc(e.id).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(t){console.error("Error removing document: ",t)}))},className:"delete-button",children:Object(l.jsx)("i",{className:"fas fa-trash"})})]})},h=function(t){var e=t.filteredTasks;return Object(l.jsx)("div",{className:"todo-container",children:Object(l.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(l.jsx)(m,{task:t},t.id)}))})})},O=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),u=o[0],d=o[1],j=Object(n.useState)("all"),f=Object(r.a)(j,2),m=f[0],O=f[1],x=Object(n.useState)([]),k=Object(r.a)(x,2),v=k[0],g=k[1];return Object(n.useEffect)((function(){var t=[];b.collection("tasks").get().then((function(e){e.forEach((function(e){t.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),s(t)}))}),[c]),Object(n.useEffect)((function(){!function(){switch(m){case"done":g(c.filter((function(t){return!0===t.completed})));break;case"pending":g(c.filter((function(t){return!1===t.completed})));break;default:g(c)}}()}),[c,m]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"To-do List"})}),Object(l.jsx)(p,{setTasks:s,tasks:c,setInputText:d,inputText:u,setStatus:O}),Object(l.jsx)(h,{filteredTasks:v})]})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0a45ee76.chunk.js.map