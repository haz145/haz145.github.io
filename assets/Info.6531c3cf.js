import{d as i,o as t,c as o,a as e,b as p,m as r,l as c,p as u,i as x,_ as f,e as _}from"./index.d3cb51ac.js";import{i as l}from"./info.7ca840d4.js";const v={class:"flex flex-col gap-4"},m=e("p",{class:"title"}," FAQ ",-1),h={class:"flex flex-col gap-2"},g=e("p",{class:"subsubtitle"}," \u2726 Como posso fazer parte? \u2726 ",-1),b=r('<div class="flex flex-col gap-2"><p class="subsubtitle"> \u2726 Quem pode participar nos eventos? \u2726 </p><p> aaa </p></div><div class="flex flex-col gap-2"><p class="subsubtitle"> \u2726 Onde/quando s\xE3o os eventos? \u2726 </p><p> aaa </p></div><div class="flex flex-col gap-2"><p class="subsubtitle"> \u2726 Posso entrar no Discord se... \u2726 </p><p> aaa </p></div>',3),E=i({__name:"Faq",setup(s){return(n,a)=>(t(),o("div",v,[m,e("div",h,[g,e("p",null,[p(" Todes s\xE3o bem vindes a participar nos eventos do Clube Rainbow, mas caso queiras fazer parte da sua organiza\xE7\xE3o, deves candidatar-te a um dos nossos departamentos - "),e("button",{class:"click",onClick:a[0]||(a[0]=P=>n.$router.push({name:"about",hash:"#depts"}))}," sabe mais sobre eles aqui! ")])]),b]))}}),d=s=>(u("data-v-a52c98f5"),s=s(),x(),s),k={class:"flex flex-col gap-4"},$=d(()=>e("p",{class:"title"}," Eventos ",-1)),w={class:"flex flex-col md:flex-row gap-y-4 gap-x-12"},y={class:"flex flex-col gap-2"},q=d(()=>e("p",{class:"subtitle"}," Pr\xF3ximo Evento: ",-1)),C={class:"mx-auto h-64 w-64 sm:h-72 sm:w-72 lg:h-96 lg:w-96 flex items-center justify-center border-2 rounded-xl bg-cr-beige drop-shadow-lg"},I=["href"],F=["src"],N={key:1,class:"text-xl md:text-2xl font-shrikhand font-normal"},S=d(()=>e("div",{class:"flex flex-col gap-2"},[e("p",{class:"subtitle md:whitespace-nowrap"}," Calend\xE1rio: "),e("p",null," under construction ")],-1)),V=i({__name:"Events",setup(s){return(n,a)=>(t(),o("div",k,[$,e("div",w,[e("div",y,[q,e("div",C,[c(l).next_event.img&&c(l).next_event.link?(t(),o("a",{key:0,href:c(l).next_event.link,target:"_blank",class:"alt_highlight"},[e("img",{src:c(l).next_event.img,alt:"pr\xF3ximo evento",class:"rounded-xl"},null,8,F)],8,I)):(t(),o("p",N," Em breve... "))])]),S])]))}});const z=f(V,[["__scopeId","data-v-a52c98f5"]]),B={class:"flex flex-col gap-8"},j=i({__name:"Info",setup(s){return(n,a)=>(t(),o("div",B,[_(z,{id:"events"}),_(E,{id:"faq"})]))}});export{j as default};
