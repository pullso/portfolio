"use strict";(globalThis["webpackChunkportfolio"]=globalThis["webpackChunkportfolio"]||[]).push([[502],{2258:(e,l,a)=>{a.d(l,{Z:()=>z});a(3610);var t=a(3673),d=a(2323),o=a(8880);const n={class:"q-pa-md items-start q-gutter-md"},i={class:"text-overline"},r={class:"row justify-between flex-center"},c={class:"my-card__title text-bold q-my-xs"},u=["innerHTML"];function s(e,l,a,s,p,m){const g=(0,t.up)("q-img"),v=(0,t.up)("q-separator"),y=(0,t.up)("q-chip"),b=(0,t.up)("q-card-section"),w=(0,t.up)("q-btn"),k=(0,t.up)("q-space"),C=(0,t.up)("q-card-actions"),f=(0,t.up)("q-slide-transition"),_=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(_,{class:"my-card col-12 col-md-4",flat:"",bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{src:e.data.img.includes("https")?e.data.img:"https://pullso.github.io/"+e.data.img,loading:"lazy",style:{height:"300px",width:"100%"},fit:"fill"},null,8,["src"]),(0,t.Wm)(v),(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data.categories,((e,l)=>((0,t.wg)(),(0,t.j4)(y,{dense:"",size:"md",key:e,color:0===l?"primary":"","text-color":0===l?"white":""},{default:(0,t.w5)((()=>[(0,t._)("div",i,(0,d.zw)(e.toUpperCase()),1)])),_:2},1032,["color","text-color"])))),128)),(0,t._)("div",r,[(0,t._)("div",c,(0,d.zw)(e.data.title),1)])])),_:1}),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{flat:"",type:"a",color:"primary",label:"Перейти",icon:"launch",target:"_blank",href:e.data.link},null,8,["href"]),(0,t.Wm)(k),e.user?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Wm)(w,{unelevated:"",outline:"",rounded:"",color:"primary",icon:"edit",size:"small",onClick:e.goEdit},null,8,["onClick"]),(0,t.Wm)(w,{unelevated:"",outline:"",rounded:"",color:"primary",icon:"content_copy",size:"small",onClick:e.copyCard},null,8,["onClick"])],64)):(0,t.kq)("",!0),e.data?((0,t.wg)(),(0,t.j4)(w,{key:1,color:"grey",rounded:"",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:l[0]||(l[0]=l=>e.expanded=!e.expanded)},null,8,["icon"])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("div",null,[(0,t.Wm)(v),(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t._)("div",{innerHTML:e.data.description},null,8,u)])),_:1})],512),[[o.F8,e.expanded]])])),_:1})])),_:1})])}var p=a(1959),m=a(2490),g=a(8127),v=a(9582);const y=(0,t.aZ)({name:"AppCard",setup(e){const l=(0,p.iH)(!1),a=(0,v.tv)();function t(){a.push(`/edit/${e.data.firestoreId}`)}async function d(){const l=String(Date.now());await(0,g.pl)((0,g.JU)(m.db,"cards",l),e.data),await a.push(`/edit/${l}`)}return{expanded:l,goEdit:t,copyCard:d}},props:{data:{type:Object},user:{type:Object}},methods:{}});var b=a(4260),w=a(151),k=a(4027),C=a(5869),f=a(5589),_=a(7030),h=a(9367),V=a(8240),W=a(2025),q=a(2471),U=a(7518),Z=a.n(U);const x=(0,b.Z)(y,[["render",s],["__scopeId","data-v-0a6cd79e"]]),z=x;Z()(y,"components",{QCard:w.Z,QImg:k.Z,QSeparator:C.Z,QCardSection:f.Z,QChip:_.Z,QCardActions:h.Z,QBtn:V.Z,QSpace:W.Z,QSlideTransition:q.Z})},6502:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var t=a(3673),d=a(2323);const o={class:"q-ma-md text-bold"},n={class:"row q-mx-md"},i={class:"col-6"},r={class:"q-gutter-y-md column"},c={class:"row"},u={class:"q-pa-md q-gutter-lg"},s=(0,t.Uk)(" Данные с таким id не найдены "),p=(0,t.Uk)(" Ошибка авторизации ");function m(e,l,a,m,g,v){const y=(0,t.up)("q-input"),b=(0,t.up)("q-toggle"),w=(0,t.up)("AppCard"),k=(0,t.up)("q-btn");return e.card&&e.user?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("div",o,"Редактирование id:"+(0,d.zw)(e.id),1),(0,t._)("div",n,[(0,t._)("div",i,[(0,t._)("div",r,[(0,t.Wm)(y,{lazy:"",outlined:"",label:"ID",modelValue:e.card.id,"onUpdate:modelValue":l[0]||(l[0]=l=>e.card.id=l)},null,8,["modelValue"]),(0,t.Wm)(y,{lazy:"",outlined:"",label:"Название",modelValue:e.card.title,"onUpdate:modelValue":l[1]||(l[1]=l=>e.card.title=l)},null,8,["modelValue"]),(0,t.Wm)(y,{lazy:"",outlined:"",label:"Категории",modelValue:e.card.categories,"onUpdate:modelValue":l[2]||(l[2]=l=>e.card.categories=l),onChange:e.getCategories},null,8,["modelValue","onChange"]),(0,t.Wm)(y,{lazy:"",outlined:"",type:"textarea",label:"Описание",modelValue:e.card.description,"onUpdate:modelValue":l[3]||(l[3]=l=>e.card.description=l)},null,8,["modelValue"]),(0,t.Wm)(y,{lazy:"",outlined:"",type:"url",label:"Url проекта",modelValue:e.card.link,"onUpdate:modelValue":l[4]||(l[4]=l=>e.card.link=l)},null,8,["modelValue"]),(0,t.Wm)(y,{lazy:"",outlined:"",type:"url",label:"Url картинки",modelValue:e.card.img,"onUpdate:modelValue":l[5]||(l[5]=l=>e.card.img=l)},null,8,["modelValue"]),(0,t._)("div",c,[(0,t.Wm)(b,{modelValue:e.card.mobileSupport,"onUpdate:modelValue":l[6]||(l[6]=l=>e.card.mobileSupport=l),label:"Мобильная адаптация"},null,8,["modelValue"]),(0,t.Wm)(b,{modelValue:e.card.isCertificate,"onUpdate:modelValue":l[7]||(l[7]=l=>e.card.isCertificate=l),label:"Сертификат"},null,8,["modelValue"])])])]),(0,t.Wm)(w,{data:e.card,lazy:""},null,8,["data"])]),(0,t._)("div",u,[(0,t.Wm)(k,{icon:"arrow_back",color:"black",label:"Назад",onClick:e.goBack},null,8,["onClick"]),(0,t.Wm)(k,{icon:"save",color:"green",label:"Сохранить",onClick:e.saveCard},null,8,["onClick"]),(0,t.Wm)(k,{icon:"delete",color:"red",outline:"",label:"Удалить",onClick:e.deleteCard},null,8,["onClick"])])],64)):e.card?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[s],64)):((0,t.wg)(),(0,t.iD)(t.HY,{key:2},[p],64))}var g=a(1959),v=a(2490),y=a(8127),b=a(2258),w=a(431),k=a(9582);const C=(0,t.aZ)({name:"EditCard.vue",setup(){var e,l;const a=(0,g.iH)(null),d=(0,k.tv)(),o=(0,k.yj)(),n=(0,g.iH)(null===(e=o.params)||void 0===e?void 0:e.id),i=(0,g.iH)(null===(l=(0,w.v0)())||void 0===l?void 0:l.currentUser);function r(){a.value.categories=a.value.categories.split(",")}async function c(){await(0,y.pl)((0,y.JU)(v.db,"cards",n.value),a.value),u()}function u(){d.push("/")}async function s(){await(0,y.oe)((0,y.JU)(v.db,"cards",n.value)),u()}return(0,t.bv)((async()=>{if(!i.value)return;const e=(0,y.JU)(v.db,"cards",n.value),l=await(0,y.QT)(e);l.exists()?a.value=await l.data():console.log("No such document!")})),{card:a,user:i,id:n,goBack:u,deleteCard:s,saveCard:c,getCategories:r}},components:{AppCard:b.Z}});var f=a(4260),_=a(8786),h=a(2582),V=a(8240),W=a(7518),q=a.n(W);const U=(0,f.Z)(C,[["render",m]]),Z=U;q()(C,"components",{QInput:_.Z,QToggle:h.Z,QBtn:V.Z})}}]);