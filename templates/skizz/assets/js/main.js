!function(){"use strict";function t(t,n){var e=this;this.length=t.length,this.context=n||null,t.forEach(function(t,n){return e[n]=t})}function n(t){if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",e),void st.push(t);t()}function e(){for(;st.length;)window.setTimeout(st.shift(),0)}function i(t){for(var n=-1,e=arguments.length<=1?0:arguments.length-1;++n<e;){var i=arguments.length<=n+1?void 0:arguments[n+1];for(var o in i)i.hasOwnProperty(o)&&Object.defineProperty(t,o,{value:i[o],enumerable:!0,writable:!0})}return t}function o(t){return void 0!==t[ct]?t[ct]:t.root}function r(n,e){var i=void 0===n?"undefined":ut(n);if("string"===i&&"<"===n.charAt(0)){var o=document.createElement("div");return o.innerHTML=n,new t([].slice.call(o.childNodes))}return"string"===i?(e=void 0!==e?e.length?e[0]:e:document,new t([].slice.call(e.querySelectorAll(n)))):"function"===i?r.ready(n):n instanceof t?n:new t(n instanceof window.HTMLElement?[n]:n instanceof Array?n:n instanceof window.NodeList||n instanceof window.HTMLCollection?[].slice.call(n):[document])}function s(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded; charset=UTF-8",i=new XMLHttpRequest;i.open("POST",t,!0),i.setRequestHeader("Content-type",e),i.send(n)}function c(t,n){ht=i({},ht,t);var e=new XMLHttpRequest;e.open("GET",ht.url,!0),e.onload=function(){if(e.status>=200&&e.status<400){var t=n?JSON.parse(e.responseText):e.responseText;ht.success(t),ht.complete(t)}else ht.error(e.responseText),ht.complete()},e.onerror=function(){ht.error(),ht.complete()},e.send()}function u(){c({url:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",success:arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},error:arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){}},!1)}function a(){c({url:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",success:arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},error:arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){}},!0)}function l(t,n){for(var e=-1,i=t.length;++e<i&&!1!==n.call(t[e],e,t););return t}function h(t){return!!(t&&t.constructor&&t.call&&t.apply)}function f(t,n,e){return":"===!n.charAt(0)?p(t,e(n)):(n=":even"===n?function(t){return t%2!=0}:":odd"===n?function(t){return t%2==0}:function(){return!0},d(t,n))}function d(t,n){for(var e=-1,i=t.length,o=[];++e<i;)n(e,t[e])&&o.push(t[e]);return o}function v(t,n){for(var e=-1,i=t.length,o=[];++e<i;)t[e]===n&&o.push(t[e]);return o}function p(t,n){for(var e=-1,i=void 0,o=t.length,r=n.length,s=[];++e<o;)for(i=0;i<r;i++)t[e]===n[i]&&s.push(t[e]);return s}function m(t,n){var e=[];return"string"==typeof n&&(e=f(t,n,this)),h(n)&&(e=d(t,n)),"object"===(void 0===n?"undefined":ut(n))&&(e=void 0!==n.context?p(t,n):v(t,n)),e.length?this(e):t}function g(t,n){for(var e=[],i=-1,o=t.length;++i<o;)e[i]=n.call(t[i],i,t);return e}function y(t,n){for(var e=t.length;e--;)return!!n.call(t[e],e,t)}function w(t,n){return"string"==typeof t&&void 0===n&&this.length?window.getComputedStyle(this[0]).getPropertyValue(t,null):this.each(function(){if("string"==typeof t)this.style.setProperty(t,n);else{var e=[];for(n in t)t.hasOwnProperty(n)&&e.push(n+":"+t[n]);this.style.cssText+=e.join(";")}})}function b(t,n){if(1!==arguments.length||"string"!=typeof t)return this.each(function(e){if(void 0!==n&&"object"!==(void 0===n?"undefined":ut(n)))this.setAttribute(t,n);else for(var i in t)t.hasOwnProperty(i)&&(n=t[i],"_text"===i?this.textContent=n:"_html"===i&&"object"===(void 0===n?"undefined":ut(n))?this.innerHTML=n.outerHTML:"_html"===i?this.innerHTML=n:null===n?this.removeAttribute(i):i in this?this[i]=n:this.setAttribute(i,n),this.setAttribute(i,t[i]),n=t[i],"_text"===i?this.textContent=n:"_html"===i&&"object"===(void 0===n?"undefined":ut(n))?this.innerHTML=n.outerHTML:"_html"===i?this.innerHTML=n:null===n?this.removeAttribute(i):i in this?this[i]=n:this.setAttribute(i,n))});if(this.length){var e=this[0].getAttribute(t);return null!==e?e:this[0][t]}}function k(t){return this.once(function(){return this.hasAttribute(t)})}function C(t){return this.each(function(){this.removeAttribute(t)})}function E(t){return 0===arguments.length&&this.length?this[0].textContent:this.each(function(){this.textContent=t})}function x(){var t=this[0];return t.parentNode.removeChild(t),t}function T(t){function n(t){var n=/\s+/;return t.trim().split(n)}function e(t,e){e=n(e);for(var i=e.length;i--;)t.classList.add(e[i])}function i(t,e){e=n(e);for(var i=t.className,o=e.length;o--;)-1===i.indexOf(e[o])&&(i+=" "+e[o]);t.className=i}return"classList"in document.documentElement?this.each(function(){e(this,t)}):this.each(function(){i(this,t)})}function L(t){function n(t,n){return t.classList.contains(n)}function e(t,n){return!!t.className&&-1!==t.className.indexOf(n)}return"classList"in document.documentElement?this.once(function(){return n(this,t)}):this.once(function(){return e(this,t)})}function M(t){function n(t){var n=/\s+/;return t.trim().split(n)}function e(t,e){if(!t.className)return!1;e=n(e);for(var i=e.length;i--;)t.classList.remove(e[i])}function i(t,e){e=n(e);for(var i=t.className,o=e.length;o--;)-1!==i.indexOf(e[o])&&(i=i.replace(new RegExp("\\b"+e[o]+"\\b"),""));t.className=i}return"classList"in document.documentElement?this.each(function(){e(this,t)}):this.each(function(){i(this,t)})}function S(t){function n(t){var n=/\s+/;return t.trim().split(n)}function e(t,n){return t.classList.toggle(n)}function i(t,e){e=n(e);for(var i=t.className,o=e.length;o--;)-1===i.indexOf(e[o])?i+=" "+e[o]:i=i.replace(new RegExp("\\b"+e[o]+"\\b"),"");t.className=i}return"classList"in document.documentElement?this.each(function(){e(this,t)}):this.each(function(){i(this,t)})}function z(t){return"string"==typeof t?this.htmlAfter(t):(t.length&&(t=t[0]),this.each(function(n){this.parentNode.insertBefore(n>0?t.cloneNode(!0):t,this.nextSibling)}))}function N(t){return"string"==typeof t?this.htmlAppend(t):(t.length&&(t=t[0]),this.each(function(n){this.appendChild(n>0?t.cloneNode(!0):t)}))}function A(t){return"string"==typeof t?this.htmlBefore(t):(t.length&&(t=t[0]),this.each(function(n){this.parentNode.insertBefore(n>0?t.cloneNode(!0):t,this)}))}function H(t){return"string"==typeof t?this.htmlPrepend(t):(t.length&&(t=t[0]),this.each(function(n){this.insertBefore(n>0?t.cloneNode(!0):t,this.firstChild)}))}function O(){return this.each(function(){this.parentNode.removeChild(this)})}function P(t){return 0===arguments.length&&this.length?this[0].innerHTML:this.each(function(){this.innerHTML=t})}function j(t){return function(n){return this.each(function(){this.insertAdjacentHTML(t,n)})}}function R(){var t=this.map(function(){for(var t=this.previousSibling;null!==t&&3===t.nodeType;)t=t.previousSibling;return t});return t=t.filter(function(t){return null!==t}),0!==t.length?r(t):null}function B(){var t=this.map(function(){for(var t=this.nextSibling;null!==t&&3===t.nodeType;)t=t.nextSibling;return t});return t=t.filter(function(t){return null!==t}),0!==t.length?r(t):null}function I(t){var n=this[0];return"closest"in n?n.closest(t):X(n,t)}function X(t,n){for(var e=t.matches||t.msMatchesSelector||t.webkitMatchesSelector;t;){if(e.call(t,n))return t;t=t.parentNode}return null}function _(){var t=void 0;return this.length?this.each(function(){t=this.parentNode}):t=this.parentNode,r(t)}function q(t){var n=void 0;return n=this.length?this[0].cloneNode(t):this.cloneNode(t),r(n)}function D(t,n,e){var i=void 0,o=void 0;if(t.ownerDocument)i=t.ownerDocument;else{if(9!==t.nodeType)throw new Error("Invalid node passed to fireEvent: "+t.id);i=t}if(t.dispatchEvent){var r="";switch(n){case"click":case"mousedown":case"mouseup":r="MouseEvents";break;case"focus":case"change":case"blur":case"select":default:r="HTMLEvents"}o=i.createEvent(r);var s="change"!==n;o.initEvent(n,s,!0),o.synthetic=!0,o.args=e,t.dispatchEvent(o,!0)}else t.fireEvent&&(o=i.createEventObject(),o.synthetic=!0,o.args=e,t.fireEvent("on"+n,o))}function Y(t,n){return t=t.split(" "),this.each(function(){var e=this;t.forEach(function(t){D(e,t,n)})})}function F(t,n,e){return 2===arguments.length&&h(n)&&(e=n,n="_self"),{types:t,selector:n,handler:e}}function U(t,n,e){var i=F.apply(void 0,arguments);return t=i.types,n=i.selector,e=i.handler,t=t.split(" "),this.each(function(){var i=this;this.SkizzHandlers&&t.forEach(function(t){var o=i.SkizzHandlers[t];o&&o.forEach(function(r,s){r.selector===n&&r.originalCallback===e&&(i.removeEventListener(t,r.callback),i.SkizzHandlers[t]=o.splice(s,1))})})})}function G(t,n){return function(e){r(t).each(function(){this.contains(e.target)&&n(e)})}}function J(t,n,e){var i=F.apply(void 0,arguments);t=i.types,n=i.selector,e=i.handler;var o=e;return"_self"!==n&&null!==n&&(e=G(n,e)),t=t.split(" "),this.each(function(){var i=this;this.SkizzHandlers=this.SkizzHandlers||{},t.forEach(function(t){i.SkizzHandlers[t]=i.SkizzHandlers[t]||[],i.SkizzHandlers[t].push({selector:n,callback:e,originalCallback:o}),i.addEventListener(t,e)})})}function K(t,n,e){var i=F.apply(void 0,arguments);t=i.types,n=i.selector,e=i.handler;var o=this,r=function t(i){e.apply(void 0,arguments),o.filter(this).off(i.type,n,t)};return this.on(t,n,r)}function V(t){var n=0;if(0===t.length)return n;var e=void 0,i=void 0,o=t.length;for(i=0;i<o;i++)e=t.charCodeAt(i),n=(n<<5)-n+e,n&=n;return n}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"skizz",n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return void 0===mt[t]?mt[t]=0:mt[t]++,t+"-"+mt[t]+(n?"--"+V(document.URL).toString():"")}function $(t,n){return 0===t?Math.floor(Math.random()*n):Math.floor(Math.random()*(n-t)/t)}function Q(t){return encodeURIComponent(t)}function Z(t){return decodeURIComponent(t)}function tt(t){return t}function nt(t,n){return t.memoize=t.memoize||("Map"in window?new Map:new et),function(){var e=n?n.apply(this,arguments):Array.prototype.slice.call(arguments);return t.memoize.has(e)||t.memoize.set(e,t.apply(this,arguments)),t.memoize.get(e)}}function et(){this.keys=[],this.cache=[]}function it(t,n,e){function i(){r=!1}function o(){s=null,t.apply(null,c),c=null}var r=!1,s=void 0,c=void 0;return n=n||250,e=!!e,e?function(){c=arguments,r||(r=!0,t.apply(null,c),s=setTimeout(i,n))}():function(){c=arguments,s&&clearTimeout(s),s=setTimeout(o,n)}()}function ot(t,n,e){function i(){s=!1}function o(){t.apply(null,c),c=null,u=null}function r(){c=arguments,e&&!s?(o(),s=setTimeout(i,n)):u=u||setTimeout(o,n)}var s=!1,c=void 0,u=void 0;return n=n||250,e=!!e,r}function rt(t){function n(t){s||(s=t);var o=t-s,c=Math.min(o/e,1);window.scrollTo(0,i+r*c),o<e&&window.requestAnimationFrame(n)}var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],window.pageYOffset),o=void 0;o="number"==typeof t?t:"object"===(void 0===t?"undefined":ut(t))?t.length?t[0].getBoundingClientRect().top+i:t.getBoundingClientRect().top+i:i;var r=o-i,s=void 0;window.requestAnimationFrame(n)}var st=[],ct=document.documentElement.lang||"en",ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},lt=function(){function t(){at(this,t),this.widgets={},this.options={}}return t.prototype.register=function(t){return this.widgets[t.id]=t(this,this.options[t.id]||{}),this},t.prototype.unregister=function(t){return this.plugins[t.id].destroy(),this},t}();r.fn=t.prototype,r.ready=n,r.extend=i,r.i18n=o,r.Widgets=lt;var ht={url:"",success:function(){},error:function(){},complete:function(){}};r.post=s,r.get=u,r.json=a,r.fn.each=function(t){return l(this,t)},r.fn.filter=function(t){return m.apply(r,[this,t])},r.fn.map=function(t){return g(this,t)},r.fn.once=function(t){return y(this,t)};var ft=j("afterend"),dt=j("beforeend"),vt=j("beforebegin"),pt=j("afterbegin");r.fn.css=w,r.fn.attr=b,r.fn.hasAttr=k,r.fn.removeAttr=C,r.fn.text=E,r.fn.addClass=T,r.fn.hasClass=L,r.fn.removeClass=M,r.fn.toggleClass=S,r.fn.after=z,r.fn.append=N,r.fn.before=A,r.fn.prepend=H,r.fn.remove=O,r.fn.detach=x,r.fn.html=P,r.fn.htmlBefore=vt,r.fn.htmlAfter=ft,r.fn.htmlAppend=dt,r.fn.htmlPrepend=pt,r.fn.prev=R,r.fn.next=B,r.fn.closest=I,r.fn.parent=_,r.fn.cloneNode=q,r.fn.fire=Y,r.fn.off=U,r.fn.on=J,r.fn.one=K;var mt={},gt=function(){function t(n){var e=this;at(this,t),this.type=n,this.store=window[n],this.isAvailable=function(){var t="skizz-is-awesome";try{return e.store.setItem(t,"skizz-is-awesome"),e.store.removeItem(t),!0}catch(t){return!1}}}return t.prototype.set=function(t,n,e){return!!this.isAvailable&&(n=JSON.stringify({value:n,expires:e}),this.store.setItem(t,n))},t.prototype.get=function(t){var n=this.store.getItem(t);return null===n?n:(n=JSON.parse(n),n.expires&&new Date>new Date(n.expires)?(this.remove(t),null):n.value)},t.prototype.remove=function(t){return this.store.removeItem(t)},t.prototype.removeAll=function(){return this.store.clear()},t.prototype.storageLength=function(){return this.store.length},t.prototype.getKey=function(t){return this.store.key(t)},t}(),yt={local:new gt("localStorage"),session:new gt("sessionStorage")},wt=function(){return function(){}};et.prototype.has=function(t){return this.keys.indexOf(t)>-1},et.prototype.set=function(t,n){var e=this.keys.indexOf(t);return-1===e?(this.keys.push(t),this.cache.push(n)):this.cache[e]=n,this.cache.length},et.prototype.get=function(t){var n=this.keys.indexOf(t);return-1===n?null:this.cache[n]},r.isFunction=h,r.guid=W,r.hash=V,r.rand=$,r.encode=Q,r.decode=Z,r.storage=yt,r.noop=wt,r.identity=tt,r.memoize=nt,r.debounce=it,r.throttle=ot,r.scrollTo=rt,r.version="0.1.0",window.skizz=window.$=r,function(t){t.fn.fastButton=function(t){function n(){var n=this;this.element=n,this.handler=t,n[i]("touchstart",r,!1),n[i]("click",r,!1)}var e=document.body,i="addEventListener",o={};o.coordinates=[],o.onClick=function(t){var n=void 0,e=void 0,i=void 0;for(n=0;n<o.coordinates.length;n+=2)e=o.coordinates[n],i=o.coordinates[n+1],Math.abs(t.clientX-e)<25&&Math.abs(t.clientY-i)<25&&(t.stopPropagation(),t.preventDefault())},o.preventGhostClick=function(t,n){o.coordinates.push(t,n),window.setTimeout(o.pop,2500)},o.pop=function(){o.coordinates.splice(0,2)},document[i]("click",o.onClick,!0);var r={element:this,handler:t,handleEvent:function(t){switch(t.type){case"touchstart":this.onTouchStart(t);break;case"touchmove":this.onTouchMove(t);break;case"touchend":case"click":this.onClick(t)}},onTouchStart:function(t){var n=t.touches[0];t.stopPropagation(),this.element[i]("touchend",this,!1),e[i]("touchmove",this,!1),this.startX=n.clientX,this.startY=n.clientY},onTouchMove:function(t){var n=t.touches[0];(Math.abs(n.clientX-this.startX)>10||Math.abs(n.clientY-this.startY)>10)&&this.reset()},onClick:function(t){t.stopPropagation(),this.reset(),this.handler.handleEvent?this.handler.handleEvent(t):this.handler(t),"touchend"===t.type&&o.preventGhostClick(this.startX,this.startY)},reset:function(){this.element[0].removeEventListener("touchend",this,!1),e.removeEventListener("touchmove",this,!1)},destroy:function(){var t=this.element[0];t.removeEventListener("touchend",this,!1),t.removeEventListener("touchstart",this,!1),t.removeEventListener("touchmove",this,!1),t.removeEventListener("click",this,!1),e.removeEventListener("touchmove",this,!1)}};return this.each(n)}}(window.skizz),r.fn.anchor=function(t){t=r.extend({one:!0,onClick:r.noop},t);var n="anchor",e="is-active",i=n+"-destination",o=null;return this.each(function(s,c){function u(n){"keypress"===n.type&&13!==n.keyCode||(n.preventDefault(),l.toggleClass(e),h.toggleClass(e),a(),o&&(l!==o&&t.one&&o.fire("click"),o=null),l.hasClass(e)&&(o=l))}function a(){"function"==typeof t.onClick&&t.onClick(l,h)}var l=r(c[s]),h=r(l.attr("data-destination")||c[s].hash);null!==h.attr("id")&&h.attr("id",n+r.rand(0,1e3)),function(){l.attr({tabindex:0,"aria-controls":h.attr("id")}).addClass(n).on("keypress",u).fastButton(u),h.addClass(i)}()}),r},r.fn.a11ynav=function(t){function n(){return s.addClass(i+"-"+o),u=window.setTimeout(function(){c.addClass(i+"-"+o),u=null},t.duration),r}function e(){return null!==u&&clearTimeout(u),s.removeClass(i+"-"+o),c.removeClass(i+"-"+o),r}t=r.extend({duration:200,api:!1},t);var i="a11ynav",o="is-active",s=r("body"),c=r(".page-body"),u=null;return t.api?{open:n,close:e}:this};var bt=r(".page-headernav").a11ynav({api:!0}),kt={root:{open:"Afficher le sous menu de ",close:"Masquer le sous menu de "},en:{open:"Show sub navigation of ",close:"Hide sub navigation of "}};kt=r.i18n(kt),r(".anchor").anchor({onClick:function(t){var n=r("svg use",t);t.hasClass("is-active")?(n.attr("xlink:href","#icon-navigation-close"),bt.open()):(n.attr("xlink:href","#icon-navigation-anchor"),bt.close())}}),r(".subnav-anchor").anchor({onClick:function(t){var n=r("svg use",t),e=t.prev().text().trim();t.hasClass("is-active")?(t.attr("title",kt.close+e),n.attr("xlink:href","#icon-subnav-close")):(t.attr("title",kt.open+e),n.attr("xlink:href","#icon-subnav-anchor"))}}),r("pre").each(function(t){t.className+="line-numbers"})}();

//# sourceMappingURL=main.js.map