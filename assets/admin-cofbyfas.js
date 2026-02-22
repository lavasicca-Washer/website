import"./modulepreload-polyfill-B5Qt9EMX.js";sessionStorage.getItem("laverie_auth")||(window.location.href="/admin/login.html");document.addEventListener("DOMContentLoaded",async()=>{const m=document.getElementById("admin-content"),w=document.getElementById("save-btn"),E=document.getElementById("download-btn"),I=document.getElementById("logout-btn");let n={};async function S(){try{const e=await fetch("/api/get-content");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);n=await e.json(),g(n)}catch(e){console.error("Failed to load site content:",e),alert("Erreur lors du chargement du contenu : "+e.message+`
Vérifiez que le serveur est bien lancé.`),document.getElementById("admin-content").innerHTML='<p style="color:red">Erreur de chargement. Veuillez rafraîchir la page.</p>'}}S(),I.addEventListener("click",()=>{sessionStorage.removeItem("laverie_auth"),window.location.href="/admin/login.html"}),w.addEventListener("click",async()=>{try{if(d(),(await fetch("/api/save-content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok)alert("Modifications enregistrées avec succès !");else throw new Error("Erreur sauvegarde")}catch(e){alert("Erreur lors de la sauvegarde : "+e.message)}}),E.addEventListener("click",()=>{d();const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n,null,2)),i=document.createElement("a");i.setAttribute("href",e),i.setAttribute("download","site.json"),document.body.appendChild(i),i.click(),i.remove()});function g(e){let i="";e.reviews||(e.reviews=[]),i+=p("Avis Clients (Google)",`
            <div style="display:flex; gap:20px; margin-bottom:20px; background:#f0f0f0; padding:15px; border-radius:8px;">
                ${s("reviews_global_rating","Note Globale (ex: 4.8)",e.reviews_global_rating||"4.8")}
                ${s("reviews_count","Nombre total d'avis",e.reviews_count||"100")}
            </div>
            <div id="reviews-list" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px; margin-bottom:20px;">
                ${e.reviews.map((t,a)=>`
                    <div class="card item-card">
                        <div style="display:flex; justify-content:space-between;">
                            <h4>Avis ${a+1}</h4>
                            <button type="button" class="btn-delete-review" data-index="${a}" style="background:red; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Supprimer</button>
                        </div>
                        ${s(`reviews.${a}.name`,"Nom Client",t.name)}
                        ${s(`reviews.${a}.date`,"Date",t.date)}
                        <div class="form-group">
                            <label>Note (1-5)</label>
                            <input type="number" min="1" max="5" data-path="reviews.${a}.stars" value="${t.stars}" style="width: 100%; padding: 8px;">
                        </div>
                        ${l(`reviews.${a}.text`,"Commentaire",t.text)}
                    </div>
                `).join("")}
            </div>
            <button type="button" id="btn-add-review" class="btn-black-small" style="width:100%;">+ Ajouter un avis</button>
        `),i+=p("SEO & Méta",`
            ${s("seo.title","Titre de la page",e.seo.title)}
            ${l("seo.description","Description Méta",e.seo.description)}
            <h3>Scripts & Analytics</h3>
            ${l("seo.header_scripts","Scripts Entête (<head>) - ex: Google Analytics",e.seo.header_scripts)}
            ${l("seo.body_scripts","Scripts Corps (<body>) - ex: GTM NoScript",e.seo.body_scripts)}
        `),i+=p("Haut de page (Hero)",`
            ${s("hero.title","Titre Principal",e.hero.title)}
            ${l("hero.subtitle","Sous-titre",e.hero.subtitle)}
            ${y("hero.image","Image de fond",e.hero.image)}
            ${s("hero.image_alt","Description de l'image (SEO)",e.hero.image_alt)}
            ${s("hero.overlay_opacity","Opacité de l'image (0.1 à 1)",e.hero.overlay_opacity||"0.4")}
        <h3>Boutons</h3>
            ${s("hero.cta_primary.text","Bouton 1 - Texte",e.hero.cta_primary.text)}
            ${s("hero.cta_secondary.text","Bouton 2 - Texte",e.hero.cta_secondary.text)}
        `),e.gallery&&(i+=p("Galerie Accueil (3 Photos)",`
            < div id = "gallery-list" style = "display:grid; grid-template-columns: repeat(3, 1fr); gap: 20px;" >
                ${e.gallery.map((t,a)=>`
                        <div class="card item-card">
                            <h4>Photo ${a+1}</h4>
                            ${y(`gallery.${a}.image`,"Photo",t.image)}
                            ${s(`gallery.${a}.alt`,"Description (SEO)",t.alt)}
                        </div>
                    `).join("")}
                </div >
            `)),i+=p("Tarifs",`
            ${s("pricing.banner_text","Texte Bannière",e.pricing.banner_text)}
        <div id="pricing-list">
            ${e.pricing.items.map((t,a)=>`
                    <div class="card item-card">
                        <h4>Tarif ${a+1}</h4>
                        ${s(`pricing.items.${a}.name`,"Nom",t.name)}
                        ${s(`pricing.items.${a}.price`,"Prix",t.price)}
                        ${s(`pricing.items.${a}.desc`,"Description",t.desc)}
                        ${s(`pricing.items.${a}.weight`,"Poids/Tag",t.weight)}
                    </div>
                `).join("")}
        </div>
        `),i+=p("Contact (Accueil/Pied de page)",`
            ${s("contact.title","Titre Contact",e.contact.title)}
            ${l("contact.address_text","Texte Adresse",e.contact.address_text)}
            ${f("contact.blocks",e.contact.blocks)}
        `),e.pages.services&&(i+=p("Page Services",`
                ${s("pages.services.title","Titre Page",e.pages.services.title)}
                ${l("pages.services.description","Méta Description",e.pages.services.description)}
                ${l("pages.services.intro","Intro",e.pages.services.intro)}
                ${f("pages.services.blocks",e.pages.services.blocks)}
        `)),e.pages.prices&&(i+=p("Page Tarifs",`
                ${s("pages.prices.title","Titre Page",e.pages.prices.title)}
                ${l("pages.prices.intro","Intro",e.pages.prices.intro)}
                ${l("pages.prices.why_cheap","Pourquoi pas cher ?",e.pages.prices.why_cheap)}
        <div id="prices-page-list">
            <h3>Liste détaillée</h3>
            ${e.pages.prices.list.map((t,a)=>`
                        <div class="card item-card">
                            ${s(`pages.prices.list.${a}.item`,"Prestation",t.item)}
                            ${s(`pages.prices.list.${a}.price`,"Prix",t.price)}
                        </div>
                    `).join("")}
        </div>
                ${f("pages.prices.blocks",e.pages.prices.blocks)}
        `)),e.pages.faq&&(i+=p("Page FAQ",`
                ${s("pages.faq.title","Titre Page",e.pages.faq.title)}
                ${l("pages.faq.description","Description",e.pages.faq.description)}
        <div id="faq-list">
            <h3>Questions / Réponses</h3>
            ${e.pages.faq.list.map((t,a)=>`
                        <div class="card item-card">
                            ${s(`pages.faq.list.${a}.q`,"Question",t.q)}
                            ${l(`pages.faq.list.${a}.a`,"Réponse",t.a)}
                        </div>
                    `).join("")}
        </div>
                ${f("pages.faq.blocks",e.pages.faq.blocks)}
        `)),e.pages.blog&&(i+=p("Page Blog",`
                ${s("pages.blog.title","Titre Page",e.pages.blog.title)}
                ${e.pages.blog.articles.map((t,a)=>`
                    <div class="card item-card">
                         <h4>Article: ${t.slug}</h4>
                         ${s(`pages.blog.articles.${a}.title`,"Titre",t.title)}
                         ${y(`pages.blog.articles.${a}.image`,"Image Article",t.image)}
                         ${s(`pages.blog.articles.${a}.image_alt`,"Description Image",t.image_alt)}
                         ${l(`pages.blog.articles.${a}.snippet`,"Extrait",t.snippet)}
                    </div>
                `).join("")}
        `)),m.innerHTML=i,h(),m.innerHTML=i,h(),A(),P(),T()}function T(){const e=document.getElementById("btn-add-review");e&&e.addEventListener("click",()=>{d(),n.reviews||(n.reviews=[]),n.reviews.push({name:"Nouveau Client",stars:5,text:"Avis...",date:"Il y a 1 jour"}),g(n)}),document.querySelectorAll(".btn-delete-review").forEach(i=>{i.addEventListener("click",t=>{if(confirm("Supprimer cet avis ?")){d();const a=parseInt(t.target.dataset.index);n.reviews.splice(a,1),g(n)}})})}function A(){const e=m.querySelectorAll("input, textarea"),i=document.getElementById("site-preview");e.forEach(t=>{const a=t.dataset.path;if(!a)return;const o=()=>{i&&i.contentWindow&&i.contentWindow.postMessage({type:"highlight",path:a},"*")};t.addEventListener("focus",o),t.addEventListener("mouseenter",o)})}function d(){const e=(t,a)=>{const o=t.split(".");let r=n;for(let c=0;c<o.length-1;c++)r[o[c]]||(r[o[c]]={}),r=r[o[c]];r[o[o.length-1]]=a};m.querySelectorAll("input, textarea, select").forEach(t=>{if(t.dataset.path&&e(t.dataset.path,t.value),t.classList.contains("font-selector")){const a={"Instrument Sans":"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap",Inter:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",Roboto:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",Poppins:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap","Playfair Display":"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap",Lato:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"};a[t.value]&&e("theme.font_url",a[t.value])}})}function p(e,i){return`
            <div class="section">
                <h2>${e}</h2>
                ${i}
            </div>
            `}function s(e,i,t){return`
            <div class="form-group">
                <label>${i}</label>
                <input type="text" data-path="${e}" value="${$(t||"")}">
            </div>
        `}function l(e,i,t){return`
            <div class="form-group">
                <label>${i}</label>
                <textarea data-path="${e}" rows="3">${$(t||"")}</textarea>
            </div>
            `}function y(e,i,t){return`
            <div class="form-group image-group">
                <label>${i}</label>
                <div class="image-preview">
                    <img src="${t}" id="img-preview-${e.replace(/\./g,"-")}" style="max-height: 100px; max-width: 200px; display: block; margin-bottom: 10px;">
                    <input type="text" data-path="${e}" value="${t}" id="img-input-${e.replace(/\./g,"-")}" readonly>
                </div>
                <input type="file" class="upload-btn" data-target-path="${e}">
            </div>
        `}function $(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function h(){document.querySelectorAll('input[type="file"]').forEach(e=>{e.addEventListener("change",async i=>{const t=i.target.files[0];if(!t)return;const a=i.target.dataset.targetPath,o=new FileReader;o.onload=async r=>{const c=r.target.result,_=new Uint8Array(c);try{const u=await fetch("/api/upload-image",{method:"POST",headers:{"x-filename":t.name},body:_});if(u.ok){const v=await u.json(),b=document.getElementById(`img-input-${a.replace(/\./g,"-")}`),x=document.getElementById(`img-preview-${a.replace(/\./g,"-")}`);b&&(b.value=v.path),x&&(x.src=v.path)}else alert("Erreur upload")}catch(u){console.error(u),alert("Erreur upload: "+u.message)}},o.readAsArrayBuffer(t)})})}function f(e,i){return i||(i=[]),`
            <div class="block-editor" data-root-path="${e}">
                <h3>Éditeur de Page (Blocs)</h3>
                <div class="blocks-container">
                    ${i.map((t,a)=>B(e,t,a)).join("")}
                </div>
                <div class="add-block-controls" style="margin-top: 20px; padding: 15px; background: #eee; border-radius: 8px;">
                    <label>Ajouter un bloc :</label>
                    <select id="new-block-type-${e}">
                        <option value="text">Texte</option>
                        <option value="image">Image</option>
                        <option value="video">Vidéo</option>
                        <option value="spacer">Espace Vide</option>
                    </select>
                    <button type="button" class="btn-black-small add-block-btn" data-root-path="${e}">Ajouter</button>
                </div>
            </div>
        `}function B(e,i,t){const a=`${e}.${t}`;let o="";return i.type==="text"?o=`
                ${s(`${a}.data.title`,"Titre",i.data?.title)}
                ${l(`${a}.data.content`,"Contenu",i.data?.content)}
                ${s(`${a}.style.align`,"Alignement (left/center/right)",i.style?.align||"left")}
            `:i.type==="image"?o=`
                ${y(`${a}.data.src`,"Image",i.data?.src)}
                ${s(`${a}.data.alt`,"Alt Texte",i.data?.alt)}
                <div style="display:flex; gap:10px;">
                    ${s(`${a}.style.width`,"Largeur (%)",i.style?.width||"100")}
                    ${s(`${a}.style.borderRadius`,"Arrondi (px)",i.style?.borderRadius||"0")}
                </div>
                 ${s(`${a}.style.objectPosition`,"Position (ex: center, top)",i.style?.objectPosition||"center")}
                 ${s(`${a}.style.aspectRatio`,"Format (ex: 16/9, 4/3)",i.style?.aspectRatio||"auto")}
            `:i.type==="video"?o=`
                ${s(`${a}.data.src`,"URL Vidéo",i.data?.src)}
            `:i.type==="spacer"&&(o=`
                 ${s(`${a}.data.height`,"Hauteur (px)",i.data?.height||"50")}
            `),`
            <div class="card block-card" style="border-left: 5px solid #2d6a4f; margin-bottom: 20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <strong>Bloc ${t+1}: ${i.type.toUpperCase()}</strong>
                    <div class="block-actions">
                        <button type="button" class="move-btn" data-action="up" data-index="${t}" data-root="${e}">⬆️</button>
                        <button type="button" class="move-btn" data-action="down" data-index="${t}" data-root="${e}">⬇️</button>
                        <button type="button" class="delete-btn" data-index="${t}" data-root="${e}" style="background:red; color:white; border:none; border-radius:4px; padding:2px 8px;">Suppr.</button>
                    </div>
                </div>
                ${o}
                <details>
                    <summary>Marges</summary>
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        ${s(`${a}.style.marginTop`,"Marge Haut (px)",i.style?.marginTop||0)}
                        ${s(`${a}.style.marginBottom`,"Marge Bas (px)",i.style?.marginBottom||0)}
                    </div>
                </details>
            </div>
        `}function P(){document.querySelectorAll(".add-block-btn").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.rootPath,a=document.getElementById(`new-block-type-${i}`).value;d();const o=i.split(".");let r=n;for(let c of o)r[c]||(r[c]=[]),r=r[c];r.push({type:a,data:{},style:{marginTop:20,marginBottom:20}}),g(n)})}),document.querySelectorAll(".move-btn, .delete-btn").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.root,t=parseInt(e.dataset.index),a=e.dataset.action;d();const o=i.split(".");let r=n;for(let c of o)r=r[c];if(a==="up"&&t>0)[r[t],r[t-1]]=[r[t-1],r[t]];else if(a==="down"&&t<r.length-1)[r[t],r[t+1]]=[r[t+1],r[t]];else if(!a)if(confirm("Supprimer ce bloc ?"))r.splice(t,1);else return;g(n)})})}});
