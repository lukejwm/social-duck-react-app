import{r as E,_ as I,R as i,n as o,f as d,g as L,P as s}from"./index-C023Crk4.js";var m=E.forwardRef(function(e,v){var l,p=e.children,k=e.className,g=e.feedback,y=e.feedbackInvalid,N=e.feedbackValid,u=e.floatingClassName,C=e.floatingLabel,z=e.htmlSize,t=e.id,c=e.invalid,h=e.label,r=e.options,b=e.size,F=e.text,x=e.tooltipFeedback,n=e.valid,f=I(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return i.createElement(o,{describedby:f["aria-describedby"],feedback:g,feedbackInvalid:y,feedbackValid:N,floatingClassName:u,floatingLabel:C,id:t,invalid:c,label:h,text:F,tooltipFeedback:x,valid:n},i.createElement("select",d({id:t,className:L("form-select",(l={},l["form-select-".concat(b)]=b,l["is-invalid"]=c,l["is-valid"]=n,l),k),size:z},f,{ref:v}),r?r.map(function(a,S){return i.createElement("option",d({},typeof a=="object"&&a.disabled&&{disabled:a.disabled},typeof a=="object"&&a.value!==void 0&&{value:a.value},{key:S}),typeof a=="string"?a:a.label)}):p))});m.propTypes=d({className:s.string,htmlSize:s.number,options:s.array},o.propTypes);m.displayName="CFormSelect";export{m as C};