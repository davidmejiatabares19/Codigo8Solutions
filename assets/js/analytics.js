(function(){
  const cfg=window.CODIGO8_ANALYTICS_CONFIG||{};
  const id=(cfg.MEASUREMENT_ID||"").trim();
  const valid=/^G-[A-Z0-9]+$/i.test(id)&&id!=="G-REEMPLAZAR";
  if(!valid||window.gtag)return;
  const script=document.createElement("script");
  script.async=true;script.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);
  document.head.appendChild(script);
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){dataLayer.push(arguments)};
  gtag("js",new Date());
  gtag("config",id,{anonymize_ip:true,send_page_view:true});
  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener("click",()=>gtag("event","whatsapp_click",{link_url:a.href})));
    const video=document.querySelector("#logisaasModal video");
    if(video)video.addEventListener("play",()=>gtag("event","video_start",{video_title:"LogiSaaS"}),{once:true});
    document.getElementById("logisaasModal")?.addEventListener("shown.bs.modal",()=>gtag("event","product_view",{product:"LogiSaaS"}));
    document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>gtag("event","demo_request_click",{product:"LogiSaaS"})));
    const form=document.getElementById("form");
    if(form)form.addEventListener("submit",()=>gtag("event","generate_lead",{form_name:"contacto"}));
  });
})();
