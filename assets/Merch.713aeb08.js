import{d as h,r as d,o as a,c as o,h as p,e as c,w as f,m as g,F as k,g as b,a as e,n as w,u as B,p as $,i as y,f as m,_ as E,q as S}from"./index.a521ba74.js";const x=s=>($("data-v-d4b4e182"),s=s(),y(),s),C={class:"flex items-center gap-2 mx-auto"},I=x(()=>e("img",{src:m,alt:"toggle list",class:"h-5 w-5 rotate-90 hover:brightness-125"},null,-1)),D=[I],G=["src"],L=x(()=>e("img",{src:m,alt:"toggle list",class:"h-5 w-5 -rotate-90 hover:brightness-125"},null,-1)),N=[L],V=h({__name:"Slides",props:{path:null,max:null,shrink:{type:Boolean}},setup(s){B(n=>({c86e08fe:l.value}));const t=d(1),l=d(1),_=n=>{l.value=-1,t.value>1?t.value-=1:t.value=n},v=n=>{l.value=1,t.value<n?t.value+=1:t.value=1};return(n,i)=>(a(),o("div",C,[s.max>1?(a(),o("button",{key:0,onClick:i[0]||(i[0]=r=>_(s.max))},D)):p("",!0),c(g,{name:"imgs",tag:"div",class:"overflow-hidden relative w-52 h-40"},{default:f(()=>[(a(!0),o(k,null,b([t.value],r=>(a(),o("div",{key:r},[e("img",{src:s.path+t.value+".webp",alt:"sticker",class:w(["absolute inset-x-0 mx-auto",{"h-32 top-3":s.shrink,"h-40":!s.shrink}])},null,10,G)]))),128))]),_:1}),s.max>1?(a(),o("button",{key:1,onClick:i[1]||(i[1]=r=>v(s.max))},N)):p("",!0)]))}});const u=E(V,[["__scopeId","data-v-d4b4e182"]]),A={class:"flex flex-col gap-4"},T=e("p",{class:"text-4xl font-shrikhand font-normal text-outline-white whitespace-nowrap"}," Autocolantes ",-1),Q=e("div",null,[e("p",null," Somos uma iniciativa sem fins lucrativos, no entanto precisamos sempre de fundos para nos ajudar a organizar e publicitar eventos futuros. Para tal, vendemos diferentes autocolantes LGBTQIA+ nos nossos eventos. "),e("p",null," Nesta p\xE1gina podes consultar os v\xE1rios autocolantes que temos dispon\xEDveis! ")],-1),q={class:"grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-2"},z={class:"flex flex-col gap-2 py-4 px-8 border-2 rounded-xl drop-shadow-lg bg-cr-beige"},F=e("div",{class:"flex flex-col"},[e("p",{class:"text-2xl font-shrikhand font-normal text-outline-white"}," Bandeiras "),e("p",{class:"mt-1.5"}," Bandeiras de v\xE1rias identidades LGBTQIA+ "),e("p",{class:"italic"}," Dispon\xEDvel nos nossos eventos! ")],-1),j={class:"flex flex-col gap-2 py-4 px-8 border-2 rounded-xl drop-shadow-lg bg-cr-beige"},M=S('<div class="flex flex-col"><p class="text-2xl font-shrikhand font-normal text-outline-white"> Gatinhos </p><p><span class="font-shrikhand font-normal">Design: </span> Lee - <a class="hover:underline" href="https://www.instagram.com/mr_apple.pie" target="_blank"> @mr_apple.pie </a></p><p class="mt-1.5"> Gatinhos com as cores de v\xE1rias bandeiras LGBTQIA+ </p><p class="italic"> Dispon\xEDvel nos nossos eventos! </p></div>',1),H=h({__name:"Merch",setup(s){return(t,l)=>(a(),o("div",A,[T,Q,e("div",q,[e("div",z,[c(u,{path:"/stickers/flags/",max:10,shrink:!0}),F]),e("div",j,[c(u,{path:"/stickers/kittens/",max:11}),M])])]))}});export{H as default};
