(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(7),s=a(6),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))})})),f=function(){var e=Object(o.useState)(O),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(r.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(!1),b=Object(r.a)(j,2),f=b[0],p=b[1],x=Object(o.useState)(0),v=Object(r.a)(x,2),S=v[0],y=v[1],N=Object(o.useState)(!1),I=Object(r.a)(N,2),g=I[0],C=I[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),p(!d.trim()),C(!S),d.trim()&&S){var t,i={id:(t=a,Math.max.apply(Math,Object(s.a)(t.map((function(e){return e.id})))))+1,title:d,completed:!1,userId:S,user:l.find((function(e){return e.id===S}))};n((function(e){return[].concat(Object(s.a)(e),[i])})),u(""),y(0)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title:\xa0"}),Object(m.jsx)("input",{id:"title",name:"title",type:"text",value:d,placeholder:"Enter a title","data-cy":"titleInput",onChange:function(e){u(e.target.value),p(!1)}}),f&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"userSelect",children:"User:\xa0"}),Object(m.jsxs)("select",{id:"userSelect","data-cy":"userSelect",value:S,onChange:function(e){y(+e.target.value),C(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),g&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8c3d361c.chunk.js.map