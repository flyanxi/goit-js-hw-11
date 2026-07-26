import{a as l,S as p,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="56871072-b6eb6073cb28c17f40b270284";l.defaults.baseURL="https://pixabay.com/api/";function h(s){return l.get("",{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes: ${t}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${d}</p>
        <p>Downloads: ${m}</p>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){u.innerHTML=""}function v(){f.classList.add("visible")}function q(){f.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=c.elements["search-text"].value.trim();r&&(L(),v(),h(r).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}).catch(o=>{n.error({message:o.message})}).finally(()=>{q()}))});
//# sourceMappingURL=index.js.map
