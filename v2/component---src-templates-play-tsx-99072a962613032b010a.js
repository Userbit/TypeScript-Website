(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3yYM":function(e,t,r){r("LnO1"),r("3eMz"),r("p+GS"),r("AA1/"),r("yKDW"),r("dtAy"),r("cM8k"),r("yIC7"),r("r0id"),r("RwQI"),r("XjK0"),r("SCO9");var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new C(n||[]);return o._invoke=function(e,t,r){var n=u;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=S(i,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=s(e,t,r);if("normal"===c.type){if(n=r.done?m:p,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u="suspendedStart",p="suspendedYield",d="executing",m="completed",h={};function f(){}function y(){}function g(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==r&&n.call(E,o)&&(v=E);var x=g.prototype=f.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function N(e){var t;this._invoke=function(r,a){function o(){return new Promise((function(t,o){!function t(r,a,o,i){var l=s(e[r],e,a);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,i)}))}i(l.arg)}(r,a,t,o)}))}return t=t?t.then(o,o):o()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=s(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[l]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},b(N.prototype),N.prototype[i]=function(){return this},e.AsyncIterator=N,e.async=function(t,r,n,a){var o=new N(c(t,r,n,a));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(x),x[l]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return l.type="throw",l.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},VtSi:function(e,t,r){e.exports=r("3yYM")},tBe8:function(e,t,r){"use strict";r.r(t),function(e){r("yKDW"),r("dtAy");var n=r("VtSi"),a=r.n(n),o=(r("3yYM"),r("Bu8c"),r("ERkP")),i=r.n(o),l=r("9Dj+"),c=r("Wbzz"),s=(r("qcTE"),r("OSeq"));function u(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,a)}t.default=function(t){return Object(o.useEffect)((function(){if(!("playgroundLoaded"in window)){window.playgroundLoaded=!0,window.optionsSummary=t.pageContext.optionsSummary;var r=document.createElement("script");r.src=Object(c.withPrefix)("/js/vs.loader.js"),r.async=!0,r.onload=function(){var r=new URLSearchParams(location.search),n=r.get("ts")||"3.7.3",o=e.require;o.config({paths:{vs:"https://tswebinfra.blob.core.windows.net/cdn/"+n+"/monaco/min/vs","typescript-sandbox":Object(c.withPrefix)("/js/sandbox"),"typescript-playground":Object(c.withPrefix)("/js/playground")},ignoreDuplicateModules:["vs/editor/editor.main"]}),o(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var n,o=(n=a.a.mark((function n(o,i,l,s){var u,p,d,m,h;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.ts,o&&u&&l&&s?null===(p=document.getElementById("loader").parentNode)||void 0===p||p.removeChild(document.getElementById("loader")):(console.error("Errr"),console.error("main",!!o,"ts",!!u,"sandbox",!!l,"playground",!!s)),n.next=5,l.createTypeScriptSandbox({text:'// Welcome to the TypeScript Playground, this is a website\n// which gives you a chance to write, share and learn TypeScript.\n\n// You could think of it in three ways:\n//\n//  - A place to learn TypeScript in a place where nothing can break\n//  - A place to experiment with TypeScript syntax, and share the URLs with others\n//  - A sandbox to experiment with different compiler features of TypeScript\n\nconst anExampleVariable = "Hello World"\nconsole.log(anExampleVariable)\n\n// To learn more about the language, click above in "Examples" or "What\'s New".\n// Otherwise, get started by removing these comments and the world is your playground.\n',compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!!r.get("useJavaScript"),acquireTypes:!localStorage.getItem("disable-ata"),logger:{error:console.error,log:console.log}},o,u);case 5:d=n.sent,m={lang:t.pageContext.lang,prefix:Object(c.withPrefix)("/")},s.setupPlayground(d,o,m),d.editor.focus(),(h=document.getElementById("playground-container")).style.display="flex",h.style.height=window.innerHeight-Math.round(h.getClientRects()[0].top)-18+"px";case 12:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(e){u(o,r,a,i,l,"next",e)}function l(e){u(o,r,a,i,l,"throw",e)}i(void 0)}))});return function(e,t,r,n){return o.apply(this,arguments)}}())},document.body.appendChild(r)}})),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{disableBetaNotification:!0},i.a.createElement("nav",{className:"navbar-sub"},i.a.createElement("ul",{className:"nav"},i.a.createElement("li",{className:"name"},i.a.createElement("span",null,"Playground")),i.a.createElement("li",{className:"dropdown"},i.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Config ",i.a.createElement("span",{className:"caret"})),i.a.createElement("ul",{className:"examples-dropdown"},i.a.createElement("h3",null,"Config"),i.a.createElement("div",{className:"info",id:"config-container"},i.a.createElement("button",{className:"examples-close"},"Close"),i.a.createElement("div",{id:"compiler-dropdowns"},i.a.createElement("label",{className:"select"},i.a.createElement("span",{className:"select-label"},"Lang"),i.a.createElement("select",{id:"language-selector"},i.a.createElement("option",null,"TypeScript"),i.a.createElement("option",null,"JavaScript")),i.a.createElement("span",{className:"compiler-flag-blurb"},"Which language should be used in the editor")))))),i.a.createElement("li",{className:"dropdown"},i.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Examples ",i.a.createElement("span",{className:"caret"})),i.a.createElement("ul",{className:"examples-dropdown",id:"examples"},i.a.createElement("button",{className:"examples-close"},"Close"),i.a.createElement(s.a,{defaultSection:"JavaScript",sections:["JavaScript","TypeScript"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang}))),i.a.createElement("li",{className:"dropdown"},i.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"What's New ",i.a.createElement("span",{className:"caret"})),i.a.createElement("ul",{className:"examples-dropdown",id:"whatisnew"},i.a.createElement("button",{className:"examples-close"},"Close"),i.a.createElement(s.a,{defaultSection:"3.7",sections:["3.7","Playground"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang})))),i.a.createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"})),i.a.createElement("div",{className:"ms-depth-4",style:{backgroundColor:"white",paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},i.a.createElement("div",{id:"loader"},i.a.createElement("div",{className:"lds-grid"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("p",{id:"loading-message"},"Downloading TypeScript...")),i.a.createElement("div",{id:"playground-container",style:{display:"none"}},i.a.createElement("div",{id:"editor-container"},i.a.createElement("div",{id:"editor-toolbar",className:"navbar-sub"},i.a.createElement("ul",null,i.a.createElement("li",{id:"versions",className:"dropdown"},i.a.createElement("a",{href:"#"},"Version... ",i.a.createElement("span",{className:"caret"})),i.a.createElement("ul",{className:"dropdown-menu"})),i.a.createElement("li",null,i.a.createElement("a",{id:"run-button",href:"#"},"Run")),i.a.createElement("li",{className:"dropdown"},i.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Export ",i.a.createElement("span",{className:"caret"})),i.a.createElement("ul",{className:"dropdown-menu"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.reportIssue()}},"Report GitHub issue on TypeScript")),i.a.createElement("li",{role:"separator",className:"divider"}),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyAsMarkdownIssue()}},"Copy as Markdown Issue")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChat()}},"Copy as Markdown Link")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChatWithPreview()}},"Copy as Markdown Link with Preview")),i.a.createElement("li",{role:"separator",className:"divider"}),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInTSAST()}},"Open in TypeScript AST Viewer")),i.a.createElement("li",{role:"separator",className:"divider"}),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInCodeSandbox()}},"Open in CodeSandbox")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInStackBlitz()}},"Open in StackBlitz")))))),i.a.createElement("div",{id:"monaco-editor-embed"}))))))}}.call(this,r("fRV1"))}}]);
//# sourceMappingURL=component---src-templates-play-tsx-99072a962613032b010a.js.map