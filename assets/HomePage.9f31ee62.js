import{_ as p,o as r,c as l,a as e,b as a,d as _,n as b,u as i,e as x,w as v,t as h,F as m,p as g,f as C,r as $,g as E,h as c,C as w}from"./index.256ca2f8.js";import{c as u}from"./candidaturas.b4b38532.js";import{M as k}from"./Modal.e05921bf.js";const y={},q={class:"flex flex-col gap-4 box py-6"},z=e("h1",{class:"text-center md:text-left"}," Clube Rainbow ",-1),B=e("h4",{class:"flex items-center justify-center md:justify-start gap-1.5 text-center"},[e("h4",null,"\u2726"),e("h4",null,"Bem vinde ao Clube Rainbow!"),e("h4",null,"\u2726")],-1),I=e("p",null,[a(" Somos uma iniciativa formada por estudantes da Universidade do Minho com o objetivo de "),e("b",null,"promover a educa\xE7\xE3o sobre temas LGBTQIA+ e o conv\xEDvio entre a comunidade"),a(". Garantimos assim que existe um espa\xE7o para n\xF3s dispon\xEDvel todo o ano. ")],-1),M=e("p",null,[a(" Organizamos v\xE1rios "),e("b",null,"encontros, palestras, e outros eventos"),a(" sobre os quais te podes manter a par atrav\xE9s das nossas redes sociais! ")],-1),F=[z,B,I,M];function R(n,o){return r(),l("div",q,F)}const S=p(y,[["render",R]]),j={class:"flex flex-col sm:flex-row gap-x-4 gap-y-2"},A=_({__name:"HomeBtns",setup(n){return(o,s)=>(r(),l("div",j,[e("button",{onClick:s[0]||(s[0]=t=>o.$router.push({name:"info"})),class:"bg-cr-red-beige"}," Eventos "),e("button",{onClick:s[1]||(s[1]=t=>o.$router.push({name:"info",hash:"#faq"})),class:"bg-cr-red-beige"}," FAQ "),e("button",{onClick:s[2]||(s[2]=t=>o.$emit("show_modal")),class:b({"bg-stone-300 text-stone-500":!i(u).open,"bg-cr-red-beige":i(u).open})}," Candidaturas ",2)]))}});const H=p(A,[["__scopeId","data-v-96d6f0f3"]]),d=n=>(g("data-v-cd723c98"),n=n(),C(),n),V=d(()=>e("h2",{class:"text-center sm:text-start"},"Candidaturas Abertas!",-1)),G={class:"flex flex-col gap-4 md:mx-4"},N=d(()=>e("ul",{class:"mx-auto flex flex-col gap-2"},[e("li",null,[a("Cada departamento tem diferentes fun\xE7\xF5es - sabe mais sobre eles e consulta quais est\xE3o abertos "),e("b",null,"atrav\xE9s do bot\xE3o abaixo!")]),e("li",null,"Podes candidatar-te a mais que um departamento se v\xE1rios estiverem abertos, mas s\xF3 ser\xE1s colocade em um;"),e("li",null,[a("O trabalho \xE9 "),e("b",null,"volunt\xE1rio e n\xE3o remunerado;")]),e("li",null,[a("Apenas podem fazer parte "),e("b",null,"estudantes e alumni"),a(" da Universidade do Minho.")])],-1)),Q=d(()=>e("h2",{class:"text-center sm:text-start"},"Candidaturas Fechadas",-1)),D={class:"flex flex-col gap-4 md:mx-4"},O=d(()=>e("p",null," Gostarias de fazer parte do Clube Rainbow? Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organiza\xE7\xE3o por de tr\xE1s dos mesmos, deves candidatar-te a um dos nossos departamentos. ",-1)),P=d(()=>e("p",null,[a(" Infelizmente, "),e("b",null,"as candidaturas para os departamentos do Clube Rainbow est\xE3o fechadas"),a(" de momento. ")],-1)),T=_({__name:"ModalCands",setup(n){return(o,s)=>(r(),x(k,null,{default:v(()=>[i(u).open?(r(),l(m,{key:0},[V,e("div",G,[e("p",null,[a(" Gostarias de fazer parte do Clube Rainbow? Qualquer pessoa pode participar nos nossos eventos, mas caso queiras ajudar na organiza\xE7\xE3o por de tr\xE1s dos mesmos, aproveita agora - "),e("b",null,"as candidaturas para os departamentos do Clube Rainbow est\xE3o abertas at\xE9 "+h(i(u).timelimit)+"!",1)]),N,e("button",{class:"w-full",onClick:s[0]||(s[0]=t=>o.$router.push({name:"about",hash:"#depts"}))}," Consultar Departamentos ")])],64)):(r(),l(m,{key:1},[Q,e("div",D,[O,P,e("p",null,[a(" Mas n\xE3o te preocupes! As candidaturas abrem sempre pelo menos uma vez por ano, logo, ter\xE1s sempre outras oportunidades para te candidatares. Fica atente \xE0s nossas "),e("button",{class:"click",onClick:s[1]||(s[1]=t=>o.$router.push({name:"contacts"}))},"redes sociais"),a(" para que possas ser notificade quando estas abrirem novamente! ")]),e("button",{onClick:s[2]||(s[2]=t=>o.$emit("close"))}," Voltar ")])],64))]),_:1}))}});const U=p(T,[["__scopeId","data-v-cd723c98"]]),L={class:"flex flex-col-reverse md:flex-row items-center md:items-start gap-x-6 gap-y-4"},J={class:"flex flex-col gap-6 w-full md:min-w-[600px] md:max-w-[50%]"},Y=_({__name:"HomePage",setup(n){const o=$(!1);return(s,t)=>(r(),l(m,null,[o.value?(r(),x(U,{key:0,onClose:t[0]||(t[0]=f=>o.value=!1)})):E("",!0),e("div",L,[e("div",J,[c(S),c(H,{onShow_modal:t[1]||(t[1]=f=>o.value=!0)})]),c(w,{class:"shrink-0 flex -mt-1 md:my-0 md:flex-col gap-4",size:"h-10 w-10"})])],64))}});export{Y as default};