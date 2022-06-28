"use strict";(globalThis["webpackChunkportfolio"]=globalThis["webpackChunkportfolio"]||[]).push([[586],{3709:(e,t,a)=>{a.d(t,{Z:()=>H});a(3610);var r=a(3673),n=a(2323),s=a(8880);const o={class:"q-pa-md items-start q-gutter-md"},i={class:"text-overline"},l={class:"row justify-between flex-center"},d={class:"my-card__title text-bold q-my-xs"},c=["innerHTML"];function u(e,t,a,u,p,m){const f=(0,r.up)("q-img"),g=(0,r.up)("q-separator"),v=(0,r.up)("q-chip"),b=(0,r.up)("q-card-section"),w=(0,r.up)("q-btn"),y=(0,r.up)("q-space"),_=(0,r.up)("q-card-actions"),h=(0,r.up)("q-slide-transition"),C=(0,r.up)("q-card");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(C,{class:"my-card col-12 col-md-4",flat:"",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{src:e.data.img.includes("https")?e.data.img:"https://pullso.github.io/"+e.data.img,loading:"lazy",style:{height:"300px",width:"100%"},fit:"fill"},null,8,["src"]),(0,r.Wm)(g),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.data.categories,((t,a)=>((0,r.wg)(),(0,r.j4)(v,{size:"md",key:t,color:0===a?"primary":"","text-color":0===a?"white":""},{default:(0,r.w5)((()=>[(0,r._)("div",i,(0,n.zw)(e.formatString(t)),1)])),_:2},1032,["color","text-color"])))),128)),(0,r._)("div",l,[(0,r._)("div",d,(0,n.zw)(e.data.title),1)])])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(w,{flat:"",type:"a",color:"primary",label:"Перейти",icon:"launch",target:"_blank",href:e.data.link},null,8,["href"]),(0,r.Wm)(y),e.user?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(w,{unelevated:"",outline:"",rounded:"",color:"primary",icon:"edit",size:"small",onClick:e.goEdit},null,8,["onClick"]),(0,r.Wm)(w,{unelevated:"",outline:"",rounded:"",color:"primary",icon:"content_copy",size:"small",onClick:e.copyCard},null,8,["onClick"])],64)):(0,r.kq)("",!0),e.data?((0,r.wg)(),(0,r.j4)(w,{key:1,color:"grey",rounded:"",flat:"",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:t[0]||(t[0]=t=>e.expanded=!e.expanded)},null,8,["icon"])):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",null,[(0,r.Wm)(g),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r._)("div",{innerHTML:e.data.description},null,8,c)])),_:1})],512),[[s.F8,e.expanded]])])),_:1})])),_:1})])}var p=a(1959),m=a(2490),f=a(8127),g=a(9582);const v=(0,r.aZ)({name:"AppCard",setup(e){const t=(0,p.iH)(!1),a=(0,g.tv)();function r(){a.push(`/edit/${e.data.firestoreId}`)}async function n(){const t=String(Date.now());await(0,f.pl)((0,f.JU)(m.db,"cards",t),e.data),await a.push(`/edit/${t}`)}function s(e){return e[0].toUpperCase()+e.substring(1)}return{expanded:t,goEdit:r,copyCard:n,formatString:s}},props:{data:{type:Object},user:{type:Object}},methods:{}});var b=a(4260),w=a(151),y=a(4027),_=a(5869),h=a(5589),C=a(7030),x=a(9367),k=a(8240),q=a(2025),Z=a(2471),W=a(7518),j=a.n(W);const I=(0,b.Z)(v,[["render",u],["__scopeId","data-v-2febaa1a"]]),H=I;j()(v,"components",{QCard:w.Z,QImg:y.Z,QSeparator:_.Z,QCardSection:h.Z,QChip:C.Z,QCardActions:x.Z,QBtn:k.Z,QSpace:q.Z,QSlideTransition:Z.Z})},9586:(e,t,a)=>{a.r(t),a.d(t,{default:()=>re});var r=a(3673);function n(e,t,a,n,s,o){const i=(0,r.up)("MainHeader"),l=(0,r.up)("MainWorks"),d=(0,r.up)("MainCertificates"),c=(0,r.up)("MainAbout");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(l,{user:e.currentUser,cards:e.workCards},null,8,["user","cards"]),(0,r.Wm)(d,{user:e.currentUser,certificates:e.certificates},null,8,["user","certificates"]),(0,r.Wm)(c)],64)}var s=a(1959);const o=e=>((0,r.dD)("data-v-d59f0324"),e=e(),(0,r.Cn)(),e),i={class:"q-pa-lg q-gutter-sm header q-pt-lg-md"},l={class:"row"},d={class:"col-12 col-sm-4 offset-sm-3 q-ml-md-lg header__left q-mb-lg q-pt-lg-xl justify-center"},c=o((()=>(0,r._)("div",{class:"header__separator desktop-only"},null,-1))),u=o((()=>(0,r._)("div",{class:"text-subtitle1 animated fadeIn slower delay-1s"},"Здравствуйте, меня зовут",-1))),p=o((()=>(0,r._)("div",{class:"text-bold text-h4 animated fadeIn slower delay-1s"},"Павел Дубицкий",-1))),m=o((()=>(0,r._)("div",{class:"text-subtitle1 q-mb-md animated delay-2s slower fadeIn"},"Я - разработчик сайтов и приложений",-1))),f={class:"flex column header__buttons q-gutter-sm animated fadeInUp slower delay-3s"},g={class:"col-12 header__right animated delay-5s fadeIn slower"};function v(e,t,a,n,s,o){const v=(0,r.up)("AppContactsButtons"),b=(0,r.up)("q-img"),w=(0,r.up)("q-separator");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",l,[(0,r._)("div",d,[c,u,p,m,(0,r._)("div",f,[(0,r.Wm)(v)])]),(0,r._)("div",g,[(0,r.Wm)(b,{src:"https://pullso.github.io/img/man_min.png","spinner-color":"white",class:"header__photo"}),(0,r.Wm)(w)])])])}function b(e,t,a,n,s,o){const i=(0,r.up)("q-btn");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i,{rounded:"",type:"a",target:"_blank",color:"primary",href:"https://t.me/pullso",icon:"telegram",label:"Написать",size:"1.15em"}),(0,r.Wm)(i,{rounded:"",color:"secondary",outline:"",icon:"account_box",label:"Резюме",type:"a",target:"_blank",href:"https://ekaterinburg.hh.ru/applicant/resumes/view?resume=a939d016ff07ebc4d10039ed1f626158574238",size:"1.15em"})],64)}const w={name:"AppContactsButtons"};var y=a(4260),_=a(8240),h=a(7518),C=a.n(h);const x=(0,y.Z)(w,[["render",b]]),k=x;C()(w,"components",{QBtn:_.Z});const q=(0,r.aZ)({name:"MainHeader",components:{AppContactsButtons:k}});var Z=a(4027),W=a(5869);const j=(0,y.Z)(q,[["render",v],["__scopeId","data-v-d59f0324"]]),I=j;C()(q,"components",{QImg:Z.Z,QSeparator:W.Z});var H=a(8880);const A={class:"q-pa-md row justify-center",id:"works"},D={class:"row justify-center"};function M(e,t,a,n,s,o){const i=(0,r.up)("q-btn-toggle"),l=(0,r.up)("AppCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",A,[(0,r.Wm)(i,{modelValue:e.toggle,"onUpdate:modelValue":t[0]||(t[0]=t=>e.toggle=t),"toggle-color":"primary",class:"fadeIn slower animated",options:e.toggleOptions,unelevated:""},null,8,["modelValue","options"])]),(0,r._)("div",D,[(0,r.Wm)(H.W3,{appear:"","enter-active-class":" animated fadeIn","leave-active-class":"animated fadeOut"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.filteredCards,(t=>((0,r.wg)(),(0,r.j4)(l,{key:t,data:t,user:e.user},null,8,["data","user"])))),128))])),_:1})])],64)}a(3610);var Q=a(3709);const S=(0,r.aZ)({name:"MainWorks",setup(e){const t=(0,s.iH)(null),a=(0,s.iH)([{label:"Все",value:null},{label:"Vue.js",value:"vue"},{label:"javascript",value:"javascript"},{label:"Node.js",value:"nodejs"}]),n=(0,r.Fl)((()=>{var a;return t.value?(null===(a=e.cards)||void 0===a?void 0:a.filter((e=>e.categories.includes(t.value))))||[]:e.cards}));return{toggle:t,toggleOptions:a,filteredCards:n}},props:["user","cards"],components:{AppCard:Q.Z}});var B=a(8761);const U=(0,y.Z)(S,[["render",M]]),z=U;C()(S,"components",{QBtnToggle:B.Z});const Y=(0,r._)("div",{class:"text-h4 text-center text-uppercase text-bold text-primary",id:"certificates"},"Сертификаты",-1),T={key:0,class:"row justify-center"};function E(e,t,a,n,s,o){const i=(0,r.up)("AppCard");return(0,r.wg)(),(0,r.iD)("div",null,[Y,e.certificates?((0,r.wg)(),(0,r.iD)("div",T,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.certificates,(t=>((0,r.wg)(),(0,r.j4)(i,{key:t,data:t,user:e.user},null,8,["data","user"])))),128))])):(0,r.kq)("",!0)])}const O=(0,r.aZ)({name:"MainCertificates",components:{AppCard:Q.Z},props:["certificates","user"]}),V=(0,y.Z)(O,[["render",E]]),F=V,J={class:"q-pa-md",id:"about"},L=(0,r.uE)('<div class="row justify-center"><div class="col-12 text-h4 text-center text-uppercase text-bold text-primary">Обо мне <div class="col-12 animated slower fadeIn text-h4 text-center text-uppercase text-bold text-grey-4"> Кто я </div></div><div class="justify-center col-12 col-md-7 col-lg-4 animated fadeInRight"> Меня зовут Павел. Я Front-End разработчик.<br> Главное для меня — <span class="animated fadeIn bg-grey-4"> писать код и сервисы ДЛЯ ЛЮДЕЙ </span> , а не для роботов. <br><br> Я программировал еще в ВУЗе первые проекты на C++. В благодарность за проекты люди жертвовали деньги.<br> И уже тогда я понял, что <span class="animated fadeIn bg-grey-4">главное в коде - читаемость</span>. А <span class="animated fadeIn bg-grey-4">главное в сервисе - удобство для пользователя</span>.<br><br> В 2019 начал работать в стеке Fronted: Изучил верстку, основы JavaScript и Vue.js и продолжаю расти в этом направлении.<br> C 2020 начал осваивать Backend-разработку на JavaScript - Node.js и Nest.js. <br><br> Я люблю слушать подкасты, читать бизнес-литературу и работать над проектами с утра до вечера. <br><br></div></div>',1),K={class:"row justify-center animated fadeInUp slower delay-3s q-gutter-sm"};function N(e,t,a,n,s,o){const i=(0,r.up)("AppContactsButtons");return(0,r.wg)(),(0,r.iD)("div",J,[L,(0,r._)("div",K,[(0,r.Wm)(i)])])}const P=(0,r.aZ)({name:"MainAbout",components:{AppContactsButtons:k}}),$=(0,y.Z)(P,[["render",N]]),R=$;var G=a(431),X=a(8127),ee=a(2490);const te=(0,r.aZ)({name:"PageIndex",components:{MainAbout:R,MainCertificates:F,MainWorks:z,MainHeader:I},setup(){var e;const t=(0,s.iH)(null===(e=(0,G.v0)())||void 0===e?void 0:e.currentUser);let a=[];const n=(0,s.iH)([]),o=(0,s.iH)([]);return(0,r.bv)((async()=>{const e=await(0,X.PL)((0,X.hJ)(ee.db,"cards"));e.forEach((e=>{const t=e.data();t.firestoreId=e.id,t.categories=t.categories.map((e=>e.toLowerCase())),a.unshift(t),a=a.sort(((e,t)=>e.id-t.id))})),n.value=a.filter((e=>!e.isCertificate)),o.value=a.filter((e=>e.isCertificate))})),{currentUser:t,workCards:n,certificates:o}}}),ae=(0,y.Z)(te,[["render",n]]),re=ae}}]);