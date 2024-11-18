import{r as p,u as x,j as e,d as b,e as j,C as y,a as g,c as C,h as f,i as a,k as t,l as d}from"./index-C023Crk4.js";import{C as c}from"./CInputGroupText-D7w7j52A.js";import{C as N}from"./CFormSelect-Dl0c8B8w.js";const L=()=>{const[s,r]=p.useState({businessName:"",businessType:"",otherBusinessType:"",addressLine1:"",addressLine2:"",townCity:"",county:"",postcode:"",telephone:"",logo:""}),u=x(),n=l=>{const{name:i,value:o}=l.target;r({...s,[i]:o})},h=l=>{if(l.target.files){const i=l.target.files[0],o=new FileReader;o.onloadend=()=>{o.result&&(localStorage.setItem("logo",o.result.toString()),r({...s,logo:o.result.toString()}))},o.readAsDataURL(i)}},m=l=>{l.preventDefault(),console.log(s),alert("Onboarding form submitted successfully!"),u("/onboarding/1")};return e.jsx("div",{className:"bg-custom-yellow min-vh-100 d-flex flex-row align-items-center",children:e.jsx(b,{children:e.jsx(j,{className:"justify-content-center",children:e.jsx(y,{md:9,lg:7,xl:6,children:e.jsx(g,{className:"mx-4",children:e.jsx(C,{className:"p-4",children:e.jsxs(f,{onSubmit:m,children:[e.jsx("h1",{children:"Welcome to Social Duck!"}),e.jsx("p",{className:"text-body-secondary",children:e.jsx("strong",{children:"Congratulations on creating your account!"})}),e.jsx("p",{className:"text-body-secondary",children:"You are now ready to begin the onboarding process. Please complete the following forms to provide us with details about your business. Once completed, we will automatically set up your website and marketing management hub."}),e.jsx("p",{className:"text-body-secondary",children:"This process typically takes around 10 minutes. Let's get started!"}),e.jsx("h4",{children:"First some basic details about your business"}),e.jsx("br",{}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"What is the name of your business?",type:"text",id:"businessName",name:"businessName",value:s.businessName,onChange:n,required:!0})}),e.jsxs(a,{className:"mb-3",children:[e.jsx(c,{as:"label",htmlFor:"inputGroupSelect01",children:"What is the type of business?"}),e.jsxs(N,{id:"businessType",name:"businessType",value:s.businessType,onChange:n,required:!0,children:[e.jsx("option",{children:"Choose..."}),e.jsx("option",{value:"pub",children:"Pub"}),e.jsx("option",{value:"bar",children:"Bar"}),e.jsx("option",{value:"nightclub",children:"Nightclub"}),e.jsx("option",{value:"social_club",children:"Social Club"}),e.jsx("option",{value:"cafe",children:"Cafe"}),e.jsx("option",{value:"restaurant",children:"Restaurant"}),e.jsx("option",{value:"deli/sandwich_shop",children:"Deli/Sandwich Shop"})]})]}),e.jsxs(a,{className:"mb-3",children:[e.jsx(t,{type:"file",id:"logo",name:"logo",onChange:h,required:!0}),e.jsx(c,{as:"label",htmlFor:"inputGroupFile02",children:"Upload Logo"})]}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"What is the first line of the business's address?",type:"text",id:"addressLine1",name:"addressLine1",value:s.addressLine1,onChange:n,required:!0})}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"What is the second line of the business's address (f any)?",type:"text",id:"addressLine2",name:"addressLine2",value:s.addressLine2,onChange:n})}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"What village, town or city is your premises located?",type:"text",id:"townCity",name:"townCity",value:s.townCity,onChange:n})}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"County",type:"text",id:"county",name:"county",value:s.county,onChange:n})}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"Postcode",type:"text",id:"postcode",name:"postcode",value:s.postcode,onChange:n})}),e.jsx(a,{className:"mb-3",children:e.jsx(t,{placeholder:"Telephone Number",type:"text",id:"telephone",name:"telephone",value:s.telephone,onChange:n})}),e.jsxs("div",{className:"d-grid",children:[e.jsx(d,{type:"submit",className:"button",children:"Continue"}),e.jsx("br",{}),e.jsx(d,{color:"secondary",children:"Skip for now"})]})]})})})})})})})};export{L as default};