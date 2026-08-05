function Qm(i,u){for(var f=0;f<u.length;f++){const r=u[f];if(typeof r!="string"&&!Array.isArray(r)){for(const h in r)if(h!=="default"&&!(h in i)){const m=Object.getOwnPropertyDescriptor(r,h);m&&Object.defineProperty(i,h,m.get?m:{enumerable:!0,get:()=>r[h]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function f(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(h){if(h.ep)return;h.ep=!0;const m=f(h);fetch(h.href,m)}})();function Xm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xo={exports:{}},Ka={};var mp;function Zm(){if(mp)return Ka;mp=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function f(r,h,m){var v=null;if(m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),"key"in h){m={};for(var M in h)M!=="key"&&(m[M]=h[M])}else m=h;return h=m.ref,{$$typeof:i,type:r,key:v,ref:h!==void 0?h:null,props:m}}return Ka.Fragment=u,Ka.jsx=f,Ka.jsxs=f,Ka}var Sp;function Jm(){return Sp||(Sp=1,Xo.exports=Zm()),Xo.exports}var l=Jm(),Zo={exports:{}},ue={};var gp;function $m(){if(gp)return ue;gp=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),U=Symbol.iterator;function W(S){return S===null||typeof S!="object"?null:(S=U&&S[U]||S["@@iterator"],typeof S=="function"?S:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,J={};function K(S,C,q){this.props=S,this.context=C,this.refs=J,this.updater=q||ee}K.prototype.isReactComponent={},K.prototype.setState=function(S,C){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,C,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function se(){}se.prototype=K.prototype;function I(S,C,q){this.props=S,this.context=C,this.refs=J,this.updater=q||ee}var fe=I.prototype=new se;fe.constructor=I,F(fe,K.prototype),fe.isPureReactComponent=!0;var ie=Array.isArray;function _(){}var z={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function re(S,C,q){var Y=q.ref;return{$$typeof:i,type:S,key:C,ref:Y!==void 0?Y:null,props:q}}function oe(S,C){return re(S.type,C,S.props)}function me(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function ne(S){var C={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(q){return C[q]})}var lt=/\/+/g;function Ie(S,C){return typeof S=="object"&&S!==null&&S.key!=null?ne(""+S.key):C.toString(36)}function Ue(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(_,_):(S.status="pending",S.then(function(C){S.status==="pending"&&(S.status="fulfilled",S.value=C)},function(C){S.status==="pending"&&(S.status="rejected",S.reason=C)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function T(S,C,q,Y,ce){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var ae=!1;if(S===null)ae=!0;else switch(pe){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(S.$$typeof){case i:case u:ae=!0;break;case N:return ae=S._init,T(ae(S._payload),C,q,Y,ce)}}if(ae)return ce=ce(S),ae=Y===""?"."+Ie(S,0):Y,ie(ce)?(q="",ae!=null&&(q=ae.replace(lt,"$&/")+"/"),T(ce,C,q,"",function(St){return St})):ce!=null&&(me(ce)&&(ce=oe(ce,q+(ce.key==null||S&&S.key===ce.key?"":(""+ce.key).replace(lt,"$&/")+"/")+ae)),C.push(ce)),1;ae=0;var Ke=Y===""?".":Y+":";if(ie(S))for(var Me=0;Me<S.length;Me++)Y=S[Me],pe=Ke+Ie(Y,Me),ae+=T(Y,C,q,pe,ce);else if(Me=W(S),typeof Me=="function")for(S=Me.call(S),Me=0;!(Y=S.next()).done;)Y=Y.value,pe=Ke+Ie(Y,Me++),ae+=T(Y,C,q,pe,ce);else if(pe==="object"){if(typeof S.then=="function")return T(Ue(S),C,q,Y,ce);throw C=String(S),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ae}function L(S,C,q){if(S==null)return S;var Y=[],ce=0;return T(S,Y,"","",function(pe){return C.call(q,pe,ce++)}),Y}function R(S){if(S._status===-1){var C=S._result;C=C(),C.then(function(q){(S._status===0||S._status===-1)&&(S._status=1,S._result=q)},function(q){(S._status===0||S._status===-1)&&(S._status=2,S._result=q)}),S._status===-1&&(S._status=0,S._result=C)}if(S._status===1)return S._result.default;throw S._result}var V=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},de={map:L,forEach:function(S,C,q){L(S,function(){C.apply(this,arguments)},q)},count:function(S){var C=0;return L(S,function(){C++}),C},toArray:function(S){return L(S,function(C){return C})||[]},only:function(S){if(!me(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ue.Activity=j,ue.Children=de,ue.Component=K,ue.Fragment=f,ue.Profiler=h,ue.PureComponent=I,ue.StrictMode=r,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ue.__COMPILER_RUNTIME={__proto__:null,c:function(S){return z.H.useMemoCache(S)}},ue.cache=function(S){return function(){return S.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(S,C,q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Y=F({},S.props),ce=S.key;if(C!=null)for(pe in C.key!==void 0&&(ce=""+C.key),C)!G.call(C,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&C.ref===void 0||(Y[pe]=C[pe]);var pe=arguments.length-2;if(pe===1)Y.children=q;else if(1<pe){for(var ae=Array(pe),Ke=0;Ke<pe;Ke++)ae[Ke]=arguments[Ke+2];Y.children=ae}return re(S.type,ce,Y)},ue.createContext=function(S){return S={$$typeof:v,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},ue.createElement=function(S,C,q){var Y,ce={},pe=null;if(C!=null)for(Y in C.key!==void 0&&(pe=""+C.key),C)G.call(C,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ce[Y]=C[Y]);var ae=arguments.length-2;if(ae===1)ce.children=q;else if(1<ae){for(var Ke=Array(ae),Me=0;Me<ae;Me++)Ke[Me]=arguments[Me+2];ce.children=Ke}if(S&&S.defaultProps)for(Y in ae=S.defaultProps,ae)ce[Y]===void 0&&(ce[Y]=ae[Y]);return re(S,pe,ce)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(S){return{$$typeof:M,render:S}},ue.isValidElement=me,ue.lazy=function(S){return{$$typeof:N,_payload:{_status:-1,_result:S},_init:R}},ue.memo=function(S,C){return{$$typeof:p,type:S,compare:C===void 0?null:C}},ue.startTransition=function(S){var C=z.T,q={};z.T=q;try{var Y=S(),ce=z.S;ce!==null&&ce(q,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(_,V)}catch(pe){V(pe)}finally{C!==null&&q.types!==null&&(C.types=q.types),z.T=C}},ue.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ue.use=function(S){return z.H.use(S)},ue.useActionState=function(S,C,q){return z.H.useActionState(S,C,q)},ue.useCallback=function(S,C){return z.H.useCallback(S,C)},ue.useContext=function(S){return z.H.useContext(S)},ue.useDebugValue=function(){},ue.useDeferredValue=function(S,C){return z.H.useDeferredValue(S,C)},ue.useEffect=function(S,C){return z.H.useEffect(S,C)},ue.useEffectEvent=function(S){return z.H.useEffectEvent(S)},ue.useId=function(){return z.H.useId()},ue.useImperativeHandle=function(S,C,q){return z.H.useImperativeHandle(S,C,q)},ue.useInsertionEffect=function(S,C){return z.H.useInsertionEffect(S,C)},ue.useLayoutEffect=function(S,C){return z.H.useLayoutEffect(S,C)},ue.useMemo=function(S,C){return z.H.useMemo(S,C)},ue.useOptimistic=function(S,C){return z.H.useOptimistic(S,C)},ue.useReducer=function(S,C,q){return z.H.useReducer(S,C,q)},ue.useRef=function(S){return z.H.useRef(S)},ue.useState=function(S){return z.H.useState(S)},ue.useSyncExternalStore=function(S,C,q){return z.H.useSyncExternalStore(S,C,q)},ue.useTransition=function(){return z.H.useTransition()},ue.version="19.2.3",ue}var yp;function ur(){return yp||(yp=1,Zo.exports=$m()),Zo.exports}var D=ur();const Wm=Xm(D),Fm=Qm({__proto__:null,default:Wm},[D]);var Jo={exports:{}},Qa={},$o={exports:{}},Wo={};var bp;function Pm(){return bp||(bp=1,(function(i){function u(T,L){var R=T.length;T.push(L);e:for(;0<R;){var V=R-1>>>1,de=T[V];if(0<h(de,L))T[V]=L,T[R]=de,R=V;else break e}}function f(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],R=T.pop();if(R!==L){T[0]=R;e:for(var V=0,de=T.length,S=de>>>1;V<S;){var C=2*(V+1)-1,q=T[C],Y=C+1,ce=T[Y];if(0>h(q,R))Y<de&&0>h(ce,q)?(T[V]=ce,T[Y]=R,V=Y):(T[V]=q,T[C]=R,V=C);else if(Y<de&&0>h(ce,R))T[V]=ce,T[Y]=R,V=Y;else break e}}return L}function h(T,L){var R=T.sortIndex-L.sortIndex;return R!==0?R:T.id-L.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var v=Date,M=v.now();i.unstable_now=function(){return v.now()-M}}var b=[],p=[],N=1,j=null,U=3,W=!1,ee=!1,F=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function fe(T){for(var L=f(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=T)r(p),L.sortIndex=L.expirationTime,u(b,L);else break;L=f(p)}}function ie(T){if(F=!1,fe(T),!ee)if(f(b)!==null)ee=!0,_||(_=!0,ne());else{var L=f(p);L!==null&&Ue(ie,L.startTime-T)}}var _=!1,z=-1,G=5,re=-1;function oe(){return J?!0:!(i.unstable_now()-re<G)}function me(){if(J=!1,_){var T=i.unstable_now();re=T;var L=!0;try{e:{ee=!1,F&&(F=!1,se(z),z=-1),W=!0;var R=U;try{t:{for(fe(T),j=f(b);j!==null&&!(j.expirationTime>T&&oe());){var V=j.callback;if(typeof V=="function"){j.callback=null,U=j.priorityLevel;var de=V(j.expirationTime<=T);if(T=i.unstable_now(),typeof de=="function"){j.callback=de,fe(T),L=!0;break t}j===f(b)&&r(b),fe(T)}else r(b);j=f(b)}if(j!==null)L=!0;else{var S=f(p);S!==null&&Ue(ie,S.startTime-T),L=!1}}break e}finally{j=null,U=R,W=!1}L=void 0}}finally{L?ne():_=!1}}}var ne;if(typeof I=="function")ne=function(){I(me)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Ie=lt.port2;lt.port1.onmessage=me,ne=function(){Ie.postMessage(null)}}else ne=function(){K(me,0)};function Ue(T,L){z=K(function(){T(i.unstable_now())},L)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(T){T.callback=null},i.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(T){switch(U){case 1:case 2:case 3:var L=3;break;default:L=U}var R=U;U=L;try{return T()}finally{U=R}},i.unstable_requestPaint=function(){J=!0},i.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=U;U=T;try{return L()}finally{U=R}},i.unstable_scheduleCallback=function(T,L,R){var V=i.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=R+de,T={id:N++,callback:L,priorityLevel:T,startTime:R,expirationTime:de,sortIndex:-1},R>V?(T.sortIndex=R,u(p,T),f(b)===null&&T===f(p)&&(F?(se(z),z=-1):F=!0,Ue(ie,R-V))):(T.sortIndex=de,u(b,T),ee||W||(ee=!0,_||(_=!0,ne()))),T},i.unstable_shouldYield=oe,i.unstable_wrapCallback=function(T){var L=U;return function(){var R=U;U=L;try{return T.apply(this,arguments)}finally{U=R}}}})(Wo)),Wo}var vp;function Im(){return vp||(vp=1,$o.exports=Pm()),$o.exports}var Fo={exports:{}},ct={};var Bp;function e0(){if(Bp)return ct;Bp=1;var i=ur();function u(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)p+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(u(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(b,p,N){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:j==null?null:""+j,children:b,containerInfo:p,implementation:N}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ct.createPortal=function(b,p){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return m(b,p,null,N)},ct.flushSync=function(b){var p=v.T,N=r.p;try{if(v.T=null,r.p=2,b)return b()}finally{v.T=p,r.p=N,r.d.f()}},ct.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(b,p))},ct.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},ct.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var N=p.as,j=M(N,p.crossOrigin),U=typeof p.integrity=="string"?p.integrity:void 0,W=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;N==="style"?r.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:j,integrity:U,fetchPriority:W}):N==="script"&&r.d.X(b,{crossOrigin:j,integrity:U,fetchPriority:W,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ct.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var N=M(p.as,p.crossOrigin);r.d.M(b,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(b)},ct.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var N=p.as,j=M(N,p.crossOrigin);r.d.L(b,N,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ct.preloadModule=function(b,p){if(typeof b=="string")if(p){var N=M(p.as,p.crossOrigin);r.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(b)},ct.requestFormReset=function(b){r.d.r(b)},ct.unstable_batchedUpdates=function(b,p){return b(p)},ct.useFormState=function(b,p,N){return v.H.useFormState(b,p,N)},ct.useFormStatus=function(){return v.H.useHostTransitionStatus()},ct.version="19.2.3",ct}var Ep;function t0(){if(Ep)return Fo.exports;Ep=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Fo.exports=e0(),Fo.exports}var Op;function n0(){if(Op)return Qa;Op=1;var i=Im(),u=ur(),f=t0();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return b(a),e;if(c===s)return b(a),t;c=c.sibling}throw Error(r(188))}if(n.return!==s.return)n=a,s=c;else{for(var o=!1,d=a.child;d;){if(d===n){o=!0,n=a,s=c;break}if(d===s){o=!0,s=a,n=c;break}d=d.sibling}if(!o){for(d=c.child;d;){if(d===n){o=!0,n=c,s=a;break}if(d===s){o=!0,s=c,n=a;break}d=d.sibling}if(!o)throw Error(r(189))}}if(n.alternate!==s)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,U=Symbol.for("react.element"),W=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),se=Symbol.for("react.consumer"),I=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case K:return"Profiler";case J:return"StrictMode";case ie:return"Suspense";case _:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case I:return e.displayName||"Context";case se:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case G:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var Ue=Array.isArray,T=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},V=[],de=-1;function S(e){return{current:e}}function C(e){0>de||(e.current=V[de],V[de]=null,de--)}function q(e,t){de++,V[de]=e.current,e.current=t}var Y=S(null),ce=S(null),pe=S(null),ae=S(null);function Ke(e,t){switch(q(pe,t),q(ce,e),q(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=Lf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(Y),q(Y,e)}function Me(){C(Y),C(ce),C(pe)}function St(e){e.memoizedState!==null&&q(ae,e);var t=Y.current,n=Lf(t,e.type);t!==n&&(q(ce,e),q(Y,n))}function Qt(e){ce.current===e&&(C(Y),C(ce)),ae.current===e&&(C(ae),La._currentValue=R)}var Xt,Fa;function Ut(e){if(Xt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xt=t&&t[1]||"",Fa=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+Fa}var P=!1;function Fs(e,t){if(!e||P)return"";P=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(k){var O=k}Reflect.construct(e,[],A)}else{try{A.call()}catch(k){O=k}e.call(A.prototype)}}else{try{throw Error()}catch(k){O=k}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(k){if(k&&O&&typeof k.stack=="string")return[k.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),o=c[0],d=c[1];if(o&&d){var x=o.split(`
`),E=d.split(`
`);for(a=s=0;s<x.length&&!x[s].includes("DetermineComponentFrameRoot");)s++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(s===x.length||a===E.length)for(s=x.length-1,a=E.length-1;1<=s&&0<=a&&x[s]!==E[a];)a--;for(;1<=s&&0<=a;s--,a--)if(x[s]!==E[a]){if(s!==1||a!==1)do if(s--,a--,0>a||x[s]!==E[a]){var w=`
`+x[s].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=s&&0<=a);break}}}finally{P=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ut(n):""}function wc(e,t){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==t&&t!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Fs(e.type,!1);case 11:return Fs(e.type.render,!1);case 1:return Fs(e.type,!0);case 31:return Ut("Activity");default:return""}}function xr(e){try{var t="",n=null;do t+=wc(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Mc=Object.prototype.hasOwnProperty,Hc=i.unstable_scheduleCallback,Cc=i.unstable_cancelCallback,Eh=i.unstable_shouldYield,Oh=i.unstable_requestPaint,gt=i.unstable_now,Nh=i.unstable_getCurrentPriorityLevel,mr=i.unstable_ImmediatePriority,Sr=i.unstable_UserBlockingPriority,Pa=i.unstable_NormalPriority,jh=i.unstable_LowPriority,gr=i.unstable_IdlePriority,kh=i.log,Th=i.unstable_setDisableYieldValue,Ps=null,yt=null;function Sn(e){if(typeof kh=="function"&&Th(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ps,e)}catch{}}var bt=Math.clz32?Math.clz32:Hh,wh=Math.log,Mh=Math.LN2;function Hh(e){return e>>>=0,e===0?32:31-(wh(e)/Mh|0)|0}var Ia=256,el=262144,tl=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nl(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var a=0,c=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=s&134217727;return d!==0?(s=d&~c,s!==0?a=Yn(s):(o&=d,o!==0?a=Yn(o):n||(n=d&~e,n!==0&&(a=Yn(n))))):(d=s&~c,d!==0?a=Yn(d):o!==0?a=Yn(o):n||(n=s&~e,n!==0&&(a=Yn(n)))),a===0?0:t!==0&&t!==a&&(t&c)===0&&(c=a&-a,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:a}function Is(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ch(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(){var e=tl;return tl<<=1,(tl&62914560)===0&&(tl=4194304),e}function Ac(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ah(e,t,n,s,a,c){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,x=e.expirationTimes,E=e.hiddenUpdates;for(n=o&~n;0<n;){var w=31-bt(n),A=1<<w;d[w]=0,x[w]=-1;var O=E[w];if(O!==null)for(E[w]=null,w=0;w<O.length;w++){var k=O[w];k!==null&&(k.lane&=-536870913)}n&=~A}s!==0&&br(e,s,0),c!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=c&~(o&~t))}function br(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-bt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function vr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-bt(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}function Br(e,t){var n=t&-t;return n=(n&42)!==0?1:_c(n),(n&(e.suspendedLanes|t))!==0?0:n}function _c(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Er(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:rp(e.type))}function Or(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var gn=Math.random().toString(36).slice(2),et="__reactFiber$"+gn,rt="__reactProps$"+gn,us="__reactContainer$"+gn,Dc="__reactEvents$"+gn,_h="__reactListeners$"+gn,zh="__reactHandles$"+gn,Nr="__reactResources$"+gn,ta="__reactMarker$"+gn;function Rc(e){delete e[et],delete e[rt],delete e[Dc],delete e[_h],delete e[zh]}function ds(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[us]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zf(e);e!==null;){if(n=e[et])return n;e=Zf(e)}return t}e=n,n=e.parentNode}return null}function fs(e){if(e=e[et]||e[us]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function na(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ps(e){var t=e[Nr];return t||(t=e[Nr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[ta]=!0}var jr=new Set,kr={};function Kn(e,t){hs(e,t),hs(e+"Capture",t)}function hs(e,t){for(kr[e]=t,e=0;e<t.length;e++)jr.add(t[e])}var Dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tr={},wr={};function Rh(e){return Mc.call(wr,e)?!0:Mc.call(Tr,e)?!1:Dh.test(e)?wr[e]=!0:(Tr[e]=!0,!1)}function sl(e,t,n){if(Rh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function al(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ft(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gh(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,c.call(this,o)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gc(e){if(!e._valueTracker){var t=Mr(e)?"checked":"value";e._valueTracker=Gh(e,t,""+e[t])}}function Hr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Mr(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Uh=/[\n"\\]/g;function wt(e){return e.replace(Uh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uc(e,t,n,s,a,c,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Lc(e,o,Tt(t)):n!=null?Lc(e,o,Tt(n)):s!=null&&e.removeAttribute("value"),a==null&&c!=null&&(e.defaultChecked=!!c),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Tt(d):e.removeAttribute("name")}function Cr(e,t,n,s,a,c,o,d){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Gc(e);return}n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}s=s??a,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=d?e.checked:!!s,e.defaultChecked=!!s,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Gc(e)}function Lc(e,t,n){t==="number"&&ll(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xs(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ar(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function _r(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(r(92));if(Ue(s)){if(1<s.length)throw Error(r(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),Gc(e)}function ms(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zr(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||Lh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dr(e,t,n){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var a in t)s=t[a],t.hasOwnProperty(a)&&n[a]!==s&&zr(e,a,s)}else for(var c in t)t.hasOwnProperty(c)&&zr(e,c,t[c])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return Vh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var Vc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,gs=null;function Rr(e){var t=fs(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=s[rt]||null;if(!a)throw Error(r(90));Uc(s,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&Hr(s)}break e;case"textarea":Ar(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xs(e,!!n.multiple,t,!1)}}}var Kc=!1;function Gr(e,t,n){if(Kc)return e(t,n);Kc=!0;try{var s=e(t);return s}finally{if(Kc=!1,(Ss!==null||gs!==null)&&(Zl(),Ss&&(t=Ss,e=gs,gs=Ss=null,Rr(t),e)))for(t=0;t<e.length;t++)Rr(e[t])}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var s=n[rt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(r(231,t,typeof n));return n}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(It)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Qc=!1}var yn=null,Xc=null,il=null;function Ur(){if(il)return il;var e,t=Xc,n=t.length,s,a="value"in yn?yn.value:yn.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===a[c-s];s++);return il=a.slice(e,1<s?1-s:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Lr(){return!1}function ut(e){function t(n,s,a,c,o){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=c,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(c):c[d]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?rl:Lr,this.isPropagationStopped=Lr,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=ut(Qn),la=j({},Qn,{view:0,detail:0}),Yh=ut(la),Zc,Jc,ca,dl=j({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ca&&(ca&&e.type==="mousemove"?(Zc=e.screenX-ca.screenX,Jc=e.screenY-ca.screenY):Jc=Zc=0,ca=e),Zc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),qr=ut(dl),Kh=j({},dl,{dataTransfer:0}),Qh=ut(Kh),Xh=j({},la,{relatedTarget:0}),$c=ut(Xh),Zh=j({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=ut(Zh),$h=j({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=ut($h),Fh=j({},Qn,{data:0}),Vr=ut(Fh),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function Wc(){return tx}var nx=j({},la,{key:function(e){if(e.key){var t=Ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=ut(nx),ax=j({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yr=ut(ax),lx=j({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),cx=ut(lx),ix=j({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=ut(ix),rx=j({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=ut(rx),dx=j({},Qn,{newState:0,oldState:0}),fx=ut(dx),px=[9,13,27,32],Fc=It&&"CompositionEvent"in window,ia=null;It&&"documentMode"in document&&(ia=document.documentMode);var hx=It&&"TextEvent"in window&&!ia,Kr=It&&(!Fc||ia&&8<ia&&11>=ia),Qr=" ",Xr=!1;function Zr(e,t){switch(e){case"keyup":return px.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function xx(e,t){switch(e){case"compositionend":return Jr(t);case"keypress":return t.which!==32?null:(Xr=!0,Qr);case"textInput":return e=t.data,e===Qr&&Xr?null:e;default:return null}}function mx(e,t){if(ys)return e==="compositionend"||!Fc&&Zr(e,t)?(e=Ur(),il=Xc=yn=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kr&&t.locale!=="ko"?null:t.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sx[e.type]:t==="textarea"}function Wr(e,t,n,s){Ss?gs?gs.push(s):gs=[s]:Ss=s,t=ec(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var oa=null,ra=null;function gx(e){Af(e,0)}function fl(e){var t=na(e);if(Hr(t))return e}function Fr(e,t){if(e==="change")return t}var Pr=!1;if(It){var Pc;if(It){var Ic="oninput"in document;if(!Ic){var Ir=document.createElement("div");Ir.setAttribute("oninput","return;"),Ic=typeof Ir.oninput=="function"}Pc=Ic}else Pc=!1;Pr=Pc&&(!document.documentMode||9<document.documentMode)}function eu(){oa&&(oa.detachEvent("onpropertychange",tu),ra=oa=null)}function tu(e){if(e.propertyName==="value"&&fl(ra)){var t=[];Wr(t,ra,e,Yc(e)),Gr(gx,t)}}function yx(e,t,n){e==="focusin"?(eu(),oa=t,ra=n,oa.attachEvent("onpropertychange",tu)):e==="focusout"&&eu()}function bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(ra)}function vx(e,t){if(e==="click")return fl(t)}function Bx(e,t){if(e==="input"||e==="change")return fl(t)}function Ex(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Ex;function ua(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!Mc.call(t,a)||!vt(e[a],t[a]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=nu(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ll(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function ei(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ox=It&&"documentMode"in document&&11>=document.documentMode,bs=null,ti=null,da=null,ni=!1;function cu(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||bs==null||bs!==ll(s)||(s=bs,"selectionStart"in s&&ei(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),da&&ua(da,s)||(da=s,s=ec(ti,"onSelect"),0<s.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=bs)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vs={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},si={},iu={};It&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Zn(e){if(si[e])return si[e];if(!vs[e])return e;var t=vs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iu)return si[e]=t[n];return e}var ou=Zn("animationend"),ru=Zn("animationiteration"),uu=Zn("animationstart"),Nx=Zn("transitionrun"),jx=Zn("transitionstart"),kx=Zn("transitioncancel"),du=Zn("transitionend"),fu=new Map,ai="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ai.push("scrollEnd");function Lt(e,t){fu.set(e,t),Kn(t,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mt=[],Bs=0,li=0;function hl(){for(var e=Bs,t=li=Bs=0;t<e;){var n=Mt[t];Mt[t++]=null;var s=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var c=Mt[t];if(Mt[t++]=null,s!==null&&a!==null){var o=s.pending;o===null?a.next=a:(a.next=o.next,o.next=a),s.pending=a}c!==0&&pu(n,a,c)}}function xl(e,t,n,s){Mt[Bs++]=e,Mt[Bs++]=t,Mt[Bs++]=n,Mt[Bs++]=s,li|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function ci(e,t,n,s){return xl(e,t,n,s),ml(e)}function Jn(e,t){return xl(e,null,null,t),ml(e)}function pu(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var a=!1,c=e.return;c!==null;)c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(a=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,a&&t!==null&&(a=31-bt(n),e=c.hiddenUpdates,s=e[a],s===null?e[a]=[t]:s.push(t),t.lane=n|536870912),c):null}function ml(e){if(50<Aa)throw Aa=0,mo=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Es={};function Tx(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,s){return new Tx(e,t,n,s)}function ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Sl(e,t,n,s,a,c){var o=0;if(s=e,typeof e=="function")ii(e)&&(o=1);else if(typeof e=="string")o=Am(e,n,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=Bt(31,n,t,a),e.elementType=re,e.lanes=c,e;case F:return $n(n.children,a,c,t);case J:o=8,a|=24;break;case K:return e=Bt(12,n,t,a|2),e.elementType=K,e.lanes=c,e;case ie:return e=Bt(13,n,t,a),e.elementType=ie,e.lanes=c,e;case _:return e=Bt(19,n,t,a),e.elementType=_,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:o=10;break e;case se:o=9;break e;case fe:o=11;break e;case z:o=14;break e;case G:o=16,s=null;break e}o=29,n=Error(r(130,e===null?"null":typeof e,"")),s=null}return t=Bt(o,n,t,a),t.elementType=e,t.type=s,t.lanes=c,t}function $n(e,t,n,s){return e=Bt(7,e,s,t),e.lanes=n,e}function oi(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function xu(e){var t=Bt(18,null,null,0);return t.stateNode=e,t}function ri(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mu=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=mu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:xr(t)},mu.set(e,t),t)}return{value:e,source:t,stack:xr(t)}}var Os=[],Ns=0,gl=null,fa=0,Ct=[],At=0,bn=null,Zt=1,Jt="";function tn(e,t){Os[Ns++]=fa,Os[Ns++]=gl,gl=e,fa=t}function Su(e,t,n){Ct[At++]=Zt,Ct[At++]=Jt,Ct[At++]=bn,bn=e;var s=Zt;e=Jt;var a=32-bt(s)-1;s&=~(1<<a),n+=1;var c=32-bt(t)+a;if(30<c){var o=a-a%5;c=(s&(1<<o)-1).toString(32),s>>=o,a-=o,Zt=1<<32-bt(t)+a|n<<a|s,Jt=c+e}else Zt=1<<c|n<<a|s,Jt=e}function ui(e){e.return!==null&&(tn(e,1),Su(e,1,0))}function di(e){for(;e===gl;)gl=Os[--Ns],Os[Ns]=null,fa=Os[--Ns],Os[Ns]=null;for(;e===bn;)bn=Ct[--At],Ct[At]=null,Jt=Ct[--At],Ct[At]=null,Zt=Ct[--At],Ct[At]=null}function gu(e,t){Ct[At++]=Zt,Ct[At++]=Jt,Ct[At++]=bn,Zt=t.id,Jt=t.overflow,bn=e}var tt=null,ze=null,Ee=!1,vn=null,_t=!1,fi=Error(r(519));function Bn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pa(Ht(t,e)),fi}function yu(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[et]=e,t[rt]=s,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<za.length;n++)be(za[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Cr(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),_r(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||Rf(t.textContent,n)?(s.popover!=null&&(be("beforetoggle",t),be("toggle",t)),s.onScroll!=null&&be("scroll",t),s.onScrollEnd!=null&&be("scrollend",t),s.onClick!=null&&(t.onclick=Pt),t=!0):t=!1,t||Bn(e,!0)}function bu(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:tt=tt.return}}function js(e){if(e!==tt)return!1;if(!Ee)return bu(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ho(e.type,e.memoizedProps)),n=!n),n&&ze&&Bn(e),bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=Xf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ze=Xf(e)}else t===27?(t=ze,Dn(e.type)?(e=Do,Do=null,ze=e):ze=t):ze=tt?Dt(e.stateNode.nextSibling):null;return!0}function Wn(){ze=tt=null,Ee=!1}function pi(){var e=vn;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),vn=null),e}function pa(e){vn===null?vn=[e]:vn.push(e)}var hi=S(null),Fn=null,nn=null;function En(e,t,n){q(hi,t._currentValue),t._currentValue=n}function sn(e){e._currentValue=hi.current,C(hi)}function xi(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function mi(e,t,n,s){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){var o=a.child;c=c.firstContext;e:for(;c!==null;){var d=c;c=a;for(var x=0;x<t.length;x++)if(d.context===t[x]){c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),xi(c.return,n,e),s||(o=null);break e}c=d.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(r(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),xi(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function ks(e,t,n,s){e=null;for(var a=t,c=!1;a!==null;){if(!c){if((a.flags&524288)!==0)c=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var d=a.type;vt(a.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(a===ae.current){if(o=a.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(La):e=[La])}a=a.return}e!==null&&mi(t,e,n,s),t.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return vu(Fn,e)}function bl(e,t){return Fn===null&&Pn(e),vu(e,t)}function vu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},nn===null){if(e===null)throw Error(r(308));nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else nn=nn.next=t;return n}var wx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Mx=i.unstable_scheduleCallback,Hx=i.unstable_NormalPriority,Qe={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Si(){return{controller:new wx,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&Mx(Hx,function(){e.controller.abort()})}var xa=null,gi=0,Ts=0,ws=null;function Cx(e,t){if(xa===null){var n=xa=[];gi=0,Ts=Bo(),ws={status:"pending",value:void 0,then:function(s){n.push(s)}}}return gi++,t.then(Bu,Bu),t}function Bu(){if(--gi===0&&xa!==null){ws!==null&&(ws.status="fulfilled");var e=xa;xa=null,Ts=0,ws=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ax(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(s.status="rejected",s.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),s}var Eu=T.S;T.S=function(e,t){cf=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cx(e,t),Eu!==null&&Eu(e,t)};var In=S(null);function yi(){var e=In.current;return e!==null?e:_e.pooledCache}function vl(e,t){t===null?q(In,In.current):q(In,t.pool)}function Ou(){var e=yi();return e===null?null:{parent:Qe._currentValue,pool:e}}var Ms=Error(r(460)),bi=Error(r(474)),Bl=Error(r(542)),El={then:function(){}};function Nu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ju(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tu(e),e;default:if(typeof t.status=="string")t.then(Pt,Pt);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=s}},function(s){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tu(e),e}throw ts=t,Ms}}function es(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ts=n,Ms):n}}var ts=null;function ku(){if(ts===null)throw Error(r(459));var e=ts;return ts=null,e}function Tu(e){if(e===Ms||e===Bl)throw Error(r(483))}var Hs=null,ma=0;function Ol(e){var t=ma;return ma+=1,Hs===null&&(Hs=[]),ju(Hs,e,t)}function Sa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nl(e,t){throw t.$$typeof===U?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wu(e){function t(y,g){if(e){var B=y.deletions;B===null?(y.deletions=[g],y.flags|=16):B.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function s(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function a(y,g){return y=en(y,g),y.index=0,y.sibling=null,y}function c(y,g,B){return y.index=B,e?(B=y.alternate,B!==null?(B=B.index,B<g?(y.flags|=67108866,g):B):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function o(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function d(y,g,B,H){return g===null||g.tag!==6?(g=oi(B,y.mode,H),g.return=y,g):(g=a(g,B),g.return=y,g)}function x(y,g,B,H){var te=B.type;return te===F?w(y,g,B.props.children,H,B.key):g!==null&&(g.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===G&&es(te)===g.type)?(g=a(g,B.props),Sa(g,B),g.return=y,g):(g=Sl(B.type,B.key,B.props,null,y.mode,H),Sa(g,B),g.return=y,g)}function E(y,g,B,H){return g===null||g.tag!==4||g.stateNode.containerInfo!==B.containerInfo||g.stateNode.implementation!==B.implementation?(g=ri(B,y.mode,H),g.return=y,g):(g=a(g,B.children||[]),g.return=y,g)}function w(y,g,B,H,te){return g===null||g.tag!==7?(g=$n(B,y.mode,H,te),g.return=y,g):(g=a(g,B),g.return=y,g)}function A(y,g,B){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=oi(""+g,y.mode,B),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case W:return B=Sl(g.type,g.key,g.props,null,y.mode,B),Sa(B,g),B.return=y,B;case ee:return g=ri(g,y.mode,B),g.return=y,g;case G:return g=es(g),A(y,g,B)}if(Ue(g)||ne(g))return g=$n(g,y.mode,B,null),g.return=y,g;if(typeof g.then=="function")return A(y,Ol(g),B);if(g.$$typeof===I)return A(y,bl(y,g),B);Nl(y,g)}return null}function O(y,g,B,H){var te=g!==null?g.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return te!==null?null:d(y,g,""+B,H);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case W:return B.key===te?x(y,g,B,H):null;case ee:return B.key===te?E(y,g,B,H):null;case G:return B=es(B),O(y,g,B,H)}if(Ue(B)||ne(B))return te!==null?null:w(y,g,B,H,null);if(typeof B.then=="function")return O(y,g,Ol(B),H);if(B.$$typeof===I)return O(y,g,bl(y,B),H);Nl(y,B)}return null}function k(y,g,B,H,te){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return y=y.get(B)||null,d(g,y,""+H,te);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return y=y.get(H.key===null?B:H.key)||null,x(g,y,H,te);case ee:return y=y.get(H.key===null?B:H.key)||null,E(g,y,H,te);case G:return H=es(H),k(y,g,B,H,te)}if(Ue(H)||ne(H))return y=y.get(B)||null,w(g,y,H,te,null);if(typeof H.then=="function")return k(y,g,B,Ol(H),te);if(H.$$typeof===I)return k(y,g,B,bl(g,H),te);Nl(g,H)}return null}function Q(y,g,B,H){for(var te=null,Oe=null,$=g,xe=g=0,Be=null;$!==null&&xe<B.length;xe++){$.index>xe?(Be=$,$=null):Be=$.sibling;var Ne=O(y,$,B[xe],H);if(Ne===null){$===null&&($=Be);break}e&&$&&Ne.alternate===null&&t(y,$),g=c(Ne,g,xe),Oe===null?te=Ne:Oe.sibling=Ne,Oe=Ne,$=Be}if(xe===B.length)return n(y,$),Ee&&tn(y,xe),te;if($===null){for(;xe<B.length;xe++)$=A(y,B[xe],H),$!==null&&(g=c($,g,xe),Oe===null?te=$:Oe.sibling=$,Oe=$);return Ee&&tn(y,xe),te}for($=s($);xe<B.length;xe++)Be=k($,y,xe,B[xe],H),Be!==null&&(e&&Be.alternate!==null&&$.delete(Be.key===null?xe:Be.key),g=c(Be,g,xe),Oe===null?te=Be:Oe.sibling=Be,Oe=Be);return e&&$.forEach(function(qn){return t(y,qn)}),Ee&&tn(y,xe),te}function le(y,g,B,H){if(B==null)throw Error(r(151));for(var te=null,Oe=null,$=g,xe=g=0,Be=null,Ne=B.next();$!==null&&!Ne.done;xe++,Ne=B.next()){$.index>xe?(Be=$,$=null):Be=$.sibling;var qn=O(y,$,Ne.value,H);if(qn===null){$===null&&($=Be);break}e&&$&&qn.alternate===null&&t(y,$),g=c(qn,g,xe),Oe===null?te=qn:Oe.sibling=qn,Oe=qn,$=Be}if(Ne.done)return n(y,$),Ee&&tn(y,xe),te;if($===null){for(;!Ne.done;xe++,Ne=B.next())Ne=A(y,Ne.value,H),Ne!==null&&(g=c(Ne,g,xe),Oe===null?te=Ne:Oe.sibling=Ne,Oe=Ne);return Ee&&tn(y,xe),te}for($=s($);!Ne.done;xe++,Ne=B.next())Ne=k($,y,xe,Ne.value,H),Ne!==null&&(e&&Ne.alternate!==null&&$.delete(Ne.key===null?xe:Ne.key),g=c(Ne,g,xe),Oe===null?te=Ne:Oe.sibling=Ne,Oe=Ne);return e&&$.forEach(function(Km){return t(y,Km)}),Ee&&tn(y,xe),te}function Ae(y,g,B,H){if(typeof B=="object"&&B!==null&&B.type===F&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case W:e:{for(var te=B.key;g!==null;){if(g.key===te){if(te=B.type,te===F){if(g.tag===7){n(y,g.sibling),H=a(g,B.props.children),H.return=y,y=H;break e}}else if(g.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===G&&es(te)===g.type){n(y,g.sibling),H=a(g,B.props),Sa(H,B),H.return=y,y=H;break e}n(y,g);break}else t(y,g);g=g.sibling}B.type===F?(H=$n(B.props.children,y.mode,H,B.key),H.return=y,y=H):(H=Sl(B.type,B.key,B.props,null,y.mode,H),Sa(H,B),H.return=y,y=H)}return o(y);case ee:e:{for(te=B.key;g!==null;){if(g.key===te)if(g.tag===4&&g.stateNode.containerInfo===B.containerInfo&&g.stateNode.implementation===B.implementation){n(y,g.sibling),H=a(g,B.children||[]),H.return=y,y=H;break e}else{n(y,g);break}else t(y,g);g=g.sibling}H=ri(B,y.mode,H),H.return=y,y=H}return o(y);case G:return B=es(B),Ae(y,g,B,H)}if(Ue(B))return Q(y,g,B,H);if(ne(B)){if(te=ne(B),typeof te!="function")throw Error(r(150));return B=te.call(B),le(y,g,B,H)}if(typeof B.then=="function")return Ae(y,g,Ol(B),H);if(B.$$typeof===I)return Ae(y,g,bl(y,B),H);Nl(y,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,g!==null&&g.tag===6?(n(y,g.sibling),H=a(g,B),H.return=y,y=H):(n(y,g),H=oi(B,y.mode,H),H.return=y,y=H),o(y)):n(y,g)}return function(y,g,B,H){try{ma=0;var te=Ae(y,g,B,H);return Hs=null,te}catch($){if($===Ms||$===Bl)throw $;var Oe=Bt(29,$,null,y.mode);return Oe.lanes=H,Oe.return=y,Oe}}}var ns=wu(!0),Mu=wu(!1),On=!1;function vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(je&2)!==0){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,t=ml(e),pu(e,null,n),t}return xl(e,s,t,n),ml(e)}function ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,vr(e,n)}}function Ei(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?a=c=o:c=c.next=o,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oi=!1;function ya(){if(Oi){var e=ws;if(e!==null)throw e}}function ba(e,t,n,s){Oi=!1;var a=e.updateQueue;On=!1;var c=a.firstBaseUpdate,o=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var x=d,E=x.next;x.next=null,o===null?c=E:o.next=E,o=x;var w=e.alternate;w!==null&&(w=w.updateQueue,d=w.lastBaseUpdate,d!==o&&(d===null?w.firstBaseUpdate=E:d.next=E,w.lastBaseUpdate=x))}if(c!==null){var A=a.baseState;o=0,w=E=x=null,d=c;do{var O=d.lane&-536870913,k=O!==d.lane;if(k?(ve&O)===O:(s&O)===O){O!==0&&O===Ts&&(Oi=!0),w!==null&&(w=w.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Q=e,le=d;O=t;var Ae=n;switch(le.tag){case 1:if(Q=le.payload,typeof Q=="function"){A=Q.call(Ae,A,O);break e}A=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=le.payload,O=typeof Q=="function"?Q.call(Ae,A,O):Q,O==null)break e;A=j({},A,O);break e;case 2:On=!0}}O=d.callback,O!==null&&(e.flags|=64,k&&(e.flags|=8192),k=a.callbacks,k===null?a.callbacks=[O]:k.push(O))}else k={lane:O,tag:d.tag,payload:d.payload,callback:d.callback,next:null},w===null?(E=w=k,x=A):w=w.next=k,o|=O;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;k=d,d=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);w===null&&(x=A),a.baseState=x,a.firstBaseUpdate=E,a.lastBaseUpdate=w,c===null&&(a.shared.lanes=0),Hn|=o,e.lanes=o,e.memoizedState=A}}function Hu(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Cu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Hu(n[e],t)}var Cs=S(null),jl=S(0);function Au(e,t){e=pn,q(jl,e),q(Cs,t),pn=e|t.baseLanes}function Ni(){q(jl,pn),q(Cs,Cs.current)}function ji(){pn=jl.current,C(Cs),C(jl)}var Et=S(null),zt=null;function kn(e){var t=e.alternate;q(Ve,Ve.current&1),q(Et,e),zt===null&&(t===null||Cs.current!==null||t.memoizedState!==null)&&(zt=e)}function ki(e){q(Ve,Ve.current),q(Et,e),zt===null&&(zt=e)}function _u(e){e.tag===22?(q(Ve,Ve.current),q(Et,e),zt===null&&(zt=e)):Tn()}function Tn(){q(Ve,Ve.current),q(Et,Et.current)}function Ot(e){C(Et),zt===e&&(zt=null),C(Ve)}var Ve=S(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_o(n)||zo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var an=0,he=null,He=null,Xe=null,Tl=!1,As=!1,ss=!1,wl=0,va=0,_s=null,_x=0;function Le(){throw Error(r(321))}function Ti(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function wi(e,t,n,s,a,c){return an=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Sd:Ki,ss=!1,c=n(s,a),ss=!1,As&&(c=Du(t,n,s,a)),zu(e),c}function zu(e){T.H=Oa;var t=He!==null&&He.next!==null;if(an=0,Xe=He=he=null,Tl=!1,va=0,_s=null,t)throw Error(r(300));e===null||Ze||(e=e.dependencies,e!==null&&yl(e)&&(Ze=!0))}function Du(e,t,n,s){he=e;var a=0;do{if(As&&(_s=null),va=0,As=!1,25<=a)throw Error(r(301));if(a+=1,Xe=He=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}T.H=gd,c=t(n,s)}while(As);return c}function zx(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Ba(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(he.flags|=1024),t}function Mi(){var e=wl!==0;return wl=0,e}function Hi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ci(e){if(Tl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Tl=!1}an=0,Xe=He=he=null,As=!1,va=wl=0,_s=null}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?he.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(He===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Xe===null?he.memoizedState:Xe.next;if(t!==null)Xe=t,He=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?he.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ba(e){var t=va;return va+=1,_s===null&&(_s=[]),e=ju(_s,e,t),t=he,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Sd:Ki),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ba(e);if(e.$$typeof===I)return nt(e)}throw Error(r(438,String(e)))}function Ai(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ml(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=oe;return t.index++,n}function ln(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=Ye();return _i(t,He,e)}function _i(e,t,n){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var a=e.baseQueue,c=s.pending;if(c!==null){if(a!==null){var o=a.next;a.next=c.next,c.next=o}t.baseQueue=a=c,s.pending=null}if(c=e.baseState,a===null)e.memoizedState=c;else{t=a.next;var d=o=null,x=null,E=t,w=!1;do{var A=E.lane&-536870913;if(A!==E.lane?(ve&A)===A:(an&A)===A){var O=E.revertLane;if(O===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),A===Ts&&(w=!0);else if((an&O)===O){E=E.next,O===Ts&&(w=!0);continue}else A={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(d=x=A,o=c):x=x.next=A,he.lanes|=O,Hn|=O;A=E.action,ss&&n(c,A),c=E.hasEagerState?E.eagerState:n(c,A)}else O={lane:A,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},x===null?(d=x=O,o=c):x=x.next=O,he.lanes|=A,Hn|=A;E=E.next}while(E!==null&&E!==t);if(x===null?o=c:x.next=d,!vt(c,e.memoizedState)&&(Ze=!0,w&&(n=ws,n!==null)))throw n;e.memoizedState=c,e.baseState=o,e.baseQueue=x,s.lastRenderedState=c}return a===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zi(e){var t=Ye(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do c=e(c,o.action),o=o.next;while(o!==a);vt(c,t.memoizedState)||(Ze=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,s]}function Ru(e,t,n){var s=he,a=Ye(),c=Ee;if(c){if(n===void 0)throw Error(r(407));n=n()}else n=t();var o=!vt((He||a).memoizedState,n);if(o&&(a.memoizedState=n,Ze=!0),a=a.queue,Gi(Lu.bind(null,s,a,e),[e]),a.getSnapshot!==t||o||Xe!==null&&Xe.memoizedState.tag&1){if(s.flags|=2048,zs(9,{destroy:void 0},Uu.bind(null,s,a,n,t),null),_e===null)throw Error(r(349));c||(an&127)!==0||Gu(s,t,n)}return n}function Gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Ml(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,s){t.value=n,t.getSnapshot=s,qu(t)&&Vu(e)}function Lu(e,t,n){return n(function(){qu(t)&&Vu(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Vu(e){var t=Jn(e,2);t!==null&&xt(t,e,2)}function Di(e){var t=ot();if(typeof e=="function"){var n=e;if(e=n(),ss){Sn(!0);try{n()}finally{Sn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:e},t}function Yu(e,t,n,s){return e.baseState=n,_i(e,He,typeof s=="function"?s:ln)}function Dx(e,t,n,s,a){if(zl(e))throw Error(r(485));if(e=t.action,e!==null){var c={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){c.listeners.push(o)}};T.T!==null?n(!0):c.isTransition=!1,s(c),n=t.pending,n===null?(c.next=t.pending=c,Ku(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Ku(e,t){var n=t.action,s=t.payload,a=e.state;if(t.isTransition){var c=T.T,o={};T.T=o;try{var d=n(a,s),x=T.S;x!==null&&x(o,d),Qu(e,t,d)}catch(E){Ri(e,t,E)}finally{c!==null&&o.types!==null&&(c.types=o.types),T.T=c}}else try{c=n(a,s),Qu(e,t,c)}catch(E){Ri(e,t,E)}}function Qu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Xu(e,t,s)},function(s){return Ri(e,t,s)}):Xu(e,t,n)}function Xu(e,t,n){t.status="fulfilled",t.value=n,Zu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ku(e,n)))}function Ri(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Zu(t),t=t.next;while(t!==s)}e.action=null}function Zu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ju(e,t){return t}function $u(e,t){if(Ee){var n=_e.formState;if(n!==null){e:{var s=he;if(Ee){if(ze){t:{for(var a=ze,c=_t;a.nodeType!==8;){if(!c){a=null;break t}if(a=Dt(a.nextSibling),a===null){a=null;break t}}c=a.data,a=c==="F!"||c==="F"?a:null}if(a){ze=Dt(a.nextSibling),s=a.data==="F!";break e}}Bn(s)}s=!1}s&&(t=n[0])}}return n=ot(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ju,lastRenderedState:t},n.queue=s,n=hd.bind(null,he,s),s.dispatch=n,s=Di(!1),c=Yi.bind(null,he,!1,s.queue),s=ot(),a={state:t,dispatch:null,action:e,pending:null},s.queue=a,n=Dx.bind(null,he,a,c,n),a.dispatch=n,s.memoizedState=e,[t,n,!1]}function Wu(e){var t=Ye();return Fu(t,He,e)}function Fu(e,t,n){if(t=_i(e,t,Ju)[0],e=Cl(ln)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Ba(t)}catch(o){throw o===Ms?Bl:o}else s=t;t=Ye();var a=t.queue,c=a.dispatch;return n!==t.memoizedState&&(he.flags|=2048,zs(9,{destroy:void 0},Rx.bind(null,a,n),null)),[s,c,e]}function Rx(e,t){e.action=t}function Pu(e){var t=Ye(),n=He;if(n!==null)return Fu(t,n,e);Ye(),t=t.memoizedState,n=Ye();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function zs(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=he.updateQueue,t===null&&(t=Ml(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function Iu(){return Ye().memoizedState}function Al(e,t,n,s){var a=ot();he.flags|=e,a.memoizedState=zs(1|t,{destroy:void 0},n,s===void 0?null:s)}function _l(e,t,n,s){var a=Ye();s=s===void 0?null:s;var c=a.memoizedState.inst;He!==null&&s!==null&&Ti(s,He.memoizedState.deps)?a.memoizedState=zs(t,c,n,s):(he.flags|=e,a.memoizedState=zs(1|t,c,n,s))}function ed(e,t){Al(8390656,8,e,t)}function Gi(e,t){_l(2048,8,e,t)}function Gx(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=Ml(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function td(e){var t=Ye().memoizedState;return Gx({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return _l(4,2,e,t)}function sd(e,t){return _l(4,4,e,t)}function ad(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){n=n!=null?n.concat([e]):null,_l(4,4,ad.bind(null,t,e),n)}function Ui(){}function cd(e,t){var n=Ye();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&Ti(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function id(e,t){var n=Ye();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&Ti(t,s[1]))return s[0];if(s=e(),ss){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[s,t],s}function Li(e,t,n){return n===void 0||(an&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=rf(),he.lanes|=e,Hn|=e,n)}function od(e,t,n,s){return vt(n,t)?n:Cs.current!==null?(e=Li(e,n,s),vt(e,t)||(Ze=!0),e):(an&42)===0||(an&1073741824)!==0&&(ve&261930)===0?(Ze=!0,e.memoizedState=n):(e=rf(),he.lanes|=e,Hn|=e,t)}function rd(e,t,n,s,a){var c=L.p;L.p=c!==0&&8>c?c:8;var o=T.T,d={};T.T=d,Yi(e,!1,t,n);try{var x=a(),E=T.S;if(E!==null&&E(d,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var w=Ax(x,s);Ea(e,t,w,kt(e))}else Ea(e,t,s,kt(e))}catch(A){Ea(e,t,{then:function(){},status:"rejected",reason:A},kt())}finally{L.p=c,o!==null&&d.types!==null&&(o.types=d.types),T.T=o}}function Ux(){}function qi(e,t,n,s){if(e.tag!==5)throw Error(r(476));var a=ud(e).queue;rd(e,a,t,R,n===null?Ux:function(){return dd(e),n(s)})}function ud(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dd(e){var t=ud(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},kt())}function Vi(){return nt(La)}function fd(){return Ye().memoizedState}function pd(){return Ye().memoizedState}function Lx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Nn(n);var s=jn(t,e,n);s!==null&&(xt(s,t,n),ga(s,t,n)),t={cache:Si()},e.payload=t;return}t=t.return}}function qx(e,t,n){var s=kt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zl(e)?xd(t,n):(n=ci(e,t,n,s),n!==null&&(xt(n,e,s),md(n,t,s)))}function hd(e,t,n){var s=kt();Ea(e,t,n,s)}function Ea(e,t,n,s){var a={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zl(e))xd(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var o=t.lastRenderedState,d=c(o,n);if(a.hasEagerState=!0,a.eagerState=d,vt(d,o))return xl(e,t,a,0),_e===null&&hl(),!1}catch{}if(n=ci(e,t,a,s),n!==null)return xt(n,e,s),md(n,t,s),!0}return!1}function Yi(e,t,n,s){if(s={lane:2,revertLane:Bo(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(t)throw Error(r(479))}else t=ci(e,n,s,2),t!==null&&xt(t,e,2)}function zl(e){var t=e.alternate;return e===he||t!==null&&t===he}function xd(e,t){As=Tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,vr(e,n)}}var Oa={readContext:nt,use:Hl,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Oa.useEffectEvent=Le;var Sd={readContext:nt,use:Hl,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ed,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Al(4194308,4,ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Al(4194308,4,e,t)},useInsertionEffect:function(e,t){Al(4,2,e,t)},useMemo:function(e,t){var n=ot();t=t===void 0?null:t;var s=e();if(ss){Sn(!0);try{e()}finally{Sn(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=ot();if(n!==void 0){var a=n(t);if(ss){Sn(!0);try{n(t)}finally{Sn(!1)}}}else a=t;return s.memoizedState=s.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},s.queue=e,e=e.dispatch=qx.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Di(e);var t=e.queue,n=hd.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ui,useDeferredValue:function(e,t){var n=ot();return Li(n,e,t)},useTransition:function(){var e=Di(!1);return e=rd.bind(null,he,e.queue,!0,!1),ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=he,a=ot();if(Ee){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),_e===null)throw Error(r(349));(ve&127)!==0||Gu(s,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,ed(Lu.bind(null,s,c,e),[e]),s.flags|=2048,zs(9,{destroy:void 0},Uu.bind(null,s,c,n,t),null),n},useId:function(){var e=ot(),t=_e.identifierPrefix;if(Ee){var n=Jt,s=Zt;n=(s&~(1<<32-bt(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_x++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vi,useFormState:$u,useActionState:$u,useOptimistic:function(e){var t=ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Yi.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ai,useCacheRefresh:function(){return ot().memoizedState=Lx.bind(null,he)},useEffectEvent:function(e){var t=ot(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},Ki={readContext:nt,use:Hl,useCallback:cd,useContext:nt,useEffect:Gi,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:sd,useMemo:id,useReducer:Cl,useRef:Iu,useState:function(){return Cl(ln)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=Ye();return od(n,He.memoizedState,e,t)},useTransition:function(){var e=Cl(ln)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Ba(e),t]},useSyncExternalStore:Ru,useId:fd,useHostTransitionStatus:Vi,useFormState:Wu,useActionState:Wu,useOptimistic:function(e,t){var n=Ye();return Yu(n,He,e,t)},useMemoCache:Ai,useCacheRefresh:pd};Ki.useEffectEvent=td;var gd={readContext:nt,use:Hl,useCallback:cd,useContext:nt,useEffect:Gi,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:sd,useMemo:id,useReducer:zi,useRef:Iu,useState:function(){return zi(ln)},useDebugValue:Ui,useDeferredValue:function(e,t){var n=Ye();return He===null?Li(n,e,t):od(n,He.memoizedState,e,t)},useTransition:function(){var e=zi(ln)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:Ba(e),t]},useSyncExternalStore:Ru,useId:fd,useHostTransitionStatus:Vi,useFormState:Pu,useActionState:Pu,useOptimistic:function(e,t){var n=Ye();return He!==null?Yu(n,He,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ai,useCacheRefresh:pd};gd.useEffectEvent=td;function Qi(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=kt(),a=Nn(s);a.payload=t,n!=null&&(a.callback=n),t=jn(e,a,s),t!==null&&(xt(t,e,s),ga(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=kt(),a=Nn(s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=jn(e,a,s),t!==null&&(xt(t,e,s),ga(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),s=Nn(n);s.tag=2,t!=null&&(s.callback=t),t=jn(e,s,n),t!==null&&(xt(t,e,n),ga(t,e,n))}};function yd(e,t,n,s,a,c,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,c,o):t.prototype&&t.prototype.isPureReactComponent?!ua(n,s)||!ua(a,c):!0}function bd(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function as(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=j({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function vd(e){pl(e)}function Bd(e){console.error(e)}function Ed(e){pl(e)}function Dl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function Od(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Zi(e,t,n){return n=Nn(n),n.tag=3,n.payload={element:null},n.callback=function(){Dl(e,t)},n}function Nd(e){return e=Nn(e),e.tag=3,e}function jd(e,t,n,s){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var c=s.value;e.payload=function(){return a(c)},e.callback=function(){Od(t,n,s)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Od(t,n,s),typeof a!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})})}function Vx(e,t,n,s,a){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&ks(t,n,a,!0),n=Et.current,n!==null){switch(n.tag){case 31:case 13:return zt===null?Jl():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,s===El?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),yo(e,s,a)),!1;case 22:return n.flags|=65536,s===El?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),yo(e,s,a)),!1}throw Error(r(435,n.tag))}return yo(e,s,a),Jl(),!1}if(Ee)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,s!==fi&&(e=Error(r(422),{cause:s}),pa(Ht(e,n)))):(s!==fi&&(t=Error(r(423),{cause:s}),pa(Ht(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,s=Ht(s,n),a=Zi(e.stateNode,s,a),Ei(e,a),qe!==4&&(qe=2)),!1;var c=Error(r(520),{cause:s});if(c=Ht(c,n),Ca===null?Ca=[c]:Ca.push(c),qe!==4&&(qe=2),t===null)return!0;s=Ht(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zi(n.stateNode,s,e),Ei(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Cn===null||!Cn.has(c))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nd(a),jd(a,e,n,s),Ei(n,a),!1}n=n.return}while(n!==null);return!1}var Ji=Error(r(461)),Ze=!1;function st(e,t,n,s){t.child=e===null?Mu(t,null,n,s):ns(t,e.child,n,s)}function kd(e,t,n,s,a){n=n.render;var c=t.ref;if("ref"in s){var o={};for(var d in s)d!=="ref"&&(o[d]=s[d])}else o=s;return Pn(t),s=wi(e,t,n,o,c,a),d=Mi(),e!==null&&!Ze?(Hi(e,t,a),cn(e,t,a)):(Ee&&d&&ui(t),t.flags|=1,st(e,t,s,a),t.child)}function Td(e,t,n,s,a){if(e===null){var c=n.type;return typeof c=="function"&&!ii(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,wd(e,t,c,s,a)):(e=Sl(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!no(e,a)){var o=c.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,s)&&e.ref===t.ref)return cn(e,t,a)}return t.flags|=1,e=en(c,s),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,n,s,a){if(e!==null){var c=e.memoizedProps;if(ua(c,s)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=s=c,no(e,a))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,cn(e,t,a)}return $i(e,t,n,s,a)}function Md(e,t,n,s){var a=s.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(s=t.child=e.child,a=0;s!==null;)a=a|s.lanes|s.childLanes,s=s.sibling;s=a&~c}else s=0,t.child=null;return Hd(e,t,c,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(t,c!==null?c.cachePool:null),c!==null?Au(t,c):Ni(),_u(t);else return s=t.lanes=536870912,Hd(e,t,c!==null?c.baseLanes|n:n,n,s)}else c!==null?(vl(t,c.cachePool),Au(t,c),Tn(),t.memoizedState=null):(e!==null&&vl(t,null),Ni(),Tn());return st(e,t,a,n),t.child}function Na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hd(e,t,n,s,a){var c=yi();return c=c===null?null:{parent:Qe._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&vl(t,null),Ni(),_u(t),e!==null&&ks(e,t,s,!0),t.childLanes=a,null}function Rl(e,t){return t=Ul({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cd(e,t,n){return ns(t,e.child,null,n),e=Rl(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Yx(e,t,n){var s=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(s.mode==="hidden")return e=Rl(t,s),t.lanes=536870912,Na(null,e);if(ki(t),(e=ze)?(e=Qf(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:Zt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=xu(e),n.return=t,t.child=n,tt=t,ze=null)):e=null,e===null)throw Bn(t);return t.lanes=536870912,null}return Rl(t,s)}var c=e.memoizedState;if(c!==null){var o=c.dehydrated;if(ki(t),a)if(t.flags&256)t.flags&=-257,t=Cd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ze||ks(e,t,n,!1),a=(n&e.childLanes)!==0,Ze||a){if(s=_e,s!==null&&(o=Br(s,n),o!==0&&o!==c.retryLane))throw c.retryLane=o,Jn(e,o),xt(s,e,o),Ji;Jl(),t=Cd(e,t,n)}else e=c.treeContext,ze=Dt(o.nextSibling),tt=t,Ee=!0,vn=null,_t=!1,e!==null&&gu(t,e),t=Rl(t,s),t.flags|=4096;return t}return e=en(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(r(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function $i(e,t,n,s,a){return Pn(t),n=wi(e,t,n,s,void 0,a),s=Mi(),e!==null&&!Ze?(Hi(e,t,a),cn(e,t,a)):(Ee&&s&&ui(t),t.flags|=1,st(e,t,n,a),t.child)}function Ad(e,t,n,s,a,c){return Pn(t),t.updateQueue=null,n=Du(t,s,n,a),zu(e),s=Mi(),e!==null&&!Ze?(Hi(e,t,c),cn(e,t,c)):(Ee&&s&&ui(t),t.flags|=1,st(e,t,n,c),t.child)}function _d(e,t,n,s,a){if(Pn(t),t.stateNode===null){var c=Es,o=n.contextType;typeof o=="object"&&o!==null&&(c=nt(o)),c=new n(s,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Xi,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=s,c.state=t.memoizedState,c.refs={},vi(t),o=n.contextType,c.context=typeof o=="object"&&o!==null?nt(o):Es,c.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Qi(t,n,o,s),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(o=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),o!==c.state&&Xi.enqueueReplaceState(c,c.state,null),ba(t,s,c,a),ya(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){c=t.stateNode;var d=t.memoizedProps,x=as(n,d);c.props=x;var E=c.context,w=n.contextType;o=Es,typeof w=="object"&&w!==null&&(o=nt(w));var A=n.getDerivedStateFromProps;w=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,w||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d||E!==o)&&bd(t,c,s,o),On=!1;var O=t.memoizedState;c.state=O,ba(t,s,c,a),ya(),E=t.memoizedState,d||O!==E||On?(typeof A=="function"&&(Qi(t,n,A,s),E=t.memoizedState),(x=On||yd(t,n,x,s,O,E,o))?(w||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=E),c.props=s,c.state=E,c.context=o,s=x):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{c=t.stateNode,Bi(e,t),o=t.memoizedProps,w=as(n,o),c.props=w,A=t.pendingProps,O=c.context,E=n.contextType,x=Es,typeof E=="object"&&E!==null&&(x=nt(E)),d=n.getDerivedStateFromProps,(E=typeof d=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(o!==A||O!==x)&&bd(t,c,s,x),On=!1,O=t.memoizedState,c.state=O,ba(t,s,c,a),ya();var k=t.memoizedState;o!==A||O!==k||On||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof d=="function"&&(Qi(t,n,d,s),k=t.memoizedState),(w=On||yd(t,n,w,s,O,k,x)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(E||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,k,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,k,x)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=k),c.props=s,c.state=k,c.context=x,s=w):(typeof c.componentDidUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),s=!1)}return c=s,Gl(e,t),s=(t.flags&128)!==0,c||s?(c=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&s?(t.child=ns(t,e.child,null,a),t.child=ns(t,null,n,a)):st(e,t,n,a),t.memoizedState=c.state,e=t.child):e=cn(e,t,a),e}function zd(e,t,n,s){return Wn(),t.flags|=256,st(e,t,n,s),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fi(e){return{baseLanes:e,cachePool:Ou()}}function Pi(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jt),e}function Dd(e,t,n){var s=t.pendingProps,a=!1,c=(t.flags&128)!==0,o;if((o=c)||(o=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(a?kn(t):Tn(),(e=ze)?(e=Qf(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bn!==null?{id:Zt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=xu(e),n.return=t,t.child=n,tt=t,ze=null)):e=null,e===null)throw Bn(t);return zo(e)?t.lanes=32:t.lanes=536870912,null}var d=s.children;return s=s.fallback,a?(Tn(),a=t.mode,d=Ul({mode:"hidden",children:d},a),s=$n(s,a,n,null),d.return=t,s.return=t,d.sibling=s,t.child=d,s=t.child,s.memoizedState=Fi(n),s.childLanes=Pi(e,o,n),t.memoizedState=Wi,Na(null,s)):(kn(t),Ii(t,d))}var x=e.memoizedState;if(x!==null&&(d=x.dehydrated,d!==null)){if(c)t.flags&256?(kn(t),t.flags&=-257,t=eo(e,t,n)):t.memoizedState!==null?(Tn(),t.child=e.child,t.flags|=128,t=null):(Tn(),d=s.fallback,a=t.mode,s=Ul({mode:"visible",children:s.children},a),d=$n(d,a,n,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,ns(t,e.child,null,n),s=t.child,s.memoizedState=Fi(n),s.childLanes=Pi(e,o,n),t.memoizedState=Wi,t=Na(null,s));else if(kn(t),zo(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var E=o.dgst;o=E,s=Error(r(419)),s.stack="",s.digest=o,pa({value:s,source:null,stack:null}),t=eo(e,t,n)}else if(Ze||ks(e,t,n,!1),o=(n&e.childLanes)!==0,Ze||o){if(o=_e,o!==null&&(s=Br(o,n),s!==0&&s!==x.retryLane))throw x.retryLane=s,Jn(e,s),xt(o,e,s),Ji;_o(d)||Jl(),t=eo(e,t,n)}else _o(d)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ze=Dt(d.nextSibling),tt=t,Ee=!0,vn=null,_t=!1,e!==null&&gu(t,e),t=Ii(t,s.children),t.flags|=4096);return t}return a?(Tn(),d=s.fallback,a=t.mode,x=e.child,E=x.sibling,s=en(x,{mode:"hidden",children:s.children}),s.subtreeFlags=x.subtreeFlags&65011712,E!==null?d=en(E,d):(d=$n(d,a,n,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,Na(null,s),s=t.child,d=e.child.memoizedState,d===null?d=Fi(n):(a=d.cachePool,a!==null?(x=Qe._currentValue,a=a.parent!==x?{parent:x,pool:x}:a):a=Ou(),d={baseLanes:d.baseLanes|n,cachePool:a}),s.memoizedState=d,s.childLanes=Pi(e,o,n),t.memoizedState=Wi,Na(e.child,s)):(kn(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ii(e,t){return t=Ul({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ul(e,t){return e=Bt(22,e,null,t),e.lanes=0,e}function eo(e,t,n){return ns(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rd(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),xi(e.return,t,n)}function to(e,t,n,s,a,c){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a,treeForkCount:c}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a,o.treeForkCount=c)}function Gd(e,t,n){var s=t.pendingProps,a=s.revealOrder,c=s.tail;s=s.children;var o=Ve.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,q(Ve,o),st(e,t,s,n),s=Ee?fa:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,n,t);else if(e.tag===19)Rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),to(t,!1,a,n,c,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&kl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}to(t,!0,n,null,c,s);break;case"together":to(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ks(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function no(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Kx(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),En(t,Qe,e.memoizedState.cache),Wn();break;case 27:case 5:St(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:En(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ki(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Dd(e,t,n):(kn(t),e=cn(e,t,n),e!==null?e.sibling:null);kn(t);break;case 19:var a=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(ks(e,t,n,!1),s=(n&t.childLanes)!==0),a){if(s)return Gd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(Ve,Ve.current),s)break;return null;case 22:return t.lanes=0,Md(e,t,n,t.pendingProps);case 24:En(t,Qe,e.memoizedState.cache)}return cn(e,t,n)}function Ud(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!no(e,n)&&(t.flags&128)===0)return Ze=!1,Kx(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,Ee&&(t.flags&1048576)!==0&&Su(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=es(t.elementType),t.type=e,typeof e=="function")ii(e)?(s=as(e,s),t.tag=1,t=_d(null,t,e,s,n)):(t.tag=0,t=$i(null,t,e,s,n));else{if(e!=null){var a=e.$$typeof;if(a===fe){t.tag=11,t=kd(null,t,e,s,n);break e}else if(a===z){t.tag=14,t=Td(null,t,e,s,n);break e}}throw t=Ie(e)||e,Error(r(306,t,""))}}return t;case 0:return $i(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,a=as(s,t.pendingProps),_d(e,t,s,a,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(r(387));s=t.pendingProps;var c=t.memoizedState;a=c.element,Bi(e,t),ba(t,s,null,n);var o=t.memoizedState;if(s=o.cache,En(t,Qe,s),s!==c.cache&&mi(t,[Qe],n,!0),ya(),s=o.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=zd(e,t,s,n);break e}else if(s!==a){a=Ht(Error(r(424)),t),pa(a),t=zd(e,t,s,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=Dt(e.firstChild),tt=t,Ee=!0,vn=null,_t=!0,n=Mu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),s===a){t=cn(e,t,n);break e}st(e,t,s,n)}t=t.child}return t;case 26:return Gl(e,t),e===null?(n=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,s=tc(pe.current).createElement(n),s[et]=t,s[rt]=e,at(s,n,e),Fe(s),t.stateNode=s):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return St(t),e===null&&Ee&&(s=t.stateNode=Jf(t.type,t.pendingProps,pe.current),tt=t,_t=!0,a=ze,Dn(t.type)?(Do=a,ze=Dt(s.firstChild)):ze=a),st(e,t,t.pendingProps.children,n),Gl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((a=s=ze)&&(s=bm(s,t.type,t.pendingProps,_t),s!==null?(t.stateNode=s,tt=t,ze=Dt(s.firstChild),_t=!1,a=!0):a=!1),a||Bn(t)),St(t),a=t.type,c=t.pendingProps,o=e!==null?e.memoizedProps:null,s=c.children,Ho(a,c)?s=null:o!==null&&Ho(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=wi(e,t,zx,null,null,n),La._currentValue=a),Gl(e,t),st(e,t,s,n),t.child;case 6:return e===null&&Ee&&((e=n=ze)&&(n=vm(n,t.pendingProps,_t),n!==null?(t.stateNode=n,tt=t,ze=null,e=!0):e=!1),e||Bn(t)),null;case 13:return Dd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=ns(t,null,s,n):st(e,t,s,n),t.child;case 11:return kd(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,En(t,t.type,s.value),st(e,t,s.children,n),t.child;case 9:return a=t.type._context,s=t.pendingProps.children,Pn(t),a=nt(a),s=s(a),t.flags|=1,st(e,t,s,n),t.child;case 14:return Td(e,t,t.type,t.pendingProps,n);case 15:return wd(e,t,t.type,t.pendingProps,n);case 19:return Gd(e,t,n);case 31:return Yx(e,t,n);case 22:return Md(e,t,n,t.pendingProps);case 24:return Pn(t),s=nt(Qe),e===null?(a=yi(),a===null&&(a=_e,c=Si(),a.pooledCache=c,c.refCount++,c!==null&&(a.pooledCacheLanes|=n),a=c),t.memoizedState={parent:s,cache:a},vi(t),En(t,Qe,a)):((e.lanes&n)!==0&&(Bi(e,t),ba(t,null,null,n),ya()),a=e.memoizedState,c=t.memoizedState,a.parent!==s?(a={parent:s,cache:s},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),En(t,Qe,s)):(s=c.cache,En(t,Qe,s),s!==a.cache&&mi(t,[Qe],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function on(e){e.flags|=4}function so(e,t,n,s,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(pf())e.flags|=8192;else throw ts=El,bi}else e.flags&=-16777217}function Ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!np(t))if(pf())e.flags|=8192;else throw ts=El,bi}function Ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yr():536870912,e.lanes|=t,Us|=t)}function ja(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&65011712,s|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Qx(e,t,n){var s=t.pendingProps;switch(di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),sn(Qe),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(js(t)?on(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pi())),De(t),null;case 26:var a=t.type,c=t.memoizedState;return e===null?(on(t),c!==null?(De(t),Ld(t,c)):(De(t),so(t,a,null,s,n))):c?c!==e.memoizedState?(on(t),De(t),Ld(t,c)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&on(t),De(t),so(t,a,e,s,n)),null;case 27:if(Qt(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&on(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return De(t),null}e=Y.current,js(t)?yu(t):(e=Jf(a,s,n),t.stateNode=e,on(t))}return De(t),null;case 5:if(Qt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&on(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return De(t),null}if(c=Y.current,js(t))yu(t);else{var o=tc(pe.current);switch(c){case 1:c=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:c=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":c=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":c=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":c=o.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?o.createElement(a,{is:s.is}):o.createElement(a)}}c[et]=t,c[rt]=s;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)c.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=c;e:switch(at(c,a,s),a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&on(t)}}return De(t),so(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&on(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(e=pe.current,js(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,a=tt,a!==null)switch(a.tag){case 27:case 5:s=a.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Rf(e.nodeValue,n)),e||Bn(t,!0)}else e=tc(e).createTextNode(s),e[et]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=js(t),n!==null){if(e===null){if(!s)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[et]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(r(558))}return De(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=js(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(r(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(r(317));a[et]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),a=!1}else a=pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,a=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(a=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ll(t,t.updateQueue),De(t),null);case 4:return Me(),e===null&&jo(t.stateNode.containerInfo),De(t),null;case 10:return sn(t.type),De(t),null;case 19:if(C(Ve),s=t.memoizedState,s===null)return De(t),null;if(a=(t.flags&128)!==0,c=s.rendering,c===null)if(a)ja(s,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=kl(e),c!==null){for(t.flags|=128,ja(s,!1),e=c.updateQueue,t.updateQueue=e,Ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hu(n,e),n=n.sibling;return q(Ve,Ve.current&1|2),Ee&&tn(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&gt()>Ql&&(t.flags|=128,a=!0,ja(s,!1),t.lanes=4194304)}else{if(!a)if(e=kl(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ll(t,e),ja(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!Ee)return De(t),null}else 2*gt()-s.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,a=!0,ja(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(e=s.last,e!==null?e.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=Ve.current,q(Ve,a?n&1|2:n&1),Ee&&tn(t,s.treeForkCount),e):(De(t),null);case 22:case 23:return Ot(t),ji(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&C(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sn(Qe),De(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Xx(e,t){switch(di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(Qe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(r(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Ve),null;case 4:return Me(),null;case 10:return sn(t.type),null;case 22:case 23:return Ot(t),ji(),e!==null&&C(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sn(Qe),null;case 25:return null;default:return null}}function qd(e,t){switch(di(t),t.tag){case 3:sn(Qe),Me();break;case 26:case 27:case 5:Qt(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:C(Ve);break;case 10:sn(t.type);break;case 22:case 23:Ot(t),ji(),e!==null&&C(In);break;case 24:sn(Qe)}}function ka(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var a=s.next;n=a;do{if((n.tag&e)===e){s=void 0;var c=n.create,o=n.inst;s=c(),o.destroy=s}n=n.next}while(n!==a)}}catch(d){Te(t,t.return,d)}}function wn(e,t,n){try{var s=t.updateQueue,a=s!==null?s.lastEffect:null;if(a!==null){var c=a.next;s=c;do{if((s.tag&e)===e){var o=s.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,a=t;var x=n,E=d;try{E()}catch(w){Te(a,x,w)}}}s=s.next}while(s!==c)}}catch(w){Te(t,t.return,w)}}function Vd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cu(t,n)}catch(s){Te(e,e.return,s)}}}function Yd(e,t,n){n.props=as(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){Te(e,t,s)}}function Ta(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(a){Te(e,t,a)}}function $t(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(a){Te(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Te(e,t,a)}else n.current=null}function Kd(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(a){Te(e,e.return,a)}}function ao(e,t,n){try{var s=e.stateNode;hm(s,e.type,n,t),s[rt]=t}catch(a){Te(e,e.return,a)}}function Qd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dn(e.type)||e.tag===4}function lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pt));else if(s!==4&&(s===27&&Dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(co(e,t,n),e=e.sibling;e!==null;)co(e,t,n),e=e.sibling}function ql(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&Dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Xd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);at(t,s,n),t[et]=e,t[rt]=n}catch(c){Te(e,e.return,c)}}var rn=!1,Je=!1,io=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Zx(e,t){if(e=e.containerInfo,wo=oc,e=lu(e),ei(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,c=s.focusNode;s=s.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var o=0,d=-1,x=-1,E=0,w=0,A=e,O=null;t:for(;;){for(var k;A!==n||a!==0&&A.nodeType!==3||(d=o+a),A!==c||s!==0&&A.nodeType!==3||(x=o+s),A.nodeType===3&&(o+=A.nodeValue.length),(k=A.firstChild)!==null;)O=A,A=k;for(;;){if(A===e)break t;if(O===n&&++E===a&&(d=o),O===c&&++w===s&&(x=o),(k=A.nextSibling)!==null)break;A=O,O=A.parentNode}A=k}n=d===-1||x===-1?null:{start:d,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:e,selectionRange:n},oc=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,a=c.memoizedProps,c=c.memoizedState,s=n.stateNode;try{var Q=as(n.type,a);e=s.getSnapshotBeforeUpdate(Q,c),s.__reactInternalSnapshotBeforeUpdate=e}catch(le){Te(n,n.return,le)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ao(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ao(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function Jd(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:dn(e,n),s&4&&ka(5,n);break;case 1:if(dn(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Te(n,n.return,o)}else{var a=as(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Te(n,n.return,o)}}s&64&&Vd(n),s&512&&Ta(n,n.return);break;case 3:if(dn(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cu(e,t)}catch(o){Te(n,n.return,o)}}break;case 27:t===null&&s&4&&Xd(n);case 26:case 5:dn(e,n),t===null&&s&4&&Kd(n),s&512&&Ta(n,n.return);break;case 12:dn(e,n);break;case 31:dn(e,n),s&4&&Fd(e,n);break;case 13:dn(e,n),s&4&&Pd(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=nm.bind(null,n),Bm(e,n))));break;case 22:if(s=n.memoizedState!==null||rn,!s){t=t!==null&&t.memoizedState!==null||Je,a=rn;var c=Je;rn=s,(Je=t)&&!c?fn(e,n,(n.subtreeFlags&8772)!==0):dn(e,n),rn=a,Je=c}break;case 30:break;default:dn(e,n)}}function $d(e){var t=e.alternate;t!==null&&(e.alternate=null,$d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,dt=!1;function un(e,t,n){for(n=n.child;n!==null;)Wd(e,t,n),n=n.sibling}function Wd(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ps,n)}catch{}switch(n.tag){case 26:Je||$t(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||$t(n,t);var s=Re,a=dt;Dn(n.type)&&(Re=n.stateNode,dt=!1),un(e,t,n),Ra(n.stateNode),Re=s,dt=a;break;case 5:Je||$t(n,t);case 6:if(s=Re,a=dt,Re=null,un(e,t,n),Re=s,dt=a,Re!==null)if(dt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(c){Te(n,t,c)}else try{Re.removeChild(n.stateNode)}catch(c){Te(n,t,c)}break;case 18:Re!==null&&(dt?(e=Re,Yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Zs(e)):Yf(Re,n.stateNode));break;case 4:s=Re,a=dt,Re=n.stateNode.containerInfo,dt=!0,un(e,t,n),Re=s,dt=a;break;case 0:case 11:case 14:case 15:wn(2,n,t),Je||wn(4,n,t),un(e,t,n);break;case 1:Je||($t(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Yd(n,t,s)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Je=(s=Je)||n.memoizedState!==null,un(e,t,n),Je=s;break;default:un(e,t,n)}}function Fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zs(e)}catch(n){Te(t,t.return,n)}}}function Pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zs(e)}catch(n){Te(t,t.return,n)}}function Jx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zd),t;default:throw Error(r(435,e.tag))}}function Vl(e,t){var n=Jx(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var a=sm.bind(null,e,s);s.then(a,a)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s],c=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Dn(d.type)){Re=d.stateNode,dt=!1;break e}break;case 5:Re=d.stateNode,dt=!1;break e;case 3:case 4:Re=d.stateNode.containerInfo,dt=!0;break e}d=d.return}if(Re===null)throw Error(r(160));Wd(c,o,a),Re=null,dt=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}var qt=null;function Id(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),pt(e),s&4&&(wn(3,e,e.return),ka(3,e),wn(5,e,e.return));break;case 1:ft(t,e),pt(e),s&512&&(Je||n===null||$t(n,n.return)),s&64&&rn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var a=qt;if(ft(t,e),pt(e),s&512&&(Je||n===null||$t(n,n.return)),s&4){var c=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(s){case"title":c=a.getElementsByTagName("title")[0],(!c||c[ta]||c[et]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=a.createElement(s),a.head.insertBefore(c,a.querySelector("head > title"))),at(c,s,n),c[et]=e,Fe(c),s=c;break e;case"link":var o=ep("link","href",a).get(s+(n.href||""));if(o){for(var d=0;d<o.length;d++)if(c=o[d],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(d,1);break t}}c=a.createElement(s),at(c,s,n),a.head.appendChild(c);break;case"meta":if(o=ep("meta","content",a).get(s+(n.content||""))){for(d=0;d<o.length;d++)if(c=o[d],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(d,1);break t}}c=a.createElement(s),at(c,s,n),a.head.appendChild(c);break;default:throw Error(r(468,s))}c[et]=e,Fe(c),s=c}e.stateNode=s}else tp(a,e.type,e.stateNode);else e.stateNode=If(a,s,e.memoizedProps);else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?tp(a,e.type,e.stateNode):If(a,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ao(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),pt(e),s&512&&(Je||n===null||$t(n,n.return)),n!==null&&s&4&&ao(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),pt(e),s&512&&(Je||n===null||$t(n,n.return)),e.flags&32){a=e.stateNode;try{ms(a,"")}catch(Q){Te(e,e.return,Q)}}s&4&&e.stateNode!=null&&(a=e.memoizedProps,ao(e,a,n!==null?n.memoizedProps:a)),s&1024&&(io=!0);break;case 6:if(ft(t,e),pt(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(Q){Te(e,e.return,Q)}}break;case 3:if(ac=null,a=qt,qt=nc(t.containerInfo),ft(t,e),qt=a,pt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(t.containerInfo)}catch(Q){Te(e,e.return,Q)}io&&(io=!1,ef(e));break;case 4:s=qt,qt=nc(e.stateNode.containerInfo),ft(t,e),pt(e),qt=s;break;case 12:ft(t,e),pt(e);break;case 31:ft(t,e),pt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vl(e,s)));break;case 13:ft(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Kl=gt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vl(e,s)));break;case 22:a=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,E=rn,w=Je;if(rn=E||a,Je=w||x,ft(t,e),Je=w,rn=E,pt(e),s&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||x||rn||Je||ls(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(c=x.stateNode,a)o=c.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=x.stateNode;var A=x.memoizedProps.style,O=A!=null&&A.hasOwnProperty("display")?A.display:null;d.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(Q){Te(x,x.return,Q)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=a?"":x.memoizedProps}catch(Q){Te(x,x.return,Q)}}}else if(t.tag===18){if(n===null){x=t;try{var k=x.stateNode;a?Kf(k,!0):Kf(x.stateNode,!1)}catch(Q){Te(x,x.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Vl(e,n))));break;case 19:ft(t,e),pt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Vl(e,s)));break;case 30:break;case 21:break;default:ft(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Qd(s)){n=s;break}s=s.return}if(n==null)throw Error(r(160));switch(n.tag){case 27:var a=n.stateNode,c=lo(e);ql(e,c,a);break;case 5:var o=n.stateNode;n.flags&32&&(ms(o,""),n.flags&=-33);var d=lo(e);ql(e,d,o);break;case 3:case 4:var x=n.stateNode.containerInfo,E=lo(e);co(e,E,x);break;default:throw Error(r(161))}}catch(w){Te(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jd(e,t.alternate,t),t=t.sibling}function ls(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:wn(4,t,t.return),ls(t);break;case 1:$t(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Yd(t,t.return,n),ls(t);break;case 27:Ra(t.stateNode);case 26:case 5:$t(t,t.return),ls(t);break;case 22:t.memoizedState===null&&ls(t);break;case 30:ls(t);break;default:ls(t)}e=e.sibling}}function fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,a=e,c=t,o=c.flags;switch(c.tag){case 0:case 11:case 15:fn(a,c,n),ka(4,c);break;case 1:if(fn(a,c,n),s=c,a=s.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){Te(s,s.return,E)}if(s=c,a=s.updateQueue,a!==null){var d=s.stateNode;try{var x=a.shared.hiddenCallbacks;if(x!==null)for(a.shared.hiddenCallbacks=null,a=0;a<x.length;a++)Hu(x[a],d)}catch(E){Te(s,s.return,E)}}n&&o&64&&Vd(c),Ta(c,c.return);break;case 27:Xd(c);case 26:case 5:fn(a,c,n),n&&s===null&&o&4&&Kd(c),Ta(c,c.return);break;case 12:fn(a,c,n);break;case 31:fn(a,c,n),n&&o&4&&Fd(a,c);break;case 13:fn(a,c,n),n&&o&4&&Pd(a,c);break;case 22:c.memoizedState===null&&fn(a,c,n),Ta(c,c.return);break;case 30:break;default:fn(a,c,n)}t=t.sibling}}function oo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function ro(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Vt(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tf(e,t,n,s),t=t.sibling}function tf(e,t,n,s){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Vt(e,t,n,s),a&2048&&ka(9,t);break;case 1:Vt(e,t,n,s);break;case 3:Vt(e,t,n,s),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(a&2048){Vt(e,t,n,s),e=t.stateNode;try{var c=t.memoizedProps,o=c.id,d=c.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Te(t,t.return,x)}}else Vt(e,t,n,s);break;case 31:Vt(e,t,n,s);break;case 13:Vt(e,t,n,s);break;case 23:break;case 22:c=t.stateNode,o=t.alternate,t.memoizedState!==null?c._visibility&2?Vt(e,t,n,s):wa(e,t):c._visibility&2?Vt(e,t,n,s):(c._visibility|=2,Ds(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),a&2048&&oo(o,t);break;case 24:Vt(e,t,n,s),a&2048&&ro(t.alternate,t);break;default:Vt(e,t,n,s)}}function Ds(e,t,n,s,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,o=t,d=n,x=s,E=o.flags;switch(o.tag){case 0:case 11:case 15:Ds(c,o,d,x,a),ka(8,o);break;case 23:break;case 22:var w=o.stateNode;o.memoizedState!==null?w._visibility&2?Ds(c,o,d,x,a):wa(c,o):(w._visibility|=2,Ds(c,o,d,x,a)),a&&E&2048&&oo(o.alternate,o);break;case 24:Ds(c,o,d,x,a),a&&E&2048&&ro(o.alternate,o);break;default:Ds(c,o,d,x,a)}t=t.sibling}}function wa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,a=s.flags;switch(s.tag){case 22:wa(n,s),a&2048&&oo(s.alternate,s);break;case 24:wa(n,s),a&2048&&ro(s.alternate,s);break;default:wa(n,s)}t=t.sibling}}var Ma=8192;function Rs(e,t,n){if(e.subtreeFlags&Ma)for(e=e.child;e!==null;)nf(e,t,n),e=e.sibling}function nf(e,t,n){switch(e.tag){case 26:Rs(e,t,n),e.flags&Ma&&e.memoizedState!==null&&_m(n,qt,e.memoizedState,e.memoizedProps);break;case 5:Rs(e,t,n);break;case 3:case 4:var s=qt;qt=nc(e.stateNode.containerInfo),Rs(e,t,n),qt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Ma,Ma=16777216,Rs(e,t,n),Ma=s):Rs(e,t,n));break;default:Rs(e,t,n)}}function sf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ha(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Pe=s,lf(s,e)}sf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:Ha(e),e.flags&2048&&wn(9,e,e.return);break;case 3:Ha(e);break;case 12:Ha(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yl(e)):Ha(e);break;default:Ha(e)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Pe=s,lf(s,e)}sf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wn(8,t,t.return),Yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yl(t));break;default:Yl(t)}e=e.sibling}}function lf(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ha(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Pe=s;else e:for(n=e;Pe!==null;){s=Pe;var a=s.sibling,c=s.return;if($d(s),s===n){Pe=null;break e}if(a!==null){a.return=c,Pe=a;break e}Pe=c}}}var $x={getCacheForType:function(e){var t=nt(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nt(Qe).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,je=0,_e=null,ye=null,ve=0,ke=0,Nt=null,Mn=!1,Gs=!1,uo=!1,pn=0,qe=0,Hn=0,cs=0,fo=0,jt=0,Us=0,Ca=null,ht=null,po=!1,Kl=0,cf=0,Ql=1/0,Xl=null,Cn=null,$e=0,An=null,Ls=null,hn=0,ho=0,xo=null,of=null,Aa=0,mo=null;function kt(){return(je&2)!==0&&ve!==0?ve&-ve:T.T!==null?Bo():Er()}function rf(){if(jt===0)if((ve&536870912)===0||Ee){var e=el;el<<=1,(el&3932160)===0&&(el=262144),jt=e}else jt=536870912;return e=Et.current,e!==null&&(e.flags|=32),jt}function xt(e,t,n){(e===_e&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(qs(e,0),_n(e,ve,jt,!1)),ea(e,n),((je&2)===0||e!==_e)&&(e===_e&&((je&2)===0&&(cs|=n),qe===4&&_n(e,ve,jt,!1)),Wt(e))}function uf(e,t,n){if((je&6)!==0)throw Error(r(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Is(e,t),a=s?Ix(e,t):go(e,t,!0),c=s;do{if(a===0){Gs&&!s&&_n(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Fx(n)){a=go(e,t,!1),c=!1;continue}if(a===2){if(c=t,e.errorRecoveryDisabledLanes&c)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;a=Ca;var x=d.current.memoizedState.isDehydrated;if(x&&(qs(d,o).flags|=256),o=go(d,o,!1),o!==2){if(uo&&!x){d.errorRecoveryDisabledLanes|=c,cs|=c,a=4;break e}c=ht,ht=a,c!==null&&(ht===null?ht=c:ht.push.apply(ht,c))}a=o}if(c=!1,a!==2)continue}}if(a===1){qs(e,0),_n(e,t,0,!0);break}e:{switch(s=e,c=a,c){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:_n(s,t,jt,!Mn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(a=Kl+300-gt(),10<a)){if(_n(s,t,jt,!Mn),nl(s,0,!0)!==0)break e;hn=t,s.timeoutHandle=qf(df.bind(null,s,n,ht,Xl,po,t,jt,cs,Us,Mn,c,"Throttled",-0,0),a);break e}df(s,n,ht,Xl,po,t,jt,cs,Us,Mn,c,null,-0,0)}}break}while(!0);Wt(e)}function df(e,t,n,s,a,c,o,d,x,E,w,A,O,k){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt},nf(t,c,A);var Q=(c&62914560)===c?Kl-gt():(c&4194048)===c?cf-gt():0;if(Q=zm(A,Q),Q!==null){hn=c,e.cancelPendingCommit=Q(yf.bind(null,e,t,c,n,s,a,o,d,x,w,A,null,O,k)),_n(e,c,o,!E);return}}yf(e,t,c,n,s,a,o,d,x)}function Fx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var a=n[s],c=a.getSnapshot;a=a.value;try{if(!vt(c(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t,n,s){t&=~fo,t&=~cs,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var a=t;0<a;){var c=31-bt(a),o=1<<c;s[c]=-1,a&=~o}n!==0&&br(e,n,t)}function Zl(){return(je&6)===0?(_a(0),!1):!0}function So(){if(ye!==null){if(ke===0)var e=ye.return;else e=ye,nn=Fn=null,Ci(e),Hs=null,ma=0,e=ye;for(;e!==null;)qd(e.alternate,e),e=e.return;ye=null}}function qs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Sm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),hn=0,So(),_e=e,ye=n=en(e.current,null),ve=t,ke=0,Nt=null,Mn=!1,Gs=Is(e,t),uo=!1,Us=jt=fo=cs=Hn=qe=0,ht=Ca=null,po=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var a=31-bt(s),c=1<<a;t|=e[a],s&=~c}return pn=t,hl(),n}function ff(e,t){he=null,T.H=Oa,t===Ms||t===Bl?(t=ku(),ke=3):t===bi?(t=ku(),ke=4):ke=t===Ji?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,ye===null&&(qe=1,Dl(e,Ht(t,e.current)))}function pf(){var e=Et.current;return e===null?!0:(ve&4194048)===ve?zt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===zt:!1}function hf(){var e=T.H;return T.H=Oa,e===null?Oa:e}function xf(){var e=T.A;return T.A=$x,e}function Jl(){qe=4,Mn||(ve&4194048)!==ve&&Et.current!==null||(Gs=!0),(Hn&134217727)===0&&(cs&134217727)===0||_e===null||_n(_e,ve,jt,!1)}function go(e,t,n){var s=je;je|=2;var a=hf(),c=xf();(_e!==e||ve!==t)&&(Xl=null,qs(e,t)),t=!1;var o=qe;e:do try{if(ke!==0&&ye!==null){var d=ye,x=Nt;switch(ke){case 8:So(),o=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var E=ke;if(ke=0,Nt=null,Vs(e,d,x,E),n&&Gs){o=0;break e}break;default:E=ke,ke=0,Nt=null,Vs(e,d,x,E)}}Px(),o=qe;break}catch(w){ff(e,w)}while(!0);return t&&e.shellSuspendCounter++,nn=Fn=null,je=s,T.H=a,T.A=c,ye===null&&(_e=null,ve=0,hl()),o}function Px(){for(;ye!==null;)mf(ye)}function Ix(e,t){var n=je;je|=2;var s=hf(),a=xf();_e!==e||ve!==t?(Xl=null,Ql=gt()+500,qs(e,t)):Gs=Is(e,t);e:do try{if(ke!==0&&ye!==null){t=ye;var c=Nt;t:switch(ke){case 1:ke=0,Nt=null,Vs(e,t,c,1);break;case 2:case 9:if(Nu(c)){ke=0,Nt=null,Sf(t);break}t=function(){ke!==2&&ke!==9||_e!==e||(ke=7),Wt(e)},c.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:Nu(c)?(ke=0,Nt=null,Sf(t)):(ke=0,Nt=null,Vs(e,t,c,7));break;case 5:var o=null;switch(ye.tag){case 26:o=ye.memoizedState;case 5:case 27:var d=ye;if(o?np(o):d.stateNode.complete){ke=0,Nt=null;var x=d.sibling;if(x!==null)ye=x;else{var E=d.return;E!==null?(ye=E,$l(E)):ye=null}break t}}ke=0,Nt=null,Vs(e,t,c,5);break;case 6:ke=0,Nt=null,Vs(e,t,c,6);break;case 8:So(),qe=6;break e;default:throw Error(r(462))}}em();break}catch(w){ff(e,w)}while(!0);return nn=Fn=null,T.H=s,T.A=a,je=n,ye!==null?0:(_e=null,ve=0,hl(),qe)}function em(){for(;ye!==null&&!Eh();)mf(ye)}function mf(e){var t=Ud(e.alternate,e,pn);e.memoizedProps=e.pendingProps,t===null?$l(e):ye=t}function Sf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ad(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=Ad(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Ci(t);default:qd(n,t),t=ye=hu(t,pn),t=Ud(n,t,pn)}e.memoizedProps=e.pendingProps,t===null?$l(e):ye=t}function Vs(e,t,n,s){nn=Fn=null,Ci(t),Hs=null,ma=0;var a=t.return;try{if(Vx(e,a,t,n,ve)){qe=1,Dl(e,Ht(n,e.current)),ye=null;return}}catch(c){if(a!==null)throw ye=a,c;qe=1,Dl(e,Ht(n,e.current)),ye=null;return}t.flags&32768?(Ee||s===1?e=!0:Gs||(ve&536870912)!==0?e=!1:(Mn=e=!0,(s===2||s===9||s===3||s===6)&&(s=Et.current,s!==null&&s.tag===13&&(s.flags|=16384))),gf(t,e)):$l(t)}function $l(e){var t=e;do{if((t.flags&32768)!==0){gf(t,Mn);return}e=t.return;var n=Qx(t.alternate,t,pn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);qe===0&&(qe=5)}function gf(e,t){do{var n=Xx(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);qe=6,ye=null}function yf(e,t,n,s,a,c,o,d,x){e.cancelPendingCommit=null;do Wl();while($e!==0);if((je&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(c=t.lanes|t.childLanes,c|=li,Ah(e,n,c,o,d,x),e===_e&&(ye=_e=null,ve=0),Ls=t,An=e,hn=n,ho=c,xo=a,of=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,am(Pa,function(){return Of(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=T.T,T.T=null,a=L.p,L.p=2,o=je,je|=4;try{Zx(e,t,n)}finally{je=o,L.p=a,T.T=s}}$e=1,bf(),vf(),Bf()}}function bf(){if($e===1){$e=0;var e=An,t=Ls,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var s=L.p;L.p=2;var a=je;je|=4;try{Id(t,e);var c=Mo,o=lu(e.containerInfo),d=c.focusedElem,x=c.selectionRange;if(o!==d&&d&&d.ownerDocument&&au(d.ownerDocument.documentElement,d)){if(x!==null&&ei(d)){var E=x.start,w=x.end;if(w===void 0&&(w=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(w,d.value.length);else{var A=d.ownerDocument||document,O=A&&A.defaultView||window;if(O.getSelection){var k=O.getSelection(),Q=d.textContent.length,le=Math.min(x.start,Q),Ae=x.end===void 0?le:Math.min(x.end,Q);!k.extend&&le>Ae&&(o=Ae,Ae=le,le=o);var y=su(d,le),g=su(d,Ae);if(y&&g&&(k.rangeCount!==1||k.anchorNode!==y.node||k.anchorOffset!==y.offset||k.focusNode!==g.node||k.focusOffset!==g.offset)){var B=A.createRange();B.setStart(y.node,y.offset),k.removeAllRanges(),le>Ae?(k.addRange(B),k.extend(g.node,g.offset)):(B.setEnd(g.node,g.offset),k.addRange(B))}}}}for(A=[],k=d;k=k.parentNode;)k.nodeType===1&&A.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<A.length;d++){var H=A[d];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}oc=!!wo,Mo=wo=null}finally{je=a,L.p=s,T.T=n}}e.current=t,$e=2}}function vf(){if($e===2){$e=0;var e=An,t=Ls,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var s=L.p;L.p=2;var a=je;je|=4;try{Jd(e,t.alternate,t)}finally{je=a,L.p=s,T.T=n}}$e=3}}function Bf(){if($e===4||$e===3){$e=0,Oh();var e=An,t=Ls,n=hn,s=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Ls=An=null,Ef(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Cn=null),zc(n),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ps,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=T.T,a=L.p,L.p=2,T.T=null;try{for(var c=e.onRecoverableError,o=0;o<s.length;o++){var d=s[o];c(d.value,{componentStack:d.stack})}}finally{T.T=t,L.p=a}}(hn&3)!==0&&Wl(),Wt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===mo?Aa++:(Aa=0,mo=e):Aa=0,_a(0)}}function Ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Wl(){return bf(),vf(),Bf(),Of()}function Of(){if($e!==5)return!1;var e=An,t=ho;ho=0;var n=zc(hn),s=T.T,a=L.p;try{L.p=32>n?32:n,T.T=null,n=xo,xo=null;var c=An,o=hn;if($e=0,Ls=An=null,hn=0,(je&6)!==0)throw Error(r(331));var d=je;if(je|=4,af(c.current),tf(c,c.current,o,n),je=d,_a(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ps,c)}catch{}return!0}finally{L.p=a,T.T=s,Ef(e,t)}}function Nf(e,t,n){t=Ht(n,t),t=Zi(e.stateNode,t,2),e=jn(e,t,2),e!==null&&(ea(e,2),Wt(e))}function Te(e,t,n){if(e.tag===3)Nf(e,e,n);else for(;t!==null;){if(t.tag===3){Nf(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Cn===null||!Cn.has(s))){e=Ht(n,e),n=Nd(2),s=jn(t,n,2),s!==null&&(jd(n,s,t,e),ea(s,2),Wt(s));break}}t=t.return}}function yo(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Wx;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(uo=!0,a.add(n),e=tm.bind(null,e,t,n),t.then(e,e))}function tm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(ve&n)===n&&(qe===4||qe===3&&(ve&62914560)===ve&&300>gt()-Kl?(je&2)===0&&qs(e,0):fo|=n,Us===ve&&(Us=0)),Wt(e)}function jf(e,t){t===0&&(t=yr()),e=Jn(e,t),e!==null&&(ea(e,t),Wt(e))}function nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jf(e,n)}function sm(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(t),jf(e,n)}function am(e,t){return Hc(e,t)}var Fl=null,Ys=null,bo=!1,Pl=!1,vo=!1,zn=0;function Wt(e){e!==Ys&&e.next===null&&(Ys===null?Fl=Ys=e:Ys=Ys.next=e),Pl=!0,bo||(bo=!0,cm())}function _a(e,t){if(!vo&&Pl){vo=!0;do for(var n=!1,s=Fl;s!==null;){if(e!==0){var a=s.pendingLanes;if(a===0)var c=0;else{var o=s.suspendedLanes,d=s.pingedLanes;c=(1<<31-bt(42|e)+1)-1,c&=a&~(o&~d),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Mf(s,c))}else c=ve,c=nl(s,s===_e?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Is(s,c)||(n=!0,Mf(s,c));s=s.next}while(n);vo=!1}}function lm(){kf()}function kf(){Pl=bo=!1;var e=0;zn!==0&&mm()&&(e=zn);for(var t=gt(),n=null,s=Fl;s!==null;){var a=s.next,c=Tf(s,t);c===0?(s.next=null,n===null?Fl=a:n.next=a,a===null&&(Ys=n)):(n=s,(e!==0||(c&3)!==0)&&(Pl=!0)),s=a}$e!==0&&$e!==5||_a(e),zn!==0&&(zn=0)}function Tf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var o=31-bt(c),d=1<<o,x=a[o];x===-1?((d&n)===0||(d&s)!==0)&&(a[o]=Ch(d,t)):x<=t&&(e.expiredLanes|=d),c&=~d}if(t=_e,n=ve,n=nl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Cc(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Is(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Cc(s),zc(n)){case 2:case 8:n=Sr;break;case 32:n=Pa;break;case 268435456:n=gr;break;default:n=Pa}return s=wf.bind(null,e),n=Hc(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Cc(s),e.callbackPriority=2,e.callbackNode=null,2}function wf(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wl()&&e.callbackNode!==n)return null;var s=ve;return s=nl(e,e===_e?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(uf(e,s,t),Tf(e,gt()),e.callbackNode!=null&&e.callbackNode===n?wf.bind(null,e):null)}function Mf(e,t){if(Wl())return null;uf(e,t,!0)}function cm(){gm(function(){(je&6)!==0?Hc(mr,lm):kf()})}function Bo(){if(zn===0){var e=Ts;e===0&&(e=Ia,Ia<<=1,(Ia&261888)===0&&(Ia=256)),zn=e}return zn}function Hf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function Cf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function im(e,t,n,s,a){if(t==="submit"&&n&&n.stateNode===a){var c=Hf((a[rt]||null).action),o=s.submitter;o&&(t=(t=o[rt]||null)?Hf(t.formAction):o.getAttribute("formAction"),t!==null&&(c=t,o=null));var d=new ul("action","action",null,s,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(zn!==0){var x=o?Cf(a,o):new FormData(a);qi(n,{pending:!0,data:x,method:a.method,action:c},null,x)}}else typeof c=="function"&&(d.preventDefault(),x=o?Cf(a,o):new FormData(a),qi(n,{pending:!0,data:x,method:a.method,action:c},c,x))},currentTarget:a}]})}}for(var Eo=0;Eo<ai.length;Eo++){var Oo=ai[Eo],om=Oo.toLowerCase(),rm=Oo[0].toUpperCase()+Oo.slice(1);Lt(om,"on"+rm)}Lt(ou,"onAnimationEnd"),Lt(ru,"onAnimationIteration"),Lt(uu,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Nx,"onTransitionRun"),Lt(jx,"onTransitionStart"),Lt(kx,"onTransitionCancel"),Lt(du,"onTransitionEnd"),hs("onMouseEnter",["mouseout","mouseover"]),hs("onMouseLeave",["mouseout","mouseover"]),hs("onPointerEnter",["pointerout","pointerover"]),hs("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),um=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za));function Af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var c=void 0;if(t)for(var o=s.length-1;0<=o;o--){var d=s[o],x=d.instance,E=d.currentTarget;if(d=d.listener,x!==c&&a.isPropagationStopped())break e;c=d,a.currentTarget=E;try{c(a)}catch(w){pl(w)}a.currentTarget=null,c=x}else for(o=0;o<s.length;o++){if(d=s[o],x=d.instance,E=d.currentTarget,d=d.listener,x!==c&&a.isPropagationStopped())break e;c=d,a.currentTarget=E;try{c(a)}catch(w){pl(w)}a.currentTarget=null,c=x}}}}function be(e,t){var n=t[Dc];n===void 0&&(n=t[Dc]=new Set);var s=e+"__bubble";n.has(s)||(_f(t,e,2,!1),n.add(s))}function No(e,t,n){var s=0;t&&(s|=4),_f(n,e,s,t)}var Il="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[Il]){e[Il]=!0,jr.forEach(function(n){n!=="selectionchange"&&(um.has(n)||No(n,!1,e),No(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Il]||(t[Il]=!0,No("selectionchange",!1,t))}}function _f(e,t,n,s){switch(rp(t)){case 2:var a=Gm;break;case 8:a=Um;break;default:a=qo}n=a.bind(null,t,n,e),a=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ko(e,t,n,s,a){var c=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var d=s.stateNode.containerInfo;if(d===a)break;if(o===4)for(o=s.return;o!==null;){var x=o.tag;if((x===3||x===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;d!==null;){if(o=ds(d),o===null)return;if(x=o.tag,x===5||x===6||x===26||x===27){s=c=o;continue e}d=d.parentNode}}s=s.return}Gr(function(){var E=c,w=Yc(n),A=[];e:{var O=fu.get(e);if(O!==void 0){var k=ul,Q=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":k=sx;break;case"focusin":Q="focus",k=$c;break;case"focusout":Q="blur",k=$c;break;case"beforeblur":case"afterblur":k=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=qr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=cx;break;case ou:case ru:case uu:k=Jh;break;case du:k=ox;break;case"scroll":case"scrollend":k=Yh;break;case"wheel":k=ux;break;case"copy":case"cut":case"paste":k=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Yr;break;case"toggle":case"beforetoggle":k=fx}var le=(t&4)!==0,Ae=!le&&(e==="scroll"||e==="scrollend"),y=le?O!==null?O+"Capture":null:O;le=[];for(var g=E,B;g!==null;){var H=g;if(B=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||B===null||y===null||(H=sa(g,y),H!=null&&le.push(Da(g,H,B))),Ae)break;g=g.return}0<le.length&&(O=new k(O,Q,null,n,w),A.push({event:O,listeners:le}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",O&&n!==Vc&&(Q=n.relatedTarget||n.fromElement)&&(ds(Q)||Q[us]))break e;if((k||O)&&(O=w.window===w?w:(O=w.ownerDocument)?O.defaultView||O.parentWindow:window,k?(Q=n.relatedTarget||n.toElement,k=E,Q=Q?ds(Q):null,Q!==null&&(Ae=m(Q),le=Q.tag,Q!==Ae||le!==5&&le!==27&&le!==6)&&(Q=null)):(k=null,Q=E),k!==Q)){if(le=qr,H="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(le=Yr,H="onPointerLeave",y="onPointerEnter",g="pointer"),Ae=k==null?O:na(k),B=Q==null?O:na(Q),O=new le(H,g+"leave",k,n,w),O.target=Ae,O.relatedTarget=B,H=null,ds(w)===E&&(le=new le(y,g+"enter",Q,n,w),le.target=B,le.relatedTarget=Ae,H=le),Ae=H,k&&Q)t:{for(le=dm,y=k,g=Q,B=0,H=y;H;H=le(H))B++;H=0;for(var te=g;te;te=le(te))H++;for(;0<B-H;)y=le(y),B--;for(;0<H-B;)g=le(g),H--;for(;B--;){if(y===g||g!==null&&y===g.alternate){le=y;break t}y=le(y),g=le(g)}le=null}else le=null;k!==null&&zf(A,O,k,le,!1),Q!==null&&Ae!==null&&zf(A,Ae,Q,le,!0)}}e:{if(O=E?na(E):window,k=O.nodeName&&O.nodeName.toLowerCase(),k==="select"||k==="input"&&O.type==="file")var Oe=Fr;else if($r(O))if(Pr)Oe=Bx;else{Oe=bx;var $=yx}else k=O.nodeName,!k||k.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?E&&qc(E.elementType)&&(Oe=Fr):Oe=vx;if(Oe&&(Oe=Oe(e,E))){Wr(A,Oe,n,w);break e}$&&$(e,O,E),e==="focusout"&&E&&O.type==="number"&&E.memoizedProps.value!=null&&Lc(O,"number",O.value)}switch($=E?na(E):window,e){case"focusin":($r($)||$.contentEditable==="true")&&(bs=$,ti=E,da=null);break;case"focusout":da=ti=bs=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,cu(A,n,w);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":cu(A,n,w)}var xe;if(Fc)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else ys?Zr(e,n)&&(Be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Be="onCompositionStart");Be&&(Kr&&n.locale!=="ko"&&(ys||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&ys&&(xe=Ur()):(yn=w,Xc="value"in yn?yn.value:yn.textContent,ys=!0)),$=ec(E,Be),0<$.length&&(Be=new Vr(Be,e,null,n,w),A.push({event:Be,listeners:$}),xe?Be.data=xe:(xe=Jr(n),xe!==null&&(Be.data=xe)))),(xe=hx?xx(e,n):mx(e,n))&&(Be=ec(E,"onBeforeInput"),0<Be.length&&($=new Vr("onBeforeInput","beforeinput",null,n,w),A.push({event:$,listeners:Be}),$.data=xe)),im(A,e,E,n,w)}Af(A,t)})}function Da(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ec(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,c=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||c===null||(a=sa(e,n),a!=null&&s.unshift(Da(e,a,c)),a=sa(e,t),a!=null&&s.push(Da(e,a,c))),e.tag===3)return s;e=e.return}return[]}function dm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,t,n,s,a){for(var c=t._reactName,o=[];n!==null&&n!==s;){var d=n,x=d.alternate,E=d.stateNode;if(d=d.tag,x!==null&&x===s)break;d!==5&&d!==26&&d!==27||E===null||(x=E,a?(E=sa(n,c),E!=null&&o.unshift(Da(n,E,x))):a||(E=sa(n,c),E!=null&&o.push(Da(n,E,x)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var fm=/\r\n?/g,pm=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(pm,"")}function Rf(e,t){return t=Df(t),Df(e)===t}function Ce(e,t,n,s,a,c){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||ms(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&ms(e,""+s);break;case"className":al(e,"class",s);break;case"tabIndex":al(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":al(e,n,s);break;case"style":Dr(e,s,c);break;case"data":if(t!=="object"){al(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=cl(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ce(e,t,"name",a.name,a,null),Ce(e,t,"formEncType",a.formEncType,a,null),Ce(e,t,"formMethod",a.formMethod,a,null),Ce(e,t,"formTarget",a.formTarget,a,null)):(Ce(e,t,"encType",a.encType,a,null),Ce(e,t,"method",a.method,a,null),Ce(e,t,"target",a.target,a,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=cl(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=Pt);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=cl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":be("beforetoggle",e),be("toggle",e),sl(e,"popover",s);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":sl(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qh.get(n)||n,sl(e,n,s))}}function To(e,t,n,s,a,c){switch(n){case"style":Dr(e,s,c);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(n=s.__html,n!=null){if(a.children!=null)throw Error(r(60));e.innerHTML=n}}break;case"children":typeof s=="string"?ms(e,s):(typeof s=="number"||typeof s=="bigint")&&ms(e,""+s);break;case"onScroll":s!=null&&be("scroll",e);break;case"onScrollEnd":s!=null&&be("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),c=e[rt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,a),typeof s=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,a);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):sl(e,n,s)}}}function at(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var s=!1,a=!1,c;for(c in n)if(n.hasOwnProperty(c)){var o=n[c];if(o!=null)switch(c){case"src":s=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ce(e,t,c,o,n,null)}}a&&Ce(e,t,"srcSet",n.srcSet,n,null),s&&Ce(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var d=c=o=a=null,x=null,E=null;for(s in n)if(n.hasOwnProperty(s)){var w=n[s];if(w!=null)switch(s){case"name":a=w;break;case"type":o=w;break;case"checked":x=w;break;case"defaultChecked":E=w;break;case"value":c=w;break;case"defaultValue":d=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,t));break;default:Ce(e,t,s,w,n,null)}}Cr(e,c,d,x,E,o,a,!1);return;case"select":be("invalid",e),s=o=c=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":c=d;break;case"defaultValue":o=d;break;case"multiple":s=d;default:Ce(e,t,a,d,n,null)}t=c,n=o,e.multiple=!!s,t!=null?xs(e,!!s,t,!1):n!=null&&xs(e,!!s,n,!0);return;case"textarea":be("invalid",e),c=a=s=null;for(o in n)if(n.hasOwnProperty(o)&&(d=n[o],d!=null))switch(o){case"value":s=d;break;case"defaultValue":a=d;break;case"children":c=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:Ce(e,t,o,d,n,null)}_r(e,s,a,c);return;case"option":for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null)&&(x==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ce(e,t,x,s,n,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(s=0;s<za.length;s++)be(za[s],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(s=n[E],s!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Ce(e,t,E,s,n,null)}return;default:if(qc(t)){for(w in n)n.hasOwnProperty(w)&&(s=n[w],s!==void 0&&To(e,t,w,s,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(s=n[d],s!=null&&Ce(e,t,d,s,n,null))}function hm(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,c=null,o=null,d=null,x=null,E=null,w=null;for(k in n){var A=n[k];if(n.hasOwnProperty(k)&&A!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":x=A;default:s.hasOwnProperty(k)||Ce(e,t,k,null,s,A)}}for(var O in s){var k=s[O];if(A=n[O],s.hasOwnProperty(O)&&(k!=null||A!=null))switch(O){case"type":c=k;break;case"name":a=k;break;case"checked":E=k;break;case"defaultChecked":w=k;break;case"value":o=k;break;case"defaultValue":d=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,t));break;default:k!==A&&Ce(e,t,O,k,s,A)}}Uc(e,o,d,x,E,w,c,a);return;case"select":k=o=d=O=null;for(c in n)if(x=n[c],n.hasOwnProperty(c)&&x!=null)switch(c){case"value":break;case"multiple":k=x;default:s.hasOwnProperty(c)||Ce(e,t,c,null,s,x)}for(a in s)if(c=s[a],x=n[a],s.hasOwnProperty(a)&&(c!=null||x!=null))switch(a){case"value":O=c;break;case"defaultValue":d=c;break;case"multiple":o=c;default:c!==x&&Ce(e,t,a,c,s,x)}t=d,n=o,s=k,O!=null?xs(e,!!n,O,!1):!!s!=!!n&&(t!=null?xs(e,!!n,t,!0):xs(e,!!n,n?[]:"",!1));return;case"textarea":k=O=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!s.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ce(e,t,d,null,s,a)}for(o in s)if(a=s[o],c=n[o],s.hasOwnProperty(o)&&(a!=null||c!=null))switch(o){case"value":O=a;break;case"defaultValue":k=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(r(91));break;default:a!==c&&Ce(e,t,o,a,s,c)}Ar(e,O,k);return;case"option":for(var Q in n)O=n[Q],n.hasOwnProperty(Q)&&O!=null&&!s.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:Ce(e,t,Q,null,s,O));for(x in s)O=s[x],k=n[x],s.hasOwnProperty(x)&&O!==k&&(O!=null||k!=null)&&(x==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Ce(e,t,x,O,s,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in n)O=n[le],n.hasOwnProperty(le)&&O!=null&&!s.hasOwnProperty(le)&&Ce(e,t,le,null,s,O);for(E in s)if(O=s[E],k=n[E],s.hasOwnProperty(E)&&O!==k&&(O!=null||k!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:Ce(e,t,E,O,s,k)}return;default:if(qc(t)){for(var Ae in n)O=n[Ae],n.hasOwnProperty(Ae)&&O!==void 0&&!s.hasOwnProperty(Ae)&&To(e,t,Ae,void 0,s,O);for(w in s)O=s[w],k=n[w],!s.hasOwnProperty(w)||O===k||O===void 0&&k===void 0||To(e,t,w,O,s,k);return}}for(var y in n)O=n[y],n.hasOwnProperty(y)&&O!=null&&!s.hasOwnProperty(y)&&Ce(e,t,y,null,s,O);for(A in s)O=s[A],k=n[A],!s.hasOwnProperty(A)||O===k||O==null&&k==null||Ce(e,t,A,O,s,k)}function Gf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var a=n[s],c=a.transferSize,o=a.initiatorType,d=a.duration;if(c&&d&&Gf(o)){for(o=0,d=a.responseEnd,s+=1;s<n.length;s++){var x=n[s],E=x.startTime;if(E>d)break;var w=x.transferSize,A=x.initiatorType;w&&Gf(A)&&(x=x.responseEnd,o+=w*(x<d?1:(d-E)/(x-E)))}if(--s,t+=8*(c+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wo=null,Mo=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=null;function mm(){var e=window.event;return e&&e.type==="popstate"?e===Co?!1:(Co=e,!0):(Co=null,!1)}var qf=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(ym)}:qf;function ym(e){setTimeout(function(){throw e})}function Dn(e){return e==="head"}function Yf(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(a),Zs(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")Ra(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ra(n);for(var c=n.firstChild;c;){var o=c.nextSibling,d=c.nodeName;c[ta]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=o}}else n==="body"&&Ra(e.ownerDocument.body);n=a}while(n);Zs(t)}function Kf(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function Ao(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ao(n),Rc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function bm(e,t,n,s){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ta])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function vm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Dt(e.nextSibling),e===null))return null;return e}function Qf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Dt(e.nextSibling),e===null))return null;return e}function _o(e){return e.data==="$?"||e.data==="$~"}function zo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bm(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Do=null;function Xf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Dt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Jf(e,t,n){switch(t=tc(n),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ra(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rc(e)}var Rt=new Map,$f=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xn=L.d;L.d={f:Em,r:Om,D:Nm,C:jm,L:km,m:Tm,X:Mm,S:wm,M:Hm};function Em(){var e=xn.f(),t=Zl();return e||t}function Om(e){var t=fs(e);t!==null&&t.tag===5&&t.type==="form"?dd(t):xn.r(e)}var Ks=typeof document>"u"?null:document;function Wf(e,t,n){var s=Ks;if(s&&typeof t=="string"&&t){var a=wt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),$f.has(a)||($f.add(a),e={rel:e,crossOrigin:n,href:t},s.querySelector(a)===null&&(t=s.createElement("link"),at(t,"link",e),Fe(t),s.head.appendChild(t)))}}function Nm(e){xn.D(e),Wf("dns-prefetch",e,null)}function jm(e,t){xn.C(e,t),Wf("preconnect",e,t)}function km(e,t,n){xn.L(e,t,n);var s=Ks;if(s&&e&&t){var a='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+wt(n.imageSizes)+'"]')):a+='[href="'+wt(e)+'"]';var c=a;switch(t){case"style":c=Qs(e);break;case"script":c=Xs(e)}Rt.has(c)||(e=j({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rt.set(c,e),s.querySelector(a)!==null||t==="style"&&s.querySelector(Ga(c))||t==="script"&&s.querySelector(Ua(c))||(t=s.createElement("link"),at(t,"link",e),Fe(t),s.head.appendChild(t)))}}function Tm(e,t){xn.m(e,t);var n=Ks;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+wt(s)+'"][href="'+wt(e)+'"]',c=a;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Xs(e)}if(!Rt.has(c)&&(e=j({rel:"modulepreload",href:e},t),Rt.set(c,e),n.querySelector(a)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ua(c)))return}s=n.createElement("link"),at(s,"link",e),Fe(s),n.head.appendChild(s)}}}function wm(e,t,n){xn.S(e,t,n);var s=Ks;if(s&&e){var a=ps(s).hoistableStyles,c=Qs(e);t=t||"default";var o=a.get(c);if(!o){var d={loading:0,preload:null};if(o=s.querySelector(Ga(c)))d.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rt.get(c))&&Ro(e,n);var x=o=s.createElement("link");Fe(x),at(x,"link",e),x._p=new Promise(function(E,w){x.onload=E,x.onerror=w}),x.addEventListener("load",function(){d.loading|=1}),x.addEventListener("error",function(){d.loading|=2}),d.loading|=4,sc(o,t,s)}o={type:"stylesheet",instance:o,count:1,state:d},a.set(c,o)}}}function Mm(e,t){xn.X(e,t);var n=Ks;if(n&&e){var s=ps(n).hoistableScripts,a=Xs(e),c=s.get(a);c||(c=n.querySelector(Ua(a)),c||(e=j({src:e,async:!0},t),(t=Rt.get(a))&&Go(e,t),c=n.createElement("script"),Fe(c),at(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(a,c))}}function Hm(e,t){xn.M(e,t);var n=Ks;if(n&&e){var s=ps(n).hoistableScripts,a=Xs(e),c=s.get(a);c||(c=n.querySelector(Ua(a)),c||(e=j({src:e,async:!0,type:"module"},t),(t=Rt.get(a))&&Go(e,t),c=n.createElement("script"),Fe(c),at(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(a,c))}}function Ff(e,t,n,s){var a=(a=pe.current)?nc(a):null;if(!a)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Qs(n.href),n=ps(a).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Qs(n.href);var c=ps(a).hoistableStyles,o=c.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,o),(c=a.querySelector(Ga(e)))&&!c._p&&(o.instance=c,o.state.loading=5),Rt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rt.set(e,n),c||Cm(a,e,n,o.state))),t&&s===null)throw Error(r(528,""));return o}if(t&&s!==null)throw Error(r(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xs(n),n=ps(a).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qs(e){return'href="'+wt(e)+'"'}function Ga(e){return'link[rel="stylesheet"]['+e+"]"}function Pf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Cm(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),at(t,"link",n),Fe(t),e.head.appendChild(t))}function Xs(e){return'[src="'+wt(e)+'"]'}function Ua(e){return"script[async]"+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(s)return t.instance=s,Fe(s),s;var a=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Fe(s),at(s,"style",a),sc(s,n.precedence,e),t.instance=s;case"stylesheet":a=Qs(n.href);var c=e.querySelector(Ga(a));if(c)return t.state.loading|=4,t.instance=c,Fe(c),c;s=Pf(n),(a=Rt.get(a))&&Ro(s,a),c=(e.ownerDocument||e).createElement("link"),Fe(c);var o=c;return o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),at(c,"link",s),t.state.loading|=4,sc(c,n.precedence,e),t.instance=c;case"script":return c=Xs(n.src),(a=e.querySelector(Ua(c)))?(t.instance=a,Fe(a),a):(s=n,(a=Rt.get(c))&&(s=j({},n),Go(s,a)),e=e.ownerDocument||e,a=e.createElement("script"),Fe(a),at(a,"link",s),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,sc(s,n.precedence,e));return t.instance}function sc(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=s.length?s[s.length-1]:null,c=a,o=0;o<s.length;o++){var d=s[o];if(d.dataset.precedence===t)c=d;else if(c!==a)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ro(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Go(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ac=null;function ep(e,t,n){if(ac===null){var s=new Map,a=ac=new Map;a.set(n,s)}else a=ac,s=a.get(n),s||(s=new Map,a.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var c=n[a];if(!(c[ta]||c[et]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var o=c.getAttribute(t)||"";o=e+o;var d=s.get(o);d?d.push(c):s.set(o,[c])}}return s}function tp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Am(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _m(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Qs(s.href),c=t.querySelector(Ga(a));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=lc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,Fe(c);return}c=t.ownerDocument||t,s=Pf(s),(a=Rt.get(a))&&Ro(s,a),c=c.createElement("link"),Fe(c);var o=c;o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),at(c,"link",s),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=lc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uo=0;function zm(e,t){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Uo===0&&(Uo=62500*xm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Uo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(a)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,t.forEach(Dm,e),cc=null,lc.call(e))}function Dm(e,t){if(!(t.state.loading&4)){var n=cc.get(e);if(n)var s=n.get(null);else{n=new Map,cc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<a.length;c++){var o=a[c];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),s=o)}s&&n.set(null,s)}a=t.instance,o=a.getAttribute("data-precedence"),c=n.get(o)||s,c===s&&n.set(null,a),n.set(o,a),this.count++,s=lc.bind(this),a.addEventListener("load",s),a.addEventListener("error",s),c?c.parentNode.insertBefore(a,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var La={$$typeof:I,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function Rm(e,t,n,s,a,c,o,d,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.hiddenUpdates=Ac(null),this.identifierPrefix=s,this.onUncaughtError=a,this.onCaughtError=c,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function sp(e,t,n,s,a,c,o,d,x,E,w,A){return e=new Rm(e,t,n,o,x,E,w,A,d),t=1,c===!0&&(t|=24),c=Bt(3,null,null,t),e.current=c,c.stateNode=e,t=Si(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:s,isDehydrated:n,cache:t},vi(c),e}function ap(e){return e?(e=Es,e):Es}function lp(e,t,n,s,a,c){a=ap(a),s.context===null?s.context=a:s.pendingContext=a,s=Nn(t),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=jn(e,s,t),n!==null&&(xt(n,e,t),ga(n,e,t))}function cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){cp(e,t),(e=e.alternate)&&cp(e,t)}function ip(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&xt(t,e,67108864),Lo(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=kt();t=_c(t);var n=Jn(e,t);n!==null&&xt(n,e,t),Lo(e,t)}}var oc=!0;function Gm(e,t,n,s){var a=T.T;T.T=null;var c=L.p;try{L.p=2,qo(e,t,n,s)}finally{L.p=c,T.T=a}}function Um(e,t,n,s){var a=T.T;T.T=null;var c=L.p;try{L.p=8,qo(e,t,n,s)}finally{L.p=c,T.T=a}}function qo(e,t,n,s){if(oc){var a=Vo(s);if(a===null)ko(e,t,s,rc,n),up(e,s);else if(qm(a,e,t,n,s))s.stopPropagation();else if(up(e,s),t&4&&-1<Lm.indexOf(e)){for(;a!==null;){var c=fs(a);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var o=Yn(c.pendingLanes);if(o!==0){var d=c;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var x=1<<31-bt(o);d.entanglements[1]|=x,o&=~x}Wt(c),(je&6)===0&&(Ql=gt()+500,_a(0))}}break;case 31:case 13:d=Jn(c,2),d!==null&&xt(d,c,2),Zl(),Lo(c,2)}if(c=Vo(s),c===null&&ko(e,t,s,rc,n),c===a)break;a=c}a!==null&&s.stopPropagation()}else ko(e,t,s,null,n)}}function Vo(e){return e=Yc(e),Yo(e)}var rc=null;function Yo(e){if(rc=null,e=ds(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v(t),e!==null)return e;e=null}else if(n===31){if(e=M(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rc=e,null}function rp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nh()){case mr:return 2;case Sr:return 8;case Pa:case jh:return 32;case gr:return 268435456;default:return 32}default:return 32}}var Ko=!1,Rn=null,Gn=null,Un=null,qa=new Map,Va=new Map,Ln=[],Lm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(t.pointerId)}}function Ya(e,t,n,s,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[a]},t!==null&&(t=fs(t),t!==null&&ip(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qm(e,t,n,s,a){switch(t){case"focusin":return Rn=Ya(Rn,e,t,n,s,a),!0;case"dragenter":return Gn=Ya(Gn,e,t,n,s,a),!0;case"mouseover":return Un=Ya(Un,e,t,n,s,a),!0;case"pointerover":var c=a.pointerId;return qa.set(c,Ya(qa.get(c)||null,e,t,n,s,a)),!0;case"gotpointercapture":return c=a.pointerId,Va.set(c,Ya(Va.get(c)||null,e,t,n,s,a)),!0}return!1}function dp(e){var t=ds(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=v(n),t!==null){e.blockedOn=t,Or(e.priority,function(){op(n)});return}}else if(t===31){if(t=M(n),t!==null){e.blockedOn=t,Or(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vo(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Vc=s,n.target.dispatchEvent(s),Vc=null}else return t=fs(n),t!==null&&ip(t),e.blockedOn=n,!1;t.shift()}return!0}function fp(e,t,n){uc(e)&&n.delete(t)}function Vm(){Ko=!1,Rn!==null&&uc(Rn)&&(Rn=null),Gn!==null&&uc(Gn)&&(Gn=null),Un!==null&&uc(Un)&&(Un=null),qa.forEach(fp),Va.forEach(fp)}function dc(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vm)))}var fc=null;function pp(e){fc!==e&&(fc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],a=e[t+2];if(typeof s!="function"){if(Yo(s||n)===null)continue;break}var c=fs(n);c!==null&&(e.splice(t,3),t-=3,qi(c,{pending:!0,data:a,method:n.method,action:s},s,a))}}))}function Zs(e){function t(x){return dc(x,e)}Rn!==null&&dc(Rn,e),Gn!==null&&dc(Gn,e),Un!==null&&dc(Un,e),qa.forEach(t),Va.forEach(t);for(var n=0;n<Ln.length;n++){var s=Ln[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)dp(n),n.blockedOn===null&&Ln.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var a=n[s],c=n[s+1],o=a[rt]||null;if(typeof c=="function")o||pp(n);else if(o){var d=null;if(c&&c.hasAttribute("formAction")){if(a=c,o=c[rt]||null)d=o.formAction;else if(Yo(a)!==null)continue}else d=o.action;typeof d=="function"?n[s+1]=d:(n.splice(s,3),s-=3),pp(n)}}}function hp(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Qo(e){this._internalRoot=e}pc.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var n=t.current,s=kt();lp(n,s,e,t,null,null)},pc.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lp(e.current,2,null,e,null,null),Zl(),t[us]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Er();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&dp(e)}};var xp=u.version;if(xp!=="19.2.3")throw Error(r(527,xp,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Ym={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Ps=hc.inject(Ym),yt=hc}catch{}}return Qa.createRoot=function(e,t){if(!h(e))throw Error(r(299));var n=!1,s="",a=vd,c=Bd,o=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sp(e,1,!1,null,null,n,s,null,a,c,o,hp),e[us]=t.current,jo(e),new Qo(t)},Qa.hydrateRoot=function(e,t,n){if(!h(e))throw Error(r(299));var s=!1,a="",c=vd,o=Bd,d=Ed,x=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=sp(e,1,!0,t,n??null,s,a,x,c,o,d,hp),t.context=ap(null),n=t.current,s=kt(),s=_c(s),a=Nn(s),a.callback=null,jn(n,a,s),n=s,t.current.lanes=n,ea(t,n),Wt(t),e[us]=t.current,jo(e),new pc(t)},Qa.version="19.2.3",Qa}var Np;function s0(){if(Np)return Jo.exports;Np=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Jo.exports=n0(),Jo.exports}var a0=s0();const Ja={1:["breastLump","nippleDischarge","orangePeel"],2:["lymphNode","nippleRetraction","skinDimple"]},jp=["cellRepair","hormoneBalance","immuneBoost","detox"],cr={currentPhase:"mainMenu",currentPerspective:null,currentMemoryPoint:1,currentBoss:null,memoryProgress:{},unlockedBosses:[],defeatedBosses:[],unlockedSkills:[...jp],equippedSkills:[...jp],beSkillSources:{},playthrough:1,skipStory:!1,hasCompletedTutorial:!1,battleState:null,lastUsedNegativeSkillSource:null};function l0(i,u){switch(u.type){case"SET_PHASE":return{...i,currentPhase:u.payload};case"SET_PERSPECTIVE":return{...i,currentPerspective:u.payload};case"SET_MEMORY_POINT":return{...i,currentMemoryPoint:u.payload};case"SET_BOSS":return{...i,currentBoss:u.payload};case"SET_PLAYTHROUGH":return{...i,playthrough:u.payload};case"SET_SKIP_STORY":return{...i,skipStory:u.payload};case"COMPLETE_TUTORIAL":return{...i,hasCompletedTutorial:!0};case"COMPLETE_MEMORY":return{...i,memoryProgress:{...i.memoryProgress,[u.payload.key]:u.payload.result}};case"UNLOCK_BOSS":return i.unlockedBosses.includes(u.payload)?i:{...i,unlockedBosses:[...i.unlockedBosses,u.payload]};case"DEFEAT_BOSS":return i.defeatedBosses.includes(u.payload)?i:{...i,defeatedBosses:[...i.defeatedBosses,u.payload]};case"UNLOCK_SKILL":return i.unlockedSkills.includes(u.payload)?i:{...i,unlockedSkills:[...i.unlockedSkills,u.payload]};case"EQUIP_SKILL":const f=i.equippedSkills.map(h=>h===u.payload.oldSkill?u.payload.newSkill:h);return{...i,equippedSkills:f};case"SET_EQUIPPED_SKILLS":return{...i,equippedSkills:u.payload};case"RECORD_BE_SKILL_SOURCE":return{...i,beSkillSources:{...i.beSkillSources,[u.payload.skillId]:u.payload.memoryPoint}};case"SET_BATTLE_STATE":return{...i,battleState:u.payload};case"USE_SKILL_IN_BATTLE":if(!i.battleState)return i;const r=[...i.battleState.usedSkills,u.payload.skillId];return{...i,battleState:{...i.battleState,usedSkills:r,bossHealth:Math.max(0,100-r.length*25),currentRound:i.battleState.currentRound+1},lastUsedNegativeSkillSource:u.payload.negativeSkillSource??i.lastUsedNegativeSkillSource};case"RESET_BATTLE":return{...i,battleState:{bossHealth:100,usedSkills:[],failed:!1,currentRound:0},lastUsedNegativeSkillSource:null};case"RESET_GAME":return cr;case"START_NEW_GAME":return{...cr,currentPerspective:u.payload,currentPhase:"realityTrigger"};case"START_WEEK2":return{...i,playthrough:2,unlockedBosses:[],defeatedBosses:[],currentMemoryPoint:1,currentBoss:null,battleState:null,lastUsedNegativeSkillSource:null};default:return i}}const Jp=D.createContext(null);function c0({children:i}){const[u,f]=D.useReducer(l0,cr),r=D.useCallback(K=>{f({type:"START_NEW_GAME",payload:K})},[]),h=D.useCallback(()=>{f({type:"START_WEEK2"})},[]),m=D.useCallback(K=>`${u.currentPerspective||"child"}_memory_${K}`,[u.currentPerspective]),v=D.useCallback((K,se)=>{const I=m(K);f({type:"COMPLETE_MEMORY",payload:{key:I,result:se}});const fe=Ja[u.playthrough][K-1];fe&&f({type:"UNLOCK_BOSS",payload:fe})},[m,u.playthrough]),M=D.useCallback(K=>{const se=Ja[u.playthrough][K-1];return se?[se]:[]},[u.playthrough]),b=D.useCallback(K=>{M(K).forEach(I=>{f({type:"UNLOCK_BOSS",payload:I})})},[M]),p=D.useCallback(K=>{f({type:"DEFEAT_BOSS",payload:K})},[]),N=D.useCallback((K,se)=>{f({type:"EQUIP_SKILL",payload:{newSkill:K,oldSkill:se}})},[]),j=D.useCallback(K=>{f({type:"UNLOCK_SKILL",payload:K})},[]),U=D.useCallback(K=>{f({type:"SET_BOSS",payload:K}),f({type:"SET_BATTLE_STATE",payload:{bossHealth:100,usedSkills:[],failed:!1,currentRound:0}}),f({type:"SET_PHASE",payload:"bossBattle"})},[]),W=D.useCallback((K,se,I)=>{se?(f({type:"SET_BATTLE_STATE",payload:{...u.battleState,failed:!0}}),I&&f({type:"USE_SKILL_IN_BATTLE",payload:{skillId:K,negativeSkillSource:I}})):f({type:"USE_SKILL_IN_BATTLE",payload:{skillId:K}})},[u.battleState]),ee=D.useCallback(()=>{f({type:"RESET_GAME"})},[]),F=D.useCallback(K=>{const se=m(K);return u.memoryProgress[se]==="HE"||u.memoryProgress[se]==="BE"},[u.memoryProgress,m]),J={state:u,dispatch:f,startNewGame:r,startWeek2:h,completeMemoryPoint:v,unlockBossForMemory:b,defeatBoss:p,equipSkill:N,unlockSkill:j,startBattle:U,useSkillInBattle:W,resetGame:ee,getMemoryKey:m,canChallengeBoss:F,getBossesForMemory:M};return l.jsx(Jp.Provider,{"code-path":"src\\hooks\\gameState.tsx:331:5",value:J,children:i})}function it(){const i=D.useContext(Jp);if(!i)throw new Error("useGame must be used within a GameProvider");return i}function kp(i,u){if(typeof i=="function")return i(u);i!=null&&(i.current=u)}function i0(...i){return u=>{let f=!1;const r=i.map(h=>{const m=kp(h,u);return!f&&typeof m=="function"&&(f=!0),m});if(f)return()=>{for(let h=0;h<r.length;h++){const m=r[h];typeof m=="function"?m():kp(i[h],null)}}}}var o0=Symbol.for("react.lazy"),bc=Fm[" use ".trim().toString()];function r0(i){return typeof i=="object"&&i!==null&&"then"in i}function $p(i){return i!=null&&typeof i=="object"&&"$$typeof"in i&&i.$$typeof===o0&&"_payload"in i&&r0(i._payload)}function u0(i){const u=f0(i),f=D.forwardRef((r,h)=>{let{children:m,...v}=r;$p(m)&&typeof bc=="function"&&(m=bc(m._payload));const M=D.Children.toArray(m),b=M.find(h0);if(b){const p=b.props.children,N=M.map(j=>j===b?D.Children.count(p)>1?D.Children.only(null):D.isValidElement(p)?p.props.children:null:j);return l.jsx(u,{...v,ref:h,children:D.isValidElement(p)?D.cloneElement(p,void 0,N):null})}return l.jsx(u,{...v,ref:h,children:m})});return f.displayName=`${i}.Slot`,f}var d0=u0("Slot");function f0(i){const u=D.forwardRef((f,r)=>{let{children:h,...m}=f;if($p(h)&&typeof bc=="function"&&(h=bc(h._payload)),D.isValidElement(h)){const v=m0(h),M=x0(m,h.props);return h.type!==D.Fragment&&(M.ref=r?i0(r,v):v),D.cloneElement(h,M)}return D.Children.count(h)>1?D.Children.only(null):null});return u.displayName=`${i}.SlotClone`,u}var p0=Symbol("radix.slottable");function h0(i){return D.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===p0}function x0(i,u){const f={...u};for(const r in u){const h=i[r],m=u[r];/^on[A-Z]/.test(r)?h&&m?f[r]=(...M)=>{const b=m(...M);return h(...M),b}:h&&(f[r]=h):r==="style"?f[r]={...h,...m}:r==="className"&&(f[r]=[h,m].filter(Boolean).join(" "))}return{...i,...f}}function m0(i){let u=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,f=u&&"isReactWarning"in u&&u.isReactWarning;return f?i.ref:(u=Object.getOwnPropertyDescriptor(i,"ref")?.get,f=u&&"isReactWarning"in u&&u.isReactWarning,f?i.props.ref:i.props.ref||i.ref)}function Wp(i){var u,f,r="";if(typeof i=="string"||typeof i=="number")r+=i;else if(typeof i=="object")if(Array.isArray(i)){var h=i.length;for(u=0;u<h;u++)i[u]&&(f=Wp(i[u]))&&(r&&(r+=" "),r+=f)}else for(f in i)i[f]&&(r&&(r+=" "),r+=f);return r}function Fp(){for(var i,u,f=0,r="",h=arguments.length;f<h;f++)(i=arguments[f])&&(u=Wp(i))&&(r&&(r+=" "),r+=u);return r}const Tp=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,wp=Fp,S0=(i,u)=>f=>{var r;if(u?.variants==null)return wp(i,f?.class,f?.className);const{variants:h,defaultVariants:m}=u,v=Object.keys(h).map(p=>{const N=f?.[p],j=m?.[p];if(N===null)return null;const U=Tp(N)||Tp(j);return h[p][U]}),M=f&&Object.entries(f).reduce((p,N)=>{let[j,U]=N;return U===void 0||(p[j]=U),p},{}),b=u==null||(r=u.compoundVariants)===null||r===void 0?void 0:r.reduce((p,N)=>{let{class:j,className:U,...W}=N;return Object.entries(W).every(ee=>{let[F,J]=ee;return Array.isArray(J)?J.includes({...m,...M}[F]):{...m,...M}[F]===J})?[...p,j,U]:p},[]);return wp(i,v,b,f?.class,f?.className)},g0=(i,u)=>{const f=new Array(i.length+u.length);for(let r=0;r<i.length;r++)f[r]=i[r];for(let r=0;r<u.length;r++)f[i.length+r]=u[r];return f},y0=(i,u)=>({classGroupId:i,validator:u}),Pp=(i=new Map,u=null,f)=>({nextPart:i,validators:u,classGroupId:f}),vc="-",Mp=[],b0="arbitrary..",v0=i=>{const u=E0(i),{conflictingClassGroups:f,conflictingClassGroupModifiers:r}=i;return{getClassGroupId:v=>{if(v.startsWith("[")&&v.endsWith("]"))return B0(v);const M=v.split(vc),b=M[0]===""&&M.length>1?1:0;return Ip(M,b,u)},getConflictingClassGroupIds:(v,M)=>{if(M){const b=r[v],p=f[v];return b?p?g0(p,b):b:p||Mp}return f[v]||Mp}}},Ip=(i,u,f)=>{if(i.length-u===0)return f.classGroupId;const h=i[u],m=f.nextPart.get(h);if(m){const p=Ip(i,u+1,m);if(p)return p}const v=f.validators;if(v===null)return;const M=u===0?i.join(vc):i.slice(u).join(vc),b=v.length;for(let p=0;p<b;p++){const N=v[p];if(N.validator(M))return N.classGroupId}},B0=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const u=i.slice(1,-1),f=u.indexOf(":"),r=u.slice(0,f);return r?b0+r:void 0})(),E0=i=>{const{theme:u,classGroups:f}=i;return O0(f,u)},O0=(i,u)=>{const f=Pp();for(const r in i){const h=i[r];dr(h,f,r,u)}return f},dr=(i,u,f,r)=>{const h=i.length;for(let m=0;m<h;m++){const v=i[m];N0(v,u,f,r)}},N0=(i,u,f,r)=>{if(typeof i=="string"){j0(i,u,f);return}if(typeof i=="function"){k0(i,u,f,r);return}T0(i,u,f,r)},j0=(i,u,f)=>{const r=i===""?u:eh(u,i);r.classGroupId=f},k0=(i,u,f,r)=>{if(w0(i)){dr(i(r),u,f,r);return}u.validators===null&&(u.validators=[]),u.validators.push(y0(f,i))},T0=(i,u,f,r)=>{const h=Object.entries(i),m=h.length;for(let v=0;v<m;v++){const[M,b]=h[v];dr(b,eh(u,M),f,r)}},eh=(i,u)=>{let f=i;const r=u.split(vc),h=r.length;for(let m=0;m<h;m++){const v=r[m];let M=f.nextPart.get(v);M||(M=Pp(),f.nextPart.set(v,M)),f=M}return f},w0=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,M0=i=>{if(i<1)return{get:()=>{},set:()=>{}};let u=0,f=Object.create(null),r=Object.create(null);const h=(m,v)=>{f[m]=v,u++,u>i&&(u=0,r=f,f=Object.create(null))};return{get(m){let v=f[m];if(v!==void 0)return v;if((v=r[m])!==void 0)return h(m,v),v},set(m,v){m in f?f[m]=v:h(m,v)}}},ir="!",Hp=":",H0=[],Cp=(i,u,f,r,h)=>({modifiers:i,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:r,isExternal:h}),C0=i=>{const{prefix:u,experimentalParseClassName:f}=i;let r=h=>{const m=[];let v=0,M=0,b=0,p;const N=h.length;for(let F=0;F<N;F++){const J=h[F];if(v===0&&M===0){if(J===Hp){m.push(h.slice(b,F)),b=F+1;continue}if(J==="/"){p=F;continue}}J==="["?v++:J==="]"?v--:J==="("?M++:J===")"&&M--}const j=m.length===0?h:h.slice(b);let U=j,W=!1;j.endsWith(ir)?(U=j.slice(0,-1),W=!0):j.startsWith(ir)&&(U=j.slice(1),W=!0);const ee=p&&p>b?p-b:void 0;return Cp(m,W,U,ee)};if(u){const h=u+Hp,m=r;r=v=>v.startsWith(h)?m(v.slice(h.length)):Cp(H0,!1,v,void 0,!0)}if(f){const h=r;r=m=>f({className:m,parseClassName:h})}return r},A0=i=>{const u=new Map;return i.orderSensitiveModifiers.forEach((f,r)=>{u.set(f,1e6+r)}),f=>{const r=[];let h=[];for(let m=0;m<f.length;m++){const v=f[m],M=v[0]==="[",b=u.has(v);M||b?(h.length>0&&(h.sort(),r.push(...h),h=[]),r.push(v)):h.push(v)}return h.length>0&&(h.sort(),r.push(...h)),r}},_0=i=>({cache:M0(i.cacheSize),parseClassName:C0(i),sortModifiers:A0(i),...v0(i)}),z0=/\s+/,D0=(i,u)=>{const{parseClassName:f,getClassGroupId:r,getConflictingClassGroupIds:h,sortModifiers:m}=u,v=[],M=i.trim().split(z0);let b="";for(let p=M.length-1;p>=0;p-=1){const N=M[p],{isExternal:j,modifiers:U,hasImportantModifier:W,baseClassName:ee,maybePostfixModifierPosition:F}=f(N);if(j){b=N+(b.length>0?" "+b:b);continue}let J=!!F,K=r(J?ee.substring(0,F):ee);if(!K){if(!J){b=N+(b.length>0?" "+b:b);continue}if(K=r(ee),!K){b=N+(b.length>0?" "+b:b);continue}J=!1}const se=U.length===0?"":U.length===1?U[0]:m(U).join(":"),I=W?se+ir:se,fe=I+K;if(v.indexOf(fe)>-1)continue;v.push(fe);const ie=h(K,J);for(let _=0;_<ie.length;++_){const z=ie[_];v.push(I+z)}b=N+(b.length>0?" "+b:b)}return b},R0=(...i)=>{let u=0,f,r,h="";for(;u<i.length;)(f=i[u++])&&(r=th(f))&&(h&&(h+=" "),h+=r);return h},th=i=>{if(typeof i=="string")return i;let u,f="";for(let r=0;r<i.length;r++)i[r]&&(u=th(i[r]))&&(f&&(f+=" "),f+=u);return f},G0=(i,...u)=>{let f,r,h,m;const v=b=>{const p=u.reduce((N,j)=>j(N),i());return f=_0(p),r=f.cache.get,h=f.cache.set,m=M,M(b)},M=b=>{const p=r(b);if(p)return p;const N=D0(b,f);return h(b,N),N};return m=v,(...b)=>m(R0(...b))},U0=[],We=i=>{const u=f=>f[i]||U0;return u.isThemeGetter=!0,u},nh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,sh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,L0=/^\d+\/\d+$/,q0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,V0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Y0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,K0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Q0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Js=i=>L0.test(i),Se=i=>!!i&&!Number.isNaN(Number(i)),Vn=i=>!!i&&Number.isInteger(Number(i)),Po=i=>i.endsWith("%")&&Se(i.slice(0,-1)),mn=i=>q0.test(i),X0=()=>!0,Z0=i=>V0.test(i)&&!Y0.test(i),ah=()=>!1,J0=i=>K0.test(i),$0=i=>Q0.test(i),W0=i=>!X(i)&&!Z(i),F0=i=>$s(i,ih,ah),X=i=>nh.test(i),is=i=>$s(i,oh,Z0),Io=i=>$s(i,nS,Se),Ap=i=>$s(i,lh,ah),P0=i=>$s(i,ch,$0),xc=i=>$s(i,rh,J0),Z=i=>sh.test(i),Xa=i=>Ws(i,oh),I0=i=>Ws(i,sS),_p=i=>Ws(i,lh),eS=i=>Ws(i,ih),tS=i=>Ws(i,ch),mc=i=>Ws(i,rh,!0),$s=(i,u,f)=>{const r=nh.exec(i);return r?r[1]?u(r[1]):f(r[2]):!1},Ws=(i,u,f=!1)=>{const r=sh.exec(i);return r?r[1]?u(r[1]):f:!1},lh=i=>i==="position"||i==="percentage",ch=i=>i==="image"||i==="url",ih=i=>i==="length"||i==="size"||i==="bg-size",oh=i=>i==="length",nS=i=>i==="number",sS=i=>i==="family-name",rh=i=>i==="shadow",aS=()=>{const i=We("color"),u=We("font"),f=We("text"),r=We("font-weight"),h=We("tracking"),m=We("leading"),v=We("breakpoint"),M=We("container"),b=We("spacing"),p=We("radius"),N=We("shadow"),j=We("inset-shadow"),U=We("text-shadow"),W=We("drop-shadow"),ee=We("blur"),F=We("perspective"),J=We("aspect"),K=We("ease"),se=We("animate"),I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],fe=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ie=()=>[...fe(),Z,X],_=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],G=()=>[Z,X,b],re=()=>[Js,"full","auto",...G()],oe=()=>[Vn,"none","subgrid",Z,X],me=()=>["auto",{span:["full",Vn,Z,X]},Vn,Z,X],ne=()=>[Vn,"auto",Z,X],lt=()=>["auto","min","max","fr",Z,X],Ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ue=()=>["start","end","center","stretch","center-safe","end-safe"],T=()=>["auto",...G()],L=()=>[Js,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...G()],R=()=>[i,Z,X],V=()=>[...fe(),_p,Ap,{position:[Z,X]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],S=()=>["auto","cover","contain",eS,F0,{size:[Z,X]}],C=()=>[Po,Xa,is],q=()=>["","none","full",p,Z,X],Y=()=>["",Se,Xa,is],ce=()=>["solid","dashed","dotted","double"],pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ae=()=>[Se,Po,_p,Ap],Ke=()=>["","none",ee,Z,X],Me=()=>["none",Se,Z,X],St=()=>["none",Se,Z,X],Qt=()=>[Se,Z,X],Xt=()=>[Js,"full",...G()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[mn],breakpoint:[mn],color:[X0],container:[mn],"drop-shadow":[mn],ease:["in","out","in-out"],font:[W0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[mn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[mn],shadow:[mn],spacing:["px",Se],text:[mn],"text-shadow":[mn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Js,X,Z,J]}],container:["container"],columns:[{columns:[Se,X,Z,M]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ie()}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:re()}],"inset-x":[{"inset-x":re()}],"inset-y":[{"inset-y":re()}],start:[{start:re()}],end:[{end:re()}],top:[{top:re()}],right:[{right:re()}],bottom:[{bottom:re()}],left:[{left:re()}],visibility:["visible","invisible","collapse"],z:[{z:[Vn,"auto",Z,X]}],basis:[{basis:[Js,"full","auto",M,...G()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Se,Js,"auto","initial","none",X]}],grow:[{grow:["",Se,Z,X]}],shrink:[{shrink:["",Se,Z,X]}],order:[{order:[Vn,"first","last","none",Z,X]}],"grid-cols":[{"grid-cols":oe()}],"col-start-end":[{col:me()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":oe()}],"row-start-end":[{row:me()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":lt()}],"auto-rows":[{"auto-rows":lt()}],gap:[{gap:G()}],"gap-x":[{"gap-x":G()}],"gap-y":[{"gap-y":G()}],"justify-content":[{justify:[...Ie(),"normal"]}],"justify-items":[{"justify-items":[...Ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ue()]}],"align-content":[{content:["normal",...Ie()]}],"align-items":[{items:[...Ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ie()}],"place-items":[{"place-items":[...Ue(),"baseline"]}],"place-self":[{"place-self":["auto",...Ue()]}],p:[{p:G()}],px:[{px:G()}],py:[{py:G()}],ps:[{ps:G()}],pe:[{pe:G()}],pt:[{pt:G()}],pr:[{pr:G()}],pb:[{pb:G()}],pl:[{pl:G()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":G()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":G()}],"space-y-reverse":["space-y-reverse"],size:[{size:L()}],w:[{w:[M,"screen",...L()]}],"min-w":[{"min-w":[M,"screen","none",...L()]}],"max-w":[{"max-w":[M,"screen","none","prose",{screen:[v]},...L()]}],h:[{h:["screen","lh",...L()]}],"min-h":[{"min-h":["screen","lh","none",...L()]}],"max-h":[{"max-h":["screen","lh",...L()]}],"font-size":[{text:["base",f,Xa,is]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Z,Io]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Po,X]}],"font-family":[{font:[I0,X,u]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[h,Z,X]}],"line-clamp":[{"line-clamp":[Se,"none",Z,Io]}],leading:[{leading:[m,...G()]}],"list-image":[{"list-image":["none",Z,X]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,X]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[Se,"from-font","auto",Z,is]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[Se,"auto",Z,X]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:V()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:S()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Vn,Z,X],radial:["",Z,X],conic:[Vn,Z,X]},tS,P0]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:C()}],"gradient-via-pos":[{via:C()}],"gradient-to-pos":[{to:C()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:q()}],"rounded-s":[{"rounded-s":q()}],"rounded-e":[{"rounded-e":q()}],"rounded-t":[{"rounded-t":q()}],"rounded-r":[{"rounded-r":q()}],"rounded-b":[{"rounded-b":q()}],"rounded-l":[{"rounded-l":q()}],"rounded-ss":[{"rounded-ss":q()}],"rounded-se":[{"rounded-se":q()}],"rounded-ee":[{"rounded-ee":q()}],"rounded-es":[{"rounded-es":q()}],"rounded-tl":[{"rounded-tl":q()}],"rounded-tr":[{"rounded-tr":q()}],"rounded-br":[{"rounded-br":q()}],"rounded-bl":[{"rounded-bl":q()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Se,Z,X]}],"outline-w":[{outline:["",Se,Xa,is]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",N,mc,xc]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",j,mc,xc]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[Se,is]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",U,mc,xc]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[Se,Z,X]}],"mix-blend":[{"mix-blend":[...pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Se]}],"mask-image-linear-from-pos":[{"mask-linear-from":ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":ae()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":ae()}],"mask-image-t-to-pos":[{"mask-t-to":ae()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":ae()}],"mask-image-r-to-pos":[{"mask-r-to":ae()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":ae()}],"mask-image-b-to-pos":[{"mask-b-to":ae()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":ae()}],"mask-image-l-to-pos":[{"mask-l-to":ae()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":ae()}],"mask-image-x-to-pos":[{"mask-x-to":ae()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":ae()}],"mask-image-y-to-pos":[{"mask-y-to":ae()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":ae()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":fe()}],"mask-image-conic-pos":[{"mask-conic":[Se]}],"mask-image-conic-from-pos":[{"mask-conic-from":ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":ae()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:V()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:S()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Z,X]}],filter:[{filter:["","none",Z,X]}],blur:[{blur:Ke()}],brightness:[{brightness:[Se,Z,X]}],contrast:[{contrast:[Se,Z,X]}],"drop-shadow":[{"drop-shadow":["","none",W,mc,xc]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",Se,Z,X]}],"hue-rotate":[{"hue-rotate":[Se,Z,X]}],invert:[{invert:["",Se,Z,X]}],saturate:[{saturate:[Se,Z,X]}],sepia:[{sepia:["",Se,Z,X]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,X]}],"backdrop-blur":[{"backdrop-blur":Ke()}],"backdrop-brightness":[{"backdrop-brightness":[Se,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[Se,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Se,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Se,Z,X]}],"backdrop-invert":[{"backdrop-invert":["",Se,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[Se,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[Se,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":["",Se,Z,X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":G()}],"border-spacing-x":[{"border-spacing-x":G()}],"border-spacing-y":[{"border-spacing-y":G()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,X]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Se,"initial",Z,X]}],ease:[{ease:["linear","initial",K,Z,X]}],delay:[{delay:[Se,Z,X]}],animate:[{animate:["none",se,Z,X]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[F,Z,X]}],"perspective-origin":[{"perspective-origin":ie()}],rotate:[{rotate:Me()}],"rotate-x":[{"rotate-x":Me()}],"rotate-y":[{"rotate-y":Me()}],"rotate-z":[{"rotate-z":Me()}],scale:[{scale:St()}],"scale-x":[{"scale-x":St()}],"scale-y":[{"scale-y":St()}],"scale-z":[{"scale-z":St()}],"scale-3d":["scale-3d"],skew:[{skew:Qt()}],"skew-x":[{"skew-x":Qt()}],"skew-y":[{"skew-y":Qt()}],transform:[{transform:[Z,X,"","none","gpu","cpu"]}],"transform-origin":[{origin:ie()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Xt()}],"translate-x":[{"translate-x":Xt()}],"translate-y":[{"translate-y":Xt()}],"translate-z":[{"translate-z":Xt()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,X]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,X]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[Se,Xa,is,Io]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},lS=G0(aS);function rs(...i){return lS(Fp(i))}const cS=S0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),we=D.forwardRef(({className:i,variant:u,size:f,asChild:r=!1,...h},m)=>{const v=r?d0:"button";return l.jsx(v,{"code-path":"src\\components\\ui\\button.tsx:47:7",className:rs(cS({variant:u,size:f,className:i})),ref:m,...h})});we.displayName="Button";const iS=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oS=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,f,r)=>r?r.toUpperCase():f.toLowerCase()),zp=i=>{const u=oS(i);return u.charAt(0).toUpperCase()+u.slice(1)},uh=(...i)=>i.filter((u,f,r)=>!!u&&u.trim()!==""&&r.indexOf(u)===f).join(" ").trim(),rS=i=>{for(const u in i)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dS=D.forwardRef(({color:i="currentColor",size:u=24,strokeWidth:f=2,absoluteStrokeWidth:r,className:h="",children:m,iconNode:v,...M},b)=>D.createElement("svg",{ref:b,...uS,width:u,height:u,stroke:i,strokeWidth:r?Number(f)*24/Number(u):f,className:uh("lucide",h),...!m&&!rS(M)&&{"aria-hidden":"true"},...M},[...v.map(([p,N])=>D.createElement(p,N)),...Array.isArray(m)?m:[m]]));const Ge=(i,u)=>{const f=D.forwardRef(({className:r,...h},m)=>D.createElement(dS,{ref:m,iconNode:u,className:uh(`lucide-${iS(zp(i))}`,`lucide-${i}`,r),...h}));return f.displayName=zp(i),f};const fS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Za=Ge("arrow-left",fS);const pS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Dp=Ge("arrow-right",pS);const hS=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],xS=Ge("baby",hS);const mS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],dh=Ge("book-open",mS);const SS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],fh=Ge("brain",SS);const gS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bc=Ge("check",gS);const yS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Oc=Ge("chevron-left",yS);const bS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Nc=Ge("eye-off",bS);const vS=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],jc=Ge("fast-forward",vS);const BS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ES=Ge("house",BS);const OS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],$a=Ge("lock",OS);const NS=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Rp=Ge("package",NS);const jS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Wa=Ge("play",jS);const kS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],TS=Ge("rotate-ccw",kS);const wS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kc=Ge("settings",wS);const MS=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],HS=Ge("skull",MS);const CS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],or=Ge("sparkles",CS);const AS=[["path",{d:"m11 19-6-6",key:"s7kpr"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"m8 16-4 4",key:"1oqv8h"}],["path",{d:"M9.5 17.5 21 6V3h-3L6.5 14.5",key:"pkxemp"}]],fr=Ge("sword",AS);const _S=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],zS=Ge("triangle-alert",_S);const DS=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],RS=Ge("undo",DS);const GS=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],US=Ge("user-round",GS);const LS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],qS=Ge("user",LS);const VS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],YS=Ge("zap",VS),KS=(i,u,f)=>`./assets/characters/${i}/${u}-${f}.png`,ge=(i,u,f,r="character")=>f.map(h=>({id:`${i}-${u}-${h}`,name:u,state:h,category:r,path:KS(i,u,h)}));[...ge("child-protagonist","幼年主角",["正常","懵懂","任性","懂事","愧疚","开心","害怕","心疼","焦急","固执"]),...ge("adult-protagonist","青壮年主角",["正常","焦虑","坚定","疲惫","懊悔","轻松","好奇","温暖","心疼","紧张","恐惧"]),...ge("elder-protagonist","老年主角",["正常","焦虑","坚定","懊悔","疲惫","期待","执迷","恐惧","温暖","愧疚","固执","安心"]),...ge("paimon","派蒙",["开心","心疼","郑重","哽咽","焦急","无奈","软糯","雀跃","赞许","严肃","傲娇","期待","骄傲","认真","撇嘴","愤怒","绝望","温柔","担忧","欣慰"]),...ge("family","妈妈",["温柔","疲惫","苍白","感动","难过","委屈","开心","消沉","麻木","失落","欣慰","疼痛","担忧"],"support"),...ge("family","爸爸",["稳重","严肃"],"support"),...ge("family","儿子",["心疼","焦急","担忧","愤怒","疲惫","诚恳"],"support"),...ge("family","女儿",["担忧","温柔","无奈","恳求","委屈","哭泣"],"support"),...ge("family","儿媳",["温柔","细心","担忧","贴心"],"support"),...ge("family","小孙女",["活泼","软糯"],"support"),...ge("workplace","经理",["威严","缓和","满意","愣住","愤怒"],"support"),...ge("workplace","小李",["苦相","谨慎","疲惫","同情"],"support"),...ge("workplace","张总",["随和","笑意"],"support"),...ge("workplace","甲方总负责人",["严肃","满意"],"support"),...ge("workplace","王哥",["友善"],"support"),...ge("workplace","同事",["同情","起哄","担忧"],"support"),...ge("medical","乳腺科医生（专家）",["专业","严肃","温和"],"support"),...ge("medical","社区医生",["专业"],"support"),...ge("medical","营养师",["专业"],"support"),...ge("medical","药店店员",["友善","随意"],"support"),...ge("medical","民间老郎中",["神秘"],"support"),...ge("neighbors","张阿姨",["热心"],"support"),...ge("neighbors","李阿姨",["附和"],"support"),...ge("neighbors","王阿姨",["热心"],"support"),...ge("neighbors","刘阿姨",["附和"],"support"),...ge("neighbors","邻居",["热心"],"support"),...ge("neighbors","群友",["友善"],"support")];[...ge("cells","分泌细胞",["健康","虚弱","愉悦","委屈","疲惫","胀痛","恐惧","肿胀","异常","干瘪"],"cell"),...ge("cells","巨噬细胞",["爽朗","疲惫","虚弱","小巧","活泼","醉酒"],"cell"),...ge("cells","淋巴细胞",["活泼","无助","欢快","肿大","傲娇","期待","急促","警惕"],"cell"),...ge("cells","内分泌调节细胞",["正常","紊乱","疲惫"],"cell"),...ge("cells","雌激素调节细胞",["正常","紊乱"],"cell")];[...ge("bosses","乳头内陷 BOSS",["虚弱","狰狞"],"boss"),...ge("bosses","乳头溢液 BOSS",["虚弱","狰狞"],"boss"),...ge("bosses","腋下淋巴结肿大 BOSS",["虚弱","狰狞","嚣张"],"boss"),...ge("bosses","乳房硬块 BOSS",["虚弱","狰狞","嚣张"],"boss"),...ge("bosses","酒窝征 BOSS",["虚弱","狰狞"],"boss"),...ge("bosses","橘皮样改变 BOSS",["虚弱","狰狞"],"boss")];const Ec=i=>i.replaceAll("（","(").replaceAll("）",")").replaceAll(" ","-").replaceAll("/","-").replaceAll("：","-").replaceAll(":","-").replaceAll("--","-"),QS={大脑记忆中枢:"./assets/scenes/common/大脑记忆中枢.png","乳腺主城（正常）":"./assets/scenes/common/乳腺主城(正常).jpg","乳腺主城（黑雾笼罩）":"./assets/scenes/common/乳腺主城(黑雾笼罩).png",卧室:"./assets/scenes/common/卧室.jpg",客厅:"./assets/scenes/common/客厅.jpg",家庭客厅:"./assets/scenes/common/客厅.jpg",厨房:"./assets/scenes/common/厨房.jpg",妈妈的卧室:"./assets/scenes/child-adult/妈妈的卧室.jpg",书房:"./assets/scenes/child-adult/书房.jpg",公园:"./assets/scenes/child-adult/公园.jpg",职场办公室:"./assets/scenes/child-adult/职场办公室.png",酒店包厢:"./assets/scenes/child-adult/酒店包厢.png",小区花园:"./assets/scenes/elder/小区花园.jpg",正规医院:"./assets/scenes/elder/正规医院.png",社区医院:"./assets/scenes/elder/社区医院.jpg",三甲医院:"./assets/scenes/elder/三甲医院.png",体检中心:"./assets/scenes/elder/体检中心.png",办公室:"./assets/scenes/child-adult/职场办公室.png",家里:"./assets/scenes/common/客厅.jpg",医院:"./assets/scenes/elder/正规医院.png",社区:"./assets/scenes/elder/小区花园.jpg"},XS={派蒙:"paimon",妈妈:"family",爸爸:"family",儿子:"family",女儿:"family",儿媳:"family",小孙女:"family",经理:"workplace",小李:"workplace",张总:"workplace",甲方总负责人:"workplace",王哥:"workplace",同事:"workplace","乳腺科医生（专家）":"medical",乳腺科医生:"medical",医生:"medical",社区医生:"medical",营养师:"medical",药店店员:"medical",民间老郎中:"medical",张阿姨:"neighbors",李阿姨:"neighbors",王阿姨:"neighbors",刘阿姨:"neighbors",邻居:"neighbors",群友:"neighbors",分泌细胞:"cells",巨噬细胞:"cells",淋巴细胞:"cells",内分泌调节细胞:"cells",雌激素调节细胞:"cells"},ZS={乳腺科医生:"乳腺科医生（专家）",乳腺科专家:"乳腺科医生（专家）",医生:"乳腺科医生（专家）",民间郎中:"民间老郎中","乳房酒窝征 BOSS":"酒窝征 BOSS","酒窝综合征 BOSS":"酒窝征 BOSS","乳房橘皮样改变 BOSS":"橘皮样改变 BOSS","橘皮样皮肤改变 BOSS":"橘皮样改变 BOSS","乳房硬结节 BOSS":"乳房硬块 BOSS"},JS={主角:{窘迫:"焦虑",慌乱:"焦虑",眩晕:"疲惫",绝望:"恐惧",痛苦:"恐惧",虚弱:"疲惫"},派蒙:{正常:"开心"},经理:{紧张:"威严",尴尬:"愣住"},小李:{紧张:"谨慎"},女儿:{心疼:"担忧"},儿子:{开心:"心疼",轻松:"诚恳"},"乳房硬块 BOSS":{败退:"虚弱"},"腋下淋巴结肿大 BOSS":{败退:"虚弱"},"乳头内陷 BOSS":{败退:"虚弱",嚣张:"狰狞"},"乳头溢液 BOSS":{败退:"虚弱",嚣张:"狰狞"},"酒窝征 BOSS":{败退:"虚弱",嚣张:"狰狞"},"橘皮样改变 BOSS":{败退:"虚弱",嚣张:"狰狞"}},$S={breastLump:"乳房硬块 BOSS",lymphNode:"腋下淋巴结肿大 BOSS",nippleRetraction:"乳头内陷 BOSS",nippleDischarge:"乳头溢液 BOSS",skinDimple:"酒窝征 BOSS",orangePeel:"橘皮样改变 BOSS"};function Gt(i){if(i)return QS[i.trim()]}function mt(i,u,f){const r=i.replace("（意识音）","").trim(),h=u.trim(),m=ZS[r]||r,v=r==="主角"&&f==="child"&&h==="好奇"?"懵懂":r==="主角"&&f==="child"&&h==="坚定"?"懂事":r==="主角"&&f==="adult"&&h==="期待"?"好奇":r==="主角"&&f==="elder"&&h==="好奇"?"期待":r==="主角"&&f==="elder"&&h==="开心"?"安心":r==="主角"&&f==="elder"&&h==="轻松"?"温暖":JS[m]?.[h]||h;let M=XS[m];if(r==="主角"&&(M=`${f||"child"}-protagonist`),r.includes("BOSS")&&(M="bosses"),!!M)return`./assets/characters/${M}/${Ec(m)}-${Ec(v)}.png`}function os(i,u="狰狞"){const f=$S[i];if(f)return`./assets/characters/bosses/${Ec(f)}-${Ec(u)}.png`}function Gp(){const{dispatch:i}=it();return l.jsxs("div",{"code-path":"src\\sections\\MainMenu.tsx:10:5",className:"min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center justify-center p-4 relative overflow-hidden",children:[l.jsx("img",{"code-path":"src\\sections\\MainMenu.tsx:11:7",src:Gt("乳腺主城（正常）"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-30"}),l.jsx("div",{"code-path":"src\\sections\\MainMenu.tsx:16:7",className:"absolute inset-0 bg-gradient-to-b from-pink-50/80 to-pink-100/90"}),l.jsxs("div",{"code-path":"src\\sections\\MainMenu.tsx:18:7",className:"absolute inset-0 opacity-20",children:[l.jsx("div",{"code-path":"src\\sections\\MainMenu.tsx:19:9",className:"absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full blur-3xl"}),l.jsx("div",{"code-path":"src\\sections\\MainMenu.tsx:20:9",className:"absolute bottom-1/3 right-1/4 w-40 h-40 bg-pink-400 rounded-full blur-3xl"}),l.jsx("div",{"code-path":"src\\sections\\MainMenu.tsx:21:9",className:"absolute top-1/2 right-1/3 w-24 h-24 bg-pink-200 rounded-full blur-2xl"})]}),l.jsxs("div",{"code-path":"src\\sections\\MainMenu.tsx:25:7",className:"text-center mb-16 relative z-10",children:[l.jsx("h1",{"code-path":"src\\sections\\MainMenu.tsx:26:9",className:"text-5xl md:text-6xl font-bold text-pink-700 mb-4 tracking-wide",children:"乳腺守护者"}),l.jsx("p",{"code-path":"src\\sections\\MainMenu.tsx:29:9",className:"text-xl text-pink-600/80",children:"乳腺癌科普互动RPG游戏"})]}),l.jsxs("div",{"code-path":"src\\sections\\MainMenu.tsx:35:7",className:"flex flex-col gap-6 w-full max-w-sm relative z-10",children:[l.jsxs(we,{"code-path":"src\\sections\\MainMenu.tsx:36:9",size:"lg",className:"bg-pink-500 hover:bg-pink-600 text-white text-xl py-8 rounded-2xl shadow-lg transition-all hover:scale-105",onClick:()=>i({type:"SET_PHASE",payload:"perspectiveSelect"}),children:[l.jsx(Wa,{"code-path":"src\\sections\\MainMenu.tsx:41:11",className:"w-6 h-6 mr-3"}),"开始游戏"]}),l.jsxs(we,{"code-path":"src\\sections\\MainMenu.tsx:45:9",size:"lg",variant:"outline",className:"border-pink-400 text-pink-600 hover:bg-pink-50 text-xl py-8 rounded-2xl transition-all hover:scale-105",onClick:()=>i({type:"SET_PHASE",payload:"knowledgeBook"}),children:[l.jsx(dh,{"code-path":"src\\sections\\MainMenu.tsx:51:11",className:"w-6 h-6 mr-3"}),"知识手册"]})]}),l.jsx("div",{"code-path":"src\\sections\\MainMenu.tsx:57:7",className:"absolute bottom-6 text-center text-sm text-pink-400/60",children:l.jsx("p",{"code-path":"src\\sections\\MainMenu.tsx:58:9",children:"科普向互动游戏 | 学习乳腺健康知识"})})]})}const Yt=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:9:3",ref:f,className:rs("rounded-xl border bg-card text-card-foreground shadow",i),...u}));Yt.displayName="Card";const WS=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:24:3",ref:f,className:rs("flex flex-col space-y-1.5 p-6",i),...u}));WS.displayName="CardHeader";const FS=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:36:3",ref:f,className:rs("font-semibold leading-none tracking-tight",i),...u}));FS.displayName="CardTitle";const PS=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:48:3",ref:f,className:rs("text-sm text-muted-foreground",i),...u}));PS.displayName="CardDescription";const Kt=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:60:3",ref:f,className:rs("p-6 pt-0",i),...u}));Kt.displayName="CardContent";const IS=D.forwardRef(({className:i,...u},f)=>l.jsx("div",{"code-path":"src\\components\\ui\\card.tsx:68:3",ref:f,className:rs("flex items-center p-6 pt-0",i),...u}));IS.displayName="CardFooter";const Up={child:{name:"幼年视角",description:"10岁女孩 · 守护妈妈的乳腺世界",icon:l.jsx(xS,{"code-path":"src\\sections\\PerspectiveSelect.tsx:17:11",className:"w-10 h-10"}),color:"text-amber-600",bgColor:"bg-amber-50 hover:bg-amber-100"},adult:{name:"青壮年视角",description:"32岁职场女性 · 守护自己的健康人生",icon:l.jsx(qS,{"code-path":"src\\sections\\PerspectiveSelect.tsx:24:11",className:"w-10 h-10"}),color:"text-blue-600",bgColor:"bg-blue-50 hover:bg-blue-100"},elder:{name:"老年视角",description:"65岁奶奶 · 岁月安康，乳腺守护",icon:l.jsx(US,{"code-path":"src\\sections\\PerspectiveSelect.tsx:31:11",className:"w-10 h-10"}),color:"text-purple-600",bgColor:"bg-purple-50 hover:bg-purple-100"}};function eg(){const{startNewGame:i}=it(),u=f=>{i(f)};return l.jsxs("div",{"code-path":"src\\sections\\PerspectiveSelect.tsx:46:5",className:"min-h-screen bg-gradient-to-b from-pink-50 to-white p-4 flex flex-col items-center justify-center",children:[l.jsxs("div",{"code-path":"src\\sections\\PerspectiveSelect.tsx:48:7",className:"text-center mb-12",children:[l.jsx("h2",{"code-path":"src\\sections\\PerspectiveSelect.tsx:49:9",className:"text-3xl font-bold text-gray-800",children:"选择你的冒险视角"}),l.jsx("p",{"code-path":"src\\sections\\PerspectiveSelect.tsx:52:9",className:"text-gray-500 mt-2",children:"每个视角都有独特的记忆与故事"})]}),l.jsx("div",{"code-path":"src\\sections\\PerspectiveSelect.tsx:58:7",className:"max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6",children:Object.keys(Up).map(f=>{const r=Up[f],h=mt("主角",f==="child"?"正常":f==="elder"?"安心":"坚定",f);return l.jsx(Yt,{"code-path":"src\\sections\\PerspectiveSelect.tsx:68:13",className:`cursor-pointer transition-all hover:scale-105 ${r.bgColor} border-2 border-transparent hover:border-pink-300`,onClick:()=>u(f),children:l.jsxs(Kt,{"code-path":"src\\sections\\PerspectiveSelect.tsx:73:15",className:"p-8 flex flex-col items-center text-center",children:[l.jsx("div",{"code-path":"src\\sections\\PerspectiveSelect.tsx:74:17",className:`${r.color} mb-6 h-28 flex items-end justify-center`,children:h?l.jsx("img",{"code-path":"src\\sections\\PerspectiveSelect.tsx:76:21",src:h,alt:r.name,className:"max-h-28 object-contain drop-shadow-md"}):r.icon}),l.jsx("h3",{"code-path":"src\\sections\\PerspectiveSelect.tsx:81:17",className:`text-xl font-bold ${r.color} mb-3`,children:r.name}),l.jsx("p",{"code-path":"src\\sections\\PerspectiveSelect.tsx:84:17",className:"text-sm text-gray-600",children:r.description})]})},f)})}),l.jsx("div",{"code-path":"src\\sections\\PerspectiveSelect.tsx:94:7",className:"max-w-2xl mx-auto mt-12 p-4 bg-pink-50 rounded-lg",children:l.jsx("p",{"code-path":"src\\sections\\PerspectiveSelect.tsx:95:9",className:"text-sm text-pink-700 text-center",children:"选择后将进入该视角的完整剧情体验，包含一周目和二周目"})})]})}const tg={child:[{speaker:"旁白",text:"医院的走廊里，消毒水的味道弥漫在空气中。"},{speaker:"旁白",text:"10岁的你坐在妈妈病房的陪护小床上，手里紧紧攥着一本绘本。"},{speaker:"旁白",text:"妈妈刚做完检查，医生说需要进一步观察。"},{speaker:"旁白",text:"你看着妈妈苍白的脸，心里又害怕又担心..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}],adult:[{speaker:"旁白",text:"体检中心的走廊里，你手里攥着刚拿到的体检报告。"},{speaker:"旁白",text:'报告单上"乳腺结节"四个字让你的心猛地一沉。'},{speaker:"旁白",text:"32岁的你，一直以为自己还年轻，健康问题离自己很远。"},{speaker:"旁白",text:'医生的话在耳边回响："需要定期复查，注意生活习惯..."'},{speaker:"旁白",text:"你坐在休息区的椅子上，思绪万千..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}],elder:[{speaker:"旁白",text:"社区医院的诊室里，你坐在医生对面。"},{speaker:"旁白",text:"65岁的你，一直觉得自己身体还算硬朗。"},{speaker:"旁白",text:"但最近胸口的硬块让你不得不来医院检查。"},{speaker:"旁白",text:'医生的话让你心里七上八下："建议去大医院做进一步检查..."'},{speaker:"旁白",text:"你走出诊室，手里紧紧攥着女儿小时候送的布娃娃..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}]},ng={child:{title:"幼年视角·穿越触发",icon:"🏥"},adult:{title:"青壮年视角·穿越触发",icon:"📋"},elder:{title:"老年视角·穿越触发",icon:"🧸"}};function sg(){const{state:i,dispatch:u}=it(),f=i.currentPerspective,r=tg[f],h=ng[f],[m,v]=D.useState(0),[M,b]=D.useState(!1),[p,N]=D.useState(!1),[j,U]=D.useState(!1),[W,ee]=D.useState(!1),F=r[m],J=m>=r.length-1,K=Gt(f==="child"?"正规医院":f==="adult"?"体检中心":"社区医院"),se=mt("主角",f==="child"?"害怕":"焦虑",f);D.useEffect(()=>{if(p&&!J&&!W){const z=setTimeout(()=>{I()},5e3);return()=>clearTimeout(z)}},[p,m,J,W]);const I=()=>{if(M){b(!1);return}m<r.length-1?v(m+1):(ee(!0),setTimeout(()=>{u({type:"SET_PHASE",payload:"tutorial"})},3e3))},fe=()=>{m>0&&v(m-1)},ie=()=>{switch(f){case"child":return"from-amber-900/80 to-amber-950";case"adult":return"from-blue-900/80 to-blue-950";case"elder":return"from-purple-900/80 to-purple-950";default:return"from-gray-900/80 to-gray-950"}},_=z=>z?z==="旁白"?"📖":"👤":null;return W?l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:137:7",className:"min-h-screen bg-white flex items-center justify-center animate-pulse",children:l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:138:9",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:139:11",className:"text-6xl mb-4 animate-bounce",children:"✨"}),l.jsx("p",{"code-path":"src\\sections\\RealityTrigger.tsx:140:11",className:"text-xl text-pink-600",children:"正在穿越到微观世界..."})]})}):l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:147:5",className:`min-h-screen bg-gradient-to-b ${ie()} relative overflow-hidden`,onClick:I,children:[K&&l.jsx("img",{"code-path":"src\\sections\\RealityTrigger.tsx:152:9",src:K,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:154:7",className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70"}),se&&l.jsx("img",{"code-path":"src\\sections\\RealityTrigger.tsx:156:9",src:se,alt:"主角",className:"absolute bottom-28 right-8 hidden max-h-[52vh] max-w-[34vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] md:block"}),l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:163:7",className:"absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none",children:l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:164:9",className:"text-9xl",children:h.icon})}),l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:170:7",className:"absolute top-8 left-0 right-0 text-center z-10",children:[l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:171:9",className:"text-5xl mb-2",children:h.icon}),l.jsx("h1",{"code-path":"src\\sections\\RealityTrigger.tsx:172:9",className:"text-2xl font-bold text-white/80 mb-1",children:h.title})]}),l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:176:7",className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",children:[l.jsxs("button",{"code-path":"src\\sections\\RealityTrigger.tsx:177:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${m>0?"bg-purple-500/50 hover:bg-purple-500/70 text-white/70 hover:text-white":"bg-gray-500/30 text-gray-500 cursor-not-allowed"}`,onClick:z=>{z.stopPropagation(),fe()},disabled:m===0,children:[l.jsx(Oc,{"code-path":"src\\sections\\RealityTrigger.tsx:186:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:187:11",className:"text-xs",children:"回退"})]}),l.jsxs("button",{"code-path":"src\\sections\\RealityTrigger.tsx:189:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${p?"bg-pink-500/70 text-white":"bg-black/50 text-white/70 hover:text-white"}`,onClick:z=>{z.stopPropagation(),N(!p)},children:[l.jsx(Wa,{"code-path":"src\\sections\\RealityTrigger.tsx:193:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:194:11",className:"text-xs",children:"自动"})]}),l.jsxs("button",{"code-path":"src\\sections\\RealityTrigger.tsx:196:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:z=>{z.stopPropagation(),b(!M)},children:[l.jsx(Nc,{"code-path":"src\\sections\\RealityTrigger.tsx:200:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:201:11",className:"text-xs",children:"隐藏"})]}),l.jsxs("button",{"code-path":"src\\sections\\RealityTrigger.tsx:203:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:z=>{z.stopPropagation(),I()},children:[l.jsx(jc,{"code-path":"src\\sections\\RealityTrigger.tsx:207:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:208:11",className:"text-xs",children:"快进"})]}),l.jsxs("button",{"code-path":"src\\sections\\RealityTrigger.tsx:210:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:z=>{z.stopPropagation(),U(!0)},children:[l.jsx(kc,{"code-path":"src\\sections\\RealityTrigger.tsx:214:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:215:11",className:"text-xs",children:"设置"})]})]}),!M&&l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:221:9",className:"absolute bottom-16 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 z-20 border border-white/10",children:[F?.speaker&&l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:224:13",className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:225:15",className:"w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-lg",children:_(F.speaker)}),l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:228:15",className:"text-pink-300 font-medium",children:F.speaker})]}),l.jsx("p",{"code-path":"src\\sections\\RealityTrigger.tsx:233:11",className:`text-white text-lg leading-relaxed ${F?.speaker==="旁白"?"text-gray-300":""}`,children:F?.text}),l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:240:11",className:"flex justify-between items-center mt-4 pt-3 border-t border-white/10",children:[l.jsxs("span",{"code-path":"src\\sections\\RealityTrigger.tsx:241:13",className:"text-white/50 text-xs",children:[m+1," / ",r.length]}),!J&&l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:245:15",className:"text-white/50 text-xs animate-pulse",children:"点击继续 →"}),J&&l.jsx("span",{"code-path":"src\\sections\\RealityTrigger.tsx:248:15",className:"text-white/50 text-xs animate-pulse",children:"即将穿越..."})]})]}),j&&l.jsx("div",{"code-path":"src\\sections\\RealityTrigger.tsx:256:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:z=>z.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:260:11",className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[l.jsx("h3",{"code-path":"src\\sections\\RealityTrigger.tsx:261:13",className:"text-lg font-bold mb-4",children:"设置"}),l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:262:13",className:"space-y-4",children:[l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:263:15",children:[l.jsx("label",{"code-path":"src\\sections\\RealityTrigger.tsx:264:17",className:"text-sm text-gray-600",children:"文字速度"}),l.jsx("input",{"code-path":"src\\sections\\RealityTrigger.tsx:265:17",type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),l.jsxs("div",{"code-path":"src\\sections\\RealityTrigger.tsx:267:15",children:[l.jsx("label",{"code-path":"src\\sections\\RealityTrigger.tsx:268:17",className:"text-sm text-gray-600",children:"音量"}),l.jsx("input",{"code-path":"src\\sections\\RealityTrigger.tsx:269:17",type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),l.jsx(we,{"code-path":"src\\sections\\RealityTrigger.tsx:272:13",className:"w-full mt-4",onClick:()=>U(!1),children:"关闭"})]})})]})}const Sc=[{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...",background:"main"},{speaker:"旁白",text:'主角在朦胧中醒来，脚下温润，光点漂浮，远处黑雾弥漫，茫然道："我这是在哪？好陌生……"',background:"main"},{speaker:"派蒙",text:"主人！你终于来了，我们被症状BOSS欺负惨了！",background:"main"},{speaker:"主角",text:"你是谁？这里是……我的体内？",background:"main"},{speaker:"派蒙",text:"我是乳腺主城守护精灵派蒙！这里就是你的乳腺，BOSS在黑雾里作乱，你的习惯也在悄悄伤害我们。",background:"main"},{speaker:"主角",text:"我？怎么会？",background:"main"},{speaker:"派蒙",text:"先去核心区域，我帮你弄明白怎么守护这里！",background:"main"},{speaker:"旁白",text:'场景切换至大脑记忆中枢，派蒙指着发光神经元："这里是大脑记忆中枢，能回看你的过往选择哦！"',background:"memory"},{speaker:"派蒙",text:"我们可以通过神经元进入记忆点，重新经历过去的事情，改写曾经的做法～",background:"memory"},{speaker:"派蒙",text:"不同的选择会触发不一样的结局，中枢还会根据结局教你专属技能呢！",background:"memory"},{speaker:"派蒙",text:"不管结局是HE还是BE，只要通关记忆点，就能解锁对应的BOSS挑战～这可是拯救乳腺主城的唯一捷径哦！",background:"memory"},{speaker:"旁白",text:"场景切换至病变乳腺组织边界，BOSS挑战界面浮现，三个锁定图标排列。",background:"boss"},{speaker:"派蒙",text:"这里是病变乳腺组织，就是坏家伙BOSS们的战场啦！远处的黑雾全是它们搞的鬼～",background:"boss"},{speaker:"派蒙",text:"你看这三个暗戳戳的BOSS图标，它们分别对应记忆点1、2、3哦！",background:"boss"},{speaker:"派蒙",text:"通关记忆点1→解锁BOSS1；通关记忆点2→解锁BOSS2，以此类推啦！",background:"boss"},{speaker:"派蒙",text:"只要打败当前所有BOSS，就能把我们从苦难里救出来啦！冲鸭～",background:"boss"},{speaker:"派蒙",text:"送你4个基础技能，帮你开局对抗BOSS！",background:"boss"},{speaker:"派蒙",text:"【细胞修复术】修细胞，【激素平衡】稳状态，【免疫强化】增战力，【毒素净化】清污染。",background:"boss"},{speaker:"派蒙",text:"用记忆点的技能+基础技能，打败所有BOSS，守护乳腺主城！",background:"boss"},{speaker:"派蒙",text:"准备好，冒险开始！",background:"boss"}],ag={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化"};function lg(){const{state:i,dispatch:u}=it(),[f,r]=D.useState(0),[h,m]=D.useState(!1),[v,M]=D.useState(!1),[b,p]=D.useState(!1),[N,j]=D.useState(!1),U=Sc[f],W=f>=Sc.length-1,ee=mt("派蒙","开心"),F=mt("主角","坚定",i.currentPerspective||"adult"),J=U.background==="memory"?Gt("大脑记忆中枢"):U.background==="boss"?Gt("乳腺主城（黑雾笼罩）"):Gt("乳腺主城（正常）");D.useEffect(()=>{if(v&&!W&&!N){const _=setTimeout(()=>{K()},5e3);return()=>clearTimeout(_)}},[v,f,W,N]);const K=()=>{if(h){m(!1);return}f<Sc.length-1?r(f+1):j(!0)},se=()=>{f>0&&r(f-1)},I=()=>{u({type:"COMPLETE_TUTORIAL"}),u({type:"SET_PHASE",payload:"microWorldMain"})},fe=_=>_?_==="派蒙"?"🧚":_==="主角"?"👤":_==="旁白"?"📖":"👤":null,ie=()=>{switch(U.background){case"main":return l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:129:11",className:"absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200",children:[l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:131:13",className:"absolute top-20 left-1/2 -translate-x-1/2 text-center",children:[l.jsx("h2",{"code-path":"src\\sections\\TutorialGuide.tsx:132:15",className:"text-2xl font-bold text-pink-700",children:"微观乳腺主城"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:133:15",className:"text-sm text-pink-600/70",children:"一周目 · 核心枢纽"})]}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:137:13",className:"absolute top-36 left-1/2 -translate-x-1/2 w-80",children:l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:138:15",className:"bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:139:17",className:"w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0",children:ee?l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:141:21",src:ee,alt:"派蒙",className:"h-full w-full rounded-full object-cover"}):l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:143:21",className:"text-2xl",children:"🧚"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:146:17",children:[l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:147:19",className:"text-sm font-medium text-pink-700",children:"派蒙"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:148:19",className:"text-xs text-gray-600 mt-1",children:"这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。"})]})]})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:156:13",className:"absolute top-72 left-1/2 -translate-x-1/2 w-80 space-y-4",children:[l.jsx(Yt,{"code-path":"src\\sections\\TutorialGuide.tsx:157:15",className:"bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 opacity-60",children:l.jsxs(Kt,{"code-path":"src\\sections\\TutorialGuide.tsx:158:17",className:"p-5 flex items-center gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:159:19",className:"w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center",children:l.jsx(fh,{"code-path":"src\\sections\\TutorialGuide.tsx:160:21",className:"w-7 h-7 text-white"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:162:19",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:163:21",className:"font-bold text-blue-700",children:"大脑记忆中枢"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:164:21",className:"text-xs text-blue-600/70",children:"回溯记忆，学习技能"})]})]})}),l.jsx(Yt,{"code-path":"src\\sections\\TutorialGuide.tsx:169:15",className:"bg-gradient-to-r from-red-50 to-red-100 border-red-200 opacity-60",children:l.jsxs(Kt,{"code-path":"src\\sections\\TutorialGuide.tsx:170:17",className:"p-5 flex items-center gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:171:19",className:"w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center",children:l.jsx(fr,{"code-path":"src\\sections\\TutorialGuide.tsx:172:21",className:"w-7 h-7 text-white"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:174:19",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:175:21",className:"font-bold text-red-700",children:"病变的乳腺组织"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:176:21",className:"text-xs text-red-600/70",children:"挑战症状BOSS (0个已解锁)"})]})]})})]}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:183:13",className:"absolute bottom-20 left-4 opacity-20",children:l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:184:15",className:"w-8 h-8 bg-pink-400 rounded-full animate-pulse"})}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:186:13",className:"absolute top-24 right-4 opacity-15",children:l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:187:15",className:"w-6 h-6 bg-pink-500 rounded-full animate-bounce"})})]});case"memory":return l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:194:11",className:"absolute inset-0 bg-gradient-to-b from-indigo-100 to-purple-100",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:196:13",className:"absolute top-4 left-4",children:l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:197:15",className:"text-indigo-600 text-sm",children:"← 返回主城"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:200:13",className:"absolute top-16 left-1/2 -translate-x-1/2 text-center",children:[l.jsx("h2",{"code-path":"src\\sections\\TutorialGuide.tsx:201:15",className:"text-2xl font-bold text-indigo-700",children:"大脑记忆中枢"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:202:15",className:"text-sm text-indigo-600/70",children:"一周目 · 记忆点通关后锁定"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:206:13",className:"absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3",children:[l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:207:15",className:"bg-yellow-100 rounded-xl p-4 border border-yellow-300 flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:208:17",className:"w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold",children:"1"}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:209:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:210:19",className:"font-bold text-gray-800",children:"记忆点标题"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:211:19",className:"text-xs text-gray-600",children:"记忆点描述"})]}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:213:17",className:"text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded",children:"可进入"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:216:15",className:"bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:217:17",className:"w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold",children:"2"}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:218:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:219:19",className:"font-bold text-gray-800",children:"记忆点标题"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:220:19",className:"text-xs text-gray-600",children:"记忆点描述"})]}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:222:17",className:"text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded",children:"未解锁"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:225:15",className:"bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:226:17",className:"w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold",children:"3"}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:227:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:228:19",className:"font-bold text-gray-800",children:"记忆点标题"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:229:19",className:"text-xs text-gray-600",children:"记忆点描述"})]}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:231:17",className:"text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded",children:"未解锁"})]})]}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:236:13",className:"absolute bottom-32 left-1/2 -translate-x-1/2 w-80",children:l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:237:15",className:"bg-white/80 rounded-xl p-4",children:[l.jsx("h4",{"code-path":"src\\sections\\TutorialGuide.tsx:238:17",className:"text-sm font-medium text-gray-700 mb-3",children:"已装备技能"}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:239:17",className:"flex flex-wrap gap-2",children:i.equippedSkills.map(_=>l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:241:21",className:"text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded",children:ag[_]||_},_))})]})})]});case"boss":return l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:253:11",className:"absolute inset-0 bg-gradient-to-b from-red-900 to-red-950",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:255:13",className:"absolute top-4 left-4",children:l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:256:15",className:"text-red-300 text-sm",children:"← 返回主城"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:259:13",className:"absolute top-16 left-1/2 -translate-x-1/2 text-center",children:[l.jsx("h2",{"code-path":"src\\sections\\TutorialGuide.tsx:260:15",className:"text-2xl font-bold text-red-400",children:"病变的乳腺组织"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:261:15",className:"text-sm text-red-300/70",children:"BOSS挑战区 · 第1周目"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:265:13",className:"absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3",children:[l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:266:15",className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:267:17",className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:268:19",src:os("breastLump","狰狞"),alt:"乳房硬块BOSS",className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:270:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:271:19",className:"font-bold text-red-200",children:"乳房硬块BOSS"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:272:19",className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点1"})]}),l.jsxs("span",{"code-path":"src\\sections\\TutorialGuide.tsx:274:17",className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:275:19",children:"🔒"})," 未解锁"]})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:279:15",className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:280:17",className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:281:19",src:os("nippleDischarge","狰狞"),alt:"乳头溢液BOSS",className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:283:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:284:19",className:"font-bold text-red-200",children:"乳头溢液BOSS"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:285:19",className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点2"})]}),l.jsxs("span",{"code-path":"src\\sections\\TutorialGuide.tsx:287:17",className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:288:19",children:"🔒"})," 未解锁"]})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:292:15",className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:293:17",className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:294:19",src:os("orangePeel","狰狞"),alt:"橘皮样改变BOSS",className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:296:17",className:"flex-1",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:297:19",className:"font-bold text-red-200",children:"橘皮样改变BOSS"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:298:19",className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点3"})]}),l.jsxs("span",{"code-path":"src\\sections\\TutorialGuide.tsx:300:17",className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:301:19",children:"🔒"})," 未解锁"]})]})]}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:307:13",className:"absolute bottom-40 left-1/2 -translate-x-1/2 w-80",children:l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:308:15",className:"bg-red-900/60 rounded-xl p-4 border border-red-700",children:[l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:309:17",className:"flex justify-between items-center mb-2",children:[l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:310:19",className:"text-sm text-red-200",children:"挑战进度"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:311:19",className:"text-sm text-red-400",children:"0 / 3 已击败"})]}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:313:17",className:"w-full h-2 bg-red-800 rounded-full overflow-hidden",children:l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:314:19",className:"h-full bg-red-500 w-0"})})]})}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:320:13",className:"absolute bottom-24 left-1/2 -translate-x-1/2 w-80",children:l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:321:15",className:"bg-red-800/40 rounded-xl p-3 border border-red-700/50",children:l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:322:17",className:"text-xs text-red-300/80 text-center",children:"提示：通关对应记忆点即可挑战对应BOSS。击败全部3个BOSS即可触发结局。"})})})]});default:return null}};return l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:336:5",className:"min-h-screen relative overflow-hidden",onClick:K,children:[ie(),J&&l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:344:9",src:J,alt:"",className:"absolute inset-0 z-[1] h-full w-full object-cover opacity-25 pointer-events-none"}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:350:7",className:"absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:351:7",className:"absolute inset-x-0 bottom-28 z-[3] hidden md:flex items-end justify-between px-8 pointer-events-none",children:[F&&l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:353:11",src:F,alt:"主角",className:"max-h-[44vh] max-w-[30vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"}),U.speaker==="派蒙"&&ee&&l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:356:11",src:ee,alt:"派蒙",className:"max-h-[42vh] max-w-[28vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]"}),U.background==="boss"&&l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:359:11",src:os("breastLump","狰狞"),alt:"BOSS",className:"max-h-[36vh] max-w-[24vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:364:7",className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",children:[l.jsxs("button",{"code-path":"src\\sections\\TutorialGuide.tsx:365:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${f>0?"bg-purple-500/50 hover:bg-purple-500/70 text-white/70 hover:text-white":"bg-gray-500/30 text-gray-500 cursor-not-allowed"}`,onClick:_=>{_.stopPropagation(),se()},disabled:f===0,children:[l.jsx(Oc,{"code-path":"src\\sections\\TutorialGuide.tsx:374:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:375:11",className:"text-xs",children:"回退"})]}),l.jsxs("button",{"code-path":"src\\sections\\TutorialGuide.tsx:377:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${v?"bg-pink-500/70 text-white":"bg-black/50 text-white/70 hover:text-white"}`,onClick:_=>{_.stopPropagation(),M(!v)},children:[l.jsx(Wa,{"code-path":"src\\sections\\TutorialGuide.tsx:381:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:382:11",className:"text-xs",children:"自动"})]}),l.jsxs("button",{"code-path":"src\\sections\\TutorialGuide.tsx:384:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:_=>{_.stopPropagation(),m(!h)},children:[l.jsx(Nc,{"code-path":"src\\sections\\TutorialGuide.tsx:388:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:389:11",className:"text-xs",children:"隐藏"})]}),l.jsxs("button",{"code-path":"src\\sections\\TutorialGuide.tsx:391:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:_=>{_.stopPropagation(),K()},children:[l.jsx(jc,{"code-path":"src\\sections\\TutorialGuide.tsx:395:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:396:11",className:"text-xs",children:"快进"})]}),l.jsxs("button",{"code-path":"src\\sections\\TutorialGuide.tsx:398:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:_=>{_.stopPropagation(),p(!0)},children:[l.jsx(kc,{"code-path":"src\\sections\\TutorialGuide.tsx:402:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:403:11",className:"text-xs",children:"设置"})]})]}),!h&&!N&&l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:409:9",className:"absolute bottom-16 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 z-20 border border-white/10",children:[U?.speaker&&l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:412:13",className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:413:15",className:"w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-lg",children:U.speaker==="派蒙"&&ee?l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:415:19",src:ee,alt:"派蒙",className:"h-full w-full rounded-full object-cover"}):U.speaker==="主角"&&F?l.jsx("img",{"code-path":"src\\sections\\TutorialGuide.tsx:417:19",src:F,alt:"主角",className:"h-full w-full rounded-full object-cover"}):fe(U.speaker)}),l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:422:15",className:"text-pink-300 font-medium",children:U.speaker})]}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:427:11",className:`text-white text-lg leading-relaxed ${U?.speaker==="旁白"?"text-gray-300":""}`,children:U?.text}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:434:11",className:"flex justify-between items-center mt-4 pt-3 border-t border-white/10",children:[l.jsxs("span",{"code-path":"src\\sections\\TutorialGuide.tsx:435:13",className:"text-white/50 text-xs",children:[f+1," / ",Sc.length]}),!W&&l.jsx("span",{"code-path":"src\\sections\\TutorialGuide.tsx:439:15",className:"text-white/50 text-xs animate-pulse",children:"点击继续 →"})]})]}),N&&l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:447:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-40",onClick:_=>_.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:451:11",className:"max-w-md w-full p-6 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:452:13",className:"text-6xl mb-4",children:"🎉"}),l.jsx("h2",{"code-path":"src\\sections\\TutorialGuide.tsx:453:13",className:"text-2xl font-bold text-white mb-2",children:"新手引导完成！"}),l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:454:13",className:"text-white/70 mb-6",children:"你已经了解了游戏的基本玩法。现在，开始你的乳腺守护冒险吧！"}),l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:457:13",className:"bg-white/10 rounded-xl p-4 mb-6",children:l.jsx("p",{"code-path":"src\\sections\\TutorialGuide.tsx:458:15",className:"text-sm text-white/80",children:"💡 提示：通关记忆点解锁BOSS，击败所有BOSS触发结局"})}),l.jsx(we,{"code-path":"src\\sections\\TutorialGuide.tsx:462:13",size:"lg",className:"bg-pink-500 hover:bg-pink-600 text-white px-8",onClick:I,children:"开始冒险"})]})}),b&&l.jsx("div",{"code-path":"src\\sections\\TutorialGuide.tsx:475:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:_=>_.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:479:11",className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[l.jsx("h3",{"code-path":"src\\sections\\TutorialGuide.tsx:480:13",className:"text-lg font-bold mb-4",children:"设置"}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:481:13",className:"space-y-4",children:[l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:482:15",children:[l.jsx("label",{"code-path":"src\\sections\\TutorialGuide.tsx:483:17",className:"text-sm text-gray-600",children:"文字速度"}),l.jsx("input",{"code-path":"src\\sections\\TutorialGuide.tsx:484:17",type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),l.jsxs("div",{"code-path":"src\\sections\\TutorialGuide.tsx:486:15",children:[l.jsx("label",{"code-path":"src\\sections\\TutorialGuide.tsx:487:17",className:"text-sm text-gray-600",children:"音量"}),l.jsx("input",{"code-path":"src\\sections\\TutorialGuide.tsx:488:17",type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),l.jsx(we,{"code-path":"src\\sections\\TutorialGuide.tsx:491:13",className:"w-full mt-4",onClick:()=>p(!1),children:"关闭"})]})})]})}function cg(){const{state:i,dispatch:u}=it(),f=i.currentPerspective||"adult",r=Ja[i.playthrough],h=i.defeatedBosses.filter(N=>r.includes(N)).length,m=Object.keys(i.memoryProgress).length,v=mt("派蒙","开心"),M=mt("主角",f==="child"?"正常":f==="elder"?"安心":"坚定",f),b=Gt("乳腺主城（正常）"),p=i.unlockedBosses.filter(N=>r.includes(N)).length;return l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:25:5",className:"min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4 relative overflow-hidden",children:[b&&l.jsx("img",{"code-path":"src\\sections\\MicroWorldMain.tsx:27:9",src:b,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-35"}),l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:33:7",className:"absolute inset-0 bg-gradient-to-b from-pink-50/75 via-pink-100/70 to-pink-200/85"}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:35:7",className:"pointer-events-none absolute inset-x-0 bottom-20 z-0 hidden md:flex items-end justify-between px-10",children:[M&&l.jsx("img",{"code-path":"src\\sections\\MicroWorldMain.tsx:37:11",src:M,alt:"主角",className:"max-h-[46vh] max-w-[30vw] object-contain drop-shadow-[0_18px_30px_rgba(80,20,60,0.28)]"}),v&&l.jsx("img",{"code-path":"src\\sections\\MicroWorldMain.tsx:44:11",src:v,alt:"派蒙",className:"max-h-[42vh] max-w-[28vw] object-contain drop-shadow-[0_18px_30px_rgba(80,20,60,0.24)]"})]}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:52:7",className:"relative z-10",children:[l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:54:7",className:"text-center pt-4 pb-6",children:[l.jsx("h2",{"code-path":"src\\sections\\MicroWorldMain.tsx:55:9",className:"text-2xl font-bold text-pink-700",children:"微观乳腺主城"}),l.jsxs("p",{"code-path":"src\\sections\\MicroWorldMain.tsx:56:9",className:"text-sm text-pink-600/70",children:[i.playthrough===1?"一周目":"二周目"," · 核心枢纽"]})]}),l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:62:7",className:"max-w-md mx-auto mb-6",children:l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:63:9",className:"bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm",children:[l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:64:11",className:"w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden",children:v?l.jsx("img",{"code-path":"src\\sections\\MicroWorldMain.tsx:66:15",src:v,alt:"派蒙",className:"h-full w-full object-cover"}):l.jsx("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:68:15",className:"text-2xl",children:"🧚"})}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:71:11",children:[l.jsx("p",{"code-path":"src\\sections\\MicroWorldMain.tsx:72:13",className:"text-sm font-medium text-pink-700",children:"派蒙"}),l.jsx("p",{"code-path":"src\\sections\\MicroWorldMain.tsx:73:13",className:"text-xs text-gray-600 mt-1",children:"这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。"})]})]})}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:81:7",className:"max-w-md mx-auto space-y-4",children:[l.jsx(Yt,{"code-path":"src\\sections\\MicroWorldMain.tsx:82:9",className:"cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200",onClick:()=>u({type:"SET_PHASE",payload:"memoryCenter"}),children:l.jsxs(Kt,{"code-path":"src\\sections\\MicroWorldMain.tsx:86:11",className:"p-5 flex items-center gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:87:13",className:"w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center",children:l.jsx(fh,{"code-path":"src\\sections\\MicroWorldMain.tsx:88:15",className:"w-7 h-7 text-white"})}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:90:13",children:[l.jsx("h3",{"code-path":"src\\sections\\MicroWorldMain.tsx:91:15",className:"font-bold text-blue-700",children:"大脑记忆中枢"}),l.jsx("p",{"code-path":"src\\sections\\MicroWorldMain.tsx:92:15",className:"text-xs text-blue-600/70",children:"回溯记忆，学习技能"})]})]})}),l.jsx(Yt,{"code-path":"src\\sections\\MicroWorldMain.tsx:97:9",className:"cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-red-50 to-red-100 border-red-200",onClick:()=>u({type:"SET_PHASE",payload:"bossEntry"}),children:l.jsxs(Kt,{"code-path":"src\\sections\\MicroWorldMain.tsx:101:11",className:"p-5 flex items-center gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:102:13",className:"w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center",children:l.jsx(fr,{"code-path":"src\\sections\\MicroWorldMain.tsx:103:15",className:"w-7 h-7 text-white"})}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:105:13",children:[l.jsx("h3",{"code-path":"src\\sections\\MicroWorldMain.tsx:106:15",className:"font-bold text-red-700",children:"病变的乳腺组织"}),l.jsxs("p",{"code-path":"src\\sections\\MicroWorldMain.tsx:107:15",className:"text-xs text-red-600/70",children:["挑战症状BOSS (",p,"个已解锁)"]})]})]})})]}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:116:7",className:"max-w-md mx-auto mt-6 p-4 bg-white/60 rounded-xl",children:[l.jsx("h4",{"code-path":"src\\sections\\MicroWorldMain.tsx:117:9",className:"text-sm font-medium text-gray-700 mb-3",children:"当前进度"}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:118:9",className:"space-y-2 text-xs",children:[l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:119:11",className:"flex justify-between",children:[l.jsx("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:120:13",className:"text-gray-600",children:"记忆点进度"}),l.jsxs("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:121:13",className:"text-pink-600",children:[m,"/3"]})]}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:123:11",className:"flex justify-between",children:[l.jsx("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:124:13",className:"text-gray-600",children:"BOSS解锁进度"}),l.jsxs("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:125:13",className:"text-pink-600",children:[p,"/",r.length]})]}),l.jsxs("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:127:11",className:"flex justify-between",children:[l.jsx("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:128:13",className:"text-gray-600",children:"已击败BOSS"}),l.jsxs("span",{"code-path":"src\\sections\\MicroWorldMain.tsx:129:13",className:"text-pink-600",children:[h,"/",r.length]})]})]})]}),l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:135:7",className:"fixed bottom-4 left-4 opacity-20 pointer-events-none",children:l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:136:9",className:"w-8 h-8 bg-pink-400 rounded-full animate-pulse"})}),l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:138:7",className:"fixed top-20 right-4 opacity-15 pointer-events-none",children:l.jsx("div",{"code-path":"src\\sections\\MicroWorldMain.tsx:139:9",className:"w-6 h-6 bg-pink-500 rounded-full animate-bounce"})})]})]})}const ph={child:{1:{id:1,title:"任性粘人，熬妈陪伴",description:"任性粘人，熬妈陪伴",perspective:"child",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在软糯梦幻的大脑记忆中枢外层，四周漂浮着浅粉色的神经元光晕，像揉碎的樱花棉絮般轻轻晃动。一条条发光的记忆通道呈彩色糖果棒造型，泛着蜜桃色光泽，有序悬浮在半空。"},{id:"s5",speaker:"旁白",text:"幼年线的三个记忆入口以卡通云朵为边框，字体圆润可爱，带着嫩黄色描边，清晰排列在眼前：任性粘人，熬妈陪伴、熬夜学习，让妈牵挂、无知嘲笑，健康认知缺失。"},{id:"s6",speaker:"旁白",text:'我伸出胖乎乎的小手，指尖轻轻触碰到 "记忆点 1：任性粘人，熬妈陪伴" 这行发光文字。指尖刚接触，记忆通道瞬间迸发耀眼的蜜桃色光芒，翻涌成一串串带着星光的泡泡，那段 7 岁那年冬夜的记忆，被彻底唤醒。'},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 软糯】"},{id:"s8",speaker:"派蒙",text:"小主人，我们要去妈妈的乳腺世界啦！你还记得 7 岁那年的冬夜吗？你任性地缠着妈妈，不让她休息，哪怕她捂着胸口说不舒服，你也非要她陪你搭积木、讲睡前故事，一直熬到后半夜。"},{id:"s9",speaker:"派蒙",text:"妈妈的乳腺世界特别脆弱，长期的劳累和焦虑，让那里悄悄出了问题，催生了两个可怕的 BOSS—— 乳头内陷 BOSS 和乳头溢液 BOSS！今天我们回去，就是要改掉任性的小毛病，守护妈妈的乳腺主城呀！"},{id:"s10",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 软糯、分泌细胞 / 虚弱】"},{id:"s11",speaker:"旁白",text:"话音刚落，几道微弱的粉色光影从记忆通道口飘出，那是妈妈乳腺世界里的萌芽细胞，它们蔫蔫地耷拉着脑袋，乳头部位的细胞蜷缩着，像受了委屈的小铃铛，导管里还飘着细细的浑浊液滴。"},{id:"s12",speaker:"分泌细胞",text:"小主人，妈妈好累呀…… 我们好不舒服…… 你别再让她熬夜陪你啦……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"小主人，你看！这就是妈妈乳腺世界的样子！因为你的任性粘人，熬坏了妈妈的身体，才催生了这两个 BOSS—— 乳头内陷 BOSS 和乳头溢液 BOSS！今天我们必须重新做出选择，做个懂事的孩子，才能驱散它们！"},{id:"s15",speaker:"舞台指示",text:"【立绘：主角 / 懂事、派蒙 / 郑重】"},{id:"s16",speaker:"旁白",text:'我攥紧小小的拳头，鼻子酸酸的，看着那些虚弱的小细胞，重重地点了点头，用稚嫩的声音说："我知道了，这次我要做懂事的孩子，不让妈妈累着！"'},{id:"s17",speaker:"旁白",text:"眼前的记忆之门彻底敞开，一股熟悉的、夹杂着妈妈煮的红枣粥香气与冬日暖灯的气息扑面而来，我被瞬间拉回了当年，那个飘着小雪的冬夜，妈妈的卧室里，暖黄色的台灯亮着，我正拽着妈妈的衣角，闹着要她陪我玩。"},{id:"s18",speaker:"第一幕",text:"冬夜卧室里・陪伴抉择（5 选 1 并联选项）"},{id:"s19",speaker:"舞台指示",text:"【场景切换：妈妈的卧室】"},{id:"s20",speaker:"舞台指示",text:"【立绘：主角 / 任性、妈妈 / 疲惫】"},{id:"s21",speaker:"旁白",text:'深冬的夜晚，窗外飘着细碎的小雪，北风轻轻拍打着窗户，发出 "沙沙" 的声响。妈妈的卧室里，暖黄色的台灯把房间照得暖洋洋的，床头柜上摆着一碗刚煮好的红枣小米粥，还冒着袅袅热气。'},{id:"s22",speaker:"旁白",text:"7 岁的我，穿着厚厚的小熊睡衣，光着小脚丫踩在地毯上，手里抱着积木桶，死死拽着妈妈的衣角，不肯松开。妈妈坐在床边，背靠着床头，身上披着薄毛毯，一只手轻轻捂着胸口，眉头微微皱着，脸色有些苍白，另一只手还在揉着发酸的肩膀。"},{id:"s23",speaker:"妈妈",text:"宝贝，妈妈今天好累，胸口有点闷，能不能先睡觉呀？明天早上，妈妈早早起来陪你搭积木、讲白雪公主的故事，好不好？"},{id:"s24",speaker:"舞台指示",text:"【立绘：主角 / 任性、妈妈 / 疲惫】"},{id:"s25",speaker:"主角",text:"不好！我就要现在玩！现在不讲故事，我就不睡觉！别的小朋友的妈妈都陪他们玩到很晚，你不陪我，就是不爱我了！"},{id:"s26",speaker:"旁白",text:"妈妈看着我任性的样子，眼里闪过一丝无奈，又很快被温柔取代。她轻轻放下捂着胸口的手，想伸手抱抱我，却又因为胸口的不适，动作顿了一下。她叹了口气，刚要答应，就忍不住轻轻咳嗽了两声。"},{id:"s27",speaker:"舞台指示",text:"【立绘：主角 / 任性、妈妈 / 苍白】"},{id:"s28",speaker:"旁白",text:"床头柜上的手机亮了一下，是爸爸发来的消息，让妈妈早点休息，别熬坏了身体。可我却完全没注意到妈妈的不适，依旧撒着娇，拽着她的衣角不肯放手。"}],firstChoices:[{id:"c1",text:"看到妈妈咳嗽、捂胸口，立刻不闹了，主动让妈妈休息，自己乖乖去睡觉",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 "看到妈妈不适，立刻不闹，主动让妈妈休息"
【立绘：主角 / 懂事、妈妈 / 苍白】
主角：妈妈，你是不是很疼呀？对不起，我不该闹你。
旁白：我立刻松开拽着妈妈衣角的小手，把积木桶放在一边，小手轻轻抚上妈妈的胸口，又搬来小板凳，把床头柜上的红枣粥端到妈妈面前："妈妈，你喝口粥，然后躺着休息，我自己去睡觉，不用你陪我玩，也不用你讲故事啦！"
【立绘：主角 / 懂事、妈妈 / 感动】
旁白：说完，我自己爬上小床，拉过被子盖好，还特意朝妈妈比了个 "嘘" 的手势："妈妈，我要睡觉啦，你也快点休息，明天早上我们再玩。" 看着我懂事的样子，妈妈眼里泛起了泪光，轻轻点了点头。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人，你太懂事啦！这就是最正确的选择！不让妈妈熬夜劳累，就是在守护她的乳腺世界，乳头内陷 BOSS 和乳头溢液 BOSS 再也没有机会长大啦！
【剧情跳转：直接进入第二幕 HE 主线 "懂事守护・让妈安歇"】`},{id:"c2",text:"有点心疼妈妈，却还是想让她陪，提出只玩十分钟积木，时间到就睡觉",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 "心疼妈妈，提出只玩十分钟积木"
【立绘：主角 / 任性、妈妈 / 疲惫】
主角：妈妈，那我只玩十分钟积木，十分钟到了，你就休息，我也睡觉，好不好？
妈妈：好，就十分钟。
【立绘：主角 / 任性、妈妈 / 疲惫】
旁白：我立刻拿出积木，和妈妈一起搭小房子，可我心里太兴奋，不知不觉就玩了二十分钟。妈妈没有提醒我，依旧陪着我，只是捂着胸口的手，攥得更紧了，眉头也皱得更厉害了。
主角：妈妈，时间到了，你快休息！
旁白：我看着妈妈的样子，终于想起了承诺，立刻放下积木。妈妈揉了揉我的头发，慢慢躺下了。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人，你已经很棒啦，就是下次要更守时哦！妈妈的身体经不起额外的劳累，少让她熬一分钟，乳腺世界的小细胞们就多一分安全！
【剧情跳转：直接进入第二幕 HE 主线 "懂事守护・让妈安歇"】`},{id:"c3",text:"依旧任性，坐在地上撒泼打滚，非要妈妈陪玩一整晚，不答应就不起来",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 "依旧任性，撒泼打滚非要陪玩一整晚"
【立绘：主角 / 任性、妈妈 / 苍白】
旁白：我看到妈妈没有立刻答应，立刻坐在地上，双腿乱蹬，双手拍打着地毯，大声哭了起来："我不管！我就要你陪我玩一整晚！你不陪我，我就一直哭，哭到天亮！"
妈妈：宝贝别哭，妈妈陪你，陪你玩一整晚好不好？
【立绘：主角 / 任性、妈妈 / 疲惫】
旁白：我立刻停止了哭泣，破涕为笑，拉着妈妈的手，开始搭积木、讲故事。墙上的挂钟一圈圈转动，从十一点到了凌晨两点。妈妈全程陪着我，不敢有丝毫懈怠，脸色越来越苍白，时不时偷偷捂着胸口。
【立绘：主角 / 任性】
派蒙（意识音）：小主人，你怎么能这么任性呀！妈妈都快撑不住了！你这样熬着她，乳腺世界里的 BOSS 就要开始苏醒啦，快醒醒！
【剧情跳转：直接进入第二幕 BE 主线 "任性依旧・熬坏妈妈"】`},{id:"c4",text:"口头答应乖乖睡觉，等妈妈躺下后，又偷偷爬起来，缠着她讲第二个故事",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 "口头答应睡觉，又偷偷爬起来缠妈妈"
【立绘：主角 / 懂事、妈妈 / 疲惫】
主角：好，妈妈，我乖乖睡觉，你也休息。
旁白：妈妈放心地躺下，很快就有了睡意。可我躺了没五分钟，就偷偷爬起来，凑到妈妈耳边，小声说："妈妈，我想听第二个故事，就一个，听完我就睡。"
【立绘：主角 / 任性、妈妈 / 疲惫】
旁白：妈妈困得睁不开眼睛，却还是强撑着精神，给我讲了第二个故事。刚讲完，我又缠着她讲第三个，妈妈实在撑不住了，轻轻摇了摇头，我才不情不愿地躺下。
【立绘：主角 / 任性】
派蒙（意识音）：小主人，心口不一可不好哦！妈妈已经很累了，你这样偷偷缠着她，只会让她的身体更糟，乳腺世界的隐患也会越来越大！
【剧情跳转：直接进入第二幕 BE 主线 "任性依旧・熬坏妈妈"】`},{id:"c5",text:"让妈妈先靠在床头休息，自己坐在旁边玩积木，不吵不闹，陪妈妈一起歇着",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 "让妈妈休息，自己坐在旁边玩积木"
【立绘：主角 / 懂事、妈妈 / 疲惫】
主角：妈妈，你靠在床头休息，我坐在旁边玩积木，不吵你，这样我们就能一起歇着啦！
妈妈：好呀，宝贝真体贴。
【立绘：主角 / 任性、妈妈 / 疲惫】
旁白：妈妈笑着点了点头，靠在床头闭上了眼睛。我坐在旁边的地毯上，安安静静地玩积木，没有发出一点声音。可过了半个小时，我看到妈妈睡着了，又忍不住轻轻推了推她："妈妈，你看我搭的小房子，好看吗？"
旁白：妈妈被我吵醒，再也没能睡着，只能陪着我看积木。
【立绘：主角 / 任性】
派蒙（意识音）：小主人，你已经很体贴啦，就是要记得，妈妈睡着了，就不要吵醒她啦！让她好好睡一觉，乳腺世界的小细胞们才能好好恢复！
【剧情跳转：直接进入第二幕 BE 主线 "任性依旧・熬坏妈妈"】`}],secondChoicesHE:[{id:"he1",text:'主动制定 "妈妈休息时间表"，每天晚上提醒妈妈早点睡觉，不熬夜',type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：懂事守护・让妈安歇
【场景切换：妈妈的卧室】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：主动让妈妈休息后，我彻底改掉了任性的小毛病。当晚，我自己乖乖躺在小床上，很快就睡着了，没有再吵妈妈一下。妈妈终于能安心地躺下休息，胸口的闷胀感也慢慢减轻了。
旁白：第二天一早，我醒过来的第一件事，就是轻手轻脚地走到妈妈的床边，看到妈妈睡得很安稳，我没有吵醒她，而是自己去厨房，搬来小板凳，想给妈妈热一碗红枣粥。
旁白：接下来的几天，我变得格外懂事，再也不缠着妈妈熬夜陪我玩。每天晚上八点，我就自己洗漱好，爬上小床，等着妈妈给我讲一个短故事，然后乖乖睡觉。妈妈的身体，也慢慢有了好转。
选 1：主动制定妈妈休息时间表
【立绘：主角 / 懂事、爸爸 / 稳重】
旁白：我找来一张彩色卡纸，让爸爸帮我写了 "妈妈休息时间表"，上面写着：晚上八点，妈妈洗漱；晚上八点半，妈妈上床休息；早上七点，妈妈起床。我把时间表贴在客厅的墙上。
【立绘：主角 / 懂事、妈妈 / 温柔】
主角：妈妈，休息时间到啦，我们要去睡觉啦！
旁白：我每天晚上八点，就会准时拉着妈妈的手，提醒她休息。妈妈每次都会笑着答应，再也没有熬过夜。看着妈妈每天都能好好休息，我心里美滋滋的。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：懂事守护・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的金色光芒，那是小主人懂事的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本向内凹陷的乳头细胞，在光芒里慢慢舒展，鼓起来变成圆润可爱的样子；乳腺导管里的浑浊液滴不见了，换成清澈的营养液欢快流淌。
旁白：蜷缩的分泌细胞们舒展身体，身上的灰雾全散了，抱着营养液罐子在导管间蹦蹦跳跳；巨噬细胞们扛着吸尘器巡逻，淋巴细胞们吹着小喇叭穿梭，整个主城都是甜甜的笑声。
【立绘：主角 / 开心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳头内陷 BOSS 和乳头溢液 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳头内陷 BOSS：（虚弱消散，声音细弱）妈妈不劳累了，乳腺导管有弹性了…… 我撑不住啦……
乳头溢液 BOSS：（透明淡化，气息微弱）妈妈身心放松，分泌正常了…… 我要消失啦……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
派蒙：以后一直做懂事的孩子，让妈妈好好休息，乳腺主城就会一直平平安安，妈妈也能健健康康陪着你长大呀！
旁白：健康科普：妈妈长期熬夜劳累、情绪焦虑，会影响乳腺激素平衡，诱发乳头内陷、溢液等问题。让妈妈规律休息、保持开心，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？妈妈的身体很脆弱，她照顾你很辛苦，也需要好好休息。
派蒙：你的懂事不是不亲近妈妈，而是心疼她、不让她熬夜劳累，这才是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不任性粘人熬妈妈了，要做个懂事的孩子，守护妈妈的健康。
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"跟爸爸一起分担家务，帮妈妈递水杯、捶肩膀，让妈妈少操心、多休息",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：懂事守护・让妈安歇
【场景切换：妈妈的卧室】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：主动让妈妈休息后，我彻底改掉了任性的小毛病。当晚，我自己乖乖躺在小床上，很快就睡着了，没有再吵妈妈一下。妈妈终于能安心地躺下休息，胸口的闷胀感也慢慢减轻了。
旁白：第二天一早，我醒过来的第一件事，就是轻手轻脚地走到妈妈的床边，看到妈妈睡得很安稳，我没有吵醒她，而是自己去厨房，搬来小板凳，想给妈妈热一碗红枣粥。
旁白：接下来的几天，我变得格外懂事，再也不缠着妈妈熬夜陪我玩。每天晚上八点，我就自己洗漱好，爬上小床，等着妈妈给我讲一个短故事，然后乖乖睡觉。妈妈的身体，也慢慢有了好转。
选 2：跟爸爸一起分担家务
【立绘：主角 / 懂事、爸爸 / 稳重】
主角：爸爸，我要帮妈妈干活，让妈妈多休息！
【立绘：主角 / 懂事、妈妈 / 感动】
旁白：每天早上，我会帮妈妈递牙刷、挤牙膏；中午，我会帮妈妈擦桌子、摆碗筷；晚上，我会帮妈妈捶肩膀、揉胳膊。妈妈再也不用操心家务，每天都有足够的时间休息。
旁白：她的胸口再也没有出现过闷胀感，整个人都变得精神了。妈妈的乳腺世界里，营养液开始顺畅地流淌，乳头部位的细胞也慢慢舒展了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：懂事守护・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的金色光芒，那是小主人懂事的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本向内凹陷的乳头细胞，在光芒里慢慢舒展，鼓起来变成圆润可爱的样子；乳腺导管里的浑浊液滴不见了，换成清澈的营养液欢快流淌。
旁白：蜷缩的分泌细胞们舒展身体，身上的灰雾全散了，抱着营养液罐子在导管间蹦蹦跳跳；巨噬细胞们扛着吸尘器巡逻，淋巴细胞们吹着小喇叭穿梭，整个主城都是甜甜的笑声。
【立绘：主角 / 开心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳头内陷 BOSS 和乳头溢液 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳头内陷 BOSS：（虚弱消散，声音细弱）妈妈不劳累了，乳腺导管有弹性了…… 我撑不住啦……
乳头溢液 BOSS：（透明淡化，气息微弱）妈妈身心放松，分泌正常了…… 我要消失啦……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
派蒙：以后一直做懂事的孩子，让妈妈好好休息，乳腺主城就会一直平平安安，妈妈也能健健康康陪着你长大呀！
旁白：健康科普：妈妈长期熬夜劳累、情绪焦虑，会影响乳腺激素平衡，诱发乳头内陷、溢液等问题。让妈妈规律休息、保持开心，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？妈妈的身体很脆弱，她照顾你很辛苦，也需要好好休息。
派蒙：你的懂事不是不亲近妈妈，而是心疼她、不让她熬夜劳累，这才是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不任性粘人熬妈妈了，要做个懂事的孩子，守护妈妈的健康。
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:'给妈妈画一张 "爱心守护卡"，写上 "妈妈要好好休息，我会做懂事的孩子"，贴在妈妈的床头',type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：懂事守护・让妈安歇
【场景切换：妈妈的卧室】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：主动让妈妈休息后，我彻底改掉了任性的小毛病。当晚，我自己乖乖躺在小床上，很快就睡着了，没有再吵妈妈一下。妈妈终于能安心地躺下休息，胸口的闷胀感也慢慢减轻了。
旁白：第二天一早，我醒过来的第一件事，就是轻手轻脚地走到妈妈的床边，看到妈妈睡得很安稳，我没有吵醒她，而是自己去厨房，搬来小板凳，想给妈妈热一碗红枣粥。
旁白：接下来的几天，我变得格外懂事，再也不缠着妈妈熬夜陪我玩。每天晚上八点，我就自己洗漱好，爬上小床，等着妈妈给我讲一个短故事，然后乖乖睡觉。妈妈的身体，也慢慢有了好转。
选 3：给妈妈画爱心守护卡
【立绘：主角 / 懂事】
旁白：我拿出彩笔和画纸，认认真真地画了一张爱心守护卡。卡片上画着我和妈妈，还有一颗大大的红心，我让爸爸帮我写上："妈妈要好好休息，我会做懂事的孩子，守护妈妈的健康！"
【立绘：主角 / 懂事、妈妈 / 感动】
旁白：我把卡片贴在妈妈的床头，妈妈每天睡觉前看到这张卡片，都会笑得特别开心。她每天都会按时休息，再也不让自己劳累。妈妈的乳腺世界里，温暖的光芒慢慢笼罩下来。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：懂事守护・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的金色光芒，那是小主人懂事的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本向内凹陷的乳头细胞，在光芒里慢慢舒展，鼓起来变成圆润可爱的样子；乳腺导管里的浑浊液滴不见了，换成清澈的营养液欢快流淌。
旁白：蜷缩的分泌细胞们舒展身体，身上的灰雾全散了，抱着营养液罐子在导管间蹦蹦跳跳；巨噬细胞们扛着吸尘器巡逻，淋巴细胞们吹着小喇叭穿梭，整个主城都是甜甜的笑声。
【立绘：主角 / 开心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳头内陷 BOSS 和乳头溢液 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳头内陷 BOSS：（虚弱消散，声音细弱）妈妈不劳累了，乳腺导管有弹性了…… 我撑不住啦……
乳头溢液 BOSS：（透明淡化，气息微弱）妈妈身心放松，分泌正常了…… 我要消失啦……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
派蒙：以后一直做懂事的孩子，让妈妈好好休息，乳腺主城就会一直平平安安，妈妈也能健健康康陪着你长大呀！
旁白：健康科普：妈妈长期熬夜劳累、情绪焦虑，会影响乳腺激素平衡，诱发乳头内陷、溢液等问题。让妈妈规律休息、保持开心，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？妈妈的身体很脆弱，她照顾你很辛苦，也需要好好休息。
派蒙：你的懂事不是不亲近妈妈，而是心疼她、不让她熬夜劳累，这才是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不任性粘人熬妈妈了，要做个懂事的孩子，守护妈妈的健康。
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧任性，妈妈稍微好一点，就又缠着她陪玩，不肯让她彻底休息",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：任性依旧・熬坏妈妈
【场景切换：妈妈的卧室】
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：撒泼打滚缠着妈妈陪玩一整晚后，我依旧没有改掉任性的毛病。接下来的几天，我还是每天晚上缠着妈妈，不让她休息。要么让她陪我玩积木，要么让她讲五六个睡前故事，直到凌晨才肯睡觉。
旁白：妈妈的身体越来越差，胸口的闷胀感变成了持续的疼痛，乳头还出现了轻微的溢液，黏黏的，很不舒服。她每天都顶着黑眼圈，脸色苍白，连上班的力气都没有了。
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：有一天晚上，妈妈陪我玩的时候，突然捂着胸口，疼得说不出话来，眼泪都掉了下来。我吓得愣住了，这才意识到，自己真的熬坏了妈妈。可即便如此，我还是抱着一丝侥幸，觉得妈妈休息一下就好了。
选 1：依旧任性，妈妈稍好就缠着陪玩
【立绘：主角 / 任性、妈妈 / 疼痛】
妈妈：宝贝，妈妈今天真的不能陪你玩了，让妈妈好好休息一下，好不好？
主角：妈妈，你都好一点了，就陪我玩一会儿嘛，就一小会儿！
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：妈妈无奈，只能强撑着身体，陪我玩了起来。没玩五分钟，她就又捂着胸口，疼得直不起腰。我这才慌了，却还是不知道自己错在了哪里。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：任性依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深，像小小的黑洞；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
旁白：分泌细胞们裹着厚厚的黑雾，失去了光泽，连哭的力气都没有；乳腺导管变得僵硬，营养液再也流不动，整个主城都陷入脆弱的危机里。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳头内陷 BOSS 拖着细牵拉丝，死死拽着乳头细胞；乳头溢液 BOSS 粘稠浑浊，不停往外溢液滴，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳头内陷 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
乳头溢液 BOSS：（阴冷沙哑）妈妈长期劳累，分泌紊乱，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜劳累，会加重乳腺负担，导致乳头内陷、溢液等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性不是小毛病，会熬坏妈妈的身体，伤害她的乳腺世界。
派蒙：现在改还来得及！做懂事的孩子，提醒妈妈休息、帮妈妈分担，就能守护好妈妈的乳腺健康，让她一直陪着你。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头："我知道错了，以后一定好好守护妈妈！"
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`},{id:"be2",text:"看到妈妈疼得哭了，有点害怕，却还是要妈妈讲完故事，才肯让她躺下",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：任性依旧・熬坏妈妈
【场景切换：妈妈的卧室】
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：撒泼打滚缠着妈妈陪玩一整晚后，我依旧没有改掉任性的毛病。接下来的几天，我还是每天晚上缠着妈妈，不让她休息。要么让她陪我玩积木，要么让她讲五六个睡前故事，直到凌晨才肯睡觉。
旁白：妈妈的身体越来越差，胸口的闷胀感变成了持续的疼痛，乳头还出现了轻微的溢液，黏黏的，很不舒服。她每天都顶着黑眼圈，脸色苍白，连上班的力气都没有了。
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：有一天晚上，妈妈陪我玩的时候，突然捂着胸口，疼得说不出话来，眼泪都掉了下来。我吓得愣住了，这才意识到，自己真的熬坏了妈妈。可即便如此，我还是抱着一丝侥幸，觉得妈妈休息一下就好了。
选 2：看到妈妈哭，仍要听完故事
【立绘：主角 / 任性、妈妈 / 疼痛】
主角：妈妈，你别哭，你把这个故事讲完，我就乖乖睡觉，再也不闹你了。
旁白：妈妈强忍着疼痛，用颤抖的声音，给我讲完了故事。讲完后，她再也撑不住，倒在了床上，连话都说不出来了。我看着妈妈的样子，心里充满了恐惧，却依旧没有真正醒悟。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：任性依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深，像小小的黑洞；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
旁白：分泌细胞们裹着厚厚的黑雾，失去了光泽，连哭的力气都没有；乳腺导管变得僵硬，营养液再也流不动，整个主城都陷入脆弱的危机里。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳头内陷 BOSS 拖着细牵拉丝，死死拽着乳头细胞；乳头溢液 BOSS 粘稠浑浊，不停往外溢液滴，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳头内陷 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
乳头溢液 BOSS：（阴冷沙哑）妈妈长期劳累，分泌紊乱，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜劳累，会加重乳腺负担，导致乳头内陷、溢液等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性不是小毛病，会熬坏妈妈的身体，伤害她的乳腺世界。
派蒙：现在改还来得及！做懂事的孩子，提醒妈妈休息、帮妈妈分担，就能守护好妈妈的乳腺健康，让她一直陪着你。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头："我知道错了，以后一定好好守护妈妈！"
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`},{id:"be3",text:"妈妈想休息，却偷偷把动画片的声音开得很大，让妈妈根本睡不着",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：任性依旧・熬坏妈妈
【场景切换：妈妈的卧室】
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：撒泼打滚缠着妈妈陪玩一整晚后，我依旧没有改掉任性的毛病。接下来的几天，我还是每天晚上缠着妈妈，不让她休息。要么让她陪我玩积木，要么让她讲五六个睡前故事，直到凌晨才肯睡觉。
旁白：妈妈的身体越来越差，胸口的闷胀感变成了持续的疼痛，乳头还出现了轻微的溢液，黏黏的，很不舒服。她每天都顶着黑眼圈，脸色苍白，连上班的力气都没有了。
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：有一天晚上，妈妈陪我玩的时候，突然捂着胸口，疼得说不出话来，眼泪都掉了下来。我吓得愣住了，这才意识到，自己真的熬坏了妈妈。可即便如此，我还是抱着一丝侥幸，觉得妈妈休息一下就好了。
选 3：偷偷开大声动画片
【立绘：主角 / 任性、妈妈 / 疲惫】
旁白：妈妈实在撑不住，躺下休息了，我答应乖乖睡觉，却偷偷爬起来，打开了电视机，把动画片的声音开得很大。我觉得一个人看动画片没意思，想让妈妈起来陪我。
【立绘：主角 / 任性、妈妈 / 疼痛】
旁白：电视机的声音吵得妈妈根本睡不着，她捂着胸口，翻来覆去，脸色越来越苍白。最后，妈妈只能起来，关掉电视机，哄我睡觉。而她自己，却彻夜难眠，胸口的疼痛和溢液的不适，让她受尽了折磨。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 "跳过科普" 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 "迷你防护兵"。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 "快乐预警员"。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：那是营养核心塔，是主城的指挥中心！负责给所有细胞发指令、分营养 —— 妈妈累到熬夜的时候，它就会没力气工作啦！
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：任性依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深，像小小的黑洞；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
旁白：分泌细胞们裹着厚厚的黑雾，失去了光泽，连哭的力气都没有；乳腺导管变得僵硬，营养液再也流不动，整个主城都陷入脆弱的危机里。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳头内陷 BOSS 拖着细牵拉丝，死死拽着乳头细胞；乳头溢液 BOSS 粘稠浑浊，不停往外溢液滴，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳头内陷 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
乳头溢液 BOSS：（阴冷沙哑）妈妈长期劳累，分泌紊乱，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜劳累，会加重乳腺负担，导致乳头内陷、溢液等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅粉色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性不是小毛病，会熬坏妈妈的身体，伤害她的乳腺世界。
派蒙：现在改还来得及！做懂事的孩子，提醒妈妈休息、帮妈妈分担，就能守护好妈妈的乳腺健康，让她一直陪着你。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头："我知道错了，以后一定好好守护妈妈！"
旁白：记忆点 1 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`}],bossUnlocked:["nippleRetraction","nippleDischarge"],skillHE:{id:"accompanyCare",name:"陪伴关怀",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"willfulClingy",name:"任性粘人",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},2:{id:2,title:"熬夜学习，让妈牵挂",description:"熬夜学习，让妈牵挂",perspective:"child",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在软糯梦幻的大脑记忆中枢外层，四周漂浮着浅紫色的神经元光晕，像揉碎的葡萄软糖般轻轻晃动。一条条发光的记忆通道呈铅笔造型，泛着淡蓝色光泽，有序悬浮在半空。"},{id:"s5",speaker:"旁白",text:"幼年线的三个记忆入口以卡通书本为边框，字体圆润可爱，带着天蓝色描边，清晰排列在眼前：任性粘人，熬妈陪伴、熬夜学习，让妈牵挂、无知嘲笑，健康认知缺失。"},{id:"s6",speaker:"旁白",text:"我伸出胖乎乎的小手，指尖轻轻触碰到 “记忆点 2：熬夜学习，让妈牵挂” 这行发光文字。指尖刚接触，记忆通道瞬间迸发耀眼的淡蓝色光芒，翻涌成一串串带着星光的纸飞机，那段 9 岁那年期中考试前的深夜记忆，被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 软糯】"},{id:"s8",speaker:"派蒙",text:"小主人，我们要去妈妈的乳腺世界啦！你还记得 9 岁那年期中考试前的深夜吗？你为了考第一名，偷偷在房间里熬夜刷题到凌晨，妈妈一遍遍催你睡觉，你都嫌她烦，还把门反锁了。"},{id:"s9",speaker:"派蒙",text:"妈妈担心你的身体，又心疼你太拼，整夜没睡，一直守在房门外，长期的焦虑和熬夜，让她的乳腺世界出了大问题，催生了两个可怕的 BOSS—— 乳房硬块 BOSS 和腋下淋巴结肿大 BOSS！今天我们回去，就是要学会合理安排时间，不让妈妈再为你牵挂熬夜呀！"},{id:"s10",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 软糯、分泌细胞 / 疲惫】"},{id:"s11",speaker:"旁白",text:"话音刚落，几道微弱的淡蓝色光影从记忆通道口飘出，那是妈妈乳腺世界里的细胞们，它们紧紧缩在一起，乳房部位的细胞凝成团状，腋下的淋巴细胞肿成小小的圆球。"},{id:"s12",speaker:"分泌细胞",text:"小主人，妈妈好担心你呀…… 她整夜没睡，我们又胀又疼…… 你别再熬夜啦……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 郑重、分泌细胞 / 疲惫】"},{id:"s14",speaker:"派蒙",text:"小主人，你看！这就是妈妈的乳腺世界！因为你熬夜学习，让妈妈牵挂失眠，才催生了这两个 BOSS—— 乳房硬块 BOSS 和腋下淋巴结肿大 BOSS！今天我们必须重新做出选择，合理安排时间，才能驱散它们！"},{id:"s15",speaker:"舞台指示",text:"【立绘：主角 / 懂事、派蒙 / 郑重】"},{id:"s16",speaker:"旁白",text:"我攥紧小小的拳头，鼻子酸酸的，看着那些难受的小细胞，重重地点了点头，用稚嫩的声音说：“我知道了，这次我要早睡，不让妈妈再担心了！”"},{id:"s17",speaker:"旁白",text:"眼前的记忆之门彻底敞开，一股熟悉的、夹杂着妈妈煮的热牛奶香气与深夜灯光的气息扑面而来，我被瞬间拉回了当年，那个飘着细雨的深夜，我的书房里，台灯亮得刺眼，我正趴在书桌前，奋笔疾书地刷着数学题。"},{id:"s18",speaker:"第一幕",text:"深夜书房里・熬夜抉择（5 选 1 并联选项）"},{id:"s19",speaker:"舞台指示",text:"【场景切换：书房】"},{id:"s20",speaker:"舞台指示",text:"【立绘：主角 / 固执】"},{id:"s21",speaker:"旁白",text:"深秋的深夜，窗外飘着蒙蒙细雨，雨点敲打着窗户，发出 “滴答滴答” 的声响。我的书房里，白色的台灯把书桌照得亮堂堂的，书桌上堆满了语文、数学、英语的复习资料，还有一摞没做完的试卷。"},{id:"s22",speaker:"旁白",text:"9 岁的我，穿着白色的睡衣，外面套了一件小外套，眼睛紧紧盯着试卷上的奥数题，眉头皱成了 “川” 字。明天就是期中考试，我暗下决心一定要考全班第一名，偷偷定了凌晨一点的闹钟，打算熬夜把所有复习资料再过一遍。"},{id:"s23",speaker:"舞台指示",text:"【立绘：主角 / 固执、妈妈 / 疲惫】"},{id:"s24",speaker:"旁白",text:"墙上的挂钟已经指向了晚上十一点半，书房的门被轻轻推开，妈妈端着一杯热牛奶走了进来，她的眼睛里带着浓浓的疲惫，脚步轻轻的，生怕打扰到我。"},{id:"s25",speaker:"妈妈",text:"宝贝，已经十一点半了，该睡觉了。熬夜学习效率不高，还伤身体，明天早上早起再复习，好不好？"},{id:"s26",speaker:"舞台指示",text:"【立绘：主角 / 固执、妈妈 / 疲惫】"},{id:"s27",speaker:"主角",text:"妈妈，你别管我！我还没复习完呢，明天就要考试了，我必须考第一名！你快出去，别打扰我做题！"},{id:"s28",speaker:"舞台指示",text:"【立绘：主角 / 固执、妈妈 / 失落】"},{id:"s29",speaker:"旁白",text:"妈妈的手僵在半空，眼神里闪过一丝失落，又很快被担忧取代。她看着我布满红血丝的眼睛，又看了看桌上堆成山的资料，轻轻叹了口气：“宝贝，妈妈不是不让你学习，可你这样熬夜，身体会吃不消的。而且妈妈看着你这样，心里也着急，根本睡不着啊。”"},{id:"s30",speaker:"主角",text:"我不管！"},{id:"s31",speaker:"旁白",text:"我猛地抬起头，把铅笔往桌上一摔，说完，我伸手把书房的门关上，还 “咔哒” 一声反锁了。妈妈在门外轻轻敲了敲门，柔声劝了几句，见我没有回应，只能无奈地走回客厅。"}],firstChoices:[{id:"c1",text:"听到妈妈的叹息，打开门，接过热牛奶，答应妈妈立刻洗漱睡觉",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “听到妈妈的叹息，打开门答应立刻睡觉”
【立绘：主角 / 懂事、妈妈 / 疲惫】
旁白：我刚反锁房门，就听到门外妈妈轻轻的叹息声，那声音里的疲惫和担忧，像小针一样扎在我心上。我手里的铅笔瞬间停住，心里的倔强慢慢消散，取而代之的是满满的愧疚。
主角：妈妈，对不起，我不该对你发脾气。你说的对，熬夜学习效率不高，我现在就去洗漱睡觉。
【立绘：主角 / 懂事、妈妈 / 感动】
妈妈：宝贝乖，喝了牛奶，好好睡一觉，明天精神饱满地去考试，比熬夜复习更有用。
旁白：我接过牛奶，大口喝了下去，然后跟着妈妈去洗漱，乖乖爬上床，很快就进入了梦乡。妈妈看着我熟睡的样子，终于放下心来，回到房间安心休息了。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人，你太懂事啦！这就是最正确的选择！不让妈妈为你牵挂熬夜，就是在守护她的乳腺世界，乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 再也没有机会长大啦！
【剧情跳转：直接进入第二幕 HE 主线 “合理规划・让妈安心”】`},{id:"c2",text:"心疼妈妈，却还是想复习，提出再学三十分钟，定好闹钟，时间到就睡觉",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “心疼妈妈，提出再学三十分钟”
【立绘：主角 / 懂事、妈妈 / 疲惫】
主角：妈妈，我再学三十分钟，就三十分钟，定好闹钟，时间到我就立刻睡觉，好不好？
妈妈：好，一定要说话算话，别超时哦。
【立绘：主角 / 懂事】
旁白：我回到书桌前，定好三十分钟的闹钟，专心复习重点内容。闹钟响了，我立刻合上书，收拾好书包，去洗漱睡觉。妈妈坐在客厅等我，看到我遵守承诺，欣慰地笑了，跟着我一起回房间休息了。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人，你已经很棒啦，懂得心疼妈妈又能坚持复习！下次可以更早一点休息，妈妈的身体经不起长时间的牵挂！
【剧情跳转：直接进入第二幕 HE 主线 “合理规划・让妈安心”】`},{id:"c3",text:"依旧固执，反锁房门，把台灯调暗，继续刷题到凌晨一点",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “依旧固执，反锁房门刷题到凌晨”
【立绘：主角 / 固执】
旁白：我对妈妈的劝说充耳不闻，反锁房门后，还把台灯调暗，生怕妈妈再进来。我盯着试卷，拼命刷题，一道题不会就反复琢磨，连眼睛酸了、脖子僵了都不在意。
旁白：墙上的挂钟一圈圈转动，从十一点半到了十二点，又到了凌晨一点。我终于把复习资料过了一遍，趴在桌上揉了揉眼睛，却丝毫没有察觉，客厅里的妈妈，一直坐在沙发上看着我的书房方向，一夜没睡。
【立绘：主角 / 固执】
旁白：她时不时轻轻揉着胸口，眉头紧锁，胸口的胀痛感越来越强烈，腋下也开始隐隐作痛。直到我凌晨一点爬上床睡觉，客厅的灯才熄灭。妈妈拖着疲惫的身体回到房间，却因为胸口的不适，依旧辗转难眠。
【立绘：主角 / 固执】
派蒙（意识音）：小主人，你怎么能这么固执呀！妈妈为了你，一夜没睡，都快撑不住了！你这样让她牵挂熬夜，乳腺世界里的 BOSS 就要开始苏醒啦，快醒醒！
【剧情跳转：直接进入第二幕 BE 主线 “固执依旧・让妈煎熬”】`},{id:"c4",text:"口头答应睡觉，等妈妈回房间后，又偷偷打开台灯，复习到深夜",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “口头答应睡觉，又偷偷开灯复习”
【立绘：主角 / 懂事、妈妈 / 疲惫】
主角：妈妈，我听你的，现在就去睡觉。
旁白：妈妈放心地回了房间，我却悄悄把门留了一条缝，等听到妈妈房间的灯熄灭后，又偷偷爬起来，打开台灯，继续复习。我怕妈妈发现，把台灯调得很暗，连翻书都小心翼翼。
【立绘：主角 / 固执】
旁白：可我没想到，妈妈因为心里牵挂，根本没睡踏实，听到书房里的细微声响，又悄悄起来，站在门外看着我，直到我凌晨十二点半才睡觉，她才又默默回到沙发上，一夜无眠。
【立绘：主角 / 固执】
派蒙（意识音）：小主人，心口不一可不好哦！妈妈因为牵挂你，根本睡不踏实，你这样偷偷熬夜，只会让她的身体更糟，乳腺世界的隐患也会越来越大！
【剧情跳转：直接进入第二幕 BE 主线 “固执依旧・让妈煎熬”】`},{id:"c5",text:"让妈妈进来，和妈妈一起制定复习计划，先睡一觉，明天早起高效复习",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “让妈妈进来，一起制定计划早起复习”
【立绘：主角 / 懂事、妈妈 / 疲惫】
主角：妈妈，我想考第一名，所以想多复习一会儿，可我也不想让你担心。
妈妈：这些重点明天早上早起花一个小时复习，效率比现在熬夜高多了。我们定好早上六点的闹钟，现在先睡觉，好不好？
【立绘：主角 / 懂事】
旁白：我点了点头，和妈妈一起收拾好书包，然后去洗漱睡觉。妈妈看着我躺下，才回房间休息，虽然还是有点牵挂，但终于能安心睡上一会儿了。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人，你太聪明啦！和妈妈一起制定计划，既不耽误复习，又不让妈妈牵挂，乳腺世界的小细胞们都在为你点赞呢！
【剧情跳转：直接进入第二幕 HE 主线 “合理规划・让妈安心”】`}],secondChoicesHE:[{id:"he1",text:"主动给妈妈捏肩捶背，告诉她自己的复习进度，让她彻底放心",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：合理规划・让妈安心
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：答应妈妈立刻睡觉后，我彻底改掉了熬夜学习的毛病，还学会了合理规划复习时间。接下来的几天，我每天放学回家，先完成作业，再按照妈妈帮我制定的复习计划，分时段复习各科内容，晚上九点半就准时洗漱睡觉，再也不熬夜。
旁白：妈妈看到我这样，心里的牵挂少了很多，每天晚上都能安心入睡，胸口的胀痛感也慢慢消失了，脸上的笑容越来越多，整个人都变得精神了。
选 1：主动给妈妈捏肩捶背，告知复习进度
【立绘：主角 / 懂事、妈妈 / 感动】
旁白：吃完晚饭，我主动拉着妈妈坐在沙发上，小手攥成拳头，轻轻给妈妈捏肩捶背。一边捶，一边跟妈妈说：“妈妈，我的语文生字都背熟了，数学奥数题也练了好几遍，英语单词都能默写下来，明天考试我有信心，你别再为我担心啦！”
妈妈：宝贝长大了，懂得让妈妈放心了。
旁白：在我的捶打下，妈妈的身体放松了很多，晚上睡得格外香甜。妈妈的乳腺世界里，那些凝成团的细胞，慢慢开始舒展了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：合理规划・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的橙黄色光芒，那是我合理规划时间、让妈妈安心的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本凝聚成硬块的乳房细胞，在光芒里慢慢散开，一点点恢复圆润饱满的模样；腋下肿大的淋巴细胞，渐渐缩小，淋巴通道重新变得畅通，营养液和代谢废物开始顺畅循环。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房硬块 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳房硬块 BOSS：（虚弱消散，声音细弱）妈妈不再焦虑，乳腺组织恢复正常增生，硬块慢慢消散…… 我，再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）妈妈身心放松，淋巴循环恢复通畅，肿大消退…… 我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
旁白：健康科普：妈妈长期熬夜牵挂、情绪焦虑，会影响乳腺激素平衡，诱发乳房硬块、腋下淋巴结肿大等问题。合理安排时间、让妈妈安心休息，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？学习很重要，但妈妈的健康更重要。你合理安排时间，不让妈妈牵挂熬夜，就是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不熬夜学习让妈妈担心了，要做个自律的孩子，守护妈妈的健康。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"和妈妈一起制定 “早睡早起计划表”，严格执行，不再熬夜",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：合理规划・让妈安心
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：答应妈妈立刻睡觉后，我彻底改掉了熬夜学习的毛病，还学会了合理规划复习时间。接下来的几天，我每天放学回家，先完成作业，再按照妈妈帮我制定的复习计划，分时段复习各科内容，晚上九点半就准时洗漱睡觉，再也不熬夜。
旁白：妈妈看到我这样，心里的牵挂少了很多，每天晚上都能安心入睡，胸口的胀痛感也慢慢消失了，脸上的笑容越来越多，整个人都变得精神了。
选 2：和妈妈一起制定早睡早起计划表
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：我找来一张白纸，和妈妈一起画了 “早睡早起计划表”，上面写着：晚上八点，完成作业；晚上八点到九点，复习重点；晚上九点，洗漱；晚上九点半，准时睡觉；早上六点，起床复习；早上七点，吃早饭。
旁白：我把计划表贴在书桌前，每天都严格执行，再也没有拖延。妈妈看着我自律的样子，心里的石头彻底落地，每天都能按时休息，再也没有为我熬夜牵挂。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：合理规划・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的橙黄色光芒，那是我合理规划时间、让妈妈安心的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本凝聚成硬块的乳房细胞，在光芒里慢慢散开，一点点恢复圆润饱满的模样；腋下肿大的淋巴细胞，渐渐缩小，淋巴通道重新变得畅通，营养液和代谢废物开始顺畅循环。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房硬块 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳房硬块 BOSS：（虚弱消散，声音细弱）妈妈不再焦虑，乳腺组织恢复正常增生，硬块慢慢消散…… 我，再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）妈妈身心放松，淋巴循环恢复通畅，肿大消退…… 我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
旁白：健康科普：妈妈长期熬夜牵挂、情绪焦虑，会影响乳腺激素平衡，诱发乳房硬块、腋下淋巴结肿大等问题。合理安排时间、让妈妈安心休息，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？学习很重要，但妈妈的健康更重要。你合理安排时间，不让妈妈牵挂熬夜，就是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不熬夜学习让妈妈担心了，要做个自律的孩子，守护妈妈的健康。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"考试当天早起复习，轻手轻脚不吵醒妈妈，让她多睡一会儿",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：合理规划・让妈安心
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：答应妈妈立刻睡觉后，我彻底改掉了熬夜学习的毛病，还学会了合理规划复习时间。接下来的几天，我每天放学回家，先完成作业，再按照妈妈帮我制定的复习计划，分时段复习各科内容，晚上九点半就准时洗漱睡觉，再也不熬夜。
旁白：妈妈看到我这样，心里的牵挂少了很多，每天晚上都能安心入睡，胸口的胀痛感也慢慢消失了，脸上的笑容越来越多，整个人都变得精神了。
选 3：考试当天早起复习，不吵醒妈妈
【立绘：主角 / 懂事、妈妈 / 欣慰】
旁白：考试当天早上，闹钟一响，我就轻手轻脚地起床，生怕吵醒妈妈。我走到客厅，拿出复习资料，小声地背诵重点，洗漱、吃早饭也都尽量放轻动作。
旁白：妈妈醒来时，我已经复习完了，正背着书包准备出门。妈妈看着我，眼里满是欣慰：“宝贝，你真懂事，还知道让妈妈多睡一会儿。” 带着妈妈的鼓励，我开开心心地去参加考试了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：合理规划・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺世界上空，突然亮起一道温暖的橙黄色光芒，那是我合理规划时间、让妈妈安心的心意变的！光芒慢慢落下，把灰雾一点点驱散，照亮了每一个角落。
旁白：原本凝聚成硬块的乳房细胞，在光芒里慢慢散开，一点点恢复圆润饱满的模样；腋下肿大的淋巴细胞，渐渐缩小，淋巴通道重新变得畅通，营养液和代谢废物开始顺畅循环。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房硬块 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处两道淡淡的灰影飘过来 —— 是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS！可它们一碰到金色光芒，就变得越来越淡，因为妈妈好好休息了，它们没有了生长的能量。
乳房硬块 BOSS：（虚弱消散，声音细弱）妈妈不再焦虑，乳腺组织恢复正常增生，硬块慢慢消散…… 我，再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）妈妈身心放松，淋巴循环恢复通畅，肿大消退…… 我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人太棒啦！因为你懂事不闹妈妈，两个 BOSS 都被驱散啦！妈妈的乳腺世界恢复温柔生机啦！
旁白：健康科普：妈妈长期熬夜牵挂、情绪焦虑，会影响乳腺激素平衡，诱发乳房硬块、腋下淋巴结肿大等问题。合理安排时间、让妈妈安心休息，是守护乳腺健康的重要方式哦！
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，金色光芒和欢快的笑声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，这段记忆是不是让你懂啦？学习很重要，但妈妈的健康更重要。你合理安排时间，不让妈妈牵挂熬夜，就是对妈妈最好的爱。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点头，擦了擦眼角，心里暗暗发誓：以后再也不熬夜学习让妈妈担心了，要做个自律的孩子，守护妈妈的健康。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧熬夜，妈妈劝一句，就跟妈妈发脾气，让她别管自己",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：固执依旧・让妈煎熬
【场景切换：客厅】
【立绘：主角 / 固执、妈妈 / 疼痛】
旁白：熬夜刷题到凌晨后，我依旧没有学会合理规划时间，反而变本加厉。接下来的几天，每天晚上都熬夜到凌晨，不管妈妈怎么劝，我都听不进去，还总说：“我要考第一名，熬夜是应该的！”
旁白：妈妈的身体越来越差，胸口的胀痛感变成了持续的疼痛，用手一摸，能感觉到硬硬的小肿块，腋下的淋巴结也肿了起来，按下去格外疼。她每天都顶着黑眼圈，脸色蜡黄，连做饭、洗衣服的力气都没有了。
选 1：依旧熬夜，跟妈妈发脾气
【立绘：主角 / 固执、妈妈 / 疼痛】
妈妈：宝贝，快睡吧，别熬了，身体重要。
主角：我说了别管我！你再烦我，我考不好都是你的错！
旁白：妈妈被我的话吓到了，愣在原地，胸口的疼痛瞬间加剧，她捂着胸口，眼泪忍不住掉了下来。我却关上房门，继续复习，丝毫没有在意妈妈的感受。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：固执依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳房硬块 BOSS 拖着硬疙瘩，死死压着乳房细胞；腋下淋巴结肿大 BOSS 肿成一串，堵死淋巴通道，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳房硬块 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
腋下淋巴结肿大 BOSS：（阴冷沙哑）妈妈长期劳累，淋巴堵塞，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜牵挂，会加重乳腺负担，导致乳房硬块、腋下淋巴结肿大等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性熬夜不是努力，会熬坏妈妈的身体，伤害她的乳腺世界。现在改还来得及，做懂事的孩子，就能守护好妈妈。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头：“我知道错了，以后一定好好守护妈妈！”
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be2",text:"看到妈妈疼得蹲在地上，依旧坚持复习完，才肯让妈妈去休息",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：固执依旧・让妈煎熬
【场景切换：客厅】
【立绘：主角 / 固执、妈妈 / 疼痛】
旁白：熬夜刷题到凌晨后，我依旧没有学会合理规划时间，反而变本加厉。接下来的几天，每天晚上都熬夜到凌晨，不管妈妈怎么劝，我都听不进去，还总说：“我要考第一名，熬夜是应该的！”
旁白：妈妈的身体越来越差，胸口的胀痛感变成了持续的疼痛，用手一摸，能感觉到硬硬的小肿块，腋下的淋巴结也肿了起来，按下去格外疼。她每天都顶着黑眼圈，脸色蜡黄，连做饭、洗衣服的力气都没有了。
选 2：看到妈妈疼，仍坚持复习完
【立绘：主角 / 固执、妈妈 / 疼痛】
妈妈：宝贝，妈妈好疼，你能先陪我休息一会儿吗？
主角：妈妈，我再复习完这一页，就陪你休息，就一页！
旁白：我回到书房，又复习了半个多小时，才走出来。妈妈已经疼得站不起来了，只能靠在沙发上，看到我出来，勉强挤出一丝笑容：“宝贝复习完就好。”
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：固执依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳房硬块 BOSS 拖着硬疙瘩，死死压着乳房细胞；腋下淋巴结肿大 BOSS 肿成一串，堵死淋巴通道，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳房硬块 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
腋下淋巴结肿大 BOSS：（阴冷沙哑）妈妈长期劳累，淋巴堵塞，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜牵挂，会加重乳腺负担，导致乳房硬块、腋下淋巴结肿大等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性熬夜不是努力，会熬坏妈妈的身体，伤害她的乳腺世界。现在改还来得及，做懂事的孩子，就能守护好妈妈。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头：“我知道错了，以后一定好好守护妈妈！”
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be3",text:"为了多复习，连晚饭都不吃，让妈妈一遍遍端来端去，加重她的负担",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：固执依旧・让妈煎熬
【场景切换：客厅】
【立绘：主角 / 固执、妈妈 / 疼痛】
旁白：熬夜刷题到凌晨后，我依旧没有学会合理规划时间，反而变本加厉。接下来的几天，每天晚上都熬夜到凌晨，不管妈妈怎么劝，我都听不进去，还总说：“我要考第一名，熬夜是应该的！”
旁白：妈妈的身体越来越差，胸口的胀痛感变成了持续的疼痛，用手一摸，能感觉到硬硬的小肿块，腋下的淋巴结也肿了起来，按下去格外疼。她每天都顶着黑眼圈，脸色蜡黄，连做饭、洗衣服的力气都没有了。
选 3：不吃晚饭，让妈妈端来端去
【立绘：主角 / 固执、妈妈 / 疲惫】
旁白：为了多挤出时间复习，我晚饭也不肯吃，妈妈做好了饭菜，一遍遍端到书房，我都摆摆手说：“不吃，没时间！” 妈妈怕我饿坏了，又特意煮了面条，端到我面前，我却不耐烦地把面条推到一边，面条洒在了地上。
旁白：妈妈默默收拾好地上的面条，又重新煮了一碗，端到厨房温着，等我复习完再吃。来来回回的折腾，让妈妈的胸口和腋下疼得更厉害了，她靠在厨房门口，连呼吸都变得困难。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：小主人，我们现在去妈妈的乳腺世界看看！不想听我介绍的话，点右上角跳过就好啦！
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 软糯】
旁白：我没有点跳过，跟着派蒙走进主城。这里像一片软软的粉色棉花糖平原，踩上去弹弹的。乳腺导管像彩色吸管一样横跨天空，里面的营养液哗啦啦地流，分泌细胞坐着小小的糖果飞船来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 小巧】
派蒙：看好啦！这些是巨噬细胞小卫士！他们是主城的清洁工，扛着迷你吸尘器，看到坏东西就吸干净！
巨噬细胞：小主人好呀！我们会保护妈妈的乳腺世界哦！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “迷你防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 欢快】
派蒙：那是淋巴细胞小信使！她们拿着小喇叭，看到异常就吹喇叭报警，召唤小伙伴来帮忙！
淋巴细胞：小主人要好好守护妈妈呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “快乐预警员”。
【立绘：主角 / 好奇、派蒙 / 郑重】
派蒙：小主人，你看！妈妈乳腺世界里的细胞们，因为妈妈的牵挂熬夜，有的凝成团、有的肿起来，这就是乳房硬块 BOSS 和腋下淋巴结肿大 BOSS 的雏形呀！
旁白：字幕科普（淡蓝色警示框，字体圆润）：乳房硬结节是乳腺异常增生的直观表现，腋下淋巴结肿大是乳腺炎症加重或结节恶变的重要信号。老年女性乳腺组织机能下降，隐瞒病情、拖延就医，会导致结节持续恶化，淋巴结转移风险大幅提升。
【立绘：主角 / 好奇、派蒙 / 软糯】
派蒙：记住了没？现在带你看，你选的路，把妈妈的乳腺世界变成什么样啦！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：固执依旧・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺世界上空，灰雾变得浓稠，变成粉黑色的黑雾，遮天蔽日，连一点光都透不进来。压抑的气息像潮水一样，让人心里酸酸的。
旁白：乳头细胞被死死牵拉着，凹陷得越来越深；乳腺导管里的浑浊溢液不断流出来，变成黑雾的燃料，滴在地上发出细微的声响。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：黑雾中心，两道小小的黑影站直身体 —— 乳房硬块 BOSS 拖着硬疙瘩，死死压着乳房细胞；腋下淋巴结肿大 BOSS 肿成一串，堵死淋巴通道，它们睁开冰冷的小眼睛，发出低沉的咆哮。
乳房硬块 BOSS：（冰冷低沉）你一直任性熬妈妈，导管越来越硬，我要占领这里！
腋下淋巴结肿大 BOSS：（阴冷沙哑）妈妈长期劳累，淋巴堵塞，你的乳腺世界归我啦！
派蒙：（颤抖哭喊）小主人…… 它们彻底觉醒了…… 妈妈的乳腺世界快撑不住了…… 再这样下去，妈妈会生病，不能好好陪你了……
旁白：健康科普：长期让妈妈熬夜牵挂，会加重乳腺负担，导致乳房硬块、腋下淋巴结肿大等问题加重。做懂事的孩子，不让妈妈过度劳累，才能守护妈妈的乳腺健康。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面慢慢消散，粉黑色黑雾和 BOSS 的咆哮声渐渐远去，我重新回到软糯梦幻的大脑记忆中枢，四周依旧飘着浅紫色的神经元光晕。
派蒙：小主人，你知道错了对不对？任性熬夜不是努力，会熬坏妈妈的身体，伤害她的乳腺世界。现在改还来得及，做懂事的孩子，就能守护好妈妈。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点头，眼泪掉了下来，紧紧攥着小拳头：“我知道错了，以后一定好好守护妈妈！”
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["breastLump","nippleDischarge"],skillHE:{id:"reasonableSchedule",name:"合理安排",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"stubbornStudy",name:"固执熬夜",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},3:{id:3,title:"无知嘲笑，健康认知缺失",description:"无知嘲笑，健康认知缺失",perspective:"child",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个幼年专属记忆入口：任性粘人，熬妈陪伴、熬夜学习，让妈牵挂、无知嘲笑，健康认知缺失。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖轻轻触碰记忆点 3：无知嘲笑，健康认知缺失这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始缓缓扭曲流动，那段因自己年幼无知、随口的话语戳中妈妈心事，让妈妈愈发消沉的记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 软糯】"},{id:"s8",speaker:"派蒙",text:"小主人！终于要面对这段记忆啦！你还记得吗？就是因为你当年不懂事，看到妈妈的乳房变化随口说了些话，偏偏妈妈正因为乳腺的问题自卑难过，你的话让她更消沉了，乳腺主城的情况也越来越不好，催生了两个可怕的症状 BOSS 哦！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个小小的分泌细胞，蔫蔫地从记忆通道口飘出来，它们身上沾着淡淡的灰雾，原本光滑的细胞膜变得皱巴巴的，连带着周围的结缔组织也跟着蜷缩起来，一个个耷拉着脑袋。"},{id:"s11",speaker:"分泌细胞",text:"小主人…… 妈妈的身体好难受…… 她总偷偷哭，我们也跟着提不起劲…… 你别再随便说妈妈啦，陪陪她好不好……"},{id:"s12",speaker:"舞台指示",text:"【立绘：主角 / 心疼、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s13",speaker:"派蒙",text:"小主人你都看到了吧？这就是你当年不懂事的小话，给妈妈的乳腺主城带来的伤害！妈妈本身因为乳腺问题就很自卑，你的无心之语让她更难过，直接催生了两个病灶 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！"},{id:"s14",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确的选择，不然这两个 BOSS 会越来越强，最后彻底占领妈妈的乳腺主城的！"},{id:"s15",speaker:"舞台指示",text:"【立绘：主角 / 懂事、派蒙 / 郑重】"},{id:"s16",speaker:"旁白",text:"我攥紧小拳头，心里酸酸的，重重地点了点头。眼前的记忆之门彻底敞开，一股熟悉的、夹杂着妈妈叹气声的气息扑面而来，我被瞬间拉回了当年，那个周末的午后，妈妈坐在卧室床边，对着镜子偷偷抹眼泪的瞬间。"},{id:"s17",speaker:"第一幕",text:"周末午后的卧室・无知抉择（5 选 1 并联选项）"},{id:"s18",speaker:"舞台指示",text:"【场景切换：卧室】"},{id:"s19",speaker:"舞台指示",text:"【立绘：主角 / 懵懂、妈妈 / 难过】"},{id:"s20",speaker:"旁白",text:"周末的午后，阳光透过窗帘的缝隙洒进卧室，落在铺着碎花床单的床上，空气中飘着妈妈常用的栀子花香水味，却盖不住一丝淡淡的压抑。我攥着新买的卡通贴纸，蹦蹦跳跳地冲进卧室找妈妈贴贴纸。"},{id:"s21",speaker:"旁白",text:"一推开门，就看到妈妈背对着我坐在床边，对着梳妆镜的小镜子，轻轻扒着自己的衣服，低头看着胸口，肩膀微微耸动，有亮晶晶的泪珠从她的眼角掉下来，砸在衣服上，晕开小小的湿痕。"},{id:"s22",speaker:"舞台指示",text:"【立绘：主角 / 懵懂、妈妈 / 难过】"},{id:"s23",speaker:"旁白",text:"我愣了一下，放慢脚步走到妈妈身边，踮着脚尖凑过去看镜子，镜子里映出妈妈的乳房，原本光滑的皮肤变得皱巴巴的，还有一块地方陷进去小小的坑，像脸上的小酒窝。"},{id:"s24",speaker:"主角",text:"妈妈，你的胸怎么变成这样啦？皱巴巴的像奶奶家晒的橘子皮，还有小坑坑，好丑哦。"},{id:"s25",speaker:"舞台指示",text:"【立绘：主角 / 懵懂、妈妈 / 委屈】"},{id:"s26",speaker:"旁白",text:"妈妈的身体猛地僵住，像被针扎了一样，迅速拉上衣服，把镜子塞到枕头底下，慌忙擦了擦眼泪，转过身勉强挤出一个笑，揉了揉我的头：“宝宝瞎说什么呢，妈妈这是不小心磕到了，过几天就好啦。”"},{id:"s27",speaker:"旁白",text:"可我看得清清楚楚，妈妈的眼睛红红的，嘴角往下撇着，一点都不开心，连抱我的力气都变得轻轻的，再也没有以前那种暖暖的、紧紧的感觉。"}],firstChoices:[{id:"c1",text:"意识到妈妈不开心，立刻抱住妈妈的胳膊，说自己说错话了，哄妈妈开心",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “立刻抱妈妈道歉，哄妈妈开心”
【立绘：主角 / 懂事、妈妈 / 委屈】
主角：妈妈对不起，宝宝说错话了，妈妈一点都不丑，妈妈是世界上最美的妈妈！宝宝再也不乱说了，妈妈别难过好不好？
【立绘：主角 / 懂事、妈妈 / 感动】
旁白：妈妈愣了一下，低头看着抱着自己的我，眼睛里又泛起了泪光，却不是难过的泪，她轻轻摸了摸我的头，把我搂进怀里，下巴抵着我的头顶，声音软软的：“我的宝宝长大了，懂事了。”
主角：妈妈看，小兔子贴纸，贴在妈妈身上最好看啦！
旁白：我窝在妈妈的怀里，小手轻轻拍着妈妈的背，像妈妈平时哄我那样，还把手里最漂亮的小兔子贴纸贴在妈妈的衣服上。妈妈看着衣服上的小兔子，终于笑了出来，眼角的泪珠还挂着，可笑容暖暖的。
【立绘：主角 / 懂事】
派蒙（意识音）：小主人真棒！这才是最懂事的选择呀！一句道歉和安慰，就能驱散妈妈心里的乌云，乳腺主城的小细胞们也跟着开心起来啦，BOSS 就没办法长大咯！
【剧情跳转：直接进入第二幕 HE 主线 “贴心陪伴・驱散阴霾”】`},{id:"c2",text:"虽然不懂为什么妈妈难过，但乖乖坐在妈妈身边，安安静静陪她贴贴纸",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “乖乖坐在妈妈身边陪她贴贴纸”
【立绘：主角 / 懵懂、妈妈 / 委屈】
旁白：我虽然还是不太明白，为什么自己说一句话妈妈就这么难过，但看着妈妈不开心的样子，我也没心思闹了，乖乖坐在妈妈身边，把手里的卡通贴纸都推到妈妈面前，安安静静地看着妈妈，不说话也不闹腾。
【立绘：主角 / 懵懂、妈妈 / 温柔】
旁白：妈妈看了看我，轻轻拿起一张贴纸，慢慢贴在我的手背上，我咧着嘴笑了，妈妈也跟着笑了笑，虽然笑容还是淡淡的，却没有再掉眼泪。
旁白：我们就这样安安静静地贴了一下午贴纸，妈妈偶尔会轻轻摸一摸我的头，偶尔会对着贴纸发呆，却再也没有偷偷难过，家里的气氛慢慢变得轻松起来。
【立绘：主角 / 懵懂】
派蒙（意识音）：小主人真乖！安安静静的陪伴也是一种温暖呀，妈妈感受到你的贴心，心里的难过会少很多，乳腺主城的压力也会慢慢减轻，BOSS 的生长会变慢很多哦！
【剧情跳转：直接进入第二幕 HE 主线 “贴心陪伴・驱散阴霾”】`},{id:"c3",text:"还是觉得自己没说错，撅着嘴走开，继续去客厅看动画片，不理妈妈",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “撅着嘴走开，去客厅看动画片”
【立绘：主角 / 任性、妈妈 / 委屈】
主角：妈妈真小气，我说错话了还不理我，我不跟你玩了！
旁白：我撅着小嘴，心里觉得很委屈，我说的都是实话，妈妈为什么要生气呀？我跺了跺脚，把卡通贴纸扔在床边，气呼呼地转身跑出卧室，一头扎进客厅的沙发里，打开动画片看得津津有味，把妈妈难过的样子忘在了脑后。
【立绘：主角 / 任性】
旁白：我能听到卧室里，妈妈轻轻的叹气声，一声又一声，像小锤子敲在心上，可我还是犟着脾气，不肯进去跟妈妈道歉。那天下午，妈妈一直待在卧室里，没有出来吃饭，也没有出来陪我。
【立绘：主角 / 任性】
派蒙（意识音）：小主人，你怎么能这样呢？妈妈本来就因为乳腺的问题很自卑，你的犟脾气会让妈妈更难过的！乳腺主城的小细胞们也跟着伤心了，灰雾越来越浓，BOSS 就要开始长大啦，快进去跟妈妈道歉吧！
【剧情跳转：直接进入第二幕 BE 主线 “无知任性・加重阴霾”】`},{id:"c4",text:"跑去告诉爸爸，说妈妈偷偷哭了，让爸爸来安慰妈妈",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “跑去告诉爸爸，让爸爸来安慰妈妈”
【立绘：主角 / 懵懂、爸爸 / 稳重】
主角：爸爸爸爸，妈妈在卧室里哭了，她的胸口变丑了，还偷偷抹眼泪，你快去哄哄妈妈吧！
【立绘：主角 / 懵懂、爸爸 / 严肃】
旁白：爸爸听完，脸色一下子变得严肃起来，放下手里的报纸，快步走进卧室，轻轻坐在妈妈身边，把妈妈搂进怀里，低声跟妈妈说着什么。
【立绘：主角 / 懵懂、妈妈 / 温柔】
旁白：我趴在卧室门口偷偷看，看到爸爸轻轻拍着妈妈的背，妈妈靠在爸爸的怀里，慢慢止住了眼泪。过了一会儿，爸爸走出来，揉了揉我的头，让我乖乖陪妈妈。我用力点了点头，跑进卧室，坐在妈妈身边，把卡通贴纸贴在妈妈的手背上。
【立绘：主角 / 懵懂】
派蒙（意识音）：小主人真聪明，知道找爸爸帮忙！爸爸的安慰加上小主人的陪伴，妈妈心里的难过会很快消散的，乳腺主城的小细胞们也会慢慢恢复活力，BOSS 就没办法兴风作浪啦！
【剧情跳转：直接进入第二幕 HE 主线 “贴心陪伴・驱散阴霾”】`},{id:"c5",text:"拉着妈妈的手，让妈妈教自己贴贴纸，故意说贴纸好看，转移妈妈的注意力",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “拉着妈妈贴贴纸，转移妈妈注意力”
【立绘：主角 / 懵懂、妈妈 / 委屈】
主角：妈妈妈妈，你看这个公主贴纸好好看，你教我贴吧，我怎么都贴不整齐，只有妈妈贴的最好看啦！
【立绘：主角 / 懵懂、妈妈 / 温柔】
旁白：妈妈看着我期待的小脸，又看了看手里的公主贴纸，勉强笑了笑，点了点头，拿起贴纸慢慢教我贴。我故意笨手笨脚的，贴得歪歪扭扭，惹得妈妈轻轻笑出了声。
主角：妈妈贴的真好看，比幼儿园老师贴的还好看，妈妈的手真巧！
旁白：我趁机夸赞妈妈，妈妈的脸上露出了真心的笑容，一边教我贴贴纸，一边跟我说着贴贴纸的小技巧，我们聊得开开心心，妈妈再也没有想起不开心的事。
【立绘：主角 / 懵懂】
派蒙（意识音）：小主人太机智啦！用贴纸转移妈妈的注意力，让妈妈忘记难过，开开心心的！妈妈心情好了，乳腺主城的灰雾就会慢慢散开，小细胞们也会充满活力，BOSS 根本没有机会长大！
【剧情跳转：直接进入第二幕 HE 主线 “贴心陪伴・驱散阴霾”】`}],secondChoicesHE:[{id:"he1",text:"主动跟妈妈说幼儿园的趣事，让妈妈每天都开开心心的",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：贴心陪伴・驱散阴霾
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：从那以后，我再也不随便说妈妈的坏话了，每天放学回家，第一件事就是跑到妈妈身边，给妈妈递上一杯温水，奶声奶气地说：“妈妈，你喝水，宝宝放学啦！” 妈妈总会笑着接过水杯，揉一揉我的头。
旁白：我会乖乖陪在妈妈身边，妈妈做饭的时候，我就搬个小板凳坐在厨房门口；妈妈休息的时候，我就趴在妈妈腿上捶捶腿；妈妈晚上睡觉的时候，我会抱着小枕头跟妈妈一起睡，睡前还会唱儿歌。
旁白：爸爸也会每天陪妈妈散步，妈妈慢慢变得开朗起来，再也不会对着镜子偷偷抹眼泪，还会主动去医院复查，医生说妈妈的心情好了，乳腺的情况也跟着好转。
选 1：主动跟妈妈说幼儿园的趣事
【立绘：主角 / 开心、妈妈 / 温柔】
旁白：我每天放学回家，都会叽叽喳喳地跟妈妈讲幼儿园的趣事，讲老师教的新儿歌，讲和小朋友一起玩的游戏，讲自己得到了小红花。
旁白：妈妈总会坐在一旁，笑眯眯地听着，时不时插一句话，眼睛里满是温柔的笑意。有时候我讲得手舞足蹈，惹得妈妈哈哈大笑，连眼角的皱纹都变得甜甜的。
妈妈：听宝宝讲趣事，是妈妈一天中最开心的时光。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：贴心陪伴・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺主城上空，奶白色的温暖光芒慢慢散开，一点点驱散了笼罩在主城上空的灰雾，阳光透过光芒洒下来，落在软软的结缔组织平原上，暖洋洋的，像妈妈的怀抱。
旁白：原本皱巴巴的皮肤慢慢变得光滑平整，陷进去的小坑也一点点鼓起来，恢复了原本的样子，整个乳腺主城都变得亮亮的，暖暖的，充满了生机与活力。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房酒窝征 BOSS / 虚弱、乳房橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影试图靠近主城，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，可它们刚靠近温暖的光芒，就被光芒包裹住，一点点消散，因为妈妈的心情越来越好，再也没有自卑和难过，这两个 BOSS 失去了生长的能量。
乳房酒窝征 BOSS：（虚弱消散，声音细若游丝）妈妈的心情好了…… 牵拉消失了…… 我撑不住了……
乳房橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流恢复了…… 皮肤变光滑了…… 我彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人你看！太棒啦！因为你的贴心陪伴和安慰，妈妈的心情越来越好，再也不自卑不难过了，两个 BOSS 都被成功驱散啦！只要妈妈一直开开心心的，乳腺主城就会一直安安全全、暖暖和和的！
旁白：健康科普：妈妈的情绪状态与乳腺健康密切相关，长期自卑、消沉会导致激素紊乱，加重酒窝征、橘皮样改变等症状。贴心陪伴、积极沟通能缓解妈妈的负面情绪，帮助乳腺组织恢复稳定。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"看到妈妈对着镜子发呆，立刻跑过去抱住妈妈，夸妈妈好看",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：贴心陪伴・驱散阴霾
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：从那以后，我再也不随便说妈妈的坏话了，每天放学回家，第一件事就是跑到妈妈身边，给妈妈递上一杯温水，奶声奶气地说：“妈妈，你喝水，宝宝放学啦！” 妈妈总会笑着接过水杯，揉一揉我的头。
旁白：我会乖乖陪在妈妈身边，妈妈做饭的时候，我就搬个小板凳坐在厨房门口；妈妈休息的时候，我就趴在妈妈腿上捶捶腿；妈妈晚上睡觉的时候，我会抱着小枕头跟妈妈一起睡，睡前还会唱儿歌。
旁白：爸爸也会每天陪妈妈散步，妈妈慢慢变得开朗起来，再也不会对着镜子偷偷抹眼泪，还会主动去医院复查，医生说妈妈的心情好了，乳腺的情况也跟着好转。
选 2：看到妈妈发呆就夸妈妈好看
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：有时候妈妈还是会对着镜子发呆，看着自己的胸口轻轻叹气，我一看到，就立刻丢下手里的玩具，噔噔噔跑过去，从背后抱住妈妈的腰，小脸贴在妈妈的背上。
主角：妈妈，你别发呆啦，妈妈一点都不丑，妈妈的眼睛大大的，鼻子小小的，笑起来最好看啦，宝宝最喜欢妈妈啦！
旁白：妈妈总会转过身，把我搂进怀里，笑着说：“我们的宝宝真是个小暖男 / 小棉袄。” 然后就会放下镜子，拉着我的手去做别的事，再也不胡思乱想了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：贴心陪伴・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺主城上空，奶白色的温暖光芒慢慢散开，一点点驱散了笼罩在主城上空的灰雾，阳光透过光芒洒下来，落在软软的结缔组织平原上，暖洋洋的，像妈妈的怀抱。
旁白：原本皱巴巴的皮肤慢慢变得光滑平整，陷进去的小坑也一点点鼓起来，恢复了原本的样子，整个乳腺主城都变得亮亮的，暖暖的，充满了生机与活力。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房酒窝征 BOSS / 虚弱、乳房橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影试图靠近主城，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，可它们刚靠近温暖的光芒，就被光芒包裹住，一点点消散，因为妈妈的心情越来越好，再也没有自卑和难过，这两个 BOSS 失去了生长的能量。
乳房酒窝征 BOSS：（虚弱消散，声音细若游丝）妈妈的心情好了…… 牵拉消失了…… 我撑不住了……
乳房橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流恢复了…… 皮肤变光滑了…… 我彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人你看！太棒啦！因为你的贴心陪伴和安慰，妈妈的心情越来越好，再也不自卑不难过了，两个 BOSS 都被成功驱散啦！只要妈妈一直开开心心的，乳腺主城就会一直安安全全、暖暖和和的！
旁白：健康科普：妈妈的情绪状态与乳腺健康密切相关，长期自卑、消沉会导致激素紊乱，加重酒窝征、橘皮样改变等症状。贴心陪伴、积极沟通能缓解妈妈的负面情绪，帮助乳腺组织恢复稳定。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"跟爸爸一起，拉着妈妈去公园散步，晒晒太阳吹吹风",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：贴心陪伴・驱散阴霾
【场景切换：客厅】
【立绘：主角 / 懂事、妈妈 / 温柔】
旁白：从那以后，我再也不随便说妈妈的坏话了，每天放学回家，第一件事就是跑到妈妈身边，给妈妈递上一杯温水，奶声奶气地说：“妈妈，你喝水，宝宝放学啦！” 妈妈总会笑着接过水杯，揉一揉我的头。
旁白：我会乖乖陪在妈妈身边，妈妈做饭的时候，我就搬个小板凳坐在厨房门口；妈妈休息的时候，我就趴在妈妈腿上捶捶腿；妈妈晚上睡觉的时候，我会抱着小枕头跟妈妈一起睡，睡前还会唱儿歌。
旁白：爸爸也会每天陪妈妈散步，妈妈慢慢变得开朗起来，再也不会对着镜子偷偷抹眼泪，还会主动去医院复查，医生说妈妈的心情好了，乳腺的情况也跟着好转。
选 3：跟爸爸一起拉妈妈去公园散步
【立绘：主角 / 开心、妈妈 / 温柔、爸爸 / 稳重】【特殊：立绘超 3 人】
旁白：每天吃完晚饭，我都会拉着妈妈的手，爸爸也会拉着妈妈的另一只手，我们一家三口一起去小区旁边的公园散步。公园里的花花草草都开得漂漂亮亮的，小鸟在树上叽叽喳喳地唱歌。
旁白：我会在前面蹦蹦跳跳地跑，摘一朵小野花送给妈妈，妈妈会把小野花别在头发上，笑得像花一样好看。爸爸会跟妈妈聊开心的事，我会讲小笑话，妈妈牵着我们的手，慢慢走着，脸上一直挂着甜甜的笑容。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：贴心陪伴・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：妈妈的乳腺主城上空，奶白色的温暖光芒慢慢散开，一点点驱散了笼罩在主城上空的灰雾，阳光透过光芒洒下来，落在软软的结缔组织平原上，暖洋洋的，像妈妈的怀抱。
旁白：原本皱巴巴的皮肤慢慢变得光滑平整，陷进去的小坑也一点点鼓起来，恢复了原本的样子，整个乳腺主城都变得亮亮的，暖暖的，充满了生机与活力。
【立绘：主角 / 开心、派蒙 / 骄傲、乳房酒窝征 BOSS / 虚弱、乳房橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影试图靠近主城，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，可它们刚靠近温暖的光芒，就被光芒包裹住，一点点消散，因为妈妈的心情越来越好，再也没有自卑和难过，这两个 BOSS 失去了生长的能量。
乳房酒窝征 BOSS：（虚弱消散，声音细若游丝）妈妈的心情好了…… 牵拉消失了…… 我撑不住了……
乳房橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流恢复了…… 皮肤变光滑了…… 我彻底消散了……
【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：小主人你看！太棒啦！因为你的贴心陪伴和安慰，妈妈的心情越来越好，再也不自卑不难过了，两个 BOSS 都被成功驱散啦！只要妈妈一直开开心心的，乳腺主城就会一直安安全全、暖暖和和的！
旁白：健康科普：妈妈的情绪状态与乳腺健康密切相关，长期自卑、消沉会导致激素紊乱，加重酒窝征、橘皮样改变等症状。贴心陪伴、积极沟通能缓解妈妈的负面情绪，帮助乳腺组织恢复稳定。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懂事、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧任性，随口就说出伤害妈妈的话，说完也不肯道歉",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：无知任性・加重阴霾
【场景切换：客厅】
【立绘：主角 / 任性、妈妈 / 消沉】
旁白：我还是改不了任性的小脾气，有时候妈妈不让我吃零食、不让我看动画片，我就会犟着脾气，脱口而出：“妈妈坏，妈妈的胸丑丑的，还管我！”
旁白：每次说完，妈妈的脸色都会瞬间变得苍白，眼睛里的光一下子就灭了，低下头默默走开，再也不说话，整个人都变得蔫蔫的，比以前更消沉了。我说完就后悔了，可还是犟着脾气不肯道歉。
旁白：爸爸看着妈妈的样子，很着急，带着妈妈去医院复查，医生说妈妈的心情一直不好，导致乳腺的情况越来越严重，酒窝征和橘皮样改变都加重了。
选 1：依旧任性，随口说伤害妈妈的话
【立绘：主角 / 任性、妈妈 / 麻木】
旁白：我还是改不了随口说话的毛病，不管什么时候，只要不顺心，就会把妈妈的乳腺问题挂在嘴边，用最难听的话伤害妈妈，“妈妈的胸像橘子皮”“妈妈好丑” 这些话，总是随口就说出来。
旁白：妈妈每次听到这些话，都会默默流泪，再也不跟我说话，也不跟我亲近，整个人都变得麻木起来，对什么都提不起兴趣，每天只是坐在床边，对着镜子发呆，连饭都吃得越来越少。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：无知伤害・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺主城被厚厚的灰雾彻底笼罩，一点阳光都透不进来，灰蒙蒙的，冷冷的，压抑的气息弥漫在主城的每一个角落，让人喘不过气。
旁白：原本软软的结缔组织平原变得干干的、硬硬的，乳房上的小坑陷得越来越深，像一个小小的黑洞，周围的皮肤皱得越来越厉害，像晒干的橘子皮，连乳腺导管都变得干瘪瘪的，堵塞不通。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在灰雾的最核心处，两道灰蒙蒙的黑影缓缓站直身体，它们的身形慢慢变大，表面带着皱巴巴的纹路和深深的凹陷，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，它们彻底觉醒了，发出低沉又压抑的咆哮。
乳房酒窝征 BOSS：（冰冷低沉，灰雾不断蔓延）妈妈一直消沉自卑…… 牵拉越来越重…… 这个乳腺主城，我要彻底占领！
乳房橘皮样改变 BOSS：（阴冷沙哑，皮肤纹路越来越深）妈妈的心情越来越差…… 淋巴回流越来越堵…… 你的妈妈，再也恢复不了了！
派蒙：（颤抖哭喊，眼泪掉了下来）小主人…… 怎么办呀…… 这两个 BOSS 彻底觉醒了…… 因为妈妈一直难过，它们变得越来越强大，乳腺主城的小细胞们都快撑不住了……
旁白：健康科普：长期负面情绪会加速乳腺病变，酒窝征、橘皮样改变等症状持续加重后，恶性风险显著升高。及时关注妈妈的情绪，避免言语伤害，是守护乳腺健康的重要前提。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be2",text:"看到妈妈难过，心里后悔却不敢道歉，只能远远地看着妈妈",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：无知任性・加重阴霾
【场景切换：客厅】
【立绘：主角 / 任性、妈妈 / 消沉】
旁白：我还是改不了任性的小脾气，有时候妈妈不让我吃零食、不让我看动画片，我就会犟着脾气，脱口而出：“妈妈坏，妈妈的胸丑丑的，还管我！”
旁白：每次说完，妈妈的脸色都会瞬间变得苍白，眼睛里的光一下子就灭了，低下头默默走开，再也不说话，整个人都变得蔫蔫的，比以前更消沉了。我说完就后悔了，可还是犟着脾气不肯道歉。
旁白：爸爸看着妈妈的样子，很着急，带着妈妈去医院复查，医生说妈妈的心情一直不好，导致乳腺的情况越来越严重，酒窝征和橘皮样改变都加重了。
选 2：心里后悔却不敢道歉，远远看着妈妈
【立绘：主角 / 愧疚、妈妈 / 消沉】
旁白：每次说完伤害妈妈的话，我心里都特别后悔，看到妈妈难过的样子，我也酸酸的，想跟妈妈道歉，可话到嘴边，又总是咽回去，拉不下面子，只能远远地看着妈妈，不敢靠近。
旁白：我会偷偷躲在卧室门口，看着妈妈对着镜子抹眼泪，看着妈妈一个人默默吃饭，看着妈妈孤单的背影，心里特别难受，可就是没有勇气说一句 “对不起”。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：无知伤害・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺主城被厚厚的灰雾彻底笼罩，一点阳光都透不进来，灰蒙蒙的，冷冷的，压抑的气息弥漫在主城的每一个角落，让人喘不过气。
旁白：原本软软的结缔组织平原变得干干的、硬硬的，乳房上的小坑陷得越来越深，像一个小小的黑洞，周围的皮肤皱得越来越厉害，像晒干的橘子皮，连乳腺导管都变得干瘪瘪的，堵塞不通。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在灰雾的最核心处，两道灰蒙蒙的黑影缓缓站直身体，它们的身形慢慢变大，表面带着皱巴巴的纹路和深深的凹陷，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，它们彻底觉醒了，发出低沉又压抑的咆哮。
乳房酒窝征 BOSS：（冰冷低沉，灰雾不断蔓延）妈妈一直消沉自卑…… 牵拉越来越重…… 这个乳腺主城，我要彻底占领！
乳房橘皮样改变 BOSS：（阴冷沙哑，皮肤纹路越来越深）妈妈的心情越来越差…… 淋巴回流越来越堵…… 你的妈妈，再也恢复不了了！
派蒙：（颤抖哭喊，眼泪掉了下来）小主人…… 怎么办呀…… 这两个 BOSS 彻底觉醒了…… 因为妈妈一直难过，它们变得越来越强大，乳腺主城的小细胞们都快撑不住了……
旁白：健康科普：长期负面情绪会加速乳腺病变，酒窝征、橘皮样改变等症状持续加重后，恶性风险显著升高。及时关注妈妈的情绪，避免言语伤害，是守护乳腺健康的重要前提。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be3",text:"为了让妈妈不生气，故意躲着妈妈，不跟妈妈说话，也不跟妈妈见面",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：无知任性・加重阴霾
【场景切换：客厅】
【立绘：主角 / 任性、妈妈 / 消沉】
旁白：我还是改不了任性的小脾气，有时候妈妈不让我吃零食、不让我看动画片，我就会犟着脾气，脱口而出：“妈妈坏，妈妈的胸丑丑的，还管我！”
旁白：每次说完，妈妈的脸色都会瞬间变得苍白，眼睛里的光一下子就灭了，低下头默默走开，再也不说话，整个人都变得蔫蔫的，比以前更消沉了。我说完就后悔了，可还是犟着脾气不肯道歉。
旁白：爸爸看着妈妈的样子，很着急，带着妈妈去医院复查，医生说妈妈的心情一直不好，导致乳腺的情况越来越严重，酒窝征和橘皮样改变都加重了。
选 3：故意躲着妈妈，不跟妈妈见面
【立绘：主角 / 害怕、妈妈 / 消沉】
旁白：我害怕看到妈妈难过的样子，也害怕爸爸批评我，为了不让自己再说出伤害妈妈的话，我故意躲着妈妈，妈妈做饭的时候，我就躲在客厅；妈妈休息的时候，我就躲在卧室；妈妈叫我吃饭的时候，我就说自己不饿。
旁白：妈妈每次想跟我说话，想抱一抱我，都被我躲开了，妈妈的眼睛里满是失落和难过，慢慢的，妈妈也不再主动找我，不再主动抱我，母子俩之间变得冷冷的，没有一点温情。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 软糯】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：无知伤害・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 愧疚、派蒙 / 哽咽、分泌细胞 / 委屈】
旁白：妈妈的乳腺主城被厚厚的灰雾彻底笼罩，一点阳光都透不进来，灰蒙蒙的，冷冷的，压抑的气息弥漫在主城的每一个角落，让人喘不过气。
旁白：原本软软的结缔组织平原变得干干的、硬硬的，乳房上的小坑陷得越来越深，像一个小小的黑洞，周围的皮肤皱得越来越厉害，像晒干的橘子皮，连乳腺导管都变得干瘪瘪的，堵塞不通。
【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在灰雾的最核心处，两道灰蒙蒙的黑影缓缓站直身体，它们的身形慢慢变大，表面带着皱巴巴的纹路和深深的凹陷，正是乳房酒窝征 BOSS 和乳房橘皮样改变 BOSS，它们彻底觉醒了，发出低沉又压抑的咆哮。
乳房酒窝征 BOSS：（冰冷低沉，灰雾不断蔓延）妈妈一直消沉自卑…… 牵拉越来越重…… 这个乳腺主城，我要彻底占领！
乳房橘皮样改变 BOSS：（阴冷沙哑，皮肤纹路越来越深）妈妈的心情越来越差…… 淋巴回流越来越堵…… 你的妈妈，再也恢复不了了！
派蒙：（颤抖哭喊，眼泪掉了下来）小主人…… 怎么办呀…… 这两个 BOSS 彻底觉醒了…… 因为妈妈一直难过，它们变得越来越强大，乳腺主城的小细胞们都快撑不住了……
旁白：健康科普：长期负面情绪会加速乳腺病变，酒窝征、橘皮样改变等症状持续加重后，恶性风险显著升高。及时关注妈妈的情绪，避免言语伤害，是守护乳腺健康的重要前提。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 愧疚、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，厚厚的灰雾和压抑的咆哮声慢慢远去，派蒙软软的小手还拉着我的手，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的奶白色光晕。
派蒙：小主人，这段记忆是不是让你很难过呀？其实妈妈从来都不会怪你，只是她自己因为乳腺的问题很自卑，你的小话刚好让她更难过了。妈妈也会脆弱，需要小主人的关心和陪伴呀。
派蒙：以后小主人一定要懂事一点，多关心妈妈，多哄妈妈开心，不要随便说伤害妈妈的话，用暖暖的陪伴，做妈妈最坚强的小铠甲，好不好？
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，擦去脸上的眼泪，攥紧小拳头，心里暗暗发誓，以后一定要做个最懂事的孩子，多陪妈妈、多哄妈妈，再也不说伤害妈妈的话，要做妈妈的小暖男 / 小棉袄。
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["skinDimple","orangePeel"],skillHE:{id:"warmComfort",name:"温暖安慰",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"ignorantMockery",name:"无知嘲笑",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}}},adult:{1:{id:1,title:"职场酒局的被迫应酬 - Galgame 剧情脚本",description:"职场酒局的被迫应酬 - Galgame 剧情脚本",perspective:"adult",intro:`开场：微观世界→大脑记忆中枢
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"微观世界→大脑记忆中枢"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个青壮年专属记忆入口：职场酒局被迫应酬、熬夜赶项目的健康透支、私自滥用减肥药与保健品。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖稳稳触碰 “职场酒局被迫应酬” 这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始扭曲流动，那段沉重的应酬记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 严肃】"},{id:"s8",speaker:"派蒙",text:"主人！终于要面对这段记忆了！你还记得吗？就是因为你当年被迫参加那些职场酒局、喝了太多酒，肝脏代谢雌激素的能力被打乱，才让乳腺主城出现了严重的病灶！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个身形虚弱的分泌细胞跌跌撞撞从记忆通道口跑出来，抱着营养液罐子，脸色发白、气息微弱，连走路都摇摇晃晃。"},{id:"s11",speaker:"旁白",text:"其中一个细胞脚下一软，罐子 “哐当” 一声摔在地上，琥珀色的营养液洒了一地，她害怕地缩成一团，快要哭出来。"},{id:"s12",speaker:"分泌细胞",text:"主人…… 我们好难受…… 胸口一直胀疼…… 乳房里面长出硬硬的块…… 腋下也肿起来了…… 好痛……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 严肃、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"你都看到了吧？这就是你当年喝酒应酬留下的后果！激素紊乱、乳腺受损，直接催生了两个症状 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确选择，不然这两个 BOSS 会越来越强大，最后彻底占领整个乳腺主城！"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 严肃】"},{id:"s17",speaker:"旁白",text:"我深吸一口气，重重地点了点头。眼前的记忆之门彻底敞开，一股熟悉又压抑的酒局气息扑面而来，我被瞬间拉回了当年。"},{id:"s18",speaker:"主角",text:"（内心独白）哇，真的回到过去了？空气里飘着打印机墨粉的味道，还有同事们无奈的叹气声，跟记忆里的分毫不差。"},{id:"s19",speaker:"第一幕",text:"办公室的酒局通知（5 选 1 并联选项）"},{id:"s20",speaker:"舞台指示",text:"【场景切换：职场办公室】"},{id:"s21",speaker:"舞台指示",text:"【立绘：主角 / 正常、经理 / 威严】"},{id:"s22",speaker:"经理",text:"今晚全体加班，陪张总去应酬！这个项目关系到咱们部门下半年的绩效，谁都不能缺席！项目成了，每人绩效翻倍；要是敢找借口不去，以后评优、转正，想都别想！"},{id:"s23",speaker:"舞台指示",text:"【立绘：主角 / 正常、经理 / 威严、小李 / 苦相】"},{id:"s24",speaker:"旁白",text:"同事们纷纷低下头，没人敢吭声。小李偷偷冲我挤了挤眼，撇了撇嘴，一脸苦相。"},{id:"s25",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、经理 / 威严、小李 / 苦相】"},{id:"s26",speaker:"旁白",text:"这时我兜里的手机震了震，掏出来一看，是闺蜜发来的微信科普：乳腺结节患者绝对不能沾酒精，会刺激组织增生，加速恶变！你上周体检不是查出结节了吗？千万注意！"},{id:"s27",speaker:"旁白",text:"我盯着屏幕，心口猛地一紧。当年我就是随手划掉了这条消息，现在看来，这简直是最直白的健康预警。"}],firstChoices:[{id:"c1",text:"凑到同事小李身边，低声问 “能不能找个靠谱的借口不去啊？”",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “凑到小李身边问对策”
【立绘：主角 / 焦虑、小李 / 谨慎】
主角：小李，经理要咱们去应酬，你有没有靠谱的借口能躲过去啊？
小李：别傻了！上次小王说感冒请假，被经理冷落了半个月！要么硬着头皮去，要么找个天衣无缝的借口跑路，别的法子都没用！
【立绘：主角 / 焦虑】
派蒙（意识音）：这同事说的倒是实话！但跑路只能躲一次，下次呢？快选！学他找借口，还是硬气点直接拒绝？`,nextChoices:[{id:"A",text:"找借口",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？什么？家里漏水了？好好好，我马上回去！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，没等经理回话，就快步冲出办公室，一路跑到地铁站，才扶着栏杆大口喘气。
【立绘：主角 / 焦虑】
派蒙（意识音）：算你机灵，躲过了酒局！但你现在心里踏实吗？下次再遇到这种事，你还敢直接拒绝吗？`,nextChoices:[{id:"A",text:"敢拒绝",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定拒绝”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
主角：经理，张总那边我很想去应酬，真的。但我上周体检查出了乳腺结节，医生千叮万嘱，说绝对不能沾酒精，不然结节很可能会恶变。
主角：我以茶代酒敬张总，项目上我自愿每天加班两小时，保证把负责的模块做到最好，绝不拖团队后腿！
【立绘：主角 / 坚定、经理 / 愣住、张总 / 随和】
旁白：我的声音不大，但字字清晰。经理愣住了，刚想开口说什么，办公室的门突然被推开，张总拎着公文包，笑眯眯地走了进来。
张总：（朗声大笑）小姑娘懂健康、有担当，比那些硬撑着喝酒的年轻人强多了！喝酒本来就是形式，项目做好才是正事！这杯茶，我认了！
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
经理：行吧行吧，你这丫头，还挺有原则。项目上的事，可得多上心！
【立绘：主角 / 轻松】
派蒙（意识音）：（意识里哼了一声）算你有点脑子，没白疼你！
【剧情跳转：直接进入第二幕拒酒周旋主线】`},{id:"B",text:"不敢，下次还跑",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协赴局”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的科普消息。刚入职半年，这份工作对我来说太重要了，我实在不敢得罪经理。
主角：（内心独白）就这一次，下次绝对不喝了。
【立绘：主角 / 疲惫、同事 / 同情】
旁白：我跟着同事们走出办公室，脚步沉重。晚风刮在脸上，带着几分凉意，可我心里却乱糟糟的，一点也轻松不起来。
【立绘：主角 / 疲惫】
派蒙（意识音）：呵，下次？这话我听你说过八百遍了。等着瞧吧，今晚你喝进去的酒，就是明天主城的眼泪。
【剧情跳转：直接进入第二幕妥协饮酒主线】`}]},{id:"B",text:"直接拒绝",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定拒绝”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
主角：经理，张总那边我很想去应酬，真的。但我上周体检查出了乳腺结节，医生千叮万嘱，说绝对不能沾酒精，不然结节很可能会恶变。
主角：我以茶代酒敬张总，项目上我自愿每天加班两小时，保证把负责的模块做到最好，绝不拖团队后腿！
【立绘：主角 / 坚定、经理 / 愣住、张总 / 随和】
旁白：我的声音不大，但字字清晰。经理愣住了，刚想开口说什么，办公室的门突然被推开，张总拎着公文包，笑眯眯地走了进来。
张总：（朗声大笑）小姑娘懂健康、有担当，比那些硬撑着喝酒的年轻人强多了！喝酒本来就是形式，项目做好才是正事！这杯茶，我认了！
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
经理：行吧行吧，你这丫头，还挺有原则。项目上的事，可得多上心！
【立绘：主角 / 轻松】
派蒙（意识音）：（意识里哼了一声）算你有点脑子，没白疼你！
【剧情跳转：直接进入第二幕拒酒周旋主线】`}]},{id:"c2",text:"打开工作群，发消息 “我今晚有点不舒服，能不能请假？”",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “工作群发不舒服请假消息”
【立绘：主角 / 焦虑、经理 / 威严】
旁白：我点开工作群，飞快打字发送请假消息，消息刚发出去，手机就 “叮” 地响了一声 —— 是经理的私聊。
经理：不舒服？多大点事！喝点酒出身汗就好了！年轻人别这么娇气，必须来！
【立绘：主角 / 焦虑、经理 / 威严、同事 / 同情】
旁白：我看着屏幕上的字，脸颊瞬间发烫，尴尬得手足无措。周围几个同事偷偷看过来，眼神里带着几分同情。
【立绘：主角 / 焦虑、同事 / 同情】
派蒙（意识音）：你看，这种借口根本没用！经理根本不吃这一套！现在怎么办？硬着头皮去，还是换个理由坚持拒绝？`,nextChoices:[{id:"A",text:"换理由",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？什么？家里漏水了？好好好，我马上回去！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，没等经理回话，就快步冲出办公室，一路跑到地铁站，才扶着栏杆大口喘气。
【立绘：主角 / 焦虑】
派蒙（意识音）：算你机灵，躲过了酒局！但你现在心里踏实吗？下次再遇到这种事，你还敢直接拒绝吗？`,nextChoices:[{id:"A",text:"敢拒绝",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定拒绝”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
主角：经理，张总那边我很想去应酬，真的。但我上周体检查出了乳腺结节，医生千叮万嘱，说绝对不能沾酒精，不然结节很可能会恶变。
主角：我以茶代酒敬张总，项目上我自愿每天加班两小时，保证把负责的模块做到最好，绝不拖团队后腿！
【立绘：主角 / 坚定、经理 / 愣住、张总 / 随和】
旁白：我的声音不大，但字字清晰。经理愣住了，刚想开口说什么，办公室的门突然被推开，张总拎着公文包，笑眯眯地走了进来。
张总：（朗声大笑）小姑娘懂健康、有担当，比那些硬撑着喝酒的年轻人强多了！喝酒本来就是形式，项目做好才是正事！这杯茶，我认了！
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
经理：行吧行吧，你这丫头，还挺有原则。项目上的事，可得多上心！
【立绘：主角 / 轻松】
派蒙（意识音）：（意识里哼了一声）算你有点脑子，没白疼你！
【剧情跳转：直接进入第二幕拒酒周旋主线】`},{id:"B",text:"不敢，下次还跑",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协赴局”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的科普消息。刚入职半年，这份工作对我来说太重要了，我实在不敢得罪经理。
主角：（内心独白）就这一次，下次绝对不喝了。
【立绘：主角 / 疲惫、同事 / 同情】
旁白：我跟着同事们走出办公室，脚步沉重。晚风刮在脸上，带着几分凉意，可我心里却乱糟糟的，一点也轻松不起来。
【立绘：主角 / 疲惫】
派蒙（意识音）：呵，下次？这话我听你说过八百遍了。等着瞧吧，今晚你喝进去的酒，就是明天主城的眼泪。
【剧情跳转：直接进入第二幕妥协饮酒主线】`}]},{id:"B",text:"硬着头皮去",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协赴局”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的科普消息。刚入职半年，这份工作对我来说太重要了，我实在不敢得罪经理。
主角：（内心独白）就这一次，下次绝对不喝了。
【立绘：主角 / 疲惫、同事 / 同情】
旁白：我跟着同事们走出办公室，脚步沉重。晚风刮在脸上，带着几分凉意，可我心里却乱糟糟的，一点也轻松不起来。
【立绘：主角 / 疲惫】
派蒙（意识音）：呵，下次？这话我听你说过八百遍了。等着瞧吧，今晚你喝进去的酒，就是明天主城的眼泪。
【剧情跳转：直接进入第二幕妥协饮酒主线】`}]},{id:"c3",text:"假装接电话，捂着嘴小声说 “啊？家里有急事，我得马上回去！”",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？什么？家里漏水了？好好好，我马上回去！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，没等经理回话，就快步冲出办公室，一路跑到地铁站，才扶着栏杆大口喘气。
【立绘：主角 / 焦虑】
派蒙（意识音）：算你机灵，躲过了酒局！但你现在心里踏实吗？下次再遇到这种事，你还敢直接拒绝吗？`,nextChoices:[{id:"A",text:"敢拒绝",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定拒绝”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
主角：经理，张总那边我很想去应酬，真的。但我上周体检查出了乳腺结节，医生千叮万嘱，说绝对不能沾酒精，不然结节很可能会恶变。
主角：我以茶代酒敬张总，项目上我自愿每天加班两小时，保证把负责的模块做到最好，绝不拖团队后腿！
【立绘：主角 / 坚定、经理 / 愣住、张总 / 随和】
旁白：我的声音不大，但字字清晰。经理愣住了，刚想开口说什么，办公室的门突然被推开，张总拎着公文包，笑眯眯地走了进来。
张总：（朗声大笑）小姑娘懂健康、有担当，比那些硬撑着喝酒的年轻人强多了！喝酒本来就是形式，项目做好才是正事！这杯茶，我认了！
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
经理：行吧行吧，你这丫头，还挺有原则。项目上的事，可得多上心！
【立绘：主角 / 轻松】
派蒙（意识音）：（意识里哼了一声）算你有点脑子，没白疼你！
【剧情跳转：直接进入第二幕拒酒周旋主线】`},{id:"B",text:"不敢，下次还跑",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协赴局”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的科普消息。刚入职半年，这份工作对我来说太重要了，我实在不敢得罪经理。
主角：（内心独白）就这一次，下次绝对不喝了。
【立绘：主角 / 疲惫、同事 / 同情】
旁白：我跟着同事们走出办公室，脚步沉重。晚风刮在脸上，带着几分凉意，可我心里却乱糟糟的，一点也轻松不起来。
【立绘：主角 / 疲惫】
派蒙（意识音）：呵，下次？这话我听你说过八百遍了。等着瞧吧，今晚你喝进去的酒，就是明天主城的眼泪。
【剧情跳转：直接进入第二幕妥协饮酒主线】`}]},{id:"c4",text:"攥紧手机，心里默念 “必须拒绝，健康比工作更重要”",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定拒绝”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
主角：经理，张总那边我很想去应酬，真的。但我上周体检查出了乳腺结节，医生千叮万嘱，说绝对不能沾酒精，不然结节很可能会恶变。
主角：我以茶代酒敬张总，项目上我自愿每天加班两小时，保证把负责的模块做到最好，绝不拖团队后腿！
【立绘：主角 / 坚定、经理 / 愣住、张总 / 随和】
旁白：我的声音不大，但字字清晰。经理愣住了，刚想开口说什么，办公室的门突然被推开，张总拎着公文包，笑眯眯地走了进来。
张总：（朗声大笑）小姑娘懂健康、有担当，比那些硬撑着喝酒的年轻人强多了！喝酒本来就是形式，项目做好才是正事！这杯茶，我认了！
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
经理：行吧行吧，你这丫头，还挺有原则。项目上的事，可得多上心！
【立绘：主角 / 轻松】
派蒙（意识音）：（意识里哼了一声）算你有点脑子，没白疼你！
【剧情跳转：直接进入第二幕拒酒周旋主线】`},{id:"c5",text:"叹口气，心里想 “算了，刚入职得罪不起领导，还是去吧”",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协赴局”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的科普消息。刚入职半年，这份工作对我来说太重要了，我实在不敢得罪经理。
主角：（内心独白）就这一次，下次绝对不喝了。
【立绘：主角 / 疲惫、同事 / 同情】
旁白：我跟着同事们走出办公室，脚步沉重。晚风刮在脸上，带着几分凉意，可我心里却乱糟糟的，一点也轻松不起来。
【立绘：主角 / 疲惫】
派蒙（意识音）：呵，下次？这话我听你说过八百遍了。等着瞧吧，今晚你喝进去的酒，就是明天主城的眼泪。
【剧情跳转：直接进入第二幕妥协饮酒主线】`}],secondChoicesHE:[{id:"he1",text:"主动端起茶杯，笑着说 “张总，我以茶代酒，敬您一杯！祝您项目顺利！”",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`拒酒周旋主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 坚定、经理 / 威严、张总 / 笑意】
经理：小林，快敬张总一杯！
选 1：主动端茶敬酒
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
主角：张总，我以茶代酒，敬您一杯！祝您项目顺利，财源广进！我体检查出乳腺结节，医生说不能沾酒精，还望您多多包涵。项目上的事，我一定尽心尽力！
张总：没事没事！健康第一！小姑娘有这份心就够了！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
防线稳固结局（拒酒周旋主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城亮堂堂的，彩虹导管桥干干净净，蘑菇屋整整齐齐。巨噬细胞们扛着吸尘器溜达吹口哨，淋巴细胞小姐姐们举着小喇叭轻快巡逻，营养核心塔的光芒暖洋洋的。
派蒙：走！带你去城门看看！
【立绘：主角 / 轻松、派蒙 / 开心】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟巨噬细胞大哥借吸尘器玩
选项 2：跟淋巴细胞小姐姐要签名
选项 3：主动帮细胞们加固主城防线
互动 1：跟巨噬细胞大哥借吸尘器玩
【立绘：主角 / 期待、派蒙 / 撇嘴、巨噬细胞 / 爽朗】
主角：大哥，能借你的吸尘器玩一会儿吗？
巨噬细胞：不行不行！这是我的宝贝工具！你要体验的话，我们可以一起巡逻！
派蒙：巡逻哪有清理毒素有意思！
【剧情汇流：进入主线剧情】
互动 2：跟淋巴细胞小姐姐要签名
【立绘：主角 / 期待、派蒙 / 正常、淋巴细胞 / 傲娇】
主角：小姐姐，能给我签个名吗？
淋巴细胞：签名可以！但你要答应，以后再遇到酒局，也像这次一样坚定拒绝！
主角：我答应！
旁白：小姐姐掏出一支小画笔，在我的手背上画了一个亮晶晶的小喇叭。
【剧情汇流：进入主线剧情】
互动 3：主动帮细胞们加固主城防线
【立绘：主角 / 坚定、派蒙 / 开心、巨噬细胞 / 爽朗、淋巴细胞 / 活泼】【特殊：立绘超 3 人】
主角：派蒙，我想帮大家加固防线！
派蒙：主人居然主动帮忙！太好了！
旁白：细胞们欢呼起来，巨噬细胞大哥们搬来防护板，淋巴细胞小姐姐们帮忙传递工具，我们一起把城门的防护栏加固得严严实实。
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 开心、分泌细胞 / 健康】
旁白：加固完防线，分泌细胞们捧着一个用营养液小草编的花环，递到我手里。花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退】
乳房硬块 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然没给我留半点机会！等着瞧，下次你要是松懈，我就卷土重来！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退、腋下淋巴结肿大 BOSS / 败退】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（气急败坏却不敢靠近）算你狠！居然把通道通得这么顺畅！你给我记着，下次主人再牵挂熬夜，我定要把这里堵得严严实实！
派蒙：你做梦！我们主城的防线越来越牢固，你根本没机会！
旁白：健康科普：长期保持健康习惯，可降低乳腺结节恶变风险，早期硬块多无痛、边界不清，需每月自查。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
防线稳固结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的欢呼声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"从包里拿出体检报告，诚恳道 “张总，真的不能喝，这是我的体检报告，医生特意叮嘱过”",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`拒酒周旋主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 坚定、经理 / 威严、张总 / 笑意】
经理：小林，快敬张总一杯！
选 2：拿出体检报告
【立绘：主角 / 坚定、经理 / 缓和、张总 / 笑意】
主角：张总，真的抱歉，我上周刚体检完，医生千叮万嘱不能沾酒精。这份报告您可以看看，项目上的事，我肯定加班加点做好！
张总：快收起来！谁还没个小毛病？不用这么较真！不喝酒就不喝，以茶代酒就行！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
防线稳固结局（拒酒周旋主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城亮堂堂的，彩虹导管桥干干净净，蘑菇屋整整齐齐。巨噬细胞们扛着吸尘器溜达吹口哨，淋巴细胞小姐姐们举着小喇叭轻快巡逻，营养核心塔的光芒暖洋洋的。
派蒙：走！带你去城门看看！
【立绘：主角 / 轻松、派蒙 / 开心】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟巨噬细胞大哥借吸尘器玩
选项 2：跟淋巴细胞小姐姐要签名
选项 3：主动帮细胞们加固主城防线
互动 1：跟巨噬细胞大哥借吸尘器玩
【立绘：主角 / 期待、派蒙 / 撇嘴、巨噬细胞 / 爽朗】
主角：大哥，能借你的吸尘器玩一会儿吗？
巨噬细胞：不行不行！这是我的宝贝工具！你要体验的话，我们可以一起巡逻！
派蒙：巡逻哪有清理毒素有意思！
【剧情汇流：进入主线剧情】
互动 2：跟淋巴细胞小姐姐要签名
【立绘：主角 / 期待、派蒙 / 正常、淋巴细胞 / 傲娇】
主角：小姐姐，能给我签个名吗？
淋巴细胞：签名可以！但你要答应，以后再遇到酒局，也像这次一样坚定拒绝！
主角：我答应！
旁白：小姐姐掏出一支小画笔，在我的手背上画了一个亮晶晶的小喇叭。
【剧情汇流：进入主线剧情】
互动 3：主动帮细胞们加固主城防线
【立绘：主角 / 坚定、派蒙 / 开心、巨噬细胞 / 爽朗、淋巴细胞 / 活泼】【特殊：立绘超 3 人】
主角：派蒙，我想帮大家加固防线！
派蒙：主人居然主动帮忙！太好了！
旁白：细胞们欢呼起来，巨噬细胞大哥们搬来防护板，淋巴细胞小姐姐们帮忙传递工具，我们一起把城门的防护栏加固得严严实实。
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 开心、分泌细胞 / 健康】
旁白：加固完防线，分泌细胞们捧着一个用营养液小草编的花环，递到我手里。花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退】
乳房硬块 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然没给我留半点机会！等着瞧，下次你要是松懈，我就卷土重来！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退、腋下淋巴结肿大 BOSS / 败退】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（气急败坏却不敢靠近）算你狠！居然把通道通得这么顺畅！你给我记着，下次主人再牵挂熬夜，我定要把这里堵得严严实实！
派蒙：你做梦！我们主城的防线越来越牢固，你根本没机会！
旁白：健康科普：长期保持健康习惯，可降低乳腺结节恶变风险，早期硬块多无痛、边界不清，需每月自查。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
防线稳固结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的欢呼声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"看向旁边相熟的王哥，小声说 “王哥，麻烦您跟张总说一声，我确实不能饮酒”",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`拒酒周旋主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 坚定、经理 / 威严、张总 / 笑意】
经理：小林，快敬张总一杯！
选 3：请王哥帮忙打圆场
【立绘：主角 / 坚定、张总 / 笑意、王哥 / 友善】
主角：（小声恳求）王哥，麻烦您跟张总说一声，我体检查出结节，实在不能喝酒，谢谢您了！
王哥：（冲张总笑）张总，小林这丫头身体不舒服，不能喝酒，我替她敬您一杯！她负责的项目模块做得可好了，您放心！
张总：（哈哈大笑）好说好说！年轻人身体要紧！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
防线稳固结局（拒酒周旋主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城亮堂堂的，彩虹导管桥干干净净，蘑菇屋整整齐齐。巨噬细胞们扛着吸尘器溜达吹口哨，淋巴细胞小姐姐们举着小喇叭轻快巡逻，营养核心塔的光芒暖洋洋的。
派蒙：走！带你去城门看看！
【立绘：主角 / 轻松、派蒙 / 开心】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟巨噬细胞大哥借吸尘器玩
选项 2：跟淋巴细胞小姐姐要签名
选项 3：主动帮细胞们加固主城防线
互动 1：跟巨噬细胞大哥借吸尘器玩
【立绘：主角 / 期待、派蒙 / 撇嘴、巨噬细胞 / 爽朗】
主角：大哥，能借你的吸尘器玩一会儿吗？
巨噬细胞：不行不行！这是我的宝贝工具！你要体验的话，我们可以一起巡逻！
派蒙：巡逻哪有清理毒素有意思！
【剧情汇流：进入主线剧情】
互动 2：跟淋巴细胞小姐姐要签名
【立绘：主角 / 期待、派蒙 / 正常、淋巴细胞 / 傲娇】
主角：小姐姐，能给我签个名吗？
淋巴细胞：签名可以！但你要答应，以后再遇到酒局，也像这次一样坚定拒绝！
主角：我答应！
旁白：小姐姐掏出一支小画笔，在我的手背上画了一个亮晶晶的小喇叭。
【剧情汇流：进入主线剧情】
互动 3：主动帮细胞们加固主城防线
【立绘：主角 / 坚定、派蒙 / 开心、巨噬细胞 / 爽朗、淋巴细胞 / 活泼】【特殊：立绘超 3 人】
主角：派蒙，我想帮大家加固防线！
派蒙：主人居然主动帮忙！太好了！
旁白：细胞们欢呼起来，巨噬细胞大哥们搬来防护板，淋巴细胞小姐姐们帮忙传递工具，我们一起把城门的防护栏加固得严严实实。
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 开心、分泌细胞 / 健康】
旁白：加固完防线，分泌细胞们捧着一个用营养液小草编的花环，递到我手里。花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退】
乳房硬块 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然没给我留半点机会！等着瞧，下次你要是松懈，我就卷土重来！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳房硬块 BOSS / 败退、腋下淋巴结肿大 BOSS / 败退】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（气急败坏却不敢靠近）算你狠！居然把通道通得这么顺畅！你给我记着，下次主人再牵挂熬夜，我定要把这里堵得严严实实！
派蒙：你做梦！我们主城的防线越来越牢固，你根本没机会！
旁白：健康科普：长期保持健康习惯，可降低乳腺结节恶变风险，早期硬块多无痛、边界不清，需每月自查。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
防线稳固结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的欢呼声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"咬咬牙，端起酒杯喝了半杯",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`妥协饮酒主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 焦虑、张总 / 笑意、经理 / 威严】
张总：小林是吧？年轻有为！来，陪我喝一杯！
【立绘：主角 / 疲惫、张总 / 笑意、经理 / 威严、同事 / 起哄】【特殊：立绘超 3 人】
旁白：我看着眼前的白酒，胃里一阵翻江倒海。
选 1：喝半杯
【立绘：主角 / 懊悔、经理 / 满意、张总 / 笑意】
旁白：我咬咬牙，端起酒杯，仰头喝了半杯。辛辣的液体烧得喉咙生疼，胃里瞬间翻江倒海。
经理：这才对嘛！年轻人要懂得变通！
旁白：张总满意地点点头，又和其他人碰杯去了。我捂着胸口，强忍着不适，心里却后悔得要命。
【立绘：主角 / 懊悔】
派蒙（意识音）：主人！你怎么这么傻啊！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
黑雾笼罩结局（妥协饮酒主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 醉酒】
旁白：乳腺主城被厚厚的黑雾笼罩，天空灰蒙蒙的。彩虹导管桥黑乎乎的，营养液流得慢吞吞；蘑菇屋的门歪歪扭扭，有的还破了个洞。
旁白：巨噬细胞们喝得东倒西歪，吸尘器扔在一边，嘴里嘟囔着 “五魁首啊…… 六六六啊……”，一个巨噬细胞大哥看到我，虚弱地伸出手。
巨噬细胞：主人…… 我真的挺不住了…… 酒精毒素太厉害……
派蒙：（红着眼睛，声音哽咽）你看…… 这就是你喝酒的后果……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱、淋巴细胞 / 无助】【特殊：立绘超 3 人】
旁白：淋巴细胞小姐姐们蹲在地上，小喇叭哑了，她们抹着眼泪，一脸无助。营养核心塔的光芒暗沉沉的，像快熄灭的蜡烛。我心里发酸。
选项 1：扶起喝醉的巨噬细胞
选项 2：帮淋巴细胞小姐姐修喇叭
选项 3：承诺以后再也不饮酒，保护细胞
互动 1：扶起喝醉的巨噬细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、巨噬细胞 / 虚弱】
旁白：我蹲下身，扶起一个喝醉的巨噬细胞大哥。他抱着我的腿，哭得稀里哗啦。
巨噬细胞：主人…… 别再喝酒了…… 我们扛不住了…… 头晕…… 胸口疼……
主角：对不起…… 对不起……
【剧情汇流：进入主线剧情】
互动 2：帮淋巴细胞小姐姐修喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
主角：小姐姐，我帮你修喇叭吧。
淋巴细胞：谢谢主人…… 喇叭坏了…… 没法传递警报……BOSS 要闯进来了…… 怎么办……
旁白：我接过喇叭，小心翼翼地检查，却发现它被黑雾腐蚀得变了形。派蒙别过头，偷偷抹了抹眼泪。
【剧情汇流：进入主线剧情】
互动 3：承诺以后再也不饮酒，保护细胞
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱】
主角：对不起，是我错了。我承诺，以后再也不喝酒了，我会好好保护你们，保护这座主城！
派蒙：（猛地抬头，眼睛泛红，倔强别脸）你说真的？这次可别再骗我们了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱、淋巴细胞 / 期待】【特殊：立绘超 3 人】
旁白：听到承诺，虚弱的细胞们勉强挤出微笑。巨噬细胞大哥们撑着身体点头，淋巴细胞小姐姐们擦去眼泪，眼神里多了几分希望。就在这时，一阵嚣张的大笑声传来。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张】
乳房硬块 BOSS：（得意洋洋）哈哈哈哈！太棒了！主人喝了酒，你们的防御全垮了！现在，这座主城就是我的囊中之物了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张、腋下淋巴结肿大 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（得意洋洋）嘿嘿嘿嘿！痛快极了！主人熬坏了身子，淋巴通道全堵死了！这下，整个主城的 “生命线” 都归我掌控！
派蒙：（捂着伤口，红着眼睛冲上去）不许你欺负我的小伙伴！你这个坏蛋！
旁白：可她刚冲出去，就被黑雾呛得咳嗽不止，跌坐在地上。
旁白：健康科普：酒精刺激乳腺组织增生，加速结节恶化，早期会出现乳房胀痛、硬块增大，需立即就医做乳腺超声。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
黑雾笼罩结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的哭泣声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be2",text:"跟张总轻声商量，“张总，我酒量实在不好，少喝一点行不行？”",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`妥协饮酒主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 焦虑、张总 / 笑意、经理 / 威严】
张总：小林是吧？年轻有为！来，陪我喝一杯！
【立绘：主角 / 疲惫、张总 / 笑意、经理 / 威严、同事 / 起哄】【特殊：立绘超 3 人】
旁白：我看着眼前的白酒，胃里一阵翻江倒海。
选 2：商量少喝一点
【立绘：主角 / 窘迫、经理 / 满意、张总 / 笑意】
主角：张总，我酒量实在不好，您大人有大量，我少喝一点，意思意思就行！
张总：（哈哈大笑）小姑娘还挺实在！行！少喝一点！
旁白：我仰头喝了一小口，白酒的辣味直冲脑门，呛得我咳嗽起来。周围响起一阵哄笑声，我的脸火辣辣的。
【立绘：主角 / 窘迫】
派蒙（意识音）：主人！你怎么这么傻啊！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
黑雾笼罩结局（妥协饮酒主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 醉酒】
旁白：乳腺主城被厚厚的黑雾笼罩，天空灰蒙蒙的。彩虹导管桥黑乎乎的，营养液流得慢吞吞；蘑菇屋的门歪歪扭扭，有的还破了个洞。
旁白：巨噬细胞们喝得东倒西歪，吸尘器扔在一边，嘴里嘟囔着 “五魁首啊…… 六六六啊……”，一个巨噬细胞大哥看到我，虚弱地伸出手。
巨噬细胞：主人…… 我真的挺不住了…… 酒精毒素太厉害……
派蒙：（红着眼睛，声音哽咽）你看…… 这就是你喝酒的后果……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱、淋巴细胞 / 无助】【特殊：立绘超 3 人】
旁白：淋巴细胞小姐姐们蹲在地上，小喇叭哑了，她们抹着眼泪，一脸无助。营养核心塔的光芒暗沉沉的，像快熄灭的蜡烛。我心里发酸。
选项 1：扶起喝醉的巨噬细胞
选项 2：帮淋巴细胞小姐姐修喇叭
选项 3：承诺以后再也不饮酒，保护细胞
互动 1：扶起喝醉的巨噬细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、巨噬细胞 / 虚弱】
旁白：我蹲下身，扶起一个喝醉的巨噬细胞大哥。他抱着我的腿，哭得稀里哗啦。
巨噬细胞：主人…… 别再喝酒了…… 我们扛不住了…… 头晕…… 胸口疼……
主角：对不起…… 对不起……
【剧情汇流：进入主线剧情】
互动 2：帮淋巴细胞小姐姐修喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
主角：小姐姐，我帮你修喇叭吧。
淋巴细胞：谢谢主人…… 喇叭坏了…… 没法传递警报……BOSS 要闯进来了…… 怎么办……
旁白：我接过喇叭，小心翼翼地检查，却发现它被黑雾腐蚀得变了形。派蒙别过头，偷偷抹了抹眼泪。
【剧情汇流：进入主线剧情】
互动 3：承诺以后再也不饮酒，保护细胞
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱】
主角：对不起，是我错了。我承诺，以后再也不喝酒了，我会好好保护你们，保护这座主城！
派蒙：（猛地抬头，眼睛泛红，倔强别脸）你说真的？这次可别再骗我们了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱、淋巴细胞 / 期待】【特殊：立绘超 3 人】
旁白：听到承诺，虚弱的细胞们勉强挤出微笑。巨噬细胞大哥们撑着身体点头，淋巴细胞小姐姐们擦去眼泪，眼神里多了几分希望。就在这时，一阵嚣张的大笑声传来。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张】
乳房硬块 BOSS：（得意洋洋）哈哈哈哈！太棒了！主人喝了酒，你们的防御全垮了！现在，这座主城就是我的囊中之物了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张、腋下淋巴结肿大 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（得意洋洋）嘿嘿嘿嘿！痛快极了！主人熬坏了身子，淋巴通道全堵死了！这下，整个主城的 “生命线” 都归我掌控！
派蒙：（捂着伤口，红着眼睛冲上去）不许你欺负我的小伙伴！你这个坏蛋！
旁白：可她刚冲出去，就被黑雾呛得咳嗽不止，跌坐在地上。
旁白：健康科普：酒精刺激乳腺组织增生，加速结节恶化，早期会出现乳房胀痛、硬块增大，需立即就医做乳腺超声。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
黑雾笼罩结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的哭泣声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be3",text:"碍于面子，硬着头皮喝了一整杯",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`妥协饮酒主线（3 选 1 选项，汇流主线）
【场景切换：酒店包厢】
【立绘：主角 / 焦虑、张总 / 笑意、经理 / 威严】
张总：小林是吧？年轻有为！来，陪我喝一杯！
【立绘：主角 / 疲惫、张总 / 笑意、经理 / 威严、同事 / 起哄】【特殊：立绘超 3 人】
旁白：我看着眼前的白酒，胃里一阵翻江倒海。
选 3：喝整杯
【立绘：主角 / 眩晕、经理 / 满意、张总 / 笑意】
旁白：我看着周围同事起哄的眼神，又看了看经理不容置疑的表情，心一横，端起酒杯一饮而尽。辛辣的液体顺着喉咙滑下去，像烧着了一样。
经理：不错不错！好好表现！
旁白：张总拍了拍我的肩膀，转身又去敬别人。我扶着桌子，感觉天旋地转，胸口隐隐传来一阵胀痛。
【立绘：主角 / 眩晕】
派蒙（意识音）：主人！你怎么这么傻啊！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，营养液哗啦啦地流。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：拒酒周旋主线→第四幕防线稳固结局；妥协饮酒主线→第四幕黑雾笼罩结局】
黑雾笼罩结局（妥协饮酒主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 醉酒】
旁白：乳腺主城被厚厚的黑雾笼罩，天空灰蒙蒙的。彩虹导管桥黑乎乎的，营养液流得慢吞吞；蘑菇屋的门歪歪扭扭，有的还破了个洞。
旁白：巨噬细胞们喝得东倒西歪，吸尘器扔在一边，嘴里嘟囔着 “五魁首啊…… 六六六啊……”，一个巨噬细胞大哥看到我，虚弱地伸出手。
巨噬细胞：主人…… 我真的挺不住了…… 酒精毒素太厉害……
派蒙：（红着眼睛，声音哽咽）你看…… 这就是你喝酒的后果……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱、淋巴细胞 / 无助】【特殊：立绘超 3 人】
旁白：淋巴细胞小姐姐们蹲在地上，小喇叭哑了，她们抹着眼泪，一脸无助。营养核心塔的光芒暗沉沉的，像快熄灭的蜡烛。我心里发酸。
选项 1：扶起喝醉的巨噬细胞
选项 2：帮淋巴细胞小姐姐修喇叭
选项 3：承诺以后再也不饮酒，保护细胞
互动 1：扶起喝醉的巨噬细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、巨噬细胞 / 虚弱】
旁白：我蹲下身，扶起一个喝醉的巨噬细胞大哥。他抱着我的腿，哭得稀里哗啦。
巨噬细胞：主人…… 别再喝酒了…… 我们扛不住了…… 头晕…… 胸口疼……
主角：对不起…… 对不起……
【剧情汇流：进入主线剧情】
互动 2：帮淋巴细胞小姐姐修喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
主角：小姐姐，我帮你修喇叭吧。
淋巴细胞：谢谢主人…… 喇叭坏了…… 没法传递警报……BOSS 要闯进来了…… 怎么办……
旁白：我接过喇叭，小心翼翼地检查，却发现它被黑雾腐蚀得变了形。派蒙别过头，偷偷抹了抹眼泪。
【剧情汇流：进入主线剧情】
互动 3：承诺以后再也不饮酒，保护细胞
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱】
主角：对不起，是我错了。我承诺，以后再也不喝酒了，我会好好保护你们，保护这座主城！
派蒙：（猛地抬头，眼睛泛红，倔强别脸）你说真的？这次可别再骗我们了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 坚定、派蒙 / 期待、巨噬细胞 / 虚弱、淋巴细胞 / 期待】【特殊：立绘超 3 人】
旁白：听到承诺，虚弱的细胞们勉强挤出微笑。巨噬细胞大哥们撑着身体点头，淋巴细胞小姐姐们擦去眼泪，眼神里多了几分希望。就在这时，一阵嚣张的大笑声传来。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张】
乳房硬块 BOSS：（得意洋洋）哈哈哈哈！太棒了！主人喝了酒，你们的防御全垮了！现在，这座主城就是我的囊中之物了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳房硬块 BOSS / 嚣张、腋下淋巴结肿大 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
腋下淋巴结肿大 BOSS：（得意洋洋）嘿嘿嘿嘿！痛快极了！主人熬坏了身子，淋巴通道全堵死了！这下，整个主城的 “生命线” 都归我掌控！
派蒙：（捂着伤口，红着眼睛冲上去）不许你欺负我的小伙伴！你这个坏蛋！
旁白：可她刚冲出去，就被黑雾呛得咳嗽不止，跌坐在地上。
旁白：健康科普：酒精刺激乳腺组织增生，加速结节恶化，早期会出现乳房胀痛、硬块增大，需立即就医做乳腺超声。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
黑雾笼罩结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，我从记忆中抽离，回到了大脑记忆中枢。细胞们的哭泣声，还在我耳边回响。
派蒙：（语气疲惫却认真）记忆不能重来，但未来可以改变！记住今天看到的一切 —— 下次再遇到这种事，可别再犯傻了！我们的命，和你的命，紧紧绑在一起呢！
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头。
派蒙：走吧！去病变乳腺组织挑战 BOSS！本防御小队长带你飞！
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["breastLump","nippleDischarge"],skillHE:{id:"refuseAlcohol",name:"拒绝酒精",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"forcedDrinking",name:"被迫饮酒",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},2:{id:2,title:"熬夜赶项目的健康透支 - Galgame 剧情脚本「点击版」",description:"熬夜赶项目的健康透支 - Galgame 剧情脚本「点击版」",perspective:"adult",intro:`开场：微观世界→大脑记忆中枢
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"微观世界→大脑记忆中枢"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个青壮年专属记忆入口：职场酒局被迫应酬、熬夜赶项目的健康透支、私自滥用减肥药与保健品。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖稳稳触碰 “熬夜赶项目的健康透支” 这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始缓缓扭曲流动，那段沉重的熬夜记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 严肃】"},{id:"s8",speaker:"派蒙",text:"主人！终于要面对这段记忆了！你还记得吗？就是因为你当年为了公司的 “白医计划”，连续好几天熬到凌晨三点大夜，直接把内分泌彻底搅乱，才让乳腺主城出现了最危险的病灶！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个身形虚弱、穿着浅粉色衣裙的分泌细胞，跌跌撞撞从记忆通道口跑了出来，她们抱着沉甸甸的营养液罐子，脚步虚浮、双眼通红布满血丝，一看就是长期没有好好休息。"},{id:"s11",speaker:"旁白",text:"其中一个细胞脚下一软，营养液罐子 “哐当” 一声摔在地上，琥珀色的营养液洒了一地，她委屈地瘪着嘴，眼看就要哭出来。"},{id:"s12",speaker:"分泌细胞",text:"主人…… 我们好难受…… 生物钟完全停摆了…… 导管被扯得越来越紧…… 乳头那里一直有异常分泌物…… 还有被往里拽的牵拉感……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 严肃、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"你都看到了吧？这就是你当年熬夜留下的严重后果！内分泌彻底紊乱，直接催生了两个大怪物 —— 乳头溢液 BOSS、乳头内陷 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确选择，不然这两个 BOSS 会越来越强大，最后彻底占领整个乳腺主城！"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 严肃】"},{id:"s17",speaker:"旁白",text:"我深吸一口气，重重地点了点头。眼前的记忆之门彻底敞开，一股熟悉又疲惫的沉闷气息扑面而来，我被瞬间拉回了当年，那个为了白医计划被迫通宵赶工的夜晚。"},{id:"s18",speaker:"主角",text:"（内心独白）哇，真的回到那个通宵夜了。空气里飘着速溶咖啡的焦苦味，混着凉掉的外卖炸鸡味，还有同事们压抑的哈欠声 —— 这些味道像刻在脑子里，一呼吸就裹满了鼻腔。我摸了摸自己的后颈，果然和记忆里一样，僵得像块冻硬的石头，连转一下都发紧。"},{id:"s19",speaker:"第一幕",text:"办公室的熬夜通知（5 选 1 并联选项）"},{id:"s20",speaker:"舞台指示",text:"【场景切换：职场办公室】"},{id:"s21",speaker:"舞台指示",text:"【立绘：主角 / 正常、经理 / 威严】"},{id:"s22",speaker:"旁白",text:"格子间里是化不开的低气压。同事们的电脑屏幕亮得刺眼，把每个人的脸都映得泛着青白色 —— 有人把冲锋衣裹成被子盖在腿上，脑袋一点一点地打盹；有人用冰凉的罐装咖啡贴着脸，指节因为用力攥着杯子泛着白；键盘敲击声像没上油的齿轮，每一下都拖着疲惫的尾音。"},{id:"s23",speaker:"经理",text:"都精神点！这个项目明天早上 9 点要给甲方总负责人汇报，今晚必须把最后三个模块的代码写完、压力测试通过！谁要是敢提前走，这个季度的绩效直接扣三分之一 —— 别跟我说 “熬不住”，年轻人连这点苦都吃不了，以后怎么往上走？你们以为公司招你们来是养闲人的？"},{id:"s24",speaker:"舞台指示",text:"【立绘：主角 / 正常、经理 / 威严、小李 / 苦相】"},{id:"s25",speaker:"旁白",text:"同事们纷纷低下头，没人敢吭声。坐在我斜对面的小李偷偷冲我挤了挤眼，他的黑眼圈快耷拉到下巴，嘴角撇成了 “苦瓜弯”，还比了个 “咖啡续命” 的手势 —— 他桌上的咖啡罐已经堆了三个，罐身的水珠顺着桌沿往下淌。"},{id:"s26",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、经理 / 威严、小李 / 苦相】"},{id:"s27",speaker:"旁白",text:"我揉了揉发酸的肩膀，感觉眼皮重得像粘了双面胶，连看屏幕上的代码都要眯着眼。兜里的手机震了震，掏出来一看，是我自己半年前存的健康笔记 —— 屏幕上的字都泛着熬夜后的模糊，备注栏里还写着 “项目紧急，先赶工，周末补觉”。"},{id:"s28",speaker:"旁白",text:"长期熬夜会导致下丘脑 - 垂体 - 卵巢轴功能紊乱，雌激素水平异常波动；乳腺结节患者连续熬夜超过 2 天，乳腺组织增生风险增加 40%，伴随胀痛、硬块增大的概率提升 62%。"},{id:"s29",speaker:"旁白",text:"我盯着屏幕，心口猛地一紧。当年我就是把这条笔记设成了 “已读”，然后点开了咖啡软件的外卖界面，加了份 “双倍浓缩”。"}],firstChoices:[{id:"c1",text:"凑到同事小李身边，低声问 “能不能找个靠谱的借口提前走啊？”",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “凑到小李身边问对策”
【立绘：主角 / 焦虑、小李 / 谨慎】
主角：（悄悄挪到小李格子间旁，压低声音）小李，你有没有靠谱的借口能提前走？我真的快睁不开眼了，再熬下去肯定写错题。
小李：（往经理方向瞥了一眼，声音压得像蚊子哼）别傻了！上次小王说 “家里老人突发不舒服”，结果被经理查了行程码 —— 他根本没出公司大门！最后不光扣了绩效，还被安排了下周的通宵值班，现在黑眼圈比熊猫还重。
小李：要么硬着头皮熬，要么找个 “天衣无缝” 的借口跑路，比如 “小区临时封控”，但你得提前 P 好物业的聊天记录，经理现在精得很。
小李：我是不敢走了，你要是跑了，记得明天帮我带份热乎的肉包，楼下那家的，多放酱。
【立绘：主角 / 焦虑】
派蒙（意识音）：“小区封控” 这种借口是能随便用的吗？跑路只能躲一次，下次经理盯你盯得更紧！快选！学他编借口，还是硬气点直接下班？`,nextChoices:[{id:"A",text:"编借口",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？物业吗？什么？我家猫把阳台水管扒裂了？水漫到楼下邻居家了？好好好，我马上回！您帮我跟邻居道个歉，我十分钟就到！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，手指都在抖：“不好意思经理！家里突发急事，我得赶紧回去处理！明天一早我肯定来补进度，绝对不耽误汇报！”
旁白：没等经理回话，我就快步冲出办公室 —— 出门时还撞了下门框，疼得我龇牙咧嘴，却不敢停。走廊里的声控灯随着我的脚步亮了又灭，光打在墙上，像我晃悠的影子。
旁白：一路跑到地铁站，我才扶着冰凉的栏杆大口喘气。晚风裹着夜露吹在脸上，我摸了摸自己的后颈，僵得能摸到硬邦邦的筋，连带着肩膀都发沉。
【立绘：主角 / 焦虑】
旁白：可心里却犯了怵 —— 手机里根本没有任何 “物业消息”，明天经理要是追问，我该怎么圆这个谎？
派蒙（意识音）：算你机灵，躲过了今晚的熬，但你现在心里踏实吗？下次再遇到这种事，你还敢直接说 “我不熬了” 吗？`,nextChoices:[{id:"A",text:"敢直接说",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定下班”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
旁白：我攥紧了手里的手机，指甲都抠进了掌心 —— 屏幕上的健康笔记亮得刺眼，“乳腺组织增生风险增加 40%” 这几个字像针，扎得我心口发紧。我深吸一口气，点了 “保存” 按钮，把代码文件同步到云端，然后 “啪” 地合上了电脑。
旁白：椅子腿在地板上蹭出 “吱呀” 声，整个办公室都静了下来 —— 同事们抬起头，眼神里裹着惊讶和羡慕；经理的眉头皱得更紧，刚要开口，我先站了起来。
主角：（声音不算大，但每个字都咬得很稳）经理，“白医计划” 的用户端模块我已经写完了，后台接口的框架也搭好了，云端同步记录都在，您可以查。我现在熬得眼睛都花了，再写下去肯定会出错，反而耽误进度。
主角：我明天早上 7 点准时到公司，两个小时就能把剩下的支付模块写完、压力测试通过，绝对不耽误 9 点的汇报。
【立绘：主角 / 坚定、经理 / 愣住、同事 / 同情】
旁白：办公室里静得能听到空调的风声。经理盯着我看了半分钟，又看了眼我电脑上的同步进度条 —— 绿色的进度条显示 “100%”，旁边还标着 “已备份至云端”。
经理：（语气硬邦邦，却没了之前的尖锐）行吧，明天要是迟到，绩效照样扣。
主角：谢谢经理。
【立绘：主角 / 轻松、小李 / 苦相】
旁白：我抓起外套，冲对面的小李挥了挥手，转身走出办公室。走廊里的声控灯亮了又灭，走出办公楼时，凌晨的风裹着桂花香吹过来 —— 我才想起，那年的秋天来得特别早，连风里都裹着甜香。
旁白：回家洗了个热水澡，倒头就睡，梦里都是乳腺主城的雾散了，分泌细胞抱着装满的营养液罐子，哼着不成调的小曲儿。
【立绘：主角 / 轻松】
派蒙（意识音）：（傲娇地哼了一声）算你有点脑子，没白疼你！熬夜不是 “努力”，是拿健康换老板的 KPI，值当吗？
【剧情跳转：直接进入第二幕 “早起赶工的健康节奏” 主线】`},{id:"B",text:"不敢，下次还编借口",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协熬夜”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的健康笔记 ——“扣三分之一绩效” 这几个字像石头，压得我心口发沉。刚入职半年，房租、花呗、水电煤都等着工资填，我实在不敢赌，也赌不起。
主角：（内心独白）就这一次，真的就这一次。等项目结束，我就请两天假，把这觉补回来。
【立绘：主角 / 疲惫、小李 / 苦相】
旁白：我点开咖啡软件，加了份 “双倍浓缩”，又备注了 “多冰”—— 只有冰的能让我稍微清醒点。然后我揉了揉发红的眼睛，重新打开代码界面。
旁白：键盘敲击声又响了起来，只是比刚才更拖沓 —— 每敲一行，我都得眯着眼确认三遍，生怕打错变量名，连 “user_id” 都能写成 “user_di”。
小李：（推过来一罐咖啡，小声说）撑住，等下凌晨四点，外卖会送包子，楼下那家的，热乎的。
【立绘：主角 / 疲惫】
旁白：我扯了扯嘴角，没说话。晚风从窗户缝里吹进来，带着凉意，可我的后颈却僵得发烫，胸口也隐隐闷得慌 —— 像压了块湿毛巾，连呼吸都沉。
派蒙（意识音）：（带着几分失望）呵，“下次绝对不熬”？这话我听你说过八百遍了。等着瞧吧，你今晚熬的夜，就是明天主城的 “困雾”，到时候细胞们哭都没地方哭。
【剧情跳转：直接进入第二幕 “熬夜后的身体透支” 主线】`}]},{id:"B",text:"直接下班",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定下班”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
旁白：我攥紧了手里的手机，指甲都抠进了掌心 —— 屏幕上的健康笔记亮得刺眼，“乳腺组织增生风险增加 40%” 这几个字像针，扎得我心口发紧。我深吸一口气，点了 “保存” 按钮，把代码文件同步到云端，然后 “啪” 地合上了电脑。
旁白：椅子腿在地板上蹭出 “吱呀” 声，整个办公室都静了下来 —— 同事们抬起头，眼神里裹着惊讶和羡慕；经理的眉头皱得更紧，刚要开口，我先站了起来。
主角：（声音不算大，但每个字都咬得很稳）经理，“白医计划” 的用户端模块我已经写完了，后台接口的框架也搭好了，云端同步记录都在，您可以查。我现在熬得眼睛都花了，再写下去肯定会出错，反而耽误进度。
主角：我明天早上 7 点准时到公司，两个小时就能把剩下的支付模块写完、压力测试通过，绝对不耽误 9 点的汇报。
【立绘：主角 / 坚定、经理 / 愣住、同事 / 同情】
旁白：办公室里静得能听到空调的风声。经理盯着我看了半分钟，又看了眼我电脑上的同步进度条 —— 绿色的进度条显示 “100%”，旁边还标着 “已备份至云端”。
经理：（语气硬邦邦，却没了之前的尖锐）行吧，明天要是迟到，绩效照样扣。
主角：谢谢经理。
【立绘：主角 / 轻松、小李 / 苦相】
旁白：我抓起外套，冲对面的小李挥了挥手，转身走出办公室。走廊里的声控灯亮了又灭，走出办公楼时，凌晨的风裹着桂花香吹过来 —— 我才想起，那年的秋天来得特别早，连风里都裹着甜香。
旁白：回家洗了个热水澡，倒头就睡，梦里都是乳腺主城的雾散了，分泌细胞抱着装满的营养液罐子，哼着不成调的小曲儿。
【立绘：主角 / 轻松】
派蒙（意识音）：（傲娇地哼了一声）算你有点脑子，没白疼你！熬夜不是 “努力”，是拿健康换老板的 KPI，值当吗？
【剧情跳转：直接进入第二幕 “早起赶工的健康节奏” 主线】`}]},{id:"c2",text:"打开工作群，发消息 “我今晚偏头痛犯了，眼睛都看不清屏幕了，能不能请假回去休息？”",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “工作群发偏头痛请假消息”
【立绘：主角 / 焦虑、经理 / 威严】
旁白：我点开工作群，手指在屏幕上抖了半天才敲完字，每个字都透着小心翼翼：“经理，我今晚偏头痛犯了，眼睛都看不清屏幕了，敲代码总出错。能不能请假回去休息？明天一早 7 点我就到公司补进度，绝对不耽误 9 点的汇报！”
旁白：消息刚发出去，手机就 “叮” 地响了一声 —— 是经理的私聊，字里行间都透着不耐烦，连标点符号都像带着刺。
经理：偏头痛？冲杯浓咖啡就好了！年轻人别这么娇气，项目黄了，你这点工资赔得起吗？必须留下，再废话扣你一半绩效！
【立绘：主角 / 焦虑、经理 / 威严、同事 / 同情】
旁白：我看着屏幕上的字，脸颊瞬间发烫，连耳尖都烧了起来。旁边的同事偷偷把自己的布洛芬推到我桌角，包装纸都皱了 —— 他刚推过来，又飞快缩了回去，因为经理的目光正扫过来，带着 “谁敢帮她就一起扣绩效” 的警告。
【立绘：主角 / 焦虑、同事 / 同情】
派蒙（意识音）：你看，这种借口根本没用！经理眼里只有项目，哪管你疼不疼？现在怎么办？硬着头皮熬，还是换个理由坚持请假？`,nextChoices:[{id:"A",text:"硬着头皮熬",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协熬夜”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的健康笔记 ——“扣三分之一绩效” 这几个字像石头，压得我心口发沉。刚入职半年，房租、花呗、水电煤都等着工资填，我实在不敢赌，也赌不起。
主角：（内心独白）就这一次，真的就这一次。等项目结束，我就请两天假，把这觉补回来。
【立绘：主角 / 疲惫、小李 / 苦相】
旁白：我点开咖啡软件，加了份 “双倍浓缩”，又备注了 “多冰”—— 只有冰的能让我稍微清醒点。然后我揉了揉发红的眼睛，重新打开代码界面。
旁白：键盘敲击声又响了起来，只是比刚才更拖沓 —— 每敲一行，我都得眯着眼确认三遍，生怕打错变量名，连 “user_id” 都能写成 “user_di”。
小李：（推过来一罐咖啡，小声说）撑住，等下凌晨四点，外卖会送包子，楼下那家的，热乎的。
【立绘：主角 / 疲惫】
旁白：我扯了扯嘴角，没说话。晚风从窗户缝里吹进来，带着凉意，可我的后颈却僵得发烫，胸口也隐隐闷得慌 —— 像压了块湿毛巾，连呼吸都沉。
派蒙（意识音）：（带着几分失望）呵，“下次绝对不熬”？这话我听你说过八百遍了。等着瞧吧，你今晚熬的夜，就是明天主城的 “困雾”，到时候细胞们哭都没地方哭。
【剧情跳转：直接进入第二幕 “熬夜后的身体透支” 主线】`},{id:"B",text:"换理由",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？物业吗？什么？我家猫把阳台水管扒裂了？水漫到楼下邻居家了？好好好，我马上回！您帮我跟邻居道个歉，我十分钟就到！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，手指都在抖：“不好意思经理！家里突发急事，我得赶紧回去处理！明天一早我肯定来补进度，绝对不耽误汇报！”
旁白：没等经理回话，我就快步冲出办公室 —— 出门时还撞了下门框，疼得我龇牙咧嘴，却不敢停。走廊里的声控灯随着我的脚步亮了又灭，光打在墙上，像我晃悠的影子。
旁白：一路跑到地铁站，我才扶着冰凉的栏杆大口喘气。晚风裹着夜露吹在脸上，我摸了摸自己的后颈，僵得能摸到硬邦邦的筋，连带着肩膀都发沉。
【立绘：主角 / 焦虑】
旁白：可心里却犯了怵 —— 手机里根本没有任何 “物业消息”，明天经理要是追问，我该怎么圆这个谎？
派蒙（意识音）：算你机灵，躲过了今晚的熬，但你现在心里踏实吗？下次再遇到这种事，你还敢直接说 “我不熬了” 吗？`,nextChoices:[{id:"A",text:"敢直接说",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定下班”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
旁白：我攥紧了手里的手机，指甲都抠进了掌心 —— 屏幕上的健康笔记亮得刺眼，“乳腺组织增生风险增加 40%” 这几个字像针，扎得我心口发紧。我深吸一口气，点了 “保存” 按钮，把代码文件同步到云端，然后 “啪” 地合上了电脑。
旁白：椅子腿在地板上蹭出 “吱呀” 声，整个办公室都静了下来 —— 同事们抬起头，眼神里裹着惊讶和羡慕；经理的眉头皱得更紧，刚要开口，我先站了起来。
主角：（声音不算大，但每个字都咬得很稳）经理，“白医计划” 的用户端模块我已经写完了，后台接口的框架也搭好了，云端同步记录都在，您可以查。我现在熬得眼睛都花了，再写下去肯定会出错，反而耽误进度。
主角：我明天早上 7 点准时到公司，两个小时就能把剩下的支付模块写完、压力测试通过，绝对不耽误 9 点的汇报。
【立绘：主角 / 坚定、经理 / 愣住、同事 / 同情】
旁白：办公室里静得能听到空调的风声。经理盯着我看了半分钟，又看了眼我电脑上的同步进度条 —— 绿色的进度条显示 “100%”，旁边还标着 “已备份至云端”。
经理：（语气硬邦邦，却没了之前的尖锐）行吧，明天要是迟到，绩效照样扣。
主角：谢谢经理。
【立绘：主角 / 轻松、小李 / 苦相】
旁白：我抓起外套，冲对面的小李挥了挥手，转身走出办公室。走廊里的声控灯亮了又灭，走出办公楼时，凌晨的风裹着桂花香吹过来 —— 我才想起，那年的秋天来得特别早，连风里都裹着甜香。
旁白：回家洗了个热水澡，倒头就睡，梦里都是乳腺主城的雾散了，分泌细胞抱着装满的营养液罐子，哼着不成调的小曲儿。
【立绘：主角 / 轻松】
派蒙（意识音）：（傲娇地哼了一声）算你有点脑子，没白疼你！熬夜不是 “努力”，是拿健康换老板的 KPI，值当吗？
【剧情跳转：直接进入第二幕 “早起赶工的健康节奏” 主线】`},{id:"B",text:"不敢，下次还编借口",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协熬夜”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的健康笔记 ——“扣三分之一绩效” 这几个字像石头，压得我心口发沉。刚入职半年，房租、花呗、水电煤都等着工资填，我实在不敢赌，也赌不起。
主角：（内心独白）就这一次，真的就这一次。等项目结束，我就请两天假，把这觉补回来。
【立绘：主角 / 疲惫、小李 / 苦相】
旁白：我点开咖啡软件，加了份 “双倍浓缩”，又备注了 “多冰”—— 只有冰的能让我稍微清醒点。然后我揉了揉发红的眼睛，重新打开代码界面。
旁白：键盘敲击声又响了起来，只是比刚才更拖沓 —— 每敲一行，我都得眯着眼确认三遍，生怕打错变量名，连 “user_id” 都能写成 “user_di”。
小李：（推过来一罐咖啡，小声说）撑住，等下凌晨四点，外卖会送包子，楼下那家的，热乎的。
【立绘：主角 / 疲惫】
旁白：我扯了扯嘴角，没说话。晚风从窗户缝里吹进来，带着凉意，可我的后颈却僵得发烫，胸口也隐隐闷得慌 —— 像压了块湿毛巾，连呼吸都沉。
派蒙（意识音）：（带着几分失望）呵，“下次绝对不熬”？这话我听你说过八百遍了。等着瞧吧，你今晚熬的夜，就是明天主城的 “困雾”，到时候细胞们哭都没地方哭。
【剧情跳转：直接进入第二幕 “熬夜后的身体透支” 主线】`}]}]},{id:"c3",text:"假装接电话，捂着嘴小声说 “啊？物业说我家猫把阳台水管扒裂了，水漫到楼下了，我得马上回！”",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “假装接电话跑路”
【立绘：主角 / 焦虑、经理 / 威严】
主角：（故意提高音量，语气慌张）喂？物业吗？什么？我家猫把阳台水管扒裂了？水漫到楼下邻居家了？好好好，我马上回！您帮我跟邻居道个歉，我十分钟就到！
旁白：说完，我抓起椅背上的外套，冲经理扬了扬手机，手指都在抖：“不好意思经理！家里突发急事，我得赶紧回去处理！明天一早我肯定来补进度，绝对不耽误汇报！”
旁白：没等经理回话，我就快步冲出办公室 —— 出门时还撞了下门框，疼得我龇牙咧嘴，却不敢停。走廊里的声控灯随着我的脚步亮了又灭，光打在墙上，像我晃悠的影子。
旁白：一路跑到地铁站，我才扶着冰凉的栏杆大口喘气。晚风裹着夜露吹在脸上，我摸了摸自己的后颈，僵得能摸到硬邦邦的筋，连带着肩膀都发沉。
【立绘：主角 / 焦虑】
旁白：可心里却犯了怵 —— 手机里根本没有任何 “物业消息”，明天经理要是追问，我该怎么圆这个谎？
派蒙（意识音）：算你机灵，躲过了今晚的熬，但你现在心里踏实吗？下次再遇到这种事，你还敢直接说 “我不熬了” 吗？`,nextChoices:[{id:"A",text:"敢直接说",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定下班”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
旁白：我攥紧了手里的手机，指甲都抠进了掌心 —— 屏幕上的健康笔记亮得刺眼，“乳腺组织增生风险增加 40%” 这几个字像针，扎得我心口发紧。我深吸一口气，点了 “保存” 按钮，把代码文件同步到云端，然后 “啪” 地合上了电脑。
旁白：椅子腿在地板上蹭出 “吱呀” 声，整个办公室都静了下来 —— 同事们抬起头，眼神里裹着惊讶和羡慕；经理的眉头皱得更紧，刚要开口，我先站了起来。
主角：（声音不算大，但每个字都咬得很稳）经理，“白医计划” 的用户端模块我已经写完了，后台接口的框架也搭好了，云端同步记录都在，您可以查。我现在熬得眼睛都花了，再写下去肯定会出错，反而耽误进度。
主角：我明天早上 7 点准时到公司，两个小时就能把剩下的支付模块写完、压力测试通过，绝对不耽误 9 点的汇报。
【立绘：主角 / 坚定、经理 / 愣住、同事 / 同情】
旁白：办公室里静得能听到空调的风声。经理盯着我看了半分钟，又看了眼我电脑上的同步进度条 —— 绿色的进度条显示 “100%”，旁边还标着 “已备份至云端”。
经理：（语气硬邦邦，却没了之前的尖锐）行吧，明天要是迟到，绩效照样扣。
主角：谢谢经理。
【立绘：主角 / 轻松、小李 / 苦相】
旁白：我抓起外套，冲对面的小李挥了挥手，转身走出办公室。走廊里的声控灯亮了又灭，走出办公楼时，凌晨的风裹着桂花香吹过来 —— 我才想起，那年的秋天来得特别早，连风里都裹着甜香。
旁白：回家洗了个热水澡，倒头就睡，梦里都是乳腺主城的雾散了，分泌细胞抱着装满的营养液罐子，哼着不成调的小曲儿。
【立绘：主角 / 轻松】
派蒙（意识音）：（傲娇地哼了一声）算你有点脑子，没白疼你！熬夜不是 “努力”，是拿健康换老板的 KPI，值当吗？
【剧情跳转：直接进入第二幕 “早起赶工的健康节奏” 主线】`},{id:"B",text:"不敢，下次还编借口",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协熬夜”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的健康笔记 ——“扣三分之一绩效” 这几个字像石头，压得我心口发沉。刚入职半年，房租、花呗、水电煤都等着工资填，我实在不敢赌，也赌不起。
主角：（内心独白）就这一次，真的就这一次。等项目结束，我就请两天假，把这觉补回来。
【立绘：主角 / 疲惫、小李 / 苦相】
旁白：我点开咖啡软件，加了份 “双倍浓缩”，又备注了 “多冰”—— 只有冰的能让我稍微清醒点。然后我揉了揉发红的眼睛，重新打开代码界面。
旁白：键盘敲击声又响了起来，只是比刚才更拖沓 —— 每敲一行，我都得眯着眼确认三遍，生怕打错变量名，连 “user_id” 都能写成 “user_di”。
小李：（推过来一罐咖啡，小声说）撑住，等下凌晨四点，外卖会送包子，楼下那家的，热乎的。
【立绘：主角 / 疲惫】
旁白：我扯了扯嘴角，没说话。晚风从窗户缝里吹进来，带着凉意，可我的后颈却僵得发烫，胸口也隐隐闷得慌 —— 像压了块湿毛巾，连呼吸都沉。
派蒙（意识音）：（带着几分失望）呵，“下次绝对不熬”？这话我听你说过八百遍了。等着瞧吧，你今晚熬的夜，就是明天主城的 “困雾”，到时候细胞们哭都没地方哭。
【剧情跳转：直接进入第二幕 “熬夜后的身体透支” 主线】`}]},{id:"c4",text:"攥紧手机，心里默念 “必须下班，健康比绩效重要”",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “坚定下班”【主线】
【立绘：主角 / 坚定、经理 / 威严、同事 / 同情】
旁白：我攥紧了手里的手机，指甲都抠进了掌心 —— 屏幕上的健康笔记亮得刺眼，“乳腺组织增生风险增加 40%” 这几个字像针，扎得我心口发紧。我深吸一口气，点了 “保存” 按钮，把代码文件同步到云端，然后 “啪” 地合上了电脑。
旁白：椅子腿在地板上蹭出 “吱呀” 声，整个办公室都静了下来 —— 同事们抬起头，眼神里裹着惊讶和羡慕；经理的眉头皱得更紧，刚要开口，我先站了起来。
主角：（声音不算大，但每个字都咬得很稳）经理，“白医计划” 的用户端模块我已经写完了，后台接口的框架也搭好了，云端同步记录都在，您可以查。我现在熬得眼睛都花了，再写下去肯定会出错，反而耽误进度。
主角：我明天早上 7 点准时到公司，两个小时就能把剩下的支付模块写完、压力测试通过，绝对不耽误 9 点的汇报。
【立绘：主角 / 坚定、经理 / 愣住、同事 / 同情】
旁白：办公室里静得能听到空调的风声。经理盯着我看了半分钟，又看了眼我电脑上的同步进度条 —— 绿色的进度条显示 “100%”，旁边还标着 “已备份至云端”。
经理：（语气硬邦邦，却没了之前的尖锐）行吧，明天要是迟到，绩效照样扣。
主角：谢谢经理。
【立绘：主角 / 轻松、小李 / 苦相】
旁白：我抓起外套，冲对面的小李挥了挥手，转身走出办公室。走廊里的声控灯亮了又灭，走出办公楼时，凌晨的风裹着桂花香吹过来 —— 我才想起，那年的秋天来得特别早，连风里都裹着甜香。
旁白：回家洗了个热水澡，倒头就睡，梦里都是乳腺主城的雾散了，分泌细胞抱着装满的营养液罐子，哼着不成调的小曲儿。
【立绘：主角 / 轻松】
派蒙（意识音）：（傲娇地哼了一声）算你有点脑子，没白疼你！熬夜不是 “努力”，是拿健康换老板的 KPI，值当吗？
【剧情跳转：直接进入第二幕 “早起赶工的健康节奏” 主线】`},{id:"c5",text:"叹口气，心里想 “算了，扣三分之一绩效太亏，熬完这晚就好”",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “妥协熬夜”【主线】
【立绘：主角 / 疲惫、经理 / 威严】
旁白：我叹了口气，默默把手机揣回兜里，手指无意识地摩挲着屏幕上的健康笔记 ——“扣三分之一绩效” 这几个字像石头，压得我心口发沉。刚入职半年，房租、花呗、水电煤都等着工资填，我实在不敢赌，也赌不起。
主角：（内心独白）就这一次，真的就这一次。等项目结束，我就请两天假，把这觉补回来。
【立绘：主角 / 疲惫、小李 / 苦相】
旁白：我点开咖啡软件，加了份 “双倍浓缩”，又备注了 “多冰”—— 只有冰的能让我稍微清醒点。然后我揉了揉发红的眼睛，重新打开代码界面。
旁白：键盘敲击声又响了起来，只是比刚才更拖沓 —— 每敲一行，我都得眯着眼确认三遍，生怕打错变量名，连 “user_id” 都能写成 “user_di”。
小李：（推过来一罐咖啡，小声说）撑住，等下凌晨四点，外卖会送包子，楼下那家的，热乎的。
【立绘：主角 / 疲惫】
旁白：我扯了扯嘴角，没说话。晚风从窗户缝里吹进来，带着凉意，可我的后颈却僵得发烫，胸口也隐隐闷得慌 —— 像压了块湿毛巾，连呼吸都沉。
派蒙（意识音）：（带着几分失望）呵，“下次绝对不熬”？这话我听你说过八百遍了。等着瞧吧，你今晚熬的夜，就是明天主城的 “困雾”，到时候细胞们哭都没地方哭。
【剧情跳转：直接进入第二幕 “熬夜后的身体透支” 主线】`}],secondChoicesHE:[{id:"he1",text:"泡一杯温蜂蜜水，代替昨晚的浓咖啡",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 1：早起赶工的健康节奏
【场景切换：职场办公室】
【立绘：主角 / 轻松、小李 / 疲惫】
旁白：早上 6 点 50 分，我推开办公室的门 —— 阳光透过落地窗洒进来，把键盘照得发亮，空气里没有了昨晚的咖啡焦苦味，反而飘着楼下早餐铺的豆浆香。
旁白：我把给小李带的肉包放在他桌上，肉包还热乎着，裹着油纸的香气钻鼻子。然后我打开电脑 —— 云端同步的代码框架整整齐齐，连注释都标得清清楚楚。
【立绘：主角 / 轻松】
旁白：我从抽屉里拿出保温杯，泡了杯温豆浆，小口喝着，胃里暖暖的，没有了昨晚的反酸感。不到 8 点，最后一个支付模块的代码就写完了，压力测试一次性通过 —— 屏幕上显示 “测试通过：99.9% 稳定性”，绿色的对勾亮得晃眼。
【立绘：主角 / 轻松、经理 / 缓和】
旁白：8 点 50 分，经理抱着早餐走进来，看到我屏幕上的完成界面，愣了一下，语气缓和了点：“没想到你效率这么高，比熬通宵的人做得还好。”
主角：（笑着递过打印好的方案）休息好了，脑子转得快，不容易出错。
选 1：泡温蜂蜜水
【立绘：主角 / 轻松】
旁白：我从抽屉里拿出蜂蜜罐，用勺子舀了小半勺，泡了杯温蜂蜜水 —— 水刚没过杯底，蜂蜜就化了，甜香裹着热气飘起来，连空气都软了。
旁白：我小口喝着，甜而不腻，胃里的暖意慢慢散开，连后颈的僵硬都松快了点。
【立绘：主角 / 轻松、甲方总负责人 / 满意、经理 / 缓和】
旁白：汇报时，我思路清晰，把每个模块的逻辑都讲得明明白白，连甲方提出的 “支付安全冗余” 问题，都能立刻给出两种解决方案。
甲方总负责人：（点着头）你们这个小姑娘状态不错，方案做得很细致，比上次熬夜赶工的团队靠谱多了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 1：雾散后的活力主城（早起赶工主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城的雾全散了 —— 天空又变回了暖融融的淡蓝色，像被洗过一样干净；彩虹导管桥的颜色亮得晃眼；乳腺小叶蘑菇屋的门都钉得牢牢的，“细胞之家” 的小木牌重新翘了起来，字边都泛着光。
旁白：巨噬细胞们扛着吞噬吸尘器，吹着口哨在平原上巡逻；淋巴细胞小姐姐们举着小喇叭，在导管桥上跑来跑去；内分泌调节细胞们的钟摆重新动了起来，“滴答滴答” 的声音裹着阳光，落在营养核心塔上 —— 塔的光稳定又温暖，像裹了层毛毯，把整个主城照得像童话世界。
【立绘：主角 / 轻松、派蒙 / 傲娇】
派蒙：（尾巴尖都翘成了小弯月，故意仰着头）走！带你去城门看看 —— 那些 “坏家伙” 根本不敢靠近，看到咱们主城的光就跑了！
【立绘：主角 / 轻松、派蒙 / 傲娇】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟内分泌调节细胞一起调钟摆
选项 2：帮分泌细胞们往蘑菇屋里搬营养液
选项 3：主动给营养核心塔换 “能量电池”（模拟优质睡眠）
互动 1：跟内分泌调节细胞一起调钟摆
【立绘：主角 / 期待、派蒙 / 傲娇、内分泌调节细胞 / 正常】
主角：（走到内分泌调节细胞身边）我帮你把钟摆的螺丝拧紧吧，以后我 23 点前肯定睡，你的钟摆不用再卡着了，每天都能按时下班。
内分泌调节细胞：（眼睛亮得像揉进了星星）谢谢主人！钟摆动了，激素就能按时发了，乳腺导管不会再乱分泌、乱收缩了！
旁白：钟摆 “滴答” 跳了一格，正好落在 “23:01” 的位置，指针擦得发亮，连漆都补好了。
【剧情汇流：进入主线剧情】
互动 2：帮分泌细胞们往蘑菇屋里搬营养液
【立绘：主角 / 期待、派蒙 / 开心、分泌细胞 / 健康】
旁白：分泌细胞们抱着装满的营养液罐子，正往蘑菇屋里搬 —— 罐子比刚才沉了不少，可他们的脚步却轻快得很，有的还哼着不成调的小曲儿。
主角：（接过一个罐子）我来帮你们吧！
旁白：我把罐子稳稳放到蘑菇屋的窗台上，罐子 “咚” 地一声，稳稳当当。
分泌细胞：（笑着递过来一朵营养小草编的花）主人，这是给你的！我们现在有喝不完的营养液啦，导管壁有弹性，乳头也不会再被往里拽了！
【剧情汇流：进入主线剧情】
互动 3：主动给营养核心塔换 “能量电池”
【立绘：主角 / 期待、派蒙 / 开心、内分泌调节细胞 / 正常】
旁白：我从口袋里掏出准备好的 “优质睡眠电池”—— 是用软乎乎的云朵材料做的，还带着阳光的温度，摸起来像棉花糖。
主角：（把电池插进营养核心塔的接口）给核心塔补充点能量，以后再也不熬夜让大家受累了！
旁白：塔上的光 “唰” 地亮了一度，暖得像裹了层毛毯，连空气都软了。细胞们欢呼起来，声音像风铃：“能量够啦！够啦！我们再也不用熬夜了！”
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 温暖、派蒙 / 傲娇、分泌细胞 / 健康】
旁白：互动结束后，分泌细胞们捧着一个用营养液小草编的花环，递到我手里，花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退】
乳头溢液 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然让内分泌细胞的钟摆动了！等着瞧，下次你熬夜，我肯定卷土重来，让导管疯狂分泌！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退、乳头内陷 BOSS / 败退】【特殊：立绘超 3 人】
乳头内陷 BOSS：（黯淡蜷缩，有气无力）可恶…… 导管不再挛缩了…… 我拉不动乳头了……
派蒙：（叉着腰，小胸脯挺得高高的）你做梦！主人以后 23 点前就睡觉，激素稳稳的，你们的灰雾根本进不来，只能在城外喝西北风！
旁白：两个 BOSS 气哼哼地踢了踢石头，可石头都没动 —— 他们的触手连力气都没了，最后只能灰溜溜地飘走了，连雾气都没带走多少。
旁白：健康科普：充足睡眠（每天 7-8 小时，23 点前入睡）可维持内分泌节律稳定，降低乳腺导管异常分泌、纤维组织异常挛缩的风险，从而减少乳头溢液、乳头内陷等症状的发生；乳腺结节患者需避免连续熬夜超过 1 天，减少激素波动对乳腺组织的刺激。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】`},{id:"he2",text:"工作间隙做 5 分钟肩颈拉伸，活动僵硬的脖子",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 1：早起赶工的健康节奏
【场景切换：职场办公室】
【立绘：主角 / 轻松、小李 / 疲惫】
旁白：早上 6 点 50 分，我推开办公室的门 —— 阳光透过落地窗洒进来，把键盘照得发亮，空气里没有了昨晚的咖啡焦苦味，反而飘着楼下早餐铺的豆浆香。
旁白：我把给小李带的肉包放在他桌上，肉包还热乎着，裹着油纸的香气钻鼻子。然后我打开电脑 —— 云端同步的代码框架整整齐齐，连注释都标得清清楚楚。
【立绘：主角 / 轻松】
旁白：我从抽屉里拿出保温杯，泡了杯温豆浆，小口喝着，胃里暖暖的，没有了昨晚的反酸感。不到 8 点，最后一个支付模块的代码就写完了，压力测试一次性通过 —— 屏幕上显示 “测试通过：99.9% 稳定性”，绿色的对勾亮得晃眼。
【立绘：主角 / 轻松、经理 / 缓和】
旁白：8 点 50 分，经理抱着早餐走进来，看到我屏幕上的完成界面，愣了一下，语气缓和了点：“没想到你效率这么高，比熬通宵的人做得还好。”
主角：（笑着递过打印好的方案）休息好了，脑子转得快，不容易出错。
选 2：做肩颈拉伸
【立绘：主角 / 轻松、小李 / 疲惫】
旁白：汇报前的间隙，我站起来，双手举过头顶，慢慢向后仰 —— 僵硬的后颈 “咔哒” 响了一声，却舒服得让人想叹气。我又转了转脖子，活动了下肩膀，原本发紧的胸口也松快了不少，连呼吸都变轻了。
小李：（揉着刚睡醒的眼睛凑过来，头发还翘着）你这拉伸看着不错，教我两下？我昨晚熬了半宿，脖子快僵成石头了。
主角：（笑着示范）先举臂后仰，再左右转，慢慢来，别太用力。
【立绘：主角 / 轻松、甲方总负责人 / 满意、经理 / 缓和】
旁白：汇报时，我状态饱满，条理清晰地讲解了项目逻辑，甲方总负责人频频点头，对方案表示认可。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 1：雾散后的活力主城（早起赶工主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城的雾全散了 —— 天空又变回了暖融融的淡蓝色，像被洗过一样干净；彩虹导管桥的颜色亮得晃眼；乳腺小叶蘑菇屋的门都钉得牢牢的，“细胞之家” 的小木牌重新翘了起来，字边都泛着光。
旁白：巨噬细胞们扛着吞噬吸尘器，吹着口哨在平原上巡逻；淋巴细胞小姐姐们举着小喇叭，在导管桥上跑来跑去；内分泌调节细胞们的钟摆重新动了起来，“滴答滴答” 的声音裹着阳光，落在营养核心塔上 —— 塔的光稳定又温暖，像裹了层毛毯，把整个主城照得像童话世界。
【立绘：主角 / 轻松、派蒙 / 傲娇】
派蒙：（尾巴尖都翘成了小弯月，故意仰着头）走！带你去城门看看 —— 那些 “坏家伙” 根本不敢靠近，看到咱们主城的光就跑了！
【立绘：主角 / 轻松、派蒙 / 傲娇】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟内分泌调节细胞一起调钟摆
选项 2：帮分泌细胞们往蘑菇屋里搬营养液
选项 3：主动给营养核心塔换 “能量电池”（模拟优质睡眠）
互动 1：跟内分泌调节细胞一起调钟摆
【立绘：主角 / 期待、派蒙 / 傲娇、内分泌调节细胞 / 正常】
主角：（走到内分泌调节细胞身边）我帮你把钟摆的螺丝拧紧吧，以后我 23 点前肯定睡，你的钟摆不用再卡着了，每天都能按时下班。
内分泌调节细胞：（眼睛亮得像揉进了星星）谢谢主人！钟摆动了，激素就能按时发了，乳腺导管不会再乱分泌、乱收缩了！
旁白：钟摆 “滴答” 跳了一格，正好落在 “23:01” 的位置，指针擦得发亮，连漆都补好了。
【剧情汇流：进入主线剧情】
互动 2：帮分泌细胞们往蘑菇屋里搬营养液
【立绘：主角 / 期待、派蒙 / 开心、分泌细胞 / 健康】
旁白：分泌细胞们抱着装满的营养液罐子，正往蘑菇屋里搬 —— 罐子比刚才沉了不少，可他们的脚步却轻快得很，有的还哼着不成调的小曲儿。
主角：（接过一个罐子）我来帮你们吧！
旁白：我把罐子稳稳放到蘑菇屋的窗台上，罐子 “咚” 地一声，稳稳当当。
分泌细胞：（笑着递过来一朵营养小草编的花）主人，这是给你的！我们现在有喝不完的营养液啦，导管壁有弹性，乳头也不会再被往里拽了！
【剧情汇流：进入主线剧情】
互动 3：主动给营养核心塔换 “能量电池”
【立绘：主角 / 期待、派蒙 / 开心、内分泌调节细胞 / 正常】
旁白：我从口袋里掏出准备好的 “优质睡眠电池”—— 是用软乎乎的云朵材料做的，还带着阳光的温度，摸起来像棉花糖。
主角：（把电池插进营养核心塔的接口）给核心塔补充点能量，以后再也不熬夜让大家受累了！
旁白：塔上的光 “唰” 地亮了一度，暖得像裹了层毛毯，连空气都软了。细胞们欢呼起来，声音像风铃：“能量够啦！够啦！我们再也不用熬夜了！”
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 温暖、派蒙 / 傲娇、分泌细胞 / 健康】
旁白：互动结束后，分泌细胞们捧着一个用营养液小草编的花环，递到我手里，花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退】
乳头溢液 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然让内分泌细胞的钟摆动了！等着瞧，下次你熬夜，我肯定卷土重来，让导管疯狂分泌！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退、乳头内陷 BOSS / 败退】【特殊：立绘超 3 人】
乳头内陷 BOSS：（黯淡蜷缩，有气无力）可恶…… 导管不再挛缩了…… 我拉不动乳头了……
派蒙：（叉着腰，小胸脯挺得高高的）你做梦！主人以后 23 点前就睡觉，激素稳稳的，你们的灰雾根本进不来，只能在城外喝西北风！
旁白：两个 BOSS 气哼哼地踢了踢石头，可石头都没动 —— 他们的触手连力气都没了，最后只能灰溜溜地飘走了，连雾气都没带走多少。
旁白：健康科普：充足睡眠（每天 7-8 小时，23 点前入睡）可维持内分泌节律稳定，降低乳腺导管异常分泌、纤维组织异常挛缩的风险，从而减少乳头溢液、乳头内陷等症状的发生；乳腺结节患者需避免连续熬夜超过 1 天，减少激素波动对乳腺组织的刺激。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】`},{id:"he3",text:"汇报结束后，跟经理申请下午调休 2 小时补觉",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 1：早起赶工的健康节奏
【场景切换：职场办公室】
【立绘：主角 / 轻松、小李 / 疲惫】
旁白：早上 6 点 50 分，我推开办公室的门 —— 阳光透过落地窗洒进来，把键盘照得发亮，空气里没有了昨晚的咖啡焦苦味，反而飘着楼下早餐铺的豆浆香。
旁白：我把给小李带的肉包放在他桌上，肉包还热乎着，裹着油纸的香气钻鼻子。然后我打开电脑 —— 云端同步的代码框架整整齐齐，连注释都标得清清楚楚。
【立绘：主角 / 轻松】
旁白：我从抽屉里拿出保温杯，泡了杯温豆浆，小口喝着，胃里暖暖的，没有了昨晚的反酸感。不到 8 点，最后一个支付模块的代码就写完了，压力测试一次性通过 —— 屏幕上显示 “测试通过：99.9% 稳定性”，绿色的对勾亮得晃眼。
【立绘：主角 / 轻松、经理 / 缓和】
旁白：8 点 50 分，经理抱着早餐走进来，看到我屏幕上的完成界面，愣了一下，语气缓和了点：“没想到你效率这么高，比熬通宵的人做得还好。”
主角：（笑着递过打印好的方案）休息好了，脑子转得快，不容易出错。
选 3：申请下午调休
【立绘：主角 / 轻松、经理 / 缓和】
旁白：汇报结束后，我走到经理桌前，笑着说：“经理，‘白医计划’已经收尾了，测试报告和上线文档都弄好了。我下午想调休 2 小时补觉，晚上要是有收尾工作，我在家也能做，不耽误事。”
经理：（看着甲方的好评邮件，语气温和）行，下午好好休息，辛苦你了。
【立绘：主角 / 轻松】
旁白：我走出办公楼时，阳光正好，风里的桂花香比昨晚更浓，裹着秋意的甜。我摸了摸自己的后颈，已经不僵了，连脚步都轻快了不少。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 1：雾散后的活力主城（早起赶工主线对应）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、巨噬细胞 / 爽朗】
旁白：乳腺主城的雾全散了 —— 天空又变回了暖融融的淡蓝色，像被洗过一样干净；彩虹导管桥的颜色亮得晃眼；乳腺小叶蘑菇屋的门都钉得牢牢的，“细胞之家” 的小木牌重新翘了起来，字边都泛着光。
旁白：巨噬细胞们扛着吞噬吸尘器，吹着口哨在平原上巡逻；淋巴细胞小姐姐们举着小喇叭，在导管桥上跑来跑去；内分泌调节细胞们的钟摆重新动了起来，“滴答滴答” 的声音裹着阳光，落在营养核心塔上 —— 塔的光稳定又温暖，像裹了层毛毯，把整个主城照得像童话世界。
【立绘：主角 / 轻松、派蒙 / 傲娇】
派蒙：（尾巴尖都翘成了小弯月，故意仰着头）走！带你去城门看看 —— 那些 “坏家伙” 根本不敢靠近，看到咱们主城的光就跑了！
【立绘：主角 / 轻松、派蒙 / 傲娇】
旁白：我跟着派蒙跑到主城门口，眼前弹出三个互动选项。
选项 1：跟内分泌调节细胞一起调钟摆
选项 2：帮分泌细胞们往蘑菇屋里搬营养液
选项 3：主动给营养核心塔换 “能量电池”（模拟优质睡眠）
互动 1：跟内分泌调节细胞一起调钟摆
【立绘：主角 / 期待、派蒙 / 傲娇、内分泌调节细胞 / 正常】
主角：（走到内分泌调节细胞身边）我帮你把钟摆的螺丝拧紧吧，以后我 23 点前肯定睡，你的钟摆不用再卡着了，每天都能按时下班。
内分泌调节细胞：（眼睛亮得像揉进了星星）谢谢主人！钟摆动了，激素就能按时发了，乳腺导管不会再乱分泌、乱收缩了！
旁白：钟摆 “滴答” 跳了一格，正好落在 “23:01” 的位置，指针擦得发亮，连漆都补好了。
【剧情汇流：进入主线剧情】
互动 2：帮分泌细胞们往蘑菇屋里搬营养液
【立绘：主角 / 期待、派蒙 / 开心、分泌细胞 / 健康】
旁白：分泌细胞们抱着装满的营养液罐子，正往蘑菇屋里搬 —— 罐子比刚才沉了不少，可他们的脚步却轻快得很，有的还哼着不成调的小曲儿。
主角：（接过一个罐子）我来帮你们吧！
旁白：我把罐子稳稳放到蘑菇屋的窗台上，罐子 “咚” 地一声，稳稳当当。
分泌细胞：（笑着递过来一朵营养小草编的花）主人，这是给你的！我们现在有喝不完的营养液啦，导管壁有弹性，乳头也不会再被往里拽了！
【剧情汇流：进入主线剧情】
互动 3：主动给营养核心塔换 “能量电池”
【立绘：主角 / 期待、派蒙 / 开心、内分泌调节细胞 / 正常】
旁白：我从口袋里掏出准备好的 “优质睡眠电池”—— 是用软乎乎的云朵材料做的，还带着阳光的温度，摸起来像棉花糖。
主角：（把电池插进营养核心塔的接口）给核心塔补充点能量，以后再也不熬夜让大家受累了！
旁白：塔上的光 “唰” 地亮了一度，暖得像裹了层毛毯，连空气都软了。细胞们欢呼起来，声音像风铃：“能量够啦！够啦！我们再也不用熬夜了！”
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 温暖、派蒙 / 傲娇、分泌细胞 / 健康】
旁白：互动结束后，分泌细胞们捧着一个用营养液小草编的花环，递到我手里，花环上还插着一朵小小的粉色花。
分泌细胞：谢谢主人！这是我们给您的礼物！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退】
乳头溢液 BOSS：（气急败坏却不敢靠近）哼！算你厉害！居然让内分泌细胞的钟摆动了！等着瞧，下次你熬夜，我肯定卷土重来，让导管疯狂分泌！
【立绘：主角 / 温暖、派蒙 / 傲娇、乳头溢液 BOSS / 败退、乳头内陷 BOSS / 败退】【特殊：立绘超 3 人】
乳头内陷 BOSS：（黯淡蜷缩，有气无力）可恶…… 导管不再挛缩了…… 我拉不动乳头了……
派蒙：（叉着腰，小胸脯挺得高高的）你做梦！主人以后 23 点前就睡觉，激素稳稳的，你们的灰雾根本进不来，只能在城外喝西北风！
旁白：两个 BOSS 气哼哼地踢了踢石头，可石头都没动 —— 他们的触手连力气都没了，最后只能灰溜溜地飘走了，连雾气都没带走多少。
旁白：健康科普：充足睡眠（每天 7-8 小时，23 点前入睡）可维持内分泌节律稳定，降低乳腺导管异常分泌、纤维组织异常挛缩的风险，从而减少乳头溢液、乳头内陷等症状的发生；乳腺结节患者需避免连续熬夜超过 1 天，减少激素波动对乳腺组织的刺激。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】`}],secondChoicesBE:[{id:"be1",text:"冲一杯浓咖啡，强撑着赶代码",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 2：熬夜后的身体透支
【场景切换：职场办公室】
【立绘：主角 / 疲惫、小李 / 紧张】
旁白：早上 8 点 50 分，我被小李推醒 —— 我的脑袋磕在键盘上，印出了一串乱码，“user_pay” 变成了 “useeeeer_paaaaay”，连我自己都看不懂。
旁白：我揉了揉发麻的脸，才发现自己趴在桌上睡着了，电脑还亮着，最后一个支付模块的代码只写了一半，连接口都没调通。
小李：（压低声音提醒）经理来了！
【立绘：主角 / 慌乱、经理 / 愤怒、小李 / 紧张】
旁白：我手忙脚乱地关掉乱码页面。经理走过来，看到我屏幕上的半成品，脸色瞬间沉了，像暴风雨前的乌云。
经理：都熬了一晚上，怎么才写了这么点？甲方总负责人马上就到了，你想害死整个部门吗？平时看你挺靠谱的，关键时候掉链子！
【立绘：主角 / 疲惫、经理 / 愤怒】
旁白：我张了张嘴，想说 “我实在熬不住了，脑子都转不动了”，可话到嘴边却变成了 “我马上写，再给我 20 分钟，肯定能写完”。胃里反酸得厉害，连带着胸口都抽了一下，我摸了摸自己的乳房外侧，好像比昨晚更胀了，按一下都发疼。
选 1：冲浓咖啡
【立绘：主角 / 疲惫】
旁白：我冲到茶水间，抓起速溶咖啡罐，倒了满满两勺，冲了杯双倍浓缩咖啡 —— 刚喝了一口，辛辣的苦味就呛得我咳嗽起来，胃里的反酸更严重了，连带着胸口都抽了一下，疼得我弯下腰。
【立绘：主角 / 疲惫、小李 / 同情】
旁白：我攥着咖啡杯回到工位，手指在键盘上抖得厉害，敲错了好几个变量名，“pay_time” 写成了 “pay_timr”，改了三次才改对。
小李：（偷偷递过来一张纸巾，小声说）你脸色太差了，嘴唇都发白了，要不跟经理说实话吧？身体要紧。
【立绘：主角 / 紧张、甲方总负责人 / 严肃、经理 / 紧张】
旁白：我摇了摇头 —— 甲方总负责人已经走进会议室了，皮鞋踩在地板上的声音，像敲在我心上。汇报时我全程紧绷，好几次卡顿，连方案逻辑都讲得断断续续。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 2：雾锁的疲惫主城（熬夜透支主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：乳腺主城的雾浓得像化不开的墨 —— 天空是灰黑色的，连光都透不进来；彩虹导管桥的颜色全褪了，只剩光秃秃的架子，连木头都发潮了；乳腺小叶蘑菇屋的门倒了一半，有的屋顶塌了个角，"细胞之家" 的小木牌被雾裹着，连字都看不清了。
旁白：巨噬细胞们扛着吞噬吸尘器，走两步就打个哈欠，吸尘器的 "嗡嗡" 声像快断气的蚊子，连灰雾都吸不动；淋巴细胞小姐姐们的小喇叭没了声音，蹲在地上揉眼睛，连异常细胞的影子都没力气看；内分泌调节细胞们的钟摆全卡在了 "3:00" 的位置，他们抱着钟摆，靠在营养核心塔下睡着了 —— 塔的光暗得连营养液罐子都照不亮，罐身都瘪了。
旁白：一个巨噬细胞大哥看到我，撑着吸尘器站起来，脚步晃得像踩在棉花上，连站都站不稳。
巨噬细胞：主人…… 灰雾…… 太多了…… 我们吸不完…… 胸口疼…… 导管里黏糊糊的……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱】
派蒙：（红着眼睛，连尾巴都耷拉下来了）你看…… 这就是你熬的夜…… 细胞们连站都站不起来了…… 那两个坏家伙都快把主城裹住了……
旁白：我心里发酸，眼泪都快掉下来了，连呼吸都发紧。眼前弹出三个互动选项，像蒙着灰的小纸条，每个字都透着疼。
选项 1：扶起睡着的内分泌调节细胞
选项 2：帮淋巴细胞小姐姐们擦小喇叭
选项 3：承诺以后每天 23 点前睡觉，给细胞们 "补觉时间"
互动 1：扶起调节细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：我蹲下身，扶起一个抱着钟摆睡着的内分泌调节细胞 —— 他的脸泛着青白色，连嘴唇都没了血色，钟摆的指针还卡在 "3:00"，漆都掉光了。
旁白：我把他靠在蘑菇屋的墙上，垫了块营养小草，他迷迷糊糊地嘟囔。
内分泌调节细胞：钟摆…… 不动了…… 激素…… 乱了…… 导管…… 疯狂分泌…… 乳头…… 被拽进去了……
旁白：我的喉咙发紧，连 "对不起" 都不敢说太大声，怕吵醒他，也怕自己哭出来。
【剧情汇流：进入主线剧情】
互动 2：擦小喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
旁白：我走到一个淋巴细胞小姐姐身边，她的小喇叭上裹着厚厚的灰雾，连喇叭口都堵了，根本吹不出声音。我用袖子轻轻擦着，灰雾沾在手上，凉得像冰，连指尖都发疼。
淋巴细胞：（红着眼睛，眼泪掉在喇叭上，连泪都泛着灰）主人…… 喇叭不响了…… 要是那两个坏家伙再进来…… 我们没法报警了…… 导管会被堵死，乳头会被彻底拉进去的……
旁白：我擦到一半，手指突然顿住 —— 喇叭上的灰雾像粘在上面，怎么擦都擦不干净，连我的袖子都变灰了。
【剧情汇流：进入主线剧情】
互动 3：承诺早睡（真选项・触发隐藏剧情）
【立绘：主角 / 坚定、派蒙 / 期待、内分泌调节细胞 / 疲惫】
旁白：我看着眼前的主城，看着睡着的细胞们，看着卡着 "3:00" 的钟摆，心里后悔得像被揪着 —— 我蹲下身，声音抖得厉害，连眼泪都掉下来了。
主角：对不起…… 是我错了…… 以后我每天 23 点前肯定睡觉，给你们补觉，给你们换能量电池，再也不熬夜了…… 真的……
派蒙：（猛地抬头，眼圈红得像兔子，却倔强地别过脸，连耳朵都耷拉下来了）你说真的？这次可别再骗我们了…… 上次你说'下次不熬'，结果又熬了三天，把细胞们都熬垮了，导管都快被那两个坏家伙拆了……
隐藏剧情：旁白：我的话刚说完，一个内分泌调节细胞迷迷糊糊地睁开眼，他的钟摆指针动了一格 —— 从 "3:00" 跳到了 "2:59"，虽然只动了一格，可漆都亮了点。
内分泌调节细胞：（揉着眼睛问，声音虚得像蚊子哼）主人…… 说话算数吗？
主角：（用力点头，眼泪掉在钟摆上）算数！我现在就把手机闹钟设成 23 点，再也不熬夜了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：可就在这时，一阵嚣张的大笑声裹着浓黑的雾飘进来 —— 城门被重重推开，两个黑影在雾中狰狞可怖。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张】
乳头溢液 BOSS：（阴冷、刺耳，声音像刮玻璃）哈哈哈哈！主人熬夜，激素疯掉！导管疯狂分泌，我越来越强！这座主城就是我的了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张、乳头内陷 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
乳头内陷 BOSS：（冰冷、收缩，纤维束咔咔作响）纤维组织挛缩！乳头被我拉进去！谁都拦不住！你们的乳腺，很快就会被我们彻底控制！
旁白：乳头溢液 BOSS 裹着浓稠的灰黑色雾气，触手黏腻地拍打着地面，每一滴粘液都在腐蚀着结缔组织平原；乳头内陷 BOSS 浑身缠绕着绷紧的纤维束，像无数条收紧的绳索，发出令人牙酸的 "咯吱" 声。
派蒙：（捂着胸口，想冲上去却没力气，只能死死拽着我的袖子，连声音都发颤）主人…… 快醒醒…… 别再熬夜了…… 我们不想…… 不想消失…… 不想让乳头被他们拉进去啊……
旁白：可 BOSS 的触手已经缠住了营养核心塔 —— 塔的光 "啪" 地暗了一下，像快熄灭的蜡烛，连最后一点光都快没了。
旁白：健康科普：长期熬夜会导致内分泌紊乱，雌激素水平异常升高，刺激乳腺导管上皮细胞异常增生，引发乳头溢液；同时纤维组织挛缩会导致乳头内陷，增加乳腺炎症和恶变风险。建议乳腺结节患者每晚 23 点前入睡，保证 7-8 小时优质睡眠。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
六、结局：记忆汇流・回归大脑中枢
HE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、滴答作响的钟摆，都变成了半透明的影子。我感觉自己被轻轻推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 坚定、派蒙 / 傲娇】
旁白：派蒙站在我身边，手里攥着那个 "睡眠守护钟"，钟摆还在 "滴答" 动，连光都暖。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都翘了起来）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
BE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、卡着 "3:00" 的钟摆，都变成了半透明的影子。我感觉自己被重重推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 懊悔、派蒙 / 哽咽】
旁白：派蒙耷拉着脑袋站在我身边 —— 她的发带歪了，手里攥着半块营养小草编的花，花瓣都蔫了，连香都淡了。细胞们的叹气声，还在我耳边绕着，像没散的雾，也像没醒的梦。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都耷拉着）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的，像刚哭过的小将军）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
【脚本结束】`},{id:"be2",text:"跟小李借布洛芬，缓解胸口的闷疼",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 2：熬夜后的身体透支
【场景切换：职场办公室】
【立绘：主角 / 疲惫、小李 / 紧张】
旁白：早上 8 点 50 分，我被小李推醒 —— 我的脑袋磕在键盘上，印出了一串乱码，“user_pay” 变成了 “useeeeer_paaaaay”，连我自己都看不懂。
旁白：我揉了揉发麻的脸，才发现自己趴在桌上睡着了，电脑还亮着，最后一个支付模块的代码只写了一半，连接口都没调通。
小李：（压低声音提醒）经理来了！
【立绘：主角 / 慌乱、经理 / 愤怒、小李 / 紧张】
旁白：我手忙脚乱地关掉乱码页面。经理走过来，看到我屏幕上的半成品，脸色瞬间沉了，像暴风雨前的乌云。
经理：都熬了一晚上，怎么才写了这么点？甲方总负责人马上就到了，你想害死整个部门吗？平时看你挺靠谱的，关键时候掉链子！
【立绘：主角 / 疲惫、经理 / 愤怒】
旁白：我张了张嘴，想说 “我实在熬不住了，脑子都转不动了”，可话到嘴边却变成了 “我马上写，再给我 20 分钟，肯定能写完”。胃里反酸得厉害，连带着胸口都抽了一下，我摸了摸自己的乳房外侧，好像比昨晚更胀了，按一下都发疼。
选 2：跟小李借布洛芬
【立绘：主角 / 疲惫、小李 / 同情】
主角：（拽了拽小李的袖子，声音虚得像蚊子哼）你有布洛芬吗？我胸口有点疼，闷得慌。
小李：（连忙掏出药盒，药盒都被捏变形了）你是不是熬得太狠了？我上次熬通宵也胸口疼，吃了药才好点。你快吃一片，别硬撑。
【立绘：主角 / 疲惫】
旁白：我吞下一片布洛芬，用冷水送服 —— 水刚咽下去，胃里又反酸了。可胸口的闷疼却没缓解多少，反而越来越沉，像压了块石头，连呼吸都费劲。
【立绘：主角 / 紧张、甲方总负责人 / 严肃、经理 / 尴尬】
旁白：汇报时，我好几次忘了自己要说什么，只能盯着方案念，声音都发颤，甲方总负责人的眉头越皱越紧，最后直接打断我。
甲方总负责人：你状态不太好，让你们经理来汇报吧。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 2：雾锁的疲惫主城（熬夜透支主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：乳腺主城的雾浓得像化不开的墨 —— 天空是灰黑色的，连光都透不进来；彩虹导管桥的颜色全褪了，只剩光秃秃的架子，连木头都发潮了；乳腺小叶蘑菇屋的门倒了一半，有的屋顶塌了个角，"细胞之家" 的小木牌被雾裹着，连字都看不清了。
旁白：巨噬细胞们扛着吞噬吸尘器，走两步就打个哈欠，吸尘器的 "嗡嗡" 声像快断气的蚊子，连灰雾都吸不动；淋巴细胞小姐姐们的小喇叭没了声音，蹲在地上揉眼睛，连异常细胞的影子都没力气看；内分泌调节细胞们的钟摆全卡在了 "3:00" 的位置，他们抱着钟摆，靠在营养核心塔下睡着了 —— 塔的光暗得连营养液罐子都照不亮，罐身都瘪了。
旁白：一个巨噬细胞大哥看到我，撑着吸尘器站起来，脚步晃得像踩在棉花上，连站都站不稳。
巨噬细胞：主人…… 灰雾…… 太多了…… 我们吸不完…… 胸口疼…… 导管里黏糊糊的……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱】
派蒙：（红着眼睛，连尾巴都耷拉下来了）你看…… 这就是你熬的夜…… 细胞们连站都站不起来了…… 那两个坏家伙都快把主城裹住了……
旁白：我心里发酸，眼泪都快掉下来了，连呼吸都发紧。眼前弹出三个互动选项，像蒙着灰的小纸条，每个字都透着疼。
选项 1：扶起睡着的内分泌调节细胞
选项 2：帮淋巴细胞小姐姐们擦小喇叭
选项 3：承诺以后每天 23 点前睡觉，给细胞们 "补觉时间"
互动 1：扶起调节细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：我蹲下身，扶起一个抱着钟摆睡着的内分泌调节细胞 —— 他的脸泛着青白色，连嘴唇都没了血色，钟摆的指针还卡在 "3:00"，漆都掉光了。
旁白：我把他靠在蘑菇屋的墙上，垫了块营养小草，他迷迷糊糊地嘟囔。
内分泌调节细胞：钟摆…… 不动了…… 激素…… 乱了…… 导管…… 疯狂分泌…… 乳头…… 被拽进去了……
旁白：我的喉咙发紧，连 "对不起" 都不敢说太大声，怕吵醒他，也怕自己哭出来。
【剧情汇流：进入主线剧情】
互动 2：擦小喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
旁白：我走到一个淋巴细胞小姐姐身边，她的小喇叭上裹着厚厚的灰雾，连喇叭口都堵了，根本吹不出声音。我用袖子轻轻擦着，灰雾沾在手上，凉得像冰，连指尖都发疼。
淋巴细胞：（红着眼睛，眼泪掉在喇叭上，连泪都泛着灰）主人…… 喇叭不响了…… 要是那两个坏家伙再进来…… 我们没法报警了…… 导管会被堵死，乳头会被彻底拉进去的……
旁白：我擦到一半，手指突然顿住 —— 喇叭上的灰雾像粘在上面，怎么擦都擦不干净，连我的袖子都变灰了。
【剧情汇流：进入主线剧情】
互动 3：承诺早睡（真选项・触发隐藏剧情）
【立绘：主角 / 坚定、派蒙 / 期待、内分泌调节细胞 / 疲惫】
旁白：我看着眼前的主城，看着睡着的细胞们，看着卡着 "3:00" 的钟摆，心里后悔得像被揪着 —— 我蹲下身，声音抖得厉害，连眼泪都掉下来了。
主角：对不起…… 是我错了…… 以后我每天 23 点前肯定睡觉，给你们补觉，给你们换能量电池，再也不熬夜了…… 真的……
派蒙：（猛地抬头，眼圈红得像兔子，却倔强地别过脸，连耳朵都耷拉下来了）你说真的？这次可别再骗我们了…… 上次你说'下次不熬'，结果又熬了三天，把细胞们都熬垮了，导管都快被那两个坏家伙拆了……
隐藏剧情：旁白：我的话刚说完，一个内分泌调节细胞迷迷糊糊地睁开眼，他的钟摆指针动了一格 —— 从 "3:00" 跳到了 "2:59"，虽然只动了一格，可漆都亮了点。
内分泌调节细胞：（揉着眼睛问，声音虚得像蚊子哼）主人…… 说话算数吗？
主角：（用力点头，眼泪掉在钟摆上）算数！我现在就把手机闹钟设成 23 点，再也不熬夜了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：可就在这时，一阵嚣张的大笑声裹着浓黑的雾飘进来 —— 城门被重重推开，两个黑影在雾中狰狞可怖。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张】
乳头溢液 BOSS：（阴冷、刺耳，声音像刮玻璃）哈哈哈哈！主人熬夜，激素疯掉！导管疯狂分泌，我越来越强！这座主城就是我的了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张、乳头内陷 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
乳头内陷 BOSS：（冰冷、收缩，纤维束咔咔作响）纤维组织挛缩！乳头被我拉进去！谁都拦不住！你们的乳腺，很快就会被我们彻底控制！
旁白：乳头溢液 BOSS 裹着浓稠的灰黑色雾气，触手黏腻地拍打着地面，每一滴粘液都在腐蚀着结缔组织平原；乳头内陷 BOSS 浑身缠绕着绷紧的纤维束，像无数条收紧的绳索，发出令人牙酸的 "咯吱" 声。
派蒙：（捂着胸口，想冲上去却没力气，只能死死拽着我的袖子，连声音都发颤）主人…… 快醒醒…… 别再熬夜了…… 我们不想…… 不想消失…… 不想让乳头被他们拉进去啊……
旁白：可 BOSS 的触手已经缠住了营养核心塔 —— 塔的光 "啪" 地暗了一下，像快熄灭的蜡烛，连最后一点光都快没了。
旁白：健康科普：长期熬夜会导致内分泌紊乱，雌激素水平异常升高，刺激乳腺导管上皮细胞异常增生，引发乳头溢液；同时纤维组织挛缩会导致乳头内陷，增加乳腺炎症和恶变风险。建议乳腺结节患者每晚 23 点前入睡，保证 7-8 小时优质睡眠。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
六、结局：记忆汇流・回归大脑中枢
HE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、滴答作响的钟摆，都变成了半透明的影子。我感觉自己被轻轻推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 坚定、派蒙 / 傲娇】
旁白：派蒙站在我身边，手里攥着那个 "睡眠守护钟"，钟摆还在 "滴答" 动，连光都暖。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都翘了起来）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
BE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、卡着 "3:00" 的钟摆，都变成了半透明的影子。我感觉自己被重重推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 懊悔、派蒙 / 哽咽】
旁白：派蒙耷拉着脑袋站在我身边 —— 她的发带歪了，手里攥着半块营养小草编的花，花瓣都蔫了，连香都淡了。细胞们的叹气声，还在我耳边绕着，像没散的雾，也像没醒的梦。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都耷拉着）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的，像刚哭过的小将军）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
【脚本结束】`},{id:"be3",text:"随便写两行代码应付，想着汇报时蒙混过关",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`主线 2：熬夜后的身体透支
【场景切换：职场办公室】
【立绘：主角 / 疲惫、小李 / 紧张】
旁白：早上 8 点 50 分，我被小李推醒 —— 我的脑袋磕在键盘上，印出了一串乱码，“user_pay” 变成了 “useeeeer_paaaaay”，连我自己都看不懂。
旁白：我揉了揉发麻的脸，才发现自己趴在桌上睡着了，电脑还亮着，最后一个支付模块的代码只写了一半，连接口都没调通。
小李：（压低声音提醒）经理来了！
【立绘：主角 / 慌乱、经理 / 愤怒、小李 / 紧张】
旁白：我手忙脚乱地关掉乱码页面。经理走过来，看到我屏幕上的半成品，脸色瞬间沉了，像暴风雨前的乌云。
经理：都熬了一晚上，怎么才写了这么点？甲方总负责人马上就到了，你想害死整个部门吗？平时看你挺靠谱的，关键时候掉链子！
【立绘：主角 / 疲惫、经理 / 愤怒】
旁白：我张了张嘴，想说 “我实在熬不住了，脑子都转不动了”，可话到嘴边却变成了 “我马上写，再给我 20 分钟，肯定能写完”。胃里反酸得厉害，连带着胸口都抽了一下，我摸了摸自己的乳房外侧，好像比昨晚更胀了，按一下都发疼。
选 3：随便写代码应付
【立绘：主角 / 疲惫、经理 / 愤怒、甲方总负责人 / 严肃】
旁白：我咬了咬牙，心里想着 “先蒙混过汇报再说”，随便复制了两段之前的代码，改了个变量名，就保存了文件。
旁白：汇报时，甲方总负责人指着屏幕问：“这个支付模块的逻辑怎么和用户端的重复了？你们没做新开发吗？”
【立绘：主角 / 窘迫、经理 / 愤怒、甲方总负责人 / 严肃】
旁白：我脸瞬间烧了起来，支支吾吾说不出话，连耳朵都红了。经理狠狠瞪了我一眼，抢过话筒圆场：“是临时测试版本，正式版已经改好了，等下我发您邮箱。”
【立绘：主角 / 懊悔、经理 / 愤怒】
旁白：散会后，经理把我叫到办公室，语气冰冷得像冰锥：“这个月绩效扣一半，下周的通宵值班你负责，把这次的烂摊子收拾好。”
【立绘：主角 / 疲惫、经理 / 愤怒】
旁白：我走出办公室，胃里反酸得厉害，扶着墙蹲下来 —— 胸口的闷疼和乳房的胀痛裹在一起，疼得我眼泪都快掉下来了，连站都站不稳。
【立绘：主角 / 懊悔】
派蒙（意识音）：（带着哭腔）主人！你怎么这么傻啊！身体都疼成这样了，还要硬撑吗？你是不是忘了，我们的命和你的命，是绑在一起的啊！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普（可跳过）
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出「跳过科普」按钮，点击直接跳转第四幕对应主线结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，是乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，是乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：早起赶工主线→第四幕雾散后的活力主城；熬夜透支主线→第四幕雾锁的疲惫主城】
结局 2：雾锁的疲惫主城（熬夜透支主线对应）
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：乳腺主城的雾浓得像化不开的墨 —— 天空是灰黑色的，连光都透不进来；彩虹导管桥的颜色全褪了，只剩光秃秃的架子，连木头都发潮了；乳腺小叶蘑菇屋的门倒了一半，有的屋顶塌了个角，"细胞之家" 的小木牌被雾裹着，连字都看不清了。
旁白：巨噬细胞们扛着吞噬吸尘器，走两步就打个哈欠，吸尘器的 "嗡嗡" 声像快断气的蚊子，连灰雾都吸不动；淋巴细胞小姐姐们的小喇叭没了声音，蹲在地上揉眼睛，连异常细胞的影子都没力气看；内分泌调节细胞们的钟摆全卡在了 "3:00" 的位置，他们抱着钟摆，靠在营养核心塔下睡着了 —— 塔的光暗得连营养液罐子都照不亮，罐身都瘪了。
旁白：一个巨噬细胞大哥看到我，撑着吸尘器站起来，脚步晃得像踩在棉花上，连站都站不稳。
巨噬细胞：主人…… 灰雾…… 太多了…… 我们吸不完…… 胸口疼…… 导管里黏糊糊的……
【立绘：主角 / 懊悔、派蒙 / 哽咽、巨噬细胞 / 虚弱】
派蒙：（红着眼睛，连尾巴都耷拉下来了）你看…… 这就是你熬的夜…… 细胞们连站都站不起来了…… 那两个坏家伙都快把主城裹住了……
旁白：我心里发酸，眼泪都快掉下来了，连呼吸都发紧。眼前弹出三个互动选项，像蒙着灰的小纸条，每个字都透着疼。
选项 1：扶起睡着的内分泌调节细胞
选项 2：帮淋巴细胞小姐姐们擦小喇叭
选项 3：承诺以后每天 23 点前睡觉，给细胞们 "补觉时间"
互动 1：扶起调节细胞
【立绘：主角 / 心疼、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：我蹲下身，扶起一个抱着钟摆睡着的内分泌调节细胞 —— 他的脸泛着青白色，连嘴唇都没了血色，钟摆的指针还卡在 "3:00"，漆都掉光了。
旁白：我把他靠在蘑菇屋的墙上，垫了块营养小草，他迷迷糊糊地嘟囔。
内分泌调节细胞：钟摆…… 不动了…… 激素…… 乱了…… 导管…… 疯狂分泌…… 乳头…… 被拽进去了……
旁白：我的喉咙发紧，连 "对不起" 都不敢说太大声，怕吵醒他，也怕自己哭出来。
【剧情汇流：进入主线剧情】
互动 2：擦小喇叭
【立绘：主角 / 心疼、派蒙 / 哽咽、淋巴细胞 / 无助】
旁白：我走到一个淋巴细胞小姐姐身边，她的小喇叭上裹着厚厚的灰雾，连喇叭口都堵了，根本吹不出声音。我用袖子轻轻擦着，灰雾沾在手上，凉得像冰，连指尖都发疼。
淋巴细胞：（红着眼睛，眼泪掉在喇叭上，连泪都泛着灰）主人…… 喇叭不响了…… 要是那两个坏家伙再进来…… 我们没法报警了…… 导管会被堵死，乳头会被彻底拉进去的……
旁白：我擦到一半，手指突然顿住 —— 喇叭上的灰雾像粘在上面，怎么擦都擦不干净，连我的袖子都变灰了。
【剧情汇流：进入主线剧情】
互动 3：承诺早睡（真选项・触发隐藏剧情）
【立绘：主角 / 坚定、派蒙 / 期待、内分泌调节细胞 / 疲惫】
旁白：我看着眼前的主城，看着睡着的细胞们，看着卡着 "3:00" 的钟摆，心里后悔得像被揪着 —— 我蹲下身，声音抖得厉害，连眼泪都掉下来了。
主角：对不起…… 是我错了…… 以后我每天 23 点前肯定睡觉，给你们补觉，给你们换能量电池，再也不熬夜了…… 真的……
派蒙：（猛地抬头，眼圈红得像兔子，却倔强地别过脸，连耳朵都耷拉下来了）你说真的？这次可别再骗我们了…… 上次你说'下次不熬'，结果又熬了三天，把细胞们都熬垮了，导管都快被那两个坏家伙拆了……
隐藏剧情：旁白：我的话刚说完，一个内分泌调节细胞迷迷糊糊地睁开眼，他的钟摆指针动了一格 —— 从 "3:00" 跳到了 "2:59"，虽然只动了一格，可漆都亮了点。
内分泌调节细胞：（揉着眼睛问，声音虚得像蚊子哼）主人…… 说话算数吗？
主角：（用力点头，眼泪掉在钟摆上）算数！我现在就把手机闹钟设成 23 点，再也不熬夜了！
【剧情汇流：进入主线剧情】
主线剧情（所有互动选项汇流后）
【立绘：主角 / 懊悔、派蒙 / 哽咽、内分泌调节细胞 / 疲惫】
旁白：可就在这时，一阵嚣张的大笑声裹着浓黑的雾飘进来 —— 城门被重重推开，两个黑影在雾中狰狞可怖。
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张】
乳头溢液 BOSS：（阴冷、刺耳，声音像刮玻璃）哈哈哈哈！主人熬夜，激素疯掉！导管疯狂分泌，我越来越强！这座主城就是我的了！
【立绘：主角 / 紧张、派蒙 / 愤怒、乳头溢液 BOSS / 嚣张、乳头内陷 BOSS / 嚣张、分泌细胞 / 恐惧】【特殊：立绘超 3 人】
乳头内陷 BOSS：（冰冷、收缩，纤维束咔咔作响）纤维组织挛缩！乳头被我拉进去！谁都拦不住！你们的乳腺，很快就会被我们彻底控制！
旁白：乳头溢液 BOSS 裹着浓稠的灰黑色雾气，触手黏腻地拍打着地面，每一滴粘液都在腐蚀着结缔组织平原；乳头内陷 BOSS 浑身缠绕着绷紧的纤维束，像无数条收紧的绳索，发出令人牙酸的 "咯吱" 声。
派蒙：（捂着胸口，想冲上去却没力气，只能死死拽着我的袖子，连声音都发颤）主人…… 快醒醒…… 别再熬夜了…… 我们不想…… 不想消失…… 不想让乳头被他们拉进去啊……
旁白：可 BOSS 的触手已经缠住了营养核心塔 —— 塔的光 "啪" 地暗了一下，像快熄灭的蜡烛，连最后一点光都快没了。
旁白：健康科普：长期熬夜会导致内分泌紊乱，雌激素水平异常升高，刺激乳腺导管上皮细胞异常增生，引发乳头溢液；同时纤维组织挛缩会导致乳头内陷，增加乳腺炎症和恶变风险。建议乳腺结节患者每晚 23 点前入睡，保证 7-8 小时优质睡眠。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢」】
六、结局：记忆汇流・回归大脑中枢
HE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、滴答作响的钟摆，都变成了半透明的影子。我感觉自己被轻轻推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 坚定、派蒙 / 傲娇】
旁白：派蒙站在我身边，手里攥着那个 "睡眠守护钟"，钟摆还在 "滴答" 动，连光都暖。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都翘了起来）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
BE 结局对应版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 认真】
旁白：微观世界的画面渐渐模糊，雾、细胞、营养核心塔、卡着 "3:00" 的钟摆，都变成了半透明的影子。我感觉自己被重重推了一下，然后 "唰" 地回到了大脑记忆中枢。
【立绘：主角 / 懊悔、派蒙 / 哽咽】
旁白：派蒙耷拉着脑袋站在我身边 —— 她的发带歪了，手里攥着半块营养小草编的花，花瓣都蔫了，连香都淡了。细胞们的叹气声，还在我耳边绕着，像没散的雾，也像没醒的梦。
派蒙：（语气带着几分疲惫，却又无比认真，尾巴尖都耷拉着）记忆不能重来，但未来可以改。你记住 —— 熬夜不是 "能扛"，是在拿身体的 "防御墙" 换那点进度；绩效扣了能补，细胞累垮了，就真的回不来了。我们的命，和你的命，是绑在一起的，你疼，我们也疼。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我看着派蒙，用力点头 —— 这次不是 "下次一定"，是 "现在就改"，是 "今晚就早点睡"。
派蒙：（抬起头，傲娇的小脾气又回来了，可眼圈还是红的，像刚哭过的小将军）走吧！去病变乳腺组织挑战 BOSS！这次我要盯着你，绝对不让你再 "熬" 着去！
旁白：记忆点通关・已解锁两大 BOSS —— 乳头溢液 BOSS、乳头内陷 BOSS！可前往病变乳腺组织进行挑战！
【脚本结束】`}],bossUnlocked:["lymphNode","nippleRetraction"],skillHE:{id:"adequateSleep",name:"充足睡眠",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"stayUpLate",name:"熬夜透支",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},3:{id:3,title:"私自滥用减肥药与保健品",description:"私自滥用减肥药与保健品",perspective:"adult",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个青壮年专属记忆入口：职场酒局被迫应酬、熬夜赶项目的健康透支、私自滥用减肥药与保健品。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖稳稳触碰记忆点 3：私自滥用减肥药与保健品这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始缓缓扭曲流动，那段因身材焦虑盲目用药的记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 严肃】"},{id:"s8",speaker:"派蒙",text:"主人！终于要面对这段最危险的记忆了！你还记得吗？就是因为你当年盲目跟风吃网红减肥药、乱喝蛋白粉，让体内激素彻底爆炸，才让乳腺主城出现了最可怕的恶性前兆病灶！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个身形虚弱、抱着营养液罐子的分泌细胞，跌跌撞撞从记忆通道口跑出来，她们脸色苍白、皮肤表层出现异常褶皱，连站立都非常困难。"},{id:"s11",speaker:"旁白",text:"其中一个细胞脚下一软，罐子 “哐当” 一声摔在地上，琥珀色的营养液洒了一地，她害怕地缩成一团，快要哭出来。"},{id:"s12",speaker:"分泌细胞",text:"主人…… 我们好难受…… 皮肤开始往下陷…… 表面变得坑坑洼洼…… 乳房外面的组织全都变形了……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"你都看到了吧？这就是你当年乱吃药的后果！外源激素疯狂冲击，直接催生了两个最危险的症状 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确选择，不然这两个 BOSS 会彻底扎根，让乳腺主城再也无法恢复！"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 郑重】"},{id:"s17",speaker:"旁白",text:"我深吸一口气，重重地点了点头。眼前的记忆之门彻底敞开，一股熟悉的、因身材焦虑而慌乱的气息扑面而来，我被瞬间拉回了当年，那个盲目追求瘦身、随意服用减肥药的日子。"},{id:"s18",speaker:"第一幕",text:"卧室里的身材焦虑・药物选择（5 选 1 并联选项）"},{id:"s19",speaker:"舞台指示",text:"【场景切换：卧室】"},{id:"s20",speaker:"舞台指示",text:"【立绘：主角 / 焦虑】"},{id:"s21",speaker:"旁白",text:"我站在自己的卧室里，午后的阳光透过窗帘缝隙斜斜照入，落在宽大的梳妆镜前，将整个空间映照得安静又空旷。镜面上蒙着一层极淡的浮尘，就像我此刻混乱又压抑的心情。"},{id:"s22",speaker:"旁白",text:"台面之上，整齐摆放着我近期疯狂囤积的各类网红塑形产品 —— 包装色彩艳丽、宣传标语夸张的 “七日暴瘦减肥药”，一大桶无正规质检标识、号称高纯度吸收的浓缩蛋白粉，几盒成分模糊、宣称植物萃取的燃脂片剂，还有几瓶连生产厂家都查询不到的口服饮品。"},{id:"s23",speaker:"旁白",text:"我的手机屏幕持续亮着，停留在热门短视频界面，主播亢奋又极具煽动性的声音循环播放：“不运动、不忌口，轻松瘦十斤！产后可用、结节人群可用，零激素零副作用！”"},{id:"s24",speaker:"旁白",text:"我死死盯着镜中的自己，身材焦虑如同藤蔓般疯狂缠绕心脏，越收越紧。乳腺科医生的叮嘱在脑海深处回响：“你的结节属于激素敏感型，严禁服用任何三无减肥药、违规保健品、过量蛋白粉，此类产品含不明外源性激素，会直接诱发激素风暴。”"},{id:"s25",speaker:"旁白",text:"我伸出微微颤抖的手，拿起一粒包装花哨的减肥药，药片冰凉坚硬，触碰指尖的瞬间，一股莫名的恐慌悄然划过心底。"}],firstChoices:[{id:"c1",text:"立刻把所有三无药物全部丢掉，坚持运动与健康饮食",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “立刻把所有三无药物全部丢掉，坚持运动与健康饮食”
【立绘：主角 / 坚定】
旁白：我深吸一口气，强迫自己从失控的焦虑中抽离，目光从镜中移开，一把将台面上所有违规产品尽数抓起，狠狠扔进垃圾桶，甚至反复按压、套上双层垃圾袋，彻底断绝自己回头的可能。
旁白：丢掉药物的瞬间，紧绷的肩膀骤然放松，压抑许久的焦躁如同被戳破的气球，快速消散。我拿起手机，果断退出短视频界面，打开正规线上问诊平台，认真填写个人病史、结节情况，寻求科学安全的身材管理方案。
【立绘：主角 / 坚定】
派蒙（意识音）：这才是最正确的选择！切断外源性激素供给，乳腺主城就能恢复稳定，悬韧带与淋巴管不会受损，最危险的 BOSS 根本没有诞生的机会！
【剧情跳转：直接进入第二幕 HE 主线 “科学管理身材・乳腺皮肤稳定”】`},{id:"c2",text:"心存侥幸，只吃半量减肥药试一试，不敢过量服用",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “心存侥幸，只吃半量减肥药试一试，不敢过量服用”
【立绘：主角 / 焦虑】
旁白：我咬着下唇，内心在焦虑与理智之间反复拉扯，最终选择了折中方案，小心翼翼倒出一半剂量的减肥药，端起温水快速吞服。我不断自我安慰：只是少量尝试，不会对身体造成伤害，瘦一点点就立刻停药。
旁白：短短半小时，胸口便泛起异样的紧绷感，乳房外侧传来细微却清晰的牵拉痛，如同无形的手紧紧攥住软组织，抬手、转身都带着隐隐不适。原本光滑的皮肤下方，开始出现轻微僵硬。
【立绘：主角 / 焦虑】
派蒙（意识音）：不行啊主人！就算半量，外源性激素也会持续刺激结节！乳腺组织已经开始受损，快停下来，不要再错下去了！
【剧情跳转：直接进入第二幕 BE 主线 “药物副作用爆发・皮肤恶性前兆显现”】`},{id:"c3",text:"追求速度，减肥药搭配蛋白粉一起吃，觉得效果翻倍",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “追求速度，减肥药搭配蛋白粉一起吃，觉得效果翻倍”
【立绘：主角 / 焦虑】
旁白：我被 “快速见效” 的执念彻底冲昏头脑，将所有健康警告抛诸脑后，毫不犹豫吞下足额减肥药，又用温水冲调一大杯高浓度蛋白粉，大口吞咽下肚。
旁白：没过多久，剧烈的不适感席卷全身，乳房胀痛感急剧加重，皮肤表面发热、发紧，用手轻轻触摸，能清晰感受到皮下组织异常僵硬，原本平滑的肌肤，隐隐浮现出凹凸不平的纹路，危险的信号越来越明显。
【立绘：主角 / 焦虑】
派蒙（意识音）：不要啊！两种外源性激素同时冲击，乳腺主城根本承受不住！悬韧带要断裂了！淋巴管要堵塞了！你会彻底毁掉自己的！
【剧情跳转：直接进入第二幕 BE 主线 “药物副作用爆发・皮肤恶性前兆显现”】`},{id:"c4",text:"理性克制，先咨询医生与专业营养师，再决定是否使用",type:"fake",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “理性克制，先咨询医生与专业营养师，再决定是否使用”
【立绘：主角 / 坚定】
旁白：我拿着减肥药，指尖反复摩挲冰冷的包装，犹豫良久，终究没有勇气送入口中。我放下药物，拿起手机认真查询正规健康管理知识，主动联系长期复诊的乳腺科医生，将所有网红产品的包装、成分拍照发送，详细询问安全性。
旁白：医生的回复快速而明确，严厉禁止服用任何三无产品，并针对性制定温和运动 + 均衡饮食的科学方案，字字句句都在强调激素对结节的致命影响。看到回复的瞬间，我彻底放下内心的执念，将所有违规产品全部封存。
【立绘：主角 / 坚定】
派蒙（意识音）：还好你守住了理智，理性永远是保护自己最好的武器，乳腺主城安全了！
【剧情跳转：直接进入第二幕 HE 主线 “科学管理身材・乳腺皮肤稳定”】`},{id:"c5",text:"完全无视警告，按照网红说明正常足量服用",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “完全无视警告，按照网红说明正常足量服用”
【立绘：主角 / 焦虑】
旁白：我咬紧牙关，彻底被身材焦虑吞噬，无视医生叮嘱、无视身体不适、无视潜在危险，严格按照网红宣传的剂量，按时服用减肥药，搭配蛋白粉长期饮用。
旁白：短短一周，乳房胀痛感愈发剧烈，皮肤开始出现明显凹陷，局部区域粗糙发硬，轻轻触碰便传来尖锐的拉扯痛，曾经熟悉的身体，正在朝着可怕的方向改变。我慌了神想要停药，可外源性激素已经打乱内分泌平衡，根本没有回头的余地。
【立绘：主角 / 焦虑】
派蒙（意识音）：太晚了主人！外源性激素已经彻底摧毁内分泌平衡！酒窝征和橘皮样改变已经出现！BOSS 马上就要觉醒了！
【剧情跳转：直接进入第二幕 BE 主线 “药物副作用爆发・皮肤恶性前兆显现”】`}],secondChoicesHE:[{id:"he1",text:"坚持每天多喝水，促进身体代谢与循环",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：科学管理身材・乳腺皮肤稳定
【场景切换：卧室】
【立绘：主角 / 轻松】
旁白：我严格遵循医生与营养师的专业指导，彻底告别极端速成的错误想法，开启温和健康的身材管理模式。每天规律作息、早睡早起，饮食以清淡均衡为主，配合散步、拉伸、瑜伽等低强度运动，不追求极速见效，只专注于身体状态的稳步提升。
旁白：曾经偶尔出现的乳房胀痛彻底消失，胸部肌肤依旧光滑平整、富有弹性，没有任何凹陷、粗糙、牵拉感，乳腺组织保持稳定状态，结节无增大、无异常，整体状态轻松而健康。
选 1：坚持每天多喝水
【立绘：主角 / 轻松】
旁白：我每天保持足量温水摄入，温和滋润身体每一处组织，代谢功能稳步提升，体内多余物质顺利排出。乳房无任何不适，肌肤光滑细腻，整个人精神状态饱满愉悦，曾经的身材焦虑彻底消散，取而代之的是对健康的珍视与认可。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：组织完好・BOSS 无法成型
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城一片明亮安稳，皮肤层光滑平整、柔软富有弹性，悬韧带坚韧牢固，牢牢支撑着每一寸组织，没有丝毫断裂与松弛；淋巴管通畅无阻，淋巴液平稳流动，无任何堵塞、水肿、淤积。整个微观世界干净澄澈、生机盎然。
【立绘：主角 / 轻松、派蒙 / 骄傲、酒窝综合征 BOSS / 虚弱、橘皮样皮肤改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：在主城最边缘的地带，两道极其模糊、透明、微弱的黑影轻轻晃动，那是试图凝聚成型的酒窝综合征 BOSS 和橘皮样皮肤改变 BOSS。但因为及时停止服用违规药物，两个 BOSS 失去全部能量来源，气息微弱到几乎消失。
酒窝综合征 BOSS：（声音虚弱断续，身体不断透明消散）悬韧带完好…… 无凹陷依附…… 我无法成型……
橘皮样皮肤改变 BOSS：（身体透明淡化，彻底失去力量）淋巴管通畅…… 无水肿利用…… 我无法存在……
旁白：两道黑影仅仅晃动片刻，便彻底化作点点微光，消散在空气之中，永远失去了出现的可能。
【立绘：主角 / 轻松、派蒙 / 骄傲、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你远离三无减肥药、拒绝乱服激素产品、坚持科学管理身材，酒窝综合征和橘皮样皮肤改变这两个最危险的恶性前兆 BOSS，永远都没有机会出现！
旁白：健康科普：远离不明外源性激素产品，坚持科学饮食与运动，可维持乳腺组织稳定，降低恶性前兆出现风险，乳腺结节患者需定期复查，实时监控状态。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`},{id:"he2",text:"每天做 5 分钟轻柔胸部舒展，保持组织弹性",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：科学管理身材・乳腺皮肤稳定
【场景切换：卧室】
【立绘：主角 / 轻松】
旁白：我严格遵循医生与营养师的专业指导，彻底告别极端速成的错误想法，开启温和健康的身材管理模式。每天规律作息、早睡早起，饮食以清淡均衡为主，配合散步、拉伸、瑜伽等低强度运动，不追求极速见效，只专注于身体状态的稳步提升。
旁白：曾经偶尔出现的乳房胀痛彻底消失，胸部肌肤依旧光滑平整、富有弹性，没有任何凹陷、粗糙、牵拉感，乳腺组织保持稳定状态，结节无增大、无异常，整体状态轻松而健康。
选 2：每天做 5 分钟轻柔胸部舒展
【立绘：主角 / 轻松】
旁白：我每天固定抽出五分钟，进行轻柔舒缓的胸部舒展运动，放松乳腺周围肌肉与韧带，促进局部血液循环。悬韧带保持坚韧稳定，淋巴管通畅无阻，无任何堵塞、牵拉、水肿现象，乳腺组织维持最佳状态。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：组织完好・BOSS 无法成型
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城一片明亮安稳，皮肤层光滑平整、柔软富有弹性，悬韧带坚韧牢固，牢牢支撑着每一寸组织，没有丝毫断裂与松弛；淋巴管通畅无阻，淋巴液平稳流动，无任何堵塞、水肿、淤积。整个微观世界干净澄澈、生机盎然。
【立绘：主角 / 轻松、派蒙 / 骄傲、酒窝综合征 BOSS / 虚弱、橘皮样皮肤改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：在主城最边缘的地带，两道极其模糊、透明、微弱的黑影轻轻晃动，那是试图凝聚成型的酒窝综合征 BOSS 和橘皮样皮肤改变 BOSS。但因为及时停止服用违规药物，两个 BOSS 失去全部能量来源，气息微弱到几乎消失。
酒窝综合征 BOSS：（声音虚弱断续，身体不断透明消散）悬韧带完好…… 无凹陷依附…… 我无法成型……
橘皮样皮肤改变 BOSS：（身体透明淡化，彻底失去力量）淋巴管通畅…… 无水肿利用…… 我无法存在……
旁白：两道黑影仅仅晃动片刻，便彻底化作点点微光，消散在空气之中，永远失去了出现的可能。
【立绘：主角 / 轻松、派蒙 / 骄傲、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你远离三无减肥药、拒绝乱服激素产品、坚持科学管理身材，酒窝综合征和橘皮样皮肤改变这两个最危险的恶性前兆 BOSS，永远都没有机会出现！
旁白：健康科普：远离不明外源性激素产品，坚持科学饮食与运动，可维持乳腺组织稳定，降低恶性前兆出现风险，乳腺结节患者需定期复查，实时监控状态。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`},{id:"he3",text:"按时前往医院复查乳腺，实时监控结节状态",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：科学管理身材・乳腺皮肤稳定
【场景切换：卧室】
【立绘：主角 / 轻松】
旁白：我严格遵循医生与营养师的专业指导，彻底告别极端速成的错误想法，开启温和健康的身材管理模式。每天规律作息、早睡早起，饮食以清淡均衡为主，配合散步、拉伸、瑜伽等低强度运动，不追求极速见效，只专注于身体状态的稳步提升。
旁白：曾经偶尔出现的乳房胀痛彻底消失，胸部肌肤依旧光滑平整、富有弹性，没有任何凹陷、粗糙、牵拉感，乳腺组织保持稳定状态，结节无增大、无异常，整体状态轻松而健康。
选 3：按时前往医院复查乳腺
【立绘：主角 / 轻松、医生 / 专业】
旁白：我严格按照医嘱，准时前往医院进行乳腺专项复查。超声结果显示，结节形态规则、边界清晰、无异常血流信号，皮肤组织、韧带、淋巴管全部正常，医生明确夸赞状态保持极佳，恶变风险极低。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：组织完好・BOSS 无法成型
【场景切换：乳腺主城（正常）】
【立绘：主角 / 轻松、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城一片明亮安稳，皮肤层光滑平整、柔软富有弹性，悬韧带坚韧牢固，牢牢支撑着每一寸组织，没有丝毫断裂与松弛；淋巴管通畅无阻，淋巴液平稳流动，无任何堵塞、水肿、淤积。整个微观世界干净澄澈、生机盎然。
【立绘：主角 / 轻松、派蒙 / 骄傲、酒窝综合征 BOSS / 虚弱、橘皮样皮肤改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：在主城最边缘的地带，两道极其模糊、透明、微弱的黑影轻轻晃动，那是试图凝聚成型的酒窝综合征 BOSS 和橘皮样皮肤改变 BOSS。但因为及时停止服用违规药物，两个 BOSS 失去全部能量来源，气息微弱到几乎消失。
酒窝综合征 BOSS：（声音虚弱断续，身体不断透明消散）悬韧带完好…… 无凹陷依附…… 我无法成型……
橘皮样皮肤改变 BOSS：（身体透明淡化，彻底失去力量）淋巴管通畅…… 无水肿利用…… 我无法存在……
旁白：两道黑影仅仅晃动片刻，便彻底化作点点微光，消散在空气之中，永远失去了出现的可能。
【立绘：主角 / 轻松、派蒙 / 骄傲、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你远离三无减肥药、拒绝乱服激素产品、坚持科学管理身材，酒窝综合征和橘皮样皮肤改变这两个最危险的恶性前兆 BOSS，永远都没有机会出现！
旁白：健康科普：远离不明外源性激素产品，坚持科学饮食与运动，可维持乳腺组织稳定，降低恶性前兆出现风险，乳腺结节患者需定期复查，实时监控状态。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 坚定、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`}],secondChoicesBE:[{id:"be1",text:"继续服用药物，硬撑着等待所谓的 “瘦身效果”",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：药物副作用爆发・皮肤恶性前兆显现
【场景切换：卧室】
【立绘：主角 / 恐惧】
旁白：盲目乱服减肥药与蛋白粉半个月后，我的身体彻底爆发严重副作用，所有被掩盖的危险信号，以最惨烈的方式集中显现。乳房外侧出现明显凹陷小坑，形状如同酒窝，深深陷入肌肤无法回弹；局部皮肤大面积凹凸不平、粗糙发硬，毛孔异常粗大，完全呈现橘子皮样外观。
旁白：我惊恐地盯着镜中陌生的身体，浑身发抖，恐惧与悔恨淹没全部理智。想要停药补救，可外源性激素已经彻底摧毁内分泌系统，激素波动让症状持续加重，皮肤损伤持续恶化，根本无法立刻逆转。
选 1：继续服用药物，硬撑着等待所谓的 “瘦身效果”
【立绘：主角 / 恐惧】
旁白：我自欺欺人地坚持服用药物，任由外源性激素疯狂侵蚀乳腺组织。酒窝状凹陷不断扩大加深，橘皮样皮肤快速扩散，腋下淋巴结随之肿大发硬，持续性剧烈疼痛日夜不休，身体与精神都承受着双重折磨，却依旧不肯承认自己的错误。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：组织崩塌・两大 BOSS 完全觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 肿胀】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，压抑、绝望、恐怖的气息弥漫每一个角落。皮肤层大面积塌陷、褶皱、扭曲、凹凸不平；一根根悬韧带彻底断裂，无力垂落；一条条淋巴管完全堵塞，发黑肿胀，淋巴液淤积结块。整个微观世界满目疮痍、濒临崩塌。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝综合征 BOSS / 狰狞、橘皮样皮肤改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾最核心、最浓重的位置，两道巨大、狰狞、充满毁灭性压迫感的黑影，缓缓站直身体，彻底觉醒 —— 酒窝综合征 BOSS 全身布满深深浅浅的塌陷深坑，橘皮样皮肤改变 BOSS 全身粗糙凹凸、水肿僵硬。
酒窝综合征 BOSS：（声音冰冷刺耳）韧带被我扯断！乳房陷下去！这是你盲目冲动的代价！永远无法挽回！
橘皮样皮肤改变 BOSS：（声音阴冷扩散）淋巴管全堵死！皮肤变橘皮！你的乳腺主城，从此由我彻底掌控！
派蒙：（泪流满面，声音颤抖破碎）主人！你看啊！这就是你乱吃药、乱补蛋白粉养出来的最终 BOSS！如果再不改掉盲目跟风的习惯，乳腺主城就真的要被彻底毁灭了！
旁白：健康科普：三无减肥药、违规保健品中的外源性激素会诱发激素风暴，导致乳腺悬韧带断裂、淋巴管堵塞，引发酒窝征、橘皮样改变等恶性前兆，出现症状需立即就医，停止服用所有可疑产品。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`},{id:"be2",text:"私自服用止痛药，掩盖乳房的疼痛与不适",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：药物副作用爆发・皮肤恶性前兆显现
【场景切换：卧室】
【立绘：主角 / 恐惧】
旁白：盲目乱服减肥药与蛋白粉半个月后，我的身体彻底爆发严重副作用，所有被掩盖的危险信号，以最惨烈的方式集中显现。乳房外侧出现明显凹陷小坑，形状如同酒窝，深深陷入肌肤无法回弹；局部皮肤大面积凹凸不平、粗糙发硬，毛孔异常粗大，完全呈现橘子皮样外观。
旁白：我惊恐地盯着镜中陌生的身体，浑身发抖，恐惧与悔恨淹没全部理智。想要停药补救，可外源性激素已经彻底摧毁内分泌系统，激素波动让症状持续加重，皮肤损伤持续恶化，根本无法立刻逆转。
选 2：私自服用止痛药，掩盖乳房的疼痛与不适
【立绘：主角 / 恐惧】
旁白：我偷偷服用止痛药，强行压制尖锐痛感，短暂的舒适让我产生错误的安全感。可皮肤变形、韧带断裂、淋巴管堵塞仍在持续恶化，表层疼痛被掩盖，深层损伤却在疯狂加剧，恶性前兆愈发明显，距离彻底恶变只有一步之遥。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：组织崩塌・两大 BOSS 完全觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 肿胀】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，压抑、绝望、恐怖的气息弥漫每一个角落。皮肤层大面积塌陷、褶皱、扭曲、凹凸不平；一根根悬韧带彻底断裂，无力垂落；一条条淋巴管完全堵塞，发黑肿胀，淋巴液淤积结块。整个微观世界满目疮痍、濒临崩塌。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝综合征 BOSS / 狰狞、橘皮样皮肤改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾最核心、最浓重的位置，两道巨大、狰狞、充满毁灭性压迫感的黑影，缓缓站直身体，彻底觉醒 —— 酒窝综合征 BOSS 全身布满深深浅浅的塌陷深坑，橘皮样皮肤改变 BOSS 全身粗糙凹凸、水肿僵硬。
酒窝综合征 BOSS：（声音冰冷刺耳）韧带被我扯断！乳房陷下去！这是你盲目冲动的代价！永远无法挽回！
橘皮样皮肤改变 BOSS：（声音阴冷扩散）淋巴管全堵死！皮肤变橘皮！你的乳腺主城，从此由我彻底掌控！
派蒙：（泪流满面，声音颤抖破碎）主人！你看啊！这就是你乱吃药、乱补蛋白粉养出来的最终 BOSS！如果再不改掉盲目跟风的习惯，乳腺主城就真的要被彻底毁灭了！
旁白：健康科普：三无减肥药、违规保健品中的外源性激素会诱发激素风暴，导致乳腺悬韧带断裂、淋巴管堵塞，引发酒窝征、橘皮样改变等恶性前兆，出现症状需立即就医，停止服用所有可疑产品。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`},{id:"be3",text:"想要停药却心存不甘，断断续续减量服用",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：药物副作用爆发・皮肤恶性前兆显现
【场景切换：卧室】
【立绘：主角 / 恐惧】
旁白：盲目乱服减肥药与蛋白粉半个月后，我的身体彻底爆发严重副作用，所有被掩盖的危险信号，以最惨烈的方式集中显现。乳房外侧出现明显凹陷小坑，形状如同酒窝，深深陷入肌肤无法回弹；局部皮肤大面积凹凸不平、粗糙发硬，毛孔异常粗大，完全呈现橘子皮样外观。
旁白：我惊恐地盯着镜中陌生的身体，浑身发抖，恐惧与悔恨淹没全部理智。想要停药补救，可外源性激素已经彻底摧毁内分泌系统，激素波动让症状持续加重，皮肤损伤持续恶化，根本无法立刻逆转。
选 3：想要停药却心存不甘，断断续续减量服用
【立绘：主角 / 恐惧】
旁白：我试图减量停药，却因激素依赖反复服用，身体在激素剧烈波动中反复受损。皮肤凹陷与粗糙感交替加重，乳腺组织结构彻底紊乱，主城防御防线层层崩塌，所有损伤都在朝着不可逆的方向发展。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 疲惫】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！不管是外源性激素残留，还是受损的细胞，我们都能吸干净！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 急促】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！也要保护好自己，别再乱吃药啦，我们快扛不住啦！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！尤其是外源性激素太多的时候，它会被打乱指令，没法正常分营养！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：组织崩塌・两大 BOSS 完全觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 肿胀】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，压抑、绝望、恐怖的气息弥漫每一个角落。皮肤层大面积塌陷、褶皱、扭曲、凹凸不平；一根根悬韧带彻底断裂，无力垂落；一条条淋巴管完全堵塞，发黑肿胀，淋巴液淤积结块。整个微观世界满目疮痍、濒临崩塌。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝综合征 BOSS / 狰狞、橘皮样皮肤改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾最核心、最浓重的位置，两道巨大、狰狞、充满毁灭性压迫感的黑影，缓缓站直身体，彻底觉醒 —— 酒窝综合征 BOSS 全身布满深深浅浅的塌陷深坑，橘皮样皮肤改变 BOSS 全身粗糙凹凸、水肿僵硬。
酒窝综合征 BOSS：（声音冰冷刺耳）韧带被我扯断！乳房陷下去！这是你盲目冲动的代价！永远无法挽回！
橘皮样皮肤改变 BOSS：（声音阴冷扩散）淋巴管全堵死！皮肤变橘皮！你的乳腺主城，从此由我彻底掌控！
派蒙：（泪流满面，声音颤抖破碎）主人！你看啊！这就是你乱吃药、乱补蛋白粉养出来的最终 BOSS！如果再不改掉盲目跟风的习惯，乳腺主城就真的要被彻底毁灭了！
旁白：健康科普：三无减肥药、违规保健品中的外源性激素会诱发激素风暴，导致乳腺悬韧带断裂、淋巴管堵塞，引发酒窝征、橘皮样改变等恶性前兆，出现症状需立即就医，停止服用所有可疑产品。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，黑雾与光亮、疼痛与安心、悔恨与坚定，全部化作点点微光，回流至记忆通道之中。我重新回到安静辽阔的大脑记忆中枢外层，三条发光的记忆通道依旧静静悬浮。
派蒙：这段记忆，终于走完了。它告诉你一个最残酷也最真实的道理：真正的美，从来不是极端纤细的身材，而是健康、自信、爱惜自己的模样。
派蒙：身材焦虑不可怕，盲目跟风、拿生命赌美丽，才是最愚蠢的选择。酒窝综合征和橘皮样皮肤改变，不是普通的皮肤问题，是乳腺向你发出的最后求救信号。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，目光平静而坚定。这一次，我牢牢记住了所有教训，再也不会让盲目、焦虑与冲动，伤害自己的身体、摧毁自己的健康。
旁白：记忆点 3 通关完成，已成功解锁两大恶性前兆 BOSS—— 酒窝综合征 BOSS、橘皮样皮肤改变 BOSS！可前往病变乳腺组织进行最终挑战，青壮年全线记忆点・全部解锁完成！`}],bossUnlocked:["skinDimple","orangePeel"],skillHE:{id:"rationalMedication",name:"理性用药",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"abuseDrugs",name:"滥用药物",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}}},elder:{1:{id:1,title:"隐瞒病情，怕连累子女",description:"隐瞒病情，怕连累子女",perspective:"elder",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个老年专属记忆入口：隐瞒病情，怕连累子女、忽视体检，拖延乳腺隐患、盲目听信偏方，延误正规治疗。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖稳稳触碰记忆点 1：隐瞒病情，怕连累子女这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始缓缓扭曲流动，那段因心疼子女、独自硬扛乳腺病痛的沉重记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 严肃】"},{id:"s8",speaker:"派蒙",text:"主人！终于要面对这段记忆了！你还记得吗？就是因为你当年怕耽误子女工作、怕花他们的钱、怕成为拖累，发现乳房硬块后一直偷偷忍着、瞒着不说，才让乳腺主城的损伤越来越重，结节不断长大，连淋巴结都肿了起来！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个身形佝偻、面色蜡黄的分泌细胞，跌跌撞撞从记忆通道口跑出来，她们胸口顶着硬硬的凸起，抱着瘪掉的营养液罐子，每走一步都疼得皱眉，腋下的部位鼓鼓囊囊，连抬手都费劲。"},{id:"s11",speaker:"旁白",text:"其中一个年长的分泌细胞脚下一软，罐子 “哐当” 一声摔在地上，琥珀色的营养液洒了一地，她捂着胸口蜷缩成一团，声音细若游丝。"},{id:"s12",speaker:"分泌细胞",text:"主人…… 我们好疼…… 胸口的硬块越来越大，腋下也肿得难受…… 你别再硬扛了，快告诉孩子们，带我们去治治吧……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"你都看到了吧？这就是你当年隐瞒病情的后果！结节增生、淋巴结肿大，直接催生了两个症状 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确选择，不然这两个 BOSS 会越来越强，最后彻底占领整个乳腺主城！"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 郑重】"},{id:"s17",speaker:"旁白",text:"我深吸一口气，重重地点了点头。眼前的记忆之门彻底敞开，一股熟悉的、夹杂着中药味与孤独感的气息扑面而来，我被瞬间拉回了当年，那个发现硬块却因牵挂子女，选择独自硬扛的冬日清晨。"},{id:"s18",speaker:"第一幕",text:"冬日清晨的厨房・隐瞒抉择（5 选 1 并联选项）"},{id:"s19",speaker:"舞台指示",text:"【场景切换：厨房】"},{id:"s20",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s21",speaker:"旁白",text:"冬日的清晨，窗外还飘着细碎的冷雪，厨房飘着淡淡的小米粥热气，我系着洗得发白的蓝布围裙站在灶台前，抬手关煤气灶的瞬间，指尖无意间划过右侧乳房外侧，猝不及防撞触到了一个硬硬的小肿块，边界模糊不清，轻轻按压时还有隐隐的刺痛感。"},{id:"s22",speaker:"旁白",text:"那触感像一颗埋在肉里的小石子，硌得人心头发慌。连带着腋下也隐隐发胀，抬手时牵扯着胸口的筋络，一阵阵酸胀感顺着胳膊蔓延开来。我猛地想起小区里上个月刚因乳腺癌去世的李阿姨，手脚瞬间冰凉。"},{id:"s23",speaker:"舞台指示",text:"【立绘：主角 / 焦虑】"},{id:"s24",speaker:"旁白",text:"餐桌旁的老年机突然嗡嗡震动起来，是远在外地的儿子打来的视频电话，我慌忙擦了擦手上的水渍接起，屏幕里，儿子顶着熬夜的黑眼圈忙着整理文件，儿媳在一旁哄着刚睡醒的小孙女，小孙女裹着厚厚的棉袄，举着奶瓶奶声奶气地喊 “奶奶，想你了”。"},{id:"s25",speaker:"舞台指示",text:"【立绘：主角 / 焦虑】"},{id:"s26",speaker:"儿子（画外音）",text:"妈，天冷了别总早起熬粥，楼下早餐店就有卖的，你别累着，买点现成的就行，你身体好好的，我们在外头上班打拼才放心。"},{id:"s27",speaker:"旁白",text:"我看着屏幕里忙碌的儿子、操劳的儿媳，还有可爱的小孙女，眼眶瞬间红了。儿子刚创业没多久，压力大到头发都掉了不少，儿媳在家一边带孩子一边兼顾线上兼职，我要是现在说自己乳房长了硬块要去医院，岂不是要让他们分心分神？"},{id:"s28",speaker:"旁白",text:"内心独白：孩子们在外头打拼太不容易了，上有老下有小，处处都要花钱，我这点小毛病，忍忍就过去了，不能因为我这点事，成为孩子们的拖累和负担。"}],firstChoices:[{id:"c1",text:"立刻给儿子打回去，告诉他硬块的真实情况，让他安排时间陪我去医院做详细检查",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “立刻给儿子打回去，告诉他硬块的真实情况”
【立绘：主角 / 坚定】
旁白：我深吸一口气，压下心底的犹豫和心疼，颤抖着手拨通了儿子的电话，电话接通的瞬间，积攒的情绪再也忍不住，压着哽咽的声音说：“小宝，妈…… 妈乳房上长了个硬块，按压还疼，已经有段时间了，想去医院好好看看。”
【立绘：主角 / 焦虑】
儿子（画外音）：妈！你怎么不早说！这么大的事你怎么能自己扛着！我马上跟领导请假，现在就订车票回去，明天一早就带你去市里最好的三甲医院检查，钱的事你别操心！
旁白：挂了电话，我靠在冰冷的厨房门框上，眼泪忍不住掉了下来，心里的石头却彻底落了地。虽然心疼孩子来回奔波，可比起隐瞒病情带来的未知风险，坦诚相告才是对自己负责，更是对家人负责。
【立绘：主角 / 轻松】
派蒙（意识音）：这才对！隐瞒从来都解决不了问题，及时跟子女沟通、趁早就医检查，才能从根源上阻止 BOSS 继续长大，守护乳腺主城的安全！
【剧情跳转：直接进入第二幕 HE 主线 “坦诚就医・结节可控”】`},{id:"c2",text:"自己揣着攒下的零钱独自去社区医院做个简单触诊，先了解基本情况，再决定要不要告诉子女",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “自己揣着攒下的零钱独自去社区医院做个简单触诊”
【立绘：主角 / 焦虑】
旁白：我揣着满心的忐忑和不安，独自裹着厚棉袄去了社区医院，挂了全科的号，接诊的老医生经验丰富，抬手触诊后，眉头瞬间紧锁，手指反复按压硬块部位。
【立绘：主角 / 焦虑、社区医生 / 专业】
社区医生：阿姨，你这个硬块边界不清，质地偏硬，还有明显压痛，不像是普通的增生，建议你尽快去市里的大医院做乳腺超声和钼靶检查，明确硬块的性质，千万别拖，越拖越危险。
旁白：我捏着社区医院开的诊断建议单，指节因为用力而发白，站在医院门口的寒风里犹豫了很久。我想告诉子女，又怕他们担心，最终还是咬了咬牙，决定暂时隐瞒，只在电话里跟儿子说自己有点小感冒。
【立绘：主角 / 焦虑】
派蒙（意识音）：社区医院都明确提醒你有风险了！别再自己扛着了，快告诉孩子，让他们陪你去大医院检查，拖延只会让 BOSS 吸收身体的营养，越来越强！
【剧情跳转：直接进入第二幕 BE 主线 “隐瞒拖延・结节恶化”】`},{id:"c3",text:"去小区门口的药店买些止痛散结的药膏，偷偷抹着缓解不适，不跟任何人提起硬块的事",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “去小区门口的药店买些止痛散结的药膏”
【立绘：主角 / 焦虑、药店店员 / 友善】
旁白：我绕开社区医院的建议，径直走到小区门口的便民药店，面对店员的询问，我含糊地说 “乳房有点胀痛，想买点药膏擦擦”，不敢多说硬块的事，店员随手拿了几盒止痛散结的中成药膏，叮嘱我按时涂抹。
旁白：我付了钱，把药膏藏在随身的布袋子里，像做了亏心事一样匆匆回家，又把药膏藏在衣柜的最深处，生怕被偶尔回来的子女发现。
【立绘：主角 / 焦虑】
旁白：从那天起，我每天趁家里没人的时候，偷偷掀开衣服抹上药膏，反复按摩硬块部位，一边抹一边自我安慰：“抹点药膏消消炎，说不定就慢慢消了。” 可半个月过去，硬块不仅没消退，反而变得越来越硬，按压时的痛感也更加强烈。
【立绘：主角 / 焦虑】
派蒙（意识音）：乱用药根本解决不了实质性问题！你看，BOSS 已经在悄悄吸收你身体的营养，借着炎症不断增生变大，乳腺主城的正常细胞都在被它侵蚀！
【剧情跳转：直接进入第二幕 BE 主线 “隐瞒拖延・结节恶化”】`},{id:"c4",text:"假装什么都没发生，照常操持家务、买菜做饭，把硬块的事彻底抛在脑后，不去想也不去管",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “假装什么都没发生，照常操持家务”
【立绘：主角 / 正常】
旁白：我把心底的担心和恐惧深深压下去，把那份不安藏在无人知晓的角落，像往常一样每天早起熬粥、打扫卫生、买菜做饭，甚至还特意拍了自己做饭的视频发给子女，笑着跟他们说自己身体好得很。
【立绘：主角 / 焦虑】
旁白：可只有我自己知道，那硬块像一根扎在胸口的刺，时时刻刻硌着心，白天忙着家务时还能暂时忘记，可一到夜深人静的时候，胸口的胀痛感就愈发明显，我躺在床上翻来覆去睡不着，只能咬着牙硬扛。
【立绘：主角 / 焦虑】
旁白：有次和子女视频聊天，儿媳眼尖，看出我脸色苍白、精神状态不好，反复追问我是不是不舒服，我连忙摆手笑着掩饰，说 “没事，就是天冷没睡好”，挂了电话后，我躲在卫生间里偷偷掉眼泪。
【立绘：主角 / 焦虑】
派蒙（意识音）：你这样硬扛着，身体只会越来越难受，乳腺主城的损伤也会越来越重，子女要是知道你独自承受了这么多痛苦，只会更加自责！
【剧情跳转：直接进入第二幕 BE 主线 “隐瞒拖延・结节恶化”】`},{id:"c5",text:"偷偷攒起平时的养老钱和儿女给的零花钱，一个人去大医院做全面检查，全程瞒着子女，不让他们操心分心",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “偷偷攒钱一个人去大医院做全面检查”
【立绘：主角 / 焦虑】
旁白：我趁着子女忙工作、没功夫频繁联系我的几天，偷偷翻出藏在床底的存钱罐，把平时攒下的养老钱、儿女过节给的零花钱全都倒出来，小心翼翼地装在贴身的口袋里。
旁白：一大早我就揣着钱出门，一个人坐了近两个小时的公交，辗转到了市里的三甲医院，挂了乳腺科的号，独自排队、做检查，全程不敢跟任何人多说一句话。
【立绘：主角 / 恐惧】
旁白：乳腺超声的检查结果出来得很快，报告单上的黑色字体像一根根针：右侧乳腺实性结节，BI-RADS 4a 类，腋下淋巴结肿大，建议尽快做穿刺活检明确结节性质。我拿着报告单，坐在医院冰冷的走廊长椅上，浑身发抖。
旁白：我不敢告诉子女，怕他们知道后立刻放下工作赶回来，怕穿刺活检查出不好的结果，更怕后续的治疗要花很多钱，拖垮他们本就不宽裕的生活。我把报告单小心翼翼地折成小方块，塞进鞋垫底下藏好。
【立绘：主角 / 恐惧】
派蒙（意识音）：都已经到 4a 类了，腋下淋巴结都肿起来了，这是身体在拼命向你发出警报啊！你还在瞒！还在硬扛！再拖下去，BOSS 就要彻底觉醒了！
【剧情跳转：直接进入第二幕 BE 主线 “隐瞒拖延・结节恶化”】`}],secondChoicesHE:[{id:"he1",text:"严格按照医嘱按时吃药，定期回医院复查乳腺情况，时刻关注身体变化",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坦诚就医・结节可控
【场景切换：三甲医院】
【立绘：主角 / 安心、儿子 / 心疼、乳腺科专家 / 温和】
旁白：儿子连夜订了最快的高铁票赶回来，到家时已是深夜，顾不上休息，第二天一早便带着我去了市里的三甲医院，挂了乳腺科专家号，专家详细询问了情况后，立刻安排了穿刺活检。
旁白：几天的等待时间里，儿子一直陪在我身边，耐心安慰我，儿媳也每天打来视频电话，叮嘱我注意身体，小孙女还奶声奶气地在电话里说 “外婆加油，外婆一定会好起来的”。
【立绘：主角 / 安心、儿子 / 轻松、乳腺科专家 / 温和】
旁白：穿刺活检的结果终于出来了，万幸是良性结节伴慢性炎症，医生建议做微创手术切除结节，配合消炎药物治疗，防止后续复发，手术安排得很顺利，全程只用了一个多小时。
旁白：术后儿子和儿媳轮流请假照顾我，每天变着花样给我做清淡有营养的饭菜，小孙女也被接过来陪我，每天趴在病床前给我唱儿歌、讲故事，用小手轻轻摸我的手背。
选 1：严格按照医嘱按时吃药，定期复查
【立绘：主角 / 安心、儿子 / 轻松】
旁白：我严格按照医生的嘱咐，每天按时按量吃消炎药物，从不漏服、不擅自停药，儿子特意给我买了药盒，分好每天要吃的药量，贴在冰箱上提醒我。
旁白：我还按照医生的要求，每三个月去医院做一次乳腺超声复查，每次拿到 “结节无增大、腋下淋巴结恢复正常” 的检查报告，我都会第一时间拍照发给子女，让他们放心。
儿子：妈，现在你比谁都在意身体，比我们年轻人还准时去复查，这就对了。
主角：是啊，妈要好好活着，健健康康的，看着我的小孙女长大，看着你们日子越过越好，不给你们添乱。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：及时就医・BOSS 被成功清除
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的光芒彻底驱散，天空重新变回了温润的暖黄色，原本凸起在乳腺组织上的乳房硬结节已经彻底消失不见，腋下肿大的淋巴结也恢复了正常大小，柔软的结缔组织平原重新变得平整有弹性。
旁白：分泌细胞们再也不用佝偻着身子、忍受着疼痛，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻，守护着主城的安全。
【立绘：主角 / 安心、派蒙 / 骄傲、乳房硬结节 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是乳房硬结节 BOSS 和腋下淋巴结肿大 BOSS。但因为及时就医、手术切除了结节，配合规范消炎治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
乳房硬结节 BOSS：（虚弱消散，声音细若游丝）结节被彻底切除…… 我失去了生存的根基…… 再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）炎症彻底消退…… 刺激消失…… 我无法再肿大增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你勇敢说出病情、及时就医治疗，不因为怕连累子女就独自硬扛，这两个 BOSS 根本没有机会长大变强！只要早发现、早治疗，就能轻松消灭它们！
旁白：健康科普：老年人发现乳腺硬块、腋下淋巴结肿大等症状，切勿隐瞒拖延，及时告知子女并就医，良性结节通过微创手术可有效切除，配合规范治疗后复发率低，定期复查是关键。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：及时就医、和子女坦诚沟通，互相依靠、彼此扶持，才是保护自己、也让家人放心的最好方式，别让一时的逞强，留下一生的悔恨。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"让子女帮忙调整日常饮食，做到清淡少油，不吃辛辣刺激的食物，养护乳腺",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坦诚就医・结节可控
【场景切换：三甲医院】
【立绘：主角 / 安心、儿子 / 心疼、乳腺科专家 / 温和】
旁白：儿子连夜订了最快的高铁票赶回来，到家时已是深夜，顾不上休息，第二天一早便带着我去了市里的三甲医院，挂了乳腺科专家号，专家详细询问了情况后，立刻安排了穿刺活检。
旁白：几天的等待时间里，儿子一直陪在我身边，耐心安慰我，儿媳也每天打来视频电话，叮嘱我注意身体，小孙女还奶声奶气地在电话里说 “外婆加油，外婆一定会好起来的”。
【立绘：主角 / 安心、儿子 / 轻松、乳腺科专家 / 温和】
旁白：穿刺活检的结果终于出来了，万幸是良性结节伴慢性炎症，医生建议做微创手术切除结节，配合消炎药物治疗，防止后续复发，手术安排得很顺利，全程只用了一个多小时。
旁白：术后儿子和儿媳轮流请假照顾我，每天变着花样给我做清淡有营养的饭菜，小孙女也被接过来陪我，每天趴在病床前给我唱儿歌、讲故事，用小手轻轻摸我的手背。
选 2：让子女帮忙调整日常饮食，清淡少油
【立绘：主角 / 安心、儿媳 / 温柔】
旁白：儿媳特意查了很多养护乳腺的饮食知识，给我制定了专属的清淡饮食计划，家里的灶台再也不见辛辣油腻、重盐重酱的食物，每天的餐桌上都是新鲜的绿色蔬菜、杂粮粗粮和清淡的肉汤。
旁白：我戒掉了吃了几十年的咸菜、腌肉，改掉了重口味的饮食习惯，每天多喝水，多吃新鲜的水果，饭后跟着小区的老姐妹们在楼下慢走半小时，活动筋骨。
旁白：日子过得平淡又规律，我的精神状态一天比一天好，胸口的不适感彻底消失，整个人看起来容光焕发，连走路都比以前有劲了。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：及时就医・BOSS 被成功清除
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的光芒彻底驱散，天空重新变回了温润的暖黄色，原本凸起在乳腺组织上的乳房硬结节已经彻底消失不见，腋下肿大的淋巴结也恢复了正常大小，柔软的结缔组织平原重新变得平整有弹性。
旁白：分泌细胞们再也不用佝偻着身子、忍受着疼痛，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻，守护着主城的安全。
【立绘：主角 / 安心、派蒙 / 骄傲、乳房硬结节 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是乳房硬结节 BOSS 和腋下淋巴结肿大 BOSS。但因为及时就医、手术切除了结节，配合规范消炎治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
乳房硬结节 BOSS：（虚弱消散，声音细若游丝）结节被彻底切除…… 我失去了生存的根基…… 再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）炎症彻底消退…… 刺激消失…… 我无法再肿大增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你勇敢说出病情、及时就医治疗，不因为怕连累子女就独自硬扛，这两个 BOSS 根本没有机会长大变强！只要早发现、早治疗，就能轻松消灭它们！
旁白：健康科普：老年人发现乳腺硬块、腋下淋巴结肿大等症状，切勿隐瞒拖延，及时告知子女并就医，良性结节通过微创手术可有效切除，配合规范治疗后复发率低，定期复查是关键。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：及时就医、和子女坦诚沟通，互相依靠、彼此扶持，才是保护自己、也让家人放心的最好方式，别让一时的逞强，留下一生的悔恨。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"康复后跟小区的老姐妹们分享自己的经历，提醒她们身体不适别硬扛，及时就医",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坦诚就医・结节可控
【场景切换：三甲医院】
【立绘：主角 / 安心、儿子 / 心疼、乳腺科专家 / 温和】
旁白：儿子连夜订了最快的高铁票赶回来，到家时已是深夜，顾不上休息，第二天一早便带着我去了市里的三甲医院，挂了乳腺科专家号，专家详细询问了情况后，立刻安排了穿刺活检。
旁白：几天的等待时间里，儿子一直陪在我身边，耐心安慰我，儿媳也每天打来视频电话，叮嘱我注意身体，小孙女还奶声奶气地在电话里说 “外婆加油，外婆一定会好起来的”。
【立绘：主角 / 安心、儿子 / 轻松、乳腺科专家 / 温和】
旁白：穿刺活检的结果终于出来了，万幸是良性结节伴慢性炎症，医生建议做微创手术切除结节，配合消炎药物治疗，防止后续复发，手术安排得很顺利，全程只用了一个多小时。
旁白：术后儿子和儿媳轮流请假照顾我，每天变着花样给我做清淡有营养的饭菜，小孙女也被接过来陪我，每天趴在病床前给我唱儿歌、讲故事，用小手轻轻摸我的手背。
选 3：康复后跟老姐妹们分享经历，提醒他人
【立绘：主角 / 温暖、邻居 / 热心】
旁白：身体彻底康复后，我经常在小区的长椅上、老年活动中心里，跟身边的老姐妹们分享自己的经历，拿着自己的检查报告和病历本，语重心长地跟她们说：“姐妹们，咱们上了年纪，有啥不舒服可别像我一开始那样硬扛，早发现、早说、早治疗，才是真的不让孩子操心。”
旁白：在我的带动和提醒下，好几个老姐妹都主动去医院做了乳腺检查，有的及时发现了轻微增生，有的查出了小结节，都在医生的指导下及时调理、治疗，避免了病情拖延。
邻居：多亏了你提醒，不然我还真把这小硬块不当回事，真是帮了我大忙了！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：及时就医・BOSS 被成功清除
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的光芒彻底驱散，天空重新变回了温润的暖黄色，原本凸起在乳腺组织上的乳房硬结节已经彻底消失不见，腋下肿大的淋巴结也恢复了正常大小，柔软的结缔组织平原重新变得平整有弹性。
旁白：分泌细胞们再也不用佝偻着身子、忍受着疼痛，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻，守护着主城的安全。
【立绘：主角 / 安心、派蒙 / 骄傲、乳房硬结节 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是乳房硬结节 BOSS 和腋下淋巴结肿大 BOSS。但因为及时就医、手术切除了结节，配合规范消炎治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
乳房硬结节 BOSS：（虚弱消散，声音细若游丝）结节被彻底切除…… 我失去了生存的根基…… 再也撑不住了……
腋下淋巴结肿大 BOSS：（透明淡化，气息微弱）炎症彻底消退…… 刺激消失…… 我无法再肿大增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你勇敢说出病情、及时就医治疗，不因为怕连累子女就独自硬扛，这两个 BOSS 根本没有机会长大变强！只要早发现、早治疗，就能轻松消灭它们！
旁白：健康科普：老年人发现乳腺硬块、腋下淋巴结肿大等症状，切勿隐瞒拖延，及时告知子女并就医，良性结节通过微创手术可有效切除，配合规范治疗后复发率低，定期复查是关键。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：及时就医、和子女坦诚沟通，互相依靠、彼此扶持，才是保护自己、也让家人放心的最好方式，别让一时的逞强，留下一生的悔恨。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧不愿接受治疗，怕花光子女的积蓄，继续隐瞒硬扛，拒绝去医院",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：隐瞒拖延・结节恶化
【场景切换：卧室】
【立绘：主角 / 痛苦、儿子 / 焦急、儿媳 / 担忧】
旁白：我依旧选择继续隐瞒病情，独自硬扛着胸口日益强烈的疼痛和腋下的肿胀，每天靠吃普通的止痛药缓解不适，药膏抹了一盒又一盒，可硬块还是在不知不觉中越来越大，从一开始的小硬块长成了明显的凸起。
旁白：日子一天天过去，转眼到了春节，子女们带着小孙女回家过年，一进门就看出了我的不对劲，我脸色苍白、精神萎靡，走路慢吞吞的，穿再厚的衣服也遮不住胸口的凸起，儿子一眼就发现了我的异常，反复追问我是不是身体不舒服。
【立绘：主角 / 懊悔、儿子 / 心疼、儿媳 / 担忧】
旁白：在子女的再三逼问下，我终于瞒不住了，哭着说出了实情。子女又气又心疼，强行带着我去了市里的三甲医院做全面复查，复查结果像一道晴天霹雳：乳腺结节已经发展到 BI-RADS 5 类，高度怀疑恶性，腋下淋巴结已经出现明显转移迹象。
旁白：我拿着诊断单，眼前一黑，差点晕过去，双手止不住地发抖，脑子里一片空白，无尽的悔恨涌上心头，让我痛不欲生。
选 1：依旧不愿接受治疗，继续硬扛
【立绘：主角 / 绝望、儿子 / 焦急】
旁白：我看着诊断单上的结果，想到后续治疗要花很多钱，想到子女要放下工作全程照顾我，我坚决拒绝了医生的手术和化疗建议，趁子女不注意，偷偷跑回了家，把自己锁在房间里。
主角：（隔着房门哭着喊）我不治了，治不好的，别再为我花钱了，你们挣钱不容易，好好过日子就行，别管我了。
旁白：最终，我还是坚持拒绝治疗，乳腺结节持续恶化，癌细胞不断扩散，彻底错过了最佳治疗时机，我的身体越来越虚弱，胸口的疼痛越来越剧烈，到最后连下床走路的力气都没有了。
【立绘：主角 / 绝望】
派蒙（意识音）：主人！你怎么还不明白！现在治疗不是给子女添负担，是给他们留希望啊！你这样硬扛，最后只会让他们遗憾终生！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：隐瞒拖延・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，布满了裂痕，乳腺导管也失去了往日的光泽，变得干瘪脆弱，堵塞不通。
【立绘：主角 / 恐惧、派蒙 / 绝望、乳房硬结节 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：胸口处的乳房硬结节 BOSS 已经变得巨大而坚硬，像一块冰冷的巨石，死死地压在乳腺组织上，表面散发着狰狞的黑雾，不断增生扩张；腋下的淋巴结肿大 BOSS 也肿成了一串巨大的疙瘩，一个个紧紧粘连在一起，黑雾从淋巴结不断蔓延。
乳房硬结节 BOSS：（冰冷刺耳，咆哮着扩散黑雾）拖延就医让我不断增生壮大！你的乳腺主城，从今往后，由我彻底占领！
腋下淋巴结肿大 BOSS：（阴冷沙哑，黑雾蔓延）长期的炎症刺激让我持续肿大！转移的通道已经彻底打开，你的身体，再也无法恢复！
派蒙：（颤抖哭喊，眼泪掉下来）主人！这就是你一直隐瞒、一直硬扛养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：乳腺结节拖延至 BI-RADS 5 类后，恶性风险显著升高，淋巴结转移会增加治疗难度，老年人应定期做乳腺体检，发现异常及时告知家人并就医，切勿因怕连累子女而隐瞒病情。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：老年人生病不可怕，可怕的是因为怕连累子女就选择独自硬扛，最后拖成大病，不仅让自己承受更多痛苦，还让子女更加自责，到头来还是添了更大的麻烦。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be2",text:"最终听从医生建议，接受手术和化疗，让子女全程放下工作照顾",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：隐瞒拖延・结节恶化
【场景切换：卧室】
【立绘：主角 / 痛苦、儿子 / 焦急、儿媳 / 担忧】
旁白：我依旧选择继续隐瞒病情，独自硬扛着胸口日益强烈的疼痛和腋下的肿胀，每天靠吃普通的止痛药缓解不适，药膏抹了一盒又一盒，可硬块还是在不知不觉中越来越大，从一开始的小硬块长成了明显的凸起。
旁白：日子一天天过去，转眼到了春节，子女们带着小孙女回家过年，一进门就看出了我的不对劲，我脸色苍白、精神萎靡，走路慢吞吞的，穿再厚的衣服也遮不住胸口的凸起，儿子一眼就发现了我的异常，反复追问我是不是身体不舒服。
【立绘：主角 / 懊悔、儿子 / 心疼、儿媳 / 担忧】
旁白：在子女的再三逼问下，我终于瞒不住了，哭着说出了实情。子女又气又心疼，强行带着我去了市里的三甲医院做全面复查，复查结果像一道晴天霹雳：乳腺结节已经发展到 BI-RADS 5 类，高度怀疑恶性，腋下淋巴结已经出现明显转移迹象。
旁白：我拿着诊断单，眼前一黑，差点晕过去，双手止不住地发抖，脑子里一片空白，无尽的悔恨涌上心头，让我痛不欲生。
选 2：听从医生建议，接受手术和化疗
【立绘：主角 / 痛苦、儿子 / 疲惫、儿媳 / 担忧】
旁白：在子女的苦苦劝说和医生的专业讲解下，我哭着答应了接受治疗，按照医生的方案，先做了乳房切除手术，术后又开始了漫长又痛苦的化疗。
旁白：化疗的副作用让我吃尽了苦头，头发大把大把地掉，最后全秃了，吃什么吐什么，连喝水都觉得恶心，身体迅速消瘦，整个人瘦得脱了形，脸色苍白得像纸一样。
旁白：儿子和儿媳彻底放下了手里的工作，全程守在医院照顾我，端水喂药、擦身洗脸，寸步不离，小孙女也交给了爷爷奶奶照顾，一家人的生活节奏全被打乱。
【立绘：主角 / 懊悔】
旁白：看着家人为我奔波劳累、为我操心担忧，我心里充满了无尽的悔恨，要是一开始我没有隐瞒病情，要是我早点告诉子女、早点去医院治疗，就不会走到今天这一步。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：隐瞒拖延・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，布满了裂痕，乳腺导管也失去了往日的光泽，变得干瘪脆弱，堵塞不通。
【立绘：主角 / 恐惧、派蒙 / 绝望、乳房硬结节 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：胸口处的乳房硬结节 BOSS 已经变得巨大而坚硬，像一块冰冷的巨石，死死地压在乳腺组织上，表面散发着狰狞的黑雾，不断增生扩张；腋下的淋巴结肿大 BOSS 也肿成了一串巨大的疙瘩，一个个紧紧粘连在一起，黑雾从淋巴结不断蔓延。
乳房硬结节 BOSS：（冰冷刺耳，咆哮着扩散黑雾）拖延就医让我不断增生壮大！你的乳腺主城，从今往后，由我彻底占领！
腋下淋巴结肿大 BOSS：（阴冷沙哑，黑雾蔓延）长期的炎症刺激让我持续肿大！转移的通道已经彻底打开，你的身体，再也无法恢复！
派蒙：（颤抖哭喊，眼泪掉下来）主人！这就是你一直隐瞒、一直硬扛养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：乳腺结节拖延至 BI-RADS 5 类后，恶性风险显著升高，淋巴结转移会增加治疗难度，老年人应定期做乳腺体检，发现异常及时告知家人并就医，切勿因怕连累子女而隐瞒病情。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：老年人生病不可怕，可怕的是因为怕连累子女就选择独自硬扛，最后拖成大病，不仅让自己承受更多痛苦，还让子女更加自责，到头来还是添了更大的麻烦。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be3",text:"不信正规医院的治疗方案，偷偷找民间偏方，想靠 “土方子” 治好病",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：隐瞒拖延・结节恶化
【场景切换：卧室】
【立绘：主角 / 痛苦、儿子 / 焦急、儿媳 / 担忧】
旁白：我依旧选择继续隐瞒病情，独自硬扛着胸口日益强烈的疼痛和腋下的肿胀，每天靠吃普通的止痛药缓解不适，药膏抹了一盒又一盒，可硬块还是在不知不觉中越来越大，从一开始的小硬块长成了明显的凸起。
旁白：日子一天天过去，转眼到了春节，子女们带着小孙女回家过年，一进门就看出了我的不对劲，我脸色苍白、精神萎靡，走路慢吞吞的，穿再厚的衣服也遮不住胸口的凸起，儿子一眼就发现了我的异常，反复追问我是不是身体不舒服。
【立绘：主角 / 懊悔、儿子 / 心疼、儿媳 / 担忧】
旁白：在子女的再三逼问下，我终于瞒不住了，哭着说出了实情。子女又气又心疼，强行带着我去了市里的三甲医院做全面复查，复查结果像一道晴天霹雳：乳腺结节已经发展到 BI-RADS 5 类，高度怀疑恶性，腋下淋巴结已经出现明显转移迹象。
旁白：我拿着诊断单，眼前一黑，差点晕过去，双手止不住地发抖，脑子里一片空白，无尽的悔恨涌上心头，让我痛不欲生。
选 3：不信正规治疗，偷偷找偏方
【立绘：主角 / 焦虑、民间郎中 / 神秘】
旁白：我始终不愿意相信正规医院的治疗方案，觉得手术和化疗太受罪，还不一定能治好，偷偷听小区里的老人说，有个民间郎中会治 “肿瘤”，靠着祖传的 “土方子” 治好了很多人。
旁白：我心里燃起了希望，偷偷联系上了这个郎中，不惜花光自己所有的养老钱，买了一堆所谓的 “抗癌土方子”，都是些不知名的草药和粉末，我瞒着子女，每天在家熬着喝这些偏方，拒绝吃医院开的正规药物。
【立绘：主角 / 虚弱、儿子 / 心疼】
旁白：可喝了半个月，不仅没有任何效果，反而出现了严重的恶心、呕吐、腹泻症状，身体越来越虚弱，连走路都需要人扶着，胸口的疼痛和腋下的肿胀也愈发严重。子女发现后，又气又心疼，强行把我送回了医院。
旁白：可此时，我的病情已经比之前更严重了，癌细胞扩散得更快，治疗难度也大大增加。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：隐瞒拖延・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，布满了裂痕，乳腺导管也失去了往日的光泽，变得干瘪脆弱，堵塞不通。
【立绘：主角 / 恐惧、派蒙 / 绝望、乳房硬结节 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：胸口处的乳房硬结节 BOSS 已经变得巨大而坚硬，像一块冰冷的巨石，死死地压在乳腺组织上，表面散发着狰狞的黑雾，不断增生扩张；腋下的淋巴结肿大 BOSS 也肿成了一串巨大的疙瘩，一个个紧紧粘连在一起，黑雾从淋巴结不断蔓延。
乳房硬结节 BOSS：（冰冷刺耳，咆哮着扩散黑雾）拖延就医让我不断增生壮大！你的乳腺主城，从今往后，由我彻底占领！
腋下淋巴结肿大 BOSS：（阴冷沙哑，黑雾蔓延）长期的炎症刺激让我持续肿大！转移的通道已经彻底打开，你的身体，再也无法恢复！
派蒙：（颤抖哭喊，眼泪掉下来）主人！这就是你一直隐瞒、一直硬扛养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：乳腺结节拖延至 BI-RADS 5 类后，恶性风险显著升高，淋巴结转移会增加治疗难度，老年人应定期做乳腺体检，发现异常及时告知家人并就医，切勿因怕连累子女而隐瞒病情。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：隐瞒病情从来都不是坚强，也不是真正的为子女着想，而是对自己、对家人的不负责任。
派蒙：老年人生病不可怕，可怕的是因为怕连累子女就选择独自硬扛，最后拖成大病，不仅让自己承受更多痛苦，还让子女更加自责，到头来还是添了更大的麻烦。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会做出隐瞒病情、独自硬扛的傻事。
旁白：记忆点 1 通关完成，已成功解锁两大 BOSS—— 乳房硬结节 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["breastLump","lymphNode"],skillHE:{id:"timelyMedical",name:"及时就医",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"hideIllness",name:"隐瞒病情",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},2:{id:2,title:"忽视体检，拖延乳腺隐患",description:"忽视体检，拖延乳腺隐患",perspective:"elder",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。老年线的记忆通道泛着温润的米白色光晕，带着岁月的厚重感。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个老年专属记忆入口：隐瞒病情，怕连累子女、忽视体检，拖延乳腺隐患、盲目听信偏方，延误治疗。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖轻轻触碰 “记忆点 2：忽视体检，拖延乳腺隐患” 这行发光文字，指尖传来一阵轻微的酸涩感。触碰的刹那，记忆通道瞬间亮起，那段因常年推脱体检、将细微不适当成 “老毛病” 的记忆，被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 温柔】"},{id:"s8",speaker:"派蒙",text:"爷爷奶奶，我们要走进这段特别重要的记忆啦。你还记得吗？当年胸口偶尔的闷胀、乳头偶尔的发痒，你都当成了年纪大的正常现象，儿女们催你去做乳腺体检，你总说 “没事、不用去”。"},{id:"s9",speaker:"派蒙",text:"可就是这些被你忽视的小不适，悄悄在乳腺主城里埋下了隐患，慢慢催生了两个可怕的病症 BOSS 哦。"},{id:"s10",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 担忧、分泌细胞 / 虚弱】"},{id:"s11",speaker:"旁白",text:"话音刚落，几个蔫蔫的乳腺分泌细胞，跌跌撞撞地从记忆通道口飘出来。它们身上裹着一层薄薄的灰雾，原本饱满圆润的细胞膜变得干瘪起皱，乳头部位的细胞耷拉着脑袋，连带着周围的乳腺导管都显得僵硬。"},{id:"s12",speaker:"分泌细胞",text:"爷爷奶奶…… 我们早就不舒服了…… 每次你觉得发痒、发涨，都是我们在求救啊…… 你不肯去体检，不肯看看我们，我们就越来越虚弱，隐患也越来越大了……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"爷爷奶奶，你都看到了吧？这就是忽视体检、拖延隐患的后果！因为你长期不做乳腺体检，没及时发现这些细微的异常，直接催生了两个乳腺癌早期的病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们回到那段深秋的时光，就是要重新做出选择，守住体检的防线，阻止这两个 BOSS 觉醒，守护好你的乳腺主城。"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 郑重】"},{id:"s17",speaker:"旁白",text:"我攥紧双手，指腹传来微微的刺痛，心底的悔意像潮水般漫上来。我重重地点了点头，心里暗暗发誓：这一次，再也不会拖延，再也不会忽视。"},{id:"s18",speaker:"旁白",text:"眼前的记忆之门彻底敞开，一股熟悉的、夹杂着炖菜香与深秋凉意的气息扑面而来，我被瞬间拉回了当年，那个儿女们带着刚炖好的酸菜炖粉条回家，又一次郑重提起乳腺体检的周末傍晚。"},{id:"s19",speaker:"第一幕",text:"深秋餐桌旁・体检抉择（5 选 1 并联选项）"},{id:"s20",speaker:"舞台指示",text:"【场景切换：家庭客厅】"},{id:"s21",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s22",speaker:"旁白",text:"深秋的傍晚，窗外的风卷着落叶沙沙作响，客厅里的暖气片烧得暖洋洋的。餐桌中央摆着一大锅酸菜炖粉条，酸菜的酸爽混着五花肉的醇香，飘得满屋子都是，那是我最爱的家乡味。"},{id:"s23",speaker:"舞台指示",text:"【立绘：主角 / 正常、儿子 / 诚恳、女儿 / 温柔】"},{id:"s24",speaker:"旁白",text:"我坐在餐桌主位，手里端着碗，慢慢喝着热汤，看着儿子、女儿围着餐桌忙前忙后，心里满是踏实。可这份温馨，很快就被儿女们反复提起的 “体检” 打破了。"},{id:"s25",speaker:"儿子",text:"妈，这都入秋三个月了，你之前说胸口偶尔闷胀、乳头有时候发痒，我们早就给你预约了体检中心的乳腺专项体检号，就在下周一。这次别再推脱了，跟我们一起去，图个放心。"},{id:"s26",speaker:"女儿",text:"是啊妈，你去年就没做体检，今年可不能再拖了。乳腺体检就是针对咱们老年人的常规检查，不抽血、不遭罪，我们全程陪着你。"},{id:"s27",speaker:"舞台指示",text:"【立绘：主角 / 固执、儿子 / 诚恳、女儿 / 温柔】"},{id:"s28",speaker:"主角",text:"哎呀，多大点事啊，年纪大了，乳腺有点发胀、发痒不是很正常吗？肯定是秋燥，过阵子喝点梨水就好了。去医院干啥，又花钱又麻烦，还耽误你们上班。"},{id:"s29",speaker:"儿子",text:"妈，这可不是小事！乳腺问题早期根本没明显症状，等疼得厉害、有明显感觉了，就晚了。体检就是为了抓那些藏着的小隐患。"},{id:"s30",speaker:"主角",text:"我都说了我没事！我活了快七十年了，自己的身体自己还不清楚？别总拿这些事吓唬我，我不去，说啥都不去！"},{id:"s31",speaker:"旁白",text:"餐桌上的气氛瞬间冷了下来，儿女们对视一眼，眼里的无奈快要溢出来。我心里也有些不是滋味，既觉得儿女们太过小题大做，又隐隐有些愧疚，可一想到体检的繁琐，我又把那份愧疚压了下去。"}],firstChoices:[{id:"c1",text:"听从儿女劝说，当场答应下周一去做乳腺专项体检，重视身体的细微不适",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “听从儿女劝说，当场答应下周一去做乳腺专项体检”
【立绘：主角 / 坚定、儿子 / 诚恳、女儿 / 温柔】
主角：行了，妈听你们的。下周一，你们陪我去，就当是陪你们跑一趟，图个全家安心。
儿子：太好了妈！就知道你最疼我们！我明天就把体检的流程、注意事项整理好，晚上给你念一遍。
女儿：妈，你放心，下周一我们早点起，全程陪着你，一点都不让你操心。
【立绘：主角 / 安心】
旁白：餐桌上的气氛又热络起来，酸菜炖粉条的香味似乎更浓了。我吃着饭，看着儿女们开心的样子，心里暖暖的。我暗暗下定决心：这次一定说到做到，好好做个体检，以后也按时参加常规检查。
【立绘：主角 / 安心】
派蒙（意识音）：爷爷奶奶，你太明智啦！这就是最正确的选择！重视体检，就是抓住了守护乳腺健康的第一道防线，那些藏着的小隐患，再也没有机会变成可怕的 BOSS！
【剧情跳转：直接进入第二幕 HE 主线 “重视体检・主动守护”】`},{id:"c2",text:"暂时推脱，说下周一要去社区参加老年活动，等活动结束再考虑体检的事",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “暂时推脱，说下周一要去社区参加老年活动”
【立绘：主角 / 固执、儿子 / 担忧、女儿 / 恳求】
主角：孩子们，妈知道你们关心我。可下周一我要去社区参加老年活动，早就报名了，不好推脱。等活动结束，我再跟你们去体检，行不行？
儿子：妈，体检就十几分钟的事，活动能不能请假啊？体检真的比啥都重要。
主角：不行不行，活动一年就一次，我可不能缺席。体检的事，等我忙完再说，你们别再催了。
【立绘：主角 / 固执】
旁白：儿女们半信半疑，却也不好再逼我，只能反复叮嘱我活动结束后一定要记得体检。我连连点头，心里暗暗松了口气，总算把这件事暂时糊弄过去了。
【立绘：主角 / 固执】
派蒙（意识音）：爷爷奶奶，这样暂时推脱，可不是长久之计呀。身体的细微不适，就是乳腺主城在向你求救，拖延一天，隐患就重一分。赶紧正视这件事，答应去体检，才能真正让大家放心哦。
【剧情跳转：直接进入第二幕 BE 主线 “拒绝体检・放任隐患”】`},{id:"c3",text:"坚决拒绝，语气强硬地告诉儿女，体检就是 “瞎折腾”，以后不准再提这件事",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “坚决拒绝，语气强硬地告诉儿女，体检就是‘瞎折腾’”
【立绘：主角 / 固执、儿子 / 焦急、女儿 / 委屈】
主角：我都说了不去！你们怎么就是听不懂人话？！体检有什么用？纯粹是浪费钱、瞎折腾！我一把年纪了，不想往医院跑，不想看医生的脸色！
主角：你们要是真孝顺，就别逼我做我不想做的事！以后再也不准提体检的事，谁提我跟谁急！
女儿：妈，我们不是逼你，我们只是怕你有事…… 既然你这么坚决，我们不提了，可你要是身体不舒服，一定要告诉我们。
【立绘：主角 / 固执】
旁白：我别过脸，冷哼了一声，不再说话。那一晚，餐桌上再也没有了欢声笑语，酸菜炖粉条凉了，儿女们也没再动筷子。我坐在空荡荡的客厅里，心里又气又悔，却依旧不肯低头。
【立绘：主角 / 固执】
派蒙（意识音）：爷爷奶奶，你怎么能这么坚决地拒绝呢？儿女们都是为了你好啊！你现在的强硬，是在把健康的机会往外推，乳腺主城的小细胞们，已经在默默承受痛苦了！
【剧情跳转：直接进入第二幕 BE 主线 “拒绝体检・放任隐患”】`},{id:"c4",text:"口头答应去体检，心里却盘算着下周一故意装病，躲过这次体检",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “口头答应去体检，心里却盘算着下周一故意装病”
【立绘：主角 / 正常、儿子 / 开心、女儿 / 温柔】
主角：行，妈答应你们，下周一跟你们去体检。你们别再担心了，好好吃饭。
儿子：妈，你放心，下周一我早点来接你，保证让你顺顺利利做完检查。
女儿：等检查完，我们带你去吃你最爱吃的豆沙包，好不好？
【立绘：主角 / 固执】
旁白：“好，都听你们的。” 我笑着回应，可心里却在暗暗盘算：下周一早上，我就说自己拉肚子，或者说胸口疼得厉害，不能出门，这样既能躲过体检，又能让儿女们不再催我。
【立绘：主角 / 固执】
派蒙（意识音）：爷爷奶奶，心口不一可不行呀。你答应了儿女，却想着推脱，既会让他们失望，也会耽误自己的健康。乳腺的隐患不会因为你的 “借口” 就消失，反而会悄悄长大。
【剧情跳转：直接进入第二幕 BE 主线 “拒绝体检・放任隐患”】`},{id:"c5",text:"让儿女把体检的具体流程、注意事项写下来，确认真的不麻烦、不遭罪后再决定",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “让儿女把体检的具体流程、注意事项写下来”
【立绘：主角 / 焦虑、儿子 / 诚恳、女儿 / 温柔】
主角：我不是不想去体检，就是怕麻烦、怕遭罪。你们先去体检中心，问问乳腺专项体检的具体流程，是不是只做 B 超？要排多久队？等你们把这些都了解清楚了，跟我说一声。
儿子：妈，没问题！我明天一早就去体检中心问清楚，把流程、费用、检查项目都记下来，回来一字不差地告诉你。
女儿：对，我们一定给你问得明明白白的，你就放心吧。
【立绘：主角 / 焦虑】
旁白：我点了点头，心里暗暗松了口气：这样既能拖延时间，又能让儿女们觉得我是真的在考虑，他们肯定不会再急着催我了。
【立绘：主角 / 焦虑】
派蒙（意识音）：爷爷奶奶，你这还是在拖延呀。乳腺体检的流程本来就很简单，可你却把它当成了 “挡箭牌”。再拖下去，那些细微的不适，就会变成明显的症状，到时候再去体检，就晚啦。
【剧情跳转：直接进入第二幕 BE 主线 “拒绝体检・放任隐患”】`}],secondChoicesHE:[{id:"he1",text:"主动整理好自己的身份证、老年证、医保卡，提前放在包里，避免体检当天手忙脚乱",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：重视体检・主动守护
【场景切换：家庭客厅】
【立绘：主角 / 安心、儿媳 / 贴心】
旁白：答应儿女去体检后，我心里的那块石头反而落了地。之前对体检的抵触，慢慢变成了对健康的重视。当晚，我就把儿女们整理好的体检流程贴在了冰箱门上，还让女儿给我定了下周一早上七点的闹钟。
旁白：第二天一早，儿子就把体检的详细情况告诉了我：乳腺专项体检只做乳腺 B 超和触诊，不用抽血、不用空腹，全程下来不到二十分钟，费用也有老年医保报销。听完这些，我心里的顾虑彻底消失了。
旁白：接下来的几天，我严格按照儿女的叮嘱调理身体：每天早上在小区里慢走二十分钟，中午少吃油腻的食物，晚上九点就上床睡觉。胸口偶尔的闷胀感，似乎也减轻了一些。
选 1：主动整理好证件，避免体检当天手忙脚乱
【立绘：主角 / 安心】
旁白：体检前一天晚上，我吃完晚饭，就主动坐在客厅的沙发上，开始整理体检需要的东西。我把身份证、老年证、医保卡一一找出来，仔细检查了一遍，确认没有遗漏后，放进了一个专门的帆布包里。
旁白：我还特意让女儿帮我把体检中心的地址、儿子的电话号码，写在一张小纸条上，也放进包里。整理完后，我把包放在玄关最显眼的位置，又反复确认了一遍闹钟，才安心地上床睡觉。
【立绘：主角 / 开心、儿子 / 开心、女儿 / 温柔】
旁白：第二天一早，闹钟一响，我就立刻起床，洗漱、吃早饭，动作格外麻利。儿女们来接我的时候，看到我已经准备就绪，都惊讶地笑了：“妈，你今天比我们还积极！”
主角：那是，体检是为了自己的健康，当然要积极啦！
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：重视体检・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的上空，突然亮起一道温润的暖白色光芒，像深秋的暖阳，一点点驱散了笼罩在主城上空的灰雾，照亮了每一个角落。
旁白：原本浑浊的乳腺导管，慢慢变得清澈，营养液在里面欢快地流淌；原本蜷缩的分泌细胞，慢慢舒展身体，身上的灰雾一点点消散，变得饱满、圆润。乳头部位的细胞慢慢抬起头，向内凹陷的部位一点点鼓起来，乳腺导管里的浑浊液体也渐渐消失。
【立绘：主角 / 安心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影朝着乳腺主城靠近 —— 那是乳头内陷 BOSS 和乳头溢液 BOSS。可它们刚靠近暖白色的光芒，就被光芒包裹住。因为我重视体检、早早发现隐患、接受了正规调理，它们失去了生长的能量，变得越来越淡。
乳头内陷 BOSS：（虚弱消散，声音细若游丝）你重视了体检，乳腺导管恢复了弹性，牵拉消失了…… 我，再也撑不住了……
乳头溢液 BOSS：（透明淡化，气息微弱）你不再拖延，乳腺分泌恢复了正常，我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：爷爷奶奶，你看！太棒啦！因为你重视体检、拒绝拖延，乳头内陷 BOSS 和乳头溢液 BOSS，都被成功驱散了！乳腺主城，恢复了往日的生机与活力！
派蒙：只要你一直坚持按时体检，重视身体的每一个细微不适，接受正规调理，乳腺主城就会一直安安全全、暖暖和和的。
旁白：健康科普：老年女性应每年进行 1 次乳腺专项体检（乳腺 B 超 + 触诊），早发现乳腺增生、导管扩张等隐患，通过规范调理可降低恶变风险，乳头溢液、内陷等症状需及时告知医生。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：体检，就是守护乳腺健康的第一道防线。它不是 “浪费钱”，不是 “瞎折腾”，而是能帮你抓住那些藏着的小隐患，能帮你阻止病症 BOSS 的觉醒。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"向小区里的老姐妹打听乳腺体检的注意事项，互相提醒，一起重视老年乳腺健康",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：重视体检・主动守护
【场景切换：家庭客厅】
【立绘：主角 / 安心、儿媳 / 贴心】
旁白：答应儿女去体检后，我心里的那块石头反而落了地。之前对体检的抵触，慢慢变成了对健康的重视。当晚，我就把儿女们整理好的体检流程贴在了冰箱门上，还让女儿给我定了下周一早上七点的闹钟。
旁白：第二天一早，儿子就把体检的详细情况告诉了我：乳腺专项体检只做乳腺 B 超和触诊，不用抽血、不用空腹，全程下来不到二十分钟，费用也有老年医保报销。听完这些，我心里的顾虑彻底消失了。
旁白：接下来的几天，我严格按照儿女的叮嘱调理身体：每天早上在小区里慢走二十分钟，中午少吃油腻的食物，晚上九点就上床睡觉。胸口偶尔的闷胀感，似乎也减轻了一些。
选 2：向老姐妹打听注意事项，互相提醒重视乳腺健康
【立绘：主角 / 开心、王阿姨 / 热心、刘阿姨 / 附和】
旁白：体检前一天，我在小区花园散步时，遇到了一起跳广场舞的王阿姨和刘阿姨。我主动走上前，跟她们说起了自己下周一要去做乳腺体检的事。
主角：我儿女说，咱们老年人一定要重视乳腺体检，早发现、早调理。你们也别总拖着，有空也去做个检查，图个放心。对了，你们知道乳腺体检有啥注意事项吗？
王阿姨：我去年做过，不用空腹，也不用憋尿，就是要穿宽松的上衣和裤子，方便检查。
刘阿姨：是啊，还有就是要把自己的身体不适跟医生说清楚，别藏着掖着。
主角：那咱们约着，下次一起去体检吧？互相作伴，也不害怕。
旁白：王阿姨和刘阿姨连连点头：“好啊好啊，多亏你提醒我们，不然我们还想着再拖拖呢。”
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：重视体检・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的上空，突然亮起一道温润的暖白色光芒，像深秋的暖阳，一点点驱散了笼罩在主城上空的灰雾，照亮了每一个角落。
旁白：原本浑浊的乳腺导管，慢慢变得清澈，营养液在里面欢快地流淌；原本蜷缩的分泌细胞，慢慢舒展身体，身上的灰雾一点点消散，变得饱满、圆润。乳头部位的细胞慢慢抬起头，向内凹陷的部位一点点鼓起来，乳腺导管里的浑浊液体也渐渐消失。
【立绘：主角 / 安心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影朝着乳腺主城靠近 —— 那是乳头内陷 BOSS 和乳头溢液 BOSS。可它们刚靠近暖白色的光芒，就被光芒包裹住。因为我重视体检、早早发现隐患、接受了正规调理，它们失去了生长的能量，变得越来越淡。
乳头内陷 BOSS：（虚弱消散，声音细若游丝）你重视了体检，乳腺导管恢复了弹性，牵拉消失了…… 我，再也撑不住了……
乳头溢液 BOSS：（透明淡化，气息微弱）你不再拖延，乳腺分泌恢复了正常，我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：爷爷奶奶，你看！太棒啦！因为你重视体检、拒绝拖延，乳头内陷 BOSS 和乳头溢液 BOSS，都被成功驱散了！乳腺主城，恢复了往日的生机与活力！
派蒙：只要你一直坚持按时体检，重视身体的每一个细微不适，接受正规调理，乳腺主城就会一直安安全全、暖暖和和的。
旁白：健康科普：老年女性应每年进行 1 次乳腺专项体检（乳腺 B 超 + 触诊），早发现乳腺增生、导管扩张等隐患，通过规范调理可降低恶变风险，乳头溢液、内陷等症状需及时告知医生。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：体检，就是守护乳腺健康的第一道防线。它不是 “浪费钱”，不是 “瞎折腾”，而是能帮你抓住那些藏着的小隐患，能帮你阻止病症 BOSS 的觉醒。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"体检当天，主动向医生说明自己的不适症状，让医生重点检查，不遗漏任何细节",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：重视体检・主动守护
【场景切换：家庭客厅】
【立绘：主角 / 安心、儿媳 / 贴心】
旁白：答应儿女去体检后，我心里的那块石头反而落了地。之前对体检的抵触，慢慢变成了对健康的重视。当晚，我就把儿女们整理好的体检流程贴在了冰箱门上，还让女儿给我定了下周一早上七点的闹钟。
旁白：第二天一早，儿子就把体检的详细情况告诉了我：乳腺专项体检只做乳腺 B 超和触诊，不用抽血、不用空腹，全程下来不到二十分钟，费用也有老年医保报销。听完这些，我心里的顾虑彻底消失了。
旁白：接下来的几天，我严格按照儿女的叮嘱调理身体：每天早上在小区里慢走二十分钟，中午少吃油腻的食物，晚上九点就上床睡觉。胸口偶尔的闷胀感，似乎也减轻了一些。
选 3：体检当天，主动向医生说明不适症状
【立绘：主角 / 安心、乳腺科医生 / 温和】
旁白：体检当天，儿女们陪着我，顺利来到了体检中心。做乳腺 B 超的时候，医生温柔地让我躺在检查床上，开始进行检查。
主角：医生，我跟你说一下，我这几个月，总觉得胸口偶尔闷胀，乳头有时候会发痒，还有一点点轻微的溢液，你帮我重点看看这些地方，麻烦你了。
医生：好的，阿姨，你放心，我会仔细检查的。你能主动说明自己的不适，特别好，这样我们能更有针对性地检查，不遗漏任何细节。
旁白：检查过程中，医生一边检查，一边跟我聊天，缓解我的紧张情绪。她还告诉我，我的乳腺有轻微的增生，还有一点点导管扩张，幸好发现得早，只要按时调理、定期复查，很快就能恢复。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：重视体检・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的上空，突然亮起一道温润的暖白色光芒，像深秋的暖阳，一点点驱散了笼罩在主城上空的灰雾，照亮了每一个角落。
旁白：原本浑浊的乳腺导管，慢慢变得清澈，营养液在里面欢快地流淌；原本蜷缩的分泌细胞，慢慢舒展身体，身上的灰雾一点点消散，变得饱满、圆润。乳头部位的细胞慢慢抬起头，向内凹陷的部位一点点鼓起来，乳腺导管里的浑浊液体也渐渐消失。
【立绘：主角 / 安心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道淡淡的灰影朝着乳腺主城靠近 —— 那是乳头内陷 BOSS 和乳头溢液 BOSS。可它们刚靠近暖白色的光芒，就被光芒包裹住。因为我重视体检、早早发现隐患、接受了正规调理，它们失去了生长的能量，变得越来越淡。
乳头内陷 BOSS：（虚弱消散，声音细若游丝）你重视了体检，乳腺导管恢复了弹性，牵拉消失了…… 我，再也撑不住了……
乳头溢液 BOSS：（透明淡化，气息微弱）你不再拖延，乳腺分泌恢复了正常，我没有了生存的土壤…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：爷爷奶奶，你看！太棒啦！因为你重视体检、拒绝拖延，乳头内陷 BOSS 和乳头溢液 BOSS，都被成功驱散了！乳腺主城，恢复了往日的生机与活力！
派蒙：只要你一直坚持按时体检，重视身体的每一个细微不适，接受正规调理，乳腺主城就会一直安安全全、暖暖和和的。
旁白：健康科普：老年女性应每年进行 1 次乳腺专项体检（乳腺 B 超 + 触诊），早发现乳腺增生、导管扩张等隐患，通过规范调理可降低恶变风险，乳头溢液、内陷等症状需及时告知医生。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：体检，就是守护乳腺健康的第一道防线。它不是 “浪费钱”，不是 “瞎折腾”，而是能帮你抓住那些藏着的小隐患，能帮你阻止病症 BOSS 的觉醒。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧拒绝体检，把儿女送来的草药当成 “救命稻草”，每天喝好几碗，放任身体不适",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：拒绝体检・放任隐患
【场景切换：家庭客厅】
【立绘：主角 / 固执、儿子 / 担忧、女儿 / 心疼】
旁白：坚决拒绝儿女后，我以为他们会就此放弃，可没想到，他们依旧没有放下心来。每天早上，女儿都会给我打电话，问我胸口有没有闷胀；晚上，儿子都会过来看看我，给我带一些清热解毒的草药。
旁白：可我却依旧我行我素，不仅没有把儿女的叮嘱放在心上，还依旧保持着以前的坏习惯：每天晚上熬夜看电视到十二点，吃饭只爱吃油腻的红烧肉、辛辣的咸菜，遇到不顺心的事还会生闷气。
旁白：日子一天天过去，深秋变成了初冬，我胸口的闷胀感，从 “偶尔” 变成了 “经常”，有时候疼得我连衣服都不敢碰；乳头的发痒也越来越严重，还出现了少量的、淡黄色的溢液。
儿子：妈，你都这样了，别再拖了，跟我们去医院吧，就算是为了我们，行不行？
女儿：（哭着说）妈，我们真的很担心你，你就去检查一下，要是没事，我们再也不催你了；要是有事，我们一起面对，好不好？
主角：我不去，就是老毛病，喝点草药就好了，不用去医院。你们别再逼我了，再逼我，我就搬去养老院住！
旁白：儿女们看着我固执的样子，再也没有劝说，只能无奈地叹气。我心里其实也有些害怕，可我就是不肯面对，不肯去体检，只能任由隐患一点点放大。
选 1：依旧拒绝体检，把草药当成 “救命稻草”
【立绘：主角 / 固执】
旁白：我把儿女送来的草药，当成了 “救命稻草”。每天早上，我都会早早起床，熬上一大锅草药水；白天，每隔两个小时，就喝一碗，哪怕草药水苦涩难咽，我也捏着鼻子喝下去。
旁白：我总觉得，喝了这些草药，胸口的闷胀、乳头的溢液，就会慢慢消失。可事实上，这些草药不仅没有效果，反而让我的胃越来越不舒服，经常恶心、呕吐。
旁白：胸口的闷胀感依旧在加剧，有时候疼得我半夜睡不着觉；乳头的溢液也越来越多，每天都要换好几张纸巾。可我依旧不肯去体检，依旧觉得 “再喝几天草药，就会好起来”。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：拖延隐患・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、分泌细胞 / 干瘪】
旁白：乳腺主城的上空，灰雾突然变得浓稠，变成了墨黑色的黑雾，遮天蔽日，连一丝光线都透不进来。压抑、绝望的气息，像潮水般弥漫在主城的每一个角落。
旁白：原本干瘪的乳腺导管，变得僵硬、堵塞，营养液再也无法流淌；原本虚弱的分泌细胞，蜷缩在角落，身上的黑雾越来越浓，渐渐失去了光泽。乳头部位的细胞被死死牵拉着，向内凹陷的部位越来越深；乳腺导管里，浑浊的溢液源源不断地流出来，变成了黑雾的 “燃料”。
【立绘：主角 / 恐惧、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾的最核心处，两道巨大的黑影缓缓站直了身体 —— 乳头内陷 BOSS 的身形格外狰狞，凹陷的乳头部位散发着冰冷的黑雾；乳头溢液 BOSS 的身形庞大而粘稠，浑浊的溢液从它身上不断滴落。
乳头内陷 BOSS：（冰冷低沉，黑雾不断蔓延）你一直忽视体检、拖延隐患，乳腺导管越来越僵硬，牵拉越来越强！这个乳腺主城，我要彻底占领！
乳头溢液 BOSS：（阴冷沙哑，溢液源源不断）你一直逃避、一直拖延，乳腺分泌彻底紊乱，隐患越来越大！你的乳腺，再也恢复不了了！
派蒙：（颤抖哭喊）爷爷奶奶…… 怎么办…… 它们彻底觉醒了…… 因为你一直拖延、一直忽视，它们变得这么强大…… 乳腺主城的小细胞们，都快撑不住了……
旁白：健康科普：老年女性忽视乳腺体检，会导致乳腺隐患持续发展，乳头溢液、内陷等症状可能是恶性病变前兆，出现此类症状需立即前往正规医院检查，避免延误最佳治疗时机。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：一时的拖延，一时的侥幸，换来的，可能是一生的悔恨。别再把 “年纪大了都这样” 当成借口，别再把儿女的叮嘱当成 “小题大做”。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`},{id:"be2",text:"偶尔会后悔自己拒绝体检，却依旧放不下面子，不肯主动跟儿女提去体检的事",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：拒绝体检・放任隐患
【场景切换：家庭客厅】
【立绘：主角 / 固执、儿子 / 担忧、女儿 / 心疼】
旁白：坚决拒绝儿女后，我以为他们会就此放弃，可没想到，他们依旧没有放下心来。每天早上，女儿都会给我打电话，问我胸口有没有闷胀；晚上，儿子都会过来看看我，给我带一些清热解毒的草药。
旁白：可我却依旧我行我素，不仅没有把儿女的叮嘱放在心上，还依旧保持着以前的坏习惯：每天晚上熬夜看电视到十二点，吃饭只爱吃油腻的红烧肉、辛辣的咸菜，遇到不顺心的事还会生闷气。
旁白：日子一天天过去，深秋变成了初冬，我胸口的闷胀感，从 “偶尔” 变成了 “经常”，有时候疼得我连衣服都不敢碰；乳头的发痒也越来越严重，还出现了少量的、淡黄色的溢液。
儿子：妈，你都这样了，别再拖了，跟我们去医院吧，就算是为了我们，行不行？
女儿：（哭着说）妈，我们真的很担心你，你就去检查一下，要是没事，我们再也不催你了；要是有事，我们一起面对，好不好？
主角：我不去，就是老毛病，喝点草药就好了，不用去医院。你们别再逼我了，再逼我，我就搬去养老院住！
旁白：儿女们看着我固执的样子，再也没有劝说，只能无奈地叹气。我心里其实也有些害怕，可我就是不肯面对，不肯去体检，只能任由隐患一点点放大。
选 2：偶尔会后悔，却放不下面子
【立绘：主角 / 懊悔】
旁白：看着自己越来越差的身体，感受着胸口越来越剧烈的闷胀，和乳头越来越多的溢液，我心里，偶尔会泛起一丝后悔。我会想起儿女们担忧的眼神，想起自己当初强硬的态度，心里满是愧疚。
旁白：有时候，我会坐在沙发上，看着儿女们给我预约的体检号，心里暗暗想着：要是当初答应他们，现在是不是就不会这么难受了？
旁白：可我终究还是放不下面子。我觉得自己当初说得那么坚决，现在要是主动提去体检，会被儿女笑话。于是，我把体检号揉成一团，扔进了垃圾桶，依旧不肯主动跟儿女提体检的事。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：拖延隐患・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、分泌细胞 / 干瘪】
旁白：乳腺主城的上空，灰雾突然变得浓稠，变成了墨黑色的黑雾，遮天蔽日，连一丝光线都透不进来。压抑、绝望的气息，像潮水般弥漫在主城的每一个角落。
旁白：原本干瘪的乳腺导管，变得僵硬、堵塞，营养液再也无法流淌；原本虚弱的分泌细胞，蜷缩在角落，身上的黑雾越来越浓，渐渐失去了光泽。乳头部位的细胞被死死牵拉着，向内凹陷的部位越来越深；乳腺导管里，浑浊的溢液源源不断地流出来，变成了黑雾的 “燃料”。
【立绘：主角 / 恐惧、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾的最核心处，两道巨大的黑影缓缓站直了身体 —— 乳头内陷 BOSS 的身形格外狰狞，凹陷的乳头部位散发着冰冷的黑雾；乳头溢液 BOSS 的身形庞大而粘稠，浑浊的溢液从它身上不断滴落。
乳头内陷 BOSS：（冰冷低沉，黑雾不断蔓延）你一直忽视体检、拖延隐患，乳腺导管越来越僵硬，牵拉越来越强！这个乳腺主城，我要彻底占领！
乳头溢液 BOSS：（阴冷沙哑，溢液源源不断）你一直逃避、一直拖延，乳腺分泌彻底紊乱，隐患越来越大！你的乳腺，再也恢复不了了！
派蒙：（颤抖哭喊）爷爷奶奶…… 怎么办…… 它们彻底觉醒了…… 因为你一直拖延、一直忽视，它们变得这么强大…… 乳腺主城的小细胞们，都快撑不住了……
旁白：健康科普：老年女性忽视乳腺体检，会导致乳腺隐患持续发展，乳头溢液、内陷等症状可能是恶性病变前兆，出现此类症状需立即前往正规医院检查，避免延误最佳治疗时机。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：一时的拖延，一时的侥幸，换来的，可能是一生的悔恨。别再把 “年纪大了都这样” 当成借口，别再把儿女的叮嘱当成 “小题大做”。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`},{id:"be3",text:"发现溢液越来越多，偷偷用纸巾垫着，不告诉儿女，继续拖延，不肯就医",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：拒绝体检・放任隐患
【场景切换：家庭客厅】
【立绘：主角 / 固执、儿子 / 担忧、女儿 / 心疼】
旁白：坚决拒绝儿女后，我以为他们会就此放弃，可没想到，他们依旧没有放下心来。每天早上，女儿都会给我打电话，问我胸口有没有闷胀；晚上，儿子都会过来看看我，给我带一些清热解毒的草药。
旁白：可我却依旧我行我素，不仅没有把儿女的叮嘱放在心上，还依旧保持着以前的坏习惯：每天晚上熬夜看电视到十二点，吃饭只爱吃油腻的红烧肉、辛辣的咸菜，遇到不顺心的事还会生闷气。
旁白：日子一天天过去，深秋变成了初冬，我胸口的闷胀感，从 “偶尔” 变成了 “经常”，有时候疼得我连衣服都不敢碰；乳头的发痒也越来越严重，还出现了少量的、淡黄色的溢液。
儿子：妈，你都这样了，别再拖了，跟我们去医院吧，就算是为了我们，行不行？
女儿：（哭着说）妈，我们真的很担心你，你就去检查一下，要是没事，我们再也不催你了；要是有事，我们一起面对，好不好？
主角：我不去，就是老毛病，喝点草药就好了，不用去医院。你们别再逼我了，再逼我，我就搬去养老院住！
旁白：儿女们看着我固执的样子，再也没有劝说，只能无奈地叹气。我心里其实也有些害怕，可我就是不肯面对，不肯去体检，只能任由隐患一点点放大。
选 3：偷偷用纸巾垫着溢液，继续拖延
【立绘：主角 / 固执】
旁白：乳头的溢液越来越多，从最开始的淡黄色，变成了浑浊的乳白色，每天都要换好几张纸巾，有时候还会沾到衣服上，留下难看的污渍。
旁白：我害怕儿女们看到后，又会催我去体检，于是，我偷偷去超市，买了一大包纸巾，每天都偷偷垫在文胸里，换下来的纸巾，也会偷偷扔进楼下的垃圾桶，不让儿女们发现。
旁白：儿女们偶尔会问我：“妈，你乳头还有没有发痒、溢液啊？” 我都会装作若无其事的样子，摇着头说：“没有了，早就好了，你们别瞎担心了。”
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：拖延隐患・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 哽咽、分泌细胞 / 干瘪】
旁白：乳腺主城的上空，灰雾突然变得浓稠，变成了墨黑色的黑雾，遮天蔽日，连一丝光线都透不进来。压抑、绝望的气息，像潮水般弥漫在主城的每一个角落。
旁白：原本干瘪的乳腺导管，变得僵硬、堵塞，营养液再也无法流淌；原本虚弱的分泌细胞，蜷缩在角落，身上的黑雾越来越浓，渐渐失去了光泽。乳头部位的细胞被死死牵拉着，向内凹陷的部位越来越深；乳腺导管里，浑浊的溢液源源不断地流出来，变成了黑雾的 “燃料”。
【立绘：主角 / 恐惧、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：在黑雾的最核心处，两道巨大的黑影缓缓站直了身体 —— 乳头内陷 BOSS 的身形格外狰狞，凹陷的乳头部位散发着冰冷的黑雾；乳头溢液 BOSS 的身形庞大而粘稠，浑浊的溢液从它身上不断滴落。
乳头内陷 BOSS：（冰冷低沉，黑雾不断蔓延）你一直忽视体检、拖延隐患，乳腺导管越来越僵硬，牵拉越来越强！这个乳腺主城，我要彻底占领！
乳头溢液 BOSS：（阴冷沙哑，溢液源源不断）你一直逃避、一直拖延，乳腺分泌彻底紊乱，隐患越来越大！你的乳腺，再也恢复不了了！
派蒙：（颤抖哭喊）爷爷奶奶…… 怎么办…… 它们彻底觉醒了…… 因为你一直拖延、一直忽视，它们变得这么强大…… 乳腺主城的小细胞们，都快撑不住了……
旁白：健康科普：老年女性忽视乳腺体检，会导致乳腺隐患持续发展，乳头溢液、内陷等症状可能是恶性病变前兆，出现此类症状需立即前往正规医院检查，避免延误最佳治疗时机。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面，缓缓消散。墨黑色的黑雾、恐怖的咆哮声、小细胞们的哭泣声，慢慢远去。派蒙的小手，依旧紧紧拉着我，眼前的光影，慢慢恢复正常。
派蒙：爷爷奶奶，这段记忆，是不是让你明白了很多？其实，乳腺健康的守护，从来都不是 “等有了明显症状再重视”，而是 “早发现、早干预、早调理”。
派蒙：一时的拖延，一时的侥幸，换来的，可能是一生的悔恨。别再把 “年纪大了都这样” 当成借口，别再把儿女的叮嘱当成 “小题大做”。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我用力点了点头，眼泪忍不住掉了下来。我擦去脸上的泪水，攥紧双手，心里暗暗发誓：这一次，我彻底记住了。以后，我一定会按时做乳腺体检，重视身体的每一个细微不适。
旁白：记忆点 2 通关完成，已成功解锁两大病症 BOSS—— 乳头内陷 BOSS、乳头溢液 BOSS！可前往病变乳腺组织进行挑战！
———`}],bossUnlocked:["nippleDischarge","nippleRetraction"],skillHE:{id:"regularCheckup",name:"定期体检",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"delayCheckup",name:"拖延体检",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},3:{id:3,title:"盲目听信偏方，延误治疗",description:"盲目听信偏方，延误治疗",perspective:"elder",intro:`开场：大脑记忆中枢→记忆唤醒
【场景切换：大脑记忆中枢】
【立绘：主角 / 正常】`,scenes:[{id:"s1",speaker:"开场",text:"大脑记忆中枢→记忆唤醒"},{id:"s2",speaker:"舞台指示",text:"【场景切换：大脑记忆中枢】"},{id:"s3",speaker:"舞台指示",text:"【立绘：主角 / 正常】"},{id:"s4",speaker:"旁白",text:"我站在辽阔安静的大脑记忆中枢外层，四周漂浮着柔和的神经元光晕，一条条发光的记忆通道在空中静静悬浮，每一条都通往一段被封存的过往时光。"},{id:"s5",speaker:"旁白",text:"眼前清晰排列着三个老年专属记忆入口：隐瞒病情，怕连累子女、忽视体检，拖延乳腺隐患、盲目听信偏方，延误治疗。"},{id:"s6",speaker:"旁白",text:"我伸出手，指尖稳稳触碰记忆点 3：盲目听信偏方，延误治疗这行发光文字，触碰的刹那，记忆通道瞬间亮起，画面开始缓缓扭曲流动，那段因病急乱投医、轻信民间偏方，错过乳腺问题最佳治疗时机的悔恨记忆被彻底唤醒。"},{id:"s7",speaker:"舞台指示",text:"【立绘：主角 / 正常、派蒙 / 严肃】"},{id:"s8",speaker:"派蒙",text:"主人！终于要面对这段记忆了！你还记得吗？就是因为你当年查出乳腺问题后，不信正规医院的治疗方案，偏偏听信街坊邻居说的民间偏方，想着省钱又省事，结果不仅没治好病，还让乳腺问题越来越严重，催生了两个可怕的症状 BOSS！"},{id:"s9",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 心疼、分泌细胞 / 虚弱】"},{id:"s10",speaker:"旁白",text:"话音刚落，几个浑身裹着灰雾、身形蜷缩的分泌细胞，跌跌撞撞从记忆通道口爬出来，它们身上的细胞膜布满褶皱，乳腺皮肤部位的细胞紧紧贴在一起，陷出一个个小小的坑洼，连带着周围的结缔组织都变得干硬粗糙，每动一下都发出细微的刺痛声。"},{id:"s11",speaker:"旁白",text:"其中一个分泌细胞撑着虚弱的身子，声音细若游丝，带着无尽的委屈。"},{id:"s12",speaker:"分泌细胞",text:"主人…… 我们好疼…… 那些偏方根本没用，还让我们越来越难受…… 你别再信那些偏方了，快带我们去正规医院治治吧……"},{id:"s13",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、派蒙 / 郑重、分泌细胞 / 虚弱】"},{id:"s14",speaker:"派蒙",text:"你都看到了吧？这就是你当年盲目听信偏方的后果！乳腺皮肤组织受损、淋巴回流受阻，直接催生了两个症状 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！"},{id:"s15",speaker:"派蒙",text:"今天我们必须回到那段时间，重新做出正确选择，不然这两个 BOSS 会越来越强，最后彻底占领整个乳腺主城！"},{id:"s16",speaker:"舞台指示",text:"【立绘：主角 / 坚定、派蒙 / 郑重】"},{id:"s17",speaker:"旁白",text:"我深吸一口气，重重地点了点头，心底的悔恨翻涌不止。眼前的记忆之门彻底敞开，一股熟悉的、夹杂着苦涩草药味与焦虑感的气息扑面而来，我被瞬间拉回了当年，那个在小区花园听老姐妹说起 “神奇偏方”，一心想着靠偏方治好乳腺问题的春日午后。"},{id:"s18",speaker:"第一幕",text:"小区花园的石凳旁・偏方抉择（5 选 1 并联选项）"},{id:"s19",speaker:"舞台指示",text:"【场景切换：小区花园】"},{id:"s20",speaker:"舞台指示",text:"【立绘：主角 / 焦虑】"},{id:"s21",speaker:"旁白",text:"春日的午后，阳光暖暖地洒在小区花园里，樱花花瓣随风轻轻飘落，落在铺着青石板的小路上，也落在花园的石凳上。我坐在石凳上，手不自觉地按着胸口，眉头紧紧皱着，胸口的胀痛感一阵阵袭来，连带着乳房皮肤都隐隐发紧。"},{id:"s22",speaker:"旁白",text:"就在一周前，我终于拗不过子女，去正规医院做了乳腺检查，报告单上写着：乳腺增生伴局部皮肤组织异常，医生反复叮嘱，让我按时吃西药、定期复查，必要时做物理治疗，还特意强调，千万不要信民间偏方。"},{id:"s23",speaker:"旁白",text:"可我看着医生开的一堆西药，又听说后续治疗可能要花不少钱，心里就犯了嘀咕，总觉得西药副作用大，花钱又多，不如找找民间的偏方，既省钱又省心，说不定还能除根。"},{id:"s24",speaker:"舞台指示",text:"【立绘：主角 / 焦虑、张阿姨 / 热心、李阿姨 / 附和】"},{id:"s25",speaker:"旁白",text:"就在这时，隔壁楼的张阿姨和李阿姨提着菜篮子走过来，坐在我旁边的石凳上，看到我愁眉苦脸的样子，连忙追问缘由。我叹了口气，把自己的乳腺问题和医生的嘱咐一五一十说了出来。"},{id:"s26",speaker:"张阿姨",text:"妹子，你咋信医院那一套啊！西药多伤身体，我老家有个老郎中，有个治乳腺病的神奇偏方，用几种草药熬水喝，再配合药膏外敷，好多人都治好了，花不了几个钱！"},{id:"s27",speaker:"李阿姨",text:"是啊是啊，我侄女前段时间也有乳腺问题，就是喝这个偏方好的，才花了几十块钱！我这就把老郎中的联系方式给你，你赶紧去试试！"},{id:"s28",speaker:"旁白",text:"说着，张阿姨就掏出纸和笔，要给我写偏方的配方和老郎中的地址。我看着纸上即将写下的歪歪扭扭的字迹，心里瞬间动摇了：一边是医生千叮万嘱的正规治疗方案，一边是老姐妹口中 “省钱又有效” 的民间偏方。"},{id:"s29",speaker:"旁白",text:"内心独白：医院的药又贵又有副作用，治起来还麻烦，不如试试偏方，反正花不了多少钱，要是真能治好，岂不是皆大欢喜，也能让子女少花点钱，少操点心。"}],firstChoices:[{id:"c1",text:"拒绝张阿姨的偏方，牢记医生的叮嘱，回家按时吃正规药物，坚持医院的治疗方案",type:"HE",route:"HE",paimonDialogue:"小主人，这个选择会把记忆导向 HE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 1：选 “拒绝张阿姨的偏方，坚持正规治疗”
【立绘：主角 / 坚定、张阿姨 / 热心、李阿姨 / 附和】
主角：张姐、李姐，谢谢你们的好心，不过我还是听医生的吧，医生说偏方不可信，容易延误病情，正规医院的治疗方案虽然麻烦点，但至少有保障，我还是不冒这个险了。
张阿姨：妹子，你咋这么死心眼呢？这么好的偏方你不用，非要去医院花冤枉钱！
主角：谢谢你们的关心，我知道你们是为我好，但是身体是自己的，还是得听专业医生的，不能病急乱投医啊。
【立绘：主角 / 坚定】
旁白：说完，我便起身离开，心里不再有丝毫动摇，回家后，我把医生开的药整齐地摆在餐桌上，定好闹钟提醒自己按时吃药，还把医生的叮嘱写在小纸条上，贴在冰箱上，时时刻刻提醒自己。
【立绘：主角 / 坚定】
派蒙（意识音）：这才对！病急乱投医只会害了自己，相信专业医生、坚持正规治疗，才是守护乳腺健康的正确选择，这样才能从根源上阻止 BOSS 继续长大！
【剧情跳转：直接进入第二幕 HE 主线 “坚信科学・规范调理”】`},{id:"c2",text:"半信半疑，先把偏方配方记下来，回家跟子女商量后，再决定要不要尝试",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 2：选 “半信半疑，先把偏方配方记下来”
【立绘：主角 / 焦虑、张阿姨 / 热心、李阿姨 / 附和】
主角：张姐、李姐，谢谢你们的好心，我先把配方记下来，回家跟孩子们商量商量，听听他们的意见，再决定要不要试试。
张阿姨：行，你跟孩子们商量商量，这偏方真的特别管用，赶紧试试，别耽误了病情！
旁白：我接过纸条，小心翼翼地折好放进兜里，心里依旧犹豫不决。回家后，我把偏方拿给子女看，子女一看立刻反对。
【立绘：主角 / 焦虑、儿子 / 焦急、女儿 / 担忧】
儿子：妈，你怎么能信这些偏方呢？医生都说了偏方不可信，会延误病情的，你赶紧把这纸条扔了，好好吃医生开的药！
女儿：是啊妈，偏方没有科学依据，万一吃坏了身体怎么办？我们宁愿多花点钱，也想让你接受正规治疗！
旁白：听着子女的话，我心里的犹豫更浓了，一边是老姐妹的热心推荐，一边是子女的极力反对，一边是医生的专业叮嘱。
【立绘：主角 / 焦虑】
派蒙（意识音）：别再犹豫了！偏方没有任何科学依据，根本解决不了乳腺问题，只会耽误最佳治疗时机！赶紧把纸条扔了，相信医生和子女的话！
【剧情跳转：直接进入第二幕 BE 主线 “迷信偏方・病情恶化”】`},{id:"c3",text:"满心欢喜接过偏方，立刻按照配方去药店抓药，开始熬水喝、外敷药膏",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 3：选 “满心欢喜接过偏方，立刻抓药使用”
【立绘：主角 / 期待、张阿姨 / 热心、李阿姨 / 附和】
主角：张姐、李姐，太谢谢你们了！这下我的病可有救了，再也不用去医院花冤枉钱，吃那些有副作用的西药了！
张阿姨：跟我们客气啥，都是老姐妹，赶紧去抓药吧，早治早好！
旁白：我揣着纸条，像捡到了宝贝一样，立刻起身去小区附近的药店，按照配方抓了一堆草药，还买了外敷的药膏，急匆匆地回了家。
【立绘：主角 / 期待】
旁白：回家后，我把医生开的西药随手扔在一边，连看都不看，立刻按照偏方的要求，熬草药水喝，又把药膏厚厚地涂在乳房上，心里美滋滋地想着：用不了多久，我的乳腺问题就能彻底好了。
【立绘：主角 / 期待】
派蒙（意识音）：你怎么能这么轻易相信偏方啊！医生的叮嘱你都忘了吗？这些偏方没有任何科学依据，根本解决不了问题，只会让你的乳腺问题越来越严重！
【剧情跳转：直接进入第二幕 BE 主线 “迷信偏方・病情恶化”】`},{id:"c4",text:"觉得偏方配方太简单，让张阿姨再帮忙问问老郎中，有没有更 “强效” 的偏方",type:"fake",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 4：选 “觉得偏方简单，想要更‘强效’的偏方”
【立绘：主角 / 期待、张阿姨 / 热心、李阿姨 / 附和】
主角：张姐，这配方这么简单，真的能治好乳腺病吗？有没有更强效一点的偏方？比如能快点好的，除根的那种？
张阿姨：有是有，就是强效的偏方里有几味草药比较少见，价格稍微贵一点，不过效果肯定比这个好，我这就帮你问问老郎中！
主角：好好好，麻烦你了张姐，越强效越好，能快点治好就行！
【立绘：主角 / 期待】
旁白：没过多久，张阿姨就给我带回了所谓的 “强效偏方”，里面有好几味我连名字都没听过的草药，还有一些不明成分的粉末。我丝毫没有怀疑，立刻去药店花了不少钱抓了药。
旁白：回家后按照要求熬水喝，还把那些不明成分的粉末调成糊状外敷，一心想着靠这个 “强效偏方” 快点治好病，却丝毫没有意识到，这些不明成分的草药和粉末，会对我的乳腺造成多大的伤害。
【立绘：主角 / 期待】
派蒙（意识音）：你怎么还执迷不悟啊！普通偏方都不可信，更何况是这种有不明成分的 “强效偏方”！这些东西不仅治不好病，还会加重乳腺组织的损伤！
【剧情跳转：直接进入第二幕 BE 主线 “迷信偏方・病情恶化”】`},{id:"c5",text:"暂时收下偏方，既不吃医院的药，也不立刻用偏方，想先观察几天再做决定",type:"BE",route:"BE",paimonDialogue:"小主人，这个选择会把记忆导向 BE 路线。",microEffect:"乳腺主城的黑雾随选择发生变化，记忆正在汇流。",result:`分支 5：选 “暂时收下偏方，既不吃西药也不用偏方”
【立绘：主角 / 焦虑、张阿姨 / 热心、李阿姨 / 附和】
主角：谢谢你们的好心，我先收下，先观察几天，看看身体的情况，再决定用不用。
旁白：回家后，我把医生开的西药放在一边，没有吃，也没有立刻按照偏方抓药，只是每天按着胸口，感受着胸口的胀痛感，心里想着：要是胀痛感慢慢减轻了，就不用吃药也不用用偏方了。
【立绘：主角 / 焦虑】
旁白：就这样，我每天都在观察，既不接受正规治疗，也不用偏方，任由乳腺问题自由发展，胸口的胀痛感时轻时重，乳房皮肤的发紧感也越来越明显，可我还是抱着侥幸心理。
【立绘：主角 / 焦虑】
派蒙（意识音）：你怎么能抱着侥幸心理呢？乳腺问题不会自己好，既不接受正规治疗，也不采取任何措施，就是在放任病情发展！BOSS 已经在悄悄侵蚀乳腺主城的正常组织了！
【剧情跳转：直接进入第二幕 BE 主线 “迷信偏方・病情恶化”】`}],secondChoicesHE:[{id:"he1",text:"主动加入乳腺健康科普群，学习更多科学的乳腺养护知识，分享自己的治疗经历",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坚信科学・规范调理
【场景切换：卧室】
【立绘：主角 / 安心、儿媳 / 细心】
旁白：拒绝偏方后，我彻底放下了心里的侥幸，严格按照医生的叮嘱，按时吃正规药物，每天定好闹钟，早中晚准时服药，从不漏服、不擅自停药。儿子还特意给我买了药盒，把每天要吃的药分好，贴在药盒上，方便我服用。
旁白：除了按时吃药，我还按照医生的要求，定期去医院复查，每一次复查，医生都会根据我的身体情况调整治疗方案。子女也格外关心我的身体，儿媳特意查了很多养护乳腺的饮食知识，给我制定了专属的清淡饮食计划。
旁白：在正规的治疗和家人的悉心照顾下，我的身体慢慢有了好转，胸口的胀痛感越来越轻，乳房皮肤的发紧感也慢慢消失了，整个人的精神状态也越来越好。
选 1：加入科普群，学习养护知识并分享经历
【立绘：主角 / 开心、群友 / 友善】
旁白：我主动让女儿帮我加入了社区的乳腺健康科普群，群里有专业的医生定期讲解乳腺健康知识，还有很多和我一样有乳腺问题的姐妹分享治疗经历。我每天都会在群里认真学习，不懂的问题就向医生请教。
主角：姐妹们，身体不舒服可千万别信民间偏方，一定要去正规医院检查治疗，相信科学，坚持正规调理，才能真正守护乳腺健康，我就是最好的例子！
旁白：在我的分享下，群里几个原本想试偏方的姐妹，都放弃了偏方，选择去正规医院接受治疗，她们还纷纷跟我说谢谢，说我提醒得及时，帮了她们大忙。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：坚信科学・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的阳光彻底驱散，天空重新变回了温润的暖黄色，原本皱巴巴的乳腺皮肤细胞慢慢变得光滑平整，陷进去的小坑洼一点点鼓起来，恢复了原本的样子，淋巴回流也变得畅通无阻，整个乳腺主城都被柔和的光芒包裹着，充满了生机与活力。
旁白：那些原本蜷缩着、裹着灰雾的分泌细胞们，慢慢舒展身体，身上的灰雾一点点消散，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻。
【立绘：主角 / 安心、派蒙 / 骄傲、酒窝征 BOSS / 虚弱、橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是酒窝征 BOSS 和橘皮样改变 BOSS。但因为我坚信科学、坚持正规治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
酒窝征 BOSS：（虚弱消散，声音细若游丝）乳腺组织修复了，牵拉消失了…… 我失去了生存的根基…… 再也撑不住了……
橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流畅通了，皮肤恢复正常了…… 我无法再继续增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你坚信科学、拒绝偏方、坚持正规治疗，不病急乱投医，酒窝征 BOSS 和橘皮样改变 BOSS，根本没有机会长大变强！只要早发现、早治疗，相信专业医生，就能轻松消灭它们！
旁白：健康科普：乳腺疾病需遵循 “科学治疗” 原则，民间偏方缺乏医学依据，可能含不明成分，会损伤乳腺组织、延误病情，乳腺增生伴皮肤异常者，需按时服药、定期复查，必要时配合物理治疗。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：那些没有科学依据的偏方，不仅治不好病，还会延误最佳的治疗时机，加重身体的损伤，让原本不严重的病情变得越来越糟。乳腺健康容不得半点侥幸。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he2",text:"严格按照医生的要求，坚持做物理治疗，配合药物调理，加快身体恢复",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坚信科学・规范调理
【场景切换：卧室】
【立绘：主角 / 安心、儿媳 / 细心】
旁白：拒绝偏方后，我彻底放下了心里的侥幸，严格按照医生的叮嘱，按时吃正规药物，每天定好闹钟，早中晚准时服药，从不漏服、不擅自停药。儿子还特意给我买了药盒，把每天要吃的药分好，贴在药盒上，方便我服用。
旁白：除了按时吃药，我还按照医生的要求，定期去医院复查，每一次复查，医生都会根据我的身体情况调整治疗方案。子女也格外关心我的身体，儿媳特意查了很多养护乳腺的饮食知识，给我制定了专属的清淡饮食计划。
旁白：在正规的治疗和家人的悉心照顾下，我的身体慢慢有了好转，胸口的胀痛感越来越轻，乳房皮肤的发紧感也慢慢消失了，整个人的精神状态也越来越好。
选 2：坚持物理治疗，配合药物调理
【立绘：主角 / 安心、乳腺科医生 / 专业】
旁白：除了按时吃医生开的药物，我还严格按照医生的要求，每周去医院做两次物理治疗，通过专业的仪器按摩、热敷，促进乳腺的血液循环，缓解乳腺增生的症状。
旁白：每次做物理治疗，医生都会细心地调整仪器的参数，根据我的身体感受做出调整，还会一边做治疗，一边跟我聊天，缓解我的紧张情绪。我乖乖地配合医生的治疗，从不偷懒。
旁白：药物调理加上物理治疗，双管齐下，我的身体恢复得特别快，不到一个月，胸口的胀痛感就彻底消失了，乳房皮肤也恢复了正常，去医院复查时，医生说我的乳腺增生已经明显好转。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：坚信科学・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的阳光彻底驱散，天空重新变回了温润的暖黄色，原本皱巴巴的乳腺皮肤细胞慢慢变得光滑平整，陷进去的小坑洼一点点鼓起来，恢复了原本的样子，淋巴回流也变得畅通无阻，整个乳腺主城都被柔和的光芒包裹着，充满了生机与活力。
旁白：那些原本蜷缩着、裹着灰雾的分泌细胞们，慢慢舒展身体，身上的灰雾一点点消散，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻。
【立绘：主角 / 安心、派蒙 / 骄傲、酒窝征 BOSS / 虚弱、橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是酒窝征 BOSS 和橘皮样改变 BOSS。但因为我坚信科学、坚持正规治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
酒窝征 BOSS：（虚弱消散，声音细若游丝）乳腺组织修复了，牵拉消失了…… 我失去了生存的根基…… 再也撑不住了……
橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流畅通了，皮肤恢复正常了…… 我无法再继续增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你坚信科学、拒绝偏方、坚持正规治疗，不病急乱投医，酒窝征 BOSS 和橘皮样改变 BOSS，根本没有机会长大变强！只要早发现、早治疗，相信专业医生，就能轻松消灭它们！
旁白：健康科普：乳腺疾病需遵循 “科学治疗” 原则，民间偏方缺乏医学依据，可能含不明成分，会损伤乳腺组织、延误病情，乳腺增生伴皮肤异常者，需按时服药、定期复查，必要时配合物理治疗。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：那些没有科学依据的偏方，不仅治不好病，还会延误最佳的治疗时机，加重身体的损伤，让原本不严重的病情变得越来越糟。乳腺健康容不得半点侥幸。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"he3",text:"提醒身边的老姐妹，不要轻信民间偏方，身体不适要及时去正规医院检查治疗",type:"HE",route:"HE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`HE 主线：坚信科学・规范调理
【场景切换：卧室】
【立绘：主角 / 安心、儿媳 / 细心】
旁白：拒绝偏方后，我彻底放下了心里的侥幸，严格按照医生的叮嘱，按时吃正规药物，每天定好闹钟，早中晚准时服药，从不漏服、不擅自停药。儿子还特意给我买了药盒，把每天要吃的药分好，贴在药盒上，方便我服用。
旁白：除了按时吃药，我还按照医生的要求，定期去医院复查，每一次复查，医生都会根据我的身体情况调整治疗方案。子女也格外关心我的身体，儿媳特意查了很多养护乳腺的饮食知识，给我制定了专属的清淡饮食计划。
旁白：在正规的治疗和家人的悉心照顾下，我的身体慢慢有了好转，胸口的胀痛感越来越轻，乳房皮肤的发紧感也慢慢消失了，整个人的精神状态也越来越好。
选 3：提醒身边老姐妹，不信偏方及时就医
【立绘：主角 / 温暖、张阿姨 / 热心、李阿姨 / 附和】
旁白：身体慢慢好转后，我每次在小区花园遇到老姐妹们，都会主动跟她们说起我的经历，语重心长地提醒她们：“姐妹们，咱们上了年纪，有啥不舒服可千万别信民间偏方，那些偏方没有科学依据，不仅治不好病，还会延误病情。”
主角：身体有不适，一定要及时去正规医院检查治疗，相信专业医生的话，坚持正规调理，这才是对自己的身体负责，也是对家人负责。
旁白：在我的提醒下，小区里几个有乳腺不适的老姐妹，都纷纷去正规医院做了检查，接受了正规治疗，她们都跟我说，多亏了我的提醒，才没有耽误病情。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
HE 结局：坚信科学・BOSS 被成功驱散
【场景切换：乳腺主城（正常）】
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
旁白：乳腺主城的灰雾被温暖的阳光彻底驱散，天空重新变回了温润的暖黄色，原本皱巴巴的乳腺皮肤细胞慢慢变得光滑平整，陷进去的小坑洼一点点鼓起来，恢复了原本的样子，淋巴回流也变得畅通无阻，整个乳腺主城都被柔和的光芒包裹着，充满了生机与活力。
旁白：那些原本蜷缩着、裹着灰雾的分泌细胞们，慢慢舒展身体，身上的灰雾一点点消散，一个个变得面色红润、精神饱满，抱着满满的营养液罐子，欢快地在乳腺导管间奔跑穿梭，巨噬细胞和淋巴细胞尽职尽责地在乳腺主城里巡逻。
【立绘：主角 / 安心、派蒙 / 骄傲、酒窝征 BOSS / 虚弱、橘皮样改变 BOSS / 虚弱】【特殊：立绘超 3 人】
旁白：远处，两道微弱的黑影试图冲破光芒的阻挡，靠近乳腺主城 —— 正是酒窝征 BOSS 和橘皮样改变 BOSS。但因为我坚信科学、坚持正规治疗，两个 BOSS 彻底失去了能量来源，气息微弱到几乎消失。
酒窝征 BOSS：（虚弱消散，声音细若游丝）乳腺组织修复了，牵拉消失了…… 我失去了生存的根基…… 再也撑不住了……
橘皮样改变 BOSS：（透明淡化，气息微弱）淋巴回流畅通了，皮肤恢复正常了…… 我无法再继续增生…… 彻底消散了……
【立绘：主角 / 安心、派蒙 / 开心、分泌细胞 / 愉悦】
派蒙：看到了吗主人！只要你坚信科学、拒绝偏方、坚持正规治疗，不病急乱投医，酒窝征 BOSS 和橘皮样改变 BOSS，根本没有机会长大变强！只要早发现、早治疗，相信专业医生，就能轻松消灭它们！
旁白：健康科普：乳腺疾病需遵循 “科学治疗” 原则，民间偏方缺乏医学依据，可能含不明成分，会损伤乳腺组织、延误病情，乳腺增生伴皮肤异常者，需按时服药、定期复查，必要时配合物理治疗。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】
HE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 温暖、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：那些没有科学依据的偏方，不仅治不好病，还会延误最佳的治疗时机，加重身体的损伤，让原本不严重的病情变得越来越糟。乳腺健康容不得半点侥幸。
【立绘：主角 / 坚定、派蒙 / 开心】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的感悟，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],secondChoicesBE:[{id:"be1",text:"依旧执迷不悟，继续使用偏方，甚至觉得是自己用的量不够，擅自增加药量和外敷次数",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：迷信偏方・病情恶化
【场景切换：卧室】
【立绘：主角 / 疲惫、儿子 / 心疼、女儿 / 担忧】
旁白：自从开始使用偏方后，我便一心扑在偏方上，每天按时熬草药水喝，哪怕草药水苦涩难咽，我也捏着鼻子喝下去，还每天坚持外敷药膏，哪怕药膏敷在身上黏黏的、不舒服，也从不间断。
旁白：可日子一天天过去，半个月的时间里，我的身体不仅没有好转，反而越来越差：胸口的胀痛感越来越强烈，甚至疼得我连抬手、吃饭都费劲，乳房皮肤不仅发紧，还慢慢变得皱巴巴的，像晒干的橘子皮，还有一块地方陷进去一个小小的坑洼。
旁白：子女发现我的身体越来越差，连忙追问，我这才支支吾吾地说出了自己用偏方的事，子女又气又心疼，儿子当场就把我剩下的草药和药膏扔了。
儿子：妈，你怎么能这么不听话！医生的话你都当耳旁风，非要信那些偏方，现在身体越来越差，你满意了？
【立绘：主角 / 执迷】
旁白：可我还是执迷不悟，觉得是偏方的效果还没到，还跟子女辩解：“你们懂什么！偏方见效慢，再坚持几天，肯定就能好起来了！” 说完，我还偷偷托张阿姨又去老郎那里拿了 “更强效” 的偏方。
选 1：执迷不悟，擅自增加偏方药量和次数
【立绘：主角 / 执迷】
旁白：我看着自己越来越差的身体，不仅没有醒悟，反而觉得是自己用的偏方量不够，见效才慢，于是便擅自增加了草药的熬制量，每天喝三大碗苦涩的草药水，还把外敷的药膏涂得厚厚的，增加外敷次数。
【立绘：主角 / 痛苦】
旁白：可这样做，不仅没有让病情好转，反而让身体受到了更大的伤害：喝了过量的草药水后，我开始恶心、呕吐，吃什么吐什么；外敷过量的药膏后，乳房皮肤开始发红、瘙痒，甚至出现了轻微的溃烂，疼得我夜不能寐。
旁白：可我还是不肯放弃，依旧咬牙坚持，觉得再坚持一下，偏方肯定就能见效，却不知道，我的身体已经被偏方伤害得千疮百孔。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：迷信偏方・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，乳腺导管干瘪脆弱，堵塞不通，淋巴回流彻底淤堵，分泌细胞蜷缩在角落，面色蜡黄、虚弱不堪。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝征 BOSS / 狰狞、橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：乳房皮肤部位的酒窝征 BOSS 已经变得越来越狰狞，陷进去的坑洼越来越深，像一个小小的黑洞；橘皮样改变 BOSS 也越来越强大，乳腺皮肤细胞变得越来越皱巴巴的，像晒干的橘子皮。两道巨大、狰狞的黑影缓缓站直身体，发出低沉又恐怖的咆哮。
酒窝征 BOSS：（冰冷刺耳，咆哮着扩散黑雾）你迷信偏方，延误治疗，让乳腺组织不断受损！你的乳腺主城，从今往后，由我彻底占领！
橘皮样改变 BOSS：（阴冷沙哑，黑雾蔓延）偏方伤害了乳腺，淋巴回流彻底淤堵！你的乳腺皮肤再也无法恢复正常！你的身体，只能任由我摆布！
派蒙：（颤抖哭喊）主人！这就是你盲目听信偏方、延误治疗养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：盲目使用乳腺偏方可能导致皮肤损伤、淋巴回流障碍，诱发酒窝征、橘皮样改变等恶性前兆，出现此类症状需立即停用偏方，前往正规医院接受规范治疗，避免病情进一步恶化。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：一时的侥幸，换来的可能是一生的悔恨，别让迷信偏方，成为伤害自己、拖累家人的导火索。老年乳腺疾病患者更需谨慎，正规治疗才是唯一可靠的选择。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be2",text:"看到身体越来越差，有点后悔用偏方，却还是不肯去正规医院，只是停了偏方，任由病情发展",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：迷信偏方・病情恶化
【场景切换：卧室】
【立绘：主角 / 疲惫、儿子 / 心疼、女儿 / 担忧】
旁白：自从开始使用偏方后，我便一心扑在偏方上，每天按时熬草药水喝，哪怕草药水苦涩难咽，我也捏着鼻子喝下去，还每天坚持外敷药膏，哪怕药膏敷在身上黏黏的、不舒服，也从不间断。
旁白：可日子一天天过去，半个月的时间里，我的身体不仅没有好转，反而越来越差：胸口的胀痛感越来越强烈，甚至疼得我连抬手、吃饭都费劲，乳房皮肤不仅发紧，还慢慢变得皱巴巴的，像晒干的橘子皮，还有一块地方陷进去一个小小的坑洼。
旁白：子女发现我的身体越来越差，连忙追问，我这才支支吾吾地说出了自己用偏方的事，子女又气又心疼，儿子当场就把我剩下的草药和药膏扔了。
儿子：妈，你怎么能这么不听话！医生的话你都当耳旁风，非要信那些偏方，现在身体越来越差，你满意了？
【立绘：主角 / 执迷】
旁白：可我还是执迷不悟，觉得是偏方的效果还没到，还跟子女辩解：“你们懂什么！偏方见效慢，再坚持几天，肯定就能好起来了！” 说完，我还偷偷托张阿姨又去老郎那里拿了 “更强效” 的偏方。
选 2：后悔用偏方，却不肯去医院
【立绘：主角 / 懊悔】
旁白：看着自己越来越差的身体，胸口的疼痛越来越剧烈，乳房皮肤的变化也越来越明显，我心里终于有了一丝后悔，觉得自己不该轻信偏方，于是便偷偷停了偏方。
旁白：可我还是不肯去正规医院接受治疗，觉得自己已经耽误了病情，去医院也没用了，还不如就这样放任不管，说不定熬一熬就过去了。
【立绘：主角 / 痛苦】
旁白：就这样，我既不用偏方，也不接受正规治疗，任由乳腺问题自由发展，胸口的疼痛越来越严重，疼得我连床都下不了，乳房皮肤的橘皮样改变越来越明显，陷进去的小坑也越来越深。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：迷信偏方・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，乳腺导管干瘪脆弱，堵塞不通，淋巴回流彻底淤堵，分泌细胞蜷缩在角落，面色蜡黄、虚弱不堪。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝征 BOSS / 狰狞、橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：乳房皮肤部位的酒窝征 BOSS 已经变得越来越狰狞，陷进去的坑洼越来越深，像一个小小的黑洞；橘皮样改变 BOSS 也越来越强大，乳腺皮肤细胞变得越来越皱巴巴的，像晒干的橘子皮。两道巨大、狰狞的黑影缓缓站直身体，发出低沉又恐怖的咆哮。
酒窝征 BOSS：（冰冷刺耳，咆哮着扩散黑雾）你迷信偏方，延误治疗，让乳腺组织不断受损！你的乳腺主城，从今往后，由我彻底占领！
橘皮样改变 BOSS：（阴冷沙哑，黑雾蔓延）偏方伤害了乳腺，淋巴回流彻底淤堵！你的乳腺皮肤再也无法恢复正常！你的身体，只能任由我摆布！
派蒙：（颤抖哭喊）主人！这就是你盲目听信偏方、延误治疗养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：盲目使用乳腺偏方可能导致皮肤损伤、淋巴回流障碍，诱发酒窝征、橘皮样改变等恶性前兆，出现此类症状需立即停用偏方，前往正规医院接受规范治疗，避免病情进一步恶化。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：一时的侥幸，换来的可能是一生的悔恨，别让迷信偏方，成为伤害自己、拖累家人的导火索。老年乳腺疾病患者更需谨慎，正规治疗才是唯一可靠的选择。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`},{id:"be3",text:"被子女逼着去医院检查，却依旧不信医生的话，偷偷把医生开的药扔了，继续用偏方",type:"BE",route:"BE",paimonDialogue:"选择已记录。",microEffect:"记忆分支继续汇流。",result:`BE 主线：迷信偏方・病情恶化
【场景切换：卧室】
【立绘：主角 / 疲惫、儿子 / 心疼、女儿 / 担忧】
旁白：自从开始使用偏方后，我便一心扑在偏方上，每天按时熬草药水喝，哪怕草药水苦涩难咽，我也捏着鼻子喝下去，还每天坚持外敷药膏，哪怕药膏敷在身上黏黏的、不舒服，也从不间断。
旁白：可日子一天天过去，半个月的时间里，我的身体不仅没有好转，反而越来越差：胸口的胀痛感越来越强烈，甚至疼得我连抬手、吃饭都费劲，乳房皮肤不仅发紧，还慢慢变得皱巴巴的，像晒干的橘子皮，还有一块地方陷进去一个小小的坑洼。
旁白：子女发现我的身体越来越差，连忙追问，我这才支支吾吾地说出了自己用偏方的事，子女又气又心疼，儿子当场就把我剩下的草药和药膏扔了。
儿子：妈，你怎么能这么不听话！医生的话你都当耳旁风，非要信那些偏方，现在身体越来越差，你满意了？
【立绘：主角 / 执迷】
旁白：可我还是执迷不悟，觉得是偏方的效果还没到，还跟子女辩解：“你们懂什么！偏方见效慢，再坚持几天，肯定就能好起来了！” 说完，我还偷偷托张阿姨又去老郎那里拿了 “更强效” 的偏方。
选 3：被子女逼着去医院，却偷偷扔药继续用偏方
【立绘：主角 / 焦虑、儿子 / 愤怒、乳腺科医生 / 严肃】
旁白：在子女的苦苦劝说和强行要求下，我极不情愿地跟着子女去了正规医院做检查，检查结果出来后，医生摇着头说：“你这病情本来不严重，就是因为轻信偏方，延误了最佳治疗时机，现在乳腺组织已经受到了严重损伤，必须立刻接受正规治疗。”
旁白：医生给我开了一大堆正规的药物，还制定了详细的治疗方案，子女千叮万嘱，让我一定要按时吃药。可我表面上答应得好好的，回家后却偷偷把医生开的药扔了，觉得医生是在夸大其词。
【立绘：主角 / 执迷】
旁白：我又偷偷联系上张阿姨，让她再帮我拿偏方，继续熬水喝、外敷，子女发现后，气得直掉眼泪，却又拿我没办法。
【剧情汇流：进入第三幕通用衔接】
第三幕：通用衔接 + 插入式微观科普
【场景切换：乳腺主城（正常）】
【立绘：主角 / 正常、派蒙 / 开心】
派蒙：不管你选了什么，现在先跟我回乳腺主城！正好让你见识见识我们的家 —— 不想听的话，点右上角跳过就好。
旁白：屏幕右上角弹出 “跳过科普” 按钮，点击直接跳转第四幕对应结局；未点击则继续以下剧情。
【立绘：主角 / 好奇、派蒙 / 开心】
旁白：我没有点跳过，跟着派蒙走进主城。阳光洒在结缔组织平原上，像一片柔软的绿草地，踩上去弹弹的。乳腺导管桥像彩虹一样横跨天空，导管里的营养液哗啦啦地流，分泌细胞坐着小小的 “营养飞船” 来回穿梭。
【立绘：主角 / 好奇、派蒙 / 骄傲、巨噬细胞 / 爽朗】
派蒙：看好了！这些是巨噬细胞大哥！他们是主城的清洁工和保安，平时最爱扛着吞噬吸尘器溜达，看到坏东西就吸干净！
巨噬细胞：欢迎主人来做客！我们超厉害的！
旁白：人物介绍：巨噬细胞，吞噬异物、清理受损细胞，乳腺健康的 “防护兵”。
【立绘：主角 / 好奇、派蒙 / 骄傲、淋巴细胞 / 活泼】
派蒙：那是淋巴细胞小姐姐！她们是侦察兵，看到异常细胞就吹喇叭报警，召唤大部队来打仗！
淋巴细胞：主人要保护好我们呀！
旁白：人物介绍：淋巴细胞，识别异常细胞、传递警报，乳腺健康的 “预警员”。
【立绘：主角 / 好奇、派蒙 / 认真】
派蒙：那是营养核心塔，是我们的指挥中心！负责给所有细胞发指令、分营养 —— 它要是出问题，整个主城就乱套了！
【立绘：主角 / 好奇、派蒙 / 傲娇】
派蒙：记住了没？现在带你看，你选的路，把主城变成什么样了！
【剧情跳转：HE 线→第四幕 HE 结局；BE 线→第四幕 BE 结局】
BE 结局：迷信偏方・BOSS 彻底觉醒
【场景切换：乳腺主城（黑雾笼罩）】
【立绘：主角 / 懊悔、派蒙 / 绝望、分泌细胞 / 恐惧】
旁白：乳腺主城被浓黑冰冷的雾气彻底笼罩，厚重的黑雾遮天蔽日，连一丝光线都透不进来，压抑、绝望的气息弥漫在主城的每一个角落。原本柔软平整的结缔组织平原变得干裂僵硬，乳腺导管干瘪脆弱，堵塞不通，淋巴回流彻底淤堵，分泌细胞蜷缩在角落，面色蜡黄、虚弱不堪。
【立绘：主角 / 恐惧、派蒙 / 绝望、酒窝征 BOSS / 狰狞、橘皮样改变 BOSS / 狰狞】【特殊：立绘超 3 人】
旁白：乳房皮肤部位的酒窝征 BOSS 已经变得越来越狰狞，陷进去的坑洼越来越深，像一个小小的黑洞；橘皮样改变 BOSS 也越来越强大，乳腺皮肤细胞变得越来越皱巴巴的，像晒干的橘子皮。两道巨大、狰狞的黑影缓缓站直身体，发出低沉又恐怖的咆哮。
酒窝征 BOSS：（冰冷刺耳，咆哮着扩散黑雾）你迷信偏方，延误治疗，让乳腺组织不断受损！你的乳腺主城，从今往后，由我彻底占领！
橘皮样改变 BOSS：（阴冷沙哑，黑雾蔓延）偏方伤害了乳腺，淋巴回流彻底淤堵！你的乳腺皮肤再也无法恢复正常！你的身体，只能任由我摆布！
派蒙：（颤抖哭喊）主人！这就是你盲目听信偏方、延误治疗养出来的两大 BOSS！它们已经彻底觉醒了！乳腺主城的正常细胞都在被它们无情侵蚀，主城就要崩塌了！
旁白：健康科普：盲目使用乳腺偏方可能导致皮肤损伤、淋巴回流障碍，诱发酒窝征、橘皮样改变等恶性前兆，出现此类症状需立即停用偏方，前往正规医院接受规范治疗，避免病情进一步恶化。
【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】
BE 版
【场景切换：大脑记忆中枢】
【立绘：主角 / 懊悔、派蒙 / 郑重】
旁白：微观世界的画面缓缓消散，浓黑的黑雾和恐怖的咆哮声渐渐远去，眼前的光影慢慢恢复正常，我重新回到了大脑记忆中枢外层，四周依旧漂浮着柔和的神经元光晕。
派蒙：这段记忆告诉你一个最真实、最深刻的道理：身体不适，永远要相信科学，相信专业的医生，千万不能病急乱投医，盲目听信民间偏方。
派蒙：一时的侥幸，换来的可能是一生的悔恨，别让迷信偏方，成为伤害自己、拖累家人的导火索。老年乳腺疾病患者更需谨慎，正规治疗才是唯一可靠的选择。
【立绘：主角 / 坚定、派蒙 / 期待】
旁白：我轻轻点头，眼眶泛红，眼泪忍不住掉下来，这段记忆带来的悔恨，让我刻骨铭心，这一次，我彻底记住了，再也不会因为病急乱投医而轻信偏方。
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["orangePeel","skinDimple"],skillHE:{id:"scientificTreatment",name:"科学治疗",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"folkRemedy",name:"迷信偏方",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}}}};function ig(i,u){return ph[i][u]}const og={child:[{title:"任性粘人，熬妈陪伴",description:"7岁那年冬夜，缠着妈妈玩到深夜",color:"bg-amber-100 border-amber-300"},{title:"熬夜学习，让妈牵挂",description:"9岁期中考试前，偷偷刷题到凌晨",color:"bg-blue-100 border-blue-300"},{title:"无知嘲笑，健康认知缺失",description:"看到妈妈乳房变化，随口说出伤人的话",color:"bg-purple-100 border-purple-300"}],adult:[{title:"职场酒局的被迫应酬",description:"为了项目被迫参加酒局，喝了太多酒",color:"bg-red-100 border-red-300"},{title:"熬夜赶项目的健康透支",description:"为白衣计划连续熬夜，内分泌彻底紊乱",color:"bg-orange-100 border-orange-300"},{title:"私自滥用减肥药与保健品",description:"盲目跟风吃网红减肥药，体内激素爆炸",color:"bg-pink-100 border-pink-300"}],elder:[{title:"隐瞒病情，怕连累子女",description:"发现乳房硬块却偷偷忍着，瞒着不说",color:"bg-teal-100 border-teal-300"},{title:"忽视体检，拖延乳腺隐患",description:"儿女催做体检却一拖再拖，忽视小不适",color:"bg-cyan-100 border-cyan-300"},{title:"盲目听信偏方，延误治疗",description:"不信正规医院，听信街坊的民间偏方",color:"bg-indigo-100 border-indigo-300"}]},Lp={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},qp={cellRepair:"修复受损的乳腺细胞",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境"},er=["cellRepair","hormoneBalance","immuneBoost","detox"];function rg(){const{state:i,dispatch:u,getMemoryKey:f,equipSkill:r}=it(),h=i.currentPerspective,m=Object.values(ph[h]).map(_=>({title:_.title,description:_.description,color:og[h][_.id-1]?.color||"bg-white border-gray-200"})),[v,M]=D.useState(null),[b,p]=D.useState(null),[N,j]=D.useState(!1),U=_=>{const z=f(_+1),G=i.memoryProgress[z];if(i.playthrough===2)return G==="HE"?{status:"completed",label:"HE通关(可重玩)",color:"text-green-600 bg-green-100",canReplay:!0}:G==="BE"?{status:"failed",label:"BE通关(可重玩)",color:"text-red-600 bg-red-100",canReplay:!0}:{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0};if(G==="HE")return{status:"completed",label:"HE通关(已锁定)",color:"text-green-600 bg-green-100",canReplay:!1};if(G==="BE")return{status:"failed",label:"BE通关(已锁定)",color:"text-red-600 bg-red-100",canReplay:!1};if(_===0)return{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0};const re=f(_);return i.memoryProgress[re]?{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0}:{status:"locked",label:"未解锁",color:"text-gray-400 bg-gray-100",canReplay:!1}},W=_=>{const z=U(_);z.status!=="locked"&&(!z.canReplay&&(z.status==="completed"||z.status==="failed")||(u({type:"SET_MEMORY_POINT",payload:_+1}),u({type:"SET_PHASE",payload:"visualNovel"})))},ee=_=>{M(_)},F=()=>{M(null),p(null)},J=(_,z)=>{_.preventDefault(),p(z)},K=()=>{p(null)},se=(_,z)=>{if(_.preventDefault(),!v)return;const G=i.equippedSkills[z],re=i.equippedSkills.indexOf(v);if(re!==-1){const oe=[...i.equippedSkills];oe[re]=G,oe[z]=v,u({type:"EQUIP_SKILL",payload:{newSkill:v,oldSkill:G}}),u({type:"SET_EQUIPPED_SKILLS",payload:oe})}else r(v,G);M(null),p(null)},I=_=>{if(!v&&er.includes(_))M(_);else if(v){const z=i.equippedSkills.indexOf(_);if(z!==-1){const G=i.equippedSkills[z];r(v,G)}M(null)}},fe=_=>er.includes(_),ie=_=>_==="cellRepair"?"🔧":_==="hormoneBalance"?"⚖️":_==="immuneBoost"?"🛡️":_==="detox"?"💧":"✨";return l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:195:5",className:"min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 p-4",children:[l.jsxs(we,{"code-path":"src\\sections\\MemoryCenter.tsx:197:7",variant:"ghost",className:"absolute top-4 left-4 text-indigo-600",onClick:()=>u({type:"SET_PHASE",payload:"microWorldMain"}),children:[l.jsx(Za,{"code-path":"src\\sections\\MemoryCenter.tsx:202:9",className:"w-5 h-5 mr-1"}),"返回主城"]}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:207:7",className:"text-center pt-16 pb-8",children:[l.jsx("h2",{"code-path":"src\\sections\\MemoryCenter.tsx:208:9",className:"text-2xl font-bold text-indigo-700",children:"大脑记忆中枢"}),l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:209:9",className:"text-sm text-indigo-600/70",children:i.playthrough===1?"一周目 · 记忆点通关后锁定":"二周目 · 时光回溯已开启"})]}),l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:215:7",className:"max-w-lg mx-auto space-y-4",children:m.map((_,z)=>{const G=U(z),re=G.status!=="locked"&&G.canReplay;return l.jsx(Yt,{"code-path":"src\\sections\\MemoryCenter.tsx:221:13",className:`${_.color} ${re?"cursor-pointer hover:shadow-lg":"opacity-70"} 
                transition-all hover:scale-[1.01]`,onClick:()=>W(z),children:l.jsxs(Kt,{"code-path":"src\\sections\\MemoryCenter.tsx:227:15",className:"p-4 flex items-center justify-between",children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:228:17",className:"flex items-center gap-3",children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:229:19",className:`w-10 h-10 rounded-full flex items-center justify-center ${G.color}`,children:[G.status==="completed"&&l.jsx(Bc,{"code-path":"src\\sections\\MemoryCenter.tsx:230:55",className:"w-5 h-5"}),G.status==="failed"&&l.jsx(or,{"code-path":"src\\sections\\MemoryCenter.tsx:231:52",className:"w-5 h-5"}),G.status==="unlocked"&&l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:232:54",className:"text-lg",children:z+1}),G.status==="locked"&&l.jsx($a,{"code-path":"src\\sections\\MemoryCenter.tsx:233:52",className:"w-5 h-5"})]}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:235:19",children:[l.jsx("h3",{"code-path":"src\\sections\\MemoryCenter.tsx:236:21",className:"font-bold text-gray-800",children:_.title}),l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:237:21",className:"text-xs text-gray-600",children:_.description})]})]}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:240:17",className:"flex items-center gap-2",children:[i.playthrough===2&&(G.status==="completed"||G.status==="failed")&&l.jsx(TS,{"code-path":"src\\sections\\MemoryCenter.tsx:242:21",className:"w-4 h-4 text-amber-500"}),l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:244:19",className:`text-xs px-2 py-1 rounded-full ${G.color}`,children:G.label})]})]})},z)})}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:255:7",className:"max-w-lg mx-auto mt-8 p-4 bg-white/70 rounded-xl",children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:256:9",className:"flex items-center justify-between mb-3",children:[l.jsx("h3",{"code-path":"src\\sections\\MemoryCenter.tsx:257:11",className:"font-bold text-gray-700",children:"已装备技能"}),i.playthrough===2&&l.jsxs(we,{"code-path":"src\\sections\\MemoryCenter.tsx:259:13",variant:"ghost",size:"sm",className:"text-indigo-600",onClick:()=>j(!N),children:[l.jsx(Rp,{"code-path":"src\\sections\\MemoryCenter.tsx:265:15",className:"w-4 h-4 mr-1"}),N?"收起技能库":"打开技能库"]})]}),l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:272:9",className:"grid grid-cols-2 gap-3",children:i.equippedSkills.map((_,z)=>l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:274:13",className:`relative p-3 rounded-xl border-2 transition-all ${b===z?"border-indigo-500 bg-indigo-50 scale-105":v&&!fe(_)?"border-dashed border-gray-300 bg-gray-50":"border-gray-200 bg-white"} ${i.playthrough===2?"cursor-pointer":""}`,onDragOver:G=>i.playthrough===2&&J(G,z),onDragLeave:K,onDrop:G=>i.playthrough===2&&se(G,z),onClick:()=>i.playthrough===2&&I(_),children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:288:15",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:289:17",className:"text-2xl",children:ie(_)}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:290:17",className:"flex-1 min-w-0",children:[l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:291:19",className:"font-medium text-gray-800 text-sm truncate",children:Lp[_]||_}),l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:294:19",className:"text-xs text-gray-500 truncate",children:qp[_]||"记忆点技能"})]})]}),v&&b===z&&l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:300:17",className:"absolute inset-0 flex items-center justify-center bg-indigo-100/80 rounded-xl",children:l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:301:19",className:"text-indigo-600 font-medium text-sm",children:"替换"})})]},z))})]}),i.playthrough===2&&N&&l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:311:9",className:"max-w-lg mx-auto mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200",children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:312:11",className:"flex items-center gap-2 mb-3",children:[l.jsx(Rp,{"code-path":"src\\sections\\MemoryCenter.tsx:313:13",className:"w-5 h-5 text-amber-600"}),l.jsx("h3",{"code-path":"src\\sections\\MemoryCenter.tsx:314:13",className:"font-bold text-amber-800",children:"技能库"}),l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:315:13",className:"text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full",children:"拖拽替换"})]}),l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:320:11",className:"text-xs text-amber-700 mb-3",children:"将下方技能拖拽到上方技能槽，或点击技能后点击目标位置进行替换"}),l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:324:11",className:"grid grid-cols-2 gap-3",children:er.map(_=>l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:326:15",draggable:!0,className:`p-3 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all ${v===_?"border-amber-500 bg-amber-100 scale-105 shadow-lg":"border-amber-200 bg-white hover:border-amber-400 hover:shadow-md"}`,onDragStart:()=>ee(_),onDragEnd:F,onClick:()=>I(_),children:[l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:338:17",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:339:19",className:"text-2xl",children:ie(_)}),l.jsxs("div",{"code-path":"src\\sections\\MemoryCenter.tsx:340:19",className:"flex-1 min-w-0",children:[l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:341:21",className:"font-medium text-gray-800 text-sm truncate",children:Lp[_]}),l.jsx("p",{"code-path":"src\\sections\\MemoryCenter.tsx:344:21",className:"text-xs text-gray-500 truncate",children:qp[_]})]})]}),v===_&&l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:350:19",className:"mt-2 text-center",children:l.jsx("span",{"code-path":"src\\sections\\MemoryCenter.tsx:351:21",className:"text-xs text-amber-600",children:"已选中，点击目标位置替换"})})]},_))})]}),l.jsx("div",{"code-path":"src\\sections\\MemoryCenter.tsx:361:7",className:"max-w-lg mx-auto mt-6 p-4 bg-indigo-50 rounded-lg",children:l.jsxs("p",{"code-path":"src\\sections\\MemoryCenter.tsx:362:9",className:"text-xs text-indigo-700",children:[l.jsx("strong",{"code-path":"src\\sections\\MemoryCenter.tsx:363:11",children:"提示："}),i.playthrough===1?"一周目：通关记忆点可解锁对应BOSS挑战。HE结局获得正向技能，BE结局获得负面技能。记忆点通关后锁定，不可重玩。":"二周目：时光回溯已开启，所有记忆点均可无限重玩，HE/BE都能反复选择。打开技能库可自由替换初始技能。"]})})]})}function Vp(i){if(i.type==="HE"||i.type==="BE")return i.type;if(i.route==="HE"||i.route==="BE")return i.route;const u=`${i.result||""}${i.paimonDialogue||""}`;return u.includes("BE 主线")||u.includes("BOSS 彻底觉醒")||u.includes("任性")?"BE":"HE"}function Tc(i){const u=i.trim();return u==="————"||/^旁白[：:].*屏幕右上角弹出/.test(u)||/^【(?:场景切换|立绘|特殊|剧情跳转|剧情汇流)：/.test(u)||/^【脚本结束】$/.test(u)||/^(?:开场|第[一二三四五六七八九十]+幕|主线\s*\d+|主线剧情|结局\s*\d+|HE 主线|BE 主线|HE 结局|BE 结局|拒酒周旋主线|妥协饮酒主线|合理下班主线|熬夜透支主线|科学控药主线|滥用药物主线|及时就医主线|隐瞒拖延主线|按时体检主线|拖延体检主线|科学治疗主线|偏方延误主线)(?:（.*）)?(?:[：:].*)?$/.test(u)||/^[^：:]{1,32}结局(?:对应版)?(?:（.*）)?(?:[：:].*)?$/.test(u)||/^分支\s*\d+[：:]/.test(u)||/^互动\s*\d+[：:]/.test(u)||/^选\s*\d+[：:]/.test(u)||/^选项\s*[A-Za-z0-9]+[：:]/.test(u)}function hh(i){if(!i)return{speaker:void 0,text:""};const u=i.match(/^([^：:]{1,24})[：:](.*)$/);return!u||i.startsWith("选项")?{speaker:void 0,text:i}:{speaker:u[1].trim(),text:u[2].trim()}}function xh(i){return!i||/^(开场|第[一二三四五六七八九十]+幕|HE 主线|BE 主线)$/.test(i.speaker||"")?!1:i.text.split(`
`).filter(f=>f.trim()&&!Tc(f)).length>0&&i.speaker!=="舞台指示"}function Yp(i,u){for(let f=u+1;f<i.length;f+=1)if(xh(i[f]))return f;return null}function ug(i,u){for(let f=u-1;f>=0;f-=1)if(xh(i[f]))return f;return null}function mh(i){if(!i)return null;const u=i.split(`
`).map((f,r)=>({text:f.trim(),rawIndex:r})).filter(f=>f.text&&!Tc(f.text));return u.length>0?u:null}function tr(i,u,f){return i.slice(u,f).map((r,h)=>({text:r.trim(),rawIndex:u+h})).filter(r=>r.text&&!Tc(r.text))}function dg(i){return i.trim().match(/^选项\s*\d+[：:](.*)$/)?.[1]?.trim()||i.trim()}function fg(i){const u={entries:[],beforeEntries:[],afterEntries:[],inlineChoices:[]};if(!i)return u;const f=i.split(`
`),r=mh(i)??[],h=f.findIndex((N,j)=>N.trim().match(/^选项\s*1[：:]/)&&f[j+1]?.trim().match(/^选项\s*2[：:]/)&&f[j+2]?.trim().match(/^选项\s*3[：:]/));if(h<0)return{...u,entries:r};const m=[1,2,3].map(N=>f.findIndex((j,U)=>U>h&&j.trim().match(new RegExp(`^互动\\s*${N}[：:]`))));if(m.some(N=>N<0))return{...u,entries:r};const v=f.findIndex((N,j)=>j>Math.max(...m)&&(N.trim().startsWith("主线剧情")||N.includes("所有互动选项汇流后")||N.includes("所有互动选项汇流后")));if(v<0)return{...u,entries:r};const M=tr(f,0,h),b=tr(f,v,f.length),p=m.map((N,j)=>{const U=j<m.length-1?m[j+1]:v;return{text:dg(f[h+j]),entries:tr(f,N,U)}});return{entries:r,beforeEntries:M,afterEntries:b,inlineChoices:p}}function pg(i){return mh(i)?.map(u=>u.text)??null}function hg(i){const u=pg(i);return u?u.map((f,r)=>l.jsx("p",{"code-path":"src\\sections\\VisualNovel.tsx:164:5",className:"mb-3 last:mb-0",children:hh(f).text||f},r)):null}function xg(){const{state:i,dispatch:u,completeMemoryPoint:f}=it(),r=i.currentPerspective,h=i.currentMemoryPoint,m=ig(r,h),v=D.useMemo(()=>Yp(m.scenes,-1)??0,[m.scenes]),[M,b]=D.useState(v),[p,N]=D.useState(!1),[j,U]=D.useState(null),[W,ee]=D.useState(!1),[F,J]=D.useState(!1),[K,se]=D.useState(!1),[I,fe]=D.useState(null),[ie,_]=D.useState(!1),[z,G]=D.useState(!1),[re,oe]=D.useState(null),[me,ne]=D.useState(!1),[lt,Ie]=D.useState(!1),[Ue,T]=D.useState(!1),L=m.scenes[M],R=D.useMemo(()=>mg(r,h),[r,h]),V=D.useMemo(()=>Sh(R,pr(m.scenes.slice(0,M+1),r)),[R,m.scenes,M,r]),de=D.useMemo(()=>re==="HE"?m.secondChoicesHE:m.secondChoicesBE,[re,m.secondChoicesBE,m.secondChoicesHE]),S=D.useMemo(()=>Qp(de[0]?.result,r,V),[de,r,V]),C=D.useMemo(()=>Sg(I?.result,r,V),[I?.result,r,V]);D.useEffect(()=>{b(v),N(!1),U(null),ee(!1),J(!1),se(!1),fe(null),_(!1),G(!1),oe(null),ne(!1)},[v,h,r]),D.useEffect(()=>{if(lt&&!p&&!W&&!F&&!K&&!ie&&!z){const P=window.setTimeout(()=>{q()},5e3);return()=>window.clearTimeout(P)}});const q=()=>{if(me){ne(!1);return}const P=Yp(m.scenes,M);P!==null?b(P):N(!0)},Y=()=>{if(i.playthrough===1)return;const P=ug(m.scenes,M);P!==null&&b(P)},ce=P=>{U(P),oe(Vp(P)),N(!1),ee(!0)},pe=()=>{if(ee(!1),j?.nextChoices?.length){J(!0);return}se(!0)},ae=P=>{U(P),oe(Vp(P)),J(!1),ee(!0)},Ke=P=>{fe(P),se(!1),_(!0)},Me=()=>{St()},St=()=>{re&&(f(h,re),u({type:"SET_PHASE",payload:"skillReplace"}))},Qt=()=>{i.playthrough!==1&&(b(v),N(!1),U(null),ee(!1),J(!1),se(!1),fe(null),_(!1),G(!1),oe(null))},Xt=()=>r==="child"?"from-amber-900/80 to-amber-950":r==="adult"?"from-blue-900/80 to-blue-950":"from-purple-900/80 to-purple-950",Fa=P=>P?P.includes("派蒙")?"P":P.includes("妈妈")?"M":P.includes("爸爸")?"F":P.includes("医生")?"D":P.includes("BOSS")?"!":P.includes("旁白")?"N":P.slice(0,1):"◆",Ut=L?.speaker==="旁白";return l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:325:5",className:`min-h-screen bg-gradient-to-b ${Xt()} relative overflow-hidden`,onClick:q,children:[V.background&&l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:330:9",src:V.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-55 pointer-events-none"}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:336:7",className:"absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none"}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:338:7",className:`absolute inset-0 flex items-center justify-center ${V.background?"opacity-0":"opacity-20"} pointer-events-none`,children:l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:339:9",className:"text-8xl md:text-9xl",children:[r==="child"&&["🧸","📚","🎀"][h-1],r==="adult"&&["🍷","💻","💊"][h-1],r==="elder"&&["🏠","🩺","🌿"][h-1]]})}),V.portraits.length>0&&l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:347:9",className:"absolute inset-x-0 bottom-28 z-10 flex items-end justify-center gap-2 md:gap-8 px-4 pointer-events-none",children:V.portraits.map((P,Fs)=>l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:349:13",src:P.path,alt:`${P.role} / ${P.state}`,className:`max-h-[46vh] md:max-h-[58vh] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] ${V.portraits.length===1?"max-w-[72vw]":V.portraits.length>3?"max-w-[20vw]":"max-w-[33vw]"}`,onError:wc=>{wc.currentTarget.style.display="none"}},`${P.role}-${P.state}-${Fs}`))}),l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:364:7",className:"absolute top-4 left-4 right-4 z-20 text-white/80",children:[l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:365:9",className:"text-sm",children:m.title}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:366:9",className:"text-xs text-white/55",children:m.description})]}),l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:369:7",className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",children:[i.playthrough===2&&l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:371:11",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${M!==v?"bg-purple-500/50 hover:bg-purple-500/70 text-white":"bg-gray-500/30 text-gray-500"}`,onClick:P=>{P.stopPropagation(),Y()},disabled:M===v,children:[l.jsx(Oc,{"code-path":"src\\sections\\VisualNovel.tsx:378:13",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:379:13",className:"text-xs",children:"回退"})]}),l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:382:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${lt?"bg-pink-500/70 text-white":"bg-black/50 text-white/70 hover:text-white"}`,onClick:P=>{P.stopPropagation(),Ie(!lt)},children:[l.jsx(Wa,{"code-path":"src\\sections\\VisualNovel.tsx:386:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:387:11",className:"text-xs",children:"自动"})]}),l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:389:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:P=>{P.stopPropagation(),ne(!me)},children:[l.jsx(Nc,{"code-path":"src\\sections\\VisualNovel.tsx:393:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:394:11",className:"text-xs",children:"隐藏"})]}),l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:396:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:P=>{P.stopPropagation(),q()},children:[l.jsx(jc,{"code-path":"src\\sections\\VisualNovel.tsx:400:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:401:11",className:"text-xs",children:"快进"})]}),l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:403:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:P=>{P.stopPropagation(),T(!0)},children:[l.jsx(kc,{"code-path":"src\\sections\\VisualNovel.tsx:407:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:408:11",className:"text-xs",children:"设置"})]}),i.playthrough===2&&l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:411:11",className:"p-2 bg-amber-500/50 hover:bg-amber-500/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:P=>{P.stopPropagation(),Qt()},children:[l.jsx(RS,{"code-path":"src\\sections\\VisualNovel.tsx:415:13",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:416:13",className:"text-xs",children:"回溯"})]})]}),!me&&l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:422:9",className:Ut?"absolute top-20 left-1/2 z-20 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 rounded-lg bg-black/45 px-5 py-3 text-center text-white/90 backdrop-blur-sm border border-white/10":"absolute bottom-16 left-4 right-4 bg-black/65 backdrop-blur-sm rounded-xl p-4 z-20 border border-white/10",children:[L?.speaker&&!Ut&&l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:430:13",className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:431:15",className:"w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-sm font-bold text-white overflow-hidden",children:Kp(L.speaker,r,V)?l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:433:19",src:Kp(L.speaker,r,V),alt:L.speaker,className:"h-full w-full object-cover"}):Fa(L.speaker)}),l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:442:15",className:"text-pink-300 font-medium",children:L.speaker})]}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:445:11",className:`${Ut?"text-sm md:text-base":"text-white text-base md:text-lg"} leading-relaxed max-h-[42vh] overflow-y-auto pr-1`,children:hg(L?.text)})]}),p&&l.jsx(nr,{"code-path":"src\\sections\\VisualNovel.tsx:452:9",title:"你会如何选择？",children:m.firstChoices.map(P=>l.jsx(sr,{"code-path":"src\\sections\\VisualNovel.tsx:454:13",choice:P,onClick:()=>ce(P)},P.id))}),W&&j&&l.jsx(ar,{"code-path":"src\\sections\\VisualNovel.tsx:460:9",title:"分支剧情",action:j.nextChoices?.length?"继续选择":"进入后续选择",baseVisual:V,perspective:r,onContinue:pe,scriptText:j.result}),F&&j?.nextChoices?.length&&l.jsx(nr,{"code-path":"src\\sections\\VisualNovel.tsx:472:9",title:"接下来你会怎么做？",visual:Qp(j.result,r,V),children:j.nextChoices.map(P=>l.jsx(sr,{"code-path":"src\\sections\\VisualNovel.tsx:474:13",choice:P,onClick:()=>ae(P)},P.id))}),K&&re&&l.jsx(nr,{"code-path":"src\\sections\\VisualNovel.tsx:480:9",title:re==="HE"?"HE 主线：接下来怎么守护？":"BE 主线：接下来会怎么发展？",visual:S,children:de.map(P=>l.jsx(sr,{"code-path":"src\\sections\\VisualNovel.tsx:482:13",choice:P,onClick:()=>Ke(P)},P.id))}),ie&&I&&l.jsx(ar,{"code-path":"src\\sections\\VisualNovel.tsx:488:9",title:"后续剧情",action:"继续",baseVisual:V,perspective:r,onContinue:Me,scriptText:I.result}),z&&j&&l.jsxs(ar,{"code-path":"src\\sections\\VisualNovel.tsx:500:9",title:re==="HE"?"HE 反馈":"BE 反馈",action:"继续",visual:C,onContinue:St,children:[l.jsxs("p",{"code-path":"src\\sections\\VisualNovel.tsx:501:11",className:"mb-3 text-pink-200",children:["派蒙：",j.paimonDialogue]}),l.jsx("p",{"code-path":"src\\sections\\VisualNovel.tsx:502:11",className:"rounded-lg bg-pink-900/30 p-3 text-pink-100",children:j.microEffect})]}),Ue&&l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:507:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-40",onClick:P=>P.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:508:11",className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[l.jsx("h3",{"code-path":"src\\sections\\VisualNovel.tsx:509:13",className:"text-lg font-bold mb-4",children:"设置"}),l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:510:13",className:"space-y-4",children:[l.jsxs("label",{"code-path":"src\\sections\\VisualNovel.tsx:511:15",className:"block text-sm text-gray-600",children:["文字速度",l.jsx("input",{"code-path":"src\\sections\\VisualNovel.tsx:513:17",type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),l.jsxs("label",{"code-path":"src\\sections\\VisualNovel.tsx:515:15",className:"block text-sm text-gray-600",children:["音量",l.jsx("input",{"code-path":"src\\sections\\VisualNovel.tsx:517:17",type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),l.jsx(we,{"code-path":"src\\sections\\VisualNovel.tsx:520:13",className:"w-full mt-4",onClick:()=>T(!1),children:"关闭"})]})})]})}function mg(i,u){const f={child:{1:"妈妈的卧室",2:"书房",3:"妈妈的卧室"},adult:{1:"职场办公室",2:"职场办公室",3:"卧室"},elder:{1:"社区医院",2:"体检中心",3:"小区花园"}},r=i==="child"?"软糯":i==="elder"?"温柔":"严肃",h=mt("主角","正常",i),m=mt("派蒙",r);return{background:Gt(f[i][u]),portraits:[h?{role:"主角",state:"正常",path:h}:null,m?{role:"派蒙",state:r,path:m}:null].filter(v=>!!v)}}function Sh(i,u){return{background:u.background||i.background,portraits:u.portraits.length>0?u.portraits:i.portraits}}function pr(i,u){let f,r=[];for(const h of i){const m=h.text.match(/【场景切换：([^】]+)】/);m&&(f=Gt(m[1]));const v=h.text.match(/【立绘：([^】]+)】/);v&&(r=v[1].split(/[、,，]/).map(M=>{const[b,p]=M.split("/").map(j=>j.trim()),N=b&&p?mt(b,p,u):void 0;return N?{role:b,state:p,path:N}:null}).filter(M=>!!M).slice(0,5))}return{background:f,portraits:r}}function Kp(i,u,f){return i?i.includes("派蒙")?mt("派蒙","开心"):i.includes("主角")?f.portraits.find(h=>h.role==="主角")?.path||mt("主角","正常",u):f.portraits.find(h=>i.includes(h.role))?.path:void 0}function Sg(i,u,f){if(!i)return f;const r=i.split(`
`).map(m=>({text:m})),h=pr(r,u);return{background:h.background||f.background,portraits:h.portraits.length>0?h.portraits:f.portraits}}function gh(i,u,f,r){if(!i||u===void 0||!f)return r;const h=i.split(`
`).slice(0,u+1).map(m=>({text:m}));return Sh(r,pr(h,f))}function Qp(i,u,f){if(!i)return f;const r=i.split(`
`),h=r.findIndex(v=>v.trim()&&!Tc(v)),m=h>=0?h:r.length-1;return gh(i,m,u,f)}function gg(i,u){if(!i||!u)return null;const f=i.split(`
`),r=f.findIndex(m=>m.includes("第三幕")||m.includes("插入式微观科普"));if(r<0)return null;const h=f.findIndex((m,v)=>v>r&&!m.trim().startsWith("【")&&(m.includes("防线稳固结局")||m.includes("黑雾笼罩结局")||m.includes("防线修复结局")||m.includes("黑雾蔓延结局")||m.includes("守护成功结局")||m.includes("风险加重结局")||m.includes("及时就医结局")||m.includes("隐瞒拖延结局")||m.includes("按时体检结局")||m.includes("拖延体检结局")||m.includes("科学治疗结局")||m.includes("偏方延误结局")||/^HE 结局/.test(m.trim())||/^BE 结局/.test(m.trim())||/^结局\s*[12]/.test(m.trim())));return h<0?null:u.find(m=>m.rawIndex>h)??null}function nr({title:i,children:u,visual:f}){return l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:686:5",className:"absolute inset-0 bg-black/75 flex items-center justify-center z-50",onClick:r=>r.stopPropagation(),children:[f?.background&&l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:687:30",src:f.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-35"}),f&&f.portraits.length>0&&l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:689:9",className:"absolute inset-x-0 bottom-24 flex items-end justify-center gap-3 px-4 pointer-events-none opacity-80",children:f.portraits.map((r,h)=>l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:691:13",src:r.path,alt:"",className:`${f.portraits.length>3?"max-h-[38vh] max-w-[19vw]":"max-h-[44vh] max-w-[34vw]"} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`,onError:m=>{m.currentTarget.style.display="none"}},`${r.role}-${r.state}-${h}`))}),l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:703:7",className:"relative z-10 max-w-2xl w-full p-4",children:[l.jsx("p",{"code-path":"src\\sections\\VisualNovel.tsx:704:9",className:"text-white text-center mb-4",children:i}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:705:9",className:"space-y-2 max-h-[72vh] overflow-y-auto pr-1",children:u})]})]})}function sr({choice:i,onClick:u}){return l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:713:5",className:"w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl text-left transition-all border border-white/20 hover:border-pink-400",onClick:f=>{f.stopPropagation(),u()},children:[l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:720:7",className:"inline-flex w-7 h-7 bg-pink-500 rounded-full items-center justify-center text-sm mr-3",children:i.id.replace(/^(c|he|be)/,"")}),i.text]})}function ar({title:i,action:u,visual:f,baseVisual:r,perspective:h,children:m,onContinue:v,scriptText:M}){const b=D.useMemo(()=>fg(M),[M]),[p,N]=D.useState(null),[j,U]=D.useState(!1),W=D.useMemo(()=>b.inlineChoices.length===0?b.entries:p===null?b.beforeEntries:[...b.beforeEntries,...b.inlineChoices[p].entries,...b.afterEntries],[b,p]),[ee,F]=D.useState(0),J=W?.[ee],K=hh(J?.text),se=K.speaker==="旁白"||!K.speaker&&!!J,I=D.useMemo(()=>gg(M,W),[M,W]),fe=I!==null&&J!==void 0&&J.rawIndex<I.rawIndex,ie=D.useMemo(()=>gh(M,J?.rawIndex,h,r||f||{portraits:[]}),[M,J?.rawIndex,h,r,f]),_=!W||ee>=W.length-1;D.useEffect(()=>{F(0),N(null),U(!1)},[M]);const z=()=>{if(W&&!_){F(oe=>oe+1);return}if(b.inlineChoices.length>0&&p===null){U(!0);return}v?.()},G=()=>{if(!W||I===null)return;const oe=W.findIndex(me=>me.rawIndex===I.rawIndex);oe>=0&&F(oe)},re=oe=>{N(oe),U(!1),F(b.beforeEntries.length)};return l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:805:5",className:"absolute inset-0 bg-black/80 flex items-center justify-center z-40",onClick:oe=>oe.stopPropagation(),children:[ie.background&&l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:807:9",src:ie.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:809:7",className:"absolute inset-0 bg-black/55"}),ie.portraits.length>0&&l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:811:9",className:"absolute inset-x-0 bottom-28 flex items-end justify-center gap-3 px-4 pointer-events-none",children:ie.portraits.map((oe,me)=>l.jsx("img",{"code-path":"src\\sections\\VisualNovel.tsx:813:13",src:oe.path,alt:`${oe.role} / ${oe.state}`,className:`${ie.portraits.length>3?"max-h-[38vh] max-w-[19vw]":"max-h-[44vh] max-w-[34vw]"} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`,onError:ne=>{ne.currentTarget.style.display="none"}},`${oe.role}-${oe.state}-${me}`))}),J?l.jsxs(l.Fragment,{children:[l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:827:11",className:se?"absolute top-20 left-1/2 w-[min(780px,calc(100vw-2rem))] -translate-x-1/2 rounded-lg bg-black/45 px-5 py-3 text-center text-white/90 backdrop-blur-sm border border-white/10":"absolute bottom-20 left-4 right-4 rounded-xl bg-black/70 p-5 text-white backdrop-blur-sm border border-white/10",children:[!se&&l.jsx("h3",{"code-path":"src\\sections\\VisualNovel.tsx:835:15",className:"text-pink-300 font-medium mb-3",children:K.speaker||i}),l.jsx("p",{"code-path":"src\\sections\\VisualNovel.tsx:837:13",className:`${se?"text-sm md:text-base":"text-lg"} leading-relaxed whitespace-pre-wrap`,children:K.text||J.text})]}),u&&v&&l.jsx(we,{"code-path":"src\\sections\\VisualNovel.tsx:842:13",className:"absolute bottom-4 left-1/2 w-[min(360px,calc(100vw-2rem))] -translate-x-1/2 bg-pink-500 hover:bg-pink-600",onClick:z,children:W&&!_?"继续":u}),fe&&l.jsx(we,{"code-path":"src\\sections\\VisualNovel.tsx:847:13",variant:"secondary",className:"absolute right-4 top-4 bg-white/15 text-white hover:bg-white/25",onClick:G,children:"跳过科普"}),j&&b.inlineChoices.length>0&&l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:856:13",className:"absolute inset-0 z-50 flex items-center justify-center bg-black/55 px-4",onClick:oe=>oe.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:857:15",className:"w-[min(760px,calc(100vw-2rem))]",children:[l.jsx("p",{"code-path":"src\\sections\\VisualNovel.tsx:858:17",className:"mb-4 text-center text-lg font-semibold text-white",children:"你会如何选择？"}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:859:17",className:"space-y-3",children:b.inlineChoices.map((oe,me)=>l.jsxs("button",{"code-path":"src\\sections\\VisualNovel.tsx:861:21",className:"w-full rounded-xl border border-white/20 bg-white/10 p-4 text-left text-white transition-all hover:border-pink-300 hover:bg-white/20",onClick:()=>re(me),children:[l.jsx("span",{"code-path":"src\\sections\\VisualNovel.tsx:866:23",className:"mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-sm",children:me+1}),oe.text]},`${oe.text}-${me}`))})]})})]}):l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:878:9",className:"max-w-3xl w-full p-4",children:l.jsxs("div",{"code-path":"src\\sections\\VisualNovel.tsx:879:11",className:"relative bg-black/70 rounded-xl p-5 border border-white/10",children:[l.jsx("h3",{"code-path":"src\\sections\\VisualNovel.tsx:880:13",className:"text-pink-300 font-medium mb-4",children:i}),l.jsx("div",{"code-path":"src\\sections\\VisualNovel.tsx:881:13",className:"text-white leading-relaxed max-h-[64vh] overflow-y-auto pr-2",children:m}),u&&v&&l.jsx(we,{"code-path":"src\\sections\\VisualNovel.tsx:883:15",className:"bg-pink-500 hover:bg-pink-600 w-full mt-5",onClick:z,children:u})]})})]})}const gc=[{id:"cellRepair",name:"细胞修复术",description:"修复受损的乳腺细胞，恢复组织健康",type:"positive",effect:"修复乳腺细胞损伤",icon:"heal"},{id:"hormoneBalance",name:"激素平衡",description:"调节内分泌，维持激素稳定",type:"positive",effect:"平衡雌激素水平",icon:"balance"},{id:"immuneBoost",name:"免疫强化",description:"增强免疫系统，提高抵抗力",type:"positive",effect:"提升免疫细胞活性",icon:"shield"},{id:"detox",name:"毒素净化",description:"清除体内毒素，净化乳腺环境",type:"positive",effect:"清除有害物质",icon:"cleanse"}],rr={1:{he:{id:"accompanyCare",name:"陪伴关怀",description:"多陪伴妈妈，让她好好休息",type:"positive",effect:"缓解妈妈疲劳，驱散BOSS黑雾",icon:"heart",source:"幼年线记忆点1·任性粘人"},be:{id:"willfulClingy",name:"任性粘人",description:"缠着妈妈熬夜陪伴",type:"negative",effect:"让妈妈劳累，BOSS黑雾强化",icon:"danger",source:"幼年线记忆点1·任性粘人"}},2:{he:{id:"reasonableSchedule",name:"合理安排",description:"合理规划时间，不让妈妈牵挂",type:"positive",effect:"让妈妈安心，BOSS无法靠近",icon:"clock",source:"幼年线记忆点2·熬夜学习"},be:{id:"stubbornStudy",name:"固执熬夜",description:"偷偷熬夜学习不让妈妈休息",type:"negative",effect:"让妈妈牵挂，BOSS黑雾蔓延",icon:"danger",source:"幼年线记忆点2·熬夜学习"}},3:{he:{id:"warmComfort",name:"温暖安慰",description:"关心妈妈情绪，给她温暖支持",type:"positive",effect:"驱散妈妈心结，BOSS彻底消散",icon:"sparkle",source:"幼年线记忆点3·无知嘲笑"},be:{id:"ignorantMockery",name:"无知嘲笑",description:"随口说出伤害妈妈的话",type:"negative",effect:"让妈妈伤心，BOSS彻底觉醒",icon:"danger",source:"幼年线记忆点3·无知嘲笑"}}},yh={1:{he:{id:"refuseAlcohol",name:"拒绝酒精",description:"远离酒精刺激，保护乳腺健康",type:"positive",effect:"减少激素紊乱，BOSS无法成型",icon:"shield",source:"青壮年线记忆点1·职场酒局"},be:{id:"forcedDrinking",name:"被迫饮酒",description:"为了工作不得不喝酒",type:"negative",effect:"刺激乳腺组织，BOSS黑雾扩散",icon:"danger",source:"青壮年线记忆点1·职场酒局"}},2:{he:{id:"adequateSleep",name:"充足睡眠",description:"保持规律作息，维持内分泌稳定",type:"positive",effect:"平衡激素水平，BOSS虚弱消散",icon:"moon",source:"青壮年线记忆点2·熬夜赶项目"},be:{id:"stayUpLate",name:"熬夜透支",description:"为了项目连续熬夜",type:"negative",effect:"内分泌紊乱，BOSS黑雾笼罩",icon:"danger",source:"青壮年线记忆点2·熬夜赶项目"}},3:{he:{id:"rationalMedication",name:"理性用药",description:"拒绝三无产品，科学管理身材",type:"positive",effect:"避免激素风暴，BOSS无法存在",icon:"pill",source:"青壮年线记忆点3·滥用减肥药"},be:{id:"abuseDrugs",name:"滥用药物",description:"盲目服用三无减肥药",type:"negative",effect:"激素风暴，BOSS彻底觉醒",icon:"danger",source:"青壮年线记忆点3·滥用减肥药"}}},bh={1:{he:{id:"timelyMedical",name:"及时就医",description:"发现异常立即就医，早发现早治疗",type:"positive",effect:"消除早期病灶，BOSS被成功清除",icon:"hospital",source:"老年线记忆点1·隐瞒病情"},be:{id:"hideIllness",name:"隐瞒病情",description:"独自硬扛，不告诉子女",type:"negative",effect:"加重病情，BOSS彻底觉醒",icon:"danger",source:"老年线记忆点1·隐瞒病情"}},2:{he:{id:"regularCheckup",name:"定期体检",description:"按时进行乳腺检查，防患于未然",type:"positive",effect:"预防疾病发生，BOSS被成功驱散",icon:"clipboard",source:"老年线记忆点2·忽视体检"},be:{id:"delayCheckup",name:"拖延体检",description:"把体检当成瞎折腾",type:"negative",effect:"错失早期发现机会，BOSS黑雾蔓延",icon:"danger",source:"老年线记忆点2·忽视体检"}},3:{he:{id:"scientificTreatment",name:"科学治疗",description:"相信专业医生，坚持正规治疗",type:"positive",effect:"阻断病情恶化，BOSS被成功驱散",icon:"stethoscope",source:"老年线记忆点3·迷信偏方"},be:{id:"folkRemedy",name:"迷信偏方",description:"听信民间偏方，延误正规治疗",type:"negative",effect:"病情恶化，BOSS彻底觉醒",icon:"danger",source:"老年线记忆点3·迷信偏方"}}},vh={cellRepair:gc[0],hormoneBalance:gc[1],immuneBoost:gc[2],detox:gc[3],...Object.entries(rr).reduce((i,[,u])=>({...i,[u.he.id]:u.he,[u.be.id]:u.be}),{}),...Object.entries(yh).reduce((i,[,u])=>({...i,[u.he.id]:u.he,[u.be.id]:u.be}),{}),...Object.entries(bh).reduce((i,[,u])=>({...i,[u.he.id]:u.he,[u.be.id]:u.be}),{})};function yg(i,u){switch(i){case"child":return rr[u];case"adult":return yh[u];case"elder":return bh[u];default:return rr[1]}}const yc={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},lr={cellRepair:"修复受损的乳腺细胞，恢复组织健康",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境",accompanyCare:"多陪伴妈妈，让她好好休息",willfulClingy:"缠着妈妈熬夜陪伴",reasonableSchedule:"合理规划时间，不让妈妈牵挂",stubbornStudy:"偷偷熬夜学习不让妈妈休息",warmComfort:"关心妈妈情绪，给她温暖支持",ignorantMockery:"随口说出伤害妈妈的话",refuseAlcohol:"远离酒精刺激，保护乳腺健康",forcedDrinking:"为了工作不得不喝酒",adequateSleep:"保持规律作息，维持内分泌稳定",stayUpLate:"为了项目连续熬夜",rationalMedication:"拒绝三无产品，科学管理身材",abuseDrugs:"盲目服用三无减肥药",timelyMedical:"发现异常立即就医，早发现早治疗",hideIllness:"独自硬扛，不告诉子女",regularCheckup:"按时进行乳腺检查，防患于未然",delayCheckup:"把体检当成瞎折腾",scientificTreatment:"相信专业医生，坚持正规治疗",folkRemedy:"听信民间偏方，延误正规治疗"},bg={cellRepair:"修复乳腺细胞损伤",hormoneBalance:"平衡雌激素水平",immuneBoost:"提升免疫细胞活性",detox:"清除有害物质",accompanyCare:"缓解妈妈疲劳，驱散BOSS黑雾",willfulClingy:"让妈妈劳累，BOSS黑雾强化",reasonableSchedule:"让妈妈安心，BOSS无法靠近",stubbornStudy:"让妈妈牵挂，BOSS黑雾蔓延",warmComfort:"驱散妈妈心结，BOSS彻底消散",ignorantMockery:"让妈妈伤心，BOSS彻底觉醒",refuseAlcohol:"减少激素紊乱，BOSS无法成型",forcedDrinking:"刺激乳腺组织，BOSS黑雾扩散",adequateSleep:"平衡激素水平，BOSS虚弱消散",stayUpLate:"内分泌紊乱，BOSS黑雾笼罩",rationalMedication:"避免激素风暴，BOSS无法存在",abuseDrugs:"激素风暴，BOSS彻底觉醒",timelyMedical:"消除早期病灶，BOSS被成功清除",hideIllness:"加重病情，BOSS彻底觉醒",regularCheckup:"预防疾病发生，BOSS被成功驱散",delayCheckup:"错失早期发现机会，BOSS黑雾蔓延",scientificTreatment:"阻断病情恶化，BOSS被成功驱散",folkRemedy:"病情恶化，BOSS彻底觉醒"},vg=["willfulClingy","stubbornStudy","ignorantMockery","forcedDrinking","stayUpLate","abuseDrugs","hideIllness","delayCheckup","folkRemedy"];function Bg(){const{state:i,dispatch:u,equipSkill:f,unlockSkill:r,getMemoryKey:h}=it(),m=i.currentPerspective,v=i.currentMemoryPoint,M=h(v),b=i.memoryProgress[M],p=yg(m,v),N=b==="HE"?p.he:p.be,[j,U]=D.useState(null),[W,ee]=D.useState(!1),[F,J]=D.useState(!1),K=i.equippedSkills.includes(N.id),se=z=>vg.includes(z),I=z=>{if(i.playthrough!==1||!se(z))return!1;const G=i.beSkillSources[z];return!(!G||b==="HE"&&G===v)},fe=z=>{if(I(z)){J(!0);return}U(z)},ie=()=>{j&&(r(N.id),b==="BE"&&u({type:"RECORD_BE_SKILL_SOURCE",payload:{skillId:N.id,memoryPoint:v}}),f(N.id,j),ee(!0))},_=()=>{u({type:"SET_PHASE",payload:"memoryCenter"})};return K&&!W?l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:177:7",className:"min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4",onClick:_,children:l.jsx(Yt,{"code-path":"src\\sections\\SkillReplace.tsx:181:9",className:"max-w-md w-full",children:l.jsxs(Kt,{"code-path":"src\\sections\\SkillReplace.tsx:182:11",className:"p-8 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:183:13",className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(or,{"code-path":"src\\sections\\SkillReplace.tsx:184:15",className:"w-8 h-8 text-blue-500"})}),l.jsx("h3",{"code-path":"src\\sections\\SkillReplace.tsx:186:13",className:"text-xl font-bold text-blue-700 mb-2",children:"技能已拥有"}),l.jsxs("p",{"code-path":"src\\sections\\SkillReplace.tsx:187:13",className:"text-gray-600 mb-6",children:["你已经拥有此技能 ",l.jsx("strong",{"code-path":"src\\sections\\SkillReplace.tsx:188:24",children:yc[N.id]||N.name}),l.jsx("br",{"code-path":"src\\sections\\SkillReplace.tsx:189:15"}),l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:190:15",className:"text-sm text-gray-500",children:"点击任意处跳过学习阶段"})]}),l.jsxs(we,{"code-path":"src\\sections\\SkillReplace.tsx:192:13",className:"bg-blue-500 hover:bg-blue-600",onClick:_,children:["继续冒险",l.jsx(Dp,{"code-path":"src\\sections\\SkillReplace.tsx:197:15",className:"w-4 h-4 ml-2"})]})]})})}):W?l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:207:7",className:"min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4",children:l.jsx(Yt,{"code-path":"src\\sections\\SkillReplace.tsx:208:9",className:"max-w-md w-full",children:l.jsxs(Kt,{"code-path":"src\\sections\\SkillReplace.tsx:209:11",className:"p-8 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:210:13",className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(Bc,{"code-path":"src\\sections\\SkillReplace.tsx:211:15",className:"w-8 h-8 text-green-500"})}),l.jsx("h3",{"code-path":"src\\sections\\SkillReplace.tsx:213:13",className:"text-xl font-bold text-green-700 mb-2",children:"技能学习成功！"}),l.jsxs("p",{"code-path":"src\\sections\\SkillReplace.tsx:214:13",className:"text-gray-600 mb-6",children:["你已学会 ",l.jsx("strong",{"code-path":"src\\sections\\SkillReplace.tsx:215:20",children:yc[N.id]||N.name}),l.jsx("br",{"code-path":"src\\sections\\SkillReplace.tsx:216:15"}),l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:217:15",className:"text-sm text-gray-500",children:lr[N.id]||N.description})]}),l.jsxs(we,{"code-path":"src\\sections\\SkillReplace.tsx:219:13",className:"bg-green-500 hover:bg-green-600",onClick:_,children:["继续冒险",l.jsx(Dp,{"code-path":"src\\sections\\SkillReplace.tsx:224:15",className:"w-4 h-4 ml-2"})]})]})})}):l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:233:5",className:"min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 relative",children:[l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:235:7",className:"text-center pt-8 pb-6",children:[l.jsx("h2",{"code-path":"src\\sections\\SkillReplace.tsx:236:9",className:"text-2xl font-bold text-blue-700",children:"技能学习"}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:237:9",className:"text-sm text-blue-600/70",children:"通关记忆点获得新技能"})]}),l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:240:7",className:"max-w-lg mx-auto",children:[l.jsx(Yt,{"code-path":"src\\sections\\SkillReplace.tsx:242:9",className:`mb-6 ${N.type==="negative"?"border-red-300 bg-red-50":"border-green-300 bg-green-50"}`,children:l.jsx(Kt,{"code-path":"src\\sections\\SkillReplace.tsx:243:11",className:"p-6",children:l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:244:13",className:"flex items-center gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:245:15",className:`w-16 h-16 rounded-full flex items-center justify-center ${N.type==="negative"?"bg-red-100":"bg-green-100"}`,children:N.type==="negative"?l.jsx(zS,{"code-path":"src\\sections\\SkillReplace.tsx:249:19",className:"w-8 h-8 text-red-500"}):l.jsx(or,{"code-path":"src\\sections\\SkillReplace.tsx:251:19",className:"w-8 h-8 text-green-500"})}),l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:254:15",children:[l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:255:17",className:"flex items-center gap-2",children:[l.jsx("h3",{"code-path":"src\\sections\\SkillReplace.tsx:256:19",className:"font-bold text-lg",children:yc[N.id]||N.name}),l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:257:19",className:`text-xs px-2 py-0.5 rounded-full ${N.type==="negative"?"bg-red-200 text-red-700":"bg-green-200 text-green-700"}`,children:N.type==="negative"?"负面":"正向"})]}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:263:17",className:"text-sm text-gray-600",children:lr[N.id]||N.description}),l.jsxs("p",{"code-path":"src\\sections\\SkillReplace.tsx:264:17",className:"text-xs text-gray-500 mt-1",children:["效果: ",bg[N.id]||N.effect]})]})]})})}),l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:271:9",className:"mb-6",children:[l.jsx("h3",{"code-path":"src\\sections\\SkillReplace.tsx:272:11",className:"font-bold text-gray-700 mb-3",children:"选择要替换的技能"}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:273:11",className:"text-sm text-gray-500 mb-4",children:"你最多只能携带4个技能，请选择要替换的技能"}),l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:277:11",className:"space-y-2",children:i.equippedSkills.map(z=>{const G=yc[z]||z,re=lr[z]||"",oe=j===z,me=I(z);return l.jsx("button",{"code-path":"src\\sections\\SkillReplace.tsx:285:17",className:`w-full p-4 rounded-xl text-left transition-all border-2 relative overflow-hidden ${me?"border-red-300 bg-red-50 cursor-not-allowed":oe?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-blue-300"}`,onClick:()=>fe(z),children:l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:296:19",className:"flex items-center justify-between",children:[l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:297:21",className:"flex items-center gap-3",children:[me&&l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:300:25",className:"w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0",children:l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:301:27",className:"text-white text-sm",children:"😈"})}),l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:304:23",children:[l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:305:25",className:`font-medium ${me?"text-red-700":"text-gray-800"}`,children:G}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:308:25",className:`text-xs ${me?"text-red-500":"text-gray-500"}`,children:re})]})]}),l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:313:21",className:"flex items-center gap-2",children:[me&&l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:316:25",className:"flex items-center gap-1 text-red-500",children:[l.jsx($a,{"code-path":"src\\sections\\SkillReplace.tsx:317:27",className:"w-5 h-5"}),l.jsx("span",{"code-path":"src\\sections\\SkillReplace.tsx:318:27",className:"text-xs",children:"已锁定"})]}),!me&&oe&&l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:323:25",className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:l.jsx(Bc,{"code-path":"src\\sections\\SkillReplace.tsx:324:27",className:"w-4 h-4 text-white"})})]})]})},z)})})]}),l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:336:9",className:"flex gap-4",children:l.jsx(we,{"code-path":"src\\sections\\SkillReplace.tsx:337:11",className:"flex-1 bg-blue-500 hover:bg-blue-600",disabled:!j,onClick:ie,children:"确认替换"})}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:346:9",className:"text-center text-xs text-gray-400 mt-4",children:"必须从当前携带的4个技能中替换1个"})]}),F&&l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:353:9",className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:()=>J(!1),children:l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:357:11",className:"bg-white rounded-2xl p-6 max-w-sm w-full",onClick:z=>z.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\SkillReplace.tsx:358:13",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SkillReplace.tsx:359:15",className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx($a,{"code-path":"src\\sections\\SkillReplace.tsx:360:17",className:"w-8 h-8 text-red-500"})}),l.jsx("h3",{"code-path":"src\\sections\\SkillReplace.tsx:362:15",className:"text-lg font-bold text-red-700 mb-2",children:"技能已锁定"}),l.jsx("p",{"code-path":"src\\sections\\SkillReplace.tsx:363:15",className:"text-gray-600 text-sm mb-6",children:"该负面技能只能被其对应记忆点的正面技能替换哦~不管如何...快去打BOSS吧！"}),l.jsx(we,{"code-path":"src\\sections\\SkillReplace.tsx:366:15",className:"w-full bg-red-500 hover:bg-red-600",onClick:()=>J(!1),children:"知道了"})]})})})]})}const Bh={child:{name:"幼年视角",description:"守护妈妈的乳腺世界",age:"10岁",character:"小女孩",possessive:"妈妈的",color:"amber"},adult:{name:"青壮年视角",description:"守护自己的健康人生",age:"32岁",character:"职场女性",possessive:"自己的",color:"blue"},elder:{name:"老年视角",description:"岁月安康，乳腺守护",age:"65岁",character:"奶奶",possessive:"属于你的",color:"purple"}},hr={breastLump:{id:"breastLump",name:"乳房硬块BOSS",description:"乳腺异常增生的具象化，坚硬的肿块压迫着乳腺组织",symptoms:["乳房出现无痛性硬块","肿块边界不清","质地较硬"],science:{mechanism:"乳腺细胞异常增殖形成结节，可能由激素紊乱、遗传因素等引起",earlySigns:["乳房出现无痛肿块","皮肤凹陷","乳头溢液"],medicalAdvice:"发现硬块应立即就医，进行乳腺超声或钼靶检查"},skills:[{name:"硬结侵噬",description:"硬结在乳房组织中无声蔓延",feedback:"BOSS凝聚黑雾，一枚质地坚硬、边缘不规则的硬结正在乳房组织中无声蔓延..."},{name:"硬结增殖",description:"原有硬块迅速增大",feedback:"BOSS释放暗能，原有硬块迅速增大，表面凸起更多细小硬结，与周围组织粘连愈发紧密..."},{name:"深层浸润",description:"硬块向深层组织浸润",feedback:"BOSS穿透乳腺浅筋膜，硬块向深层组织浸润，牵拉周围神经，引发持续性放射性胀痛..."},{name:"隐匿扩散",description:"在乳房其他象限形成隐匿硬块",feedback:"BOSS释放隐形孢子，在乳房其他象限形成微小隐匿硬块，仅通过影像学检查可发现..."}],week:1},skinDimple:{id:"skinDimple",name:"酒窝征BOSS",description:"乳腺皮肤牵拉的具象化，皮肤出现凹陷如酒窝",symptoms:["乳房皮肤凹陷","呈现酒窝样改变","皮肤与深层组织粘连"],science:{mechanism:"肿瘤侵犯Cooper韧带，牵拉皮肤形成凹陷",earlySigns:["皮肤局部凹陷","站立时明显","平躺可能减轻"],medicalAdvice:"酒窝征是乳腺癌的典型表现，需立即就医"},skills:[{name:"韧带挛缩术",description:"皮肤中央缓缓凹陷形成酒窝",feedback:'BOSS牵动暗紫色的Cooper韧带，皮肤中央缓缓凹陷，形成一个诡异的"酒窝"...'},{name:"多灶凹陷",description:"乳房皮肤出现多个散在凹陷",feedback:"BOSS缠绕多处Cooper韧带，乳房皮肤出现多个散在凹陷，如星点分布，活动时牵拉感加剧..."},{name:"筋膜粘连",description:"韧带与胸壁筋膜粘连",feedback:"BOSS将Cooper韧带与胸壁筋膜粘连，凹陷部位固定不动，按压时伴随牵拉痛..."},{name:"凹陷破溃",description:"凹陷中心皮肤破溃",feedback:"BOSS持续收缩韧带，凹陷中心皮肤因缺血坏死，出现浅表破溃，渗出淡黄色液体..."}],week:2},orangePeel:{id:"orangePeel",name:"橘皮样改变BOSS",description:"淋巴回流障碍的具象化，皮肤呈现橘皮样外观",symptoms:["乳房皮肤粗糙","毛孔明显凹陷","呈现橘皮样改变"],science:{mechanism:"淋巴回流受阻，真皮层水肿，毛囊口明显凹陷",earlySigns:["皮肤毛孔粗大","皮肤增厚粗糙","呈现橘皮样"],medicalAdvice:"橘皮样改变是乳腺癌晚期表现，需紧急就医"},skills:[{name:"淋巴淤阻咒",description:"皮肤形成橘皮样纹理",feedback:"BOSS堵塞皮下淋巴管，皮肤逐渐增厚、水肿，毛孔处凹陷形成密集的橘皮样纹理..."},{name:"水肿蔓延",description:"水肿从乳房蔓延至胸壁",feedback:"BOSS扩大淋巴管阻塞范围，水肿从乳房蔓延至胸壁、腋窝，皮肤紧绷发亮，按压无凹陷..."},{name:"毛孔角化",description:"毛孔扩大变硬",feedback:"BOSS刺激水肿皮肤的毛囊角质增生，毛孔扩大变硬，橘皮纹理加粗，伴随皮肤瘙痒..."},{name:"淋巴管栓堵",description:"彻底阻塞主淋巴管",feedback:"BOSS形成实性淋巴栓，彻底阻塞主淋巴管，乳房呈球形肿胀，皮肤温度升高..."}],week:1},lymphNode:{id:"lymphNode",name:"腋下淋巴结肿大BOSS",description:"淋巴系统异常的化身，肿胀的淋巴结堵塞淋巴回流",symptoms:["腋下出现肿块","淋巴结肿大","可能伴有压痛"],science:{mechanism:"淋巴系统免疫功能异常，淋巴结反应性增生或转移",earlySigns:["腋下无痛肿块","淋巴结质地变硬","活动度差"],medicalAdvice:"腋下淋巴结肿大需警惕乳腺癌转移，应及时检查"},skills:[{name:"淋巴粘连术",description:"淋巴结融合成团",feedback:"BOSS向腋窝扩散，淋巴结由小变大、由少变多，质地坚硬如石，最终融合成团并与周围组织粘连..."},{name:"淋巴结破溃",description:"淋巴结破溃流脓",feedback:"BOSS侵蚀肿大淋巴结，皮肤表面破溃，流出暗红色血性脓液，伴随恶臭..."},{name:"区域扩散",description:"肿大淋巴结蔓延",feedback:"BOSS沿淋巴链扩散，肿大淋巴结从腋窝蔓延至锁骨上、胸骨旁，形成串珠状硬块..."},{name:"淋巴压迫",description:"压迫腋静脉与神经",feedback:"BOSS融合的淋巴结团压迫腋静脉与神经，导致上臂肿胀、麻木，活动受限..."}],week:2},nippleDischarge:{id:"nippleDischarge",name:"乳头溢液BOSS",description:"乳腺分泌异常的化身，异常分泌物从乳头流出",symptoms:["乳头有异常分泌物","分泌物可能带血","单侧单孔溢液"],science:{mechanism:"乳腺导管内病变刺激分泌细胞异常分泌",earlySigns:["乳头溢液","溢液带血","自发性溢液"],medicalAdvice:"乳头溢液尤其是血性溢液需及时就医检查"},skills:[{name:"导管逆流",description:"暗红色液体从乳头渗出",feedback:"BOSS腐蚀乳腺导管，暗红色液体从乳头单孔渗出，在非哺乳期异常流淌..."},{name:"溢液增多",description:"溢液变为持续性",feedback:"BOSS扩张病变导管，乳头溢液从间断性变为持续性，液体量增多，呈鲜红色血性..."},{name:"多管溢液",description:"多个乳孔同时渗出",feedback:"BOSS侵犯多个乳腺导管，乳头多个乳孔同时渗出溢液，液体混合黏液与凝血块..."},{name:"导管闭塞",description:"导管内形成癌栓",feedback:"BOSS在导管内形成癌栓，溢液突然停止，乳头出现胀痛，触摸可及导管内硬块..."}],week:1},nippleRetraction:{id:"nippleRetraction",name:"乳头内陷BOSS",description:"乳腺导管挛缩的具象化，牵拉乳头向内凹陷",symptoms:["乳头向内凹陷","乳头位置异常","可能伴有分泌物"],science:{mechanism:"乳腺导管周围纤维组织挛缩，牵拉乳头向内",earlySigns:["乳头逐渐内陷","乳晕皮肤皱缩","乳头方向改变"],medicalAdvice:"突然出现乳头内陷需警惕乳腺癌，应及时就医"},skills:[{name:"纤维牵拉",description:"乳头被牵向一侧",feedback:"BOSS收缩乳管纤维，乳头被无形之力牵向一侧，逐渐扁平、回缩，最终陷入乳晕后方..."},{name:"乳头固定",description:"乳头与乳晕组织粘连",feedback:"BOSS将乳头与乳晕组织粘连固定，内陷乳头无法手动拉出，伴随乳晕皮肤增厚..."},{name:"乳头破溃",description:"乳头顶端破溃结痂",feedback:"BOSS持续牵拉乳管，内陷乳头因摩擦与缺血，顶端出现破溃、结痂，反复不愈..."},{name:"乳晕浸润",description:"乳晕出现硬质斑块",feedback:"BOSS向乳晕扩散，乳晕出现硬质斑块，与内陷乳头连成一体，边界模糊..."}],week:2}};function Eg(){const{state:i,dispatch:u,startBattle:f,getBossesForMemory:r}=it(),h=Ja[i.playthrough],m=b=>{for(const p of[1,2,3])if(r(p).includes(b))return p;return null},v=b=>{const p=m(b),N=i.unlockedBosses.includes(b),j=i.defeatedBosses.includes(b);return{isUnlocked:N,isDefeated:j,canChallenge:N&&!j,memoryPoint:p}},M=b=>{const{isUnlocked:p,canChallenge:N}=v(b);!p||!N||f(b)};return l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:38:5",className:"min-h-screen bg-gradient-to-b from-red-950 to-gray-900 p-4",children:[l.jsxs(we,{"code-path":"src\\sections\\BossEntry.tsx:40:7",variant:"ghost",className:"absolute top-4 left-4 text-gray-400",onClick:()=>u({type:"SET_PHASE",payload:"microWorldMain"}),children:[l.jsx(Za,{"code-path":"src\\sections\\BossEntry.tsx:45:9",className:"w-5 h-5 mr-1"}),"返回主城"]}),l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:50:7",className:"text-center pt-16 pb-8",children:[l.jsx("h2",{"code-path":"src\\sections\\BossEntry.tsx:51:9",className:"text-2xl font-bold text-red-400",children:"病变的乳腺组织"}),l.jsxs("p",{"code-path":"src\\sections\\BossEntry.tsx:52:9",className:"text-sm text-red-300/70",children:["BOSS挑战区 · 第",i.playthrough,"周目"]})]}),l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:56:7",className:"max-w-lg mx-auto space-y-4",children:h.map(b=>{const p=hr[b],N=v(b),j=N.isUnlocked&&N.canChallenge&&!N.isDefeated;return l.jsx(Yt,{"code-path":"src\\sections\\BossEntry.tsx:63:13",className:`${N.isDefeated?"bg-green-100 border-green-300":"bg-red-100 border-red-300"} 
                ${j?"cursor-pointer hover:shadow-lg":"opacity-70"} 
                transition-all hover:scale-[1.01]`,onClick:()=>M(b),children:l.jsxs(Kt,{"code-path":"src\\sections\\BossEntry.tsx:70:15",className:"p-4 flex items-center justify-between",children:[l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:71:17",className:"flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:72:19",className:"w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\BossEntry.tsx:73:21",src:os(b,N.isDefeated?"虚弱":"狰狞"),alt:p.name,className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:79:19",children:[l.jsx("h3",{"code-path":"src\\sections\\BossEntry.tsx:80:21",className:"font-bold text-gray-800",children:p.name}),l.jsx("p",{"code-path":"src\\sections\\BossEntry.tsx:81:21",className:"text-xs text-gray-600",children:p.description}),l.jsxs("p",{"code-path":"src\\sections\\BossEntry.tsx:82:21",className:"text-xs text-gray-500 mt-1",children:["解锁条件: 通关记忆点",N.memoryPoint||"-"]})]})]}),l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:87:17",children:N.isDefeated?l.jsxs("span",{"code-path":"src\\sections\\BossEntry.tsx:89:21",className:"inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full",children:[l.jsx(Bc,{"code-path":"src\\sections\\BossEntry.tsx:90:23",className:"w-3 h-3"}),"已击败"]}):j?l.jsxs("span",{"code-path":"src\\sections\\BossEntry.tsx:94:21",className:"inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs rounded-full",children:[l.jsx(fr,{"code-path":"src\\sections\\BossEntry.tsx:95:23",className:"w-3 h-3"}),"可挑战"]}):N.isUnlocked?l.jsxs("span",{"code-path":"src\\sections\\BossEntry.tsx:99:21",className:"inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white text-xs rounded-full",children:[l.jsx($a,{"code-path":"src\\sections\\BossEntry.tsx:100:23",className:"w-3 h-3"}),"需通关记忆点"]}):l.jsxs("span",{"code-path":"src\\sections\\BossEntry.tsx:104:21",className:"inline-flex items-center gap-1 px-3 py-1 bg-gray-500 text-white text-xs rounded-full",children:[l.jsx($a,{"code-path":"src\\sections\\BossEntry.tsx:105:23",className:"w-3 h-3"}),"未解锁"]})})]})},b)})}),l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:117:7",className:"max-w-lg mx-auto mt-8 p-4 bg-black/30 rounded-xl",children:[l.jsxs("div",{"code-path":"src\\sections\\BossEntry.tsx:118:9",className:"flex justify-between items-center text-sm",children:[l.jsx("span",{"code-path":"src\\sections\\BossEntry.tsx:119:11",className:"text-gray-400",children:"挑战进度"}),l.jsxs("span",{"code-path":"src\\sections\\BossEntry.tsx:120:11",className:"text-red-400",children:[i.defeatedBosses.filter(b=>h.includes(b)).length," / ",h.length," 已击败"]})]}),l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:124:9",className:"mt-2 h-2 bg-gray-700 rounded-full overflow-hidden",children:l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:125:11",className:"h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all",style:{width:`${i.defeatedBosses.filter(b=>h.includes(b)).length/h.length*100}%`}})})]}),l.jsx("div",{"code-path":"src\\sections\\BossEntry.tsx:133:7",className:"max-w-lg mx-auto mt-4 p-4 bg-red-900/20 rounded-lg",children:l.jsxs("p",{"code-path":"src\\sections\\BossEntry.tsx:134:9",className:"text-xs text-red-300",children:[l.jsx("strong",{"code-path":"src\\sections\\BossEntry.tsx:135:11",children:"提示："}),"通关对应记忆点后即可挑战本周目的症状BOSS。 击败本周目全部3个BOSS即可进入下一阶段。"]})})]})}function Og(){const{state:i,dispatch:u,useSkillInBattle:f,defeatBoss:r}=it(),[h]=D.useState(i.currentBoss),[m,v]=D.useState(!1),[M,b]=D.useState(null),[p,N]=D.useState(0),[j,U]=D.useState({show:!1,text:"",type:null}),[W,ee]=D.useState(!1),[F,J]=D.useState(!1),[K,se]=D.useState(!1),[I,fe]=D.useState(!1),ie=hr[h],_=ie.skills,z=i.currentPerspective==="child"?"懂事":"坚定",G=Ja[i.playthrough],re=i.defeatedBosses.filter(V=>G.includes(V)).length,oe=i.equippedSkills.map(V=>vh[V]).filter(Boolean),me=V=>i.beSkillSources[V];D.useEffect(()=>{K||(se(!0),setTimeout(()=>{const V=_[0];U({show:!0,text:`${ie.name} 使用了 ${V?.name}！
${V?.feedback}`,type:"boss"}),ee(!1)},500))},[K,ie,_]);const ne=()=>{if(j.show)if(U({show:!1,text:"",type:null}),j.type==="boss")ee(!0);else if(j.type==="player")if((i.battleState?.usedSkills.length||0)>=4)I||(fe(!0),r(h)),b("win"),v(!0);else{const de=p+1;N(de),setTimeout(()=>{const S=_[de];U({show:!0,text:`${ie.name} 使用了 ${S?.name}！
${S?.feedback}`,type:"boss"}),ee(!1)},300)}else j.type==="negative"&&J(!0)},lt=()=>{J(!1),u({type:"SET_PHASE",payload:"beEnding"})},Ie=V=>{if(!(i.battleState?.usedSkills.includes(V.id)||M||!W))if(ee(!1),V.type==="negative"){U({show:!0,text:`你使用了负面技能【${V.name}】！
${V.effect}

眼前一黑，你感到一阵眩晕...`,type:"negative"});const de=me(V.id);f(V.id,!0,de)}else U({show:!0,text:`你使用了【${V.name}】！
${V.effect}

${V.description}`,type:"player"}),f(V.id,!1)},Ue=()=>{confirm("是否放弃战斗？")&&u({type:"SET_PHASE",payload:"bossEntry"})},T=()=>{M==="win"&&(re>=G.length?i.playthrough===1?u({type:"SET_PHASE",payload:"heEnding"}):u({type:"SET_PHASE",payload:"specialEnding"}):u({type:"SET_PHASE",payload:"bossEntry"}))},L=i.battleState?Math.max(0,100-i.battleState.usedSkills.length*25):100,R=()=>{switch(j.type){case"player":return"bg-blue-900/90 border-blue-500 text-blue-100";case"boss":return"bg-red-900/90 border-red-500 text-red-100";case"negative":return"bg-red-950/95 border-red-700 text-red-200";default:return"bg-gray-900/90 border-gray-500"}};return l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:185:5",className:"min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 p-4 relative",onClick:j.show&&!F?ne:void 0,children:[l.jsx("img",{"code-path":"src\\sections\\BossBattle.tsx:190:7",src:Gt("乳腺主城（黑雾笼罩）"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-25"}),l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:195:7",className:"absolute inset-0 bg-gradient-to-b from-gray-950/60 via-red-950/40 to-gray-950/90"}),F&&l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:199:9",className:"fixed inset-0 bg-black/90 z-[60] flex items-center justify-center",children:l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:200:11",className:"text-center max-w-md p-8",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:201:13",className:"text-6xl mb-4 animate-pulse",children:"😵"}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:202:13",className:"text-red-500 text-2xl mb-2",children:"眼前一黑..."}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:203:13",className:"text-red-400 text-lg mb-8",children:"你感到一阵眩晕"}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:204:13",className:"text-gray-400 mb-8",children:"你使用了负面技能，黑雾强化了BOSS，乳腺主城受到了严重损伤..."}),l.jsx(we,{"code-path":"src\\sections\\BossBattle.tsx:205:13",size:"lg",className:"bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg",onClick:lt,children:"继续"})]})}),l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:217:7",className:"relative z-10 h-screen flex flex-col",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:219:9",className:"flex justify-end p-4",children:l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:220:11",className:"bg-black/50 rounded-xl p-4 max-w-xs",children:[l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:221:13",className:"flex items-center gap-3 mb-2",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:222:15",className:"w-16 h-16 bg-gradient-to-br from-red-600 to-purple-800 rounded-full flex items-center justify-center animate-pulse overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\BossBattle.tsx:223:17",src:os(h,L<50?"虚弱":"狰狞"),alt:ie.name,className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:229:15",children:[l.jsx("h3",{"code-path":"src\\sections\\BossBattle.tsx:230:17",className:"text-red-400 font-bold",children:ie.name}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:231:17",className:"text-xs text-gray-400",children:ie.description})]})]}),l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:235:13",className:"mt-2",children:[l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:236:15",className:"flex justify-between text-xs text-gray-400 mb-1",children:[l.jsx("span",{"code-path":"src\\sections\\BossBattle.tsx:237:17",children:"HP"}),l.jsxs("span",{"code-path":"src\\sections\\BossBattle.tsx:238:17",children:[L,"%"]})]}),l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:240:15",className:"h-3 bg-gray-700 rounded-full overflow-hidden",children:l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:241:17",className:"h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500",style:{width:`${L}%`}})})]})]})}),l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:251:9",className:"flex-1 flex items-end p-4",children:l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:252:11",className:"bg-black/50 rounded-xl p-4",children:l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:253:13",className:"flex items-center gap-3",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:254:15",className:"w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden",children:l.jsx("img",{"code-path":"src\\sections\\BossBattle.tsx:255:17",src:mt("主角",z,i.currentPerspective||"adult"),alt:"守护者",className:"h-full w-full object-cover"})}),l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:261:15",children:[l.jsx("h3",{"code-path":"src\\sections\\BossBattle.tsx:262:17",className:"text-blue-400 font-bold",children:"守护者"}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:263:17",className:"text-xs text-gray-400",children:"健康状态"})]})]})})}),j.show?l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:272:11",className:`mx-4 mb-4 rounded-2xl p-6 border-2 ${R()} backdrop-blur-sm animate-in slide-in-from-bottom duration-300`,onClick:V=>V.stopPropagation(),children:[l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:276:13",className:"flex items-start gap-4",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:278:15",className:`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${j.type==="player"?"bg-blue-500":j.type==="boss"?"bg-red-500":"bg-red-700"}`,children:l.jsx("span",{"code-path":"src\\sections\\BossBattle.tsx:283:17",className:"text-2xl",children:j.type==="player"?"✨":j.type==="boss"?"👹":"⚠️"})}),l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:290:15",className:"flex-1",children:[l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:291:17",className:`text-sm font-medium mb-2 ${j.type==="player"?"text-blue-300":j.type==="boss"?"text-red-300":"text-red-400"}`,children:j.type==="player"?"我方行动":j.type==="boss"?"BOSS攻击":"危险！使用了负面技能"}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:300:17",className:"text-white text-lg leading-relaxed whitespace-pre-line",children:j.text})]})]}),j.type!=="negative"&&l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:308:15",className:"mt-6 text-center",children:l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:309:17",className:"text-white/60 text-sm animate-pulse",children:"点击任意位置继续"})})]}):l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:317:11",className:"bg-black/60 rounded-t-2xl p-4",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:319:13",className:"text-center mb-3",children:l.jsx("span",{"code-path":"src\\sections\\BossBattle.tsx:320:15",className:`text-sm px-4 py-1 rounded-full ${W?"bg-blue-500/30 text-blue-300":"bg-red-500/30 text-red-300"}`,children:W?"◆ 你的回合":"◆ BOSS回合"})}),l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:329:13",className:"grid grid-cols-2 gap-3 mb-4",children:oe.map(V=>{const de=i.battleState?.usedSkills.includes(V.id);return l.jsxs("button",{"code-path":"src\\sections\\BossBattle.tsx:334:19",disabled:de||M!==null||!W,className:`p-4 rounded-xl text-left transition-all ${de?"bg-gray-700 opacity-50 cursor-not-allowed":V.type==="negative"?"bg-red-900/50 hover:bg-red-800/50 border border-red-700":"bg-blue-900/50 hover:bg-blue-800/50 border border-blue-700"} ${!W&&!de?"opacity-50 cursor-not-allowed":""}`,onClick:()=>Ie(V),children:[l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:346:21",className:"flex items-center justify-between",children:[l.jsx("span",{"code-path":"src\\sections\\BossBattle.tsx:347:23",className:`font-medium ${V.type==="negative"?"text-red-300":"text-blue-300"}`,children:V.name}),V.type==="negative"&&l.jsx("span",{"code-path":"src\\sections\\BossBattle.tsx:353:25",className:"text-xs text-red-500",children:"⚠️"})]}),l.jsx("p",{"code-path":"src\\sections\\BossBattle.tsx:356:21",className:"text-xs text-gray-400 mt-1",children:V.description})]},V.id)})}),l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:363:13",className:"flex justify-end",children:l.jsx(we,{"code-path":"src\\sections\\BossBattle.tsx:364:15",variant:"ghost",size:"sm",className:"text-gray-400 hover:text-white",onClick:Ue,disabled:M!==null,children:"放弃战斗"})})]})]}),m&&M==="win"&&l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:380:9",className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50",children:l.jsxs("div",{"code-path":"src\\sections\\BossBattle.tsx:381:11",className:"bg-gray-900 rounded-2xl p-8 max-w-md text-center",children:[l.jsx("div",{"code-path":"src\\sections\\BossBattle.tsx:382:13",className:"text-6xl mb-4",children:"🎉"}),l.jsx("h3",{"code-path":"src\\sections\\BossBattle.tsx:383:13",className:"text-2xl font-bold text-green-400 mb-2",children:"战斗胜利！"}),l.jsxs("p",{"code-path":"src\\sections\\BossBattle.tsx:384:13",className:"text-gray-300 mb-4",children:["你成功驱散了",ie.name,"的黑雾！",l.jsx("br",{"code-path":"src\\sections\\BossBattle.tsx:386:15"}),"乳腺主城的细胞们安全了。"]}),l.jsxs("p",{"code-path":"src\\sections\\BossBattle.tsx:389:13",className:"text-gray-400 text-sm mb-4",children:["已击败BOSS: ",re,"/",G.length]}),l.jsx(we,{"code-path":"src\\sections\\BossBattle.tsx:392:13",className:"bg-green-500 hover:bg-green-600",onClick:T,children:"继续冒险"})]})})]})}function Ng(){const{state:i,dispatch:u}=it(),f=i.currentPerspective,r=Bh[f].possessive,h=()=>{const v=i.lastUsedNegativeSkillSource||i.currentMemoryPoint;u({type:"SET_MEMORY_POINT",payload:v}),u({type:"SET_PHASE",payload:"visualNovel"})},m=()=>{const v=i.lastUsedNegativeSkillSource;return v?`记忆点${v}`:"当前记忆点"};return l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:34:5",className:"min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden",children:[l.jsx("img",{"code-path":"src\\sections\\BEEnding.tsx:35:7",src:Gt("乳腺主城（黑雾笼罩）"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-25"}),l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:36:7",className:"absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-950/90"}),l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:38:7",className:"absolute inset-0 opacity-10",children:l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:39:9",className:"w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.3)_0%,_transparent_70%)]"})}),l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:43:7",className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:[l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:45:9",className:"text-center mb-8",children:[l.jsx("h1",{"code-path":"src\\sections\\BEEnding.tsx:46:11",className:"text-4xl font-bold text-gray-400 mb-2",children:"遗憾的结局"}),l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:47:11",className:"w-24 h-1 bg-gray-600 mx-auto rounded-full"})]}),l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:51:9",className:"max-w-2xl w-full bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-700",children:[l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:53:11",className:"text-center mb-6",children:[l.jsx("img",{"code-path":"src\\sections\\BEEnding.tsx:54:13",src:os("breastLump","狰狞"),alt:"BOSS",className:"mx-auto mb-4 max-h-36 object-contain drop-shadow-lg"}),l.jsx("p",{"code-path":"src\\sections\\BEEnding.tsx:55:13",className:"text-gray-400 text-sm",children:"医院诊室冷调场景，医生手持报告单轻声讲解"})]}),l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:61:11",className:"space-y-4 text-gray-300 leading-relaxed",children:[l.jsx("p",{"code-path":"src\\sections\\BEEnding.tsx:62:13",children:"微观乳腺世界的冒险，终究以遗憾收场。"}),l.jsx("p",{"code-path":"src\\sections\\BEEnding.tsx:65:13",children:"一次任性的选择，一次对健康的忽视，让负面的力量不断蔓延， 黑雾吞噬了家园，BOSS的伤害终是刻进了现实。"}),l.jsx("p",{"code-path":"src\\sections\\BEEnding.tsx:69:13",children:"当「恶性」二字出现在检查报告单上，才懂那些被忽略的小习惯， 早已成为压垮健康的最后一根稻草。"}),l.jsxs("p",{"code-path":"src\\sections\\BEEnding.tsx:73:13",className:"text-gray-400 italic border-l-4 border-gray-600 pl-4 my-6",children:["但冒险从未真正结束，微观世界的大门仍为你敞开， 回到记忆的起点，修正每一个选择，重拾守护的力量， 你依然有机会改写结局，守护好",r,"乳腺健康。"]}),l.jsx("p",{"code-path":"src\\sections\\BEEnding.tsx:78:13",className:"text-pink-400 font-medium text-center",children:"别放弃，从头再来，一切都还来得及。"})]})]}),l.jsxs("div",{"code-path":"src\\sections\\BEEnding.tsx:85:9",className:"mt-8 text-center",children:[l.jsxs("p",{"code-path":"src\\sections\\BEEnding.tsx:86:11",className:"text-gray-400 text-sm mb-4",children:["将返回",m(),"重新选择"]}),l.jsx(we,{"code-path":"src\\sections\\BEEnding.tsx:89:11",size:"lg",className:"bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-xl text-lg",onClick:h,children:"重新游玩该记忆点"})]})]}),l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:100:7",className:"absolute bottom-8 left-8 opacity-20",children:l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:101:9",className:"w-12 h-12 border-2 border-gray-500 rounded-full"})}),l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:103:7",className:"absolute top-12 right-12 opacity-10",children:l.jsx("div",{"code-path":"src\\sections\\BEEnding.tsx:104:9",className:"w-8 h-8 border-2 border-gray-500 rounded-full"})})]})}function jg(){const{state:i,dispatch:u}=it(),f=i.currentPerspective,r=Bh[f].possessive,h=mt("派蒙","欣慰"),m=()=>{u({type:"SET_PHASE",payload:"week2Transition"})};return l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:20:5",className:"min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden",children:[l.jsx("img",{"code-path":"src\\sections\\HEEnding.tsx:21:7",src:Gt("正规医院"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-30"}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:22:7",className:"absolute inset-0 bg-gradient-to-b from-pink-50/75 to-pink-100/90"}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:24:7",className:"absolute inset-0 opacity-20",children:l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:25:9",className:"w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.4)_0%,_transparent_70%)]"})}),l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:29:7",className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:[l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:31:9",className:"text-center mb-8",children:[l.jsx("h1",{"code-path":"src\\sections\\HEEnding.tsx:32:11",className:"text-4xl font-bold text-pink-600 mb-2",children:"一周目通关！"}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:33:11",className:"w-24 h-1 bg-pink-400 mx-auto rounded-full"})]}),l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:37:9",className:"max-w-2xl w-full bg-white/70 rounded-2xl p-8 backdrop-blur-sm border border-pink-200 shadow-lg",children:[l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:39:11",className:"text-center mb-6",children:[h&&l.jsx("img",{"code-path":"src\\sections\\HEEnding.tsx:40:24",src:h,alt:"派蒙",className:"mx-auto mb-4 max-h-36 object-contain drop-shadow-md"}),l.jsx("p",{"code-path":"src\\sections\\HEEnding.tsx:41:13",className:"text-pink-500 text-sm",children:"医院诊室暖光场景，医生手持报告单微笑递出"})]}),l.jsxs("div",{"code-path":"src\\sections\\HEEnding.tsx:47:11",className:"space-y-4 text-gray-700 leading-relaxed",children:[l.jsxs("p",{"code-path":"src\\sections\\HEEnding.tsx:48:13",children:["穿越微观乳腺世界的冒险落幕了，你用坚定的选择改掉了伤害乳腺的坏习惯， 成功驱散了所有黑雾，守护了",r,"乳腺家园。"]}),l.jsx("p",{"code-path":"src\\sections\\HEEnding.tsx:52:13",children:"当现实的检查报告单递到手中，「良性」二字是最好的答案 —— 微观世界的健康，终是照进了现实。"}),l.jsx("p",{"code-path":"src\\sections\\HEEnding.tsx:56:13",className:"text-pink-600 italic border-l-4 border-pink-400 pl-4 my-6",children:"往后的日子里，愿你始终保持健康的生活习惯，好好爱自己、爱身边人， 让这份守护延续，岁岁安康，万事顺遂。"}),l.jsx("p",{"code-path":"src\\sections\\HEEnding.tsx:60:13",className:"text-pink-500 text-center",children:"乳腺主城的派蒙和所有细胞，会一直为你祝福，为你守护～"})]})]}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:67:9",className:"mt-8",children:l.jsx(we,{"code-path":"src\\sections\\HEEnding.tsx:68:11",size:"lg",className:"bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-xl text-lg",onClick:m,children:"继续探索二周目"})})]}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:79:7",className:"absolute bottom-8 left-8 opacity-30",children:l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:80:9",className:"w-12 h-12 bg-pink-300 rounded-full animate-pulse"})}),l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:82:7",className:"absolute top-12 right-12 opacity-20",children:l.jsx("div",{"code-path":"src\\sections\\HEEnding.tsx:83:9",className:"w-8 h-8 bg-pink-400 rounded-full animate-bounce"})})]})}function kg(){const{startWeek2:i,dispatch:u}=it(),f=mt("派蒙","期待"),r=()=>{i(),u({type:"SET_PHASE",payload:"microWorldMain"})};return l.jsxs("div",{"code-path":"src\\sections\\Week2Transition.tsx:16:5",className:"min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col items-center justify-center p-6 relative overflow-hidden",children:[l.jsx("img",{"code-path":"src\\sections\\Week2Transition.tsx:17:7",src:Gt("大脑记忆中枢"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-30"}),l.jsx("div",{"code-path":"src\\sections\\Week2Transition.tsx:18:7",className:"absolute inset-0 bg-gradient-to-b from-amber-50/75 to-amber-100/90"}),l.jsxs("div",{"code-path":"src\\sections\\Week2Transition.tsx:20:7",className:"absolute inset-0 opacity-20",children:[l.jsx("div",{"code-path":"src\\sections\\Week2Transition.tsx:21:9",className:"absolute top-1/3 left-1/3 w-48 h-48 bg-amber-300 rounded-full blur-3xl animate-pulse"}),l.jsx("div",{"code-path":"src\\sections\\Week2Transition.tsx:22:9",className:"absolute bottom-1/3 right-1/3 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse"})]}),l.jsxs("div",{"code-path":"src\\sections\\Week2Transition.tsx:26:7",className:"relative z-10 max-w-lg w-full text-center",children:[f&&l.jsx("img",{"code-path":"src\\sections\\Week2Transition.tsx:28:20",src:f,alt:"派蒙",className:"mx-auto mb-6 max-h-40 object-contain drop-shadow-md"}),l.jsx("h2",{"code-path":"src\\sections\\Week2Transition.tsx:31:9",className:"text-3xl font-bold text-amber-700 mb-6",children:"时光回溯能力觉醒"}),l.jsx("div",{"code-path":"src\\sections\\Week2Transition.tsx:36:9",className:"bg-white/70 rounded-2xl p-6 backdrop-blur-sm border border-amber-200 shadow-lg mb-8",children:l.jsx("p",{"code-path":"src\\sections\\Week2Transition.tsx:37:11",className:"text-lg text-amber-800 leading-relaxed",children:"还有未击败的病症BOSS，神经细胞因心情愉悦激活时光回溯能力，记忆点锁定状态重置，即刻开启二次守护之旅！"})}),l.jsxs("div",{"code-path":"src\\sections\\Week2Transition.tsx:43:9",className:"bg-amber-50 rounded-xl p-4 mb-8 border border-amber-200",children:[l.jsx("h4",{"code-path":"src\\sections\\Week2Transition.tsx:44:11",className:"font-bold text-amber-700 mb-3",children:"二周目特性"}),l.jsxs("ul",{"code-path":"src\\sections\\Week2Transition.tsx:45:11",className:"space-y-2 text-sm text-amber-600 text-left",children:[l.jsxs("li",{"code-path":"src\\sections\\Week2Transition.tsx:46:13",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\Week2Transition.tsx:47:15",className:"w-2 h-2 bg-amber-400 rounded-full"}),"记忆点全部解锁，可无限重玩"]}),l.jsxs("li",{"code-path":"src\\sections\\Week2Transition.tsx:50:13",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\Week2Transition.tsx:51:15",className:"w-2 h-2 bg-amber-400 rounded-full"}),"新增回退按钮，可返回上一句剧情"]}),l.jsxs("li",{"code-path":"src\\sections\\Week2Transition.tsx:54:13",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\Week2Transition.tsx:55:15",className:"w-2 h-2 bg-amber-400 rounded-full"}),"挑战3个全新BOSS"]}),l.jsxs("li",{"code-path":"src\\sections\\Week2Transition.tsx:58:13",className:"flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\Week2Transition.tsx:59:15",className:"w-2 h-2 bg-amber-400 rounded-full"}),"解锁专属治愈结局"]})]})]}),l.jsx(we,{"code-path":"src\\sections\\Week2Transition.tsx:66:9",size:"lg",className:"bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 rounded-xl text-xl",onClick:r,children:"继续探索"})]})]})}function Tg(){const{state:i,resetGame:u}=it(),[f,r]=D.useState(0),[h,m]=D.useState(!1),[v,M]=D.useState(!1),[b,p]=D.useState(!1),[N,j]=D.useState(!1),U=i.currentPerspective,W=[{speaker:"旁白",text:'老家客厅，夕阳斜照。老人刚挂完和女儿的视频电话，手里摩挲着体检单上"良性"两个字，眼眶微红。'},{speaker:"旁白",text:'客厅的木质五斗柜上，摆着一排老物件：女儿小时候抱到掉毛的布娃娃"小花"、1998年拍的全家福相框、儿子儿时玩的铁皮小汽车。'},{speaker:"旁白",text:"一缕细碎的暖金色星光从窗外飘进来——是乳腺主城的健康星光，轻轻落在五斗柜上，顺着相框边缘滑到布娃娃小花身上。"},{text:"小花的布制小眼睛，竟悄悄眨了一下。"},{speaker:"旁白",text:'深夜，老人卧室。老人睡得浅，想伸手摸床头柜的水杯，刚抬胳膊，就听到轻轻的"哒哒"声。'},{speaker:"旁白",text:"是铁皮小汽车从五斗柜滑下来，顺着床沿慢慢滚到床头柜边，把水杯推到老人手边。"},{speaker:"旁白",text:"布娃娃小花从枕头边坐起来，布制的小手拿着老人的降压药，轻轻放在水杯旁。"},{speaker:"老人",text:"是你们啊……我的小宝贝们，来陪奶奶了。"},{speaker:"旁白",text:"三天后，女儿推开家门，第一眼就看到客厅的五斗柜——布娃娃小花坐在相框上，两只小手扒着相框边缘，像在跟她打招呼。"},{speaker:"旁白",text:"铁皮小汽车停在相框前，车头对着门口，像在等她回家。"},{speaker:"女儿",text:"妈，对不起，以前总让你一个人……以后我调回老家，天天陪着你。"},{speaker:"旁白",text:'慢慢的，小区里的老人们都知道了老人的"神奇老物件"，每天都有人来跟小花"问健康"。'},{speaker:"旁白",text:"小花指一指青菜，就是让多吃蔬菜；铁皮小汽车转一圈，就是让多散步。"},{speaker:"旁白",text:'这些老物件，成了社区的"健康小信使"，而老人，成了社区的健康宣传员。'},{speaker:"旁白",text:"傍晚，老家小院，夕阳把天空染成暖金色。老人坐在藤椅上，女儿给她剥橘子，布娃娃小花靠在老人腿上，铁皮小汽车在脚边绕圈。"},{speaker:"老人",text:"谢谢你们啊，小宝贝们。"},{speaker:"旁白",text:'小花的小脑袋蹭了蹭老人的脸，星光落在老人的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟老人说："奶奶，要一直健健康康的呀～"'}],ee=[{speaker:"旁白",text:"医院乳腺科病房，清晨的阳光斜斜洒在白色病床上。小女孩猛地睁开眼，额头还带着一点薄汗。"},{speaker:"旁白",text:"梦里的画面还清晰着：乳腺主城里粉色的小精灵围着她，一起打碎了黑乎乎的硬块BOSS。"},{speaker:"旁白",text:"她扑到妈妈的病床边，妈妈刚做完良性乳腺结节切除手术，正靠在床头看着她，眼里带着温柔的笑意。"},{speaker:"小女孩",text:"妈妈！我梦见我去了你身体里的小城堡，好多粉色小精灵和我一起，打跑了让你疼的怪物！你有没有感觉好一点？"},{speaker:"妈妈",text:"宝贝，妈妈也做了一模一样的梦。梦见我的小宝贝变成小战士，跟着亮晶晶的小精灵，把那些硬块都赶走了。"},{speaker:"旁白",text:"一缕细碎的暖粉色星光，从病房的窗户缝里飘进来，轻轻落在妈妈的胸口纱布上——那是乳腺主城里的小精灵，跟着母女共梦的纽带，从梦境飘到了现实。"},{speaker:"妈妈",text:"宝贝，妈妈胸口突然不疼了，暖暖的，像有小太阳贴在上面。"},{speaker:"小女孩",text:"妈妈！你看！小精灵真的来了！它们变成星光了！"},{speaker:"旁白",text:"接下来的几天，星光小精灵就一直守在病房里——小女孩给妈妈喂水，星光会绕着水杯转一圈；妈妈躺着无聊，小女孩给她唱儿歌，星光会跟着歌声的节奏飘。"},{speaker:"旁白",text:"星光在病房里摆成小星星、小花朵的样子，给妈妈带来欢乐。"},{speaker:"旁白",text:"小女孩回到学校，想起之前嘲笑过小雨（小雨的妈妈也有乳腺问题），主动找到小雨道歉。"},{speaker:"小女孩",text:"小雨，对不起，我之前不该嘲笑你。乳腺不舒服不是丢人的事，有好多粉色星光小精灵，会保护我们的妈妈。"},{speaker:"旁白",text:"小女孩把星光精灵和妈妈的故事，悄悄告诉了班里的同学们，大家都听得入了迷。"},{speaker:"旁白",text:'班里的孩子们自发成立了"妈妈守护小队"，每天提醒妈妈规律作息、少生气、定期体检。'},{speaker:"旁白",text:"傍晚的阳台，夕阳把天空染成暖橙色，妈妈坐在藤椅上，小女孩趴在她的腿上。无数缕粉色的星光小精灵，绕着母女俩慢悠悠地飘。"},{speaker:"妈妈",text:"谢谢我的小宝贝，谢谢星光小精灵。以后妈妈会一直健健康康的，陪着我的小宝贝长大。"},{speaker:"小女孩和妈妈",text:"我们一起，守护彼此，一直在一起～"}],F=[{speaker:"旁白",text:"医院乳腺科病房，白色床单被罩，阳光透过窗户洒在床头。主角从乳腺主城的梦境中醒来，胸口的闷痛已消失不见，取而代之的是淡淡的暖意。"},{speaker:"医生",text:"恭喜你，结节是良性的，以后保持健康习惯，定期复查就行。"},{speaker:"旁白",text:"一缕柔白星光从窗外飘进来，轻轻落在她的手背上。星光顺着手臂往上爬，落在她的胸口。"},{speaker:"旁白",text:'眼前突然闪过童年的画面：小时候，她摔倒哭着回家，妈妈也是这样轻轻揉着她的伤口，说"疼了就说，不用硬扛"。'},{speaker:"旁白",text:"星光映出童年的小院：小时候，她因为考试没考好，躲在院子里哭，妈妈走过来，轻轻擦去她的眼泪。"},{speaker:"妈妈（回忆）",text:"宝贝，努力就好，不用逼自己做第一名，你开心健康，比什么都重要。"},{speaker:"旁白",text:'她想起自己为了业绩熬夜、对着家人发脾气，不就是怕"不够好"吗？而妈妈从小教她的，从来都不是"必须优秀"，而是"好好爱自己"。'},{speaker:"旁白",text:"「回溯记忆点2：职场边界的建立」星光映出童年的餐桌。"},{speaker:"妈妈（回忆）",text:"宝贝，以后不管做什么工作，都要守住自己的底线，身体是自己的，不用为了讨好别人委屈自己。"},{speaker:"旁白",text:'她想起职场酒局上，自己一次次被迫拼酒的样子——妈妈早就教过她要守边界，是她自己为了"合群"，慢慢丢了底线。'},{speaker:"旁白",text:"「回溯记忆点3：理性养生的觉醒」星光映出童年的厨房。"},{speaker:"妈妈（回忆）",text:"宝贝，健康不是靠吃保健品，是靠好好吃饭、好好睡觉。"},{speaker:"旁白",text:'她想起自己跟风买的三无减肥药——妈妈早就教过她科学养生，是她自己被"快速变美"的噱头冲昏了头。'},{speaker:"旁白",text:"病房门被推开，妈妈提着保温桶走进来。主角扑进妈妈怀里，放声大哭。"},{speaker:"主角",text:"妈，对不起，我以后再也不熬夜、不喝酒、不乱吃保健品了，我要好好爱自己，不让你担心。"},{speaker:"妈妈",text:"傻孩子，知道错了就好，妈妈从来没指望你多优秀，只希望你健健康康、开开心心的。"},{speaker:"旁白",text:'出院后，主角回到职场，开始了一系列"小改变"：拒绝无意义的酒局、按时下班、每周健身三次、定期体检。'},{speaker:"旁白",text:"她把自己的经历写成一篇《乳腺健康日记》，发在公司内网，没想到引发了全公司的关注。"},{speaker:"旁白",text:'公司开始推行"健康工作制"：禁止强制加班、提供健身补贴、每年组织全员体检。'},{speaker:"旁白",text:"傍晚，主角站在公司楼下，夕阳把天空染成暖橙色。无数缕柔白的星光小精灵，绕着她慢悠悠地飘。"},{speaker:"主角",text:"谢谢星光小精灵，谢谢妈妈，更谢谢那个终于学会爱自己的我。"},{speaker:"旁白",text:'星光落在她的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟她说："你终于学会爱自己了，以后也要一直健健康康的呀～"'}],K=(()=>{switch(U){case"child":return ee;case"adult":return F;case"elder":return W;default:return W}})(),se=K[f],I=f>=K.length-1;D.useEffect(()=>{if(v&&!I){const ne=setTimeout(()=>{fe()},5e3);return()=>clearTimeout(ne)}},[v,f,I]);const fe=()=>{if(h){m(!1);return}f<K.length-1&&r(f+1)},ie=()=>{f>0&&r(f-1)},_=()=>{j(!0)},z=()=>{u()},G=()=>{switch(U){case"child":return"from-pink-900/80 to-pink-950";case"adult":return"from-blue-900/80 to-blue-950";case"elder":return"from-amber-900/80 to-amber-950";default:return"from-amber-900/80 to-amber-950"}},re=ne=>ne?ne==="老人"?"👵":ne==="女儿"?"👩":ne==="小女孩"?"👧":ne==="妈妈"?"👩":ne==="小女孩和妈妈"?"👩‍👧":ne==="主角"?"👩‍💼":ne==="医生"?"👨‍⚕️":ne==="妈妈（回忆）"?"👩‍🦳":ne==="旁白"?"📖":"👤":null,oe=()=>{switch(U){case"child":return"pink";case"adult":return"blue";case"elder":return"amber";default:return"amber"}};if(N)return l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:199:7",className:"min-h-screen bg-white p-6 flex flex-col",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:201:9",className:"text-center pt-8 pb-8",children:[l.jsx("h1",{"code-path":"src\\sections\\SpecialEnding.tsx:202:11",className:"text-3xl font-bold text-red-600",children:"乳腺健康科普核心数据"}),l.jsx("p",{"code-path":"src\\sections\\SpecialEnding.tsx:203:11",className:"text-gray-500 mt-2",children:"了解三阴性乳腺癌，守护女性健康"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:207:9",className:"flex-1 max-w-4xl mx-auto w-full space-y-6 pb-24",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:209:11",className:"bg-red-50 rounded-xl p-6 border border-red-200",children:[l.jsxs("h2",{"code-path":"src\\sections\\SpecialEnding.tsx:210:13",className:"text-xl font-bold text-red-700 mb-4 flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:211:15",className:"text-2xl",children:"🔬"}),"什么是三阴性乳腺癌？"]}),l.jsxs("p",{"code-path":"src\\sections\\SpecialEnding.tsx:214:13",className:"text-gray-700 leading-relaxed",children:["三阴性乳腺癌（Triple-Negative Breast Cancer, TNBC）是指雌激素受体（ER）、孕激素受体（PR）和人表皮生长因子受体2（HER2） 均为阴性的乳腺癌类型，约占所有乳腺癌的",l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:216:34",className:"font-bold text-red-600",children:"15%-20%"}),"。"]})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:221:11",className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:222:13",className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:223:15",className:"text-4xl font-bold text-orange-600",children:"15-20%"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:224:15",className:"text-sm text-gray-600 mt-1",children:"占乳腺癌比例"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:226:13",className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:227:15",className:"text-4xl font-bold text-orange-600",children:"40-50岁"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:228:15",className:"text-sm text-gray-600 mt-1",children:"高发年龄段"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:230:13",className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:231:15",className:"text-4xl font-bold text-orange-600",children:"3-5年"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:232:15",className:"text-sm text-gray-600 mt-1",children:"复发高峰期"})]})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:237:11",className:"bg-yellow-50 rounded-xl p-6 border border-yellow-200",children:[l.jsxs("h2",{"code-path":"src\\sections\\SpecialEnding.tsx:238:13",className:"text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:239:15",className:"text-2xl",children:"⚠️"}),"疾病特点与风险"]}),l.jsxs("ul",{"code-path":"src\\sections\\SpecialEnding.tsx:242:13",className:"space-y-3 text-gray-700",children:[l.jsxs("li",{"code-path":"src\\sections\\SpecialEnding.tsx:243:15",className:"flex items-start gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:244:17",className:"text-yellow-600 mt-1",children:"•"}),l.jsxs("span",{"code-path":"src\\sections\\SpecialEnding.tsx:245:17",children:[l.jsx("strong",{"code-path":"src\\sections\\SpecialEnding.tsx:245:23",children:"侵袭性强："}),"肿瘤细胞分化差、增殖快，易发生远处转移"]})]}),l.jsxs("li",{"code-path":"src\\sections\\SpecialEnding.tsx:247:15",className:"flex items-start gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:248:17",className:"text-yellow-600 mt-1",children:"•"}),l.jsxs("span",{"code-path":"src\\sections\\SpecialEnding.tsx:249:17",children:[l.jsx("strong",{"code-path":"src\\sections\\SpecialEnding.tsx:249:23",children:"预后较差："}),"5年生存率约77%，低于其他类型乳腺癌"]})]}),l.jsxs("li",{"code-path":"src\\sections\\SpecialEnding.tsx:251:15",className:"flex items-start gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:252:17",className:"text-yellow-600 mt-1",children:"•"}),l.jsxs("span",{"code-path":"src\\sections\\SpecialEnding.tsx:253:17",children:[l.jsx("strong",{"code-path":"src\\sections\\SpecialEnding.tsx:253:23",children:"治疗选择有限："}),"缺乏内分泌治疗和靶向治疗靶点"]})]}),l.jsxs("li",{"code-path":"src\\sections\\SpecialEnding.tsx:255:15",className:"flex items-start gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:256:17",className:"text-yellow-600 mt-1",children:"•"}),l.jsxs("span",{"code-path":"src\\sections\\SpecialEnding.tsx:257:17",children:[l.jsx("strong",{"code-path":"src\\sections\\SpecialEnding.tsx:257:23",children:"复发风险高："}),"术后3-5年为复发高峰期"]})]})]})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:263:11",className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[l.jsxs("h2",{"code-path":"src\\sections\\SpecialEnding.tsx:264:13",className:"text-xl font-bold text-green-700 mb-4 flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:265:15",className:"text-2xl",children:"🔍"}),"早期筛查建议"]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:268:13",className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:269:15",className:"bg-white rounded-lg p-4",children:[l.jsx("h3",{"code-path":"src\\sections\\SpecialEnding.tsx:270:17",className:"font-bold text-green-700 mb-2",children:"20-39岁"}),l.jsx("p",{"code-path":"src\\sections\\SpecialEnding.tsx:271:17",className:"text-sm text-gray-600",children:"每3年进行一次乳腺临床检查"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:273:15",className:"bg-white rounded-lg p-4",children:[l.jsx("h3",{"code-path":"src\\sections\\SpecialEnding.tsx:274:17",className:"font-bold text-green-700 mb-2",children:"40岁以上"}),l.jsx("p",{"code-path":"src\\sections\\SpecialEnding.tsx:275:17",className:"text-sm text-gray-600",children:"每年进行乳腺X线检查和临床检查"})]})]})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:281:11",className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[l.jsxs("h2",{"code-path":"src\\sections\\SpecialEnding.tsx:282:13",className:"text-xl font-bold text-blue-700 mb-4 flex items-center gap-2",children:[l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:283:15",className:"text-2xl",children:"💪"}),"预防措施"]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:286:13",className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:287:15",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:288:17",className:"text-3xl mb-2",children:"😴"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:289:17",className:"text-sm text-gray-700",children:"规律作息"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:291:15",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:292:17",className:"text-3xl mb-2",children:"🥗"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:293:17",className:"text-sm text-gray-700",children:"健康饮食"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:295:15",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:296:17",className:"text-3xl mb-2",children:"🏃‍♀️"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:297:17",className:"text-sm text-gray-700",children:"适量运动"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:299:15",className:"text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:300:17",className:"text-3xl mb-2",children:"😊"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:301:17",className:"text-sm text-gray-700",children:"保持心情"})]})]})]}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:307:11",className:"text-center text-xs text-gray-400",children:"数据来源：中国抗癌协会乳腺癌诊治指南、美国癌症协会（ACS）"})]}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:313:9",className:"fixed bottom-0 left-0 right-0 bg-white border-t p-4",children:l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:314:11",className:"max-w-4xl mx-auto",children:l.jsxs(we,{"code-path":"src\\sections\\SpecialEnding.tsx:315:13",size:"lg",className:"w-full bg-red-500 hover:bg-red-600 text-white",onClick:z,children:[l.jsx(ES,{"code-path":"src\\sections\\SpecialEnding.tsx:320:15",className:"w-5 h-5 mr-2"}),"返回主界面"]})})})]});const me=oe();return l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:332:5",className:`min-h-screen bg-gradient-to-b ${G()} relative overflow-hidden`,onClick:fe,children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:337:7",className:"absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none",children:l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:338:9",className:"text-9xl",children:[U==="child"&&"👩‍👧",U==="adult"&&"💼",U==="elder"&&"🏠"]})}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:346:7",className:"absolute top-8 left-0 right-0 text-center z-10",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:347:9",className:"text-5xl mb-2",children:"🌟"}),l.jsx("h1",{"code-path":"src\\sections\\SpecialEnding.tsx:348:9",className:"text-3xl font-bold text-white mb-1",children:"完美通关！"}),l.jsxs("p",{"code-path":"src\\sections\\SpecialEnding.tsx:349:9",className:"text-white/70 text-sm",children:[U==="child"&&"幼年线专属结局",U==="adult"&&"青壮年线专属结局",U==="elder"&&"老年线专属结局"]})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:357:7",className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30",children:[l.jsxs("button",{"code-path":"src\\sections\\SpecialEnding.tsx:358:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${f>0?"bg-purple-500/50 hover:bg-purple-500/70 text-white/70 hover:text-white":"bg-gray-500/30 text-gray-500 cursor-not-allowed"}`,onClick:ne=>{ne.stopPropagation(),ie()},disabled:f===0,children:[l.jsx(Oc,{"code-path":"src\\sections\\SpecialEnding.tsx:367:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:368:11",className:"text-xs",children:"回退"})]}),l.jsxs("button",{"code-path":"src\\sections\\SpecialEnding.tsx:370:9",className:`p-2 rounded-lg transition-all flex items-center gap-1 ${v?"bg-pink-500/70 text-white":"bg-black/50 text-white/70 hover:text-white"}`,onClick:ne=>{ne.stopPropagation(),M(!v)},children:[l.jsx(Wa,{"code-path":"src\\sections\\SpecialEnding.tsx:374:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:375:11",className:"text-xs",children:"自动"})]}),l.jsxs("button",{"code-path":"src\\sections\\SpecialEnding.tsx:377:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:ne=>{ne.stopPropagation(),m(!h)},children:[l.jsx(Nc,{"code-path":"src\\sections\\SpecialEnding.tsx:381:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:382:11",className:"text-xs",children:"隐藏"})]}),l.jsxs("button",{"code-path":"src\\sections\\SpecialEnding.tsx:384:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:ne=>{ne.stopPropagation(),fe()},children:[l.jsx(jc,{"code-path":"src\\sections\\SpecialEnding.tsx:388:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:389:11",className:"text-xs",children:"快进"})]}),l.jsxs("button",{"code-path":"src\\sections\\SpecialEnding.tsx:391:9",className:"p-2 bg-black/50 hover:bg-black/70 rounded-lg text-white/70 hover:text-white transition-all flex items-center gap-1",onClick:ne=>{ne.stopPropagation(),p(!0)},children:[l.jsx(kc,{"code-path":"src\\sections\\SpecialEnding.tsx:395:11",className:"w-4 h-4"}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:396:11",className:"text-xs",children:"设置"})]})]}),!h&&l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:402:9",className:"absolute bottom-16 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 z-20 border border-white/10",children:[se?.speaker&&l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:405:13",className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:406:15",className:`w-10 h-10 bg-${me}-400 rounded-full flex items-center justify-center text-lg`,children:re(se.speaker)}),l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:409:15",className:`text-${me}-300 font-medium`,children:se.speaker})]}),l.jsx("p",{"code-path":"src\\sections\\SpecialEnding.tsx:414:11",className:`text-white text-lg leading-relaxed ${se?.speaker==="旁白"?"text-gray-300":""}`,children:se?.text}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:421:11",className:"flex justify-between items-center mt-4 pt-3 border-t border-white/10",children:[l.jsxs("span",{"code-path":"src\\sections\\SpecialEnding.tsx:422:13",className:"text-white/50 text-xs",children:[f+1," / ",K.length]}),!I&&l.jsx("span",{"code-path":"src\\sections\\SpecialEnding.tsx:426:15",className:"text-white/50 text-xs animate-pulse",children:"点击继续 →"})]})]}),I&&l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:434:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-40",onClick:ne=>ne.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:438:11",className:"max-w-md w-full p-6 text-center",children:[l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:439:13",className:"text-6xl mb-4",children:"🎉"}),l.jsx("h2",{"code-path":"src\\sections\\SpecialEnding.tsx:440:13",className:"text-2xl font-bold text-white mb-2",children:"剧情体验完成！"}),l.jsx("p",{"code-path":"src\\sections\\SpecialEnding.tsx:441:13",className:"text-white/70 mb-6",children:"两次穿越微观乳腺世界的冒险，你用智慧和勇气守护了乳腺健康。"}),l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:444:13",className:"space-y-3",children:l.jsxs(we,{"code-path":"src\\sections\\SpecialEnding.tsx:445:15",size:"lg",className:`w-full bg-${me}-500 hover:bg-${me}-600 text-white`,onClick:_,children:[l.jsx(dh,{"code-path":"src\\sections\\SpecialEnding.tsx:450:17",className:"w-5 h-5 mr-2"}),"查看乳腺健康科普"]})})]})}),b&&l.jsx("div",{"code-path":"src\\sections\\SpecialEnding.tsx:460:9",className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:ne=>ne.stopPropagation(),children:l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:464:11",className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[l.jsx("h3",{"code-path":"src\\sections\\SpecialEnding.tsx:465:13",className:"text-lg font-bold mb-4",children:"设置"}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:466:13",className:"space-y-4",children:[l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:467:15",children:[l.jsx("label",{"code-path":"src\\sections\\SpecialEnding.tsx:468:17",className:"text-sm text-gray-600",children:"文字速度"}),l.jsx("input",{"code-path":"src\\sections\\SpecialEnding.tsx:469:17",type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),l.jsxs("div",{"code-path":"src\\sections\\SpecialEnding.tsx:471:15",children:[l.jsx("label",{"code-path":"src\\sections\\SpecialEnding.tsx:472:17",className:"text-sm text-gray-600",children:"音量"}),l.jsx("input",{"code-path":"src\\sections\\SpecialEnding.tsx:473:17",type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),l.jsx(we,{"code-path":"src\\sections\\SpecialEnding.tsx:476:13",className:"w-full mt-4",onClick:()=>p(!1),children:"关闭"})]})})]})}const Xp={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},Zp={cellRepair:"修复受损的乳腺细胞，恢复组织健康",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境",accompanyCare:"多陪伴妈妈，让她好好休息",willfulClingy:"缠着妈妈熬夜陪伴",reasonableSchedule:"合理规划时间，不让妈妈牵挂",stubbornStudy:"偷偷熬夜学习不让妈妈休息",warmComfort:"关心妈妈情绪，给她温暖支持",ignorantMockery:"随口说出伤害妈妈的话",refuseAlcohol:"远离酒精刺激，保护乳腺健康",forcedDrinking:"为了工作不得不喝酒",adequateSleep:"保持规律作息，维持内分泌稳定",stayUpLate:"为了项目连续熬夜",rationalMedication:"拒绝三无产品，科学管理身材",abuseDrugs:"盲目服用三无减肥药",timelyMedical:"发现异常立即就医，早发现早治疗",hideIllness:"独自硬扛，不告诉子女",regularCheckup:"按时进行乳腺检查，防患于未然",delayCheckup:"把体检当成瞎折腾",scientificTreatment:"相信专业医生，坚持正规治疗",folkRemedy:"听信民间偏方，延误正规治疗"},wg={cellRepair:"修复乳腺细胞损伤",hormoneBalance:"平衡雌激素水平",immuneBoost:"提升免疫细胞活性",detox:"清除有害物质",accompanyCare:"缓解妈妈疲劳，驱散BOSS黑雾",willfulClingy:"让妈妈劳累，BOSS黑雾强化",reasonableSchedule:"让妈妈安心，BOSS无法靠近",stubbornStudy:"让妈妈牵挂，BOSS黑雾蔓延",warmComfort:"驱散妈妈心结，BOSS彻底消散",ignorantMockery:"让妈妈伤心，BOSS彻底觉醒",refuseAlcohol:"减少激素紊乱，BOSS无法成型",forcedDrinking:"刺激乳腺组织，BOSS黑雾扩散",adequateSleep:"平衡激素水平，BOSS虚弱消散",stayUpLate:"内分泌紊乱，BOSS黑雾笼罩",rationalMedication:"避免激素风暴，BOSS无法存在",abuseDrugs:"激素风暴，BOSS彻底觉醒",timelyMedical:"消除早期病灶，BOSS被成功清除",hideIllness:"加重病情，BOSS彻底觉醒",regularCheckup:"预防疾病发生，BOSS被成功驱散",delayCheckup:"错失早期发现机会，BOSS黑雾蔓延",scientificTreatment:"阻断病情恶化，BOSS被成功驱散",folkRemedy:"病情恶化，BOSS彻底觉醒"};function Mg(){const{dispatch:i}=it(),[u,f]=D.useState("boss"),[r,h]=D.useState(null),[m,v]=D.useState(null),M=Object.values(hr),b=Object.values(vh);return l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:101:5",className:"min-h-screen bg-gradient-to-b from-pink-50 to-white p-4",children:[l.jsxs(we,{"code-path":"src\\sections\\KnowledgeBook.tsx:103:7",variant:"ghost",className:"absolute top-4 left-4 text-pink-600",onClick:()=>i({type:"SET_PHASE",payload:"mainMenu"}),children:[l.jsx(Za,{"code-path":"src\\sections\\KnowledgeBook.tsx:108:9",className:"w-5 h-5 mr-1"}),"返回"]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:113:7",className:"text-center pt-16 pb-6",children:[l.jsx("h2",{"code-path":"src\\sections\\KnowledgeBook.tsx:114:9",className:"text-2xl font-bold text-gray-800",children:"知识手册"}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:115:9",className:"text-sm text-gray-500",children:"乳腺健康知识科普"})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:119:7",className:"max-w-4xl mx-auto flex gap-4 mb-6",children:[l.jsxs("button",{"code-path":"src\\sections\\KnowledgeBook.tsx:120:9",className:`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${u==="boss"?"bg-red-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,onClick:()=>{f("boss"),v(null)},children:[l.jsx(HS,{"code-path":"src\\sections\\KnowledgeBook.tsx:131:11",className:"w-5 h-5"}),"BOSS图鉴"]}),l.jsxs("button",{"code-path":"src\\sections\\KnowledgeBook.tsx:134:9",className:`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${u==="skill"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,onClick:()=>{f("skill"),h(null)},children:[l.jsx(YS,{"code-path":"src\\sections\\KnowledgeBook.tsx:145:11",className:"w-5 h-5"}),"技能图鉴"]})]}),u==="boss"&&l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:152:9",className:"max-w-4xl mx-auto",children:r?l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:179:13",className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-200",children:[l.jsxs(we,{"code-path":"src\\sections\\KnowledgeBook.tsx:180:15",variant:"ghost",className:"mb-4 text-gray-600",onClick:()=>h(null),children:[l.jsx(Za,{"code-path":"src\\sections\\KnowledgeBook.tsx:185:17",className:"w-4 h-4 mr-1"}),"返回列表"]}),(()=>{const p=M.find(N=>N.id===r);return p?l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:192:19",children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:193:21",className:"flex items-center gap-4 mb-6",children:[l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:194:23",className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:195:25",className:"text-3xl",children:"👹"})}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:197:23",children:[l.jsx("h3",{"code-path":"src\\sections\\KnowledgeBook.tsx:198:25",className:"text-2xl font-bold text-gray-800",children:p.name}),l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:199:25",className:`text-sm px-3 py-1 rounded-full ${p.week===1?"bg-blue-100 text-blue-600":"bg-amber-100 text-amber-600"}`,children:p.week===1?"一周目BOSS":"二周目BOSS"})]})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:207:21",className:"space-y-6",children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:208:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:209:25",className:"font-bold text-gray-700 mb-2",children:"症状表现"}),l.jsx("ul",{"code-path":"src\\sections\\KnowledgeBook.tsx:210:25",className:"list-disc list-inside text-gray-600 space-y-1",children:p.symptoms.map((N,j)=>l.jsx("li",{"code-path":"src\\sections\\KnowledgeBook.tsx:211:56",children:N},j))})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:215:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:216:25",className:"font-bold text-gray-700 mb-2",children:"发病机制"}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:217:25",className:"text-gray-600",children:p.science.mechanism})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:220:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:221:25",className:"font-bold text-gray-700 mb-2",children:"早期征兆"}),l.jsx("ul",{"code-path":"src\\sections\\KnowledgeBook.tsx:222:25",className:"list-disc list-inside text-gray-600 space-y-1",children:p.science.earlySigns.map((N,j)=>l.jsx("li",{"code-path":"src\\sections\\KnowledgeBook.tsx:223:66",children:N},j))})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:227:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:228:25",className:"font-bold text-gray-700 mb-2",children:"医疗建议"}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:229:25",className:"text-gray-600",children:p.science.medicalAdvice})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:232:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:233:25",className:"font-bold text-gray-700 mb-2",children:"BOSS技能"}),l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:234:25",className:"space-y-3",children:p.skills.map((N,j)=>l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:236:29",className:"bg-gray-50 rounded-lg p-3",children:[l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:237:31",className:"font-medium text-gray-800",children:N.name}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:238:31",className:"text-sm text-gray-600",children:N.description}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:239:31",className:"text-xs text-gray-500 mt-1",children:N.feedback})]},j))})]})]})]}):null})()]}):l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:154:13",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:M.map(p=>l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:156:17",className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all",onClick:()=>h(p.id),children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:161:19",className:"flex items-center gap-3 mb-3",children:[l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:162:21",className:"w-12 h-12 bg-red-100 rounded-full flex items-center justify-center",children:l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:163:23",className:"text-2xl",children:"👹"})}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:165:21",children:[l.jsx("h3",{"code-path":"src\\sections\\KnowledgeBook.tsx:166:23",className:"font-bold text-gray-800",children:p.name}),l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:167:23",className:`text-xs px-2 py-0.5 rounded-full ${p.week===1?"bg-blue-100 text-blue-600":"bg-amber-100 text-amber-600"}`,children:p.week===1?"一周目":"二周目"})]})]}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:174:19",className:"text-sm text-gray-600 line-clamp-2",children:p.description})]},p.id))})}),u==="skill"&&l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:255:9",className:"max-w-4xl mx-auto",children:m?l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:284:13",className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-200",children:[l.jsxs(we,{"code-path":"src\\sections\\KnowledgeBook.tsx:285:15",variant:"ghost",className:"mb-4 text-gray-600",onClick:()=>v(null),children:[l.jsx(Za,{"code-path":"src\\sections\\KnowledgeBook.tsx:290:17",className:"w-4 h-4 mr-1"}),"返回列表"]}),(()=>{const p=b.find(N=>N.id===m);return p?l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:297:19",children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:298:21",className:"flex items-center gap-4 mb-6",children:[l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:299:23",className:`w-16 h-16 rounded-full flex items-center justify-center ${p.type==="positive"?"bg-blue-100":"bg-red-100"}`,children:l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:302:25",className:"text-3xl",children:p.type==="positive"?"✨":"⚠️"})}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:304:23",children:[l.jsx("h3",{"code-path":"src\\sections\\KnowledgeBook.tsx:305:25",className:"text-2xl font-bold text-gray-800",children:Xp[p.id]||p.name}),l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:306:25",className:`text-sm px-3 py-1 rounded-full ${p.type==="positive"?"bg-blue-100 text-blue-600":"bg-red-100 text-red-600"}`,children:p.type==="positive"?"正向技能":"负面技能"})]})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:314:21",className:"space-y-4",children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:315:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:316:25",className:"font-bold text-gray-700 mb-2",children:"技能描述"}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:317:25",className:"text-gray-600",children:Zp[p.id]||p.description})]}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:320:23",children:[l.jsx("h4",{"code-path":"src\\sections\\KnowledgeBook.tsx:321:25",className:"font-bold text-gray-700 mb-2",children:"技能效果"}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:322:25",className:"text-gray-600",children:wg[p.id]||p.effect})]})]})]}):null})()]}):l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:257:13",className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:b.map(p=>l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:259:17",className:"bg-white rounded-xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all",onClick:()=>v(p.id),children:[l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:264:19",className:"flex items-center gap-3 mb-3",children:[l.jsx("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:265:21",className:`w-12 h-12 rounded-full flex items-center justify-center ${p.type==="positive"?"bg-blue-100":"bg-red-100"}`,children:l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:268:23",className:"text-2xl",children:p.type==="positive"?"✨":"⚠️"})}),l.jsxs("div",{"code-path":"src\\sections\\KnowledgeBook.tsx:270:21",children:[l.jsx("h3",{"code-path":"src\\sections\\KnowledgeBook.tsx:271:23",className:"font-bold text-gray-800",children:Xp[p.id]||p.name}),l.jsx("span",{"code-path":"src\\sections\\KnowledgeBook.tsx:272:23",className:`text-xs px-2 py-0.5 rounded-full ${p.type==="positive"?"bg-blue-100 text-blue-600":"bg-red-100 text-red-600"}`,children:p.type==="positive"?"正向技能":"负面技能"})]})]}),l.jsx("p",{"code-path":"src\\sections\\KnowledgeBook.tsx:279:19",className:"text-sm text-gray-600",children:Zp[p.id]||p.description})]},p.id))})})]})}const Hg=["./assets/scenes/child-adult/书房.jpg","./assets/scenes/child-adult/公园.jpg","./assets/scenes/child-adult/妈妈的卧室.jpg","./assets/scenes/child-adult/职场办公室.png","./assets/scenes/child-adult/酒店包厢.png","./assets/scenes/common/乳腺主城(正常).jpg","./assets/scenes/common/乳腺主城(黑雾笼罩).png","./assets/scenes/common/卧室.jpg","./assets/scenes/common/厨房.jpg","./assets/scenes/common/大脑记忆中枢.png","./assets/scenes/common/客厅.jpg","./assets/scenes/elder/三甲医院.png","./assets/scenes/elder/体检中心.png","./assets/scenes/elder/小区花园.jpg","./assets/scenes/elder/正规医院.png","./assets/scenes/elder/社区医院.jpg","./assets/characters/adult-protagonist/主角-坚定.png","./assets/characters/adult-protagonist/主角-好奇.png","./assets/characters/adult-protagonist/主角-心疼.png","./assets/characters/adult-protagonist/主角-恐惧.png","./assets/characters/adult-protagonist/主角-懊悔.png","./assets/characters/adult-protagonist/主角-正常.png","./assets/characters/adult-protagonist/主角-温暖.png","./assets/characters/adult-protagonist/主角-焦虑.png","./assets/characters/adult-protagonist/主角-疲惫.png","./assets/characters/adult-protagonist/主角-紧张.png","./assets/characters/adult-protagonist/主角-轻松.png","./assets/characters/bosses/乳头内陷-BOSS-狰狞.png","./assets/characters/bosses/乳头内陷-BOSS-虚弱.png","./assets/characters/bosses/乳头溢液-BOSS-狰狞.png","./assets/characters/bosses/乳头溢液-BOSS-虚弱.png","./assets/characters/bosses/乳房硬块-BOSS-嚣张.png","./assets/characters/bosses/乳房硬块-BOSS-狰狞.png","./assets/characters/bosses/乳房硬块-BOSS-虚弱.png","./assets/characters/bosses/橘皮样改变-BOSS-狰狞.png","./assets/characters/bosses/橘皮样改变-BOSS-虚弱.png","./assets/characters/bosses/腋下淋巴结肿大-BOSS-嚣张.png","./assets/characters/bosses/腋下淋巴结肿大-BOSS-狰狞.png","./assets/characters/bosses/腋下淋巴结肿大-BOSS-虚弱.png","./assets/characters/bosses/酒窝征-BOSS-狰狞.png","./assets/characters/bosses/酒窝征-BOSS-虚弱.png","./assets/characters/cells/内分泌调节细胞-正常.png","./assets/characters/cells/内分泌调节细胞-疲惫.png","./assets/characters/cells/内分泌调节细胞-紊乱.png","./assets/characters/cells/分泌细胞-健康.png","./assets/characters/cells/分泌细胞-委屈.png","./assets/characters/cells/分泌细胞-干瘪.png","./assets/characters/cells/分泌细胞-异常.png","./assets/characters/cells/分泌细胞-恐惧.png","./assets/characters/cells/分泌细胞-愉悦.png","./assets/characters/cells/分泌细胞-疲惫.png","./assets/characters/cells/分泌细胞-肿胀.png","./assets/characters/cells/分泌细胞-胀痛.png","./assets/characters/cells/分泌细胞-虚弱.png","./assets/characters/cells/巨噬细胞-小巧.png","./assets/characters/cells/巨噬细胞-活泼.png","./assets/characters/cells/巨噬细胞-爽朗.png","./assets/characters/cells/巨噬细胞-疲惫.png","./assets/characters/cells/巨噬细胞-虚弱.png","./assets/characters/cells/巨噬细胞-醉酒.png","./assets/characters/cells/淋巴细胞-傲娇.png","./assets/characters/cells/淋巴细胞-急促.png","./assets/characters/cells/淋巴细胞-无助.png","./assets/characters/cells/淋巴细胞-期待.png","./assets/characters/cells/淋巴细胞-欢快.png","./assets/characters/cells/淋巴细胞-活泼.png","./assets/characters/cells/淋巴细胞-肿大.png","./assets/characters/cells/淋巴细胞-警惕.png","./assets/characters/cells/雌激素调节细胞-正常.png","./assets/characters/cells/雌激素调节细胞-紊乱.png","./assets/characters/child-protagonist/主角-任性.png","./assets/characters/child-protagonist/主角-固执.png","./assets/characters/child-protagonist/主角-害怕.png","./assets/characters/child-protagonist/主角-开心.png","./assets/characters/child-protagonist/主角-心疼.png","./assets/characters/child-protagonist/主角-愧疚.png","./assets/characters/child-protagonist/主角-懂事.png","./assets/characters/child-protagonist/主角-懵懂.png","./assets/characters/child-protagonist/主角-正常.png","./assets/characters/child-protagonist/主角-焦急.png","./assets/characters/elder-protagonist/主角-固执.png","./assets/characters/elder-protagonist/主角-坚定.png","./assets/characters/elder-protagonist/主角-安心.png","./assets/characters/elder-protagonist/主角-恐惧.png","./assets/characters/elder-protagonist/主角-愧疚.png","./assets/characters/elder-protagonist/主角-懊悔.png","./assets/characters/elder-protagonist/主角-执迷.png","./assets/characters/elder-protagonist/主角-期待.png","./assets/characters/elder-protagonist/主角-正常.png","./assets/characters/elder-protagonist/主角-温暖.png","./assets/characters/elder-protagonist/主角-焦虑.png","./assets/characters/elder-protagonist/主角-疲惫.png","./assets/characters/family/儿媳-担忧.png","./assets/characters/family/儿媳-温柔.png","./assets/characters/family/儿媳-细心.png","./assets/characters/family/儿媳-贴心.png","./assets/characters/family/儿子-心疼.png","./assets/characters/family/儿子-愤怒.png","./assets/characters/family/儿子-担忧.png","./assets/characters/family/儿子-焦急.png","./assets/characters/family/儿子-疲惫.png","./assets/characters/family/儿子-诚恳.png","./assets/characters/family/女儿-哭泣.png","./assets/characters/family/女儿-委屈.png","./assets/characters/family/女儿-恳求.png","./assets/characters/family/女儿-担忧.png","./assets/characters/family/女儿-无奈.png","./assets/characters/family/女儿-温柔.png","./assets/characters/family/妈妈-失落.png","./assets/characters/family/妈妈-委屈.png","./assets/characters/family/妈妈-开心.png","./assets/characters/family/妈妈-感动.png","./assets/characters/family/妈妈-担忧.png","./assets/characters/family/妈妈-欣慰.png","./assets/characters/family/妈妈-消沉.png","./assets/characters/family/妈妈-温柔.png","./assets/characters/family/妈妈-疲惫.png","./assets/characters/family/妈妈-疼痛.png","./assets/characters/family/妈妈-苍白.png","./assets/characters/family/妈妈-难过.png","./assets/characters/family/妈妈-麻木.png","./assets/characters/family/小孙女-活泼.png","./assets/characters/family/小孙女-软糯.png","./assets/characters/family/爸爸-严肃.png","./assets/characters/family/爸爸-稳重.png","./assets/characters/medical/乳腺科医生(专家)-专业.png","./assets/characters/medical/乳腺科医生(专家)-严肃.png","./assets/characters/medical/乳腺科医生(专家)-温和.png","./assets/characters/medical/民间老郎中-神秘.png","./assets/characters/medical/社区医生-专业.png","./assets/characters/medical/药店店员-友善.png","./assets/characters/medical/药店店员-随意.png","./assets/characters/medical/营养师-专业.png","./assets/characters/neighbors/刘阿姨-附和.png","./assets/characters/neighbors/张阿姨-热心.png","./assets/characters/neighbors/李阿姨-附和.png","./assets/characters/neighbors/王阿姨-热心.png","./assets/characters/neighbors/群友-友善.jpg","./assets/characters/neighbors/群友-友善.png","./assets/characters/neighbors/邻居-热心.png","./assets/characters/paimon/派蒙-严肃.png","./assets/characters/paimon/派蒙-傲娇.png","./assets/characters/paimon/派蒙-哽咽.png","./assets/characters/paimon/派蒙-开心.png","./assets/characters/paimon/派蒙-心疼.png","./assets/characters/paimon/派蒙-愤怒.png","./assets/characters/paimon/派蒙-担忧.png","./assets/characters/paimon/派蒙-撇嘴.png","./assets/characters/paimon/派蒙-无奈.png","./assets/characters/paimon/派蒙-期待.png","./assets/characters/paimon/派蒙-欣慰.png","./assets/characters/paimon/派蒙-温柔.png","./assets/characters/paimon/派蒙-焦急.png","./assets/characters/paimon/派蒙-绝望.png","./assets/characters/paimon/派蒙-认真.png","./assets/characters/paimon/派蒙-赞许.png","./assets/characters/paimon/派蒙-软糯.png","./assets/characters/paimon/派蒙-郑重.png","./assets/characters/paimon/派蒙-雀跃.png","./assets/characters/paimon/派蒙-骄傲.png","./assets/characters/workplace/同事-同情.png","./assets/characters/workplace/同事-担忧.png","./assets/characters/workplace/同事-起哄.png","./assets/characters/workplace/小李-同情.png","./assets/characters/workplace/小李-疲惫.png","./assets/characters/workplace/小李-苦相.png","./assets/characters/workplace/小李-谨慎.png","./assets/characters/workplace/张总-笑意.png","./assets/characters/workplace/张总-随和.png","./assets/characters/workplace/王哥-友善.png","./assets/characters/workplace/甲方总负责人-严肃.png","./assets/characters/workplace/甲方总负责人-满意.png","./assets/characters/workplace/经理-威严.png","./assets/characters/workplace/经理-愣住.png","./assets/characters/workplace/经理-愤怒.png","./assets/characters/workplace/经理-满意.png","./assets/characters/workplace/经理-缓和.png"];function Cg(){return l.jsx("div",{"code-path":"src\\components\\AssetPreloader.tsx:5:5","aria-hidden":"true",className:"pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px overflow-hidden opacity-0",children:Hg.map(i=>l.jsx("img",{"code-path":"src\\components\\AssetPreloader.tsx:10:9",src:i,alt:"",loading:"eager"},i))})}function Ag(){const{state:i}=it();switch(i.currentPhase){case"mainMenu":return l.jsx(Gp,{"code-path":"src\\App.tsx:25:14"});case"perspectiveSelect":return l.jsx(eg,{"code-path":"src\\App.tsx:27:14"});case"realityTrigger":return l.jsx(sg,{"code-path":"src\\App.tsx:29:14"});case"tutorial":return l.jsx(lg,{"code-path":"src\\App.tsx:31:14"});case"microWorldMain":return l.jsx(cg,{"code-path":"src\\App.tsx:33:14"});case"memoryCenter":return l.jsx(rg,{"code-path":"src\\App.tsx:35:14"});case"visualNovel":return l.jsx(xg,{"code-path":"src\\App.tsx:37:14"});case"skillReplace":return l.jsx(Bg,{"code-path":"src\\App.tsx:39:14"});case"bossEntry":return l.jsx(Eg,{"code-path":"src\\App.tsx:41:14"});case"bossBattle":return l.jsx(Og,{"code-path":"src\\App.tsx:43:14"});case"beEnding":return l.jsx(Ng,{"code-path":"src\\App.tsx:45:14"});case"heEnding":return l.jsx(jg,{"code-path":"src\\App.tsx:47:14"});case"week2Transition":return l.jsx(kg,{"code-path":"src\\App.tsx:49:14"});case"specialEnding":return l.jsx(Tg,{"code-path":"src\\App.tsx:51:14"});case"knowledgeBook":return l.jsx(Mg,{"code-path":"src\\App.tsx:53:14"});default:return l.jsx(Gp,{"code-path":"src\\App.tsx:55:14"})}}function _g(){return l.jsxs(c0,{"code-path":"src\\App.tsx:61:5",children:[l.jsx(Cg,{"code-path":"src\\App.tsx:62:7"}),l.jsx(Ag,{"code-path":"src\\App.tsx:63:7"})]})}a0.createRoot(document.getElementById("root")).render(l.jsx(D.StrictMode,{"code-path":"src\\main.tsx:7:3",children:l.jsx(_g,{"code-path":"src\\main.tsx:8:5"})}));
