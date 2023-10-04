(()=>{var C=[],s={q:e=>document.querySelector(e),qa:e=>document.querySelectorAll(e),gId:e=>document.getElementById(e),debounce(e,t,o){let n;return function(){let i=this,r=arguments;clearTimeout(n),n=setTimeout(function(){n=null,o||e.apply(i,r)},t),o&&!n&&e.apply(i,r)}},wrap(e,t,o={}){if(typeof t=="string"){t=document.createElement(t);for(let[n,i]of Object.entries(o))t.setAttribute(n,i)}e.parentNode.insertBefore(t,e),t.appendChild(e)},urlFor(e){return/^(#|\/\/|http(s)?:)/.test(e)?e:(window.ASYNC_CONFIG.root+e).replace(/\/{2,}/g,"/")},siblings:(e,t)=>[...e.parentNode.children].filter(o=>t?o!==e&&o.matches(t):o!==e),message(e,t="success"){let o=document.createElement("div");o.className=`trm-message ${t}`,o.style.top=`${30+C.length*60}px`,o.innerText=e,document.body.append(o),C.push(o),setTimeout(()=>{C=C.filter(n=>n!==o),document.body.removeChild(o),C.forEach((n,i)=>{n.style.top=`${30+i*60}px`})},2e3)},loadScript(e,t){return new Promise((o,n)=>{if(t)o();else{let i=document.createElement("script");i.src=e,i.setAttribute("async","false"),i.onerror=n,i.onload=()=>o(),document.head.appendChild(i)}})},runScriptBlock(e){let t=e.text||e.textContent||e.innerHTML||"",o=document.head||document.querySelector("head")||document.documentElement,n=document.createElement("script");if(t.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped "),!1;try{n.appendChild(document.createTextNode(t))}catch{n.text=t}o.appendChild(n),o.contains(n)&&o.removeChild(n)},icons(e,t="font"){return t==="symbol"?`<svg class="symbol-icon " aria-hidden="true"><use xlink:href="#${e}"></use></svg>`:`<i class="iconfont ${e}"></i>`},diffDate:(e,t=!1)=>{let o=new Date,n=new Date(e),i=o.getTime()-n.getTime(),r=1e3*60,c=r*60,a=c*24,f=a*30,p;if(t){let h=i/f,b=i/a,m=i/c,g=i/r;h>12?p=n.toISOString().slice(0,10):h>=1?p=parseInt(h.toString())+" "+window.ASYNC_CONFIG.date_suffix.month:b>=1?p=parseInt(b.toString())+" "+window.ASYNC_CONFIG.date_suffix.day:m>=1?p=parseInt(m.toString())+" "+window.ASYNC_CONFIG.date_suffix.hour:g>=1?p=parseInt(g.toString())+" "+window.ASYNC_CONFIG.date_suffix.min:p=window.ASYNC_CONFIG.date_suffix.just}else p=parseInt((i/a).toString());return p},getRandomItem(e){if(Array.isArray(e)){if(e.length===0)return;let t=Math.floor(Math.random()*e.length);return e[t]}return e},scrollBarWidth(){let e=document.createElement("div");e.className="async-scrollbar__wrap",e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);let t=e.offsetWidth;e.style.overflow="scroll";let o=document.createElement("div");o.style.width="100%",e.appendChild(o);let n=o.offsetWidth;return e.parentNode.removeChild(e),t-n},clickoutside(e,t){return t.includes(e)?!1:e.parentElement?s.clickoutside(e.parentElement,t):!0}};var z=function(e=600){return new Promise(t=>{s.q("html").classList.add("is-animating"),s.q(".trm-scroll-container").style.opacity="0",setTimeout(function(){s.q("html").classList.remove("is-animating"),s.q(".trm-scroll-container").style.opacity="1",t()},e)})},H=function(e=600){let t=s.q("#trm-scroll-container"),o=s.q(".trm-mode-swich-animation-frame");return new Promise(n=>{o.classList.add("trm-active"),t.style.opacity="0",setTimeout(()=>{setTimeout(()=>{o.classList.remove("trm-active"),t.style.opacity="1"},e),n()},e)})},J=function(){document.body.classList.toggle("trm-single-column")},U=function(){let e=document.body;e.classList.add("trm-read-mode");let t=document.createElement("button");t.type="button",t.title=window.ASYNC_CONFIG.i18n.exit_read_mode,t.className="trm-exit-readmode trm-glow",t.innerHTML=s.icons(window.ASYNC_CONFIG.icons.close,window.ASYNC_CONFIG.icontype),e.appendChild(t);function o(){e.classList.remove("trm-read-mode"),t.remove(),t.removeEventListener("click",o)}t.addEventListener("click",o)},V=function(e){H().then(()=>{let t=e==="style-dark"?"add":"remove";s.q(".trm-mode-swich-animation").classList[t]("trm-active"),document.documentElement.classList[t]("dark"),localStorage.setItem("theme-mode",e),I(),typeof window.changeGiscusTheme=="function"&&window.changeGiscusTheme()})},I=function(e="--theme-bg-color"){let t=getComputedStyle(document.documentElement).getPropertyValue(e),o=s.q('meta[name="theme-color"]');t&&o&&(o.content=t)},X=function(e,t,o){let n=s.q("#post-toc");n&&(e===void 0&&(e=!n.classList.contains("active")),e&&(t&&o?(o+n.clientHeight>window.innerHeight&&(o=Math.max(window.innerHeight-n.clientHeight,0)),t+n.clientWidth>window.innerWidth&&(t=Math.max(window.innerWidth-n.clientWidth,0)),n.style.left=`${t}px`,n.style.top=`${o}px`,n.style.right="unset",n.style.bottom="unset"):(n.style.removeProperty("left"),n.style.removeProperty("top"),n.style.removeProperty("right"),n.style.removeProperty("bottom"))),e?n.classList.add("active"):n.classList.remove("active"))},v={pageLoading:z,themeLoading:H,switchSingleColumn:J,switchReadMode:U,switchThemeMode:V,setThemeColor:I,switchToc:X};var E=class{constructor(t){this.name="HeadPlugin";this.isSwupPlugin=!0;this.defaultOptions={persistTags:!1,persistAssets:!1,specialTags:!1};this.getHeadAndReplace=()=>{let t=this.getHeadChildren(),o=this.getNextHeadChildren();this.replaceTags(t,o)};this.getHeadChildren=()=>document.head.children;this.getNextHeadChildren=()=>{let t=this.swup.cache.getCurrentPage().originalContent.replace("<head",'<div id="swupHead"').replace("</head>","</div>"),o=document.createElement("div");o.innerHTML=t;let n=o.querySelector("#swupHead").children;return o.innerHTML="",o=null,n};this.replaceTags=(t,o)=>{let n=document.head,i=Boolean(document.querySelector("[data-swup-theme]")),r=this.getTagsToAdd(t,o,i),c=this.getTagsToRemove(t,o);c.reverse().forEach(a=>{n.removeChild(a.tag)}),r.forEach(a=>{n.insertBefore(a.tag,n.children[a.index+1]||null)}),this.swup.log(`Removed ${c.length} / added ${r.length} tags in head`)};this.compareTags=(t,o)=>{let n=t.outerHTML,i=o.outerHTML;return n===i};this.getTagsToRemove=(t,o)=>{let n=[];for(let i=0;i<t.length;i++){let r=null;for(let c=0;c<o.length;c++)if(this.compareTags(t[i],o[c])){r=c;break}r==null&&t[i].getAttribute("data-async-theme")===null&&!this.isMatchesTag(t[i],this.options.persistTags)&&n.push({tag:t[i]})}return n};this.getTagsToAdd=(t,o,n)=>{let i=[];for(let r=0;r<o.length;r++){let c=null;for(let a=0;a<t.length;a++)if(this.compareTags(t[a],o[r])){c=a;break}c==null&&!this.isMatchesTag(o[r],this.options.specialTags)&&i.push({index:n?r+1:r,tag:o[r]})}return i};this.isMatchesTag=(t,o=this.options.persistTags)=>typeof o=="function"?o(t):typeof o=="string"?t.matches(o):Boolean(o);this.updateHtmlLangAttribute=()=>{let t=document.documentElement,n=new DOMParser().parseFromString(this.swup.cache.getCurrentPage().originalContent,"text/html").documentElement.lang;t.lang!==n&&(this.swup.log(`Updated lang attribute: ${t.lang} > ${n}`),t.lang=n)};this.options={...this.defaultOptions,...t},this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.swup.on("contentReplaced",this.getHeadAndReplace),this.swup.on("contentReplaced",this.updateHtmlLangAttribute)}unmount(){this.swup.off("contentReplaced",this.getHeadAndReplace),this.swup.off("contentReplaced",this.updateHtmlLangAttribute)}},A=E;var K=e=>Array.prototype.slice.call(e),x=class{constructor(t={}){this.name="ScriptPlugin";this.isSwupPlugin=!0;this.defaultOptions={selectors:"script[data-swup-reload-script]"};this.getScriptAndInsert=()=>{let t=this.getNextScriptChildren();t.length&&(async n=>{let i=Array.from(document.scripts);for(let r=0;r<n.length;r++){let c=n[r];c.src?i.findIndex(a=>a.src===c.src&&!a.dataset.reset)<0&&await this.loadScript(c):s.runScriptBlock(c)}})(t)};this.options={...this.defaultOptions,...t}}mount(){this.swup.on("contentReplaced",this.getScriptAndInsert)}unmount(){this.swup.off("contentReplaced",this.getScriptAndInsert)}loadScript(t){return new Promise((o,n)=>{let i=document.createElement("script");for(let{name:r,value:c}of K(t.attributes))i.setAttribute(r,c);i.textContent=t.textContent,i.setAttribute("async","false"),i.onload=()=>{o(),document.body.contains(i)&&document.body.removeChild(i)},i.onerror=n,document.body.appendChild(i)})}getNextScriptChildren(){let t=this.swup.cache.getCurrentPage().originalContent.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div");o.innerHTML=t;let n=o.querySelector("#swupBody").querySelectorAll(this.options.selectors);return o.innerHTML="",o=null,n}},M=x;function k(){window.Fancybox&&(window.Fancybox.bind("[data-fancybox]"),window.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.defaults.Hash=!1)}function q(){if(window.Swiper)var e=new window.Swiper(".trm-slideshow",{slidesPerView:1,effect:"fade",parallax:!0,autoplay:!0,speed:1400})}function F(){window.Fancybox&&s.qa("#article-container img:not(.no-fancybox)").forEach(e=>{if(!e.parentNode.dataset.fancybox){let t="article";e.classList.contains("trm-light-icon")?t="light":e.classList.contains("trm-dark-icon")&&(t="dark"),s.wrap(e,"div",{"data-src":e.dataset.src||e.src,"data-fancybox":t})}})}function Q(){let e=[];e.push(new A({specialTags:"#trm-switch-style"})),e.push(new M);let t={containers:["#trm-dynamic-content"],animateHistoryBrowsing:!0,linkSelector:".trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])",animationSelector:'[class="trm-swup-animation"]',plugins:e};return new window.Swup(t)}function O(e=!1){let t=s.q("#trm-swich"),o=s.q(".trm-mode-swich-animation"),n=s.q(".trm-mode-swich-animation-frame");if(e){let i=(localStorage.getItem("theme-mode")||window.ASYNC_CONFIG.theme.default)=="style-dark",r=i?"add":"remove";o.classList[r]("trm-active"),n.classList.remove("trm-active"),v.setThemeColor(),t&&(t.checked=i)}t&&t.addEventListener("change",function(){v.switchThemeMode(this.checked?"style-dark":"style-light")})}function G(){let e=s.scrollBarWidth(),t=s.q(".trm-banner-cover"),o=s.q(".trm-sidebar"),n=s.q("#trm-back-top"),i=s.q("#scroll-triger"),r=s.q(".trm-fixed-container"),c=new IntersectionObserver((m,g)=>{m.forEach(({isIntersecting:d,target:u})=>{d&&(u.classList.add("trm-active-el"),c.unobserve(u))})},{threshold:[0,1],rootMargin:"0px 0px -40px 0px"}),a=function(m){window.scrollTo({top:0,behavior:m?"smooth":"auto"})},f=function(){let m=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,{scrollHeight:g,clientHeight:d}=document.documentElement,u=m>500?"add":"remove";r==null||r.classList[u]("offset");let y=parseInt((m/(g-d)*100).toString());n&&(n.style.backgroundSize=`100% ${y}%`);let l=m>=70?"add":"remove";o&&o.classList[l]("fixed"),t&&(t.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.min(m/3,100)}, 0, 1)`),v.switchToc(!1)},p=function(){o&&(o.style.width=window.innerWidth>992?`${o.parentElement.clientWidth-40}px`:"auto")},h=function(){let m=s.q(".trm-banner");m&&window.scrollTo({top:m.clientHeight-20,behavior:"smooth"})};(()=>{s.qa(".trm-scroll-animation").forEach(g=>{g&&c.observe(g)}),f(),p()})(),n==null||n.addEventListener("click",a),i==null||i.addEventListener("click",h),window.addEventListener("scroll",f),window.addEventListener("resize",p),document.addEventListener("swup:contentReplaced",m=>{c.disconnect(),n==null||n.removeEventListener("click",a),i==null||i.removeEventListener("click",h),window.removeEventListener("scroll",f),window.removeEventListener("resize",p),a()})}function P(e=2e3){let t=(o,n,i,r)=>{i+=n,i>=r?o.innerText=r.toString():(o.innerText=parseInt(i.toString()).toString(),requestAnimationFrame(()=>t(o,n,i,r)))};s.qa(".trm-counter").forEach(o=>{let n=Number(o.innerText);if(!isNaN(n)){let i=n/(e/16);t(o,i,0,n)}})}function $(){let e=s.q("#post-toc"),t=s.q(".post-toc-btn");if(e){e.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();let i=n.target,r=i.getAttribute("href");if(r||(r=i.parentElement.getAttribute("href")),!r)return;let c=document.querySelector(r);if(!c)return;let a=c.getBoundingClientRect().top+(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop);return window.scrollTo({top:a-110,behavior:"smooth"}),!1}),window.ASYNC_CONFIG.toc.post_title&&e.querySelectorAll(".trm-toc-link").forEach(n=>{let i=n.getAttribute("href"),r=s.q(i);if(!r)return;let c=document.createElement("span");c.className="trm-toc-icon",c.innerHTML=s.icons(window.ASYNC_CONFIG.icons.toc_tag),c.onclick=function(a){return v.switchToc(!0,a.clientX,a.clientY),a.preventDefault(),a.stopPropagation(),!1},r.appendChild(c)});let o=n=>{s.clickoutside(n.target,[e,t])?e.classList.remove("active"):v.switchToc()};window.addEventListener("click",o),document.addEventListener("swup:contentReplaced",n=>{window.removeEventListener("click",o)})}}function Z(){if(window.ASYNC_CONFIG.creative_commons){let{author:e,i18n:t,creative_commons:o}=window.ASYNC_CONFIG,n=function(i){let r=i.clipboardData||window.clipboardData;if(!r)return;let c=window.getSelection().toString();if(c){i.preventDefault();let a=document.getElementById("post-author");a&&(e=a.innerText.replace(`
`,""));let f=location.href,p=document.getElementById("original-link");p&&(f=p.innerText.replace(`
`,""));let h=`

${t.author}${e}
${t.copyright_link}${f}
${t.copyright_license_title}${t.copyright_license_content.replace("undefined","CC"+o.license.toUpperCase()+" "+(o.license=="zero"?"1.0":"4.0"))}`;r.setData("text/plain",c+h)}};document.addEventListener("copy",n)}}function Y(){let{i18n:e,highlight:t,icons:o,icontype:n}=window.ASYNC_CONFIG,i=t.copy,r=t.lang,c=t.height_limit,a=i||r,f=t.plugin==="prismjs",p=t.title==="mac",h=f?'pre[class*="language-"]':"figure.highlight",b=s.qa(h);if(!(a||c||b.length))return;let m=function(){try{let d=this.parentNode.parentNode,u=d.querySelector(".code");if(u||(u=d.querySelector("table")),u||(u=d.querySelector("code")),!u)return;navigator.clipboard.writeText(u.innerText),s.message(e.copy_success)}catch{s.message(e.copy_failure,"warning")}},g=function(){var L,S,N;let d,u,y,l,w=(L=window==null?void 0:window.locomotiveScrollInstance)==null?void 0:L.scroll;if(d=this.classList.contains("expand-done"),y=this.parentElement.clientHeight,l=(N=(S=w==null?void 0:w.instance)==null?void 0:S.scroll)==null?void 0:N.y,this.classList.toggle("expand-done"),u=this.parentElement.clientHeight,d&&w){let _=y-u;if(_<w.scrollbarHeight)return;window.locomotiveScrollInstance.setScroll(w.instance.delta.x,l-_)}};s.qa(h).forEach(d=>{let u=document.createDocumentFragment(),y=document.createElement("div");if(y.className=`code-tools ${a&&p?"mac-style":"default-style"}`,r){let l="";f?l=d.getAttribute("data-language")?d.getAttribute("data-language"):"Code":(l=d.getAttribute("class").split(" ")[1],(l==="plain"||l===void 0)&&(l="Code"));let w=document.createElement("span");w.className="code-lang",w.innerText=l,y.append(w)}if(i){let l=document.createElement("span");l.className="copy-button",l.innerHTML=s.icons(o.copy,n),l.addEventListener("click",m),y.append(l)}if(c&&d.offsetHeight>t.height_limit+50){let l=document.createElement("div");l.innerHTML=s.icons(o.double_arrows,n),l.className="code-expand-btn",l.addEventListener("click",g),u.append(l)}if(u.append(y),f){s.wrap(d,"figure",{class:"highlight"}),d.parentNode.insertBefore(u,d);let l=d.querySelector(".caption,caption");l&&d.parentNode.appendChild(l)}else d.insertBefore(u,d.querySelector("table"))})}function D(){s.qa(".trm-tabs .trm-tab > button").forEach(function(e){e.addEventListener("click",function(t){let o=this,n=o.parentNode;if(!n.classList.contains("active")){let i=n.parentNode.nextElementSibling,r=s.siblings(n,".active")[0];r&&r.classList.remove("active"),n.classList.add("active");let c=o.getAttribute("data-href").replace("#","");[...i.children].forEach(f=>{f.id===c?f.classList.add("active"):f.classList.remove("active")})}})})}function B(){let e=s.qa(".fj-gallery");e.length&&(e.forEach(t=>{t.querySelectorAll("img").forEach(n=>{n.loading="eager",s.wrap(n,"div",{class:"fj-gallery-item","data-src":n.dataset.src||n.src,"data-fancybox":"gallery"})})}),s.loadScript(window.ASYNC_CONFIG.plugin.flickr_justified_gallery,window.fjGallery).then(()=>{e.forEach(t=>{window.fjGallery(t,{itemSelector:".fj-gallery-item",rowHeight:220,gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})}))}function tt(){if(window.ASYNC_CONFIG&&window.ASYNC_CONFIG.favicon.visibilitychange){window.originTitle=document.title;let e,t=Array.from(s.qa('[rel="icon"]')),o=t.map(n=>n.href);document.addEventListener("visibilitychange",function(){document.hidden?(t.forEach(n=>{n.href=s.urlFor(window.ASYNC_CONFIG.favicon.hidden)}),document.title=window.ASYNC_CONFIG.favicon.hideText,clearTimeout(e)):(t.forEach((n,i)=>{n.href=o[i]}),document.title=window.ASYNC_CONFIG.favicon.showText+window.originTitle,e=setTimeout(function(){document.title=window.originTitle},2e3))})}}function R(){let{notice_outdate:e,i18n:t}=window.ASYNC_CONFIG;if(e){let o=s.diffDate(window.PAGE_CONFIG.postUpdate);if(o>=e.limit_day){let n=document.createElement("div");n.className=`post-outdate-notice ${e.position}`,n.textContent=t.notice_outdate_message.replace("undefined",o.toString());let i=document.getElementById("article-container");e.position==="top"?i.insertBefore(n,i.firstChild):i.appendChild(n)}}}function W(){if(window.ASYNC_CONFIG.covers&&window.PAGE_CONFIG.isHome){let e=window.ASYNC_CONFIG.covers;s.qa("div[data-random-img]").forEach(o=>{let n=s.getRandomItem(e);n+=n.includes("?")?`&v=${Math.random()}`:`?v=${Math.random()}`,n&&(o.style.backgroundImage=`url(${n})`)})}}function j(){s.q(".trm-menu-btn").addEventListener("click",function(){s.q(".trm-menu-btn,.trm-right-side").classList.toggle("trm-active")})}function et(){let e=t=>console.log(t,"color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;","padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);");e(`%c \u{1F680} Hexo-Theme-Async ${window.ASYNC_CONFIG.theme_version=="0.0.0"?"Github":window.ASYNC_CONFIG.theme_version} %c https://github.com/MaLuns/hexo-theme-async `),e("%c \u{1F4D1} Hexo-Theme-Async Docs %c https://hexo-theme-async.imalun.com ")}function T(){window.asyncFun=v,et(),v.pageLoading(),tt(),window.PAGE_CONFIG.isPost&&R(),B(),F(),Y(),D(),window.ASYNC_CONFIG.swup&&Q(),j(),O(!0),P(),G(),q(),k(),$(),Z(),W(),window.ASYNC_CONFIG.swup&&document.addEventListener("swup:contentReplaced",function(){let e=s.gId("async-page-config");e&&s.runScriptBlock(e),window.PAGE_CONFIG.isPost&&R(),j(),document.body.classList.remove("trm-read-mode"),window.show_date_time&&window.show_date_time(),B(),F(),Y(),D(),s.q(".trm-scroll-container").style.opacity="1",O(!0),P(),G(),q(),k(),$(),W()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();})();