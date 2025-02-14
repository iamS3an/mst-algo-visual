(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Rc={exports:{}},Oo={},Pc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function av(){if(zp)return _t;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(U,Z,Ue){this.props=U,this.context=Z,this.refs=C,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(U,Z,Ue){this.props=U,this.context=Z,this.refs=C,this.updater=Ue||S}var L=N.prototype=new _;L.constructor=N,T(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,X=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(U,Z,Ue){var te,pe={},Se=null,ye=null;if(Z!=null)for(te in Z.ref!==void 0&&(ye=Z.ref),Z.key!==void 0&&(Se=""+Z.key),Z)X.call(Z,te)&&!I.hasOwnProperty(te)&&(pe[te]=Z[te]);var Re=arguments.length-2;if(Re===1)pe.children=Ue;else if(1<Re){for(var Ze=Array(Re),Ye=0;Ye<Re;Ye++)Ze[Ye]=arguments[Ye+2];pe.children=Ze}if(U&&U.defaultProps)for(te in Re=U.defaultProps,Re)pe[te]===void 0&&(pe[te]=Re[te]);return{$$typeof:s,type:U,key:Se,ref:ye,props:pe,_owner:O.current}}function P(U,Z){return{$$typeof:s,type:U.type,key:Z,ref:U.ref,props:U.props,_owner:U._owner}}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function V(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return Z[Ue]})}var fe=/\/+/g;function ee(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):Z.toString(36)}function ne(U,Z,Ue,te,pe){var Se=typeof U;(Se==="undefined"||Se==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Se){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,pe=pe(ye),U=te===""?"."+ee(ye,0):te,R(pe)?(Ue="",U!=null&&(Ue=U.replace(fe,"$&/")+"/"),ne(pe,Z,Ue,"",function(Ye){return Ye})):pe!=null&&(w(pe)&&(pe=P(pe,Ue+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(fe,"$&/")+"/")+U)),Z.push(pe)),1;if(ye=0,te=te===""?".":te+":",R(U))for(var Re=0;Re<U.length;Re++){Se=U[Re];var Ze=te+ee(Se,Re);ye+=ne(Se,Z,Ue,Ze,pe)}else if(Ze=x(U),typeof Ze=="function")for(U=Ze.call(U),Re=0;!(Se=U.next()).done;)Se=Se.value,Ze=te+ee(Se,Re++),ye+=ne(Se,Z,Ue,Ze,pe);else if(Se==="object")throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ye}function ce(U,Z,Ue){if(U==null)return U;var te=[],pe=0;return ne(U,te,"","",function(Se){return Z.call(Ue,Se,pe++)}),te}function ae(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},F={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:F,ReactCurrentOwner:O};function ie(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(U,Z,Ue){ce(U,function(){Z.apply(this,arguments)},Ue)},count:function(U){var Z=0;return ce(U,function(){Z++}),Z},toArray:function(U){return ce(U,function(Z){return Z})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=N,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,_t.act=ie,_t.cloneElement=function(U,Z,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var te=T({},U.props),pe=U.key,Se=U.ref,ye=U._owner;if(Z!=null){if(Z.ref!==void 0&&(Se=Z.ref,ye=O.current),Z.key!==void 0&&(pe=""+Z.key),U.type&&U.type.defaultProps)var Re=U.type.defaultProps;for(Ze in Z)X.call(Z,Ze)&&!I.hasOwnProperty(Ze)&&(te[Ze]=Z[Ze]===void 0&&Re!==void 0?Re[Ze]:Z[Ze])}var Ze=arguments.length-2;if(Ze===1)te.children=Ue;else if(1<Ze){Re=Array(Ze);for(var Ye=0;Ye<Ze;Ye++)Re[Ye]=arguments[Ye+2];te.children=Re}return{$$typeof:s,type:U.type,key:pe,ref:Se,props:te,_owner:ye}},_t.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=G,_t.createFactory=function(U){var Z=G.bind(null,U);return Z.type=U,Z},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:c,render:U}},_t.isValidElement=w,_t.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},_t.memo=function(U,Z){return{$$typeof:m,type:U,compare:Z===void 0?null:Z}},_t.startTransition=function(U){var Z=F.transition;F.transition={};try{U()}finally{F.transition=Z}},_t.unstable_act=ie,_t.useCallback=function(U,Z){return le.current.useCallback(U,Z)},_t.useContext=function(U){return le.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return le.current.useDeferredValue(U)},_t.useEffect=function(U,Z){return le.current.useEffect(U,Z)},_t.useId=function(){return le.current.useId()},_t.useImperativeHandle=function(U,Z,Ue){return le.current.useImperativeHandle(U,Z,Ue)},_t.useInsertionEffect=function(U,Z){return le.current.useInsertionEffect(U,Z)},_t.useLayoutEffect=function(U,Z){return le.current.useLayoutEffect(U,Z)},_t.useMemo=function(U,Z){return le.current.useMemo(U,Z)},_t.useReducer=function(U,Z,Ue){return le.current.useReducer(U,Z,Ue)},_t.useRef=function(U){return le.current.useRef(U)},_t.useState=function(U){return le.current.useState(U)},_t.useSyncExternalStore=function(U,Z,Ue){return le.current.useSyncExternalStore(U,Z,Ue)},_t.useTransition=function(){return le.current.useTransition()},_t.version="18.3.1",_t}var Bp;function rd(){return Bp||(Bp=1,Pc.exports=av()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function lv(){if(kp)return Oo;kp=1;var s=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,m){var g,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:x,ref:S,props:v,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=f,Oo.jsxs=f,Oo}var Hp;function uv(){return Hp||(Hp=1,Rc.exports=lv()),Rc.exports}var xr=uv(),Ws=rd(),al={},bc={exports:{}},Dn={},Lc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function cv(){return Vp||(Vp=1,function(s){function e(F,ue){var ie=F.length;F.push(ue);e:for(;0<ie;){var U=ie-1>>>1,Z=F[U];if(0<a(Z,ue))F[U]=ue,F[ie]=Z,ie=U;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var ue=F[0],ie=F.pop();if(ie!==ue){F[0]=ie;e:for(var U=0,Z=F.length,Ue=Z>>>1;U<Ue;){var te=2*(U+1)-1,pe=F[te],Se=te+1,ye=F[Se];if(0>a(pe,ie))Se<Z&&0>a(ye,pe)?(F[U]=ye,F[Se]=ie,U=Se):(F[U]=pe,F[te]=ie,U=te);else if(Se<Z&&0>a(ye,ie))F[U]=ye,F[Se]=ie,U=Se;else break e}}return ue}function a(F,ue){var ie=F.sortIndex-ue.sortIndex;return ie!==0?ie:F.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],m=[],g=1,v=null,x=3,S=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(F){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=F)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(m)}}function R(F){if(C=!1,L(F),!T)if(t(h)!==null)T=!0,ae(X);else{var ue=t(m);ue!==null&&le(R,ue.startTime-F)}}function X(F,ue){T=!1,C&&(C=!1,_(G),G=-1),S=!0;var ie=x;try{for(L(ue),v=t(h);v!==null&&(!(v.expirationTime>ue)||F&&!V());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var Z=U(v.expirationTime<=ue);ue=s.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(h)&&r(h),L(ue)}else r(h);v=t(h)}if(v!==null)var Ue=!0;else{var te=t(m);te!==null&&le(R,te.startTime-ue),Ue=!1}return Ue}finally{v=null,x=ie,S=!1}}var O=!1,I=null,G=-1,P=5,w=-1;function V(){return!(s.unstable_now()-w<P)}function fe(){if(I!==null){var F=s.unstable_now();w=F;var ue=!0;try{ue=I(!0,F)}finally{ue?ee():(O=!1,I=null)}}else O=!1}var ee;if(typeof N=="function")ee=function(){N(fe)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ce=ne.port2;ne.port1.onmessage=fe,ee=function(){ce.postMessage(null)}}else ee=function(){y(fe,0)};function ae(F){I=F,O||(O=!0,ee())}function le(F,ue){G=y(function(){F(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(X))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var ie=x;x=ue;try{return F()}finally{x=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,ue){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ie=x;x=F;try{return ue()}finally{x=ie}},s.unstable_scheduleCallback=function(F,ue,ie){var U=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ie+Z,F={id:g++,callback:ue,priorityLevel:F,startTime:ie,expirationTime:Z,sortIndex:-1},ie>U?(F.sortIndex=ie,e(m,F),t(h)===null&&F===t(m)&&(C?(_(G),G=-1):C=!0,le(R,ie-U))):(F.sortIndex=Z,e(h,F),T||S||(T=!0,ae(X))),F},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(F){var ue=x;return function(){var ie=x;x=ue;try{return F.apply(this,arguments)}finally{x=ie}}}}(Dc)),Dc}var Gp;function fv(){return Gp||(Gp=1,Lc.exports=cv()),Lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function dv(){if(Wp)return Dn;Wp=1;var s=rd(),e=fv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),V=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),F=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,U;function Z(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ue=!1;function te(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var u=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){u=se}n.call(i.prototype)}else{try{throw Error()}catch(se){u=se}n()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var k=`
`+d[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function pe(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case P:return"Profiler";case G:return"StrictMode";case ee:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case fe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Ye(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ln(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function E(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function ge(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function H(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function de(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function z(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,oe=null,he=null;function Ne(n){if(n=Mo(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ma(i),Te(n.stateNode,n.type,i))}}function be(n){oe?he?he.push(n):he=[n]:oe=n}function et(){if(oe){var n=oe,i=he;if(he=oe=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function xt(n,i){return n(i)}function Nt(){}var mt=!1;function qt(n,i,o){if(mt)return n(i,o);mt=!0;try{return xt(n,i,o)}finally{mt=!1,(oe!==null||he!==null)&&(Nt(),et())}}function jt(n,i){var o=n.stateNode;if(o===null)return null;var u=Ma(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var es=!1;if(c)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{es=!1}function yi(n,i,o,u,d,p,M,D,k){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(xe){this.onError(xe)}}var Si=!1,Ar=null,Cr=!1,Yi=null,ea={onError:function(n){Si=!0,Ar=n}};function ts(n,i,o,u,d,p,M,D,k){Si=!1,Ar=null,yi.apply(ea,arguments)}function ta(n,i,o,u,d,p,M,D,k){if(ts.apply(this,arguments),Si){if(Si){var se=Ar;Si=!1,Ar=null}else throw Error(t(198));Cr||(Cr=!0,Yi=se)}}function ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ia(n){if(ci(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ia(d),n;if(p===u)return ia(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,u=p;break}if(D===u){M=!0,u=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,u=d;break}if(D===u){M=!0,u=p,o=d;break}D=D.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ra(n){return n=Zl(n),n!==null?sa(n):null}function sa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=sa(n);if(i!==null)return i;n=n.sibling}return null}var oa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,q=e.unstable_shouldYield,re=e.unstable_requestPaint,K=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,st=null,Xe=null;function yt(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:St,Vt=Math.log,Ot=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var Je=64,Gt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?u=vt(D):(p&=M,p!==0&&(u=vt(p)))}else M=o&~d,M!==0?u=vt(M):p!==0&&(u=vt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ut(i),d=1<<o,u|=n[o],i&=~d;return u}function qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-ut(p),D=1<<M,k=d[M];k===-1?(!(D&o)||D&u)&&(d[M]=qi(D,i)):k<=i&&(n.expiredLanes|=D),p&=~D}}function Mi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=Je;return Je<<=1,!(Je&4194240)&&(Je=64),n}function hn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ut(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ut(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function fi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _d,Jl,vd,xd,yd,Ql=!1,aa=[],ji=null,$i=null,Ki=null,so=new Map,oo=new Map,Zi=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(n,i){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Jl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function bg(n,i,o,u,d){switch(i){case"focusin":return ji=ao(ji,n,i,o,u,d),!0;case"dragenter":return $i=ao($i,n,i,o,u,d),!0;case"mouseover":return Ki=ao(Ki,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return so.set(p,ao(so.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,oo.set(p,ao(oo.get(p)||null,n,i,o,u,d)),!0}return!1}function Md(n){var i=Rr(n.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=na(o),i!==null){n.blockedOn=i,yd(n.priority,function(){vd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function la(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=tu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return i=Mo(o),i!==null&&Jl(i),n.blockedOn=o,!1;i.shift()}return!0}function Ed(n,i,o){la(n)&&o.delete(i)}function Lg(){Ql=!1,ji!==null&&la(ji)&&(ji=null),$i!==null&&la($i)&&($i=null),Ki!==null&&la(Ki)&&(Ki=null),so.forEach(Ed),oo.forEach(Ed)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Ql||(Ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lg)))}function uo(n){function i(d){return lo(d,n)}if(0<aa.length){lo(aa[0],n);for(var o=1;o<aa.length;o++){var u=aa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ji!==null&&lo(ji,n),$i!==null&&lo($i,n),Ki!==null&&lo(Ki,n),so.forEach(i),oo.forEach(i),o=0;o<Zi.length;o++)u=Zi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(o=Zi[0],o.blockedOn===null);)Md(o),o.blockedOn===null&&Zi.shift()}var ns=R.ReactCurrentBatchConfig,ua=!0;function Dg(n,i,o,u){var d=Mt,p=ns.transition;ns.transition=null;try{Mt=1,eu(n,i,o,u)}finally{Mt=d,ns.transition=p}}function Ug(n,i,o,u){var d=Mt,p=ns.transition;ns.transition=null;try{Mt=4,eu(n,i,o,u)}finally{Mt=d,ns.transition=p}}function eu(n,i,o,u){if(ua){var d=tu(n,i,o,u);if(d===null)vu(n,i,u,ca,o),Sd(n,u);else if(bg(d,n,i,o,u))u.stopPropagation();else if(Sd(n,u),i&4&&-1<Pg.indexOf(n)){for(;d!==null;){var p=Mo(d);if(p!==null&&_d(p),p=tu(n,i,o,u),p===null&&vu(n,i,u,ca,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else vu(n,i,u,null,o)}}var ca=null;function tu(n,i,o,u){if(ca=null,n=z(u),n=Rr(n),n!==null)if(i=ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=na(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ca=n,null}function Td(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case we:return 1;case Le:return 4;case Ie:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Ji=null,nu=null,fa=null;function wd(){if(fa)return fa;var n,i=nu,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[p-u];u++);return fa=d.slice(n,1<u?1-u:void 0)}function da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ha(){return!0}function Ad(){return!1}function In(n){function i(o,u,d,p,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ha:Ad,this.isPropagationStopped=Ad,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=In(is),co=ie({},is,{view:0,detail:0}),Ng=In(co),ru,su,fo,pa=ie({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(ru=n.screenX-fo.screenX,su=n.screenY-fo.screenY):su=ru=0,fo=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),Cd=In(pa),Ig=ie({},pa,{dataTransfer:0}),Fg=In(Ig),Og=ie({},co,{relatedTarget:0}),ou=In(Og),zg=ie({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=In(zg),kg=ie({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hg=In(kg),Vg=ie({},is,{data:0}),Rd=In(Vg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Xg[n])?!!i[n]:!1}function au(){return Yg}var qg=ie({},co,{key:function(n){if(n.key){var i=Gg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jg=In(qg),$g=ie({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=In($g),Kg=ie({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Zg=In(Kg),Jg=ie({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=In(Jg),e_=ie({},pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=In(e_),n_=[9,13,27,32],lu=c&&"CompositionEvent"in window,ho=null;c&&"documentMode"in document&&(ho=document.documentMode);var i_=c&&"TextEvent"in window&&!ho,bd=c&&(!lu||ho&&8<ho&&11>=ho),Ld=" ",Dd=!1;function Ud(n,i){switch(n){case"keyup":return n_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function r_(n,i){switch(n){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(Dd=!0,Ld);case"textInput":return n=i.data,n===Ld&&Dd?null:n;default:return null}}function s_(n,i){if(rs)return n==="compositionend"||!lu&&Ud(n,i)?(n=wd(),fa=nu=Ji=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bd&&i.locale!=="ko"?null:i.data;default:return null}}var o_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!o_[n.type]:i==="textarea"}function Fd(n,i,o,u){be(u),i=xa(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function a_(n){eh(n,0)}function ma(n){var i=us(n);if(Rt(i))return n}function l_(n,i){if(n==="change")return i}var Od=!1;if(c){var uu;if(c){var cu="oninput"in document;if(!cu){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),cu=typeof zd.oninput=="function"}uu=cu}else uu=!1;Od=uu&&(!document.documentMode||9<document.documentMode)}function Bd(){po&&(po.detachEvent("onpropertychange",kd),mo=po=null)}function kd(n){if(n.propertyName==="value"&&ma(mo)){var i=[];Fd(i,mo,n,z(n)),qt(a_,i)}}function u_(n,i,o){n==="focusin"?(Bd(),po=i,mo=o,po.attachEvent("onpropertychange",kd)):n==="focusout"&&Bd()}function c_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ma(mo)}function f_(n,i){if(n==="click")return ma(i)}function d_(n,i){if(n==="input"||n==="change")return ma(i)}function h_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:h_;function go(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Jn(n[d],i[d]))return!1}return!0}function Hd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vd(n,i){var o=Hd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hd(o)}}function Gd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Gd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wd(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=lt(n.document)}return i}function fu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function p_(n){var i=Wd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Vd(o,p);var M=Vd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var m_=c&&"documentMode"in document&&11>=document.documentMode,ss=null,du=null,_o=null,hu=!1;function Xd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||ss==null||ss!==lt(u)||(u=ss,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&go(_o,u)||(_o=u,u=xa(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ss)))}function ga(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var os={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},pu={},Yd={};c&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function _a(n){if(pu[n])return pu[n];if(!os[n])return n;var i=os[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yd)return pu[n]=i[o];return n}var qd=_a("animationend"),jd=_a("animationiteration"),$d=_a("animationstart"),Kd=_a("transitionend"),Zd=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){Zd.set(n,i),l(i,[n])}for(var mu=0;mu<Jd.length;mu++){var gu=Jd[mu],g_=gu.toLowerCase(),__=gu[0].toUpperCase()+gu.slice(1);Qi(g_,"on"+__)}Qi(qd,"onAnimationEnd"),Qi(jd,"onAnimationIteration"),Qi($d,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Kd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Qd(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ta(u,i,void 0,n),n.currentTarget=null}function eh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],k=D.instance,se=D.currentTarget;if(D=D.listener,k!==p&&d.isPropagationStopped())break e;Qd(d,D,se),p=k}else for(M=0;M<u.length;M++){if(D=u[M],k=D.instance,se=D.currentTarget,D=D.listener,k!==p&&d.isPropagationStopped())break e;Qd(d,D,se),p=k}}}if(Cr)throw n=Yi,Cr=!1,Yi=null,n}function It(n,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=n+"__bubble";o.has(u)||(th(i,n,2,!1),o.add(u))}function _u(n,i,o){var u=0;i&&(u|=4),th(o,n,u,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[va]){n[va]=!0,r.forEach(function(o){o!=="selectionchange"&&(v_.has(o)||_u(o,!1,n),_u(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[va]||(i[va]=!0,_u("selectionchange",!1,i))}}function th(n,i,o,u){switch(Td(i)){case 1:var d=Dg;break;case 4:d=Ug;break;default:d=eu}o=d.bind(null,i,o,n),d=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function vu(n,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=Rr(D),M===null)return;if(k=M.tag,k===5||k===6){u=p=M;continue e}D=D.parentNode}}u=u.return}qt(function(){var se=p,xe=z(o),Me=[];e:{var ve=Zd.get(n);if(ve!==void 0){var Fe=iu,Ve=n;switch(n){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Fe=jg;break;case"focusin":Ve="focus",Fe=ou;break;case"focusout":Ve="blur",Fe=ou;break;case"beforeblur":case"afterblur":Fe=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Zg;break;case qd:case jd:case $d:Fe=Bg;break;case Kd:Fe=Qg;break;case"scroll":Fe=Ng;break;case"wheel":Fe=t_;break;case"copy":case"cut":case"paste":Fe=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Pd}var je=(i&4)!==0,Xt=!je&&n==="scroll",$=je?ve!==null?ve+"Capture":null:ve;je=[];for(var W=se,Q;W!==null;){Q=W;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,$!==null&&(Ae=jt(W,$),Ae!=null&&je.push(yo(W,Ae,Q)))),Xt)break;W=W.return}0<je.length&&(ve=new Fe(ve,Ve,null,o,xe),Me.push({event:ve,listeners:je}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&(Ve=o.relatedTarget||o.fromElement)&&(Rr(Ve)||Ve[Ei]))break e;if((Fe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=se,Ve=Ve?Rr(Ve):null,Ve!==null&&(Xt=ci(Ve),Ve!==Xt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=se),Fe!==Ve)){if(je=Cd,Ae="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(je=Pd,Ae="onPointerLeave",$="onPointerEnter",W="pointer"),Xt=Fe==null?ve:us(Fe),Q=Ve==null?ve:us(Ve),ve=new je(Ae,W+"leave",Fe,o,xe),ve.target=Xt,ve.relatedTarget=Q,Ae=null,Rr(xe)===se&&(je=new je($,W+"enter",Ve,o,xe),je.target=Q,je.relatedTarget=Xt,Ae=je),Xt=Ae,Fe&&Ve)t:{for(je=Fe,$=Ve,W=0,Q=je;Q;Q=as(Q))W++;for(Q=0,Ae=$;Ae;Ae=as(Ae))Q++;for(;0<W-Q;)je=as(je),W--;for(;0<Q-W;)$=as($),Q--;for(;W--;){if(je===$||$!==null&&je===$.alternate)break t;je=as(je),$=as($)}je=null}else je=null;Fe!==null&&nh(Me,ve,Fe,je,!1),Ve!==null&&Xt!==null&&nh(Me,Xt,Ve,je,!0)}}e:{if(ve=se?us(se):window,Fe=ve.nodeName&&ve.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ve.type==="file")var $e=l_;else if(Id(ve))if(Od)$e=d_;else{$e=c_;var tt=u_}else(Fe=ve.nodeName)&&Fe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=f_);if($e&&($e=$e(n,se))){Fd(Me,$e,o,xe);break e}tt&&tt(n,ve,se),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Tt(ve,"number",ve.value)}switch(tt=se?us(se):window,n){case"focusin":(Id(tt)||tt.contentEditable==="true")&&(ss=tt,du=se,_o=null);break;case"focusout":_o=du=ss=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Xd(Me,o,xe);break;case"selectionchange":if(m_)break;case"keydown":case"keyup":Xd(Me,o,xe)}var nt;if(lu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else rs?Ud(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(bd&&o.locale!=="ko"&&(rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&rs&&(nt=wd()):(Ji=xe,nu="value"in Ji?Ji.value:Ji.textContent,rs=!0)),tt=xa(se,at),0<tt.length&&(at=new Rd(at,n,null,o,xe),Me.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Nd(o),nt!==null&&(at.data=nt)))),(nt=i_?r_(n,o):s_(n,o))&&(se=xa(se,"onBeforeInput"),0<se.length&&(xe=new Rd("onBeforeInput","beforeinput",null,o,xe),Me.push({event:xe,listeners:se}),xe.data=nt))}eh(Me,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function xa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=jt(n,o),p!=null&&u.unshift(yo(n,p,d)),p=jt(n,i),p!=null&&u.push(yo(n,p,d))),n=n.return}return u}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function nh(n,i,o,u,d){for(var p=i._reactName,M=[];o!==null&&o!==u;){var D=o,k=D.alternate,se=D.stateNode;if(k!==null&&k===u)break;D.tag===5&&se!==null&&(D=se,d?(k=jt(o,p),k!=null&&M.unshift(yo(o,k,D))):d||(k=jt(o,p),k!=null&&M.push(yo(o,k,D)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var x_=/\r\n?/g,y_=/\u0000|\uFFFD/g;function ih(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(y_,"")}function ya(n,i,o){if(i=ih(i),ih(n)!==i&&o)throw Error(t(425))}function Sa(){}var xu=null,yu=null;function Su(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,S_=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(n){return rh.resolve(null).then(n).catch(E_)}:Mu;function E_(n){setTimeout(function(){throw n})}function Eu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),di="__reactFiber$"+ls,So="__reactProps$"+ls,Ei="__reactContainer$"+ls,Tu="__reactEvents$"+ls,T_="__reactListeners$"+ls,w_="__reactHandles$"+ls;function Rr(n){var i=n[di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ei]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=sh(n);n!==null;){if(o=n[di])return o;n=sh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[di]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ma(n){return n[So]||null}var wu=[],cs=-1;function tr(n){return{current:n}}function Ft(n){0>cs||(n.current=wu[cs],wu[cs]=null,cs--)}function Ut(n,i){cs++,wu[cs]=n.current,n.current=i}var nr={},pn=tr(nr),Cn=tr(!1),Pr=nr;function fs(n,i){var o=n.type.contextTypes;if(!o)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Ea(){Ft(Cn),Ft(pn)}function oh(n,i,o){if(pn.current!==nr)throw Error(t(168));Ut(pn,i),Ut(Cn,o)}function ah(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return ie({},o,u)}function Ta(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Pr=pn.current,Ut(pn,n),Ut(Cn,Cn.current),!0}function lh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ah(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Cn),Ft(pn),Ut(pn,n)):Ft(Cn),Ut(Cn,o)}var Ti=null,wa=!1,Au=!1;function uh(n){Ti===null?Ti=[n]:Ti.push(n)}function A_(n){wa=!0,uh(n)}function ir(){if(!Au&&Ti!==null){Au=!0;var n=0,i=Mt;try{var o=Ti;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ti=null,wa=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),oa(we,ir),d}finally{Mt=i,Au=!1}}return null}var ds=[],hs=0,Aa=null,Ca=0,Vn=[],Gn=0,br=null,wi=1,Ai="";function Lr(n,i){ds[hs++]=Ca,ds[hs++]=Aa,Aa=n,Ca=i}function ch(n,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=br,br=n;var u=wi;n=Ai;var d=32-ut(u)-1;u&=~(1<<d),o+=1;var p=32-ut(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,wi=1<<32-ut(i)+d|o<<d|u,Ai=p+n}else wi=1<<p|o<<d|u,Ai=n}function Cu(n){n.return!==null&&(Lr(n,1),ch(n,1,0))}function Ru(n){for(;n===Aa;)Aa=ds[--hs],ds[hs]=null,Ca=ds[--hs],ds[hs]=null;for(;n===br;)br=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var Fn=null,On=null,zt=!1,Qn=null;function fh(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function dh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Fn=n,On=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bu(n){if(zt){var i=On;if(i){var o=i;if(!dh(n,i)){if(Pu(n))throw Error(t(418));i=er(o.nextSibling);var u=Fn;i&&dh(n,i)?fh(u,o):(n.flags=n.flags&-4097|2,zt=!1,Fn=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Fn=n}}}function hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Ra(n){if(n!==Fn)return!1;if(!zt)return hh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Su(n.type,n.memoizedProps)),i&&(i=On)){if(Pu(n))throw ph(),Error(t(418));for(;i;)fh(n,i),i=er(i.nextSibling)}if(hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){On=er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?er(n.stateNode.nextSibling):null;return!0}function ph(){for(var n=On;n;)n=er(n.nextSibling)}function ps(){On=Fn=null,zt=!1}function Lu(n){Qn===null?Qn=[n]:Qn.push(n)}var C_=R.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Pa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mh(n){var i=n._init;return i(n._payload)}function gh(n){function i($,W){if(n){var Q=$.deletions;Q===null?($.deletions=[W],$.flags|=16):Q.push(W)}}function o($,W){if(!n)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function u($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function d($,W){return $=fr($,W),$.index=0,$.sibling=null,$}function p($,W,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<W?($.flags|=2,W):Q):($.flags|=2,W)):($.flags|=1048576,W)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function D($,W,Q,Ae){return W===null||W.tag!==6?(W=Mc(Q,$.mode,Ae),W.return=$,W):(W=d(W,Q),W.return=$,W)}function k($,W,Q,Ae){var $e=Q.type;return $e===I?xe($,W,Q.props.children,Ae,Q.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&mh($e)===W.type)?(Ae=d(W,Q.props),Ae.ref=Eo($,W,Q),Ae.return=$,Ae):(Ae=Qa(Q.type,Q.key,Q.props,null,$.mode,Ae),Ae.ref=Eo($,W,Q),Ae.return=$,Ae)}function se($,W,Q,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=Ec(Q,$.mode,Ae),W.return=$,W):(W=d(W,Q.children||[]),W.return=$,W)}function xe($,W,Q,Ae,$e){return W===null||W.tag!==7?(W=Br(Q,$.mode,Ae,$e),W.return=$,W):(W=d(W,Q),W.return=$,W)}function Me($,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mc(""+W,$.mode,Q),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case X:return Q=Qa(W.type,W.key,W.props,null,$.mode,Q),Q.ref=Eo($,null,W),Q.return=$,Q;case O:return W=Ec(W,$.mode,Q),W.return=$,W;case ae:var Ae=W._init;return Me($,Ae(W._payload),Q)}if(qe(W)||ue(W))return W=Br(W,$.mode,Q,null),W.return=$,W;Pa($,W)}return null}function ve($,W,Q,Ae){var $e=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return $e!==null?null:D($,W,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case X:return Q.key===$e?k($,W,Q,Ae):null;case O:return Q.key===$e?se($,W,Q,Ae):null;case ae:return $e=Q._init,ve($,W,$e(Q._payload),Ae)}if(qe(Q)||ue(Q))return $e!==null?null:xe($,W,Q,Ae,null);Pa($,Q)}return null}function Fe($,W,Q,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(Q)||null,D(W,$,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case X:return $=$.get(Ae.key===null?Q:Ae.key)||null,k(W,$,Ae,$e);case O:return $=$.get(Ae.key===null?Q:Ae.key)||null,se(W,$,Ae,$e);case ae:var tt=Ae._init;return Fe($,W,Q,tt(Ae._payload),$e)}if(qe(Ae)||ue(Ae))return $=$.get(Q)||null,xe(W,$,Ae,$e,null);Pa(W,Ae)}return null}function Ve($,W,Q,Ae){for(var $e=null,tt=null,nt=W,at=W=0,on=null;nt!==null&&at<Q.length;at++){nt.index>at?(on=nt,nt=null):on=nt.sibling;var wt=ve($,nt,Q[at],Ae);if(wt===null){nt===null&&(nt=on);break}n&&nt&&wt.alternate===null&&i($,nt),W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt,nt=on}if(at===Q.length)return o($,nt),zt&&Lr($,at),$e;if(nt===null){for(;at<Q.length;at++)nt=Me($,Q[at],Ae),nt!==null&&(W=p(nt,W,at),tt===null?$e=nt:tt.sibling=nt,tt=nt);return zt&&Lr($,at),$e}for(nt=u($,nt);at<Q.length;at++)on=Fe(nt,$,at,Q[at],Ae),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?at:on.key),W=p(on,W,at),tt===null?$e=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(dr){return i($,dr)}),zt&&Lr($,at),$e}function je($,W,Q,Ae){var $e=ue(Q);if(typeof $e!="function")throw Error(t(150));if(Q=$e.call(Q),Q==null)throw Error(t(151));for(var tt=$e=null,nt=W,at=W=0,on=null,wt=Q.next();nt!==null&&!wt.done;at++,wt=Q.next()){nt.index>at?(on=nt,nt=null):on=nt.sibling;var dr=ve($,nt,wt.value,Ae);if(dr===null){nt===null&&(nt=on);break}n&&nt&&dr.alternate===null&&i($,nt),W=p(dr,W,at),tt===null?$e=dr:tt.sibling=dr,tt=dr,nt=on}if(wt.done)return o($,nt),zt&&Lr($,at),$e;if(nt===null){for(;!wt.done;at++,wt=Q.next())wt=Me($,wt.value,Ae),wt!==null&&(W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return zt&&Lr($,at),$e}for(nt=u($,nt);!wt.done;at++,wt=Q.next())wt=Fe(nt,$,at,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&nt.delete(wt.key===null?at:wt.key),W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return n&&nt.forEach(function(ov){return i($,ov)}),zt&&Lr($,at),$e}function Xt($,W,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===I&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case X:e:{for(var $e=Q.key,tt=W;tt!==null;){if(tt.key===$e){if($e=Q.type,$e===I){if(tt.tag===7){o($,tt.sibling),W=d(tt,Q.props.children),W.return=$,$=W;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ae&&mh($e)===tt.type){o($,tt.sibling),W=d(tt,Q.props),W.ref=Eo($,tt,Q),W.return=$,$=W;break e}o($,tt);break}else i($,tt);tt=tt.sibling}Q.type===I?(W=Br(Q.props.children,$.mode,Ae,Q.key),W.return=$,$=W):(Ae=Qa(Q.type,Q.key,Q.props,null,$.mode,Ae),Ae.ref=Eo($,W,Q),Ae.return=$,$=Ae)}return M($);case O:e:{for(tt=Q.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){o($,W.sibling),W=d(W,Q.children||[]),W.return=$,$=W;break e}else{o($,W);break}else i($,W);W=W.sibling}W=Ec(Q,$.mode,Ae),W.return=$,$=W}return M($);case ae:return tt=Q._init,Xt($,W,tt(Q._payload),Ae)}if(qe(Q))return Ve($,W,Q,Ae);if(ue(Q))return je($,W,Q,Ae);Pa($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(o($,W.sibling),W=d(W,Q),W.return=$,$=W):(o($,W),W=Mc(Q,$.mode,Ae),W.return=$,$=W),M($)):o($,W)}return Xt}var ms=gh(!0),_h=gh(!1),ba=tr(null),La=null,gs=null,Du=null;function Uu(){Du=gs=La=null}function Nu(n){var i=ba.current;Ft(ba),n._currentValue=i}function Iu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function _s(n,i){La=n,Du=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Pn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Du!==n)if(n={context:n,memoizedValue:i,next:null},gs===null){if(La===null)throw Error(t(308));gs=n,La.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return i}var Dr=null;function Fu(n){Dr===null?Dr=[n]:Dr.push(n)}function vh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Fu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ci(n,u)}function Ci(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var rr=!1;function Ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ci(n,o)}return d=u.interleaved,d===null?(i.next=i,Fu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ci(n,o)}function Da(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}function yh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ua(n,i,o,u){var d=n.updateQueue;rr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,se=k.next;k.next=null,M===null?p=se:M.next=se,M=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=se:D.next=se,xe.lastBaseUpdate=k))}if(p!==null){var Me=d.baseState;M=0,xe=se=k=null,D=p;do{var ve=D.lane,Fe=D.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,je=D;switch(ve=i,Fe=o,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){Me=Ve.call(Fe,Me,ve);break e}Me=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,ve=typeof Ve=="function"?Ve.call(Fe,Me,ve):Ve,ve==null)break e;Me=ie({},Me,ve);break e;case 2:rr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[D]:ve.push(D))}else Fe={eventTime:Fe,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(se=xe=Fe,k=Me):xe=xe.next=Fe,M|=ve;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(k=Me),d.baseState=k,d.firstBaseUpdate=se,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ir|=M,n.lanes=M,n.memoizedState=Me}}function Sh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},hi=tr(To),wo=tr(To),Ao=tr(To);function Ur(n){if(n===To)throw Error(t(174));return n}function zu(n,i){switch(Ut(Ao,i),Ut(wo,n),Ut(hi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ft(hi),Ut(hi,i)}function vs(){Ft(hi),Ft(wo),Ft(Ao)}function Mh(n){Ur(Ao.current);var i=Ur(hi.current),o=We(i,n.type);i!==o&&(Ut(wo,n),Ut(hi,o))}function Bu(n){wo.current===n&&(Ft(hi),Ft(wo))}var Bt=tr(0);function Na(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ku=[];function Hu(){for(var n=0;n<ku.length;n++)ku[n]._workInProgressVersionPrimary=null;ku.length=0}var Ia=R.ReactCurrentDispatcher,Vu=R.ReactCurrentBatchConfig,Nr=0,kt=null,Zt=null,rn=null,Fa=!1,Co=!1,Ro=0,R_=0;function mn(){throw Error(t(321))}function Gu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function Wu(n,i,o,u,d,p){if(Nr=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ia.current=n===null||n.memoizedState===null?D_:U_,n=o(u,d),Co){p=0;do{if(Co=!1,Ro=0,25<=p)throw Error(t(301));p+=1,rn=Zt=null,i.updateQueue=null,Ia.current=N_,n=o(u,d)}while(Co)}if(Ia.current=Ba,i=Zt!==null&&Zt.next!==null,Nr=0,rn=Zt=kt=null,Fa=!1,i)throw Error(t(300));return n}function Xu(){var n=Ro!==0;return Ro=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?kt.memoizedState=rn=n:rn=rn.next=n,rn}function Xn(){if(Zt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?kt.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?kt.memoizedState=rn=n:rn=rn.next=n}return rn}function Po(n,i){return typeof i=="function"?i(n):i}function Yu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var D=M=null,k=null,se=p;do{var xe=se.lane;if((Nr&xe)===xe)k!==null&&(k=k.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:n(u,se.action);else{var Me={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};k===null?(D=k=Me,M=u):k=k.next=Me,kt.lanes|=xe,Ir|=xe}se=se.next}while(se!==null&&se!==p);k===null?M=u:k.next=D,Jn(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,kt.lanes|=p,Ir|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);Jn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Eh(){}function Th(n,i){var o=kt,u=Xn(),d=i(),p=!Jn(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,ju(Ch.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Ah.bind(null,o,u,d,i),void 0,null),sn===null)throw Error(t(349));Nr&30||wh(o,i,d)}return d}function wh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ah(n,i,o,u){i.value=o,i.getSnapshot=u,Rh(i)&&Ph(n)}function Ch(n,i,o){return o(function(){Rh(i)&&Ph(n)})}function Rh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Ph(n){var i=Ci(n,1);i!==null&&ii(i,n,1,-1)}function bh(n){var i=pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=L_.bind(null,kt,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Lh(){return Xn().memoizedState}function Oa(n,i,o,u){var d=pi();kt.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function za(n,i,o,u){var d=Xn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,u!==null&&Gu(u,M.deps)){d.memoizedState=bo(i,o,p,u);return}}kt.flags|=n,d.memoizedState=bo(1|i,o,p,u)}function Dh(n,i){return Oa(8390656,8,n,i)}function ju(n,i){return za(2048,8,n,i)}function Uh(n,i){return za(4,2,n,i)}function Nh(n,i){return za(4,4,n,i)}function Ih(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fh(n,i,o){return o=o!=null?o.concat([n]):null,za(4,4,Ih.bind(null,i,n),o)}function $u(){}function Oh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function zh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Bh(n,i,o){return Nr&21?(Jn(o,i)||(o=Dt(),kt.lanes|=o,Ir|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o)}function P_(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Vu.transition;Vu.transition={};try{n(!1),i()}finally{Mt=o,Vu.transition=u}}function kh(){return Xn().memoizedState}function b_(n,i,o){var u=ur(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(n))Vh(i,o);else if(o=vh(n,i,o,u),o!==null){var d=Mn();ii(o,n,u,d),Gh(o,i,u)}}function L_(n,i,o){var u=ur(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(n))Vh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,Jn(D,M)){var k=i.interleaved;k===null?(d.next=d,Fu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=vh(n,i,d,u),o!==null&&(d=Mn(),ii(o,n,u,d),Gh(o,i,u))}}function Hh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function Vh(n,i){Co=Fa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Gh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}var Ba={readContext:Wn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},D_={readContext:Wn,useCallback:function(n,i){return pi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Dh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4194308,4,Ih.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Oa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Oa(4,2,n,i)},useMemo:function(n,i){var o=pi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=b_.bind(null,kt,n),[u.memoizedState,n]},useRef:function(n){var i=pi();return n={current:n},i.memoizedState=n},useState:bh,useDebugValue:$u,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=bh(!1),i=n[0];return n=P_.bind(null,n[1]),pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=kt,d=pi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Nr&30||wh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Dh(Ch.bind(null,u,p,n),[n]),u.flags|=2048,bo(9,Ah.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=pi(),i=sn.identifierPrefix;if(zt){var o=Ai,u=wi;o=(u&~(1<<32-ut(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=R_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},U_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:ju,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Nh,useMemo:zh,useReducer:Yu,useRef:Lh,useState:function(){return Yu(Po)},useDebugValue:$u,useDeferredValue:function(n){var i=Xn();return Bh(i,Zt.memoizedState,n)},useTransition:function(){var n=Yu(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Eh,useSyncExternalStore:Th,useId:kh,unstable_isNewReconciler:!1},N_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:ju,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Nh,useMemo:zh,useReducer:qu,useRef:Lh,useState:function(){return qu(Po)},useDebugValue:$u,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Bh(i,Zt.memoizedState,n)},useTransition:function(){var n=qu(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Eh,useSyncExternalStore:Th,useId:kh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ku(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ie({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ka={isMounted:function(n){return(n=n._reactInternals)?ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ur(n),p=Ri(u,d);p.payload=i,o!=null&&(p.callback=o),i=sr(n,p,d),i!==null&&(ii(i,n,d,u),Da(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ur(n),p=Ri(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=sr(n,p,d),i!==null&&(ii(i,n,d,u),Da(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=ur(n),d=Ri(o,u);d.tag=2,i!=null&&(d.callback=i),i=sr(n,d,u),i!==null&&(ii(i,n,u,o),Da(i,n,u))}};function Wh(n,i,o,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,p):!0}function Xh(n,i,o){var u=!1,d=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(d=Rn(i)?Pr:pn.current,u=i.contextTypes,p=(u=u!=null)?fs(n,d):nr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ka.enqueueReplaceState(i,i.state,null)}function Zu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Ou(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wn(p):(p=Rn(i)?Pr:pn.current,d.context=fs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ku(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),Ua(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,i){try{var o="",u=i;do o+=pe(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ju(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Qu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var I_=typeof WeakMap=="function"?WeakMap:Map;function qh(n,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){qa||(qa=!0,pc=u),Qu(n,i)},o}function jh(n,i,o){o=Ri(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Qu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Qu(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function $h(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new I_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=$_.bind(null,n,i,o),i.then(n,n))}function Kh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zh(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,sr(o,i,1))),o.lanes|=1),n)}var F_=R.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,u){i.child=n===null?_h(i,null,o,u):ms(i,n.child,o,u)}function Jh(n,i,o,u,d){o=o.render;var p=i.ref;return _s(i,d),u=Wu(n,i,o,u,p,d),o=Xu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&o&&Cu(i),i.flags|=1,Sn(n,i,u,d),i.child)}function Qh(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!Sc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,ep(n,i,p,u,d)):(n=Qa(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&d)){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,u)&&n.ref===i.ref)return Pi(n,i,d)}return i.flags|=1,n=fr(p,u),n.ref=i.ref,n.return=i,i.child=n}function ep(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(go(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return i.lanes=n.lanes,Pi(n,i,d)}return ec(n,i,o,u,d)}function tp(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ss,zn),zn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ss,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Ut(Ss,zn),zn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Ut(Ss,zn),zn|=u;return Sn(n,i,d,o),i.child}function np(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(n,i,o,u,d){var p=Rn(o)?Pr:pn.current;return p=fs(i,p),_s(i,d),o=Wu(n,i,o,u,p,d),u=Xu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&u&&Cu(i),i.flags|=1,Sn(n,i,o,d),i.child)}function ip(n,i,o,u,d){if(Rn(o)){var p=!0;Ta(i)}else p=!1;if(_s(i,d),i.stateNode===null)Va(n,i),Xh(i,o,u),Zu(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,se=o.contextType;typeof se=="object"&&se!==null?se=Wn(se):(se=Rn(o)?Pr:pn.current,se=fs(i,se));var xe=o.getDerivedStateFromProps,Me=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||k!==se)&&Yh(i,M,u,se),rr=!1;var ve=i.memoizedState;M.state=ve,Ua(i,u,M,d),k=i.memoizedState,D!==u||ve!==k||Cn.current||rr?(typeof xe=="function"&&(Ku(i,o,xe,u),k=i.memoizedState),(D=rr||Wh(i,o,D,u,ve,k,se))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),M.props=u,M.state=k,M.context=se,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,xh(n,i),D=i.memoizedProps,se=i.type===i.elementType?D:ei(i.type,D),M.props=se,Me=i.pendingProps,ve=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=Rn(o)?Pr:pn.current,k=fs(i,k));var Fe=o.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Me||ve!==k)&&Yh(i,M,u,k),rr=!1,ve=i.memoizedState,M.state=ve,Ua(i,u,M,d);var Ve=i.memoizedState;D!==Me||ve!==Ve||Cn.current||rr?(typeof Fe=="function"&&(Ku(i,o,Fe,u),Ve=i.memoizedState),(se=rr||Wh(i,o,se,u,ve,Ve,k)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=k,u=se):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return tc(n,i,o,u,p,d)}function tc(n,i,o,u,d,p){np(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&lh(i,o,!1),Pi(n,i,p);u=i.stateNode,F_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ms(i,n.child,null,p),i.child=ms(i,null,D,p)):Sn(n,i,D,p),i.memoizedState=u.state,d&&lh(i,o,!0),i.child}function rp(n){var i=n.stateNode;i.pendingContext?oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(n,i.context,!1),zu(n,i.containerInfo)}function sp(n,i,o,u,d){return ps(),Lu(d),i.flags|=256,Sn(n,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(n){return{baseLanes:n,cachePool:null,transitions:null}}function op(n,i,o){var u=i.pendingProps,d=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Bt,d&1),n===null)return bu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=M):p=el(M,u,0,null),n=Br(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=ic(o),i.memoizedState=nc,n):rc(i,M));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return O_(n,i,M,u,D,d,o);if(p){p=u.fallback,M=i.mode,d=n.child,D=d.sibling;var k={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=fr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=fr(D,p):(p=Br(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?ic(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~o,i.memoizedState=nc,u}return p=n.child,n=p.sibling,u=fr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function rc(n,i){return i=el({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ha(n,i,o,u){return u!==null&&Lu(u),ms(i,n.child,null,o),n=rc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function O_(n,i,o,u,d,p,M){if(o)return i.flags&256?(i.flags&=-257,u=Ju(Error(t(422))),Ha(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=el({mode:"visible",children:u.children},d,0,null),p=Br(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&ms(i,n.child,null,M),i.child.memoizedState=ic(M),i.memoizedState=nc,p);if(!(i.mode&1))return Ha(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(t(419)),u=Ju(p,u,void 0),Ha(n,i,M,u)}if(D=(M&n.childLanes)!==0,Pn||D){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ci(n,d),ii(u,n,d,-1))}return yc(),u=Ju(Error(t(421))),Ha(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=K_.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,On=er(d.nextSibling),Fn=i,zt=!0,Qn=null,n!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=br,wi=n.id,Ai=n.overflow,br=i),i=rc(i,u.children),i.flags|=4096,i)}function ap(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Iu(n.return,i,o)}function sc(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function lp(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Sn(n,i,u.children,o),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ap(n,o,i);else if(n.tag===19)ap(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ut(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Na(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),sc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Na(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}sc(i,!0,o,null,p);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=fr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=fr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function z_(n,i,o){switch(i.tag){case 3:rp(i),ps();break;case 5:Mh(i);break;case 1:Rn(i.type)&&Ta(i);break;case 4:zu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ut(ba,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?op(n,i,o):(Ut(Bt,Bt.current&1),n=Pi(n,i,o),n!==null?n.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return lp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,tp(n,i,o)}return Pi(n,i,o)}var up,oc,cp,fp;up=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},cp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(hi.current);var p=null;switch(o){case"input":d=B(n,d),u=B(n,u),p=[];break;case"select":d=ie({},d,{value:void 0}),u=ie({},u,{value:void 0}),p=[];break;case"textarea":d=E(n,d),u=E(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Sa)}H(o,u);var M;o=null;for(se in d)if(!u.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var D=d[se];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?p||(p=[]):(p=p||[]).push(se,null));for(se in u){var k=u[se];if(D=d!=null?d[se]:void 0,u.hasOwnProperty(se)&&k!==D&&(k!=null||D!=null))if(se==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(se,o)),o=k;else se==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(se,k)):se==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(se,""+k):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(k!=null&&se==="onScroll"&&It("scroll",n),p||D===k||(p=[])):(p=p||[]).push(se,k))}o&&(p=p||[]).push("style",o);var se=p;(i.updateQueue=se)&&(i.flags|=4)}},fp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function B_(n,i,o){var u=i.pendingProps;switch(Ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Ea(),gn(i),null;case 3:return u=i.stateNode,vs(),Ft(Cn),Ft(pn),Hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ra(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Qn!==null&&(_c(Qn),Qn=null))),oc(n,i),gn(i),null;case 5:Bu(i);var d=Ur(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)cp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Ur(hi.current),Ra(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[di]=i,u[So]=p,n=(i.mode&1)!==0,o){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":ln(u,p),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},It("invalid",u);break;case"textarea":J(u,p),It("invalid",u)}H(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&ya(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ya(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",u)}switch(o){case"input":Pt(u),Ke(u,p,!0);break;case"textarea":Pt(u),_e(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Sa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[di]=i,n[So]=u,up(n,i,!1,!1),i.stateNode=n;e:{switch(M=de(o,u),o){case"dialog":It("cancel",n),It("close",n),d=u;break;case"iframe":case"object":case"embed":It("load",n),d=u;break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],n);d=u;break;case"source":It("error",n),d=u;break;case"img":case"image":case"link":It("error",n),It("load",n),d=u;break;case"details":It("toggle",n),d=u;break;case"input":ln(n,u),d=B(n,u),It("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ie({},u,{value:void 0}),It("invalid",n);break;case"textarea":J(n,u),d=E(n,u),It("invalid",n);break;default:d=u}H(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?rt(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(n,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&It("scroll",n):k!=null&&L(n,p,k,M))}switch(o){case"input":Pt(n),Ke(n,u,!1);break;case"textarea":Pt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?b(n,!!u.multiple,p,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Sa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)fp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ur(Ao.current),Ur(hi.current),Ra(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(p=u.nodeValue!==o)&&(n=Fn,n!==null))switch(n.tag){case 3:ya(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ya(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return gn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&On!==null&&i.mode&1&&!(i.flags&128))ph(),ps(),i.flags|=98560,p=!1;else if(p=Ra(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[di]=i}else ps(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else Qn!==null&&(_c(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Bt.current&1?Jt===0&&(Jt=3):yc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return vs(),oc(n,i),n===null&&xo(i.stateNode.containerInfo),gn(i),null;case 10:return Nu(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Ea(),gn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Lo(p,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Na(n),M!==null){for(i.flags|=128,Lo(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Bt,Bt.current&1|2),i.child}n=n.sibling}p.tail!==null&&K()>Ms&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304)}else{if(!u)if(n=Na(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*K()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=Bt.current,Ut(Bt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?zn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function k_(n,i){switch(Ru(i),i.tag){case 1:return Rn(i.type)&&Ea(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vs(),Ft(Cn),Ft(pn),Hu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return vs(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ga=!1,_n=!1,H_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ys(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function ac(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var dp=!1;function V_(n,i){if(xu=ua,n=Wd(),fu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,se=0,xe=0,Me=n,ve=null;t:for(;;){for(var Fe;Me!==o||d!==0&&Me.nodeType!==3||(D=M+d),Me!==p||u!==0&&Me.nodeType!==3||(k=M+u),Me.nodeType===3&&(M+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)ve=Me,Me=Fe;for(;;){if(Me===n)break t;if(ve===o&&++se===d&&(D=M),ve===p&&++xe===u&&(k=M),(Fe=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Fe}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(yu={focusedElem:n,selectionRange:o},ua=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,Xt=Ve.memoizedState,$=i.stateNode,W=$.getSnapshotBeforeUpdate(i.elementType===i.type?je:ei(i.type,je),Xt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Wt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=dp,dp=!1,Ve}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ac(i,o,p)}d=d.next}while(d!==u)}}function Wa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function hp(n){var i=n.alternate;i!==null&&(n.alternate=null,hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[di],delete i[So],delete i[Tu],delete i[T_],delete i[w_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pp(n){return n.tag===5||n.tag===3||n.tag===4}function mp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function uc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Sa));else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,o),n=n.sibling;n!==null;)uc(n,i,o),n=n.sibling}function cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(cc(n,i,o),n=n.sibling;n!==null;)cc(n,i,o),n=n.sibling}var cn=null,ti=!1;function or(n,i,o){for(o=o.child;o!==null;)gp(n,i,o),o=o.sibling}function gp(n,i,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||ys(o,i);case 6:var u=cn,d=ti;cn=null,or(n,i,o),cn=u,ti=d,cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?Eu(n.parentNode,o):n.nodeType===1&&Eu(n,o),uo(n)):Eu(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,or(n,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&(p&2||p&4)&&ac(o,i,M),d=d.next}while(d!==u)}or(n,i,o);break;case 1:if(!_n&&(ys(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Wt(o,i,D)}or(n,i,o);break;case 21:or(n,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,or(n,i,o),_n=u):or(n,i,o);break;default:or(n,i,o)}}function _p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new H_),i.forEach(function(u){var d=Z_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ti=!1;break e;case 3:cn=D.stateNode.containerInfo,ti=!0;break e;case 4:cn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(cn===null)throw Error(t(160));gp(p,M,d),cn=null,ti=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(se){Wt(d,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,n),i=i.sibling}function vp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),mi(n),u&4){try{Do(3,n,n.return),Wa(3,n)}catch(je){Wt(n,n.return,je)}try{Do(5,n,n.return)}catch(je){Wt(n,n.return,je)}}break;case 1:ni(i,n),mi(n),u&512&&o!==null&&ys(o,o.return);break;case 5:if(ni(i,n),mi(n),u&512&&o!==null&&ys(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(je){Wt(n,n.return,je)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=o!==null?o.memoizedProps:p,D=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&pt(d,p),de(D,M);var se=de(D,p);for(M=0;M<k.length;M+=2){var xe=k[M],Me=k[M+1];xe==="style"?rt(d,Me):xe==="dangerouslySetInnerHTML"?Oe(d,Me):xe==="children"?ft(d,Me):L(d,xe,Me,se)}switch(D){case"input":ct(d,p);break;case"textarea":ge(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?b(d,!!p.multiple,Fe,!1):ve!==!!p.multiple&&(p.defaultValue!=null?b(d,!!p.multiple,p.defaultValue,!0):b(d,!!p.multiple,p.multiple?[]:"",!1))}d[So]=p}catch(je){Wt(n,n.return,je)}}break;case 6:if(ni(i,n),mi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(je){Wt(n,n.return,je)}}break;case 3:if(ni(i,n),mi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(je){Wt(n,n.return,je)}break;case 4:ni(i,n),mi(n);break;case 13:ni(i,n),mi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hc=K())),u&4&&_p(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(se=_n)||xe,ni(i,n),_n=se):ni(i,n),mi(n),u&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!xe&&n.mode&1)for(ke=n,xe=n.child;xe!==null;){for(Me=ke=xe;ke!==null;){switch(ve=ke,Fe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Do(4,ve,ve.return);break;case 1:ys(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(je){Wt(u,o,je)}}break;case 5:ys(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Sp(Me);continue}}Fe!==null?(Fe.return=ve,ke=Fe):Sp(Me)}xe=xe.sibling}e:for(xe=null,Me=n;;){if(Me.tag===5){if(xe===null){xe=Me;try{d=Me.stateNode,se?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Me.stateNode,k=Me.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Qe("display",M))}catch(je){Wt(n,n.return,je)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=se?"":Me.memoizedProps}catch(je){Wt(n,n.return,je)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ni(i,n),mi(n),u&4&&_p(n);break;case 21:break;default:ni(i,n),mi(n)}}function mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(pp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var p=mp(n);cc(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,D=mp(n);uc(n,D,M);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function G_(n,i,o){ke=n,xp(n)}function xp(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Ga;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||_n;D=Ga;var se=_n;if(Ga=M,(_n=k)&&!se)for(ke=d;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?Mp(d):k!==null?(k.return=M,ke=k):Mp(d);for(;p!==null;)ke=p,xp(p),p=p.sibling;ke=d,Ga=D,_n=se}yp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ke=p):yp(n)}}function yp(n){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||Wa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Sh(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&uo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&lc(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Sp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Mp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Wa(4,i)}catch(k){Wt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Wt(i,d,k)}}var p=i.return;try{lc(i)}catch(k){Wt(i,p,k)}break;case 5:var M=i.return;try{lc(i)}catch(k){Wt(i,M,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){ke=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ke=D;break}ke=i.return}}var W_=Math.ceil,Xa=R.ReactCurrentDispatcher,fc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,fn=0,zn=0,Ss=tr(0),Jt=0,Uo=null,Ir=0,Ya=0,dc=0,No=null,bn=null,hc=0,Ms=1/0,bi=null,qa=!1,pc=null,ar=null,ja=!1,lr=null,$a=0,Io=0,mc=null,Ka=-1,Za=0;function Mn(){return Et&6?K():Ka!==-1?Ka:Ka=K()}function ur(n){return n.mode&1?Et&2&&fn!==0?fn&-fn:C_.transition!==null?(Za===0&&(Za=Dt()),Za):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Td(n.type)),n):1}function ii(n,i,o,u){if(50<Io)throw Io=0,mc=null,Error(t(185));tn(n,o,u),(!(Et&2)||n!==sn)&&(n===sn&&(!(Et&2)&&(Ya|=o),Jt===4&&cr(n,fn)),Ln(n,u),o===1&&Et===0&&!(i.mode&1)&&(Ms=K()+500,wa&&ir()))}function Ln(n,i){var o=n.callbackNode;yn(n,i);var u=dn(n,n===sn?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?A_(Tp.bind(null,n)):uh(Tp.bind(null,n)),M_(function(){!(Et&6)&&ir()}),o=null;else{switch(fi(u)){case 1:o=we;break;case 4:o=Le;break;case 16:o=Ie;break;case 536870912:o=ot;break;default:o=Ie}o=Dp(o,Ep.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ep(n,i){if(Ka=-1,Za=0,Et&6)throw Error(t(327));var o=n.callbackNode;if(Es()&&n.callbackNode!==o)return null;var u=dn(n,n===sn?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Ja(n,u);else{i=u;var d=Et;Et|=2;var p=Ap();(sn!==n||fn!==i)&&(bi=null,Ms=K()+500,Or(n,i));do try{q_();break}catch(D){wp(n,D)}while(!0);Uu(),Xa.current=p,Et=d,$t!==null?i=0:(sn=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(d=Mi(n),d!==0&&(u=d,i=gc(n,d))),i===1)throw o=Uo,Or(n,0),cr(n,u),Ln(n,K()),o;if(i===6)cr(n,u);else{if(d=n.current.alternate,!(u&30)&&!X_(d)&&(i=Ja(n,u),i===2&&(p=Mi(n),p!==0&&(u=p,i=gc(n,p))),i===1))throw o=Uo,Or(n,0),cr(n,u),Ln(n,K()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:zr(n,bn,bi);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=hc+500-K(),10<i)){if(dn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Mu(zr.bind(null,n,bn,bi),i);break}zr(n,bn,bi);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-ut(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*W_(u/1960))-u,10<u){n.timeoutHandle=Mu(zr.bind(null,n,bn,bi),u);break}zr(n,bn,bi);break;case 5:zr(n,bn,bi);break;default:throw Error(t(329))}}}return Ln(n,K()),n.callbackNode===o?Ep.bind(null,n):null}function gc(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Ja(n,i),n!==2&&(i=bn,bn=o,i!==null&&_c(i)),n}function _c(n){bn===null?bn=n:bn.push.apply(bn,n)}function X_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Jn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~dc,i&=~Ya,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ut(i),u=1<<o;n[o]=-1,i&=~u}}function Tp(n){if(Et&6)throw Error(t(327));Es();var i=dn(n,0);if(!(i&1))return Ln(n,K()),null;var o=Ja(n,i);if(n.tag!==0&&o===2){var u=Mi(n);u!==0&&(i=u,o=gc(n,u))}if(o===1)throw o=Uo,Or(n,0),cr(n,i),Ln(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,bn,bi),Ln(n,K()),null}function vc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Ms=K()+500,wa&&ir())}}function Fr(n){lr!==null&&lr.tag===0&&!(Et&6)&&Es();var i=Et;Et|=1;var o=Yn.transition,u=Mt;try{if(Yn.transition=null,Mt=1,n)return n()}finally{Mt=u,Yn.transition=o,Et=i,!(Et&6)&&ir()}}function xc(){zn=Ss.current,Ft(Ss)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,S_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Ru(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ea();break;case 3:vs(),Ft(Cn),Ft(pn),Hu();break;case 5:Bu(u);break;case 4:vs();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Nu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(sn=n,$t=n=fr(n.current,null),fn=zn=i,Jt=0,Uo=null,dc=Ya=Ir=0,bn=No=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}o.pending=u}Dr=null}return n}function wp(n,i){do{var o=$t;try{if(Uu(),Ia.current=Ba,Fa){for(var u=kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Fa=!1}if(Nr=0,rn=Zt=kt=null,Co=!1,Ro=0,fc.current=null,o===null||o.return===null){Jt=1,Uo=i,$t=null;break}e:{var p=n,M=o.return,D=o,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var se=k,xe=D,Me=xe.tag;if(!(xe.mode&1)&&(Me===0||Me===11||Me===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Kh(M);if(Fe!==null){Fe.flags&=-257,Zh(Fe,M,D,p,i),Fe.mode&1&&$h(p,se,i),i=Fe,k=se;var Ve=i.updateQueue;if(Ve===null){var je=new Set;je.add(k),i.updateQueue=je}else Ve.add(k);break e}else{if(!(i&1)){$h(p,se,i),yc();break e}k=Error(t(426))}}else if(zt&&D.mode&1){var Xt=Kh(M);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),Zh(Xt,M,D,p,i),Lu(xs(k,D));break e}}p=k=xs(k,D),Jt!==4&&(Jt=2),No===null?No=[p]:No.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=qh(p,k,i);yh(p,$);break e;case 1:D=k;var W=p.type,Q=p.stateNode;if(!(p.flags&128)&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(ar===null||!ar.has(Q)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=jh(p,D,i);yh(p,Ae);break e}}p=p.return}while(p!==null)}Rp(o)}catch($e){i=$e,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Ap(){var n=Xa.current;return Xa.current=Ba,n===null?Ba:n}function yc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||!(Ir&268435455)&&!(Ya&268435455)||cr(sn,fn)}function Ja(n,i){var o=Et;Et|=2;var u=Ap();(sn!==n||fn!==i)&&(bi=null,Or(n,i));do try{Y_();break}catch(d){wp(n,d)}while(!0);if(Uu(),Et=o,Xa.current=u,$t!==null)throw Error(t(261));return sn=null,fn=0,Jt}function Y_(){for(;$t!==null;)Cp($t)}function q_(){for(;$t!==null&&!q();)Cp($t)}function Cp(n){var i=Lp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Rp(n):$t=i,fc.current=null}function Rp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=k_(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,$t=null;return}}else if(o=B_(o,i,zn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Jt===0&&(Jt=5)}function zr(n,i,o){var u=Mt,d=Yn.transition;try{Yn.transition=null,Mt=1,j_(n,i,o,u)}finally{Yn.transition=d,Mt=u}return null}function j_(n,i,o,u){do Es();while(lr!==null);if(Et&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(n,p),n===sn&&($t=sn=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ja||(ja=!0,Dp(Ie,function(){return Es(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=Yn.transition,Yn.transition=null;var M=Mt;Mt=1;var D=Et;Et|=4,fc.current=null,V_(n,o),vp(o,n),p_(yu),ua=!!xu,yu=xu=null,n.current=o,G_(o),re(),Et=D,Mt=M,Yn.transition=p}else n.current=o;if(ja&&(ja=!1,lr=n,$a=d),p=n.pendingLanes,p===0&&(ar=null),yt(o.stateNode),Ln(n,K()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(qa)throw qa=!1,n=pc,pc=null,n;return $a&1&&n.tag!==0&&Es(),p=n.pendingLanes,p&1?n===mc?Io++:(Io=0,mc=n):Io=0,ir(),null}function Es(){if(lr!==null){var n=fi($a),i=Yn.transition,o=Mt;try{if(Yn.transition=null,Mt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,$a=0,Et&6)throw Error(t(331));var d=Et;for(Et|=4,ke=n.current;ke!==null;){var p=ke,M=p.child;if(ke.flags&16){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var se=D[k];for(ke=se;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Do(8,xe,p)}var Me=xe.child;if(Me!==null)Me.return=xe,ke=Me;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Fe=xe.return;if(hp(xe),xe===se){ke=null;break}if(ve!==null){ve.return=Fe,ke=ve;break}ke=Fe}}}var Ve=p.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var Xt=je.sibling;je.sibling=null,je=Xt}while(je!==null)}}ke=p}}if(p.subtreeFlags&2064&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,ke=$;break e}ke=p.return}}var W=n.current;for(ke=W;ke!==null;){M=ke;var Q=M.child;if(M.subtreeFlags&2064&&Q!==null)Q.return=M,ke=Q;else e:for(M=W;ke!==null;){if(D=ke,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Wa(9,D)}}catch($e){Wt(D,D.return,$e)}if(D===M){ke=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,ke=Ae;break e}ke=D.return}}if(Et=d,ir(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{Mt=o,Yn.transition=i}}return!1}function Pp(n,i,o){i=xs(o,i),i=qh(n,i,1),n=sr(n,i,1),i=Mn(),n!==null&&(tn(n,1,i),Ln(n,i))}function Wt(n,i,o){if(n.tag===3)Pp(n,n,o);else for(;i!==null;){if(i.tag===3){Pp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=xs(o,n),n=jh(i,n,1),i=sr(i,n,1),n=Mn(),i!==null&&(tn(i,1,n),Ln(i,n));break}}i=i.return}}function $_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>K()-hc?Or(n,0):dc|=o),Ln(n,i)}function bp(n,i){i===0&&(n.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=Mn();n=Ci(n,i),n!==null&&(tn(n,i,o),Ln(n,o))}function K_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),bp(n,o)}function Z_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),bp(n,o)}var Lp;Lp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Pn=!1,z_(n,i,o);Pn=!!(n.flags&131072)}else Pn=!1,zt&&i.flags&1048576&&ch(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(n,i),n=i.pendingProps;var d=fs(i,pn.current);_s(i,o),d=Wu(null,i,u,n,d,o);var p=Xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,Ta(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ou(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,Zu(i,u,n,o),i=tc(null,i,u,!0,p,o)):(i.tag=0,zt&&p&&Cu(i),Sn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Q_(u),n=ei(u,n),d){case 0:i=ec(null,i,u,n,o);break e;case 1:i=ip(null,i,u,n,o);break e;case 11:i=Jh(null,i,u,n,o);break e;case 14:i=Qh(null,i,u,ei(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ec(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ip(n,i,u,d,o);case 3:e:{if(rp(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,xh(n,i),Ua(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=xs(Error(t(423)),i),i=sp(n,i,u,o,d);break e}else if(u!==d){d=xs(Error(t(424)),i),i=sp(n,i,u,o,d);break e}else for(On=er(i.stateNode.containerInfo.firstChild),Fn=i,zt=!0,Qn=null,o=_h(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),u===d){i=Pi(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return Mh(i),n===null&&bu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,Su(u,d)?M=null:p!==null&&Su(u,p)&&(i.flags|=32),np(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&bu(i),null;case 13:return op(n,i,o);case 4:return zu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ms(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Jh(n,i,u,d,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Ut(ba,u._currentValue),u._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===d.children&&!Cn.current){i=Pi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=Ri(-1,o&-o),k.tag=2;var se=p.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),se.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Iu(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Iu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,_s(i,o),d=Wn(d),u=u(d),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),Qh(n,i,u,d,o);case 15:return ep(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Va(n,i),i.tag=1,Rn(u)?(n=!0,Ta(i)):n=!1,_s(i,o),Xh(i,u,d),Zu(i,u,d,o),tc(null,i,u,!0,n,o);case 19:return lp(n,i,o);case 22:return tp(n,i,o)}throw Error(t(156,i.tag))};function Dp(n,i){return oa(n,i)}function J_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,u){return new J_(n,i,o,u)}function Sc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Q_(n){if(typeof n=="function")return Sc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===fe)return 11;if(n===ce)return 14}return 2}function fr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Qa(n,i,o,u,d,p){var M=2;if(u=n,typeof n=="function")Sc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case I:return Br(o.children,d,p,i);case G:M=8,d|=8;break;case P:return n=qn(12,o,i,d|2),n.elementType=P,n.lanes=p,n;case ee:return n=qn(13,o,i,d),n.elementType=ee,n.lanes=p,n;case ne:return n=qn(19,o,i,d),n.elementType=ne,n.lanes=p,n;case le:return el(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:M=10;break e;case V:M=9;break e;case fe:M=11;break e;case ce:M=14;break e;case ae:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Br(n,i,o,u){return n=qn(7,n,u,i),n.lanes=o,n}function el(n,i,o,u){return n=qn(22,n,u,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function Mc(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function Ec(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ev(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(n,i,o,u,d,p,M,D,k){return n=new ev(n,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(p),n}function tv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Up(n){if(!n)return nr;n=n._reactInternals;e:{if(ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return ah(n,o,i)}return i}function Np(n,i,o,u,d,p,M,D,k){return n=Tc(o,u,!0,n,d,p,M,D,k),n.context=Up(null),o=n.current,u=Mn(),d=ur(o),p=Ri(u,d),p.callback=i??null,sr(o,p,d),n.current.lanes=d,tn(n,d,u),Ln(n,u),n}function tl(n,i,o,u){var d=i.current,p=Mn(),M=ur(d);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(d,i,M),n!==null&&(ii(n,d,M,p),Da(n,d,M)),M}function nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ip(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function wc(n,i){Ip(n,i),(n=n.alternate)&&Ip(n,i)}function nv(){return null}var Fp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ac(n){this._internalRoot=n}il.prototype.render=Ac.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));tl(n,i,null,null)},il.prototype.unmount=Ac.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){tl(null,n,null,null)}),i[Ei]=null}};function il(n){this._internalRoot=n}il.prototype.unstable_scheduleHydration=function(n){if(n){var i=xd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Zi.length&&i!==0&&i<Zi[o].priority;o++);Zi.splice(o,0,n),o===0&&Md(n)}};function Cc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Op(){}function iv(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var se=nl(M);p.call(se)}}var M=Np(i,u,n,0,null,!1,!1,"",Op);return n._reactRootContainer=M,n[Ei]=M.current,xo(n.nodeType===8?n.parentNode:n),Fr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var se=nl(k);D.call(se)}}var k=Tc(n,0,!1,null,null,!1,!1,"",Op);return n._reactRootContainer=k,n[Ei]=k.current,xo(n.nodeType===8?n.parentNode:n),Fr(function(){tl(i,k,o,u)}),k}function sl(n,i,o,u,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var k=nl(M);D.call(k)}}tl(i,M,n,d)}else M=iv(o,i,n,d,u);return nl(M)}_d=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=vt(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,K()),!(Et&6)&&(Ms=K()+500,ir()))}break;case 13:Fr(function(){var u=Ci(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),wc(n,1)}},Jl=function(n){if(n.tag===13){var i=Ci(n,134217728);if(i!==null){var o=Mn();ii(i,n,134217728,o)}wc(n,134217728)}},vd=function(n){if(n.tag===13){var i=ur(n),o=Ci(n,i);if(o!==null){var u=Mn();ii(o,n,i,u)}wc(n,i)}},xd=function(){return Mt},yd=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Te=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Ma(u);if(!d)throw Error(t(90));Rt(u),ct(u,d)}}}break;case"textarea":ge(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},xt=vc,Nt=Fr;var rv={usingClientEntryPoint:!1,Events:[Mo,us,Ma,be,et,vc]},Fo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ra(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{st=ol.inject(sv),Xe=ol}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv,Dn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(i))throw Error(t(200));return tv(n,i,null,o)},Dn.createRoot=function(n,i){if(!Cc(n))throw Error(t(299));var o=!1,u="",d=Fp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tc(n,1,!1,null,null,o,!1,u,d),n[Ei]=i.current,xo(n.nodeType===8?n.parentNode:n),new Ac(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ra(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Fr(n)},Dn.hydrate=function(n,i,o){if(!rl(i))throw Error(t(200));return sl(null,n,i,!0,o)},Dn.hydrateRoot=function(n,i,o){if(!Cc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",M=Fp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Np(i,null,n,1,o??null,d,!1,p,M),n[Ei]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new il(i)},Dn.render=function(n,i,o){if(!rl(i))throw Error(t(200));return sl(null,n,i,!1,o)},Dn.unmountComponentAtNode=function(n){if(!rl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},Dn.unstable_batchedUpdates=vc,Dn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!rl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return sl(n,i,o,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Xp;function hv(){if(Xp)return bc.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bc.exports=dv(),bc.exports}var Yp;function pv(){if(Yp)return al;Yp=1;var s=hv();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var mv=pv();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="173",Ts={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gv=1,$m=1,_v=2,Fi=3,Tr=0,Un=1,zi=2,Sr=0,qs=1,qp=2,jp=3,$p=4,vv=5,qr=100,xv=101,yv=102,Sv=103,Mv=104,Ev=200,Tv=201,wv=202,Av=203,pf=204,mf=205,Cv=206,Rv=207,Pv=208,bv=209,Lv=210,Dv=211,Uv=212,Nv=213,Iv=214,gf=0,_f=1,vf=2,Ks=3,xf=4,yf=5,Sf=6,Mf=7,Km=0,Fv=1,Ov=2,Mr=0,zv=1,Bv=2,kv=3,Hv=4,Vv=5,Gv=6,Wv=7,Zm=300,Zs=301,Js=302,Ef=303,Tf=304,jl=306,wf=1e3,$r=1001,Af=1002,li=1003,Xv=1004,ll=1005,vi=1006,Uc=1007,Kr=1008,Vi=1009,Jm=1010,Qm=1011,$o=1012,od=1013,Zr=1014,Bi=1015,Ko=1016,ad=1017,ld=1018,Qs=1020,eg=35902,tg=1021,ng=1022,ai=1023,ig=1024,rg=1025,js=1026,eo=1027,sg=1028,ud=1029,og=1030,cd=1031,fd=1033,Il=33776,Fl=33777,Ol=33778,zl=33779,Cf=35840,Rf=35841,Pf=35842,bf=35843,Lf=36196,Df=37492,Uf=37496,Nf=37808,If=37809,Ff=37810,Of=37811,zf=37812,Bf=37813,kf=37814,Hf=37815,Vf=37816,Gf=37817,Wf=37818,Xf=37819,Yf=37820,qf=37821,Bl=36492,jf=36494,$f=36495,ag=36283,Kf=36284,Zf=36285,Jf=36286,Yv=3200,qv=3201,jv=0,$v=1,yr="",$n="srgb",to="srgb-linear",Vl="linear",bt="srgb",As=7680,Kp=519,Kv=512,Zv=513,Jv=514,lg=515,Qv=516,e0=517,t0=518,n0=519,Qf=35044,Zp="300 es",ki=2e3,Gl=2001;let io=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}};const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,ed=180/Math.PI;function Er(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function i0(s,e){return(s%e+e)%e}function Ic(s,e,t){return(1-t)*s+t*e}function _i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,a,l,f,c,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,m)}set(e,t,r,a,l,f,c,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],m=r[1],g=r[4],v=r[7],x=r[2],S=r[5],T=r[8],C=a[0],y=a[3],_=a[6],N=a[1],L=a[4],R=a[7],X=a[2],O=a[5],I=a[8];return l[0]=f*C+c*N+h*X,l[3]=f*y+c*L+h*O,l[6]=f*_+c*R+h*I,l[1]=m*C+g*N+v*X,l[4]=m*y+g*L+v*O,l[7]=m*_+g*R+v*I,l[2]=x*C+S*N+T*X,l[5]=x*y+S*L+T*O,l[8]=x*_+S*R+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return t*f*g-t*c*m-r*l*g+r*c*h+a*l*m-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=g*f-c*m,x=c*h-g*l,S=m*l-f*h,T=t*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(a*m-g*r)*C,e[2]=(c*r-a*f)*C,e[3]=x*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-c*t)*C,e[6]=S*C,e[7]=(r*h-m*t)*C,e[8]=(f*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*f+m*c)+f+e,-a*m,a*h,-a*(-m*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new dt;function ug(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function r0(){const s=Wl("canvas");return s.style.display="block",s}const Jp={};function Xs(s){s in Jp||(Jp[s]=!0,console.warn(s))}function s0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function o0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){const s={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,l,f){return this.enabled===!1||l===f||!l||!f||(this.spaces[l].transfer===bt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===bt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Vl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,f){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[to]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const At=l0();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class u0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Wl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=Hi(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Hi(t[r]/255)*255):t[r]=Hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c0=0;class cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(Oc(a[f].image)):l.push(Oc(a[f]))}else l=Oc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?u0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class An extends io{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=$r,a=$r,l=vi,f=Kr,c=ai,h=Vi,m=An.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Er(),this.name="",this.source=new cg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Zm;An.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],S=h[5],T=h[9],C=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,R=(S+1)/2,X=(_+1)/2,O=(g+x)/4,I=(v+C)/4,G=(T+y)/4;return L>R&&L>X?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=O/r,l=I/r):R>X?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=O/a,l=G/a):X<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),r=I/l,a=G/l),this.set(r,a,l,t),this}let N=Math.sqrt((y-T)*(y-T)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-C)/N,this.z=(x-g)/N,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d0 extends io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new cg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends d0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class fg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h0 extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=l[f+0],S=l[f+1],T=l[f+2],C=l[f+3];if(c===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=C;return}if(v!==C||h!==x||m!==S||g!==T){let y=1-c;const _=h*x+m*S+g*T+v*C,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const X=Math.sqrt(L),O=Math.atan2(X,_*N);y=Math.sin(y*O)/X,c=Math.sin(c*O)/X}const R=c*N;if(h=h*y+x*R,m=m*y+S*R,g=g*y+T*R,v=v*y+C*R,y===1-c){const X=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=X,m*=X,g*=X,v*=X}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[f],x=l[f+1],S=l[f+2],T=l[f+3];return e[t]=c*T+g*v+h*S-m*x,e[t+1]=h*T+g*x+m*v-c*S,e[t+2]=m*T+g*S+c*x-h*v,e[t+3]=g*T-c*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(a/2),v=c(l/2),x=h(r/2),S=h(a/2),T=h(l/2);switch(f){case"XYZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"YXZ":this._x=x*g*v+m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"ZXY":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v-x*S*T;break;case"ZYX":this._x=x*g*v-m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v+x*S*T;break;case"YZX":this._x=x*g*v+m*S*T,this._y=m*S*v+x*g*T,this._z=m*g*T-x*S*v,this._w=m*g*v-x*S*T;break;case"XZY":this._x=x*g*v-m*S*T,this._y=m*S*v-x*g*T,this._z=m*g*T+x*S*v,this._w=m*g*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],m=t[2],g=t[6],v=t[10],x=r+c+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(f-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+m)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(f-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+f*c+a*m-l*h,this._y=a*g+f*h+l*c-r*m,this._z=l*g+f*m+r*h-a*c,this._w=f*g-r*c-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),v=Math.sin((1-t)*g)/m,x=Math.sin(t*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,m=2*(f*a-c*r),g=2*(c*t-l*a),v=2*(l*r-f*t);return this.x=t+h*m+f*v-c*g,this.y=r+h*g+c*m-l*v,this.z=a+h*v+l*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new Y,tm=new Qr;class Zo{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(l,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),cl.subVectors(this.max,zo),Rs.subVectors(e.a,zo),Ps.subVectors(e.b,zo),bs.subVectors(e.c,zo),hr.subVectors(Ps,Rs),pr.subVectors(bs,Ps),kr.subVectors(Rs,bs);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-kr.z,kr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,kr.z,0,-kr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-kr.y,kr.x,0];return!Bc(t,Rs,Ps,bs,cl)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,Rs,Ps,bs,cl))?!1:(fl.crossVectors(hr,pr),t=[fl.x,fl.y,fl.z],Bc(t,Rs,Ps,bs,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ri=new Y,ul=new Zo,Rs=new Y,Ps=new Y,bs=new Y,hr=new Y,pr=new Y,kr=new Y,zo=new Y,cl=new Y,fl=new Y,Hr=new Y;function Bc(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){Hr.fromArray(s,l);const c=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=t.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const p0=new Zo,Bo=new Y,kc=new Y;class dd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):p0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(kc)),this.expandByPoint(Bo.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new Y,Hc=new Y,dl=new Y,mr=new Y,Vc=new Y,hl=new Y,Gc=new Y;class hd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Hc.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Hc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(dl),c=mr.dot(this.direction),h=-mr.dot(dl),m=mr.lengthSq(),g=Math.abs(1-f*f);let v,x,S,T;if(g>0)if(v=f*h-c,x=f*c-h,T=l*g,v>=0)if(x>=-T)if(x<=T){const C=1/g;v*=C,x*=C,S=v*(v+f*x+2*c)+x*(f*v+x+2*h)+m}else x=l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-f*l+c)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(f*l+c)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=f>0?-l:l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Hc).addScaledVector(dl,x),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),v>=0?(c=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(c=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,r,a,l){Vc.subVectors(t,e),hl.subVectors(r,e),Gc.crossVectors(Vc,hl);let f=this.direction.dot(Gc),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;mr.subVectors(this.origin,e);const h=c*this.direction.dot(hl.crossVectors(mr,hl));if(h<0)return null;const m=c*this.direction.dot(Vc.cross(mr));if(m<0||h+m>f)return null;const g=-c*mr.dot(Gc);return g<0?null:this.at(g/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,f,c,h,m,g,v,x,S,T,C,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,m,g,v,x,S,T,C,y)}set(e,t,r,a,l,f,c,h,m,g,v,x,S,T,C,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=f,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=T,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),f=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=f*g,S=f*v,T=c*g,C=c*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=S+T*m,t[5]=x-C*m,t[9]=-c*h,t[2]=C-x*m,t[6]=T+S*m,t[10]=f*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,T=m*g,C=m*v;t[0]=x+C*c,t[4]=T*c-S,t[8]=f*m,t[1]=f*v,t[5]=f*g,t[9]=-c,t[2]=S*c-T,t[6]=C+x*c,t[10]=f*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,T=m*g,C=m*v;t[0]=x-C*c,t[4]=-f*v,t[8]=T+S*c,t[1]=S+T*c,t[5]=f*g,t[9]=C-x*c,t[2]=-f*m,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const x=f*g,S=f*v,T=c*g,C=c*v;t[0]=h*g,t[4]=T*m-S,t[8]=x*m+C,t[1]=h*v,t[5]=C*m+x,t[9]=S*m-T,t[2]=-m,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*m,T=c*h,C=c*m;t[0]=h*g,t[4]=C-x*v,t[8]=T*v+S,t[1]=v,t[5]=f*g,t[9]=-c*g,t[2]=-m*g,t[6]=S*v+T,t[10]=x-C*v}else if(e.order==="XZY"){const x=f*h,S=f*m,T=c*h,C=c*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=x*v+C,t[5]=f*g,t[9]=S*v-T,t[2]=T*v-S,t[6]=c*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),gr.crossVectors(r,Bn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),gr.crossVectors(r,Bn)),gr.normalize(),pl.crossVectors(Bn,gr),a[0]=gr.x,a[4]=pl.x,a[8]=Bn.x,a[1]=gr.y,a[5]=pl.y,a[9]=Bn.y,a[2]=gr.z,a[6]=pl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],m=r[12],g=r[1],v=r[5],x=r[9],S=r[13],T=r[2],C=r[6],y=r[10],_=r[14],N=r[3],L=r[7],R=r[11],X=r[15],O=a[0],I=a[4],G=a[8],P=a[12],w=a[1],V=a[5],fe=a[9],ee=a[13],ne=a[2],ce=a[6],ae=a[10],le=a[14],F=a[3],ue=a[7],ie=a[11],U=a[15];return l[0]=f*O+c*w+h*ne+m*F,l[4]=f*I+c*V+h*ce+m*ue,l[8]=f*G+c*fe+h*ae+m*ie,l[12]=f*P+c*ee+h*le+m*U,l[1]=g*O+v*w+x*ne+S*F,l[5]=g*I+v*V+x*ce+S*ue,l[9]=g*G+v*fe+x*ae+S*ie,l[13]=g*P+v*ee+x*le+S*U,l[2]=T*O+C*w+y*ne+_*F,l[6]=T*I+C*V+y*ce+_*ue,l[10]=T*G+C*fe+y*ae+_*ie,l[14]=T*P+C*ee+y*le+_*U,l[3]=N*O+L*w+R*ne+X*F,l[7]=N*I+L*V+R*ce+X*ue,l[11]=N*G+L*fe+R*ae+X*ie,l[15]=N*P+L*ee+R*le+X*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],S=e[14],T=e[3],C=e[7],y=e[11],_=e[15];return T*(+l*h*v-a*m*v-l*c*x+r*m*x+a*c*S-r*h*S)+C*(+t*h*S-t*m*x+l*f*x-a*f*S+a*m*g-l*h*g)+y*(+t*m*v-t*c*S-l*f*v+r*f*S+l*c*g-r*m*g)+_*(-a*c*g-t*h*v+t*c*x+a*f*v-r*f*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],S=e[11],T=e[12],C=e[13],y=e[14],_=e[15],N=v*y*m-C*x*m+C*h*S-c*y*S-v*h*_+c*x*_,L=T*x*m-g*y*m-T*h*S+f*y*S+g*h*_-f*x*_,R=g*C*m-T*v*m+T*c*S-f*C*S-g*c*_+f*v*_,X=T*v*h-g*C*h-T*c*x+f*C*x+g*c*y-f*v*y,O=t*N+r*L+a*R+l*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=N*I,e[1]=(C*x*l-v*y*l-C*a*S+r*y*S+v*a*_-r*x*_)*I,e[2]=(c*y*l-C*h*l+C*a*m-r*y*m-c*a*_+r*h*_)*I,e[3]=(v*h*l-c*x*l-v*a*m+r*x*m+c*a*S-r*h*S)*I,e[4]=L*I,e[5]=(g*y*l-T*x*l+T*a*S-t*y*S-g*a*_+t*x*_)*I,e[6]=(T*h*l-f*y*l-T*a*m+t*y*m+f*a*_-t*h*_)*I,e[7]=(f*x*l-g*h*l+g*a*m-t*x*m-f*a*S+t*h*S)*I,e[8]=R*I,e[9]=(T*v*l-g*C*l-T*r*S+t*C*S+g*r*_-t*v*_)*I,e[10]=(f*C*l-T*c*l+T*r*m-t*C*m-f*r*_+t*c*_)*I,e[11]=(g*c*l-f*v*l-g*r*m+t*v*m+f*r*S-t*c*S)*I,e[12]=X*I,e[13]=(g*C*a-T*v*a+T*r*x-t*C*x-g*r*y+t*v*y)*I,e[14]=(T*c*a-f*C*a-T*r*h+t*C*h+f*r*y-t*c*y)*I,e[15]=(f*v*a-g*c*a+g*r*h-t*v*h-f*r*x+t*c*x)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,m=l*f,g=l*c;return this.set(m*f+r,m*c-a*h,m*h+a*c,0,m*c+a*h,g*c+r,g*h-a*f,0,m*h-a*c,g*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,m=l+l,g=f+f,v=c+c,x=l*m,S=l*g,T=l*v,C=f*g,y=f*v,_=c*v,N=h*m,L=h*g,R=h*v,X=r.x,O=r.y,I=r.z;return a[0]=(1-(C+_))*X,a[1]=(S+R)*X,a[2]=(T-L)*X,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(x+_))*O,a[6]=(y+N)*O,a[7]=0,a[8]=(T+L)*I,a[9]=(y-N)*I,a[10]=(1-(x+C))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ls.set(a[0],a[1],a[2]).length();const f=Ls.set(a[4],a[5],a[6]).length(),c=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/l,g=1/f,v=1/c;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=v,si.elements[9]*=v,si.elements[10]*=v,t.setFromRotationMatrix(si),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=ki){const h=this.elements,m=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),x=(r+a)/(r-a);let S,T;if(c===ki)S=-(f+l)/(f-l),T=-2*f*l/(f-l);else if(c===Gl)S=-f/(f-l),T=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=ki){const h=this.elements,m=1/(t-e),g=1/(r-a),v=1/(f-l),x=(t+e)*m,S=(r+a)*g;let T,C;if(c===ki)T=(f+l)*v,C=-2*v;else if(c===Gl)T=l*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=C,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new Y,si=new Ht,m0=new Y(0,0,0),g0=new Y(1,1,1),gr=new Y,pl=new Y,Bn=new Y,nm=new Ht,im=new Qr;class Gi{constructor(e=0,t=0,r=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],m=a[5],g=a[9],v=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _0=0;const rm=new Y,Ds=new Qr,Ui=new Ht,ml=new Y,ko=new Y,v0=new Y,x0=new Qr,sm=new Y(1,0,0),om=new Y(0,1,0),am=new Y(0,0,1),lm={type:"added"},y0={type:"removed"},Us={type:"childadded",child:null},Wc={type:"childremoved",child:null};class Nn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Y,t=new Gi,r=new Qr,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new dt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ml.copy(e):ml.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ko,ml,this.up):Ui.lookAt(ml,ko,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),T=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new Y(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Y,Ni=new Y,Xc=new Y,Ii=new Y,Ns=new Y,Is=new Y,um=new Y,Yc=new Y,qc=new Y,jc=new Y,$c=new Yt,Kc=new Yt,Zc=new Yt;class Kn{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),oi.subVectors(e,t),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){oi.subVectors(a,t),Ni.subVectors(r,t),Xc.subVectors(e,t);const f=oi.dot(oi),c=oi.dot(Ni),h=oi.dot(Xc),m=Ni.dot(Ni),g=Ni.dot(Xc),v=f*m-c*c;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-c*g)*x,T=(f*g-c*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(f,Ii.y),h.addScaledVector(c,Ii.z),h)}static getInterpolatedAttribute(e,t,r,a,l,f){return $c.setScalar(0),Kc.setScalar(0),Zc.setScalar(0),$c.fromBufferAttribute(e,t),Kc.fromBufferAttribute(e,r),Zc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector($c,l.x),f.addScaledVector(Kc,l.y),f.addScaledVector(Zc,l.z),f}static isFrontFacing(e,t,r,a){return oi.subVectors(r,t),Ni.subVectors(e,t),oi.cross(Ni).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Kn.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;Ns.subVectors(a,r),Is.subVectors(l,r),Yc.subVectors(e,r);const h=Ns.dot(Yc),m=Is.dot(Yc);if(h<=0&&m<=0)return t.copy(r);qc.subVectors(e,a);const g=Ns.dot(qc),v=Is.dot(qc);if(g>=0&&v<=g)return t.copy(a);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(r).addScaledVector(Ns,f);jc.subVectors(e,l);const S=Ns.dot(jc),T=Is.dot(jc);if(T>=0&&S<=T)return t.copy(l);const C=S*m-h*T;if(C<=0&&m>=0&&T<=0)return c=m/(m-T),t.copy(r).addScaledVector(Is,c);const y=g*T-S*v;if(y<=0&&v-g>=0&&S-T>=0)return um.subVectors(l,a),c=(v-g)/(v-g+(S-T)),t.copy(a).addScaledVector(um,c);const _=1/(y+C+x);return f=C*_,c=x*_,t.copy(r).addScaledVector(Ns,f).addScaledVector(Is,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=i0(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=Jc(f,l,e+1/3),this.g=Jc(f,l,e),this.b=Jc(f,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=$n){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return At.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,a=xn.g,l=xn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,m;const g=(c+f)/2;if(c===f)h=0,m=0;else{const v=f-c;switch(m=g<=.5?v/(f+c):v/(2-f-c),f){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=$n){At.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,a=xn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(gl);const r=Ic(_r.h,gl.h,t),a=Ic(_r.s,gl.s,t),l=Ic(_r.l,gl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ct;Ct.NAMES=dg;let S0=0;class Jo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=qs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pf&&(r.blendSrc=this.blendSrc),this.blendDst!==mf&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yo extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Y,_l=new Ge;let M0=0;class ui{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Qf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qf&&(e.usage=this.usage),e}}class hg extends ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class pg extends ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}let E0=0;const jn=new Ht,Qc=new Nn,Fs=new Y,kn=new Zo,Ho=new Zo,an=new Y;class xi extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?pg:hg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,r){return jn.makeTranslation(e,t,r),this.applyMatrix4(jn),this}scale(e,t,r){return jn.makeScale(e,t,r),this.applyMatrix4(jn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];kn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];Ho.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(kn.min,Ho.min),kn.expandByPoint(an),an.addVectors(kn.max,Ho.max),kn.expandByPoint(an)):(kn.expandByPoint(Ho.min),kn.expandByPoint(Ho.max))}kn.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)an.fromBufferAttribute(c,m),h&&(Fs.fromBufferAttribute(e,m),an.add(Fs)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let G=0;G<r.count;G++)c[G]=new Y,h[G]=new Y;const m=new Y,g=new Y,v=new Y,x=new Ge,S=new Ge,T=new Ge,C=new Y,y=new Y;function _(G,P,w){m.fromBufferAttribute(r,G),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,w),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,w),g.sub(m),v.sub(m),S.sub(x),T.sub(x);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(V),c[G].add(C),c[P].add(C),c[w].add(C),h[G].add(y),h[P].add(y),h[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,P=N.length;G<P;++G){const w=N[G],V=w.start,fe=w.count;for(let ee=V,ne=V+fe;ee<ne;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new Y,R=new Y,X=new Y,O=new Y;function I(G){X.fromBufferAttribute(a,G),O.copy(X);const P=c[G];L.copy(P),L.sub(X.multiplyScalar(X.dot(P))).normalize(),R.crossVectors(O,P);const V=R.dot(h[G])<0?-1:1;f.setXYZW(G,L.x,L.y,L.z,V)}for(let G=0,P=N.length;G<P;++G){const w=N[G],V=w.start,fe=w.count;for(let ee=V,ne=V+fe;ee<ne;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Y,l=new Y,f=new Y,c=new Y,h=new Y,m=new Y,g=new Y,v=new Y;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),f.fromBufferAttribute(t,y),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,T),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),c.add(g),h.add(g),m.add(g),r.setXYZ(T,c.x,c.y,c.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),f.fromBufferAttribute(t,x+2),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,v=c.normalized,x=new m.constructor(h.length*g);let S=0,T=0;for(let C=0,y=h.length;C<y;C++){c.isInterleavedBufferAttribute?S=h[C]*c.data.stride+c.offset:S=h[C]*g;for(let _=0;_<g;_++)x[T++]=m[S++]}return new ui(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);t.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=e(x,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const m=f[c];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Ht,Vr=new hd,vl=new dd,fm=new Y,xl=new Y,yl=new Y,Sl=new Y,ef=new Y,Ml=new Y,dm=new Y,El=new Y;class Zn extends Nn{constructor(e=new xi,t=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],v=l[h];g!==0&&(ef.fromBufferAttribute(v,e),f?Ml.addScaledVector(ef,g):Ml.addScaledVector(ef.sub(t),g))}t.add(Ml)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(vl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(vl,fm)===null||Vr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(cm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,X=L;R<X;R+=3){const O=c.getX(R),I=c.getX(R+1),G=c.getX(R+2);a=Tl(this,_,e,r,m,g,v,O,I,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(c.count,S.start+S.count);for(let y=T,_=C;y<_;y+=3){const N=c.getX(y),L=c.getX(y+1),R=c.getX(y+2);a=Tl(this,f,e,r,m,g,v,N,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let T=0,C=x.length;T<C;T++){const y=x[T],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,X=L;R<X;R+=3){const O=R,I=R+1,G=R+2;a=Tl(this,_,e,r,m,g,v,O,I,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=T,_=C;y<_;y+=3){const N=y,L=y+1,R=y+2;a=Tl(this,f,e,r,m,g,v,N,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function T0(s,e,t,r,a,l,f,c){let h;if(e.side===Un?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Tr,c),h===null)return null;El.copy(c),El.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(El);return m<t.near||m>t.far?null:{distance:m,point:El.clone(),object:s}}function Tl(s,e,t,r,a,l,f,c,h,m){s.getVertexPosition(c,xl),s.getVertexPosition(h,yl),s.getVertexPosition(m,Sl);const g=T0(s,e,t,r,xl,yl,Sl,dm);if(g){const v=new Y;Kn.getBarycoord(dm,xl,yl,Sl,v),a&&(g.uv=Kn.getInterpolatedAttribute(a,c,h,m,v,new Ge)),l&&(g.uv1=Kn.getInterpolatedAttribute(l,c,h,m,v,new Ge)),f&&(g.normal=Kn.getInterpolatedAttribute(f,c,h,m,v,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:c,b:h,c:m,normal:new Y,materialIndex:0};Kn.getNormal(xl,yl,Sl,x.normal),g.face=x,g.barycoord=v}return g}class Qo extends xi{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],m=[],g=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,t,e,f,l,0),T("z","y","x",1,-1,r,t,-e,f,l,1),T("x","z","y",1,1,e,r,t,a,f,2),T("x","z","y",1,-1,e,r,-t,a,f,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(v,2));function T(C,y,_,N,L,R,X,O,I,G,P){const w=R/I,V=X/G,fe=R/2,ee=X/2,ne=O/2,ce=I+1,ae=G+1;let le=0,F=0;const ue=new Y;for(let ie=0;ie<ae;ie++){const U=ie*V-ee;for(let Z=0;Z<ce;Z++){const Ue=Z*w-fe;ue[C]=Ue*N,ue[y]=U*L,ue[_]=ne,m.push(ue.x,ue.y,ue.z),ue[C]=0,ue[y]=0,ue[_]=O>0?1:-1,g.push(ue.x,ue.y,ue.z),v.push(Z/I),v.push(1-ie/G),le+=1}}for(let ie=0;ie<G;ie++)for(let U=0;U<I;U++){const Z=x+U+ce*ie,Ue=x+U+ce*(ie+1),te=x+(U+1)+ce*(ie+1),pe=x+(U+1)+ce*ie;h.push(Z,Ue,pe),h.push(Ue,te,pe),F+=6}c.addGroup(S,F,P),S+=F,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=no(s[t]);for(const a in r)e[a]=r[a]}return e}function w0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const A0={clone:no,merge:Tn};var C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class gg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new Y,hm=new Ge,pm=new Ge;class wn extends gg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,hm,pm),t.subVectors(pm,hm)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,zs=1;class P0 extends Nn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wn(Os,zs,e,t);a.layers=this.layers,this.add(a);const l=new wn(Os,zs,e,t);l.layers=this.layers,this.add(l);const f=new wn(Os,zs,e,t);f.layers=this.layers,this.add(f);const c=new wn(Os,zs,e,t);c.layers=this.layers,this.add(c);const h=new wn(Os,zs,e,t);h.layers=this.layers,this.add(h);const m=new wn(Os,zs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const m of t)this.remove(m);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class _g extends An{constructor(e,t,r,a,l,f,c,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,a,l,f,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new _g(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Qo(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Sr});l.uniforms.tEquirect.value=t;const f=new Zn(a,l),c=t.minFilter;return t.minFilter===Kr&&(t.minFilter=vi),new P0(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}class wl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),_=this._getHandJoint(m,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new wl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}let D0=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class U0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qf,this.updateRanges=[],this.version=0,this.uuid=Er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new Y;class Xl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=_i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vg extends Jo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Vo=new Y,ks=new Y,Hs=new Y,Vs=new Ge,Go=new Ge,xg=new Ht,Al=new Y,Wo=new Y,Cl=new Y,mm=new Ge,nf=new Ge,gm=new Ge;class N0 extends Nn{constructor(e=new vg){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new xi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new U0(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Xl(r,3,0,!1)),Bs.setAttribute("uv",new Xl(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Rl(Al.set(-.5,-.5,0),Hs,f,ks,a,l),Rl(Wo.set(.5,-.5,0),Hs,f,ks,a,l),Rl(Cl.set(.5,.5,0),Hs,f,ks,a,l),mm.set(0,0),nf.set(1,0),gm.set(1,1);let c=e.ray.intersectTriangle(Al,Wo,Cl,!1,Vo);if(c===null&&(Rl(Wo.set(-.5,.5,0),Hs,f,ks,a,l),nf.set(0,1),c=e.ray.intersectTriangle(Al,Cl,Wo,!1,Vo),c===null))return;const h=e.ray.origin.distanceTo(Vo);h<e.near||h>e.far||t.push({distance:h,point:Vo.clone(),uv:Kn.getInterpolation(Vo,Al,Wo,Cl,mm,nf,gm,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rl(s,e,t,r,a,l){Vs.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Go.x=l*Vs.x-a*Vs.y,Go.y=a*Vs.x+l*Vs.y):Go.copy(Vs),s.copy(e),s.x+=Go.x,s.y+=Go.y,s.applyMatrix4(xg)}const rf=new Y,I0=new Y,F0=new dt;class Oi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=rf.subVectors(r,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(rf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||F0.getNormalMatrix(e),a=this.coplanarPoint(rf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new dd,Pl=new Y;class yg{constructor(e=new Oi,t=new Oi,r=new Oi,a=new Oi,l=new Oi,f=new Oi){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ki){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],m=a[4],g=a[5],v=a[6],x=a[7],S=a[8],T=a[9],C=a[10],y=a[11],_=a[12],N=a[13],L=a[14],R=a[15];if(r[0].setComponents(h-l,x-m,y-S,R-_).normalize(),r[1].setComponents(h+l,x+m,y+S,R+_).normalize(),r[2].setComponents(h+f,x+g,y+T,R+N).normalize(),r[3].setComponents(h-f,x-g,y-T,R-N).normalize(),r[4].setComponents(h-c,x-v,y-C,R-L).normalize(),t===ki)r[5].setComponents(h+c,x+v,y+C,R+L).normalize();else if(t===Gl)r[5].setComponents(c,v,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _m extends An{constructor(e,t,r,a,l,f,c,h,m){super(e,t,r,a,l,f,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sg extends An{constructor(e,t,r,a,l,f,c,h,m,g=js){if(g!==js&&g!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===js&&(r=Zr),r===void 0&&g===eo&&(r=Qs),super(null,a,l,f,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:li,this.minFilter=h!==void 0?h:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,m;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),m=r[a]-f,m<0)c=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const g=r[a],x=r[a+1]-g,S=(f-g)/x;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new Ge:new Y);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,a=[],l=[],f=[],c=new Y,h=new Ht;for(let S=0;S<=e;S++){const T=S/e;a[S]=this.getTangentAt(T,new Y)}l[0]=new Y,f[0]=new Y;let m=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),x=Math.abs(a[0].z);g<=m&&(m=g,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),x<=m&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const T=Math.acos(gt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,T))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let T=1;T<=e;T++)l[T].applyMatrix4(h.makeRotationAxis(a[T],S*T)),f[T].crossVectors(a[T],l[T])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mg extends Wi{constructor(e=0,t=0,r=1,a=1,l=0,f=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=f,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new Ge){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const f=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(f?l=0:l=a),this.aClockwise===!0&&!f&&(l===a?l=-a:l=l-a);const c=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(c),m=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,S=m-this.aY;h=x*g-S*v+this.aX,m=x*v+S*g+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class O0 extends Mg{constructor(e,t,r,a,l,f){super(e,t,r,r,a,l,f),this.isArcCurve=!0,this.type="ArcCurve"}}function md(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,m){a(f,c,m*(c-l),m*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,m,g,v){let x=(f-l)/m-(c-l)/(m+g)+(c-f)/g,S=(c-f)/g-(h-f)/(g+v)+(h-c)/v;x*=g,S*=g,a(f,c,x,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const bl=new Y,sf=new md,of=new md,af=new md;class td extends Wi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let m,g;this.closed||c>0?m=a[(c-1)%l]:(bl.subVectors(a[0],a[1]).add(a[0]),m=bl);const v=a[c%l],x=a[(c+1)%l];if(this.closed||c+2<l?g=a[(c+2)%l]:(bl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(v),S),C=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);C<1e-4&&(C=1),T<1e-4&&(T=C),y<1e-4&&(y=C),sf.initNonuniformCatmullRom(m.x,v.x,x.x,g.x,T,C,y),of.initNonuniformCatmullRom(m.y,v.y,x.y,g.y,T,C,y),af.initNonuniformCatmullRom(m.z,v.z,x.z,g.z,T,C,y)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(m.x,v.x,x.x,g.x,this.tension),of.initCatmullRom(m.y,v.y,x.y,g.y,this.tension),af.initCatmullRom(m.z,v.z,x.z,g.z,this.tension));return r.set(sf.calc(h),of.calc(h),af.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vm(s,e,t,r,a){const l=(r-e)*.5,f=(a-t)*.5,c=s*s,h=s*c;return(2*t-2*r+l+f)*h+(-3*t+3*r-2*l-f)*c+l*s+t}function z0(s,e){const t=1-s;return t*t*e}function B0(s,e){return 2*(1-s)*s*e}function k0(s,e){return s*s*e}function qo(s,e,t,r){return z0(s,e)+B0(s,t)+k0(s,r)}function H0(s,e){const t=1-s;return t*t*t*e}function V0(s,e){const t=1-s;return 3*t*t*s*e}function G0(s,e){return 3*(1-s)*s*s*e}function W0(s,e){return s*s*s*e}function jo(s,e,t,r,a){return H0(s,e)+V0(s,t)+G0(s,r)+W0(s,a)}class X0 extends Wi{constructor(e=new Ge,t=new Ge,r=new Ge,a=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(jo(e,a.x,l.x,f.x,c.x),jo(e,a.y,l.y,f.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y0 extends Wi{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(jo(e,a.x,l.x,f.x,c.x),jo(e,a.y,l.y,f.y,c.y),jo(e,a.z,l.z,f.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q0 extends Wi{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends Wi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends Wi{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(qo(e,a.x,l.x,f.x),qo(e,a.y,l.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eg extends Wi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(qo(e,a.x,l.x,f.x),qo(e,a.y,l.y,f.y),qo(e,a.z,l.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,a=this.points,l=(a.length-1)*e,f=Math.floor(l),c=l-f,h=a[f===0?f:f-1],m=a[f],g=a[f>a.length-2?a.length-1:f+1],v=a[f>a.length-3?a.length-1:f+2];return r.set(vm(c,h.x,m.x,g.x,v.x),vm(c,h.y,m.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ge().fromArray(a))}return this}}var Z0=Object.freeze({__proto__:null,ArcCurve:O0,CatmullRomCurve3:td,CubicBezierCurve:X0,CubicBezierCurve3:Y0,EllipseCurve:Mg,LineCurve:q0,LineCurve3:j0,QuadraticBezierCurve:$0,QuadraticBezierCurve3:Eg,SplineCurve:K0});class $l extends xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),m=c+1,g=h+1,v=e/c,x=t/h,S=[],T=[],C=[],y=[];for(let _=0;_<g;_++){const N=_*x-f;for(let L=0;L<m;L++){const R=L*v-l;T.push(R,-N,0),C.push(0,0,1),y.push(L/c),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<c;N++){const L=N+m*_,R=N+m*(_+1),X=N+1+m*(_+1),O=N+1+m*_;S.push(L,R,O),S.push(R,X,O)}this.setIndex(S),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yl extends xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+c,Math.PI);let m=0;const g=[],v=new Y,x=new Y,S=[],T=[],C=[],y=[];for(let _=0;_<=r;_++){const N=[],L=_/r;let R=0;_===0&&f===0?R=.5/t:_===r&&h===Math.PI&&(R=-.5/t);for(let X=0;X<=t;X++){const O=X/t;v.x=-e*Math.cos(a+O*l)*Math.sin(f+L*c),v.y=e*Math.cos(f+L*c),v.z=e*Math.sin(a+O*l)*Math.sin(f+L*c),T.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(O+R,1-L),N.push(m++)}g.push(N)}for(let _=0;_<r;_++)for(let N=0;N<t;N++){const L=g[_][N+1],R=g[_][N],X=g[_+1][N],O=g[_+1][N+1];(_!==0||f>0)&&S.push(L,R,O),(_!==r-1||h<Math.PI)&&S.push(R,X,O)}this.setIndex(S),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ql extends xi{constructor(e=new Eg(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const f=e.computeFrenetFrames(t,l);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const c=new Y,h=new Y,m=new Ge;let g=new Y;const v=[],x=[],S=[],T=[];C(),this.setIndex(T),this.setAttribute("position",new Hn(v,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(S,2));function C(){for(let L=0;L<t;L++)y(L);y(l===!1?t:0),N(),_()}function y(L){g=e.getPointAt(L/t,g);const R=f.normals[L],X=f.binormals[L];for(let O=0;O<=a;O++){const I=O/a*Math.PI*2,G=Math.sin(I),P=-Math.cos(I);h.x=P*R.x+G*X.x,h.y=P*R.y+G*X.y,h.z=P*R.z+G*X.z,h.normalize(),x.push(h.x,h.y,h.z),c.x=g.x+r*h.x,c.y=g.y+r*h.y,c.z=g.z+r*h.z,v.push(c.x,c.y,c.z)}}function _(){for(let L=1;L<=t;L++)for(let R=1;R<=a;R++){const X=(a+1)*(L-1)+(R-1),O=(a+1)*L+(R-1),I=(a+1)*L+R,G=(a+1)*(L-1)+R;T.push(X,O,G),T.push(O,I,G)}}function N(){for(let L=0;L<=t;L++)for(let R=0;R<=a;R++)m.x=L/t,m.y=R/a,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ql(new Z0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class J0 extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kl extends gg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ex extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const xm=new Ht;class tx{constructor(e,t,r=0,a=1/0){this.ray=new hd(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xm),this}intersectObject(e,t=!0,r=[]){return nd(e,this,r,t),r.sort(ym),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)nd(e[a],this,r,t);return r.sort(ym),r}}function ym(s,e){return s.distance-e.distance}function nd(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let f=0,c=l.length;f<c;f++)nd(l[f],e,t,!0)}}class Sm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Mm(s,e,t,r){const a=nx(r);switch(t){case tg:return s*e;case ig:return s*e;case rg:return s*e*2;case sg:return s*e/a.components*a.byteLength;case ud:return s*e/a.components*a.byteLength;case og:return s*e*2/a.components*a.byteLength;case cd:return s*e*2/a.components*a.byteLength;case ng:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case fd:return s*e*4/a.components*a.byteLength;case Il:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Cf:case Pf:return Math.max(s,8)*Math.max(e,8)/2;case Lf:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case jf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ag:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(s){switch(s){case Vi:case Jm:return{byteLength:1,components:1};case $o:case Qm:case Ko:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Zr:case od:case Bi:return{byteLength:4,components:1};case eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tg(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ix(s){const e=new WeakMap;function t(c,h){const m=c.array,g=c.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),c.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)c.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:v}}function r(c,h,m){const g=h.array,v=h.updateRanges;if(s.bindBuffer(m,c),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],C=v[S];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,v[x]=C)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const C=v[S];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(s.deleteBuffer(h.buffer),e.delete(c))}function f(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const m=e.get(c);if(m===void 0)e.set(c,t(c,h));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,h),m.version=c.version}}return{get:a,remove:l,update:f}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_x=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cx=`#define PI 3.141592653589793
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
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ny=`struct PhysicalMaterial {
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
}`,iy=`
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
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
}`,cS=`#if DEPTH_PACKING == 3200
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
}`,fS=`#define DISTANCE
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
}`,dS=`#define DISTANCE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,vS=`uniform vec3 diffuse;
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
}`,xS=`#define LAMBERT
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define MATCAP
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
}`,MS=`#define MATCAP
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
}`,ES=`#define NORMAL
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
}`,TS=`#define NORMAL
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
}`,wS=`#define PHONG
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
}`,AS=`#define PHONG
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
}`,CS=`#define STANDARD
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
}`,RS=`#define STANDARD
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
}`,PS=`#define TOON
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
}`,bS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,DS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,IS=`uniform float rotation;
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
}`,FS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:rx,alphahash_pars_fragment:sx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:lx,alphatest_pars_fragment:ux,aomap_fragment:cx,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:hx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:_x,bumpmap_pars_fragment:vx,clipping_planes_fragment:xx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Mx,color_fragment:Ex,color_pars_fragment:Tx,color_pars_vertex:wx,color_vertex:Ax,common:Cx,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Px,displacementmap_pars_vertex:bx,displacementmap_vertex:Lx,emissivemap_fragment:Dx,emissivemap_pars_fragment:Ux,colorspace_fragment:Nx,colorspace_pars_fragment:Ix,envmap_fragment:Fx,envmap_common_pars_fragment:Ox,envmap_pars_fragment:zx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Kx,envmap_vertex:kx,fog_vertex:Hx,fog_pars_vertex:Vx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:Yx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:$x,lights_toon_fragment:Zx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Qx,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:ry,lights_fragment_end:sy,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:uy,map_fragment:cy,map_pars_fragment:fy,map_particle_fragment:dy,map_particle_pars_fragment:hy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:vy,morphtarget_pars_vertex:xy,morphtarget_vertex:yy,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:Ey,normal_pars_vertex:Ty,normal_vertex:wy,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Cy,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Py,iridescence_pars_fragment:by,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Uy,project_vertex:Ny,dithering_fragment:Iy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:ky,shadowmap_vertex:Hy,shadowmask_pars_fragment:Vy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:Yy,specularmap_fragment:qy,specularmap_pars_fragment:jy,tonemapping_fragment:$y,tonemapping_pars_fragment:Ky,transmission_fragment:Zy,transmission_pars_fragment:Jy,uv_pars_fragment:Qy,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:uS,depth_frag:cS,distanceRGBA_vert:fS,distanceRGBA_frag:dS,equirect_vert:hS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:_S,meshbasic_frag:vS,meshlambert_vert:xS,meshlambert_frag:yS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:ES,meshnormal_frag:TS,meshphong_vert:wS,meshphong_frag:AS,meshphysical_vert:CS,meshphysical_frag:RS,meshtoon_vert:PS,meshtoon_frag:bS,points_vert:LS,points_frag:DS,shadow_vert:US,shadow_frag:NS,sprite_vert:IS,sprite_frag:FS},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},gi={basic:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Tn([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Tn([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};gi.physical={uniforms:Tn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ll={r:0,b:0,g:0},Wr=new Gi,OS=new Ht;function zS(s,e,t,r,a,l,f){const c=new Ct(0);let h=l===!0?0:1,m,g,v=null,x=0,S=null;function T(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function C(L){let R=!1;const X=T(L);X===null?_(c,h):X&&X.isColor&&(_(X,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,R){const X=T(R);X&&(X.isCubeTexture||X.mapping===jl)?(g===void 0&&(g=new Zn(new Qo(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:no(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(R.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Wr)),g.material.toneMapped=At.getTransfer(X.colorSpace)!==bt,(v!==X||x!==X.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=X,x=X.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new Zn(new $l(2,2),new wr({name:"BackgroundMaterial",uniforms:no(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=At.getTransfer(X.colorSpace)!==bt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,R){L.getRGB(Ll,mg(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,R,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,R=1){c.set(L),h=R,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(c,h)},render:C,addToRenderList:y,dispose:N}}function BS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,f=!1;function c(w,V,fe,ee,ne){let ce=!1;const ae=v(ee,fe,V);l!==ae&&(l=ae,m(l.object)),ce=S(w,ee,fe,ne),ce&&T(w,ee,fe,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,R(w,V,fe,ee),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,V,fe){const ee=fe.wireframe===!0;let ne=r[w.id];ne===void 0&&(ne={},r[w.id]=ne);let ce=ne[V.id];ce===void 0&&(ce={},ne[V.id]=ce);let ae=ce[ee];return ae===void 0&&(ae=x(h()),ce[ee]=ae),ae}function x(w){const V=[],fe=[],ee=[];for(let ne=0;ne<t;ne++)V[ne]=0,fe[ne]=0,ee[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:fe,attributeDivisors:ee,object:w,attributes:{},index:null}}function S(w,V,fe,ee){const ne=l.attributes,ce=V.attributes;let ae=0;const le=fe.getAttributes();for(const F in le)if(le[F].location>=0){const ie=ne[F];let U=ce[F];if(U===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ee}function T(w,V,fe,ee){const ne={},ce=V.attributes;let ae=0;const le=fe.getAttributes();for(const F in le)if(le[F].location>=0){let ie=ce[F];ie===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),ne[F]=U,ae++}l.attributes=ne,l.attributesNum=ae,l.index=ee}function C(){const w=l.newAttributes;for(let V=0,fe=w.length;V<fe;V++)w[V]=0}function y(w){_(w,0)}function _(w,V){const fe=l.newAttributes,ee=l.enabledAttributes,ne=l.attributeDivisors;fe[w]=1,ee[w]===0&&(s.enableVertexAttribArray(w),ee[w]=1),ne[w]!==V&&(s.vertexAttribDivisor(w,V),ne[w]=V)}function N(){const w=l.newAttributes,V=l.enabledAttributes;for(let fe=0,ee=V.length;fe<ee;fe++)V[fe]!==w[fe]&&(s.disableVertexAttribArray(fe),V[fe]=0)}function L(w,V,fe,ee,ne,ce,ae){ae===!0?s.vertexAttribIPointer(w,V,fe,ne,ce):s.vertexAttribPointer(w,V,fe,ee,ne,ce)}function R(w,V,fe,ee){C();const ne=ee.attributes,ce=fe.getAttributes(),ae=V.defaultAttributeValues;for(const le in ce){const F=ce[le];if(F.location>=0){let ue=ne[le];if(ue===void 0&&(le==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),le==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const ie=ue.normalized,U=ue.itemSize,Z=e.get(ue);if(Z===void 0)continue;const Ue=Z.buffer,te=Z.type,pe=Z.bytesPerElement,Se=te===s.INT||te===s.UNSIGNED_INT||ue.gpuType===od;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Re=ye.stride,Ze=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<F.locationSize;Ye++)_(F.location+Ye,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<F.locationSize;Ye++)y(F.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ye=0;Ye<F.locationSize;Ye++)L(F.location+Ye,U/F.locationSize,te,ie,Re*pe,(Ze+U/F.locationSize*Ye)*pe,Se)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<F.locationSize;ye++)_(F.location+ye,ue.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<F.locationSize;ye++)y(F.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ye=0;ye<F.locationSize;ye++)L(F.location+ye,U/F.locationSize,te,ie,U*pe,U/F.locationSize*ye*pe,Se)}}else if(ae!==void 0){const ie=ae[le];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(F.location,ie);break;case 3:s.vertexAttrib3fv(F.location,ie);break;case 4:s.vertexAttrib4fv(F.location,ie);break;default:s.vertexAttrib1fv(F.location,ie)}}}}N()}function X(){G();for(const w in r){const V=r[w];for(const fe in V){const ee=V[fe];for(const ne in ee)g(ee[ne].object),delete ee[ne];delete V[fe]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const fe in V){const ee=V[fe];for(const ne in ee)g(ee[ne].object),delete ee[ne];delete V[fe]}delete r[w.id]}function I(w){for(const V in r){const fe=r[V];if(fe[w.id]===void 0)continue;const ee=fe[w.id];for(const ne in ee)g(ee[ne].object),delete ee[ne];delete fe[w.id]}}function G(){P(),f=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:G,resetDefaultState:P,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function kS(s,e,t){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),t.update(g,r,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),t.update(g,r,v))}function c(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];t.update(S,r,1)}function h(m,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let T=0;for(let C=0;C<v;C++)T+=g[C]*x[C];t.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function HS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const G=I===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!G)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:c,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:X,maxSamples:O}}function VS(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new Oi,c=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!a||T===null||T.length===0||l&&!y)l?g(null):m();else{const N=l?0:r,L=N*4;let R=_.clippingState||null;h.value=R,R=g(T,x,L,S);for(let X=0;X!==L;++X)R[X]=t[X];_.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,T){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=h.value,T!==!0||y===null){const _=S+C*4,N=x.matrixWorldInverse;c.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,R=S;L!==C;++L,R+=4)f.copy(v[L]).applyMatrix4(N,c),f.normal.toArray(y,R),y[R+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function GS(s){let e=new WeakMap;function t(f,c){return c===Ef?f.mapping=Zs:c===Tf&&(f.mapping=Js),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Ef||c===Tf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new b0(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),t(m.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ys=4,Em=[.125,.215,.35,.446,.526,.582],jr=20,lf=new kl,Tm=new Ct;let uf=null,cf=0,ff=0,df=!1;const Yr=(1+Math.sqrt(5))/2,Gs=1/Yr,wm=[new Y(-Yr,Gs,0),new Y(Yr,Gs,0),new Y(-Gs,0,Yr),new Y(Gs,0,Yr),new Y(0,Yr,-Gs),new Y(0,Yr,Gs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){uf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,cf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ko,format:ai,colorSpace:to,depthBuffer:!1},a=Cm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WS(l)),this._blurMaterial=XS(l,e,t)}return a}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,lf)}_sceneToCubeUV(e,t,r,a){const c=new wn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Tm),g.toneMapping=Mr,g.autoClear=!1;const S=new Yo({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),T=new Zn(new Qo,S);let C=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,C=!0):(S.color.copy(Tm),C=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):N===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const L=this._cubeSize;Dl(a,N*L,_>2?L:0,L,L),g.setRenderTarget(a),C&&g.render(T,c),g.render(e,c)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Zs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Zn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Dl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,lf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=wm[(a-l-1)%wm.length];this._blur(e,l-1,l,f,c)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Zn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*jr-1),C=l/T,y=isFinite(l)?1+Math.floor(g*C):jr;y>jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${jr}`);const _=[];let N=0;for(let I=0;I<jr;++I){const G=I/C,P=Math.exp(-G*G/2);_.push(P),I===0?N+=P:I<y&&(N+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const R=this._sizeLods[a],X=3*R*(a>L-Ys?a-L+Ys:0),O=4*(this._cubeSize-R);Dl(t,X,O,3*R,2*R),h.setRenderTarget(t),h.render(v,lf)}}function WS(s){const e=[],t=[],r=[];let a=s;const l=s-Ys+1+Em.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-Ys?h=Em[f-s+Ys-1]:f===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,C=3,y=2,_=1,N=new Float32Array(C*T*S),L=new Float32Array(y*T*S),R=new Float32Array(_*T*S);for(let O=0;O<S;O++){const I=O%3*2/3-1,G=O>2?0:-1,P=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];N.set(P,C*T*O),L.set(x,y*T*O);const w=[O,O,O,O,O,O];R.set(w,_*T*O)}const X=new xi;X.setAttribute("position",new ui(N,C)),X.setAttribute("uv",new ui(L,y)),X.setAttribute("faceIndex",new ui(R,_)),e.push(X),a>Ys&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Cm(s,e,t){const r=new Jr(s,e,t);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function XS(s,e,t){const r=new Float32Array(jr),a=new Y(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Pm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function YS(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===Ef||h===Tf,g=h===Zs||h===Js;if(m||g){let v=e.get(c);const x=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new Am(s)),v=m?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const S=c.image;return m&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new Am(s)),v=m?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",l),v.texture):null}}}return c}function a(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function qS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function jS(s,e,t,r){const a={},l=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,T=v.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let L=0,R=N.length;L<R;L+=3){const X=N[L+0],O=N[L+1],I=N[L+2];x.push(X,O,O,I,I,X)}}else if(T!==void 0){const N=T.array;C=T.version;for(let L=0,R=N.length/3-1;L<R;L+=3){const X=L+0,O=L+1,I=L+2;x.push(X,O,O,I,I,X)}}else return;const y=new(ug(x)?pg:hg)(x,1);y.version=C;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function $S(s,e,t){let r;function a(x){r=x}let l,f;function c(x){l=x.type,f=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*f),t.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*f,T),t.update(S,r,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];t.update(y,r,1)}function v(x,S,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,C,0,T);let _=0;for(let N=0;N<T;N++)_+=S[N]*C[N];t.update(_,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function KS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function ZS(s,e,t){const r=new WeakMap,a=new Yt;function l(f,c,h){const m=f.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(c);if(x===void 0||x.count!==v){let w=function(){G.dispose(),r.delete(c),c.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const T=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],N=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let R=0;T===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let X=c.attributes.position.count*R,O=1;X>e.maxTextureSize&&(O=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const I=new Float32Array(X*O*4*v),G=new fg(I,X,O,v);G.type=Bi,G.needsUpdate=!0;const P=R*4;for(let V=0;V<v;V++){const fe=_[V],ee=N[V],ne=L[V],ce=X*O*4*V;for(let ae=0;ae<fe.count;ae++){const le=ae*P;T===!0&&(a.fromBufferAttribute(fe,ae),I[ce+le+0]=a.x,I[ce+le+1]=a.y,I[ce+le+2]=a.z,I[ce+le+3]=0),C===!0&&(a.fromBufferAttribute(ee,ae),I[ce+le+4]=a.x,I[ce+le+5]=a.y,I[ce+le+6]=a.z,I[ce+le+7]=0),y===!0&&(a.fromBufferAttribute(ne,ae),I[ce+le+8]=a.x,I[ce+le+9]=a.y,I[ce+le+10]=a.z,I[ce+le+11]=ne.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new Ge(X,O)},r.set(c,x),c.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const C=c.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function JS(s,e,t,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}const wg=new An,bm=new Sg(1,1),Ag=new fg,Cg=new h0,Rg=new _g,Lm=[],Dm=[],Um=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Lm[a];if(l===void 0&&(l=new Float32Array(a),Lm[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Kl(s,e){let t=Dm[e];t===void 0&&(t=new Int32Array(e),Dm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function iM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),en(t,r)}}function rM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Nm.set(r),s.uniformMatrix3fv(this.addr,!1,Nm),en(t,r)}}function sM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),en(t,r)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function pM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=lg,l=bm):l=wg,t.setTexture2D(e||l,a)}function mM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Cg,a)}function gM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Rg,a)}function _M(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Ag,a)}function vM(s){switch(s){case 5126:return QS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return uM;case 5125:return cM;case 36294:return fM;case 36295:return dM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}function xM(s,e){s.uniform1fv(this.addr,e)}function yM(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function SM(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function MM(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function EM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function TM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AM(s,e){s.uniform1iv(this.addr,e)}function CM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function PM(s,e){s.uniform4iv(this.addr,e)}function bM(s,e){s.uniform1uiv(this.addr,e)}function LM(s,e){s.uniform2uiv(this.addr,e)}function DM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function NM(s,e,t){const r=this.cache,a=e.length,l=Kl(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||wg,l[f])}function IM(s,e,t){const r=this.cache,a=e.length,l=Kl(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Cg,l[f])}function FM(s,e,t){const r=this.cache,a=e.length,l=Kl(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Rg,l[f])}function OM(s,e,t){const r=this.cache,a=e.length,l=Kl(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Ag,l[f])}function zM(s){switch(s){case 5126:return xM;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return EM;case 35675:return TM;case 35676:return wM;case 5124:case 35670:return AM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return PM;case 5125:return bM;case 36294:return LM;case 36295:return DM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=vM(t.type)}}class kM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zM(t.type)}}class HM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function VM(s,e,t){const r=s.name,a=r.length;for(hf.lastIndex=0;;){const l=hf.exec(r),f=hf.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&f+2===a){Fm(t,m===void 0?new BM(c,s,e):new kM(c,s,e));break}else{let v=t.map[c];v===void 0&&(v=new HM(c),Fm(t,v)),t=v}}}class Hl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);VM(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function Om(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const GM=37297;let WM=0;function XM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}const zm=new dt;function YM(s){At._getMatrix(zm,At.workingColorSpace,s);const e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+XM(s.getShaderSource(e),f)}else return a}function qM(s,e){const t=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jM(s,e){let t;switch(e){case zv:t="Linear";break;case Bv:t="Reinhard";break;case kv:t="Cineon";break;case Hv:t="ACESFilmic";break;case Gv:t="AgX";break;case Wv:t="Neutral";break;case Vv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new Y;function $M(){At.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function ZM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function JM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function Xo(s){return s!==""}function km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(s){return s.replace(QM,tE)}const eE=new Map;function tE(s,e){let t=ht[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(nE,iE)}function iE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Gm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function rE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function sE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Km:e="ENVMAP_BLENDING_MULTIPLY";break;case Fv:e="ENVMAP_BLENDING_MIX";break;case Ov:e="ENVMAP_BLENDING_ADD";break}return e}function lE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function uE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=rE(t),m=sE(t),g=oE(t),v=aE(t),x=lE(t),S=KM(t),T=ZM(l),C=a.createProgram();let y,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(y=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Mr?jM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),$M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),f=id(f),f=km(f,t),f=Hm(f,t),c=id(c),c=km(c,t),c=Hm(c,t),f=Vm(f),c=Vm(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+y+f,R=N+_+c,X=Om(a,a.VERTEX_SHADER,L),O=Om(a,a.FRAGMENT_SHADER,R);a.attachShader(C,X),a.attachShader(C,O),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function I(V){if(s.debug.checkShaderErrors){const fe=a.getProgramInfoLog(C).trim(),ee=a.getShaderInfoLog(X).trim(),ne=a.getShaderInfoLog(O).trim();let ce=!0,ae=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,X,O);else{const le=Bm(a,X,"vertex"),F=Bm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+le+`
`+F)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(ee===""||ne==="")&&(ae=!1);ae&&(V.diagnostics={runnable:ce,programLog:fe,vertexShader:{log:ee,prefix:y},fragmentShader:{log:ne,prefix:_}})}a.deleteShader(X),a.deleteShader(O),G=new Hl(a,C),P=JM(a,C)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(C,GM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=O,this}let cE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dE(e),t.set(e,r)),r}}class dE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function hE(s,e,t,r,a,l,f){const c=new pd,h=new fE,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,w,V,fe,ee){const ne=fe.fog,ce=ee.geometry,ae=P.isMeshStandardMaterial?fe.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),F=le&&le.mapping===jl?le.image.height:null,ue=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ie=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=ie!==void 0?ie.length:0;let Z=0;ce.morphAttributes.position!==void 0&&(Z=1),ce.morphAttributes.normal!==void 0&&(Z=2),ce.morphAttributes.color!==void 0&&(Z=3);let Ue,te,pe,Se;if(ue){const mt=gi[ue];Ue=mt.vertexShader,te=mt.fragmentShader}else Ue=P.vertexShader,te=P.fragmentShader,h.update(P),pe=h.getVertexShaderID(P),Se=h.getFragmentShaderID(P);const ye=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ze=ee.isInstancedMesh===!0,Ye=ee.isBatchedMesh===!0,Pt=!!P.map,Rt=!!P.matcap,lt=!!le,B=!!P.aoMap,ln=!!P.lightMap,pt=!!P.bumpMap,ct=!!P.normalMap,Ke=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,J=P.clearcoat>0,ge=P.dispersion>0,_e=P.iridescence>0,me=P.sheen>0,We=P.transmission>0,Ce=E&&!!P.anisotropyMap,Oe=J&&!!P.clearcoatMap,ft=J&&!!P.clearcoatNormalMap,Ee=J&&!!P.clearcoatRoughnessMap,Be=_e&&!!P.iridescenceMap,Qe=_e&&!!P.iridescenceThicknessMap,rt=me&&!!P.sheenColorMap,ze=me&&!!P.sheenRoughnessMap,H=!!P.specularMap,de=!!P.specularColorMap,Pe=!!P.specularIntensityMap,z=We&&!!P.transmissionMap,Te=We&&!!P.thicknessMap,oe=!!P.gradientMap,he=!!P.alphaMap,Ne=P.alphaTest>0,be=!!P.alphaHash,et=!!P.extensions;let xt=Mr;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=s.toneMapping);const Nt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:te,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&ee._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&ee.instanceColor!==null,instancingMorph:Ze&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:to,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Rt,envMap:lt,envMapMode:lt&&le.mapping,envMapCubeUVHeight:F,aoMap:B,lightMap:ln,bumpMap:pt,normalMap:ct,displacementMap:x&&Ke,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===$v,normalMapTangentSpace:ct&&P.normalMapType===jv,metalnessMap:qe,roughnessMap:b,anisotropy:E,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:Qe,sheen:me,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:H,specularColorMap:de,specularIntensityMap:Pe,transmission:We,transmissionMap:z,thicknessMap:Te,gradientMap:oe,opaque:P.transparent===!1&&P.blending===qs&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Ne,alphaHash:be,combine:P.combine,mapUv:Pt&&C(P.map.channel),aoMapUv:B&&C(P.aoMap.channel),lightMapUv:ln&&C(P.lightMap.channel),bumpMapUv:pt&&C(P.bumpMap.channel),normalMapUv:ct&&C(P.normalMap.channel),displacementMapUv:Ke&&C(P.displacementMap.channel),emissiveMapUv:Tt&&C(P.emissiveMap.channel),metalnessMapUv:qe&&C(P.metalnessMap.channel),roughnessMapUv:b&&C(P.roughnessMap.channel),anisotropyMapUv:Ce&&C(P.anisotropyMap.channel),clearcoatMapUv:Oe&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(P.sheenRoughnessMap.channel),specularMapUv:H&&C(P.specularMap.channel),specularColorMapUv:de&&C(P.specularColorMap.channel),specularIntensityMapUv:Pe&&C(P.specularIntensityMap.channel),transmissionMapUv:z&&C(P.transmissionMap.channel),thicknessMapUv:Te&&C(P.thicknessMap.channel),alphaMapUv:he&&C(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ct||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(Pt||he),fog:!!ne,useFog:P.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Re,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:et&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Nt.vertexUv1s=m.has(1),Nt.vertexUv2s=m.has(2),Nt.vertexUv3s=m.has(3),m.clear(),Nt}function _(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)w.push(V),w.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(N(w,P),L(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function N(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reverseDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const w=T[P.type];let V;if(w){const fe=gi[w];V=A0.clone(fe.uniforms)}else V=P.uniforms;return V}function X(P,w){let V;for(let fe=0,ee=g.length;fe<ee;fe++){const ne=g[fe];if(ne.cacheKey===w){V=ne,++V.usedTimes;break}}return V===void 0&&(V=new uE(s,w,P,l),g.push(V)),V}function O(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function I(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:X,releaseProgram:O,releaseShaderCache:I,programs:g,dispose:G}}function pE(){let s=new WeakMap;function e(f){return s.has(f)}function t(f){let c=s.get(f);return c===void 0&&(c={},s.set(f,c)),c}function r(f){s.delete(f)}function a(f,c,h){s.get(f)[c]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function mE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(v,x,S,T,C,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:C,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=C,_.group=y),e++,_}function c(v,x,S,T,C,y){const _=f(v,x,S,T,C,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(v,x,S,T,C,y){const _=f(v,x,S,T,C,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function m(v,x){t.length>1&&t.sort(v||mE),r.length>1&&r.sort(x||Wm),a.length>1&&a.sort(x||Wm)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:m}}function gE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new Xm,s.set(r,[f])):a>=l.length?(f=new Xm,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xE=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new _E,t=vE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,l=new Ht,f=new Ht;function c(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,C=0,y=0,_=0,N=0,L=0,R=0,X=0,O=0,I=0;m.sort(yE);for(let P=0,w=m.length;P<w;P++){const V=m[P],fe=V.color,ee=V.intensity,ne=V.distance,ce=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=fe.r*ee,v+=fe.g*ee,x+=fe.b*ee;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(V.sh.coefficients[ae],ee);I++}else if(V.isDirectionalLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const le=V.shadow,F=t.get(V);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,r.directionalShadow[S]=F,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=ae,S++}else if(V.isSpotLight){const ae=e.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(fe).multiplyScalar(ee),ae.distance=ne,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,r.spot[C]=ae;const le=V.shadow;if(V.map&&(r.spotLightMap[X]=V.map,X++,le.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[C]=le.matrix,V.castShadow){const F=t.get(V);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,r.spotShadow[C]=F,r.spotShadowMap[C]=ce,R++}C++}else if(V.isRectAreaLight){const ae=e.get(V);ae.color.copy(fe).multiplyScalar(ee),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=ae,y++}else if(V.isPointLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const le=V.shadow,F=t.get(V);F.shadowIntensity=le.intensity,F.shadowBias=le.bias,F.shadowNormalBias=le.normalBias,F.shadowRadius=le.radius,F.shadowMapSize=le.mapSize,F.shadowCameraNear=le.camera.near,F.shadowCameraFar=le.camera.far,r.pointShadow[T]=F,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=V.shadow.matrix,L++}r.point[T]=ae,T++}else if(V.isHemisphereLight){const ae=e.get(V);ae.skyColor.copy(V.color).multiplyScalar(ee),ae.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[_]=ae,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==C||G.rectAreaLength!==y||G.hemiLength!==_||G.numDirectionalShadows!==N||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==X||G.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+X-O,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,G.directionalLength=S,G.pointLength=T,G.spotLength=C,G.rectAreaLength=y,G.hemiLength=_,G.numDirectionalShadows=N,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=X,G.numLightProbes=I,r.version=xE++)}function h(m,g){let v=0,x=0,S=0,T=0,C=0;const y=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const L=m[_];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),f.identity(),l.copy(L.matrixWorld),l.premultiply(y),f.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:c,setupView:h,state:r}}function Ym(s){const e=new SE(s),t=[],r=[];function a(g){m.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function f(g){r.push(g)}function c(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:c,setupLightsView:h,pushLight:l,pushShadow:f}}function ME(s){let e=new WeakMap;function t(a,l=0){const f=e.get(a);let c;return f===void 0?(c=new Ym(s),e.set(a,[c])):l>=f.length?(c=new Ym(s),f.push(c)):c=f[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
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
}`;function wE(s,e,t){let r=new yg;const a=new Ge,l=new Ge,f=new Yt,c=new J0({depthPacking:qv}),h=new Q0,m={},g=t.maxTextureSize,v={[Tr]:Un,[Un]:Tr,[zi]:zi},x=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:EE,fragmentShader:TE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new xi;T.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Zn(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$m;let _=this.type;this.render=function(O,I,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending(Sr),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const ee=_!==Fi&&this.type===Fi,ne=_===Fi&&this.type!==Fi;for(let ce=0,ae=O.length;ce<ae;ce++){const le=O[ce],F=le.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const ue=F.getFrameExtents();if(a.multiply(ue),l.copy(F.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ue.x),a.x=l.x*ue.x,F.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ue.y),a.y=l.y*ue.y,F.mapSize.y=l.y)),F.map===null||ee===!0||ne===!0){const U=this.type!==Fi?{minFilter:li,magFilter:li}:{};F.map!==null&&F.map.dispose(),F.map=new Jr(a.x,a.y,U),F.map.texture.name=le.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const ie=F.getViewportCount();for(let U=0;U<ie;U++){const Z=F.getViewport(U);f.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),fe.viewport(f),F.updateMatrices(le,U),r=F.getFrustum(),R(I,G,F.camera,le,this.type)}F.isPointLightShadow!==!0&&this.type===Fi&&N(F,G),F.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,V)};function N(O,I){const G=e.update(C);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(I,null,G,x,C,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(I,null,G,S,C,null)}function L(O,I,G,P){let w=null;const V=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)w=V;else if(w=G.isPointLight===!0?h:c,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const fe=w.uuid,ee=I.uuid;let ne=m[fe];ne===void 0&&(ne={},m[fe]=ne);let ce=ne[ee];ce===void 0&&(ce=w.clone(),ne[ee]=ce,I.addEventListener("dispose",X)),w=ce}if(w.visible=I.visible,w.wireframe=I.wireframe,P===Fi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const fe=s.properties.get(w);fe.light=G}return w}function R(O,I,G,P,w){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Fi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),ne=O.material;if(Array.isArray(ne)){const ce=ee.groups;for(let ae=0,le=ce.length;ae<le;ae++){const F=ce[ae],ue=ne[F.materialIndex];if(ue&&ue.visible){const ie=L(O,ue,P,w);O.onBeforeShadow(s,O,I,G,ee,ie,F),s.renderBufferDirect(G,null,ee,ie,O,F),O.onAfterShadow(s,O,I,G,ee,ie,F)}}}else if(ne.visible){const ce=L(O,ne,P,w);O.onBeforeShadow(s,O,I,G,ee,ce,null),s.renderBufferDirect(G,null,ee,ce,O,null),O.onAfterShadow(s,O,I,G,ee,ce,null)}}const fe=O.children;for(let ee=0,ne=fe.length;ee<ne;ee++)R(fe[ee],I,G,P,w)}function X(O){O.target.removeEventListener("dispose",X);for(const G in m){const P=m[G],w=O.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const AE={[gf]:_f,[vf]:Sf,[xf]:Mf,[Ks]:yf,[_f]:gf,[Sf]:vf,[Mf]:xf,[yf]:Ks};function CE(s,e){function t(){let z=!1;const Te=new Yt;let oe=null;const he=new Yt(0,0,0,0);return{setMask:function(Ne){oe!==Ne&&!z&&(s.colorMask(Ne,Ne,Ne,Ne),oe=Ne)},setLocked:function(Ne){z=Ne},setClear:function(Ne,be,et,xt,Nt){Nt===!0&&(Ne*=xt,be*=xt,et*=xt),Te.set(Ne,be,et,xt),he.equals(Te)===!1&&(s.clearColor(Ne,be,et,xt),he.copy(Te))},reset:function(){z=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let z=!1,Te=!1,oe=null,he=null,Ne=null;return{setReversed:function(be){if(Te!==be){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ne;Ne=null,this.setClear(xt)}Te=be},getReversed:function(){return Te},setTest:function(be){be?ye(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(be){oe!==be&&!z&&(s.depthMask(be),oe=be)},setFunc:function(be){if(Te&&(be=AE[be]),he!==be){switch(be){case gf:s.depthFunc(s.NEVER);break;case _f:s.depthFunc(s.ALWAYS);break;case vf:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case xf:s.depthFunc(s.EQUAL);break;case yf:s.depthFunc(s.GEQUAL);break;case Sf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=be}},setLocked:function(be){z=be},setClear:function(be){Ne!==be&&(Te&&(be=1-be),s.clearDepth(be),Ne=be)},reset:function(){z=!1,oe=null,he=null,Ne=null,Te=!1}}}function a(){let z=!1,Te=null,oe=null,he=null,Ne=null,be=null,et=null,xt=null,Nt=null;return{setTest:function(mt){z||(mt?ye(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!z&&(s.stencilMask(mt),Te=mt)},setFunc:function(mt,qt,jt){(oe!==mt||he!==qt||Ne!==jt)&&(s.stencilFunc(mt,qt,jt),oe=mt,he=qt,Ne=jt)},setOp:function(mt,qt,jt){(be!==mt||et!==qt||xt!==jt)&&(s.stencilOp(mt,qt,jt),be=mt,et=qt,xt=jt)},setLocked:function(mt){z=mt},setClear:function(mt){Nt!==mt&&(s.clearStencil(mt),Nt=mt)},reset:function(){z=!1,Te=null,oe=null,he=null,Ne=null,be=null,et=null,xt=null,Nt=null}}}const l=new t,f=new r,c=new a,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,S=[],T=null,C=!1,y=null,_=null,N=null,L=null,R=null,X=null,O=null,I=new Ct(0,0,0),G=0,P=!1,w=null,V=null,fe=null,ee=null,ne=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,le=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(F)[1]),ae=le>=1):F.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ae=le>=2);let ue=null,ie={};const U=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),Ue=new Yt().fromArray(U),te=new Yt().fromArray(Z);function pe(z,Te,oe,he){const Ne=new Uint8Array(4),be=s.createTexture();s.bindTexture(z,be),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<oe;et++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return be}const Se={};Se[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),c.setClear(0),ye(s.DEPTH_TEST),f.setFunc(Ks),pt(!1),ct(gv),ye(s.CULL_FACE),B(Sr);function ye(z){g[z]!==!0&&(s.enable(z),g[z]=!0)}function Re(z){g[z]!==!1&&(s.disable(z),g[z]=!1)}function Ze(z,Te){return v[z]!==Te?(s.bindFramebuffer(z,Te),v[z]=Te,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ye(z,Te){let oe=S,he=!1;if(z){oe=x.get(Te),oe===void 0&&(oe=[],x.set(Te,oe));const Ne=z.textures;if(oe.length!==Ne.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,et=Ne.length;be<et;be++)oe[be]=s.COLOR_ATTACHMENT0+be;oe.length=Ne.length,he=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,he=!0);he&&s.drawBuffers(oe)}function Pt(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const Rt={[qr]:s.FUNC_ADD,[xv]:s.FUNC_SUBTRACT,[yv]:s.FUNC_REVERSE_SUBTRACT};Rt[Sv]=s.MIN,Rt[Mv]=s.MAX;const lt={[Ev]:s.ZERO,[Tv]:s.ONE,[wv]:s.SRC_COLOR,[pf]:s.SRC_ALPHA,[Lv]:s.SRC_ALPHA_SATURATE,[Pv]:s.DST_COLOR,[Cv]:s.DST_ALPHA,[Av]:s.ONE_MINUS_SRC_COLOR,[mf]:s.ONE_MINUS_SRC_ALPHA,[bv]:s.ONE_MINUS_DST_COLOR,[Rv]:s.ONE_MINUS_DST_ALPHA,[Dv]:s.CONSTANT_COLOR,[Uv]:s.ONE_MINUS_CONSTANT_COLOR,[Nv]:s.CONSTANT_ALPHA,[Iv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(z,Te,oe,he,Ne,be,et,xt,Nt,mt){if(z===Sr){C===!0&&(Re(s.BLEND),C=!1);return}if(C===!1&&(ye(s.BLEND),C=!0),z!==vv){if(z!==y||mt!==P){if((_!==qr||R!==qr)&&(s.blendEquation(s.FUNC_ADD),_=qr,R=qr),mt)switch(z){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFunc(s.ONE,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}N=null,L=null,X=null,O=null,I.set(0,0,0),G=0,y=z,P=mt}return}Ne=Ne||Te,be=be||oe,et=et||he,(Te!==_||Ne!==R)&&(s.blendEquationSeparate(Rt[Te],Rt[Ne]),_=Te,R=Ne),(oe!==N||he!==L||be!==X||et!==O)&&(s.blendFuncSeparate(lt[oe],lt[he],lt[be],lt[et]),N=oe,L=he,X=be,O=et),(xt.equals(I)===!1||Nt!==G)&&(s.blendColor(xt.r,xt.g,xt.b,Nt),I.copy(xt),G=Nt),y=z,P=!1}function ln(z,Te){z.side===zi?Re(s.CULL_FACE):ye(s.CULL_FACE);let oe=z.side===Un;Te&&(oe=!oe),pt(oe),z.blending===qs&&z.transparent===!1?B(Sr):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),l.setMask(z.colorWrite);const he=z.stencilWrite;c.setTest(he),he&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(z){w!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),w=z)}function ct(z){ye(s.CULL_FACE),z!==V&&s.cullFace(s.BACK),V=z}function Ke(z){z!==fe&&(ae&&s.lineWidth(z),fe=z)}function Tt(z,Te,oe){z?(ye(s.POLYGON_OFFSET_FILL),(ee!==Te||ne!==oe)&&(s.polygonOffset(Te,oe),ee=Te,ne=oe)):Re(s.POLYGON_OFFSET_FILL)}function qe(z){z?ye(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function b(z){z===void 0&&(z=s.TEXTURE0+ce-1),ue!==z&&(s.activeTexture(z),ue=z)}function E(z,Te,oe){oe===void 0&&(ue===null?oe=s.TEXTURE0+ce-1:oe=ue);let he=ie[oe];he===void 0&&(he={type:void 0,texture:void 0},ie[oe]=he),(he.type!==z||he.texture!==Te)&&(ue!==oe&&(s.activeTexture(oe),ue=oe),s.bindTexture(z,Te||Se[z]),he.type=z,he.texture=Te)}function J(){const z=ie[ue];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(z){Ue.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ue.copy(z))}function ze(z){te.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),te.copy(z))}function H(z,Te){let oe=m.get(Te);oe===void 0&&(oe=new WeakMap,m.set(Te,oe));let he=oe.get(z);he===void 0&&(he=s.getUniformBlockIndex(Te,z.name),oe.set(z,he))}function de(z,Te){const he=m.get(Te).get(z);h.get(Te)!==he&&(s.uniformBlockBinding(Te,he,z.__bindingPointIndex),h.set(Te,he))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,ie={},v={},x=new WeakMap,S=[],T=null,C=!1,y=null,_=null,N=null,L=null,R=null,X=null,O=null,I=new Ct(0,0,0),G=0,P=!1,w=null,V=null,fe=null,ee=null,ne=null,Ue.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),f.reset(),c.reset()}return{buffers:{color:l,depth:f,stencil:c},enable:ye,disable:Re,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:Pt,setBlending:B,setMaterial:ln,setFlipSided:pt,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:b,bindTexture:E,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:_e,texImage2D:Be,texImage3D:Qe,updateUBOMapping:H,uniformBlockBinding:de,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:rt,viewport:ze,reset:Pe}}function RE(s,e,t,r,a,l,f){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ge,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return S?new OffscreenCanvas(b,E):Wl("canvas")}function C(b,E,J){let ge=1;const _e=qe(b);if((_e.width>J||_e.height>J)&&(ge=J/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const me=Math.floor(ge*_e.width),We=Math.floor(ge*_e.height);v===void 0&&(v=T(me,We));const Ce=E?T(me,We):v;return Ce.width=me,Ce.height=We,Ce.getContext("2d").drawImage(b,0,0,me,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+me+"x"+We+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function _(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,E,J,ge,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let me=E;if(E===s.RED&&(J===s.FLOAT&&(me=s.R32F),J===s.HALF_FLOAT&&(me=s.R16F),J===s.UNSIGNED_BYTE&&(me=s.R8)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.R8UI),J===s.UNSIGNED_SHORT&&(me=s.R16UI),J===s.UNSIGNED_INT&&(me=s.R32UI),J===s.BYTE&&(me=s.R8I),J===s.SHORT&&(me=s.R16I),J===s.INT&&(me=s.R32I)),E===s.RG&&(J===s.FLOAT&&(me=s.RG32F),J===s.HALF_FLOAT&&(me=s.RG16F),J===s.UNSIGNED_BYTE&&(me=s.RG8)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RG8UI),J===s.UNSIGNED_SHORT&&(me=s.RG16UI),J===s.UNSIGNED_INT&&(me=s.RG32UI),J===s.BYTE&&(me=s.RG8I),J===s.SHORT&&(me=s.RG16I),J===s.INT&&(me=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGB8UI),J===s.UNSIGNED_SHORT&&(me=s.RGB16UI),J===s.UNSIGNED_INT&&(me=s.RGB32UI),J===s.BYTE&&(me=s.RGB8I),J===s.SHORT&&(me=s.RGB16I),J===s.INT&&(me=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),J===s.UNSIGNED_INT&&(me=s.RGBA32UI),J===s.BYTE&&(me=s.RGBA8I),J===s.SHORT&&(me=s.RGBA16I),J===s.INT&&(me=s.RGBA32I)),E===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),E===s.RGBA){const We=_e?Vl:At.getTransfer(ge);J===s.FLOAT&&(me=s.RGBA32F),J===s.HALF_FLOAT&&(me=s.RGBA16F),J===s.UNSIGNED_BYTE&&(me=We===bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function R(b,E){let J;return b?E===null||E===Zr||E===Qs?J=s.DEPTH24_STENCIL8:E===Bi?J=s.DEPTH32F_STENCIL8:E===$o&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zr||E===Qs?J=s.DEPTH_COMPONENT24:E===Bi?J=s.DEPTH_COMPONENT32F:E===$o&&(J=s.DEPTH_COMPONENT16),J}function X(b,E){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==li&&b.minFilter!==vi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function O(b){const E=b.target;E.removeEventListener("dispose",O),G(E),E.isVideoTexture&&g.delete(E)}function I(b){const E=b.target;E.removeEventListener("dispose",I),w(E)}function G(b){const E=r.get(b);if(E.__webglInit===void 0)return;const J=b.source,ge=x.get(J);if(ge){const _e=ge[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(b),Object.keys(ge).length===0&&x.delete(J)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const J=b.source,ge=x.get(J);delete ge[E.__cacheKey],f.memory.textures--}function w(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let _e=0;_e<E.__webglFramebuffer[ge].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[ge][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=b.textures;for(let ge=0,_e=J.length;ge<_e;ge++){const me=r.get(J[ge]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(J[ge])}r.remove(b)}let V=0;function fe(){V=0}function ee(){const b=V;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),V+=1,b}function ne(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function ce(b,E){const J=r.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&J.__version!==b.version){const ge=b.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(J,b,E);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function ae(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){te(J,b,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function le(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){te(J,b,E);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function F(b,E){const J=r.get(b);if(b.version>0&&J.__version!==b.version){pe(J,b,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const ue={[wf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[Af]:s.MIRRORED_REPEAT},ie={[li]:s.NEAREST,[Xv]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Uc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[Kv]:s.NEVER,[n0]:s.ALWAYS,[Zv]:s.LESS,[lg]:s.LEQUAL,[Jv]:s.EQUAL,[t0]:s.GEQUAL,[Qv]:s.GREATER,[e0]:s.NOTEQUAL};function Z(b,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vi||E.magFilter===Uc||E.magFilter===ll||E.magFilter===Kr||E.minFilter===vi||E.minFilter===Uc||E.minFilter===ll||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ue[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ie[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==ll&&E.minFilter!==Kr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(b,E){let J=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",O));const ge=E.source;let _e=x.get(ge);_e===void 0&&(_e={},x.set(ge,_e));const me=ne(E);if(me!==b.__cacheKey){_e[me]===void 0&&(_e[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),_e[me].usedTimes++;const We=_e[b.__cacheKey];We!==void 0&&(_e[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(E)),b.__cacheKey=me,b.__webglTexture=_e[me].texture}return J}function te(b,E,J){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const _e=Ue(b,E),me=E.source;t.bindTexture(ge,b.__webglTexture,s.TEXTURE0+J);const We=r.get(me);if(me.version!==We.__version||_e===!0){t.activeTexture(s.TEXTURE0+J);const Ce=At.getPrimaries(At.workingColorSpace),Oe=E.colorSpace===yr?null:At.getPrimaries(E.colorSpace),ft=E.colorSpace===yr||Ce===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=C(E.image,!1,a.maxTextureSize);Ee=Tt(E,Ee);const Be=l.convert(E.format,E.colorSpace),Qe=l.convert(E.type);let rt=L(E.internalFormat,Be,Qe,E.colorSpace,E.isVideoTexture);Z(ge,E);let ze;const H=E.mipmaps,de=E.isVideoTexture!==!0,Pe=We.__version===void 0||_e===!0,z=me.dataReady,Te=X(E,Ee);if(E.isDepthTexture)rt=R(E.format===eo,E.type),Pe&&(de?t.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,null));else if(E.isDataTexture)if(H.length>0){de&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,H[0].width,H[0].height);for(let oe=0,he=H.length;oe<he;oe++)ze=H[oe],de?z&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,oe,rt,ze.width,ze.height,0,Be,Qe,ze.data);E.generateMipmaps=!1}else de?(Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,H[0].width,H[0].height,Ee.depth);for(let oe=0,he=H.length;oe<he;oe++)if(ze=H[oe],E.format!==ai)if(Be!==null)if(de){if(z)if(E.layerUpdates.size>0){const Ne=Mm(ze.width,ze.height,E.format,E.type);for(const be of E.layerUpdates){const et=ze.data.subarray(be*Ne/ze.data.BYTES_PER_ELEMENT,(be+1)*Ne/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,be,ze.width,ze.height,1,Be,et)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,rt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,rt,ze.width,ze.height,Ee.depth,0,Be,Qe,ze.data)}else{de&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,H[0].width,H[0].height);for(let oe=0,he=H.length;oe<he;oe++)ze=H[oe],E.format!==ai?Be!==null?de?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?z&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,oe,rt,ze.width,ze.height,0,Be,Qe,ze.data)}else if(E.isDataArrayTexture)if(de){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),z)if(E.layerUpdates.size>0){const oe=Mm(Ee.width,Ee.height,E.format,E.type);for(const he of E.layerUpdates){const Ne=Ee.data.subarray(he*oe/Ee.data.BYTES_PER_ELEMENT,(he+1)*oe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Be,Qe,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(E.isData3DTexture)de?(Pe&&t.texStorage3D(s.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(E.isFramebufferTexture){if(Pe)if(de)t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let oe=Ee.width,he=Ee.height;for(let Ne=0;Ne<Te;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,rt,oe,he,0,Be,Qe,null),oe>>=1,he>>=1}}else if(H.length>0){if(de&&Pe){const oe=qe(H[0]);t.texStorage2D(s.TEXTURE_2D,Te,rt,oe.width,oe.height)}for(let oe=0,he=H.length;oe<he;oe++)ze=H[oe],de?z&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be,Qe,ze):t.texImage2D(s.TEXTURE_2D,oe,rt,Be,Qe,ze);E.generateMipmaps=!1}else if(de){if(Pe){const oe=qe(Ee);t.texStorage2D(s.TEXTURE_2D,Te,rt,oe.width,oe.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,rt,Be,Qe,Ee);y(E)&&_(ge),We.__version=me.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function pe(b,E,J){if(E.image.length!==6)return;const ge=Ue(b,E),_e=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+J);const me=r.get(_e);if(_e.version!==me.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const We=At.getPrimaries(At.workingColorSpace),Ce=E.colorSpace===yr?null:At.getPrimaries(E.colorSpace),Oe=E.colorSpace===yr||We===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let he=0;he<6;he++)!ft&&!Ee?Be[he]=C(E.image[he],!0,a.maxCubemapSize):Be[he]=Ee?E.image[he].image:E.image[he],Be[he]=Tt(E,Be[he]);const Qe=Be[0],rt=l.convert(E.format,E.colorSpace),ze=l.convert(E.type),H=L(E.internalFormat,rt,ze,E.colorSpace),de=E.isVideoTexture!==!0,Pe=me.__version===void 0||ge===!0,z=_e.dataReady;let Te=X(E,Qe);Z(s.TEXTURE_CUBE_MAP,E);let oe;if(ft){de&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,H,Qe.width,Qe.height);for(let he=0;he<6;he++){oe=Be[he].mipmaps;for(let Ne=0;Ne<oe.length;Ne++){const be=oe[Ne];E.format!==ai?rt!==null?de?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,be.width,be.height,rt,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,H,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,be.width,be.height,rt,ze,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,H,be.width,be.height,0,rt,ze,be.data)}}}else{if(oe=E.mipmaps,de&&Pe){oe.length>0&&Te++;const he=qe(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,H,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){de?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Be[he].width,Be[he].height,rt,ze,Be[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,H,Be[he].width,Be[he].height,0,rt,ze,Be[he].data);for(let Ne=0;Ne<oe.length;Ne++){const et=oe[Ne].image[he].image;de?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,et.width,et.height,rt,ze,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,H,et.width,et.height,0,rt,ze,et.data)}}else{de?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,rt,ze,Be[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,H,rt,ze,Be[he]);for(let Ne=0;Ne<oe.length;Ne++){const be=oe[Ne];de?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,rt,ze,be.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,H,rt,ze,be.image[he])}}}y(E)&&_(s.TEXTURE_CUBE_MAP),me.__version=_e.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Se(b,E,J,ge,_e,me){const We=l.convert(J.format,J.colorSpace),Ce=l.convert(J.type),Oe=L(J.internalFormat,We,Ce,J.colorSpace),ft=r.get(E),Ee=r.get(J);if(Ee.__renderTarget=E,!ft.__hasExternalTextures){const Be=Math.max(1,E.width>>me),Qe=Math.max(1,E.height>>me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,me,Oe,Be,Qe,E.depth,0,We,Ce,null):t.texImage2D(_e,me,Oe,Be,Qe,0,We,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,_e,Ee.__webglTexture,0,pt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,_e,Ee.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(b,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const ge=E.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,me=R(E.stencilBuffer,_e),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(E);ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,me,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,b)}else{const ge=E.textures;for(let _e=0;_e<ge.length;_e++){const me=ge[_e],We=l.convert(me.format,me.colorSpace),Ce=l.convert(me.type),Oe=L(me.internalFormat,We,Ce,me.colorSpace),ft=pt(E);J&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,E.width,E.height):ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const _e=ge.__webglTexture,me=pt(E);if(E.depthTexture.format===js)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===eo)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ze(b){const E=r.get(b),J=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const ge=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=ge}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Re(E.__webglFramebuffer,b)}else if(J){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),ye(E.__webglDepthbuffer[ge],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,me)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ye(E.__webglDepthbuffer,b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(b,E,J){const ge=r.get(b);E!==void 0&&Se(ge.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ze(b)}function Pt(b){const E=b.texture,J=r.get(b),ge=r.get(E);b.addEventListener("dispose",I);const _e=b.textures,me=b.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,f.memory.textures++),me){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<E.mipmaps.length;Oe++)J.__webglFramebuffer[Ce][Oe]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ct(b)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const ft=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Be=L(Oe.internalFormat,ft,Ee,Oe.colorSpace,b.isXRRenderTarget===!0),Qe=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(J.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Oe=0;Oe<E.mipmaps.length;Oe++)Se(J.__webglFramebuffer[Ce][Oe],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Se(J.__webglFramebuffer[Ce],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=_e[Ce],Ee=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),Z(s.TEXTURE_2D,ft),Se(J.__webglFramebuffer,b,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),Z(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Oe=0;Oe<E.mipmaps.length;Oe++)Se(J.__webglFramebuffer[Oe],b,E,s.COLOR_ATTACHMENT0,Ce,Oe);else Se(J.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Ce,0);y(E)&&_(Ce),t.unbindTexture()}b.depthBuffer&&Ze(b)}function Rt(b){const E=b.textures;for(let J=0,ge=E.length;J<ge;J++){const _e=E[J];if(y(_e)){const me=N(b),We=r.get(_e).__webglTexture;t.bindTexture(me,We),_(me),t.unbindTexture()}}}const lt=[],B=[];function ln(b){if(b.samples>0){if(ct(b)===!1){const E=b.textures,J=b.width,ge=b.height;let _e=s.COLOR_BUFFER_BIT;const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(b),Ce=E.length>1;if(Ce)for(let Oe=0;Oe<E.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(E[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,J,ge,0,0,J,ge,_e,s.NEAREST),h===!0&&(lt.length=0,B.length=0,lt.push(s.COLOR_ATTACHMENT0+Oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(me),B.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<E.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(E[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(b){const E=f.render.frame;g.get(b)!==E&&(g.set(b,E),b.update())}function Tt(b,E){const J=b.colorSpace,ge=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||J!==to&&J!==yr&&(At.getTransfer(J)===bt?(ge!==ai||_e!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=fe,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=le,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function PE(s,e){function t(r,a=yr){let l;const f=At.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jm)return s.BYTE;if(r===Qm)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===tg)return s.ALPHA;if(r===ng)return s.RGB;if(r===ai)return s.RGBA;if(r===ig)return s.LUMINANCE;if(r===rg)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===eo)return s.DEPTH_STENCIL;if(r===sg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===og)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Il||r===Fl||r===Ol||r===zl)if(f===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cf||r===Rf||r===Pf||r===bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Cf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lf||r===Df||r===Uf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lf||r===Df)return f===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Uf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nf||r===If||r===Ff||r===Of||r===zf||r===Bf||r===kf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===Yf||r===qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===If)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ff)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Of)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===jf||r===$f)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bl)return f===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ag||r===Kf||r===Zf||r===Jf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LE=`
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

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new wr({vertexShader:bE,fragmentShader:LE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new $l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends io{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,m=null,g=null,v=null,x=null,S=null,T=null;const C=new DE,y=t.getContextAttributes();let _=null,N=null;const L=[],R=[],X=new Ge;let O=null;const I=new wn;I.viewport=new Yt;const G=new wn;G.viewport=new Yt;const P=[I,G],w=new ex;let V=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let pe=L[te];return pe===void 0&&(pe=new tf,L[te]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(te){let pe=L[te];return pe===void 0&&(pe=new tf,L[te]=pe),pe.getGripSpace()},this.getHand=function(te){let pe=L[te];return pe===void 0&&(pe=new tf,L[te]=pe),pe.getHandSpace()};function ee(te){const pe=R.indexOf(te.inputSource);if(pe===-1)return;const Se=L[pe];Se!==void 0&&(Se.update(te.inputSource,te.frame,m||f),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",ce);for(let te=0;te<L.length;te++){const pe=R[te];pe!==null&&(R[te]=null,L[te].disconnect(pe))}V=null,fe=null,C.reset(),e.setRenderTarget(_),S=null,x=null,v=null,a=null,N=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ye=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?eo:js,ye=y.stencil?Qs:Zr);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(Ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Jr(x.textureWidth,x.textureHeight,{format:ai,type:Vi,depthTexture:new Sg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Jr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(c),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ce(te){for(let pe=0;pe<te.removed.length;pe++){const Se=te.removed[pe],ye=R.indexOf(Se);ye>=0&&(R[ye]=null,L[ye].disconnect(Se))}for(let pe=0;pe<te.added.length;pe++){const Se=te.added[pe];let ye=R.indexOf(Se);if(ye===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=R.length){R.push(Se),ye=Ze;break}else if(R[Ze]===null){R[Ze]=Se,ye=Ze;break}if(ye===-1)break}const Re=L[ye];Re&&Re.connect(Se)}}const ae=new Y,le=new Y;function F(te,pe,Se){ae.setFromMatrixPosition(pe.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ye=ae.distanceTo(le),Re=pe.projectionMatrix.elements,Ze=Se.projectionMatrix.elements,Ye=Re[14]/(Re[10]-1),Pt=Re[14]/(Re[10]+1),Rt=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],B=(Re[8]-1)/Re[0],ln=(Ze[8]+1)/Ze[0],pt=Ye*B,ct=Ye*ln,Ke=ye/(-B+ln),Tt=Ke*-B;if(pe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Tt),te.translateZ(Ke),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const qe=Ye+Ke,b=Pt+Ke,E=pt-Tt,J=ct+(ye-Tt),ge=Rt*Pt/b*qe,_e=lt*Pt/b*qe;te.projectionMatrix.makePerspective(E,J,ge,_e,qe,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ue(te,pe){pe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(pe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let pe=te.near,Se=te.far;C.texture!==null&&(C.depthNear>0&&(pe=C.depthNear),C.depthFar>0&&(Se=C.depthFar)),w.near=G.near=I.near=pe,w.far=G.far=I.far=Se,(V!==w.near||fe!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,fe=w.far),I.layers.mask=te.layers.mask|2,G.layers.mask=te.layers.mask|4,w.layers.mask=I.layers.mask|G.layers.mask;const ye=te.parent,Re=w.cameras;ue(w,ye);for(let Ze=0;Ze<Re.length;Ze++)ue(Re[Ze],ye);Re.length===2?F(w,I,G):w.projectionMatrix.copy(I.projectionMatrix),ie(te,w,ye)};function ie(te,pe,Se){Se===null?te.matrix.copy(pe.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(pe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(pe.projectionMatrix),te.projectionMatrixInverse.copy(pe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ed*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(te){h=te,x!==null&&(x.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let U=null;function Z(te,pe){if(g=pe.getViewerPose(m||f),T=pe,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ye=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Ye=0;Ye<Se.length;Ye++){const Pt=Se[Ye];let Rt=null;if(S!==null)Rt=S.getViewport(Pt);else{const B=v.getViewSubImage(x,Pt);Rt=B.viewport,Ye===0&&(e.setRenderTargetTextures(N,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(N))}let lt=P[Ye];lt===void 0&&(lt=new wn,lt.layers.enable(Ye),lt.viewport=new Yt,P[Ye]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ye===0&&(w.matrix.copy(lt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(lt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ye=v.getDepthInformation(Se[0]);Ye&&Ye.isValid&&Ye.texture&&C.init(e,Ye,a.renderState)}}for(let Se=0;Se<L.length;Se++){const ye=R[Se],Re=L[Se];ye!==null&&Re!==void 0&&Re.update(ye,pe,m||f)}U&&U(te,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const Ue=new Tg;Ue.setAnimationLoop(Z),this.setAnimationLoop=function(te){U=te},this.dispose=function(){}}}const Xr=new Gi,NE=new Ht;function IE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,mg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,N,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),C(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?h(y,_,N,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Un&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Un&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,R=N.envMapRotation;L&&(y.envMap.value=L,Xr.copy(R),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(Xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,N,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function FE(s,e,t,r){let a={},l={},f=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const R=L.program;r.uniformBlockBinding(N,R)}function m(N,L){let R=a[N.id];R===void 0&&(T(N),R=g(N),a[N.id]=R,N.addEventListener("dispose",y));const X=L.program;r.updateUBOMapping(N,X);const O=e.render.frame;l[N.id]!==O&&(x(N),l[N.id]=O)}function g(N){const L=v();N.__bindingPointIndex=L;const R=s.createBuffer(),X=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,X,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function v(){for(let N=0;N<c;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],R=N.uniforms,X=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,I=R.length;O<I;O++){const G=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,w=G.length;P<w;P++){const V=G[P];if(S(V,O,P,X)===!0){const fe=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let ne=0;for(let ce=0;ce<ee.length;ce++){const ae=ee[ce],le=C(ae);typeof ae=="number"||typeof ae=="boolean"?(V.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,fe+ne,V.__data)):ae.isMatrix3?(V.__data[0]=ae.elements[0],V.__data[1]=ae.elements[1],V.__data[2]=ae.elements[2],V.__data[3]=0,V.__data[4]=ae.elements[3],V.__data[5]=ae.elements[4],V.__data[6]=ae.elements[5],V.__data[7]=0,V.__data[8]=ae.elements[6],V.__data[9]=ae.elements[7],V.__data[10]=ae.elements[8],V.__data[11]=0):(ae.toArray(V.__data,ne),ne+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,fe,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,R,X){const O=N.value,I=L+"_"+R;if(X[I]===void 0)return typeof O=="number"||typeof O=="boolean"?X[I]=O:X[I]=O.clone(),!0;{const G=X[I];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return X[I]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function T(N){const L=N.uniforms;let R=0;const X=16;for(let I=0,G=L.length;I<G;I++){const P=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,V=P.length;w<V;w++){const fe=P[w],ee=Array.isArray(fe.value)?fe.value:[fe.value];for(let ne=0,ce=ee.length;ne<ce;ne++){const ae=ee[ne],le=C(ae),F=R%X,ue=F%le.boundary,ie=F+ue;R+=ue,ie!==0&&X-ie<le.storage&&(R+=X-ie),fe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=R,R+=le.storage}}}const O=R%X;return O>0&&(R+=X-O),N.__size=R,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},l={}}return{bind:h,update:m,dispose:_}}class OE{constructor(e={}){const{canvas:t=r0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let X=!1,O=0,I=0,G=null,P=-1,w=null;const V=new Yt,fe=new Yt;let ee=null;const ne=new Ct(0);let ce=0,ae=t.width,le=t.height,F=1,ue=null,ie=null;const U=new Yt(0,0,ae,le),Z=new Yt(0,0,ae,le);let Ue=!1;const te=new yg;let pe=!1,Se=!1;this.transmissionResolutionScale=1;const ye=new Ht,Re=new Ht,Ze=new Y,Ye=new Yt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return G===null?F:1}let B=r;function ln(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const q="webgl2";if(B=ln(q,A),B===null)throw ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,Ke,Tt,qe,b,E,J,ge,_e,me,We,Ce,Oe,ft,Ee,Be,Qe,rt,ze,H,de,Pe,z;function Te(){pt=new qS(B),pt.init(),de=new PE(B,pt),ct=new HS(B,pt,e,de),Ke=new CE(B,pt),ct.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Tt=new KS(B),qe=new pE,b=new RE(B,pt,Ke,qe,ct,de,Tt),E=new GS(R),J=new YS(R),ge=new ix(B),Pe=new BS(B,ge),_e=new jS(B,ge,Tt,Pe),me=new JS(B,_e,ge,Tt),rt=new ZS(B,ct,b),Ee=new VS(qe),We=new hE(R,E,J,pt,ct,Pe,Ee),Ce=new IE(R,qe),Oe=new gE,ft=new ME(pt),Qe=new zS(R,E,J,Ke,me,S,h),Be=new wE(R,me,ct),z=new FE(B,Tt,ct,Ke),ze=new kS(B,pt,Tt),H=new $S(B,pt,Tt),Tt.programs=We.programs,R.capabilities=ct,R.extensions=pt,R.properties=qe,R.renderLists=Oe,R.shadowMap=Be,R.state=Ke,R.info=Tt}Te();const oe=new UE(R,B);this.xr=oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(ae,le,!1))},this.getSize=function(A){return A.set(ae,le)},this.setSize=function(A,q,re=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,le=q,t.width=Math.floor(A*F),t.height=Math.floor(q*F),re===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ae*F,le*F).floor()},this.setDrawingBufferSize=function(A,q,re){ae=A,le=q,F=re,t.width=Math.floor(A*re),t.height=Math.floor(q*re),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,q,re,K){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,q,re,K),Ke.viewport(V.copy(U).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,q,re,K){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,q,re,K),Ke.scissor(fe.copy(Z).multiplyScalar(F).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ke.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,q=!0,re=!0){let K=0;if(A){let j=!1;if(G!==null){const we=G.texture.format;j=we===fd||we===cd||we===ud}if(j){const we=G.texture.type,Le=we===Vi||we===Zr||we===$o||we===Qs||we===ad||we===ld,Ie=Qe.getClearColor(),He=Qe.getClearAlpha(),ot=Ie.r,st=Ie.g,Xe=Ie.b;Le?(T[0]=ot,T[1]=st,T[2]=Xe,T[3]=He,B.clearBufferuiv(B.COLOR,0,T)):(C[0]=ot,C[1]=st,C[2]=Xe,C[3]=He,B.clearBufferiv(B.COLOR,0,C))}else K|=B.COLOR_BUFFER_BIT}q&&(K|=B.DEPTH_BUFFER_BIT),re&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Qe.dispose(),Oe.dispose(),ft.dispose(),qe.dispose(),E.dispose(),J.dispose(),me.dispose(),Pe.dispose(),z.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",es),oe.removeEventListener("sessionend",Xi),yi.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=Tt.autoReset,q=Be.enabled,re=Be.autoUpdate,K=Be.needsUpdate,j=Be.type;Te(),Tt.autoReset=A,Be.enabled=q,Be.autoUpdate=re,Be.needsUpdate=K,Be.type=j}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const q=A.target;q.removeEventListener("dispose",et),xt(q)}function xt(A){Nt(A),qe.remove(A)}function Nt(A){const q=qe.get(A).programs;q!==void 0&&(q.forEach(function(re){We.releaseProgram(re)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,re,K,j,we){q===null&&(q=Pt);const Le=j.isMesh&&j.matrixWorld.determinant()<0,Ie=na(A,q,re,K,j);Ke.setMaterial(K,Le);let He=re.index,ot=1;if(K.wireframe===!0){if(He=_e.getWireframeAttribute(re),He===void 0)return;ot=2}const st=re.drawRange,Xe=re.attributes.position;let yt=st.start*ot,ut=(st.start+st.count)*ot;we!==null&&(yt=Math.max(yt,we.start*ot),ut=Math.min(ut,(we.start+we.count)*ot)),He!==null?(yt=Math.max(yt,0),ut=Math.min(ut,He.count)):Xe!=null&&(yt=Math.max(yt,0),ut=Math.min(ut,Xe.count));const Vt=ut-yt;if(Vt<0||Vt===1/0)return;Pe.setup(j,K,Ie,re,He);let Ot,St=ze;if(He!==null&&(Ot=ge.get(He),St=H,St.setIndex(Ot)),j.isMesh)K.wireframe===!0?(Ke.setLineWidth(K.wireframeLinewidth*lt()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(j.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*lt()),j.isLineSegments?St.setMode(B.LINES):j.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else j.isPoints?St.setMode(B.POINTS):j.isSprite&&St.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Je=j._multiDrawStarts,Gt=j._multiDrawCounts,vt=j._multiDrawCount,dn=He?ge.get(He).bytesPerElement:1,qi=qe.get(K).currentProgram.getUniforms();for(let yn=0;yn<vt;yn++)qi.setValue(B,"_gl_DrawID",yn),St.render(Je[yn]/dn,Gt[yn])}else if(j.isInstancedMesh)St.renderInstances(yt,Vt,j.count);else if(re.isInstancedBufferGeometry){const Je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Gt=Math.min(re.instanceCount,Je);St.renderInstances(yt,Vt,Gt)}else St.render(yt,Vt)};function mt(A,q,re){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,ts(A,q,re),A.side=Tr,A.needsUpdate=!0,ts(A,q,re),A.side=zi):ts(A,q,re)}this.compile=function(A,q,re=null){re===null&&(re=A),_=ft.get(re),_.init(q),L.push(_),re.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==re&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const K=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ie=we[Le];mt(Ie,re,j),K.add(Ie)}else mt(we,re,j),K.add(we)}),L.pop(),_=null,K},this.compileAsync=function(A,q,re=null){const K=this.compile(A,q,re);return new Promise(j=>{function we(){if(K.forEach(function(Le){qe.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){j(A);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let qt=null;function jt(A){qt&&qt(A)}function es(){yi.stop()}function Xi(){yi.start()}const yi=new Tg;yi.setAnimationLoop(jt),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){qt=A,oe.setAnimationLoop(A),A===null?yi.stop():yi.start()},oe.addEventListener("sessionstart",es),oe.addEventListener("sessionend",Xi),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,G),_=ft.get(A,L.length),_.init(q),L.push(_),Re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te.setFromProjectionMatrix(Re),Se=this.localClippingEnabled,pe=Ee.init(this.clippingPlanes,Se),y=Oe.get(A,N.length),y.init(),N.push(y),oe.enabled===!0&&oe.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Si(we,q,-1/0,R.sortObjects)}Si(A,q,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ue,ie),Rt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Rt&&Qe.addToRenderList(y,A),this.info.render.frame++,pe===!0&&Ee.beginShadows();const re=_.state.shadowsArray;Be.render(re,A,q),pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const we=q.cameras;if(j.length>0)for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Cr(K,j,A,He)}Rt&&Qe.render(A);for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Ar(y,A,He,He.viewport)}}else j.length>0&&Cr(K,j,A,q),Rt&&Qe.render(A),Ar(y,A,q);G!==null&&I===0&&(b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(R,A,q),Pe.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],pe===!0&&Ee.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Si(A,q,re,K){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Le=me.update(A),Ie=A.material;Ie.visible&&y.push(A,Le,Ie,re,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Le=me.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ie)){const He=Le.groups;for(let ot=0,st=He.length;ot<st;ot++){const Xe=He[ot],yt=Ie[Xe.materialIndex];yt&&yt.visible&&y.push(A,Le,yt,re,Ye.z,Xe)}}else Ie.visible&&y.push(A,Le,Ie,re,Ye.z,null)}}const we=A.children;for(let Le=0,Ie=we.length;Le<Ie;Le++)Si(we[Le],q,re,K)}function Ar(A,q,re,K){const j=A.opaque,we=A.transmissive,Le=A.transparent;_.setupLightsView(re),pe===!0&&Ee.setGlobalState(R.clippingPlanes,re),K&&Ke.viewport(V.copy(K)),j.length>0&&Yi(j,q,re),we.length>0&&Yi(we,q,re),Le.length>0&&Yi(Le,q,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Cr(A,q,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new Jr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ko:Vi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=_.state.transmissionRenderTarget[K.id],Le=K.viewport||V;we.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(ne),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&Qe.render(re);const He=R.toneMapping;R.toneMapping=Mr;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),pe===!0&&Ee.setGlobalState(R.clippingPlanes,K),Yi(A,re,K),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,yt=q.length;Xe<yt;Xe++){const ut=q[Xe],Vt=ut.object,Ot=ut.geometry,St=ut.material,Je=ut.group;if(St.side===zi&&Vt.layers.test(K.layers)){const Gt=St.side;St.side=Un,St.needsUpdate=!0,ea(Vt,re,K,Ot,St,Je),St.side=Gt,St.needsUpdate=!0,st=!0}}st===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}R.setRenderTarget(Ie),R.setClearColor(ne,ce),ot!==void 0&&(K.viewport=ot),R.toneMapping=He}function Yi(A,q,re){const K=q.isScene===!0?q.overrideMaterial:null;for(let j=0,we=A.length;j<we;j++){const Le=A[j],Ie=Le.object,He=Le.geometry,ot=K===null?Le.material:K,st=Le.group;Ie.layers.test(re.layers)&&ea(Ie,q,re,He,ot,st)}}function ea(A,q,re,K,j,we){A.onBeforeRender(R,q,re,K,j,we),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,re,K,A,we),j.transparent===!0&&j.side===zi&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,R.renderBufferDirect(re,q,K,j,A,we),j.side=Tr,j.needsUpdate=!0,R.renderBufferDirect(re,q,K,j,A,we),j.side=zi):R.renderBufferDirect(re,q,K,j,A,we),A.onAfterRender(R,q,re,K,j,we)}function ts(A,q,re){q.isScene!==!0&&(q=Pt);const K=qe.get(A),j=_.state.lights,we=_.state.shadowsArray,Le=j.state.version,Ie=We.getParameters(A,j.state,we,q,re),He=We.getProgramCacheKey(Ie);let ot=K.programs;K.environment=A.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(A.isMeshStandardMaterial?J:E).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",et),ot=new Map,K.programs=ot);let st=ot.get(He);if(st!==void 0){if(K.currentProgram===st&&K.lightsStateVersion===Le)return ci(A,Ie),st}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,R),st=We.acquireProgram(Ie,He),ot.set(He,st),K.uniforms=Ie.uniforms;const Xe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),ci(A,Ie),K.needsLights=Zl(A),K.lightsStateVersion=Le,K.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=st,K.uniformsList=null,st}function ta(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Hl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ci(A,q){const re=qe.get(A);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function na(A,q,re,K,j){q.isScene!==!0&&(q=Pt),b.resetTextureUnits();const we=q.fog,Le=K.isMeshStandardMaterial?q.environment:null,Ie=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:to,He=(K.isMeshStandardMaterial?J:E).get(K.envMap||Le),ot=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,st=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,ut=!!re.morphAttributes.color;let Vt=Mr;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,St=Ot!==void 0?Ot.length:0,Je=qe.get(K),Gt=_.state.lights;if(pe===!0&&(Se===!0||A!==w)){const un=A===w&&K.id===P;Ee.setState(K,A,un)}let vt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==Ie||j.isBatchedMesh&&Je.batching===!1||!j.isBatchedMesh&&Je.batching===!0||j.isBatchedMesh&&Je.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Je.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Je.instancing===!1||!j.isInstancedMesh&&Je.instancing===!0||j.isSkinnedMesh&&Je.skinning===!1||!j.isSkinnedMesh&&Je.skinning===!0||j.isInstancedMesh&&Je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Je.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Je.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Je.instancingMorph===!1&&j.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==st||Je.morphTargets!==Xe||Je.morphNormals!==yt||Je.morphColors!==ut||Je.toneMapping!==Vt||Je.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Je.__version=K.version);let dn=Je.currentProgram;vt===!0&&(dn=ts(K,q,j));let qi=!1,yn=!1,Mi=!1;const Dt=dn.getUniforms(),hn=Je.uniforms;if(Ke.useProgram(dn.program)&&(qi=!0,yn=!0,Mi=!0),K.id!==P&&(P=K.id,yn=!0),qi||w!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),o0(ye),a0(ye),Dt.setValue(B,"projectionMatrix",ye)):Dt.setValue(B,"projectionMatrix",A.projectionMatrix),Dt.setValue(B,"viewMatrix",A.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(B,Ze.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,yn=!0,Mi=!0)}if(j.isSkinnedMesh){Dt.setOptional(B,j,"bindMatrix"),Dt.setOptional(B,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(B,"boneTexture",un.boneTexture,b))}j.isBatchedMesh&&(Dt.setOptional(B,j,"batchingTexture"),Dt.setValue(B,"batchingTexture",j._matricesTexture,b),Dt.setOptional(B,j,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",j._indirectTexture,b),Dt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",j._colorsTexture,b));const tn=re.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&rt.update(j,re,dn),(yn||Je.receiveShadow!==j.receiveShadow)&&(Je.receiveShadow=j.receiveShadow,Dt.setValue(B,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=He,hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(hn.envMapIntensity.value=q.environmentIntensity),yn&&(Dt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&ia(hn,Mi),we&&K.fog===!0&&Ce.refreshFogUniforms(hn,we),Ce.refreshMaterialUniforms(hn,K,F,le,_.state.transmissionRenderTarget[A.id]),Hl.upload(B,ta(Je),hn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Hl.upload(B,ta(Je),hn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(B,"center",j.center),Dt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(B,"normalMatrix",j.normalMatrix),Dt.setValue(B,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let nn=0,Mt=un.length;nn<Mt;nn++){const fi=un[nn];z.update(fi,dn),z.bind(fi,dn)}}return dn}function ia(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,q,re){qe.get(A.texture).__webglTexture=q,qe.get(A.depthTexture).__webglTexture=re;const K=qe.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=re===void 0,K.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const re=qe.get(A);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const ra=B.createFramebuffer();this.setRenderTarget=function(A,q=0,re=0){G=A,O=q,I=re;let K=!0,j=null,we=!1,Le=!1;if(A){const He=qe.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(He.__hasExternalTextures)b.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Le=!0);const st=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[q])?j=st[q][re]:j=st[q],we=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?j=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[re]:j=st,V.copy(A.viewport),fe.copy(A.scissor),ee=A.scissorTest}else V.copy(U).multiplyScalar(F).floor(),fe.copy(Z).multiplyScalar(F).floor(),ee=Ue;if(re!==0&&(j=ra),Ke.bindFramebuffer(B.FRAMEBUFFER,j)&&K&&Ke.drawBuffers(A,j),Ke.viewport(V),Ke.scissor(fe),Ke.setScissorTest(ee),we){const He=qe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,re)}else if(Le){const He=qe.get(A.texture),ot=q;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,re,ot)}else if(A!==null&&re!==0){const He=qe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,He.__webglTexture,re)}P=-1},this.readRenderTargetPixels=function(A,q,re,K,j,we,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){Ke.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-K&&re>=0&&re<=A.height-j&&B.readPixels(q,re,K,j,de.convert(ot),de.convert(st),we)}finally{const He=G!==null?qe.get(G).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,q,re,K,j,we,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-K&&re>=0&&re<=A.height-j){Ke.bindFramebuffer(B.FRAMEBUFFER,Ie);const Xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(q,re,K,j,de.convert(ot),de.convert(st),0);const yt=G!==null?qe.get(G).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,yt);const ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await s0(B,ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(Xe),B.deleteSync(ut),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,re=0){A.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-re),j=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Le=q!==null?q.x:0,Ie=q!==null?q.y:0;b.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,re,0,0,Le,Ie,j,we),Ke.unbindTexture()};const sa=B.createFramebuffer(),oa=B.createFramebuffer();this.copyTextureToTexture=function(A,q,re=null,K=null,j=0,we=null){A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],q=arguments[2],we=arguments[3]||0,re=null),we===null&&(j!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=j,j=0):we=0);let Le,Ie,He,ot,st,Xe,yt,ut,Vt;const Ot=A.isCompressedTexture?A.mipmaps[we]:A.image;if(re!==null)Le=re.max.x-re.min.x,Ie=re.max.y-re.min.y,He=re.isBox3?re.max.z-re.min.z:1,ot=re.min.x,st=re.min.y,Xe=re.isBox3?re.min.z:0;else{const tn=Math.pow(2,-j);Le=Math.floor(Ot.width*tn),Ie=Math.floor(Ot.height*tn),A.isDataArrayTexture?He=Ot.depth:A.isData3DTexture?He=Math.floor(Ot.depth*tn):He=1,ot=0,st=0,Xe=0}K!==null?(yt=K.x,ut=K.y,Vt=K.z):(yt=0,ut=0,Vt=0);const St=de.convert(q.format),Je=de.convert(q.type);let Gt;q.isData3DTexture?(b.setTexture3D(q,0),Gt=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Gt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Gt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qi=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),Mi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const Dt=A.isDataArrayTexture||A.isData3DTexture,hn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const tn=qe.get(A),un=qe.get(q),nn=qe.get(tn.__renderTarget),Mt=qe.get(un.__renderTarget);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let fi=0;fi<He;fi++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,j,Xe+fi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,we,Vt+fi)),B.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||qe.has(A)){const tn=qe.get(A),un=qe.get(q);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,sa),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,oa);for(let nn=0;nn<He;nn++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,j,Xe+nn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,j),hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,we,Vt+nn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,we),j!==0?B.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):hn?B.copyTexSubImage3D(Gt,we,yt,ut,Vt+nn,ot,st,Le,Ie):B.copyTexSubImage2D(Gt,we,yt,ut,ot,st,Le,Ie);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Ot.data):B.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,yt,ut,Ot.width,Ot.height,St,Ot.data):B.texSubImage2D(B.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mi),we===0&&q.generateMipmaps&&B.generateMipmap(Gt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,q,re=null,K=null,j=0){return A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,K=arguments[1]||null,A=arguments[2],q=arguments[3],j=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,re,K,j)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){O=0,I=0,G=null,Ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}var zE=Object.defineProperty,BE=(s,e,t)=>e in s?zE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,kE=(s,e,t)=>(BE(s,e+"",t),t);class HE{constructor(){kE(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}var VE=Object.defineProperty,GE=(s,e,t)=>e in s?VE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,it=(s,e,t)=>(GE(s,typeof e!="symbol"?e+"":e,t),t);const Nl=new hd,qm=new Oi,WE=Math.cos(70*(Math.PI/180)),jm=(s,e)=>(s%e+e)%e;class XE extends HE{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new Y),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN}),it(this,"touches",{ONE:ws.ROTATE,TWO:ws.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=H=>{let de=jm(H,2*Math.PI),Pe=g.phi;Pe<0&&(Pe+=2*Math.PI),de<0&&(de+=2*Math.PI);let z=Math.abs(de-Pe);2*Math.PI-z<z&&(de<Pe?de+=2*Math.PI:Pe+=2*Math.PI),v.phi=de-Pe,r.update()},this.setAzimuthalAngle=H=>{let de=jm(H,2*Math.PI),Pe=g.theta;Pe<0&&(Pe+=2*Math.PI),de<0&&(de+=2*Math.PI);let z=Math.abs(de-Pe);2*Math.PI-z<z&&(de<Pe?de+=2*Math.PI:Pe+=2*Math.PI),v.theta=de-Pe,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=H=>{H.addEventListener("keydown",Ce),this._domElementKeyEvents=H},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(a),r.update(),h=c.NONE},this.update=(()=>{const H=new Y,de=new Y(0,1,0),Pe=new Qr().setFromUnitVectors(e.up,de),z=Pe.clone().invert(),Te=new Y,oe=new Qr,he=2*Math.PI;return function(){const be=r.object.position;Pe.setFromUnitVectors(e.up,de),z.copy(Pe).invert(),H.copy(be).sub(r.target),H.applyQuaternion(Pe),g.setFromVector3(H),r.autoRotate&&h===c.NONE&&ne(fe()),r.enableDamping?(g.theta+=v.theta*r.dampingFactor,g.phi+=v.phi*r.dampingFactor):(g.theta+=v.theta,g.phi+=v.phi);let et=r.minAzimuthAngle,xt=r.maxAzimuthAngle;isFinite(et)&&isFinite(xt)&&(et<-Math.PI?et+=he:et>Math.PI&&(et-=he),xt<-Math.PI?xt+=he:xt>Math.PI&&(xt-=he),et<=xt?g.theta=Math.max(et,Math.min(xt,g.theta)):g.theta=g.theta>(et+xt)/2?Math.max(et,g.theta):Math.min(xt,g.theta)),g.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,g.phi)),g.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(S,r.dampingFactor):r.target.add(S),r.zoomToCursor&&P||r.object.isOrthographicCamera?g.radius=Ue(g.radius):g.radius=Ue(g.radius*x),H.setFromSpherical(g),H.applyQuaternion(z),be.copy(r.target).add(H),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),r.enableDamping===!0?(v.theta*=1-r.dampingFactor,v.phi*=1-r.dampingFactor,S.multiplyScalar(1-r.dampingFactor)):(v.set(0,0,0),S.set(0,0,0));let Nt=!1;if(r.zoomToCursor&&P){let mt=null;if(r.object instanceof wn&&r.object.isPerspectiveCamera){const qt=H.length();mt=Ue(qt*x);const jt=qt-mt;r.object.position.addScaledVector(I,jt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qt=new Y(G.x,G.y,0);qt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix(),Nt=!0;const jt=new Y(G.x,G.y,0);jt.unproject(r.object),r.object.position.sub(jt).add(qt),r.object.updateMatrixWorld(),mt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;mt!==null&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(mt).add(r.object.position):(Nl.origin.copy(r.object.position),Nl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Nl.direction))<WE?e.lookAt(r.target):(qm.setFromNormalAndCoplanarPoint(r.object.up,r.target),Nl.intersectPlane(qm,r.target))))}else r.object instanceof kl&&r.object.isOrthographicCamera&&(Nt=x!==1,Nt&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix()));return x=1,P=!1,Nt||Te.distanceToSquared(r.object.position)>m||8*(1-oe.dot(r.object.quaternion))>m?(r.dispatchEvent(a),Te.copy(r.object.position),oe.copy(r.object.quaternion),Nt=!1,!0):!1}})(),this.connect=H=>{r.domElement=H,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",Ee),r.domElement.addEventListener("pointerdown",E),r.domElement.addEventListener("pointercancel",ge),r.domElement.addEventListener("wheel",We)},this.dispose=()=>{var H,de,Pe,z,Te,oe;r.domElement&&(r.domElement.style.touchAction="auto"),(H=r.domElement)==null||H.removeEventListener("contextmenu",Ee),(de=r.domElement)==null||de.removeEventListener("pointerdown",E),(Pe=r.domElement)==null||Pe.removeEventListener("pointercancel",ge),(z=r.domElement)==null||z.removeEventListener("wheel",We),(Te=r.domElement)==null||Te.ownerDocument.removeEventListener("pointermove",J),(oe=r.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",ge),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Ce)};const r=this,a={type:"change"},l={type:"start"},f={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=c.NONE;const m=1e-6,g=new Sm,v=new Sm;let x=1;const S=new Y,T=new Ge,C=new Ge,y=new Ge,_=new Ge,N=new Ge,L=new Ge,R=new Ge,X=new Ge,O=new Ge,I=new Y,G=new Ge;let P=!1;const w=[],V={};function fe(){return 2*Math.PI/60/60*r.autoRotateSpeed}function ee(){return Math.pow(.95,r.zoomSpeed)}function ne(H){r.reverseOrbit||r.reverseHorizontalOrbit?v.theta+=H:v.theta-=H}function ce(H){r.reverseOrbit||r.reverseVerticalOrbit?v.phi+=H:v.phi-=H}const ae=(()=>{const H=new Y;return function(Pe,z){H.setFromMatrixColumn(z,0),H.multiplyScalar(-Pe),S.add(H)}})(),le=(()=>{const H=new Y;return function(Pe,z){r.screenSpacePanning===!0?H.setFromMatrixColumn(z,1):(H.setFromMatrixColumn(z,0),H.crossVectors(r.object.up,H)),H.multiplyScalar(Pe),S.add(H)}})(),F=(()=>{const H=new Y;return function(Pe,z){const Te=r.domElement;if(Te&&r.object instanceof wn&&r.object.isPerspectiveCamera){const oe=r.object.position;H.copy(oe).sub(r.target);let he=H.length();he*=Math.tan(r.object.fov/2*Math.PI/180),ae(2*Pe*he/Te.clientHeight,r.object.matrix),le(2*z*he/Te.clientHeight,r.object.matrix)}else Te&&r.object instanceof kl&&r.object.isOrthographicCamera?(ae(Pe*(r.object.right-r.object.left)/r.object.zoom/Te.clientWidth,r.object.matrix),le(z*(r.object.top-r.object.bottom)/r.object.zoom/Te.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ue(H){r.object instanceof wn&&r.object.isPerspectiveCamera||r.object instanceof kl&&r.object.isOrthographicCamera?x=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ie(H){ue(x/H)}function U(H){ue(x*H)}function Z(H){if(!r.zoomToCursor||!r.domElement)return;P=!0;const de=r.domElement.getBoundingClientRect(),Pe=H.clientX-de.left,z=H.clientY-de.top,Te=de.width,oe=de.height;G.x=Pe/Te*2-1,G.y=-(z/oe)*2+1,I.set(G.x,G.y,1).unproject(r.object).sub(r.object.position).normalize()}function Ue(H){return Math.max(r.minDistance,Math.min(r.maxDistance,H))}function te(H){T.set(H.clientX,H.clientY)}function pe(H){Z(H),R.set(H.clientX,H.clientY)}function Se(H){_.set(H.clientX,H.clientY)}function ye(H){C.set(H.clientX,H.clientY),y.subVectors(C,T).multiplyScalar(r.rotateSpeed);const de=r.domElement;de&&(ne(2*Math.PI*y.x/de.clientHeight),ce(2*Math.PI*y.y/de.clientHeight)),T.copy(C),r.update()}function Re(H){X.set(H.clientX,H.clientY),O.subVectors(X,R),O.y>0?ie(ee()):O.y<0&&U(ee()),R.copy(X),r.update()}function Ze(H){N.set(H.clientX,H.clientY),L.subVectors(N,_).multiplyScalar(r.panSpeed),F(L.x,L.y),_.copy(N),r.update()}function Ye(H){Z(H),H.deltaY<0?U(ee()):H.deltaY>0&&ie(ee()),r.update()}function Pt(H){let de=!1;switch(H.code){case r.keys.UP:F(0,r.keyPanSpeed),de=!0;break;case r.keys.BOTTOM:F(0,-r.keyPanSpeed),de=!0;break;case r.keys.LEFT:F(r.keyPanSpeed,0),de=!0;break;case r.keys.RIGHT:F(-r.keyPanSpeed,0),de=!0;break}de&&(H.preventDefault(),r.update())}function Rt(){if(w.length==1)T.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);T.set(H,de)}}function lt(){if(w.length==1)_.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),de=.5*(w[0].pageY+w[1].pageY);_.set(H,de)}}function B(){const H=w[0].pageX-w[1].pageX,de=w[0].pageY-w[1].pageY,Pe=Math.sqrt(H*H+de*de);R.set(0,Pe)}function ln(){r.enableZoom&&B(),r.enablePan&&lt()}function pt(){r.enableZoom&&B(),r.enableRotate&&Rt()}function ct(H){if(w.length==1)C.set(H.pageX,H.pageY);else{const Pe=ze(H),z=.5*(H.pageX+Pe.x),Te=.5*(H.pageY+Pe.y);C.set(z,Te)}y.subVectors(C,T).multiplyScalar(r.rotateSpeed);const de=r.domElement;de&&(ne(2*Math.PI*y.x/de.clientHeight),ce(2*Math.PI*y.y/de.clientHeight)),T.copy(C)}function Ke(H){if(w.length==1)N.set(H.pageX,H.pageY);else{const de=ze(H),Pe=.5*(H.pageX+de.x),z=.5*(H.pageY+de.y);N.set(Pe,z)}L.subVectors(N,_).multiplyScalar(r.panSpeed),F(L.x,L.y),_.copy(N)}function Tt(H){const de=ze(H),Pe=H.pageX-de.x,z=H.pageY-de.y,Te=Math.sqrt(Pe*Pe+z*z);X.set(0,Te),O.set(0,Math.pow(X.y/R.y,r.zoomSpeed)),ie(O.y),R.copy(X)}function qe(H){r.enableZoom&&Tt(H),r.enablePan&&Ke(H)}function b(H){r.enableZoom&&Tt(H),r.enableRotate&&ct(H)}function E(H){var de,Pe;r.enabled!==!1&&(w.length===0&&((de=r.domElement)==null||de.ownerDocument.addEventListener("pointermove",J),(Pe=r.domElement)==null||Pe.ownerDocument.addEventListener("pointerup",ge)),Be(H),H.pointerType==="touch"?Oe(H):_e(H))}function J(H){r.enabled!==!1&&(H.pointerType==="touch"?ft(H):me(H))}function ge(H){var de,Pe,z;Qe(H),w.length===0&&((de=r.domElement)==null||de.releasePointerCapture(H.pointerId),(Pe=r.domElement)==null||Pe.ownerDocument.removeEventListener("pointermove",J),(z=r.domElement)==null||z.ownerDocument.removeEventListener("pointerup",ge)),r.dispatchEvent(f),h=c.NONE}function _e(H){let de;switch(H.button){case 0:de=r.mouseButtons.LEFT;break;case 1:de=r.mouseButtons.MIDDLE;break;case 2:de=r.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Ts.DOLLY:if(r.enableZoom===!1)return;pe(H),h=c.DOLLY;break;case Ts.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enablePan===!1)return;Se(H),h=c.PAN}else{if(r.enableRotate===!1)return;te(H),h=c.ROTATE}break;case Ts.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enableRotate===!1)return;te(H),h=c.ROTATE}else{if(r.enablePan===!1)return;Se(H),h=c.PAN}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(l)}function me(H){if(r.enabled!==!1)switch(h){case c.ROTATE:if(r.enableRotate===!1)return;ye(H);break;case c.DOLLY:if(r.enableZoom===!1)return;Re(H);break;case c.PAN:if(r.enablePan===!1)return;Ze(H);break}}function We(H){r.enabled===!1||r.enableZoom===!1||h!==c.NONE&&h!==c.ROTATE||(H.preventDefault(),r.dispatchEvent(l),Ye(H),r.dispatchEvent(f))}function Ce(H){r.enabled===!1||r.enablePan===!1||Pt(H)}function Oe(H){switch(rt(H),w.length){case 1:switch(r.touches.ONE){case ws.ROTATE:if(r.enableRotate===!1)return;Rt(),h=c.TOUCH_ROTATE;break;case ws.PAN:if(r.enablePan===!1)return;lt(),h=c.TOUCH_PAN;break;default:h=c.NONE}break;case 2:switch(r.touches.TWO){case ws.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ln(),h=c.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;pt(),h=c.TOUCH_DOLLY_ROTATE;break;default:h=c.NONE}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(l)}function ft(H){switch(rt(H),h){case c.TOUCH_ROTATE:if(r.enableRotate===!1)return;ct(H),r.update();break;case c.TOUCH_PAN:if(r.enablePan===!1)return;Ke(H),r.update();break;case c.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;qe(H),r.update();break;case c.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;b(H),r.update();break;default:h=c.NONE}}function Ee(H){r.enabled!==!1&&H.preventDefault()}function Be(H){w.push(H)}function Qe(H){delete V[H.pointerId];for(let de=0;de<w.length;de++)if(w[de].pointerId==H.pointerId){w.splice(de,1);return}}function rt(H){let de=V[H.pointerId];de===void 0&&(de=new Ge,V[H.pointerId]=de),de.set(H.pageX,H.pageY)}function ze(H){const de=H.pointerId===w[0].pointerId?w[1]:w[0];return V[de.pointerId]}this.dollyIn=(H=ee())=>{U(H),r.update()},this.dollyOut=(H=ee())=>{ie(H),r.update()},this.getScale=()=>x,this.setScale=H=>{ue(H),r.update()},this.getZoomScale=()=>ee(),t!==void 0&&this.connect(t),this.update()}}const YE=()=>{const s=Ws.useRef(null),e=Ws.useRef(null),t=Ws.useRef([]),r=Ws.useRef([]);Ws.useEffect(()=>{s.current&&(s.current.innerHTML="");const c=new D0;c.background=new Ct("#242424"),e.current=c;const h=new wn(75,window.innerWidth/window.innerHeight,.1,1e3);h.position.z=120;const m=new OE({antialias:!0});m.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(m.domElement),m.gammaOutput=!0,m.shadowMap.enabled=!0;const g=[],v=[],x=10,S=60,T=5,C=Math.floor(Math.random()*x);for(let ne=0;ne<x;ne++){const ce=new Yl(T,32,32),ae=new Yo({color:ne===C?"#FF0000":"#02C874",transparent:!0,opacity:.9}),le=new Zn(ce,ae),F=ne/x*Math.PI*2,ue=S+(Math.random()*10-5);le.position.set(ue*Math.cos(F)+(Math.random()*6-3),ue*Math.sin(F)+(Math.random()*6-3),Math.random()*40-20),c.add(le),g.push(le)}t.current=g;const y=(ne,ce)=>{let ae=Math.round(ne.position.distanceTo(ce.position)/5),le=new td([ne.position,ce.position]),F=new ql(le,20,.3,8,!1),ue=new Yo({color:"#7B7B7B",transparent:!0,opacity:.8});const ie=new Zn(F,ue),U=document.createElement("canvas"),Z=U.getContext("2d");U.width=64,U.height=64,Z.clearRect(0,0,U.width,U.height),Z.fillStyle="#FFE153",Z.font="60px Arial",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(ae.toString(),32,32);const Ue=new _m(U),te=new vg({map:Ue,transparent:!0}),pe=new N0(te),Se=le.getPointAt(.5);pe.position.copy(Se),pe.scale.set(5,5,1),ie.sprite=pe,ie.userData={nodeA:ne,nodeB:ce},e.current.add(ie),e.current.add(pe),v.push(ie)},_=ne=>{const{nodeA:ce,nodeB:ae}=ne.userData,le=new td([ce.position,ae.position]);ne.geometry.dispose(),ne.geometry=new ql(le,20,.3,8,!1);const F=le.getPointAt(.5);ne.sprite.position.copy(F);const ue=Math.round(ce.position.distanceTo(ae.position)/5),ie=document.createElement("canvas");ie.width=64,ie.height=64;const U=ie.getContext("2d");U.clearRect(0,0,ie.width,ie.height),U.fillStyle="#FFE153",U.font="60px Arial",U.textAlign="center",U.textBaseline="middle",U.fillText(ue.toString(),32,32);const Z=new _m(ie);ne.sprite.material.map=Z,ne.sprite.material.needsUpdate=!0};for(let ne=0;ne<x;ne++)y(g[ne],g[(ne+1)%x]);(ne=>{for(let ce=0;ce<ne;ce++){const ae=Math.floor(Math.random()*x);let le=Math.floor(Math.random()*x);for(;ae===le;)le=Math.floor(Math.random()*x);const F=g[ae],ue=g[le];v.some(U=>{const Z=U.geometry.parameters.path.points;return Z[0].equals(F.position)&&Z[1].equals(ue.position)||Z[0].equals(ue.position)&&Z[1].equals(F.position)})||y(F,ue)}})(5),r.current=v;const L=new XE(h,m.domElement);L.enableDamping=!0,L.dampingFactor=.25,L.screenSpacePanning=!1;const R=()=>{requestAnimationFrame(R),g.forEach(ne=>{ne.rotation.x+=.01,ne.rotation.y+=.01}),L.update(),m.render(c,h)};R();const X=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",X);const O=new tx,I=new Ge;let G=null;const P=new Oi,w=new Y;function V(ne){I.x=ne.clientX/window.innerWidth*2-1,I.y=-(ne.clientY/window.innerHeight)*2+1,O.setFromCamera(I,h);const ce=O.intersectObjects(t.current);ce.length>0&&(G=ce[0].object,L.enabled=!1,P.setFromNormalAndCoplanarPoint(h.getWorldDirection(P.normal),G.position),w.copy(ce[0].point).sub(G.position))}function fe(ne){if(!G)return;I.x=ne.clientX/window.innerWidth*2-1,I.y=-(ne.clientY/window.innerHeight)*2+1,O.setFromCamera(I,h);const ce=new Y;O.ray.intersectPlane(P,ce)&&(G.position.copy(ce.sub(w)),r.current.forEach(ae=>{const{nodeA:le,nodeB:F}=ae.userData;(le===G||F===G)&&_(ae)}))}function ee(){G=null,L.enabled=!0}return m.domElement.addEventListener("pointerdown",V,!1),window.addEventListener("pointermove",fe,!1),window.addEventListener("pointerup",ee,!1),()=>{window.removeEventListener("resize",X),m.domElement.removeEventListener("pointerdown",V),window.removeEventListener("pointermove",fe),window.removeEventListener("pointerup",ee),m.dispose()}},[]);const a=()=>{window.location.reload()},l=()=>{e.current&&(t.current.forEach(c=>{e.current.remove(c)}),r.current.forEach(c=>{e.current.remove(c),c.sprite&&e.current.remove(c.sprite)}),t.current=[],r.current=[])},f=()=>{if(e.current){const m=new Yl(5,32,32),g=new Yo({color:"#02C874",transparent:!0,opacity:.9}),v=new Zn(m,g),x=Math.random()*Math.PI*2,S=60+(Math.random()*10-5);v.position.set(S*Math.cos(x)+(Math.random()*6-3),S*Math.sin(x)+(Math.random()*6-3),Math.random()*40-20),e.current.add(v),t.current.push(v)}};return xr.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},children:[xr.jsx("div",{ref:s}),xr.jsx("button",{onClick:a,style:{position:"absolute",bottom:"20px",right:"20px",padding:"10px 20px",backgroundColor:"#008000",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:c=>c.target.style.backgroundColor="#006400",onMouseLeave:c=>c.target.style.backgroundColor="#008000",children:"Example"}),xr.jsx("button",{onClick:l,style:{position:"absolute",bottom:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#FF5733",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:c=>c.target.style.backgroundColor="#C70039",onMouseLeave:c=>c.target.style.backgroundColor="#FF5733",children:"Clear"}),xr.jsx("button",{onClick:f,style:{position:"absolute",top:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#007BFF",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:c=>c.target.style.backgroundColor="#0056b3",onMouseLeave:c=>c.target.style.backgroundColor="#007BFF",children:"Add Node"})]})};function qE(){return xr.jsx(YE,{})}mv.createRoot(document.getElementById("root")).render(xr.jsx(Ws.StrictMode,{children:xr.jsx(qE,{})}));
