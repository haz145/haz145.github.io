import{_ as m,o as n,c as o,a as t,d as x,b as d,t as i,h as l,p as g,i as f,e as r,j as u}from"./index.7ad5e9a9.js";const v={},b={class:"flex flex-col gap-4"},k=t("p",{class:"text-4xl font-shrikhand font-normal text-outline-white"}," FAQ ",-1),E=t("p",null," under construction ",-1),$=[k,E];function w(e,a){return n(),o("div",b,$)}const F=m(v,[["render",w]]),C={class:"flex flex-col gap-4"},y=t("p",{class:"text-4xl font-shrikhand font-normal text-outline-white"}," Calend\xE1rio ",-1),A={class:"flex flex-wrap gap-y-4 gap-x-12"},q={class:"flex flex-col gap-2 w-full md:w-auto"},D=t("p",{class:"text-2xl font-shrikhand font-normal text-outline-white"}," Pr\xF3ximo Evento: ",-1),I=["href"],N=["src"],P=t("div",{class:"flex flex-col gap-2"},[t("p",{class:"text-2xl font-shrikhand font-normal text-outline-white"}," Publica\xE7\xF5es & Atividades: "),t("p",null," under construction ")],-1),S=x({__name:"Calendar",props:{next_event:null},setup(e){return(a,s)=>(n(),o("div",C,[y,t("div",A,[t("div",q,[D,t("a",{class:"mx-auto md:mx-0",href:e.next_event.link,target:"_blank"},[t("img",{src:e.next_event.img,alt:"pr\xF3ximo evento",class:"max-w-96 max-h-96 border-2 rounded-xl"},null,8,N)],8,I)]),P])]))}}),p=e=>(g("data-v-589bd78e"),e=e(),f(),e),V={class:"flex flex-col gap-4"},B=p(()=>t("p",{class:"text-4xl font-shrikhand font-normal text-outline-white"}," Candidaturas ",-1)),j={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"},G={class:"lg:col-span-2 flex flex-col gap-4"},z=p(()=>t("br",null,null,-1)),J=p(()=>t("span",null,"!",-1)),M={class:"text-center"},Q={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4"},R=["href"],T=["href"],H=["href"],K=x({__name:"Applications",props:{cand:null},setup(e){const a=(s,c)=>s.every(h=>c.includes(h));return(s,c)=>(n(),o("div",V,[B,t("div",j,[t("div",G,[t("p",null,[d(" Gostarias de fazer parte do Clube? As candidaturas est\xE3o abertas para "+i(a(["recr","ped","comms"],e.cand.depts)?"todos os departamentos":a(["recr","ped"],e.cand.depts)?"o departamento recreativo e pedag\xF3gico":a(["recr","comms"],e.cand.depts)?"o departamento recreativo e de comunica\xE7\xE3o":a(["ped","comms"],e.cand.depts)?"o departamento pedag\xF3gico e de comunica\xE7\xE3o":e.cand.depts.includes("recr")?"o departamento recreativo":e.cand.depts.includes("ped")?"o departamento pedag\xF3gico":e.cand.depts.includes("comms")?"o departamento de comunica\xE7\xE3o":"")+"! ",1),z,d(" Podes te candidatar "+i(e.cand.depts.length>1?"via os bot\xF5es abaixo, que te ir\xE3o":"via o bot\xE3o abaixo, que te ir\xE1")+" redirecionar para o respetivo formul\xE1rio de candidatura. ",1)]),t("p",null,[d(" Mais informa\xE7\xF5es estar\xE3o dispon\xEDveis nos formul\xE1rios - "),t("b",null,[d(" qualquer d\xFAvida n\xE3o hesites em nos "),t("button",{class:"underline hover:text-cr-brown",onClick:c[0]||(c[0]=()=>{})}," contactar "),J])]),t("p",M,[t("b",null," Candidaturas abertas at\xE9 "+i(e.cand.timelimit),1)])]),t("div",Q,[e.cand.depts.includes("recr")?(n(),o("a",{key:0,href:e.cand.recr_link,target:"_blank",class:"dept_btn text-cr-purple bg-cr-light-purple"}," Dept. Recreativo ",8,R)):l("",!0),e.cand.depts.includes("ped")?(n(),o("a",{key:1,href:e.cand.ped_link,target:"_blank",class:"dept_btn text-cr-orange bg-cr-light-orange"}," Dept. Pedag\xF3gico ",8,T)):l("",!0),e.cand.depts.includes("comms")?(n(),o("a",{key:2,href:e.cand.comms_link,target:"_blank",class:"dept_btn text-cr-teal bg-cr-light-teal"}," Dept. Comunica\xE7\xE3o ",8,H)):l("",!0)])])]))}});const L=m(K,[["__scopeId","data-v-589bd78e"]]),O={link:"https://www.instagram.com/p/Cs3w1JfN5G-/",img:"/event.jpg"},U={open:!0,timelimit:"xx/xx/xxxx",depts:["recr","ped","comms"],recr_link:"https://google.com",ped_link:"https://google.com",comms_link:"https://google.com"},_={next_event:O,candidaturas:U},W={class:"flex flex-col gap-8"},Y=x({__name:"Info",setup(e){return(a,s)=>(n(),o("div",W,[r(S,{id:"calendar",next_event:u(_).next_event},null,8,["next_event"]),r(L,{id:"apps",cand:u(_).candidaturas},null,8,["cand"]),r(F,{id:"faq"})]))}});export{Y as default};
