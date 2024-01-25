(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),c=t(667),s=t.n(c),l=new URL(t(745),t.b),d=new URL(t(6),t.b),u=a()(i()),p=s()(l),h=s()(d);u.push([n.id,`@font-face {\n    font-family: 'primaryFont';\n    src: url(${p});\n}\n@font-face {\n    font-family: 'SecondaryFont';\n    src: url(${h});\n}\n/*GLOBAL*/\n:root {\n    --primaryColor: #F8ECD3;\n    --secondaryColor: #0e9ca5;\n    --borderRadius: 25px;\n}\nhtml, body, #app {\n    width: 100%;\n    font-size: 1em;\n    box-sizing: border-box;\n    font-family: secondaryFont, system-ui;\n    background-color: var(--primaryColor)\n}\n*, *:before, *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n.flex_column {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.flex_row {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.block {\n    display: block;\n}\nh1, h2, h3 {\n    font-family: primaryFont;\n}\n/*HEADER*/\nheader {\n    width: 100%;\n    & > div {\n        justify-content: center;\n        align-items: center;\n        & > img {\n            /*none*/\n        }\n        & > h3 {\n            /*none*/\n        }\n    }\n    & > nav {\n        margin-top: 2em;\n        align-items: center;\n        justify-content: center;\n        background-color: #FFFFFFA0;\n        & > ul {\n            display: grid;\n            align-content: center;\n            grid-template-columns: repeat(3, 1fr);\n\n            width: 100%;\n            height: 60px ;\n            max-width: 800px;\n\n            & > li {\n                flex: 1;\n                justify-content: center;\n                align-items: center;\n                cursor: pointer;\n                padding: 0 1ch;\n                font-weight: 600;\n                gap: 5px;\n            }\n            & > .tabActive {\n                & > p {\n                    border-bottom: 2px solid var(--secondaryColor);\n                }\n            }\n        }\n    }\n}\n/*MAIN*/\nmain {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    background-color: #d3dff8;\n    & > div {\n        gap: 1em;\n\n        margin: 2em 0;\n        padding: 2em;\n        border-radius: 25px;\n        background-color: #FFFFFFA0;\n        & h1 {\n        }\n        & h2 {\n            margin-bottom: 1em;\n        }\n        & h3 {\n            margin-bottom: 1em;\n        }\n        & img {\n            flex: 0 1 300px ;\n            min-width: 150px;\n            max-width: 100%;\n            border-radius: 25px;\n        }\n        & > div {\n            flex: 1 0 250px;\n        }\n        & p {\n            text-align: justify;\n            max-width: 75ch;\n            & span {\n                color: var(--secondaryColor) ;\n                font-weight: 600;\n            }\n        }\n    }\n}\n/*FOOTER*/\nfooter {\n    width: 100%;\n    & > div:nth-child(1) {\n        height: 60px;\n        align-items: center;\n        justify-content: center;\n        background-color: #FFFFFFA0;\n    }\n    & div:nth-child(2) {\n        margin: 2em 0;\n        gap: 10vw;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n        & div {\n            text-align: center;\n            & h3 {\n                /**/\n            }\n            & p {\n                margin-bottom: 2em;\n            }\n            & ul {\n                gap: 5px;\n                height: 26px;\n                justify-content: center;\n                & li {\n                    &:is(:hover, :active, :focus) {\n                        transform:translateY(-2px);\n                        border-bottom: 1px solid black;\n                        cursor: pointer;\n    \n                    }\n                }\n            }\n        }\n        & form {\n            align-items: center;\n            justify-content: center;\n            & h3 {}\n            & label {\n                & input, & textarea {\n                    display: block;\n                    font-family: inherit;\n                    width: 25ch;\n                    padding: 4px;\n                }\n                & textarea {\n                    height: 15ch;\n                }\n            }\n            & button {\n                font-size: 1rem;\n                padding: 1ch 2ch;\n                font-family: inherit;\n                background-color: #0e9ca5;\n                border-radius: 25px;\n                color: white;\n                border: none;\n                cursor: pointer;\n            }\n        }\n\n    }\n}\n`,""]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=i(h,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},6:(n,e,t)=>{n.exports=t.p+"37c8a8ed522192cd4de5.ttf"},745:(n,e,t)=>{n.exports=t.p+"32a6713537cf5e1e82f2.ttf"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=t.p+"adaaacb9df28e04014f6.jpg",g=t.p+"cc576e13c07776c7337d.jpg",v=t.p+"074cf6dd5d9514d0de56.jpg",b=t.p+"1ab7aa1bbe6f40229bf0.jpg",y=t.p+"20c1c0c159b2c6a95b19.jpg",x=t.p+"9ace9213fd74452ad603.jpg",w=t.p+"4e0a9ec88843eec83225.jpg",F=t.p+"f0292dbee7125b09be54.png",S=t.p+"c03095f1cd8c10fc099e.png",T=t.p+"88ac80cdb385b3d2dab8.png",C=t.p+"c6603439fb6dbbc39c02.png",j=function(){const n=document.createElement("header");return n.innerHTML=`\n    <div class= 'flex_column'>\n        <img src="${F}" alt="tasty's logo" width="200px"/>\n        <h3>Burgers that Taste Yummy</h3>\n    </div>\n    <nav class=flex_row>\n        <ul>\n            <li id="home" class="tabs flex_row tabActive">\n                <img src="${S}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>\n                <p>Home</p>\n            </li>\n            <li id="brand" class="tabs flex_row">\n                <img src="${C}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>\n                <p>Brand</p>\n            </li>\n            <li id="menu" class="tabs flex_row">\n                <img src="${T}" alt="Burger icons created by Smashicons - Flaticon" width="25px"/>\n                <p>Menu</p>\n            </li>\n        <ul>\n    </nav>`,n},_=t.p+"ad672cc05ca64ba2fe3f.svg",E=t.p+"691dee6f9727b92b7089.svg",$=t.p+"fbc26e0824f8abb2ba8d.svg",A=function(){const n=document.createElement("footer");return n.innerHTML=`\n    <div class="flex_row">\n        <h2>Contact us</h2>\n    </div>\n    <div class="flex_row">\n        <div>\n        <h3>Address</h3>\n        <p>123 hereWeAre St</p>\n        <h3>Contacts</h3>\n        <p>123 456 789</p>\n        <h3>Follow</h3>\n        <ul class="flex_row icons">\n            <li class="flex_row icon" style="gap: 1ch">\n                <img src="${_}" alt="Rocket Social Network Icon" height="25px"/>\n            </li>\n            <li class="flex_row" style="gap: 1ch">\n                <img class="icon" src="${E}" alt="Drop Social Network Icon" height="25px"/>\n            </li>\n            <li class="flex_row" style="gap: 1ch">\n                <img class="icon" src="${$}" alt="Diversity Social Network Icon" height="25px"/>\n            </li>\n        </ul>\n    </div>\n    <form name="contactUs" class="flex_column" style="gap: 1ch">\n        <h3>Message</h3>\n        <label> Name\n            <input id="name" type='text' >\n        </label>\n        <label> E-mail\n            <input id="email" type='email' > \n        </label>\n        <label> Message\n            <textarea id="message" type='text' class="block"></textarea>\n        </label>\n        <button onclick=preventDefault()>Send</button>\n        </form>\n    </div>\n    `,n},k=function(){const n={new:"home",old:"",Get(n){this.old=this.new,this.new=n,this.Set()},Set(){""!=this.old&&this.Remove(this.old),this.Create(this.new)},Remove(){document.querySelector(`#${this.old}`).classList.remove("tabActive")},Create(){document.querySelector(`#${this.new}`).classList.add("tabActive")}};function e(n){if(null!=n){const[e,r,i]=t(n);document.querySelector("main").replaceWith(r)}else{const n=document.querySelector("#app");t().forEach((e=>n.appendChild(e)))}}function t(n){const e="menu"==n?function(){const n=document.createElement("main");return n.classList="flex_row",n.innerHTML=`\n<div style="max-width:750px">\n    <h1>Tasty's</h1>\n    <h2>Delicious Menu</h2>\n    <div class="flex_row" style="gap:2em">\n    <div>\n        <h3>Classic Burgers</h3>\n        <img src="${v}" alt="Classic Burgers" width="300"/>\n    </div>\n\n    <div>\n        <h3>Tasty Cheeseburger</h3>\n        <img src="${b}" alt="Classic Burgers" width="300"/>\n    </div> \n\n    <div>\n        <h3>Tasty Bacon Burger</h3>\n        <img src="${y}" alt="Classic Burgers" width="300"/>\n    </div>  \n\n    <div>\n        <h3>Veggie Delight</h3>\n        <img src="${x}" alt="Classic Burgers" width="300"/>\n    </div>\n\n    <div>\n        <h3>Signature Burgers</h3>\n        <img src="${w}" alt="Classic Burgers" width="300"/>\n    </div>\n    </div>\n</div>`,n}():"brand"==n?function(){const n=document.createElement("main");return n.id="brand",n.classList="flex_row",n.innerHTML=`\n<div class="flex_row">\n\n    <img src="${g}" alt="Someone holding Two burgers" width="300"/>\n\n    <div>\n        <h1>Tasty's</h1>\n        <h2>Ethical Brand</h2>\n        <h3>What Sets Us Apart</h3>\n\n        <p> We use the finest, locally sourced ingredients to craft our burgers.<br>\n            Fresh, high-quality produce and premium meats ensure that every bite is bursting with flavor.<br>\n            Our culinary team is dedicated to creating unique and unforgettable flavor combinations.<br>\n            From classic cheeseburgers to adventurous creations, we have something for every palate.<br>\n        </p>\n    </div>\n</div>`,n}():function(){const n=document.createElement("main");return n.id="home",n.classList="flex_column",n.innerHTML=`\n    <div class="flex_row">\n        <img src="${m}" alt="Someone holding Two burgers" width="300"/>\n        \n        <div>\n            <h1>Tasty's</h1>\n            <h2>Introduction</h2>\n            <h3>Welcome to <span>Tasty</h3>\n            \n            <p> Where we bring you a <span>mouthwatering</span> experience with our <span>delectable</span> burgers.<br>\n                Our mission is simple: to serve <span>burgers</span> that are not just delicious but truly <span>yummy</span>.<br>\n                Join us in this presentation to discover what makes Tasty a <span>must-visit</span> for burger enthusiasts.\n            </p>\n        </div>\n    </div>`,n}();return[j(),e,A()]}return{render:e,listen:function(){!function(t,r,i){try{document.querySelectorAll(".tabs").forEach((t=>t.addEventListener("click",(()=>{return e((r=t).id),void n.Get(r.id);var r}))))}catch{console.log("onEvent(selector, event, function) ")}}()}}}();k.render(),k.listen()})()})();