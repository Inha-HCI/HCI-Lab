(self.webpackChunkhci_lab_homepage=self.webpackChunkhci_lab_homepage||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,u=e.title,s=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},1290:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=r(1597),i=r(2775),a=r.p+"static/logo-03e90a63eacd1ae9c1499c3e83b51a7e.png",c=function(){return n.createElement("div",{className:"visualBox-module--visualBoxWrapper--vfOdD"},n.createElement("div",{className:"visualBox-module--siteDescription--3Sqri"},n.createElement("h1",null,"HCI Lab #Inha univ."),n.createElement("p",null,"Human–Computer Interaction Lab")))},u=function(e){var t=e.title;return n.createElement("div",{className:"breadcrumb-module--breadCrumbWrapper--KiU6I"},n.createElement("h1",{className:"breadcrumb-module--title--nyLLj"},t))},s=function(e){var t=e.activeSideBar,r=e.title,s="Home"===r;return n.createElement("div",{className:s?"header-module--IndexWrapper--sVwhS":void 0},n.createElement("header",{className:"header-module--headerWrapper--R4vZ9"},n.createElement("div",{className:"header-module--innerWrapper--mQVzd"},n.createElement(o.Link,{to:"/"},n.createElement("img",{src:a,className:"header-module--logo--B7flj"})),n.createElement("div",{className:"header-module--menus--DGTxA"},n.createElement(o.Link,{to:"/members"},"Members"),n.createElement(o.Link,{to:"/research"},"Research"),n.createElement(o.Link,{to:"/papers"},"Papers"),n.createElement(o.Link,{to:"/news"},"News")),n.createElement("div",{className:"header-module--sidebarButton--5mjTf"},n.createElement(i.xXU,{size:"2rem",onClick:function(){return t()}})))),s?n.createElement(c,null):n.createElement(u,{title:r}))},l=function(){var e=(0,o.useStaticQuery)("918870194").site;return n.createElement("footer",{className:"footer-module--footerWrapper--3RPm1"},n.createElement("div",{className:"footer-module--innerWrapper--aInpG"},n.createElement("a",{href:"https://www.inha.ac.kr"},n.createElement("img",{src:"data:image/png;base64,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",className:"footer-module--logo--RYuWs"})),n.createElement("div",{className:"footer-module--footerContent--j9AOa"},n.createElement("span",null,e.siteMetadata.labInfomation.address),n.createElement("span",null,"Copyright © ",(new Date).getFullYear()," HCI Laboratory, Inha University"))))},f=function(e){var t=e.inactiveSideBar;return n.createElement("div",{className:"sidebar-module--sideBarWrapper--CPnw9"},n.createElement("div",{className:"sidebar-module--sideBarBox--U5ETM"},n.createElement(i.FU5,{size:"2rem",onClick:function(){return t()}}),n.createElement("div",{className:"sidebar-module--menuWrapper--RBEdb"},n.createElement(o.Link,{to:"/members"},"Members"),n.createElement(o.Link,{to:"/research"},"Research"),n.createElement(o.Link,{to:"/papers"},"Papers"),n.createElement(o.Link,{to:"/news"},"News"))))},p=function(e){var t=e.title,r=e.children,o=(0,n.useState)(!1),i=o[0],a=o[1];return n.createElement("div",{className:"global-wrapper"},i&&n.createElement("div",{className:"layout-module--sidebar--9FtZw"},n.createElement(f,{inactiveSideBar:function(){return a(!1)}})),n.createElement(s,{activeSideBar:function(){return a(!0)},title:t}),n.createElement("main",null,r),n.createElement(l,null))}},3765:function(e,t,r){"use strict";r.d(t,{Z:function(){return ye}});var n,o,i,a,c=r(7294),u=r(5697),s=r.n(u),l=r(4839),f=r.n(l),p=r(2993),d=r.n(p),m=r(6494),v=r.n(m),h="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",E="href",A="http-equiv",C="innerHTML",O="itemprop",P="name",S="property",z="rel",j="src",k="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",x="defer",B="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),I=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=_(e,g.TITLE),r=_(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,L);return t||n||void 0},J=function(e){return _(e,M)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===z&&"canonical"===e[r].toLowerCase()||u===z&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=v()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,n),ue(g.HTML,o),ce(f,p);var d={baseTag:se(g.BASE,r),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},m={},v={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(v[e]=d[e].oldTags)})),t&&t(),u(e,m,v)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==a.join(",")&&r.setAttribute(H,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=fe(r,n),[c.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===I.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(y,o,n),link:pe(g.LINK,i,n),meta:pe(g.META,a,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,u,n),style:pe(g.STYLE,s,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},me=f()((function(e){return{baseTag:V([E,k],e),bodyAttributes:Q(h,e),defer:_(e,x),encode:_(e,B),htmlAttributes:Q(y,e),linkTags:Z(g.LINK,[z,E],e),metaTags:Z(g.META,[P,w,A,S,O],e),noscriptTags:Z(g.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:Z(g.SCRIPT,[j,C],e),styleTags:Z(g.STYLE,[T],e),title:G(e),titleAttributes:Q(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ve=(o=me,a=i=function(e){function t(){return F(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return Y({},o,((t={})[n.type]=a,t.titleAttributes=Y({},i),t));case g.BODY:return Y({},o,{bodyAttributes:Y({},i)});case g.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((r={})[n.type]=Y({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(W(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ve.renderStatic=ve.rewind;var he=r(1597),ye=function(e){var t,r=e.title,n=(0,he.useStaticQuery)("3000541721").site,o=n.siteMetadata.description,i=null===(t=n.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(ve,{htmlAttributes:{lang:"ko"},title:r,titleTemplate:i?"%s | "+i:void 0,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:r},{name:"twitter:description",content:o}]})}}}]);
//# sourceMappingURL=commons-0dcafd99763f46a00777.js.map