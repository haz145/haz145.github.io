import{d as r,r as i,o as u,c as p,a as e,m as d,v,q as x,p as m,i as f,l as h,_ as g,e as c,C as b}from"./index.44034f4f.js";const _=t=>(m("data-v-3997921a"),t=t(),f(),t),C={class:"border-2 rounded-xl bg-cr-beige drop-shadow-lg p-8 flex flex-col gap-3 flex-1"},E=_(()=>e("p",{class:"text-3xl font-shrikhand font-normal"},"Fala connosco!",-1)),w=_(()=>e("div",null,[e("p",null," Se tiveres alguma quest\xE3o ou recomenda\xE7\xE3o est\xE1 \xE0 vontade para entrar em contacto connosco! "),e("p",null," Podes faz\xEA-lo via este formul\xE1rio ou pelos contactos listados nesta p\xE1gina. ")],-1)),A={class:"flex flex-col items-center gap-3 w-full h-full",action:"https://formspree.io/f/xdornybk",method:"POST"},F=h('<option value="" disabled data-v-3997921a>Motivo da mensagem</option><option value="[CR Website] D\xFAvida Geral" data-v-3997921a>D\xFAvida (Geral)</option><option value="[CR Website] D\xFAvida LGBTQIA+" data-v-3997921a>D\xFAvida LGBTQIA+</option><option value="[CR Website] D\xFAvida Candidaturas" data-v-3997921a>D\xFAvida sobre Candidaturas</option><option value="[CR Website] Sugest\xE3o Geral" data-v-3997921a>Sugest\xE3o (Geral)</option><option value="[CR Website] Sugest\xE3o Media" data-v-3997921a>Sugest\xE3o de Media LGBTQIA+</option><option value="[CR Website] Parceria" data-v-3997921a>Parceria ou Colabora\xE7\xE3o</option><option value="[CR Website] Outro" data-v-3997921a>Outro</option>',8),S=[F],y=_(()=>e("button",{class:"custom_btn mt-4",type:"submit"}," Enviar ",-1)),I=r({__name:"ContactForm",setup(t){const a=i(""),s=i(""),n=i("");return window.onbeforeunload=()=>{a.value="",s.value="",n.value=""},(T,o)=>(u(),p("div",C,[E,w,e("form",A,[d(e("select",{name:"subject","onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),required:""},S,512),[[v,a.value]]),d(e("input",{name:"From:","onUpdate:modelValue":o[1]||(o[1]=l=>s.value=l),type:"email",placeholder:"O teu email...",required:""},null,512),[[x,s.value]]),d(e("textarea",{name:"Message:","onUpdate:modelValue":o[2]||(o[2]=l=>n.value=l),type:"text",placeholder:"A tua mensagem...",class:"h-[200px] lg:h-full",required:""},null,512),[[x,n.value]]),y])]))}});const $=g(I,[["__scopeId","data-v-3997921a"]]),k="/assets/kaku2.f726c46f.png",D={class:"flex flex-col flex-1"},G=e("p",{class:"text-4xl font-shrikhand font-normal text-outline-white"}," Contactos ",-1),R={class:"my-auto"},W=e("img",{src:k,alt:"panda",class:"mx-auto w-[300px] lg:max-w-[75%] lg:w-full"},null,-1),B={class:"w-full border-y-2 p-6"},M={class:"flex items-center justify-center"},V=r({__name:"ContactInfo",setup(t){return(a,s)=>(u(),p("div",D,[G,e("div",R,[W,e("div",B,[e("div",M,[c(b,{class:"flex flex-col gap-3",size:"h-10 w-10",text:!0})])])])]))}}),q={class:"grid grid-cols-1 lg:grid-cols-2 gap-8"},P=r({__name:"Contacts",setup(t){return(a,s)=>(u(),p("div",q,[c(V),c($)]))}});export{P as default};
