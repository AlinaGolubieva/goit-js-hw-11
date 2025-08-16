import{a as m,S as g,i as o}from"./assets/vendor-ChKhXQjG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(i){return m.get("https://pixabay.com/api/",{params:{key:"51720682-06a42ac8e837caf67d8afc5f8",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const c=document.querySelector(".gallery"),y=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){const r=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
  <a href="${a}">
    <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
  </a>
  <div class="info">
    <div class="info-item">
      <span class="title">Likes</span>
      <span class="value">${t}</span>
    </div>
    <div class="info-item">
      <span class="title">Views</span>
      <span class="value">${n}</span>
    </div>
    <div class="info-item">
      <span class="title">Comments</span>
      <span class="value">${d}</span>
    </div>
    <div class="info-item">
      <span class="title">Downloads⬇</span>
      <span class="value">${f}</span>
    </div>
  </div>
</li>
      `).join("");c.innerHTML=r,y.refresh()}function L(){c.innerHTML=""}const u=document.querySelector(".js-loader");function S(){u.removeAttribute("hidden")}function l(){u.setAttribute("hidden","")}const p=document.querySelector("form"),b=p.querySelector('input[name="search-text"]');p.addEventListener("submit",function(i){i.preventDefault();const r=b.value.trim();if(r===""){o.warning({title:"⚠ Caution",message:"Please enter text",position:"topRight",icon:""});return}L(),S(),h(r).then(s=>{if(l(),s.hits.length===0){o.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(s.hits)}).catch(s=>{l(),o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
