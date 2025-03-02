(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Cc={exports:{}},Oo={},Rc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function cv(){if(zp)return _t;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function y(U,re,Ne){this.props=U,this.context=re,this.refs=C,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,re){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,re,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function N(U,re,Ne){this.props=U,this.context=re,this.refs=C,this.updater=Ne||S}var L=N.prototype=new v;L.constructor=N,E(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,X=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function I(U,re,Ne){var Q,me={},Me=null,ye=null;if(re!=null)for(Q in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Me=""+re.key),re)X.call(re,Q)&&!F.hasOwnProperty(Q)&&(me[Q]=re[Q]);var Re=arguments.length-2;if(Re===1)me.children=Ne;else if(1<Re){for(var Ze=Array(Re),Ye=0;Ye<Re;Ye++)Ze[Ye]=arguments[Ye+2];me.children=Ze}if(U&&U.defaultProps)for(Q in Re=U.defaultProps,Re)me[Q]===void 0&&(me[Q]=Re[Q]);return{$$typeof:s,type:U,key:Me,ref:ye,props:me,_owner:z.current}}function P(U,re){return{$$typeof:s,type:U.type,key:re,ref:U.ref,props:U.props,_owner:U._owner}}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var re={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return re[Ne]})}var le=/\/+/g;function ee(U,re){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):re.toString(36)}function de(U,re,Ne,Q,me){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Me){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,me=me(ye),U=Q===""?"."+ee(ye,0):Q,R(me)?(Ne="",U!=null&&(Ne=U.replace(le,"$&/")+"/"),de(me,re,Ne,"",function(Ye){return Ye})):me!=null&&(w(me)&&(me=P(me,Ne+(!me.key||ye&&ye.key===me.key?"":(""+me.key).replace(le,"$&/")+"/")+U)),re.push(me)),1;if(ye=0,Q=Q===""?".":Q+":",R(U))for(var Re=0;Re<U.length;Re++){Me=U[Re];var Ze=Q+ee(Me,Re);ye+=de(Me,re,Ne,Ze,me)}else if(Ze=x(U),typeof Ze=="function")for(U=Ze.call(U),Re=0;!(Me=U.next()).done;)Me=Me.value,Ze=Q+ee(Me,Re++),ye+=de(Me,re,Ne,Ze,me);else if(Me==="object")throw re=String(U),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ge(U,re,Ne){if(U==null)return U;var Q=[],me=0;return de(U,Q,"","",function(Me){return re.call(Ne,Me,me++)}),Q}function oe(U){if(U._status===-1){var re=U._result;re=re(),re.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=re)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},V={transition:null},ae={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ge,forEach:function(U,re,Ne){ge(U,function(){re.apply(this,arguments)},Ne)},count:function(U){var re=0;return ge(U,function(){re++}),re},toArray:function(U){return ge(U,function(re){return re})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=N,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,_t.act=se,_t.cloneElement=function(U,re,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=E({},U.props),me=U.key,Me=U.ref,ye=U._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ye=z.current),re.key!==void 0&&(me=""+re.key),U.type&&U.type.defaultProps)var Re=U.type.defaultProps;for(Ze in re)X.call(re,Ze)&&!F.hasOwnProperty(Ze)&&(Q[Ze]=re[Ze]===void 0&&Re!==void 0?Re[Ze]:re[Ze])}var Ze=arguments.length-2;if(Ze===1)Q.children=Ne;else if(1<Ze){Re=Array(Ze);for(var Ye=0;Ye<Ze;Ye++)Re[Ye]=arguments[Ye+2];Q.children=Re}return{$$typeof:s,type:U.type,key:me,ref:Me,props:Q,_owner:ye}},_t.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=I,_t.createFactory=function(U){var re=I.bind(null,U);return re.type=U,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:f,render:U}},_t.isValidElement=w,_t.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},_t.memo=function(U,re){return{$$typeof:m,type:U,compare:re===void 0?null:re}},_t.startTransition=function(U){var re=V.transition;V.transition={};try{U()}finally{V.transition=re}},_t.unstable_act=se,_t.useCallback=function(U,re){return ce.current.useCallback(U,re)},_t.useContext=function(U){return ce.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},_t.useEffect=function(U,re){return ce.current.useEffect(U,re)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(U,re,Ne){return ce.current.useImperativeHandle(U,re,Ne)},_t.useInsertionEffect=function(U,re){return ce.current.useInsertionEffect(U,re)},_t.useLayoutEffect=function(U,re){return ce.current.useLayoutEffect(U,re)},_t.useMemo=function(U,re){return ce.current.useMemo(U,re)},_t.useReducer=function(U,re,Ne){return ce.current.useReducer(U,re,Ne)},_t.useRef=function(U){return ce.current.useRef(U)},_t.useState=function(U){return ce.current.useState(U)},_t.useSyncExternalStore=function(U,re,Ne){return ce.current.useSyncExternalStore(U,re,Ne)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var Bp;function nd(){return Bp||(Bp=1,Rc.exports=cv()),Rc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function fv(){if(kp)return Oo;kp=1;var s=nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var g,_={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var Hp;function dv(){return Hp||(Hp=1,Cc.exports=fv()),Cc.exports}var $n=dv(),Ws=nd(),ol={},Pc={exports:{}},Dn={},bc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function hv(){return Vp||(Vp=1,function(s){function e(V,ae){var se=V.length;V.push(ae);e:for(;0<se;){var U=se-1>>>1,re=V[U];if(0<a(re,ae))V[U]=ae,V[se]=re,se=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ae=V[0],se=V.pop();if(se!==ae){V[0]=se;e:for(var U=0,re=V.length,Ne=re>>>1;U<Ne;){var Q=2*(U+1)-1,me=V[Q],Me=Q+1,ye=V[Me];if(0>a(me,se))Me<re&&0>a(ye,me)?(V[U]=ye,V[Me]=se,U=Me):(V[U]=me,V[Q]=se,U=Q);else if(Me<re&&0>a(ye,se))V[U]=ye,V[Me]=se,U=Me;else break e}}return ae}function a(V,ae){var se=V.sortIndex-ae.sortIndex;return se!==0?se:V.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],m=[],g=1,_=null,x=3,S=!1,E=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(V){for(var ae=t(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=V)r(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(m)}}function R(V){if(C=!1,L(V),!E)if(t(h)!==null)E=!0,oe(X);else{var ae=t(m);ae!==null&&ce(R,ae.startTime-V)}}function X(V,ae){E=!1,C&&(C=!1,v(I),I=-1),S=!0;var se=x;try{for(L(ae),_=t(h);_!==null&&(!(_.expirationTime>ae)||V&&!G());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var re=U(_.expirationTime<=ae);ae=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),L(ae)}else r(h);_=t(h)}if(_!==null)var Ne=!0;else{var Q=t(m);Q!==null&&ce(R,Q.startTime-ae),Ne=!1}return Ne}finally{_=null,x=se,S=!1}}var z=!1,F=null,I=-1,P=5,w=-1;function G(){return!(s.unstable_now()-w<P)}function le(){if(F!==null){var V=s.unstable_now();w=V;var ae=!0;try{ae=F(!0,V)}finally{ae?ee():(z=!1,F=null)}}else z=!1}var ee;if(typeof N=="function")ee=function(){N(le)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=le,ee=function(){ge.postMessage(null)}}else ee=function(){y(le,0)};function oe(V){F=V,z||(z=!0,ee())}function ce(V,ae){I=y(function(){V(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(X))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var se=x;x=ae;try{return V()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ae){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=x;x=V;try{return ae()}finally{x=se}},s.unstable_scheduleCallback=function(V,ae,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,V={id:g++,callback:ae,priorityLevel:V,startTime:se,expirationTime:re,sortIndex:-1},se>U?(V.sortIndex=se,e(m,V),t(h)===null&&V===t(m)&&(C?(v(I),I=-1):C=!0,ce(R,se-U))):(V.sortIndex=re,e(h,V),E||S||(E=!0,oe(X))),V},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(V){var ae=x;return function(){var se=x;x=ae;try{return V.apply(this,arguments)}finally{x=se}}}}(Lc)),Lc}var Gp;function pv(){return Gp||(Gp=1,bc.exports=hv()),bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function mv(){if(Wp)return Dn;Wp=1;var s=nd(),e=pv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return h.call(_,n)?!0:h.call(g,n)?!1:m.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,N);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),G=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,U;function re(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ne=!1;function Q(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var k=`
`+d[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=D);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function me(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case I:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Ye(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ln(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var je=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(je(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function pe(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function H(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function O(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,ie=null,fe=null;function Ue(n){if(n=Mo(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Sa(i),Te(n.stateNode,n.type,i))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function et(){if(ie){var n=ie,i=fe;if(fe=ie=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function xt(n,i){return n(i)}function Nt(){}var mt=!1;function jt(n,i,o){if(mt)return n(i,o);mt=!0;try{return xt(n,i,o)}finally{mt=!1,(ie!==null||fe!==null)&&(Nt(),et())}}function qt(n,i){var o=n.stateNode;if(o===null)return null;var u=Sa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var es=!1;if(f)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{es=!1}function Si(n,i,o,u,d,p,M,D,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(xe){this.onError(xe)}}var Mi=!1,Ar=null,Cr=!1,ji=null,Qo={onError:function(n){Mi=!0,Ar=n}};function ts(n,i,o,u,d,p,M,D,k){Mi=!1,Ar=null,Si.apply(Qo,arguments)}function ea(n,i,o,u,d,p,M,D,k){if(ts.apply(this,arguments),Mi){if(Mi){var ne=Ar;Mi=!1,Ar=null}else throw Error(t(198));Cr||(Cr=!0,ji=ne)}}function fi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(fi(n)!==n)throw Error(t(188))}function Kl(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return na(d),n;if(p===u)return na(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,u=p;break}if(D===u){M=!0,u=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,u=d;break}if(D===u){M=!0,u=p,o=d;break}D=D.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ia(n){return n=Kl(n),n!==null?ra(n):null}function ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ra(n);if(i!==null)return i;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,st=null,Xe=null;function yt(n){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:St,Vt=Math.log,Ot=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Vt(n)/Ot|0)|0}var Je=64,Gt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?u=vt(D):(p&=M,p!==0&&(u=vt(p)))}else M=o&~d,M!==0?u=vt(M):p!==0&&(u=vt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ut(i),d=1<<o,u|=n[o],i&=~d;return u}function qi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-ut(p),D=1<<M,k=d[M];k===-1?(!(D&o)||D&u)&&(d[M]=qi(D,i)):k<=i&&(n.expiredLanes|=D),p&=~D}}function Ei(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=Je;return Je<<=1,!(Je&4194240)&&(Je=64),n}function hn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ut(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ut(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function di(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var _d,Zl,vd,xd,yd,Jl=!1,oa=[],$i=null,Ki=null,Zi=null,so=new Map,oo=new Map,Ji=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Zl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ug(n,i,o,u,d){switch(i){case"focusin":return $i=ao($i,n,i,o,u,d),!0;case"dragenter":return Ki=ao(Ki,n,i,o,u,d),!0;case"mouseover":return Zi=ao(Zi,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return so.set(p,ao(so.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,oo.set(p,ao(oo.get(p)||null,n,i,o,u,d)),!0}return!1}function Md(n){var i=Rr(n.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,yd(n.priority,function(){vd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=eu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return i=Mo(o),i!==null&&Zl(i),n.blockedOn=o,!1;i.shift()}return!0}function Ed(n,i,o){aa(n)&&o.delete(i)}function Ng(){Jl=!1,$i!==null&&aa($i)&&($i=null),Ki!==null&&aa(Ki)&&(Ki=null),Zi!==null&&aa(Zi)&&(Zi=null),so.forEach(Ed),oo.forEach(Ed)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ng)))}function uo(n){function i(d){return lo(d,n)}if(0<oa.length){lo(oa[0],n);for(var o=1;o<oa.length;o++){var u=oa[o];u.blockedOn===n&&(u.blockedOn=null)}}for($i!==null&&lo($i,n),Ki!==null&&lo(Ki,n),Zi!==null&&lo(Zi,n),so.forEach(i),oo.forEach(i),o=0;o<Ji.length;o++)u=Ji[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)Md(o),o.blockedOn===null&&Ji.shift()}var ns=R.ReactCurrentBatchConfig,la=!0;function Ig(n,i,o,u){var d=Mt,p=ns.transition;ns.transition=null;try{Mt=1,Ql(n,i,o,u)}finally{Mt=d,ns.transition=p}}function Fg(n,i,o,u){var d=Mt,p=ns.transition;ns.transition=null;try{Mt=4,Ql(n,i,o,u)}finally{Mt=d,ns.transition=p}}function Ql(n,i,o,u){if(la){var d=eu(n,i,o,u);if(d===null)_u(n,i,u,ua,o),Sd(n,u);else if(Ug(d,n,i,o,u))u.stopPropagation();else if(Sd(n,u),i&4&&-1<Dg.indexOf(n)){for(;d!==null;){var p=Mo(d);if(p!==null&&_d(p),p=eu(n,i,o,u),p===null&&_u(n,i,u,ua,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else _u(n,i,u,null,o)}}var ua=null;function eu(n,i,o,u){if(ua=null,n=O(u),n=Rr(n),n!==null)if(i=fi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ua=n,null}function Td(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case we:return 1;case Le:return 4;case Ie:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Qi=null,tu=null,ca=null;function wd(){if(ca)return ca;var n,i=tu,o=i.length,u,d="value"in Qi?Qi.value:Qi.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[p-u];u++);return ca=d.slice(n,1<u?1-u:void 0)}function fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Ad(){return!1}function In(n){function i(o,u,d,p,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?da:Ad,this.isPropagationStopped=Ad,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=In(is),co=se({},is,{view:0,detail:0}),Og=In(co),iu,ru,fo,ha=se({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(iu=n.screenX-fo.screenX,ru=n.screenY-fo.screenY):ru=iu=0,fo=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),Cd=In(ha),zg=se({},ha,{dataTransfer:0}),Bg=In(zg),kg=se({},co,{relatedTarget:0}),su=In(kg),Hg=se({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=In(Hg),Gg=se({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wg=In(Gg),Xg=se({},is,{data:0}),Rd=In(Xg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=qg[n])?!!i[n]:!1}function ou(){return $g}var Kg=se({},co,{key:function(n){if(n.key){var i=Yg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(n){return n.type==="keypress"?fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zg=In(Kg),Jg=se({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=In(Jg),Qg=se({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),e_=In(Qg),t_=se({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),n_=In(t_),i_=se({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r_=In(i_),s_=[9,13,27,32],au=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var o_=f&&"TextEvent"in window&&!ho,bd=f&&(!au||ho&&8<ho&&11>=ho),Ld=" ",Dd=!1;function Ud(n,i){switch(n){case"keyup":return s_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function a_(n,i){switch(n){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(Dd=!0,Ld);case"textInput":return n=i.data,n===Ld&&Dd?null:n;default:return null}}function l_(n,i){if(rs)return n==="compositionend"||!au&&Ud(n,i)?(n=wd(),ca=tu=Qi=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bd&&i.locale!=="ko"?null:i.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!u_[n.type]:i==="textarea"}function Fd(n,i,o,u){be(u),i=va(i,"onChange"),0<i.length&&(o=new nu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function c_(n){eh(n,0)}function pa(n){var i=us(n);if(Rt(i))return n}function f_(n,i){if(n==="change")return i}var Od=!1;if(f){var lu;if(f){var uu="oninput"in document;if(!uu){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),uu=typeof zd.oninput=="function"}lu=uu}else lu=!1;Od=lu&&(!document.documentMode||9<document.documentMode)}function Bd(){po&&(po.detachEvent("onpropertychange",kd),mo=po=null)}function kd(n){if(n.propertyName==="value"&&pa(mo)){var i=[];Fd(i,mo,n,O(n)),jt(c_,i)}}function d_(n,i,o){n==="focusin"?(Bd(),po=i,mo=o,po.attachEvent("onpropertychange",kd)):n==="focusout"&&Bd()}function h_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pa(mo)}function p_(n,i){if(n==="click")return pa(i)}function m_(n,i){if(n==="input"||n==="change")return pa(i)}function g_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Jn=typeof Object.is=="function"?Object.is:g_;function go(n,i){if(Jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Jn(n[d],i[d]))return!1}return!0}function Hd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vd(n,i){var o=Hd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hd(o)}}function Gd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Gd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wd(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=lt(n.document)}return i}function cu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function __(n){var i=Wd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gd(o.ownerDocument.documentElement,o)){if(u!==null&&cu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Vd(o,p);var M=Vd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v_=f&&"documentMode"in document&&11>=document.documentMode,ss=null,fu=null,_o=null,du=!1;function Xd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;du||ss==null||ss!==lt(u)||(u=ss,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&go(_o,u)||(_o=u,u=va(fu,"onSelect"),0<u.length&&(i=new nu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ss)))}function ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var os={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},hu={},Yd={};f&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function ga(n){if(hu[n])return hu[n];if(!os[n])return n;var i=os[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yd)return hu[n]=i[o];return n}var jd=ga("animationend"),qd=ga("animationiteration"),$d=ga("animationstart"),Kd=ga("transitionend"),Zd=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){Zd.set(n,i),l(i,[n])}for(var pu=0;pu<Jd.length;pu++){var mu=Jd[pu],x_=mu.toLowerCase(),y_=mu[0].toUpperCase()+mu.slice(1);er(x_,"on"+y_)}er(jd,"onAnimationEnd"),er(qd,"onAnimationIteration"),er($d,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Kd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Qd(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ea(u,i,void 0,n),n.currentTarget=null}function eh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],k=D.instance,ne=D.currentTarget;if(D=D.listener,k!==p&&d.isPropagationStopped())break e;Qd(d,D,ne),p=k}else for(M=0;M<u.length;M++){if(D=u[M],k=D.instance,ne=D.currentTarget,D=D.listener,k!==p&&d.isPropagationStopped())break e;Qd(d,D,ne),p=k}}}if(Cr)throw n=ji,Cr=!1,ji=null,n}function It(n,i){var o=i[Eu];o===void 0&&(o=i[Eu]=new Set);var u=n+"__bubble";o.has(u)||(th(i,n,2,!1),o.add(u))}function gu(n,i,o){var u=0;i&&(u|=4),th(o,n,u,i)}var _a="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[_a]){n[_a]=!0,r.forEach(function(o){o!=="selectionchange"&&(S_.has(o)||gu(o,!1,n),gu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[_a]||(i[_a]=!0,gu("selectionchange",!1,i))}}function th(n,i,o,u){switch(Td(i)){case 1:var d=Ig;break;case 4:d=Fg;break;default:d=Ql}o=d.bind(null,i,o,n),d=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function _u(n,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=Rr(D),M===null)return;if(k=M.tag,k===5||k===6){u=p=M;continue e}D=D.parentNode}}u=u.return}jt(function(){var ne=p,xe=O(o),Se=[];e:{var ve=Zd.get(n);if(ve!==void 0){var Fe=nu,Ve=n;switch(n){case"keypress":if(fa(o)===0)break e;case"keydown":case"keyup":Fe=Zg;break;case"focusin":Ve="focus",Fe=su;break;case"focusout":Ve="blur",Fe=su;break;case"beforeblur":case"afterblur":Fe=su;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=e_;break;case jd:case qd:case $d:Fe=Vg;break;case Kd:Fe=n_;break;case"scroll":Fe=Og;break;case"wheel":Fe=r_;break;case"copy":case"cut":case"paste":Fe=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Pd}var qe=(i&4)!==0,Xt=!qe&&n==="scroll",$=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var W=ne,J;W!==null;){J=W;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,$!==null&&(Ae=qt(W,$),Ae!=null&&qe.push(yo(W,Ae,J)))),Xt)break;W=W.return}0<qe.length&&(ve=new Fe(ve,Ve,null,o,xe),Se.push({event:ve,listeners:qe}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&(Ve=o.relatedTarget||o.fromElement)&&(Rr(Ve)||Ve[Ti]))break e;if((Fe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=ne,Ve=Ve?Rr(Ve):null,Ve!==null&&(Xt=fi(Ve),Ve!==Xt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ne),Fe!==Ve)){if(qe=Cd,Ae="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Pd,Ae="onPointerLeave",$="onPointerEnter",W="pointer"),Xt=Fe==null?ve:us(Fe),J=Ve==null?ve:us(Ve),ve=new qe(Ae,W+"leave",Fe,o,xe),ve.target=Xt,ve.relatedTarget=J,Ae=null,Rr(xe)===ne&&(qe=new qe($,W+"enter",Ve,o,xe),qe.target=J,qe.relatedTarget=Xt,Ae=qe),Xt=Ae,Fe&&Ve)t:{for(qe=Fe,$=Ve,W=0,J=qe;J;J=as(J))W++;for(J=0,Ae=$;Ae;Ae=as(Ae))J++;for(;0<W-J;)qe=as(qe),W--;for(;0<J-W;)$=as($),J--;for(;W--;){if(qe===$||$!==null&&qe===$.alternate)break t;qe=as(qe),$=as($)}qe=null}else qe=null;Fe!==null&&nh(Se,ve,Fe,qe,!1),Ve!==null&&Xt!==null&&nh(Se,Xt,Ve,qe,!0)}}e:{if(ve=ne?us(ne):window,Fe=ve.nodeName&&ve.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ve.type==="file")var $e=f_;else if(Id(ve))if(Od)$e=m_;else{$e=h_;var tt=d_}else(Fe=ve.nodeName)&&Fe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=p_);if($e&&($e=$e(n,ne))){Fd(Se,$e,o,xe);break e}tt&&tt(n,ve,ne),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Tt(ve,"number",ve.value)}switch(tt=ne?us(ne):window,n){case"focusin":(Id(tt)||tt.contentEditable==="true")&&(ss=tt,fu=ne,_o=null);break;case"focusout":_o=fu=ss=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Xd(Se,o,xe);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":Xd(Se,o,xe)}var nt;if(au)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else rs?Ud(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(bd&&o.locale!=="ko"&&(rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&rs&&(nt=wd()):(Qi=xe,tu="value"in Qi?Qi.value:Qi.textContent,rs=!0)),tt=va(ne,at),0<tt.length&&(at=new Rd(at,n,null,o,xe),Se.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Nd(o),nt!==null&&(at.data=nt)))),(nt=o_?a_(n,o):l_(n,o))&&(ne=va(ne,"onBeforeInput"),0<ne.length&&(xe=new Rd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ne}),xe.data=nt))}eh(Se,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function va(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=qt(n,o),p!=null&&u.unshift(yo(n,p,d)),p=qt(n,i),p!=null&&u.push(yo(n,p,d))),n=n.return}return u}function as(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function nh(n,i,o,u,d){for(var p=i._reactName,M=[];o!==null&&o!==u;){var D=o,k=D.alternate,ne=D.stateNode;if(k!==null&&k===u)break;D.tag===5&&ne!==null&&(D=ne,d?(k=qt(o,p),k!=null&&M.unshift(yo(o,k,D))):d||(k=qt(o,p),k!=null&&M.push(yo(o,k,D)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var M_=/\r\n?/g,E_=/\u0000|\uFFFD/g;function ih(n){return(typeof n=="string"?n:""+n).replace(M_,`
`).replace(E_,"")}function xa(n,i,o){if(i=ih(i),ih(n)!==i&&o)throw Error(t(425))}function ya(){}var vu=null,xu=null;function yu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(n){return rh.resolve(null).then(n).catch(A_)}:Su;function A_(n){setTimeout(function(){throw n})}function Mu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ls=Math.random().toString(36).slice(2),hi="__reactFiber$"+ls,So="__reactProps$"+ls,Ti="__reactContainer$"+ls,Eu="__reactEvents$"+ls,C_="__reactListeners$"+ls,R_="__reactHandles$"+ls;function Rr(n){var i=n[hi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ti]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=sh(n);n!==null;){if(o=n[hi])return o;n=sh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[hi]||n[Ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[So]||null}var Tu=[],cs=-1;function nr(n){return{current:n}}function Ft(n){0>cs||(n.current=Tu[cs],Tu[cs]=null,cs--)}function Ut(n,i){cs++,Tu[cs]=n.current,n.current=i}var ir={},pn=nr(ir),Cn=nr(!1),Pr=ir;function fs(n,i){var o=n.type.contextTypes;if(!o)return ir;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Ma(){Ft(Cn),Ft(pn)}function oh(n,i,o){if(pn.current!==ir)throw Error(t(168));Ut(pn,i),Ut(Cn,o)}function ah(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return se({},o,u)}function Ea(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Pr=pn.current,Ut(pn,n),Ut(Cn,Cn.current),!0}function lh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ah(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Cn),Ft(pn),Ut(pn,n)):Ft(Cn),Ut(Cn,o)}var wi=null,Ta=!1,wu=!1;function uh(n){wi===null?wi=[n]:wi.push(n)}function P_(n){Ta=!0,uh(n)}function rr(){if(!wu&&wi!==null){wu=!0;var n=0,i=Mt;try{var o=wi;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}wi=null,Ta=!1}catch(d){throw wi!==null&&(wi=wi.slice(n+1)),sa(we,rr),d}finally{Mt=i,wu=!1}}return null}var ds=[],hs=0,wa=null,Aa=0,Vn=[],Gn=0,br=null,Ai=1,Ci="";function Lr(n,i){ds[hs++]=Aa,ds[hs++]=wa,wa=n,Aa=i}function ch(n,i,o){Vn[Gn++]=Ai,Vn[Gn++]=Ci,Vn[Gn++]=br,br=n;var u=Ai;n=Ci;var d=32-ut(u)-1;u&=~(1<<d),o+=1;var p=32-ut(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ai=1<<32-ut(i)+d|o<<d|u,Ci=p+n}else Ai=1<<p|o<<d|u,Ci=n}function Au(n){n.return!==null&&(Lr(n,1),ch(n,1,0))}function Cu(n){for(;n===wa;)wa=ds[--hs],ds[hs]=null,Aa=ds[--hs],ds[hs]=null;for(;n===br;)br=Vn[--Gn],Vn[Gn]=null,Ci=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null}var Fn=null,On=null,zt=!1,Qn=null;function fh(n,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function dh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ai,overflow:Ci}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Fn=n,On=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if(zt){var i=On;if(i){var o=i;if(!dh(n,i)){if(Ru(n))throw Error(t(418));i=tr(o.nextSibling);var u=Fn;i&&dh(n,i)?fh(u,o):(n.flags=n.flags&-4097|2,zt=!1,Fn=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Fn=n}}}function hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Ca(n){if(n!==Fn)return!1;if(!zt)return hh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!yu(n.type,n.memoizedProps)),i&&(i=On)){if(Ru(n))throw ph(),Error(t(418));for(;i;)fh(n,i),i=tr(i.nextSibling)}if(hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){On=tr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?tr(n.stateNode.nextSibling):null;return!0}function ph(){for(var n=On;n;)n=tr(n.nextSibling)}function ps(){On=Fn=null,zt=!1}function bu(n){Qn===null?Qn=[n]:Qn.push(n)}var b_=R.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ra(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mh(n){var i=n._init;return i(n._payload)}function gh(n){function i($,W){if(n){var J=$.deletions;J===null?($.deletions=[W],$.flags|=16):J.push(W)}}function o($,W){if(!n)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function u($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function d($,W){return $=dr($,W),$.index=0,$.sibling=null,$}function p($,W,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<W?($.flags|=2,W):J):($.flags|=2,W)):($.flags|=1048576,W)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function D($,W,J,Ae){return W===null||W.tag!==6?(W=Sc(J,$.mode,Ae),W.return=$,W):(W=d(W,J),W.return=$,W)}function k($,W,J,Ae){var $e=J.type;return $e===F?xe($,W,J.props.children,Ae,J.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&mh($e)===W.type)?(Ae=d(W,J.props),Ae.ref=Eo($,W,J),Ae.return=$,Ae):(Ae=Ja(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Eo($,W,J),Ae.return=$,Ae)}function ne($,W,J,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Mc(J,$.mode,Ae),W.return=$,W):(W=d(W,J.children||[]),W.return=$,W)}function xe($,W,J,Ae,$e){return W===null||W.tag!==7?(W=Br(J,$.mode,Ae,$e),W.return=$,W):(W=d(W,J),W.return=$,W)}function Se($,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Sc(""+W,$.mode,J),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case X:return J=Ja(W.type,W.key,W.props,null,$.mode,J),J.ref=Eo($,null,W),J.return=$,J;case z:return W=Mc(W,$.mode,J),W.return=$,W;case oe:var Ae=W._init;return Se($,Ae(W._payload),J)}if(je(W)||ae(W))return W=Br(W,$.mode,J,null),W.return=$,W;Ra($,W)}return null}function ve($,W,J,Ae){var $e=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return $e!==null?null:D($,W,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case X:return J.key===$e?k($,W,J,Ae):null;case z:return J.key===$e?ne($,W,J,Ae):null;case oe:return $e=J._init,ve($,W,$e(J._payload),Ae)}if(je(J)||ae(J))return $e!==null?null:xe($,W,J,Ae,null);Ra($,J)}return null}function Fe($,W,J,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(J)||null,D(W,$,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case X:return $=$.get(Ae.key===null?J:Ae.key)||null,k(W,$,Ae,$e);case z:return $=$.get(Ae.key===null?J:Ae.key)||null,ne(W,$,Ae,$e);case oe:var tt=Ae._init;return Fe($,W,J,tt(Ae._payload),$e)}if(je(Ae)||ae(Ae))return $=$.get(J)||null,xe(W,$,Ae,$e,null);Ra(W,Ae)}return null}function Ve($,W,J,Ae){for(var $e=null,tt=null,nt=W,at=W=0,on=null;nt!==null&&at<J.length;at++){nt.index>at?(on=nt,nt=null):on=nt.sibling;var wt=ve($,nt,J[at],Ae);if(wt===null){nt===null&&(nt=on);break}n&&nt&&wt.alternate===null&&i($,nt),W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt,nt=on}if(at===J.length)return o($,nt),zt&&Lr($,at),$e;if(nt===null){for(;at<J.length;at++)nt=Se($,J[at],Ae),nt!==null&&(W=p(nt,W,at),tt===null?$e=nt:tt.sibling=nt,tt=nt);return zt&&Lr($,at),$e}for(nt=u($,nt);at<J.length;at++)on=Fe(nt,$,at,J[at],Ae),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?at:on.key),W=p(on,W,at),tt===null?$e=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(hr){return i($,hr)}),zt&&Lr($,at),$e}function qe($,W,J,Ae){var $e=ae(J);if(typeof $e!="function")throw Error(t(150));if(J=$e.call(J),J==null)throw Error(t(151));for(var tt=$e=null,nt=W,at=W=0,on=null,wt=J.next();nt!==null&&!wt.done;at++,wt=J.next()){nt.index>at?(on=nt,nt=null):on=nt.sibling;var hr=ve($,nt,wt.value,Ae);if(hr===null){nt===null&&(nt=on);break}n&&nt&&hr.alternate===null&&i($,nt),W=p(hr,W,at),tt===null?$e=hr:tt.sibling=hr,tt=hr,nt=on}if(wt.done)return o($,nt),zt&&Lr($,at),$e;if(nt===null){for(;!wt.done;at++,wt=J.next())wt=Se($,wt.value,Ae),wt!==null&&(W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return zt&&Lr($,at),$e}for(nt=u($,nt);!wt.done;at++,wt=J.next())wt=Fe(nt,$,at,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&nt.delete(wt.key===null?at:wt.key),W=p(wt,W,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return n&&nt.forEach(function(uv){return i($,uv)}),zt&&Lr($,at),$e}function Xt($,W,J,Ae){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case X:e:{for(var $e=J.key,tt=W;tt!==null;){if(tt.key===$e){if($e=J.type,$e===F){if(tt.tag===7){o($,tt.sibling),W=d(tt,J.props.children),W.return=$,$=W;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&mh($e)===tt.type){o($,tt.sibling),W=d(tt,J.props),W.ref=Eo($,tt,J),W.return=$,$=W;break e}o($,tt);break}else i($,tt);tt=tt.sibling}J.type===F?(W=Br(J.props.children,$.mode,Ae,J.key),W.return=$,$=W):(Ae=Ja(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Eo($,W,J),Ae.return=$,$=Ae)}return M($);case z:e:{for(tt=J.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){o($,W.sibling),W=d(W,J.children||[]),W.return=$,$=W;break e}else{o($,W);break}else i($,W);W=W.sibling}W=Mc(J,$.mode,Ae),W.return=$,$=W}return M($);case oe:return tt=J._init,Xt($,W,tt(J._payload),Ae)}if(je(J))return Ve($,W,J,Ae);if(ae(J))return qe($,W,J,Ae);Ra($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(o($,W.sibling),W=d(W,J),W.return=$,$=W):(o($,W),W=Sc(J,$.mode,Ae),W.return=$,$=W),M($)):o($,W)}return Xt}var ms=gh(!0),_h=gh(!1),Pa=nr(null),ba=null,gs=null,Lu=null;function Du(){Lu=gs=ba=null}function Uu(n){var i=Pa.current;Ft(Pa),n._currentValue=i}function Nu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function _s(n,i){ba=n,Lu=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Pn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:i,next:null},gs===null){if(ba===null)throw Error(t(308));gs=n,ba.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return i}var Dr=null;function Iu(n){Dr===null?Dr=[n]:Dr.push(n)}function vh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Iu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(n,u)}function Ri(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var sr=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,o)}return d=u.interleaved,d===null?(i.next=i,Iu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,o)}function La(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}function yh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Da(n,i,o,u){var d=n.updateQueue;sr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,ne=k.next;k.next=null,M===null?p=ne:M.next=ne,M=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=ne:D.next=ne,xe.lastBaseUpdate=k))}if(p!==null){var Se=d.baseState;M=0,xe=ne=k=null,D=p;do{var ve=D.lane,Fe=D.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,qe=D;switch(ve=i,Fe=o,qe.tag){case 1:if(Ve=qe.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,ve);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=qe.payload,ve=typeof Ve=="function"?Ve.call(Fe,Se,ve):Ve,ve==null)break e;Se=se({},Se,ve);break e;case 2:sr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[D]:ve.push(D))}else Fe={eventTime:Fe,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(ne=xe=Fe,k=Se):xe=xe.next=Fe,M|=ve;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(k=Se),d.baseState=k,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ir|=M,n.lanes=M,n.memoizedState=Se}}function Sh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},pi=nr(To),wo=nr(To),Ao=nr(To);function Ur(n){if(n===To)throw Error(t(174));return n}function Ou(n,i){switch(Ut(Ao,i),Ut(wo,n),Ut(pi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ft(pi),Ut(pi,i)}function vs(){Ft(pi),Ft(wo),Ft(Ao)}function Mh(n){Ur(Ao.current);var i=Ur(pi.current),o=We(i,n.type);i!==o&&(Ut(wo,n),Ut(pi,o))}function zu(n){wo.current===n&&(Ft(pi),Ft(wo))}var Bt=nr(0);function Ua(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bu=[];function ku(){for(var n=0;n<Bu.length;n++)Bu[n]._workInProgressVersionPrimary=null;Bu.length=0}var Na=R.ReactCurrentDispatcher,Hu=R.ReactCurrentBatchConfig,Nr=0,kt=null,Zt=null,rn=null,Ia=!1,Co=!1,Ro=0,L_=0;function mn(){throw Error(t(321))}function Vu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Jn(n[o],i[o]))return!1;return!0}function Gu(n,i,o,u,d,p){if(Nr=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=n===null||n.memoizedState===null?I_:F_,n=o(u,d),Co){p=0;do{if(Co=!1,Ro=0,25<=p)throw Error(t(301));p+=1,rn=Zt=null,i.updateQueue=null,Na.current=O_,n=o(u,d)}while(Co)}if(Na.current=za,i=Zt!==null&&Zt.next!==null,Nr=0,rn=Zt=kt=null,Ia=!1,i)throw Error(t(300));return n}function Wu(){var n=Ro!==0;return Ro=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?kt.memoizedState=rn=n:rn=rn.next=n,rn}function Xn(){if(Zt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?kt.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?kt.memoizedState=rn=n:rn=rn.next=n}return rn}function Po(n,i){return typeof i=="function"?i(n):i}function Xu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var D=M=null,k=null,ne=p;do{var xe=ne.lane;if((Nr&xe)===xe)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Se={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(D=k=Se,M=u):k=k.next=Se,kt.lanes|=xe,Ir|=xe}ne=ne.next}while(ne!==null&&ne!==p);k===null?M=u:k.next=D,Jn(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,kt.lanes|=p,Ir|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);Jn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Eh(){}function Th(n,i){var o=kt,u=Xn(),d=i(),p=!Jn(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,ju(Ch.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Ah.bind(null,o,u,d,i),void 0,null),sn===null)throw Error(t(349));Nr&30||wh(o,i,d)}return d}function wh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ah(n,i,o,u){i.value=o,i.getSnapshot=u,Rh(i)&&Ph(n)}function Ch(n,i,o){return o(function(){Rh(i)&&Ph(n)})}function Rh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Jn(n,o)}catch{return!0}}function Ph(n){var i=Ri(n,1);i!==null&&ii(i,n,1,-1)}function bh(n){var i=mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=N_.bind(null,kt,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Lh(){return Xn().memoizedState}function Fa(n,i,o,u){var d=mi();kt.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function Oa(n,i,o,u){var d=Xn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,u!==null&&Vu(u,M.deps)){d.memoizedState=bo(i,o,p,u);return}}kt.flags|=n,d.memoizedState=bo(1|i,o,p,u)}function Dh(n,i){return Fa(8390656,8,n,i)}function ju(n,i){return Oa(2048,8,n,i)}function Uh(n,i){return Oa(4,2,n,i)}function Nh(n,i){return Oa(4,4,n,i)}function Ih(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fh(n,i,o){return o=o!=null?o.concat([n]):null,Oa(4,4,Ih.bind(null,i,n),o)}function qu(){}function Oh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function zh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Vu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Bh(n,i,o){return Nr&21?(Jn(o,i)||(o=Dt(),kt.lanes|=o,Ir|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o)}function D_(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Hu.transition;Hu.transition={};try{n(!1),i()}finally{Mt=o,Hu.transition=u}}function kh(){return Xn().memoizedState}function U_(n,i,o){var u=cr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(n))Vh(i,o);else if(o=vh(n,i,o,u),o!==null){var d=Mn();ii(o,n,u,d),Gh(o,i,u)}}function N_(n,i,o){var u=cr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(n))Vh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,Jn(D,M)){var k=i.interleaved;k===null?(d.next=d,Iu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=vh(n,i,d,u),o!==null&&(d=Mn(),ii(o,n,u,d),Gh(o,i,u))}}function Hh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function Vh(n,i){Co=Ia=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Gh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}var za={readContext:Wn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},I_={readContext:Wn,useCallback:function(n,i){return mi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Dh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4194308,4,Ih.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Fa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Fa(4,2,n,i)},useMemo:function(n,i){var o=mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=mi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=U_.bind(null,kt,n),[u.memoizedState,n]},useRef:function(n){var i=mi();return n={current:n},i.memoizedState=n},useState:bh,useDebugValue:qu,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=bh(!1),i=n[0];return n=D_.bind(null,n[1]),mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=kt,d=mi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Nr&30||wh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Dh(Ch.bind(null,u,p,n),[n]),u.flags|=2048,bo(9,Ah.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=mi(),i=sn.identifierPrefix;if(zt){var o=Ci,u=Ai;o=(u&~(1<<32-ut(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=L_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},F_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:ju,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Nh,useMemo:zh,useReducer:Xu,useRef:Lh,useState:function(){return Xu(Po)},useDebugValue:qu,useDeferredValue:function(n){var i=Xn();return Bh(i,Zt.memoizedState,n)},useTransition:function(){var n=Xu(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Eh,useSyncExternalStore:Th,useId:kh,unstable_isNewReconciler:!1},O_={readContext:Wn,useCallback:Oh,useContext:Wn,useEffect:ju,useImperativeHandle:Fh,useInsertionEffect:Uh,useLayoutEffect:Nh,useMemo:zh,useReducer:Yu,useRef:Lh,useState:function(){return Yu(Po)},useDebugValue:qu,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Bh(i,Zt.memoizedState,n)},useTransition:function(){var n=Yu(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Eh,useSyncExternalStore:Th,useId:kh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function $u(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ba={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=cr(n),p=Pi(u,d);p.payload=i,o!=null&&(p.callback=o),i=or(n,p,d),i!==null&&(ii(i,n,d,u),La(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=cr(n),p=Pi(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=or(n,p,d),i!==null&&(ii(i,n,d,u),La(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=cr(n),d=Pi(o,u);d.tag=2,i!=null&&(d.callback=i),i=or(n,d,u),i!==null&&(ii(i,n,u,o),La(i,n,u))}};function Wh(n,i,o,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,p):!0}function Xh(n,i,o){var u=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(d=Rn(i)?Pr:pn.current,u=i.contextTypes,p=(u=u!=null)?fs(n,d):ir),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ba,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ba.enqueueReplaceState(i,i.state,null)}function Ku(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Fu(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wn(p):(p=Rn(i)?Pr:pn.current,d.context=fs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&($u(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ba.enqueueReplaceState(d,d.state,null),Da(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function xs(n,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Zu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function jh(n,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ya||(Ya=!0,hc=u),Ju(n,i)},o}function qh(n,i,o){o=Pi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ju(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ju(n,i),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function $h(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new z_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=J_.bind(null,n,i,o),i.then(n,n))}function Kh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zh(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),n)}var B_=R.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,u){i.child=n===null?_h(i,null,o,u):ms(i,n.child,o,u)}function Jh(n,i,o,u,d){o=o.render;var p=i.ref;return _s(i,d),u=Gu(n,i,o,u,p,d),o=Wu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&o&&Au(i),i.flags|=1,Sn(n,i,u,d),i.child)}function Qh(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!yc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,ep(n,i,p,u,d)):(n=Ja(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&d)){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,u)&&n.ref===i.ref)return bi(n,i,d)}return i.flags|=1,n=dr(p,u),n.ref=i.ref,n.return=i,i.child=n}function ep(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(go(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return i.lanes=n.lanes,bi(n,i,d)}return Qu(n,i,o,u,d)}function tp(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ss,zn),zn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ss,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Ut(Ss,zn),zn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Ut(Ss,zn),zn|=u;return Sn(n,i,d,o),i.child}function np(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Qu(n,i,o,u,d){var p=Rn(o)?Pr:pn.current;return p=fs(i,p),_s(i,d),o=Gu(n,i,o,u,p,d),u=Wu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&u&&Au(i),i.flags|=1,Sn(n,i,o,d),i.child)}function ip(n,i,o,u,d){if(Rn(o)){var p=!0;Ea(i)}else p=!1;if(_s(i,d),i.stateNode===null)Ha(n,i),Xh(i,o,u),Ku(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Wn(ne):(ne=Rn(o)?Pr:pn.current,ne=fs(i,ne));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||k!==ne)&&Yh(i,M,u,ne),sr=!1;var ve=i.memoizedState;M.state=ve,Da(i,u,M,d),k=i.memoizedState,D!==u||ve!==k||Cn.current||sr?(typeof xe=="function"&&($u(i,o,xe,u),k=i.memoizedState),(D=sr||Wh(i,o,D,u,ve,k,ne))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),M.props=u,M.state=k,M.context=ne,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,xh(n,i),D=i.memoizedProps,ne=i.type===i.elementType?D:ei(i.type,D),M.props=ne,Se=i.pendingProps,ve=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=Rn(o)?Pr:pn.current,k=fs(i,k));var Fe=o.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Se||ve!==k)&&Yh(i,M,u,k),sr=!1,ve=i.memoizedState,M.state=ve,Da(i,u,M,d);var Ve=i.memoizedState;D!==Se||ve!==Ve||Cn.current||sr?(typeof Fe=="function"&&($u(i,o,Fe,u),Ve=i.memoizedState),(ne=sr||Wh(i,o,ne,u,ve,Ve,k)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=k,u=ne):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return ec(n,i,o,u,p,d)}function ec(n,i,o,u,d,p){np(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&lh(i,o,!1),bi(n,i,p);u=i.stateNode,B_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ms(i,n.child,null,p),i.child=ms(i,null,D,p)):Sn(n,i,D,p),i.memoizedState=u.state,d&&lh(i,o,!0),i.child}function rp(n){var i=n.stateNode;i.pendingContext?oh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(n,i.context,!1),Ou(n,i.containerInfo)}function sp(n,i,o,u,d){return ps(),bu(d),i.flags|=256,Sn(n,i,o,u),i.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function op(n,i,o){var u=i.pendingProps,d=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Bt,d&1),n===null)return Pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Qa(M,u,0,null),n=Br(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=nc(o),i.memoizedState=tc,n):ic(i,M));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return k_(n,i,M,u,D,d,o);if(p){p=u.fallback,M=i.mode,d=n.child,D=d.sibling;var k={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=dr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=dr(D,p):(p=Br(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?nc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~o,i.memoizedState=tc,u}return p=n.child,n=p.sibling,u=dr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function ic(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ka(n,i,o,u){return u!==null&&bu(u),ms(i,n.child,null,o),n=ic(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function k_(n,i,o,u,d,p,M){if(o)return i.flags&256?(i.flags&=-257,u=Zu(Error(t(422))),ka(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Qa({mode:"visible",children:u.children},d,0,null),p=Br(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&ms(i,n.child,null,M),i.child.memoizedState=nc(M),i.memoizedState=tc,p);if(!(i.mode&1))return ka(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(t(419)),u=Zu(p,u,void 0),ka(n,i,M,u)}if(D=(M&n.childLanes)!==0,Pn||D){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(n,d),ii(u,n,d,-1))}return xc(),u=Zu(Error(t(421))),ka(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Q_.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,On=tr(d.nextSibling),Fn=i,zt=!0,Qn=null,n!==null&&(Vn[Gn++]=Ai,Vn[Gn++]=Ci,Vn[Gn++]=br,Ai=n.id,Ci=n.overflow,br=i),i=ic(i,u.children),i.flags|=4096,i)}function ap(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Nu(n.return,i,o)}function rc(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function lp(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Sn(n,i,u.children,o),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ap(n,o,i);else if(n.tag===19)ap(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ut(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ua(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),rc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ua(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}rc(i,!0,o,null,p);break;case"together":rc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=dr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=dr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function H_(n,i,o){switch(i.tag){case 3:rp(i),ps();break;case 5:Mh(i);break;case 1:Rn(i.type)&&Ea(i);break;case 4:Ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ut(Pa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?op(n,i,o):(Ut(Bt,Bt.current&1),n=bi(n,i,o),n!==null?n.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return lp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,tp(n,i,o)}return bi(n,i,o)}var up,sc,cp,fp;up=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},sc=function(){},cp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(pi.current);var p=null;switch(o){case"input":d=B(n,d),u=B(n,u),p=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),p=[];break;case"textarea":d=T(n,d),u=T(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ya)}H(o,u);var M;o=null;for(ne in d)if(!u.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var D=d[ne];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var k=u[ne];if(D=d!=null?d[ne]:void 0,u.hasOwnProperty(ne)&&k!==D&&(k!=null||D!=null))if(ne==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(ne,o)),o=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&It("scroll",n),p||D===k||(p=[])):(p=p||[]).push(ne,k))}o&&(p=p||[]).push("style",o);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},fp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function V_(n,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Ma(),gn(i),null;case 3:return u=i.stateNode,vs(),Ft(Cn),Ft(pn),ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Qn!==null&&(gc(Qn),Qn=null))),sc(n,i),gn(i),null;case 5:zu(i);var d=Ur(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)cp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Ur(pi.current),Ca(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[hi]=i,u[So]=p,n=(i.mode&1)!==0,o){case"dialog":It("cancel",u),It("close",u);break;case"iframe":case"object":case"embed":It("load",u);break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],u);break;case"source":It("error",u);break;case"img":case"image":case"link":It("error",u),It("load",u);break;case"details":It("toggle",u);break;case"input":ln(u,p),It("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},It("invalid",u);break;case"textarea":Z(u,p),It("invalid",u)}H(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&xa(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&xa(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",u)}switch(o){case"input":Pt(u),Ke(u,p,!0);break;case"textarea":Pt(u),_e(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ya)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[hi]=i,n[So]=u,up(n,i,!1,!1),i.stateNode=n;e:{switch(M=ue(o,u),o){case"dialog":It("cancel",n),It("close",n),d=u;break;case"iframe":case"object":case"embed":It("load",n),d=u;break;case"video":case"audio":for(d=0;d<vo.length;d++)It(vo[d],n);d=u;break;case"source":It("error",n),d=u;break;case"img":case"image":case"link":It("error",n),It("load",n),d=u;break;case"details":It("toggle",n),d=u;break;case"input":ln(n,u),d=B(n,u),It("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),It("invalid",n);break;case"textarea":Z(n,u),d=T(n,u),It("invalid",n);break;default:d=u}H(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?rt(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(n,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&It("scroll",n):k!=null&&L(n,p,k,M))}switch(o){case"input":Pt(n),Ke(n,u,!1);break;case"textarea":Pt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?b(n,!!u.multiple,p,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)fp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Ur(Ao.current),Ur(pi.current),Ca(i)){if(u=i.stateNode,o=i.memoizedProps,u[hi]=i,(p=u.nodeValue!==o)&&(n=Fn,n!==null))switch(n.tag){case 3:xa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xa(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return gn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&On!==null&&i.mode&1&&!(i.flags&128))ph(),ps(),i.flags|=98560,p=!1;else if(p=Ca(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[hi]=i}else ps(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else Qn!==null&&(gc(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Bt.current&1?Jt===0&&(Jt=3):xc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return vs(),sc(n,i),n===null&&xo(i.stateNode.containerInfo),gn(i),null;case 10:return Uu(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Ma(),gn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Lo(p,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Ua(n),M!==null){for(i.flags|=128,Lo(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Bt,Bt.current&1|2),i.child}n=n.sibling}p.tail!==null&&K()>Ms&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304)}else{if(!u)if(n=Ua(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*K()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,u=!0,Lo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=Bt.current,Ut(Bt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return vc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?zn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function G_(n,i){switch(Cu(i),i.tag){case 1:return Rn(i.type)&&Ma(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vs(),Ft(Cn),Ft(pn),ku(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return zu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return vs(),null;case 10:return Uu(i.type._context),null;case 22:case 23:return vc(),null;case 24:return null;default:return null}}var Va=!1,_n=!1,W_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ys(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function oc(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var dp=!1;function X_(n,i){if(vu=la,n=Wd(),cu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,ne=0,xe=0,Se=n,ve=null;t:for(;;){for(var Fe;Se!==o||d!==0&&Se.nodeType!==3||(D=M+d),Se!==p||u!==0&&Se.nodeType!==3||(k=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ve=Se,Se=Fe;for(;;){if(Se===n)break t;if(ve===o&&++ne===d&&(D=M),ve===p&&++xe===u&&(k=M),(Fe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Fe}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},la=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var qe=Ve.memoizedProps,Xt=Ve.memoizedState,$=i.stateNode,W=$.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ei(i.type,qe),Xt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Wt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=dp,dp=!1,Ve}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&oc(i,o,p)}d=d.next}while(d!==u)}}function Ga(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function ac(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function hp(n){var i=n.alternate;i!==null&&(n.alternate=null,hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[hi],delete i[So],delete i[Eu],delete i[C_],delete i[R_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pp(n){return n.tag===5||n.tag===3||n.tag===4}function mp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(u!==4&&(n=n.child,n!==null))for(lc(n,i,o),n=n.sibling;n!==null;)lc(n,i,o),n=n.sibling}function uc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,o),n=n.sibling;n!==null;)uc(n,i,o),n=n.sibling}var cn=null,ti=!1;function ar(n,i,o){for(o=o.child;o!==null;)gp(n,i,o),o=o.sibling}function gp(n,i,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||ys(o,i);case 6:var u=cn,d=ti;cn=null,ar(n,i,o),cn=u,ti=d,cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?Mu(n.parentNode,o):n.nodeType===1&&Mu(n,o),uo(n)):Mu(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,ar(n,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&(p&2||p&4)&&oc(o,i,M),d=d.next}while(d!==u)}ar(n,i,o);break;case 1:if(!_n&&(ys(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Wt(o,i,D)}ar(n,i,o);break;case 21:ar(n,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,ar(n,i,o),_n=u):ar(n,i,o);break;default:ar(n,i,o)}}function _p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new W_),i.forEach(function(u){var d=ev.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ti=!1;break e;case 3:cn=D.stateNode.containerInfo,ti=!0;break e;case 4:cn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(cn===null)throw Error(t(160));gp(p,M,d),cn=null,ti=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ne){Wt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,n),i=i.sibling}function vp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),gi(n),u&4){try{Do(3,n,n.return),Ga(3,n)}catch(qe){Wt(n,n.return,qe)}try{Do(5,n,n.return)}catch(qe){Wt(n,n.return,qe)}}break;case 1:ni(i,n),gi(n),u&512&&o!==null&&ys(o,o.return);break;case 5:if(ni(i,n),gi(n),u&512&&o!==null&&ys(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(qe){Wt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=o!==null?o.memoizedProps:p,D=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&pt(d,p),ue(D,M);var ne=ue(D,p);for(M=0;M<k.length;M+=2){var xe=k[M],Se=k[M+1];xe==="style"?rt(d,Se):xe==="dangerouslySetInnerHTML"?Oe(d,Se):xe==="children"?ft(d,Se):L(d,xe,Se,ne)}switch(D){case"input":ct(d,p);break;case"textarea":pe(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?b(d,!!p.multiple,Fe,!1):ve!==!!p.multiple&&(p.defaultValue!=null?b(d,!!p.multiple,p.defaultValue,!0):b(d,!!p.multiple,p.multiple?[]:"",!1))}d[So]=p}catch(qe){Wt(n,n.return,qe)}}break;case 6:if(ni(i,n),gi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(qe){Wt(n,n.return,qe)}}break;case 3:if(ni(i,n),gi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(qe){Wt(n,n.return,qe)}break;case 4:ni(i,n),gi(n);break;case 13:ni(i,n),gi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(dc=K())),u&4&&_p(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(ne=_n)||xe,ni(i,n),_n=ne):ni(i,n),gi(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!xe&&n.mode&1)for(ke=n,xe=n.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(ve=ke,Fe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Do(4,ve,ve.return);break;case 1:ys(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(qe){Wt(u,o,qe)}}break;case 5:ys(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Sp(Se);continue}}Fe!==null?(Fe.return=ve,ke=Fe):Sp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Se.stateNode,k=Se.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Qe("display",M))}catch(qe){Wt(n,n.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(qe){Wt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,n),gi(n),u&4&&_p(n);break;case 21:break;default:ni(i,n),gi(n)}}function gi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(pp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var p=mp(n);uc(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,D=mp(n);lc(n,D,M);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Y_(n,i,o){ke=n,xp(n)}function xp(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Va;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||_n;D=Va;var ne=_n;if(Va=M,(_n=k)&&!ne)for(ke=d;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?Mp(d):k!==null?(k.return=M,ke=k):Mp(d);for(;p!==null;)ke=p,xp(p),p=p.sibling;ke=d,Va=D,_n=ne}yp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ke=p):yp(n)}}function yp(n){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||Ga(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Sh(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&uo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&ac(i)}catch(ve){Wt(i,i.return,ve)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Sp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Mp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(k){Wt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Wt(i,d,k)}}var p=i.return;try{ac(i)}catch(k){Wt(i,p,k)}break;case 5:var M=i.return;try{ac(i)}catch(k){Wt(i,M,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){ke=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ke=D;break}ke=i.return}}var j_=Math.ceil,Wa=R.ReactCurrentDispatcher,cc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,fn=0,zn=0,Ss=nr(0),Jt=0,Uo=null,Ir=0,Xa=0,fc=0,No=null,bn=null,dc=0,Ms=1/0,Li=null,Ya=!1,hc=null,lr=null,ja=!1,ur=null,qa=0,Io=0,pc=null,$a=-1,Ka=0;function Mn(){return Et&6?K():$a!==-1?$a:$a=K()}function cr(n){return n.mode&1?Et&2&&fn!==0?fn&-fn:b_.transition!==null?(Ka===0&&(Ka=Dt()),Ka):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Td(n.type)),n):1}function ii(n,i,o,u){if(50<Io)throw Io=0,pc=null,Error(t(185));tn(n,o,u),(!(Et&2)||n!==sn)&&(n===sn&&(!(Et&2)&&(Xa|=o),Jt===4&&fr(n,fn)),Ln(n,u),o===1&&Et===0&&!(i.mode&1)&&(Ms=K()+500,Ta&&rr()))}function Ln(n,i){var o=n.callbackNode;yn(n,i);var u=dn(n,n===sn?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?P_(Tp.bind(null,n)):uh(Tp.bind(null,n)),w_(function(){!(Et&6)&&rr()}),o=null;else{switch(di(u)){case 1:o=we;break;case 4:o=Le;break;case 16:o=Ie;break;case 536870912:o=ot;break;default:o=Ie}o=Dp(o,Ep.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ep(n,i){if($a=-1,Ka=0,Et&6)throw Error(t(327));var o=n.callbackNode;if(Es()&&n.callbackNode!==o)return null;var u=dn(n,n===sn?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Za(n,u);else{i=u;var d=Et;Et|=2;var p=Ap();(sn!==n||fn!==i)&&(Li=null,Ms=K()+500,Or(n,i));do try{K_();break}catch(D){wp(n,D)}while(!0);Du(),Wa.current=p,Et=d,$t!==null?i=0:(sn=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(d=Ei(n),d!==0&&(u=d,i=mc(n,d))),i===1)throw o=Uo,Or(n,0),fr(n,u),Ln(n,K()),o;if(i===6)fr(n,u);else{if(d=n.current.alternate,!(u&30)&&!q_(d)&&(i=Za(n,u),i===2&&(p=Ei(n),p!==0&&(u=p,i=mc(n,p))),i===1))throw o=Uo,Or(n,0),fr(n,u),Ln(n,K()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:zr(n,bn,Li);break;case 3:if(fr(n,u),(u&130023424)===u&&(i=dc+500-K(),10<i)){if(dn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Su(zr.bind(null,n,bn,Li),i);break}zr(n,bn,Li);break;case 4:if(fr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-ut(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*j_(u/1960))-u,10<u){n.timeoutHandle=Su(zr.bind(null,n,bn,Li),u);break}zr(n,bn,Li);break;case 5:zr(n,bn,Li);break;default:throw Error(t(329))}}}return Ln(n,K()),n.callbackNode===o?Ep.bind(null,n):null}function mc(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Za(n,i),n!==2&&(i=bn,bn=o,i!==null&&gc(i)),n}function gc(n){bn===null?bn=n:bn.push.apply(bn,n)}function q_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Jn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~fc,i&=~Xa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ut(i),u=1<<o;n[o]=-1,i&=~u}}function Tp(n){if(Et&6)throw Error(t(327));Es();var i=dn(n,0);if(!(i&1))return Ln(n,K()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var u=Ei(n);u!==0&&(i=u,o=mc(n,u))}if(o===1)throw o=Uo,Or(n,0),fr(n,i),Ln(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,zr(n,bn,Li),Ln(n,K()),null}function _c(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Ms=K()+500,Ta&&rr())}}function Fr(n){ur!==null&&ur.tag===0&&!(Et&6)&&Es();var i=Et;Et|=1;var o=Yn.transition,u=Mt;try{if(Yn.transition=null,Mt=1,n)return n()}finally{Mt=u,Yn.transition=o,Et=i,!(Et&6)&&rr()}}function vc(){zn=Ss.current,Ft(Ss)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,T_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ma();break;case 3:vs(),Ft(Cn),Ft(pn),ku();break;case 5:zu(u);break;case 4:vs();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Uu(u.type._context);break;case 22:case 23:vc()}o=o.return}if(sn=n,$t=n=dr(n.current,null),fn=zn=i,Jt=0,Uo=null,fc=Xa=Ir=0,bn=No=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}o.pending=u}Dr=null}return n}function wp(n,i){do{var o=$t;try{if(Du(),Na.current=za,Ia){for(var u=kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ia=!1}if(Nr=0,rn=Zt=kt=null,Co=!1,Ro=0,cc.current=null,o===null||o.return===null){Jt=1,Uo=i,$t=null;break}e:{var p=n,M=o.return,D=o,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,xe=D,Se=xe.tag;if(!(xe.mode&1)&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Kh(M);if(Fe!==null){Fe.flags&=-257,Zh(Fe,M,D,p,i),Fe.mode&1&&$h(p,ne,i),i=Fe,k=ne;var Ve=i.updateQueue;if(Ve===null){var qe=new Set;qe.add(k),i.updateQueue=qe}else Ve.add(k);break e}else{if(!(i&1)){$h(p,ne,i),xc();break e}k=Error(t(426))}}else if(zt&&D.mode&1){var Xt=Kh(M);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),Zh(Xt,M,D,p,i),bu(xs(k,D));break e}}p=k=xs(k,D),Jt!==4&&(Jt=2),No===null?No=[p]:No.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=jh(p,k,i);yh(p,$);break e;case 1:D=k;var W=p.type,J=p.stateNode;if(!(p.flags&128)&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(lr===null||!lr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=qh(p,D,i);yh(p,Ae);break e}}p=p.return}while(p!==null)}Rp(o)}catch($e){i=$e,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Ap(){var n=Wa.current;return Wa.current=za,n===null?za:n}function xc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||!(Ir&268435455)&&!(Xa&268435455)||fr(sn,fn)}function Za(n,i){var o=Et;Et|=2;var u=Ap();(sn!==n||fn!==i)&&(Li=null,Or(n,i));do try{$_();break}catch(d){wp(n,d)}while(!0);if(Du(),Et=o,Wa.current=u,$t!==null)throw Error(t(261));return sn=null,fn=0,Jt}function $_(){for(;$t!==null;)Cp($t)}function K_(){for(;$t!==null&&!j();)Cp($t)}function Cp(n){var i=Lp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Rp(n):$t=i,cc.current=null}function Rp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=G_(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,$t=null;return}}else if(o=V_(o,i,zn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Jt===0&&(Jt=5)}function zr(n,i,o){var u=Mt,d=Yn.transition;try{Yn.transition=null,Mt=1,Z_(n,i,o,u)}finally{Yn.transition=d,Mt=u}return null}function Z_(n,i,o,u){do Es();while(ur!==null);if(Et&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(n,p),n===sn&&($t=sn=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ja||(ja=!0,Dp(Ie,function(){return Es(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=Yn.transition,Yn.transition=null;var M=Mt;Mt=1;var D=Et;Et|=4,cc.current=null,X_(n,o),vp(o,n),__(xu),la=!!vu,xu=vu=null,n.current=o,Y_(o),te(),Et=D,Mt=M,Yn.transition=p}else n.current=o;if(ja&&(ja=!1,ur=n,qa=d),p=n.pendingLanes,p===0&&(lr=null),yt(o.stateNode),Ln(n,K()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ya)throw Ya=!1,n=hc,hc=null,n;return qa&1&&n.tag!==0&&Es(),p=n.pendingLanes,p&1?n===pc?Io++:(Io=0,pc=n):Io=0,rr(),null}function Es(){if(ur!==null){var n=di(qa),i=Yn.transition,o=Mt;try{if(Yn.transition=null,Mt=16>n?16:n,ur===null)var u=!1;else{if(n=ur,ur=null,qa=0,Et&6)throw Error(t(331));var d=Et;for(Et|=4,ke=n.current;ke!==null;){var p=ke,M=p.child;if(ke.flags&16){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ne=D[k];for(ke=ne;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Do(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Fe=xe.return;if(hp(xe),xe===ne){ke=null;break}if(ve!==null){ve.return=Fe,ke=ve;break}ke=Fe}}}var Ve=p.alternate;if(Ve!==null){var qe=Ve.child;if(qe!==null){Ve.child=null;do{var Xt=qe.sibling;qe.sibling=null,qe=Xt}while(qe!==null)}}ke=p}}if(p.subtreeFlags&2064&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,ke=$;break e}ke=p.return}}var W=n.current;for(ke=W;ke!==null;){M=ke;var J=M.child;if(M.subtreeFlags&2064&&J!==null)J.return=M,ke=J;else e:for(M=W;ke!==null;){if(D=ke,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Ga(9,D)}}catch($e){Wt(D,D.return,$e)}if(D===M){ke=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,ke=Ae;break e}ke=D.return}}if(Et=d,rr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{Mt=o,Yn.transition=i}}return!1}function Pp(n,i,o){i=xs(o,i),i=jh(n,i,1),n=or(n,i,1),i=Mn(),n!==null&&(tn(n,1,i),Ln(n,i))}function Wt(n,i,o){if(n.tag===3)Pp(n,n,o);else for(;i!==null;){if(i.tag===3){Pp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){n=xs(o,n),n=qh(i,n,1),i=or(i,n,1),n=Mn(),i!==null&&(tn(i,1,n),Ln(i,n));break}}i=i.return}}function J_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>K()-dc?Or(n,0):fc|=o),Ln(n,i)}function bp(n,i){i===0&&(n.mode&1?(i=Gt,Gt<<=1,!(Gt&130023424)&&(Gt=4194304)):i=1);var o=Mn();n=Ri(n,i),n!==null&&(tn(n,i,o),Ln(n,o))}function Q_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),bp(n,o)}function ev(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),bp(n,o)}var Lp;Lp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Pn=!1,H_(n,i,o);Pn=!!(n.flags&131072)}else Pn=!1,zt&&i.flags&1048576&&ch(i,Aa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ha(n,i),n=i.pendingProps;var d=fs(i,pn.current);_s(i,o),d=Gu(null,i,u,n,d,o);var p=Wu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,Ea(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fu(i),d.updater=Ba,i.stateNode=d,d._reactInternals=i,Ku(i,u,n,o),i=ec(null,i,u,!0,p,o)):(i.tag=0,zt&&p&&Au(i),Sn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ha(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=nv(u),n=ei(u,n),d){case 0:i=Qu(null,i,u,n,o);break e;case 1:i=ip(null,i,u,n,o);break e;case 11:i=Jh(null,i,u,n,o);break e;case 14:i=Qh(null,i,u,ei(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Qu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ip(n,i,u,d,o);case 3:e:{if(rp(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,xh(n,i),Da(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=xs(Error(t(423)),i),i=sp(n,i,u,o,d);break e}else if(u!==d){d=xs(Error(t(424)),i),i=sp(n,i,u,o,d);break e}else for(On=tr(i.stateNode.containerInfo.firstChild),Fn=i,zt=!0,Qn=null,o=_h(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),u===d){i=bi(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return Mh(i),n===null&&Pu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,yu(u,d)?M=null:p!==null&&yu(u,p)&&(i.flags|=32),np(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&Pu(i),null;case 13:return op(n,i,o);case 4:return Ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ms(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Jh(n,i,u,d,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Ut(Pa,u._currentValue),u._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===d.children&&!Cn.current){i=bi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=Pi(-1,o&-o),k.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ne.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Nu(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Nu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,_s(i,o),d=Wn(d),u=u(d),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),Qh(n,i,u,d,o);case 15:return ep(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Ha(n,i),i.tag=1,Rn(u)?(n=!0,Ea(i)):n=!1,_s(i,o),Xh(i,u,d),Ku(i,u,d,o),ec(null,i,u,!0,n,o);case 19:return lp(n,i,o);case 22:return tp(n,i,o)}throw Error(t(156,i.tag))};function Dp(n,i){return sa(n,i)}function tv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(n,i,o,u){return new tv(n,i,o,u)}function yc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nv(n){if(typeof n=="function")return yc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===ge)return 14}return 2}function dr(n,i){var o=n.alternate;return o===null?(o=jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ja(n,i,o,u,d,p){var M=2;if(u=n,typeof n=="function")yc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Br(o.children,d,p,i);case I:M=8,d|=8;break;case P:return n=jn(12,o,i,d|2),n.elementType=P,n.lanes=p,n;case ee:return n=jn(13,o,i,d),n.elementType=ee,n.lanes=p,n;case de:return n=jn(19,o,i,d),n.elementType=de,n.lanes=p,n;case ce:return Qa(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:M=10;break e;case G:M=9;break e;case le:M=11;break e;case ge:M=14;break e;case oe:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=jn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Br(n,i,o,u){return n=jn(7,n,u,i),n.lanes=o,n}function Qa(n,i,o,u){return n=jn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Sc(n,i,o){return n=jn(6,n,null,i),n.lanes=o,n}function Mc(n,i,o){return i=jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ec(n,i,o,u,d,p,M,D,k){return n=new iv(n,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(p),n}function rv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Up(n){if(!n)return ir;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return ah(n,o,i)}return i}function Np(n,i,o,u,d,p,M,D,k){return n=Ec(o,u,!0,n,d,p,M,D,k),n.context=Up(null),o=n.current,u=Mn(),d=cr(o),p=Pi(u,d),p.callback=i??null,or(o,p,d),n.current.lanes=d,tn(n,d,u),Ln(n,u),n}function el(n,i,o,u){var d=i.current,p=Mn(),M=cr(d);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=or(d,i,M),n!==null&&(ii(n,d,M,p),La(n,d,M)),M}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ip(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Tc(n,i){Ip(n,i),(n=n.alternate)&&Ip(n,i)}function sv(){return null}var Fp=typeof reportError=="function"?reportError:function(n){console.error(n)};function wc(n){this._internalRoot=n}nl.prototype.render=wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){el(null,n,null,null)}),i[Ti]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=xd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,n),o===0&&Md(n)}};function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Op(){}function ov(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var ne=tl(M);p.call(ne)}}var M=Np(i,u,n,0,null,!1,!1,"",Op);return n._reactRootContainer=M,n[Ti]=M.current,xo(n.nodeType===8?n.parentNode:n),Fr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var ne=tl(k);D.call(ne)}}var k=Ec(n,0,!1,null,null,!1,!1,"",Op);return n._reactRootContainer=k,n[Ti]=k.current,xo(n.nodeType===8?n.parentNode:n),Fr(function(){el(i,k,o,u)}),k}function rl(n,i,o,u,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var k=tl(M);D.call(k)}}el(i,M,n,d)}else M=ov(o,i,n,d,u);return tl(M)}_d=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=vt(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,K()),!(Et&6)&&(Ms=K()+500,rr()))}break;case 13:Fr(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),Tc(n,1)}},Zl=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var o=Mn();ii(i,n,134217728,o)}Tc(n,134217728)}},vd=function(n){if(n.tag===13){var i=cr(n),o=Ri(n,i);if(o!==null){var u=Mn();ii(o,n,i,u)}Tc(n,i)}},xd=function(){return Mt},yd=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Te=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Sa(u);if(!d)throw Error(t(90));Rt(u),ct(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},xt=_c,Nt=Fr;var av={usingClientEntryPoint:!1,Events:[Mo,us,Sa,be,et,_c]},Fo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{st=sl.inject(lv),Xe=sl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av,Dn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(i))throw Error(t(200));return rv(n,i,null,o)},Dn.createRoot=function(n,i){if(!Ac(n))throw Error(t(299));var o=!1,u="",d=Fp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ec(n,1,!1,null,null,o,!1,u,d),n[Ti]=i.current,xo(n.nodeType===8?n.parentNode:n),new wc(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Fr(n)},Dn.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},Dn.hydrateRoot=function(n,i,o){if(!Ac(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",M=Fp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Np(i,null,n,1,o??null,d,!1,p,M),n[Ti]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},Dn.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},Dn.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ti]=null})}),!0):!1},Dn.unstable_batchedUpdates=_c,Dn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Xp;function gv(){if(Xp)return Pc.exports;Xp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=mv(),Pc.exports}var Yp;function _v(){if(Yp)return ol;Yp=1;var s=gv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var vv=_v();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="173",Ts={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xv=1,qm=1,yv=2,Oi=3,Tr=0,Un=1,Bi=2,Sr=0,js=1,jp=2,qp=3,$p=4,Sv=5,jr=100,Mv=101,Ev=102,Tv=103,wv=104,Av=200,Cv=201,Rv=202,Pv=203,hf=204,pf=205,bv=206,Lv=207,Dv=208,Uv=209,Nv=210,Iv=211,Fv=212,Ov=213,zv=214,mf=0,gf=1,_f=2,Ks=3,vf=4,xf=5,yf=6,Sf=7,$m=0,Bv=1,kv=2,Mr=0,Hv=1,Vv=2,Gv=3,Wv=4,Xv=5,Yv=6,jv=7,Km=300,Zs=301,Js=302,Mf=303,Ef=304,Yl=306,Tf=1e3,$r=1001,wf=1002,ui=1003,qv=1004,al=1005,xi=1006,Dc=1007,Kr=1008,Gi=1009,Zm=1010,Jm=1011,qo=1012,rd=1013,Zr=1014,ki=1015,$o=1016,sd=1017,od=1018,Qs=1020,Qm=35902,eg=1021,tg=1022,ai=1023,ng=1024,ig=1025,qs=1026,eo=1027,rg=1028,ad=1029,sg=1030,ld=1031,ud=1033,Nl=33776,Il=33777,Fl=33778,Ol=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,bf=36196,Lf=37492,Df=37496,Uf=37808,Nf=37809,If=37810,Ff=37811,Of=37812,zf=37813,Bf=37814,kf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,Yf=37821,zl=36492,jf=36494,qf=36495,og=36283,$f=36284,Kf=36285,Zf=36286,$v=3200,Kv=3201,Zv=0,Jv=1,yr="",Kn="srgb",to="srgb-linear",Hl="linear",bt="srgb",As=7680,Kp=519,Qv=512,e0=513,t0=514,ag=515,n0=516,i0=517,r0=518,s0=519,Jf=35044,Zp="300 es",Hi=2e3,Vl=2001;let io=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}};const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,Qf=180/Math.PI;function Er(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function o0(s,e){return(s%e+e)%e}function Nc(s,e,t){return(1-t)*s+t*e}function vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,a,l,c,f,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,m)}set(e,t,r,a,l,c,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],m=r[1],g=r[4],_=r[7],x=r[2],S=r[5],E=r[8],C=a[0],y=a[3],v=a[6],N=a[1],L=a[4],R=a[7],X=a[2],z=a[5],F=a[8];return l[0]=c*C+f*N+h*X,l[3]=c*y+f*L+h*z,l[6]=c*v+f*R+h*F,l[1]=m*C+g*N+_*X,l[4]=m*y+g*L+_*z,l[7]=m*v+g*R+_*F,l[2]=x*C+S*N+E*X,l[5]=x*y+S*L+E*z,l[8]=x*v+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*f*m-r*l*g+r*f*h+a*l*m-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=g*c-f*m,x=f*h-g*l,S=m*l-c*h,E=t*_+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(a*m-g*r)*C,e[2]=(f*r-a*c)*C,e[3]=x*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-f*t)*C,e[6]=S*C,e[7]=(r*h-m*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*f)+c+e,-a*m,a*h,-a*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new dt;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function a0(){const s=Gl("canvas");return s.style.display="block",s}const Jp={};function Xs(s){s in Jp||(Jp[s]=!0,console.warn(s))}function l0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function u0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f0(){const s={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=$s(a.r),a.g=$s(a.g),a.b=$s(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Hl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[to]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const At=f0();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class d0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Gl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Vi(t[r]/255)*255):t[r]=Vi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h0=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Fc(a[c].image)):l.push(Fc(a[c]))}else l=Fc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?d0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p0=0;class An extends io{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=$r,a=$r,l=xi,c=Kr,f=ai,h=Gi,m=An.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Er(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Km;An.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],g=h[4],_=h[8],x=h[1],S=h[5],E=h[9],C=h[2],y=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,R=(S+1)/2,X=(v+1)/2,z=(g+x)/4,F=(_+C)/4,I=(E+y)/4;return L>R&&L>X?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=z/r,l=F/r):R>X?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=z/a,l=I/a):X<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),r=F/l,a=I/l),this.set(r,a,l,t),this}let N=Math.sqrt((y-E)*(y-E)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-C)/N,this.z=(x-g)/N,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m0 extends io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ug(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends m0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g0 extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];const x=l[c+0],S=l[c+1],E=l[c+2],C=l[c+3];if(f===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=C;return}if(_!==C||h!==x||m!==S||g!==E){let y=1-f;const v=h*x+m*S+g*E+_*C,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const X=Math.sqrt(L),z=Math.atan2(X,v*N);y=Math.sin(y*z)/X,f=Math.sin(f*z)/X}const R=f*N;if(h=h*y+x*R,m=m*y+S*R,g=g*y+E*R,_=_*y+C*R,y===1-f){const X=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=X,m*=X,g*=X,_*=X}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],_=l[c],x=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*_+h*S-m*x,e[t+1]=h*E+g*x+m*_-f*S,e[t+2]=m*E+g*S+f*x-h*_,e[t+3]=g*E-f*_-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),_=f(l/2),x=h(r/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"YZX":this._x=x*g*_+m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_-x*S*E;break;case"XZY":this._x=x*g*_-m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],g=t[6],_=t[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(c-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+m)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+c*f+a*m-l*h,this._y=a*g+c*h+l*f-r*m,this._z=l*g+c*m+r*h-a*f,this._w=c*g-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),_=Math.sin((1-t)*g)/m,x=Math.sin(t*g)/m;return this._w=c*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*a-f*r),g=2*(f*t-l*a),_=2*(l*r-c*t);return this.x=t+h*m+c*_-f*g,this.y=r+h*g+f*m-l*_,this.z=a+h*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new Y,tm=new Qr;class Ko{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),ul.subVectors(this.max,zo),Rs.subVectors(e.a,zo),Ps.subVectors(e.b,zo),bs.subVectors(e.c,zo),pr.subVectors(Ps,Rs),mr.subVectors(bs,Ps),kr.subVectors(Rs,bs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-kr.z,kr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,kr.z,0,-kr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-kr.y,kr.x,0];return!zc(t,Rs,Ps,bs,ul)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Rs,Ps,bs,ul))?!1:(cl.crossVectors(pr,mr),t=[cl.x,cl.y,cl.z],zc(t,Rs,Ps,bs,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ri=new Y,ll=new Ko,Rs=new Y,Ps=new Y,bs=new Y,pr=new Y,mr=new Y,kr=new Y,zo=new Y,ul=new Y,cl=new Y,Hr=new Y;function zc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Hr.fromArray(s,l);const f=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=t.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const _0=new Ko,Bo=new Y,Bc=new Y;class cd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Bc)),this.expandByPoint(Bo.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new Y,kc=new Y,fl=new Y,gr=new Y,Hc=new Y,dl=new Y,Vc=new Y;class fd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){kc.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(kc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(fl),f=gr.dot(this.direction),h=-gr.dot(fl),m=gr.lengthSq(),g=Math.abs(1-c*c);let _,x,S,E;if(g>0)if(_=c*h-f,x=c*f-h,E=l*g,_>=0)if(x>=-E)if(x<=E){const C=1/g;_*=C,x*=C,S=_*(_+c*x+2*f)+x*(c*_+x+2*h)+m}else x=l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+m;else x=-l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+m;else x<=-E?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+m):x<=E?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+m);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(kc).addScaledVector(fl,x),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,a,l){Hc.subVectors(t,e),dl.subVectors(r,e),Vc.crossVectors(Hc,dl);let c=this.direction.dot(Vc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(gr,dl));if(h<0)return null;const m=f*this.direction.dot(Hc.cross(gr));if(m<0||h+m>c)return null;const g=-f*gr.dot(Vc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,c,f,h,m,g,_,x,S,E,C,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,m,g,_,x,S,E,C,y)}set(e,t,r,a,l,c,f,h,m,g,_,x,S,E,C,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*_,E=f*g,C=f*_;t[0]=h*g,t[4]=-h*_,t[8]=m,t[1]=S+E*m,t[5]=x-C*m,t[9]=-f*h,t[2]=C-x*m,t[6]=E+S*m,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*_,E=m*g,C=m*_;t[0]=x+C*f,t[4]=E*f-S,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=C+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*_,E=m*g,C=m*_;t[0]=x-C*f,t[4]=-c*_,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=C-x*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*_,E=f*g,C=f*_;t[0]=h*g,t[4]=E*m-S,t[8]=x*m+C,t[1]=h*_,t[5]=C*m+x,t[9]=S*m-E,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*m,E=f*h,C=f*m;t[0]=h*g,t[4]=C-x*_,t[8]=E*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-m*g,t[6]=S*_+E,t[10]=x-C*_}else if(e.order==="XZY"){const x=c*h,S=c*m,E=f*h,C=f*m;t[0]=h*g,t[4]=-_,t[8]=m*g,t[1]=x*_+C,t[5]=c*g,t[9]=S*_-E,t[2]=E*_-S,t[6]=f*g,t[10]=C*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),_r.crossVectors(r,Bn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),_r.crossVectors(r,Bn)),_r.normalize(),hl.crossVectors(Bn,_r),a[0]=_r.x,a[4]=hl.x,a[8]=Bn.x,a[1]=_r.y,a[5]=hl.y,a[9]=Bn.y,a[2]=_r.z,a[6]=hl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],m=r[12],g=r[1],_=r[5],x=r[9],S=r[13],E=r[2],C=r[6],y=r[10],v=r[14],N=r[3],L=r[7],R=r[11],X=r[15],z=a[0],F=a[4],I=a[8],P=a[12],w=a[1],G=a[5],le=a[9],ee=a[13],de=a[2],ge=a[6],oe=a[10],ce=a[14],V=a[3],ae=a[7],se=a[11],U=a[15];return l[0]=c*z+f*w+h*de+m*V,l[4]=c*F+f*G+h*ge+m*ae,l[8]=c*I+f*le+h*oe+m*se,l[12]=c*P+f*ee+h*ce+m*U,l[1]=g*z+_*w+x*de+S*V,l[5]=g*F+_*G+x*ge+S*ae,l[9]=g*I+_*le+x*oe+S*se,l[13]=g*P+_*ee+x*ce+S*U,l[2]=E*z+C*w+y*de+v*V,l[6]=E*F+C*G+y*ge+v*ae,l[10]=E*I+C*le+y*oe+v*se,l[14]=E*P+C*ee+y*ce+v*U,l[3]=N*z+L*w+R*de+X*V,l[7]=N*F+L*G+R*ge+X*ae,l[11]=N*I+L*le+R*oe+X*se,l[15]=N*P+L*ee+R*ce+X*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],g=e[2],_=e[6],x=e[10],S=e[14],E=e[3],C=e[7],y=e[11],v=e[15];return E*(+l*h*_-a*m*_-l*f*x+r*m*x+a*f*S-r*h*S)+C*(+t*h*S-t*m*x+l*c*x-a*c*S+a*m*g-l*h*g)+y*(+t*m*_-t*f*S-l*c*_+r*c*S+l*f*g-r*m*g)+v*(-a*f*g-t*h*_+t*f*x+a*c*_-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=e[9],x=e[10],S=e[11],E=e[12],C=e[13],y=e[14],v=e[15],N=_*y*m-C*x*m+C*h*S-f*y*S-_*h*v+f*x*v,L=E*x*m-g*y*m-E*h*S+c*y*S+g*h*v-c*x*v,R=g*C*m-E*_*m+E*f*S-c*C*S-g*f*v+c*_*v,X=E*_*h-g*C*h-E*f*x+c*C*x+g*f*y-c*_*y,z=t*N+r*L+a*R+l*X;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=N*F,e[1]=(C*x*l-_*y*l-C*a*S+r*y*S+_*a*v-r*x*v)*F,e[2]=(f*y*l-C*h*l+C*a*m-r*y*m-f*a*v+r*h*v)*F,e[3]=(_*h*l-f*x*l-_*a*m+r*x*m+f*a*S-r*h*S)*F,e[4]=L*F,e[5]=(g*y*l-E*x*l+E*a*S-t*y*S-g*a*v+t*x*v)*F,e[6]=(E*h*l-c*y*l-E*a*m+t*y*m+c*a*v-t*h*v)*F,e[7]=(c*x*l-g*h*l+g*a*m-t*x*m-c*a*S+t*h*S)*F,e[8]=R*F,e[9]=(E*_*l-g*C*l-E*r*S+t*C*S+g*r*v-t*_*v)*F,e[10]=(c*C*l-E*f*l+E*r*m-t*C*m-c*r*v+t*f*v)*F,e[11]=(g*f*l-c*_*l-g*r*m+t*_*m+c*r*S-t*f*S)*F,e[12]=X*F,e[13]=(g*C*a-E*_*a+E*r*x-t*C*x-g*r*y+t*_*y)*F,e[14]=(E*f*a-c*C*a-E*r*h+t*C*h+c*r*y-t*f*y)*F,e[15]=(c*_*a-g*f*a+g*r*h-t*_*h-c*r*x+t*f*x)*F,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,m=l*c,g=l*f;return this.set(m*c+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*c,0,m*h-a*f,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,g=c+c,_=f+f,x=l*m,S=l*g,E=l*_,C=c*g,y=c*_,v=f*_,N=h*m,L=h*g,R=h*_,X=r.x,z=r.y,F=r.z;return a[0]=(1-(C+v))*X,a[1]=(S+R)*X,a[2]=(E-L)*X,a[3]=0,a[4]=(S-R)*z,a[5]=(1-(x+v))*z,a[6]=(y+N)*z,a[7]=0,a[8]=(E+L)*F,a[9]=(y-N)*F,a[10]=(1-(x+C))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ls.set(a[0],a[1],a[2]).length();const c=Ls.set(a[4],a[5],a[6]).length(),f=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/l,g=1/c,_=1/f;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=g,si.elements[5]*=g,si.elements[6]*=g,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,t.setFromRotationMatrix(si),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=Hi){const h=this.elements,m=2*l/(t-e),g=2*l/(r-a),_=(t+e)/(t-e),x=(r+a)/(r-a);let S,E;if(f===Hi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Vl)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=Hi){const h=this.elements,m=1/(t-e),g=1/(r-a),_=1/(c-l),x=(t+e)*m,S=(r+a)*g;let E,C;if(f===Hi)E=(c+l)*_,C=-2*_;else if(f===Vl)E=l*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=C,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new Y,si=new Ht,v0=new Y(0,0,0),x0=new Y(1,1,1),_r=new Y,hl=new Y,Bn=new Y,nm=new Ht,im=new Qr;class Wi{constructor(e=0,t=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],m=a[5],g=a[9],_=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y0=0;const rm=new Y,Ds=new Qr,Ni=new Ht,pl=new Y,ko=new Y,S0=new Y,M0=new Qr,sm=new Y(1,0,0),om=new Y(0,1,0),am=new Y(0,0,1),lm={type:"added"},E0={type:"removed"},Us={type:"childadded",child:null},Gc={type:"childremoved",child:null};class Nn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Y,t=new Wi,r=new Qr,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new dt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?pl.copy(e):pl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ko,pl,this.up):Ni.lookAt(pl,ko,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new Y(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Y,Ii=new Y,Wc=new Y,Fi=new Y,Ns=new Y,Is=new Y,um=new Y,Xc=new Y,Yc=new Y,jc=new Y,qc=new Yt,$c=new Yt,Kc=new Yt;class Zn{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),oi.subVectors(e,t),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){oi.subVectors(a,t),Ii.subVectors(r,t),Wc.subVectors(e,t);const c=oi.dot(oi),f=oi.dot(Ii),h=oi.dot(Wc),m=Ii.dot(Ii),g=Ii.dot(Wc),_=c*m-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(m*h-f*g)*x,E=(c*g-f*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Fi.x),h.addScaledVector(c,Fi.y),h.addScaledVector(f,Fi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return qc.setScalar(0),$c.setScalar(0),Kc.setScalar(0),qc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,r),Kc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(qc,l.x),c.addScaledVector($c,l.y),c.addScaledVector(Kc,l.z),c}static isFrontFacing(e,t,r,a){return oi.subVectors(r,t),Ii.subVectors(e,t),oi.cross(Ii).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),oi.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Zn.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Ns.subVectors(a,r),Is.subVectors(l,r),Xc.subVectors(e,r);const h=Ns.dot(Xc),m=Is.dot(Xc);if(h<=0&&m<=0)return t.copy(r);Yc.subVectors(e,a);const g=Ns.dot(Yc),_=Is.dot(Yc);if(g>=0&&_<=g)return t.copy(a);const x=h*_-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Ns,c);jc.subVectors(e,l);const S=Ns.dot(jc),E=Is.dot(jc);if(E>=0&&S<=E)return t.copy(l);const C=S*m-h*E;if(C<=0&&m>=0&&E<=0)return f=m/(m-E),t.copy(r).addScaledVector(Is,f);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return um.subVectors(l,a),f=(_-g)/(_-g+(S-E)),t.copy(a).addScaledVector(um,f);const v=1/(y+C+x);return c=C*v,f=x*v,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Zc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=o0(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Zc(c,l,e+1/3),this.g=Zc(c,l,e),this.b=Zc(c,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=fg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return At.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,a=xn.g,l=xn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const g=(f+c)/2;if(f===c)h=0,m=0;else{const _=c-f;switch(m=g<=.5?_/(c+f):_/(2-c-f),c){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Kn){At.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,a=xn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(ml);const r=Nc(vr.h,ml.h,t),a=Nc(vr.s,ml.s,t),l=Nc(vr.l,ml.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ct;Ct.NAMES=fg;let T0=0;class Zo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=js,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jl extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Y,gl=new Ge;let w0=0;class ci{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Jf,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jf&&(e.usage=this.usage),e}}class dg extends ci{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class hg extends ci{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends ci{constructor(e,t,r){super(new Float32Array(e),t,r)}}let A0=0;const qn=new Ht,Jc=new Nn,Fs=new Y,kn=new Ko,Ho=new Ko,an=new Y;class yi extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?hg:dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,r){return qn.makeTranslation(e,t,r),this.applyMatrix4(qn),this}scale(e,t,r){return qn.makeScale(e,t,r),this.applyMatrix4(qn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];kn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(kn.min,Ho.min),kn.expandByPoint(an),an.addVectors(kn.max,Ho.max),kn.expandByPoint(an)):(kn.expandByPoint(Ho.min),kn.expandByPoint(Ho.max))}kn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)an.fromBufferAttribute(f,m),h&&(Fs.fromBufferAttribute(e,m),an.add(Fs)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let I=0;I<r.count;I++)f[I]=new Y,h[I]=new Y;const m=new Y,g=new Y,_=new Y,x=new Ge,S=new Ge,E=new Ge,C=new Y,y=new Y;function v(I,P,w){m.fromBufferAttribute(r,I),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,w),x.fromBufferAttribute(l,I),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,w),g.sub(m),_.sub(m),S.sub(x),E.sub(x);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),f[I].add(C),f[P].add(C),f[w].add(C),h[I].add(y),h[P].add(y),h[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let I=0,P=N.length;I<P;++I){const w=N[I],G=w.start,le=w.count;for(let ee=G,de=G+le;ee<de;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new Y,R=new Y,X=new Y,z=new Y;function F(I){X.fromBufferAttribute(a,I),z.copy(X);const P=f[I];L.copy(P),L.sub(X.multiplyScalar(X.dot(P))).normalize(),R.crossVectors(z,P);const G=R.dot(h[I])<0?-1:1;c.setXYZW(I,L.x,L.y,L.z,G)}for(let I=0,P=N.length;I<P;++I){const w=N[I],G=w.start,le=w.count;for(let ee=G,de=G+le;ee<de;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Y,l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,g=new Y,_=new Y;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),f.add(g),h.add(g),m.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,_=f.normalized,x=new m.constructor(h.length*g);let S=0,E=0;for(let C=0,y=h.length;C<y;C++){f.isInterleavedBufferAttribute?S=h[C]*f.data.stride+f.offset:S=h[C]*g;for(let v=0;v<g;v++)x[E++]=m[S++]}return new ci(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let g=0,_=m.length;g<_;g++){const x=m[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],_=l[m];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Ht,Vr=new fd,_l=new cd,fm=new Y,vl=new Y,xl=new Y,yl=new Y,Qc=new Y,Sl=new Y,dm=new Y,Ml=new Y;class li extends Nn{constructor(e=new yi,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=f[h],_=l[h];g!==0&&(Qc.fromBufferAttribute(_,e),c?Sl.addScaledVector(Qc,g):Sl.addScaledVector(Qc.sub(t),g))}t.add(Sl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(_l.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(_l,fm)===null||Vr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(cm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,C=x.length;E<C;E++){const y=x[E],v=c[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,X=L;R<X;R+=3){const z=f.getX(R),F=f.getX(R+1),I=f.getX(R+2);a=El(this,v,e,r,m,g,_,z,F,I),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=E,v=C;y<v;y+=3){const N=f.getX(y),L=f.getX(y+1),R=f.getX(y+2);a=El(this,c,e,r,m,g,_,N,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,C=x.length;E<C;E++){const y=x[E],v=c[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,X=L;R<X;R+=3){const z=R,F=R+1,I=R+2;a=El(this,v,e,r,m,g,_,z,F,I),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=E,v=C;y<v;y+=3){const N=y,L=y+1,R=y+2;a=El(this,c,e,r,m,g,_,N,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function C0(s,e,t,r,a,l,c,f){let h;if(e.side===Un?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Tr,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ml);return m<t.near||m>t.far?null:{distance:m,point:Ml.clone(),object:s}}function El(s,e,t,r,a,l,c,f,h,m){s.getVertexPosition(f,vl),s.getVertexPosition(h,xl),s.getVertexPosition(m,yl);const g=C0(s,e,t,r,vl,xl,yl,dm);if(g){const _=new Y;Zn.getBarycoord(dm,vl,xl,yl,_),a&&(g.uv=Zn.getInterpolatedAttribute(a,f,h,m,_,new Ge)),l&&(g.uv1=Zn.getInterpolatedAttribute(l,f,h,m,_,new Ge)),c&&(g.normal=Zn.getInterpolatedAttribute(c,f,h,m,_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new Y,materialIndex:0};Zn.getNormal(vl,xl,yl,x.normal),g.face=x,g.barycoord=_}return g}class Jo extends yi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(_,2));function E(C,y,v,N,L,R,X,z,F,I,P){const w=R/F,G=X/I,le=R/2,ee=X/2,de=z/2,ge=F+1,oe=I+1;let ce=0,V=0;const ae=new Y;for(let se=0;se<oe;se++){const U=se*G-ee;for(let re=0;re<ge;re++){const Ne=re*w-le;ae[C]=Ne*N,ae[y]=U*L,ae[v]=de,m.push(ae.x,ae.y,ae.z),ae[C]=0,ae[y]=0,ae[v]=z>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(re/F),_.push(1-se/I),ce+=1}}for(let se=0;se<I;se++)for(let U=0;U<F;U++){const re=x+U+ge*se,Ne=x+U+ge*(se+1),Q=x+(U+1)+ge*(se+1),me=x+(U+1)+ge*se;h.push(re,Ne,me),h.push(Ne,Q,me),V+=6}f.addGroup(S,V,P),S+=V,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=no(s[t]);for(const a in r)e[a]=r[a]}return e}function R0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const P0={clone:no,merge:Tn};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class mg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Y,hm=new Ge,pm=new Ge;class wn extends mg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,hm,pm),t.subVectors(pm,hm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,zs=1;class D0 extends Nn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wn(Os,zs,e,t);a.layers=this.layers,this.add(a);const l=new wn(Os,zs,e,t);l.layers=this.layers,this.add(l);const c=new wn(Os,zs,e,t);c.layers=this.layers,this.add(c);const f=new wn(Os,zs,e,t);f.layers=this.layers,this.add(f);const h=new wn(Os,zs,e,t);h.layers=this.layers,this.add(h);const m=new wn(Os,zs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gg extends An{constructor(e,t,r,a,l,c,f,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,a,l,c,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U0 extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new gg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Sr});l.uniforms.tEquirect.value=t;const c=new li(a,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=xi),new D0(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Tl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),v=this._getHandJoint(m,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}let I0=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class F0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=Er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new Y;class Wl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=vi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _g extends Zo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Vo=new Y,ks=new Y,Hs=new Y,Vs=new Ge,Go=new Ge,vg=new Ht,wl=new Y,Wo=new Y,Al=new Y,mm=new Ge,tf=new Ge,gm=new Ge;class O0 extends Nn{constructor(e=new _g){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new yi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new F0(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Wl(r,3,0,!1)),Bs.setAttribute("uv",new Wl(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new Ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),vg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const c=this.center;Cl(wl.set(-.5,-.5,0),Hs,c,ks,a,l),Cl(Wo.set(.5,-.5,0),Hs,c,ks,a,l),Cl(Al.set(.5,.5,0),Hs,c,ks,a,l),mm.set(0,0),tf.set(1,0),gm.set(1,1);let f=e.ray.intersectTriangle(wl,Wo,Al,!1,Vo);if(f===null&&(Cl(Wo.set(-.5,.5,0),Hs,c,ks,a,l),tf.set(0,1),f=e.ray.intersectTriangle(wl,Al,Wo,!1,Vo),f===null))return;const h=e.ray.origin.distanceTo(Vo);h<e.near||h>e.far||t.push({distance:h,point:Vo.clone(),uv:Zn.getInterpolation(Vo,wl,Wo,Al,mm,tf,gm,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(s,e,t,r,a,l){Vs.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Go.x=l*Vs.x-a*Vs.y,Go.y=a*Vs.x+l*Vs.y):Go.copy(Vs),s.copy(e),s.x+=Go.x,s.y+=Go.y,s.applyMatrix4(vg)}const nf=new Y,z0=new Y,B0=new dt;class zi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=nf.subVectors(r,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(nf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||B0.getNormalMatrix(e),a=this.coplanarPoint(nf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new cd,Rl=new Y;class xg{constructor(e=new zi,t=new zi,r=new zi,a=new zi,l=new zi,c=new zi){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],m=a[4],g=a[5],_=a[6],x=a[7],S=a[8],E=a[9],C=a[10],y=a[11],v=a[12],N=a[13],L=a[14],R=a[15];if(r[0].setComponents(h-l,x-m,y-S,R-v).normalize(),r[1].setComponents(h+l,x+m,y+S,R+v).normalize(),r[2].setComponents(h+c,x+g,y+E,R+N).normalize(),r[3].setComponents(h-c,x-g,y-E,R-N).normalize(),r[4].setComponents(h-f,x-_,y-C,R-L).normalize(),t===Hi)r[5].setComponents(h+f,x+_,y+C,R+L).normalize();else if(t===Vl)r[5].setComponents(f,_,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Rl.x=a.normal.x>0?e.max.x:e.min.x,Rl.y=a.normal.y>0?e.max.y:e.min.y,Rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k0 extends An{constructor(e,t,r,a,l,c,f,h,m){super(e,t,r,a,l,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yg extends An{constructor(e,t,r,a,l,c,f,h,m,g=qs){if(g!==qs&&g!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===qs&&(r=Zr),r===void 0&&g===eo&&(r=Qs),super(null,a,l,c,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),m=r[a]-c,m<0)f=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const g=r[a],x=r[a+1]-g,S=(c-g)/x;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Ge:new Y);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,a=[],l=[],c=[],f=new Y,h=new Ht;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new Y)}l[0]=new Y,c[0]=new Y;let m=Number.MAX_VALUE;const g=Math.abs(a[0].x),_=Math.abs(a[0].y),x=Math.abs(a[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(gt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,E))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),c[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sg extends Xi{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Ge){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=h-this.aX,S=m-this.aY;h=x*g-S*_+this.aX,m=x*_+S*g+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class H0 extends Sg{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function hd(){let s=0,e=0,t=0,r=0;function a(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,m){a(c,f,m*(f-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,m,g,_){let x=(c-l)/m-(f-l)/(m+g)+(f-c)/g,S=(f-c)/g-(h-c)/(g+_)+(h-f)/_;x*=g,S*=g,a(c,f,x,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Pl=new Y,rf=new hd,sf=new hd,of=new hd;class Mg extends Xi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,g;this.closed||f>0?m=a[(f-1)%l]:(Pl.subVectors(a[0],a[1]).add(a[0]),m=Pl);const _=a[f%l],x=a[(f+1)%l];if(this.closed||f+2<l?g=a[(f+2)%l]:(Pl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),C=Math.pow(_.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);C<1e-4&&(C=1),E<1e-4&&(E=C),y<1e-4&&(y=C),rf.initNonuniformCatmullRom(m.x,_.x,x.x,g.x,E,C,y),sf.initNonuniformCatmullRom(m.y,_.y,x.y,g.y,E,C,y),of.initNonuniformCatmullRom(m.z,_.z,x.z,g.z,E,C,y)}else this.curveType==="catmullrom"&&(rf.initCatmullRom(m.x,_.x,x.x,g.x,this.tension),sf.initCatmullRom(m.y,_.y,x.y,g.y,this.tension),of.initCatmullRom(m.z,_.z,x.z,g.z,this.tension));return r.set(rf.calc(h),sf.calc(h),of.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _m(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function V0(s,e){const t=1-s;return t*t*e}function G0(s,e){return 2*(1-s)*s*e}function W0(s,e){return s*s*e}function Yo(s,e,t,r){return V0(s,e)+G0(s,t)+W0(s,r)}function X0(s,e){const t=1-s;return t*t*t*e}function Y0(s,e){const t=1-s;return 3*t*t*s*e}function j0(s,e){return 3*(1-s)*s*s*e}function q0(s,e){return s*s*s*e}function jo(s,e,t,r,a){return X0(s,e)+Y0(s,t)+j0(s,r)+q0(s,a)}class $0 extends Xi{constructor(e=new Ge,t=new Ge,r=new Ge,a=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(jo(e,a.x,l.x,c.x,f.x),jo(e,a.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K0 extends Xi{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(jo(e,a.x,l.x,c.x,f.x),jo(e,a.y,l.y,c.y,f.y),jo(e,a.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Z0 extends Xi{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J0 extends Xi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q0 extends Xi{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,a.x,l.x,c.x),Yo(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eg extends Xi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,a.x,l.x,c.x),Yo(e,a.y,l.y,c.y),Yo(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ex extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],m=a[c],g=a[c>a.length-2?a.length-1:c+1],_=a[c>a.length-3?a.length-1:c+2];return r.set(_m(f,h.x,m.x,g.x,_.x),_m(f,h.y,m.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ge().fromArray(a))}return this}}var tx=Object.freeze({__proto__:null,ArcCurve:H0,CatmullRomCurve3:Mg,CubicBezierCurve:$0,CubicBezierCurve3:K0,EllipseCurve:Sg,LineCurve:Z0,LineCurve3:J0,QuadraticBezierCurve:Q0,QuadraticBezierCurve3:Eg,SplineCurve:ex});class ql extends yi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,_=e/f,x=t/h,S=[],E=[],C=[],y=[];for(let v=0;v<g;v++){const N=v*x-c;for(let L=0;L<m;L++){const R=L*_-l;E.push(R,-N,0),C.push(0,0,1),y.push(L/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<f;N++){const L=N+m*v,R=N+m*(v+1),X=N+1+m*(v+1),z=N+1+m*v;S.push(L,R,z),S.push(R,X,z)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class pd extends yi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let m=0;const g=[],_=new Y,x=new Y,S=[],E=[],C=[],y=[];for(let v=0;v<=r;v++){const N=[],L=v/r;let R=0;v===0&&c===0?R=.5/t:v===r&&h===Math.PI&&(R=-.5/t);for(let X=0;X<=t;X++){const z=X/t;_.x=-e*Math.cos(a+z*l)*Math.sin(c+L*f),_.y=e*Math.cos(c+L*f),_.z=e*Math.sin(a+z*l)*Math.sin(c+L*f),E.push(_.x,_.y,_.z),x.copy(_).normalize(),C.push(x.x,x.y,x.z),y.push(z+R,1-L),N.push(m++)}g.push(N)}for(let v=0;v<r;v++)for(let N=0;N<t;N++){const L=g[v][N+1],R=g[v][N],X=g[v+1][N],z=g[v+1][N+1];(v!==0||c>0)&&S.push(L,R,z),(v!==r-1||h<Math.PI)&&S.push(R,X,z)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class md extends yi{constructor(e=new Eg(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new Y,h=new Y,m=new Ge;let g=new Y;const _=[],x=[],S=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new Hn(_,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(S,2));function C(){for(let L=0;L<t;L++)y(L);y(l===!1?t:0),N(),v()}function y(L){g=e.getPointAt(L/t,g);const R=c.normals[L],X=c.binormals[L];for(let z=0;z<=a;z++){const F=z/a*Math.PI*2,I=Math.sin(F),P=-Math.cos(F);h.x=P*R.x+I*X.x,h.y=P*R.y+I*X.y,h.z=P*R.z+I*X.z,h.normalize(),x.push(h.x,h.y,h.z),f.x=g.x+r*h.x,f.y=g.y+r*h.y,f.z=g.z+r*h.z,_.push(f.x,f.y,f.z)}}function v(){for(let L=1;L<=t;L++)for(let R=1;R<=a;R++){const X=(a+1)*(L-1)+(R-1),z=(a+1)*L+(R-1),F=(a+1)*L+R,I=(a+1)*(L-1)+R;E.push(X,z,I),E.push(z,F,I)}}function N(){for(let L=0;L<=t;L++)for(let R=0;R<=a;R++)m.x=L/t,m.y=R/a,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new md(new tx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class nx extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bl extends mg{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rx extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const vm=new Ht;class sx{constructor(e,t,r=0,a=1/0){this.ray=new fd(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vm),this}intersectObject(e,t=!0,r=[]){return ed(e,this,r,t),r.sort(xm),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)ed(e[a],this,r,t);return r.sort(xm),r}}function xm(s,e){return s.distance-e.distance}function ed(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,f=l.length;c<f;c++)ed(l[c],e,t,!0)}}class ym{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Sm(s,e,t,r){const a=ox(r);switch(t){case eg:return s*e;case ng:return s*e;case ig:return s*e*2;case rg:return s*e/a.components*a.byteLength;case ad:return s*e/a.components*a.byteLength;case sg:return s*e*2/a.components*a.byteLength;case ld:return s*e*2/a.components*a.byteLength;case tg:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case ud:return s*e*4/a.components*a.byteLength;case Nl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(s,8)*Math.max(e,8)/2;case bf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case jf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case og:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ox(s){switch(s){case Gi:case Zm:return{byteLength:1,components:1};case qo:case Jm:case $o:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case Zr:case rd:case ki:return{byteLength:4,components:1};case Qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ax(s){const e=new WeakMap;function t(f,h){const m=f.array,g=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,m){const g=h.array,_=h.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],C=_[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,_[x]=C)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const C=_[S];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:c}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lx=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,oy=`struct PhysicalMaterial {
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
}`,ay=`
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`#include <common>
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
}`,pS=`#if DEPTH_PACKING == 3200
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
}`,mS=`#define DISTANCE
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
}`,gS=`#define DISTANCE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`uniform float scale;
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
}`,yS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#define LAMBERT
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
}`,TS=`#define LAMBERT
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
}`,wS=`#define MATCAP
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
}`,AS=`#define MATCAP
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
}`,CS=`#define NORMAL
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
}`,RS=`#define NORMAL
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
}`,PS=`#define PHONG
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
}`,bS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,DS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,NS=`#define TOON
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
}`,IS=`uniform float size;
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
}`,FS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,zS=`uniform vec3 color;
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
}`,BS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:lx,alphahash_pars_fragment:ux,alphamap_fragment:cx,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:hx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Sx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Ax,color_fragment:Cx,color_pars_fragment:Rx,color_pars_vertex:Px,color_vertex:bx,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ix,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:zx,colorspace_pars_fragment:Bx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ey,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:jx,fog_pars_fragment:qx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Kx,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ty,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:uy,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:hy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:_y,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphinstance_vertex:yy,morphcolor_vertex:Sy,morphnormal_vertex:My,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:wy,normal_fragment_maps:Ay,normal_pars_fragment:Cy,normal_pars_vertex:Ry,normal_vertex:Py,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Ny,opaque_fragment:Iy,packing:Fy,premultiplied_alpha_fragment:Oy,project_vertex:zy,dithering_fragment:By,dithering_pars_fragment:ky,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:jy,skinning_pars_vertex:qy,skinning_vertex:$y,skinnormal_vertex:Ky,specularmap_fragment:Zy,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,worldpos_vertex:oS,background_vert:aS,background_frag:lS,backgroundCube_vert:uS,backgroundCube_frag:cS,cube_vert:fS,cube_frag:dS,depth_vert:hS,depth_frag:pS,distanceRGBA_vert:mS,distanceRGBA_frag:gS,equirect_vert:_S,equirect_frag:vS,linedashed_vert:xS,linedashed_frag:yS,meshbasic_vert:SS,meshbasic_frag:MS,meshlambert_vert:ES,meshlambert_frag:TS,meshmatcap_vert:wS,meshmatcap_frag:AS,meshnormal_vert:CS,meshnormal_frag:RS,meshphong_vert:PS,meshphong_frag:bS,meshphysical_vert:LS,meshphysical_frag:DS,meshtoon_vert:US,meshtoon_frag:NS,points_vert:IS,points_frag:FS,shadow_vert:OS,shadow_frag:zS,sprite_vert:BS,sprite_frag:kS},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Tn([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Tn([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const bl={r:0,b:0,g:0},Wr=new Wi,HS=new Ht;function VS(s,e,t,r,a,l,c){const f=new Ct(0);let h=l===!0?0:1,m,g,_=null,x=0,S=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function C(L){let R=!1;const X=E(L);X===null?v(f,h):X&&X.isColor&&(v(X,1),R=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,R){const X=E(R);X&&(X.isCubeTexture||X.mapping===Yl)?(g===void 0&&(g=new li(new Jo(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:no(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(R.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(HS.makeRotationFromEuler(Wr)),g.material.toneMapped=At.getTransfer(X.colorSpace)!==bt,(_!==X||x!==X.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=X,x=X.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new li(new ql(2,2),new wr({name:"BackgroundMaterial",uniforms:no(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=At.getTransfer(X.colorSpace)!==bt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||x!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=X,x=X.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,R){L.getRGB(bl,pg(s)),r.buffers.color.setClear(bl.r,bl.g,bl.b,R,c)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,R=1){f.set(L),h=R,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(f,h)},render:C,addToRenderList:y,dispose:N}}function GS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(w,G,le,ee,de){let ge=!1;const oe=_(ee,le,G);l!==oe&&(l=oe,m(l.object)),ge=S(w,ee,le,de),ge&&E(w,ee,le,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,R(w,G,le,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function _(w,G,le){const ee=le.wireframe===!0;let de=r[w.id];de===void 0&&(de={},r[w.id]=de);let ge=de[G.id];ge===void 0&&(ge={},de[G.id]=ge);let oe=ge[ee];return oe===void 0&&(oe=x(h()),ge[ee]=oe),oe}function x(w){const G=[],le=[],ee=[];for(let de=0;de<t;de++)G[de]=0,le[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:ee,object:w,attributes:{},index:null}}function S(w,G,le,ee){const de=l.attributes,ge=G.attributes;let oe=0;const ce=le.getAttributes();for(const V in ce)if(ce[V].location>=0){const se=de[V];let U=ge[V];if(U===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ee}function E(w,G,le,ee){const de={},ge=G.attributes;let oe=0;const ce=le.getAttributes();for(const V in ce)if(ce[V].location>=0){let se=ge[V];se===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),de[V]=U,oe++}l.attributes=de,l.attributesNum=oe,l.index=ee}function C(){const w=l.newAttributes;for(let G=0,le=w.length;G<le;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const le=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;le[w]=1,ee[w]===0&&(s.enableVertexAttribArray(w),ee[w]=1),de[w]!==G&&(s.vertexAttribDivisor(w,G),de[w]=G)}function N(){const w=l.newAttributes,G=l.enabledAttributes;for(let le=0,ee=G.length;le<ee;le++)G[le]!==w[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function L(w,G,le,ee,de,ge,oe){oe===!0?s.vertexAttribIPointer(w,G,le,de,ge):s.vertexAttribPointer(w,G,le,ee,de,ge)}function R(w,G,le,ee){C();const de=ee.attributes,ge=le.getAttributes(),oe=G.defaultAttributeValues;for(const ce in ge){const V=ge[ce];if(V.location>=0){let ae=de[ce];if(ae===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor)),ae!==void 0){const se=ae.normalized,U=ae.itemSize,re=e.get(ae);if(re===void 0)continue;const Ne=re.buffer,Q=re.type,me=re.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||ae.gpuType===rd;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Re=ye.stride,Ze=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)v(V.location+Ye,ye.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)y(V.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ye=0;Ye<V.locationSize;Ye++)L(V.location+Ye,U/V.locationSize,Q,se,Re*me,(Ze+U/V.locationSize*Ye)*me,Me)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)v(V.location+ye,ae.meshPerAttribute);w.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ye=0;ye<V.locationSize;ye++)L(V.location+ye,U/V.locationSize,Q,se,U*me,U/V.locationSize*ye*me,Me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(V.location,se);break;case 3:s.vertexAttrib3fv(V.location,se);break;case 4:s.vertexAttrib4fv(V.location,se);break;default:s.vertexAttrib1fv(V.location,se)}}}}N()}function X(){I();for(const w in r){const G=r[w];for(const le in G){const ee=G[le];for(const de in ee)g(ee[de].object),delete ee[de];delete G[le]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const le in G){const ee=G[le];for(const de in ee)g(ee[de].object),delete ee[de];delete G[le]}delete r[w.id]}function F(w){for(const G in r){const le=r[G];if(le[w.id]===void 0)continue;const ee=le[w.id];for(const de in ee)g(ee[de].object),delete ee[de];delete le[w.id]}}function I(){P(),c=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:P,dispose:X,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function WS(s,e,t){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),t.update(g,r,1)}function c(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),t.update(g,r,_))}function f(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];t.update(S,r,1)}function h(m,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)c(m[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let E=0;for(let C=0;C<_;C++)E+=g[C]*x[C];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function XS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const I=F===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!I)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:X,maxSamples:z}}function YS(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new zi,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!a||E===null||E.length===0||l&&!y)l?g(null):m();else{const N=l?0:r,L=N*4;let R=v.clippingState||null;h.value=R,R=g(E,x,L,S);for(let X=0;X!==L;++X)R[X]=t[X];v.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,E){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=h.value,E!==!0||y===null){const v=S+C*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,R=S;L!==C;++L,R+=4)c.copy(_[L]).applyMatrix4(N,f),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function jS(s){let e=new WeakMap;function t(c,f){return f===Mf?c.mapping=Zs:f===Ef&&(c.mapping=Js),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Mf||f===Ef)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new U0(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),t(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ys=4,Mm=[.125,.215,.35,.446,.526,.582],qr=20,af=new Bl,Em=new Ct;let lf=null,uf=0,cf=0,ff=!1;const Yr=(1+Math.sqrt(5))/2,Gs=1/Yr,Tm=[new Y(-Yr,Gs,0),new Y(Yr,Gs,0),new Y(-Gs,0,Yr),new Y(Gs,0,Yr),new Y(0,Yr,-Gs),new Y(0,Yr,Gs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),this._renderer.xr.enabled=ff,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:$o,format:ai,colorSpace:to,depthBuffer:!1},a=Am(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qS(l)),this._blurMaterial=$S(l,e,t)}return a}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,af)}_sceneToCubeUV(e,t,r,a){const f=new wn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(Em),g.toneMapping=Mr,g.autoClear=!1;const S=new jl({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new li(new Jo,S);let C=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,C=!0):(S.color.copy(Em),C=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(f.up.set(0,h[v],0),f.lookAt(m[v],0,0)):N===1?(f.up.set(0,0,h[v]),f.lookAt(0,m[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,m[v]));const L=this._cubeSize;Ll(a,N*L,v>2?L:0,L,L),g.setRenderTarget(a),C&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Zs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new li(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,af)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tm[(a-l-1)%Tm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new li(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),C=l/E,y=isFinite(l)?1+Math.floor(g*C):qr;y>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const v=[];let N=0;for(let F=0;F<qr;++F){const I=F/C,P=Math.exp(-I*I/2);v.push(P),F===0?N+=P:F<y&&(N+=2*P)}for(let F=0;F<v.length;F++)v[F]=v[F]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const R=this._sizeLods[a],X=3*R*(a>L-Ys?a-L+Ys:0),z=4*(this._cubeSize-R);Ll(t,X,z,3*R,2*R),h.setRenderTarget(t),h.render(_,af)}}function qS(s){const e=[],t=[],r=[];let a=s;const l=s-Ys+1+Mm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Ys?h=Mm[c-s+Ys-1]:c===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,C=3,y=2,v=1,N=new Float32Array(C*E*S),L=new Float32Array(y*E*S),R=new Float32Array(v*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,I=z>2?0:-1,P=[F,I,0,F+2/3,I,0,F+2/3,I+1,0,F,I,0,F+2/3,I+1,0,F,I+1,0];N.set(P,C*E*z),L.set(x,y*E*z);const w=[z,z,z,z,z,z];R.set(w,v*E*z)}const X=new yi;X.setAttribute("position",new ci(N,C)),X.setAttribute("uv",new ci(L,y)),X.setAttribute("faceIndex",new ci(R,v)),e.push(X),a>Ys&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Am(s,e,t){const r=new Jr(s,e,t);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function $S(s,e,t){const r=new Float32Array(qr),a=new Y(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Cm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

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
	`}function KS(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Mf||h===Ef,g=h===Zs||h===Js;if(m||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new wm(s)),_=m?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new wm(s)),_=m?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function ZS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function JS(s,e,t,r){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(_){const x=[],S=_.index,E=_.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let L=0,R=N.length;L<R;L+=3){const X=N[L+0],z=N[L+1],F=N[L+2];x.push(X,z,z,F,F,X)}}else if(E!==void 0){const N=E.array;C=E.version;for(let L=0,R=N.length/3-1;L<R;L+=3){const X=L+0,z=L+1,F=L+2;x.push(X,z,z,F,F,X)}}else return;const y=new(lg(x)?hg:dg)(x,1);y.version=C;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function QS(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*c,E),t.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,r,1)}function _(x,S,E,C){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/c,S[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,C,0,E);let v=0;for(let N=0;N<E;N++)v+=S[N]*C[N];t.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function eM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function tM(s,e,t){const r=new WeakMap,a=new Yt;function l(c,f,h){const m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let w=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let X=f.attributes.position.count*R,z=1;X>e.maxTextureSize&&(z=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const F=new Float32Array(X*z*4*_),I=new cg(F,X,z,_);I.type=ki,I.needsUpdate=!0;const P=R*4;for(let G=0;G<_;G++){const le=v[G],ee=N[G],de=L[G],ge=X*z*4*G;for(let oe=0;oe<le.count;oe++){const ce=oe*P;E===!0&&(a.fromBufferAttribute(le,oe),F[ge+ce+0]=a.x,F[ge+ce+1]=a.y,F[ge+ce+2]=a.z,F[ge+ce+3]=0),C===!0&&(a.fromBufferAttribute(ee,oe),F[ge+ce+4]=a.x,F[ge+ce+5]=a.y,F[ge+ce+6]=a.z,F[ge+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),F[ge+ce+8]=a.x,F[ge+ce+9]=a.y,F[ge+ce+10]=a.z,F[ge+ce+11]=de.itemSize===4?a.w:1)}}x={count:_,texture:I,size:new Ge(X,z)},r.set(f,x),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const C=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function nM(s,e,t,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function c(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const wg=new An,Pm=new yg(1,1),Ag=new cg,Cg=new g0,Rg=new gg,bm=[],Lm=[],Dm=new Float32Array(16),Um=new Float32Array(9),Nm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=bm[a];if(l===void 0&&(l=new Float32Array(a),bm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function $l(s,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function iM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function aM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),en(t,r)}}function lM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),en(t,r)}}function uM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),en(t,r)}}function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function pM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function vM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Pm.compareFunction=ag,l=Pm):l=wg,t.setTexture2D(e||l,a)}function xM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Cg,a)}function yM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Rg,a)}function SM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Ag,a)}function MM(s){switch(s){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return uM;case 5124:case 35670:return cM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return SM}}function EM(s,e){s.uniform1fv(this.addr,e)}function TM(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function wM(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function AM(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function CM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function RM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function PM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bM(s,e){s.uniform1iv(this.addr,e)}function LM(s,e){s.uniform2iv(this.addr,e)}function DM(s,e){s.uniform3iv(this.addr,e)}function UM(s,e){s.uniform4iv(this.addr,e)}function NM(s,e){s.uniform1uiv(this.addr,e)}function IM(s,e){s.uniform2uiv(this.addr,e)}function FM(s,e){s.uniform3uiv(this.addr,e)}function OM(s,e){s.uniform4uiv(this.addr,e)}function zM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||wg,l[c])}function BM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Cg,l[c])}function kM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Rg,l[c])}function HM(s,e,t){const r=this.cache,a=e.length,l=$l(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Ag,l[c])}function VM(s){switch(s){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return bM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return UM;case 5125:return NM;case 36294:return IM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return HM}}class GM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=MM(t.type)}}class WM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function YM(s,e,t){const r=s.name,a=r.length;for(df.lastIndex=0;;){const l=df.exec(r),c=df.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===a){Im(t,m===void 0?new GM(f,s,e):new WM(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new XM(f),Im(t,_)),t=_}}}class kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);YM(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Fm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const jM=37297;let qM=0;function $M(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Om=new dt;function KM(s){At._getMatrix(Om,At.workingColorSpace,s);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+$M(s.getShaderSource(e),c)}else return a}function ZM(s,e){const t=KM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function JM(s,e){let t;switch(e){case Hv:t="Linear";break;case Vv:t="Reinhard";break;case Gv:t="Cineon";break;case Wv:t="ACESFilmic";break;case Yv:t="AgX";break;case jv:t="Neutral";break;case Xv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new Y;function QM(){At.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function tE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Xo(s){return s!==""}function Bm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(iE,sE)}const rE=new Map;function sE(s,e){let t=ht[e];if(t===void 0){const r=rE.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(t)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(oE,aE)}function aE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Vm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function lE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function uE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function fE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case Bv:e="ENVMAP_BLENDING_MIX";break;case kv:e="ENVMAP_BLENDING_ADD";break}return e}function dE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function hE(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=lE(t),m=uE(t),g=cE(t),_=fE(t),x=dE(t),S=eE(t),E=tE(l),C=a.createProgram();let y,v,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Xo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Xo).join(`
`),v.length>0&&(v+=`
`)):(y=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),v=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Mr?JM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),c=td(c),c=Bm(c,t),c=km(c,t),f=td(f),f=Bm(f,t),f=km(f,t),c=Hm(c),f=Hm(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+y+c,R=N+v+f,X=Fm(a,a.VERTEX_SHADER,L),z=Fm(a,a.FRAGMENT_SHADER,R);a.attachShader(C,X),a.attachShader(C,z),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(G){if(s.debug.checkShaderErrors){const le=a.getProgramInfoLog(C).trim(),ee=a.getShaderInfoLog(X).trim(),de=a.getShaderInfoLog(z).trim();let ge=!0,oe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,X,z);else{const ce=zm(a,X,"vertex"),V=zm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+ce+`
`+V)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ee===""||de==="")&&(oe=!1);oe&&(G.diagnostics={runnable:ge,programLog:le,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:v}})}a.deleteShader(X),a.deleteShader(z),I=new kl(a,C),P=nE(a,C)}let I;this.getUniforms=function(){return I===void 0&&F(this),I};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(C,jM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=z,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function _E(s,e,t,r,a,l,c){const f=new dd,h=new mE,m=new Set,g=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,w,G,le,ee){const de=le.fog,ge=ee.geometry,oe=P.isMeshStandardMaterial?le.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),V=ce&&ce.mapping===Yl?ce.image.height:null,ae=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,U=se!==void 0?se.length:0;let re=0;ge.morphAttributes.position!==void 0&&(re=1),ge.morphAttributes.normal!==void 0&&(re=2),ge.morphAttributes.color!==void 0&&(re=3);let Ne,Q,me,Me;if(ae){const mt=_i[ae];Ne=mt.vertexShader,Q=mt.fragmentShader}else Ne=P.vertexShader,Q=P.fragmentShader,h.update(P),me=h.getVertexShaderID(P),Me=h.getFragmentShaderID(P);const ye=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ze=ee.isInstancedMesh===!0,Ye=ee.isBatchedMesh===!0,Pt=!!P.map,Rt=!!P.matcap,lt=!!ce,B=!!P.aoMap,ln=!!P.lightMap,pt=!!P.bumpMap,ct=!!P.normalMap,Ke=!!P.displacementMap,Tt=!!P.emissiveMap,je=!!P.metalnessMap,b=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,_e=P.iridescence>0,he=P.sheen>0,We=P.transmission>0,Ce=T&&!!P.anisotropyMap,Oe=Z&&!!P.clearcoatMap,ft=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,Be=_e&&!!P.iridescenceMap,Qe=_e&&!!P.iridescenceThicknessMap,rt=he&&!!P.sheenColorMap,ze=he&&!!P.sheenRoughnessMap,H=!!P.specularMap,ue=!!P.specularColorMap,Pe=!!P.specularIntensityMap,O=We&&!!P.transmissionMap,Te=We&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,Ue=P.alphaTest>0,be=!!P.alphaHash,et=!!P.extensions;let xt=Mr;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=s.toneMapping);const Nt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Q,defines:P.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&ee._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&ee.instanceColor!==null,instancingMorph:Ze&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:to,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Rt,envMap:lt,envMapMode:lt&&ce.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:ln,bumpMap:pt,normalMap:ct,displacementMap:x&&Ke,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===Jv,normalMapTangentSpace:ct&&P.normalMapType===Zv,metalnessMap:je,roughnessMap:b,anisotropy:T,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:H,specularColorMap:ue,specularIntensityMap:Pe,transmission:We,transmissionMap:O,thicknessMap:Te,gradientMap:ie,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:be,combine:P.combine,mapUv:Pt&&C(P.map.channel),aoMapUv:B&&C(P.aoMap.channel),lightMapUv:ln&&C(P.lightMap.channel),bumpMapUv:pt&&C(P.bumpMap.channel),normalMapUv:ct&&C(P.normalMap.channel),displacementMapUv:Ke&&C(P.displacementMap.channel),emissiveMapUv:Tt&&C(P.emissiveMap.channel),metalnessMapUv:je&&C(P.metalnessMap.channel),roughnessMapUv:b&&C(P.roughnessMap.channel),anisotropyMapUv:Ce&&C(P.anisotropyMap.channel),clearcoatMapUv:Oe&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(P.sheenRoughnessMap.channel),specularMapUv:H&&C(P.specularMap.channel),specularColorMapUv:ue&&C(P.specularColorMap.channel),specularIntensityMapUv:Pe&&C(P.specularIntensityMap.channel),transmissionMapUv:O&&C(P.transmissionMap.channel),thicknessMapUv:Te&&C(P.thicknessMap.channel),alphaMapUv:fe&&C(P.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ct||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ge.attributes.uv&&(Pt||fe),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Re,skinning:ee.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Bi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:et&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Nt.vertexUv1s=m.has(1),Nt.vertexUv2s=m.has(2),Nt.vertexUv3s=m.has(3),m.clear(),Nt}function v(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)w.push(G),w.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(N(w,P),L(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function N(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const w=E[P.type];let G;if(w){const le=_i[w];G=P0.clone(le.uniforms)}else G=P.uniforms;return G}function X(P,w){let G;for(let le=0,ee=g.length;le<ee;le++){const de=g[le];if(de.cacheKey===w){G=de,++G.usedTimes;break}}return G===void 0&&(G=new hE(s,w,P,l),g.push(G)),G}function z(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function F(P){h.remove(P)}function I(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:X,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:I}}function vE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function xE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_,x,S,E,C,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:C,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=C,v.group=y),e++,v}function f(_,x,S,E,C,y){const v=c(_,x,S,E,C,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(_,x,S,E,C,y){const v=c(_,x,S,E,C,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function m(_,x){t.length>1&&t.sort(_||xE),r.length>1&&r.sort(x||Gm),a.length>1&&a.sort(x||Gm)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:m}}function yE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Wm,s.set(r,[c])):a>=l.length?(c=new Wm,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let EE=0;function TE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wE(s){const e=new SE,t=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,l=new Ht,c=new Ht;function f(m){let g=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,C=0,y=0,v=0,N=0,L=0,R=0,X=0,z=0,F=0;m.sort(TE);for(let P=0,w=m.length;P<w;P++){const G=m[P],le=G.color,ee=G.intensity,de=G.distance,ge=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*ee,_+=le.g*ee,x+=le.b*ee;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(G.sh.coefficients[oe],ee);F++}else if(G.isDirectionalLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ce=G.shadow,V=t.get(G);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=ge,r.directionalShadowMatrix[S]=G.shadow.matrix,N++}r.directional[S]=oe,S++}else if(G.isSpotLight){const oe=e.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(le).multiplyScalar(ee),oe.distance=de,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,r.spot[C]=oe;const ce=G.shadow;if(G.map&&(r.spotLightMap[X]=G.map,X++,ce.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[C]=ce.matrix,G.castShadow){const V=t.get(G);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[C]=V,r.spotShadowMap[C]=ge,R++}C++}else if(G.isRectAreaLight){const oe=e.get(G);oe.color.copy(le).multiplyScalar(ee),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=oe,y++}else if(G.isPointLight){const oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){const ce=G.shadow,V=t.get(G);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=ge,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=oe,E++}else if(G.isHemisphereLight){const oe=e.get(G);oe.skyColor.copy(G.color).multiplyScalar(ee),oe.groundColor.copy(G.groundColor).multiplyScalar(ee),r.hemi[v]=oe,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==S||I.pointLength!==E||I.spotLength!==C||I.rectAreaLength!==y||I.hemiLength!==v||I.numDirectionalShadows!==N||I.numPointShadows!==L||I.numSpotShadows!==R||I.numSpotMaps!==X||I.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+X-z,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,I.directionalLength=S,I.pointLength=E,I.spotLength=C,I.rectAreaLength=y,I.hemiLength=v,I.numDirectionalShadows=N,I.numPointShadows=L,I.numSpotShadows=R,I.numSpotMaps=X,I.numLightProbes=F,r.version=EE++)}function h(m,g){let _=0,x=0,S=0,E=0,C=0;const y=g.matrixWorldInverse;for(let v=0,N=m.length;v<N;v++){const L=m[v];if(L.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),_++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:f,setupView:h,state:r}}function Xm(s){const e=new wE(s),t=[],r=[];function a(g){m.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function AE(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Xm(s),e.set(a,[f])):l>=c.length?(f=new Xm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
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
}`;function PE(s,e,t){let r=new xg;const a=new Ge,l=new Ge,c=new Yt,f=new nx({depthPacking:Kv}),h=new ix,m={},g=t.maxTextureSize,_={[Tr]:Un,[Un]:Tr,[Bi]:Bi},x=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new yi;E.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new li(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let v=this.type;this.render=function(z,F,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Sr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=v!==Oi&&this.type===Oi,de=v===Oi&&this.type!==Oi;for(let ge=0,oe=z.length;ge<oe;ge++){const ce=z[ge],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ae=V.getFrameExtents();if(a.multiply(ae),l.copy(V.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,V.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,V.mapSize.y=l.y)),V.map===null||ee===!0||de===!0){const U=this.type!==Oi?{minFilter:ui,magFilter:ui}:{};V.map!==null&&V.map.dispose(),V.map=new Jr(a.x,a.y,U),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const se=V.getViewportCount();for(let U=0;U<se;U++){const re=V.getViewport(U);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),le.viewport(c),V.updateMatrices(ce,U),r=V.getFrustum(),R(F,I,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&N(V,I),V.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,G)};function N(z,F){const I=e.update(C);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,I,x,C,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,I,S,C,null)}function L(z,F,I,P){let w=null;const G=I.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)w=G;else if(w=I.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=w.uuid,ee=F.uuid;let de=m[le];de===void 0&&(de={},m[le]=de);let ge=de[ee];ge===void 0&&(ge=w.clone(),de[ee]=ge,F.addEventListener("dispose",X)),w=ge}if(w.visible=F.visible,w.wireframe=F.wireframe,P===Oi?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const le=s.properties.get(w);le.light=I}return w}function R(z,F,I,P,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===Oi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),de=z.material;if(Array.isArray(de)){const ge=ee.groups;for(let oe=0,ce=ge.length;oe<ce;oe++){const V=ge[oe],ae=de[V.materialIndex];if(ae&&ae.visible){const se=L(z,ae,P,w);z.onBeforeShadow(s,z,F,I,ee,se,V),s.renderBufferDirect(I,null,ee,se,z,V),z.onAfterShadow(s,z,F,I,ee,se,V)}}}else if(de.visible){const ge=L(z,de,P,w);z.onBeforeShadow(s,z,F,I,ee,ge,null),s.renderBufferDirect(I,null,ee,ge,z,null),z.onAfterShadow(s,z,F,I,ee,ge,null)}}const le=z.children;for(let ee=0,de=le.length;ee<de;ee++)R(le[ee],F,I,P,w)}function X(z){z.target.removeEventListener("dispose",X);for(const I in m){const P=m[I],w=z.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const bE={[mf]:gf,[_f]:yf,[vf]:Sf,[Ks]:xf,[gf]:mf,[yf]:_f,[Sf]:vf,[xf]:Ks};function LE(s,e){function t(){let O=!1;const Te=new Yt;let ie=null;const fe=new Yt(0,0,0,0);return{setMask:function(Ue){ie!==Ue&&!O&&(s.colorMask(Ue,Ue,Ue,Ue),ie=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,be,et,xt,Nt){Nt===!0&&(Ue*=xt,be*=xt,et*=xt),Te.set(Ue,be,et,xt),fe.equals(Te)===!1&&(s.clearColor(Ue,be,et,xt),fe.copy(Te))},reset:function(){O=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let O=!1,Te=!1,ie=null,fe=null,Ue=null;return{setReversed:function(be){if(Te!==be){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ue;Ue=null,this.setClear(xt)}Te=be},getReversed:function(){return Te},setTest:function(be){be?ye(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(be){ie!==be&&!O&&(s.depthMask(be),ie=be)},setFunc:function(be){if(Te&&(be=bE[be]),fe!==be){switch(be){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case vf:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=be}},setLocked:function(be){O=be},setClear:function(be){Ue!==be&&(Te&&(be=1-be),s.clearDepth(be),Ue=be)},reset:function(){O=!1,ie=null,fe=null,Ue=null,Te=!1}}}function a(){let O=!1,Te=null,ie=null,fe=null,Ue=null,be=null,et=null,xt=null,Nt=null;return{setTest:function(mt){O||(mt?ye(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!O&&(s.stencilMask(mt),Te=mt)},setFunc:function(mt,jt,qt){(ie!==mt||fe!==jt||Ue!==qt)&&(s.stencilFunc(mt,jt,qt),ie=mt,fe=jt,Ue=qt)},setOp:function(mt,jt,qt){(be!==mt||et!==jt||xt!==qt)&&(s.stencilOp(mt,jt,qt),be=mt,et=jt,xt=qt)},setLocked:function(mt){O=mt},setClear:function(mt){Nt!==mt&&(s.clearStencil(mt),Nt=mt)},reset:function(){O=!1,Te=null,ie=null,fe=null,Ue=null,be=null,et=null,xt=null,Nt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,C=!1,y=null,v=null,N=null,L=null,R=null,X=null,z=null,F=new Ct(0,0,0),I=0,P=!1,w=null,G=null,le=null,ee=null,de=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=ce>=2);let ae=null,se={};const U=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ne=new Yt().fromArray(U),Q=new Yt().fromArray(re);function me(O,Te,ie,fe){const Ue=new Uint8Array(4),be=s.createTexture();s.bindTexture(O,be),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ie;et++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return be}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Ks),pt(!1),ct(xv),ye(s.CULL_FACE),B(Sr);function ye(O){g[O]!==!0&&(s.enable(O),g[O]=!0)}function Re(O){g[O]!==!1&&(s.disable(O),g[O]=!1)}function Ze(O,Te){return _[O]!==Te?(s.bindFramebuffer(O,Te),_[O]=Te,O===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),O===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ye(O,Te){let ie=S,fe=!1;if(O){ie=x.get(Te),ie===void 0&&(ie=[],x.set(Te,ie));const Ue=O.textures;if(ie.length!==Ue.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let be=0,et=Ue.length;be<et;be++)ie[be]=s.COLOR_ATTACHMENT0+be;ie.length=Ue.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function Pt(O){return E!==O?(s.useProgram(O),E=O,!0):!1}const Rt={[jr]:s.FUNC_ADD,[Mv]:s.FUNC_SUBTRACT,[Ev]:s.FUNC_REVERSE_SUBTRACT};Rt[Tv]=s.MIN,Rt[wv]=s.MAX;const lt={[Av]:s.ZERO,[Cv]:s.ONE,[Rv]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[Nv]:s.SRC_ALPHA_SATURATE,[Dv]:s.DST_COLOR,[bv]:s.DST_ALPHA,[Pv]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Lv]:s.ONE_MINUS_DST_ALPHA,[Iv]:s.CONSTANT_COLOR,[Fv]:s.ONE_MINUS_CONSTANT_COLOR,[Ov]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(O,Te,ie,fe,Ue,be,et,xt,Nt,mt){if(O===Sr){C===!0&&(Re(s.BLEND),C=!1);return}if(C===!1&&(ye(s.BLEND),C=!0),O!==Sv){if(O!==y||mt!==P){if((v!==jr||R!==jr)&&(s.blendEquation(s.FUNC_ADD),v=jr,R=jr),mt)switch(O){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}N=null,L=null,X=null,z=null,F.set(0,0,0),I=0,y=O,P=mt}return}Ue=Ue||Te,be=be||ie,et=et||fe,(Te!==v||Ue!==R)&&(s.blendEquationSeparate(Rt[Te],Rt[Ue]),v=Te,R=Ue),(ie!==N||fe!==L||be!==X||et!==z)&&(s.blendFuncSeparate(lt[ie],lt[fe],lt[be],lt[et]),N=ie,L=fe,X=be,z=et),(xt.equals(F)===!1||Nt!==I)&&(s.blendColor(xt.r,xt.g,xt.b,Nt),F.copy(xt),I=Nt),y=O,P=!1}function ln(O,Te){O.side===Bi?Re(s.CULL_FACE):ye(s.CULL_FACE);let ie=O.side===Un;Te&&(ie=!ie),pt(ie),O.blending===js&&O.transparent===!1?B(Sr):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),l.setMask(O.colorWrite);const fe=O.stencilWrite;f.setTest(fe),fe&&(f.setMask(O.stencilWriteMask),f.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),f.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){w!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),w=O)}function ct(O){ye(s.CULL_FACE),O!==G&&s.cullFace(s.BACK),G=O}function Ke(O){O!==le&&(oe&&s.lineWidth(O),le=O)}function Tt(O,Te,ie){O?(ye(s.POLYGON_OFFSET_FILL),(ee!==Te||de!==ie)&&(s.polygonOffset(Te,ie),ee=Te,de=ie)):Re(s.POLYGON_OFFSET_FILL)}function je(O){O?ye(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function b(O){O===void 0&&(O=s.TEXTURE0+ge-1),ae!==O&&(s.activeTexture(O),ae=O)}function T(O,Te,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+ge-1:ie=ae);let fe=se[ie];fe===void 0&&(fe={type:void 0,texture:void 0},se[ie]=fe),(fe.type!==O||fe.texture!==Te)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(O,Te||Me[O]),fe.type=O,fe.texture=Te)}function Z(){const O=se[ae];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){Ne.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ne.copy(O))}function ze(O){Q.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function H(O,Te){let ie=m.get(Te);ie===void 0&&(ie=new WeakMap,m.set(Te,ie));let fe=ie.get(O);fe===void 0&&(fe=s.getUniformBlockIndex(Te,O.name),ie.set(O,fe))}function ue(O,Te){const fe=m.get(Te).get(O);h.get(Te)!==fe&&(s.uniformBlockBinding(Te,fe,O.__bindingPointIndex),h.set(Te,fe))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ae=null,se={},_={},x=new WeakMap,S=[],E=null,C=!1,y=null,v=null,N=null,L=null,R=null,X=null,z=null,F=new Ct(0,0,0),I=0,P=!1,w=null,G=null,le=null,ee=null,de=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Re,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:Pt,setBlending:B,setMaterial:ln,setFlipSided:pt,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:je,activeTexture:b,bindTexture:T,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:Be,texImage3D:Qe,updateUBOMapping:H,uniformBlockBinding:ue,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:rt,viewport:ze,reset:Pe}}function DE(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ge,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,T){return S?new OffscreenCanvas(b,T):Gl("canvas")}function C(b,T,Z){let pe=1;const _e=je(b);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const he=Math.floor(pe*_e.width),We=Math.floor(pe*_e.height);_===void 0&&(_=E(he,We));const Ce=T?E(he,We):_;return Ce.width=he,Ce.height=We,Ce.getContext("2d").drawImage(b,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+We+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function v(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,T,Z,pe,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=T;if(T===s.RED&&(Z===s.FLOAT&&(he=s.R32F),Z===s.HALF_FLOAT&&(he=s.R16F),Z===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.R8UI),Z===s.UNSIGNED_SHORT&&(he=s.R16UI),Z===s.UNSIGNED_INT&&(he=s.R32UI),Z===s.BYTE&&(he=s.R8I),Z===s.SHORT&&(he=s.R16I),Z===s.INT&&(he=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(he=s.RG32F),Z===s.HALF_FLOAT&&(he=s.RG16F),Z===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RG8UI),Z===s.UNSIGNED_SHORT&&(he=s.RG16UI),Z===s.UNSIGNED_INT&&(he=s.RG32UI),Z===s.BYTE&&(he=s.RG8I),Z===s.SHORT&&(he=s.RG16I),Z===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Z===s.UNSIGNED_INT&&(he=s.RGB32UI),Z===s.BYTE&&(he=s.RGB8I),Z===s.SHORT&&(he=s.RGB16I),Z===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Z===s.UNSIGNED_INT&&(he=s.RGBA32UI),Z===s.BYTE&&(he=s.RGBA8I),Z===s.SHORT&&(he=s.RGBA16I),Z===s.INT&&(he=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const We=_e?Hl:At.getTransfer(pe);Z===s.FLOAT&&(he=s.RGBA32F),Z===s.HALF_FLOAT&&(he=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(he=We===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(b,T){let Z;return b?T===null||T===Zr||T===Qs?Z=s.DEPTH24_STENCIL8:T===ki?Z=s.DEPTH32F_STENCIL8:T===qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zr||T===Qs?Z=s.DEPTH_COMPONENT24:T===ki?Z=s.DEPTH_COMPONENT32F:T===qo&&(Z=s.DEPTH_COMPONENT16),Z}function X(b,T){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ui&&b.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function z(b){const T=b.target;T.removeEventListener("dispose",z),I(T),T.isVideoTexture&&g.delete(T)}function F(b){const T=b.target;T.removeEventListener("dispose",F),w(T)}function I(b){const T=r.get(b);if(T.__webglInit===void 0)return;const Z=b.source,pe=x.get(Z);if(pe){const _e=pe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete(Z)}r.remove(b)}function P(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const Z=b.source,pe=x.get(Z);delete pe[T.__cacheKey],c.memory.textures--}function w(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let _e=0;_e<T.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=b.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const he=r.get(Z[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(Z[pe])}r.remove(b)}let G=0;function le(){G=0}function ee(){const b=G;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),G+=1,b}function de(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function ge(b,T){const Z=r.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,b,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function oe(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ce(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function V(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){me(Z,b,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const ae={[Tf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[wf]:s.MIRRORED_REPEAT},se={[ui]:s.NEAREST,[qv]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Dc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[Qv]:s.NEVER,[s0]:s.ALWAYS,[e0]:s.LESS,[ag]:s.LEQUAL,[t0]:s.EQUAL,[r0]:s.GEQUAL,[n0]:s.GREATER,[i0]:s.NOTEQUAL};function re(b,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===Dc||T.magFilter===al||T.magFilter===Kr||T.minFilter===xi||T.minFilter===Dc||T.minFilter===al||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==al&&T.minFilter!==Kr||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(b,T){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",z));const pe=T.source;let _e=x.get(pe);_e===void 0&&(_e={},x.set(pe,_e));const he=de(T);if(he!==b.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),_e[he].usedTimes++;const We=_e[b.__cacheKey];We!==void 0&&(_e[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(T)),b.__cacheKey=he,b.__webglTexture=_e[he].texture}return Z}function Q(b,T,Z){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=Ne(b,T),he=T.source;t.bindTexture(pe,b.__webglTexture,s.TEXTURE0+Z);const We=r.get(he);if(he.version!==We.__version||_e===!0){t.activeTexture(s.TEXTURE0+Z);const Ce=At.getPrimaries(At.workingColorSpace),Oe=T.colorSpace===yr?null:At.getPrimaries(T.colorSpace),ft=T.colorSpace===yr||Ce===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=C(T.image,!1,a.maxTextureSize);Ee=Tt(T,Ee);const Be=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let rt=L(T.internalFormat,Be,Qe,T.colorSpace,T.isVideoTexture);re(pe,T);let ze;const H=T.mipmaps,ue=T.isVideoTexture!==!0,Pe=We.__version===void 0||_e===!0,O=he.dataReady,Te=X(T,Ee);if(T.isDepthTexture)rt=R(T.format===eo,T.type),Pe&&(ue?t.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,null));else if(T.isDataTexture)if(H.length>0){ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,H[0].width,H[0].height);for(let ie=0,fe=H.length;ie<fe;ie++)ze=H[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,Be,Qe,ze.data);T.generateMipmaps=!1}else ue?(Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ue&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,H[0].width,H[0].height,Ee.depth);for(let ie=0,fe=H.length;ie<fe;ie++)if(ze=H[ie],T.format!==ai)if(Be!==null)if(ue){if(O)if(T.layerUpdates.size>0){const Ue=Sm(ze.width,ze.height,T.format,T.type);for(const be of T.layerUpdates){const et=ze.data.subarray(be*Ue/ze.data.BYTES_PER_ELEMENT,(be+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,be,ze.width,ze.height,1,Be,et)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,Be,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,Be,Qe,ze.data)}else{ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,H[0].width,H[0].height);for(let ie=0,fe=H.length;ie<fe;ie++)ze=H[ie],T.format!==ai?Be!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,Be,Qe,ze.data)}else if(T.isDataArrayTexture)if(ue){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),O)if(T.layerUpdates.size>0){const ie=Sm(Ee.width,Ee.height,T.format,T.type);for(const fe of T.layerUpdates){const Ue=Ee.data.subarray(fe*ie/Ee.data.BYTES_PER_ELEMENT,(fe+1)*ie/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,Be,Qe,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(T.isData3DTexture)ue?(Pe&&t.texStorage3D(s.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(T.isFramebufferTexture){if(Pe)if(ue)t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let ie=Ee.width,fe=Ee.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,rt,ie,fe,0,Be,Qe,null),ie>>=1,fe>>=1}}else if(H.length>0){if(ue&&Pe){const ie=je(H[0]);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}for(let ie=0,fe=H.length;ie<fe;ie++)ze=H[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,Qe,ze):t.texImage2D(s.TEXTURE_2D,ie,rt,Be,Qe,ze);T.generateMipmaps=!1}else if(ue){if(Pe){const ie=je(Ee);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,rt,Be,Qe,Ee);y(T)&&v(pe),We.__version=he.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function me(b,T,Z){if(T.image.length!==6)return;const pe=Ne(b,T),_e=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const he=r.get(_e);if(_e.version!==he.__version||pe===!0){t.activeTexture(s.TEXTURE0+Z);const We=At.getPrimaries(At.workingColorSpace),Ce=T.colorSpace===yr?null:At.getPrimaries(T.colorSpace),Oe=T.colorSpace===yr||We===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let fe=0;fe<6;fe++)!ft&&!Ee?Be[fe]=C(T.image[fe],!0,a.maxCubemapSize):Be[fe]=Ee?T.image[fe].image:T.image[fe],Be[fe]=Tt(T,Be[fe]);const Qe=Be[0],rt=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),H=L(T.internalFormat,rt,ze,T.colorSpace),ue=T.isVideoTexture!==!0,Pe=he.__version===void 0||pe===!0,O=_e.dataReady;let Te=X(T,Qe);re(s.TEXTURE_CUBE_MAP,T);let ie;if(ft){ue&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,H,Qe.width,Qe.height);for(let fe=0;fe<6;fe++){ie=Be[fe].mipmaps;for(let Ue=0;Ue<ie.length;Ue++){const be=ie[Ue];T.format!==ai?rt!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,be.width,be.height,rt,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,H,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,be.width,be.height,rt,ze,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,H,be.width,be.height,0,rt,ze,be.data)}}}else{if(ie=T.mipmaps,ue&&Pe){ie.length>0&&Te++;const fe=je(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,H,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be[fe].width,Be[fe].height,rt,ze,Be[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,H,Be[fe].width,Be[fe].height,0,rt,ze,Be[fe].data);for(let Ue=0;Ue<ie.length;Ue++){const et=ie[Ue].image[fe].image;ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,et.width,et.height,rt,ze,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,H,et.width,et.height,0,rt,ze,et.data)}}else{ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,rt,ze,Be[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,H,rt,ze,Be[fe]);for(let Ue=0;Ue<ie.length;Ue++){const be=ie[Ue];ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,rt,ze,be.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,H,rt,ze,be.image[fe])}}}y(T)&&v(s.TEXTURE_CUBE_MAP),he.__version=_e.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Me(b,T,Z,pe,_e,he){const We=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Oe=L(Z.internalFormat,We,Ce,Z.colorSpace),ft=r.get(T),Ee=r.get(Z);if(Ee.__renderTarget=T,!ft.__hasExternalTextures){const Be=Math.max(1,T.width>>he),Qe=Math.max(1,T.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Oe,Be,Qe,T.depth,0,We,Ce,null):t.texImage2D(_e,he,Oe,Be,Qe,0,We,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,0,pt(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(b,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const pe=T.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,he=R(T.stencilBuffer,_e),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(T);ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,b)}else{const pe=T.textures;for(let _e=0;_e<pe.length;_e++){const he=pe[_e],We=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Oe=L(he.internalFormat,We,Ce,he.colorSpace),ft=pt(T);Z&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,T.width,T.height):ct(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const _e=pe.__webglTexture,he=pt(T);if(T.depthTexture.format===qs)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===eo)ct(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ze(b){const T=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=pe}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,b)}else if(Z){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[pe],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(b,T,Z){const pe=r.get(b);T!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ze(b)}function Pt(b){const T=b.texture,Z=r.get(b),pe=r.get(T);b.addEventListener("dispose",F);const _e=b.textures,he=b.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Z.__webglFramebuffer[Ce][Oe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&ct(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];Z.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ft=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Be=L(Oe.internalFormat,ft,Ee,Oe.colorSpace,b.isXRRenderTarget===!0),Qe=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Ce][Oe],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Me(Z.__webglFramebuffer[Ce],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=_e[Ce],Ee=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,ft),Me(Z.__webglFramebuffer,b,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),re(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Oe],b,T,s.COLOR_ATTACHMENT0,Ce,Oe);else Me(Z.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ce,0);y(T)&&v(Ce),t.unbindTexture()}b.depthBuffer&&Ze(b)}function Rt(b){const T=b.textures;for(let Z=0,pe=T.length;Z<pe;Z++){const _e=T[Z];if(y(_e)){const he=N(b),We=r.get(_e).__webglTexture;t.bindTexture(he,We),v(he),t.unbindTexture()}}}const lt=[],B=[];function ln(b){if(b.samples>0){if(ct(b)===!1){const T=b.textures,Z=b.width,pe=b.height;let _e=s.COLOR_BUFFER_BIT;const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(b),Ce=T.length>1;if(Ce)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),h===!0&&(lt.length=0,B.length=0,lt.push(s.COLOR_ATTACHMENT0+Oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(he),B.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(b){const T=c.render.frame;g.get(b)!==T&&(g.set(b,T),b.update())}function Tt(b,T){const Z=b.colorSpace,pe=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==to&&Z!==yr&&(At.getTransfer(Z)===bt?(pe!==ai||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function je(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=ge,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Ye,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function UE(s,e){function t(r,a=yr){let l;const c=At.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===sd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===od)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zm)return s.BYTE;if(r===Jm)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===rd)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===eg)return s.ALPHA;if(r===tg)return s.RGB;if(r===ai)return s.RGBA;if(r===ng)return s.LUMINANCE;if(r===ig)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===eo)return s.DEPTH_STENCIL;if(r===rg)return s.RED;if(r===ad)return s.RED_INTEGER;if(r===sg)return s.RG;if(r===ld)return s.RG_INTEGER;if(r===ud)return s.RGBA_INTEGER;if(r===Nl||r===Il||r===Fl||r===Ol)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Nl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Nl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Cf||r===Rf||r===Pf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Af)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf||r===Lf||r===Df)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===bf||r===Lf)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Df)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uf||r===Nf||r===If||r===Ff||r===Of||r===zf||r===Bf||r===kf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===Yf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Uf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===jf||r===qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===og||r===$f||r===Kf||r===Zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class FE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new wr({vertexShader:NE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OE extends io{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,m=null,g=null,_=null,x=null,S=null,E=null;const C=new FE,y=t.getContextAttributes();let v=null,N=null;const L=[],R=[],X=new Ge;let z=null;const F=new wn;F.viewport=new Yt;const I=new wn;I.viewport=new Yt;const P=[F,I],w=new rx;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=L[Q];return me===void 0&&(me=new ef,L[Q]=me),me.getHandSpace()};function ee(Q){const me=R.indexOf(Q.inputSource);if(me===-1)return;const Me=L[me];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,m||c),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ge);for(let Q=0;Q<L.length;Q++){const me=R[Q];me!==null&&(R[Q]=null,L[Q].disconnect(me))}G=null,le=null,C.reset(),e.setRenderTarget(v),S=null,x=null,_=null,a=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ye=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?eo:qs,ye=y.stencil?Qs:Zr);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};_=new XRWebGLBinding(a,t),x=_.createProjectionLayer(Ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Jr(x.textureWidth,x.textureHeight,{format:ai,type:Gi,depthTexture:new yg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Jr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ge(Q){for(let me=0;me<Q.removed.length;me++){const Me=Q.removed[me],ye=R.indexOf(Me);ye>=0&&(R[ye]=null,L[ye].disconnect(Me))}for(let me=0;me<Q.added.length;me++){const Me=Q.added[me];let ye=R.indexOf(Me);if(ye===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=R.length){R.push(Me),ye=Ze;break}else if(R[Ze]===null){R[Ze]=Me,ye=Ze;break}if(ye===-1)break}const Re=L[ye];Re&&Re.connect(Me)}}const oe=new Y,ce=new Y;function V(Q,me,Me){oe.setFromMatrixPosition(me.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ye=oe.distanceTo(ce),Re=me.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Ye=Re[14]/(Re[10]-1),Pt=Re[14]/(Re[10]+1),Rt=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],B=(Re[8]-1)/Re[0],ln=(Ze[8]+1)/Ze[0],pt=Ye*B,ct=Ye*ln,Ke=ye/(-B+ln),Tt=Ke*-B;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=Ye+Ke,b=Pt+Ke,T=pt-Tt,Z=ct+(ye-Tt),pe=Rt*Pt/b*je,_e=lt*Pt/b*je;Q.projectionMatrix.makePerspective(T,Z,pe,_e,je,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let me=Q.near,Me=Q.far;C.texture!==null&&(C.depthNear>0&&(me=C.depthNear),C.depthFar>0&&(Me=C.depthFar)),w.near=I.near=F.near=me,w.far=I.far=F.far=Me,(G!==w.near||le!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,le=w.far),F.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,w.layers.mask=F.layers.mask|I.layers.mask;const ye=Q.parent,Re=w.cameras;ae(w,ye);for(let Ze=0;Ze<Re.length;Ze++)ae(Re[Ze],ye);Re.length===2?V(w,F,I):w.projectionMatrix.copy(F.projectionMatrix),se(Q,w,ye)};function se(Q,me,Me){Me===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let U=null;function re(Q,me){if(g=me.getViewerPose(m||c),E=me,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ye=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Ye=0;Ye<Me.length;Ye++){const Pt=Me[Ye];let Rt=null;if(S!==null)Rt=S.getViewport(Pt);else{const B=_.getViewSubImage(x,Pt);Rt=B.viewport,Ye===0&&(e.setRenderTargetTextures(N,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(N))}let lt=P[Ye];lt===void 0&&(lt=new wn,lt.layers.enable(Ye),lt.viewport=new Yt,P[Ye]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ye===0&&(w.matrix.copy(lt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(lt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ye=_.getDepthInformation(Me[0]);Ye&&Ye.isValid&&Ye.texture&&C.init(e,Ye,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ye=R[Me],Re=L[Me];ye!==null&&Re!==void 0&&Re.update(ye,me,m||c)}U&&U(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ne=new Tg;Ne.setAnimationLoop(re),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Xr=new Wi,zE=new Ht;function BE(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,pg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,N,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),C(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,N,L):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Un&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Un&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,R=N.envMapRotation;L&&(y.envMap.value=L,Xr.copy(R),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(Xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,N,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=L*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Un&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const N=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function kE(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const R=L.program;r.uniformBlockBinding(N,R)}function m(N,L){let R=a[N.id];R===void 0&&(E(N),R=g(N),a[N.id]=R,N.addEventListener("dispose",y));const X=L.program;r.updateUBOMapping(N,X);const z=e.render.frame;l[N.id]!==z&&(x(N),l[N.id]=z)}function g(N){const L=_();N.__bindingPointIndex=L;const R=s.createBuffer(),X=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,X,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function _(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],R=N.uniforms,X=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let z=0,F=R.length;z<F;z++){const I=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,w=I.length;P<w;P++){const G=I[P];if(S(G,z,P,X)===!0){const le=G.__offset,ee=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let ge=0;ge<ee.length;ge++){const oe=ee[ge],ce=C(oe);typeof oe=="number"||typeof oe=="boolean"?(G.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,le+de,G.__data)):oe.isMatrix3?(G.__data[0]=oe.elements[0],G.__data[1]=oe.elements[1],G.__data[2]=oe.elements[2],G.__data[3]=0,G.__data[4]=oe.elements[3],G.__data[5]=oe.elements[4],G.__data[6]=oe.elements[5],G.__data[7]=0,G.__data[8]=oe.elements[6],G.__data[9]=oe.elements[7],G.__data[10]=oe.elements[8],G.__data[11]=0):(oe.toArray(G.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,R,X){const z=N.value,F=L+"_"+R;if(X[F]===void 0)return typeof z=="number"||typeof z=="boolean"?X[F]=z:X[F]=z.clone(),!0;{const I=X[F];if(typeof z=="number"||typeof z=="boolean"){if(I!==z)return X[F]=z,!0}else if(I.equals(z)===!1)return I.copy(z),!0}return!1}function E(N){const L=N.uniforms;let R=0;const X=16;for(let F=0,I=L.length;F<I;F++){const P=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,G=P.length;w<G;w++){const le=P[w],ee=Array.isArray(le.value)?le.value:[le.value];for(let de=0,ge=ee.length;de<ge;de++){const oe=ee[de],ce=C(oe),V=R%X,ae=V%ce.boundary,se=V+ae;R+=ae,se!==0&&X-se<ce.storage&&(R+=X-se),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ce.storage}}}const z=R%X;return z>0&&(R+=X-z),N.__size=R,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const N in a)s.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:h,update:m,dispose:v}}class HE{constructor(e={}){const{canvas:t=a0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),C=new Int32Array(4);let y=null,v=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let X=!1,z=0,F=0,I=null,P=-1,w=null;const G=new Yt,le=new Yt;let ee=null;const de=new Ct(0);let ge=0,oe=t.width,ce=t.height,V=1,ae=null,se=null;const U=new Yt(0,0,oe,ce),re=new Yt(0,0,oe,ce);let Ne=!1;const Q=new xg;let me=!1,Me=!1;this.transmissionResolutionScale=1;const ye=new Ht,Re=new Ht,Ze=new Y,Ye=new Yt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return I===null?V:1}let B=r;function ln(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const j="webgl2";if(B=ln(j,A),B===null)throw ln(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,Ke,Tt,je,b,T,Z,pe,_e,he,We,Ce,Oe,ft,Ee,Be,Qe,rt,ze,H,ue,Pe,O;function Te(){pt=new ZS(B),pt.init(),ue=new UE(B,pt),ct=new XS(B,pt,e,ue),Ke=new LE(B,pt),ct.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Tt=new eM(B),je=new vE,b=new DE(B,pt,Ke,je,ct,ue,Tt),T=new jS(R),Z=new KS(R),pe=new ax(B),Pe=new GS(B,pe),_e=new JS(B,pe,Tt,Pe),he=new nM(B,_e,pe,Tt),rt=new tM(B,ct,b),Ee=new YS(je),We=new _E(R,T,Z,pt,ct,Pe,Ee),Ce=new BE(R,je),Oe=new yE,ft=new AE(pt),Qe=new VS(R,T,Z,Ke,he,S,h),Be=new PE(R,he,ct),O=new kE(B,Tt,ct,Ke),ze=new WS(B,pt,Tt),H=new QS(B,pt,Tt),Tt.programs=We.programs,R.capabilities=ct,R.extensions=pt,R.properties=je,R.renderLists=Oe,R.shadowMap=Be,R.state=Ke,R.info=Tt}Te();const ie=new OE(R,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,j,te=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=j,t.width=Math.floor(A*V),t.height=Math.floor(j*V),te===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(oe*V,ce*V).floor()},this.setDrawingBufferSize=function(A,j,te){oe=A,ce=j,V=te,t.width=Math.floor(A*te),t.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,j,te,K){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,j,te,K),Ke.viewport(G.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,j,te,K){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,te,K),Ke.scissor(le.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ke.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,j=!0,te=!0){let K=0;if(A){let q=!1;if(I!==null){const we=I.texture.format;q=we===ud||we===ld||we===ad}if(q){const we=I.texture.type,Le=we===Gi||we===Zr||we===qo||we===Qs||we===sd||we===od,Ie=Qe.getClearColor(),He=Qe.getClearAlpha(),ot=Ie.r,st=Ie.g,Xe=Ie.b;Le?(E[0]=ot,E[1]=st,E[2]=Xe,E[3]=He,B.clearBufferuiv(B.COLOR,0,E)):(C[0]=ot,C[1]=st,C[2]=Xe,C[3]=He,B.clearBufferiv(B.COLOR,0,C))}else K|=B.COLOR_BUFFER_BIT}j&&(K|=B.DEPTH_BUFFER_BIT),te&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Qe.dispose(),Oe.dispose(),ft.dispose(),je.dispose(),T.dispose(),Z.dispose(),he.dispose(),Pe.dispose(),O.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",es),ie.removeEventListener("sessionend",Yi),Si.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=Tt.autoReset,j=Be.enabled,te=Be.autoUpdate,K=Be.needsUpdate,q=Be.type;Te(),Tt.autoReset=A,Be.enabled=j,Be.autoUpdate=te,Be.needsUpdate=K,Be.type=q}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const j=A.target;j.removeEventListener("dispose",et),xt(j)}function xt(A){Nt(A),je.remove(A)}function Nt(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(te){We.releaseProgram(te)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,K,q,we){j===null&&(j=Pt);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ie=ta(A,j,te,K,q);Ke.setMaterial(K,Le);let He=te.index,ot=1;if(K.wireframe===!0){if(He=_e.getWireframeAttribute(te),He===void 0)return;ot=2}const st=te.drawRange,Xe=te.attributes.position;let yt=st.start*ot,ut=(st.start+st.count)*ot;we!==null&&(yt=Math.max(yt,we.start*ot),ut=Math.min(ut,(we.start+we.count)*ot)),He!==null?(yt=Math.max(yt,0),ut=Math.min(ut,He.count)):Xe!=null&&(yt=Math.max(yt,0),ut=Math.min(ut,Xe.count));const Vt=ut-yt;if(Vt<0||Vt===1/0)return;Pe.setup(q,K,Ie,te,He);let Ot,St=ze;if(He!==null&&(Ot=pe.get(He),St=H,St.setIndex(Ot)),q.isMesh)K.wireframe===!0?(Ke.setLineWidth(K.wireframeLinewidth*lt()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(q.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*lt()),q.isLineSegments?St.setMode(B.LINES):q.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else q.isPoints?St.setMode(B.POINTS):q.isSprite&&St.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)St.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Gt=q._multiDrawCounts,vt=q._multiDrawCount,dn=He?pe.get(He).bytesPerElement:1,qi=je.get(K).currentProgram.getUniforms();for(let yn=0;yn<vt;yn++)qi.setValue(B,"_gl_DrawID",yn),St.render(Je[yn]/dn,Gt[yn])}else if(q.isInstancedMesh)St.renderInstances(yt,Vt,q.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Gt=Math.min(te.instanceCount,Je);St.renderInstances(yt,Vt,Gt)}else St.render(yt,Vt)};function mt(A,j,te){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,ts(A,j,te),A.side=Tr,A.needsUpdate=!0,ts(A,j,te),A.side=Bi):ts(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),v=ft.get(te),v.init(j),L.push(v),te.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),A!==te&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ie=we[Le];mt(Ie,te,q),K.add(Ie)}else mt(we,te,q),K.add(we)}),L.pop(),v=null,K},this.compileAsync=function(A,j,te=null){const K=this.compile(A,j,te);return new Promise(q=>{function we(){if(K.forEach(function(Le){je.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){q(A);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let jt=null;function qt(A){jt&&jt(A)}function es(){Si.stop()}function Yi(){Si.start()}const Si=new Tg;Si.setAnimationLoop(qt),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){jt=A,ie.setAnimationLoop(A),A===null?Si.stop():Si.start()},ie.addEventListener("sessionstart",es),ie.addEventListener("sessionend",Yi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(j),j=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,I),v=ft.get(A,L.length),v.init(j),L.push(v),Re.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Re),Me=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,Me),y=Oe.get(A,N.length),y.init(),N.push(y),ie.enabled===!0&&ie.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Mi(we,j,-1/0,R.sortObjects)}Mi(A,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ae,se),Rt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Rt&&Qe.addToRenderList(y,A),this.info.render.frame++,me===!0&&Ee.beginShadows();const te=v.state.shadowsArray;Be.render(te,A,j),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,q=y.transmissive;if(v.setupLights(),j.isArrayCamera){const we=j.cameras;if(q.length>0)for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Cr(K,q,A,He)}Rt&&Qe.render(A);for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Ar(y,A,He,He.viewport)}}else q.length>0&&Cr(K,q,A,j),Rt&&Qe.render(A),Ar(y,A,j);I!==null&&F===0&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(R,A,j),Pe.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],me===!0&&Ee.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Mi(A,j,te,K){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Le=he.update(A),Ie=A.material;Ie.visible&&y.push(A,Le,Ie,te,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Le=he.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ie)){const He=Le.groups;for(let ot=0,st=He.length;ot<st;ot++){const Xe=He[ot],yt=Ie[Xe.materialIndex];yt&&yt.visible&&y.push(A,Le,yt,te,Ye.z,Xe)}}else Ie.visible&&y.push(A,Le,Ie,te,Ye.z,null)}}const we=A.children;for(let Le=0,Ie=we.length;Le<Ie;Le++)Mi(we[Le],j,te,K)}function Ar(A,j,te,K){const q=A.opaque,we=A.transmissive,Le=A.transparent;v.setupLightsView(te),me===!0&&Ee.setGlobalState(R.clippingPlanes,te),K&&Ke.viewport(G.copy(K)),q.length>0&&ji(q,j,te),we.length>0&&ji(we,j,te),Le.length>0&&ji(Le,j,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Cr(A,j,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[K.id]===void 0&&(v.state.transmissionRenderTarget[K.id]=new Jr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?$o:Gi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=v.state.transmissionRenderTarget[K.id],Le=K.viewport||G;we.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(de),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&Qe.render(te);const He=R.toneMapping;R.toneMapping=Mr;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),v.setupLightsView(K),me===!0&&Ee.setGlobalState(R.clippingPlanes,K),ji(A,te,K),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,yt=j.length;Xe<yt;Xe++){const ut=j[Xe],Vt=ut.object,Ot=ut.geometry,St=ut.material,Je=ut.group;if(St.side===Bi&&Vt.layers.test(K.layers)){const Gt=St.side;St.side=Un,St.needsUpdate=!0,Qo(Vt,te,K,Ot,St,Je),St.side=Gt,St.needsUpdate=!0,st=!0}}st===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}R.setRenderTarget(Ie),R.setClearColor(de,ge),ot!==void 0&&(K.viewport=ot),R.toneMapping=He}function ji(A,j,te){const K=j.isScene===!0?j.overrideMaterial:null;for(let q=0,we=A.length;q<we;q++){const Le=A[q],Ie=Le.object,He=Le.geometry,ot=K===null?Le.material:K,st=Le.group;Ie.layers.test(te.layers)&&Qo(Ie,j,te,He,ot,st)}}function Qo(A,j,te,K,q,we){A.onBeforeRender(R,j,te,K,q,we),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,j,te,K,A,we),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Un,q.needsUpdate=!0,R.renderBufferDirect(te,j,K,q,A,we),q.side=Tr,q.needsUpdate=!0,R.renderBufferDirect(te,j,K,q,A,we),q.side=Bi):R.renderBufferDirect(te,j,K,q,A,we),A.onAfterRender(R,j,te,K,q,we)}function ts(A,j,te){j.isScene!==!0&&(j=Pt);const K=je.get(A),q=v.state.lights,we=v.state.shadowsArray,Le=q.state.version,Ie=We.getParameters(A,q.state,we,j,te),He=We.getProgramCacheKey(Ie);let ot=K.programs;K.environment=A.isMeshStandardMaterial?j.environment:null,K.fog=j.fog,K.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",et),ot=new Map,K.programs=ot);let st=ot.get(He);if(st!==void 0){if(K.currentProgram===st&&K.lightsStateVersion===Le)return fi(A,Ie),st}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,R),st=We.acquireProgram(Ie,He),ot.set(He,st),K.uniforms=Ie.uniforms;const Xe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),fi(A,Ie),K.needsLights=Kl(A),K.lightsStateVersion=Le,K.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=st,K.uniformsList=null,st}function ea(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=kl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function fi(A,j){const te=je.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function ta(A,j,te,K,q){j.isScene!==!0&&(j=Pt),b.resetTextureUnits();const we=j.fog,Le=K.isMeshStandardMaterial?j.environment:null,Ie=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:to,He=(K.isMeshStandardMaterial?Z:T).get(K.envMap||Le),ot=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,ut=!!te.morphAttributes.color;let Vt=Mr;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,St=Ot!==void 0?Ot.length:0,Je=je.get(K),Gt=v.state.lights;if(me===!0&&(Me===!0||A!==w)){const un=A===w&&K.id===P;Ee.setState(K,A,un)}let vt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==Ie||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==st||Je.morphTargets!==Xe||Je.morphNormals!==yt||Je.morphColors!==ut||Je.toneMapping!==Vt||Je.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Je.__version=K.version);let dn=Je.currentProgram;vt===!0&&(dn=ts(K,j,q));let qi=!1,yn=!1,Ei=!1;const Dt=dn.getUniforms(),hn=Je.uniforms;if(Ke.useProgram(dn.program)&&(qi=!0,yn=!0,Ei=!0),K.id!==P&&(P=K.id,yn=!0),qi||w!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),u0(ye),c0(ye),Dt.setValue(B,"projectionMatrix",ye)):Dt.setValue(B,"projectionMatrix",A.projectionMatrix),Dt.setValue(B,"viewMatrix",A.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(B,Ze.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,yn=!0,Ei=!0)}if(q.isSkinnedMesh){Dt.setOptional(B,q,"bindMatrix"),Dt.setOptional(B,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(B,"boneTexture",un.boneTexture,b))}q.isBatchedMesh&&(Dt.setOptional(B,q,"batchingTexture"),Dt.setValue(B,"batchingTexture",q._matricesTexture,b),Dt.setOptional(B,q,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",q._indirectTexture,b),Dt.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",q._colorsTexture,b));const tn=te.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&rt.update(q,te,dn),(yn||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Dt.setValue(B,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=He,hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&j.environment!==null&&(hn.envMapIntensity.value=j.environmentIntensity),yn&&(Dt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&na(hn,Ei),we&&K.fog===!0&&Ce.refreshFogUniforms(hn,we),Ce.refreshMaterialUniforms(hn,K,V,ce,v.state.transmissionRenderTarget[A.id]),kl.upload(B,ea(Je),hn,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(kl.upload(B,ea(Je),hn,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(B,"center",q.center),Dt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Dt.setValue(B,"normalMatrix",q.normalMatrix),Dt.setValue(B,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let nn=0,Mt=un.length;nn<Mt;nn++){const di=un[nn];O.update(di,dn),O.bind(di,dn)}}return dn}function na(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Kl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,j,te){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=te;const K=je.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=te===void 0,K.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const te=je.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0};const ia=B.createFramebuffer();this.setRenderTarget=function(A,j=0,te=0){I=A,z=j,F=te;let K=!0,q=null,we=!1,Le=!1;if(A){const He=je.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(He.__hasExternalTextures)b.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Le=!0);const st=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[j])?q=st[j][te]:q=st[j],we=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?q=je.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?q=st[te]:q=st,G.copy(A.viewport),le.copy(A.scissor),ee=A.scissorTest}else G.copy(U).multiplyScalar(V).floor(),le.copy(re).multiplyScalar(V).floor(),ee=Ne;if(te!==0&&(q=ia),Ke.bindFramebuffer(B.FRAMEBUFFER,q)&&K&&Ke.drawBuffers(A,q),Ke.viewport(G),Ke.scissor(le),Ke.setScissorTest(ee),we){const He=je.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,He.__webglTexture,te)}else if(Le){const He=je.get(A.texture),ot=j;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,te,ot)}else if(A!==null&&te!==0){const He=je.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,He.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,j,te,K,q,we,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){Ke.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-K&&te>=0&&te<=A.height-q&&B.readPixels(j,te,K,q,ue.convert(ot),ue.convert(st),we)}finally{const He=I!==null?je.get(I).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,K,q,we,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-K&&te>=0&&te<=A.height-q){Ke.bindFramebuffer(B.FRAMEBUFFER,Ie);const Xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(j,te,K,q,ue.convert(ot),ue.convert(st),0);const yt=I!==null?je.get(I).__webglFramebuffer:null;Ke.bindFramebuffer(B.FRAMEBUFFER,yt);const ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await l0(B,ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(Xe),B.deleteSync(ut),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,te=0){A.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-te),q=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Le=j!==null?j.x:0,Ie=j!==null?j.y:0;b.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Le,Ie,q,we),Ke.unbindTexture()};const ra=B.createFramebuffer(),sa=B.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,K=null,q=0,we=null){A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],j=arguments[2],we=arguments[3]||0,te=null),we===null&&(q!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=q,q=0):we=0);let Le,Ie,He,ot,st,Xe,yt,ut,Vt;const Ot=A.isCompressedTexture?A.mipmaps[we]:A.image;if(te!==null)Le=te.max.x-te.min.x,Ie=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,st=te.min.y,Xe=te.isBox3?te.min.z:0;else{const tn=Math.pow(2,-q);Le=Math.floor(Ot.width*tn),Ie=Math.floor(Ot.height*tn),A.isDataArrayTexture?He=Ot.depth:A.isData3DTexture?He=Math.floor(Ot.depth*tn):He=1,ot=0,st=0,Xe=0}K!==null?(yt=K.x,ut=K.y,Vt=K.z):(yt=0,ut=0,Vt=0);const St=ue.convert(j.format),Je=ue.convert(j.type);let Gt;j.isData3DTexture?(b.setTexture3D(j,0),Gt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(b.setTexture2DArray(j,0),Gt=B.TEXTURE_2D_ARRAY):(b.setTexture2D(j,0),Gt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qi=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),Ei=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const Dt=A.isDataArrayTexture||A.isData3DTexture,hn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=je.get(A),un=je.get(j),nn=je.get(tn.__renderTarget),Mt=je.get(un.__renderTarget);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let di=0;di<He;di++)Dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(A).__webglTexture,q,Xe+di),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(j).__webglTexture,we,Vt+di)),B.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||je.has(A)){const tn=je.get(A),un=je.get(j);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,ra),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,sa);for(let nn=0;nn<He;nn++)Dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,q,Xe+nn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,q),hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,we,Vt+nn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,we),q!==0?B.blitFramebuffer(ot,st,Le,Ie,yt,ut,Le,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):hn?B.copyTexSubImage3D(Gt,we,yt,ut,Vt+nn,ot,st,Le,Ie):B.copyTexSubImage2D(Gt,we,yt,ut,ot,st,Le,Ie);Ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Ot.data):B.texSubImage3D(Gt,we,yt,ut,Vt,Le,Ie,He,St,Je,Ot):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,yt,ut,Ot.width,Ot.height,St,Ot.data):B.texSubImage2D(B.TEXTURE_2D,we,yt,ut,Le,Ie,St,Je,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ei),we===0&&j.generateMipmaps&&B.generateMipmap(Gt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,j,te=null,K=null,q=0){return A.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,K=arguments[1]||null,A=arguments[2],j=arguments[3],q=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,te,K,q)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){z=0,F=0,I=null,Ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}var VE=Object.defineProperty,GE=(s,e,t)=>e in s?VE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,WE=(s,e,t)=>(GE(s,e+"",t),t);class XE{constructor(){WE(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}var YE=Object.defineProperty,jE=(s,e,t)=>e in s?YE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,it=(s,e,t)=>(jE(s,typeof e!="symbol"?e+"":e,t),t);const Ul=new fd,Ym=new zi,qE=Math.cos(70*(Math.PI/180)),jm=(s,e)=>(s%e+e)%e;class $E extends XE{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new Y),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN}),it(this,"touches",{ONE:ws.ROTATE,TWO:ws.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=H=>{let ue=jm(H,2*Math.PI),Pe=g.phi;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),_.phi=ue-Pe,r.update()},this.setAzimuthalAngle=H=>{let ue=jm(H,2*Math.PI),Pe=g.theta;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),_.theta=ue-Pe,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=H=>{H.addEventListener("keydown",Ce),this._domElementKeyEvents=H},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(a),r.update(),h=f.NONE},this.update=(()=>{const H=new Y,ue=new Y(0,1,0),Pe=new Qr().setFromUnitVectors(e.up,ue),O=Pe.clone().invert(),Te=new Y,ie=new Qr,fe=2*Math.PI;return function(){const be=r.object.position;Pe.setFromUnitVectors(e.up,ue),O.copy(Pe).invert(),H.copy(be).sub(r.target),H.applyQuaternion(Pe),g.setFromVector3(H),r.autoRotate&&h===f.NONE&&de(le()),r.enableDamping?(g.theta+=_.theta*r.dampingFactor,g.phi+=_.phi*r.dampingFactor):(g.theta+=_.theta,g.phi+=_.phi);let et=r.minAzimuthAngle,xt=r.maxAzimuthAngle;isFinite(et)&&isFinite(xt)&&(et<-Math.PI?et+=fe:et>Math.PI&&(et-=fe),xt<-Math.PI?xt+=fe:xt>Math.PI&&(xt-=fe),et<=xt?g.theta=Math.max(et,Math.min(xt,g.theta)):g.theta=g.theta>(et+xt)/2?Math.max(et,g.theta):Math.min(xt,g.theta)),g.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,g.phi)),g.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(S,r.dampingFactor):r.target.add(S),r.zoomToCursor&&P||r.object.isOrthographicCamera?g.radius=Ne(g.radius):g.radius=Ne(g.radius*x),H.setFromSpherical(g),H.applyQuaternion(O),be.copy(r.target).add(H),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),r.enableDamping===!0?(_.theta*=1-r.dampingFactor,_.phi*=1-r.dampingFactor,S.multiplyScalar(1-r.dampingFactor)):(_.set(0,0,0),S.set(0,0,0));let Nt=!1;if(r.zoomToCursor&&P){let mt=null;if(r.object instanceof wn&&r.object.isPerspectiveCamera){const jt=H.length();mt=Ne(jt*x);const qt=jt-mt;r.object.position.addScaledVector(F,qt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const jt=new Y(I.x,I.y,0);jt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix(),Nt=!0;const qt=new Y(I.x,I.y,0);qt.unproject(r.object),r.object.position.sub(qt).add(jt),r.object.updateMatrixWorld(),mt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;mt!==null&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(mt).add(r.object.position):(Ul.origin.copy(r.object.position),Ul.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ul.direction))<qE?e.lookAt(r.target):(Ym.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ul.intersectPlane(Ym,r.target))))}else r.object instanceof Bl&&r.object.isOrthographicCamera&&(Nt=x!==1,Nt&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix()));return x=1,P=!1,Nt||Te.distanceToSquared(r.object.position)>m||8*(1-ie.dot(r.object.quaternion))>m?(r.dispatchEvent(a),Te.copy(r.object.position),ie.copy(r.object.quaternion),Nt=!1,!0):!1}})(),this.connect=H=>{r.domElement=H,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",Ee),r.domElement.addEventListener("pointerdown",T),r.domElement.addEventListener("pointercancel",pe),r.domElement.addEventListener("wheel",We)},this.dispose=()=>{var H,ue,Pe,O,Te,ie;r.domElement&&(r.domElement.style.touchAction="auto"),(H=r.domElement)==null||H.removeEventListener("contextmenu",Ee),(ue=r.domElement)==null||ue.removeEventListener("pointerdown",T),(Pe=r.domElement)==null||Pe.removeEventListener("pointercancel",pe),(O=r.domElement)==null||O.removeEventListener("wheel",We),(Te=r.domElement)==null||Te.ownerDocument.removeEventListener("pointermove",Z),(ie=r.domElement)==null||ie.ownerDocument.removeEventListener("pointerup",pe),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Ce)};const r=this,a={type:"change"},l={type:"start"},c={type:"end"},f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=f.NONE;const m=1e-6,g=new ym,_=new ym;let x=1;const S=new Y,E=new Ge,C=new Ge,y=new Ge,v=new Ge,N=new Ge,L=new Ge,R=new Ge,X=new Ge,z=new Ge,F=new Y,I=new Ge;let P=!1;const w=[],G={};function le(){return 2*Math.PI/60/60*r.autoRotateSpeed}function ee(){return Math.pow(.95,r.zoomSpeed)}function de(H){r.reverseOrbit||r.reverseHorizontalOrbit?_.theta+=H:_.theta-=H}function ge(H){r.reverseOrbit||r.reverseVerticalOrbit?_.phi+=H:_.phi-=H}const oe=(()=>{const H=new Y;return function(Pe,O){H.setFromMatrixColumn(O,0),H.multiplyScalar(-Pe),S.add(H)}})(),ce=(()=>{const H=new Y;return function(Pe,O){r.screenSpacePanning===!0?H.setFromMatrixColumn(O,1):(H.setFromMatrixColumn(O,0),H.crossVectors(r.object.up,H)),H.multiplyScalar(Pe),S.add(H)}})(),V=(()=>{const H=new Y;return function(Pe,O){const Te=r.domElement;if(Te&&r.object instanceof wn&&r.object.isPerspectiveCamera){const ie=r.object.position;H.copy(ie).sub(r.target);let fe=H.length();fe*=Math.tan(r.object.fov/2*Math.PI/180),oe(2*Pe*fe/Te.clientHeight,r.object.matrix),ce(2*O*fe/Te.clientHeight,r.object.matrix)}else Te&&r.object instanceof Bl&&r.object.isOrthographicCamera?(oe(Pe*(r.object.right-r.object.left)/r.object.zoom/Te.clientWidth,r.object.matrix),ce(O*(r.object.top-r.object.bottom)/r.object.zoom/Te.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ae(H){r.object instanceof wn&&r.object.isPerspectiveCamera||r.object instanceof Bl&&r.object.isOrthographicCamera?x=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function se(H){ae(x/H)}function U(H){ae(x*H)}function re(H){if(!r.zoomToCursor||!r.domElement)return;P=!0;const ue=r.domElement.getBoundingClientRect(),Pe=H.clientX-ue.left,O=H.clientY-ue.top,Te=ue.width,ie=ue.height;I.x=Pe/Te*2-1,I.y=-(O/ie)*2+1,F.set(I.x,I.y,1).unproject(r.object).sub(r.object.position).normalize()}function Ne(H){return Math.max(r.minDistance,Math.min(r.maxDistance,H))}function Q(H){E.set(H.clientX,H.clientY)}function me(H){re(H),R.set(H.clientX,H.clientY)}function Me(H){v.set(H.clientX,H.clientY)}function ye(H){C.set(H.clientX,H.clientY),y.subVectors(C,E).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),E.copy(C),r.update()}function Re(H){X.set(H.clientX,H.clientY),z.subVectors(X,R),z.y>0?se(ee()):z.y<0&&U(ee()),R.copy(X),r.update()}function Ze(H){N.set(H.clientX,H.clientY),L.subVectors(N,v).multiplyScalar(r.panSpeed),V(L.x,L.y),v.copy(N),r.update()}function Ye(H){re(H),H.deltaY<0?U(ee()):H.deltaY>0&&se(ee()),r.update()}function Pt(H){let ue=!1;switch(H.code){case r.keys.UP:V(0,r.keyPanSpeed),ue=!0;break;case r.keys.BOTTOM:V(0,-r.keyPanSpeed),ue=!0;break;case r.keys.LEFT:V(r.keyPanSpeed,0),ue=!0;break;case r.keys.RIGHT:V(-r.keyPanSpeed,0),ue=!0;break}ue&&(H.preventDefault(),r.update())}function Rt(){if(w.length==1)E.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);E.set(H,ue)}}function lt(){if(w.length==1)v.set(w[0].pageX,w[0].pageY);else{const H=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);v.set(H,ue)}}function B(){const H=w[0].pageX-w[1].pageX,ue=w[0].pageY-w[1].pageY,Pe=Math.sqrt(H*H+ue*ue);R.set(0,Pe)}function ln(){r.enableZoom&&B(),r.enablePan&&lt()}function pt(){r.enableZoom&&B(),r.enableRotate&&Rt()}function ct(H){if(w.length==1)C.set(H.pageX,H.pageY);else{const Pe=ze(H),O=.5*(H.pageX+Pe.x),Te=.5*(H.pageY+Pe.y);C.set(O,Te)}y.subVectors(C,E).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),E.copy(C)}function Ke(H){if(w.length==1)N.set(H.pageX,H.pageY);else{const ue=ze(H),Pe=.5*(H.pageX+ue.x),O=.5*(H.pageY+ue.y);N.set(Pe,O)}L.subVectors(N,v).multiplyScalar(r.panSpeed),V(L.x,L.y),v.copy(N)}function Tt(H){const ue=ze(H),Pe=H.pageX-ue.x,O=H.pageY-ue.y,Te=Math.sqrt(Pe*Pe+O*O);X.set(0,Te),z.set(0,Math.pow(X.y/R.y,r.zoomSpeed)),se(z.y),R.copy(X)}function je(H){r.enableZoom&&Tt(H),r.enablePan&&Ke(H)}function b(H){r.enableZoom&&Tt(H),r.enableRotate&&ct(H)}function T(H){var ue,Pe;r.enabled!==!1&&(w.length===0&&((ue=r.domElement)==null||ue.ownerDocument.addEventListener("pointermove",Z),(Pe=r.domElement)==null||Pe.ownerDocument.addEventListener("pointerup",pe)),Be(H),H.pointerType==="touch"?Oe(H):_e(H))}function Z(H){r.enabled!==!1&&(H.pointerType==="touch"?ft(H):he(H))}function pe(H){var ue,Pe,O;Qe(H),w.length===0&&((ue=r.domElement)==null||ue.releasePointerCapture(H.pointerId),(Pe=r.domElement)==null||Pe.ownerDocument.removeEventListener("pointermove",Z),(O=r.domElement)==null||O.ownerDocument.removeEventListener("pointerup",pe)),r.dispatchEvent(c),h=f.NONE}function _e(H){let ue;switch(H.button){case 0:ue=r.mouseButtons.LEFT;break;case 1:ue=r.mouseButtons.MIDDLE;break;case 2:ue=r.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Ts.DOLLY:if(r.enableZoom===!1)return;me(H),h=f.DOLLY;break;case Ts.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enablePan===!1)return;Me(H),h=f.PAN}else{if(r.enableRotate===!1)return;Q(H),h=f.ROTATE}break;case Ts.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(r.enableRotate===!1)return;Q(H),h=f.ROTATE}else{if(r.enablePan===!1)return;Me(H),h=f.PAN}break;default:h=f.NONE}h!==f.NONE&&r.dispatchEvent(l)}function he(H){if(r.enabled!==!1)switch(h){case f.ROTATE:if(r.enableRotate===!1)return;ye(H);break;case f.DOLLY:if(r.enableZoom===!1)return;Re(H);break;case f.PAN:if(r.enablePan===!1)return;Ze(H);break}}function We(H){r.enabled===!1||r.enableZoom===!1||h!==f.NONE&&h!==f.ROTATE||(H.preventDefault(),r.dispatchEvent(l),Ye(H),r.dispatchEvent(c))}function Ce(H){r.enabled===!1||r.enablePan===!1||Pt(H)}function Oe(H){switch(rt(H),w.length){case 1:switch(r.touches.ONE){case ws.ROTATE:if(r.enableRotate===!1)return;Rt(),h=f.TOUCH_ROTATE;break;case ws.PAN:if(r.enablePan===!1)return;lt(),h=f.TOUCH_PAN;break;default:h=f.NONE}break;case 2:switch(r.touches.TWO){case ws.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ln(),h=f.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;pt(),h=f.TOUCH_DOLLY_ROTATE;break;default:h=f.NONE}break;default:h=f.NONE}h!==f.NONE&&r.dispatchEvent(l)}function ft(H){switch(rt(H),h){case f.TOUCH_ROTATE:if(r.enableRotate===!1)return;ct(H),r.update();break;case f.TOUCH_PAN:if(r.enablePan===!1)return;Ke(H),r.update();break;case f.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;je(H),r.update();break;case f.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;b(H),r.update();break;default:h=f.NONE}}function Ee(H){r.enabled!==!1&&H.preventDefault()}function Be(H){w.push(H)}function Qe(H){delete G[H.pointerId];for(let ue=0;ue<w.length;ue++)if(w[ue].pointerId==H.pointerId){w.splice(ue,1);return}}function rt(H){let ue=G[H.pointerId];ue===void 0&&(ue=new Ge,G[H.pointerId]=ue),ue.set(H.pageX,H.pageY)}function ze(H){const ue=H.pointerId===w[0].pointerId?w[1]:w[0];return G[ue.pointerId]}this.dollyIn=(H=ee())=>{U(H),r.update()},this.dollyOut=(H=ee())=>{se(H),r.update()},this.getScale=()=>x,this.setScale=H=>{ae(H),r.update()},this.getZoomScale=()=>ee(),t!==void 0&&this.connect(t),this.update()}}function KE(s){s&&(s.innerHTML="");const e=new I0;e.background=new Ct("#242424");const t=new wn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=125;const r=new HE({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.gammaOutput=!0,r.shadowMap.enabled=!0,s.appendChild(r.domElement);const a=new $E(t,r.domElement);a.enableDamping=!0,a.dampingFactor=.25,a.screenSpacePanning=!1;const l=new Ge,c=new sx,f=new zi,h=new Y;return{scene:e,camera:t,renderer:r,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:{selectedNode:null,modes:{connectNodes:!1,selectStart:!1},nodesForEdge:[]}}}const ZE=s=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");return t.clearRect(0,0,e.width,e.height),t.fillStyle="#FFE153",t.font="60px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(s.toString(),32,32),new k0(e)};function Xl(s,e){const t=Math.round(s.position.distanceTo(e.position)/5),r=new Mg([s.position,e.position]),a=new md(r,20,.3,8,!1),l=new jl({color:"#7B7B7B",transparent:!0,opacity:.8}),c=new li(a,l),f=ZE(t),h=new _g({map:f,transparent:!0}),m=new O0(h),g=r.getPointAt(.5);return m.position.copy(g),m.scale.set(5,5,1),c.sprite=m,c.userData={nodeA:s,nodeB:e},c}function Pg(s){const e=new pd(s,32,32),t=new jl({color:"#02C874",transparent:!0,opacity:.9}),r=new li(e,t);return r.position.set(0,0,0),r}function JE(s,e){e.x=s.clientX/window.innerWidth*2-1,e.y=-(s.clientY/window.innerHeight)*2+1}function bg(s,e,t){return t.some(r=>{const a=r.geometry.parameters.path.points;return a[0].equals(s.position)&&a[1].equals(e.position)||a[0].equals(e.position)&&a[1].equals(s.position)})}function QE(s){const{nodeA:e,nodeB:t}=s.userData,r=Xl(e,t);return s.geometry.dispose(),s.geometry=r.geometry,s.sprite.position.copy(r.sprite.position),s.sprite.material.map=r.sprite.material.map,s}function eT(s,e){for(let t=0;t<e.length;t++)if(e[t].userData.start){e[t].userData.start=!1,e[t].material.color.set("#02C874");break}return s.userData.start=!0,s.material.color.set("#FF0000"),e}function tT(s,e,t,r){if(s.userData.originalColor||(s.userData.originalColor=s.material.color.clone()),!r.includes(s))r.push(s),s.material.color.set("#F3FF9A");else return r=r.filter(a=>a!==s),s.material.color.copy(s.userData.originalColor),r;if(r.length===2){const[a,l]=r;if(!bg(a,l,t)){const c=Xl(a,l);e.add(c),e.add(c.sprite),t.push(c)}return r.forEach(c=>{c.material.color.copy(c.userData.originalColor)}),[]}return r}function nT(s,e,t,r,a,l,c){const f=l+(Math.random()*10-5);for(let g=0;g<r;g++){const _=Pg(c),x=g/r*Math.PI*2,S=f*Math.cos(x)+(Math.random()*6-3),E=f*Math.sin(x)+(Math.random()*6-3),C=Math.random()*40-10;_.position.set(S,E,C),s.add(_),e.push(_)}const h=Math.floor(Math.random()*r),m=e[h];m.material.color.set("#FF0000"),m.userData.start=!0;for(let g=0;g<r;g++){const _=Xl(e[g],e[(g+1)%r]);s.add(_),s.add(_.sprite),t.push(_)}for(let g=0;g<a;g++){const _=Math.floor(Math.random()*r);let x=Math.floor(Math.random()*r);for(;_===x;)x=Math.floor(Math.random()*r);const S=e[_],E=e[x];if(!bg(S,E,t)){const C=Xl(S,E);s.add(C),s.add(C.sprite),t.push(C)}}}const Lg=(s,e,t,r)=>{JE(r,t),s.setFromCamera(t,e)};function iT({camera:s,renderer:e}){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}function rT(s,e){const{pointer:t,raycaster:r,camera:a,nodes:l,controls:c,plane:f,offset:h,state:m,scene:g,edges:_}=e;Lg(r,a,t,s);const x=r.intersectObjects(l);if(x.length>0){if(m.modes.connectNodes){m.nodesForEdge=tT(x[0].object,g,_,m.nodesForEdge);return}else if(m.modes.selectStart){l=eT(x[0].object,l);return}m.selectedNode=x[0].object,c.enabled=!1,f.setFromNormalAndCoplanarPoint(a.getWorldDirection(f.normal),m.selectedNode.position),h.copy(x[0].point).sub(m.selectedNode.position)}}function sT(s,e){const{pointer:t,raycaster:r,camera:a,plane:l,offset:c,state:f,edges:h}=e;if(!f.selectedNode)return;Lg(r,a,t,s);const m=new Y;if(r.ray.intersectPlane(l,m)){f.selectedNode.position.copy(m.sub(c));for(let g=0;g<h.length;g++){const{nodeA:_,nodeB:x}=h[g].userData;(_===f.selectedNode||x===f.selectedNode)&&(h[g]=QE(h[g]))}}}function oT(s){const{controls:e,state:t}=s;t.selectedNode=null,e.enabled=!0}function aT(s){s&&(s.innerHTML="");const{scene:e,camera:t,renderer:r,controls:a,pointer:l,raycaster:c,plane:f,offset:h,state:m}=KE(s),g=[],_=[],x=10,S=5,E=60,C=5;nT(e,g,_,x,S,E,C);const R=[{type:"resize",handler:()=>iT({camera:t,renderer:r}),options:!1},{type:"pointerdown",handler:I=>rT(I,{pointer:l,raycaster:c,camera:t,nodes:g,controls:a,plane:f,offset:h,state:m,scene:e,edges:_}),options:!1},{type:"pointermove",handler:I=>sT(I,{pointer:l,raycaster:c,camera:t,plane:f,offset:h,state:m,edges:_}),options:!1},{type:"pointerup",handler:()=>oT({controls:a,state:m}),options:!1}];(()=>{R.forEach(I=>window.addEventListener(I.type,I.handler,I.options))})();const z=()=>{R.forEach(I=>window.removeEventListener(I.type,I.handler,I.options))},F=()=>{requestAnimationFrame(F),a.update(),r.render(e,t)};return F(),{reload:()=>window.location.reload(),clearScene:()=>{g.forEach(I=>e.remove(I)),_.forEach(I=>{e.remove(I),I.sprite&&e.remove(I.sprite)}),g.splice(0),_.splice(0)},addNode:()=>{const I=Pg(C);e.add(I),g.push(I)},addEdge:()=>{m.modes.connectNodes=!m.modes.connectNodes,Object.keys(m.modes).forEach(I=>{I!=="connectNodes"&&(m.modes[I]=!1)}),m.nodesForEdge.forEach(I=>{I.material.color.copy(I.userData.originalColor)}),m.nodesForEdge=[]},selectStart:()=>{m.modes.selectStart=!m.modes.selectStart,Object.keys(m.modes).forEach(I=>{I!=="selectStart"&&(m.modes[I]=!1)}),m.nodesForEdge.forEach(I=>{I.material.color.copy(I.userData.originalColor)}),m.nodesForEdge=[]},cleanup:()=>{z()}}}function lT(){const s=Ws.useRef(null),e=Ws.useRef(null),[t,r]=Ws.useState(!1),[a,l]=Ws.useState(!1);Ws.useEffect(()=>(e.current=aT(s.current),()=>{e.current.cleanup()}),[]);const c=()=>{var _;(_=e.current)==null||_.reload()},f=()=>{var _;(_=e.current)==null||_.clearScene()},h=()=>{var _;(_=e.current)==null||_.addNode()},m=()=>{var _;r(x=>!x),l(!1),(_=e.current)==null||_.addEdge()},g=()=>{var _;l(x=>!x),r(!1),(_=e.current)==null||_.selectStart()};return $n.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},children:[$n.jsx("div",{ref:s}),t&&$n.jsx("div",{style:{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",padding:"10px 20px",backgroundColor:"#F3FF9A",color:"#000000",border:"1px solid #000",borderRadius:"5px",zIndex:"9999"},children:"Select two nodes to connect"}),a&&$n.jsx("div",{style:{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",padding:"10px 20px",backgroundColor:"#FF0000",color:"#000000",border:"1px solid #000",borderRadius:"5px",zIndex:"9999"},children:"Select a start node"}),$n.jsx("button",{onClick:c,style:{position:"absolute",bottom:"20px",right:"20px",padding:"10px 20px",backgroundColor:"#007BFF",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:_=>_.target.style.backgroundColor="#0056b3",onMouseLeave:_=>_.target.style.backgroundColor="#007BFF",children:"Example"}),$n.jsx("button",{onClick:f,style:{position:"absolute",bottom:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#FFA000",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:_=>_.target.style.backgroundColor="#FF8000",onMouseLeave:_=>_.target.style.backgroundColor="#FFA000",children:"Clear"}),$n.jsx("button",{onClick:h,style:{position:"absolute",top:"20px",left:"20px",padding:"10px 20px",backgroundColor:"#02C874",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:_=>_.target.style.backgroundColor="#02A05D",onMouseLeave:_=>_.target.style.backgroundColor="#02C874",children:"Add Node"}),$n.jsx("button",{onClick:m,style:{position:"absolute",top:"20px",left:"150px",padding:"10px 20px",backgroundColor:"#7B7B7B",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:_=>_.target.style.backgroundColor="#666666",onMouseLeave:_=>_.target.style.backgroundColor="#7B7B7B",children:"Add Edge"}),$n.jsx("button",{onClick:g,style:{position:"absolute",top:"80px",left:"20px",padding:"10px 20px",backgroundColor:"#FF0000",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:_=>_.target.style.backgroundColor="#CC0000",onMouseLeave:_=>_.target.style.backgroundColor="#FF0000",children:"Select Start Point"})]})}function uT(){return $n.jsx(lT,{})}vv.createRoot(document.getElementById("root")).render($n.jsx(Ws.StrictMode,{children:$n.jsx(uT,{})}));
