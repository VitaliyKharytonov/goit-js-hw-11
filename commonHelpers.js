import{S as m,i as o}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(a){const s="22926721-5d20aa08498ffd1ff2f906542",r="https://pixabay.com/api/",l=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",per_page:30,safesearch:!0}),e=`${r}?${l}`;return fetch(e).then(t=>t.json())}function f(a){const{largeImageURL:s,webformatURL:r,tags:l,likes:e,views:t,comments:i,downloads:d}=a;return`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            src="${r}"
            alt="${l}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${t}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${i}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${d}</li>
     </ul>
	</a>
</li>`}function g(a){return a.map(f).join("")}const n=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("submit",a=>{a.preventDefault(),c.innerHTML="";const s=a.target.elements.value.value;s?(p.classList.remove("is-hidden"),u(s).then(r=>{r.hits.length||o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const l=g(r.hits);c.insertAdjacentHTML("afterbegin",l),p.classList.add("is-hidden"),y.refresh()}).catch(r=>console.log(r))):o.error({title:"Error",message:"The search field is empty. Please try again!"}),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
