(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),l=n.n(s),i=(n(14),n(5)),r=n(2),u=n(7),j=(n(15),n(0)),o=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),u=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),s(""),o(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2020-01-01",max:"2023-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"new-expense__actions",children:Object(j.jsx)("button",{type:"submit",children:"Add Expense"})})]})},d=(n(17),function(e){return Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsx)(o,{onSaveExpenseData:function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})}),b=(n(18),function(e){return Object(j.jsx)("div",{className:"card ".concat(e.className),children:e.children})}),x=(n(19),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:n}),Object(j.jsx)("div",{className:"expense-date__day",children:a})]})}),O=(n(20),function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(x,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),h=(n(21),function(e){return 0===e.expenses.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.expenses.map((function(e){return Object(j.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),v=(n(22),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"})]})]})})}),p=(n(23),n(9)),m=(n(24),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),f=(n(25),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),_=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(p.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(f,{dataPoints:n})},g=function(e){var t=Object(a.useState)("2021"),n=Object(r.a)(t,2),c=n[0],s=n[1],l=e.expenses.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsx)("div",{children:Object(j.jsxs)(b,{className:"expenses",children:[Object(j.jsx)(v,{selected:c,onChangeFilter:function(e){s(e)}}),Object(j.jsx)(_,{expenses:l}),Object(j.jsx)(h,{expenses:l})]})})},N=[{id:"1",title:"Toilet Paper",amount:94.12,date:new Date(2021,7,14)},{id:"2",title:"Game Of Thrones",amount:799.49,date:new Date(2021,5,12)},{id:"3",title:"Car Insurance",amount:294.67,date:new Date(2022,6,28)},{id:"4",title:"New Desk (Wooden)",amount:450,date:new Date(2023,8,12)}],S=function(){var e=Object(a.useState)(N),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(g,{expenses:n})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.c302fb66.chunk.js.map