(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=u(r);fetch(r.href,o)}})();const m=Array.from(document.querySelectorAll(".button.number")),t=document.querySelector("#input"),p=document.querySelector("#clear"),f=Array.from(document.querySelectorAll(".button.operator")),y=document.querySelector("#divide"),g=document.querySelector("#change"),E=document.querySelector("#percent"),L=document.querySelector("#multiply"),b=document.querySelector("#minus"),h=document.querySelector("#plus"),v=document.querySelector("#solve");let n=null,c=null,e=null;t.value="0";m.forEach(l=>{l.addEventListener("click",s=>{t.value==="0"&&(t.value=""),t.value+=s.target.innerText})});f.forEach(l=>{l.addEventListener("click",s=>{var u;f.forEach(a=>{a.classList.remove("active")}),(u=s.target)==null||u.classList.add("active")})});y.addEventListener("click",()=>{c="/",i()});L.addEventListener("click",()=>{c="*",i()});h.addEventListener("click",()=>{c="+",i()});b.addEventListener("click",()=>{c="-",i()});g.addEventListener("click",()=>{t.value=-parseFloat(t.value)+""});E.addEventListener("click",()=>{t.value=parseFloat(t.value)/100+""});p.addEventListener("click",()=>{t.value="0",f.forEach(l=>{l.classList.remove("active")}),n=null,c=null,e=null});v.addEventListener("click",()=>{if(c&&n!==null){const l=parseFloat(t.value);switch(c){case"+":e=parseFloat((n+l).toFixed(4)),e>1e99&&(t.value="Error",e=null);break;case"-":e=parseFloat((n-l).toFixed(4)),e>1e99&&(t.value="Error",e=null);break;case"*":e=parseFloat((n*l).toFixed(4)),e>1e99&&(t.value="Error",e=null);break;case"/":l===0?(e=null,console.log(l),t.value="Cannot divide by zero"):(console.log(n),console.log(l),console.log(4/2),e=parseFloat((n/l).toFixed(4)),console.log(e),e>1e99&&(t.value="Error",e=null));break;default:e=null;break}e!==null&&(t.value=e.toString(),n=null,c=null,v.classList.remove("active"))}});function i(){e!==null?(n=e,e=null):n=parseFloat(t.value),t.value="0"}