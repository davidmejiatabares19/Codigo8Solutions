(function(){
  const cfg=window.CODIGO8_ANALYTICS_CONFIG||{};
  const id=(cfg.MEASUREMENT_ID||"").trim();
  const valid=/^G-[A-Z0-9]+$/i.test(id)&&id!=="G-REEMPLAZAR";
  function load(){
    if(!valid||window.gtag)return;
    const script=document.createElement("script");
    script.async=true;script.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);
    document.head.appendChild(script);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments)};
    gtag("js",new Date());
    gtag("config",id,{anonymize_ip:true,send_page_view:true});
    document.querySelectorAll('a[href*="wa.me"]').forEach(a=>a.addEventListener("click",()=>gtag("event","whatsapp_click",{link_url:a.href})));
    const form=document.getElementById("form");
    if(form)form.addEventListener("submit",()=>gtag("event","generate_lead",{form_name:"contacto"}));
  }
  function close(){const b=document.getElementById("cookieBanner");if(b)b.hidden=true}
  document.addEventListener("DOMContentLoaded",()=>{
    const choice=localStorage.getItem("codigo8_analytics_consent");
    if(choice==="granted"){load();close()} else if(choice==="denied"){close()}
    document.getElementById("acceptAnalytics")?.addEventListener("click",()=>{localStorage.setItem("codigo8_analytics_consent","granted");load();close()});
    document.getElementById("rejectAnalytics")?.addEventListener("click",()=>{localStorage.setItem("codigo8_analytics_consent","denied");close()});
  });
})();
