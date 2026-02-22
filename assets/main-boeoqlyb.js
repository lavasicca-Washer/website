window.addEventListener("message",t=>{const e=t.data;e&&e.type==="highlight"&&e.path&&c(e.path)});let o=null;function c(t){const e=document.querySelector(`[data-editable="${t}"]`);e&&(o&&(o.style.outline="none",o.style.boxShadow="none"),e.scrollIntoView({behavior:"smooth",block:"center"}),e.style.outline="3px solid #ff4d4f",e.style.boxShadow="0 0 10px rgba(255, 77, 79, 0.5)",e.style.transition="all 0.3s ease",o=e)}console.log("La Laverie Lens loaded",new Date().toLocaleTimeString());document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".mobile-menu-btn"),document.querySelector(".nav-links"),document.body.insertAdjacentHTML("beforeend",`
        <div id="avail-modal" class="modal-overlay">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <iframe src="" class="modal-iframe" title="Disponibilité Machines"></iframe>
            </div>
        </div>
    `);const e=document.getElementById("avail-modal"),a=e.querySelector("iframe"),i=document.querySelectorAll(".btn-live-soft");i.length>0&&i.forEach(l=>{l.addEventListener("click",n=>{n.preventDefault();const s=l.getAttribute("href");a.src=s,e.classList.add("active")})}),e.querySelector(".close-modal").addEventListener("click",()=>{e.classList.remove("active"),a.src=""}),e.addEventListener("click",l=>{l.target===e&&(e.classList.remove("active"),a.src="")})});
