import{a as f,S as m,i as a}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(i){return f.get("https://pixabay.com/api/",{params:{key:"51720682-06a42ac8e837caf67d8afc5f8",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>n.data)}const c=document.querySelector(".gallery"),d=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p>👍 ${t}</p>
          <p>👀 ${s}</p>
          <p>💬 ${u}</p>
          <p>⬇️ ${p}</p>
        </div>
      </li>`).join("");c.innerHTML=r,d.refresh()}const l=document.querySelector("form"),y=l.querySelector('input[name="search-text"]');l.addEventListener("submit",function(i){i.preventDefault();const r=y.value.trim();if(r===""){a.warning({title:"⚠ Caution",message:"Please enter text",position:"topRight",icon:""});return}c.innerHTML="",g(r).then(o=>{if(o.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log("Знайдені картинки:",o.hits),h(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
