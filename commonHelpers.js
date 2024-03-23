import{i as o,S as m}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(a){const r="22926721-5d20aa08498ffd1ff2f906542",s="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${i}`;return fetch(e).then(t=>t.json())}function f(a){const{largeImageURL:r,webformatURL:s,tags:i,likes:e,views:t,comments:l,downloads:p}=a;return`<li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img
            src="${s}"
            alt="${i}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${t}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${l}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${p}</li>
     </ul>
	</a>
</li>`}function d(a){return a.map(f).join("")}const n=document.querySelector(".form"),c=document.querySelector(".gallery");n.addEventListener("submit",a=>{a.preventDefault(),g.refresh(),c.innerHTML="";const r=a.target.elements.value.value;r?u(r).then(s=>{s.hits[0]===void 0&&o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const i=d(s.hits);c.insertAdjacentHTML("afterbegin",i)}).catch(s=>console.log(s)):o.error({title:"Error",message:"The search field is empty. Please try again!"}),n.reset()});const g=new m(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
