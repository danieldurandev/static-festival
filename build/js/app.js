function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-princiapl a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n        <picture>\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif" />\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp" />\n        <img\n          loading="lazy"\n          width="200"\n          height="300"\n          src="build/img/thumb/${n}.jpg"\n          alt="imagen"\n        />\n      </picture>\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n        <picture>\n        <source srcset="build/img/grande/${e}.avif" type="image/avif" />\n        <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n        <img\n          loading="lazy"\n          width="200"\n          height="300"\n          src="build/img/grande/${e}.jpg"\n          alt="imagen"\n        />\n      </picture>\n        `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("p");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
