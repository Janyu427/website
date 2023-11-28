import{o as s,c as e,a as t,t as l,f as r,F as u,r as h,n as m,b as g,g as y}from"./entry.ff712b10.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const $=""+globalThis.__publicAssetsURL("janyu.jpg"),k={intro:{title:"我是 Janyu",text:"從介面設計轉職前端，擁有4年的網頁設計經驗。結合設計和開發技能，從使用者的角度思考問題，並且評估執行的可行性，提升使用者視覺與操作體驗。"},experience:[{key:"1",title:"網頁前端設計師",company:"台北數位廣告股份有限公司",time:"2019年 11月 - 目前",list:["前端程式執行","與 PM、設計師、工程師討論，規劃各項開發需求","負責客製化、模板網頁及mobile UI/UX 設計","參與使用者研究","製作 Wireframe、Mockup 和 Prototype 原型"]},{key:"2",title:"影片、平面設計",company:"新台豐國際事業有限公司",time:"2019年 6月 - 2019年 11月 ",list:["與行銷人員討論產品短影片的流程","負責所有的拍攝、剪輯產出","製作社群平台所需的圖片、Banner"]}],skill:[{key:"1",title:"Front-end",icon:"https://janyu427.github.io/website/frontend.svg",list:["HTML5、CSS3 撰寫","Javascript (ES6+) 撰寫","Vue3、Nuxt3 應用","RWD響應式網頁設計","Webpack打包工具使用","Git 版本控管"]},{key:"1",title:"UI/UX Design",icon:"https://janyu427.github.io/website/uiux.svg",list:["多平台 UI 介面設計","Wireframe 製作","Prototype 原型設計","使用者研究及測試","Figma、Adobe XD 等設計軟體"]}],tool:[{key:"Font-End",list:[{title:"HTML5",imgSrc:"https://janyu427.github.io/website/html5.svg"},{title:"CSS",imgSrc:"https://janyu427.github.io/website/css3.svg"},{title:"SASS",imgSrc:"https://janyu427.github.io/website/sass.svg"},{title:"Javascript",imgSrc:"https://janyu427.github.io/website/js.svg"},{title:"Vue",imgSrc:"https://janyu427.github.io/website/vue.svg"},{title:"Nuxt",imgSrc:"https://janyu427.github.io/website/nuxt.svg"},{title:"Gulp",imgSrc:"https://janyu427.github.io/website/gulp.svg"},{title:"Webpack",imgSrc:"https://janyu427.github.io/website/webpack.svg"}]},{key:"Design",list:[{title:"Figma",imgSrc:"https://janyu427.github.io/website/figma.svg"},{title:"Sketch",imgSrc:"https://janyu427.github.io/website/sketch.svg"},{title:"XD",imgSrc:"https://janyu427.github.io/website/xd.svg"},{title:"Photoshop",imgSrc:"https://janyu427.github.io/website/ps.svg"},{title:"Illustrator",imgSrc:"https://janyu427.github.io/website/ai.svg"}]}]},p={about:k};const S={class:"main_section"},f={class:"container"},j={class:"text_box"},w={class:"title"},L={class:"intro"},D=t("div",{class:"image_box"},[t("img",{class:"image",src:$,alt:""})],-1),M={__name:"intro",setup(d){const o=p.about.intro,c=o.title,_=o.text;return(n,i)=>(s(),e("div",S,[t("div",f,[t("div",j,[t("div",w,l(r(c)),1),t("p",L,l(r(_)),1)]),D])]))}},U=M;const T={class:"experience"},F={class:"container"},H=t("h2",{class:"section_title"},"工作經驗",-1),B={class:"subtitle"},C={class:"company"},I={class:"name"},W={class:"time"},X={class:"listItem_box"},A=["innerHTML"],N={__name:"experience",setup(d){const o=p.about.experience,c=(_,n)=>_===n.length-1;return(_,n)=>(s(),e("div",T,[t("div",F,[H,(s(!0),e(u,null,h(r(o),(i,a)=>(s(),e("div",{class:"list_box",key:a},[t("div",{class:m(["list",{"last-child":c(a,r(o))}])},[t("h3",B,l(i.title),1),t("div",C,[t("p",I,l(i.company),1),t("p",W,l(i.time),1)]),t("ul",X,[(s(!0),e(u,null,h(i.list,(b,v)=>(s(),e("li",{class:"listItem",key:v,innerHTML:b},null,8,A))),128))])],2)]))),128))])]))}},P=N;const V={class:"skill section_big"},E={class:"container"},J=t("h2",{class:"section_title"},"我的專長",-1),G={class:"list_box"},R={class:"image_box"},z=["src"],q={class:"text_box"},K={class:"subtitle"},O={class:"listItem_box"},Q=["innerHTML"],Y={__name:"skill",setup(d){const o=p.about.skill,c=(_,n)=>_===n.length-1;return(_,n)=>(s(),e("div",V,[t("div",E,[J,t("div",G,[(s(!0),e(u,null,h(r(o),(i,a)=>(s(),e("div",{class:m(["list",{last:c(a,r(o))}]),key:a},[t("div",R,[t("img",{class:"image",src:i.icon,width:"60",height:"60",alt:"UI/UX Design"},null,8,z)]),t("div",q,[t("h3",K,l(i.title),1),t("ul",O,[(s(!0),e(u,null,h(i.list,b=>(s(),e("li",{class:"listItem",innerHTML:b},null,8,Q))),256))])])],2))),128))])])]))}},Z=Y;const tt={class:"software"},st={class:"container"},et=t("h2",{class:"section_title"},"軟體工具",-1),it={class:"item_box"},ot={class:"subtitle"},nt={class:"list_box"},ct={class:"icon_box"},_t=["src","alt"],lt={class:"text"},at={__name:"tool",setup(d){const o=p.about.tool;return(c,_)=>(s(),e("div",tt,[t("div",st,[et,t("div",it,[(s(!0),e(u,null,h(r(o),n=>(s(),e("div",{class:"item",key:n.key},[t("h3",ot,l(n.key),1),t("div",nt,[(s(!0),e(u,null,h(n.list,(i,a)=>(s(),e("div",{class:"list",key:a},[t("div",ct,[t("img",{class:"icon",src:i.imgSrc,alt:i.title},null,8,_t)]),t("p",lt,l(i.title),1)]))),128))])]))),128))])])]))}},rt=at,ut={__name:"index",setup(d){return(o,c)=>(s(),e(u,null,[g(U),g(P),g(Z),g(rt)],64))}},ht=ut,dt={};function gt(d,o){const c=ht;return s(),y(c)}const mt=x(dt,[["render",gt]]);export{mt as default};
