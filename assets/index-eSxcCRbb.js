(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var wc={exports:{}},Fo={},Ac={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function iv(){if(Ip)return _t;Ip=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function y(I,re,Ie){this.props=I,this.context=re,this.refs=C,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=y.prototype;function U(I,re,Ie){this.props=I,this.context=re,this.refs=C,this.updater=Ie||S}var b=U.prototype=new _;b.constructor=U,E(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function W(I,re,Ie){var ee,me={},Me=null,ye=null;if(re!=null)for(ee in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Me=""+re.key),re)G.call(re,ee)&&!N.hasOwnProperty(ee)&&(me[ee]=re[ee]);var Re=arguments.length-2;if(Re===1)me.children=Ie;else if(1<Re){for(var Ze=Array(Re),Ye=0;Ye<Re;Ye++)Ze[Ye]=arguments[Ye+2];me.children=Ze}if(I&&I.defaultProps)for(ee in Re=I.defaultProps,Re)me[ee]===void 0&&(me[ee]=Re[ee]);return{$$typeof:s,type:I,key:Me,ref:ye,props:me,_owner:F.current}}function P(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function w(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return re[Ie]})}var ae=/\/+/g;function Q(I,re){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):re.toString(36)}function de(I,re,Ie,ee,me){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(Me){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case s:case e:ye=!0}}if(ye)return ye=I,me=me(ye),I=ee===""?"."+Q(ye,0):ee,R(me)?(Ie="",I!=null&&(Ie=I.replace(ae,"$&/")+"/"),de(me,re,Ie,"",function(Ye){return Ye})):me!=null&&(w(me)&&(me=P(me,Ie+(!me.key||ye&&ye.key===me.key?"":(""+me.key).replace(ae,"$&/")+"/")+I)),re.push(me)),1;if(ye=0,ee=ee===""?".":ee+":",R(I))for(var Re=0;Re<I.length;Re++){Me=I[Re];var Ze=ee+Q(Me,Re);ye+=de(Me,re,Ie,Ze,me)}else if(Ze=x(I),typeof Ze=="function")for(I=Ze.call(I),Re=0;!(Me=I.next()).done;)Me=Me.value,Ze=ee+Q(Me,Re++),ye+=de(Me,re,Ie,Ze,me);else if(Me==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function ge(I,re,Ie){if(I==null)return I;var ee=[],me=0;return de(I,ee,"","",function(Me){return re.call(Ie,Me,me++)}),ee}function oe(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},V={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ge,forEach:function(I,re,Ie){ge(I,function(){re.apply(this,arguments)},Ie)},count:function(I){var re=0;return ge(I,function(){re++}),re},toArray:function(I){return ge(I,function(re){return re})||[]},only:function(I){if(!w(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,_t.act=se,_t.cloneElement=function(I,re,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=E({},I.props),me=I.key,Me=I.ref,ye=I._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ye=F.current),re.key!==void 0&&(me=""+re.key),I.type&&I.type.defaultProps)var Re=I.type.defaultProps;for(Ze in re)G.call(re,Ze)&&!N.hasOwnProperty(Ze)&&(ee[Ze]=re[Ze]===void 0&&Re!==void 0?Re[Ze]:re[Ze])}var Ze=arguments.length-2;if(Ze===1)ee.children=Ie;else if(1<Ze){Re=Array(Ze);for(var Ye=0;Ye<Ze;Ye++)Re[Ye]=arguments[Ye+2];ee.children=Re}return{$$typeof:s,type:I.type,key:me,ref:Me,props:ee,_owner:ye}},_t.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=W,_t.createFactory=function(I){var re=W.bind(null,I);return re.type=I,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:c,render:I}},_t.isValidElement=w,_t.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:oe}},_t.memo=function(I,re){return{$$typeof:m,type:I,compare:re===void 0?null:re}},_t.startTransition=function(I){var re=V.transition;V.transition={};try{I()}finally{V.transition=re}},_t.unstable_act=se,_t.useCallback=function(I,re){return ce.current.useCallback(I,re)},_t.useContext=function(I){return ce.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},_t.useEffect=function(I,re){return ce.current.useEffect(I,re)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(I,re,Ie){return ce.current.useImperativeHandle(I,re,Ie)},_t.useInsertionEffect=function(I,re){return ce.current.useInsertionEffect(I,re)},_t.useLayoutEffect=function(I,re){return ce.current.useLayoutEffect(I,re)},_t.useMemo=function(I,re){return ce.current.useMemo(I,re)},_t.useReducer=function(I,re,Ie){return ce.current.useReducer(I,re,Ie)},_t.useRef=function(I){return ce.current.useRef(I)},_t.useState=function(I){return ce.current.useState(I)},_t.useSyncExternalStore=function(I,re,Ie){return ce.current.useSyncExternalStore(I,re,Ie)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var Np;function ed(){return Np||(Np=1,Ac.exports=iv()),Ac.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function rv(){if(Fp)return Fo;Fp=1;var s=ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,m){var g,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:x,ref:S,props:v,_owner:a.current}}return Fo.Fragment=t,Fo.jsx=f,Fo.jsxs=f,Fo}var Op;function sv(){return Op||(Op=1,wc.exports=rv()),wc.exports}var Xs=sv(),ff=ed(),sl={},Cc={exports:{}},Dn={},Rc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function ov(){return zp||(zp=1,function(s){function e(V,le){var se=V.length;V.push(le);e:for(;0<se;){var I=se-1>>>1,re=V[I];if(0<a(re,le))V[I]=le,V[se]=re,se=I;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],se=V.pop();if(se!==le){V[0]=se;e:for(var I=0,re=V.length,Ie=re>>>1;I<Ie;){var ee=2*(I+1)-1,me=V[ee],Me=ee+1,ye=V[Me];if(0>a(me,se))Me<re&&0>a(ye,me)?(V[I]=ye,V[Me]=se,I=Me):(V[I]=me,V[ee]=se,I=ee);else if(Me<re&&0>a(ye,se))V[I]=ye,V[Me]=se,I=Me;else break e}}return le}function a(V,le){var se=V.sortIndex-le.sortIndex;return se!==0?se:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],m=[],g=1,v=null,x=3,S=!1,E=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=V)r(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(m)}}function R(V){if(C=!1,b(V),!E)if(t(h)!==null)E=!0,oe(G);else{var le=t(m);le!==null&&ce(R,le.startTime-V)}}function G(V,le){E=!1,C&&(C=!1,_(W),W=-1),S=!0;var se=x;try{for(b(le),v=t(h);v!==null&&(!(v.expirationTime>le)||V&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var re=I(v.expirationTime<=le);le=s.unstable_now(),typeof re=="function"?v.callback=re:v===t(h)&&r(h),b(le)}else r(h);v=t(h)}if(v!==null)var Ie=!0;else{var ee=t(m);ee!==null&&ce(R,ee.startTime-le),Ie=!1}return Ie}finally{v=null,x=se,S=!1}}var F=!1,N=null,W=-1,P=5,w=-1;function H(){return!(s.unstable_now()-w<P)}function ae(){if(N!==null){var V=s.unstable_now();w=V;var le=!0;try{le=N(!0,V)}finally{le?Q():(F=!1,N=null)}}else F=!1}var Q;if(typeof U=="function")Q=function(){U(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=ae,Q=function(){ge.postMessage(null)}}else Q=function(){y(ae,0)};function oe(V){N=V,F||(F=!0,Q())}function ce(V,le){W=y(function(){V(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(G))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return V()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=x;x=V;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(V,le,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,V={id:g++,callback:le,priorityLevel:V,startTime:se,expirationTime:re,sortIndex:-1},se>I?(V.sortIndex=se,e(m,V),t(h)===null&&V===t(m)&&(C?(_(W),W=-1):C=!0,ce(R,se-I))):(V.sortIndex=re,e(h,V),E||S||(E=!0,oe(G))),V},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(V){var le=x;return function(){var se=x;x=le;try{return V.apply(this,arguments)}finally{x=se}}}}(Pc)),Pc}var Bp;function av(){return Bp||(Bp=1,Rc.exports=ov()),Rc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function lv(){if(kp)return Dn;kp=1;var s=ed(),e=av();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,I;function re(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ie=!1;function ee(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function me(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case P:return"Profiler";case W:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Ye(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ln(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function ct(n,i){pt(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function L(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function pe(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Oe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function k(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function O(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,ie=null,fe=null;function Ue(n){if(n=So(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ya(i),Te(n.stateNode,n.type,i))}}function be(n){ie?fe?fe.push(n):fe=[n]:ie=n}function et(){if(ie){var n=ie,i=fe;if(fe=ie=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function xt(n,i){return n(i)}function It(){}var mt=!1;function qt(n,i,o){if(mt)return n(i,o);mt=!0;try{return xt(n,i,o)}finally{mt=!1,(ie!==null||fe!==null)&&(It(),et())}}function jt(n,i){var o=n.stateNode;if(o===null)return null;var u=ya(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Qr=!1;if(c)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Qr=!1}function yi(n,i,o,u,d,p,M,D,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(xe){this.onError(xe)}}var Si=!1,wr=null,Ar=!1,Xi=null,Jo={onError:function(n){Si=!0,wr=n}};function es(n,i,o,u,d,p,M,D,B){Si=!1,wr=null,yi.apply(Jo,arguments)}function Qo(n,i,o,u,d,p,M,D,B){if(es.apply(this,arguments),Si){if(Si){var ne=wr;Si=!1,wr=null}else throw Error(t(198));Ar||(Ar=!0,Xi=ne)}}function ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ea(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ta(n){if(ci(n)!==n)throw Error(t(188))}function jl(n){var i=n.alternate;if(!i){if(i=ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return ta(d),n;if(p===u)return ta(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,u=p;break}if(D===u){M=!0,u=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,u=d;break}if(D===u){M=!0,u=p,o=d;break}D=D.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function na(n){return n=jl(n),n!==null?ia(n):null}function ia(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ia(n);if(i!==null)return i;n=n.sibling}return null}var ra=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,q=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,He=e.unstable_LowPriority,ot=e.unstable_IdlePriority,st=null,We=null;function yt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:St,Ht=Math.log,Ot=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Ht(n)/Ot|0)|0}var Je=64,Vt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?u=vt(D):(p&=M,p!==0&&(u=vt(p)))}else M=o&~d,M!==0?u=vt(M):p!==0&&(u=vt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ut(i),d=1<<o,u|=n[o],i&=~d;return u}function Yi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-ut(p),D=1<<M,B=d[M];B===-1?(!(D&o)||D&u)&&(d[M]=Yi(D,i)):B<=i&&(n.expiredLanes|=D),p&=~D}}function Mi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Dt(){var n=Je;return Je<<=1,!(Je&4194240)&&(Je=64),n}function hn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function tn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ut(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ut(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function nn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ut(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function fi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var hd,$l,pd,md,gd,Kl=!1,sa=[],qi=null,ji=null,$i=null,ro=new Map,so=new Map,Ki=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(i.pointerId)}}function oo(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=So(i),i!==null&&$l(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ag(n,i,o,u,d){switch(i){case"focusin":return qi=oo(qi,n,i,o,u,d),!0;case"dragenter":return ji=oo(ji,n,i,o,u,d),!0;case"mouseover":return $i=oo($i,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return ro.set(p,oo(ro.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,so.set(p,oo(so.get(p)||null,n,i,o,u,d)),!0}return!1}function vd(n){var i=Cr(n.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=ea(o),i!==null){n.blockedOn=i,gd(n.priority,function(){pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Jl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pe=u,o.target.dispatchEvent(u),Pe=null}else return i=So(o),i!==null&&$l(i),n.blockedOn=o,!1;i.shift()}return!0}function xd(n,i,o){oa(n)&&o.delete(i)}function Cg(){Kl=!1,qi!==null&&oa(qi)&&(qi=null),ji!==null&&oa(ji)&&(ji=null),$i!==null&&oa($i)&&($i=null),ro.forEach(xd),so.forEach(xd)}function ao(n,i){n.blockedOn===i&&(n.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cg)))}function lo(n){function i(d){return ao(d,n)}if(0<sa.length){ao(sa[0],n);for(var o=1;o<sa.length;o++){var u=sa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&ao(qi,n),ji!==null&&ao(ji,n),$i!==null&&ao($i,n),ro.forEach(i),so.forEach(i),o=0;o<Ki.length;o++)u=Ki[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)vd(o),o.blockedOn===null&&Ki.shift()}var ts=R.ReactCurrentBatchConfig,aa=!0;function Rg(n,i,o,u){var d=Mt,p=ts.transition;ts.transition=null;try{Mt=1,Zl(n,i,o,u)}finally{Mt=d,ts.transition=p}}function Pg(n,i,o,u){var d=Mt,p=ts.transition;ts.transition=null;try{Mt=4,Zl(n,i,o,u)}finally{Mt=d,ts.transition=p}}function Zl(n,i,o,u){if(aa){var d=Jl(n,i,o,u);if(d===null)mu(n,i,u,la,o),_d(n,u);else if(Ag(d,n,i,o,u))u.stopPropagation();else if(_d(n,u),i&4&&-1<wg.indexOf(n)){for(;d!==null;){var p=So(d);if(p!==null&&hd(p),p=Jl(n,i,o,u),p===null&&mu(n,i,u,la,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else mu(n,i,u,null,o)}}var la=null;function Jl(n,i,o,u){if(la=null,n=O(u),n=Cr(n),n!==null)if(i=ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ea(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return la=n,null}function yd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case we:return 1;case Le:return 4;case Ne:case He:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Zi=null,Ql=null,ua=null;function Sd(){if(ua)return ua;var n,i=Ql,o=i.length,u,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===d[p-u];u++);return ua=d.slice(n,1<u?1-u:void 0)}function ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function fa(){return!0}function Md(){return!1}function Nn(n){function i(o,u,d,p,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fa:Md,this.isPropagationStopped=Md,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Nn(ns),uo=se({},ns,{view:0,detail:0}),bg=Nn(uo),tu,nu,co,da=se({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==co&&(co&&n.type==="mousemove"?(tu=n.screenX-co.screenX,nu=n.screenY-co.screenY):nu=tu=0,co=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),Ed=Nn(da),Lg=se({},da,{dataTransfer:0}),Dg=Nn(Lg),Ug=se({},uo,{relatedTarget:0}),iu=Nn(Ug),Ig=se({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=Nn(Ig),Fg=se({},ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Og=Nn(Fg),zg=se({},ns,{data:0}),Td=Nn(zg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hg[n])?!!i[n]:!1}function ru(){return Vg}var Gg=se({},uo,{key:function(n){if(n.key){var i=Bg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(n){return n.type==="keypress"?ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=Nn(Gg),Xg=se({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Nn(Xg),Yg=se({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),qg=Nn(Yg),jg=se({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=Nn(jg),Kg=se({},da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Nn(Kg),Jg=[9,13,27,32],su=c&&"CompositionEvent"in window,fo=null;c&&"documentMode"in document&&(fo=document.documentMode);var Qg=c&&"TextEvent"in window&&!fo,Ad=c&&(!su||fo&&8<fo&&11>=fo),Cd=" ",Rd=!1;function Pd(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var is=!1;function e_(n,i){switch(n){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Rd=!0,Cd);case"textInput":return n=i.data,n===Cd&&Rd?null:n;default:return null}}function t_(n,i){if(is)return n==="compositionend"||!su&&Pd(n,i)?(n=Sd(),ua=Ql=Zi=null,is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ad&&i.locale!=="ko"?null:i.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!n_[n.type]:i==="textarea"}function Dd(n,i,o,u){be(u),i=_a(i,"onChange"),0<i.length&&(o=new eu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var ho=null,po=null;function i_(n){Kd(n,0)}function ha(n){var i=ls(n);if(Rt(i))return n}function r_(n,i){if(n==="change")return i}var Ud=!1;if(c){var ou;if(c){var au="oninput"in document;if(!au){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),au=typeof Id.oninput=="function"}ou=au}else ou=!1;Ud=ou&&(!document.documentMode||9<document.documentMode)}function Nd(){ho&&(ho.detachEvent("onpropertychange",Fd),po=ho=null)}function Fd(n){if(n.propertyName==="value"&&ha(po)){var i=[];Dd(i,po,n,O(n)),qt(i_,i)}}function s_(n,i,o){n==="focusin"?(Nd(),ho=i,po=o,ho.attachEvent("onpropertychange",Fd)):n==="focusout"&&Nd()}function o_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ha(po)}function a_(n,i){if(n==="click")return ha(i)}function l_(n,i){if(n==="input"||n==="change")return ha(i)}function u_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Zn=typeof Object.is=="function"?Object.is:u_;function mo(n,i){if(Zn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Zn(n[d],i[d]))return!1}return!0}function Od(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zd(n,i){var o=Od(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function Bd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kd(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=lt(n.document)}return i}function lu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function c_(n){var i=kd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Bd(o.ownerDocument.documentElement,o)){if(u!==null&&lu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=zd(o,p);var M=zd(o,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var f_=c&&"documentMode"in document&&11>=document.documentMode,rs=null,uu=null,go=null,cu=!1;function Hd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cu||rs==null||rs!==lt(u)||(u=rs,"selectionStart"in u&&lu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),go&&mo(go,u)||(go=u,u=_a(uu,"onSelect"),0<u.length&&(i=new eu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=rs)))}function pa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ss={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},fu={},Vd={};c&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ma(n){if(fu[n])return fu[n];if(!ss[n])return n;var i=ss[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Vd)return fu[n]=i[o];return n}var Gd=ma("animationend"),Wd=ma("animationiteration"),Xd=ma("animationstart"),Yd=ma("transitionend"),qd=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){qd.set(n,i),l(i,[n])}for(var du=0;du<jd.length;du++){var hu=jd[du],d_=hu.toLowerCase(),h_=hu[0].toUpperCase()+hu.slice(1);Ji(d_,"on"+h_)}Ji(Gd,"onAnimationEnd"),Ji(Wd,"onAnimationIteration"),Ji(Xd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Yd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function $d(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Qo(u,i,void 0,n),n.currentTarget=null}function Kd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var D=u[M],B=D.instance,ne=D.currentTarget;if(D=D.listener,B!==p&&d.isPropagationStopped())break e;$d(d,D,ne),p=B}else for(M=0;M<u.length;M++){if(D=u[M],B=D.instance,ne=D.currentTarget,D=D.listener,B!==p&&d.isPropagationStopped())break e;$d(d,D,ne),p=B}}}if(Ar)throw n=Xi,Ar=!1,Xi=null,n}function Nt(n,i){var o=i[Su];o===void 0&&(o=i[Su]=new Set);var u=n+"__bubble";o.has(u)||(Zd(i,n,2,!1),o.add(u))}function pu(n,i,o){var u=0;i&&(u|=4),Zd(o,n,u,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function vo(n){if(!n[ga]){n[ga]=!0,r.forEach(function(o){o!=="selectionchange"&&(p_.has(o)||pu(o,!1,n),pu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ga]||(i[ga]=!0,pu("selectionchange",!1,i))}}function Zd(n,i,o,u){switch(yd(i)){case 1:var d=Rg;break;case 4:d=Pg;break;default:d=Zl}o=d.bind(null,i,o,n),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function mu(n,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;D!==null;){if(M=Cr(D),M===null)return;if(B=M.tag,B===5||B===6){u=p=M;continue e}D=D.parentNode}}u=u.return}qt(function(){var ne=p,xe=O(o),Se=[];e:{var ve=qd.get(n);if(ve!==void 0){var Fe=eu,Ve=n;switch(n){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Fe=Wg;break;case"focusin":Ve="focus",Fe=iu;break;case"focusout":Ve="blur",Fe=iu;break;case"beforeblur":case"afterblur":Fe=iu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=qg;break;case Gd:case Wd:case Xd:Fe=Ng;break;case Yd:Fe=$g;break;case"scroll":Fe=bg;break;case"wheel":Fe=Zg;break;case"copy":case"cut":case"paste":Fe=Og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=wd}var je=(i&4)!==0,Xt=!je&&n==="scroll",$=je?ve!==null?ve+"Capture":null:ve;je=[];for(var X=ne,J;X!==null;){J=X;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,$!==null&&(Ae=jt(X,$),Ae!=null&&je.push(xo(X,Ae,J)))),Xt)break;X=X.return}0<je.length&&(ve=new Fe(ve,Ve,null,o,xe),Se.push({event:ve,listeners:je}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ve&&o!==Pe&&(Ve=o.relatedTarget||o.fromElement)&&(Cr(Ve)||Ve[Ei]))break e;if((Fe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Fe?(Ve=o.relatedTarget||o.toElement,Fe=ne,Ve=Ve?Cr(Ve):null,Ve!==null&&(Xt=ci(Ve),Ve!==Xt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ne),Fe!==Ve)){if(je=Ed,Ae="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(je=wd,Ae="onPointerLeave",$="onPointerEnter",X="pointer"),Xt=Fe==null?ve:ls(Fe),J=Ve==null?ve:ls(Ve),ve=new je(Ae,X+"leave",Fe,o,xe),ve.target=Xt,ve.relatedTarget=J,Ae=null,Cr(xe)===ne&&(je=new je($,X+"enter",Ve,o,xe),je.target=J,je.relatedTarget=Xt,Ae=je),Xt=Ae,Fe&&Ve)t:{for(je=Fe,$=Ve,X=0,J=je;J;J=os(J))X++;for(J=0,Ae=$;Ae;Ae=os(Ae))J++;for(;0<X-J;)je=os(je),X--;for(;0<J-X;)$=os($),J--;for(;X--;){if(je===$||$!==null&&je===$.alternate)break t;je=os(je),$=os($)}je=null}else je=null;Fe!==null&&Jd(Se,ve,Fe,je,!1),Ve!==null&&Xt!==null&&Jd(Se,Xt,Ve,je,!0)}}e:{if(ve=ne?ls(ne):window,Fe=ve.nodeName&&ve.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ve.type==="file")var $e=r_;else if(Ld(ve))if(Ud)$e=l_;else{$e=o_;var tt=s_}else(Fe=ve.nodeName)&&Fe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=a_);if($e&&($e=$e(n,ne))){Dd(Se,$e,o,xe);break e}tt&&tt(n,ve,ne),n==="focusout"&&(tt=ve._wrapperState)&&tt.controlled&&ve.type==="number"&&Tt(ve,"number",ve.value)}switch(tt=ne?ls(ne):window,n){case"focusin":(Ld(tt)||tt.contentEditable==="true")&&(rs=tt,uu=ne,go=null);break;case"focusout":go=uu=rs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Hd(Se,o,xe);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":Hd(Se,o,xe)}var nt;if(su)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else is?Pd(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Ad&&o.locale!=="ko"&&(is||at!=="onCompositionStart"?at==="onCompositionEnd"&&is&&(nt=Sd()):(Zi=xe,Ql="value"in Zi?Zi.value:Zi.textContent,is=!0)),tt=_a(ne,at),0<tt.length&&(at=new Td(at,n,null,o,xe),Se.push({event:at,listeners:tt}),nt?at.data=nt:(nt=bd(o),nt!==null&&(at.data=nt)))),(nt=Qg?e_(n,o):t_(n,o))&&(ne=_a(ne,"onBeforeInput"),0<ne.length&&(xe=new Td("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ne}),xe.data=nt))}Kd(Se,i)})}function xo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function _a(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=jt(n,o),p!=null&&u.unshift(xo(n,p,d)),p=jt(n,i),p!=null&&u.push(xo(n,p,d))),n=n.return}return u}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jd(n,i,o,u,d){for(var p=i._reactName,M=[];o!==null&&o!==u;){var D=o,B=D.alternate,ne=D.stateNode;if(B!==null&&B===u)break;D.tag===5&&ne!==null&&(D=ne,d?(B=jt(o,p),B!=null&&M.unshift(xo(o,B,D))):d||(B=jt(o,p),B!=null&&M.push(xo(o,B,D)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function Qd(n){return(typeof n=="string"?n:""+n).replace(m_,`
`).replace(g_,"")}function va(n,i,o){if(i=Qd(i),Qd(n)!==i&&o)throw Error(t(425))}function xa(){}var gu=null,_u=null;function vu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,__=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(n){return eh.resolve(null).then(n).catch(x_)}:xu;function x_(n){setTimeout(function(){throw n})}function yu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),lo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);lo(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var as=Math.random().toString(36).slice(2),di="__reactFiber$"+as,yo="__reactProps$"+as,Ei="__reactContainer$"+as,Su="__reactEvents$"+as,y_="__reactListeners$"+as,S_="__reactHandles$"+as;function Cr(n){var i=n[di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ei]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=th(n);n!==null;){if(o=n[di])return o;n=th(n)}return i}n=o,o=n.parentNode}return null}function So(n){return n=n[di]||n[Ei],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ya(n){return n[yo]||null}var Mu=[],us=-1;function er(n){return{current:n}}function Ft(n){0>us||(n.current=Mu[us],Mu[us]=null,us--)}function Ut(n,i){us++,Mu[us]=n.current,n.current=i}var tr={},pn=er(tr),Cn=er(!1),Rr=tr;function cs(n,i){var o=n.type.contextTypes;if(!o)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Sa(){Ft(Cn),Ft(pn)}function nh(n,i,o){if(pn.current!==tr)throw Error(t(168));Ut(pn,i),Ut(Cn,o)}function ih(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return se({},o,u)}function Ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Rr=pn.current,Ut(pn,n),Ut(Cn,Cn.current),!0}function rh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=ih(n,i,Rr),u.__reactInternalMemoizedMergedChildContext=n,Ft(Cn),Ft(pn),Ut(pn,n)):Ft(Cn),Ut(Cn,o)}var Ti=null,Ea=!1,Eu=!1;function sh(n){Ti===null?Ti=[n]:Ti.push(n)}function M_(n){Ea=!0,sh(n)}function nr(){if(!Eu&&Ti!==null){Eu=!0;var n=0,i=Mt;try{var o=Ti;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ti=null,Ea=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),ra(we,nr),d}finally{Mt=i,Eu=!1}}return null}var fs=[],ds=0,Ta=null,wa=0,Vn=[],Gn=0,Pr=null,wi=1,Ai="";function br(n,i){fs[ds++]=wa,fs[ds++]=Ta,Ta=n,wa=i}function oh(n,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Pr,Pr=n;var u=wi;n=Ai;var d=32-ut(u)-1;u&=~(1<<d),o+=1;var p=32-ut(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,wi=1<<32-ut(i)+d|o<<d|u,Ai=p+n}else wi=1<<p|o<<d|u,Ai=n}function Tu(n){n.return!==null&&(br(n,1),oh(n,1,0))}function wu(n){for(;n===Ta;)Ta=fs[--ds],fs[ds]=null,wa=fs[--ds],fs[ds]=null;for(;n===Pr;)Pr=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var Fn=null,On=null,zt=!1,Jn=null;function ah(n,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function lh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Fn=n,On=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cu(n){if(zt){var i=On;if(i){var o=i;if(!lh(n,i)){if(Au(n))throw Error(t(418));i=Qi(o.nextSibling);var u=Fn;i&&lh(n,i)?ah(u,o):(n.flags=n.flags&-4097|2,zt=!1,Fn=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Fn=n}}}function uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function Aa(n){if(n!==Fn)return!1;if(!zt)return uh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!vu(n.type,n.memoizedProps)),i&&(i=On)){if(Au(n))throw ch(),Error(t(418));for(;i;)ah(n,i),i=Qi(i.nextSibling)}if(uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){On=Qi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?Qi(n.stateNode.nextSibling):null;return!0}function ch(){for(var n=On;n;)n=Qi(n.nextSibling)}function hs(){On=Fn=null,zt=!1}function Ru(n){Jn===null?Jn=[n]:Jn.push(n)}var E_=R.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ca(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function fh(n){var i=n._init;return i(n._payload)}function dh(n){function i($,X){if(n){var J=$.deletions;J===null?($.deletions=[X],$.flags|=16):J.push(X)}}function o($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function u($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function d($,X){return $=cr($,X),$.index=0,$.sibling=null,$}function p($,X,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<X?($.flags|=2,X):J):($.flags|=2,X)):($.flags|=1048576,X)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function D($,X,J,Ae){return X===null||X.tag!==6?(X=xc(J,$.mode,Ae),X.return=$,X):(X=d(X,J),X.return=$,X)}function B($,X,J,Ae){var $e=J.type;return $e===N?xe($,X,J.props.children,Ae,J.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&fh($e)===X.type)?(Ae=d(X,J.props),Ae.ref=Mo($,X,J),Ae.return=$,Ae):(Ae=Za(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Mo($,X,J),Ae.return=$,Ae)}function ne($,X,J,Ae){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=yc(J,$.mode,Ae),X.return=$,X):(X=d(X,J.children||[]),X.return=$,X)}function xe($,X,J,Ae,$e){return X===null||X.tag!==7?(X=zr(J,$.mode,Ae,$e),X.return=$,X):(X=d(X,J),X.return=$,X)}function Se($,X,J){if(typeof X=="string"&&X!==""||typeof X=="number")return X=xc(""+X,$.mode,J),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case G:return J=Za(X.type,X.key,X.props,null,$.mode,J),J.ref=Mo($,null,X),J.return=$,J;case F:return X=yc(X,$.mode,J),X.return=$,X;case oe:var Ae=X._init;return Se($,Ae(X._payload),J)}if(qe(X)||le(X))return X=zr(X,$.mode,J,null),X.return=$,X;Ca($,X)}return null}function ve($,X,J,Ae){var $e=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return $e!==null?null:D($,X,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case G:return J.key===$e?B($,X,J,Ae):null;case F:return J.key===$e?ne($,X,J,Ae):null;case oe:return $e=J._init,ve($,X,$e(J._payload),Ae)}if(qe(J)||le(J))return $e!==null?null:xe($,X,J,Ae,null);Ca($,J)}return null}function Fe($,X,J,Ae,$e){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(J)||null,D(X,$,""+Ae,$e);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case G:return $=$.get(Ae.key===null?J:Ae.key)||null,B(X,$,Ae,$e);case F:return $=$.get(Ae.key===null?J:Ae.key)||null,ne(X,$,Ae,$e);case oe:var tt=Ae._init;return Fe($,X,J,tt(Ae._payload),$e)}if(qe(Ae)||le(Ae))return $=$.get(J)||null,xe(X,$,Ae,$e,null);Ca(X,Ae)}return null}function Ve($,X,J,Ae){for(var $e=null,tt=null,nt=X,at=X=0,on=null;nt!==null&&at<J.length;at++){nt.index>at?(on=nt,nt=null):on=nt.sibling;var wt=ve($,nt,J[at],Ae);if(wt===null){nt===null&&(nt=on);break}n&&nt&&wt.alternate===null&&i($,nt),X=p(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt,nt=on}if(at===J.length)return o($,nt),zt&&br($,at),$e;if(nt===null){for(;at<J.length;at++)nt=Se($,J[at],Ae),nt!==null&&(X=p(nt,X,at),tt===null?$e=nt:tt.sibling=nt,tt=nt);return zt&&br($,at),$e}for(nt=u($,nt);at<J.length;at++)on=Fe(nt,$,at,J[at],Ae),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?at:on.key),X=p(on,X,at),tt===null?$e=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(fr){return i($,fr)}),zt&&br($,at),$e}function je($,X,J,Ae){var $e=le(J);if(typeof $e!="function")throw Error(t(150));if(J=$e.call(J),J==null)throw Error(t(151));for(var tt=$e=null,nt=X,at=X=0,on=null,wt=J.next();nt!==null&&!wt.done;at++,wt=J.next()){nt.index>at?(on=nt,nt=null):on=nt.sibling;var fr=ve($,nt,wt.value,Ae);if(fr===null){nt===null&&(nt=on);break}n&&nt&&fr.alternate===null&&i($,nt),X=p(fr,X,at),tt===null?$e=fr:tt.sibling=fr,tt=fr,nt=on}if(wt.done)return o($,nt),zt&&br($,at),$e;if(nt===null){for(;!wt.done;at++,wt=J.next())wt=Se($,wt.value,Ae),wt!==null&&(X=p(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return zt&&br($,at),$e}for(nt=u($,nt);!wt.done;at++,wt=J.next())wt=Fe(nt,$,at,wt.value,Ae),wt!==null&&(n&&wt.alternate!==null&&nt.delete(wt.key===null?at:wt.key),X=p(wt,X,at),tt===null?$e=wt:tt.sibling=wt,tt=wt);return n&&nt.forEach(function(nv){return i($,nv)}),zt&&br($,at),$e}function Xt($,X,J,Ae){if(typeof J=="object"&&J!==null&&J.type===N&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case G:e:{for(var $e=J.key,tt=X;tt!==null;){if(tt.key===$e){if($e=J.type,$e===N){if(tt.tag===7){o($,tt.sibling),X=d(tt,J.props.children),X.return=$,$=X;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===oe&&fh($e)===tt.type){o($,tt.sibling),X=d(tt,J.props),X.ref=Mo($,tt,J),X.return=$,$=X;break e}o($,tt);break}else i($,tt);tt=tt.sibling}J.type===N?(X=zr(J.props.children,$.mode,Ae,J.key),X.return=$,$=X):(Ae=Za(J.type,J.key,J.props,null,$.mode,Ae),Ae.ref=Mo($,X,J),Ae.return=$,$=Ae)}return M($);case F:e:{for(tt=J.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){o($,X.sibling),X=d(X,J.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=yc(J,$.mode,Ae),X.return=$,$=X}return M($);case oe:return tt=J._init,Xt($,X,tt(J._payload),Ae)}if(qe(J))return Ve($,X,J,Ae);if(le(J))return je($,X,J,Ae);Ca($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,X!==null&&X.tag===6?(o($,X.sibling),X=d(X,J),X.return=$,$=X):(o($,X),X=xc(J,$.mode,Ae),X.return=$,$=X),M($)):o($,X)}return Xt}var ps=dh(!0),hh=dh(!1),Ra=er(null),Pa=null,ms=null,Pu=null;function bu(){Pu=ms=Pa=null}function Lu(n){var i=Ra.current;Ft(Ra),n._currentValue=i}function Du(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function gs(n,i){Pa=n,Pu=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Pn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:i,next:null},ms===null){if(Pa===null)throw Error(t(308));ms=n,Pa.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return i}var Lr=null;function Uu(n){Lr===null?Lr=[n]:Lr.push(n)}function ph(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Uu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ci(n,u)}function Ci(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ir=!1;function Iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ri(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,Et&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ci(n,o)}return d=u.interleaved,d===null?(i.next=i,Uu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ci(n,o)}function ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}function gh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function La(n,i,o,u){var d=n.updateQueue;ir=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var B=D,ne=B.next;B.next=null,M===null?p=ne:M.next=ne,M=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==M&&(D===null?xe.firstBaseUpdate=ne:D.next=ne,xe.lastBaseUpdate=B))}if(p!==null){var Se=d.baseState;M=0,xe=ne=B=null,D=p;do{var ve=D.lane,Fe=D.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=n,je=D;switch(ve=i,Fe=o,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,ve);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,ve=typeof Ve=="function"?Ve.call(Fe,Se,ve):Ve,ve==null)break e;Se=se({},Se,ve);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[D]:ve.push(D))}else Fe={eventTime:Fe,lane:ve,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(ne=xe=Fe,B=Se):xe=xe.next=Fe,M|=ve;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ve=D,D=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ir|=M,n.lanes=M,n.memoizedState=Se}}function _h(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Eo={},hi=er(Eo),To=er(Eo),wo=er(Eo);function Dr(n){if(n===Eo)throw Error(t(174));return n}function Nu(n,i){switch(Ut(wo,i),Ut(To,n),Ut(hi,Eo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(hi),Ut(hi,i)}function _s(){Ft(hi),Ft(To),Ft(wo)}function vh(n){Dr(wo.current);var i=Dr(hi.current),o=Ge(i,n.type);i!==o&&(Ut(To,n),Ut(hi,o))}function Fu(n){To.current===n&&(Ft(hi),Ft(To))}var Bt=er(0);function Da(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var Ua=R.ReactCurrentDispatcher,Bu=R.ReactCurrentBatchConfig,Ur=0,kt=null,Zt=null,rn=null,Ia=!1,Ao=!1,Co=0,T_=0;function mn(){throw Error(t(321))}function ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Zn(n[o],i[o]))return!1;return!0}function Hu(n,i,o,u,d,p){if(Ur=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=n===null||n.memoizedState===null?R_:P_,n=o(u,d),Ao){p=0;do{if(Ao=!1,Co=0,25<=p)throw Error(t(301));p+=1,rn=Zt=null,i.updateQueue=null,Ua.current=b_,n=o(u,d)}while(Ao)}if(Ua.current=Oa,i=Zt!==null&&Zt.next!==null,Ur=0,rn=Zt=kt=null,Ia=!1,i)throw Error(t(300));return n}function Vu(){var n=Co!==0;return Co=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?kt.memoizedState=rn=n:rn=rn.next=n,rn}function Xn(){if(Zt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?kt.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?kt.memoizedState=rn=n:rn=rn.next=n}return rn}function Ro(n,i){return typeof i=="function"?i(n):i}function Gu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var D=M=null,B=null,ne=p;do{var xe=ne.lane;if((Ur&xe)===xe)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Se={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(D=B=Se,M=u):B=B.next=Se,kt.lanes|=xe,Ir|=xe}ne=ne.next}while(ne!==null&&ne!==p);B===null?M=u:B.next=D,Zn(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,kt.lanes|=p,Ir|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Wu(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);Zn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function xh(){}function yh(n,i){var o=kt,u=Xn(),d=i(),p=!Zn(u.memoizedState,d);if(p&&(u.memoizedState=d,Pn=!0),u=u.queue,Xu(Eh.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Po(9,Mh.bind(null,o,u,d,i),void 0,null),sn===null)throw Error(t(349));Ur&30||Sh(o,i,d)}return d}function Sh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Mh(n,i,o,u){i.value=o,i.getSnapshot=u,Th(i)&&wh(n)}function Eh(n,i,o){return o(function(){Th(i)&&wh(n)})}function Th(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Zn(n,o)}catch{return!0}}function wh(n){var i=Ci(n,1);i!==null&&ni(i,n,1,-1)}function Ah(n){var i=pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},i.queue=n,n=n.dispatch=C_.bind(null,kt,n),[i.memoizedState,n]}function Po(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Ch(){return Xn().memoizedState}function Na(n,i,o,u){var d=pi();kt.flags|=n,d.memoizedState=Po(1|i,o,void 0,u===void 0?null:u)}function Fa(n,i,o,u){var d=Xn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,u!==null&&ku(u,M.deps)){d.memoizedState=Po(i,o,p,u);return}}kt.flags|=n,d.memoizedState=Po(1|i,o,p,u)}function Rh(n,i){return Na(8390656,8,n,i)}function Xu(n,i){return Fa(2048,8,n,i)}function Ph(n,i){return Fa(4,2,n,i)}function bh(n,i){return Fa(4,4,n,i)}function Lh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dh(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4,4,Lh.bind(null,i,n),o)}function Yu(){}function Uh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Ih(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Nh(n,i,o){return Ur&21?(Zn(o,i)||(o=Dt(),kt.lanes|=o,Ir|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=o)}function w_(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Bu.transition;Bu.transition={};try{n(!1),i()}finally{Mt=o,Bu.transition=u}}function Fh(){return Xn().memoizedState}function A_(n,i,o){var u=lr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Oh(n))zh(i,o);else if(o=ph(n,i,o,u),o!==null){var d=Mn();ni(o,n,u,d),Bh(o,i,u)}}function C_(n,i,o){var u=lr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Oh(n))zh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,Zn(D,M)){var B=i.interleaved;B===null?(d.next=d,Uu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=ph(n,i,d,u),o!==null&&(d=Mn(),ni(o,n,u,d),Bh(o,i,u))}}function Oh(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function zh(n,i){Ao=Ia=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Bh(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,nn(n,o)}}var Oa={readContext:Wn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},R_={readContext:Wn,useCallback:function(n,i){return pi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Rh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Na(4194308,4,Lh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Na(4194308,4,n,i)},useInsertionEffect:function(n,i){return Na(4,2,n,i)},useMemo:function(n,i){var o=pi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=A_.bind(null,kt,n),[u.memoizedState,n]},useRef:function(n){var i=pi();return n={current:n},i.memoizedState=n},useState:Ah,useDebugValue:Yu,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=Ah(!1),i=n[0];return n=w_.bind(null,n[1]),pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=kt,d=pi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),sn===null)throw Error(t(349));Ur&30||Sh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Rh(Eh.bind(null,u,p,n),[n]),u.flags|=2048,Po(9,Mh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=pi(),i=sn.identifierPrefix;if(zt){var o=Ai,u=wi;o=(u&~(1<<32-ut(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=T_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},P_={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Xu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Ih,useReducer:Gu,useRef:Ch,useState:function(){return Gu(Ro)},useDebugValue:Yu,useDeferredValue:function(n){var i=Xn();return Nh(i,Zt.memoizedState,n)},useTransition:function(){var n=Gu(Ro)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1},b_={readContext:Wn,useCallback:Uh,useContext:Wn,useEffect:Xu,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:bh,useMemo:Ih,useReducer:Wu,useRef:Ch,useState:function(){return Wu(Ro)},useDebugValue:Yu,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Nh(i,Zt.memoizedState,n)},useTransition:function(){var n=Wu(Ro)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:xh,useSyncExternalStore:yh,useId:Fh,unstable_isNewReconciler:!1};function Qn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function qu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var za={isMounted:function(n){return(n=n._reactInternals)?ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=lr(n),p=Ri(u,d);p.payload=i,o!=null&&(p.callback=o),i=rr(n,p,d),i!==null&&(ni(i,n,d,u),ba(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=lr(n),p=Ri(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(n,p,d),i!==null&&(ni(i,n,d,u),ba(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=lr(n),d=Ri(o,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ni(i,n,u,o),ba(i,n,u))}};function kh(n,i,o,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!mo(o,u)||!mo(d,p):!0}function Hh(n,i,o){var u=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(d=Rn(i)?Rr:pn.current,u=i.contextTypes,p=(u=u!=null)?cs(n,d):tr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Vh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&za.enqueueReplaceState(i,i.state,null)}function ju(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Iu(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wn(p):(p=Rn(i)?Rr:pn.current,d.context=cs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(qu(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&za.enqueueReplaceState(d,d.state,null),La(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vs(n,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function $u(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ku(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function Gh(n,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Xa||(Xa=!0,fc=u),Ku(n,i)},o}function Wh(n,i,o){o=Ri(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ku(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ku(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Xh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new L_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=X_.bind(null,n,i,o),i.then(n,n))}function Yh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qh(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),n)}var D_=R.ReactCurrentOwner,Pn=!1;function Sn(n,i,o,u){i.child=n===null?hh(i,null,o,u):ps(i,n.child,o,u)}function jh(n,i,o,u,d){o=o.render;var p=i.ref;return gs(i,d),u=Hu(n,i,o,u,p,d),o=Vu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&o&&Tu(i),i.flags|=1,Sn(n,i,u,d),i.child)}function $h(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!vc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Kh(n,i,p,u,d)):(n=Za(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!(n.lanes&d)){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(M,u)&&n.ref===i.ref)return Pi(n,i,d)}return i.flags|=1,n=cr(p,u),n.ref=i.ref,n.return=i,i.child=n}function Kh(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(mo(p,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)n.flags&131072&&(Pn=!0);else return i.lanes=n.lanes,Pi(n,i,d)}return Zu(n,i,o,u,d)}function Zh(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(ys,zn),zn|=o;else{if(!(o&1073741824))return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(ys,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Ut(ys,zn),zn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Ut(ys,zn),zn|=u;return Sn(n,i,d,o),i.child}function Jh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Zu(n,i,o,u,d){var p=Rn(o)?Rr:pn.current;return p=cs(i,p),gs(i,d),o=Hu(n,i,o,u,p,d),u=Vu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&u&&Tu(i),i.flags|=1,Sn(n,i,o,d),i.child)}function Qh(n,i,o,u,d){if(Rn(o)){var p=!0;Ma(i)}else p=!1;if(gs(i,d),i.stateNode===null)ka(n,i),Hh(i,o,u),ju(i,o,u,d),u=!0;else if(n===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var B=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Wn(ne):(ne=Rn(o)?Rr:pn.current,ne=cs(i,ne));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==u||B!==ne)&&Vh(i,M,u,ne),ir=!1;var ve=i.memoizedState;M.state=ve,La(i,u,M,d),B=i.memoizedState,D!==u||ve!==B||Cn.current||ir?(typeof xe=="function"&&(qu(i,o,xe,u),B=i.memoizedState),(D=ir||kh(i,o,D,u,ve,B,ne))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=ne,u=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,mh(n,i),D=i.memoizedProps,ne=i.type===i.elementType?D:Qn(i.type,D),M.props=ne,Se=i.pendingProps,ve=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Wn(B):(B=Rn(o)?Rr:pn.current,B=cs(i,B));var Fe=o.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Se||ve!==B)&&Vh(i,M,u,B),ir=!1,ve=i.memoizedState,M.state=ve,La(i,u,M,d);var Ve=i.memoizedState;D!==Se||ve!==Ve||Cn.current||ir?(typeof Fe=="function"&&(qu(i,o,Fe,u),Ve=i.memoizedState),(ne=ir||kh(i,o,ne,u,ve,Ve,B)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=B,u=ne):(typeof M.componentDidUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return Ju(n,i,o,u,p,d)}function Ju(n,i,o,u,d,p){Jh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&rh(i,o,!1),Pi(n,i,p);u=i.stateNode,D_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ps(i,n.child,null,p),i.child=ps(i,null,D,p)):Sn(n,i,D,p),i.memoizedState=u.state,d&&rh(i,o,!0),i.child}function ep(n){var i=n.stateNode;i.pendingContext?nh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(n,i.context,!1),Nu(n,i.containerInfo)}function tp(n,i,o,u,d){return hs(),Ru(d),i.flags|=256,Sn(n,i,o,u),i.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ec(n){return{baseLanes:n,cachePool:null,transitions:null}}function np(n,i,o){var u=i.pendingProps,d=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Bt,d&1),n===null)return Cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ja(M,u,0,null),n=zr(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=ec(o),i.memoizedState=Qu,n):tc(i,M));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return U_(n,i,M,u,D,d,o);if(p){p=u.fallback,M=i.mode,d=n.child,D=d.sibling;var B={mode:"hidden",children:u.children};return!(M&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=cr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=cr(D,p):(p=zr(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?ec(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~o,i.memoizedState=Qu,u}return p=n.child,n=p.sibling,u=cr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function tc(n,i){return i=Ja({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,u){return u!==null&&Ru(u),ps(i,n.child,null,o),n=tc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U_(n,i,o,u,d,p,M){if(o)return i.flags&256?(i.flags&=-257,u=$u(Error(t(422))),Ba(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Ja({mode:"visible",children:u.children},d,0,null),p=zr(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&ps(i,n.child,null,M),i.child.memoizedState=ec(M),i.memoizedState=Qu,p);if(!(i.mode&1))return Ba(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,p=Error(t(419)),u=$u(p,u,void 0),Ba(n,i,M,u)}if(D=(M&n.childLanes)!==0,Pn||D){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|M)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ci(n,d),ni(u,n,d,-1))}return _c(),u=$u(Error(t(421))),Ba(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Y_.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,On=Qi(d.nextSibling),Fn=i,zt=!0,Jn=null,n!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Pr,wi=n.id,Ai=n.overflow,Pr=i),i=tc(i,u.children),i.flags|=4096,i)}function ip(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Du(n.return,i,o)}function nc(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function rp(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Sn(n,i,u.children,o),u=Bt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ip(n,o,i);else if(n.tag===19)ip(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ut(Bt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Da(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),nc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Da(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}nc(i,!0,o,null,p);break;case"together":nc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=cr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=cr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function I_(n,i,o){switch(i.tag){case 3:ep(i),hs();break;case 5:vh(i);break;case 1:Rn(i.type)&&Ma(i);break;case 4:Nu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ut(Ra,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):o&i.child.childLanes?np(n,i,o):(Ut(Bt,Bt.current&1),n=Pi(n,i,o),n!==null?n.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return rp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,Zh(n,i,o)}return Pi(n,i,o)}var sp,ic,op,ap;sp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ic=function(){},op=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Dr(hi.current);var p=null;switch(o){case"input":d=z(n,d),u=z(n,u),p=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),p=[];break;case"textarea":d=T(n,d),u=T(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=xa)}k(o,u);var M;o=null;for(ne in d)if(!u.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var D=d[ne];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var B=u[ne];if(D=d!=null?d[ne]:void 0,u.hasOwnProperty(ne)&&B!==D&&(B!=null||D!=null))if(ne==="style")if(D){for(M in D)!D.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&D[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(p||(p=[]),p.push(ne,o)),o=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(p=p||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&Nt("scroll",n),p||D===B||(p=[])):(p=p||[]).push(ne,B))}o&&(p=p||[]).push("style",o);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},ap=function(n,i,o,u){o!==u&&(i.flags|=4)};function bo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function N_(n,i,o){var u=i.pendingProps;switch(wu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Sa(),gn(i),null;case 3:return u=i.stateNode,_s(),Ft(Cn),Ft(pn),zu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Aa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Jn!==null&&(pc(Jn),Jn=null))),ic(n,i),gn(i),null;case 5:Fu(i);var d=Dr(wo.current);if(o=i.type,n!==null&&i.stateNode!=null)op(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Dr(hi.current),Aa(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[di]=i,u[yo]=p,n=(i.mode&1)!==0,o){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<_o.length;d++)Nt(_o[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":ln(u,p),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",u);break;case"textarea":Z(u,p),Nt("invalid",u)}k(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?u.textContent!==D&&(p.suppressHydrationWarning!==!0&&va(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&va(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Nt("scroll",u)}switch(o){case"input":Pt(u),Ke(u,p,!0);break;case"textarea":Pt(u),_e(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=xa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[di]=i,n[yo]=u,sp(n,i,!1,!1),i.stateNode=n;e:{switch(M=ue(o,u),o){case"dialog":Nt("cancel",n),Nt("close",n),d=u;break;case"iframe":case"object":case"embed":Nt("load",n),d=u;break;case"video":case"audio":for(d=0;d<_o.length;d++)Nt(_o[d],n);d=u;break;case"source":Nt("error",n),d=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),d=u;break;case"details":Nt("toggle",n),d=u;break;case"input":ln(n,u),d=z(n,u),Nt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":Z(n,u),d=T(n,u),Nt("invalid",n);break;default:d=u}k(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var B=D[p];p==="style"?rt(n,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Oe(n,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ft(n,B):typeof B=="number"&&ft(n,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Nt("scroll",n):B!=null&&b(n,p,B,M))}switch(o){case"input":Pt(n),Ke(n,u,!1);break;case"textarea":Pt(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?L(n,!!u.multiple,p,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)ap(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Dr(wo.current),Dr(hi.current),Aa(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(p=u.nodeValue!==o)&&(n=Fn,n!==null))switch(n.tag){case 3:va(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return gn(i),null;case 13:if(Ft(Bt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&On!==null&&i.mode&1&&!(i.flags&128))ch(),hs(),i.flags|=98560,p=!1;else if(p=Aa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[di]=i}else hs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else Jn!==null&&(pc(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Bt.current&1?Jt===0&&(Jt=3):_c())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return _s(),ic(n,i),n===null&&vo(i.stateNode.containerInfo),gn(i),null;case 10:return Lu(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Sa(),gn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)bo(p,!1);else{if(Jt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=Da(n),M!==null){for(i.flags|=128,bo(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Bt,Bt.current&1|2),i.child}n=n.sibling}p.tail!==null&&K()>Ss&&(i.flags|=128,u=!0,bo(p,!1),i.lanes=4194304)}else{if(!u)if(n=Da(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),bo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*K()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,u=!0,bo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=Bt.current,Ut(Bt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return gc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?zn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function F_(n,i){switch(wu(i),i.tag){case 1:return Rn(i.type)&&Sa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return _s(),Ft(Cn),Ft(pn),zu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Fu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return _s(),null;case 10:return Lu(i.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var Ha=!1,_n=!1,O_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function xs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function rc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var lp=!1;function z_(n,i){if(gu=aa,n=kd(),lu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,B=-1,ne=0,xe=0,Se=n,ve=null;t:for(;;){for(var Fe;Se!==o||d!==0&&Se.nodeType!==3||(D=M+d),Se!==p||u!==0&&Se.nodeType!==3||(B=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ve=Se,Se=Fe;for(;;){if(Se===n)break t;if(ve===o&&++ne===d&&(D=M),ve===p&&++xe===u&&(B=M),(Fe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Fe}o=D===-1||B===-1?null:{start:D,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(_u={focusedElem:n,selectionRange:o},aa=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,Xt=Ve.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?je:Qn(i.type,je),Xt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Gt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=lp,lp=!1,Ve}function Lo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&rc(i,o,p)}d=d.next}while(d!==u)}}function Va(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function sc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function up(n){var i=n.alternate;i!==null&&(n.alternate=null,up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[di],delete i[yo],delete i[Su],delete i[y_],delete i[S_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cp(n){return n.tag===5||n.tag===3||n.tag===4}function fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(u!==4&&(n=n.child,n!==null))for(oc(n,i,o),n=n.sibling;n!==null;)oc(n,i,o),n=n.sibling}function ac(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ac(n,i,o),n=n.sibling;n!==null;)ac(n,i,o),n=n.sibling}var cn=null,ei=!1;function sr(n,i,o){for(o=o.child;o!==null;)dp(n,i,o),o=o.sibling}function dp(n,i,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(st,o)}catch{}switch(o.tag){case 5:_n||xs(o,i);case 6:var u=cn,d=ei;cn=null,sr(n,i,o),cn=u,ei=d,cn!==null&&(ei?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ei?(n=cn,o=o.stateNode,n.nodeType===8?yu(n.parentNode,o):n.nodeType===1&&yu(n,o),lo(n)):yu(cn,o.stateNode));break;case 4:u=cn,d=ei,cn=o.stateNode.containerInfo,ei=!0,sr(n,i,o),cn=u,ei=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&(p&2||p&4)&&rc(o,i,M),d=d.next}while(d!==u)}sr(n,i,o);break;case 1:if(!_n&&(xs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Gt(o,i,D)}sr(n,i,o);break;case 21:sr(n,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,sr(n,i,o),_n=u):sr(n,i,o);break;default:sr(n,i,o)}}function hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new O_),i.forEach(function(u){var d=q_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ti(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ei=!1;break e;case 3:cn=D.stateNode.containerInfo,ei=!0;break e;case 4:cn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(cn===null)throw Error(t(160));dp(p,M,d),cn=null,ei=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ne){Gt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,n),i=i.sibling}function pp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(i,n),mi(n),u&4){try{Lo(3,n,n.return),Va(3,n)}catch(je){Gt(n,n.return,je)}try{Lo(5,n,n.return)}catch(je){Gt(n,n.return,je)}}break;case 1:ti(i,n),mi(n),u&512&&o!==null&&xs(o,o.return);break;case 5:if(ti(i,n),mi(n),u&512&&o!==null&&xs(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(je){Gt(n,n.return,je)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=o!==null?o.memoizedProps:p,D=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&pt(d,p),ue(D,M);var ne=ue(D,p);for(M=0;M<B.length;M+=2){var xe=B[M],Se=B[M+1];xe==="style"?rt(d,Se):xe==="dangerouslySetInnerHTML"?Oe(d,Se):xe==="children"?ft(d,Se):b(d,xe,Se,ne)}switch(D){case"input":ct(d,p);break;case"textarea":pe(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Fe=p.value;Fe!=null?L(d,!!p.multiple,Fe,!1):ve!==!!p.multiple&&(p.defaultValue!=null?L(d,!!p.multiple,p.defaultValue,!0):L(d,!!p.multiple,p.multiple?[]:"",!1))}d[yo]=p}catch(je){Gt(n,n.return,je)}}break;case 6:if(ti(i,n),mi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(je){Gt(n,n.return,je)}}break;case 3:if(ti(i,n),mi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{lo(i.containerInfo)}catch(je){Gt(n,n.return,je)}break;case 4:ti(i,n),mi(n);break;case 13:ti(i,n),mi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(cc=K())),u&4&&hp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(ne=_n)||xe,ti(i,n),_n=ne):ti(i,n),mi(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!xe&&n.mode&1)for(ke=n,xe=n.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(ve=ke,Fe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Lo(4,ve,ve.return);break;case 1:xs(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(je){Gt(u,o,je)}}break;case 5:xs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){_p(Se);continue}}Fe!==null?(Fe.return=ve,ke=Fe):_p(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Se.stateNode,B=Se.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Qe("display",M))}catch(je){Gt(n,n.return,je)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(je){Gt(n,n.return,je)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,n),mi(n),u&4&&hp(n);break;case 21:break;default:ti(i,n),mi(n)}}function mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(cp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ft(d,""),u.flags&=-33);var p=fp(n);ac(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,D=fp(n);oc(n,D,M);break;default:throw Error(t(161))}}catch(B){Gt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function B_(n,i,o){ke=n,mp(n)}function mp(n,i,o){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Ha;if(!M){var D=d.alternate,B=D!==null&&D.memoizedState!==null||_n;D=Ha;var ne=_n;if(Ha=M,(_n=B)&&!ne)for(ke=d;ke!==null;)M=ke,B=M.child,M.tag===22&&M.memoizedState!==null?vp(d):B!==null?(B.return=M,ke=B):vp(d);for(;p!==null;)ke=p,mp(p),p=p.sibling;ke=d,Ha=D,_n=ne}gp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ke=p):gp(n)}}function gp(n){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||Va(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Qn(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&_h(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}_h(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&lo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&sc(i)}catch(ve){Gt(i,i.return,ve)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function _p(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function vp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(B){Gt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Gt(i,d,B)}}var p=i.return;try{sc(i)}catch(B){Gt(i,p,B)}break;case 5:var M=i.return;try{sc(i)}catch(B){Gt(i,M,B)}}}catch(B){Gt(i,i.return,B)}if(i===n){ke=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ke=D;break}ke=i.return}}var k_=Math.ceil,Ga=R.ReactCurrentDispatcher,lc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,fn=0,zn=0,ys=er(0),Jt=0,Do=null,Ir=0,Wa=0,uc=0,Uo=null,bn=null,cc=0,Ss=1/0,bi=null,Xa=!1,fc=null,or=null,Ya=!1,ar=null,qa=0,Io=0,dc=null,ja=-1,$a=0;function Mn(){return Et&6?K():ja!==-1?ja:ja=K()}function lr(n){return n.mode&1?Et&2&&fn!==0?fn&-fn:E_.transition!==null?($a===0&&($a=Dt()),$a):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:yd(n.type)),n):1}function ni(n,i,o,u){if(50<Io)throw Io=0,dc=null,Error(t(185));tn(n,o,u),(!(Et&2)||n!==sn)&&(n===sn&&(!(Et&2)&&(Wa|=o),Jt===4&&ur(n,fn)),Ln(n,u),o===1&&Et===0&&!(i.mode&1)&&(Ss=K()+500,Ea&&nr()))}function Ln(n,i){var o=n.callbackNode;yn(n,i);var u=dn(n,n===sn?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?M_(yp.bind(null,n)):sh(yp.bind(null,n)),v_(function(){!(Et&6)&&nr()}),o=null;else{switch(fi(u)){case 1:o=we;break;case 4:o=Le;break;case 16:o=Ne;break;case 536870912:o=ot;break;default:o=Ne}o=Rp(o,xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function xp(n,i){if(ja=-1,$a=0,Et&6)throw Error(t(327));var o=n.callbackNode;if(Ms()&&n.callbackNode!==o)return null;var u=dn(n,n===sn?fn:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=Ka(n,u);else{i=u;var d=Et;Et|=2;var p=Mp();(sn!==n||fn!==i)&&(bi=null,Ss=K()+500,Fr(n,i));do try{G_();break}catch(D){Sp(n,D)}while(!0);bu(),Ga.current=p,Et=d,$t!==null?i=0:(sn=null,fn=0,i=Jt)}if(i!==0){if(i===2&&(d=Mi(n),d!==0&&(u=d,i=hc(n,d))),i===1)throw o=Do,Fr(n,0),ur(n,u),Ln(n,K()),o;if(i===6)ur(n,u);else{if(d=n.current.alternate,!(u&30)&&!H_(d)&&(i=Ka(n,u),i===2&&(p=Mi(n),p!==0&&(u=p,i=hc(n,p))),i===1))throw o=Do,Fr(n,0),ur(n,u),Ln(n,K()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Or(n,bn,bi);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=cc+500-K(),10<i)){if(dn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=xu(Or.bind(null,n,bn,bi),i);break}Or(n,bn,bi);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-ut(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=K()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*k_(u/1960))-u,10<u){n.timeoutHandle=xu(Or.bind(null,n,bn,bi),u);break}Or(n,bn,bi);break;case 5:Or(n,bn,bi);break;default:throw Error(t(329))}}}return Ln(n,K()),n.callbackNode===o?xp.bind(null,n):null}function hc(n,i){var o=Uo;return n.current.memoizedState.isDehydrated&&(Fr(n,i).flags|=256),n=Ka(n,i),n!==2&&(i=bn,bn=o,i!==null&&pc(i)),n}function pc(n){bn===null?bn=n:bn.push.apply(bn,n)}function H_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Zn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~uc,i&=~Wa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ut(i),u=1<<o;n[o]=-1,i&=~u}}function yp(n){if(Et&6)throw Error(t(327));Ms();var i=dn(n,0);if(!(i&1))return Ln(n,K()),null;var o=Ka(n,i);if(n.tag!==0&&o===2){var u=Mi(n);u!==0&&(i=u,o=hc(n,u))}if(o===1)throw o=Do,Fr(n,0),ur(n,i),Ln(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Or(n,bn,bi),Ln(n,K()),null}function mc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Ss=K()+500,Ea&&nr())}}function Nr(n){ar!==null&&ar.tag===0&&!(Et&6)&&Ms();var i=Et;Et|=1;var o=Yn.transition,u=Mt;try{if(Yn.transition=null,Mt=1,n)return n()}finally{Mt=u,Yn.transition=o,Et=i,!(Et&6)&&nr()}}function gc(){zn=ys.current,Ft(ys)}function Fr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,__(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Sa();break;case 3:_s(),Ft(Cn),Ft(pn),zu();break;case 5:Fu(u);break;case 4:_s();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Lu(u.type._context);break;case 22:case 23:gc()}o=o.return}if(sn=n,$t=n=cr(n.current,null),fn=zn=i,Jt=0,Do=null,uc=Wa=Ir=0,bn=Uo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}o.pending=u}Lr=null}return n}function Sp(n,i){do{var o=$t;try{if(bu(),Ua.current=Oa,Ia){for(var u=kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ia=!1}if(Ur=0,rn=Zt=kt=null,Ao=!1,Co=0,lc.current=null,o===null||o.return===null){Jt=1,Do=i,$t=null;break}e:{var p=n,M=o.return,D=o,B=i;if(i=fn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,xe=D,Se=xe.tag;if(!(xe.mode&1)&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Yh(M);if(Fe!==null){Fe.flags&=-257,qh(Fe,M,D,p,i),Fe.mode&1&&Xh(p,ne,i),i=Fe,B=ne;var Ve=i.updateQueue;if(Ve===null){var je=new Set;je.add(B),i.updateQueue=je}else Ve.add(B);break e}else{if(!(i&1)){Xh(p,ne,i),_c();break e}B=Error(t(426))}}else if(zt&&D.mode&1){var Xt=Yh(M);if(Xt!==null){!(Xt.flags&65536)&&(Xt.flags|=256),qh(Xt,M,D,p,i),Ru(vs(B,D));break e}}p=B=vs(B,D),Jt!==4&&(Jt=2),Uo===null?Uo=[p]:Uo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=Gh(p,B,i);gh(p,$);break e;case 1:D=B;var X=p.type,J=p.stateNode;if(!(p.flags&128)&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(or===null||!or.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Wh(p,D,i);gh(p,Ae);break e}}p=p.return}while(p!==null)}Tp(o)}catch($e){i=$e,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Mp(){var n=Ga.current;return Ga.current=Oa,n===null?Oa:n}function _c(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||!(Ir&268435455)&&!(Wa&268435455)||ur(sn,fn)}function Ka(n,i){var o=Et;Et|=2;var u=Mp();(sn!==n||fn!==i)&&(bi=null,Fr(n,i));do try{V_();break}catch(d){Sp(n,d)}while(!0);if(bu(),Et=o,Ga.current=u,$t!==null)throw Error(t(261));return sn=null,fn=0,Jt}function V_(){for(;$t!==null;)Ep($t)}function G_(){for(;$t!==null&&!q();)Ep($t)}function Ep(n){var i=Cp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Tp(n):$t=i,lc.current=null}function Tp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=F_(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,$t=null;return}}else if(o=N_(o,i,zn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Jt===0&&(Jt=5)}function Or(n,i,o){var u=Mt,d=Yn.transition;try{Yn.transition=null,Mt=1,W_(n,i,o,u)}finally{Yn.transition=d,Mt=u}return null}function W_(n,i,o,u){do Ms();while(ar!==null);if(Et&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(n,p),n===sn&&($t=sn=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Ya||(Ya=!0,Rp(Ne,function(){return Ms(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=Yn.transition,Yn.transition=null;var M=Mt;Mt=1;var D=Et;Et|=4,lc.current=null,z_(n,o),pp(o,n),c_(_u),aa=!!gu,_u=gu=null,n.current=o,B_(o),te(),Et=D,Mt=M,Yn.transition=p}else n.current=o;if(Ya&&(Ya=!1,ar=n,qa=d),p=n.pendingLanes,p===0&&(or=null),yt(o.stateNode),Ln(n,K()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Xa)throw Xa=!1,n=fc,fc=null,n;return qa&1&&n.tag!==0&&Ms(),p=n.pendingLanes,p&1?n===dc?Io++:(Io=0,dc=n):Io=0,nr(),null}function Ms(){if(ar!==null){var n=fi(qa),i=Yn.transition,o=Mt;try{if(Yn.transition=null,Mt=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,qa=0,Et&6)throw Error(t(331));var d=Et;for(Et|=4,ke=n.current;ke!==null;){var p=ke,M=p.child;if(ke.flags&16){var D=p.deletions;if(D!==null){for(var B=0;B<D.length;B++){var ne=D[B];for(ke=ne;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Lo(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var ve=xe.sibling,Fe=xe.return;if(up(xe),xe===ne){ke=null;break}if(ve!==null){ve.return=Fe,ke=ve;break}ke=Fe}}}var Ve=p.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var Xt=je.sibling;je.sibling=null,je=Xt}while(je!==null)}}ke=p}}if(p.subtreeFlags&2064&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Lo(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,ke=$;break e}ke=p.return}}var X=n.current;for(ke=X;ke!==null;){M=ke;var J=M.child;if(M.subtreeFlags&2064&&J!==null)J.return=M,ke=J;else e:for(M=X;ke!==null;){if(D=ke,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:Va(9,D)}}catch($e){Gt(D,D.return,$e)}if(D===M){ke=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,ke=Ae;break e}ke=D.return}}if(Et=d,nr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{Mt=o,Yn.transition=i}}return!1}function wp(n,i,o){i=vs(o,i),i=Gh(n,i,1),n=rr(n,i,1),i=Mn(),n!==null&&(tn(n,1,i),Ln(n,i))}function Gt(n,i,o){if(n.tag===3)wp(n,n,o);else for(;i!==null;){if(i.tag===3){wp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=vs(o,n),n=Wh(i,n,1),i=rr(i,n,1),n=Mn(),i!==null&&(tn(i,1,n),Ln(i,n));break}}i=i.return}}function X_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,sn===n&&(fn&o)===o&&(Jt===4||Jt===3&&(fn&130023424)===fn&&500>K()-cc?Fr(n,0):uc|=o),Ln(n,i)}function Ap(n,i){i===0&&(n.mode&1?(i=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):i=1);var o=Mn();n=Ci(n,i),n!==null&&(tn(n,i,o),Ln(n,o))}function Y_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(n,o)}function q_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Ap(n,o)}var Cp;Cp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Pn=!1,I_(n,i,o);Pn=!!(n.flags&131072)}else Pn=!1,zt&&i.flags&1048576&&oh(i,wa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ka(n,i),n=i.pendingProps;var d=cs(i,pn.current);gs(i,o),d=Hu(null,i,u,n,d,o);var p=Vu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,Ma(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Iu(i),d.updater=za,i.stateNode=d,d._reactInternals=i,ju(i,u,n,o),i=Ju(null,i,u,!0,p,o)):(i.tag=0,zt&&p&&Tu(i),Sn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ka(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=$_(u),n=Qn(u,n),d){case 0:i=Zu(null,i,u,n,o);break e;case 1:i=Qh(null,i,u,n,o);break e;case 11:i=jh(null,i,u,n,o);break e;case 14:i=$h(null,i,u,Qn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),Zu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),Qh(n,i,u,d,o);case 3:e:{if(ep(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,mh(n,i),La(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=vs(Error(t(423)),i),i=tp(n,i,u,o,d);break e}else if(u!==d){d=vs(Error(t(424)),i),i=tp(n,i,u,o,d);break e}else for(On=Qi(i.stateNode.containerInfo.firstChild),Fn=i,zt=!0,Jn=null,o=hh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),u===d){i=Pi(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return vh(i),n===null&&Cu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,vu(u,d)?M=null:p!==null&&vu(u,p)&&(i.flags|=32),Jh(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&Cu(i),null;case 13:return np(n,i,o);case 4:return Nu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ps(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),jh(n,i,u,d,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Ut(Ra,u._currentValue),u._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===d.children&&!Cn.current){i=Pi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var B=D.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=Ri(-1,o&-o),B.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ne.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Du(p.return,o,i),D.lanes|=o;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Du(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,gs(i,o),d=Wn(d),u=u(d),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,d=Qn(u,i.pendingProps),d=Qn(u.type,d),$h(n,i,u,d,o);case 15:return Kh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Qn(u,d),ka(n,i),i.tag=1,Rn(u)?(n=!0,Ma(i)):n=!1,gs(i,o),Hh(i,u,d),ju(i,u,d,o),Ju(null,i,u,!0,n,o);case 19:return rp(n,i,o);case 22:return Zh(n,i,o)}throw Error(t(156,i.tag))};function Rp(n,i){return ra(n,i)}function j_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,o,u){return new j_(n,i,o,u)}function vc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $_(n){if(typeof n=="function")return vc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===ge)return 14}return 2}function cr(n,i){var o=n.alternate;return o===null?(o=qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Za(n,i,o,u,d,p){var M=2;if(u=n,typeof n=="function")vc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return zr(o.children,d,p,i);case W:M=8,d|=8;break;case P:return n=qn(12,o,i,d|2),n.elementType=P,n.lanes=p,n;case Q:return n=qn(13,o,i,d),n.elementType=Q,n.lanes=p,n;case de:return n=qn(19,o,i,d),n.elementType=de,n.lanes=p,n;case ce:return Ja(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:M=10;break e;case H:M=9;break e;case ae:M=11;break e;case ge:M=14;break e;case oe:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(M,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function zr(n,i,o,u){return n=qn(7,n,u,i),n.lanes=o,n}function Ja(n,i,o,u){return n=qn(22,n,u,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function xc(n,i,o){return n=qn(6,n,null,i),n.lanes=o,n}function yc(n,i,o){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function K_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Sc(n,i,o,u,d,p,M,D,B){return n=new K_(n,i,o,D,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(p),n}function Z_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Pp(n){if(!n)return tr;n=n._reactInternals;e:{if(ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Rn(o))return ih(n,o,i)}return i}function bp(n,i,o,u,d,p,M,D,B){return n=Sc(o,u,!0,n,d,p,M,D,B),n.context=Pp(null),o=n.current,u=Mn(),d=lr(o),p=Ri(u,d),p.callback=i??null,rr(o,p,d),n.current.lanes=d,tn(n,d,u),Ln(n,u),n}function Qa(n,i,o,u){var d=i.current,p=Mn(),M=lr(d);return o=Pp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,M),n!==null&&(ni(n,d,M,p),ba(n,d,M)),M}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Mc(n,i){Lp(n,i),(n=n.alternate)&&Lp(n,i)}function J_(){return null}var Dp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ec(n){this._internalRoot=n}tl.prototype.render=Ec.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qa(n,i,null,null)},tl.prototype.unmount=Ec.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Nr(function(){Qa(null,n,null,null)}),i[Ei]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=md();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,n),o===0&&vd(n)}};function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Q_(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var ne=el(M);p.call(ne)}}var M=bp(i,u,n,0,null,!1,!1,"",Up);return n._reactRootContainer=M,n[Ei]=M.current,vo(n.nodeType===8?n.parentNode:n),Nr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var ne=el(B);D.call(ne)}}var B=Sc(n,0,!1,null,null,!1,!1,"",Up);return n._reactRootContainer=B,n[Ei]=B.current,vo(n.nodeType===8?n.parentNode:n),Nr(function(){Qa(i,B,o,u)}),B}function il(n,i,o,u,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var B=el(M);D.call(B)}}Qa(i,M,n,d)}else M=Q_(o,i,n,d,u);return el(M)}hd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=vt(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,K()),!(Et&6)&&(Ss=K()+500,nr()))}break;case 13:Nr(function(){var u=Ci(n,1);if(u!==null){var d=Mn();ni(u,n,1,d)}}),Mc(n,1)}},$l=function(n){if(n.tag===13){var i=Ci(n,134217728);if(i!==null){var o=Mn();ni(i,n,134217728,o)}Mc(n,134217728)}},pd=function(n){if(n.tag===13){var i=lr(n),o=Ci(n,i);if(o!==null){var u=Mn();ni(o,n,i,u)}Mc(n,i)}},md=function(){return Mt},gd=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Te=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=ya(u);if(!d)throw Error(t(90));Rt(u),ct(u,d)}}}break;case"textarea":pe(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},xt=mc,It=Nr;var ev={usingClientEntryPoint:!1,Events:[So,ls,ya,be,et,mc]},No={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=na(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||J_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{st=rl.inject(tv),We=rl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,Dn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(i))throw Error(t(200));return Z_(n,i,null,o)},Dn.createRoot=function(n,i){if(!Tc(n))throw Error(t(299));var o=!1,u="",d=Dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Sc(n,1,!1,null,null,o,!1,u,d),n[Ei]=i.current,vo(n.nodeType===8?n.parentNode:n),new Ec(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=na(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Nr(n)},Dn.hydrate=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!0,o)},Dn.hydrateRoot=function(n,i,o){if(!Tc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",M=Dp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=bp(i,null,n,1,o??null,d,!1,p,M),n[Ei]=i.current,vo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new tl(i)},Dn.render=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!1,o)},Dn.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(Nr(function(){il(null,null,n,!1,function(){n._reactRootContainer=null,n[Ei]=null})}),!0):!1},Dn.unstable_batchedUpdates=mc,Dn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!nl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return il(n,i,o,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Hp;function uv(){if(Hp)return Cc.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cc.exports=lv(),Cc.exports}var Vp;function cv(){if(Vp)return sl;Vp=1;var s=uv();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var fv=cv();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const td="173",Es={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dv=1,Vm=1,hv=2,Fi=3,Er=0,Un=1,Oi=2,yr=0,Ys=1,Gp=2,Wp=3,Xp=4,pv=5,Yr=100,mv=101,gv=102,_v=103,vv=104,xv=200,yv=201,Sv=202,Mv=203,df=204,hf=205,Ev=206,Tv=207,wv=208,Av=209,Cv=210,Rv=211,Pv=212,bv=213,Lv=214,pf=0,mf=1,gf=2,$s=3,_f=4,vf=5,xf=6,yf=7,Gm=0,Dv=1,Uv=2,Sr=0,Iv=1,Nv=2,Fv=3,Ov=4,zv=5,Bv=6,kv=7,Wm=300,Ks=301,Zs=302,Sf=303,Mf=304,Xl=306,Ef=1e3,jr=1001,Tf=1002,li=1003,Hv=1004,ol=1005,vi=1006,bc=1007,$r=1008,Hi=1009,Xm=1010,Ym=1011,qo=1012,nd=1013,Kr=1014,zi=1015,jo=1016,id=1017,rd=1018,Js=1020,qm=35902,jm=1021,$m=1022,oi=1023,Km=1024,Zm=1025,qs=1026,Qs=1027,Jm=1028,sd=1029,Qm=1030,od=1031,ad=1033,Ul=33776,Il=33777,Nl=33778,Fl=33779,wf=35840,Af=35841,Cf=35842,Rf=35843,Pf=36196,bf=37492,Lf=37496,Df=37808,Uf=37809,If=37810,Nf=37811,Ff=37812,Of=37813,zf=37814,Bf=37815,kf=37816,Hf=37817,Vf=37818,Gf=37819,Wf=37820,Xf=37821,Ol=36492,Yf=36494,qf=36495,eg=36283,jf=36284,$f=36285,Kf=36286,Vv=3200,Gv=3201,Wv=0,Xv=1,xr="",$n="srgb",eo="srgb-linear",kl="linear",bt="srgb",ws=7680,Yp=519,Yv=512,qv=513,jv=514,tg=515,$v=516,Kv=517,Zv=518,Jv=519,Zf=35044,qp="300 es",Bi=2e3,Hl=2001;let no=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}};const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,Jf=180/Math.PI;function Mr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Qv(s,e){return(s%e+e)%e}function Dc(s,e,t){return(1-t)*s+t*e}function _i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*a+e.x,this.y=l*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,a,l,f,c,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,m)}set(e,t,r,a,l,f,c,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],m=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],C=a[0],y=a[3],_=a[6],U=a[1],b=a[4],R=a[7],G=a[2],F=a[5],N=a[8];return l[0]=f*C+c*U+h*G,l[3]=f*y+c*b+h*F,l[6]=f*_+c*R+h*N,l[1]=m*C+g*U+v*G,l[4]=m*y+g*b+v*F,l[7]=m*_+g*R+v*N,l[2]=x*C+S*U+E*G,l[5]=x*y+S*b+E*F,l[8]=x*_+S*R+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return t*f*g-t*c*m-r*l*g+r*c*h+a*l*m-a*f*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=g*f-c*m,x=c*h-g*l,S=m*l-f*h,E=t*v+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(a*m-g*r)*C,e[2]=(c*r-a*f)*C,e[3]=x*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-c*t)*C,e[6]=S*C,e[7]=(r*h-m*t)*C,e[8]=(f*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,f,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*f+m*c)+f+e,-a*m,a*h,-a*(-m*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Uc.makeScale(e,t)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new dt;function ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function e0(){const s=Vl("canvas");return s.style.display="block",s}const jp={};function Gs(s){s in jp||(jp[s]=!0,console.warn(s))}function t0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function n0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $p=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kp=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r0(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,l,f){return this.enabled===!1||l===f||!l||!f||(this.spaces[l].transfer===bt&&(a.r=ki(a.r),a.g=ki(a.g),a.b=ki(a.b)),this.spaces[l].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===bt&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?kl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,f){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:kl,toXYZ:$p,fromXYZ:Kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:$p,fromXYZ:Kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const At=r0();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class s0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Vl("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=ki(l[f]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ki(t[r]/255)*255):t[r]=ki(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o0=0;class ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(Ic(a[f].image)):l.push(Ic(a[f]))}else l=Ic(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ic(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class An extends no{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=jr,a=jr,l=vi,f=$r,c=oi,h=Hi,m=An.DEFAULT_ANISOTROPY,g=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Mr(),this.name="",this.source=new ig(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ef:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ef:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Wm;An.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*a+f[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],S=h[5],E=h[9],C=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(m+1)/2,R=(S+1)/2,G=(_+1)/2,F=(g+x)/4,N=(v+C)/4,W=(E+y)/4;return b>R&&b>G?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=F/r,l=N/r):R>G?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=F/a,l=W/a):G<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),r=N/l,a=W/l),this.set(r,a,l,t),this}let U=Math.sqrt((y-E)*(y-E)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(v-C)/U,this.z=(x-g)/U,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l0 extends no{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let c=0;c<f;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends l0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class rg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=li,this.minFilter=li,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,f,c){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const x=l[f+0],S=l[f+1],E=l[f+2],C=l[f+3];if(c===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=C;return}if(v!==C||h!==x||m!==S||g!==E){let y=1-c;const _=h*x+m*S+g*E+v*C,U=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const G=Math.sqrt(b),F=Math.atan2(G,_*U);y=Math.sin(y*F)/G,c=Math.sin(c*F)/G}const R=c*U;if(h=h*y+x*R,m=m*y+S*R,g=g*y+E*R,v=v*y+C*R,y===1-c){const G=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=G,m*=G,g*=G,v*=G}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,f){const c=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[f],x=l[f+1],S=l[f+2],E=l[f+3];return e[t]=c*E+g*v+h*S-m*x,e[t+1]=h*E+g*x+m*v-c*S,e[t+2]=m*E+g*S+c*x-h*v,e[t+3]=g*E-c*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(a/2),v=c(l/2),x=h(r/2),S=h(a/2),E=h(l/2);switch(f){case"XYZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v+x*S*E;break;case"YZX":this._x=x*g*v+m*S*E,this._y=m*S*v+x*g*E,this._z=m*g*E-x*S*v,this._w=m*g*v-x*S*E;break;case"XZY":this._x=x*g*v-m*S*E,this._y=m*S*v-x*g*E,this._z=m*g*E+x*S*v,this._w=m*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],m=t[2],g=t[6],v=t[10],x=r+c+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(f-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+m)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(f-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+f*c+a*m-l*h,this._y=a*g+f*h+l*c-r*m,this._z=l*g+f*m+r*h-a*c,this._w=f*g-r*c-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),v=Math.sin((1-t)*g)/m,x=Math.sin(t*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,m=2*(f*a-c*r),g=2*(c*t-l*a),v=2*(l*r-f*t);return this.x=t+h*m+f*v-c*g,this.y=r+h*g+c*m-l*v,this.z=a+h*v+l*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-r*h,this.z=r*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new Y,Zp=new Jr;class $o{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,ii):ii.fromBufferAttribute(l,f),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),ll.subVectors(this.max,Oo),Cs.subVectors(e.a,Oo),Rs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),dr.subVectors(Rs,Cs),hr.subVectors(Ps,Rs),Br.subVectors(Cs,Ps);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!Fc(t,Cs,Rs,Ps,ll)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Cs,Rs,Ps,ll))?!1:(ul.crossVectors(dr,hr),t=[ul.x,ul.y,ul.z],Fc(t,Cs,Rs,Ps,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ii=new Y,al=new $o,Cs=new Y,Rs=new Y,Ps=new Y,dr=new Y,hr=new Y,Br=new Y,Oo=new Y,ll=new Y,ul=new Y,kr=new Y;function Fc(s,e,t,r,a){for(let l=0,f=s.length-3;l<=f;l+=3){kr.fromArray(s,l);const c=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),h=e.dot(kr),m=t.dot(kr),g=r.dot(kr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const c0=new $o,zo=new Y,Oc=new Y;class ld{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):c0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Oc)),this.expandByPoint(zo.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new Y,zc=new Y,cl=new Y,pr=new Y,Bc=new Y,fl=new Y,kc=new Y;class sg{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){zc.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(zc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(cl),c=pr.dot(this.direction),h=-pr.dot(cl),m=pr.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*h-c,x=f*c-h,E=l*g,v>=0)if(x>=-E)if(x<=E){const C=1/g;v*=C,x*=C,S=v*(v+f*x+2*c)+x*(f*v+x+2*h)+m}else x=l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-f*l+c)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(f*l+c)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=f>0?-l:l,v=Math.max(0,-(f*x+c)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(zc).addScaledVector(cl,x),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,f,c,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||l>a||((l>r||isNaN(r))&&(r=l),(f<a||isNaN(a))&&(a=f),v>=0?(c=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(c=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,r,a,l){Bc.subVectors(t,e),fl.subVectors(r,e),kc.crossVectors(Bc,fl);let f=this.direction.dot(kc),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;pr.subVectors(this.origin,e);const h=c*this.direction.dot(fl.crossVectors(pr,fl));if(h<0)return null;const m=c*this.direction.dot(Bc.cross(pr));if(m<0||h+m>f)return null;const g=-c*pr.dot(kc);return g<0?null:this.at(g/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,r,a,l,f,c,h,m,g,v,x,S,E,C,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,f,c,h,m,g,v,x,S,E,C,y)}set(e,t,r,a,l,f,c,h,m,g,v,x,S,E,C,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=f,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=f*g,S=f*v,E=c*g,C=c*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=S+E*m,t[5]=x-C*m,t[9]=-c*h,t[2]=C-x*m,t[6]=E+S*m,t[10]=f*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,E=m*g,C=m*v;t[0]=x+C*c,t[4]=E*c-S,t[8]=f*m,t[1]=f*v,t[5]=f*g,t[9]=-c,t[2]=S*c-E,t[6]=C+x*c,t[10]=f*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,E=m*g,C=m*v;t[0]=x-C*c,t[4]=-f*v,t[8]=E+S*c,t[1]=S+E*c,t[5]=f*g,t[9]=C-x*c,t[2]=-f*m,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const x=f*g,S=f*v,E=c*g,C=c*v;t[0]=h*g,t[4]=E*m-S,t[8]=x*m+C,t[1]=h*v,t[5]=C*m+x,t[9]=S*m-E,t[2]=-m,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*m,E=c*h,C=c*m;t[0]=h*g,t[4]=C-x*v,t[8]=E*v+S,t[1]=v,t[5]=f*g,t[9]=-c*g,t[2]=-m*g,t[6]=S*v+E,t[10]=x-C*v}else if(e.order==="XZY"){const x=f*h,S=f*m,E=c*h,C=c*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=x*v+C,t[5]=f*g,t[9]=S*v-E,t[2]=E*v-S,t[6]=c*g,t[10]=C*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,r){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),mr.crossVectors(r,Bn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),mr.crossVectors(r,Bn)),mr.normalize(),dl.crossVectors(Bn,mr),a[0]=mr.x,a[4]=dl.x,a[8]=Bn.x,a[1]=mr.y,a[5]=dl.y,a[9]=Bn.y,a[2]=mr.z,a[6]=dl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],m=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],C=r[6],y=r[10],_=r[14],U=r[3],b=r[7],R=r[11],G=r[15],F=a[0],N=a[4],W=a[8],P=a[12],w=a[1],H=a[5],ae=a[9],Q=a[13],de=a[2],ge=a[6],oe=a[10],ce=a[14],V=a[3],le=a[7],se=a[11],I=a[15];return l[0]=f*F+c*w+h*de+m*V,l[4]=f*N+c*H+h*ge+m*le,l[8]=f*W+c*ae+h*oe+m*se,l[12]=f*P+c*Q+h*ce+m*I,l[1]=g*F+v*w+x*de+S*V,l[5]=g*N+v*H+x*ge+S*le,l[9]=g*W+v*ae+x*oe+S*se,l[13]=g*P+v*Q+x*ce+S*I,l[2]=E*F+C*w+y*de+_*V,l[6]=E*N+C*H+y*ge+_*le,l[10]=E*W+C*ae+y*oe+_*se,l[14]=E*P+C*Q+y*ce+_*I,l[3]=U*F+b*w+R*de+G*V,l[7]=U*N+b*H+R*ge+G*le,l[11]=U*W+b*ae+R*oe+G*se,l[15]=U*P+b*Q+R*ce+G*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],S=e[14],E=e[3],C=e[7],y=e[11],_=e[15];return E*(+l*h*v-a*m*v-l*c*x+r*m*x+a*c*S-r*h*S)+C*(+t*h*S-t*m*x+l*f*x-a*f*S+a*m*g-l*h*g)+y*(+t*m*v-t*c*S-l*f*v+r*f*S+l*c*g-r*m*g)+_*(-a*c*g-t*h*v+t*c*x+a*f*v-r*f*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],S=e[11],E=e[12],C=e[13],y=e[14],_=e[15],U=v*y*m-C*x*m+C*h*S-c*y*S-v*h*_+c*x*_,b=E*x*m-g*y*m-E*h*S+f*y*S+g*h*_-f*x*_,R=g*C*m-E*v*m+E*c*S-f*C*S-g*c*_+f*v*_,G=E*v*h-g*C*h-E*c*x+f*C*x+g*c*y-f*v*y,F=t*U+r*b+a*R+l*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=U*N,e[1]=(C*x*l-v*y*l-C*a*S+r*y*S+v*a*_-r*x*_)*N,e[2]=(c*y*l-C*h*l+C*a*m-r*y*m-c*a*_+r*h*_)*N,e[3]=(v*h*l-c*x*l-v*a*m+r*x*m+c*a*S-r*h*S)*N,e[4]=b*N,e[5]=(g*y*l-E*x*l+E*a*S-t*y*S-g*a*_+t*x*_)*N,e[6]=(E*h*l-f*y*l-E*a*m+t*y*m+f*a*_-t*h*_)*N,e[7]=(f*x*l-g*h*l+g*a*m-t*x*m-f*a*S+t*h*S)*N,e[8]=R*N,e[9]=(E*v*l-g*C*l-E*r*S+t*C*S+g*r*_-t*v*_)*N,e[10]=(f*C*l-E*c*l+E*r*m-t*C*m-f*r*_+t*c*_)*N,e[11]=(g*c*l-f*v*l-g*r*m+t*v*m+f*r*S-t*c*S)*N,e[12]=G*N,e[13]=(g*C*a-E*v*a+E*r*x-t*C*x-g*r*y+t*v*y)*N,e[14]=(E*c*a-f*C*a-E*r*h+t*C*h+f*r*y-t*c*y)*N,e[15]=(f*v*a-g*c*a+g*r*h-t*v*h-f*r*x+t*c*x)*N,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,m=l*f,g=l*c;return this.set(m*f+r,m*c-a*h,m*h+a*c,0,m*c+a*h,g*c+r,g*h-a*f,0,m*h-a*c,g*h+a*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,f){return this.set(1,r,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,m=l+l,g=f+f,v=c+c,x=l*m,S=l*g,E=l*v,C=f*g,y=f*v,_=c*v,U=h*m,b=h*g,R=h*v,G=r.x,F=r.y,N=r.z;return a[0]=(1-(C+_))*G,a[1]=(S+R)*G,a[2]=(E-b)*G,a[3]=0,a[4]=(S-R)*F,a[5]=(1-(x+_))*F,a[6]=(y+U)*F,a[7]=0,a[8]=(E+b)*N,a[9]=(y-U)*N,a[10]=(1-(x+C))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=bs.set(a[0],a[1],a[2]).length();const f=bs.set(a[4],a[5],a[6]).length(),c=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/l,g=1/f,v=1/c;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,t.setFromRotationMatrix(ri),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,a,l,f,c=Bi){const h=this.elements,m=2*l/(t-e),g=2*l/(r-a),v=(t+e)/(t-e),x=(r+a)/(r-a);let S,E;if(c===Bi)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(c===Hl)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,f,c=Bi){const h=this.elements,m=1/(t-e),g=1/(r-a),v=1/(f-l),x=(t+e)*m,S=(r+a)*g;let E,C;if(c===Bi)E=(f+l)*v,C=-2*v;else if(c===Hl)E=l*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=C,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bs=new Y,ri=new Wt,f0=new Y(0,0,0),d0=new Y(1,1,1),mr=new Y,dl=new Y,Bn=new Y,Jp=new Wt,Qp=new Jr;class Vi{constructor(e=0,t=0,r=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],m=a[5],g=a[9],v=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const em=new Y,Ls=new Jr,Ui=new Wt,hl=new Y,Bo=new Y,p0=new Y,m0=new Jr,tm=new Y(1,0,0),nm=new Y(0,1,0),im=new Y(0,0,1),rm={type:"added"},g0={type:"removed"},Ds={type:"childadded",child:null},Hc={type:"childremoved",child:null};class In extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Y,t=new Vi,r=new Jr,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,t){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?hl.copy(e):hl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Bo,hl,this.up):Ui.lookAt(hl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}In.DEFAULT_UP=new Y(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new Y,Ii=new Y,Vc=new Y,Ni=new Y,Us=new Y,Is=new Y,sm=new Y,Gc=new Y,Wc=new Y,Xc=new Y,Yc=new Yt,qc=new Yt,jc=new Yt;class Kn{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),si.subVectors(e,t),a.cross(si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){si.subVectors(a,t),Ii.subVectors(r,t),Vc.subVectors(e,t);const f=si.dot(si),c=si.dot(Ii),h=si.dot(Vc),m=Ii.dot(Ii),g=Ii.dot(Vc),v=f*m-c*c;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-c*g)*x,E=(f*g-c*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,r,a,l,f,c,h){return this.getBarycoord(e,t,r,a,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ni.x),h.addScaledVector(f,Ni.y),h.addScaledVector(c,Ni.z),h)}static getInterpolatedAttribute(e,t,r,a,l,f){return Yc.setScalar(0),qc.setScalar(0),jc.setScalar(0),Yc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,r),jc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Yc,l.x),f.addScaledVector(qc,l.y),f.addScaledVector(jc,l.z),f}static isFrontFacing(e,t,r,a){return si.subVectors(r,t),Ii.subVectors(e,t),si.cross(Ii).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Kn.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let f,c;Us.subVectors(a,r),Is.subVectors(l,r),Gc.subVectors(e,r);const h=Us.dot(Gc),m=Is.dot(Gc);if(h<=0&&m<=0)return t.copy(r);Wc.subVectors(e,a);const g=Us.dot(Wc),v=Is.dot(Wc);if(g>=0&&v<=g)return t.copy(a);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(r).addScaledVector(Us,f);Xc.subVectors(e,l);const S=Us.dot(Xc),E=Is.dot(Xc);if(E>=0&&S<=E)return t.copy(l);const C=S*m-h*E;if(C<=0&&m>=0&&E<=0)return c=m/(m-E),t.copy(r).addScaledVector(Is,c);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return sm.subVectors(l,a),c=(v-g)/(v-g+(S-E)),t.copy(a).addScaledVector(sm,c);const _=1/(y+C+x);return f=C*_,c=x*_,t.copy(r).addScaledVector(Us,f).addScaledVector(Is,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=Qv(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=$c(f,l,e+1/3),this.g=$c(f,l,e),this.b=$c(f,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=$n){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const r=ag[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return At.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,a=xn.g,l=xn.b,f=Math.max(r,a,l),c=Math.min(r,a,l);let h,m;const g=(c+f)/2;if(c===f)h=0,m=0;else{const v=f-c;switch(m=g<=.5?v/(f+c):v/(2-f-c),f){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=$n){At.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,a=xn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(pl);const r=Dc(gr.h,pl.h,t),a=Dc(gr.s,pl.s,t),l=Dc(gr.l,pl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ct;Ct.NAMES=ag;let _0=0;class Ko extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Ys,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=hf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==df&&(r.blendSrc=this.blendSrc),this.blendDst!==hf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gl extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Y,ml=new Xe;let v0=0;class ui{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Zf,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class lg extends ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ug extends ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Hn extends ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}let x0=0;const jn=new Wt,Kc=new In,Ns=new Y,kn=new $o,ko=new $o,an=new Y;class xi extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?ug:lg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,r){return jn.makeTranslation(e,t,r),this.applyMatrix4(jn),this}scale(e,t,r){return jn.makeScale(e,t,r),this.applyMatrix4(jn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];kn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ld);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];ko.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(kn.min,ko.min),kn.expandByPoint(an),an.addVectors(kn.max,ko.max),kn.expandByPoint(an)):(kn.expandByPoint(ko.min),kn.expandByPoint(ko.max))}kn.getCenter(r);let a=0;for(let l=0,f=e.count;l<f;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)an.fromBufferAttribute(c,m),h&&(Ns.fromBufferAttribute(e,m),an.add(Ns)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),c=[],h=[];for(let W=0;W<r.count;W++)c[W]=new Y,h[W]=new Y;const m=new Y,g=new Y,v=new Y,x=new Xe,S=new Xe,E=new Xe,C=new Y,y=new Y;function _(W,P,w){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,w),x.fromBufferAttribute(l,W),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,w),g.sub(m),v.sub(m),S.sub(x),E.sub(x);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),c[W].add(C),c[P].add(C),c[w].add(C),h[W].add(y),h[P].add(y),h[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,P=U.length;W<P;++W){const w=U[W],H=w.start,ae=w.count;for(let Q=H,de=H+ae;Q<de;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new Y,R=new Y,G=new Y,F=new Y;function N(W){G.fromBufferAttribute(a,W),F.copy(G);const P=c[W];b.copy(P),b.sub(G.multiplyScalar(G.dot(P))).normalize(),R.crossVectors(F,P);const H=R.dot(h[W])<0?-1:1;f.setXYZW(W,b.x,b.y,b.z,H)}for(let W=0,P=U.length;W<P;++W){const w=U[W],H=w.start,ae=w.count;for(let Q=H,de=H+ae;Q<de;Q+=3)N(e.getX(Q+0)),N(e.getX(Q+1)),N(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Y,l=new Y,f=new Y,c=new Y,h=new Y,m=new Y,g=new Y,v=new Y;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),f.fromBufferAttribute(t,y),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),c.add(g),h.add(g),m.add(g),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),f.fromBufferAttribute(t,x+2),g.subVectors(f,l),v.subVectors(a,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,v=c.normalized,x=new m.constructor(h.length*g);let S=0,E=0;for(let C=0,y=h.length;C<y;C++){c.isInterleavedBufferAttribute?S=h[C]*c.data.stride+c.offset:S=h[C]*g;for(let _=0;_<g;_++)x[E++]=m[S++]}return new ui(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);t.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,v=m.length;g<v;g++){const x=m[g],S=e(x,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const m=f[c];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Wt,Hr=new sg,gl=new ld,am=new Y,_l=new Y,vl=new Y,xl=new Y,Zc=new Y,yl=new Y,lm=new Y,Sl=new Y;class ai extends In{constructor(e=new xi,t=new Gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){yl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],v=l[h];g!==0&&(Zc.fromBufferAttribute(v,e),f?yl.addScaledVector(Zc,g):yl.addScaledVector(Zc.sub(t),g))}t.add(yl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(gl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(gl,am)===null||Hr.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const y=x[E],_=f[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,G=b;R<G;R+=3){const F=c.getX(R),N=c.getX(R+1),W=c.getX(R+2);a=Ml(this,_,e,r,m,g,v,F,N,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),C=Math.min(c.count,S.start+S.count);for(let y=E,_=C;y<_;y+=3){const U=c.getX(y),b=c.getX(y+1),R=c.getX(y+2);a=Ml(this,f,e,r,m,g,v,U,b,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const y=x[E],_=f[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,G=b;R<G;R+=3){const F=R,N=R+1,W=R+2;a=Ml(this,_,e,r,m,g,v,F,N,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=E,_=C;y<_;y+=3){const U=y,b=y+1,R=y+2;a=Ml(this,f,e,r,m,g,v,U,b,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function y0(s,e,t,r,a,l,f,c){let h;if(e.side===Un?h=r.intersectTriangle(f,l,a,!0,c):h=r.intersectTriangle(a,l,f,e.side===Er,c),h===null)return null;Sl.copy(c),Sl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Sl);return m<t.near||m>t.far?null:{distance:m,point:Sl.clone(),object:s}}function Ml(s,e,t,r,a,l,f,c,h,m){s.getVertexPosition(c,_l),s.getVertexPosition(h,vl),s.getVertexPosition(m,xl);const g=y0(s,e,t,r,_l,vl,xl,lm);if(g){const v=new Y;Kn.getBarycoord(lm,_l,vl,xl,v),a&&(g.uv=Kn.getInterpolatedAttribute(a,c,h,m,v,new Xe)),l&&(g.uv1=Kn.getInterpolatedAttribute(l,c,h,m,v,new Xe)),f&&(g.normal=Kn.getInterpolatedAttribute(f,c,h,m,v,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:c,b:h,c:m,normal:new Y,materialIndex:0};Kn.getNormal(_l,vl,xl,x.normal),g.face=x,g.barycoord=v}return g}class Zo extends xi{constructor(e=1,t=1,r=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],m=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,a,f,2),E("x","z","y",1,-1,e,r,-t,a,f,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(v,2));function E(C,y,_,U,b,R,G,F,N,W,P){const w=R/N,H=G/W,ae=R/2,Q=G/2,de=F/2,ge=N+1,oe=W+1;let ce=0,V=0;const le=new Y;for(let se=0;se<oe;se++){const I=se*H-Q;for(let re=0;re<ge;re++){const Ie=re*w-ae;le[C]=Ie*U,le[y]=I*b,le[_]=de,m.push(le.x,le.y,le.z),le[C]=0,le[y]=0,le[_]=F>0?1:-1,g.push(le.x,le.y,le.z),v.push(re/N),v.push(1-se/W),ce+=1}}for(let se=0;se<W;se++)for(let I=0;I<N;I++){const re=x+I+ge*se,Ie=x+I+ge*(se+1),ee=x+(I+1)+ge*(se+1),me=x+(I+1)+ge*se;h.push(re,Ie,me),h.push(Ie,ee,me),V+=6}c.addGroup(S,V,P),S+=V,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const a in r)e[a]=r[a]}return e}function S0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const M0={clone:to,merge:Tn};var E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class fg extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Y,um=new Xe,cm=new Xe;class wn extends fg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,um,cm),t.subVectors(cm,um)}setViewOffset(e,t,r,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class w0 extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new wn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const f=new wn(Fs,Os,e,t);f.layers=this.layers,this.add(f);const c=new wn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const h=new wn(Fs,Os,e,t);h.layers=this.layers,this.add(h);const m=new wn(Fs,Os,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,f,c,h]=t;for(const m of t)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,f),e.setRenderTarget(r,2,a),e.render(t,c),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class dg extends An{constructor(e,t,r,a,l,f,c,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,r,a,l,f,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A0 extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new dg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Zo(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:yr});l.uniforms.tEquirect.value=t;const f=new ai(a,l),c=t.minFilter;return t.minFilter===$r&&(t.minFilter=vi),new w0(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,a);e.setRenderTarget(l)}}class El extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C0={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),_=this._getHandJoint(m,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(C0)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}let R0=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class P0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zf,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new Y;class Wl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=_i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),a=Lt(a,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hg extends Ko{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const Ho=new Y,Bs=new Y,ks=new Y,Hs=new Xe,Vo=new Xe,pg=new Wt,Tl=new Y,Go=new Y,wl=new Y,fm=new Xe,Qc=new Xe,dm=new Xe;class b0 extends In{constructor(e=new hg){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new xi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new P0(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Wl(r,3,0,!1)),zs.setAttribute("uv",new Wl(r,2,3,!1))}this.geometry=zs,this.material=e,this.center=new Xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),pg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-ks.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const f=this.center;Al(Tl.set(-.5,-.5,0),ks,f,Bs,a,l),Al(Go.set(.5,-.5,0),ks,f,Bs,a,l),Al(wl.set(.5,.5,0),ks,f,Bs,a,l),fm.set(0,0),Qc.set(1,0),dm.set(1,1);let c=e.ray.intersectTriangle(Tl,Go,wl,!1,Ho);if(c===null&&(Al(Go.set(-.5,.5,0),ks,f,Bs,a,l),Qc.set(0,1),c=e.ray.intersectTriangle(Tl,wl,Go,!1,Ho),c===null))return;const h=e.ray.origin.distanceTo(Ho);h<e.near||h>e.far||t.push({distance:h,point:Ho.clone(),uv:Kn.getInterpolation(Ho,Tl,Go,wl,fm,Qc,dm,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Al(s,e,t,r,a,l){Hs.subVectors(s,t).addScalar(.5).multiply(r),a!==void 0?(Vo.x=l*Hs.x-a*Hs.y,Vo.y=a*Hs.x+l*Hs.y):Vo.copy(Hs),s.copy(e),s.x+=Vo.x,s.y+=Vo.y,s.applyMatrix4(pg)}const ef=new Y,L0=new Y,D0=new dt;class vr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=ef.subVectors(r,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ef),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||D0.getNormalMatrix(e),a=this.coplanarPoint(ef).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new ld,Cl=new Y;class mg{constructor(e=new vr,t=new vr,r=new vr,a=new vr,l=new vr,f=new vr){this.planes=[e,t,r,a,l,f]}set(e,t,r,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Bi){const r=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],m=a[4],g=a[5],v=a[6],x=a[7],S=a[8],E=a[9],C=a[10],y=a[11],_=a[12],U=a[13],b=a[14],R=a[15];if(r[0].setComponents(h-l,x-m,y-S,R-_).normalize(),r[1].setComponents(h+l,x+m,y+S,R+_).normalize(),r[2].setComponents(h+f,x+g,y+E,R+U).normalize(),r[3].setComponents(h-f,x-g,y-E,R-U).normalize(),r[4].setComponents(h-c,x-v,y-C,R-b).normalize(),t===Bi)r[5].setComponents(h+c,x+v,y+C,R+b).normalize();else if(t===Hl)r[5].setComponents(c,v,C,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Cl.x=a.normal.x>0?e.max.x:e.min.x,Cl.y=a.normal.y>0?e.max.y:e.min.y,Cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U0 extends An{constructor(e,t,r,a,l,f,c,h,m){super(e,t,r,a,l,f,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gg extends An{constructor(e,t,r,a,l,f,c,h,m,g=qs){if(g!==qs&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===qs&&(r=Kr),r===void 0&&g===Qs&&(r=Js),super(null,a,l,f,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:li,this.minFilter=h!==void 0?h:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let f=1;f<=e;f++)r=this.getPoint(f/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let a=0;const l=r.length;let f;t?f=t:f=e*r[l-1];let c=0,h=l-1,m;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),m=r[a]-f,m<0)c=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===f)return a/(l-1);const g=r[a],x=r[a+1]-g,S=(f-g)/x;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const f=this.getPoint(a),c=this.getPoint(l),h=t||(f.isVector2?new Xe:new Y);return h.copy(c).sub(f).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,a=[],l=[],f=[],c=new Y,h=new Wt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new Y)}l[0]=new Y,f[0]=new Y;let m=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),x=Math.abs(a[0].z);g<=m&&(m=g,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),x<=m&&r.set(0,0,1),c.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],c),f[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),f[S]=f[S-1].clone(),c.crossVectors(a[S-1],a[S]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(gt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(c,E))}f[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(c.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),f[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _g extends Gi{constructor(e=0,t=0,r=1,a=1,l=0,f=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=f,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new Xe){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const f=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(f?l=0:l=a),this.aClockwise===!0&&!f&&(l===a?l=-a:l=l-a);const c=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(c),m=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,S=m-this.aY;h=x*g-S*v+this.aX,m=x*v+S*g+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class I0 extends _g{constructor(e,t,r,a,l,f){super(e,t,r,r,a,l,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ud(){let s=0,e=0,t=0,r=0;function a(l,f,c,h){s=l,e=c,t=-3*l+3*f-2*c-h,r=2*l-2*f+c+h}return{initCatmullRom:function(l,f,c,h,m){a(f,c,m*(c-l),m*(h-f))},initNonuniformCatmullRom:function(l,f,c,h,m,g,v){let x=(f-l)/m-(c-l)/(m+g)+(c-f)/g,S=(c-f)/g-(h-f)/(g+v)+(h-c)/v;x*=g,S*=g,a(f,c,x,S)},calc:function(l){const f=l*l,c=f*l;return s+e*l+t*f+r*c}}}const Rl=new Y,tf=new ud,nf=new ud,rf=new ud;class vg extends Gi{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,f=(l-(this.closed?0:1))*e;let c=Math.floor(f),h=f-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/l)+1)*l:h===0&&c===l-1&&(c=l-2,h=1);let m,g;this.closed||c>0?m=a[(c-1)%l]:(Rl.subVectors(a[0],a[1]).add(a[0]),m=Rl);const v=a[c%l],x=a[(c+1)%l];if(this.closed||c+2<l?g=a[(c+2)%l]:(Rl.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),C=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);C<1e-4&&(C=1),E<1e-4&&(E=C),y<1e-4&&(y=C),tf.initNonuniformCatmullRom(m.x,v.x,x.x,g.x,E,C,y),nf.initNonuniformCatmullRom(m.y,v.y,x.y,g.y,E,C,y),rf.initNonuniformCatmullRom(m.z,v.z,x.z,g.z,E,C,y)}else this.curveType==="catmullrom"&&(tf.initCatmullRom(m.x,v.x,x.x,g.x,this.tension),nf.initCatmullRom(m.y,v.y,x.y,g.y,this.tension),rf.initCatmullRom(m.z,v.z,x.z,g.z,this.tension));return r.set(tf.calc(h),nf.calc(h),rf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hm(s,e,t,r,a){const l=(r-e)*.5,f=(a-t)*.5,c=s*s,h=s*c;return(2*t-2*r+l+f)*h+(-3*t+3*r-2*l-f)*c+l*s+t}function N0(s,e){const t=1-s;return t*t*e}function F0(s,e){return 2*(1-s)*s*e}function O0(s,e){return s*s*e}function Xo(s,e,t,r){return N0(s,e)+F0(s,t)+O0(s,r)}function z0(s,e){const t=1-s;return t*t*t*e}function B0(s,e){const t=1-s;return 3*t*t*s*e}function k0(s,e){return 3*(1-s)*s*s*e}function H0(s,e){return s*s*s*e}function Yo(s,e,t,r,a){return z0(s,e)+B0(s,t)+k0(s,r)+H0(s,a)}class V0 extends Gi{constructor(e=new Xe,t=new Xe,r=new Xe,a=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Xe){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(Yo(e,a.x,l.x,f.x,c.x),Yo(e,a.y,l.y,f.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G0 extends Gi{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,f=this.v2,c=this.v3;return r.set(Yo(e,a.x,l.x,f.x,c.x),Yo(e,a.y,l.y,f.y,c.y),Yo(e,a.z,l.z,f.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W0 extends Gi{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X0 extends Gi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends Gi{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(Xo(e,a.x,l.x,f.x),Xo(e,a.y,l.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xg extends Gi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,f=this.v2;return r.set(Xo(e,a.x,l.x,f.x),Xo(e,a.y,l.y,f.y),Xo(e,a.z,l.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,a=this.points,l=(a.length-1)*e,f=Math.floor(l),c=l-f,h=a[f===0?f:f-1],m=a[f],g=a[f>a.length-2?a.length-1:f+1],v=a[f>a.length-3?a.length-1:f+2];return r.set(hm(c,h.x,m.x,g.x,v.x),hm(c,h.y,m.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Xe().fromArray(a))}return this}}var j0=Object.freeze({__proto__:null,ArcCurve:I0,CatmullRomCurve3:vg,CubicBezierCurve:V0,CubicBezierCurve3:G0,EllipseCurve:_g,LineCurve:W0,LineCurve3:X0,QuadraticBezierCurve:Y0,QuadraticBezierCurve3:xg,SplineCurve:q0});class Yl extends xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(a),m=c+1,g=h+1,v=e/c,x=t/h,S=[],E=[],C=[],y=[];for(let _=0;_<g;_++){const U=_*x-f;for(let b=0;b<m;b++){const R=b*v-l;E.push(R,-U,0),C.push(0,0,1),y.push(b/c),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<c;U++){const b=U+m*_,R=U+m*(_+1),G=U+1+m*(_+1),F=U+1+m*_;S.push(b,R,F),S.push(R,G,F)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class cd extends xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,f=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:f,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(f+c,Math.PI);let m=0;const g=[],v=new Y,x=new Y,S=[],E=[],C=[],y=[];for(let _=0;_<=r;_++){const U=[],b=_/r;let R=0;_===0&&f===0?R=.5/t:_===r&&h===Math.PI&&(R=-.5/t);for(let G=0;G<=t;G++){const F=G/t;v.x=-e*Math.cos(a+F*l)*Math.sin(f+b*c),v.y=e*Math.cos(f+b*c),v.z=e*Math.sin(a+F*l)*Math.sin(f+b*c),E.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(F+R,1-b),U.push(m++)}g.push(U)}for(let _=0;_<r;_++)for(let U=0;U<t;U++){const b=g[_][U+1],R=g[_][U],G=g[_+1][U],F=g[_+1][U+1];(_!==0||f>0)&&S.push(b,R,F),(_!==r-1||h<Math.PI)&&S.push(R,G,F)}this.setIndex(S),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fd extends xi{constructor(e=new xg(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const f=e.computeFrenetFrames(t,l);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const c=new Y,h=new Y,m=new Xe;let g=new Y;const v=[],x=[],S=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new Hn(v,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(S,2));function C(){for(let b=0;b<t;b++)y(b);y(l===!1?t:0),U(),_()}function y(b){g=e.getPointAt(b/t,g);const R=f.normals[b],G=f.binormals[b];for(let F=0;F<=a;F++){const N=F/a*Math.PI*2,W=Math.sin(N),P=-Math.cos(N);h.x=P*R.x+W*G.x,h.y=P*R.y+W*G.y,h.z=P*R.z+W*G.z,h.normalize(),x.push(h.x,h.y,h.z),c.x=g.x+r*h.x,c.y=g.y+r*h.y,c.z=g.z+r*h.z,v.push(c.x,c.y,c.z)}}function _(){for(let b=1;b<=t;b++)for(let R=1;R<=a;R++){const G=(a+1)*(b-1)+(R-1),F=(a+1)*b+(R-1),N=(a+1)*b+R,W=(a+1)*(b-1)+R;E.push(G,F,W),E.push(F,N,W)}}function U(){for(let b=0;b<=t;b++)for(let R=0;R<=a;R++)m.x=b/t,m.y=R/a,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fd(new j0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class $0 extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zl extends fg{constructor(e=-1,t=1,r=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z0 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class pm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function mm(s,e,t,r){const a=J0(r);switch(t){case jm:return s*e;case Km:return s*e;case Zm:return s*e*2;case Jm:return s*e/a.components*a.byteLength;case sd:return s*e/a.components*a.byteLength;case Qm:return s*e*2/a.components*a.byteLength;case od:return s*e*2/a.components*a.byteLength;case $m:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case ad:return s*e*4/a.components*a.byteLength;case Ul:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:case Rf:return Math.max(s,16)*Math.max(e,8)/4;case wf:case Cf:return Math.max(s,8)*Math.max(e,8)/2;case Pf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Yf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eg:case jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $f:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J0(s){switch(s){case Hi:case Xm:return{byteLength:1,components:1};case qo:case Ym:case jo:return{byteLength:2,components:1};case id:case rd:return{byteLength:2,components:4};case Kr:case nd:case zi:return{byteLength:4,components:1};case qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let s=null,e=!1,t=null,r=null;function a(l,f){t(l,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Q0(s){const e=new WeakMap;function t(c,h){const m=c.array,g=c.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),c.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)c.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version,size:v}}function r(c,h,m){const g=h.array,v=h.updateRanges;if(s.bindBuffer(m,c),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],C=v[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,v[x]=C)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const C=v[S];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(s.deleteBuffer(h.buffer),e.delete(c))}function f(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const m=e.get(c);if(m===void 0)e.set(c,t(c,h));else if(m.version<c.version){if(m.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,c,h),m.version=c.version}}return{get:a,remove:l,update:f}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
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
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
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
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,px=`#ifdef USE_BUMPMAP
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ex=`#define PI 3.141592653589793
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
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,Vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uy=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,oS=`#if DEPTH_PACKING == 3200
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
}`,aS=`#define DISTANCE
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
}`,lS=`#define DISTANCE
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
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
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
}`,dS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,yS=`#define NORMAL
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
}`,SS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,ES=`#define STANDARD
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
}`,TS=`#define STANDARD
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
}`,wS=`#define TOON
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
}`,AS=`#define TOON
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
}`,CS=`uniform float size;
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
}`,RS=`uniform vec3 diffuse;
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
}`,PS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,LS=`uniform float rotation;
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
}`,DS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:ax,batching_pars_vertex:lx,batching_vertex:ux,begin_vertex:cx,beginnormal_vertex:fx,bsdfs:dx,iridescence_fragment:hx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:vx,color_fragment:xx,color_pars_fragment:yx,color_pars_vertex:Sx,color_vertex:Mx,common:Ex,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Cx,emissivemap_fragment:Rx,emissivemap_pars_fragment:Px,colorspace_fragment:bx,colorspace_pars_fragment:Lx,envmap_fragment:Dx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Yx,envmap_vertex:Fx,fog_vertex:Ox,fog_pars_vertex:zx,fog_fragment:Bx,fog_pars_fragment:kx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Vx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:qx,lights_toon_pars_fragment:jx,lights_phong_fragment:$x,lights_phong_pars_fragment:Kx,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:oy,map_pars_fragment:ay,map_particle_fragment:ly,map_particle_pars_fragment:uy,metalnessmap_fragment:cy,metalnessmap_pars_fragment:fy,morphinstance_vertex:dy,morphcolor_vertex:hy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:yy,normal_vertex:Sy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:Ty,clearcoat_pars_fragment:wy,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:by,dithering_fragment:Ly,dithering_pars_fragment:Dy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:zy,skinbase_vertex:By,skinning_pars_vertex:ky,skinning_vertex:Hy,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:Yy,transmission_fragment:qy,transmission_pars_fragment:jy,uv_pars_fragment:$y,uv_pars_vertex:Ky,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:Qy,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:lS,equirect_vert:uS,equirect_frag:cS,linedashed_vert:fS,linedashed_frag:dS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:TS,meshtoon_vert:wS,meshtoon_frag:AS,points_vert:CS,points_frag:RS,shadow_vert:PS,shadow_frag:bS,sprite_vert:LS,sprite_frag:DS},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},gi={basic:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Tn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Tn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Tn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Tn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Tn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Tn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Tn([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Tn([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};gi.physical={uniforms:Tn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Pl={r:0,b:0,g:0},Gr=new Vi,US=new Wt;function IS(s,e,t,r,a,l,f){const c=new Ct(0);let h=l===!0?0:1,m,g,v=null,x=0,S=null;function E(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function C(b){let R=!1;const G=E(b);G===null?_(c,h):G&&G.isColor&&(_(G,1),R=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,R){const G=E(R);G&&(G.isCubeTexture||G.mapping===Xl)?(g===void 0&&(g=new ai(new Zo(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:to(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Gr.copy(R.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(Gr)),g.material.toneMapped=At.getTransfer(G.colorSpace)!==bt,(v!==G||x!==G.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new ai(new Yl(2,2),new Tr({name:"BackgroundMaterial",uniforms:to(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=At.getTransfer(G.colorSpace)!==bt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function _(b,R){b.getRGB(Pl,cg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,R,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,R=1){c.set(b),h=R,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,_(c,h)},render:C,addToRenderList:y,dispose:U}}function NS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,f=!1;function c(w,H,ae,Q,de){let ge=!1;const oe=v(Q,ae,H);l!==oe&&(l=oe,m(l.object)),ge=S(w,Q,ae,de),ge&&E(w,Q,ae,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,R(w,H,ae,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,H,ae){const Q=ae.wireframe===!0;let de=r[w.id];de===void 0&&(de={},r[w.id]=de);let ge=de[H.id];ge===void 0&&(ge={},de[H.id]=ge);let oe=ge[Q];return oe===void 0&&(oe=x(h()),ge[Q]=oe),oe}function x(w){const H=[],ae=[],Q=[];for(let de=0;de<t;de++)H[de]=0,ae[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ae,attributeDivisors:Q,object:w,attributes:{},index:null}}function S(w,H,ae,Q){const de=l.attributes,ge=H.attributes;let oe=0;const ce=ae.getAttributes();for(const V in ce)if(ce[V].location>=0){const se=de[V];let I=ge[V];if(I===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Q}function E(w,H,ae,Q){const de={},ge=H.attributes;let oe=0;const ce=ae.getAttributes();for(const V in ce)if(ce[V].location>=0){let se=ge[V];se===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),de[V]=I,oe++}l.attributes=de,l.attributesNum=oe,l.index=Q}function C(){const w=l.newAttributes;for(let H=0,ae=w.length;H<ae;H++)w[H]=0}function y(w){_(w,0)}function _(w,H){const ae=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;ae[w]=1,Q[w]===0&&(s.enableVertexAttribArray(w),Q[w]=1),de[w]!==H&&(s.vertexAttribDivisor(w,H),de[w]=H)}function U(){const w=l.newAttributes,H=l.enabledAttributes;for(let ae=0,Q=H.length;ae<Q;ae++)H[ae]!==w[ae]&&(s.disableVertexAttribArray(ae),H[ae]=0)}function b(w,H,ae,Q,de,ge,oe){oe===!0?s.vertexAttribIPointer(w,H,ae,de,ge):s.vertexAttribPointer(w,H,ae,Q,de,ge)}function R(w,H,ae,Q){C();const de=Q.attributes,ge=ae.getAttributes(),oe=H.defaultAttributeValues;for(const ce in ge){const V=ge[ce];if(V.location>=0){let le=de[ce];if(le===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,re=e.get(le);if(re===void 0)continue;const Ie=re.buffer,ee=re.type,me=re.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||le.gpuType===nd;if(le.isInterleavedBufferAttribute){const ye=le.data,Re=ye.stride,Ze=le.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<V.locationSize;Ye++)_(V.location+Ye,ye.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<V.locationSize;Ye++)y(V.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ye=0;Ye<V.locationSize;Ye++)b(V.location+Ye,I/V.locationSize,ee,se,Re*me,(Ze+I/V.locationSize*Ye)*me,Me)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)_(V.location+ye,le.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ye=0;ye<V.locationSize;ye++)b(V.location+ye,I/V.locationSize,ee,se,I*me,I/V.locationSize*ye*me,Me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(V.location,se);break;case 3:s.vertexAttrib3fv(V.location,se);break;case 4:s.vertexAttrib4fv(V.location,se);break;default:s.vertexAttrib1fv(V.location,se)}}}}U()}function G(){W();for(const w in r){const H=r[w];for(const ae in H){const Q=H[ae];for(const de in Q)g(Q[de].object),delete Q[de];delete H[ae]}delete r[w]}}function F(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const ae in H){const Q=H[ae];for(const de in Q)g(Q[de].object),delete Q[de];delete H[ae]}delete r[w.id]}function N(w){for(const H in r){const ae=r[H];if(ae[w.id]===void 0)continue;const Q=ae[w.id];for(const de in Q)g(Q[de].object),delete Q[de];delete ae[w.id]}}function W(){P(),f=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:W,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function FS(s,e,t){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),t.update(g,r,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),t.update(g,r,v))}function c(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];t.update(S,r,1)}function h(m,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let E=0;for(let C=0;C<v;C++)E+=g[C]*x[C];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function OS(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==oi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const W=N===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Hi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==zi&&!W)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:c,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:G,maxSamples:F}}function zS(s){const e=this;let t=null,r=0,a=!1,l=!1;const f=new vr,c=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?g(null):m();else{const U=l?0:r,b=U*4;let R=_.clippingState||null;h.value=R,R=g(E,x,b,S);for(let G=0;G!==b;++G)R[G]=t[G];_.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,E){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=h.value,E!==!0||y===null){const _=S+C*4,U=x.matrixWorldInverse;c.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let b=0,R=S;b!==C;++b,R+=4)f.copy(v[b]).applyMatrix4(U,c),f.normal.toArray(y,R),y[R+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function BS(s){let e=new WeakMap;function t(f,c){return c===Sf?f.mapping=Ks:c===Mf&&(f.mapping=Zs),f}function r(f){if(f&&f.isTexture){const c=f.mapping;if(c===Sf||c===Mf)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new A0(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),t(m.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ws=4,gm=[.125,.215,.35,.446,.526,.582],qr=20,sf=new zl,_m=new Ct;let of=null,af=0,lf=0,uf=!1;const Xr=(1+Math.sqrt(5))/2,Vs=1/Xr,vm=[new Y(-Xr,Vs,0),new Y(Xr,Vs,0),new Y(-Vs,0,Xr),new Y(Vs,0,Xr),new Y(0,Xr,-Vs),new Y(0,Xr,Vs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=uf,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:jo,format:oi,colorSpace:eo,depthBuffer:!1},a=ym(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(l)),this._blurMaterial=HS(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,sf)}_sceneToCubeUV(e,t,r,a){const c=new wn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(_m),g.toneMapping=Sr,g.autoClear=!1;const S=new Gl({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new ai(new Zo,S);let C=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,C=!0):(S.color.copy(_m),C=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):U===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const b=this._cubeSize;bl(a,U*b,_>2?b:0,b,b),g.setRenderTarget(a),C&&g.render(E,c),g.render(e,c)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new ai(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;bl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,sf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=vm[(a-l-1)%vm.length];this._blur(e,l-1,l,f,c)}t.autoClear=r}_blur(e,t,r,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,a,"latitudinal",l),this._halfBlur(f,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,f,c){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ai(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),C=l/E,y=isFinite(l)?1+Math.floor(g*C):qr;y>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const _=[];let U=0;for(let N=0;N<qr;++N){const W=N/C,P=Math.exp(-W*W/2);_.push(P),N===0?U+=P:N<y&&(U+=2*P)}for(let N=0;N<_.length;N++)_[N]=_[N]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-r;const R=this._sizeLods[a],G=3*R*(a>b-Ws?a-b+Ws:0),F=4*(this._cubeSize-R);bl(t,G,F,3*R,2*R),h.setRenderTarget(t),h.render(v,sf)}}function kS(s){const e=[],t=[],r=[];let a=s;const l=s-Ws+1+gm.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>s-Ws?h=gm[f-s+Ws-1]:f===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,C=3,y=2,_=1,U=new Float32Array(C*E*S),b=new Float32Array(y*E*S),R=new Float32Array(_*E*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,W=F>2?0:-1,P=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];U.set(P,C*E*F),b.set(x,y*E*F);const w=[F,F,F,F,F,F];R.set(w,_*E*F)}const G=new xi;G.setAttribute("position",new ui(U,C)),G.setAttribute("uv",new ui(b,y)),G.setAttribute("faceIndex",new ui(R,_)),e.push(G),a>Ws&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ym(s,e,t){const r=new Zr(s,e,t);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function HS(s,e,t){const r=new Float32Array(qr),a=new Y(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Sm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Mm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function dd(){return`

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
	`}function VS(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===Sf||h===Mf,g=h===Ks||h===Zs;if(m||g){let v=e.get(c);const x=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new xm(s)),v=m?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const S=c.image;return m&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new xm(s)),v=m?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",l),v.texture):null}}}return c}function a(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function GS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function WS(s,e,t,r){const a={},l=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,E=v.attributes.position;let C=0;if(S!==null){const U=S.array;C=S.version;for(let b=0,R=U.length;b<R;b+=3){const G=U[b+0],F=U[b+1],N=U[b+2];x.push(G,F,F,N,N,G)}}else if(E!==void 0){const U=E.array;C=E.version;for(let b=0,R=U.length/3-1;b<R;b+=3){const G=b+0,F=b+1,N=b+2;x.push(G,F,F,N,N,G)}}else return;const y=new(ng(x)?ug:lg)(x,1);y.version=C;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function XS(s,e,t){let r;function a(x){r=x}let l,f;function c(x){l=x.type,f=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*f),t.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*f,E),t.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];t.update(y,r,1)}function v(x,S,E,C){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,C,0,E);let _=0;for(let U=0;U<E;U++)_+=S[U]*C[U];t.update(_,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function YS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function qS(s,e,t){const r=new WeakMap,a=new Yt;function l(f,c,h){const m=f.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(c);if(x===void 0||x.count!==v){let w=function(){W.dispose(),r.delete(c),c.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],U=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let G=c.attributes.position.count*R,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const N=new Float32Array(G*F*4*v),W=new rg(N,G,F,v);W.type=zi,W.needsUpdate=!0;const P=R*4;for(let H=0;H<v;H++){const ae=_[H],Q=U[H],de=b[H],ge=G*F*4*H;for(let oe=0;oe<ae.count;oe++){const ce=oe*P;E===!0&&(a.fromBufferAttribute(ae,oe),N[ge+ce+0]=a.x,N[ge+ce+1]=a.y,N[ge+ce+2]=a.z,N[ge+ce+3]=0),C===!0&&(a.fromBufferAttribute(Q,oe),N[ge+ce+4]=a.x,N[ge+ce+5]=a.y,N[ge+ce+6]=a.z,N[ge+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),N[ge+ce+8]=a.x,N[ge+ce+9]=a.y,N[ge+ce+10]=a.z,N[ge+ce+11]=de.itemSize===4?a.w:1)}}x={count:v,texture:W,size:new Xe(G,F)},r.set(c,x),c.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const C=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function jS(s,e,t,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}const Sg=new An,Em=new gg(1,1),Mg=new rg,Eg=new u0,Tg=new dg,Tm=[],wm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function io(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Tm[a];if(l===void 0&&(l=new Float32Array(a),Tm[a]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ql(s,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function $S(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function KS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function QS(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Rm.set(r),s.uniformMatrix2fv(this.addr,!1,Rm),en(t,r)}}function eM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Cm.set(r),s.uniformMatrix3fv(this.addr,!1,Cm),en(t,r)}}function tM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),en(t,r)}}function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function cM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=tg,l=Em):l=Sg,t.setTexture2D(e||l,a)}function fM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Eg,a)}function dM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Tg,a)}function hM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Mg,a)}function pM(s){switch(s){case 5126:return $S;case 35664:return KS;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}function mM(s,e){s.uniform1fv(this.addr,e)}function gM(s,e){const t=io(e,this.size,2);s.uniform2fv(this.addr,t)}function _M(s,e){const t=io(e,this.size,3);s.uniform3fv(this.addr,t)}function vM(s,e){const t=io(e,this.size,4);s.uniform4fv(this.addr,t)}function xM(s,e){const t=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yM(s,e){const t=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function SM(s,e){const t=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MM(s,e){s.uniform1iv(this.addr,e)}function EM(s,e){s.uniform2iv(this.addr,e)}function TM(s,e){s.uniform3iv(this.addr,e)}function wM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function PM(s,e){s.uniform4uiv(this.addr,e)}function bM(s,e,t){const r=this.cache,a=e.length,l=ql(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||Sg,l[f])}function LM(s,e,t){const r=this.cache,a=e.length,l=ql(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Eg,l[f])}function DM(s,e,t){const r=this.cache,a=e.length,l=ql(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Tg,l[f])}function UM(s,e,t){const r=this.cache,a=e.length,l=ql(t,a);Qt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Mg,l[f])}function IM(s){switch(s){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return UM}}class NM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class FM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IM(t.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],r)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,t){const r=s.name,a=r.length;for(cf.lastIndex=0;;){const l=cf.exec(r),f=cf.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&f+2===a){Pm(t,m===void 0?new NM(c,s,e):new FM(c,s,e));break}else{let v=t.map[c];v===void 0&&(v=new OM(c),Pm(t,v)),t=v}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);zM(l,f,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&r.push(f)}return r}}function bm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BM=37297;let kM=0;function HM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}const Lm=new dt;function VM(s){At._getMatrix(Lm,At.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+HM(s.getShaderSource(e),f)}else return a}function GM(s,e){const t=VM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WM(s,e){let t;switch(e){case Iv:t="Linear";break;case Nv:t="Reinhard";break;case Fv:t="Cineon";break;case Ov:t="ACESFilmic";break;case Bv:t="AgX";break;case kv:t="Neutral";break;case zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ll=new Y;function XM(){At.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function qM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function Wo(s){return s!==""}function Um(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(s){return s.replace($M,ZM)}const KM=new Map;function ZM(s,e){let t=ht[e];if(t===void 0){const r=KM.get(e);if(r!==void 0)t=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(JM,QM)}function QM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Fm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function eE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gm:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Uv:e="ENVMAP_BLENDING_ADD";break}return e}function rE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function sE(s,e,t,r){const a=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=eE(t),m=tE(t),g=nE(t),v=iE(t),x=rE(t),S=YM(t),E=qM(l),C=a.createProgram();let y,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(y=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Sr?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Qf(f),f=Um(f,t),f=Im(f,t),c=Qf(c),c=Um(c,t),c=Im(c,t),f=Nm(f),c=Nm(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=U+y+f,R=U+_+c,G=bm(a,a.VERTEX_SHADER,b),F=bm(a,a.FRAGMENT_SHADER,R);a.attachShader(C,G),a.attachShader(C,F),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function N(H){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(C).trim(),Q=a.getShaderInfoLog(G).trim(),de=a.getShaderInfoLog(F).trim();let ge=!0,oe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ge=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,G,F);else{const ce=Dm(a,G,"vertex"),V=Dm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+ce+`
`+V)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(Q===""||de==="")&&(oe=!1);oe&&(H.diagnostics={runnable:ge,programLog:ae,vertexShader:{log:Q,prefix:y},fragmentShader:{log:de,prefix:_}})}a.deleteShader(G),a.deleteShader(F),W=new Bl(a,C),P=jM(a,C)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(C,BM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=F,this}let oE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new lE(e),t.set(e,r)),r}}class lE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s,e,t,r,a,l,f){const c=new og,h=new aE,m=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,w,H,ae,Q){const de=ae.fog,ge=Q.geometry,oe=P.isMeshStandardMaterial?ae.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),V=ce&&ce.mapping===Xl?ce.image.height:null,le=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,I=se!==void 0?se.length:0;let re=0;ge.morphAttributes.position!==void 0&&(re=1),ge.morphAttributes.normal!==void 0&&(re=2),ge.morphAttributes.color!==void 0&&(re=3);let Ie,ee,me,Me;if(le){const mt=gi[le];Ie=mt.vertexShader,ee=mt.fragmentShader}else Ie=P.vertexShader,ee=P.fragmentShader,h.update(P),me=h.getVertexShaderID(P),Me=h.getFragmentShaderID(P);const ye=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ze=Q.isInstancedMesh===!0,Ye=Q.isBatchedMesh===!0,Pt=!!P.map,Rt=!!P.matcap,lt=!!ce,z=!!P.aoMap,ln=!!P.lightMap,pt=!!P.bumpMap,ct=!!P.normalMap,Ke=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,_e=P.iridescence>0,he=P.sheen>0,Ge=P.transmission>0,Ce=T&&!!P.anisotropyMap,Oe=Z&&!!P.clearcoatMap,ft=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,Be=_e&&!!P.iridescenceMap,Qe=_e&&!!P.iridescenceThicknessMap,rt=he&&!!P.sheenColorMap,ze=he&&!!P.sheenRoughnessMap,k=!!P.specularMap,ue=!!P.specularColorMap,Pe=!!P.specularIntensityMap,O=Ge&&!!P.transmissionMap,Te=Ge&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,Ue=P.alphaTest>0,be=!!P.alphaHash,et=!!P.extensions;let xt=Sr;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xt=s.toneMapping);const It={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:ee,defines:P.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&Q._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Q.instanceColor!==null,instancingMorph:Ze&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:eo,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Rt,envMap:lt,envMapMode:lt&&ce.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:ln,bumpMap:pt,normalMap:ct,displacementMap:x&&Ke,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===Xv,normalMapTangentSpace:ct&&P.normalMapType===Wv,metalnessMap:qe,roughnessMap:L,anisotropy:T,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:pe,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:rt,sheenRoughnessMap:ze,specularMap:k,specularColorMap:ue,specularIntensityMap:Pe,transmission:Ge,transmissionMap:O,thicknessMap:Te,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Ys&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:be,combine:P.combine,mapUv:Pt&&C(P.map.channel),aoMapUv:z&&C(P.aoMap.channel),lightMapUv:ln&&C(P.lightMap.channel),bumpMapUv:pt&&C(P.bumpMap.channel),normalMapUv:ct&&C(P.normalMap.channel),displacementMapUv:Ke&&C(P.displacementMap.channel),emissiveMapUv:Tt&&C(P.emissiveMap.channel),metalnessMapUv:qe&&C(P.metalnessMap.channel),roughnessMapUv:L&&C(P.roughnessMap.channel),anisotropyMapUv:Ce&&C(P.anisotropyMap.channel),clearcoatMapUv:Oe&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(P.sheenRoughnessMap.channel),specularMapUv:k&&C(P.specularMap.channel),specularColorMapUv:ue&&C(P.specularColorMap.channel),specularIntensityMapUv:Pe&&C(P.specularIntensityMap.channel),transmissionMapUv:O&&C(P.transmissionMap.channel),thicknessMapUv:Te&&C(P.thicknessMap.channel),alphaMapUv:fe&&C(P.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(ct||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ge.attributes.uv&&(Pt||fe),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Re,skinning:Q.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:et&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&P.extensions.multiDraw===!0||Ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return It.vertexUv1s=m.has(1),It.vertexUv2s=m.has(2),It.vertexUv3s=m.has(3),m.clear(),It}function _(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)w.push(H),w.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(U(w,P),b(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function U(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function b(P,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reverseDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const w=E[P.type];let H;if(w){const ae=gi[w];H=M0.clone(ae.uniforms)}else H=P.uniforms;return H}function G(P,w){let H;for(let ae=0,Q=g.length;ae<Q;ae++){const de=g[ae];if(de.cacheKey===w){H=de,++H.usedTimes;break}}return H===void 0&&(H=new sE(s,w,P,l),g.push(H)),H}function F(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function N(P){h.remove(P)}function W(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:G,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:W}}function cE(){let s=new WeakMap;function e(f){return s.has(f)}function t(f){let c=s.get(f);return c===void 0&&(c={},s.set(f,c)),c}function r(f){s.delete(f)}function a(f,c,h){s.get(f)[c]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function f(v,x,S,E,C,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:C,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=C,_.group=y),e++,_}function c(v,x,S,E,C,y){const _=f(v,x,S,E,C,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(v,x,S,E,C,y){const _=f(v,x,S,E,C,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function m(v,x){t.length>1&&t.sort(v||fE),r.length>1&&r.sort(x||Om),a.length>1&&a.sort(x||Om)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:m}}function dE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let f;return l===void 0?(f=new zm,s.set(r,[f])):a>=l.length?(f=new zm,l.push(f)):f=l[a],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mE=0;function gE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _E(s){const e=new hE,t=pE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const a=new Y,l=new Wt,f=new Wt;function c(m){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,C=0,y=0,_=0,U=0,b=0,R=0,G=0,F=0,N=0;m.sort(gE);for(let P=0,w=m.length;P<w;P++){const H=m[P],ae=H.color,Q=H.intensity,de=H.distance,ge=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ae.r*Q,v+=ae.g*Q,x+=ae.b*Q;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],Q);N++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ce=H.shadow,V=t.get(H);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=ge,r.directionalShadowMatrix[S]=H.shadow.matrix,U++}r.directional[S]=oe,S++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(ae).multiplyScalar(Q),oe.distance=de,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[C]=oe;const ce=H.shadow;if(H.map&&(r.spotLightMap[G]=H.map,G++,ce.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[C]=ce.matrix,H.castShadow){const V=t.get(H);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,r.spotShadow[C]=V,r.spotShadowMap[C]=ge,R++}C++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(ae).multiplyScalar(Q),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const ce=H.shadow,V=t.get(H);V.shadowIntensity=ce.intensity,V.shadowBias=ce.bias,V.shadowNormalBias=ce.normalBias,V.shadowRadius=ce.radius,V.shadowMapSize=ce.mapSize,V.shadowCameraNear=ce.camera.near,V.shadowCameraFar=ce.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=ge,r.pointShadowMatrix[E]=H.shadow.matrix,b++}r.point[E]=oe,E++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(Q),oe.groundColor.copy(H.groundColor).multiplyScalar(Q),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==C||W.rectAreaLength!==y||W.hemiLength!==_||W.numDirectionalShadows!==U||W.numPointShadows!==b||W.numSpotShadows!==R||W.numSpotMaps!==G||W.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,W.directionalLength=S,W.pointLength=E,W.spotLength=C,W.rectAreaLength=y,W.hemiLength=_,W.numDirectionalShadows=U,W.numPointShadows=b,W.numSpotShadows=R,W.numSpotMaps=G,W.numLightProbes=N,r.version=mE++)}function h(m,g){let v=0,x=0,S=0,E=0,C=0;const y=g.matrixWorldInverse;for(let _=0,U=m.length;_<U;_++){const b=m[_];if(b.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),v++}else if(b.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),f.identity(),l.copy(b.matrixWorld),l.premultiply(y),f.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(b.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:c,setupView:h,state:r}}function Bm(s){const e=new _E(s),t=[],r=[];function a(g){m.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function f(g){r.push(g)}function c(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:c,setupLightsView:h,pushLight:l,pushShadow:f}}function vE(s){let e=new WeakMap;function t(a,l=0){const f=e.get(a);let c;return f===void 0?(c=new Bm(s),e.set(a,[c])):l>=f.length?(c=new Bm(s),f.push(c)):c=f[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yE=`uniform sampler2D shadow_pass;
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
}`;function SE(s,e,t){let r=new mg;const a=new Xe,l=new Xe,f=new Yt,c=new $0({depthPacking:Gv}),h=new K0,m={},g=t.maxTextureSize,v={[Er]:Un,[Un]:Er,[Oi]:Oi},x=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:xE,fragmentShader:yE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new xi;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ai(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let _=this.type;this.render=function(F,N,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(yr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const Q=_!==Fi&&this.type===Fi,de=_===Fi&&this.type!==Fi;for(let ge=0,oe=F.length;ge<oe;ge++){const ce=F[ge],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const le=V.getFrameExtents();if(a.multiply(le),l.copy(V.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/le.x),a.x=l.x*le.x,V.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/le.y),a.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||Q===!0||de===!0){const I=this.type!==Fi?{minFilter:li,magFilter:li}:{};V.map!==null&&V.map.dispose(),V.map=new Zr(a.x,a.y,I),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const se=V.getViewportCount();for(let I=0;I<se;I++){const re=V.getViewport(I);f.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ae.viewport(f),V.updateMatrices(ce,I),r=V.getFrustum(),R(N,W,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&U(V,W),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,H)};function U(F,N){const W=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Zr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,W,x,C,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,W,S,C,null)}function b(F,N,W,P){let w=null;const H=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)w=H;else if(w=W.isPointLight===!0?h:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ae=w.uuid,Q=N.uuid;let de=m[ae];de===void 0&&(de={},m[ae]=de);let ge=de[Q];ge===void 0&&(ge=w.clone(),de[Q]=ge,N.addEventListener("dispose",G)),w=ge}if(w.visible=N.visible,w.wireframe=N.wireframe,P===Fi?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:v[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ae=s.properties.get(w);ae.light=W}return w}function R(F,N,W,P,w){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===Fi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),de=F.material;if(Array.isArray(de)){const ge=Q.groups;for(let oe=0,ce=ge.length;oe<ce;oe++){const V=ge[oe],le=de[V.materialIndex];if(le&&le.visible){const se=b(F,le,P,w);F.onBeforeShadow(s,F,N,W,Q,se,V),s.renderBufferDirect(W,null,Q,se,F,V),F.onAfterShadow(s,F,N,W,Q,se,V)}}}else if(de.visible){const ge=b(F,de,P,w);F.onBeforeShadow(s,F,N,W,Q,ge,null),s.renderBufferDirect(W,null,Q,ge,F,null),F.onAfterShadow(s,F,N,W,Q,ge,null)}}const ae=F.children;for(let Q=0,de=ae.length;Q<de;Q++)R(ae[Q],N,W,P,w)}function G(F){F.target.removeEventListener("dispose",G);for(const W in m){const P=m[W],w=F.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const ME={[pf]:mf,[gf]:xf,[_f]:yf,[$s]:vf,[mf]:pf,[xf]:gf,[yf]:_f,[vf]:$s};function EE(s,e){function t(){let O=!1;const Te=new Yt;let ie=null;const fe=new Yt(0,0,0,0);return{setMask:function(Ue){ie!==Ue&&!O&&(s.colorMask(Ue,Ue,Ue,Ue),ie=Ue)},setLocked:function(Ue){O=Ue},setClear:function(Ue,be,et,xt,It){It===!0&&(Ue*=xt,be*=xt,et*=xt),Te.set(Ue,be,et,xt),fe.equals(Te)===!1&&(s.clearColor(Ue,be,et,xt),fe.copy(Te))},reset:function(){O=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let O=!1,Te=!1,ie=null,fe=null,Ue=null;return{setReversed:function(be){if(Te!==be){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ue;Ue=null,this.setClear(xt)}Te=be},getReversed:function(){return Te},setTest:function(be){be?ye(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(be){ie!==be&&!O&&(s.depthMask(be),ie=be)},setFunc:function(be){if(Te&&(be=ME[be]),fe!==be){switch(be){case pf:s.depthFunc(s.NEVER);break;case mf:s.depthFunc(s.ALWAYS);break;case gf:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case _f:s.depthFunc(s.EQUAL);break;case vf:s.depthFunc(s.GEQUAL);break;case xf:s.depthFunc(s.GREATER);break;case yf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=be}},setLocked:function(be){O=be},setClear:function(be){Ue!==be&&(Te&&(be=1-be),s.clearDepth(be),Ue=be)},reset:function(){O=!1,ie=null,fe=null,Ue=null,Te=!1}}}function a(){let O=!1,Te=null,ie=null,fe=null,Ue=null,be=null,et=null,xt=null,It=null;return{setTest:function(mt){O||(mt?ye(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!O&&(s.stencilMask(mt),Te=mt)},setFunc:function(mt,qt,jt){(ie!==mt||fe!==qt||Ue!==jt)&&(s.stencilFunc(mt,qt,jt),ie=mt,fe=qt,Ue=jt)},setOp:function(mt,qt,jt){(be!==mt||et!==qt||xt!==jt)&&(s.stencilOp(mt,qt,jt),be=mt,et=qt,xt=jt)},setLocked:function(mt){O=mt},setClear:function(mt){It!==mt&&(s.clearStencil(mt),It=mt)},reset:function(){O=!1,Te=null,ie=null,fe=null,Ue=null,be=null,et=null,xt=null,It=null}}}const l=new t,f=new r,c=new a,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,C=!1,y=null,_=null,U=null,b=null,R=null,G=null,F=null,N=new Ct(0,0,0),W=0,P=!1,w=null,H=null,ae=null,Q=null,de=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=ce>=2);let le=null,se={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ie=new Yt().fromArray(I),ee=new Yt().fromArray(re);function me(O,Te,ie,fe){const Ue=new Uint8Array(4),be=s.createTexture();s.bindTexture(O,be),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ie;et++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return be}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),f.setClear(1),c.setClear(0),ye(s.DEPTH_TEST),f.setFunc($s),pt(!1),ct(dv),ye(s.CULL_FACE),z(yr);function ye(O){g[O]!==!0&&(s.enable(O),g[O]=!0)}function Re(O){g[O]!==!1&&(s.disable(O),g[O]=!1)}function Ze(O,Te){return v[O]!==Te?(s.bindFramebuffer(O,Te),v[O]=Te,O===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),O===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ye(O,Te){let ie=S,fe=!1;if(O){ie=x.get(Te),ie===void 0&&(ie=[],x.set(Te,ie));const Ue=O.textures;if(ie.length!==Ue.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let be=0,et=Ue.length;be<et;be++)ie[be]=s.COLOR_ATTACHMENT0+be;ie.length=Ue.length,fe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ie)}function Pt(O){return E!==O?(s.useProgram(O),E=O,!0):!1}const Rt={[Yr]:s.FUNC_ADD,[mv]:s.FUNC_SUBTRACT,[gv]:s.FUNC_REVERSE_SUBTRACT};Rt[_v]=s.MIN,Rt[vv]=s.MAX;const lt={[xv]:s.ZERO,[yv]:s.ONE,[Sv]:s.SRC_COLOR,[df]:s.SRC_ALPHA,[Cv]:s.SRC_ALPHA_SATURATE,[wv]:s.DST_COLOR,[Ev]:s.DST_ALPHA,[Mv]:s.ONE_MINUS_SRC_COLOR,[hf]:s.ONE_MINUS_SRC_ALPHA,[Av]:s.ONE_MINUS_DST_COLOR,[Tv]:s.ONE_MINUS_DST_ALPHA,[Rv]:s.CONSTANT_COLOR,[Pv]:s.ONE_MINUS_CONSTANT_COLOR,[bv]:s.CONSTANT_ALPHA,[Lv]:s.ONE_MINUS_CONSTANT_ALPHA};function z(O,Te,ie,fe,Ue,be,et,xt,It,mt){if(O===yr){C===!0&&(Re(s.BLEND),C=!1);return}if(C===!1&&(ye(s.BLEND),C=!0),O!==pv){if(O!==y||mt!==P){if((_!==Yr||R!==Yr)&&(s.blendEquation(s.FUNC_ADD),_=Yr,R=Yr),mt)switch(O){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.ONE,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}U=null,b=null,G=null,F=null,N.set(0,0,0),W=0,y=O,P=mt}return}Ue=Ue||Te,be=be||ie,et=et||fe,(Te!==_||Ue!==R)&&(s.blendEquationSeparate(Rt[Te],Rt[Ue]),_=Te,R=Ue),(ie!==U||fe!==b||be!==G||et!==F)&&(s.blendFuncSeparate(lt[ie],lt[fe],lt[be],lt[et]),U=ie,b=fe,G=be,F=et),(xt.equals(N)===!1||It!==W)&&(s.blendColor(xt.r,xt.g,xt.b,It),N.copy(xt),W=It),y=O,P=!1}function ln(O,Te){O.side===Oi?Re(s.CULL_FACE):ye(s.CULL_FACE);let ie=O.side===Un;Te&&(ie=!ie),pt(ie),O.blending===Ys&&O.transparent===!1?z(yr):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),f.setFunc(O.depthFunc),f.setTest(O.depthTest),f.setMask(O.depthWrite),l.setMask(O.colorWrite);const fe=O.stencilWrite;c.setTest(fe),fe&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(O){w!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),w=O)}function ct(O){ye(s.CULL_FACE),O!==H&&s.cullFace(s.BACK),H=O}function Ke(O){O!==ae&&(oe&&s.lineWidth(O),ae=O)}function Tt(O,Te,ie){O?(ye(s.POLYGON_OFFSET_FILL),(Q!==Te||de!==ie)&&(s.polygonOffset(Te,ie),Q=Te,de=ie)):Re(s.POLYGON_OFFSET_FILL)}function qe(O){O?ye(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+ge-1),le!==O&&(s.activeTexture(O),le=O)}function T(O,Te,ie){ie===void 0&&(le===null?ie=s.TEXTURE0+ge-1:ie=le);let fe=se[ie];fe===void 0&&(fe={type:void 0,texture:void 0},se[ie]=fe),(fe.type!==O||fe.texture!==Te)&&(le!==ie&&(s.activeTexture(ie),le=ie),s.bindTexture(O,Te||Me[O]),fe.type=O,fe.texture=Te)}function Z(){const O=se[le];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){Ie.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ie.copy(O))}function ze(O){ee.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function k(O,Te){let ie=m.get(Te);ie===void 0&&(ie=new WeakMap,m.set(Te,ie));let fe=ie.get(O);fe===void 0&&(fe=s.getUniformBlockIndex(Te,O.name),ie.set(O,fe))}function ue(O,Te){const fe=m.get(Te).get(O);h.get(Te)!==fe&&(s.uniformBlockBinding(Te,fe,O.__bindingPointIndex),h.set(Te,fe))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},le=null,se={},v={},x=new WeakMap,S=[],E=null,C=!1,y=null,_=null,U=null,b=null,R=null,G=null,F=null,N=new Ct(0,0,0),W=0,P=!1,w=null,H=null,ae=null,Q=null,de=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),f.reset(),c.reset()}return{buffers:{color:l,depth:f,stencil:c},enable:ye,disable:Re,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:Pt,setBlending:z,setMaterial:ln,setFlipSided:pt,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:L,bindTexture:T,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:Be,texImage3D:Qe,updateUBOMapping:k,uniformBlockBinding:ue,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:rt,viewport:ze,reset:Pe}}function TE(s,e,t,r,a,l,f){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Xe,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):Vl("canvas")}function C(L,T,Z){let pe=1;const _e=qe(L);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(pe*_e.width),Ge=Math.floor(pe*_e.height);v===void 0&&(v=E(he,Ge));const Ce=T?E(he,Ge):v;return Ce.width=he,Ce.height=Ge,Ce.getContext("2d").drawImage(L,0,0,he,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ge+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,T,Z,pe,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=T;if(T===s.RED&&(Z===s.FLOAT&&(he=s.R32F),Z===s.HALF_FLOAT&&(he=s.R16F),Z===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.R8UI),Z===s.UNSIGNED_SHORT&&(he=s.R16UI),Z===s.UNSIGNED_INT&&(he=s.R32UI),Z===s.BYTE&&(he=s.R8I),Z===s.SHORT&&(he=s.R16I),Z===s.INT&&(he=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(he=s.RG32F),Z===s.HALF_FLOAT&&(he=s.RG16F),Z===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RG8UI),Z===s.UNSIGNED_SHORT&&(he=s.RG16UI),Z===s.UNSIGNED_INT&&(he=s.RG32UI),Z===s.BYTE&&(he=s.RG8I),Z===s.SHORT&&(he=s.RG16I),Z===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Z===s.UNSIGNED_INT&&(he=s.RGB32UI),Z===s.BYTE&&(he=s.RGB8I),Z===s.SHORT&&(he=s.RGB16I),Z===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Z===s.UNSIGNED_INT&&(he=s.RGBA32UI),Z===s.BYTE&&(he=s.RGBA8I),Z===s.SHORT&&(he=s.RGBA16I),Z===s.INT&&(he=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const Ge=_e?kl:At.getTransfer(pe);Z===s.FLOAT&&(he=s.RGBA32F),Z===s.HALF_FLOAT&&(he=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(he=Ge===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(L,T){let Z;return L?T===null||T===Kr||T===Js?Z=s.DEPTH24_STENCIL8:T===zi?Z=s.DEPTH32F_STENCIL8:T===qo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Kr||T===Js?Z=s.DEPTH_COMPONENT24:T===zi?Z=s.DEPTH_COMPONENT32F:T===qo&&(Z=s.DEPTH_COMPONENT16),Z}function G(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function F(L){const T=L.target;T.removeEventListener("dispose",F),W(T),T.isVideoTexture&&g.delete(T)}function N(L){const T=L.target;T.removeEventListener("dispose",N),w(T)}function W(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Z=L.source,pe=x.get(Z);if(pe){const _e=pe[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(pe).length===0&&x.delete(Z)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const Z=L.source,pe=x.get(Z);delete pe[T.__cacheKey],f.memory.textures--}function w(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let _e=0;_e<T.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=L.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const he=r.get(Z[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(Z[pe])}r.remove(L)}let H=0;function ae(){H=0}function Q(){const L=H;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),H+=1,L}function de(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ge(L,T){const Z=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Z,L,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function oe(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ce(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){ee(Z,L,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function V(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){me(Z,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const le={[Ef]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[Tf]:s.MIRRORED_REPEAT},se={[li]:s.NEAREST,[Hv]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[bc]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},I={[Yv]:s.NEVER,[Jv]:s.ALWAYS,[qv]:s.LESS,[tg]:s.LEQUAL,[jv]:s.EQUAL,[Zv]:s.GEQUAL,[$v]:s.GREATER,[Kv]:s.NOTEQUAL};function re(L,T){if(T.type===zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===bc||T.magFilter===ol||T.magFilter===$r||T.minFilter===vi||T.minFilter===bc||T.minFilter===ol||T.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==ol&&T.minFilter!==$r||T.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",F));const pe=T.source;let _e=x.get(pe);_e===void 0&&(_e={},x.set(pe,_e));const he=de(T);if(he!==L.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),_e[he].usedTimes++;const Ge=_e[L.__cacheKey];Ge!==void 0&&(_e[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(T)),L.__cacheKey=he,L.__webglTexture=_e[he].texture}return Z}function ee(L,T,Z){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=Ie(L,T),he=T.source;t.bindTexture(pe,L.__webglTexture,s.TEXTURE0+Z);const Ge=r.get(he);if(he.version!==Ge.__version||_e===!0){t.activeTexture(s.TEXTURE0+Z);const Ce=At.getPrimaries(At.workingColorSpace),Oe=T.colorSpace===xr?null:At.getPrimaries(T.colorSpace),ft=T.colorSpace===xr||Ce===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=C(T.image,!1,a.maxTextureSize);Ee=Tt(T,Ee);const Be=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let rt=b(T.internalFormat,Be,Qe,T.colorSpace,T.isVideoTexture);re(pe,T);let ze;const k=T.mipmaps,ue=T.isVideoTexture!==!0,Pe=Ge.__version===void 0||_e===!0,O=he.dataReady,Te=G(T,Ee);if(T.isDepthTexture)rt=R(T.format===Qs,T.type),Pe&&(ue?t.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,null));else if(T.isDataTexture)if(k.length>0){ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,k[0].width,k[0].height);for(let ie=0,fe=k.length;ie<fe;ie++)ze=k[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,Be,Qe,ze.data);T.generateMipmaps=!1}else ue?(Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Be,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ue&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,k[0].width,k[0].height,Ee.depth);for(let ie=0,fe=k.length;ie<fe;ie++)if(ze=k[ie],T.format!==oi)if(Be!==null)if(ue){if(O)if(T.layerUpdates.size>0){const Ue=mm(ze.width,ze.height,T.format,T.type);for(const be of T.layerUpdates){const et=ze.data.subarray(be*Ue/ze.data.BYTES_PER_ELEMENT,(be+1)*Ue/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,be,ze.width,ze.height,1,Be,et)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Ee.depth,Be,Qe,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,rt,ze.width,ze.height,Ee.depth,0,Be,Qe,ze.data)}else{ue&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,rt,k[0].width,k[0].height);for(let ie=0,fe=k.length;ie<fe;ie++)ze=k[ie],T.format!==oi?Be!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ze.width,ze.height,Be,Qe,ze.data):t.texImage2D(s.TEXTURE_2D,ie,rt,ze.width,ze.height,0,Be,Qe,ze.data)}else if(T.isDataArrayTexture)if(ue){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),O)if(T.layerUpdates.size>0){const ie=mm(Ee.width,Ee.height,T.format,T.type);for(const fe of T.layerUpdates){const Ue=Ee.data.subarray(fe*ie/Ee.data.BYTES_PER_ELEMENT,(fe+1)*ie/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ee.width,Ee.height,1,Be,Qe,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(T.isData3DTexture)ue?(Pe&&t.texStorage3D(s.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Be,Qe,Ee.data);else if(T.isFramebufferTexture){if(Pe)if(ue)t.texStorage2D(s.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let ie=Ee.width,fe=Ee.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,rt,ie,fe,0,Be,Qe,null),ie>>=1,fe>>=1}}else if(k.length>0){if(ue&&Pe){const ie=qe(k[0]);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}for(let ie=0,fe=k.length;ie<fe;ie++)ze=k[ie],ue?O&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Be,Qe,ze):t.texImage2D(s.TEXTURE_2D,ie,rt,Be,Qe,ze);T.generateMipmaps=!1}else if(ue){if(Pe){const ie=qe(Ee);t.texStorage2D(s.TEXTURE_2D,Te,rt,ie.width,ie.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,rt,Be,Qe,Ee);y(T)&&_(pe),Ge.__version=he.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,Z){if(T.image.length!==6)return;const pe=Ie(L,T),_e=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const he=r.get(_e);if(_e.version!==he.__version||pe===!0){t.activeTexture(s.TEXTURE0+Z);const Ge=At.getPrimaries(At.workingColorSpace),Ce=T.colorSpace===xr?null:At.getPrimaries(T.colorSpace),Oe=T.colorSpace===xr||Ge===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let fe=0;fe<6;fe++)!ft&&!Ee?Be[fe]=C(T.image[fe],!0,a.maxCubemapSize):Be[fe]=Ee?T.image[fe].image:T.image[fe],Be[fe]=Tt(T,Be[fe]);const Qe=Be[0],rt=l.convert(T.format,T.colorSpace),ze=l.convert(T.type),k=b(T.internalFormat,rt,ze,T.colorSpace),ue=T.isVideoTexture!==!0,Pe=he.__version===void 0||pe===!0,O=_e.dataReady;let Te=G(T,Qe);re(s.TEXTURE_CUBE_MAP,T);let ie;if(ft){ue&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,k,Qe.width,Qe.height);for(let fe=0;fe<6;fe++){ie=Be[fe].mipmaps;for(let Ue=0;Ue<ie.length;Ue++){const be=ie[Ue];T.format!==oi?rt!==null?ue?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,be.width,be.height,rt,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,k,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,0,0,be.width,be.height,rt,ze,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue,k,be.width,be.height,0,rt,ze,be.data)}}}else{if(ie=T.mipmaps,ue&&Pe){ie.length>0&&Te++;const fe=qe(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,k,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be[fe].width,Be[fe].height,rt,ze,Be[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,k,Be[fe].width,Be[fe].height,0,rt,ze,Be[fe].data);for(let Ue=0;Ue<ie.length;Ue++){const et=ie[Ue].image[fe].image;ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,et.width,et.height,rt,ze,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,k,et.width,et.height,0,rt,ze,et.data)}}else{ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,rt,ze,Be[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,k,rt,ze,Be[fe]);for(let Ue=0;Ue<ie.length;Ue++){const be=ie[Ue];ue?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,0,0,rt,ze,be.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue+1,k,rt,ze,be.image[fe])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,Z,pe,_e,he){const Ge=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Oe=b(Z.internalFormat,Ge,Ce,Z.colorSpace),ft=r.get(T),Ee=r.get(Z);if(Ee.__renderTarget=T,!ft.__hasExternalTextures){const Be=Math.max(1,T.width>>he),Qe=Math.max(1,T.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Oe,Be,Qe,T.depth,0,Ge,Ce,null):t.texImage2D(_e,he,Oe,Be,Qe,0,Ge,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,0,pt(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(L,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const pe=T.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,he=R(T.stencilBuffer,_e),Ge=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(T);ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,L)}else{const pe=T.textures;for(let _e=0;_e<pe.length;_e++){const he=pe[_e],Ge=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Oe=b(he.internalFormat,Ge,Ce,he.colorSpace),ft=pt(T);Z&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Oe,T.width,T.height):ct(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ge(T.depthTexture,0);const _e=pe.__webglTexture,he=pt(T);if(T.depthTexture.format===qs)ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===Qs)ct(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ze(L){const T=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Re(T.__webglFramebuffer,L)}else if(Z){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[pe],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(L,T,Z){const pe=r.get(L);T!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ze(L)}function Pt(L){const T=L.texture,Z=r.get(L),pe=r.get(T);L.addEventListener("dispose",N);const _e=L.textures,he=L.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,f.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)Z.__webglFramebuffer[Ce][Oe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ct(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];Z.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ft=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Be=b(Oe.internalFormat,ft,Ee,Oe.colorSpace,L.isXRRenderTarget===!0),Qe=pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Be,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Ce][Oe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else Me(Z.__webglFramebuffer[Ce],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ft=_e[Ce],Ee=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),re(s.TEXTURE_2D,ft),Me(Z.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),re(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Oe=0;Oe<T.mipmaps.length;Oe++)Me(Z.__webglFramebuffer[Oe],L,T,s.COLOR_ATTACHMENT0,Ce,Oe);else Me(Z.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ce,0);y(T)&&_(Ce),t.unbindTexture()}L.depthBuffer&&Ze(L)}function Rt(L){const T=L.textures;for(let Z=0,pe=T.length;Z<pe;Z++){const _e=T[Z];if(y(_e)){const he=U(L),Ge=r.get(_e).__webglTexture;t.bindTexture(he,Ge),_(he),t.unbindTexture()}}}const lt=[],z=[];function ln(L){if(L.samples>0){if(ct(L)===!1){const T=L.textures,Z=L.width,pe=L.height;let _e=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(L),Ce=T.length>1;if(Ce)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),h===!0&&(lt.length=0,z.length=0,lt.push(s.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(he),z.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Oe]);const ft=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(L){return Math.min(a.maxSamples,L.samples)}function ct(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Tt(L,T){const Z=L.colorSpace,pe=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==eo&&Z!==xr&&(At.getTransfer(Z)===bt?(pe!==oi||_e!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ae,this.setTexture2D=ge,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Ye,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function wE(s,e){function t(r,a=xr){let l;const f=At.getTransfer(a);if(r===Hi)return s.UNSIGNED_BYTE;if(r===id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===rd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xm)return s.BYTE;if(r===Ym)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===nd)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===jm)return s.ALPHA;if(r===$m)return s.RGB;if(r===oi)return s.RGBA;if(r===Km)return s.LUMINANCE;if(r===Zm)return s.LUMINANCE_ALPHA;if(r===qs)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===Jm)return s.RED;if(r===sd)return s.RED_INTEGER;if(r===Qm)return s.RG;if(r===od)return s.RG_INTEGER;if(r===ad)return s.RGBA_INTEGER;if(r===Ul||r===Il||r===Nl||r===Fl)if(f===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wf||r===Af||r===Cf||r===Rf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===wf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Af)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pf||r===bf||r===Lf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pf||r===bf)return f===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Lf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Df||r===Uf||r===If||r===Nf||r===Ff||r===Of||r===zf||r===Bf||r===kf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Df)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ff)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xf)return f===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ol||r===Yf||r===qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ol)return f===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eg||r===jf||r===$f||r===Kf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ol)return l.COMPRESSED_RED_RGTC1_EXT;if(r===jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$f)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const AE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:AE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends no{constructor(e,t){super();const r=this;let a=null,l=1,f=null,c="local-floor",h=1,m=null,g=null,v=null,x=null,S=null,E=null;const C=new RE,y=t.getContextAttributes();let _=null,U=null;const b=[],R=[],G=new Xe;let F=null;const N=new wn;N.viewport=new Yt;const W=new wn;W.viewport=new Yt;const P=[N,W],w=new Z0;let H=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=b[ee];return me===void 0&&(me=new Jc,b[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=b[ee];return me===void 0&&(me=new Jc,b[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=b[ee];return me===void 0&&(me=new Jc,b[ee]=me),me.getHandSpace()};function Q(ee){const me=R.indexOf(ee.inputSource);if(me===-1)return;const Me=b[me];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||f),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function de(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",ge);for(let ee=0;ee<b.length;ee++){const me=R[ee];me!==null&&(R[ee]=null,b[ee].disconnect(me))}H=null,ae=null,C.reset(),e.setRenderTarget(_),S=null,x=null,v=null,a=null,U=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",de),a.addEventListener("inputsourceschange",ge),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ye=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=y.stencil?Qs:qs,ye=y.stencil?Js:Kr);const Ze={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(Ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Zr(x.textureWidth,x.textureHeight,{format:oi,type:Hi,depthTexture:new gg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Zr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(c),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ge(ee){for(let me=0;me<ee.removed.length;me++){const Me=ee.removed[me],ye=R.indexOf(Me);ye>=0&&(R[ye]=null,b[ye].disconnect(Me))}for(let me=0;me<ee.added.length;me++){const Me=ee.added[me];let ye=R.indexOf(Me);if(ye===-1){for(let Ze=0;Ze<b.length;Ze++)if(Ze>=R.length){R.push(Me),ye=Ze;break}else if(R[Ze]===null){R[Ze]=Me,ye=Ze;break}if(ye===-1)break}const Re=b[ye];Re&&Re.connect(Me)}}const oe=new Y,ce=new Y;function V(ee,me,Me){oe.setFromMatrixPosition(me.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ye=oe.distanceTo(ce),Re=me.projectionMatrix.elements,Ze=Me.projectionMatrix.elements,Ye=Re[14]/(Re[10]-1),Pt=Re[14]/(Re[10]+1),Rt=(Re[9]+1)/Re[5],lt=(Re[9]-1)/Re[5],z=(Re[8]-1)/Re[0],ln=(Ze[8]+1)/Ze[0],pt=Ye*z,ct=Ye*ln,Ke=ye/(-z+ln),Tt=Ke*-z;if(me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Tt),ee.translateZ(Ke),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const qe=Ye+Ke,L=Pt+Ke,T=pt-Tt,Z=ct+(ye-Tt),pe=Rt*Pt/L*qe,_e=lt*Pt/L*qe;ee.projectionMatrix.makePerspective(T,Z,pe,_e,qe,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function le(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let me=ee.near,Me=ee.far;C.texture!==null&&(C.depthNear>0&&(me=C.depthNear),C.depthFar>0&&(Me=C.depthFar)),w.near=W.near=N.near=me,w.far=W.far=N.far=Me,(H!==w.near||ae!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ae=w.far),N.layers.mask=ee.layers.mask|2,W.layers.mask=ee.layers.mask|4,w.layers.mask=N.layers.mask|W.layers.mask;const ye=ee.parent,Re=w.cameras;le(w,ye);for(let Ze=0;Ze<Re.length;Ze++)le(Re[Ze],ye);Re.length===2?V(w,N,W):w.projectionMatrix.copy(N.projectionMatrix),se(ee,w,ye)};function se(ee,me,Me){Me===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Jf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(ee){h=ee,x!==null&&(x.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(w)};let I=null;function re(ee,me){if(g=me.getViewerPose(m||f),E=me,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ye=!1;Me.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Ye=0;Ye<Me.length;Ye++){const Pt=Me[Ye];let Rt=null;if(S!==null)Rt=S.getViewport(Pt);else{const z=v.getViewSubImage(x,Pt);Rt=z.viewport,Ye===0&&(e.setRenderTargetTextures(U,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(U))}let lt=P[Ye];lt===void 0&&(lt=new wn,lt.layers.enable(Ye),lt.viewport=new Yt,P[Ye]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ye===0&&(w.matrix.copy(lt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(lt)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ye=v.getDepthInformation(Me[0]);Ye&&Ye.isValid&&Ye.texture&&C.init(e,Ye,a.renderState)}}for(let Me=0;Me<b.length;Me++){const ye=R[Me],Re=b[Me];ye!==null&&Re!==void 0&&Re.update(ye,me,m||f)}I&&I(ee,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ie=new yg;Ie.setAnimationLoop(re),this.setAnimationLoop=function(ee){I=ee},this.dispose=function(){}}}const Wr=new Vi,bE=new Wt;function LE(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,cg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,U,b,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),C(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?h(y,_,U,b):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Un&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Un&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),b=U.envMap,R=U.envMapRotation;b&&(y.envMap.value=b,Wr.copy(R),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(Wr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,U,b){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=b*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function DE(s,e,t,r){let a={},l={},f=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,b){const R=b.program;r.uniformBlockBinding(U,R)}function m(U,b){let R=a[U.id];R===void 0&&(E(U),R=g(U),a[U.id]=R,U.addEventListener("dispose",y));const G=b.program;r.updateUBOMapping(U,G);const F=e.render.frame;l[U.id]!==F&&(x(U),l[U.id]=F)}function g(U){const b=v();U.__bindingPointIndex=b;const R=s.createBuffer(),G=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function v(){for(let U=0;U<c;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const b=a[U.id],R=U.uniforms,G=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let F=0,N=R.length;F<N;F++){const W=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,w=W.length;P<w;P++){const H=W[P];if(S(H,F,P,G)===!0){const ae=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let ge=0;ge<Q.length;ge++){const oe=Q[ge],ce=C(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+de,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,b,R,G){const F=U.value,N=b+"_"+R;if(G[N]===void 0)return typeof F=="number"||typeof F=="boolean"?G[N]=F:G[N]=F.clone(),!0;{const W=G[N];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return G[N]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function E(U){const b=U.uniforms;let R=0;const G=16;for(let N=0,W=b.length;N<W;N++){const P=Array.isArray(b[N])?b[N]:[b[N]];for(let w=0,H=P.length;w<H;w++){const ae=P[w],Q=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,ge=Q.length;de<ge;de++){const oe=Q[de],ce=C(oe),V=R%G,le=V%ce.boundary,se=V+le;R+=le,se!==0&&G-se<ce.storage&&(R+=G-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=ce.storage}}}const F=R%G;return F>0&&(R+=G-F),U.__size=R,U.__cache={},this}function C(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function y(U){const b=U.target;b.removeEventListener("dispose",y);const R=f.indexOf(b.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function _(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},l={}}return{bind:h,update:m,dispose:_}}class UE{constructor(e={}){const{canvas:t=e0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const U=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Sr,this.toneMappingExposure=1;const R=this;let G=!1,F=0,N=0,W=null,P=-1,w=null;const H=new Yt,ae=new Yt;let Q=null;const de=new Ct(0);let ge=0,oe=t.width,ce=t.height,V=1,le=null,se=null;const I=new Yt(0,0,oe,ce),re=new Yt(0,0,oe,ce);let Ie=!1;const ee=new mg;let me=!1,Me=!1;this.transmissionResolutionScale=1;const ye=new Wt,Re=new Wt,Ze=new Y,Ye=new Yt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return W===null?V:1}let z=r;function ln(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${td}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const q="webgl2";if(z=ln(q,A),z===null)throw ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ct,Ke,Tt,qe,L,T,Z,pe,_e,he,Ge,Ce,Oe,ft,Ee,Be,Qe,rt,ze,k,ue,Pe,O;function Te(){pt=new GS(z),pt.init(),ue=new wE(z,pt),ct=new OS(z,pt,e,ue),Ke=new EE(z,pt),ct.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Tt=new YS(z),qe=new cE,L=new TE(z,pt,Ke,qe,ct,ue,Tt),T=new BS(R),Z=new VS(R),pe=new Q0(z),Pe=new NS(z,pe),_e=new WS(z,pe,Tt,Pe),he=new jS(z,_e,pe,Tt),rt=new qS(z,ct,L),Ee=new zS(qe),Ge=new uE(R,T,Z,pt,ct,Pe,Ee),Ce=new LE(R,qe),Oe=new dE,ft=new vE(pt),Qe=new IS(R,T,Z,Ke,he,S,h),Be=new SE(R,he,ct),O=new DE(z,Tt,ct,Ke),ze=new FS(z,pt,Tt),k=new XS(z,pt,Tt),Tt.programs=Ge.programs,R.capabilities=ct,R.extensions=pt,R.properties=qe,R.renderLists=Oe,R.shadowMap=Be,R.state=Ke,R.info=Tt}Te();const ie=new PE(R,z);this.xr=ie,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,q,te=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=q,t.width=Math.floor(A*V),t.height=Math.floor(q*V),te===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(oe*V,ce*V).floor()},this.setDrawingBufferSize=function(A,q,te){oe=A,ce=q,V=te,t.width=Math.floor(A*te),t.height=Math.floor(q*te),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,q,te,K){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,q,te,K),Ke.viewport(H.copy(I).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,q,te,K){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,q,te,K),Ke.scissor(ae.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){Ke.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,q=!0,te=!0){let K=0;if(A){let j=!1;if(W!==null){const we=W.texture.format;j=we===ad||we===od||we===sd}if(j){const we=W.texture.type,Le=we===Hi||we===Kr||we===qo||we===Js||we===id||we===rd,Ne=Qe.getClearColor(),He=Qe.getClearAlpha(),ot=Ne.r,st=Ne.g,We=Ne.b;Le?(E[0]=ot,E[1]=st,E[2]=We,E[3]=He,z.clearBufferuiv(z.COLOR,0,E)):(C[0]=ot,C[1]=st,C[2]=We,C[3]=He,z.clearBufferiv(z.COLOR,0,C))}else K|=z.COLOR_BUFFER_BIT}q&&(K|=z.DEPTH_BUFFER_BIT),te&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Qe.dispose(),Oe.dispose(),ft.dispose(),qe.dispose(),T.dispose(),Z.dispose(),he.dispose(),Pe.dispose(),O.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Qr),ie.removeEventListener("sessionend",Wi),yi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Tt.autoReset,q=Be.enabled,te=Be.autoUpdate,K=Be.needsUpdate,j=Be.type;Te(),Tt.autoReset=A,Be.enabled=q,Be.autoUpdate=te,Be.needsUpdate=K,Be.type=j}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const q=A.target;q.removeEventListener("dispose",et),xt(q)}function xt(A){It(A),qe.remove(A)}function It(A){const q=qe.get(A).programs;q!==void 0&&(q.forEach(function(te){Ge.releaseProgram(te)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,te,K,j,we){q===null&&(q=Pt);const Le=j.isMesh&&j.matrixWorld.determinant()<0,Ne=ea(A,q,te,K,j);Ke.setMaterial(K,Le);let He=te.index,ot=1;if(K.wireframe===!0){if(He=_e.getWireframeAttribute(te),He===void 0)return;ot=2}const st=te.drawRange,We=te.attributes.position;let yt=st.start*ot,ut=(st.start+st.count)*ot;we!==null&&(yt=Math.max(yt,we.start*ot),ut=Math.min(ut,(we.start+we.count)*ot)),He!==null?(yt=Math.max(yt,0),ut=Math.min(ut,He.count)):We!=null&&(yt=Math.max(yt,0),ut=Math.min(ut,We.count));const Ht=ut-yt;if(Ht<0||Ht===1/0)return;Pe.setup(j,K,Ne,te,He);let Ot,St=ze;if(He!==null&&(Ot=pe.get(He),St=k,St.setIndex(Ot)),j.isMesh)K.wireframe===!0?(Ke.setLineWidth(K.wireframeLinewidth*lt()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(j.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*lt()),j.isLineSegments?St.setMode(z.LINES):j.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else j.isPoints?St.setMode(z.POINTS):j.isSprite&&St.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Je=j._multiDrawStarts,Vt=j._multiDrawCounts,vt=j._multiDrawCount,dn=He?pe.get(He).bytesPerElement:1,Yi=qe.get(K).currentProgram.getUniforms();for(let yn=0;yn<vt;yn++)Yi.setValue(z,"_gl_DrawID",yn),St.render(Je[yn]/dn,Vt[yn])}else if(j.isInstancedMesh)St.renderInstances(yt,Ht,j.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Vt=Math.min(te.instanceCount,Je);St.renderInstances(yt,Ht,Vt)}else St.render(yt,Ht)};function mt(A,q,te){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,es(A,q,te),A.side=Er,A.needsUpdate=!0,es(A,q,te),A.side=Oi):es(A,q,te)}this.compile=function(A,q,te=null){te===null&&(te=A),_=ft.get(te),_.init(q),b.push(_),te.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==te&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const K=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ne=we[Le];mt(Ne,te,j),K.add(Ne)}else mt(we,te,j),K.add(we)}),b.pop(),_=null,K},this.compileAsync=function(A,q,te=null){const K=this.compile(A,q,te);return new Promise(j=>{function we(){if(K.forEach(function(Le){qe.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){j(A);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let qt=null;function jt(A){qt&&qt(A)}function Qr(){yi.stop()}function Wi(){yi.start()}const yi=new yg;yi.setAnimationLoop(jt),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){qt=A,ie.setAnimationLoop(A),A===null?yi.stop():yi.start()},ie.addEventListener("sessionstart",Qr),ie.addEventListener("sessionend",Wi),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(q),q=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,W),_=ft.get(A,b.length),_.init(q),b.push(_),Re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(Re),Me=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,Me),y=Oe.get(A,U.length),y.init(),U.push(y),ie.enabled===!0&&ie.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Si(we,q,-1/0,R.sortObjects)}Si(A,q,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,se),Rt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Rt&&Qe.addToRenderList(y,A),this.info.render.frame++,me===!0&&Ee.beginShadows();const te=_.state.shadowsArray;Be.render(te,A,q),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const we=q.cameras;if(j.length>0)for(let Le=0,Ne=we.length;Le<Ne;Le++){const He=we[Le];Ar(K,j,A,He)}Rt&&Qe.render(A);for(let Le=0,Ne=we.length;Le<Ne;Le++){const He=we[Le];wr(y,A,He,He.viewport)}}else j.length>0&&Ar(K,j,A,q),Rt&&Qe.render(A),wr(y,A,q);W!==null&&N===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(R,A,q),Pe.resetDefaultState(),P=-1,w=null,b.pop(),b.length>0?(_=b[b.length-1],me===!0&&Ee.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Si(A,q,te,K){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Le=he.update(A),Ne=A.material;Ne.visible&&y.push(A,Le,Ne,te,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Le=he.update(A),Ne=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ye.copy(Le.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ne)){const He=Le.groups;for(let ot=0,st=He.length;ot<st;ot++){const We=He[ot],yt=Ne[We.materialIndex];yt&&yt.visible&&y.push(A,Le,yt,te,Ye.z,We)}}else Ne.visible&&y.push(A,Le,Ne,te,Ye.z,null)}}const we=A.children;for(let Le=0,Ne=we.length;Le<Ne;Le++)Si(we[Le],q,te,K)}function wr(A,q,te,K){const j=A.opaque,we=A.transmissive,Le=A.transparent;_.setupLightsView(te),me===!0&&Ee.setGlobalState(R.clippingPlanes,te),K&&Ke.viewport(H.copy(K)),j.length>0&&Xi(j,q,te),we.length>0&&Xi(we,q,te),Le.length>0&&Xi(Le,q,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ar(A,q,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new Zr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?jo:Hi,minFilter:$r,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=_.state.transmissionRenderTarget[K.id],Le=K.viewport||H;we.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);const Ne=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(de),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),Rt&&Qe.render(te);const He=R.toneMapping;R.toneMapping=Sr;const ot=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),me===!0&&Ee.setGlobalState(R.clippingPlanes,K),Xi(A,te,K),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let We=0,yt=q.length;We<yt;We++){const ut=q[We],Ht=ut.object,Ot=ut.geometry,St=ut.material,Je=ut.group;if(St.side===Oi&&Ht.layers.test(K.layers)){const Vt=St.side;St.side=Un,St.needsUpdate=!0,Jo(Ht,te,K,Ot,St,Je),St.side=Vt,St.needsUpdate=!0,st=!0}}st===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}R.setRenderTarget(Ne),R.setClearColor(de,ge),ot!==void 0&&(K.viewport=ot),R.toneMapping=He}function Xi(A,q,te){const K=q.isScene===!0?q.overrideMaterial:null;for(let j=0,we=A.length;j<we;j++){const Le=A[j],Ne=Le.object,He=Le.geometry,ot=K===null?Le.material:K,st=Le.group;Ne.layers.test(te.layers)&&Jo(Ne,q,te,He,ot,st)}}function Jo(A,q,te,K,j,we){A.onBeforeRender(R,q,te,K,j,we),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,te,K,A,we),j.transparent===!0&&j.side===Oi&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,R.renderBufferDirect(te,q,K,j,A,we),j.side=Er,j.needsUpdate=!0,R.renderBufferDirect(te,q,K,j,A,we),j.side=Oi):R.renderBufferDirect(te,q,K,j,A,we),A.onAfterRender(R,q,te,K,j,we)}function es(A,q,te){q.isScene!==!0&&(q=Pt);const K=qe.get(A),j=_.state.lights,we=_.state.shadowsArray,Le=j.state.version,Ne=Ge.getParameters(A,j.state,we,q,te),He=Ge.getProgramCacheKey(Ne);let ot=K.programs;K.environment=A.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",et),ot=new Map,K.programs=ot);let st=ot.get(He);if(st!==void 0){if(K.currentProgram===st&&K.lightsStateVersion===Le)return ci(A,Ne),st}else Ne.uniforms=Ge.getUniforms(A),A.onBeforeCompile(Ne,R),st=Ge.acquireProgram(Ne,He),ot.set(He,st),K.uniforms=Ne.uniforms;const We=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ee.uniform),ci(A,Ne),K.needsLights=jl(A),K.lightsStateVersion=Le,K.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=st,K.uniformsList=null,st}function Qo(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Bl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ci(A,q){const te=qe.get(A);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function ea(A,q,te,K,j){q.isScene!==!0&&(q=Pt),L.resetTextureUnits();const we=q.fog,Le=K.isMeshStandardMaterial?q.environment:null,Ne=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:eo,He=(K.isMeshStandardMaterial?Z:T).get(K.envMap||Le),ot=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,ut=!!te.morphAttributes.color;let Ht=Sr;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ht=R.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,St=Ot!==void 0?Ot.length:0,Je=qe.get(K),Vt=_.state.lights;if(me===!0&&(Me===!0||A!==w)){const un=A===w&&K.id===P;Ee.setState(K,A,un)}let vt=!1;K.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Vt.state.version||Je.outputColorSpace!==Ne||j.isBatchedMesh&&Je.batching===!1||!j.isBatchedMesh&&Je.batching===!0||j.isBatchedMesh&&Je.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Je.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Je.instancing===!1||!j.isInstancedMesh&&Je.instancing===!0||j.isSkinnedMesh&&Je.skinning===!1||!j.isSkinnedMesh&&Je.skinning===!0||j.isInstancedMesh&&Je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Je.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Je.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Je.instancingMorph===!1&&j.morphTexture!==null||Je.envMap!==He||K.fog===!0&&Je.fog!==we||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ee.numPlanes||Je.numIntersection!==Ee.numIntersection)||Je.vertexAlphas!==ot||Je.vertexTangents!==st||Je.morphTargets!==We||Je.morphNormals!==yt||Je.morphColors!==ut||Je.toneMapping!==Ht||Je.morphTargetsCount!==St)&&(vt=!0):(vt=!0,Je.__version=K.version);let dn=Je.currentProgram;vt===!0&&(dn=es(K,q,j));let Yi=!1,yn=!1,Mi=!1;const Dt=dn.getUniforms(),hn=Je.uniforms;if(Ke.useProgram(dn.program)&&(Yi=!0,yn=!0,Mi=!0),K.id!==P&&(P=K.id,yn=!0),Yi||w!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),n0(ye),i0(ye),Dt.setValue(z,"projectionMatrix",ye)):Dt.setValue(z,"projectionMatrix",A.projectionMatrix),Dt.setValue(z,"viewMatrix",A.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ze.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,yn=!0,Mi=!0)}if(j.isSkinnedMesh){Dt.setOptional(z,j,"bindMatrix"),Dt.setOptional(z,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(z,"boneTexture",un.boneTexture,L))}j.isBatchedMesh&&(Dt.setOptional(z,j,"batchingTexture"),Dt.setValue(z,"batchingTexture",j._matricesTexture,L),Dt.setOptional(z,j,"batchingIdTexture"),Dt.setValue(z,"batchingIdTexture",j._indirectTexture,L),Dt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(z,"batchingColorTexture",j._colorsTexture,L));const tn=te.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&rt.update(j,te,dn),(yn||Je.receiveShadow!==j.receiveShadow)&&(Je.receiveShadow=j.receiveShadow,Dt.setValue(z,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=He,hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(hn.envMapIntensity.value=q.environmentIntensity),yn&&(Dt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Je.needsLights&&ta(hn,Mi),we&&K.fog===!0&&Ce.refreshFogUniforms(hn,we),Ce.refreshMaterialUniforms(hn,K,V,ce,_.state.transmissionRenderTarget[A.id]),Bl.upload(z,Qo(Je),hn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Bl.upload(z,Qo(Je),hn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(z,"center",j.center),Dt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(z,"normalMatrix",j.normalMatrix),Dt.setValue(z,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let nn=0,Mt=un.length;nn<Mt;nn++){const fi=un[nn];O.update(fi,dn),O.bind(fi,dn)}}return dn}function ta(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,q,te){qe.get(A.texture).__webglTexture=q,qe.get(A.depthTexture).__webglTexture=te;const K=qe.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=te===void 0,K.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const te=qe.get(A);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0};const na=z.createFramebuffer();this.setRenderTarget=function(A,q=0,te=0){W=A,F=q,N=te;let K=!0,j=null,we=!1,Le=!1;if(A){const He=qe.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Le=!0);const st=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[q])?j=st[q][te]:j=st[q],we=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[te]:j=st,H.copy(A.viewport),ae.copy(A.scissor),Q=A.scissorTest}else H.copy(I).multiplyScalar(V).floor(),ae.copy(re).multiplyScalar(V).floor(),Q=Ie;if(te!==0&&(j=na),Ke.bindFramebuffer(z.FRAMEBUFFER,j)&&K&&Ke.drawBuffers(A,j),Ke.viewport(H),Ke.scissor(ae),Ke.setScissorTest(Q),we){const He=qe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,te)}else if(Le){const He=qe.get(A.texture),ot=q;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,te,ot)}else if(A!==null&&te!==0){const He=qe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,q,te,K,j,we,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){Ke.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-K&&te>=0&&te<=A.height-j&&z.readPixels(q,te,K,j,ue.convert(ot),ue.convert(st),we)}finally{const He=W!==null?qe.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,q,te,K,j,we,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){const He=A.texture,ot=He.format,st=He.type;if(!ct.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-K&&te>=0&&te<=A.height-j){Ke.bindFramebuffer(z.FRAMEBUFFER,Ne);const We=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(q,te,K,j,ue.convert(ot),ue.convert(st),0);const yt=W!==null?qe.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,yt);const ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await t0(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(We),z.deleteSync(ut),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,te=0){A.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-te),j=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Le=q!==null?q.x:0,Ne=q!==null?q.y:0;L.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Le,Ne,j,we),Ke.unbindTexture()};const ia=z.createFramebuffer(),ra=z.createFramebuffer();this.copyTextureToTexture=function(A,q,te=null,K=null,j=0,we=null){A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],q=arguments[2],we=arguments[3]||0,te=null),we===null&&(j!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=j,j=0):we=0);let Le,Ne,He,ot,st,We,yt,ut,Ht;const Ot=A.isCompressedTexture?A.mipmaps[we]:A.image;if(te!==null)Le=te.max.x-te.min.x,Ne=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,ot=te.min.x,st=te.min.y,We=te.isBox3?te.min.z:0;else{const tn=Math.pow(2,-j);Le=Math.floor(Ot.width*tn),Ne=Math.floor(Ot.height*tn),A.isDataArrayTexture?He=Ot.depth:A.isData3DTexture?He=Math.floor(Ot.depth*tn):He=1,ot=0,st=0,We=0}K!==null?(yt=K.x,ut=K.y,Ht=K.z):(yt=0,ut=0,Ht=0);const St=ue.convert(q.format),Je=ue.convert(q.type);let Vt;q.isData3DTexture?(L.setTexture3D(q,0),Vt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),Vt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),Vt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const vt=z.getParameter(z.UNPACK_ROW_LENGTH),dn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Yi=z.getParameter(z.UNPACK_SKIP_PIXELS),yn=z.getParameter(z.UNPACK_SKIP_ROWS),Mi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,st),z.pixelStorei(z.UNPACK_SKIP_IMAGES,We);const Dt=A.isDataArrayTexture||A.isData3DTexture,hn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const tn=qe.get(A),un=qe.get(q),nn=qe.get(tn.__renderTarget),Mt=qe.get(un.__renderTarget);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let fi=0;fi<He;fi++)Dt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,j,We+fi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,we,Ht+fi)),z.blitFramebuffer(ot,st,Le,Ne,yt,ut,Le,Ne,z.DEPTH_BUFFER_BIT,z.NEAREST);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||qe.has(A)){const tn=qe.get(A),un=qe.get(q);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,ia),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,ra);for(let nn=0;nn<He;nn++)Dt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,j,We+nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,j),hn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,we,Ht+nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,we),j!==0?z.blitFramebuffer(ot,st,Le,Ne,yt,ut,Le,Ne,z.COLOR_BUFFER_BIT,z.NEAREST):hn?z.copyTexSubImage3D(Vt,we,yt,ut,Ht+nn,ot,st,Le,Ne):z.copyTexSubImage2D(Vt,we,yt,ut,ot,st,Le,Ne);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Vt,we,yt,ut,Ht,Le,Ne,He,St,Je,Ot.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,we,yt,ut,Ht,Le,Ne,He,St,Ot.data):z.texSubImage3D(Vt,we,yt,ut,Ht,Le,Ne,He,St,Je,Ot):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,we,yt,ut,Le,Ne,St,Je,Ot.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,we,yt,ut,Ot.width,Ot.height,St,Ot.data):z.texSubImage2D(z.TEXTURE_2D,we,yt,ut,Le,Ne,St,Je,Ot);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Yi),z.pixelStorei(z.UNPACK_SKIP_ROWS,yn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Mi),we===0&&q.generateMipmaps&&z.generateMipmap(Vt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,q,te=null,K=null,j=0){return A.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,K=arguments[1]||null,A=arguments[2],q=arguments[3],j=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,te,K,j)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){F=0,N=0,W=null,Ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}var IE=Object.defineProperty,NE=(s,e,t)=>e in s?IE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,FE=(s,e,t)=>(NE(s,e+"",t),t);class OE{constructor(){FE(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}var zE=Object.defineProperty,BE=(s,e,t)=>e in s?zE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,it=(s,e,t)=>(BE(s,typeof e!="symbol"?e+"":e,t),t);const Dl=new sg,km=new vr,kE=Math.cos(70*(Math.PI/180)),Hm=(s,e)=>(s%e+e)%e;class HE extends OE{constructor(e,t){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new Y),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN}),it(this,"touches",{ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=k=>{let ue=Hm(k,2*Math.PI),Pe=g.phi;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),v.phi=ue-Pe,r.update()},this.setAzimuthalAngle=k=>{let ue=Hm(k,2*Math.PI),Pe=g.theta;Pe<0&&(Pe+=2*Math.PI),ue<0&&(ue+=2*Math.PI);let O=Math.abs(ue-Pe);2*Math.PI-O<O&&(ue<Pe?ue+=2*Math.PI:Pe+=2*Math.PI),v.theta=ue-Pe,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=k=>{k.addEventListener("keydown",Ce),this._domElementKeyEvents=k},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(a),r.update(),h=c.NONE},this.update=(()=>{const k=new Y,ue=new Y(0,1,0),Pe=new Jr().setFromUnitVectors(e.up,ue),O=Pe.clone().invert(),Te=new Y,ie=new Jr,fe=2*Math.PI;return function(){const be=r.object.position;Pe.setFromUnitVectors(e.up,ue),O.copy(Pe).invert(),k.copy(be).sub(r.target),k.applyQuaternion(Pe),g.setFromVector3(k),r.autoRotate&&h===c.NONE&&de(ae()),r.enableDamping?(g.theta+=v.theta*r.dampingFactor,g.phi+=v.phi*r.dampingFactor):(g.theta+=v.theta,g.phi+=v.phi);let et=r.minAzimuthAngle,xt=r.maxAzimuthAngle;isFinite(et)&&isFinite(xt)&&(et<-Math.PI?et+=fe:et>Math.PI&&(et-=fe),xt<-Math.PI?xt+=fe:xt>Math.PI&&(xt-=fe),et<=xt?g.theta=Math.max(et,Math.min(xt,g.theta)):g.theta=g.theta>(et+xt)/2?Math.max(et,g.theta):Math.min(xt,g.theta)),g.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,g.phi)),g.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(S,r.dampingFactor):r.target.add(S),r.zoomToCursor&&P||r.object.isOrthographicCamera?g.radius=Ie(g.radius):g.radius=Ie(g.radius*x),k.setFromSpherical(g),k.applyQuaternion(O),be.copy(r.target).add(k),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),r.enableDamping===!0?(v.theta*=1-r.dampingFactor,v.phi*=1-r.dampingFactor,S.multiplyScalar(1-r.dampingFactor)):(v.set(0,0,0),S.set(0,0,0));let It=!1;if(r.zoomToCursor&&P){let mt=null;if(r.object instanceof wn&&r.object.isPerspectiveCamera){const qt=k.length();mt=Ie(qt*x);const jt=qt-mt;r.object.position.addScaledVector(N,jt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const qt=new Y(W.x,W.y,0);qt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix(),It=!0;const jt=new Y(W.x,W.y,0);jt.unproject(r.object),r.object.position.sub(jt).add(qt),r.object.updateMatrixWorld(),mt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;mt!==null&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(mt).add(r.object.position):(Dl.origin.copy(r.object.position),Dl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Dl.direction))<kE?e.lookAt(r.target):(km.setFromNormalAndCoplanarPoint(r.object.up,r.target),Dl.intersectPlane(km,r.target))))}else r.object instanceof zl&&r.object.isOrthographicCamera&&(It=x!==1,It&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/x)),r.object.updateProjectionMatrix()));return x=1,P=!1,It||Te.distanceToSquared(r.object.position)>m||8*(1-ie.dot(r.object.quaternion))>m?(r.dispatchEvent(a),Te.copy(r.object.position),ie.copy(r.object.quaternion),It=!1,!0):!1}})(),this.connect=k=>{r.domElement=k,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",Ee),r.domElement.addEventListener("pointerdown",T),r.domElement.addEventListener("pointercancel",pe),r.domElement.addEventListener("wheel",Ge)},this.dispose=()=>{var k,ue,Pe,O,Te,ie;r.domElement&&(r.domElement.style.touchAction="auto"),(k=r.domElement)==null||k.removeEventListener("contextmenu",Ee),(ue=r.domElement)==null||ue.removeEventListener("pointerdown",T),(Pe=r.domElement)==null||Pe.removeEventListener("pointercancel",pe),(O=r.domElement)==null||O.removeEventListener("wheel",Ge),(Te=r.domElement)==null||Te.ownerDocument.removeEventListener("pointermove",Z),(ie=r.domElement)==null||ie.ownerDocument.removeEventListener("pointerup",pe),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Ce)};const r=this,a={type:"change"},l={type:"start"},f={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let h=c.NONE;const m=1e-6,g=new pm,v=new pm;let x=1;const S=new Y,E=new Xe,C=new Xe,y=new Xe,_=new Xe,U=new Xe,b=new Xe,R=new Xe,G=new Xe,F=new Xe,N=new Y,W=new Xe;let P=!1;const w=[],H={};function ae(){return 2*Math.PI/60/60*r.autoRotateSpeed}function Q(){return Math.pow(.95,r.zoomSpeed)}function de(k){r.reverseOrbit||r.reverseHorizontalOrbit?v.theta+=k:v.theta-=k}function ge(k){r.reverseOrbit||r.reverseVerticalOrbit?v.phi+=k:v.phi-=k}const oe=(()=>{const k=new Y;return function(Pe,O){k.setFromMatrixColumn(O,0),k.multiplyScalar(-Pe),S.add(k)}})(),ce=(()=>{const k=new Y;return function(Pe,O){r.screenSpacePanning===!0?k.setFromMatrixColumn(O,1):(k.setFromMatrixColumn(O,0),k.crossVectors(r.object.up,k)),k.multiplyScalar(Pe),S.add(k)}})(),V=(()=>{const k=new Y;return function(Pe,O){const Te=r.domElement;if(Te&&r.object instanceof wn&&r.object.isPerspectiveCamera){const ie=r.object.position;k.copy(ie).sub(r.target);let fe=k.length();fe*=Math.tan(r.object.fov/2*Math.PI/180),oe(2*Pe*fe/Te.clientHeight,r.object.matrix),ce(2*O*fe/Te.clientHeight,r.object.matrix)}else Te&&r.object instanceof zl&&r.object.isOrthographicCamera?(oe(Pe*(r.object.right-r.object.left)/r.object.zoom/Te.clientWidth,r.object.matrix),ce(O*(r.object.top-r.object.bottom)/r.object.zoom/Te.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function le(k){r.object instanceof wn&&r.object.isPerspectiveCamera||r.object instanceof zl&&r.object.isOrthographicCamera?x=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function se(k){le(x/k)}function I(k){le(x*k)}function re(k){if(!r.zoomToCursor||!r.domElement)return;P=!0;const ue=r.domElement.getBoundingClientRect(),Pe=k.clientX-ue.left,O=k.clientY-ue.top,Te=ue.width,ie=ue.height;W.x=Pe/Te*2-1,W.y=-(O/ie)*2+1,N.set(W.x,W.y,1).unproject(r.object).sub(r.object.position).normalize()}function Ie(k){return Math.max(r.minDistance,Math.min(r.maxDistance,k))}function ee(k){E.set(k.clientX,k.clientY)}function me(k){re(k),R.set(k.clientX,k.clientY)}function Me(k){_.set(k.clientX,k.clientY)}function ye(k){C.set(k.clientX,k.clientY),y.subVectors(C,E).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),E.copy(C),r.update()}function Re(k){G.set(k.clientX,k.clientY),F.subVectors(G,R),F.y>0?se(Q()):F.y<0&&I(Q()),R.copy(G),r.update()}function Ze(k){U.set(k.clientX,k.clientY),b.subVectors(U,_).multiplyScalar(r.panSpeed),V(b.x,b.y),_.copy(U),r.update()}function Ye(k){re(k),k.deltaY<0?I(Q()):k.deltaY>0&&se(Q()),r.update()}function Pt(k){let ue=!1;switch(k.code){case r.keys.UP:V(0,r.keyPanSpeed),ue=!0;break;case r.keys.BOTTOM:V(0,-r.keyPanSpeed),ue=!0;break;case r.keys.LEFT:V(r.keyPanSpeed,0),ue=!0;break;case r.keys.RIGHT:V(-r.keyPanSpeed,0),ue=!0;break}ue&&(k.preventDefault(),r.update())}function Rt(){if(w.length==1)E.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);E.set(k,ue)}}function lt(){if(w.length==1)_.set(w[0].pageX,w[0].pageY);else{const k=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);_.set(k,ue)}}function z(){const k=w[0].pageX-w[1].pageX,ue=w[0].pageY-w[1].pageY,Pe=Math.sqrt(k*k+ue*ue);R.set(0,Pe)}function ln(){r.enableZoom&&z(),r.enablePan&&lt()}function pt(){r.enableZoom&&z(),r.enableRotate&&Rt()}function ct(k){if(w.length==1)C.set(k.pageX,k.pageY);else{const Pe=ze(k),O=.5*(k.pageX+Pe.x),Te=.5*(k.pageY+Pe.y);C.set(O,Te)}y.subVectors(C,E).multiplyScalar(r.rotateSpeed);const ue=r.domElement;ue&&(de(2*Math.PI*y.x/ue.clientHeight),ge(2*Math.PI*y.y/ue.clientHeight)),E.copy(C)}function Ke(k){if(w.length==1)U.set(k.pageX,k.pageY);else{const ue=ze(k),Pe=.5*(k.pageX+ue.x),O=.5*(k.pageY+ue.y);U.set(Pe,O)}b.subVectors(U,_).multiplyScalar(r.panSpeed),V(b.x,b.y),_.copy(U)}function Tt(k){const ue=ze(k),Pe=k.pageX-ue.x,O=k.pageY-ue.y,Te=Math.sqrt(Pe*Pe+O*O);G.set(0,Te),F.set(0,Math.pow(G.y/R.y,r.zoomSpeed)),se(F.y),R.copy(G)}function qe(k){r.enableZoom&&Tt(k),r.enablePan&&Ke(k)}function L(k){r.enableZoom&&Tt(k),r.enableRotate&&ct(k)}function T(k){var ue,Pe;r.enabled!==!1&&(w.length===0&&((ue=r.domElement)==null||ue.ownerDocument.addEventListener("pointermove",Z),(Pe=r.domElement)==null||Pe.ownerDocument.addEventListener("pointerup",pe)),Be(k),k.pointerType==="touch"?Oe(k):_e(k))}function Z(k){r.enabled!==!1&&(k.pointerType==="touch"?ft(k):he(k))}function pe(k){var ue,Pe,O;Qe(k),w.length===0&&((ue=r.domElement)==null||ue.releasePointerCapture(k.pointerId),(Pe=r.domElement)==null||Pe.ownerDocument.removeEventListener("pointermove",Z),(O=r.domElement)==null||O.ownerDocument.removeEventListener("pointerup",pe)),r.dispatchEvent(f),h=c.NONE}function _e(k){let ue;switch(k.button){case 0:ue=r.mouseButtons.LEFT;break;case 1:ue=r.mouseButtons.MIDDLE;break;case 2:ue=r.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Es.DOLLY:if(r.enableZoom===!1)return;me(k),h=c.DOLLY;break;case Es.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(r.enablePan===!1)return;Me(k),h=c.PAN}else{if(r.enableRotate===!1)return;ee(k),h=c.ROTATE}break;case Es.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(r.enableRotate===!1)return;ee(k),h=c.ROTATE}else{if(r.enablePan===!1)return;Me(k),h=c.PAN}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(l)}function he(k){if(r.enabled!==!1)switch(h){case c.ROTATE:if(r.enableRotate===!1)return;ye(k);break;case c.DOLLY:if(r.enableZoom===!1)return;Re(k);break;case c.PAN:if(r.enablePan===!1)return;Ze(k);break}}function Ge(k){r.enabled===!1||r.enableZoom===!1||h!==c.NONE&&h!==c.ROTATE||(k.preventDefault(),r.dispatchEvent(l),Ye(k),r.dispatchEvent(f))}function Ce(k){r.enabled===!1||r.enablePan===!1||Pt(k)}function Oe(k){switch(rt(k),w.length){case 1:switch(r.touches.ONE){case Ts.ROTATE:if(r.enableRotate===!1)return;Rt(),h=c.TOUCH_ROTATE;break;case Ts.PAN:if(r.enablePan===!1)return;lt(),h=c.TOUCH_PAN;break;default:h=c.NONE}break;case 2:switch(r.touches.TWO){case Ts.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ln(),h=c.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;pt(),h=c.TOUCH_DOLLY_ROTATE;break;default:h=c.NONE}break;default:h=c.NONE}h!==c.NONE&&r.dispatchEvent(l)}function ft(k){switch(rt(k),h){case c.TOUCH_ROTATE:if(r.enableRotate===!1)return;ct(k),r.update();break;case c.TOUCH_PAN:if(r.enablePan===!1)return;Ke(k),r.update();break;case c.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;qe(k),r.update();break;case c.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;L(k),r.update();break;default:h=c.NONE}}function Ee(k){r.enabled!==!1&&k.preventDefault()}function Be(k){w.push(k)}function Qe(k){delete H[k.pointerId];for(let ue=0;ue<w.length;ue++)if(w[ue].pointerId==k.pointerId){w.splice(ue,1);return}}function rt(k){let ue=H[k.pointerId];ue===void 0&&(ue=new Xe,H[k.pointerId]=ue),ue.set(k.pageX,k.pageY)}function ze(k){const ue=k.pointerId===w[0].pointerId?w[1]:w[0];return H[ue.pointerId]}this.dollyIn=(k=Q())=>{I(k),r.update()},this.dollyOut=(k=Q())=>{se(k),r.update()},this.getScale=()=>x,this.setScale=k=>{le(k),r.update()},this.getZoomScale=()=>Q(),t!==void 0&&this.connect(t),this.update()}}const VE=()=>{const s=ff.useRef(null);ff.useEffect(()=>{s.current&&(s.current.innerHTML="");const t=new R0;t.background=new Ct("#242424");const r=new wn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=120;const a=new UE({antialias:!0});a.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(a.domElement),a.gammaOutput=!0,a.shadowMap.enabled=!0;const l=[],f=[],c=10,h=60,m=5,g=Math.floor(Math.random()*c);for(let y=0;y<c;y++){const _=new cd(m,32,32),U=new Gl({color:y===g?"#FF0000":"#02C874",transparent:!0,opacity:.9}),b=new ai(_,U),R=y/c*Math.PI*2,G=h+(Math.random()*10-5);b.position.set(G*Math.cos(R)+(Math.random()*6-3),G*Math.sin(R)+(Math.random()*6-3),Math.random()*40-20),t.add(b),l.push(b)}const v=(y,_)=>{const U=Math.round(y.position.distanceTo(_.position)/5),b=new vg([y.position,_.position]),R=new fd(b,1,.3,8,!1),G=new Gl({color:"#7B7B7B",transparent:!0,opacity:.8}),F=new ai(R,G),N=document.createElement("canvas"),W=N.getContext("2d");N.width=64,N.height=64,W.clearRect(0,0,N.width,N.height),W.fillStyle="#FFE443",W.font="60px Arial",W.textAlign="center",W.textBaseline="middle",W.fillText(U.toString(),32,32);const P=new U0(N),w=new hg({map:P,transparent:!0}),H=new b0(w),Q=b.getPointAt(.5);H.position.copy(Q),H.scale.set(5,5,1),F.sprite=H,t.add(F),t.add(H),f.push(F)};for(let y=0;y<c;y++)v(l[y],l[(y+1)%c]);(y=>{for(let _=0;_<y;_++){const U=Math.floor(Math.random()*c);let b=Math.floor(Math.random()*c);for(;U===b;)b=Math.floor(Math.random()*c);const R=l[U],G=l[b];f.some(N=>{const W=N.geometry.parameters.path.points;return W[0].equals(R.position)&&W[1].equals(G.position)||W[0].equals(G.position)&&W[1].equals(R.position)})||v(R,G)}})(5);const S=new HE(r,a.domElement);S.enableDamping=!0,S.dampingFactor=.25,S.screenSpacePanning=!1;const E=()=>{requestAnimationFrame(E),l.forEach(y=>{y.rotation.x+=.01,y.rotation.y+=.01}),S.update(),a.render(t,r)};E();const C=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),a.dispose()}},[]);const e=()=>{window.location.reload()};return Xs.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},children:[Xs.jsx("div",{ref:s}),Xs.jsx("button",{onClick:e,style:{position:"absolute",bottom:"20px",right:"20px",padding:"10px 20px",backgroundColor:"#008000",color:"#FFFFFF",border:"none",borderRadius:"5px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",transition:"background-color 0.3s ease"},onMouseEnter:t=>t.target.style.backgroundColor="#006400",onMouseLeave:t=>t.target.style.backgroundColor="#008000",children:"Example"})]})};function GE(){return Xs.jsx(VE,{})}fv.createRoot(document.getElementById("root")).render(Xs.jsx(ff.StrictMode,{children:Xs.jsx(GE,{})}));
