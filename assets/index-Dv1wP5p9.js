(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Cc={exports:{}},Oo={},Rc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function mv(){if(Bp)return _t;Bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(I,re,Ue){this.props=I,this.context=re,this.refs=C,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function U(I,re,Ue){this.props=I,this.context=re,this.refs=C,this.updater=Ue||S}var L=U.prototype=new x;L.constructor=U,T(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,W=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(I,re,Ue){var Q,me={},Me=null,ye=null;if(re!=null)for(Q in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Me=""+re.key),re)W.call(re,Q)&&!N.hasOwnProperty(Q)&&(me[Q]=re[Q]);var Re=arguments.length-2;if(Re===1)me.children=Ue;else if(1<Re){for(var Ze=Array(Re),Ye=0;Ye<Re;Ye++)Ze[Ye]=arguments[Ye+2];me.children=Ze}if(I&&I.defaultProps)for(Q in Re=I.defaultProps,Re)me[Q]===void 0&&(me[Q]=Re[Q]);return{$$typeof:s,type:I,key:Me,ref:ye,props:me,_owner:F.current}}function R(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function E(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function G(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return re[Ue]})}var le=/\/+/g;function ee(I,re){return typeof I=="object"&&I!==null&&I.key!=null?G(""+I.key):re.toString(36)}function de(I,re,Ue,Q,me){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(Me){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case s:case e:ye=!0}}if(ye)return ye=I,me=me(ye),I=Q===""?"."+ee(ye,0):Q,P(me)?(Ue="",I!=null&&(Ue=I.replace(le,"$&/")+"/"),de(me,re,Ue,"",function(Ye){return Ye})):me!=null&&(E(me)&&(me=R(me,Ue+(!me.key||ye&&ye.key===me.key?"":(""+me.key).replace(le,"$&/")+"/")+I)),re.push(me)),1;if(ye=0,Q=Q===""?".":Q+":",P(I))for(var Re=0;Re<I.length;Re++){Me=I[Re];var Ze=Q+ee(Me,Re);ye+=de(Me,re,Ue,Ze,me)}else if(Ze=v(I),typeof Ze=="function")for(I=Ze.call(I),Re=0;!(Me=I.next()).done;)Me=Me.value,Ze=Q+ee(Me,Re++),ye+=de(Me,re,Ue,Ze,me);else if(Me==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ge(I,re,Ue){if(I==null)return I;var Q=[],me=0;return de(I,Q,"","",function(Me){return re.call(Ue,Me,me++)}),Q}function oe(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},H={transition:null},ae={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ge,forEach:function(I,re,Ue){ge(I,function(){re.apply(this,arguments)},Ue)},count:function(I){var re=0;return ge(I,function(){re++}),re},toArray:function(I){return ge(I,function(re){return re})||[]},only:function(I){if(!E(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,_t.act=se,_t.cloneElement=function(I,re,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=T({},I.props),me=I.key,Me=I.ref,ye=I._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ye=F.current),re.key!==void 0&&(me=""+re.key),I.type&&I.type.defaultProps)var Re=I.type.defaultProps;for(Ze in re)W.call(re,Ze)&&!N.hasOwnProperty(Ze)&&(Q[Ze]=re[Ze]===void 0&&Re!==void 0?Re[Ze]:re[Ze])}var Ze=arguments.length-2;if(Ze===1)Q.children=Ue;else if(1<Ze){Re=Array(Ze);for(var Ye=0;Ye<Ze;Ye++)Re[Ye]=arguments[Ye+2];Q.children=Re}return{$$typeof:s,type:I.type,key:me,ref:Me,props:Q,_owner:ye}},_t.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=V,_t.createFactory=function(I){var re=V.bind(null,I);return re.type=I,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:f,render:I}},_t.isValidElement=E,_t.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:oe}},_t.memo=function(I,re){return{$$typeof:p,type:I,compare:re===void 0?null:re}},_t.startTransition=function(I){var re=H.transition;H.transition={};try{I()}finally{H.transition=re}},_t.unstable_act=se,_t.useCallback=function(I,re){return ce.current.useCallback(I,re)},_t.useContext=function(I){return ce.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},_t.useEffect=function(I,re){return ce.current.useEffect(I,re)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(I,re,Ue){return ce.current.useImperativeHandle(I,re,Ue)},_t.useInsertionEffect=function(I,re){return ce.current.useInsertionEffect(I,re)},_t.useLayoutEffect=function(I,re){return ce.current.useLayoutEffect(I,re)},_t.useMemo=function(I,re){return ce.current.useMemo(I,re)},_t.useReducer=function(I,re,Ue){return ce.current.useReducer(I,re,Ue)},_t.useRef=function(I){return ce.current.useRef(I)},_t.useState=function(I){return ce.current.useState(I)},_t.useSyncExternalStore=function(I,re,Ue){return ce.current.useSyncExternalStore(I,re,Ue)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var Hp;function rd(){return Hp||(Hp=1,Rc.exports=mv()),Rc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function gv(){if(Vp)return Oo;Vp=1;var s=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,_={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:v,ref:S,props:_,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var Gp;function _v(){return Gp||(Gp=1,Cc.exports=gv()),Cc.exports}var Xt=_v(),hn=rd(),ol={},Pc={exports:{}},Un={},bc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function vv(){return Wp||(Wp=1,function(s){function e(H,ae){var se=H.length;H.push(ae);e:for(;0<se;){var I=se-1>>>1,re=H[I];if(0<a(re,ae))H[I]=ae,H[se]=re,se=I;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ae=H[0],se=H.pop();if(se!==ae){H[0]=se;e:for(var I=0,re=H.length,Ue=re>>>1;I<Ue;){var Q=2*(I+1)-1,me=H[Q],Me=Q+1,ye=H[Me];if(0>a(me,se))Me<re&&0>a(ye,me)?(H[I]=ye,H[Me]=se,I=Me):(H[I]=me,H[Q]=se,I=Q);else if(Me<re&&0>a(ye,se))H[I]=ye,H[Me]=se,I=Me;else break e}}return ae}function a(H,ae){var se=H.sortIndex-ae.sortIndex;return se!==0?se:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,_=null,v=3,S=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=H)r(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function P(H){if(C=!1,L(H),!T)if(t(h)!==null)T=!0,oe(W);else{var ae=t(p);ae!==null&&ce(P,ae.startTime-H)}}function W(H,ae){T=!1,C&&(C=!1,x(V),V=-1),S=!0;var se=v;try{for(L(ae),_=t(h);_!==null&&(!(_.expirationTime>ae)||H&&!G());){var I=_.callback;if(typeof I=="function"){_.callback=null,v=_.priorityLevel;var re=I(_.expirationTime<=ae);ae=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),L(ae)}else r(h);_=t(h)}if(_!==null)var Ue=!0;else{var Q=t(p);Q!==null&&ce(P,Q.startTime-ae),Ue=!1}return Ue}finally{_=null,v=se,S=!1}}var F=!1,N=null,V=-1,R=5,E=-1;function G(){return!(s.unstable_now()-E<R)}function le(){if(N!==null){var H=s.unstable_now();E=H;var ae=!0;try{ae=N(!0,H)}finally{ae?ee():(F=!1,N=null)}}else F=!1}var ee;if(typeof U=="function")ee=function(){U(le)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=le,ee=function(){ge.postMessage(null)}}else ee=function(){y(le,0)};function oe(H){N=H,F||(F=!0,ee())}function ce(H,ae){V=y(function(){H(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(W))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var se=v;v=ae;try{return H()}finally{v=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=v;v=H;try{return ae()}finally{v=se}},s.unstable_scheduleCallback=function(H,ae,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,H={id:g++,callback:ae,priorityLevel:H,startTime:se,expirationTime:re,sortIndex:-1},se>I?(H.sortIndex=se,e(p,H),t(h)===null&&H===t(p)&&(C?(x(V),V=-1):C=!0,ce(P,se-I))):(H.sortIndex=re,e(h,H),T||S||(T=!0,oe(W))),H},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(H){var ae=v;return function(){var se=v;v=ae;try{return H.apply(this,arguments)}finally{v=se}}}}(Lc)),Lc}var Xp;function xv(){return Xp||(Xp=1,bc.exports=vv()),bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function yv(){if(Yp)return Un;Yp=1;var s=rd(),e=xv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,u,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,U);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,U);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,U);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),G=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ue=!1;function Q(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),m=u.stack.split(`
`),M=d.length-1,D=m.length-1;1<=M&&0<=D&&d[M]!==m[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==m[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==m[D]){var k=`
`+d[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function me(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case R:return"Profiler";case V:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case E:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Ye(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function un(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var je=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(je(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function pe(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function B(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function O(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,ie=null,fe=null;function Ne(n){if(n=Mo(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Sa(i),Te(n.stateNode,n.type,i))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function et(){if(ie){var n=ie,i=fe;if(fe=ie=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function xt(n,i){return n(i)}function Ut(){}var mt=!1;function qt(n,i,o){if(mt)return n(i,o);mt=!0;try{return xt(n,i,o)}finally{mt=!1,(ie!==null||fe!==null)&&(Ut(),et())}}function $t(n,i){var o=n.stateNode;if(o===null)return null;var u=Sa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ts=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ts=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ts=!1}function Mi(n,i,o,u,d,m,M,D,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(xe){this.onError(xe)}}var Ei=!1,Cr=null,Rr=!1,qi=null,Qo={onError:function(n){Ei=!0,Cr=n}};function ns(n,i,o,u,d,m,M,D,k){Ei=!1,Cr=null,Mi.apply(Qo,arguments)}function ea(n,i,o,u,d,m,M,D,k){if(ns.apply(this,arguments),Ei){if(Ei){var ne=Cr;Ei=!1,Cr=null}else throw Error(t(198));Rr||(Rr=!0,qi=ne)}}function di(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(di(n)!==n)throw Error(t(188))}function Kl(n){var i=n.alternate;if(!i){if(i=di(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return na(d),n;if(m===u)return na(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,u=m;break}if(D===u){M=!0,u=d,o=m;break}D=D.sibling}if(!M){for(D=m.child;D;){if(D===o){M=!0,o=m,u=d;break}if(D===u){M=!0,u=m,o=d;break}D=D.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ia(n){return n=Kl(n),n!==null?ra(n):null}function ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ra(n);if(i!==null)return i;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,st=null,Xe=null;function yt(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:St,Vt=Math.log,Ot=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var Je=64,Gt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?u=vt(D):(m&=M,m!==0&&(u=vt(m)))}else M=o&~d,M!==0?u=vt(M):m!==0&&(u=vt(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ut(i),d=1<<o,u|=n[o],i&=~d;return u}function $i(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ut(m),D=1<<M,k=d[M];k===-1?(!(D&o)||D&u)&&(d[M]=$i(D,i)):k<=i&&(n.expiredLanes|=D),m&=~D}}function Ti(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=Je;return Je<<=1,!(Je&4194240)&&(Je=64),n}function mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=o}function cn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ut(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ut(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function hi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var xd,Zl,yd,Sd,Md,Jl=!1,oa=[],Ki=null,Zi=null,Ji=null,so=new Map,oo=new Map,Qi=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(n,i){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Zl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function zg(n,i,o,u,d){switch(i){case"focusin":return Ki=ao(Ki,n,i,o,u,d),!0;case"dragenter":return Zi=ao(Zi,n,i,o,u,d),!0;case"mouseover":return Ji=ao(Ji,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,u,d)),!0}return!1}function Td(n){var i=Pr(n.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,Md(n.priority,function(){yd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=eu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return i=Mo(o),i!==null&&Zl(i),n.blockedOn=o,!1;i.shift()}return!0}function wd(n,i,o){aa(n)&&o.delete(i)}function kg(){Jl=!1,Ki!==null&&aa(Ki)&&(Ki=null),Zi!==null&&aa(Zi)&&(Zi=null),Ji!==null&&aa(Ji)&&(Ji=null),so.forEach(wd),oo.forEach(wd)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kg)))}function uo(n){function i(d){return lo(d,n)}if(0<oa.length){lo(oa[0],n);for(var o=1;o<oa.length;o++){var u=oa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ki!==null&&lo(Ki,n),Zi!==null&&lo(Zi,n),Ji!==null&&lo(Ji,n),so.forEach(i),oo.forEach(i),o=0;o<Qi.length;o++)u=Qi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)Td(o),o.blockedOn===null&&Qi.shift()}var is=P.ReactCurrentBatchConfig,la=!0;function Bg(n,i,o,u){var d=Mt,m=is.transition;is.transition=null;try{Mt=1,Ql(n,i,o,u)}finally{Mt=d,is.transition=m}}function Hg(n,i,o,u){var d=Mt,m=is.transition;is.transition=null;try{Mt=4,Ql(n,i,o,u)}finally{Mt=d,is.transition=m}}function Ql(n,i,o,u){if(la){var d=eu(n,i,o,u);if(d===null)_u(n,i,u,ua,o),Ed(n,u);else if(zg(d,n,i,o,u))u.stopPropagation();else if(Ed(n,u),i&4&&-1<Og.indexOf(n)){for(;d!==null;){var m=Mo(d);if(m!==null&&xd(m),m=eu(n,i,o,u),m===null&&_u(n,i,u,ua,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else _u(n,i,u,null,o)}}var ua=null;function eu(n,i,o,u){if(ua=null,n=O(u),n=Pr(n),n!==null)if(i=di(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ua=n,null}function Ad(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case we:return 1;case Le:return 4;case Ie:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var er=null,tu=null,ca=null;function Cd(){if(ca)return ca;var n,i=tu,o=i.length,u,d="value"in er?er.value:er.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[m-u];u++);return ca=d.slice(n,1<u?1-u:void 0)}function fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Rd(){return!1}function On(n){function i(o,u,d,m,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?da:Rd,this.isPropagationStopped=Rd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=On(rs),co=se({},rs,{view:0,detail:0}),Vg=On(co),iu,ru,fo,ha=se({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(iu=n.screenX-fo.screenX,ru=n.screenY-fo.screenY):ru=iu=0,fo=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),Pd=On(ha),Gg=se({},ha,{dataTransfer:0}),Wg=On(Gg),Xg=se({},co,{relatedTarget:0}),su=On(Xg),Yg=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=On(Yg),qg=se({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$g=On(qg),Kg=se({},rs,{data:0}),bd=On(Kg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Qg[n])?!!i[n]:!1}function ou(){return e_}var t_=se({},co,{key:function(n){if(n.key){var i=Zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(n){return n.type==="keypress"?fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),n_=On(t_),i_=se({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=On(i_),r_=se({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),s_=On(r_),o_=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=On(o_),l_=se({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=On(l_),c_=[9,13,27,32],au=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var f_=f&&"TextEvent"in window&&!ho,Dd=f&&(!au||ho&&8<ho&&11>=ho),Nd=" ",Ud=!1;function Id(n,i){switch(n){case"keyup":return c_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function d_(n,i){switch(n){case"compositionend":return Fd(i);case"keypress":return i.which!==32?null:(Ud=!0,Nd);case"textInput":return n=i.data,n===Nd&&Ud?null:n;default:return null}}function h_(n,i){if(ss)return n==="compositionend"||!au&&Id(n,i)?(n=Cd(),ca=tu=er=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Dd&&i.locale!=="ko"?null:i.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!p_[n.type]:i==="textarea"}function zd(n,i,o,u){be(u),i=va(i,"onChange"),0<i.length&&(o=new nu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function m_(n){nh(n,0)}function pa(n){var i=cs(n);if(Rt(i))return n}function g_(n,i){if(n==="change")return i}var kd=!1;if(f){var lu;if(f){var uu="oninput"in document;if(!uu){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),uu=typeof Bd.oninput=="function"}lu=uu}else lu=!1;kd=lu&&(!document.documentMode||9<document.documentMode)}function Hd(){po&&(po.detachEvent("onpropertychange",Vd),mo=po=null)}function Vd(n){if(n.propertyName==="value"&&pa(mo)){var i=[];zd(i,mo,n,O(n)),qt(m_,i)}}function __(n,i,o){n==="focusin"?(Hd(),po=i,mo=o,po.attachEvent("onpropertychange",Vd)):n==="focusout"&&Hd()}function v_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pa(mo)}function x_(n,i){if(n==="click")return pa(i)}function y_(n,i){if(n==="input"||n==="change")return pa(i)}function S_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:S_;function go(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function Gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,i){var o=Gd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gd(o)}}function Xd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Xd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=lt(n.document)}return i}function cu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function M_(n){var i=Yd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Xd(o.ownerDocument.documentElement,o)){if(u!==null&&cu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Wd(o,m);var M=Wd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E_=f&&"documentMode"in document&&11>=document.documentMode,os=null,fu=null,_o=null,du=!1;function jd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;du||os==null||os!==lt(u)||(u=os,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&go(_o,u)||(_o=u,u=va(fu,"onSelect"),0<u.length&&(i=new nu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=os)))}function ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var as={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},hu={},qd={};f&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ga(n){if(hu[n])return hu[n];if(!as[n])return n;var i=as[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in qd)return hu[n]=i[o];return n}var $d=ga("animationend"),Kd=ga("animationiteration"),Zd=ga("animationstart"),Jd=ga("transitionend"),Qd=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){Qd.set(n,i),l(i,[n])}for(var pu=0;pu<eh.length;pu++){var mu=eh[pu],T_=mu.toLowerCase(),w_=mu[0].toUpperCase()+mu.slice(1);tr(T_,"on"+w_)}tr($d,"onAnimationEnd"),tr(Kd,"onAnimationIteration"),tr(Zd,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function th(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ea(u,i,void 0,n),n.currentTarget=null}function nh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],k=D.instance,ne=D.currentTarget;if(D=D.listener,k!==m&&d.isPropagationStopped())break e;th(d,D,ne),m=k}else for(M=0;M<u.length;M++){if(D=u[M],k=D.instance,ne=D.currentTarget,D=D.listener,k!==m&&d.isPropagationStopped())break e;th(d,D,ne),m=k}}}if(Rr)throw n=qi,Rr=!1,qi=null,n}function It(n,i){var o=i[Eu];o===void 0&&(o=i[Eu]=new Set);var u=n+"__bubble";o.has(u)||(ih(i,n,2,!1),o.add(u))}function gu(n,i,o){var u=0;i&&(u|=4),ih(o,n,u,i)}var _a="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[_a]){n[_a]=!0,r.forEach(function(o){o!=="selectionchange"&&(A_.has(o)||gu(o,!1,n),gu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_a]||(i[_a]=!0,gu("selectionchange",!1,i))}}function ih(n,i,o,u){switch(Ad(i)){case 1:var d=Bg;break;case 4:d=Hg;break;default:d=Ql}o=d.bind(null,i,o,n),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function _u(n,i,o,u,d){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=Pr(D),M===null)return;if(k=M.tag,k===5||k===6){u=m=M;continue e}D=D.parentNode}}u=u.return}qt(function(){var ne=m,xe=O(o),Se=[];e:{var ve=Qd.get(n);if(ve!==void 0){var Fe=nu,Ve=n;switch(n){case"keypress":if(fa(o)===0)break e;case"keydown":case"keyup":Fe=n_;break;case"focusin":Ve="focus",Fe=su;break;case"focusout":Ve="blur",Fe=su;break;case"beforeblur":case"afterblur":Fe=su;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=s_;break;case $d:case Kd:case Zd:Fe=jg;break;case Jd:Fe=a_;break;case"scroll":Fe=Vg;break;case"wheel":Fe=u_;break;case"copy":case"cut":case"paste":Fe=$g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Ld}var qe=(i&4)!==0,Yt=!qe&&n==="scroll",$=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var X=ne,J;X!==null;){J=X;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,$!==null&&(Ae=$t(X,$),Ae!=null&&qe.push(yo(X,Ae,J)))),Yt)break;X=X.return}0<qe.length&&(ve=new Fe(ve,Ve,null,o,xe),Se.push({event:ve,listeners:qe}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&(Ve=o.relatedTarget||o.fromElement)&&(Pr(Ve)||Ve[wi]))break e;if((Fe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=ne,Ve=Ve?Pr(Ve):null,Ve!==null&&(Yt=di(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ne),Fe!==Ve)){if(qe=Pd,Ae="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Ld,Ae="onPointerLeave",$="onPointerEnter",X="pointer"),Yt=Fe==null?ve:cs(Fe),J=Ve==null?ve:cs(Ve),ve=new qe(Ae,X+"leave",Fe,o,xe),ve.target=Yt,ve.relatedTarget=J,Ae=null,Pr(xe)===ne&&(qe=new qe($,X+"enter",Ve,o,xe),qe.target=J,qe.relatedTarget=Yt,Ae=qe),Yt=Ae,Fe&&Ve)t:{for(qe=Fe,$=Ve,X=0,J=qe;J;J=ls(J))X++;for(J=0,Ae=$;Ae;Ae=ls(Ae))J++;for(;0<X-J;)qe=ls(qe),X--;for(;0<J-X;)$=ls($),J--;for(;X--;){if(qe===$||$!==null&&qe===$.alternate)break t;qe=ls(qe),$=ls($)}qe=null}else qe=null;Fe!==null&&rh(Se,ve,Fe,qe,!1),Ve!==null&&Yt!==null&&rh(Se,Yt,Ve,qe,!0)}}e:{if(ve=ne?cs(ne):window,Fe=ve.nodeName&&ve.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ve.type==="file")var $e=g_;else if(Od(ve))if(kd)$e=y_;else{$e=v_;var tt=__}else(Fe=ve.nodeName)&&Fe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=x_);if($e&&($e=$e(n,ne))){zd(Se,$e,o,xe);break e}tt&&tt(n,ve,ne),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Tt(ve,"number",ve.value)}switch(tt=ne?cs(ne):window,n){case"focusin":(Od(tt)||tt.contentEditable==="true")&&(os=tt,fu=ne,_o=null);break;case"focusout":_o=fu=os=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,jd(Se,o,xe);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":jd(Se,o,xe)}var nt;if(au)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ss?Id(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Dd&&o.locale!=="ko"&&(ss||at!=="onCompositionStart"?at==="onCompositionEnd"&&ss&&(nt=Cd()):(er=xe,tu="value"in er?er.value:er.textContent,ss=!0)),tt=va(ne,at),0<tt.length&&(at=new bd(at,n,null,o,xe),Se.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Fd(o),nt!==null&&(at.data=nt)))),(nt=f_?d_(n,o):h_(n,o))&&(ne=va(ne,"onBeforeInput"),0<ne.length&&(xe=new bd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ne}),xe.data=nt))}nh(Se,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function va(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=$t(n,o),m!=null&&u.unshift(yo(n,m,d)),m=$t(n,i),m!=null&&u.push(yo(n,m,d))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rh(n,i,o,u,d){for(var m=i._reactName,M=[];o!==null&&o!==u;){var D=o,k=D.alternate,ne=D.stateNode;if(k!==null&&k===u)break;D.tag===5&&ne!==null&&(D=ne,d?(k=$t(o,m),k!=null&&M.unshift(yo(o,k,D))):d||(k=$t(o,m),k!=null&&M.push(yo(o,k,D)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var C_=/\r\n?/g,R_=/\u0000|\uFFFD/g;function sh(n){return(typeof n=="string"?n:""+n).replace(C_,`
`).replace(R_,"")}function xa(n,i,o){if(i=sh(i),sh(n)!==i&&o)throw Error(t(425))}function ya(){}var vu=null,xu=null;function yu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,P_=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(n){return oh.resolve(null).then(n).catch(L_)}:Su;function L_(n){setTimeout(function(){throw n})}function Mu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),pi="__reactFiber$"+us,So="__reactProps$"+us,wi="__reactContainer$"+us,Eu="__reactEvents$"+us,D_="__reactListeners$"+us,N_="__reactHandles$"+us;function Pr(n){var i=n[pi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[wi]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ah(n);n!==null;){if(o=n[pi])return o;n=ah(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[pi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[So]||null}var Tu=[],fs=-1;function ir(n){return{current:n}}function Ft(n){0>fs||(n.current=Tu[fs],Tu[fs]=null,fs--)}function Nt(n,i){fs++,Tu[fs]=n.current,n.current=i}var rr={},gn=ir(rr),Pn=ir(!1),br=rr;function ds(n,i){var o=n.type.contextTypes;if(!o)return rr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function Ma(){Ft(Pn),Ft(gn)}function lh(n,i,o){if(gn.current!==rr)throw Error(t(168));Nt(gn,i),Nt(Pn,o)}function uh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return se({},o,u)}function Ea(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,br=gn.current,Nt(gn,n),Nt(Pn,Pn.current),!0}function ch(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=uh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,Ft(Pn),Ft(gn),Nt(gn,n)):Ft(Pn),Nt(Pn,o)}var Ai=null,Ta=!1,wu=!1;function fh(n){Ai===null?Ai=[n]:Ai.push(n)}function U_(n){Ta=!0,fh(n)}function sr(){if(!wu&&Ai!==null){wu=!0;var n=0,i=Mt;try{var o=Ai;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ai=null,Ta=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),sa(we,sr),d}finally{Mt=i,wu=!1}}return null}var hs=[],ps=0,wa=null,Aa=0,Wn=[],Xn=0,Lr=null,Ci=1,Ri="";function Dr(n,i){hs[ps++]=Aa,hs[ps++]=wa,wa=n,Aa=i}function dh(n,i,o){Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=Lr,Lr=n;var u=Ci;n=Ri;var d=32-ut(u)-1;u&=~(1<<d),o+=1;var m=32-ut(i)+d;if(30<m){var M=d-d%5;m=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ci=1<<32-ut(i)+d|o<<d|u,Ri=m+n}else Ci=1<<m|o<<d|u,Ri=n}function Au(n){n.return!==null&&(Dr(n,1),dh(n,1,0))}function Cu(n){for(;n===wa;)wa=hs[--ps],hs[ps]=null,Aa=hs[--ps],hs[ps]=null;for(;n===Lr;)Lr=Wn[--Xn],Wn[Xn]=null,Ri=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null}var zn=null,kn=null,zt=!1,ei=null;function hh(n,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ph(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,kn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,zn=n,kn=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if(zt){var i=kn;if(i){var o=i;if(!ph(n,i)){if(Ru(n))throw Error(t(418));i=nr(o.nextSibling);var u=zn;i&&ph(n,i)?hh(u,o):(n.flags=n.flags&-4097|2,zt=!1,zn=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,zn=n}}}function mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ca(n){if(n!==zn)return!1;if(!zt)return mh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!yu(n.type,n.memoizedProps)),i&&(i=kn)){if(Ru(n))throw gh(),Error(t(418));for(;i;)hh(n,i),i=nr(i.nextSibling)}if(mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=nr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=zn?nr(n.stateNode.nextSibling):null;return!0}function gh(){for(var n=kn;n;)n=nr(n.nextSibling)}function ms(){kn=zn=null,zt=!1}function bu(n){ei===null?ei=[n]:ei.push(n)}var I_=P.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var D=d.refs;M===null?delete D[m]:D[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ra(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function _h(n){var i=n._init;return i(n._payload)}function vh(n){function i($,X){if(n){var J=$.deletions;J===null?($.deletions=[X],$.flags|=16):J.push(X)}}function o($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function u($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function d($,X){return $=hr($,X),$.index=0,$.sibling=null,$}function m($,X,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<X?($.flags|=2,X):J):($.flags|=2,X)):($.flags|=1048576,X)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function D($,X,J,Ae){return X===null||X.tag!==6?(X=Sc(J,$.mode,Ae),X.return=$,X):(X=d(X,J),X.return=$,X)}function k($,X,J,Ae){var $e=J.type;return $e===N?xe($,X,J.props.children,Ae,J.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&_h($e)===X.type)?(Ae=d(X,J.props),Ae.ref=Eo($,X,J),Ae.return=$,Ae):(Ae=Ja(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Eo($,X,J),Ae.return=$,Ae)}function ne($,X,J,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Mc(J,$.mode,Ae),X.return=$,X):(X=d(X,J.children||[]),X.return=$,X)}function xe($,X,J,Ae,$e){return X===null||X.tag!==7?(X=Br(J,$.mode,Ae,$e),X.return=$,X):(X=d(X,J),X.return=$,X)}function Se($,X,J){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Sc(""+X,$.mode,J),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case W:return J=Ja(X.type,X.key,X.props,null,$.mode,J),J.ref=Eo($,null,X),J.return=$,J;case F:return X=Mc(X,$.mode,J),X.return=$,X;case oe:var Ae=X._init;return Se($,Ae(X._payload),J)}if(je(X)||ae(X))return X=Br(X,$.mode,J,null),X.return=$,X;Ra($,X)}return null}function ve($,X,J,Ae){var $e=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return $e!==null?null:D($,X,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===$e?k($,X,J,Ae):null;case F:return J.key===$e?ne($,X,J,Ae):null;case oe:return $e=J._init,ve($,X,$e(J._payload),Ae)}if(je(J)||ae(J))return $e!==null?null:xe($,X,J,Ae,null);Ra($,J)}return null}function Fe($,X,J,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(J)||null,D(X,$,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case W:return $=$.get(Ae.key===null?J:Ae.key)||null,k(X,$,Ae,$e);case F:return $=$.get(Ae.key===null?J:Ae.key)||null,ne(X,$,Ae,$e);case oe:var tt=Ae._init;return Fe($,X,J,tt(Ae._payload),$e)}if(je(Ae)||ae(Ae))return $=$.get(J)||null,xe(X,$,Ae,$e,null);Ra(X,Ae)}return null}function Ve($,X,J,Ae){for(var $e=null,tt=null,nt=X,at=X=0,an=null;nt!==null&&at<J.length;at++){nt.index>at?(an=nt,nt=null):an=nt.sibling;var wt=ve($,nt,J[at],Ae);if(wt===null){nt===null&&(nt=an);break}n&&nt&&wt.alternate===null&&i($,nt),X=m(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt,nt=an}if(at===J.length)return o($,nt),zt&&Dr($,at),$e;if(nt===null){for(;at<J.length;at++)nt=Se($,J[at],Ae),nt!==null&&(X=m(nt,X,at),tt===null?$e=nt:tt.sibling=nt,tt=nt);return zt&&Dr($,at),$e}for(nt=u($,nt);at<J.length;at++)an=Fe(nt,$,at,J[at],Ae),an!==null&&(n&&an.alternate!==null&&nt.delete(an.key===null?at:an.key),X=m(an,X,at),tt===null?$e=an:tt.sibling=an,tt=an);return n&&nt.forEach(function(pr){return i($,pr)}),zt&&Dr($,at),$e}function qe($,X,J,Ae){var $e=ae(J);if(typeof $e!="function")throw Error(t(150));if(J=$e.call(J),J==null)throw Error(t(151));for(var tt=$e=null,nt=X,at=X=0,an=null,wt=J.next();nt!==null&&!wt.done;at++,wt=J.next()){nt.index>at?(an=nt,nt=null):an=nt.sibling;var pr=ve($,nt,wt.value,Ae);if(pr===null){nt===null&&(nt=an);break}n&&nt&&pr.alternate===null&&i($,nt),X=m(pr,X,at),tt===null?$e=pr:tt.sibling=pr,tt=pr,nt=an}if(wt.done)return o($,nt),zt&&Dr($,at),$e;if(nt===null){for(;!wt.done;at++,wt=J.next())wt=Se($,wt.value,Ae),wt!==null&&(X=m(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return zt&&Dr($,at),$e}for(nt=u($,nt);!wt.done;at++,wt=J.next())wt=Fe(nt,$,at,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&nt.delete(wt.key===null?at:wt.key),X=m(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return n&&nt.forEach(function(pv){return i($,pv)}),zt&&Dr($,at),$e}function Yt($,X,J,Ae){if(typeof J=="object"&&J!==null&&J.type===N&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var $e=J.key,tt=X;tt!==null;){if(tt.key===$e){if($e=J.type,$e===N){if(tt.tag===7){o($,tt.sibling),X=d(tt,J.props.children),X.return=$,$=X;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&_h($e)===tt.type){o($,tt.sibling),X=d(tt,J.props),X.ref=Eo($,tt,J),X.return=$,$=X;break e}o($,tt);break}else i($,tt);tt=tt.sibling}J.type===N?(X=Br(J.props.children,$.mode,Ae,J.key),X.return=$,$=X):(Ae=Ja(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Eo($,X,J),Ae.return=$,$=Ae)}return M($);case F:e:{for(tt=J.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){o($,X.sibling),X=d(X,J.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=Mc(J,$.mode,Ae),X.return=$,$=X}return M($);case oe:return tt=J._init,Yt($,X,tt(J._payload),Ae)}if(je(J))return Ve($,X,J,Ae);if(ae(J))return qe($,X,J,Ae);Ra($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,X!==null&&X.tag===6?(o($,X.sibling),X=d(X,J),X.return=$,$=X):(o($,X),X=Sc(J,$.mode,Ae),X.return=$,$=X),M($)):o($,X)}return Yt}var gs=vh(!0),xh=vh(!1),Pa=ir(null),ba=null,_s=null,Lu=null;function Du(){Lu=_s=ba=null}function Nu(n){var i=Pa.current;Ft(Pa),n._currentValue=i}function Uu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function vs(n,i){ba=n,Lu=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Ln=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(ba===null)throw Error(t(308));_s=n,ba.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Nr=null;function Iu(n){Nr===null?Nr=[n]:Nr.push(n)}function yh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Iu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Pi(n,u)}function Pi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var or=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pi(n,o)}return d=u.interleaved,d===null?(i.next=i,Iu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pi(n,o)}function La(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}function Mh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Da(n,i,o,u){var d=n.updateQueue;or=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,ne=k.next;k.next=null,M===null?m=ne:M.next=ne,M=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=ne:D.next=ne,xe.lastBaseUpdate=k))}if(m!==null){var Se=d.baseState;M=0,xe=ne=k=null,D=m;do{var ve=D.lane,Fe=D.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,qe=D;switch(ve=i,Fe=o,qe.tag){case 1:if(Ve=qe.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,ve);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=qe.payload,ve=typeof Ve=="function"?Ve.call(Fe,Se,ve):Ve,ve==null)break e;Se=se({},Se,ve);break e;case 2:or=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[D]:ve.push(D))}else Fe={eventTime:Fe,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(ne=xe=Fe,k=Se):xe=xe.next=Fe,M|=ve;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(k=Se),d.baseState=k,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=M,n.lanes=M,n.memoizedState=Se}}function Eh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},mi=ir(To),wo=ir(To),Ao=ir(To);function Ur(n){if(n===To)throw Error(t(174));return n}function Ou(n,i){switch(Nt(Ao,i),Nt(wo,n),Nt(mi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ft(mi),Nt(mi,i)}function xs(){Ft(mi),Ft(wo),Ft(Ao)}function Th(n){Ur(Ao.current);var i=Ur(mi.current),o=We(i,n.type);i!==o&&(Nt(wo,n),Nt(mi,o))}function zu(n){wo.current===n&&(Ft(mi),Ft(wo))}var kt=ir(0);function Na(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ku=[];function Bu(){for(var n=0;n<ku.length;n++)ku[n]._workInProgressVersionPrimary=null;ku.length=0}var Ua=P.ReactCurrentDispatcher,Hu=P.ReactCurrentBatchConfig,Ir=0,Bt=null,Jt=null,sn=null,Ia=!1,Co=!1,Ro=0,F_=0;function _n(){throw Error(t(321))}function Vu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function Gu(n,i,o,u,d,m){if(Ir=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=n===null||n.memoizedState===null?B_:H_,n=o(u,d),Co){m=0;do{if(Co=!1,Ro=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,Ua.current=V_,n=o(u,d)}while(Co)}if(Ua.current=za,i=Jt!==null&&Jt.next!==null,Ir=0,sn=Jt=Bt=null,Ia=!1,i)throw Error(t(300));return n}function Wu(){var n=Ro!==0;return Ro=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Bt.memoizedState=sn=n:sn=sn.next=n,sn}function jn(){if(Jt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Bt.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Bt.memoizedState=sn=n:sn=sn.next=n}return sn}function Po(n,i){return typeof i=="function"?i(n):i}function Xu(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Jt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var D=M=null,k=null,ne=m;do{var xe=ne.lane;if((Ir&xe)===xe)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Se={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(D=k=Se,M=u):k=k.next=Se,Bt.lanes|=xe,Fr|=xe}ne=ne.next}while(ne!==null&&ne!==m);k===null?M=u:k.next=D,Qn(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Bt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(n){var i=jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);Qn(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function wh(){}function Ah(n,i){var o=Bt,u=jn(),d=i(),m=!Qn(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,ju(Ph.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Rh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(t(349));Ir&30||Ch(o,i,d)}return d}function Ch(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Rh(n,i,o,u){i.value=o,i.getSnapshot=u,bh(i)&&Lh(n)}function Ph(n,i,o){return o(function(){bh(i)&&Lh(n)})}function bh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function Lh(n){var i=Pi(n,1);i!==null&&ri(i,n,1,-1)}function Dh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=k_.bind(null,Bt,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Nh(){return jn().memoizedState}function Fa(n,i,o,u){var d=gi();Bt.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function Oa(n,i,o,u){var d=jn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,u!==null&&Vu(u,M.deps)){d.memoizedState=bo(i,o,m,u);return}}Bt.flags|=n,d.memoizedState=bo(1|i,o,m,u)}function Uh(n,i){return Fa(8390656,8,n,i)}function ju(n,i){return Oa(2048,8,n,i)}function Ih(n,i){return Oa(4,2,n,i)}function Fh(n,i){return Oa(4,4,n,i)}function Oh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function zh(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4,4,Oh.bind(null,i,n),o)}function qu(){}function kh(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Bh(n,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Hh(n,i,o){return Ir&21?(Qn(o,i)||(o=Dt(),Bt.lanes|=o,Fr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o)}function O_(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Hu.transition;Hu.transition={};try{n(!1),i()}finally{Mt=o,Hu.transition=u}}function Vh(){return jn().memoizedState}function z_(n,i,o){var u=fr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Gh(n))Wh(i,o);else if(o=yh(n,i,o,u),o!==null){var d=Tn();ri(o,n,u,d),Xh(o,i,u)}}function k_(n,i,o){var u=fr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gh(n))Wh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,D=m(M,o);if(d.hasEagerState=!0,d.eagerState=D,Qn(D,M)){var k=i.interleaved;k===null?(d.next=d,Iu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=yh(n,i,d,u),o!==null&&(d=Tn(),ri(o,n,u,d),Xh(o,i,u))}}function Gh(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Wh(n,i){Co=Ia=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Xh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}var za={readContext:Yn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},B_={readContext:Yn,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:Uh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4194308,4,Oh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Fa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fa(4,2,n,i)},useMemo:function(n,i){var o=gi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=gi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=z_.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:Dh,useDebugValue:qu,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=Dh(!1),i=n[0];return n=O_.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,d=gi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));Ir&30||Ch(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Uh(Ph.bind(null,u,m,n),[n]),u.flags|=2048,bo(9,Rh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=gi(),i=on.identifierPrefix;if(zt){var o=Ri,u=Ci;o=(u&~(1<<32-ut(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=F_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},H_={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:ju,useImperativeHandle:zh,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:Bh,useReducer:Xu,useRef:Nh,useState:function(){return Xu(Po)},useDebugValue:qu,useDeferredValue:function(n){var i=jn();return Hh(i,Jt.memoizedState,n)},useTransition:function(){var n=Xu(Po)[0],i=jn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1},V_={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:ju,useImperativeHandle:zh,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:Bh,useReducer:Yu,useRef:Nh,useState:function(){return Yu(Po)},useDebugValue:qu,useDeferredValue:function(n){var i=jn();return Jt===null?i.memoizedState=n:Hh(i,Jt.memoizedState,n)},useTransition:function(){var n=Yu(Po)[0],i=jn().memoizedState;return[n,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Vh,unstable_isNewReconciler:!1};function ti(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function $u(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ka={isMounted:function(n){return(n=n._reactInternals)?di(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=fr(n),m=bi(u,d);m.payload=i,o!=null&&(m.callback=o),i=ar(n,m,d),i!==null&&(ri(i,n,d,u),La(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Tn(),d=fr(n),m=bi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ar(n,m,d),i!==null&&(ri(i,n,d,u),La(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Tn(),u=fr(n),d=bi(o,u);d.tag=2,i!=null&&(d.callback=i),i=ar(n,d,u),i!==null&&(ri(i,n,u,o),La(i,n,u))}};function Yh(n,i,o,u,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,m):!0}function jh(n,i,o){var u=!1,d=rr,m=i.contextType;return typeof m=="object"&&m!==null?m=Yn(m):(d=bn(i)?br:gn.current,u=i.contextTypes,m=(u=u!=null)?ds(n,d):rr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function qh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ka.enqueueReplaceState(i,i.state,null)}function Ku(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Fu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Yn(m):(m=bn(i)?br:gn.current,d.context=ds(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&($u(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),Da(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Zu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var G_=typeof WeakMap=="function"?WeakMap:Map;function $h(n,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ya||(Ya=!0,hc=u),Ju(n,i)},o}function Kh(n,i,o){o=bi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ju(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Ju(n,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Zh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new G_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=iv.bind(null,n,i,o),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Qh(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),n)}var W_=P.ReactCurrentOwner,Ln=!1;function En(n,i,o,u){i.child=n===null?xh(i,null,o,u):gs(i,n.child,o,u)}function ep(n,i,o,u,d){o=o.render;var m=i.ref;return vs(i,d),u=Gu(n,i,o,u,m,d),o=Wu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(zt&&o&&Au(i),i.flags|=1,En(n,i,u,d),i.child)}function tp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!yc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,np(n,i,m,u,d)):(n=Ja(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=hr(m,u),n.ref=i.ref,n.return=i,i.child=n}function np(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(go(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)n.flags&131072&&(Ln=!0);else return i.lanes=n.lanes,Li(n,i,d)}return Qu(n,i,o,u,d)}function ip(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ms,Bn),Bn|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Ms,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Nt(Ms,Bn),Bn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Nt(Ms,Bn),Bn|=u;return En(n,i,d,o),i.child}function rp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Qu(n,i,o,u,d){var m=bn(o)?br:gn.current;return m=ds(i,m),vs(i,d),o=Gu(n,i,o,u,m,d),u=Wu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(zt&&u&&Au(i),i.flags|=1,En(n,i,o,d),i.child)}function sp(n,i,o,u,d){if(bn(o)){var m=!0;Ea(i)}else m=!1;if(vs(i,d),i.stateNode===null)Ha(n,i),jh(i,o,u),Ku(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Yn(ne):(ne=bn(o)?br:gn.current,ne=ds(i,ne));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||k!==ne)&&qh(i,M,u,ne),or=!1;var ve=i.memoizedState;M.state=ve,Da(i,u,M,d),k=i.memoizedState,D!==u||ve!==k||Pn.current||or?(typeof xe=="function"&&($u(i,o,xe,u),k=i.memoizedState),(D=or||Yh(i,o,D,u,ve,k,ne))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),M.props=u,M.state=k,M.context=ne,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Sh(n,i),D=i.memoizedProps,ne=i.type===i.elementType?D:ti(i.type,D),M.props=ne,Se=i.pendingProps,ve=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Yn(k):(k=bn(o)?br:gn.current,k=ds(i,k));var Fe=o.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Se||ve!==k)&&qh(i,M,u,k),or=!1,ve=i.memoizedState,M.state=ve,Da(i,u,M,d);var Ve=i.memoizedState;D!==Se||ve!==Ve||Pn.current||or?(typeof Fe=="function"&&($u(i,o,Fe,u),Ve=i.memoizedState),(ne=or||Yh(i,o,ne,u,ve,Ve,k)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=k,u=ne):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return ec(n,i,o,u,m,d)}function ec(n,i,o,u,d,m){rp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&ch(i,o,!1),Li(n,i,m);u=i.stateNode,W_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=gs(i,n.child,null,m),i.child=gs(i,null,D,m)):En(n,i,D,m),i.memoizedState=u.state,d&&ch(i,o,!0),i.child}function op(n){var i=n.stateNode;i.pendingContext?lh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(n,i.context,!1),Ou(n,i.containerInfo)}function ap(n,i,o,u,d){return ms(),bu(d),i.flags|=256,En(n,i,o,u),i.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function lp(n,i,o){var u=i.pendingProps,d=kt.current,m=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Nt(kt,d&1),n===null)return Pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=Qa(M,u,0,null),n=Br(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=nc(o),i.memoizedState=tc,n):ic(i,M));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return X_(n,i,M,u,D,d,o);if(m){m=u.fallback,M=i.mode,d=n.child,D=d.sibling;var k={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=hr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?m=hr(D,m):(m=Br(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?nc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=tc,u}return m=n.child,n=m.sibling,u=hr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function ic(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,u){return u!==null&&bu(u),gs(i,n.child,null,o),n=ic(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function X_(n,i,o,u,d,m,M){if(o)return i.flags&256?(i.flags&=-257,u=Zu(Error(t(422))),Ba(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=Qa({mode:"visible",children:u.children},d,0,null),m=Br(m,d,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&gs(i,n.child,null,M),i.child.memoizedState=nc(M),i.memoizedState=tc,m);if(!(i.mode&1))return Ba(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,m=Error(t(419)),u=Zu(m,u,void 0),Ba(n,i,M,u)}if(D=(M&n.childLanes)!==0,Ln||D){if(u=on,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pi(n,d),ri(u,n,d,-1))}return xc(),u=Zu(Error(t(421))),Ba(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=rv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=nr(d.nextSibling),zn=i,zt=!0,ei=null,n!==null&&(Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=Lr,Ci=n.id,Ri=n.overflow,Lr=i),i=ic(i,u.children),i.flags|=4096,i)}function up(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Uu(n.return,i,o)}function rc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function cp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,o),u=kt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&up(n,o,i);else if(n.tag===19)up(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(kt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Na(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),rc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Na(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}rc(i,!0,o,null,m);break;case"together":rc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=hr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Y_(n,i,o){switch(i.tag){case 3:op(i),ms();break;case 5:Th(i);break;case 1:bn(i.type)&&Ea(i);break;case 4:Ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(Pa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?lp(n,i,o):(Nt(kt,kt.current&1),n=Li(n,i,o),n!==null?n.sibling:null);Nt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return cp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,ip(n,i,o)}return Li(n,i,o)}var fp,sc,dp,hp;fp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},sc=function(){},dp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(mi.current);var m=null;switch(o){case"input":d=z(n,d),u=z(n,u),m=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),m=[];break;case"textarea":d=w(n,d),u=w(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ya)}B(o,u);var M;o=null;for(ne in d)if(!u.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var D=d[ne];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in u){var k=u[ne];if(D=d!=null?d[ne]:void 0,u.hasOwnProperty(ne)&&k!==D&&(k!=null||D!=null))if(ne==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(m||(m=[]),m.push(ne,o)),o=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(m=m||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&It("scroll",n),m||D===k||(m=[])):(m=m||[]).push(ne,k))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},hp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function j_(n,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return bn(i.type)&&Ma(),vn(i),null;case 3:return u=i.stateNode,xs(),Ft(Pn),Ft(gn),Bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ei!==null&&(gc(ei),ei=null))),sc(n,i),vn(i),null;case 5:zu(i);var d=Ur(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)dp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Ur(mi.current),Ca(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[pi]=i,u[So]=m,n=(i.mode&1)!==0,o){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":un(u,m),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},It("invalid",u);break;case"textarea":Z(u,m),It("invalid",u)}B(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var D=m[M];M==="children"?typeof D=="string"?u.textContent!==D&&(m.suppressHydrationWarning!==!0&&xa(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&xa(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",u)}switch(o){case"input":Pt(u),Ke(u,m,!0);break;case"textarea":Pt(u),_e(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=ya)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[pi]=i,n[So]=u,fp(n,i,!1,!1),i.stateNode=n;e:{switch(M=ue(o,u),o){case"dialog":It("cancel",n),It("close",n),d=u;break;case"iframe":case"object":case"embed":It("load",n),d=u;break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],n);d=u;break;case"source":It("error",n),d=u;break;case"img":case"image":case"link":It("error",n),It("load",n),d=u;break;case"details":It("toggle",n),d=u;break;case"input":un(n,u),d=z(n,u),It("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),It("invalid",n);break;case"textarea":Z(n,u),d=w(n,u),It("invalid",n);break;default:d=u}B(o,d),D=d;for(m in D)if(D.hasOwnProperty(m)){var k=D[m];m==="style"?rt(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&It("scroll",n):k!=null&&L(n,m,k,M))}switch(o){case"input":Pt(n),Ke(n,u,!1);break;case"textarea":Pt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?b(n,!!u.multiple,m,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)hp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ur(Ao.current),Ur(mi.current),Ca(i)){if(u=i.stateNode,o=i.memoizedProps,u[pi]=i,(m=u.nodeValue!==o)&&(n=zn,n!==null))switch(n.tag){case 3:xa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[pi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ft(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&kn!==null&&i.mode&1&&!(i.flags&128))gh(),ms(),i.flags|=98560,m=!1;else if(m=Ca(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[pi]=i}else ms(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ei!==null&&(gc(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Qt===0&&(Qt=3):xc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return xs(),sc(n,i),n===null&&xo(i.stateNode.containerInfo),vn(i),null;case 10:return Nu(i.type._context),vn(i),null;case 17:return bn(i.type)&&Ma(),vn(i),null;case 19:if(Ft(kt),m=i.memoizedState,m===null)return vn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Lo(m,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Na(n),M!==null){for(i.flags|=128,Lo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Nt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&K()>Es&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Na(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!zt)return vn(i),null}else 2*K()-m.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=K(),i.sibling=null,o=kt.current,Nt(kt,u?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return vc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Bn&1073741824&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function q_(n,i){switch(Cu(i),i.tag){case 1:return bn(i.type)&&Ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Ft(Pn),Ft(gn),Bu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return zu(i),null;case 13:if(Ft(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(kt),null;case 4:return xs(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return vc(),null;case 24:return null;default:return null}}var Va=!1,xn=!1,$_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ss(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function oc(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var pp=!1;function K_(n,i){if(vu=la,n=Yd(),cu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,ne=0,xe=0,Se=n,ve=null;t:for(;;){for(var Fe;Se!==o||d!==0&&Se.nodeType!==3||(D=M+d),Se!==m||u!==0&&Se.nodeType!==3||(k=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ve=Se,Se=Fe;for(;;){if(Se===n)break t;if(ve===o&&++ne===d&&(D=M),ve===m&&++xe===u&&(k=M),(Fe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Fe}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},la=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var qe=Ve.memoizedProps,Yt=Ve.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ti(i.type,qe),Yt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Wt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return Ve=pp,pp=!1,Ve}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&oc(i,o,m)}d=d.next}while(d!==u)}}function Ga(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function ac(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function mp(n){var i=n.alternate;i!==null&&(n.alternate=null,mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[So],delete i[Eu],delete i[D_],delete i[N_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gp(n){return n.tag===5||n.tag===3||n.tag===4}function _p(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(u!==4&&(n=n.child,n!==null))for(lc(n,i,o),n=n.sibling;n!==null;)lc(n,i,o),n=n.sibling}function uc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,o),n=n.sibling;n!==null;)uc(n,i,o),n=n.sibling}var fn=null,ni=!1;function lr(n,i,o){for(o=o.child;o!==null;)vp(n,i,o),o=o.sibling}function vp(n,i,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:xn||Ss(o,i);case 6:var u=fn,d=ni;fn=null,lr(n,i,o),fn=u,ni=d,fn!==null&&(ni?(n=fn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(ni?(n=fn,o=o.stateNode,n.nodeType===8?Mu(n.parentNode,o):n.nodeType===1&&Mu(n,o),uo(n)):Mu(fn,o.stateNode));break;case 4:u=fn,d=ni,fn=o.stateNode.containerInfo,ni=!0,lr(n,i,o),fn=u,ni=d;break;case 0:case 11:case 14:case 15:if(!xn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&oc(o,i,M),d=d.next}while(d!==u)}lr(n,i,o);break;case 1:if(!xn&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Wt(o,i,D)}lr(n,i,o);break;case 21:lr(n,i,o);break;case 22:o.mode&1?(xn=(u=xn)||o.memoizedState!==null,lr(n,i,o),xn=u):lr(n,i,o);break;default:lr(n,i,o)}}function xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new $_),i.forEach(function(u){var d=sv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ii(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:fn=D.stateNode,ni=!1;break e;case 3:fn=D.stateNode.containerInfo,ni=!0;break e;case 4:fn=D.stateNode.containerInfo,ni=!0;break e}D=D.return}if(fn===null)throw Error(t(160));vp(m,M,d),fn=null,ni=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ne){Wt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)yp(i,n),i=i.sibling}function yp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ii(i,n),_i(n),u&4){try{Do(3,n,n.return),Ga(3,n)}catch(qe){Wt(n,n.return,qe)}try{Do(5,n,n.return)}catch(qe){Wt(n,n.return,qe)}}break;case 1:ii(i,n),_i(n),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(ii(i,n),_i(n),u&512&&o!==null&&Ss(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(qe){Wt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,D=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&pt(d,m),ue(D,M);var ne=ue(D,m);for(M=0;M<k.length;M+=2){var xe=k[M],Se=k[M+1];xe==="style"?rt(d,Se):xe==="dangerouslySetInnerHTML"?Oe(d,Se):xe==="children"?ft(d,Se):L(d,xe,Se,ne)}switch(D){case"input":ct(d,m);break;case"textarea":pe(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?b(d,!!m.multiple,Fe,!1):ve!==!!m.multiple&&(m.defaultValue!=null?b(d,!!m.multiple,m.defaultValue,!0):b(d,!!m.multiple,m.multiple?[]:"",!1))}d[So]=m}catch(qe){Wt(n,n.return,qe)}}break;case 6:if(ii(i,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Wt(n,n.return,qe)}}break;case 3:if(ii(i,n),_i(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(qe){Wt(n,n.return,qe)}break;case 4:ii(i,n),_i(n);break;case 13:ii(i,n),_i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(dc=K())),u&4&&xp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(xn=(ne=xn)||xe,ii(i,n),xn=ne):ii(i,n),_i(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!xe&&n.mode&1)for(Be=n,xe=n.child;xe!==null;){for(Se=Be=xe;Be!==null;){switch(ve=Be,Fe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Do(4,ve,ve.return);break;case 1:Ss(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(qe){Wt(u,o,qe)}}break;case 5:Ss(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Ep(Se);continue}}Fe!==null?(Fe.return=ve,Be=Fe):Ep(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ne?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=Se.stateNode,k=Se.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Qe("display",M))}catch(qe){Wt(n,n.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(qe){Wt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,n),_i(n),u&4&&xp(n);break;case 21:break;default:ii(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(gp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var m=_p(n);uc(n,m,d);break;case 3:case 4:var M=u.stateNode.containerInfo,D=_p(n);lc(n,D,M);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Z_(n,i,o){Be=n,Sp(n)}function Sp(n,i,o){for(var u=(n.mode&1)!==0;Be!==null;){var d=Be,m=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Va;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||xn;D=Va;var ne=xn;if(Va=M,(xn=k)&&!ne)for(Be=d;Be!==null;)M=Be,k=M.child,M.tag===22&&M.memoizedState!==null?Tp(d):k!==null?(k.return=M,Be=k):Tp(d);for(;m!==null;)Be=m,Sp(m),m=m.sibling;Be=d,Va=D,xn=ne}Mp(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,Be=m):Mp(n)}}function Mp(n){for(;Be!==null;){var i=Be;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:xn||Ga(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Eh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Eh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&uo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&ac(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Ep(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Tp(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(k){Wt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Wt(i,d,k)}}var m=i.return;try{ac(i)}catch(k){Wt(i,m,k)}break;case 5:var M=i.return;try{ac(i)}catch(k){Wt(i,M,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var J_=Math.ceil,Wa=P.ReactCurrentDispatcher,cc=P.ReactCurrentOwner,qn=P.ReactCurrentBatchConfig,Et=0,on=null,Kt=null,dn=0,Bn=0,Ms=ir(0),Qt=0,No=null,Fr=0,Xa=0,fc=0,Uo=null,Dn=null,dc=0,Es=1/0,Di=null,Ya=!1,hc=null,ur=null,ja=!1,cr=null,qa=0,Io=0,pc=null,$a=-1,Ka=0;function Tn(){return Et&6?K():$a!==-1?$a:$a=K()}function fr(n){return n.mode&1?Et&2&&dn!==0?dn&-dn:I_.transition!==null?(Ka===0&&(Ka=Dt()),Ka):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Ad(n.type)),n):1}function ri(n,i,o,u){if(50<Io)throw Io=0,pc=null,Error(t(185));nn(n,o,u),(!(Et&2)||n!==on)&&(n===on&&(!(Et&2)&&(Xa|=o),Qt===4&&dr(n,dn)),Nn(n,u),o===1&&Et===0&&!(i.mode&1)&&(Es=K()+500,Ta&&sr()))}function Nn(n,i){var o=n.callbackNode;Mn(n,i);var u=pn(n,n===on?dn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?U_(Ap.bind(null,n)):fh(Ap.bind(null,n)),b_(function(){!(Et&6)&&sr()}),o=null;else{switch(hi(u)){case 1:o=we;break;case 4:o=Le;break;case 16:o=Ie;break;case 536870912:o=ot;break;default:o=Ie}o=Up(o,wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function wp(n,i){if($a=-1,Ka=0,Et&6)throw Error(t(327));var o=n.callbackNode;if(Ts()&&n.callbackNode!==o)return null;var u=pn(n,n===on?dn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Za(n,u);else{i=u;var d=Et;Et|=2;var m=Rp();(on!==n||dn!==i)&&(Di=null,Es=K()+500,zr(n,i));do try{tv();break}catch(D){Cp(n,D)}while(!0);Du(),Wa.current=m,Et=d,Kt!==null?i=0:(on=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ti(n),d!==0&&(u=d,i=mc(n,d))),i===1)throw o=No,zr(n,0),dr(n,u),Nn(n,K()),o;if(i===6)dr(n,u);else{if(d=n.current.alternate,!(u&30)&&!Q_(d)&&(i=Za(n,u),i===2&&(m=Ti(n),m!==0&&(u=m,i=mc(n,m))),i===1))throw o=No,zr(n,0),dr(n,u),Nn(n,K()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Dn,Di);break;case 3:if(dr(n,u),(u&130023424)===u&&(i=dc+500-K(),10<i)){if(pn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Su(kr.bind(null,n,Dn,Di),i);break}kr(n,Dn,Di);break;case 4:if(dr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-ut(u);m=1<<M,M=i[M],M>d&&(d=M),u&=~m}if(u=d,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*J_(u/1960))-u,10<u){n.timeoutHandle=Su(kr.bind(null,n,Dn,Di),u);break}kr(n,Dn,Di);break;case 5:kr(n,Dn,Di);break;default:throw Error(t(329))}}}return Nn(n,K()),n.callbackNode===o?wp.bind(null,n):null}function mc(n,i){var o=Uo;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=Za(n,i),n!==2&&(i=Dn,Dn=o,i!==null&&gc(i)),n}function gc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function Q_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Qn(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~fc,i&=~Xa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ut(i),u=1<<o;n[o]=-1,i&=~u}}function Ap(n){if(Et&6)throw Error(t(327));Ts();var i=pn(n,0);if(!(i&1))return Nn(n,K()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var u=Ti(n);u!==0&&(i=u,o=mc(n,u))}if(o===1)throw o=No,zr(n,0),dr(n,i),Nn(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Dn,Di),Nn(n,K()),null}function _c(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Es=K()+500,Ta&&sr())}}function Or(n){cr!==null&&cr.tag===0&&!(Et&6)&&Ts();var i=Et;Et|=1;var o=qn.transition,u=Mt;try{if(qn.transition=null,Mt=1,n)return n()}finally{Mt=u,qn.transition=o,Et=i,!(Et&6)&&sr()}}function vc(){Bn=Ms.current,Ft(Ms)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,P_(o)),Kt!==null)for(o=Kt.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ma();break;case 3:xs(),Ft(Pn),Ft(gn),Bu();break;case 5:zu(u);break;case 4:xs();break;case 13:Ft(kt);break;case 19:Ft(kt);break;case 10:Nu(u.type._context);break;case 22:case 23:vc()}o=o.return}if(on=n,Kt=n=hr(n.current,null),dn=Bn=i,Qt=0,No=null,fc=Xa=Fr=0,Dn=Uo=null,Nr!==null){for(i=0;i<Nr.length;i++)if(o=Nr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,u.next=M}o.pending=u}Nr=null}return n}function Cp(n,i){do{var o=Kt;try{if(Du(),Ua.current=za,Ia){for(var u=Bt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ia=!1}if(Ir=0,sn=Jt=Bt=null,Co=!1,Ro=0,cc.current=null,o===null||o.return===null){Qt=1,No=i,Kt=null;break}e:{var m=n,M=o.return,D=o,k=i;if(i=dn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,xe=D,Se=xe.tag;if(!(xe.mode&1)&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Jh(M);if(Fe!==null){Fe.flags&=-257,Qh(Fe,M,D,m,i),Fe.mode&1&&Zh(m,ne,i),i=Fe,k=ne;var Ve=i.updateQueue;if(Ve===null){var qe=new Set;qe.add(k),i.updateQueue=qe}else Ve.add(k);break e}else{if(!(i&1)){Zh(m,ne,i),xc();break e}k=Error(t(426))}}else if(zt&&D.mode&1){var Yt=Jh(M);if(Yt!==null){!(Yt.flags&65536)&&(Yt.flags|=256),Qh(Yt,M,D,m,i),bu(ys(k,D));break e}}m=k=ys(k,D),Qt!==4&&(Qt=2),Uo===null?Uo=[m]:Uo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=$h(m,k,i);Mh(m,$);break e;case 1:D=k;var X=m.type,J=m.stateNode;if(!(m.flags&128)&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ur===null||!ur.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=Kh(m,D,i);Mh(m,Ae);break e}}m=m.return}while(m!==null)}bp(o)}catch($e){i=$e,Kt===o&&o!==null&&(Kt=o=o.return);continue}break}while(!0)}function Rp(){var n=Wa.current;return Wa.current=za,n===null?za:n}function xc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||!(Fr&268435455)&&!(Xa&268435455)||dr(on,dn)}function Za(n,i){var o=Et;Et|=2;var u=Rp();(on!==n||dn!==i)&&(Di=null,zr(n,i));do try{ev();break}catch(d){Cp(n,d)}while(!0);if(Du(),Et=o,Wa.current=u,Kt!==null)throw Error(t(261));return on=null,dn=0,Qt}function ev(){for(;Kt!==null;)Pp(Kt)}function tv(){for(;Kt!==null&&!j();)Pp(Kt)}function Pp(n){var i=Np(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?bp(n):Kt=i,cc.current=null}function bp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=q_(o,i),o!==null){o.flags&=32767,Kt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Kt=null;return}}else if(o=j_(o,i,Bn),o!==null){Kt=o;return}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);Qt===0&&(Qt=5)}function kr(n,i,o){var u=Mt,d=qn.transition;try{qn.transition=null,Mt=1,nv(n,i,o,u)}finally{qn.transition=d,Mt=u}return null}function nv(n,i,o,u){do Ts();while(cr!==null);if(Et&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(cn(n,m),n===on&&(Kt=on=null,dn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ja||(ja=!0,Up(Ie,function(){return Ts(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=qn.transition,qn.transition=null;var M=Mt;Mt=1;var D=Et;Et|=4,cc.current=null,K_(n,o),yp(o,n),M_(xu),la=!!vu,xu=vu=null,n.current=o,Z_(o),te(),Et=D,Mt=M,qn.transition=m}else n.current=o;if(ja&&(ja=!1,cr=n,qa=d),m=n.pendingLanes,m===0&&(ur=null),yt(o.stateNode),Nn(n,K()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ya)throw Ya=!1,n=hc,hc=null,n;return qa&1&&n.tag!==0&&Ts(),m=n.pendingLanes,m&1?n===pc?Io++:(Io=0,pc=n):Io=0,sr(),null}function Ts(){if(cr!==null){var n=hi(qa),i=qn.transition,o=Mt;try{if(qn.transition=null,Mt=16>n?16:n,cr===null)var u=!1;else{if(n=cr,cr=null,qa=0,Et&6)throw Error(t(331));var d=Et;for(Et|=4,Be=n.current;Be!==null;){var m=Be,M=m.child;if(Be.flags&16){var D=m.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ne=D[k];for(Be=ne;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:Do(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Be=Se;else for(;Be!==null;){xe=Be;var ve=xe.sibling,Fe=xe.return;if(mp(xe),xe===ne){Be=null;break}if(ve!==null){ve.return=Fe,Be=ve;break}Be=Fe}}}var Ve=m.alternate;if(Ve!==null){var qe=Ve.child;if(qe!==null){Ve.child=null;do{var Yt=qe.sibling;qe.sibling=null,qe=Yt}while(qe!==null)}}Be=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,Be=M;else e:for(;Be!==null;){if(m=Be,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Be=$;break e}Be=m.return}}var X=n.current;for(Be=X;Be!==null;){M=Be;var J=M.child;if(M.subtreeFlags&2064&&J!==null)J.return=M,Be=J;else e:for(M=X;Be!==null;){if(D=Be,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Ga(9,D)}}catch($e){Wt(D,D.return,$e)}if(D===M){Be=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,Be=Ae;break e}Be=D.return}}if(Et=d,sr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{Mt=o,qn.transition=i}}return!1}function Lp(n,i,o){i=ys(o,i),i=$h(n,i,1),n=ar(n,i,1),i=Tn(),n!==null&&(nn(n,1,i),Nn(n,i))}function Wt(n,i,o){if(n.tag===3)Lp(n,n,o);else for(;i!==null;){if(i.tag===3){Lp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){n=ys(o,n),n=Kh(i,n,1),i=ar(i,n,1),n=Tn(),i!==null&&(nn(i,1,n),Nn(i,n));break}}i=i.return}}function iv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(dn&o)===o&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>K()-dc?zr(n,0):fc|=o),Nn(n,i)}function Dp(n,i){i===0&&(n.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=Tn();n=Pi(n,i),n!==null&&(nn(n,i,o),Nn(n,o))}function rv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Dp(n,o)}function sv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Dp(n,o)}var Np;Np=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Ln=!1,Y_(n,i,o);Ln=!!(n.flags&131072)}else Ln=!1,zt&&i.flags&1048576&&dh(i,Aa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ha(n,i),n=i.pendingProps;var d=ds(i,gn.current);vs(i,o),d=Gu(null,i,u,n,d,o);var m=Wu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Ea(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fu(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,Ku(i,u,n,o),i=ec(null,i,u,!0,m,o)):(i.tag=0,zt&&m&&Au(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ha(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=av(u),n=ti(u,n),d){case 0:i=Qu(null,i,u,n,o);break e;case 1:i=sp(null,i,u,n,o);break e;case 11:i=ep(null,i,u,n,o);break e;case 14:i=tp(null,i,u,ti(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Qu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),sp(n,i,u,d,o);case 3:e:{if(op(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Sh(n,i),Da(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ys(Error(t(423)),i),i=ap(n,i,u,o,d);break e}else if(u!==d){d=ys(Error(t(424)),i),i=ap(n,i,u,o,d);break e}else for(kn=nr(i.stateNode.containerInfo.firstChild),zn=i,zt=!0,ei=null,o=xh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===d){i=Li(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return Th(i),n===null&&Pu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,yu(u,d)?M=null:m!==null&&yu(u,m)&&(i.flags|=32),rp(n,i),En(n,i,M,o),i.child;case 6:return n===null&&Pu(i),null;case 13:return lp(n,i,o);case 4:return Ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),ep(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,Nt(Pa,u._currentValue),u._currentValue=M,m!==null)if(Qn(m.value,M)){if(m.children===d.children&&!Pn.current){i=Li(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){M=m.child;for(var k=D.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=bi(-1,o&-o),k.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ne.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Uu(m.return,o,i),D.lanes|=o;break}k=k.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Uu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,vs(i,o),d=Yn(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ti(u,i.pendingProps),d=ti(u.type,d),tp(n,i,u,d,o);case 15:return np(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ti(u,d),Ha(n,i),i.tag=1,bn(u)?(n=!0,Ea(i)):n=!1,vs(i,o),jh(i,u,d),Ku(i,u,d,o),ec(null,i,u,!0,n,o);case 19:return cp(n,i,o);case 22:return ip(n,i,o)}throw Error(t(156,i.tag))};function Up(n,i){return sa(n,i)}function ov(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,o,u){return new ov(n,i,o,u)}function yc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function av(n){if(typeof n=="function")return yc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ge)return 14}return 2}function hr(n,i){var o=n.alternate;return o===null?(o=$n(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ja(n,i,o,u,d,m){var M=2;if(u=n,typeof n=="function")yc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return Br(o.children,d,m,i);case V:M=8,d|=8;break;case R:return n=$n(12,o,i,d|2),n.elementType=R,n.lanes=m,n;case ee:return n=$n(13,o,i,d),n.elementType=ee,n.lanes=m,n;case de:return n=$n(19,o,i,d),n.elementType=de,n.lanes=m,n;case ce:return Qa(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case E:M=10;break e;case G:M=9;break e;case le:M=11;break e;case ge:M=14;break e;case oe:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(M,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Br(n,i,o,u){return n=$n(7,n,u,i),n.lanes=o,n}function Qa(n,i,o,u){return n=$n(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Sc(n,i,o){return n=$n(6,n,null,i),n.lanes=o,n}function Mc(n,i,o){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function lv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ec(n,i,o,u,d,m,M,D,k){return n=new lv(n,i,o,D,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(m),n}function uv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Ip(n){if(!n)return rr;n=n._reactInternals;e:{if(di(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(bn(o))return uh(n,o,i)}return i}function Fp(n,i,o,u,d,m,M,D,k){return n=Ec(o,u,!0,n,d,m,M,D,k),n.context=Ip(null),o=n.current,u=Tn(),d=fr(o),m=bi(u,d),m.callback=i??null,ar(o,m,d),n.current.lanes=d,nn(n,d,u),Nn(n,u),n}function el(n,i,o,u){var d=i.current,m=Tn(),M=fr(d);return o=Ip(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ar(d,i,M),n!==null&&(ri(n,d,M,m),La(n,d,M)),M}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Op(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Tc(n,i){Op(n,i),(n=n.alternate)&&Op(n,i)}function cv(){return null}var zp=typeof reportError=="function"?reportError:function(n){console.error(n)};function wc(n){this._internalRoot=n}nl.prototype.render=wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){el(null,n,null,null)}),i[wi]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,n),o===0&&Td(n)}};function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kp(){}function fv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ne=tl(M);m.call(ne)}}var M=Fp(i,u,n,0,null,!1,!1,"",kp);return n._reactRootContainer=M,n[wi]=M.current,xo(n.nodeType===8?n.parentNode:n),Or(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var ne=tl(k);D.call(ne)}}var k=Ec(n,0,!1,null,null,!1,!1,"",kp);return n._reactRootContainer=k,n[wi]=k.current,xo(n.nodeType===8?n.parentNode:n),Or(function(){el(i,k,o,u)}),k}function rl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var D=d;d=function(){var k=tl(M);D.call(k)}}el(i,M,n,d)}else M=fv(o,i,n,d,u);return tl(M)}xd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=vt(i.pendingLanes);o!==0&&(rn(i,o|1),Nn(i,K()),!(Et&6)&&(Es=K()+500,sr()))}break;case 13:Or(function(){var u=Pi(n,1);if(u!==null){var d=Tn();ri(u,n,1,d)}}),Tc(n,1)}},Zl=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var o=Tn();ri(i,n,134217728,o)}Tc(n,134217728)}},yd=function(n){if(n.tag===13){var i=fr(n),o=Pi(n,i);if(o!==null){var u=Tn();ri(o,n,i,u)}Tc(n,i)}},Sd=function(){return Mt},Md=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Te=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Sa(u);if(!d)throw Error(t(90));Rt(u),ct(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},xt=_c,Ut=Or;var dv={usingClientEntryPoint:!1,Events:[Mo,cs,Sa,be,et,_c]},Fo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{st=sl.inject(hv),Xe=sl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(i))throw Error(t(200));return uv(n,i,null,o)},Un.createRoot=function(n,i){if(!Ac(n))throw Error(t(299));var o=!1,u="",d=zp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ec(n,1,!1,null,null,o,!1,u,d),n[wi]=i.current,xo(n.nodeType===8?n.parentNode:n),new wc(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Or(n)},Un.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Ac(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",M=zp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Fp(i,null,n,1,o??null,d,!1,m,M),n[wi]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},Un.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},Un.unstable_batchedUpdates=_c,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var jp;function Sv(){if(jp)return Pc.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=yv(),Pc.exports}var qp;function Mv(){if(qp)return ol;qp=1;var s=Sv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var Ev=Mv();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="173",ws={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tv=1,Qm=1,wv=2,zi=3,wr=0,In=1,Bi=2,Mr=0,js=1,$p=2,Kp=3,Zp=4,Av=5,qr=100,Cv=101,Rv=102,Pv=103,bv=104,Lv=200,Dv=201,Nv=202,Uv=203,hf=204,pf=205,Iv=206,Fv=207,Ov=208,zv=209,kv=210,Bv=211,Hv=212,Vv=213,Gv=214,mf=0,gf=1,_f=2,Ks=3,vf=4,xf=5,yf=6,Sf=7,eg=0,Wv=1,Xv=2,Er=0,Yv=1,jv=2,qv=3,$v=4,Kv=5,Zv=6,Jv=7,tg=300,Zs=301,Js=302,Mf=303,Ef=304,Yl=306,Tf=1e3,Kr=1001,wf=1002,ci=1003,Qv=1004,al=1005,yi=1006,Dc=1007,Zr=1008,Wi=1009,ng=1010,ig=1011,qo=1012,od=1013,Jr=1014,Hi=1015,$o=1016,ad=1017,ld=1018,Qs=1020,rg=35902,sg=1021,og=1022,li=1023,ag=1024,lg=1025,qs=1026,eo=1027,ug=1028,ud=1029,cg=1030,cd=1031,fd=1033,Ul=33776,Il=33777,Fl=33778,Ol=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,bf=36196,Lf=37492,Df=37496,Nf=37808,Uf=37809,If=37810,Ff=37811,Of=37812,zf=37813,kf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,Yf=37821,zl=36492,jf=36494,qf=36495,fg=36283,$f=36284,Kf=36285,Zf=36286,e0=3200,t0=3201,n0=0,i0=1,Sr="",Zn="srgb",to="srgb-linear",Vl="linear",bt="srgb",Cs=7680,Jp=519,r0=512,s0=513,o0=514,dg=515,a0=516,l0=517,u0=518,c0=519,Jf=35044,Qp="300 es",Vi=2e3,Gl=2001;let io=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}};const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Qf=180/Math.PI;function Tr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function f0(s,e){return(s%e+e)%e}function Uc(s,e,t){return(1-t)*s+t*e}function xi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,a,l,c,f,h,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],T=r[8],C=a[0],y=a[3],x=a[6],U=a[1],L=a[4],P=a[7],W=a[2],F=a[5],N=a[8];return l[0]=c*C+f*U+h*W,l[3]=c*y+f*L+h*F,l[6]=c*x+f*P+h*N,l[1]=p*C+g*U+_*W,l[4]=p*y+g*L+_*F,l[7]=p*x+g*P+_*N,l[2]=v*C+S*U+T*W,l[5]=v*y+S*L+T*F,l[8]=v*x+S*P+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=g*c-f*p,v=f*h-g*l,S=p*l-c*h,T=t*_+r*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(a*p-g*r)*C,e[2]=(f*r-a*c)*C,e[3]=v*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-f*t)*C,e[6]=S*C,e[7]=(r*h-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new dt;function hg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function d0(){const s=Wl("canvas");return s.style.display="block",s}const em={};function Xs(s){s in em||(em[s]=!0,console.warn(s))}function h0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function p0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g0(){const s={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Vl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[to]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}const At=g0();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class _0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Wl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Gi(t[r]/255)*255):t[r]=Gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0;class pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Fc(a[c].image)):l.push(Fc(a[c]))}else l=Fc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class Rn extends io{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=Kr,a=Kr,l=yi,c=Zr,f=li,h=Wi,p=Rn.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Tr(),this.name="",this.source=new pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=tg;Rn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],v=h[1],S=h[5],T=h[9],C=h[2],y=h[6],x=h[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,P=(S+1)/2,W=(x+1)/2,F=(g+v)/4,N=(_+C)/4,V=(T+y)/4;return L>P&&L>W?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=F/r,l=N/r):P>W?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=F/a,l=V/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=N/l,a=V/l),this.set(r,a,l,t),this}let U=Math.sqrt((y-T)*(y-T)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(_-C)/U,this.z=(v-g)/U,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y0 extends io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends y0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class mg extends Rn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends Rn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];const v=l[c+0],S=l[c+1],T=l[c+2],C=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=T,e[t+3]=C;return}if(_!==C||h!==v||p!==S||g!==T){let y=1-f;const x=h*v+p*S+g*T+_*C,U=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const W=Math.sqrt(L),F=Math.atan2(W,x*U);y=Math.sin(y*F)/W,f=Math.sin(f*F)/W}const P=f*U;if(h=h*y+v*P,p=p*y+S*P,g=g*y+T*P,_=_*y+C*P,y===1-f){const W=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=W,p*=W,g*=W,_*=W}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],g=r[a+3],_=l[c],v=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+g*_+h*S-p*v,e[t+1]=h*T+g*v+p*_-f*S,e[t+2]=p*T+g*S+f*v-h*_,e[t+3]=g*T-f*_-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(a/2),_=f(l/2),v=h(r/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=v*g*_+p*S*T,this._y=p*S*_-v*g*T,this._z=p*g*T+v*S*_,this._w=p*g*_-v*S*T;break;case"YXZ":this._x=v*g*_+p*S*T,this._y=p*S*_-v*g*T,this._z=p*g*T-v*S*_,this._w=p*g*_+v*S*T;break;case"ZXY":this._x=v*g*_-p*S*T,this._y=p*S*_+v*g*T,this._z=p*g*T+v*S*_,this._w=p*g*_-v*S*T;break;case"ZYX":this._x=v*g*_-p*S*T,this._y=p*S*_+v*g*T,this._z=p*g*T-v*S*_,this._w=p*g*_+v*S*T;break;case"YZX":this._x=v*g*_+p*S*T,this._y=p*S*_+v*g*T,this._z=p*g*T-v*S*_,this._w=p*g*_-v*S*T;break;case"XZY":this._x=v*g*_-p*S*T,this._y=p*S*_-v*g*T,this._z=p*g*T+v*S*_,this._w=p*g*_+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],_=t[10],v=r+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-a*f,this._w=c*g-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),_=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=c*_+this._w*v,this._x=r*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(im.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),g=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*p+c*_-f*g,this.y=r+h*g+f*p-l*_,this.z=a+h*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new Y,im=new es;class Ko{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,si):si.fromBufferAttribute(l,c),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),ul.subVectors(this.max,zo),Ps.subVectors(e.a,zo),bs.subVectors(e.b,zo),Ls.subVectors(e.c,zo),mr.subVectors(bs,Ps),gr.subVectors(Ls,bs),Hr.subVectors(Ps,Ls);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!zc(t,Ps,bs,Ls,ul)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Ps,bs,Ls,ul))?!1:(cl.crossVectors(mr,gr),t=[cl.x,cl.y,cl.z],zc(t,Ps,bs,Ls,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,ll=new Ko,Ps=new Y,bs=new Y,Ls=new Y,mr=new Y,gr=new Y,Hr=new Y,zo=new Y,ul=new Y,cl=new Y,Vr=new Y;function zc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const M0=new Ko,ko=new Y,kc=new Y;class dd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):M0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(kc)),this.expandByPoint(ko.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new Y,Bc=new Y,fl=new Y,_r=new Y,Hc=new Y,dl=new Y,Vc=new Y;class hd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Bc.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Bc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(fl),f=_r.dot(this.direction),h=-_r.dot(fl),p=_r.lengthSq(),g=Math.abs(1-c*c);let _,v,S,T;if(g>0)if(_=c*h-f,v=c*f-h,T=l*g,_>=0)if(v>=-T)if(v<=T){const C=1/g;_*=C,v*=C,S=_*(_+c*v+2*f)+v*(c*_+v+2*h)+p}else v=l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;else v=-l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;else v<=-T?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p):v<=T?(_=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+v*(v+2*h)+p);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Bc).addScaledVector(fl,v),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,a,l){Hc.subVectors(t,e),dl.subVectors(r,e),Vc.crossVectors(Hc,dl);let c=this.direction.dot(Vc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;_r.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(_r,dl));if(h<0)return null;const p=f*this.direction.dot(Hc.cross(_r));if(p<0||h+p>c)return null;const g=-f*_r.dot(Vc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,c,f,h,p,g,_,v,S,T,C,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,g,_,v,S,T,C,y)}set(e,t,r,a,l,c,f,h,p,g,_,v,S,T,C,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=T,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*g,S=c*_,T=f*g,C=f*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=S+T*p,t[5]=v-C*p,t[9]=-f*h,t[2]=C-v*p,t[6]=T+S*p,t[10]=c*h}else if(e.order==="YXZ"){const v=h*g,S=h*_,T=p*g,C=p*_;t[0]=v+C*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-T,t[6]=C+v*f,t[10]=c*h}else if(e.order==="ZXY"){const v=h*g,S=h*_,T=p*g,C=p*_;t[0]=v-C*f,t[4]=-c*_,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*g,t[9]=C-v*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const v=c*g,S=c*_,T=f*g,C=f*_;t[0]=h*g,t[4]=T*p-S,t[8]=v*p+C,t[1]=h*_,t[5]=C*p+v,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*p,T=f*h,C=f*p;t[0]=h*g,t[4]=C-v*_,t[8]=T*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*_+T,t[10]=v-C*_}else if(e.order==="XZY"){const v=c*h,S=c*p,T=f*h,C=f*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=v*_+C,t[5]=c*g,t[9]=S*_-T,t[2]=T*_-S,t[6]=f*g,t[10]=C*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,T0)}lookAt(e,t,r){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(r,Hn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(r,Hn)),vr.normalize(),hl.crossVectors(Hn,vr),a[0]=vr.x,a[4]=hl.x,a[8]=Hn.x,a[1]=vr.y,a[5]=hl.y,a[9]=Hn.y,a[2]=vr.z,a[6]=hl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],T=r[2],C=r[6],y=r[10],x=r[14],U=r[3],L=r[7],P=r[11],W=r[15],F=a[0],N=a[4],V=a[8],R=a[12],E=a[1],G=a[5],le=a[9],ee=a[13],de=a[2],ge=a[6],oe=a[10],ce=a[14],H=a[3],ae=a[7],se=a[11],I=a[15];return l[0]=c*F+f*E+h*de+p*H,l[4]=c*N+f*G+h*ge+p*ae,l[8]=c*V+f*le+h*oe+p*se,l[12]=c*R+f*ee+h*ce+p*I,l[1]=g*F+_*E+v*de+S*H,l[5]=g*N+_*G+v*ge+S*ae,l[9]=g*V+_*le+v*oe+S*se,l[13]=g*R+_*ee+v*ce+S*I,l[2]=T*F+C*E+y*de+x*H,l[6]=T*N+C*G+y*ge+x*ae,l[10]=T*V+C*le+y*oe+x*se,l[14]=T*R+C*ee+y*ce+x*I,l[3]=U*F+L*E+P*de+W*H,l[7]=U*N+L*G+P*ge+W*ae,l[11]=U*V+L*le+P*oe+W*se,l[15]=U*R+L*ee+P*ce+W*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],T=e[3],C=e[7],y=e[11],x=e[15];return T*(+l*h*_-a*p*_-l*f*v+r*p*v+a*f*S-r*h*S)+C*(+t*h*S-t*p*v+l*c*v-a*c*S+a*p*g-l*h*g)+y*(+t*p*_-t*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+x*(-a*f*g-t*h*_+t*f*v+a*c*_-r*c*v+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],T=e[12],C=e[13],y=e[14],x=e[15],U=_*y*p-C*v*p+C*h*S-f*y*S-_*h*x+f*v*x,L=T*v*p-g*y*p-T*h*S+c*y*S+g*h*x-c*v*x,P=g*C*p-T*_*p+T*f*S-c*C*S-g*f*x+c*_*x,W=T*_*h-g*C*h-T*f*v+c*C*v+g*f*y-c*_*y,F=t*U+r*L+a*P+l*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=U*N,e[1]=(C*v*l-_*y*l-C*a*S+r*y*S+_*a*x-r*v*x)*N,e[2]=(f*y*l-C*h*l+C*a*p-r*y*p-f*a*x+r*h*x)*N,e[3]=(_*h*l-f*v*l-_*a*p+r*v*p+f*a*S-r*h*S)*N,e[4]=L*N,e[5]=(g*y*l-T*v*l+T*a*S-t*y*S-g*a*x+t*v*x)*N,e[6]=(T*h*l-c*y*l-T*a*p+t*y*p+c*a*x-t*h*x)*N,e[7]=(c*v*l-g*h*l+g*a*p-t*v*p-c*a*S+t*h*S)*N,e[8]=P*N,e[9]=(T*_*l-g*C*l-T*r*S+t*C*S+g*r*x-t*_*x)*N,e[10]=(c*C*l-T*f*l+T*r*p-t*C*p-c*r*x+t*f*x)*N,e[11]=(g*f*l-c*_*l-g*r*p+t*_*p+c*r*S-t*f*S)*N,e[12]=W*N,e[13]=(g*C*a-T*_*a+T*r*v-t*C*v-g*r*y+t*_*y)*N,e[14]=(T*f*a-c*C*a-T*r*h+t*C*h+c*r*y-t*f*y)*N,e[15]=(c*_*a-g*f*a+g*r*h-t*_*h-c*r*v+t*f*v)*N,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+r,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,_=f+f,v=l*p,S=l*g,T=l*_,C=c*g,y=c*_,x=f*_,U=h*p,L=h*g,P=h*_,W=r.x,F=r.y,N=r.z;return a[0]=(1-(C+x))*W,a[1]=(S+P)*W,a[2]=(T-L)*W,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(v+x))*F,a[6]=(y+U)*F,a[7]=0,a[8]=(T+L)*N,a[9]=(y-U)*N,a[10]=(1-(v+C))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,g=1/c,_=1/f;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,t.setFromRotationMatrix(oi),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Vi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-a),_=(t+e)/(t-e),v=(r+a)/(r-a);let S,T;if(f===Vi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===Gl)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Vi){const h=this.elements,p=1/(t-e),g=1/(r-a),_=1/(c-l),v=(t+e)*p,S=(r+a)*g;let T,C;if(f===Vi)T=(c+l)*_,C=-2*_;else if(f===Gl)T=l*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=C,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ds=new Y,oi=new Ht,E0=new Y(0,0,0),T0=new Y(1,1,1),vr=new Y,hl=new Y,Hn=new Y,rm=new Ht,sm=new es;class Xi{constructor(e=0,t=0,r=0,a=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],_=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w0=0;const om=new Y,Ns=new es,Ii=new Ht,pl=new Y,Bo=new Y,A0=new Y,C0=new es,am=new Y(1,0,0),lm=new Y(0,1,0),um=new Y(0,0,1),cm={type:"added"},R0={type:"removed"},Us={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Fn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new Y,t=new Xi,r=new es,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new dt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pl.copy(e):pl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Bo,pl,this.up):Ii.lookAt(pl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Fn.DEFAULT_UP=new Y(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Fi=new Y,Wc=new Y,Oi=new Y,Is=new Y,Fs=new Y,fm=new Y,Xc=new Y,Yc=new Y,jc=new Y,qc=new jt,$c=new jt,Kc=new jt;class Jn{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ai.subVectors(e,t),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ai.subVectors(a,t),Fi.subVectors(r,t),Wc.subVectors(e,t);const c=ai.dot(ai),f=ai.dot(Fi),h=ai.dot(Wc),p=Fi.dot(Fi),g=Fi.dot(Wc),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*h-f*g)*v,T=(c*g-f*h)*v;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return qc.setScalar(0),$c.setScalar(0),Kc.setScalar(0),qc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,r),Kc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(qc,l.x),c.addScaledVector($c,l.y),c.addScaledVector(Kc,l.z),c}static isFrontFacing(e,t,r,a){return ai.subVectors(r,t),Fi.subVectors(e,t),ai.cross(Fi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Jn.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Is.subVectors(a,r),Fs.subVectors(l,r),Xc.subVectors(e,r);const h=Is.dot(Xc),p=Fs.dot(Xc);if(h<=0&&p<=0)return t.copy(r);Yc.subVectors(e,a);const g=Is.dot(Yc),_=Fs.dot(Yc);if(g>=0&&_<=g)return t.copy(a);const v=h*_-g*p;if(v<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Is,c);jc.subVectors(e,l);const S=Is.dot(jc),T=Fs.dot(jc);if(T>=0&&S<=T)return t.copy(l);const C=S*p-h*T;if(C<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(Fs,f);const y=g*T-S*_;if(y<=0&&_-g>=0&&S-T>=0)return fm.subVectors(l,a),f=(_-g)/(_-g+(S-T)),t.copy(a).addScaledVector(fm,f);const x=1/(y+C+v);return c=C*x,f=v*x,t.copy(r).addScaledVector(Is,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=f0(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Zc(c,l,e+1/3),this.g=Zc(c,l,e),this.b=Zc(c,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=Zn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const r=gg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return At.fromWorkingColorSpace(Sn.copy(this),e),Math.round(gt(Sn.r*255,0,255))*65536+Math.round(gt(Sn.g*255,0,255))*256+Math.round(gt(Sn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,a=Sn.g,l=Sn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Zn){At.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,a=Sn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(ml);const r=Uc(xr.h,ml.h,t),a=Uc(xr.s,ml.s,t),l=Uc(xr.l,ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ct;Ct.NAMES=gg;let P0=0;class Zo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jl extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Y,gl=new Ge;let b0=0;class fi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Jf,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jf&&(e.usage=this.usage),e}}class _g extends fi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class vg extends fi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends fi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let L0=0;const Kn=new Ht,Jc=new Fn,Os=new Y,Vn=new Ko,Ho=new Ko,ln=new Y;class Si extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?vg:_g)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,r){return Kn.makeTranslation(e,t,r),this.applyMatrix4(Kn),this}scale(e,t,r){return Kn.makeScale(e,t,r),this.applyMatrix4(Kn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Ho.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Ho.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Ho.min),Vn.expandByPoint(Ho.max))}Vn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)ln.fromBufferAttribute(f,p),h&&(Os.fromBufferAttribute(e,p),ln.add(Os)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new Y,h[V]=new Y;const p=new Y,g=new Y,_=new Y,v=new Ge,S=new Ge,T=new Ge,C=new Y,y=new Y;function x(V,R,E){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,R),_.fromBufferAttribute(r,E),v.fromBufferAttribute(l,V),S.fromBufferAttribute(l,R),T.fromBufferAttribute(l,E),g.sub(p),_.sub(p),S.sub(v),T.sub(v);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(G),f[V].add(C),f[R].add(C),f[E].add(C),h[V].add(y),h[R].add(y),h[E].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let V=0,R=U.length;V<R;++V){const E=U[V],G=E.start,le=E.count;for(let ee=G,de=G+le;ee<de;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new Y,P=new Y,W=new Y,F=new Y;function N(V){W.fromBufferAttribute(a,V),F.copy(W);const R=f[V];L.copy(R),L.sub(W.multiplyScalar(W.dot(R))).normalize(),P.crossVectors(F,R);const G=P.dot(h[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,R=U.length;V<R;++V){const E=U[V],G=E.start,le=E.count;for(let ee=G,de=G+le;ee<de;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Y,l=new Y,c=new Y,f=new Y,h=new Y,p=new Y,g=new Y,_=new Y;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(h.length*g);let S=0,T=0;for(let C=0,y=h.length;C<y;C++){f.isInterleavedBufferAttribute?S=h[C]*f.data.stride+f.offset:S=h[C]*g;for(let x=0;x<g;x++)v[T++]=p[S++]}return new fi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new Ht,Gr=new hd,_l=new dd,hm=new Y,vl=new Y,xl=new Y,yl=new Y,Qc=new Y,Sl=new Y,pm=new Y,Ml=new Y;class ui extends Fn{constructor(e=new Si,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],_=l[h];g!==0&&(Qc.fromBufferAttribute(_,e),c?Sl.addScaledVector(Qc,g):Sl.addScaledVector(Qc.sub(t),g))}t.add(Sl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(_l.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(_l,hm)===null||Gr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(dm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,C=v.length;T<C;T++){const y=v[T],x=c[y.materialIndex],U=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,W=L;P<W;P+=3){const F=f.getX(P),N=f.getX(P+1),V=f.getX(P+2);a=El(this,x,e,r,p,g,_,F,N,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=T,x=C;y<x;y+=3){const U=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);a=El(this,c,e,r,p,g,_,U,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,C=v.length;T<C;T++){const y=v[T],x=c[y.materialIndex],U=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,W=L;P<W;P+=3){const F=P,N=P+1,V=P+2;a=El(this,x,e,r,p,g,_,F,N,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=T,x=C;y<x;y+=3){const U=y,L=y+1,P=y+2;a=El(this,c,e,r,p,g,_,U,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function D0(s,e,t,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===wr,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ml);return p<t.near||p>t.far?null:{distance:p,point:Ml.clone(),object:s}}function El(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,vl),s.getVertexPosition(h,xl),s.getVertexPosition(p,yl);const g=D0(s,e,t,r,vl,xl,yl,pm);if(g){const _=new Y;Jn.getBarycoord(pm,vl,xl,yl,_),a&&(g.uv=Jn.getInterpolatedAttribute(a,f,h,p,_,new Ge)),l&&(g.uv1=Jn.getInterpolatedAttribute(l,f,h,p,_,new Ge)),c&&(g.normal=Jn.getInterpolatedAttribute(c,f,h,p,_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new Y,materialIndex:0};Jn.getNormal(vl,xl,yl,v.normal),g.face=v,g.barycoord=_}return g}class Jo extends Si{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],_=[];let v=0,S=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(_,2));function T(C,y,x,U,L,P,W,F,N,V,R){const E=P/N,G=W/V,le=P/2,ee=W/2,de=F/2,ge=N+1,oe=V+1;let ce=0,H=0;const ae=new Y;for(let se=0;se<oe;se++){const I=se*G-ee;for(let re=0;re<ge;re++){const Ue=re*E-le;ae[C]=Ue*U,ae[y]=I*L,ae[x]=de,p.push(ae.x,ae.y,ae.z),ae[C]=0,ae[y]=0,ae[x]=F>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(re/N),_.push(1-se/V),ce+=1}}for(let se=0;se<V;se++)for(let I=0;I<N;I++){const re=v+I+ge*se,Ue=v+I+ge*(se+1),Q=v+(I+1)+ge*(se+1),me=v+(I+1)+ge*se;h.push(re,Ue,me),h.push(Ue,Q,me),H+=6}f.addGroup(S,H,R),S+=H,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const r=no(s[t]);for(const a in r)e[a]=r[a]}return e}function N0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const U0={clone:no,merge:An};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=N0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class yg extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Y,mm=new Ge,gm=new Ge;class Cn extends yg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,mm,gm),t.subVectors(gm,mm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,ks=1;class O0 extends Fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Cn(zs,ks,e,t);a.layers=this.layers,this.add(a);const l=new Cn(zs,ks,e,t);l.layers=this.layers,this.add(l);const c=new Cn(zs,ks,e,t);c.layers=this.layers,this.add(c);const f=new Cn(zs,ks,e,t);f.layers=this.layers,this.add(f);const h=new Cn(zs,ks,e,t);h.layers=this.layers,this.add(h);const p=new Cn(zs,ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(_,v,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Sg extends Rn{constructor(e,t,r,a,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Sg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Jo(5,5,5),l=new Ar({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Mr});l.uniforms.tEquirect.value=t;const c=new ui(a,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=yi),new O0(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Tl extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&v>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class B0 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=Tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new Y;class Xl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mg extends Zo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Vo=new Y,Hs=new Y,Vs=new Y,Gs=new Ge,Go=new Ge,Eg=new Ht,wl=new Y,Wo=new Y,Al=new Y,_m=new Ge,tf=new Ge,vm=new Ge;class V0 extends Fn{constructor(e=new Mg){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Si;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new H0(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Xl(r,3,0,!1)),Bs.setAttribute("uv",new Xl(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Eg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const c=this.center;Cl(wl.set(-.5,-.5,0),Vs,c,Hs,a,l),Cl(Wo.set(.5,-.5,0),Vs,c,Hs,a,l),Cl(Al.set(.5,.5,0),Vs,c,Hs,a,l),_m.set(0,0),tf.set(1,0),vm.set(1,1);let f=e.ray.intersectTriangle(wl,Wo,Al,!1,Vo);if(f===null&&(Cl(Wo.set(-.5,.5,0),Vs,c,Hs,a,l),tf.set(0,1),f=e.ray.intersectTriangle(wl,Al,Wo,!1,Vo),f===null))return;const h=e.ray.origin.distanceTo(Vo);h<e.near||h>e.far||t.push({distance:h,point:Vo.clone(),uv:Jn.getInterpolation(Vo,wl,Wo,Al,_m,tf,vm,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(s,e,t,r,a,l){Gs.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Go.x=l*Gs.x-a*Gs.y,Go.y=a*Gs.x+l*Gs.y):Go.copy(Gs),s.copy(e),s.x+=Go.x,s.y+=Go.y,s.applyMatrix4(Eg)}const nf=new Y,G0=new Y,W0=new dt;class ki{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=nf.subVectors(r,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(nf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||W0.getNormalMatrix(e),a=this.coplanarPoint(nf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new dd,Rl=new Y;class Tg{constructor(e=new ki,t=new ki,r=new ki,a=new ki,l=new ki,c=new ki){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],_=a[6],v=a[7],S=a[8],T=a[9],C=a[10],y=a[11],x=a[12],U=a[13],L=a[14],P=a[15];if(r[0].setComponents(h-l,v-p,y-S,P-x).normalize(),r[1].setComponents(h+l,v+p,y+S,P+x).normalize(),r[2].setComponents(h+c,v+g,y+T,P+U).normalize(),r[3].setComponents(h-c,v-g,y-T,P-U).normalize(),r[4].setComponents(h-f,v-_,y-C,P-L).normalize(),t===Vi)r[5].setComponents(h+f,v+_,y+C,P+L).normalize();else if(t===Gl)r[5].setComponents(f,_,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends Rn{constructor(e,t,r,a,l,c,f,h,p){super(e,t,r,a,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wg extends Rn{constructor(e,t,r,a,l,c,f,h,p,g=qs){if(g!==qs&&g!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===qs&&(r=Jr),r===void 0&&g===eo&&(r=Qs),super(null,a,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),p=r[a]-c,p<0)f=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const g=r[a],v=r[a+1]-g,S=(c-g)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Ge:new Y);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,a=[],l=[],c=[],f=new Y,h=new Ht;for(let S=0;S<=e;S++){const T=S/e;a[S]=this.getTangentAt(T,new Y)}l[0]=new Y,c[0]=new Y;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),_=Math.abs(a[0].y),v=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const T=Math.acos(gt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,T))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let T=1;T<=e;T++)l[T].applyMatrix4(h.makeRotationAxis(a[T],S*T)),c[T].crossVectors(a[T],l[T])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ag extends Yi{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ge){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=h-this.aX,S=p-this.aY;h=v*g-S*_+this.aX,p=v*_+S*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Y0 extends Ag{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function md(){let s=0,e=0,t=0,r=0;function a(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){a(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,g,_){let v=(c-l)/p-(f-l)/(p+g)+(f-c)/g,S=(f-c)/g-(h-c)/(g+_)+(h-f)/_;v*=g,S*=g,a(c,f,v,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Pl=new Y,rf=new md,sf=new md,of=new md;class Cg extends Yi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,g;this.closed||f>0?p=a[(f-1)%l]:(Pl.subVectors(a[0],a[1]).add(a[0]),p=Pl);const _=a[f%l],v=a[(f+1)%l];if(this.closed||f+2<l?g=a[(f+2)%l]:(Pl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(_),S),C=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);C<1e-4&&(C=1),T<1e-4&&(T=C),y<1e-4&&(y=C),rf.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,T,C,y),sf.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,T,C,y),of.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,T,C,y)}else this.curveType==="catmullrom"&&(rf.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),sf.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),of.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return r.set(rf.calc(h),sf.calc(h),of.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xm(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function j0(s,e){const t=1-s;return t*t*e}function q0(s,e){return 2*(1-s)*s*e}function $0(s,e){return s*s*e}function Yo(s,e,t,r){return j0(s,e)+q0(s,t)+$0(s,r)}function K0(s,e){const t=1-s;return t*t*t*e}function Z0(s,e){const t=1-s;return 3*t*t*s*e}function J0(s,e){return 3*(1-s)*s*s*e}function Q0(s,e){return s*s*s*e}function jo(s,e,t,r,a){return K0(s,e)+Z0(s,t)+J0(s,r)+Q0(s,a)}class ex extends Yi{constructor(e=new Ge,t=new Ge,r=new Ge,a=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(jo(e,a.x,l.x,c.x,f.x),jo(e,a.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tx extends Yi{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(jo(e,a.x,l.x,c.x,f.x),jo(e,a.y,l.y,c.y,f.y),jo(e,a.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nx extends Yi{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ix extends Yi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rx extends Yi{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,a.x,l.x,c.x),Yo(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rg extends Yi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,a.x,l.x,c.x),Yo(e,a.y,l.y,c.y),Yo(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sx extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],p=a[c],g=a[c>a.length-2?a.length-1:c+1],_=a[c>a.length-3?a.length-1:c+2];return r.set(xm(f,h.x,p.x,g.x,_.x),xm(f,h.y,p.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ge().fromArray(a))}return this}}var ox=Object.freeze({__proto__:null,ArcCurve:Y0,CatmullRomCurve3:Cg,CubicBezierCurve:ex,CubicBezierCurve3:tx,EllipseCurve:Ag,LineCurve:nx,LineCurve3:ix,QuadraticBezierCurve:rx,QuadraticBezierCurve3:Rg,SplineCurve:sx});class ql extends Si{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,g=h+1,_=e/f,v=t/h,S=[],T=[],C=[],y=[];for(let x=0;x<g;x++){const U=x*v-c;for(let L=0;L<p;L++){const P=L*_-l;T.push(P,-U,0),C.push(0,0,1),y.push(L/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let U=0;U<f;U++){const L=U+p*x,P=U+p*(x+1),W=U+1+p*(x+1),F=U+1+p*x;S.push(L,P,F),S.push(P,W,F)}this.setIndex(S),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class gd extends Si{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const g=[],_=new Y,v=new Y,S=[],T=[],C=[],y=[];for(let x=0;x<=r;x++){const U=[],L=x/r;let P=0;x===0&&c===0?P=.5/t:x===r&&h===Math.PI&&(P=-.5/t);for(let W=0;W<=t;W++){const F=W/t;_.x=-e*Math.cos(a+F*l)*Math.sin(c+L*f),_.y=e*Math.cos(c+L*f),_.z=e*Math.sin(a+F*l)*Math.sin(c+L*f),T.push(_.x,_.y,_.z),v.copy(_).normalize(),C.push(v.x,v.y,v.z),y.push(F+P,1-L),U.push(p++)}g.push(U)}for(let x=0;x<r;x++)for(let U=0;U<t;U++){const L=g[x][U+1],P=g[x][U],W=g[x+1][U],F=g[x+1][U+1];(x!==0||c>0)&&S.push(L,P,F),(x!==r-1||h<Math.PI)&&S.push(P,W,F)}this.setIndex(S),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _d extends Si{constructor(e=new Rg(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new Y,h=new Y,p=new Ge;let g=new Y;const _=[],v=[],S=[],T=[];C(),this.setIndex(T),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(S,2));function C(){for(let L=0;L<t;L++)y(L);y(l===!1?t:0),U(),x()}function y(L){g=e.getPointAt(L/t,g);const P=c.normals[L],W=c.binormals[L];for(let F=0;F<=a;F++){const N=F/a*Math.PI*2,V=Math.sin(N),R=-Math.cos(N);h.x=R*P.x+V*W.x,h.y=R*P.y+V*W.y,h.z=R*P.z+V*W.z,h.normalize(),v.push(h.x,h.y,h.z),f.x=g.x+r*h.x,f.y=g.y+r*h.y,f.z=g.z+r*h.z,_.push(f.x,f.y,f.z)}}function x(){for(let L=1;L<=t;L++)for(let P=1;P<=a;P++){const W=(a+1)*(L-1)+(P-1),F=(a+1)*L+(P-1),N=(a+1)*L+P,V=(a+1)*(L-1)+P;T.push(W,F,V),T.push(F,N,V)}}function U(){for(let L=0;L<=t;L++)for(let P=0;P<=a;P++)p.x=L/t,p.y=P/a,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _d(new ox[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ax extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kl extends yg{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ux extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ym=new Ht;class cx{constructor(e,t,r=0,a=1/0){this.ray=new hd(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ym),this}intersectObject(e,t=!0,r=[]){return ed(e,this,r,t),r.sort(Sm),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)ed(e[a],this,r,t);return r.sort(Sm),r}}function Sm(s,e){return s.distance-e.distance}function ed(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,f=l.length;c<f;c++)ed(l[c],e,t,!0)}}class Mm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Em(s,e,t,r){const a=fx(r);switch(t){case sg:return s*e;case ag:return s*e;case lg:return s*e*2;case ug:return s*e/a.components*a.byteLength;case ud:return s*e/a.components*a.byteLength;case cg:return s*e*2/a.components*a.byteLength;case cd:return s*e*2/a.components*a.byteLength;case og:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case fd:return s*e*4/a.components*a.byteLength;case Ul:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(s,8)*Math.max(e,8)/2;case bf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case jf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case fg:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(s){switch(s){case Wi:case ng:return{byteLength:1,components:1};case qo:case ig:case $o:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Jr:case od:case Hi:return{byteLength:4,components:1};case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dx(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const g=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<_.length;S++){const T=_[v],C=_[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,_[v]=C)}_.length=v+1;for(let S=0,T=_.length;S<T;S++){const C=_[S];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,My=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,US=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:hx,alphahash_pars_fragment:px,alphamap_fragment:mx,alphamap_pars_fragment:gx,alphatest_fragment:_x,alphatest_pars_fragment:vx,aomap_fragment:xx,aomap_pars_fragment:yx,batching_pars_vertex:Sx,batching_vertex:Mx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Lx,color_fragment:Dx,color_pars_fragment:Nx,color_pars_vertex:Ux,color_vertex:Ix,common:Fx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:zx,displacementmap_pars_vertex:kx,displacementmap_vertex:Bx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Vx,colorspace_fragment:Gx,colorspace_pars_fragment:Wx,envmap_fragment:Xx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:jx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:sy,envmap_vertex:$x,fog_vertex:Kx,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:Qx,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ry,lights_toon_fragment:oy,lights_toon_pars_fragment:ay,lights_phong_fragment:ly,lights_phong_pars_fragment:uy,lights_physical_fragment:cy,lights_physical_pars_fragment:fy,lights_fragment_begin:dy,lights_fragment_maps:hy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:vy,map_fragment:xy,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ty,morphinstance_vertex:wy,morphcolor_vertex:Ay,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ry,morphtarget_vertex:Py,normal_fragment_begin:by,normal_fragment_maps:Ly,normal_pars_fragment:Dy,normal_pars_vertex:Ny,normal_vertex:Uy,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:zy,iridescence_pars_fragment:ky,opaque_fragment:By,packing:Hy,premultiplied_alpha_fragment:Vy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:jy,shadowmap_pars_fragment:qy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Zy,skinbase_vertex:Jy,skinning_pars_vertex:Qy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:uS,uv_vertex:cS,worldpos_vertex:fS,background_vert:dS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:yS,distanceRGBA_frag:SS,equirect_vert:MS,equirect_frag:ES,linedashed_vert:TS,linedashed_frag:wS,meshbasic_vert:AS,meshbasic_frag:CS,meshlambert_vert:RS,meshlambert_frag:PS,meshmatcap_vert:bS,meshmatcap_frag:LS,meshnormal_vert:DS,meshnormal_frag:NS,meshphong_vert:US,meshphong_frag:IS,meshphysical_vert:FS,meshphysical_frag:OS,meshtoon_vert:zS,meshtoon_frag:kS,points_vert:BS,points_frag:HS,shadow_vert:VS,shadow_frag:GS,sprite_vert:WS,sprite_frag:XS},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},vi={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};vi.physical={uniforms:An([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const bl={r:0,b:0,g:0},Xr=new Xi,YS=new Ht;function jS(s,e,t,r,a,l,c){const f=new Ct(0);let h=l===!0?0:1,p,g,_=null,v=0,S=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function C(L){let P=!1;const W=T(L);W===null?x(f,h):W&&W.isColor&&(x(W,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const W=T(P);W&&(W.isCubeTexture||W.mapping===Yl)?(g===void 0&&(g=new ui(new Jo(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:no(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Xr.copy(P.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YS.makeRotationFromEuler(Xr)),g.material.toneMapped=At.getTransfer(W.colorSpace)!==bt,(_!==W||v!==W.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=W,v=W.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new ui(new ql(2,2),new Ar({name:"BackgroundMaterial",uniforms:no(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(W.colorSpace)!==bt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||v!==W.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=W,v=W.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,P){L.getRGB(bl,xg(s)),r.buffers.color.setClear(bl.r,bl.g,bl.b,P,c)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),h=P,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,x(f,h)},render:C,addToRenderList:y,dispose:U}}function qS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,c=!1;function f(E,G,le,ee,de){let ge=!1;const oe=_(ee,le,G);l!==oe&&(l=oe,p(l.object)),ge=S(E,ee,le,de),ge&&T(E,ee,le,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,P(E,G,le,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function p(E){return s.bindVertexArray(E)}function g(E){return s.deleteVertexArray(E)}function _(E,G,le){const ee=le.wireframe===!0;let de=r[E.id];de===void 0&&(de={},r[E.id]=de);let ge=de[G.id];ge===void 0&&(ge={},de[G.id]=ge);let oe=ge[ee];return oe===void 0&&(oe=v(h()),ge[ee]=oe),oe}function v(E){const G=[],le=[],ee=[];for(let de=0;de<t;de++)G[de]=0,le[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:ee,object:E,attributes:{},index:null}}function S(E,G,le,ee){const de=l.attributes,ge=G.attributes;let oe=0;const ce=le.getAttributes();for(const H in ce)if(ce[H].location>=0){const se=de[H];let I=ge[H];if(I===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ee}function T(E,G,le,ee){const de={},ge=G.attributes;let oe=0;const ce=le.getAttributes();for(const H in ce)if(ce[H].location>=0){let se=ge[H];se===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),de[H]=I,oe++}l.attributes=de,l.attributesNum=oe,l.index=ee}function C(){const E=l.newAttributes;for(let G=0,le=E.length;G<le;G++)E[G]=0}function y(E){x(E,0)}function x(E,G){const le=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;le[E]=1,ee[E]===0&&(s.enableVertexAttribArray(E),ee[E]=1),de[E]!==G&&(s.vertexAttribDivisor(E,G),de[E]=G)}function U(){const E=l.newAttributes,G=l.enabledAttributes;for(let le=0,ee=G.length;le<ee;le++)G[le]!==E[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function L(E,G,le,ee,de,ge,oe){oe===!0?s.vertexAttribIPointer(E,G,le,de,ge):s.vertexAttribPointer(E,G,le,ee,de,ge)}function P(E,G,le,ee){C();const de=ee.attributes,ge=le.getAttributes(),oe=G.defaultAttributeValues;for(const ce in ge){const H=ge[ce];if(H.location>=0){let ae=de[ce];if(ae===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const se=ae.normalized,I=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Ue=re.buffer,Q=re.type,me=re.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||ae.gpuType===od;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Re=ye.stride,Ze=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<H.locationSize;Ye++)x(H.location+Ye,ye.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<H.locationSize;Ye++)y(H.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ye=0;Ye<H.locationSize;Ye++)L(H.location+Ye,I/H.locationSize,Q,se,Re*me,(Ze+I/H.locationSize*Ye)*me,Me)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)x(H.location+ye,ae.meshPerAttribute);E.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<H.locationSize;ye++)y(H.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ye=0;ye<H.locationSize;ye++)L(H.location+ye,I/H.locationSize,Q,se,I*me,I/H.locationSize*ye*me,Me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}U()}function W(){V();for(const E in r){const G=r[E];for(const le in G){const ee=G[le];for(const de in ee)g(ee[de].object),delete ee[de];delete G[le]}delete r[E]}}function F(E){if(r[E.id]===void 0)return;const G=r[E.id];for(const le in G){const ee=G[le];for(const de in ee)g(ee[de].object),delete ee[de];delete G[le]}delete r[E.id]}function N(E){for(const G in r){const le=r[G];if(le[E.id]===void 0)continue;const ee=le[E.id];for(const de in ee)g(ee[de].object),delete ee[de];delete le[E.id]}}function V(){R(),c=!0,l!==a&&(l=a,p(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function $S(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=g[T];t.update(S,r,1)}function h(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],g[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let T=0;for(let C=0;C<_;C++)T+=g[C]*v[C];t.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function KS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==li&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const V=N===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Wi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Hi&&!V)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:W,maxSamples:F}}function ZS(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new ki,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||a;return a=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,S){const T=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!a||T===null||T.length===0||l&&!y)l?g(null):p();else{const U=l?0:r,L=U*4;let P=x.clippingState||null;h.value=P,P=g(T,v,L,S);for(let W=0;W!==L;++W)P[W]=t[W];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,T){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=h.value,T!==!0||y===null){const x=S+C*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,P=S;L!==C;++L,P+=4)c.copy(_[L]).applyMatrix4(U,f),c.normal.toArray(y,P),y[P+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function JS(s){let e=new WeakMap;function t(c,f){return f===Mf?c.mapping=Zs:f===Ef&&(c.mapping=Js),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Mf||f===Ef)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new z0(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ys=4,Tm=[.125,.215,.35,.446,.526,.582],$r=20,af=new kl,wm=new Ct;let lf=null,uf=0,cf=0,ff=!1;const jr=(1+Math.sqrt(5))/2,Ws=1/jr,Am=[new Y(-jr,Ws,0),new Y(jr,Ws,0),new Y(-Ws,0,jr),new Y(Ws,0,jr),new Y(0,jr,-Ws),new Y(0,jr,Ws),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),this._renderer.xr.enabled=ff,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:$o,format:li,colorSpace:to,depthBuffer:!1},a=Rm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QS(l)),this._blurMaterial=eM(l,e,t)}return a}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,af)}_sceneToCubeUV(e,t,r,a){const f=new Cn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(wm),g.toneMapping=Er,g.autoClear=!1;const S=new jl({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),T=new ui(new Jo,S);let C=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,C=!0):(S.color.copy(wm),C=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(f.up.set(0,h[x],0),f.lookAt(p[x],0,0)):U===1?(f.up.set(0,0,h[x]),f.lookAt(0,p[x],0)):(f.up.set(0,h[x],0),f.lookAt(0,0,p[x]));const L=this._cubeSize;Ll(a,U*L,x>2?L:0,L,L),g.setRenderTarget(a),C&&g.render(T,f),g.render(e,f)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=v,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Zs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ui(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,af)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Am[(a-l-1)%Am.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ui(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),C=l/T,y=isFinite(l)?1+Math.floor(g*C):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const x=[];let U=0;for(let N=0;N<$r;++N){const V=N/C,R=Math.exp(-V*V/2);x.push(R),N===0?U+=R:N<y&&(U+=2*R)}for(let N=0;N<x.length;N++)x[N]=x[N]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const P=this._sizeLods[a],W=3*P*(a>L-Ys?a-L+Ys:0),F=4*(this._cubeSize-P);Ll(t,W,F,3*P,2*P),h.setRenderTarget(t),h.render(_,af)}}function QS(s){const e=[],t=[],r=[];let a=s;const l=s-Ys+1+Tm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Ys?h=Tm[c-s+Ys-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,T=6,C=3,y=2,x=1,U=new Float32Array(C*T*S),L=new Float32Array(y*T*S),P=new Float32Array(x*T*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,V=F>2?0:-1,R=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];U.set(R,C*T*F),L.set(v,y*T*F);const E=[F,F,F,F,F,F];P.set(E,x*T*F)}const W=new Si;W.setAttribute("position",new fi(U,C)),W.setAttribute("uv",new fi(L,y)),W.setAttribute("faceIndex",new fi(P,x)),e.push(W),a>Ys&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Rm(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function eM(s,e,t){const r=new Float32Array($r),a=new Y(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Pm(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function bm(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Mf||h===Ef,g=h===Zs||h===Js;if(p||g){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Cm(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Cm(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function nM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function iM(s,e,t,r){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,T=_.attributes.position;let C=0;if(S!==null){const U=S.array;C=S.version;for(let L=0,P=U.length;L<P;L+=3){const W=U[L+0],F=U[L+1],N=U[L+2];v.push(W,F,F,N,N,W)}}else if(T!==void 0){const U=T.array;C=T.version;for(let L=0,P=U.length/3-1;L<P;L+=3){const W=L+0,F=L+1,N=L+2;v.push(W,F,F,N,N,W)}}else return;const y=new(hg(v)?vg:_g)(v,1);y.version=C;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function rM(s,e,t){let r;function a(v){r=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,S){s.drawElements(r,S,l,v*c),t.update(S,r,1)}function p(v,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,v*c,T),t.update(S,r,T))}function g(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,T);let y=0;for(let x=0;x<T;x++)y+=S[x];t.update(y,r,1)}function _(v,S,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/c,S[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,C,0,T);let x=0;for(let U=0;U<T;U++)x+=S[U]*C[U];t.update(x,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function oM(s,e,t){const r=new WeakMap,a=new jt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let E=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",E)};var S=E;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let W=f.attributes.position.count*P,F=1;W>e.maxTextureSize&&(F=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const N=new Float32Array(W*F*4*_),V=new mg(N,W,F,_);V.type=Hi,V.needsUpdate=!0;const R=P*4;for(let G=0;G<_;G++){const le=x[G],ee=U[G],de=L[G],ge=W*F*4*G;for(let oe=0;oe<le.count;oe++){const ce=oe*R;T===!0&&(a.fromBufferAttribute(le,oe),N[ge+ce+0]=a.x,N[ge+ce+1]=a.y,N[ge+ce+2]=a.z,N[ge+ce+3]=0),C===!0&&(a.fromBufferAttribute(ee,oe),N[ge+ce+4]=a.x,N[ge+ce+5]=a.y,N[ge+ce+6]=a.z,N[ge+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),N[ge+ce+8]=a.x,N[ge+ce+9]=a.y,N[ge+ce+10]=a.z,N[ge+ce+11]=de.itemSize===4?a.w:1)}}v={count:_,texture:V,size:new Ge(W,F)},r.set(f,v),f.addEventListener("dispose",E)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function aM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return _}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const bg=new Rn,Lm=new wg(1,1),Lg=new mg,Dg=new S0,Ng=new Sg,Dm=[],Nm=[],Um=new Float32Array(16),Im=new Float32Array(9),Fm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Dm[a];if(l===void 0&&(l=new Float32Array(a),Dm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function $l(s,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function dM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Fm.set(r),s.uniformMatrix2fv(this.addr,!1,Fm),tn(t,r)}}function hM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Im.set(r),s.uniformMatrix3fv(this.addr,!1,Im),tn(t,r)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),tn(t,r)}}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function EM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Lm.compareFunction=dg,l=Lm):l=bg,t.setTexture2D(e||l,a)}function TM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Dg,a)}function wM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Ng,a)}function AM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Lg,a)}function CM(s){switch(s){case 5126:return lM;case 35664:return uM;case 35665:return cM;case 35666:return fM;case 35674:return dM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function bM(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function NM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function UM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function IM(s,e){s.uniform1iv(this.addr,e)}function FM(s,e){s.uniform2iv(this.addr,e)}function OM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function kM(s,e){s.uniform1uiv(this.addr,e)}function BM(s,e){s.uniform2uiv(this.addr,e)}function HM(s,e){s.uniform3uiv(this.addr,e)}function VM(s,e){s.uniform4uiv(this.addr,e)}function GM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||bg,l[c])}function WM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Dg,l[c])}function XM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Ng,l[c])}function YM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Lg,l[c])}function jM(s){switch(s){case 5126:return RM;case 35664:return PM;case 35665:return bM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return IM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return BM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}class qM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}}class $M{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jM(t.type)}}class KM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Om(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){const r=s.name,a=r.length;for(df.lastIndex=0;;){const l=df.exec(r),c=df.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Om(t,p===void 0?new qM(f,s,e):new $M(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new KM(f),Om(t,_)),t=_}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);ZM(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function zm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const JM=37297;let QM=0;function eE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const km=new dt;function tE(s){At._getMatrix(km,At.workingColorSpace,s);const e=`mat3( ${km.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eE(s.getShaderSource(e),c)}else return a}function nE(s,e){const t=tE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iE(s,e){let t;switch(e){case Yv:t="Linear";break;case jv:t="Reinhard";break;case qv:t="Cineon";break;case $v:t="ACESFilmic";break;case Zv:t="AgX";break;case Jv:t="Neutral";break;case Kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new Y;function rE(){At.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function oE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Xo(s){return s!==""}function Hm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(lE,cE)}const uE=new Map;function cE(s,e){let t=ht[e];if(t===void 0){const r=uE.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(t)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(fE,dE)}function dE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function pE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function gE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eg:e="ENVMAP_BLENDING_MULTIPLY";break;case Wv:e="ENVMAP_BLENDING_MIX";break;case Xv:e="ENVMAP_BLENDING_ADD";break}return e}function _E(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function vE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=hE(t),p=pE(t),g=mE(t),_=gE(t),v=_E(t),S=sE(t),T=oE(l),C=a.createProgram();let y,x,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ht.tonemapping_pars_fragment:"",t.toneMapping!==Er?iE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,nE("linearToOutputTexel",t.outputColorSpace),rE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),c=td(c),c=Hm(c,t),c=Vm(c,t),f=td(f),f=Hm(f,t),f=Vm(f,t),c=Gm(c),f=Gm(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+y+c,P=U+x+f,W=zm(a,a.VERTEX_SHADER,L),F=zm(a,a.FRAGMENT_SHADER,P);a.attachShader(C,W),a.attachShader(C,F),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function N(G){if(s.debug.checkShaderErrors){const le=a.getProgramInfoLog(C).trim(),ee=a.getShaderInfoLog(W).trim(),de=a.getShaderInfoLog(F).trim();let ge=!0,oe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,W,F);else{const ce=Bm(a,W,"vertex"),H=Bm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+ce+`
`+H)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ee===""||de==="")&&(oe=!1);oe&&(G.diagnostics={runnable:ge,programLog:le,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:x}})}a.deleteShader(W),a.deleteShader(F),V=new Bl(a,C),R=aE(a,C)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(C,JM)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=W,this.fragmentShader=F,this}let xE=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new SE(e),t.set(e,r)),r}}class SE{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function ME(s,e,t,r,a,l,c){const f=new pd,h=new yE,p=new Set,g=[],_=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,E,G,le,ee){const de=le.fog,ge=ee.geometry,oe=R.isMeshStandardMaterial?le.environment:null,ce=(R.isMeshStandardMaterial?t:e).get(R.envMap||oe),H=ce&&ce.mapping===Yl?ce.image.height:null,ae=T[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const se=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,I=se!==void 0?se.length:0;let re=0;ge.morphAttributes.position!==void 0&&(re=1),ge.morphAttributes.normal!==void 0&&(re=2),ge.morphAttributes.color!==void 0&&(re=3);let Ue,Q,me,Me;if(ae){const mt=vi[ae];Ue=mt.vertexShader,Q=mt.fragmentShader}else Ue=R.vertexShader,Q=R.fragmentShader,h.update(R),me=h.getVertexShaderID(R),Me=h.getFragmentShaderID(R);const ye=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ze=ee.isInstancedMesh===!0,Ye=ee.isBatchedMesh===!0,Pt=!!R.map,Rt=!!R.matcap,lt=!!ce,z=!!R.aoMap,un=!!R.lightMap,pt=!!R.bumpMap,ct=!!R.normalMap,Ke=!!R.displacementMap,Tt=!!R.emissiveMap,je=!!R.metalnessMap,b=!!R.roughnessMap,w=R.anisotropy>0,Z=R.clearcoat>0,pe=R.dispersion>0,_e=R.iridescence>0,he=R.sheen>0,We=R.transmission>0,Ce=w&&!!R.anisotropyMap,Oe=Z&&!!R.clearcoatMap,ft=Z&&!!R.clearcoatNormalMap,Ee=Z&&!!R.clearcoatRoughnessMap,ke=_e&&!!R.iridescenceMap,Qe=_e&&!!R.iridescenceThicknessMap,rt=he&&!!R.sheenColorMap,ze=he&&!!R.sheenRoughnessMap,B=!!R.specularMap,ue=!!R.specularColorMap,Pe=!!R.specularIntensityMap,O=We&&!!R.transmissionMap,Te=We&&!!R.thicknessMap,ie=!!R.gradientMap,fe=!!R.alphaMap,Ne=R.alphaTest>0,be=!!R.alphaHash,et=!!R.extensions;let xt=Er;R.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=s.toneMapping);const Ut={shaderID:ae,shaderType:R.type,shaderName:R.name,vertexShader:Ue,fragmentShader:Q,defines:R.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&ee._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&ee.instanceColor!==null,instancingMorph:Ze&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:to,alphaToCoverage:!!R.alphaToCoverage,map:Pt,matcap:Rt,envMap:lt,envMapMode:lt&&ce.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:un,bumpMap:pt,normalMap:ct,displacementMap:v&&Ke,emissiveMap:Tt,normalMapObjectSpace:ct&&R.normalMapType===i0,normalMapTangentSpace:ct&&R.normalMapType===n0,metalnessMap:je,roughnessMap:b,anisotropy:w,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:B,specularColorMap:ue,specularIntensityMap:Pe,transmission:We,transmissionMap:O,thicknessMap:Te,gradientMap:ie,opaque:R.transparent===!1&&R.blending===js&&R.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ne,alphaHash:be,combine:R.combine,mapUv:Pt&&C(R.map.channel),aoMapUv:z&&C(R.aoMap.channel),lightMapUv:un&&C(R.lightMap.channel),bumpMapUv:pt&&C(R.bumpMap.channel),normalMapUv:ct&&C(R.normalMap.channel),displacementMapUv:Ke&&C(R.displacementMap.channel),emissiveMapUv:Tt&&C(R.emissiveMap.channel),metalnessMapUv:je&&C(R.metalnessMap.channel),roughnessMapUv:b&&C(R.roughnessMap.channel),anisotropyMapUv:Ce&&C(R.anisotropyMap.channel),clearcoatMapUv:Oe&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:ft&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(R.sheenRoughnessMap.channel),specularMapUv:B&&C(R.specularMap.channel),specularColorMapUv:ue&&C(R.specularColorMap.channel),specularIntensityMapUv:Pe&&C(R.specularIntensityMap.channel),transmissionMapUv:O&&C(R.transmissionMap.channel),thicknessMapUv:Te&&C(R.thicknessMap.channel),alphaMapUv:fe&&C(R.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ct||w),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ge.attributes.uv&&(Pt||fe),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Re,skinning:ee.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:Pt&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===bt,decodeVideoTextureEmissive:Tt&&R.emissiveMap.isVideoTexture===!0&&At.getTransfer(R.emissiveMap.colorSpace)===bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Bi,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:et&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&R.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function x(R){const E=[];if(R.shaderID?E.push(R.shaderID):(E.push(R.customVertexShaderID),E.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)E.push(G),E.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(U(E,R),L(E,R),E.push(s.outputColorSpace)),E.push(R.customProgramCacheKey),E.join()}function U(R,E){R.push(E.precision),R.push(E.outputColorSpace),R.push(E.envMapMode),R.push(E.envMapCubeUVHeight),R.push(E.mapUv),R.push(E.alphaMapUv),R.push(E.lightMapUv),R.push(E.aoMapUv),R.push(E.bumpMapUv),R.push(E.normalMapUv),R.push(E.displacementMapUv),R.push(E.emissiveMapUv),R.push(E.metalnessMapUv),R.push(E.roughnessMapUv),R.push(E.anisotropyMapUv),R.push(E.clearcoatMapUv),R.push(E.clearcoatNormalMapUv),R.push(E.clearcoatRoughnessMapUv),R.push(E.iridescenceMapUv),R.push(E.iridescenceThicknessMapUv),R.push(E.sheenColorMapUv),R.push(E.sheenRoughnessMapUv),R.push(E.specularMapUv),R.push(E.specularColorMapUv),R.push(E.specularIntensityMapUv),R.push(E.transmissionMapUv),R.push(E.thicknessMapUv),R.push(E.combine),R.push(E.fogExp2),R.push(E.sizeAttenuation),R.push(E.morphTargetsCount),R.push(E.morphAttributeCount),R.push(E.numDirLights),R.push(E.numPointLights),R.push(E.numSpotLights),R.push(E.numSpotLightMaps),R.push(E.numHemiLights),R.push(E.numRectAreaLights),R.push(E.numDirLightShadows),R.push(E.numPointLightShadows),R.push(E.numSpotLightShadows),R.push(E.numSpotLightShadowsWithMaps),R.push(E.numLightProbes),R.push(E.shadowMapType),R.push(E.toneMapping),R.push(E.numClippingPlanes),R.push(E.numClipIntersection),R.push(E.depthPacking)}function L(R,E){f.disableAll(),E.supportsVertexTextures&&f.enable(0),E.instancing&&f.enable(1),E.instancingColor&&f.enable(2),E.instancingMorph&&f.enable(3),E.matcap&&f.enable(4),E.envMap&&f.enable(5),E.normalMapObjectSpace&&f.enable(6),E.normalMapTangentSpace&&f.enable(7),E.clearcoat&&f.enable(8),E.iridescence&&f.enable(9),E.alphaTest&&f.enable(10),E.vertexColors&&f.enable(11),E.vertexAlphas&&f.enable(12),E.vertexUv1s&&f.enable(13),E.vertexUv2s&&f.enable(14),E.vertexUv3s&&f.enable(15),E.vertexTangents&&f.enable(16),E.anisotropy&&f.enable(17),E.alphaHash&&f.enable(18),E.batching&&f.enable(19),E.dispersion&&f.enable(20),E.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),E.fog&&f.enable(0),E.useFog&&f.enable(1),E.flatShading&&f.enable(2),E.logarithmicDepthBuffer&&f.enable(3),E.reverseDepthBuffer&&f.enable(4),E.skinning&&f.enable(5),E.morphTargets&&f.enable(6),E.morphNormals&&f.enable(7),E.morphColors&&f.enable(8),E.premultipliedAlpha&&f.enable(9),E.shadowMapEnabled&&f.enable(10),E.doubleSided&&f.enable(11),E.flipSided&&f.enable(12),E.useDepthPacking&&f.enable(13),E.dithering&&f.enable(14),E.transmission&&f.enable(15),E.sheen&&f.enable(16),E.opaque&&f.enable(17),E.pointsUvs&&f.enable(18),E.decodeVideoTexture&&f.enable(19),E.decodeVideoTextureEmissive&&f.enable(20),E.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const E=T[R.type];let G;if(E){const le=vi[E];G=U0.clone(le.uniforms)}else G=R.uniforms;return G}function W(R,E){let G;for(let le=0,ee=g.length;le<ee;le++){const de=g[le];if(de.cacheKey===E){G=de,++G.usedTimes;break}}return G===void 0&&(G=new vE(s,E,R,l),g.push(G)),G}function F(R){if(--R.usedTimes===0){const E=g.indexOf(R);g[E]=g[g.length-1],g.pop(),R.destroy()}}function N(R){h.remove(R)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:W,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:V}}function EE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function TE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ym(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,v,S,T,C,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:T,renderOrder:_.renderOrder,z:C,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function f(_,v,S,T,C,y){const x=c(_,v,S,T,C,y);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(_,v,S,T,C,y){const x=c(_,v,S,T,C,y);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(_,v){t.length>1&&t.sort(_||TE),r.length>1&&r.sort(v||Xm),a.length>1&&a.sort(v||Xm)}function g(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function wE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Ym,s.set(r,[c])):a>=l.length?(c=new Ym,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function CE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let RE=0;function PE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s){const e=new AE,t=CE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const a=new Y,l=new Ht,c=new Ht;function f(p){let g=0,_=0,v=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,T=0,C=0,y=0,x=0,U=0,L=0,P=0,W=0,F=0,N=0;p.sort(PE);for(let R=0,E=p.length;R<E;R++){const G=p[R],le=G.color,ee=G.intensity,de=G.distance,ge=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*ee,_+=le.g*ee,v+=le.b*ee;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(G.sh.coefficients[oe],ee);N++}else if(G.isDirectionalLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ce=G.shadow,H=t.get(G);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=ge,r.directionalShadowMatrix[S]=G.shadow.matrix,U++}r.directional[S]=oe,S++}else if(G.isSpotLight){const oe=e.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(le).multiplyScalar(ee),oe.distance=de,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,r.spot[C]=oe;const ce=G.shadow;if(G.map&&(r.spotLightMap[W]=G.map,W++,ce.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[C]=ce.matrix,G.castShadow){const H=t.get(G);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[C]=H,r.spotShadowMap[C]=ge,P++}C++}else if(G.isRectAreaLight){const oe=e.get(G);oe.color.copy(le).multiplyScalar(ee),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=oe,y++}else if(G.isPointLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){const ce=G.shadow,H=t.get(G);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=ge,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=oe,T++}else if(G.isHemisphereLight){const oe=e.get(G);oe.skyColor.copy(G.color).multiplyScalar(ee),oe.groundColor.copy(G.groundColor).multiplyScalar(ee),r.hemi[x]=oe,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==C||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==U||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==W||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+W-F,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,V.directionalLength=S,V.pointLength=T,V.spotLength=C,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=U,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=W,V.numLightProbes=N,r.version=RE++)}function h(p,g){let _=0,v=0,S=0,T=0,C=0;const y=g.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const L=p[x];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:f,setupView:h,state:r}}function jm(s){const e=new bE(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function LE(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new jm(s),e.set(a,[f])):l>=c.length?(f=new jm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UE(s,e,t){let r=new Tg;const a=new Ge,l=new Ge,c=new jt,f=new ax({depthPacking:t0}),h=new lx,p={},g=t.maxTextureSize,_={[wr]:In,[In]:wr,[Bi]:Bi},v=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:DE,fragmentShader:NE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Si;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ui(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qm;let x=this.type;this.render=function(F,N,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=s.getRenderTarget(),E=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Mr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=x!==zi&&this.type===zi,de=x===zi&&this.type!==zi;for(let ge=0,oe=F.length;ge<oe;ge++){const ce=F[ge],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ae=H.getFrameExtents();if(a.multiply(ae),l.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,H.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,H.mapSize.y=l.y)),H.map===null||ee===!0||de===!0){const I=this.type!==zi?{minFilter:ci,magFilter:ci}:{};H.map!==null&&H.map.dispose(),H.map=new Qr(a.x,a.y,I),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let I=0;I<se;I++){const re=H.getViewport(I);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),le.viewport(c),H.updateMatrices(ce,I),r=H.getFrustum(),P(N,V,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&U(H,V),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(R,E,G)};function U(F,N){const V=e.update(C);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Qr(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,V,v,C,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,V,S,C,null)}function L(F,N,V,R){let E=null;const G=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)E=G;else if(E=V.isPointLight===!0?h:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const le=E.uuid,ee=N.uuid;let de=p[le];de===void 0&&(de={},p[le]=de);let ge=de[ee];ge===void 0&&(ge=E.clone(),de[ee]=ge,N.addEventListener("dispose",W)),E=ge}if(E.visible=N.visible,E.wireframe=N.wireframe,R===zi?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:_[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const le=s.properties.get(E);le.light=V}return E}function P(F,N,V,R,E){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===zi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),de=F.material;if(Array.isArray(de)){const ge=ee.groups;for(let oe=0,ce=ge.length;oe<ce;oe++){const H=ge[oe],ae=de[H.materialIndex];if(ae&&ae.visible){const se=L(F,ae,R,E);F.onBeforeShadow(s,F,N,V,ee,se,H),s.renderBufferDirect(V,null,ee,se,F,H),F.onAfterShadow(s,F,N,V,ee,se,H)}}}else if(de.visible){const ge=L(F,de,R,E);F.onBeforeShadow(s,F,N,V,ee,ge,null),s.renderBufferDirect(V,null,ee,ge,F,null),F.onAfterShadow(s,F,N,V,ee,ge,null)}}const le=F.children;for(let ee=0,de=le.length;ee<de;ee++)P(le[ee],N,V,R,E)}function W(F){F.target.removeEventListener("dispose",W);for(const V in p){const R=p[V],E=F.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}const IE={[mf]:gf,[_f]:yf,[vf]:Sf,[Ks]:xf,[gf]:mf,[yf]:_f,[Sf]:vf,[xf]:Ks};function FE(s,e){function t(){let O=!1;const Te=new jt;let ie=null;const fe=new jt(0,0,0,0);return{setMask:function(Ne){ie!==Ne&&!O&&(s.colorMask(Ne,Ne,Ne,Ne),ie=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,be,et,xt,Ut){Ut===!0&&(Ne*=xt,be*=xt,et*=xt),Te.set(Ne,be,et,xt),fe.equals(Te)===!1&&(s.clearColor(Ne,be,et,xt),fe.copy(Te))},reset:function(){O=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let O=!1,Te=!1,ie=null,fe=null,Ne=null;return{setReversed:function(be){if(Te!==be){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ne;Ne=null,this.setClear(xt)}Te=be},getReversed:function(){return Te},setTest:function(be){be?ye(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(be){ie!==be&&!O&&(s.depthMask(be),ie=be)},setFunc:function(be){if(Te&&(be=IE[be]),fe!==be){switch(be){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=be}},setLocked:function(be){O=be},setClear:function(be){Ne!==be&&(Te&&(be=1-be),s.clearDepth(be),Ne=be)},reset:function(){O=!1,ie=null,fe=null,Ne=null,Te=!1}}}function a(){let O=!1,Te=null,ie=null,fe=null,Ne=null,be=null,et=null,xt=null,Ut=null;return{setTest:function(mt){O||(mt?ye(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!O&&(s.stencilMask(mt),Te=mt)},setFunc:function(mt,qt,$t){(ie!==mt||fe!==qt||Ne!==$t)&&(s.stencilFunc(mt,qt,$t),ie=mt,fe=qt,Ne=$t)},setOp:function(mt,qt,$t){(be!==mt||et!==qt||xt!==$t)&&(s.stencilOp(mt,qt,$t),be=mt,et=qt,xt=$t)},setLocked:function(mt){O=mt},setClear:function(mt){Ut!==mt&&(s.clearStencil(mt),Ut=mt)},reset:function(){O=!1,Te=null,ie=null,fe=null,Ne=null,be=null,et=null,xt=null,Ut=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],T=null,C=!1,y=null,x=null,U=null,L=null,P=null,W=null,F=null,N=new Ct(0,0,0),V=0,R=!1,E=null,G=null,le=null,ee=null,de=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),oe=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),oe=ce>=2);let ae=null,se={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ue=new jt().fromArray(I),Q=new jt().fromArray(re);function me(O,Te,ie,fe){const Ne=new Uint8Array(4),be=s.createTexture();s.bindTexture(O,be),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ie;et++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return be}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Ks),pt(!1),ct(Tv),ye(s.CULL_FACE),z(Mr);function ye(O){g[O]!==!0&&(s.enable(O),g[O]=!0)}function Re(O){g[O]!==!1&&(s.disable(O),g[O]=!1)}function Ze(O,Te){return _[O]!==Te?(s.bindFramebuffer(O,Te),_[O]=Te,O===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),O===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ye(O,Te){let ie=S,fe=!1;if(O){ie=v.get(Te),ie===void 0&&(ie=[],v.set(Te,ie));const Ne=O.textures;if(ie.length!==Ne.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let be=0,et=Ne.length;be<et;be++)ie[be]=s.COLOR_ATTACHMENT0+be;ie.length=Ne.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function Pt(O){return T!==O?(s.useProgram(O),T=O,!0):!1}const Rt={[qr]:s.FUNC_ADD,[Cv]:s.FUNC_SUBTRACT,[Rv]:s.FUNC_REVERSE_SUBTRACT};Rt[Pv]=s.MIN,Rt[bv]=s.MAX;const lt={[Lv]:s.ZERO,[Dv]:s.ONE,[Nv]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[kv]:s.SRC_ALPHA_SATURATE,[Ov]:s.DST_COLOR,[Iv]:s.DST_ALPHA,[Uv]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[zv]:s.ONE_MINUS_DST_COLOR,[Fv]:s.ONE_MINUS_DST_ALPHA,[Bv]:s.CONSTANT_COLOR,[Hv]:s.ONE_MINUS_CONSTANT_COLOR,[Vv]:s.CONSTANT_ALPHA,[Gv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(O,Te,ie,fe,Ne,be,et,xt,Ut,mt){if(O===Mr){C===!0&&(Re(s.BLEND),C=!1);return}if(C===!1&&(ye(s.BLEND),C=!0),O!==Av){if(O!==y||mt!==R){if((x!==qr||P!==qr)&&(s.blendEquation(s.FUNC_ADD),x=qr,P=qr),mt)switch(O){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $p:s.blendFunc(s.ONE,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $p:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}U=null,L=null,W=null,F=null,N.set(0,0,0),V=0,y=O,R=mt}return}Ne=Ne||Te,be=be||ie,et=et||fe,(Te!==x||Ne!==P)&&(s.blendEquationSeparate(Rt[Te],Rt[Ne]),x=Te,P=Ne),(ie!==U||fe!==L||be!==W||et!==F)&&(s.blendFuncSeparate(lt[ie],lt[fe],lt[be],lt[et]),U=ie,L=fe,W=be,F=et),(xt.equals(N)===!1||Ut!==V)&&(s.blendColor(xt.r,xt.g,xt.b,Ut),N.copy(xt),V=Ut),y=O,R=!1}function un(O,Te){O.side===Bi?Re(s.CULL_FACE):ye(s.CULL_FACE);let ie=O.side===In;Te&&(ie=!ie),pt(ie),O.blending===js&&O.transparent===!1?z(Mr):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const fe=O.stencilWrite;f.setTest(fe),fe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){E!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),E=O)}function ct(O){ye(s.CULL_FACE),O!==G&&s.cullFace(s.BACK),G=O}function Ke(O){O!==le&&(oe&&s.lineWidth(O),le=O)}function Tt(O,Te,ie){O?(ye(s.POLYGON_OFFSET_FILL),(ee!==Te||de!==ie)&&(s.polygonOffset(Te,ie),ee=Te,de=ie)):Re(s.POLYGON_OFFSET_FILL)}function je(O){O?ye(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function b(O){O===void 0&&(O=s.TEXTURE0+ge-1),ae!==O&&(s.activeTexture(O),ae=O)}function w(O,Te,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+ge-1:ie=ae);let fe=se[ie];fe===void 0&&(fe={type:void 0,texture:void 0},se[ie]=fe),(fe.type!==O||fe.texture!==Te)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(O,Te||Me[O]),fe.type=O,fe.texture=Te)}function Z(){const O=se[ae];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){Ue.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ue.copy(O))}function ze(O){Q.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function B(O,Te){let ie=p.get(Te);ie===void 0&&(ie=new WeakMap,p.set(Te,ie));let fe=ie.get(O);fe===void 0&&(fe=s.getUniformBlockIndex(Te,O.name),ie.set(O,fe))}function ue(O,Te){const fe=p.get(Te).get(O);h.get(Te)!==fe&&(s.uniformBlockBinding(Te,fe,O.__bindingPointIndex),h.set(Te,fe))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ae=null,se={},_={},v=new WeakMap,S=[],T=null,C=!1,y=null,x=null,U=null,L=null,P=null,W=null,F=null,N=new Ct(0,0,0),V=0,R=!1,E=null,G=null,le=null,ee=null,de=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Re,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:Pt,setBlending:z,setMaterial:un,setFlipSided:pt,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:je,activeTexture:b,bindTexture:w,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Qe,updateUBOMapping:B,uniformBlockBinding:ue,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:rt,viewport:ze,reset:Pe}}function OE(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,w){return S?new OffscreenCanvas(b,w):Wl("canvas")}function C(b,w,Z){let pe=1;const _e=je(b);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const he=Math.floor(pe*_e.width),We=Math.floor(pe*_e.height);_===void 0&&(_=T(he,We));const Ce=w?T(he,We):_;return Ce.width=he,Ce.height=We,Ce.getContext("2d").drawImage(b,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+We+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function x(b){s.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,w,Z,pe,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=w;if(w===s.RED&&(Z===s.FLOAT&&(he=s.R32F),Z===s.HALF_FLOAT&&(he=s.R16F),Z===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.R8UI),Z===s.UNSIGNED_SHORT&&(he=s.R16UI),Z===s.UNSIGNED_INT&&(he=s.R32UI),Z===s.BYTE&&(he=s.R8I),Z===s.SHORT&&(he=s.R16I),Z===s.INT&&(he=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(he=s.RG32F),Z===s.HALF_FLOAT&&(he=s.RG16F),Z===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RG8UI),Z===s.UNSIGNED_SHORT&&(he=s.RG16UI),Z===s.UNSIGNED_INT&&(he=s.RG32UI),Z===s.BYTE&&(he=s.RG8I),Z===s.SHORT&&(he=s.RG16I),Z===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Z===s.UNSIGNED_INT&&(he=s.RGB32UI),Z===s.BYTE&&(he=s.RGB8I),Z===s.SHORT&&(he=s.RGB16I),Z===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Z===s.UNSIGNED_INT&&(he=s.RGBA32UI),Z===s.BYTE&&(he=s.RGBA8I),Z===s.SHORT&&(he=s.RGBA16I),Z===s.INT&&(he=s.RGBA32I)),w===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const We=_e?Vl:At.getTransfer(pe);Z===s.FLOAT&&(he=s.RGBA32F),Z===s.HALF_FLOAT&&(he=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(he=We===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(b,w){let Z;return b?w===null||w===Jr||w===Qs?Z=s.DEPTH24_STENCIL8:w===Hi?Z=s.DEPTH32F_STENCIL8:w===qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jr||w===Qs?Z=s.DEPTH_COMPONENT24:w===Hi?Z=s.DEPTH_COMPONENT32F:w===qo&&(Z=s.DEPTH_COMPONENT16),Z}function W(b,w){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function F(b){const w=b.target;w.removeEventListener("dispose",F),V(w),w.isVideoTexture&&g.delete(w)}function N(b){const w=b.target;w.removeEventListener("dispose",N),E(w)}function V(b){const w=r.get(b);if(w.__webglInit===void 0)return;const Z=b.source,pe=v.get(Z);if(pe){const _e=pe[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(b),Object.keys(pe).length===0&&v.delete(Z)}r.remove(b)}function R(b){const w=r.get(b);s.deleteTexture(w.__webglTexture);const Z=b.source,pe=v.get(Z);delete pe[w.__cacheKey],c.memory.textures--}function E(b){const w=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let _e=0;_e<w.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=b.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const he=r.get(Z[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(Z[pe])}r.remove(b)}let G=0;function le(){G=0}function ee(){const b=G;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),G+=1,b}function de(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function ge(b,w){const Z=r.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,b,w);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function oe(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function ce(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,w);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function H(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){me(Z,b,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const ae={[Tf]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[wf]:s.MIRRORED_REPEAT},se={[ci]:s.NEAREST,[Qv]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Dc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},I={[r0]:s.NEVER,[c0]:s.ALWAYS,[s0]:s.LESS,[dg]:s.LEQUAL,[o0]:s.EQUAL,[u0]:s.GEQUAL,[a0]:s.GREATER,[l0]:s.NOTEQUAL};function re(b,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===Dc||w.magFilter===al||w.magFilter===Zr||w.minFilter===yi||w.minFilter===Dc||w.minFilter===al||w.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[w.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[w.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[w.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==al&&w.minFilter!==Zr||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(b,w){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",F));const pe=w.source;let _e=v.get(pe);_e===void 0&&(_e={},v.set(pe,_e));const he=de(w);if(he!==b.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),_e[he].usedTimes++;const We=_e[b.__cacheKey];We!==void 0&&(_e[b.__cacheKey].usedTimes--,We.usedTimes===0&&R(w)),b.__cacheKey=he,b.__webglTexture=_e[he].texture}return Z}function Q(b,w,Z){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=Ue(b,w),he=w.source;t.bindTexture(pe,b.__webglTexture,s.TEXTURE0+Z);const We=r.get(he);if(he.version!==We.__version||_e===!0){t.activeTexture(s.TEXTURE0+Z);const Ce=At.getPrimaries(At.workingColorSpace),Oe=w.colorSpace===Sr?null:At.getPrimaries(w.colorSpace),ft=w.colorSpace===Sr||Ce===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=C(w.image,!1,a.maxTextureSize);Ee=Tt(w,Ee);const ke=l.convert(w.format,w.colorSpace),Qe=l.convert(w.type);let rt=L(w.internalFormat,ke,Qe,w.colorSpace,w.isVideoTexture);re(pe,w);let ze;const B=w.mipmaps,ue=w.isVideoTexture!==!0,Pe=We.__version===void 0||_e===!0,O=he.dataReady,Te=W(w,Ee);if(w.isDepthTexture)rt=P(w.format===eo,w.type),Pe&&(ue?t.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,ke,Qe,null));else if(w.isDataTexture)if(B.length>0){ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,B[0].width,B[0].height);for(let ie=0,fe=B.length;ie<fe;ie++)ze=B[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,ke,Qe,ze.data);w.generateMipmaps=!1}else ue?(Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,ke,Qe,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ue&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,B[0].width,B[0].height,Ee.depth);for(let ie=0,fe=B.length;ie<fe;ie++)if(ze=B[ie],w.format!==li)if(ke!==null)if(ue){if(O)if(w.layerUpdates.size>0){const Ne=Em(ze.width,ze.height,w.format,w.type);for(const be of w.layerUpdates){const et=ze.data.subarray(be*Ne/ze.data.BYTES_PER_ELEMENT,(be+1)*Ne/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,be,ze.width,ze.height,1,ke,et)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,ke,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,ke,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,ke,Qe,ze.data)}else{ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,B[0].width,B[0].height);for(let ie=0,fe=B.length;ie<fe;ie++)ze=B[ie],w.format!==li?ke!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,ke,Qe,ze.data)}else if(w.isDataArrayTexture)if(ue){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),O)if(w.layerUpdates.size>0){const ie=Em(Ee.width,Ee.height,w.format,w.type);for(const fe of w.layerUpdates){const Ne=Ee.data.subarray(fe*ie/Ee.data.BYTES_PER_ELEMENT,(fe+1)*ie/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,ke,Qe,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(w.isData3DTexture)ue?(Pe&&t.texStorage3D(s.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(w.isFramebufferTexture){if(Pe)if(ue)t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let ie=Ee.width,fe=Ee.height;for(let Ne=0;Ne<Te;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,rt,ie,fe,0,ke,Qe,null),ie>>=1,fe>>=1}}else if(B.length>0){if(ue&&Pe){const ie=je(B[0]);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}for(let ie=0,fe=B.length;ie<fe;ie++)ze=B[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ke,Qe,ze):t.texImage2D(s.TEXTURE_2D,ie,rt,ke,Qe,ze);w.generateMipmaps=!1}else if(ue){if(Pe){const ie=je(Ee);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,rt,ke,Qe,Ee);y(w)&&x(pe),We.__version=he.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function me(b,w,Z){if(w.image.length!==6)return;const pe=Ue(b,w),_e=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const he=r.get(_e);if(_e.version!==he.__version||pe===!0){t.activeTexture(s.TEXTURE0+Z);const We=At.getPrimaries(At.workingColorSpace),Ce=w.colorSpace===Sr?null:At.getPrimaries(w.colorSpace),Oe=w.colorSpace===Sr||We===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!ft&&!Ee?ke[fe]=C(w.image[fe],!0,a.maxCubemapSize):ke[fe]=Ee?w.image[fe].image:w.image[fe],ke[fe]=Tt(w,ke[fe]);const Qe=ke[0],rt=l.convert(w.format,w.colorSpace),ze=l.convert(w.type),B=L(w.internalFormat,rt,ze,w.colorSpace),ue=w.isVideoTexture!==!0,Pe=he.__version===void 0||pe===!0,O=_e.dataReady;let Te=W(w,Qe);re(s.TEXTURE_CUBE_MAP,w);let ie;if(ft){ue&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,B,Qe.width,Qe.height);for(let fe=0;fe<6;fe++){ie=ke[fe].mipmaps;for(let Ne=0;Ne<ie.length;Ne++){const be=ie[Ne];w.format!==li?rt!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,be.width,be.height,rt,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,B,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,0,0,be.width,be.height,rt,ze,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne,B,be.width,be.height,0,rt,ze,be.data)}}}else{if(ie=w.mipmaps,ue&&Pe){ie.length>0&&Te++;const fe=je(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,B,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,rt,ze,ke[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,B,ke[fe].width,ke[fe].height,0,rt,ze,ke[fe].data);for(let Ne=0;Ne<ie.length;Ne++){const et=ie[Ne].image[fe].image;ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,et.width,et.height,rt,ze,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,B,et.width,et.height,0,rt,ze,et.data)}}else{ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,rt,ze,ke[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,B,rt,ze,ke[fe]);for(let Ne=0;Ne<ie.length;Ne++){const be=ie[Ne];ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,0,0,rt,ze,be.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ne+1,B,rt,ze,be.image[fe])}}}y(w)&&x(s.TEXTURE_CUBE_MAP),he.__version=_e.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Me(b,w,Z,pe,_e,he){const We=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Oe=L(Z.internalFormat,We,Ce,Z.colorSpace),ft=r.get(w),Ee=r.get(Z);if(Ee.__renderTarget=w,!ft.__hasExternalTextures){const ke=Math.max(1,w.width>>he),Qe=Math.max(1,w.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Oe,ke,Qe,w.depth,0,We,Ce,null):t.texImage2D(_e,he,Oe,ke,Qe,0,We,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,0,pt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(b,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),w.depthBuffer){const pe=w.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,he=P(w.stencilBuffer,_e),We=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(w);ct(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,b)}else{const pe=w.textures;for(let _e=0;_e<pe.length;_e++){const he=pe[_e],We=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Oe=L(he.internalFormat,We,Ce,he.colorSpace),ft=pt(w);Z&&ct(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,w.width,w.height):ct(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge(w.depthTexture,0);const _e=pe.__webglTexture,he=pt(w);if(w.depthTexture.format===qs)ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===eo)ct(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ze(b){const w=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=pe}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,b)}else if(Z){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(w.__webglDepthbuffer[pe],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ye(w.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(b,w,Z){const pe=r.get(b);w!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ze(b)}function Pt(b){const w=b.texture,Z=r.get(b),pe=r.get(w);b.addEventListener("dispose",N);const _e=b.textures,he=b.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)Z.__webglFramebuffer[Ce][Oe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&ct(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];Z.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ft=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),ke=L(Oe.internalFormat,ft,Ee,Oe.colorSpace,b.isXRRenderTarget===!0),Qe=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ke,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Ce][Oe],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Me(Z.__webglFramebuffer[Ce],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=_e[Ce],Ee=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,ft),Me(Z.__webglFramebuffer,b,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),re(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Oe],b,w,s.COLOR_ATTACHMENT0,Ce,Oe);else Me(Z.__webglFramebuffer,b,w,s.COLOR_ATTACHMENT0,Ce,0);y(w)&&x(Ce),t.unbindTexture()}b.depthBuffer&&Ze(b)}function Rt(b){const w=b.textures;for(let Z=0,pe=w.length;Z<pe;Z++){const _e=w[Z];if(y(_e)){const he=U(b),We=r.get(_e).__webglTexture;t.bindTexture(he,We),x(he),t.unbindTexture()}}}const lt=[],z=[];function un(b){if(b.samples>0){if(ct(b)===!1){const w=b.textures,Z=b.width,pe=b.height;let _e=s.COLOR_BUFFER_BIT;const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(b),Ce=w.length>1;if(Ce)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(w[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),h===!0&&(lt.length=0,z.length=0,lt.push(s.COLOR_ATTACHMENT0+Oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(he),z.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(w[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const w=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const w=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(b){const w=c.render.frame;g.get(b)!==w&&(g.set(b,w),b.update())}function Tt(b,w){const Z=b.colorSpace,pe=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==to&&Z!==Sr&&(At.getTransfer(Z)===bt?(pe!==li||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=ge,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Ye,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function zE(s,e){function t(r,a=Sr){let l;const c=At.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ng)return s.BYTE;if(r===ig)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===og)return s.RGB;if(r===li)return s.RGBA;if(r===ag)return s.LUMINANCE;if(r===lg)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===eo)return s.DEPTH_STENCIL;if(r===ug)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===cg)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Ul||r===Il||r===Fl||r===Ol)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Cf||r===Rf||r===Pf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Af)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf||r===Lf||r===Df)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===bf||r===Lf)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Df)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nf||r===Uf||r===If||r===Ff||r===Of||r===zf||r===kf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===Yf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===jf||r===qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fg||r===$f||r===Kf||r===Zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const kE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ar({vertexShader:kE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends io{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,_=null,v=null,S=null,T=null;const C=new HE,y=t.getContextAttributes();let x=null,U=null;const L=[],P=[],W=new Ge;let F=null;const N=new Cn;N.viewport=new jt;const V=new Cn;V.viewport=new jt;const R=[N,V],E=new ux;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getHandSpace()};function ee(Q){const me=P.indexOf(Q.inputSource);if(me===-1)return;const Me=L[me];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,p||c),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ge);for(let Q=0;Q<L.length;Q++){const me=P[Q];me!==null&&(P[Q]=null,L[Q].disconnect(me))}G=null,le=null,C.reset(),e.setRenderTarget(x),S=null,v=null,_=null,a=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ye=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?eo:qs,ye=y.stencil?Qs:Jr);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ze),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Qr(v.textureWidth,v.textureHeight,{format:li,type:Wi,depthTexture:new wg(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Qr(S.framebufferWidth,S.framebufferHeight,{format:li,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}U.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ge(Q){for(let me=0;me<Q.removed.length;me++){const Me=Q.removed[me],ye=P.indexOf(Me);ye>=0&&(P[ye]=null,L[ye].disconnect(Me))}for(let me=0;me<Q.added.length;me++){const Me=Q.added[me];let ye=P.indexOf(Me);if(ye===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=P.length){P.push(Me),ye=Ze;break}else if(P[Ze]===null){P[Ze]=Me,ye=Ze;break}if(ye===-1)break}const Re=L[ye];Re&&Re.connect(Me)}}const oe=new Y,ce=new Y;function H(Q,me,Me){oe.setFromMatrixPosition(me.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ye=oe.distanceTo(ce),Re=me.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Ye=Re[14]/(Re[10]-1),Pt=Re[14]/(Re[10]+1),Rt=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],z=(Re[8]-1)/Re[0],un=(Ze[8]+1)/Ze[0],pt=Ye*z,ct=Ye*un,Ke=ye/(-z+un),Tt=Ke*-z;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=Ye+Ke,b=Pt+Ke,w=pt-Tt,Z=ct+(ye-Tt),pe=Rt*Pt/b*je,_e=lt*Pt/b*je;Q.projectionMatrix.makePerspective(w,Z,pe,_e,je,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let me=Q.near,Me=Q.far;C.texture!==null&&(C.depthNear>0&&(me=C.depthNear),C.depthFar>0&&(Me=C.depthFar)),E.near=V.near=N.near=me,E.far=V.far=N.far=Me,(G!==E.near||le!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),G=E.near,le=E.far),N.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,E.layers.mask=N.layers.mask|V.layers.mask;const ye=Q.parent,Re=E.cameras;ae(E,ye);for(let Ze=0;Ze<Re.length;Ze++)ae(Re[Ze],ye);Re.length===2?H(E,N,V):E.projectionMatrix.copy(N.projectionMatrix),se(Q,E,ye)};function se(Q,me,Me){Me===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Q){h=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)};let I=null;function re(Q,me){if(g=me.getViewerPose(p||c),T=me,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ye=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Ye=0;Ye<Me.length;Ye++){const Pt=Me[Ye];let Rt=null;if(S!==null)Rt=S.getViewport(Pt);else{const z=_.getViewSubImage(v,Pt);Rt=z.viewport,Ye===0&&(e.setRenderTargetTextures(U,z.colorTexture,v.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(U))}let lt=R[Ye];lt===void 0&&(lt=new Cn,lt.layers.enable(Ye),lt.viewport=new jt,R[Ye]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ye===0&&(E.matrix.copy(lt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(lt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ye=_.getDepthInformation(Me[0]);Ye&&Ye.isValid&&Ye.texture&&C.init(e,Ye,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ye=P[Me],Re=L[Me];ye!==null&&Re!==void 0&&Re.update(ye,me,p||c)}I&&I(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const Ue=new Pg;Ue.setAnimationLoop(re),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const Yr=new Xi,GE=new Ht;function WE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,xg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,U,L,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),g(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),C(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,U,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===In&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===In&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),L=U.envMap,P=U.envMapRotation;L&&(y.envMap.value=L,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(Yr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,U,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===In&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XE(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,L){const P=L.program;r.uniformBlockBinding(U,P)}function p(U,L){let P=a[U.id];P===void 0&&(T(U),P=g(U),a[U.id]=P,U.addEventListener("dispose",y));const W=L.program;r.updateUBOMapping(U,W);const F=e.render.frame;l[U.id]!==F&&(v(U),l[U.id]=F)}function g(U){const L=_();U.__bindingPointIndex=L;const P=s.createBuffer(),W=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,W,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const L=a[U.id],P=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,N=P.length;F<N;F++){const V=Array.isArray(P[F])?P[F]:[P[F]];for(let R=0,E=V.length;R<E;R++){const G=V[R];if(S(G,F,R,W)===!0){const le=G.__offset,ee=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let ge=0;ge<ee.length;ge++){const oe=ee[ge],ce=C(oe);typeof oe=="number"||typeof oe=="boolean"?(G.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,le+de,G.__data)):oe.isMatrix3?(G.__data[0]=oe.elements[0],G.__data[1]=oe.elements[1],G.__data[2]=oe.elements[2],G.__data[3]=0,G.__data[4]=oe.elements[3],G.__data[5]=oe.elements[4],G.__data[6]=oe.elements[5],G.__data[7]=0,G.__data[8]=oe.elements[6],G.__data[9]=oe.elements[7],G.__data[10]=oe.elements[8],G.__data[11]=0):(oe.toArray(G.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,L,P,W){const F=U.value,N=L+"_"+P;if(W[N]===void 0)return typeof F=="number"||typeof F=="boolean"?W[N]=F:W[N]=F.clone(),!0;{const V=W[N];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return W[N]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function T(U){const L=U.uniforms;let P=0;const W=16;for(let N=0,V=L.length;N<V;N++){const R=Array.isArray(L[N])?L[N]:[L[N]];for(let E=0,G=R.length;E<G;E++){const le=R[E],ee=Array.isArray(le.value)?le.value:[le.value];for(let de=0,ge=ee.length;de<ge;de++){const oe=ee[de],ce=C(oe),H=P%W,ae=H%ce.boundary,se=H+ae;P+=ae,se!==0&&W-se<ce.storage&&(P+=W-se),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=P,P+=ce.storage}}}const F=P%W;return F>0&&(P+=W-F),U.__size=P,U.__cache={},this}function C(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function x(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},l={}}return{bind:h,update:p,dispose:x}}class YE{constructor(e={}){const{canvas:t=d0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),C=new Int32Array(4);let y=null,x=null;const U=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Er,this.toneMappingExposure=1;const P=this;let W=!1,F=0,N=0,V=null,R=-1,E=null;const G=new jt,le=new jt;let ee=null;const de=new Ct(0);let ge=0,oe=t.width,ce=t.height,H=1,ae=null,se=null;const I=new jt(0,0,oe,ce),re=new jt(0,0,oe,ce);let Ue=!1;const Q=new Tg;let me=!1,Me=!1;this.transmissionResolutionScale=1;const ye=new Ht,Re=new Ht,Ze=new Y,Ye=new jt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return V===null?H:1}let z=r;function un(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const j="webgl2";if(z=un(j,A),z===null)throw un(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,Ke,Tt,je,b,w,Z,pe,_e,he,We,Ce,Oe,ft,Ee,ke,Qe,rt,ze,B,ue,Pe,O;function Te(){pt=new nM(z),pt.init(),ue=new zE(z,pt),ct=new KS(z,pt,e,ue),Ke=new FE(z,pt),ct.reverseDepthBuffer&&v&&Ke.buffers.depth.setReversed(!0),Tt=new sM(z),je=new EE,b=new OE(z,pt,Ke,je,ct,ue,Tt),w=new JS(P),Z=new tM(P),pe=new dx(z),Pe=new qS(z,pe),_e=new iM(z,pe,Tt,Pe),he=new aM(z,_e,pe,Tt),rt=new oM(z,ct,b),Ee=new ZS(je),We=new ME(P,w,Z,pt,ct,Pe,Ee),Ce=new WE(P,je),Oe=new wE,ft=new LE(pt),Qe=new jS(P,w,Z,Ke,he,S,h),ke=new UE(P,he,ct),O=new XE(z,Tt,ct,Ke),ze=new $S(z,pt,Tt),B=new rM(z,pt,Tt),Tt.programs=We.programs,P.capabilities=ct,P.extensions=pt,P.properties=je,P.renderLists=Oe,P.shadowMap=ke,P.state=Ke,P.info=Tt}Te();const ie=new VE(P,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,j,te=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=j,t.width=Math.floor(A*H),t.height=Math.floor(j*H),te===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(oe*H,ce*H).floor()},this.setDrawingBufferSize=function(A,j,te){oe=A,ce=j,H=te,t.width=Math.floor(A*te),t.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,j,te,K){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,j,te,K),Ke.viewport(G.copy(I).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,j,te,K){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,te,K),Ke.scissor(le.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ke.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,j=!0,te=!0){let K=0;if(A){let q=!1;if(V!==null){const we=V.texture.format;q=we===fd||we===cd||we===ud}if(q){const we=V.texture.type,Le=we===Wi||we===Jr||we===qo||we===Qs||we===ad||we===ld,Ie=Qe.getClearColor(),He=Qe.getClearAlpha(),ot=Ie.r,st=Ie.g,Xe=Ie.b;Le?(T[0]=ot,T[1]=st,T[2]=Xe,T[3]=He,z.clearBufferuiv(z.COLOR,0,T)):(C[0]=ot,C[1]=st,C[2]=Xe,C[3]=He,z.clearBufferiv(z.COLOR,0,C))}else K|=z.COLOR_BUFFER_BIT}j&&(K|=z.DEPTH_BUFFER_BIT),te&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Qe.dispose(),Oe.dispose(),ft.dispose(),je.dispose(),w.dispose(),Z.dispose(),he.dispose(),Pe.dispose(),O.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ts),ie.removeEventListener("sessionend",ji),Mi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=Tt.autoReset,j=ke.enabled,te=ke.autoUpdate,K=ke.needsUpdate,q=ke.type;Te(),Tt.autoReset=A,ke.enabled=j,ke.autoUpdate=te,ke.needsUpdate=K,ke.type=q}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const j=A.target;j.removeEventListener("dispose",et),xt(j)}function xt(A){Ut(A),je.remove(A)}function Ut(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(te){We.releaseProgram(te)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,K,q,we){j===null&&(j=Pt);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ie=ta(A,j,te,K,q);Ke.setMaterial(K,Le);let He=te.index,ot=1;if(K.wireframe===!0){if(He=_e.getWireframeAttribute(te),He===void 0)return;ot=2}const st=te.drawRange,Xe=te.attributes.position;let yt=st.start*ot,ut=(st.start+st.count)*ot;we!==null&&(yt=Math.max(yt,we.start*ot),ut=Math.min(ut,(we.start+we.count)*ot)),He!==null?(yt=Math.max(yt,0),ut=Math.min(ut,He.count)):Xe!=null&&(yt=Math.max(yt,0),ut=Math.min(ut,Xe.count));const Vt=ut-yt;if(Vt<0||Vt===1/0)return;Pe.setup(q,K,Ie,te,He);let Ot,St=ze;if(He!==null&&(Ot=pe.get(He),St=B,St.setIndex(Ot)),q.isMesh)K.wireframe===!0?(Ke.setLineWidth(K.wireframeLinewidth*lt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(q.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*lt()),q.isLineSegments?St.setMode(z.LINES):q.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else q.isPoints?St.setMode(z.POINTS):q.isSprite&&St.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)St.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Gt=q._multiDrawCounts,vt=q._multiDrawCount,pn=He?pe.get(He).bytesPerElement:1,$i=je.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<vt;Mn++)$i.setValue(z,"_gl_DrawID",Mn),St.render(Je[Mn]/pn,Gt[Mn])}else if(q.isInstancedMesh)St.renderInstances(yt,Vt,q.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Gt=Math.min(te.instanceCount,Je);St.renderInstances(yt,Vt,Gt)}else St.render(yt,Vt)};function mt(A,j,te){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,ns(A,j,te),A.side=wr,A.needsUpdate=!0,ns(A,j,te),A.side=Bi):ns(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),x=ft.get(te),x.init(j),L.push(x),te.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),A!==te&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ie=we[Le];mt(Ie,te,q),K.add(Ie)}else mt(we,te,q),K.add(we)}),L.pop(),x=null,K},this.compileAsync=function(A,j,te=null){const K=this.compile(A,j,te);return new Promise(q=>{function we(){if(K.forEach(function(Le){je.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){q(A);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let qt=null;function $t(A){qt&&qt(A)}function ts(){Mi.stop()}function ji(){Mi.start()}const Mi=new Pg;Mi.setAnimationLoop($t),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){qt=A,ie.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ie.addEventListener("sessionstart",ts),ie.addEventListener("sessionend",ji),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(j),j=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,j,V),x=ft.get(A,L.length),x.init(j),L.push(x),Re.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Re),Me=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,Me),y=Oe.get(A,U.length),y.init(),U.push(y),ie.enabled===!0&&ie.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&Ei(we,j,-1/0,P.sortObjects)}Ei(A,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ae,se),Rt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Rt&&Qe.addToRenderList(y,A),this.info.render.frame++,me===!0&&Ee.beginShadows();const te=x.state.shadowsArray;ke.render(te,A,j),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,q=y.transmissive;if(x.setupLights(),j.isArrayCamera){const we=j.cameras;if(q.length>0)for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Rr(K,q,A,He)}Rt&&Qe.render(A);for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Cr(y,A,He,He.viewport)}}else q.length>0&&Rr(K,q,A,j),Rt&&Qe.render(A),Cr(y,A,j);V!==null&&N===0&&(b.updateMultisampleRenderTarget(V),b.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(P,A,j),Pe.resetDefaultState(),R=-1,E=null,L.pop(),L.length>0?(x=L[L.length-1],me===!0&&Ee.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ei(A,j,te,K){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Le=he.update(A),Ie=A.material;Ie.visible&&y.push(A,Le,Ie,te,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Le=he.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ie)){const He=Le.groups;for(let ot=0,st=He.length;ot<st;ot++){const Xe=He[ot],yt=Ie[Xe.materialIndex];yt&&yt.visible&&y.push(A,Le,yt,te,Ye.z,Xe)}}else Ie.visible&&y.push(A,Le,Ie,te,Ye.z,null)}}const we=A.children;for(let Le=0,Ie=we.length;Le<Ie;Le++)Ei(we[Le],j,te,K)}function Cr(A,j,te,K){const q=A.opaque,we=A.transmissive,Le=A.transparent;x.setupLightsView(te),me===!0&&Ee.setGlobalState(P.clippingPlanes,te),K&&Ke.viewport(G.copy(K)),q.length>0&&qi(q,j,te),we.length>0&&qi(we,j,te),Le.length>0&&qi(Le,j,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Rr(A,j,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new Qr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?$o:Wi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=x.state.transmissionRenderTarget[K.id],Le=K.viewport||G;we.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);const Ie=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(de),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&Qe.render(te);const He=P.toneMapping;P.toneMapping=Er;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),me===!0&&Ee.setGlobalState(P.clippingPlanes,K),qi(A,te,K),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,yt=j.length;Xe<yt;Xe++){const ut=j[Xe],Vt=ut.object,Ot=ut.geometry,St=ut.material,Je=ut.group;if(St.side===Bi&&Vt.layers.test(K.layers)){const Gt=St.side;St.side=In,St.needsUpdate=!0,Qo(Vt,te,K,Ot,St,Je),St.side=Gt,St.needsUpdate=!0,st=!0}}st===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}P.setRenderTarget(Ie),P.setClearColor(de,ge),ot!==void 0&&(K.viewport=ot),P.toneMapping=He}function qi(A,j,te){const K=j.isScene===!0?j.overrideMaterial:null;for(let q=0,we=A.length;q<we;q++){const Le=A[q],Ie=Le.object,He=Le.geometry,ot=K===null?Le.material:K,st=Le.group;Ie.layers.test(te.layers)&&Qo(Ie,j,te,He,ot,st)}}function Qo(A,j,te,K,q,we){A.onBeforeRender(P,j,te,K,q,we),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(P,j,te,K,A,we),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=In,q.needsUpdate=!0,P.renderBufferDirect(te,j,K,q,A,we),q.side=wr,q.needsUpdate=!0,P.renderBufferDirect(te,j,K,q,A,we),q.side=Bi):P.renderBufferDirect(te,j,K,q,A,we),A.onAfterRender(P,j,te,K,q,we)}function ns(A,j,te){j.isScene!==!0&&(j=Pt);const K=je.get(A),q=x.state.lights,we=x.state.shadowsArray,Le=q.state.version,Ie=We.getParameters(A,q.state,we,j,te),He=We.getProgramCacheKey(Ie);let ot=K.programs;K.environment=A.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",et),ot=new Map,K.programs=ot);let st=ot.get(He);if(st!==void 0){if(K.currentProgram===st&&K.lightsStateVersion===Le)return di(A,Ie),st}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,P),st=We.acquireProgram(Ie,He),ot.set(He,st),K.uniforms=Ie.uniforms;const Xe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),di(A,Ie),K.needsLights=Kl(A),K.lightsStateVersion=Le,K.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=st,K.uniformsList=null,st}function ea(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Bl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function di(A,j){const te=je.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function ta(A,j,te,K,q){j.isScene!==!0&&(j=Pt),b.resetTextureUnits();const we=j.fog,Le=K.isMeshStandardMaterial?j.environment:null,Ie=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:to,He=(K.isMeshStandardMaterial?Z:w).get(K.envMap||Le),ot=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,ut=!!te.morphAttributes.color;let Vt=Er;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Vt=P.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,St=Ot!==void 0?Ot.length:0,Je=je.get(K),Gt=x.state.lights;if(me===!0&&(Me===!0||A!==E)){const cn=A===E&&K.id===R;Ee.setState(K,A,cn)}let vt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==Ie||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==st||Je.morphTargets!==Xe||Je.morphNormals!==yt||Je.morphColors!==ut||Je.toneMapping!==Vt||Je.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Je.__version=K.version);let pn=Je.currentProgram;vt===!0&&(pn=ns(K,j,q));let $i=!1,Mn=!1,Ti=!1;const Dt=pn.getUniforms(),mn=Je.uniforms;if(Ke.useProgram(pn.program)&&($i=!0,Mn=!0,Ti=!0),K.id!==R&&(R=K.id,Mn=!0),$i||E!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),p0(ye),m0(ye),Dt.setValue(z,"projectionMatrix",ye)):Dt.setValue(z,"projectionMatrix",A.projectionMatrix),Dt.setValue(z,"viewMatrix",A.matrixWorldInverse);const rn=Dt.map.cameraPosition;rn!==void 0&&rn.setValue(z,Ze.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Mn=!0,Ti=!0)}if(q.isSkinnedMesh){Dt.setOptional(z,q,"bindMatrix"),Dt.setOptional(z,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Dt.setValue(z,"boneTexture",cn.boneTexture,b))}q.isBatchedMesh&&(Dt.setOptional(z,q,"batchingTexture"),Dt.setValue(z,"batchingTexture",q._matricesTexture,b),Dt.setOptional(z,q,"batchingIdTexture"),Dt.setValue(z,"batchingIdTexture",q._indirectTexture,b),Dt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(z,"batchingColorTexture",q._colorsTexture,b));const nn=te.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&rt.update(q,te,pn),(Mn||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Dt.setValue(z,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(mn.envMap.value=He,mn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),Mn&&(Dt.setValue(z,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&na(mn,Ti),we&&K.fog===!0&&Ce.refreshFogUniforms(mn,we),Ce.refreshMaterialUniforms(mn,K,H,ce,x.state.transmissionRenderTarget[A.id]),Bl.upload(z,ea(Je),mn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Bl.upload(z,ea(Je),mn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(z,"center",q.center),Dt.setValue(z,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(z,"normalMatrix",q.normalMatrix),Dt.setValue(z,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const cn=K.uniformsGroups;for(let rn=0,Mt=cn.length;rn<Mt;rn++){const hi=cn[rn];O.update(hi,pn),O.bind(hi,pn)}}return pn}function na(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Kl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,j,te){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=te;const K=je.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=te===void 0,K.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const te=je.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0};const ia=z.createFramebuffer();this.setRenderTarget=function(A,j=0,te=0){V=A,F=j,N=te;let K=!0,q=null,we=!1,Le=!1;if(A){const He=je.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(He.__hasExternalTextures)b.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Le=!0);const st=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[j])?q=st[j][te]:q=st[j],we=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?q=je.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?q=st[te]:q=st,G.copy(A.viewport),le.copy(A.scissor),ee=A.scissorTest}else G.copy(I).multiplyScalar(H).floor(),le.copy(re).multiplyScalar(H).floor(),ee=Ue;if(te!==0&&(q=ia),Ke.bindFramebuffer(z.FRAMEBUFFER,q)&&K&&Ke.drawBuffers(A,q),Ke.viewport(G),Ke.scissor(le),Ke.setScissorTest(ee),we){const He=je.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,te)}else if(Le){const He=je.get(A.texture),ot=j;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,te,ot)}else if(A!==null&&te!==0){const He=je.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,te)}R=-1},this.readRenderTargetPixels=function(A,j,te,K,q,we,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){Ke.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-K&&te>=0&&te<=A.height-q&&z.readPixels(j,te,K,q,ue.convert(ot),ue.convert(st),we)}finally{const He=V!==null?je.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,K,q,we,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-K&&te>=0&&te<=A.height-q){Ke.bindFramebuffer(z.FRAMEBUFFER,Ie);const Xe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(j,te,K,q,ue.convert(ot),ue.convert(st),0);const yt=V!==null?je.get(V).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,yt);const ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await h0(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Xe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(Xe),z.deleteSync(ut),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,te=0){A.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-te),q=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Le=j!==null?j.x:0,Ie=j!==null?j.y:0;b.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Le,Ie,q,we),Ke.unbindTexture()};const ra=z.createFramebuffer(),sa=z.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,K=null,q=0,we=null){A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],j=arguments[2],we=arguments[3]||0,te=null),we===null&&(q!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=q,q=0):we=0);let Le,Ie,He,ot,st,Xe,yt,ut,Vt;const Ot=A.isCompressedTexture?A.mipmaps[we]:A.image;if(te!==null)Le=te.max.x-te.min.x,Ie=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,st=te.min.y,Xe=te.isBox3?te.min.z:0;else{const nn=Math.pow(2,-q);Le=Math.floor(Ot.width*nn),Ie=Math.floor(Ot.height*nn),A.isDataArrayTexture?He=Ot.depth:A.isData3DTexture?He=Math.floor(Ot.depth*nn):He=1,ot=0,st=0,Xe=0}K!==null?(yt=K.x,ut=K.y,Vt=K.z):(yt=0,ut=0,Vt=0);const St=ue.convert(j.format),Je=ue.convert(j.type);let Gt;j.isData3DTexture?(b.setTexture3D(j,0),Gt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Gt=z.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Gt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=z.getParameter(z.UNPACK_ROW_LENGTH),pn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$i=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),Ti=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,st),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe);const Dt=A.isDataArrayTexture||A.isData3DTexture,mn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const nn=je.get(A),cn=je.get(j),rn=je.get(nn.__renderTarget),Mt=je.get(cn.__renderTarget);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let hi=0;hi<He;hi++)Dt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(A).__webglTexture,q,Xe+hi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.get(j).__webglTexture,we,Vt+hi)),z.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||je.has(A)){const nn=je.get(A),cn=je.get(j);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,ra),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,sa);for(let rn=0;rn<He;rn++)Dt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,q,Xe+rn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,q),mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,we,Vt+rn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,we),q!==0?z.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):mn?z.copyTexSubImage3D(Gt,we,yt,ut,Vt+rn,ot,st,Le,Ie):z.copyTexSubImage2D(Gt,we,yt,ut,ot,st,Le,Ie);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else mn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Ot.data):z.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,we,yt,ut,Ot.width,Ot.height,St,Ot.data):z.texSubImage2D(z.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$i),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ti),we===0&&j.generateMipmaps&&z.generateMipmap(Gt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,j,te=null,K=null,q=0){return A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,K=arguments[1]||null,A=arguments[2],j=arguments[3],q=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,te,K,q)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){F=0,N=0,V=null,Ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}var jE=Object.defineProperty,qE=(s,e,t)=>e in s?jE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,$E=(s,e,t)=>(qE(s,e+"",t),t);class KE{constructor(){$E(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}var ZE=Object.defineProperty,JE=(s,e,t)=>e in s?ZE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,it=(s,e,t)=>(JE(s,typeof e!="symbol"?e+"":e,t),t);const Nl=new hd,qm=new ki,QE=Math.cos(70*(Math.PI/180)),$m=(s,e)=>(s%e+e)%e;class eT extends KE{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new Y),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN}),it(this,"touches",{ONE:As.ROTATE,TWO:As.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=B=>{let ue=$m(B,2*Math.PI),Pe=g.phi;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),_.phi=ue-Pe,r.update()},this.setAzimuthalAngle=B=>{let ue=$m(B,2*Math.PI),Pe=g.theta;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),_.theta=ue-Pe,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=B=>{B.addEventListener("keydown",Ce),this._domElementKeyEvents=B},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(a),r.update(),h=f.NONE},this.update=(()=>{const B=new Y,ue=new Y(0,1,0),Pe=new es().setFromUnitVectors(e.up,ue),O=Pe.clone().invert(),Te=new Y,ie=new es,fe=2*Math.PI;return function(){const be=r.object.position;Pe.setFromUnitVectors(e.up,ue),O.copy(Pe).invert(),B.copy(be).sub(r.target),B.applyQuaternion(Pe),g.setFromVector3(B),r.autoRotate&&h===f.NONE&&de(le()),r.enableDamping?(g.theta+=_.theta*r.dampingFactor,g.phi+=_.phi*r.dampingFactor):(g.theta+=_.theta,g.phi+=_.phi);let et=r.minAzimuthAngle,xt=r.maxAzimuthAngle;isFinite(et)&&isFinite(xt)&&(et<-Math.PI?et+=fe:et>Math.PI&&(et-=fe),xt<-Math.PI?xt+=fe:xt>Math.PI&&(xt-=fe),et<=xt?g.theta=Math.max(et,Math.min(xt,g.theta)):g.theta=g.theta>(et+xt)/2?Math.max(et,g.theta):Math.min(xt,g.theta)),g.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,g.phi)),g.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(S,r.dampingFactor):r.target.add(S),r.zoomToCursor&&R||r.object.isOrthographicCamera?g.radius=Ue(g.radius):g.radius=Ue(g.radius*v),B.setFromSpherical(g),B.applyQuaternion(O),be.copy(r.target).add(B),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),r.enableDamping===!0?(_.theta*=1-r.dampingFactor,_.phi*=1-r.dampingFactor,S.multiplyScalar(1-r.dampingFactor)):(_.set(0,0,0),S.set(0,0,0));let Ut=!1;if(r.zoomToCursor&&R){let mt=null;if(r.object instanceof Cn&&r.object.isPerspectiveCamera){const qt=B.length();mt=Ue(qt*v);const $t=qt-mt;r.object.position.addScaledVector(N,$t),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qt=new Y(V.x,V.y,0);qt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/v)),r.object.updateProjectionMatrix(),Ut=!0;const $t=new Y(V.x,V.y,0);$t.unproject(r.object),r.object.position.sub($t).add(qt),r.object.updateMatrixWorld(),mt=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;mt!==null&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(mt).add(r.object.position):(Nl.origin.copy(r.object.position),Nl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Nl.direction))<QE?e.lookAt(r.target):(qm.setFromNormalAndCoplanarPoint(r.object.up,r.target),Nl.intersectPlane(qm,r.target))))}else r.object instanceof kl&&r.object.isOrthographicCamera&&(Ut=v!==1,Ut&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/v)),r.object.updateProjectionMatrix()));return v=1,R=!1,Ut||Te.distanceToSquared(r.object.position)>p||8*(1-ie.dot(r.object.quaternion))>p?(r.dispatchEvent(a),Te.copy(r.object.position),ie.copy(r.object.quaternion),Ut=!1,!0):!1}})(),this.connect=B=>{r.domElement=B,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",Ee),r.domElement.addEventListener("pointerdown",w),r.domElement.addEventListener("pointercancel",pe),r.domElement.addEventListener("wheel",We)},this.dispose=()=>{var B,ue,Pe,O,Te,ie;r.domElement&&(r.domElement.style.touchAction="auto"),(B=r.domElement)==null||B.removeEventListener("contextmenu",Ee),(ue=r.domElement)==null||ue.removeEventListener("pointerdown",w),(Pe=r.domElement)==null||Pe.removeEventListener("pointercancel",pe),(O=r.domElement)==null||O.removeEventListener("wheel",We),(Te=r.domElement)==null||Te.ownerDocument.removeEventListener("pointermove",Z),(ie=r.domElement)==null||ie.ownerDocument.removeEventListener("pointerup",pe),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Ce)};const r=this,a={type:"change"},l={type:"start"},c={type:"end"},f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=f.NONE;const p=1e-6,g=new Mm,_=new Mm;let v=1;const S=new Y,T=new Ge,C=new Ge,y=new Ge,x=new Ge,U=new Ge,L=new Ge,P=new Ge,W=new Ge,F=new Ge,N=new Y,V=new Ge;let R=!1;const E=[],G={};function le(){return 2*Math.PI/60/60*r.autoRotateSpeed}function ee(){return Math.pow(.95,r.zoomSpeed)}function de(B){r.reverseOrbit||r.reverseHorizontalOrbit?_.theta+=B:_.theta-=B}function ge(B){r.reverseOrbit||r.reverseVerticalOrbit?_.phi+=B:_.phi-=B}const oe=(()=>{const B=new Y;return function(Pe,O){B.setFromMatrixColumn(O,0),B.multiplyScalar(-Pe),S.add(B)}})(),ce=(()=>{const B=new Y;return function(Pe,O){r.screenSpacePanning===!0?B.setFromMatrixColumn(O,1):(B.setFromMatrixColumn(O,0),B.crossVectors(r.object.up,B)),B.multiplyScalar(Pe),S.add(B)}})(),H=(()=>{const B=new Y;return function(Pe,O){const Te=r.domElement;if(Te&&r.object instanceof Cn&&r.object.isPerspectiveCamera){const ie=r.object.position;B.copy(ie).sub(r.target);let fe=B.length();fe*=Math.tan(r.object.fov/2*Math.PI/180),oe(2*Pe*fe/Te.clientHeight,r.object.matrix),ce(2*O*fe/Te.clientHeight,r.object.matrix)}else Te&&r.object instanceof kl&&r.object.isOrthographicCamera?(oe(Pe*(r.object.right-r.object.left)/r.object.zoom/Te.clientWidth,r.object.matrix),ce(O*(r.object.top-r.object.bottom)/r.object.zoom/Te.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ae(B){r.object instanceof Cn&&r.object.isPerspectiveCamera||r.object instanceof kl&&r.object.isOrthographicCamera?v=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function se(B){ae(v/B)}function I(B){ae(v*B)}function re(B){if(!r.zoomToCursor||!r.domElement)return;R=!0;const ue=r.domElement.getBoundingClientRect(),Pe=B.clientX-ue.left,O=B.clientY-ue.top,Te=ue.width,ie=ue.height;V.x=Pe/Te*2-1,V.y=-(O/ie)*2+1,N.set(V.x,V.y,1).unproject(r.object).sub(r.object.position).normalize()}function Ue(B){return Math.max(r.minDistance,Math.min(r.maxDistance,B))}function Q(B){T.set(B.clientX,B.clientY)}function me(B){re(B),P.set(B.clientX,B.clientY)}function Me(B){x.set(B.clientX,B.clientY)}function ye(B){C.set(B.clientX,B.clientY),y.subVectors(C,T).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),T.copy(C),r.update()}function Re(B){W.set(B.clientX,B.clientY),F.subVectors(W,P),F.y>0?se(ee()):F.y<0&&I(ee()),P.copy(W),r.update()}function Ze(B){U.set(B.clientX,B.clientY),L.subVectors(U,x).multiplyScalar(r.panSpeed),H(L.x,L.y),x.copy(U),r.update()}function Ye(B){re(B),B.deltaY<0?I(ee()):B.deltaY>0&&se(ee()),r.update()}function Pt(B){let ue=!1;switch(B.code){case r.keys.UP:H(0,r.keyPanSpeed),ue=!0;break;case r.keys.BOTTOM:H(0,-r.keyPanSpeed),ue=!0;break;case r.keys.LEFT:H(r.keyPanSpeed,0),ue=!0;break;case r.keys.RIGHT:H(-r.keyPanSpeed,0),ue=!0;break}ue&&(B.preventDefault(),r.update())}function Rt(){if(E.length==1)T.set(E[0].pageX,E[0].pageY);else{const B=.5*(E[0].pageX+E[1].pageX),ue=.5*(E[0].pageY+E[1].pageY);T.set(B,ue)}}function lt(){if(E.length==1)x.set(E[0].pageX,E[0].pageY);else{const B=.5*(E[0].pageX+E[1].pageX),ue=.5*(E[0].pageY+E[1].pageY);x.set(B,ue)}}function z(){const B=E[0].pageX-E[1].pageX,ue=E[0].pageY-E[1].pageY,Pe=Math.sqrt(B*B+ue*ue);P.set(0,Pe)}function un(){r.enableZoom&&z(),r.enablePan&&lt()}function pt(){r.enableZoom&&z(),r.enableRotate&&Rt()}function ct(B){if(E.length==1)C.set(B.pageX,B.pageY);else{const Pe=ze(B),O=.5*(B.pageX+Pe.x),Te=.5*(B.pageY+Pe.y);C.set(O,Te)}y.subVectors(C,T).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),T.copy(C)}function Ke(B){if(E.length==1)U.set(B.pageX,B.pageY);else{const ue=ze(B),Pe=.5*(B.pageX+ue.x),O=.5*(B.pageY+ue.y);U.set(Pe,O)}L.subVectors(U,x).multiplyScalar(r.panSpeed),H(L.x,L.y),x.copy(U)}function Tt(B){const ue=ze(B),Pe=B.pageX-ue.x,O=B.pageY-ue.y,Te=Math.sqrt(Pe*Pe+O*O);W.set(0,Te),F.set(0,Math.pow(W.y/P.y,r.zoomSpeed)),se(F.y),P.copy(W)}function je(B){r.enableZoom&&Tt(B),r.enablePan&&Ke(B)}function b(B){r.enableZoom&&Tt(B),r.enableRotate&&ct(B)}function w(B){var ue,Pe;r.enabled!==!1&&(E.length===0&&((ue=r.domElement)==null||ue.ownerDocument.addEventListener("pointermove",Z),(Pe=r.domElement)==null||Pe.ownerDocument.addEventListener("pointerup",pe)),ke(B),B.pointerType==="touch"?Oe(B):_e(B))}function Z(B){r.enabled!==!1&&(B.pointerType==="touch"?ft(B):he(B))}function pe(B){var ue,Pe,O;Qe(B),E.length===0&&((ue=r.domElement)==null||ue.releasePointerCapture(B.pointerId),(Pe=r.domElement)==null||Pe.ownerDocument.removeEventListener("pointermove",Z),(O=r.domElement)==null||O.ownerDocument.removeEventListener("pointerup",pe)),r.dispatchEvent(c),h=f.NONE}function _e(B){let ue;switch(B.button){case 0:ue=r.mouseButtons.LEFT;break;case 1:ue=r.mouseButtons.MIDDLE;break;case 2:ue=r.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case ws.DOLLY:if(r.enableZoom===!1)return;me(B),h=f.DOLLY;break;case ws.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(r.enablePan===!1)return;Me(B),h=f.PAN}else{if(r.enableRotate===!1)return;Q(B),h=f.ROTATE}break;case ws.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(r.enableRotate===!1)return;Q(B),h=f.ROTATE}else{if(r.enablePan===!1)return;Me(B),h=f.PAN}break;default:h=f.NONE}h!==f.NONE&&r.dispatchEvent(l)}function he(B){if(r.enabled!==!1)switch(h){case f.ROTATE:if(r.enableRotate===!1)return;ye(B);break;case f.DOLLY:if(r.enableZoom===!1)return;Re(B);break;case f.PAN:if(r.enablePan===!1)return;Ze(B);break}}function We(B){r.enabled===!1||r.enableZoom===!1||h!==f.NONE&&h!==f.ROTATE||(B.preventDefault(),r.dispatchEvent(l),Ye(B),r.dispatchEvent(c))}function Ce(B){r.enabled===!1||r.enablePan===!1||Pt(B)}function Oe(B){switch(rt(B),E.length){case 1:switch(r.touches.ONE){case As.ROTATE:if(r.enableRotate===!1)return;Rt(),h=f.TOUCH_ROTATE;break;case As.PAN:if(r.enablePan===!1)return;lt(),h=f.TOUCH_PAN;break;default:h=f.NONE}break;case 2:switch(r.touches.TWO){case As.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;un(),h=f.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;pt(),h=f.TOUCH_DOLLY_ROTATE;break;default:h=f.NONE}break;default:h=f.NONE}h!==f.NONE&&r.dispatchEvent(l)}function ft(B){switch(rt(B),h){case f.TOUCH_ROTATE:if(r.enableRotate===!1)return;ct(B),r.update();break;case f.TOUCH_PAN:if(r.enablePan===!1)return;Ke(B),r.update();break;case f.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;je(B),r.update();break;case f.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;b(B),r.update();break;default:h=f.NONE}}function Ee(B){r.enabled!==!1&&B.preventDefault()}function ke(B){E.push(B)}function Qe(B){delete G[B.pointerId];for(let ue=0;ue<E.length;ue++)if(E[ue].pointerId==B.pointerId){E.splice(ue,1);return}}function rt(B){let ue=G[B.pointerId];ue===void 0&&(ue=new Ge,G[B.pointerId]=ue),ue.set(B.pageX,B.pageY)}function ze(B){const ue=B.pointerId===E[0].pointerId?E[1]:E[0];return G[ue.pointerId]}this.dollyIn=(B=ee())=>{I(B),r.update()},this.dollyOut=(B=ee())=>{se(B),r.update()},this.getScale=()=>v,this.setScale=B=>{ae(B),r.update()},this.getZoomScale=()=>ee(),t!==void 0&&this.connect(t),this.update()}}function tT(s){s&&(s.innerHTML="");const e=new B0;e.background=new Ct("#242424");const t=new Cn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=125;const r=new YE({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.gammaOutput=!0,r.shadowMap.enabled=!0,s.appendChild(r.domElement);const a=new eT(t,r.domElement);a.enableDamping=!0,a.dampingFactor=.25,a.screenSpacePanning=!1;const l=new Ge,c=new cx,f=new ki,h=new Y;return{scene:e,camera:t,renderer:r,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:{modes:{removeNode:!1,addEdge:!1,removeEdge:!1,selectStart:!1},selectedAlgo:"prim",algoHints:[],algoSteps:[],clickedNode:null,isPlaying:!1,lastStep:0,selectedNodes:[]}}}const Ug=(s,e,t)=>t.find(a=>{const l=a.geometry.parameters.path.points;return l[0].equals(s.position)&&l[1].equals(e.position)||l[0].equals(e.position)&&l[1].equals(s.position)})||null,nT=s=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");return t.clearRect(0,0,e.width,e.height),t.fillStyle="#FFE153",t.font="60px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(s.toString(),32,32),new X0(e)};function Ig(s,e){const t=Math.round(s.position.distanceTo(e.position)/5),r=new Cg([s.position,e.position]),a=new _d(r,20,.4,8,!1),l=new jl({color:"#3B3B3B",transparent:!0,opacity:.8}),c=new ui(a,l),f=nT(t),h=new Mg({map:f,transparent:!0}),p=new V0(h),g=r.getPointAt(.5);return p.position.copy(g),p.scale.set(5,5,1),c.sprite=p,c.userData={nodeA:s,nodeB:e,weight:t},c}function nd(s,e,t){const[r,a]=t;if(!Ug(r,a,e)){const l=Ig(r,a);s.add(l),s.add(l.sprite),e.push(l)}}function iT(s){const{nodeA:e,nodeB:t}=s.userData,r=Ig(e,t);s.geometry.dispose(),s.geometry=r.geometry,s.sprite.position.copy(r.sprite.position),s.sprite.material.map.dispose(),s.sprite.material.map=r.sprite.material.map,s.userData.weight=r.userData.weight}function rT(s,e,t){const[r,a]=t,l=Ug(r,a,e);if(l){s.remove(l),s.remove(l.sprite);const c=e.indexOf(l);c>-1&&e.splice(c,1)}}const sT=(s,e,t)=>{const r=new gd(5,32,32),a=new jl({color:"#02C874",transparent:!0,opacity:.9}),l=new ui(r,a);return l.position.set(s,e,t),l.userData.start=!1,l};function Hl(s,e,t=Math.random()*80-40,r=Math.random()*80-40,a=Math.random()*80-40){const l=sT(t,r,a);s.add(l),e.push(l)}function oT(s,e,t,r){s.remove(r);const a=e.indexOf(r);a>-1&&e.splice(a,1);for(let l=t.length-1;l>=0;l--){const{nodeA:c,nodeB:f}=t[l].userData;(c===r||f===r)&&(s.remove(t[l]),s.remove(t[l].sprite),t.splice(l,1))}}function aT(s,e){if(e.userData.start){e.userData.start=!1,e.material.color.set("#02C874"),e.userData.originalColor=e.material.color.clone();return}for(let t=0;t<s.length;t++)if(s[t].userData.start){s[t].userData.start=!1,s[t].material.color.set("#02C874"),s[t].userData.originalColor=s[t].material.color.clone();break}e.userData.start=!0,e.material.color.set("#FF0000"),e.userData.originalColor=e.material.color.clone()}function Km(s,e){e.forEach(t=>{t.userData.originalColor&&t.material.color.copy(t.userData.originalColor)});for(let t=0;t<s;t++)e[t].userData.originalColor||(e[t].userData.originalColor=e[t].material.color.clone()),e[t].userData.weight?e[t].material.color.set("#FFFFFF"):e[t].material.color.set("#007BFF")}function Zm(s,e){return e.includes(s)?(e.splice(e.indexOf(s),1),s.material.color.copy(s.userData.originalColor)):(e.push(s),s.userData.originalColor=s.material.color.clone(),s.material.color.set("#F3FF9A")),e.length}function Jm(s){s.forEach(e=>{e.userData.originalColor&&e.material.color.copy(e.userData.originalColor)}),s.length=0}function lT(s,e,t,r=!1,a=9,l=4,c=80){const f=c+(Math.random()*10-5),h=c*.7+(Math.random()*10-5);for(let p=0;p<a-2;p++){const g=p/(a-2)*Math.PI*2,_=f*Math.cos(g)+(Math.random()*6-3),v=h*Math.sin(g)+(Math.random()*6-3),S=Math.random()*40-10;Hl(s,e,_,v,S)}if(r){const p=Math.floor(Math.random()*(a-2)),g=e[p];g.material.color.set("#FF0000"),g.userData.start=!0}for(let p=0;p<a-2;p++)nd(s,t,[e[p],e[(p+1)%(a-2)]]);Hl(s,e,10+Math.random()*30,Math.random()*20-10,Math.random()*20-10),Hl(s,e,-10-Math.random()*30,Math.random()*20-10,Math.random()*20-10);for(let p=a-2;p<a;p++){const g=[];for(let _=0;_<e.length;_++)_!==p&&g.push({index:_,distance:e[p].position.distanceTo(e[_].position)});g.sort((_,v)=>_.distance-v.distance);for(let _=0;_<Math.min(l,g.length);_++)nd(s,t,[e[p],e[g[_].index]])}}const uT=(s,e,t,r)=>{const a=s.find(c=>c.userData&&c.userData.start);if(!a)return;const l=new Set;for(l.add(a),t.push(a),r.push("primStart");l.size<s.length;){const c=e.filter(_=>{const{nodeA:v,nodeB:S}=_.userData;return l.has(v)!==l.has(S)});if(c.length===0)break;const f=c.reduce((_,v)=>{const S=_.userData.weight||0;return(v.userData.weight||0)<S?v:_});t[t.length-1]!==f&&(t.push(f),r.push("primEdge"));const{nodeA:h,nodeB:p}=f.userData,g=l.has(h)?p:h;l.add(g),t.push(g),r.push("addVertex")}},cT=(s,e,t,r)=>{if(!s.length||!e.length)return;const a=new Map(s.map(_=>[_,_])),l=new Map(s.map(_=>[_,0])),c=_=>(a.get(_)!==_&&a.set(_,c(a.get(_))),a.get(_)),f=(_,v)=>{const S=c(_),T=c(v);if(S===T)return!1;const C=l.get(S),y=l.get(T);return C<y?a.set(S,T):C>y?a.set(T,S):(a.set(T,S),l.set(S,C+1)),!0},h=[...e].sort((_,v)=>(_.userData.weight||0)-(v.userData.weight||0)),p=s.length-1;let g=0;for(const _ of h){const{nodeA:v,nodeB:S}=_.userData;if(f(v,S)&&(t.push(_),r.push("kruskalEdge"),t.includes(v)||(t.push(v),r.push("addVertex")),t.includes(S)||(t.push(S),r.push("addVertex")),++g===p))break}};function id(s,e,t,r,a){switch(r.length=0,a.length=0,s){case"prim":uT(e,t,r,a),console.log("Prim algorithm completed",r,a);break;case"kruskal":cT(e,t,r,a),console.log("Kruskal algorithm completed",r,a);break;default:console.error("Unknown algorithm:",s)}}const Fg=(s,e,t,r)=>{t.x=r.clientX/window.innerWidth*2-1,t.y=-(r.clientY/window.innerHeight)*2+1,s.setFromCamera(t,e)};function fT({camera:s,renderer:e}){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function dT(s,e){const{scene:t,camera:r,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:p,nodes:g,edges:_}=e;if(p.lastStep>0)return;Fg(c,r,l,s);const v=c.intersectObjects(g);v.length>0&&(p.clickedNode=v[0].object,a.enabled=!1,f.setFromNormalAndCoplanarPoint(r.getWorldDirection(f.normal),p.clickedNode.position),h.copy(v[0].point).sub(p.clickedNode.position),p.modes.removeNode?oT(t,g,_,p.clickedNode):p.modes.addEdge?Zm(p.clickedNode,p.selectedNodes)===2&&(nd(t,_,p.selectedNodes),Jm(p.selectedNodes)):p.modes.removeEdge?Zm(p.clickedNode,p.selectedNodes)===2&&(rT(t,_,p.selectedNodes),Jm(p.selectedNodes)):p.modes.selectStart&&aT(g,p.clickedNode))}function hT(s,e){const{camera:t,pointer:r,raycaster:a,plane:l,offset:c,state:f,edges:h}=e;if(!f.clickedNode||f.lastStep>0)return;Fg(a,t,r,s);const p=new Y;if(a.ray.intersectPlane(l,p)){f.clickedNode.position.copy(p.sub(c));for(let g=0;g<h.length;g++){const{nodeA:_,nodeB:v}=h[g].userData;(_===f.clickedNode||v===f.clickedNode)&&iT(h[g])}}}function pT(s){const{controls:e,state:t,nodes:r,edges:a,sliderCallback:l}=s;t.lastStep>0||(t.clickedNode&&(id(t.selectedAlgo,r,a,t.algoSteps,t.algoHints),l(t.lastStep,t.algoSteps.length),t.clickedNode=null),e.enabled=!0)}function mT(s){s&&(s.innerHTML="");const{scene:e,camera:t,renderer:r,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:p}=tT(s),g=[],_=[];let v=null,S=null;const T=()=>{lT(e,g,_,p.selectedAlgo==="prim"),id(p.selectedAlgo,g,_,p.algoSteps,p.algoHints)};T();const C=()=>{requestAnimationFrame(C),a.update(),r.render(e,t)};C();const y=()=>fT({camera:t,renderer:r}),x={pointerdown:R=>dT(R,{scene:e,camera:t,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:p,nodes:g,edges:_}),pointermove:R=>hT(R,{camera:t,pointer:l,raycaster:c,plane:f,offset:h,state:p,edges:_}),pointerup:()=>pT({controls:a,state:p,nodes:g,edges:_,sliderCallback:v})},U=[["resize",y],["pointerdown",x.pointerdown],["pointermove",x.pointermove],["pointerup",x.pointerup]],L=(R=!0)=>{U.forEach(([E,G])=>window[R?"addEventListener":"removeEventListener"](E,G))};L();const P=R=>{Object.keys(p.modes).forEach(E=>{p.modes[E]=E===R?!p.modes[E]:!1}),p.selectedNodes.forEach(E=>E.material.color.copy(E.userData.originalColor)),p.selectedNodes.length=0},W=()=>{P(null),p.algoSteps.length=0,p.lastStep=0,g.forEach(R=>e.remove(R)),g.length=0,_.forEach(R=>{e.remove(R),e.remove(R.sprite)}),_.length=0,v(0,0),S(0,0)},F=R=>new Promise(E=>setTimeout(E,R)),N=async()=>{for(;p.lastStep<p.algoSteps.length;){if(await F(1500),!p.isPlaying)return;p.lastStep++,Km(p.lastStep,p.algoSteps),v(p.lastStep,p.algoSteps.length),S(p.algoHints[p.lastStep-1])}};return{clearScene:W,genExample:()=>{W(),T(),v(0,p.algoSteps.length)},addNode:()=>{P(null),Hl(e,g)},removeNode:()=>P("removeNode"),addEdge:()=>P("addEdge"),removeEdge:()=>P("removeEdge"),selectStart:()=>P("selectStart"),chooseAlgo:R=>{if(P(null),p.selectedAlgo=R,R==="kruskal"){for(let E=0;E<g.length;E++)if(g[E].userData.start){g[E].userData.start=!1,g[E].material.color.set("#02C874"),g[E].userData.originalColor=g[E].material.color.clone();break}}id(p.selectedAlgo,g,_,p.algoSteps,p.algoHints),v(0,p.algoSteps.length)},playAlgo:()=>{P(null),p.algoSteps.length>0&&(p.isPlaying=!0,p.lastStep===p.algoSteps.length&&(p.algoSteps.forEach(R=>R.material.color.copy(R.userData.originalColor)),p.lastStep=0,v(0,p.algoSteps.length)),N())},pauseAlgo:()=>{p.isPlaying=!1},updateHint:R=>{S=R},updateSlider:R=>{v=R,v(0,p.algoSteps.length)},useSlider:R=>{P(null),Km(R,p.algoSteps),R===p.algoSteps.length&&(p.isPlaying=!1),p.lastStep=R,S&&S(p.algoHints[R-1])},disposeResource:()=>{W(),L(!1),v=null}}}const gT=({id:s,text:e,onClick:t,hidden:r})=>Xt.jsx("button",{className:`control-button button-${s}`,onClick:t,hidden:r,children:e}),_T=({isPlaying:s,sliderValue:e,maxSliderValue:t,handlePlayPause:r,handleReset:a,handleSliderChange:l})=>Xt.jsxs("div",{className:"controls-container",children:[Xt.jsx("button",{onClick:r,className:"play-button",disabled:t===0,children:s?"⏸":"▶"}),Xt.jsx("button",{onClick:a,className:"play-button",disabled:t===0||e===0,children:"↺"}),Xt.jsxs("div",{className:"slider-container",children:[Xt.jsx("span",{className:"time-display",children:e}),Xt.jsx("input",{type:"range",min:"0",max:t,value:e,onChange:l,className:"progress-slider",style:{background:`linear-gradient(to right, #007BFF 0%, #007BFF ${e/t*100}%, #ddd ${e/t*100}%, #ddd 100%)`},disabled:t===0}),Xt.jsx("span",{className:"time-display",children:t})]})]});function vT({isSidebarOpen:s,toggleSidebar:e,handleAlgo:t}){return Xt.jsxs("div",{className:"sidebar-container",children:[Xt.jsx("button",{className:"sidebar-toggle",onClick:e,children:s?"<":">"}),Xt.jsxs("div",{className:`sidebar ${s?"open":""}`,children:[Xt.jsx("div",{className:"sidebar-item",onClick:()=>t("prim"),children:"Prim"}),Xt.jsx("div",{className:"sidebar-item",onClick:()=>t("kruskal"),children:"Kruskal"})]})]})}function xT(){const s=hn.useRef(null),e=hn.useRef(null),[t,r]=hn.useState(null),[a,l]=hn.useState(!1),[c,f]=hn.useState(0),[h,p]=hn.useState(0),[g,_]=hn.useState(!1),[v,S]=hn.useState("prim"),[T,C]=hn.useState(null);hn.useEffect(()=>(e.current=mT(s.current),e.current.updateHint(N=>{C(N)}),e.current.updateSlider((N,V)=>{f(N),p(V)}),()=>e.current.disposeResource()),[]),hn.useEffect(()=>{c===h&&l(!1)},[c,h]);const y=hn.useCallback((N,V)=>{var R,E;r(G=>G===N?null:N),(E=(R=e.current)==null?void 0:R[V])==null||E.call(R)},[]),x=hn.useCallback(N=>{var V;r(null),S(N),(V=e.current)==null||V.chooseAlgo(N)},[]),U=hn.useCallback(()=>{var N,V;r(null),l(R=>!R),a?(N=e.current)==null||N.pauseAlgo():(V=e.current)==null||V.playAlgo()},[a]),L=hn.useCallback(()=>{var N,V;r(null),l(!1),f(0),(N=e.current)==null||N.pauseAlgo(),(V=e.current)==null||V.useSlider(0)},[]),P=hn.useCallback(N=>{var R;r(null);const V=parseInt(N.target.value,10);f(V),(R=e.current)==null||R.useSlider(V)},[]),W=[{id:"clear",text:"Clear All",action:()=>y(null,"clearScene")},{id:"example",text:"Example",action:()=>y(null,"genExample")},{id:"addNode",text:"Add Node",action:()=>y(null,"addNode")},{id:"removeNode",text:t==="removeNode"?"Cancel":"Remove Node",action:()=>y("removeNode","removeNode")},{id:"addEdge",text:t==="addEdge"?"Cancel":"Add Edge",action:()=>y("addEdge","addEdge")},{id:"removeEdge",text:t==="removeEdge"?"Cancel":"Remove Edge",action:()=>y("removeEdge","removeEdge")},{id:"selectStart",text:t==="selectStart"?"Cancel":"Select Start Point",action:()=>y("selectStart","selectStart"),hidden:v!=="prim"}],F={removeNode:"Select a node to delete (Press again to cancel)",addEdge:"Select two nodes to connect (Press again to cancel)",removeEdge:"Select two nodes to disconnect (Press again to cancel)",selectStart:"Select a start node (Press again to cancel)",primStart:"Start from the selected vertex and mark it as selected",primEdge:"Choose the smallest-weight edge connecting a selected vertex to an unselected vertex",kruskalEdge:"Choose the smallest-weight edge and examine if it forms a cycle from the current tree",addVertex:"Add its new vertex to the growing tree"};return Xt.jsxs("div",{className:"interface-container",children:[Xt.jsx("div",{ref:s}),!(a||c>0)&&W.map(({id:N,text:V,action:R,hidden:E=!1})=>Xt.jsx(gT,{id:N,text:V,onClick:R,hidden:E},N)),t&&Xt.jsx("div",{className:"action-hint-message",children:F[t]}),c>0&&Xt.jsx("div",{className:"algo-hint-message",children:F[T]}),Xt.jsx(_T,{isPlaying:a,sliderValue:c,maxSliderValue:h,handlePlayPause:U,handleReset:L,handleSliderChange:P}),!(a||c>0)&&Xt.jsx(vT,{isSidebarOpen:g,toggleSidebar:()=>_(N=>!N),handleAlgo:x})]})}Ev.createRoot(document.getElementById("root")).render(Xt.jsx(hn.StrictMode,{children:Xt.jsx(xT,{})}));
