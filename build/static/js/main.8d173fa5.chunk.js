(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(t,e,r){t.exports=r.p+"static/media/logo.8baf8430.svg"},34:function(t,e,r){t.exports=r.p+"static/media/google-logo.dc783842.png"},38:function(t,e,r){t.exports=r(51)},46:function(t,e,r){},48:function(t,e,r){},51:function(t,e,r){"use strict";r.r(e);var n=r(8),a=r.n(n),o=r(33),i=r.n(o),c=(r(46),r(0)),l=r(13),u=(r(48),r(21)),s=(r(32),r(31),r(35)),f=r(36),p=u.a.initializeApp({apiKey:"AIzaSyByn5PHeLcP4oBTL67gsa2JcbL_RTLqwMA",authDomain:"cote-app-6d41b.firebaseapp.com",projectId:"cote-app-6d41b",storageBucket:"cote-app-6d41b.appspot.com",messagingSenderId:"714667450191",appId:"1:714667450191:web:01e426bf3d88c00d306f3a"}),h=p.firestore(),m=p.auth(),d=r(29),v=r.n(d),g=r(34),y=r.n(g);var w=function(){return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"signIn-wrap"},a.a.createElement("div",{className:"logo-wrap",style:{color:"#fff",fontSize:"30px"}},a.a.createElement("img",{src:v.a,alt:"",style:{height:"38px",width:"38px"}}),"\xa0\xa0",a.a.createElement("p",{className:"logo-text",style:{lineHeight:"35px"}},"Cote")),a.a.createElement("div",{className:"description-wrap",style:{marginBottom:"10px"}},a.a.createElement("p",{style:{fontSize:"26px",color:"#fff",fontWeight:"300"}},a.a.createElement("span",{style:{fontWeight:"500",color:"#FFD74B"}},"Co"),"llaborate. Communica",a.a.createElement("span",{style:{fontWeight:"500",color:"#5FD3FF"}},"te"))),a.a.createElement("div",{className:"container"},a.a.createElement("button",{onClick:function(){var t=new u.a.auth.GoogleAuthProvider;m.signInWithPopup(t)},type:"button",className:"btn btn-light",style:{fontWeight:"400",fontSize:"20px"}},a.a.createElement("img",{src:y.a,alt:"",height:"25px",width:"25px"})," Sign In"))))};var E=function(){return m.currentUser&&a.a.createElement("button",{onClick:function(){m.signOut()},type:"button",className:"sign-out-btn"},"Sign Out")};var b=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("a",{className:"navbar-brand",href:"/",style:{color:"#fff"}},a.a.createElement("img",{src:v.a,alt:"Logo",width:"30",height:"24",class:"d-inline-block align-text-top me-3"}),"Cote"),a.a.createElement(E,null))))};var x=function(t){var e=t.message,r=e.text,n=e.uid,o=e.photoURL,i=n===m.currentUser.uid?"sent":"received";return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"message ".concat(i)},a.a.createElement("p",{className:"message-text"},r),a.a.createElement("img",{className:"profile-photo",src:o,style:{height:"25px",width:"25px"},alt:""})))};function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var s={};function f(){}function p(){}function h(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&r.call(v,a)&&(m=v);var g=h.prototype=f.prototype=Object.create(m);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,c(g,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function N(){var t=h.collection("messages"),e=t.orderBy("createdAt").limit(30),r=Object(f.a)(e,{idField:"id"}),o=Object(l.a)(r,1)[0],i=Object(n.useState)(""),s=Object(l.a)(i,2),p=s[0],d=s[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement("div",{className:"container mt-4"},o&&o.map(function(t,e){return a.a.createElement(x,{key:e,message:t})})),a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=u.a.firestore.Timestamp.now();console.log(r);var n=function(){var e=Object(c.a)(L().mark(function e(){var r,n,a;return L().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.currentUser,n=r.uid,a=r.photoURL,e.next=3,t.add({text:p,createdAt:u.a.firestore.FieldValue.serverTimestamp(),uid:n,photoURL:a});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return d(""),n()}},a.a.createElement("div",{className:"message-input-wrap"},a.a.createElement("input",{type:"text",value:p,onChange:function(t){d(t.target.value)},placeholder:"Type your message..."}),a.a.createElement("button",{type:"submit",className:"message-send-btn",disabled:!p},"Send"))))}var O=function(){var t=Object(s.a)(m),e=Object(l.a)(t,1)[0];return a.a.createElement("div",{className:"App"},a.a.createElement("section",null,e?a.a.createElement(N,null):a.a.createElement(w,null)))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)))}},[[38,2,1]]]);
//# sourceMappingURL=main.8d173fa5.chunk.js.map