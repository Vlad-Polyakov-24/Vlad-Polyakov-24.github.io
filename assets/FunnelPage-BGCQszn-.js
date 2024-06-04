import{j as e,c as d,r as l,A as L,a as Y}from"./index-DcqthmhF.js";import{S as M}from"./Sidebar-Crg8gVFP.js";const C="_funnel_fhp45_1",K="_funnel__head_fhp45_4",W="_funnel__content_fhp45_14",R={funnel:C,funnel__head:K,funnel__content:W},D="_btn_1om1y_1",P="_btn--primary_1om1y_10",T="_btn--outline_1om1y_18",$="_btn--ruby_1om1y_27",z="_btn--white_1om1y_35",O="_btn--black_1om1y_38",G="_btn--small_1om1y_46",J="_btn--medium_1om1y_52",S="_btn--large_1om1y_58",U="_disabled_1om1y_68",p={btn:D,"btn--primary":"_btn--primary_1om1y_10",btnPrimary:P,"btn--outline":"_btn--outline_1om1y_18",btnOutline:T,"btn--ruby":"_btn--ruby_1om1y_27",btnRuby:$,"btn--white":"_btn--white_1om1y_35",btnWhite:z,"btn--black":"_btn--black_1om1y_38",btnBlack:O,"btn--small":"_btn--small_1om1y_46",btnSmall:G,"btn--medium":"_btn--medium_1om1y_52",btnMedium:J,"btn--large":"_btn--large_1om1y_58",btnLarge:S,disabled:U};var k=(n=>(n.PRIMARY="btn--primary",n.OUTLINE="btn--outline",n))(k||{}),w=(n=>(n.RUBY="btn--ruby",n.WHITE="btn--white",n.BLACK="btn--black",n))(w||{}),I=(n=>(n.S="btn--small",n.M="btn--medium",n.L="btn--large",n))(I||{});const F=n=>{const{children:t,className:s,type:a="button",theme:o=k.PRIMARY,size:c=I.M,color:_=w.WHITE,...x}=n,j={},u=[s,p[o],p[c],p[_]];return e.jsx("button",{type:a,className:d(p.btn,j,u),...x,children:t})},H="_funnel_yogan_1",q="_funnel__item_yogan_21",B="_text_yogan_39",i={funnel:H,funnel__item:q,text:B},Q="_progress_1dx9e_1",V="_progress__caption_1dx9e_5",X="_small_1dx9e_9",Z="_progress__bar_1dx9e_12",ee="_bar_1dx9e_20",ne="_orange-light_1dx9e_28",te="_orange-dark_1dx9e_34",ae="_ruby-light_1dx9e_40",se="_ruby-dark_1dx9e_46",m={progress:Q,progress__caption:V,small:X,progress__bar:Z,bar:ee,"orange-light":"_orange-light_1dx9e_28",orangeLight:ne,"orange-dark":"_orange-dark_1dx9e_34",orangeDark:te,"ruby-light":"_ruby-light_1dx9e_40",rubyLight:ae,"ruby-dark":"_ruby-dark_1dx9e_46",rubyDark:se},f=l.memo(n=>{const{className:t,count:s,color:a,barWidth:o}=n,c=l.useMemo(()=>({width:o}),[o]);return e.jsxs("div",{className:d(m.progress,{},[t,m[a]]),children:[e.jsxs("p",{className:m.progress__caption,children:[s," ",e.jsx("span",{className:m.small,children:"users"})]}),e.jsx("span",{className:m.progress__bar,children:e.jsx("span",{className:m.bar,style:c})})]})});var b=(n=>(n.ORANGE_LIGHT="orange-light",n.ORANGE_DARK="orange-dark",n.RUBY_LIGHT="ruby-light",n.RUBY_DARK="ruby-dark",n))(b||{});const oe=l.memo(({className:n,data:t})=>e.jsxs("ul",{className:d(i.funnel,{},[n]),children:[e.jsxs("li",{className:i.funnel__item,children:[e.jsx(f,{count:t.leads.count,color:b.ORANGE_LIGHT,barWidth:`${t.leads.complete}%`}),e.jsx("p",{className:i.text,children:"Potential campers who have expressed interest in participating but have not yet confirmed their participation"})]}),e.jsxs("li",{className:i.funnel__item,children:[e.jsx(f,{count:t.qualified.count,color:b.ORANGE_DARK,barWidth:`${t.qualified.complete}%`}),e.jsx("p",{className:i.text,children:"People who have already registered or have shown a specific level of interest"})]}),e.jsxs("li",{className:i.funnel__item,children:[e.jsx(f,{count:t.intent.count,color:b.RUBY_LIGHT,barWidth:`${t.intent.complete}%`}),e.jsx("p",{className:i.text,children:"Participants who confirmed their intention to participate in the camp and showed a high level of interest"})]}),e.jsxs("li",{className:i.funnel__item,children:[e.jsx(f,{count:t.campers.count,color:b.RUBY_DARK,barWidth:`${t.campers.complete}%`}),e.jsx("p",{className:i.text,children:"Participants confirmed their intention to participate in the camp and showed a high level of interest"})]})]})),le="_card_1tc3g_1",ie="_card__head_1tc3g_6",re="_card__content_1tc3g_15",ce="_fluid_1tc3g_21",y={card:le,card__head:ie,card__content:re,fluid:ce},_e="_card-item_8zzec_1",de="_card-item__name_8zzec_15",me="_online_8zzec_18",A={"card-item":"_card-item_8zzec_1",cardItem:_e,"card-item__name":"_card-item__name_8zzec_15",cardItem__name:de,online:me},ue=({className:n,user:t})=>e.jsxs("li",{className:d(A.cardItem,{[A.online]:t.online},[n]),children:[e.jsx(L,{alt:t.name,size:30}),e.jsx("p",{className:A.cardItem__name,children:t.name})]}),g=n=>{const{className:t,title:s,fluid:a,users:o}=n,c=a?o.slice(0,12):o.slice(0,9);return e.jsxs("div",{className:d(y.card,{[y.fluid]:a},[t]),children:[s&&e.jsx("div",{className:y.card__head,children:e.jsx("h3",{children:s})}),e.jsx("ul",{className:y.card__content,children:c.map(_=>e.jsx(ue,{user:_},_.id))})]})},he="_modal_1gudb_1",be="_open_1gudb_14",xe="_modal__content_1gudb_20",pe="_closing_1gudb_23",fe="_modal__overlay_1gudb_26",h={modal:he,open:be,modal__content:xe,closing:pe,modal__overlay:fe},ye=({children:n,element:t=document.body})=>Y.createPortal(n,t),ge=300,je=n=>{const{className:t,children:s,isOpen:a,onClose:o}=n,[c,_]=l.useState(!1),x=l.useRef(void 0),j={[h.open]:a,[h.closing]:c},u=l.useCallback(()=>{o&&(_(!0),x.current=setTimeout(()=>{o(),_(!1)},ge))},[o]),E=N=>{N.stopPropagation()},v=l.useCallback(N=>{N.key==="Escape"&&u()},[u]);return l.useEffect(()=>(a&&(window.addEventListener("keydown",v),document.body.style.overflow="hidden"),()=>{clearTimeout(x.current),window.removeEventListener("keydown",v),document.body.style.overflow="auto"}),[a,v]),e.jsx(ye,{children:e.jsx("div",{className:d(h.modal,j,[t]),children:e.jsx("div",{className:h.modal__overlay,onClick:u,children:e.jsx("div",{className:h.modal__content,onClick:E,children:s})})})})},r={leads:{funnel:{count:"846",complete:"80"},users:[{id:"1",name:"Alex Roman",online:!0},{id:"2",name:"Alexandra Roman",online:!0},{id:"3",name:"Yaroslav Korets",online:!0},{id:"4",name:"Noah Johnson",online:!1},{id:"5",name:"Jessica Williams",online:!0},{id:"6",name:"Emily Johnson",online:!1},{id:"7",name:"Christopher Brown",online:!1},{id:"8",name:"Ashley Davis",online:!1},{id:"9",name:"Matthew Wilson",online:!1},{id:"10",name:"Emily Johnson",online:!1},{id:"11",name:"Matthew Wilson",online:!1},{id:"12",name:"Emily Johnson",online:!1},{id:"13",name:"Matthew Wilson",online:!1}]},qualified:{funnel:{count:"124",complete:"65"},users:[{id:"14",name:"Alexandra Roman",online:!0},{id:"15",name:"Noah Johnson",online:!1},{id:"16",name:"Jessica Williams",online:!0},{id:"17",name:"Christopher Brown",online:!1},{id:"18",name:"Ashley Davis",online:!1}]},intent:{funnel:{count:"87",complete:"40"},users:[{id:"19",name:"Alex Roman",online:!0},{id:"20",name:"Alexandra Roman",online:!0},{id:"21",name:"Yaroslav Korets",online:!0},{id:"22",name:"Noah Johnson",online:!1}]},campers:{funnel:{count:"21",complete:"30"},users:[{id:"23",name:"Alex Roman",online:!0},{id:"24",name:"Alexandra Roman",online:!0},{id:"25",name:"Yaroslav Korets",online:!0},{id:"26",name:"Alex Roman",online:!0},{id:"27",name:"Alexandra Roman",online:!0},{id:"28",name:"Yaroslav Korets",online:!0},{id:"29",name:"Alex Roman",online:!0},{id:"30",name:"Alexandra Roman",online:!0},{id:"31",name:"Yaroslav Korets",online:!0},{id:"32",name:"Alex Roman",online:!0},{id:"33",name:"Alexandra Roman",online:!0},{id:"34",name:"Yaroslav Korets",online:!0},{id:"35",name:"Alex Roman",online:!0},{id:"36",name:"Alexandra Roman",online:!0},{id:"37",name:"Yaroslav Korets",online:!0},{id:"38",name:"Alex Roman",online:!0},{id:"39",name:"Alexandra Roman",online:!0},{id:"40",name:"Yaroslav Korets",online:!0}]}},Re=l.memo(()=>{const[n,t]=l.useState(!1),s=l.useCallback(()=>{t(a=>!a)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Funnel Page Sidebar"}),e.jsxs("section",{className:d(R.funnel,{},[]),children:[e.jsxs("div",{className:R.funnel__head,children:[e.jsx(oe,{data:{leads:r.leads.funnel,qualified:r.qualified.funnel,intent:r.intent.funnel,campers:r.campers.funnel}}),e.jsx(F,{onClick:s,children:"Invite"}),n&&e.jsx(je,{isOpen:n,onClose:s,children:e.jsx("p",{children:"Share the link to invite a member"})})]}),e.jsxs("div",{className:R.funnel__content,children:[e.jsx(g,{title:"Leads",users:r.leads.users}),e.jsx(g,{title:"Qualified",users:r.qualified.users}),e.jsx(g,{title:"Intent",users:r.intent.users}),e.jsx(g,{title:"Campers",fluid:!0,users:r.campers.users})]})]})]})});export{Re as default};
