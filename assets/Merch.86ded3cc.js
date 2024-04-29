import{B as E}from"./Box.6190d4ae.js";import{d as v,r as f,o as a,e as o,g as r,h as i,w as h,F as C,k as I,a as s,n as S,s as z,l as D,p as x,f as p,j as b,_ as g,t as n,b as B}from"./index.6d7a1c26.js";const k=e=>(x("data-v-c152284e"),e=e(),p(),e),A={class:"flex items-center gap-2 mx-auto"},M=k(()=>s("img",{src:b,alt:"toggle list",class:"h-5 w-5 rotate-90 hover:brightness-125 focus:brightness-125"},null,-1)),G=[M],P=["src"],T=k(()=>s("img",{src:b,alt:"toggle list",class:"h-5 w-5 -rotate-90 hover:brightness-125 focus:brightness-125"},null,-1)),N=[T],V=v({__name:"Slides",props:{path:null,max:null,size:null},setup(e){D(c=>({"1fec3b47":l.value}));const t=f(1),l=f(1),$=c=>{l.value=-1,t.value>1?t.value-=1:t.value=c},w=c=>{l.value=1,t.value<c?t.value+=1:t.value=1};return(c,d)=>(a(),o("div",A,[e.max>1?(a(),o("button",{key:0,onClick:d[0]||(d[0]=m=>$(e.max))},G)):r("",!0),i(z,{name:"imgs",tag:"div",class:"overflow-hidden relative w-52 h-40"},{default:h(()=>[(a(!0),o(C,null,I([t.value],m=>(a(),o("div",{key:m},[s("img",{src:e.path+t.value+".webp",alt:"sticker",class:S(e.size+" absolute inset-x-0 mx-auto")},null,10,P)]))),128))]),_:1}),e.max>1?(a(),o("button",{key:1,onClick:d[1]||(d[1]=m=>w(e.max))},N)):r("",!0)]))}});const j=g(V,[["__scopeId","data-v-c152284e"]]),y=e=>(x("data-v-8b3ccfef"),e=e(),p(),e),L={class:"box"},Q={class:"flex flex-col h-full"},F={key:0},q=y(()=>s("span",{class:"font-shrikhand"},"Design: ",-1)),O=["href"],H={key:1},J=y(()=>s("span",{class:"font-shrikhand"},"Pre\xE7o: ",-1)),K={class:"my-1.5"},R={key:0,class:"text-xs md:text-sm"},U={class:"mt-auto w-fit font-semibold"},W=v({__name:"MerchItem",props:{path:null,max:null,img_size:null,title:null,design:null,price:null,desc:null,collab:null,availability:null},setup(e){return(t,l)=>(a(),o("div",L,[i(j,{path:e.path,max:e.max,size:e.img_size},null,8,["path","max","size"]),s("div",Q,[s("h3",null,n(e.title),1),e.design?(a(),o("p",F,[q,s("a",{href:"https://www.instagram.com/"+e.design,target:"_blank"}," @"+n(e.design),9,O)])):r("",!0),e.price?(a(),o("p",H,[J,B(" "+n(e.price),1)])):r("",!0),s("div",K,[s("p",null,n(e.desc),1),e.collab?(a(),o("p",R,n(e.collab),1)):r("",!0)]),s("p",U,n(e.availability),1)])]))}});const u=g(W,[["__scopeId","data-v-8b3ccfef"]]),_=e=>(x("data-v-850a7c5d"),e=e(),p(),e),X={class:"flex flex-col gap-4 max-w-6xl mx-auto"},Y=_(()=>s("h1",null," Merch ",-1)),Z=_(()=>s("h2",null,"Autocolantes",-1)),ee=_(()=>s("p",null," Somos uma iniciativa sem fins lucrativos, no entanto precisamos sempre de fundos para nos ajudar a organizar e publicitar eventos futuros. Para tal, vendemos diferentes autocolantes LGBTQIA+ nos nossos eventos. ",-1)),se=_(()=>s("p",null," Nesta p\xE1gina podes consultar os v\xE1rios autocolantes que temos dispon\xEDveis! ",-1)),te={class:"custom_grid"},ae=v({__name:"Merch",setup(e){return(t,l)=>(a(),o("div",X,[Y,i(E,null,{header:h(()=>[Z]),content:h(()=>[ee,se]),_:1}),s("div",te,[i(u,{path:"/stickers/flags/",max:10,img_size:"h-32 top-3",title:"Bandeiras",price:"0,50\u20AC",desc:"Bandeiras de v\xE1rias identidades LGBTQIA+",availability:"Dispon\xEDvel nos nossos eventos!"}),i(u,{path:"/stickers/kittens/",max:11,img_size:"h-40",title:"Gatinhos",design:"mr_apple.pie",price:"1\u20AC",desc:"Gatinhos com as cores de v\xE1rias bandeiras LGBTQIA+",availability:"Dispon\xEDvel nos nossos eventos!"}),i(u,{path:"/stickers/pride",max:1,img_size:"h-52 top-[-24px]",title:"Celebra\xE7\xE3o do Pride",design:"santomago_art",price:"1\u20AC",desc:"Amigues a celebrar o Pride.",collab:"Colabora\xE7\xE3o com vencedor do concurso Pride Sticker 2022.",availability:"Dispon\xEDvel nos nossos eventos!"}),i(u,{path:"/stickers/brick",max:1,img_size:"h-[11.5rem] top-[-13px]",title:"Tijolo de Stonewall",design:"halluprism",price:"1\u20AC",desc:"O primeiro tijolo atirado nas revoltas de Stonewall.",collab:"Colabora\xE7\xE3o com participante do concurso Pride Sticker 2022.",availability:"Dispon\xEDvel nos nossos eventos!"})])]))}});const ne=g(ae,[["__scopeId","data-v-850a7c5d"]]);export{ne as default};
