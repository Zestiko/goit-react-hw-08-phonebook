"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{9318:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(2791),r=t(9434),s=t(439),i=t(1103),l=t(643),u=t(3329),c=function(){var e=(0,r.v9)(s.wt),n=(0,r.I0)(),t=(0,r.v9)(s.$2);return(0,a.useEffect)((function(){n((0,i.m$)())}),[n]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:e?(0,u.jsx)("div",{className:"loader",children:(0,u.jsx)(l.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}):t.map((function(e){var t=e.name,a=e.id,r=e.phone;return(0,u.jsxs)("li",{children:[t,": ",r,(0,u.jsx)("button",{type:"button",onClick:function(){return function(e){return n((0,i.ku)(e))}(a)},children:"delete"},a)]},a)}))})})},o=t(5984),d=t(1634),h=function(){var e=(0,r.v9)(d.hL),n=(0,r.I0)(),t=(0,o.x0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("label",{htmlFor:t,children:["Find contac by name",(0,u.jsx)("input",{type:"text",value:e,name:"filter",onChange:function(e){return n((0,d.Nj)(e.target.value))},id:t})]})})},m=t(9439),p=function(){var e=(0,a.useState)(""),n=(0,m.Z)(e,2),t=n[0],l=n[1],c=(0,a.useState)(""),d=(0,m.Z)(c,2),h=d[0],p=d[1],x=(0,r.v9)(s.A8),b=(0,r.I0)(),f=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":l(a);break;case"number":p(a);break;default:return}},j=(0,o.x0)(),v=(0,o.x0)();return(0,u.jsxs)("form",{onSubmit:function(e){var n,a;e.preventDefault(),x.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacs")):(n={name:(a={name:t,number:h}).name,number:a.number},b((0,i.G3)(n)),l(""),p(""))},children:[(0,u.jsxs)("label",{htmlFor:j,children:["Name",(0,u.jsx)("input",{id:j,onChange:f,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{htmlFor:v,children:["Number",(0,u.jsx)("input",{id:v,onChange:f,value:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contac"})]})},x=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(p,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(h,{}),(0,u.jsx)(c,{})]})}}}]);
//# sourceMappingURL=318.f1367389.chunk.js.map