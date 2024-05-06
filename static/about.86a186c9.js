import{o as s,c as e,a as t,t as l,f as r,F as u,r as h,n as m,b as g,g as y}from"./entry.e6f3f465.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const $=""+globalThis.__publicAssetsURL("janyu.jpg"),k={intro:{title:"我是 Janyu",text:"從介面設計轉職前端，擁有4年的網頁設計經驗。結合設計和開發技能，從使用者的角度思考問題，並且評估執行的可行性，提升使用者視覺與操作體驗。"},experience:[{key:"1",title:"前端工程師",company:"鼎新電腦股份有限公司",time:"2024年 2月 - 2024年 5月",list:["運用Vue、Figma，將設計概念轉譯為實際可操作的前端介面，並確保最佳的使用者體驗和跨平台的兼容性","優化現有產品的使用者體驗","GP表單系統維護，排除全公司同仁使用表單的問題"]},{key:"2",title:"網頁前端設計師",company:"台北數位廣告股份有限公司",time:"2019年 11月 - 2024年 2月",list:["設計並實現前端程式，與 PM、設計師、工程師合作，規劃和執行各項開發需求","專注於前端開發、UI/UX設計，包括客製化、模板網頁，並確保最佳的使用者體驗和跨平台的兼容性","積極參與使用者研究，並透過製作 Wireframe、Mockup 和 Prototype 原型，將設計概念轉譯為實際可操作的前端介面"]},{key:"3",title:"影片、平面設計",company:"新台豐國際事業有限公司",time:"2019年 6月 - 2019年 11月",list:["與行銷人員討論產品短影片的流程","負責所有的拍攝、剪輯產出","製作社群平台所需的圖片、Banner"]}],skill:[{key:"1",title:"Front-end",icon:"https://janyu427.github.io/website/frontend.svg",list:["HTML5、CSS3 撰寫","Javascript (ES6+) 撰寫","Vue3、Nuxt3 應用","RWD響應式網頁設計","Webpack打包工具使用","Git 版本控管"]},{key:"1",title:"UI/UX Design",icon:"https://janyu427.github.io/website/uiux.svg",list:["多平台 UI 介面設計","Wireframe 製作","Prototype 原型設計","使用者研究及測試","Figma、Adobe XD 等設計軟體"]}],tool:[{key:"Font-End",list:[{title:"HTML5",imgSrc:"https://janyu427.github.io/website/html5.svg"},{title:"CSS",imgSrc:"https://janyu427.github.io/website/css3.svg"},{title:"SASS",imgSrc:"https://janyu427.github.io/website/sass.svg"},{title:"Javascript",imgSrc:"https://janyu427.github.io/website/js.svg"},{title:"Vue",imgSrc:"https://janyu427.github.io/website/vue.svg"},{title:"Nuxt",imgSrc:"https://janyu427.github.io/website/nuxt.svg"},{title:"Gulp",imgSrc:"https://janyu427.github.io/website/gulp.svg"},{title:"Webpack",imgSrc:"https://janyu427.github.io/website/webpack.svg"}]},{key:"Design",list:[{title:"Figma",imgSrc:"https://janyu427.github.io/website/figma.svg"},{title:"Sketch",imgSrc:"https://janyu427.github.io/website/sketch.svg"},{title:"XD",imgSrc:"https://janyu427.github.io/website/xd.svg"},{title:"Photoshop",imgSrc:"https://janyu427.github.io/website/ps.svg"},{title:"Illustrator",imgSrc:"https://janyu427.github.io/website/ai.svg"}]}]},p={about:k};const S={class:"main_section"},f={class:"container"},j={class:"text_box"},w={class:"title"},L={class:"intro"},D=t("div",{class:"image_box"},[t("img",{class:"image",src:$,alt:""})],-1),M={__name:"intro",setup(d){const o=p.about.intro,c=o.title,_=o.text;return(n,i)=>(s(),e("div",S,[t("div",f,[t("div",j,[t("div",w,l(r(c)),1),t("p",L,l(r(_)),1)]),D])]))}},U=M;const F={class:"experience"},T={class:"container"},H=t("h2",{class:"section_title"},"工作經驗",-1),B={class:"subtitle"},C={class:"company"},I={class:"name"},P={class:"time"},V={class:"listItem_box"},W=["innerHTML"],X={__name:"experience",setup(d){const o=p.about.experience,c=(_,n)=>_===n.length-1;return(_,n)=>(s(),e("div",F,[t("div",T,[H,(s(!0),e(u,null,h(r(o),(i,a)=>(s(),e("div",{class:"list_box",key:a},[t("div",{class:m(["list",{"last-child":c(a,r(o))}])},[t("h3",B,l(i.title),1),t("div",C,[t("p",I,l(i.company),1),t("p",P,l(i.time),1)]),t("ul",V,[(s(!0),e(u,null,h(i.list,(b,v)=>(s(),e("li",{class:"listItem",key:v,innerHTML:b},null,8,W))),128))])],2)]))),128))])]))}},A=X;const N={class:"skill section_big"},E={class:"container"},G=t("h2",{class:"section_title"},"我的專長",-1),J={class:"list_box"},R={class:"image_box"},z=["src"],q={class:"text_box"},K={class:"subtitle"},O={class:"listItem_box"},Q=["innerHTML"],Y={__name:"skill",setup(d){const o=p.about.skill,c=(_,n)=>_===n.length-1;return(_,n)=>(s(),e("div",N,[t("div",E,[G,t("div",J,[(s(!0),e(u,null,h(r(o),(i,a)=>(s(),e("div",{class:m(["list",{last:c(a,r(o))}]),key:a},[t("div",R,[t("img",{class:"image",src:i.icon,width:"60",height:"60",alt:"UI/UX Design"},null,8,z)]),t("div",q,[t("h3",K,l(i.title),1),t("ul",O,[(s(!0),e(u,null,h(i.list,b=>(s(),e("li",{class:"listItem",innerHTML:b},null,8,Q))),256))])])],2))),128))])])]))}},Z=Y;const tt={class:"software"},st={class:"container"},et=t("h2",{class:"section_title"},"軟體工具",-1),it={class:"item_box"},ot={class:"subtitle"},nt={class:"list_box"},ct={class:"icon_box"},_t=["src","alt"],lt={class:"text"},at={__name:"tool",setup(d){const o=p.about.tool;return(c,_)=>(s(),e("div",tt,[t("div",st,[et,t("div",it,[(s(!0),e(u,null,h(r(o),n=>(s(),e("div",{class:"item",key:n.key},[t("h3",ot,l(n.key),1),t("div",nt,[(s(!0),e(u,null,h(n.list,(i,a)=>(s(),e("div",{class:"list",key:a},[t("div",ct,[t("img",{class:"icon",src:i.imgSrc,alt:i.title},null,8,_t)]),t("p",lt,l(i.title),1)]))),128))])]))),128))])])]))}},rt=at,ut={__name:"index",setup(d){return(o,c)=>(s(),e(u,null,[g(U),g(A),g(Z),g(rt)],64))}},ht=ut,dt={};function gt(d,o){const c=ht;return s(),y(c)}const mt=x(dt,[["render",gt]]);export{mt as default};
