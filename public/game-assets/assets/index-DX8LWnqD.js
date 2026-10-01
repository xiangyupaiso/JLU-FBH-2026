function yx(c,o){for(var d=0;d<o.length;d++){const u=o[d];if(typeof u!="string"&&!Array.isArray(u)){for(const p in u)if(p!=="default"&&!(p in c)){const h=Object.getOwnPropertyDescriptor(u,p);h&&Object.defineProperty(c,p,h.get?h:{enumerable:!0,get:()=>u[p]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))u(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function d(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(p){if(p.ep)return;p.ep=!0;const h=d(p);fetch(p.href,h)}})();function vx(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var au={exports:{}},es={};var Dm;function Ex(){if(Dm)return es;Dm=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(u,p,h){var y=null;if(h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),"key"in p){h={};for(var N in p)N!=="key"&&(h[N]=p[N])}else h=p;return p=h.ref,{$$typeof:c,type:u,key:y,ref:p!==void 0?p:null,props:h}}return es.Fragment=o,es.jsx=d,es.jsxs=d,es}var Mm;function Bx(){return Mm||(Mm=1,au.exports=Ex()),au.exports}var s=Bx(),su={exports:{}},re={};var Rm;function Ox(){if(Rm)return re;Rm=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),D=Symbol.iterator;function q(S){return S===null||typeof S!="object"?null:(S=D&&S[D]||S["@@iterator"],typeof S=="function"?S:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,I={};function K(S,H,U){this.props=S,this.context=H,this.refs=I,this.updater=U||Z}K.prototype.isReactComponent={},K.prototype.setState=function(S,H){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,H,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ie(){}ie.prototype=K.prototype;function $(S,H,U){this.props=S,this.context=H,this.refs=I,this.updater=U||Z}var ue=$.prototype=new ie;ue.constructor=$,Q(ue,K.prototype),ue.isPureReactComponent=!0;var M=Array.isArray;function J(){}var X={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ce(S,H,U){var G=U.ref;return{$$typeof:c,type:S,key:H,ref:G!==void 0?G:null,props:U}}function he(S,H){return ce(S.type,H,S.props)}function Te(S){return typeof S=="object"&&S!==null&&S.$$typeof===c}function Ce(S){var H={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(U){return H[U]})}var ct=/\/+/g;function Ie(S,H){return typeof S=="object"&&S!==null&&S.key!=null?Ce(""+S.key):H.toString(36)}function Le(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(J,J):(S.status="pending",S.then(function(H){S.status==="pending"&&(S.status="fulfilled",S.value=H)},function(H){S.status==="pending"&&(S.status="rejected",S.reason=H)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function A(S,H,U,G,ne){var de=typeof S;(de==="undefined"||de==="boolean")&&(S=null);var le=!1;if(S===null)le=!0;else switch(de){case"bigint":case"string":case"number":le=!0;break;case"object":switch(S.$$typeof){case c:case o:le=!0;break;case k:return le=S._init,A(le(S._payload),H,U,G,ne)}}if(le)return ne=ne(S),le=G===""?"."+Ie(S,0):G,M(ne)?(U="",le!=null&&(U=le.replace(ct,"$&/")+"/"),A(ne,H,U,"",function(kt){return kt})):ne!=null&&(Te(ne)&&(ne=he(ne,U+(ne.key==null||S&&S.key===ne.key?"":(""+ne.key).replace(ct,"$&/")+"/")+le)),H.push(ne)),1;le=0;var Xe=G===""?".":G+":";if(M(S))for(var ke=0;ke<S.length;ke++)G=S[ke],de=Xe+Ie(G,ke),le+=A(G,H,U,de,ne);else if(ke=q(S),typeof ke=="function")for(S=ke.call(S),ke=0;!(G=S.next()).done;)G=G.value,de=Xe+Ie(G,ke++),le+=A(G,H,U,de,ne);else if(de==="object"){if(typeof S.then=="function")return A(Le(S),H,U,G,ne);throw H=String(S),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return le}function L(S,H,U){if(S==null)return S;var G=[],ne=0;return A(S,G,"","",function(de){return H.call(U,de,ne++)}),G}function R(S){if(S._status===-1){var H=S._result;H=H(),H.then(function(U){(S._status===0||S._status===-1)&&(S._status=1,S._result=U)},function(U){(S._status===0||S._status===-1)&&(S._status=2,S._result=U)}),S._status===-1&&(S._status=0,S._result=H)}if(S._status===1)return S._result.default;throw S._result}var V=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},oe={map:L,forEach:function(S,H,U){L(S,function(){H.apply(this,arguments)},U)},count:function(S){var H=0;return L(S,function(){H++}),H},toArray:function(S){return L(S,function(H){return H})||[]},only:function(S){if(!Te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return re.Activity=O,re.Children=oe,re.Component=K,re.Fragment=d,re.Profiler=p,re.PureComponent=$,re.StrictMode=u,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,re.__COMPILER_RUNTIME={__proto__:null,c:function(S){return X.H.useMemoCache(S)}},re.cache=function(S){return function(){return S.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(S,H,U){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var G=Q({},S.props),ne=S.key;if(H!=null)for(de in H.key!==void 0&&(ne=""+H.key),H)!Y.call(H,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&H.ref===void 0||(G[de]=H[de]);var de=arguments.length-2;if(de===1)G.children=U;else if(1<de){for(var le=Array(de),Xe=0;Xe<de;Xe++)le[Xe]=arguments[Xe+2];G.children=le}return ce(S.type,ne,G)},re.createContext=function(S){return S={$$typeof:y,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},re.createElement=function(S,H,U){var G,ne={},de=null;if(H!=null)for(G in H.key!==void 0&&(de=""+H.key),H)Y.call(H,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(ne[G]=H[G]);var le=arguments.length-2;if(le===1)ne.children=U;else if(1<le){for(var Xe=Array(le),ke=0;ke<le;ke++)Xe[ke]=arguments[ke+2];ne.children=Xe}if(S&&S.defaultProps)for(G in le=S.defaultProps,le)ne[G]===void 0&&(ne[G]=le[G]);return ce(S,de,ne)},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:N,render:S}},re.isValidElement=Te,re.lazy=function(S){return{$$typeof:k,_payload:{_status:-1,_result:S},_init:R}},re.memo=function(S,H){return{$$typeof:m,type:S,compare:H===void 0?null:H}},re.startTransition=function(S){var H=X.T,U={};X.T=U;try{var G=S(),ne=X.S;ne!==null&&ne(U,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(J,V)}catch(de){V(de)}finally{H!==null&&U.types!==null&&(H.types=U.types),X.T=H}},re.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},re.use=function(S){return X.H.use(S)},re.useActionState=function(S,H,U){return X.H.useActionState(S,H,U)},re.useCallback=function(S,H){return X.H.useCallback(S,H)},re.useContext=function(S){return X.H.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S,H){return X.H.useDeferredValue(S,H)},re.useEffect=function(S,H){return X.H.useEffect(S,H)},re.useEffectEvent=function(S){return X.H.useEffectEvent(S)},re.useId=function(){return X.H.useId()},re.useImperativeHandle=function(S,H,U){return X.H.useImperativeHandle(S,H,U)},re.useInsertionEffect=function(S,H){return X.H.useInsertionEffect(S,H)},re.useLayoutEffect=function(S,H){return X.H.useLayoutEffect(S,H)},re.useMemo=function(S,H){return X.H.useMemo(S,H)},re.useOptimistic=function(S,H){return X.H.useOptimistic(S,H)},re.useReducer=function(S,H,U){return X.H.useReducer(S,H,U)},re.useRef=function(S){return X.H.useRef(S)},re.useState=function(S){return X.H.useState(S)},re.useSyncExternalStore=function(S,H,U){return X.H.useSyncExternalStore(S,H,U)},re.useTransition=function(){return X.H.useTransition()},re.version="19.2.3",re}var Um;function ju(){return Um||(Um=1,su.exports=Ox()),su.exports}var C=ju();const jx=vx(C),Nx=yx({__proto__:null,default:jx},[C]);var iu={exports:{}},ts={},cu={exports:{}},ru={};var Lm;function kx(){return Lm||(Lm=1,(function(c){function o(A,L){var R=A.length;A.push(L);e:for(;0<R;){var V=R-1>>>1,oe=A[V];if(0<p(oe,L))A[V]=L,A[R]=oe,R=V;else break e}}function d(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var L=A[0],R=A.pop();if(R!==L){A[0]=R;e:for(var V=0,oe=A.length,S=oe>>>1;V<S;){var H=2*(V+1)-1,U=A[H],G=H+1,ne=A[G];if(0>p(U,R))G<oe&&0>p(ne,U)?(A[V]=ne,A[G]=R,V=G):(A[V]=U,A[H]=R,V=H);else if(G<oe&&0>p(ne,R))A[V]=ne,A[G]=R,V=G;else break e}}return L}function p(A,L){var R=A.sortIndex-L.sortIndex;return R!==0?R:A.id-L.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;c.unstable_now=function(){return h.now()}}else{var y=Date,N=y.now();c.unstable_now=function(){return y.now()-N}}var g=[],m=[],k=1,O=null,D=3,q=!1,Z=!1,Q=!1,I=!1,K=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function ue(A){for(var L=d(m);L!==null;){if(L.callback===null)u(m);else if(L.startTime<=A)u(m),L.sortIndex=L.expirationTime,o(g,L);else break;L=d(m)}}function M(A){if(Q=!1,ue(A),!Z)if(d(g)!==null)Z=!0,J||(J=!0,Ce());else{var L=d(m);L!==null&&Le(M,L.startTime-A)}}var J=!1,X=-1,Y=5,ce=-1;function he(){return I?!0:!(c.unstable_now()-ce<Y)}function Te(){if(I=!1,J){var A=c.unstable_now();ce=A;var L=!0;try{e:{Z=!1,Q&&(Q=!1,ie(X),X=-1),q=!0;var R=D;try{t:{for(ue(A),O=d(g);O!==null&&!(O.expirationTime>A&&he());){var V=O.callback;if(typeof V=="function"){O.callback=null,D=O.priorityLevel;var oe=V(O.expirationTime<=A);if(A=c.unstable_now(),typeof oe=="function"){O.callback=oe,ue(A),L=!0;break t}O===d(g)&&u(g),ue(A)}else u(g);O=d(g)}if(O!==null)L=!0;else{var S=d(m);S!==null&&Le(M,S.startTime-A),L=!1}}break e}finally{O=null,D=R,q=!1}L=void 0}}finally{L?Ce():J=!1}}}var Ce;if(typeof $=="function")Ce=function(){$(Te)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,Ie=ct.port2;ct.port1.onmessage=Te,Ce=function(){Ie.postMessage(null)}}else Ce=function(){K(Te,0)};function Le(A,L){X=K(function(){A(c.unstable_now())},L)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(A){A.callback=null},c.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<A?Math.floor(1e3/A):5},c.unstable_getCurrentPriorityLevel=function(){return D},c.unstable_next=function(A){switch(D){case 1:case 2:case 3:var L=3;break;default:L=D}var R=D;D=L;try{return A()}finally{D=R}},c.unstable_requestPaint=function(){I=!0},c.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var R=D;D=A;try{return L()}finally{D=R}},c.unstable_scheduleCallback=function(A,L,R){var V=c.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,A){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=R+oe,A={id:k++,callback:L,priorityLevel:A,startTime:R,expirationTime:oe,sortIndex:-1},R>V?(A.sortIndex=R,o(m,A),d(g)===null&&A===d(m)&&(Q?(ie(X),X=-1):Q=!0,Le(M,R-V))):(A.sortIndex=oe,o(g,A),Z||q||(Z=!0,J||(J=!0,Ce()))),A},c.unstable_shouldYield=he,c.unstable_wrapCallback=function(A){var L=D;return function(){var R=D;D=L;try{return A.apply(this,arguments)}finally{D=R}}}})(ru)),ru}var qm;function wx(){return qm||(qm=1,cu.exports=kx()),cu.exports}var uu={exports:{}},rt={};var Gm;function Ax(){if(Gm)return rt;Gm=1;var c=ju();function o(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)m+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(g,m,k){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:O==null?null:""+O,children:g,containerInfo:m,implementation:k}}var y=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,rt.createPortal=function(g,m){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return h(g,m,null,k)},rt.flushSync=function(g){var m=y.T,k=u.p;try{if(y.T=null,u.p=2,g)return g()}finally{y.T=m,u.p=k,u.d.f()}},rt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(g,m))},rt.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},rt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var k=m.as,O=N(k,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,q=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;k==="style"?u.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:O,integrity:D,fetchPriority:q}):k==="script"&&u.d.X(g,{crossOrigin:O,integrity:D,fetchPriority:q,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},rt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var k=N(m.as,m.crossOrigin);u.d.M(g,{crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(g)},rt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var k=m.as,O=N(k,m.crossOrigin);u.d.L(g,k,{crossOrigin:O,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},rt.preloadModule=function(g,m){if(typeof g=="string")if(m){var k=N(m.as,m.crossOrigin);u.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:k,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(g)},rt.requestFormReset=function(g){u.d.r(g)},rt.unstable_batchedUpdates=function(g,m){return g(m)},rt.useFormState=function(g,m,k){return y.H.useFormState(g,m,k)},rt.useFormStatus=function(){return y.H.useHostTransitionStatus()},rt.version="19.2.3",rt}var Ym;function _x(){if(Ym)return uu.exports;Ym=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),uu.exports=Ax(),uu.exports}var Vm;function Cx(){if(Vm)return ts;Vm=1;var c=wx(),o=ju(),d=_x();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(u(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return g(a),e;if(i===l)return g(a),t;i=i.sibling}throw Error(u(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,f=a.child;f;){if(f===n){r=!0,n=a,l=i;break}if(f===l){r=!0,l=a,n=i;break}f=f.sibling}if(!r){for(f=i.child;f;){if(f===n){r=!0,n=i,l=a;break}if(f===l){r=!0,l=i,n=a;break}f=f.sibling}if(!r)throw Error(u(189))}}if(n.alternate!==l)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,D=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),$=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case K:return"Profiler";case I:return"StrictMode";case M:return"Suspense";case J:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case $:return e.displayName||"Context";case ie:return(e._context.displayName||"Context")+".Consumer";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var Le=Array.isArray,A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},V=[],oe=-1;function S(e){return{current:e}}function H(e){0>oe||(e.current=V[oe],V[oe]=null,oe--)}function U(e,t){oe++,V[oe]=e.current,e.current=t}var G=S(null),ne=S(null),de=S(null),le=S(null);function Xe(e,t){switch(U(de,t),U(ne,e),U(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?am(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=am(t),e=sm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(G),U(G,e)}function ke(){H(G),H(ne),H(de)}function kt(e){e.memoizedState!==null&&U(le,e);var t=G.current,n=sm(t,e.type);t!==n&&(U(ne,e),U(G,n))}function Qt(e){ne.current===e&&(H(G),H(ne)),le.current===e&&(H(le),Wa._currentValue=R)}var Lt,os;function Wt(e){if(Lt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lt=t&&t[1]||"",os=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+e+os}var sa=!1;function ia(e,t){if(!e||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(w){var j=w}Reflect.construct(e,[],z)}else{try{z.call()}catch(w){j=w}e.call(z.prototype)}}else{try{throw Error()}catch(w){j=w}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(w){if(w&&j&&typeof w.stack=="string")return[w.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],f=i[1];if(r&&f){var x=r.split(`
`),B=f.split(`
`);for(a=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;a<B.length&&!B[a].includes("DetermineComponentFrameRoot");)a++;if(l===x.length||a===B.length)for(l=x.length-1,a=B.length-1;1<=l&&0<=a&&x[l]!==B[a];)a--;for(;1<=l&&0<=a;l--,a--)if(x[l]!==B[a]){if(l!==1||a!==1)do if(l--,a--,0>a||x[l]!==B[a]){var _=`
`+x[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=a);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Wt(n):""}function ae(e,t){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return e.child!==t&&t!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return ia(e.type,!1);case 11:return ia(e.type.render,!1);case 1:return ia(e.type,!0);case 31:return Wt("Activity");default:return""}}function ds(e){try{var t="",n=null;do t+=ae(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ca=Object.prototype.hasOwnProperty,Xi=c.unstable_scheduleCallback,Qi=c.unstable_cancelCallback,Pp=c.unstable_shouldYield,Ip=c.unstable_requestPaint,St=c.unstable_now,eh=c.unstable_getCurrentPriorityLevel,zu=c.unstable_ImmediatePriority,Du=c.unstable_UserBlockingPriority,fs=c.unstable_NormalPriority,th=c.unstable_LowPriority,Mu=c.unstable_IdlePriority,nh=c.log,lh=c.unstable_setDisableYieldValue,ra=null,gt=null;function gn(e){if(typeof nh=="function"&&lh(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ra,e)}catch{}}var bt=Math.clz32?Math.clz32:ih,ah=Math.log,sh=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(ah(e)/sh|0)|0}var ms=256,ps=262144,hs=4194304;function Xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xs(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?a=Xn(l):(r&=f,r!==0?a=Xn(r):n||(n=f&~e,n!==0&&(a=Xn(n))))):(f=l&~i,f!==0?a=Xn(f):r!==0?a=Xn(r):n||(n=l&~e,n!==0&&(a=Xn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function ua(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ch(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(){var e=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),e}function Zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rh(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var f=e.entanglements,x=e.expirationTimes,B=e.hiddenUpdates;for(n=r&~n;0<n;){var _=31-bt(n),z=1<<_;f[_]=0,x[_]=-1;var j=B[_];if(j!==null)for(B[_]=null,_=0;_<j.length;_++){var w=j[_];w!==null&&(w.lane&=-536870913)}n&=~z}l!==0&&Uu(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function Uu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-bt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-bt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function qu(e,t){var n=t&-t;return n=(n&42)!==0?1:Ki(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ji(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gu(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:wm(e.type))}function Yu(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var bn=Math.random().toString(36).slice(2),nt="__reactFiber$"+bn,ot="__reactProps$"+bn,dl="__reactContainer$"+bn,$i="__reactEvents$"+bn,uh="__reactListeners$"+bn,oh="__reactHandles$"+bn,Vu="__reactResources$"+bn,da="__reactMarker$"+bn;function Wi(e){delete e[nt],delete e[ot],delete e[$i],delete e[uh],delete e[oh]}function fl(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dl]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[nt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function ml(e){if(e=e[nt]||e[dl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function pl(e){var t=e[Vu];return t||(t=e[Vu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[da]=!0}var Xu=new Set,Qu={};function Qn(e,t){hl(e,t),hl(e+"Capture",t)}function hl(e,t){for(Qu[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var dh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zu={},Ku={};function fh(e){return ca.call(Ku,e)?!0:ca.call(Zu,e)?!1:dh.test(e)?Ku[e]=!0:(Zu[e]=!0,!1)}function Ss(e,t,n){if(fh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ft(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=Ju(e)?"checked":"value";e._valueTracker=mh(e,t,""+e[t])}}function $u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ju(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ph=/[\n"\\]/g;function At(e){return e.replace(ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pi(e,t,n,l,a,i,r,f){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Ii(e,r,wt(t)):n!=null?Ii(e,r,wt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+wt(f):e.removeAttribute("name")}function Wu(e,t,n,l,a,i,r,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Fi(e)}function Ii(e,t,n){t==="number"&&bs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Fu(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function Pu(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(u(92));if(Le(l)){if(1<l.length)throw Error(u(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Fi(e)}function Sl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Iu(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||hh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function eo(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Iu(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Iu(e,i,t[i])}function ec(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(e){return Sh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var tc=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,bl=null;function to(e){var t=ml(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[ot]||null;if(!a)throw Error(u(90));Pi(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&$u(l)}break e;case"textarea":Fu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xl(e,!!n.multiple,t,!1)}}}var lc=!1;function no(e,t,n){if(lc)return e(t,n);lc=!0;try{var l=e(t);return l}finally{if(lc=!1,(gl!==null||bl!==null)&&(ci(),gl&&(t=gl,e=bl,bl=gl=null,to(t),e)))for(t=0;t<e.length;t++)to(e[t])}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var l=n[ot]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(It)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){ac=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{ac=!1}var yn=null,sc=null,vs=null;function lo(){if(vs)return vs;var e,t=sc,n=t.length,l,a="value"in yn?yn.value:yn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return vs=a.slice(e,1<l?1-l:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bs(){return!0}function ao(){return!1}function dt(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bs:ao,this.isPropagationStopped=ao,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bs)},persist:function(){},isPersistent:Bs}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=dt(Zn),ha=O({},Zn,{view:0,detail:0}),gh=dt(ha),ic,cc,xa,js=O({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?(ic=e.screenX-xa.screenX,cc=e.screenY-xa.screenY):cc=ic=0,xa=e),ic)},movementY:function(e){return"movementY"in e?e.movementY:cc}}),so=dt(js),bh=O({},js,{dataTransfer:0}),yh=dt(bh),vh=O({},ha,{relatedTarget:0}),rc=dt(vh),Eh=O({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=dt(Eh),Oh=O({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jh=dt(Oh),Nh=O({},Zn,{data:0}),io=dt(Nh),kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function uc(){return _h}var Ch=O({},ha,{key:function(e){if(e.key){var t=kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hh=dt(Ch),Th=O({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),co=dt(Th),zh=O({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),Dh=dt(zh),Mh=O({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=dt(Mh),Uh=O({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lh=dt(Uh),qh=O({},Zn,{newState:0,oldState:0}),Gh=dt(qh),Yh=[9,13,27,32],oc=It&&"CompositionEvent"in window,Sa=null;It&&"documentMode"in document&&(Sa=document.documentMode);var Vh=It&&"TextEvent"in window&&!Sa,ro=It&&(!oc||Sa&&8<Sa&&11>=Sa),uo=" ",oo=!1;function fo(e,t){switch(e){case"keyup":return Yh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yl=!1;function Xh(e,t){switch(e){case"compositionend":return mo(t);case"keypress":return t.which!==32?null:(oo=!0,uo);case"textInput":return e=t.data,e===uo&&oo?null:e;default:return null}}function Qh(e,t){if(yl)return e==="compositionend"||!oc&&fo(e,t)?(e=lo(),vs=sc=yn=null,yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ro&&t.locale!=="ko"?null:t.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zh[e.type]:t==="textarea"}function ho(e,t,n,l){gl?bl?bl.push(l):bl=[l]:gl=l,t=pi(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ga=null,ba=null;function Kh(e){Pf(e,0)}function Ns(e){var t=fa(e);if($u(t))return e}function xo(e,t){if(e==="change")return t}var So=!1;if(It){var dc;if(It){var fc="oninput"in document;if(!fc){var go=document.createElement("div");go.setAttribute("oninput","return;"),fc=typeof go.oninput=="function"}dc=fc}else dc=!1;So=dc&&(!document.documentMode||9<document.documentMode)}function bo(){ga&&(ga.detachEvent("onpropertychange",yo),ba=ga=null)}function yo(e){if(e.propertyName==="value"&&Ns(ba)){var t=[];ho(t,ba,e,nc(e)),no(Kh,t)}}function Jh(e,t,n){e==="focusin"?(bo(),ga=t,ba=n,ga.attachEvent("onpropertychange",yo)):e==="focusout"&&bo()}function $h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(ba)}function Wh(e,t){if(e==="click")return Ns(t)}function Fh(e,t){if(e==="input"||e==="change")return Ns(t)}function Ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Ph;function ya(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ca.call(t,a)||!yt(e[a],t[a]))return!1}return!0}function vo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,t){var n=vo(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vo(n)}}function Bo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bs(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bs(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ih=It&&"documentMode"in document&&11>=document.documentMode,vl=null,pc=null,va=null,hc=!1;function jo(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||vl==null||vl!==bs(l)||(l=vl,"selectionStart"in l&&mc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),va&&ya(va,l)||(va=l,l=pi(pc,"onSelect"),0<l.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=vl)))}function Kn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var El={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionrun:Kn("Transition","TransitionRun"),transitionstart:Kn("Transition","TransitionStart"),transitioncancel:Kn("Transition","TransitionCancel"),transitionend:Kn("Transition","TransitionEnd")},xc={},No={};It&&(No=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function Jn(e){if(xc[e])return xc[e];if(!El[e])return e;var t=El[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in No)return xc[e]=t[n];return e}var ko=Jn("animationend"),wo=Jn("animationiteration"),Ao=Jn("animationstart"),e0=Jn("transitionrun"),t0=Jn("transitionstart"),n0=Jn("transitioncancel"),_o=Jn("transitionend"),Co=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function qt(e,t){Co.set(e,t),Qn(t,[e])}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],Bl=0,gc=0;function ws(){for(var e=Bl,t=gc=Bl=0;t<e;){var n=_t[t];_t[t++]=null;var l=_t[t];_t[t++]=null;var a=_t[t];_t[t++]=null;var i=_t[t];if(_t[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&Ho(n,a,i)}}function As(e,t,n,l){_t[Bl++]=e,_t[Bl++]=t,_t[Bl++]=n,_t[Bl++]=l,gc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bc(e,t,n,l){return As(e,t,n,l),_s(e)}function $n(e,t){return As(e,null,null,t),_s(e)}function Ho(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-bt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function _s(e){if(50<Va)throw Va=0,wr=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ol={};function l0(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,l){return new l0(e,t,n,l)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function To(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Cs(e,t,n,l,a,i){var r=0;if(l=e,typeof e=="function")yc(e)&&(r=1);else if(typeof e=="string")r=rx(e,n,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=vt(31,n,t,a),e.elementType=ce,e.lanes=i,e;case Q:return Wn(n.children,a,i,t);case I:r=8,a|=24;break;case K:return e=vt(12,n,t,a|2),e.elementType=K,e.lanes=i,e;case M:return e=vt(13,n,t,a),e.elementType=M,e.lanes=i,e;case J:return e=vt(19,n,t,a),e.elementType=J,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:r=10;break e;case ie:r=9;break e;case ue:r=11;break e;case X:r=14;break e;case Y:r=16,l=null;break e}r=29,n=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=vt(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Wn(e,t,n,l){return e=vt(7,e,l,t),e.lanes=n,e}function vc(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function zo(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function Ec(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Do=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var n=Do.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ds(t)},Do.set(e,t),t)}return{value:e,source:t,stack:ds(t)}}var jl=[],Nl=0,Hs=null,Ea=0,Ht=[],Tt=0,vn=null,Zt=1,Kt="";function tn(e,t){jl[Nl++]=Ea,jl[Nl++]=Hs,Hs=e,Ea=t}function Mo(e,t,n){Ht[Tt++]=Zt,Ht[Tt++]=Kt,Ht[Tt++]=vn,vn=e;var l=Zt;e=Kt;var a=32-bt(l)-1;l&=~(1<<a),n+=1;var i=32-bt(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,Zt=1<<32-bt(t)+a|n<<a|l,Kt=i+e}else Zt=1<<i|n<<a|l,Kt=e}function Bc(e){e.return!==null&&(tn(e,1),Mo(e,1,0))}function Oc(e){for(;e===Hs;)Hs=jl[--Nl],jl[Nl]=null,Ea=jl[--Nl],jl[Nl]=null;for(;e===vn;)vn=Ht[--Tt],Ht[Tt]=null,Kt=Ht[--Tt],Ht[Tt]=null,Zt=Ht[--Tt],Ht[Tt]=null}function Ro(e,t){Ht[Tt++]=Zt,Ht[Tt++]=Kt,Ht[Tt++]=vn,Zt=t.id,Kt=t.overflow,vn=e}var lt=null,ze=null,ve=!1,En=null,zt=!1,jc=Error(u(519));function Bn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ba(Ct(t,e)),jc}function Uo(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[nt]=e,t[ot]=l,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Qa.length;n++)ge(Qa[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),Wu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Pu(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||nm(t.textContent,n)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=Pt),t=!0):t=!1,t||Bn(e,!0)}function Lo(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:lt=lt.return}}function kl(e){if(e!==lt)return!1;if(!ve)return Lo(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Vr(e.type,e.memoizedProps)),n=!n),n&&ze&&Bn(e),Lo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=dm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ze=dm(e)}else t===27?(t=ze,Rn(e.type)?(e=Jr,Jr=null,ze=e):ze=t):ze=lt?Mt(e.stateNode.nextSibling):null;return!0}function Fn(){ze=lt=null,ve=!1}function Nc(){var e=En;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),En=null),e}function Ba(e){En===null?En=[e]:En.push(e)}var kc=S(null),Pn=null,nn=null;function On(e,t,n){U(kc,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=kc.current,H(kc)}function wc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ac(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=a;for(var x=0;x<t.length;x++)if(f.context===t[x]){i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),wc(i.return,n,e),l||(r=null);break e}i=f.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(u(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),wc(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function wl(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var f=a.type;yt(a.pendingProps.value,r.value)||(e!==null?e.push(f):e=[f])}}else if(a===le.current){if(r=a.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Wa):e=[Wa])}a=a.return}e!==null&&Ac(t,e,n,l),t.flags|=262144}function Ts(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function In(e){Pn=e,nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return qo(Pn,e)}function zs(e,t){return Pn===null&&In(e),qo(e,t)}function qo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},nn===null){if(e===null)throw Error(u(308));nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else nn=nn.next=t;return n}var a0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},s0=c.unstable_scheduleCallback,i0=c.unstable_NormalPriority,Qe={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _c(){return{controller:new a0,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&s0(i0,function(){e.controller.abort()})}var ja=null,Cc=0,Al=0,_l=null;function c0(e,t){if(ja===null){var n=ja=[];Cc=0,Al=zr(),_l={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Cc++,t.then(Go,Go),t}function Go(){if(--Cc===0&&ja!==null){_l!==null&&(_l.status="fulfilled");var e=ja;ja=null,Al=0,_l=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function r0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Yo=A.S;A.S=function(e,t){Nf=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&c0(e,t),Yo!==null&&Yo(e,t)};var el=S(null);function Hc(){var e=el.current;return e!==null?e:He.pooledCache}function Ds(e,t){t===null?U(el,el.current):U(el,t.pool)}function Vo(){var e=Hc();return e===null?null:{parent:Qe._currentValue,pool:e}}var Cl=Error(u(460)),Tc=Error(u(474)),Ms=Error(u(542)),Rs={then:function(){}};function Xo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e;default:if(typeof t.status=="string")t.then(Pt,Pt);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ko(e),e}throw nl=t,Cl}}function tl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(nl=n,Cl):n}}var nl=null;function Zo(){if(nl===null)throw Error(u(459));var e=nl;return nl=null,e}function Ko(e){if(e===Cl||e===Ms)throw Error(u(483))}var Hl=null,Na=0;function Us(e){var t=Na;return Na+=1,Hl===null&&(Hl=[]),Qo(Hl,e,t)}function ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ls(e,t){throw t.$$typeof===D?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jo(e){function t(v,b){if(e){var E=v.deletions;E===null?(v.deletions=[b],v.flags|=16):E.push(b)}}function n(v,b){if(!e)return null;for(;b!==null;)t(v,b),b=b.sibling;return null}function l(v){for(var b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function a(v,b){return v=en(v,b),v.index=0,v.sibling=null,v}function i(v,b,E){return v.index=E,e?(E=v.alternate,E!==null?(E=E.index,E<b?(v.flags|=67108866,b):E):(v.flags|=67108866,b)):(v.flags|=1048576,b)}function r(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function f(v,b,E,T){return b===null||b.tag!==6?(b=vc(E,v.mode,T),b.return=v,b):(b=a(b,E),b.return=v,b)}function x(v,b,E,T){var te=E.type;return te===Q?_(v,b,E.props.children,T,E.key):b!==null&&(b.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&tl(te)===b.type)?(b=a(b,E.props),ka(b,E),b.return=v,b):(b=Cs(E.type,E.key,E.props,null,v.mode,T),ka(b,E),b.return=v,b)}function B(v,b,E,T){return b===null||b.tag!==4||b.stateNode.containerInfo!==E.containerInfo||b.stateNode.implementation!==E.implementation?(b=Ec(E,v.mode,T),b.return=v,b):(b=a(b,E.children||[]),b.return=v,b)}function _(v,b,E,T,te){return b===null||b.tag!==7?(b=Wn(E,v.mode,T,te),b.return=v,b):(b=a(b,E),b.return=v,b)}function z(v,b,E){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=vc(""+b,v.mode,E),b.return=v,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case q:return E=Cs(b.type,b.key,b.props,null,v.mode,E),ka(E,b),E.return=v,E;case Z:return b=Ec(b,v.mode,E),b.return=v,b;case Y:return b=tl(b),z(v,b,E)}if(Le(b)||Ce(b))return b=Wn(b,v.mode,E,null),b.return=v,b;if(typeof b.then=="function")return z(v,Us(b),E);if(b.$$typeof===$)return z(v,zs(v,b),E);Ls(v,b)}return null}function j(v,b,E,T){var te=b!==null?b.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return te!==null?null:f(v,b,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case q:return E.key===te?x(v,b,E,T):null;case Z:return E.key===te?B(v,b,E,T):null;case Y:return E=tl(E),j(v,b,E,T)}if(Le(E)||Ce(E))return te!==null?null:_(v,b,E,T,null);if(typeof E.then=="function")return j(v,b,Us(E),T);if(E.$$typeof===$)return j(v,b,zs(v,E),T);Ls(v,E)}return null}function w(v,b,E,T,te){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return v=v.get(E)||null,f(b,v,""+T,te);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case q:return v=v.get(T.key===null?E:T.key)||null,x(b,v,T,te);case Z:return v=v.get(T.key===null?E:T.key)||null,B(b,v,T,te);case Y:return T=tl(T),w(v,b,E,T,te)}if(Le(T)||Ce(T))return v=v.get(E)||null,_(b,v,T,te,null);if(typeof T.then=="function")return w(v,b,E,Us(T),te);if(T.$$typeof===$)return w(v,b,E,zs(b,T),te);Ls(b,T)}return null}function W(v,b,E,T){for(var te=null,Ee=null,ee=b,me=b=0,ye=null;ee!==null&&me<E.length;me++){ee.index>me?(ye=ee,ee=null):ye=ee.sibling;var Be=j(v,ee,E[me],T);if(Be===null){ee===null&&(ee=ye);break}e&&ee&&Be.alternate===null&&t(v,ee),b=i(Be,b,me),Ee===null?te=Be:Ee.sibling=Be,Ee=Be,ee=ye}if(me===E.length)return n(v,ee),ve&&tn(v,me),te;if(ee===null){for(;me<E.length;me++)ee=z(v,E[me],T),ee!==null&&(b=i(ee,b,me),Ee===null?te=ee:Ee.sibling=ee,Ee=ee);return ve&&tn(v,me),te}for(ee=l(ee);me<E.length;me++)ye=w(ee,v,me,E[me],T),ye!==null&&(e&&ye.alternate!==null&&ee.delete(ye.key===null?me:ye.key),b=i(ye,b,me),Ee===null?te=ye:Ee.sibling=ye,Ee=ye);return e&&ee.forEach(function(Yn){return t(v,Yn)}),ve&&tn(v,me),te}function se(v,b,E,T){if(E==null)throw Error(u(151));for(var te=null,Ee=null,ee=b,me=b=0,ye=null,Be=E.next();ee!==null&&!Be.done;me++,Be=E.next()){ee.index>me?(ye=ee,ee=null):ye=ee.sibling;var Yn=j(v,ee,Be.value,T);if(Yn===null){ee===null&&(ee=ye);break}e&&ee&&Yn.alternate===null&&t(v,ee),b=i(Yn,b,me),Ee===null?te=Yn:Ee.sibling=Yn,Ee=Yn,ee=ye}if(Be.done)return n(v,ee),ve&&tn(v,me),te;if(ee===null){for(;!Be.done;me++,Be=E.next())Be=z(v,Be.value,T),Be!==null&&(b=i(Be,b,me),Ee===null?te=Be:Ee.sibling=Be,Ee=Be);return ve&&tn(v,me),te}for(ee=l(ee);!Be.done;me++,Be=E.next())Be=w(ee,v,me,Be.value,T),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?me:Be.key),b=i(Be,b,me),Ee===null?te=Be:Ee.sibling=Be,Ee=Be);return e&&ee.forEach(function(bx){return t(v,bx)}),ve&&tn(v,me),te}function _e(v,b,E,T){if(typeof E=="object"&&E!==null&&E.type===Q&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case q:e:{for(var te=E.key;b!==null;){if(b.key===te){if(te=E.type,te===Q){if(b.tag===7){n(v,b.sibling),T=a(b,E.props.children),T.return=v,v=T;break e}}else if(b.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&tl(te)===b.type){n(v,b.sibling),T=a(b,E.props),ka(T,E),T.return=v,v=T;break e}n(v,b);break}else t(v,b);b=b.sibling}E.type===Q?(T=Wn(E.props.children,v.mode,T,E.key),T.return=v,v=T):(T=Cs(E.type,E.key,E.props,null,v.mode,T),ka(T,E),T.return=v,v=T)}return r(v);case Z:e:{for(te=E.key;b!==null;){if(b.key===te)if(b.tag===4&&b.stateNode.containerInfo===E.containerInfo&&b.stateNode.implementation===E.implementation){n(v,b.sibling),T=a(b,E.children||[]),T.return=v,v=T;break e}else{n(v,b);break}else t(v,b);b=b.sibling}T=Ec(E,v.mode,T),T.return=v,v=T}return r(v);case Y:return E=tl(E),_e(v,b,E,T)}if(Le(E))return W(v,b,E,T);if(Ce(E)){if(te=Ce(E),typeof te!="function")throw Error(u(150));return E=te.call(E),se(v,b,E,T)}if(typeof E.then=="function")return _e(v,b,Us(E),T);if(E.$$typeof===$)return _e(v,b,zs(v,E),T);Ls(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,b!==null&&b.tag===6?(n(v,b.sibling),T=a(b,E),T.return=v,v=T):(n(v,b),T=vc(E,v.mode,T),T.return=v,v=T),r(v)):n(v,b)}return function(v,b,E,T){try{Na=0;var te=_e(v,b,E,T);return Hl=null,te}catch(ee){if(ee===Cl||ee===Ms)throw ee;var Ee=vt(29,ee,null,v.mode);return Ee.lanes=T,Ee.return=v,Ee}}}var ll=Jo(!0),$o=Jo(!1),jn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=_s(e),Ho(e,null,n),t}return As(e,l,t,n),_s(e)}function wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Lu(e,n)}}function Mc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rc=!1;function Aa(){if(Rc){var e=_l;if(e!==null)throw e}}function _a(e,t,n,l){Rc=!1;var a=e.updateQueue;jn=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var x=f,B=x.next;x.next=null,r===null?i=B:r.next=B,r=x;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==r&&(f===null?_.firstBaseUpdate=B:f.next=B,_.lastBaseUpdate=x))}if(i!==null){var z=a.baseState;r=0,_=B=x=null,f=i;do{var j=f.lane&-536870913,w=j!==f.lane;if(w?(be&j)===j:(l&j)===j){j!==0&&j===Al&&(Rc=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,se=f;j=t;var _e=n;switch(se.tag){case 1:if(W=se.payload,typeof W=="function"){z=W.call(_e,z,j);break e}z=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=se.payload,j=typeof W=="function"?W.call(_e,z,j):W,j==null)break e;z=O({},z,j);break e;case 2:jn=!0}}j=f.callback,j!==null&&(e.flags|=64,w&&(e.flags|=8192),w=a.callbacks,w===null?a.callbacks=[j]:w.push(j))}else w={lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(B=_=w,x=z):_=_.next=w,r|=j;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;w=f,f=w.next,w.next=null,a.lastBaseUpdate=w,a.shared.pending=null}}while(!0);_===null&&(x=z),a.baseState=x,a.firstBaseUpdate=B,a.lastBaseUpdate=_,i===null&&(a.shared.lanes=0),Hn|=r,e.lanes=r,e.memoizedState=z}}function Wo(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Fo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wo(n[e],t)}var Tl=S(null),qs=S(0);function Po(e,t){e=mn,U(qs,e),U(Tl,t),mn=e|t.baseLanes}function Uc(){U(qs,mn),U(Tl,Tl.current)}function Lc(){mn=qs.current,H(Tl),H(qs)}var Et=S(null),Dt=null;function wn(e){var t=e.alternate;U(Ye,Ye.current&1),U(Et,e),Dt===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Dt=e)}function qc(e){U(Ye,Ye.current),U(Et,e),Dt===null&&(Dt=e)}function Io(e){e.tag===22?(U(Ye,Ye.current),U(Et,e),Dt===null&&(Dt=e)):An()}function An(){U(Ye,Ye.current),U(Et,Et.current)}function Bt(e){H(Et),Dt===e&&(Dt=null),H(Ye)}var Ye=S(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zr(n)||Kr(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var an=0,fe=null,we=null,Ze=null,Ys=!1,zl=!1,al=!1,Vs=0,Ca=0,Dl=null,u0=0;function qe(){throw Error(u(321))}function Gc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Yc(e,t,n,l,a,i){return an=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Md:lr,al=!1,i=n(l,a),al=!1,zl&&(i=td(t,n,l,a)),ed(e),i}function ed(e){A.H=za;var t=we!==null&&we.next!==null;if(an=0,Ze=we=fe=null,Ys=!1,Ca=0,Dl=null,t)throw Error(u(300));e===null||Ke||(e=e.dependencies,e!==null&&Ts(e)&&(Ke=!0))}function td(e,t,n,l){fe=e;var a=0;do{if(zl&&(Dl=null),Ca=0,zl=!1,25<=a)throw Error(u(301));if(a+=1,Ze=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=Rd,i=t(n,l)}while(zl);return i}function o0(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Ha(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(fe.flags|=1024),t}function Vc(){var e=Vs!==0;return Vs=0,e}function Xc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Qc(e){if(Ys){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ys=!1}an=0,Ze=we=fe=null,zl=!1,Ca=Vs=0,Dl=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?fe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ve(){if(we===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ze===null?fe.memoizedState:Ze.next;if(t!==null)Ze=t,we=e;else{if(e===null)throw fe.alternate===null?Error(u(467)):Error(u(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ze===null?fe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(e){var t=Ca;return Ca+=1,Dl===null&&(Dl=[]),e=Qo(Dl,e,t),t=fe,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Md:lr),e}function Qs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ha(e);if(e.$$typeof===$)return at(e)}throw Error(u(438,String(e)))}function Zc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Xs(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=he;return t.index++,n}function sn(e,t){return typeof t=="function"?t(e):t}function Zs(e){var t=Ve();return Kc(t,we,e)}function Kc(e,t,n){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var f=r=null,x=null,B=t,_=!1;do{var z=B.lane&-536870913;if(z!==B.lane?(be&z)===z:(an&z)===z){var j=B.revertLane;if(j===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),z===Al&&(_=!0);else if((an&j)===j){B=B.next,j===Al&&(_=!0);continue}else z={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},x===null?(f=x=z,r=i):x=x.next=z,fe.lanes|=j,Hn|=j;z=B.action,al&&n(i,z),i=B.hasEagerState?B.eagerState:n(i,z)}else j={lane:z,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},x===null?(f=x=j,r=i):x=x.next=j,fe.lanes|=z,Hn|=z;B=B.next}while(B!==null&&B!==t);if(x===null?r=i:x.next=f,!yt(i,e.memoizedState)&&(Ke=!0,_&&(n=_l,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=x,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Jc(e){var t=Ve(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);yt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function nd(e,t,n){var l=fe,a=Ve(),i=ve;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var r=!yt((we||a).memoizedState,n);if(r&&(a.memoizedState=n,Ke=!0),a=a.queue,Fc(sd.bind(null,l,a,e),[e]),a.getSnapshot!==t||r||Ze!==null&&Ze.memoizedState.tag&1){if(l.flags|=2048,Ml(9,{destroy:void 0},ad.bind(null,l,a,n,t),null),He===null)throw Error(u(349));i||(an&127)!==0||ld(l,t,n)}return n}function ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Xs(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,l){t.value=n,t.getSnapshot=l,id(t)&&cd(e)}function sd(e,t,n){return n(function(){id(t)&&cd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function cd(e){var t=$n(e,2);t!==null&&xt(t,e,2)}function $c(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),al){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:e},t}function rd(e,t,n,l){return e.baseState=n,Kc(e,we,typeof l=="function"?l:sn)}function d0(e,t,n,l,a){if($s(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};A.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,ud(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ud(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=A.T,r={};A.T=r;try{var f=n(a,l),x=A.S;x!==null&&x(r,f),od(e,t,f)}catch(B){Wc(e,t,B)}finally{i!==null&&r.types!==null&&(i.types=r.types),A.T=i}}else try{i=n(a,l),od(e,t,i)}catch(B){Wc(e,t,B)}}function od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){dd(e,t,l)},function(l){return Wc(e,t,l)}):dd(e,t,n)}function dd(e,t,n){t.status="fulfilled",t.value=n,fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ud(e,n)))}function Wc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,fd(t),t=t.next;while(t!==l)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function md(e,t){return t}function pd(e,t){if(ve){var n=He.formState;if(n!==null){e:{var l=fe;if(ve){if(ze){t:{for(var a=ze,i=zt;a.nodeType!==8;){if(!i){a=null;break t}if(a=Mt(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){ze=Mt(a.nextSibling),l=a.data==="F!";break e}}Bn(l)}l=!1}l&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:md,lastRenderedState:t},n.queue=l,n=Td.bind(null,fe,l),l.dispatch=n,l=$c(!1),i=nr.bind(null,fe,!1,l.queue),l=ut(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=d0.bind(null,fe,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function hd(e){var t=Ve();return xd(t,we,e)}function xd(e,t,n){if(t=Kc(e,t,md)[0],e=Zs(sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ha(t)}catch(r){throw r===Cl?Ms:r}else l=t;t=Ve();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,Ml(9,{destroy:void 0},f0.bind(null,a,n),null)),[l,i,e]}function f0(e,t){e.action=t}function Sd(e){var t=Ve(),n=we;if(n!==null)return xd(t,n,e);Ve(),t=t.memoizedState,n=Ve();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ml(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Xs(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function gd(){return Ve().memoizedState}function Ks(e,t,n,l){var a=ut();fe.flags|=e,a.memoizedState=Ml(1|t,{destroy:void 0},n,l===void 0?null:l)}function Js(e,t,n,l){var a=Ve();l=l===void 0?null:l;var i=a.memoizedState.inst;we!==null&&l!==null&&Gc(l,we.memoizedState.deps)?a.memoizedState=Ml(t,i,n,l):(fe.flags|=e,a.memoizedState=Ml(1|t,i,n,l))}function bd(e,t){Ks(8390656,8,e,t)}function Fc(e,t){Js(2048,8,e,t)}function m0(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Xs(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yd(e){var t=Ve().memoizedState;return m0({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function vd(e,t){return Js(4,2,e,t)}function Ed(e,t){return Js(4,4,e,t)}function Bd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){n=n!=null?n.concat([e]):null,Js(4,4,Bd.bind(null,t,e),n)}function Pc(){}function jd(e,t){var n=Ve();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Gc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Nd(e,t){var n=Ve();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Gc(t,l[1]))return l[0];if(l=e(),al){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l}function Ic(e,t,n){return n===void 0||(an&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=wf(),fe.lanes|=e,Hn|=e,n)}function kd(e,t,n,l){return yt(n,t)?n:Tl.current!==null?(e=Ic(e,n,l),yt(e,t)||(Ke=!0),e):(an&42)===0||(an&1073741824)!==0&&(be&261930)===0?(Ke=!0,e.memoizedState=n):(e=wf(),fe.lanes|=e,Hn|=e,t)}function wd(e,t,n,l,a){var i=L.p;L.p=i!==0&&8>i?i:8;var r=A.T,f={};A.T=f,nr(e,!1,t,n);try{var x=a(),B=A.S;if(B!==null&&B(f,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var _=r0(x,l);Ta(e,t,_,Nt(e))}else Ta(e,t,l,Nt(e))}catch(z){Ta(e,t,{then:function(){},status:"rejected",reason:z},Nt())}finally{L.p=i,r!==null&&f.types!==null&&(r.types=f.types),A.T=r}}function p0(){}function er(e,t,n,l){if(e.tag!==5)throw Error(u(476));var a=Ad(e).queue;wd(e,a,t,R,n===null?p0:function(){return _d(e),n(l)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _d(e){var t=Ad(e);t.next===null&&(t=e.alternate.memoizedState),Ta(e,t.next.queue,{},Nt())}function tr(){return at(Wa)}function Cd(){return Ve().memoizedState}function Hd(){return Ve().memoizedState}function h0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=Nn(n);var l=kn(t,e,n);l!==null&&(xt(l,t,n),wa(l,t,n)),t={cache:_c()},e.payload=t;return}t=t.return}}function x0(e,t,n){var l=Nt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},$s(e)?zd(t,n):(n=bc(e,t,n,l),n!==null&&(xt(n,e,l),Dd(n,t,l)))}function Td(e,t,n){var l=Nt();Ta(e,t,n,l)}function Ta(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if($s(e))zd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,f=i(r,n);if(a.hasEagerState=!0,a.eagerState=f,yt(f,r))return As(e,t,a,0),He===null&&ws(),!1}catch{}if(n=bc(e,t,a,l),n!==null)return xt(n,e,l),Dd(n,t,l),!0}return!1}function nr(e,t,n,l){if(l={lane:2,revertLane:zr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$s(e)){if(t)throw Error(u(479))}else t=bc(e,n,l,2),t!==null&&xt(t,e,2)}function $s(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function zd(e,t){zl=Ys=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dd(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Lu(e,n)}}var za={readContext:at,use:Qs,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};za.useEffectEvent=qe;var Md={readContext:at,use:Qs,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:bd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ks(4194308,4,Bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ks(4194308,4,e,t)},useInsertionEffect:function(e,t){Ks(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var l=e();if(al){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=ut();if(n!==void 0){var a=n(t);if(al){gn(!0);try{n(t)}finally{gn(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=x0.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=$c(e);var t=e.queue,n=Td.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Pc,useDeferredValue:function(e,t){var n=ut();return Ic(n,e,t)},useTransition:function(){var e=$c(!1);return e=wd.bind(null,fe,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=fe,a=ut();if(ve){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),He===null)throw Error(u(349));(be&127)!==0||ld(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,bd(sd.bind(null,l,i,e),[e]),l.flags|=2048,Ml(9,{destroy:void 0},ad.bind(null,l,i,n,t),null),n},useId:function(){var e=ut(),t=He.identifierPrefix;if(ve){var n=Kt,l=Zt;n=(l&~(1<<32-bt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Vs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=u0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:tr,useFormState:pd,useActionState:pd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nr.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Zc,useCacheRefresh:function(){return ut().memoizedState=h0.bind(null,fe)},useEffectEvent:function(e){var t=ut(),n={impl:e};return t.memoizedState=n,function(){if((Oe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},lr={readContext:at,use:Qs,useCallback:jd,useContext:at,useEffect:Fc,useImperativeHandle:Od,useInsertionEffect:vd,useLayoutEffect:Ed,useMemo:Nd,useReducer:Zs,useRef:gd,useState:function(){return Zs(sn)},useDebugValue:Pc,useDeferredValue:function(e,t){var n=Ve();return kd(n,we.memoizedState,e,t)},useTransition:function(){var e=Zs(sn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ha(e),t]},useSyncExternalStore:nd,useId:Cd,useHostTransitionStatus:tr,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=Ve();return rd(n,we,e,t)},useMemoCache:Zc,useCacheRefresh:Hd};lr.useEffectEvent=yd;var Rd={readContext:at,use:Qs,useCallback:jd,useContext:at,useEffect:Fc,useImperativeHandle:Od,useInsertionEffect:vd,useLayoutEffect:Ed,useMemo:Nd,useReducer:Jc,useRef:gd,useState:function(){return Jc(sn)},useDebugValue:Pc,useDeferredValue:function(e,t){var n=Ve();return we===null?Ic(n,e,t):kd(n,we.memoizedState,e,t)},useTransition:function(){var e=Jc(sn)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Ha(e),t]},useSyncExternalStore:nd,useId:Cd,useHostTransitionStatus:tr,useFormState:Sd,useActionState:Sd,useOptimistic:function(e,t){var n=Ve();return we!==null?rd(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Zc,useCacheRefresh:Hd};Rd.useEffectEvent=yd;function ar(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sr={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Nt(),a=Nn(l);a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,l),t!==null&&(xt(t,e,l),wa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Nt(),a=Nn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=kn(e,a,l),t!==null&&(xt(t,e,l),wa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),l=Nn(n);l.tag=2,t!=null&&(l.callback=t),t=kn(e,l,n),t!==null&&(xt(t,e,n),wa(t,e,n))}};function Ud(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!ya(n,l)||!ya(a,i):!0}function Ld(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&sr.enqueueReplaceState(t,t.state,null)}function sl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function qd(e){ks(e)}function Gd(e){console.error(e)}function Yd(e){ks(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Vd(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ir(e,t,n){return n=Nn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function Xd(e){return e=Nn(e),e.tag=3,e}function Qd(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Vd(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Vd(t,n,l),typeof a!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function S0(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&wl(t,n,a,!0),n=Et.current,n!==null){switch(n.tag){case 31:case 13:return Dt===null?ri():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Rs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Cr(e,l,a)),!1;case 22:return n.flags|=65536,l===Rs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Cr(e,l,a)),!1}throw Error(u(435,n.tag))}return Cr(e,l,a),ri(),!1}if(ve)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==jc&&(e=Error(u(422),{cause:l}),Ba(Ct(e,n)))):(l!==jc&&(t=Error(u(423),{cause:l}),Ba(Ct(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Ct(l,n),a=ir(e.stateNode,l,a),Mc(e,a),Ge!==4&&(Ge=2)),!1;var i=Error(u(520),{cause:l});if(i=Ct(i,n),Ya===null?Ya=[i]:Ya.push(i),Ge!==4&&(Ge=2),t===null)return!0;l=Ct(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ir(n.stateNode,l,e),Mc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Tn===null||!Tn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Xd(a),Qd(a,e,n,l),Mc(n,a),!1}n=n.return}while(n!==null);return!1}var cr=Error(u(461)),Ke=!1;function st(e,t,n,l){t.child=e===null?$o(t,null,n,l):ll(t,e.child,n,l)}function Zd(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var f in l)f!=="ref"&&(r[f]=l[f])}else r=l;return In(t),l=Yc(e,t,n,r,i,a),f=Vc(),e!==null&&!Ke?(Xc(e,t,a),cn(e,t,a)):(ve&&f&&Bc(t),t.flags|=1,st(e,t,l,a),t.child)}function Kd(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!yc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Jd(e,t,i,l,a)):(e=Cs(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!hr(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(r,l)&&e.ref===t.ref)return cn(e,t,a)}return t.flags|=1,e=en(i,l),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(ya(i,l)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=l=i,hr(e,a))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,cn(e,t,a)}return rr(e,t,n,l,a)}function $d(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Wd(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ds(t,i!==null?i.cachePool:null),i!==null?Po(t,i):Uc(),Io(t);else return l=t.lanes=536870912,Wd(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Ds(t,i.cachePool),Po(t,i),An(),t.memoizedState=null):(e!==null&&Ds(t,null),Uc(),An());return st(e,t,a,n),t.child}function Da(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wd(e,t,n,l,a){var i=Hc();return i=i===null?null:{parent:Qe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ds(t,null),Uc(),Io(t),e!==null&&wl(e,t,l,!0),t.childLanes=a,null}function Fs(e,t){return t=Is({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fd(e,t,n){return ll(t,e.child,null,n),e=Fs(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function g0(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=Fs(t,l),t.lanes=536870912,Da(null,e);if(qc(t),(e=ze)?(e=om(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Zt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=zo(e),n.return=t,t.child=n,lt=t,ze=null)):e=null,e===null)throw Bn(t);return t.lanes=536870912,null}return Fs(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(qc(t),a)if(t.flags&256)t.flags&=-257,t=Fd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ke||wl(e,t,n,!1),a=(n&e.childLanes)!==0,Ke||a){if(l=He,l!==null&&(r=qu(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,$n(e,r),xt(l,e,r),cr;ri(),t=Fd(e,t,n)}else e=i.treeContext,ze=Mt(r.nextSibling),lt=t,ve=!0,En=null,zt=!1,e!==null&&Ro(t,e),t=Fs(t,l),t.flags|=4096;return t}return e=en(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ps(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function rr(e,t,n,l,a){return In(t),n=Yc(e,t,n,l,void 0,a),l=Vc(),e!==null&&!Ke?(Xc(e,t,a),cn(e,t,a)):(ve&&l&&Bc(t),t.flags|=1,st(e,t,n,a),t.child)}function Pd(e,t,n,l,a,i){return In(t),t.updateQueue=null,n=td(t,l,n,a),ed(e),l=Vc(),e!==null&&!Ke?(Xc(e,t,i),cn(e,t,i)):(ve&&l&&Bc(t),t.flags|=1,st(e,t,n,i),t.child)}function Id(e,t,n,l,a){if(In(t),t.stateNode===null){var i=Ol,r=n.contextType;typeof r=="object"&&r!==null&&(i=at(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},zc(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?at(r):Ol,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ar(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&sr.enqueueReplaceState(i,i.state,null),_a(t,l,i,a),Aa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,x=sl(n,f);i.props=x;var B=i.context,_=n.contextType;r=Ol,typeof _=="object"&&_!==null&&(r=at(_));var z=n.getDerivedStateFromProps;_=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||B!==r)&&Ld(t,i,l,r),jn=!1;var j=t.memoizedState;i.state=j,_a(t,l,i,a),Aa(),B=t.memoizedState,f||j!==B||jn?(typeof z=="function"&&(ar(t,n,z,l),B=t.memoizedState),(x=jn||Ud(t,n,x,l,j,B,r))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=B),i.props=l,i.state=B,i.context=r,l=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Dc(e,t),r=t.memoizedProps,_=sl(n,r),i.props=_,z=t.pendingProps,j=i.context,B=n.contextType,x=Ol,typeof B=="object"&&B!==null&&(x=at(B)),f=n.getDerivedStateFromProps,(B=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==z||j!==x)&&Ld(t,i,l,x),jn=!1,j=t.memoizedState,i.state=j,_a(t,l,i,a),Aa();var w=t.memoizedState;r!==z||j!==w||jn||e!==null&&e.dependencies!==null&&Ts(e.dependencies)?(typeof f=="function"&&(ar(t,n,f,l),w=t.memoizedState),(_=jn||Ud(t,n,_,l,j,w,x)||e!==null&&e.dependencies!==null&&Ts(e.dependencies))?(B||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,w,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,w,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=x,l=_):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ps(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ll(t,e.child,null,a),t.child=ll(t,null,n,a)):st(e,t,n,a),t.memoizedState=i.state,e=t.child):e=cn(e,t,a),e}function ef(e,t,n,l){return Fn(),t.flags|=256,st(e,t,n,l),t.child}var ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function or(e){return{baseLanes:e,cachePool:Vo()}}function dr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jt),e}function tf(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(a?wn(t):An(),(e=ze)?(e=om(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vn!==null?{id:Zt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},n=zo(e),n.return=t,t.child=n,lt=t,ze=null)):e=null,e===null)throw Bn(t);return Kr(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,a?(An(),a=t.mode,f=Is({mode:"hidden",children:f},a),l=Wn(l,a,n,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=or(n),l.childLanes=dr(e,r,n),t.memoizedState=ur,Da(null,l)):(wn(t),fr(t,f))}var x=e.memoizedState;if(x!==null&&(f=x.dehydrated,f!==null)){if(i)t.flags&256?(wn(t),t.flags&=-257,t=mr(e,t,n)):t.memoizedState!==null?(An(),t.child=e.child,t.flags|=128,t=null):(An(),f=l.fallback,a=t.mode,l=Is({mode:"visible",children:l.children},a),f=Wn(f,a,n,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,ll(t,e.child,null,n),l=t.child,l.memoizedState=or(n),l.childLanes=dr(e,r,n),t.memoizedState=ur,t=Da(null,l));else if(wn(t),Kr(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;r=B,l=Error(u(419)),l.stack="",l.digest=r,Ba({value:l,source:null,stack:null}),t=mr(e,t,n)}else if(Ke||wl(e,t,n,!1),r=(n&e.childLanes)!==0,Ke||r){if(r=He,r!==null&&(l=qu(r,n),l!==0&&l!==x.retryLane))throw x.retryLane=l,$n(e,l),xt(r,e,l),cr;Zr(f)||ri(),t=mr(e,t,n)}else Zr(f)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ze=Mt(f.nextSibling),lt=t,ve=!0,En=null,zt=!1,e!==null&&Ro(t,e),t=fr(t,l.children),t.flags|=4096);return t}return a?(An(),f=l.fallback,a=t.mode,x=e.child,B=x.sibling,l=en(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,B!==null?f=en(B,f):(f=Wn(f,a,n,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,Da(null,l),l=t.child,f=e.child.memoizedState,f===null?f=or(n):(a=f.cachePool,a!==null?(x=Qe._currentValue,a=a.parent!==x?{parent:x,pool:x}:a):a=Vo(),f={baseLanes:f.baseLanes|n,cachePool:a}),l.memoizedState=f,l.childLanes=dr(e,r,n),t.memoizedState=ur,Da(e.child,l)):(wn(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function fr(e,t){return t=Is({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Is(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function mr(e,t,n){return ll(t,e.child,null,n),e=fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),wc(e.return,t,n)}function pr(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function lf(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=Ye.current,f=(r&2)!==0;if(f?(r=r&1|2,t.flags|=128):r&=1,U(Ye,r),st(e,t,l,n),l=ve?Ea:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,n,t);else if(e.tag===19)nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Gs(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),pr(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Gs(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}pr(t,!0,n,null,i,l);break;case"together":pr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(wl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ts(e)))}function b0(e,t,n){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),On(t,Qe,e.memoizedState.cache),Fn();break;case 27:case 5:kt(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:On(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?tf(e,t,n):(wn(t),e=cn(e,t,n),e!==null?e.sibling:null);wn(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(wl(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return lf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(Ye,Ye.current),l)break;return null;case 22:return t.lanes=0,$d(e,t,n,t.pendingProps);case 24:On(t,Qe,e.memoizedState.cache)}return cn(e,t,n)}function af(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!hr(e,n)&&(t.flags&128)===0)return Ke=!1,b0(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,ve&&(t.flags&1048576)!==0&&Mo(t,Ea,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")yc(e)?(l=sl(e,l),t.tag=1,t=Id(null,t,e,l,n)):(t.tag=0,t=rr(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===ue){t.tag=11,t=Zd(null,t,e,l,n);break e}else if(a===X){t.tag=14,t=Kd(null,t,e,l,n);break e}}throw t=Ie(e)||e,Error(u(306,t,""))}}return t;case 0:return rr(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=sl(l,t.pendingProps),Id(e,t,l,a,n);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Dc(e,t),_a(t,l,null,n);var r=t.memoizedState;if(l=r.cache,On(t,Qe,l),l!==i.cache&&Ac(t,[Qe],n,!0),Aa(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=ef(e,t,l,n);break e}else if(l!==a){a=Ct(Error(u(424)),t),Ba(a),t=ef(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ze=Mt(e.firstChild),lt=t,ve=!0,En=null,zt=!0,n=$o(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),l===a){t=cn(e,t,n);break e}st(e,t,l,n)}t=t.child}return t;case 26:return Ps(e,t),e===null?(n=xm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,l=hi(de.current).createElement(n),l[nt]=t,l[ot]=e,it(l,n,e),et(l),t.stateNode=l):t.memoizedState=xm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kt(t),e===null&&ve&&(l=t.stateNode=mm(t.type,t.pendingProps,de.current),lt=t,zt=!0,a=ze,Rn(t.type)?(Jr=a,ze=Mt(l.firstChild)):ze=a),st(e,t,t.pendingProps.children,n),Ps(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((a=l=ze)&&(l=$0(l,t.type,t.pendingProps,zt),l!==null?(t.stateNode=l,lt=t,ze=Mt(l.firstChild),zt=!1,a=!0):a=!1),a||Bn(t)),kt(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Vr(a,i)?l=null:r!==null&&Vr(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Yc(e,t,o0,null,null,n),Wa._currentValue=a),Ps(e,t),st(e,t,l,n),t.child;case 6:return e===null&&ve&&((e=n=ze)&&(n=W0(n,t.pendingProps,zt),n!==null?(t.stateNode=n,lt=t,ze=null,e=!0):e=!1),e||Bn(t)),null;case 13:return tf(e,t,n);case 4:return Xe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ll(t,null,l,n):st(e,t,l,n),t.child;case 11:return Zd(e,t,t.type,t.pendingProps,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,On(t,t.type,l.value),st(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,In(t),a=at(a),l=l(a),t.flags|=1,st(e,t,l,n),t.child;case 14:return Kd(e,t,t.type,t.pendingProps,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 19:return lf(e,t,n);case 31:return g0(e,t,n);case 22:return $d(e,t,n,t.pendingProps);case 24:return In(t),l=at(Qe),e===null?(a=Hc(),a===null&&(a=He,i=_c(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},zc(t),On(t,Qe,a)):((e.lanes&n)!==0&&(Dc(e,t),_a(t,null,null,n),Aa()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),On(t,Qe,l)):(l=i.cache,On(t,Qe,l),l!==a.cache&&Ac(t,[Qe],n,!0))),st(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function rn(e){e.flags|=4}function xr(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Hf())e.flags|=8192;else throw nl=Rs,Tc}else e.flags&=-16777217}function sf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vm(t))if(Hf())e.flags|=8192;else throw nl=Rs,Tc}function ei(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ru():536870912,e.lanes|=t,ql|=t)}function Ma(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function y0(e,t,n){var l=t.pendingProps;switch(Oc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ln(Qe),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nc())),De(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(rn(t),i!==null?(De(t),sf(t,i)):(De(t),xr(t,a,null,l,n))):i?i!==e.memoizedState?(rn(t),De(t),sf(t,i)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&rn(t),De(t),xr(t,a,e,l,n)),null;case 27:if(Qt(t),n=de.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return De(t),null}e=G.current,kl(t)?Uo(t):(e=mm(a,l,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if(Qt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return De(t),null}if(i=G.current,kl(t))Uo(t);else{var r=hi(de.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[nt]=t,i[ot]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(it(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&rn(t)}}return De(t),xr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=de.current,kl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=lt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||nm(e.nodeValue,n)),e||Bn(t,!0)}else e=hi(e).createTextNode(l),e[nt]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=kl(t),n!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[nt]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=kl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[nt]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),a=!1}else a=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ei(t,t.updateQueue),De(t),null);case 4:return ke(),e===null&&Ur(t.stateNode.containerInfo),De(t),null;case 10:return ln(t.type),De(t),null;case 19:if(H(Ye),l=t.memoizedState,l===null)return De(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Ma(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Gs(e),i!==null){for(t.flags|=128,Ma(l,!1),e=i.updateQueue,t.updateQueue=e,ei(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)To(n,e),n=n.sibling;return U(Ye,Ye.current&1|2),ve&&tn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&St()>si&&(t.flags|=128,a=!0,Ma(l,!1),t.lanes=4194304)}else{if(!a)if(e=Gs(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ei(t,e),Ma(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ve)return De(t),null}else 2*St()-l.renderingStartTime>si&&n!==536870912&&(t.flags|=128,a=!0,Ma(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=St(),e.sibling=null,n=Ye.current,U(Ye,a?n&1|2:n&1),ve&&tn(t,l.treeForkCount),e):(De(t),null);case 22:case 23:return Bt(t),Lc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&ei(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&H(el),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(Qe),De(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function v0(e,t){switch(Oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(Qe),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qt(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(u(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ye),null;case 4:return ke(),null;case 10:return ln(t.type),null;case 22:case 23:return Bt(t),Lc(),e!==null&&H(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(Qe),null;case 25:return null;default:return null}}function cf(e,t){switch(Oc(t),t.tag){case 3:ln(Qe),ke();break;case 26:case 27:case 5:Qt(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:H(Ye);break;case 10:ln(t.type);break;case 22:case 23:Bt(t),Lc(),e!==null&&H(el);break;case 24:ln(Qe)}}function Ra(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(f){Ne(t,t.return,f)}}function _n(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,f=r.destroy;if(f!==void 0){r.destroy=void 0,a=t;var x=n,B=f;try{B()}catch(_){Ne(a,x,_)}}}l=l.next}while(l!==i)}}catch(_){Ne(t,t.return,_)}}function rf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fo(t,n)}catch(l){Ne(e,e.return,l)}}}function uf(e,t,n){n.props=sl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ne(e,t,l)}}function Ua(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){Ne(e,t,a)}}function Jt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){Ne(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ne(e,t,a)}else n.current=null}function of(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){Ne(e,e.return,a)}}function Sr(e,t,n){try{var l=e.stateNode;V0(l,e.type,n,t),l[ot]=t}catch(a){Ne(e,e.return,a)}}function df(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function gr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function br(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pt));else if(l!==4&&(l===27&&Rn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(br(e,t,n),e=e.sibling;e!==null;)br(e,t,n),e=e.sibling}function ti(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Rn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ti(e,t,n),e=e.sibling;e!==null;)ti(e,t,n),e=e.sibling}function ff(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);it(t,l,n),t[nt]=e,t[ot]=n}catch(i){Ne(e,e.return,i)}}var un=!1,Je=!1,yr=!1,mf=typeof WeakSet=="function"?WeakSet:Set,tt=null;function E0(e,t){if(e=e.containerInfo,Gr=Ei,e=Oo(e),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,f=-1,x=-1,B=0,_=0,z=e,j=null;t:for(;;){for(var w;z!==n||a!==0&&z.nodeType!==3||(f=r+a),z!==i||l!==0&&z.nodeType!==3||(x=r+l),z.nodeType===3&&(r+=z.nodeValue.length),(w=z.firstChild)!==null;)j=z,z=w;for(;;){if(z===e)break t;if(j===n&&++B===a&&(f=r),j===i&&++_===l&&(x=r),(w=z.nextSibling)!==null)break;z=j,j=z.parentNode}z=w}n=f===-1||x===-1?null:{start:f,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yr={focusedElem:e,selectionRange:n},Ei=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var W=sl(n.type,a);e=l.getSnapshotBeforeUpdate(W,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ne(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Qr(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function pf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:dn(e,n),l&4&&Ra(5,n);break;case 1:if(dn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ne(n,n.return,r)}else{var a=sl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ne(n,n.return,r)}}l&64&&rf(n),l&512&&Ua(n,n.return);break;case 3:if(dn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fo(e,t)}catch(r){Ne(n,n.return,r)}}break;case 27:t===null&&l&4&&ff(n);case 26:case 5:dn(e,n),t===null&&l&4&&of(n),l&512&&Ua(n,n.return);break;case 12:dn(e,n);break;case 31:dn(e,n),l&4&&Sf(e,n);break;case 13:dn(e,n),l&4&&gf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=C0.bind(null,n),F0(e,n))));break;case 22:if(l=n.memoizedState!==null||un,!l){t=t!==null&&t.memoizedState!==null||Je,a=un;var i=Je;un=l,(Je=t)&&!i?fn(e,n,(n.subtreeFlags&8772)!==0):dn(e,n),un=a,Je=i}break;case 30:break;default:dn(e,n)}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,ft=!1;function on(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 26:Je||Jt(n,t),on(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||Jt(n,t);var l=Me,a=ft;Rn(n.type)&&(Me=n.stateNode,ft=!1),on(e,t,n),Ka(n.stateNode),Me=l,ft=a;break;case 5:Je||Jt(n,t);case 6:if(l=Me,a=ft,Me=null,on(e,t,n),Me=l,ft=a,Me!==null)if(ft)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(n.stateNode)}catch(i){Ne(n,t,i)}else try{Me.removeChild(n.stateNode)}catch(i){Ne(n,t,i)}break;case 18:Me!==null&&(ft?(e=Me,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jl(e)):rm(Me,n.stateNode));break;case 4:l=Me,a=ft,Me=n.stateNode.containerInfo,ft=!0,on(e,t,n),Me=l,ft=a;break;case 0:case 11:case 14:case 15:_n(2,n,t),Je||_n(4,n,t),on(e,t,n);break;case 1:Je||(Jt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&uf(n,t,l)),on(e,t,n);break;case 21:on(e,t,n);break;case 22:Je=(l=Je)||n.memoizedState!==null,on(e,t,n),Je=l;break;default:on(e,t,n)}}function Sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jl(e)}catch(n){Ne(t,t.return,n)}}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(n){Ne(t,t.return,n)}}function B0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mf),t;default:throw Error(u(435,e.tag))}}function ni(e,t){var n=B0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=H0.bind(null,e,l);l.then(a,a)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,r=t,f=r;e:for(;f!==null;){switch(f.tag){case 27:if(Rn(f.type)){Me=f.stateNode,ft=!1;break e}break;case 5:Me=f.stateNode,ft=!1;break e;case 3:case 4:Me=f.stateNode.containerInfo,ft=!0;break e}f=f.return}if(Me===null)throw Error(u(160));xf(i,r,a),Me=null,ft=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}var Gt=null;function bf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),l&4&&(_n(3,e,e.return),Ra(3,e),_n(5,e,e.return));break;case 1:mt(t,e),pt(e),l&512&&(Je||n===null||Jt(n,n.return)),l&64&&un&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=Gt;if(mt(t,e),pt(e),l&512&&(Je||n===null||Jt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[da]||i[nt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),it(i,l,n),i[nt]=e,et(i),l=i;break e;case"link":var r=bm("link","href",a).get(l+(n.href||""));if(r){for(var f=0;f<r.length;f++)if(i=r[f],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(f,1);break t}}i=a.createElement(l),it(i,l,n),a.head.appendChild(i);break;case"meta":if(r=bm("meta","content",a).get(l+(n.content||""))){for(f=0;f<r.length;f++)if(i=r[f],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(f,1);break t}}i=a.createElement(l),it(i,l,n),a.head.appendChild(i);break;default:throw Error(u(468,l))}i[nt]=e,et(i),l=i}e.stateNode=l}else ym(a,e.type,e.stateNode);else e.stateNode=gm(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?ym(a,e.type,e.stateNode):gm(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Sr(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),l&512&&(Je||n===null||Jt(n,n.return)),n!==null&&l&4&&Sr(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),l&512&&(Je||n===null||Jt(n,n.return)),e.flags&32){a=e.stateNode;try{Sl(a,"")}catch(W){Ne(e,e.return,W)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Sr(e,a,n!==null?n.memoizedProps:a)),l&1024&&(yr=!0);break;case 6:if(mt(t,e),pt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(W){Ne(e,e.return,W)}}break;case 3:if(gi=null,a=Gt,Gt=xi(t.containerInfo),mt(t,e),Gt=a,pt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(t.containerInfo)}catch(W){Ne(e,e.return,W)}yr&&(yr=!1,yf(e));break;case 4:l=Gt,Gt=xi(e.stateNode.containerInfo),mt(t,e),pt(e),Gt=l;break;case 12:mt(t,e),pt(e);break;case 31:mt(t,e),pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ni(e,l)));break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ai=St()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ni(e,l)));break;case 22:a=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,B=un,_=Je;if(un=B||a,Je=_||x,mt(t,e),Je=_,un=B,pt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||x||un||Je||il(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(i=x.stateNode,a)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{f=x.stateNode;var z=x.memoizedProps.style,j=z!=null&&z.hasOwnProperty("display")?z.display:null;f.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(W){Ne(x,x.return,W)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=a?"":x.memoizedProps}catch(W){Ne(x,x.return,W)}}}else if(t.tag===18){if(n===null){x=t;try{var w=x.stateNode;a?um(w,!0):um(x.stateNode,!1)}catch(W){Ne(x,x.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,ni(e,n))));break;case 19:mt(t,e),pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ni(e,l)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(df(l)){n=l;break}l=l.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var a=n.stateNode,i=gr(e);ti(e,i,a);break;case 5:var r=n.stateNode;n.flags&32&&(Sl(r,""),n.flags&=-33);var f=gr(e);ti(e,f,r);break;case 3:case 4:var x=n.stateNode.containerInfo,B=gr(e);br(e,B,x);break;default:throw Error(u(161))}}catch(_){Ne(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pf(e,t.alternate,t),t=t.sibling}function il(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_n(4,t,t.return),il(t);break;case 1:Jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&uf(t,t.return,n),il(t);break;case 27:Ka(t.stateNode);case 26:case 5:Jt(t,t.return),il(t);break;case 22:t.memoizedState===null&&il(t);break;case 30:il(t);break;default:il(t)}e=e.sibling}}function fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:fn(a,i,n),Ra(4,i);break;case 1:if(fn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(B){Ne(l,l.return,B)}if(l=i,a=l.updateQueue,a!==null){var f=l.stateNode;try{var x=a.shared.hiddenCallbacks;if(x!==null)for(a.shared.hiddenCallbacks=null,a=0;a<x.length;a++)Wo(x[a],f)}catch(B){Ne(l,l.return,B)}}n&&r&64&&rf(i),Ua(i,i.return);break;case 27:ff(i);case 26:case 5:fn(a,i,n),n&&l===null&&r&4&&of(i),Ua(i,i.return);break;case 12:fn(a,i,n);break;case 31:fn(a,i,n),n&&r&4&&Sf(a,i);break;case 13:fn(a,i,n),n&&r&4&&gf(a,i);break;case 22:i.memoizedState===null&&fn(a,i,n),Ua(i,i.return);break;case 30:break;default:fn(a,i,n)}t=t.sibling}}function vr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oa(n))}function Er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oa(e))}function Yt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(e,t,n,l),t=t.sibling}function vf(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,l),a&2048&&Ra(9,t);break;case 1:Yt(e,t,n,l);break;case 3:Yt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oa(e)));break;case 12:if(a&2048){Yt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,f=i.onPostCommit;typeof f=="function"&&f(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ne(t,t.return,x)}}else Yt(e,t,n,l);break;case 31:Yt(e,t,n,l);break;case 13:Yt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Yt(e,t,n,l):La(e,t):i._visibility&2?Yt(e,t,n,l):(i._visibility|=2,Rl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&vr(r,t);break;case 24:Yt(e,t,n,l),a&2048&&Er(t.alternate,t);break;default:Yt(e,t,n,l)}}function Rl(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,f=n,x=l,B=r.flags;switch(r.tag){case 0:case 11:case 15:Rl(i,r,f,x,a),Ra(8,r);break;case 23:break;case 22:var _=r.stateNode;r.memoizedState!==null?_._visibility&2?Rl(i,r,f,x,a):La(i,r):(_._visibility|=2,Rl(i,r,f,x,a)),a&&B&2048&&vr(r.alternate,r);break;case 24:Rl(i,r,f,x,a),a&&B&2048&&Er(r.alternate,r);break;default:Rl(i,r,f,x,a)}t=t.sibling}}function La(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:La(n,l),a&2048&&vr(l.alternate,l);break;case 24:La(n,l),a&2048&&Er(l.alternate,l);break;default:La(n,l)}t=t.sibling}}var qa=8192;function Ul(e,t,n){if(e.subtreeFlags&qa)for(e=e.child;e!==null;)Ef(e,t,n),e=e.sibling}function Ef(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&qa&&e.memoizedState!==null&&ux(n,Gt,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var l=Gt;Gt=xi(e.stateNode.containerInfo),Ul(e,t,n),Gt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=qa,qa=16777216,Ul(e,t,n),qa=l):Ul(e,t,n));break;default:Ul(e,t,n)}}function Bf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ga(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,jf(l,e)}Bf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Of(e),e=e.sibling}function Of(e){switch(e.tag){case 0:case 11:case 15:Ga(e),e.flags&2048&&_n(9,e,e.return);break;case 3:Ga(e);break;case 12:Ga(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,li(e)):Ga(e);break;default:Ga(e)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];tt=l,jf(l,e)}Bf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_n(8,t,t.return),li(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,li(t));break;default:li(t)}e=e.sibling}}function jf(e,t){for(;tt!==null;){var n=tt;switch(n.tag){case 0:case 11:case 15:_n(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,tt=l;else e:for(n=e;tt!==null;){l=tt;var a=l.sibling,i=l.return;if(hf(l),l===n){tt=null;break e}if(a!==null){a.return=i,tt=a;break e}tt=i}}}var O0={getCacheForType:function(e){var t=at(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return at(Qe).controller.signal}},j0=typeof WeakMap=="function"?WeakMap:Map,Oe=0,He=null,Se=null,be=0,je=0,Ot=null,Cn=!1,Ll=!1,Br=!1,mn=0,Ge=0,Hn=0,cl=0,Or=0,jt=0,ql=0,Ya=null,ht=null,jr=!1,ai=0,Nf=0,si=1/0,ii=null,Tn=null,$e=0,zn=null,Gl=null,pn=0,Nr=0,kr=null,kf=null,Va=0,wr=null;function Nt(){return(Oe&2)!==0&&be!==0?be&-be:A.T!==null?zr():Gu()}function wf(){if(jt===0)if((be&536870912)===0||ve){var e=ps;ps<<=1,(ps&3932160)===0&&(ps=262144),jt=e}else jt=536870912;return e=Et.current,e!==null&&(e.flags|=32),jt}function xt(e,t,n){(e===He&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Yl(e,0),Dn(e,be,jt,!1)),oa(e,n),((Oe&2)===0||e!==He)&&(e===He&&((Oe&2)===0&&(cl|=n),Ge===4&&Dn(e,be,jt,!1)),$t(e))}function Af(e,t,n){if((Oe&6)!==0)throw Error(u(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ua(e,t),a=l?w0(e,t):_r(e,t,!0),i=l;do{if(a===0){Ll&&!l&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!N0(n)){a=_r(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var f=e;a=Ya;var x=f.current.memoizedState.isDehydrated;if(x&&(Yl(f,r).flags|=256),r=_r(f,r,!1),r!==2){if(Br&&!x){f.errorRecoveryDisabledLanes|=i,cl|=i,a=4;break e}i=ht,ht=a,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){Yl(e,0),Dn(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Dn(l,t,jt,!Cn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=ai+300-St(),10<a)){if(Dn(l,t,jt,!Cn),xs(l,0,!0)!==0)break e;pn=t,l.timeoutHandle=im(_f.bind(null,l,n,ht,ii,jr,t,jt,cl,ql,Cn,i,"Throttled",-0,0),a);break e}_f(l,n,ht,ii,jr,t,jt,cl,ql,Cn,i,null,-0,0)}}break}while(!0);$t(e)}function _f(e,t,n,l,a,i,r,f,x,B,_,z,j,w){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt},Ef(t,i,z);var W=(i&62914560)===i?ai-St():(i&4194048)===i?Nf-St():0;if(W=ox(z,W),W!==null){pn=i,e.cancelPendingCommit=W(Uf.bind(null,e,t,i,n,l,a,r,f,x,_,z,null,j,w)),Dn(e,i,r,!B);return}}Uf(e,t,i,n,l,a,r,f,x)}function N0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!yt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,l){t&=~Or,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-bt(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&Uu(e,n,t)}function ci(){return(Oe&6)===0?(Xa(0),!1):!0}function Ar(){if(Se!==null){if(je===0)var e=Se.return;else e=Se,nn=Pn=null,Qc(e),Hl=null,Na=0,e=Se;for(;e!==null;)cf(e.alternate,e),e=e.return;Se=null}}function Yl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Z0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),pn=0,Ar(),He=e,Se=n=en(e.current,null),be=t,je=0,Ot=null,Cn=!1,Ll=ua(e,t),Br=!1,ql=jt=Or=cl=Hn=Ge=0,ht=Ya=null,jr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-bt(l),i=1<<a;t|=e[a],l&=~i}return mn=t,ws(),n}function Cf(e,t){fe=null,A.H=za,t===Cl||t===Ms?(t=Zo(),je=3):t===Tc?(t=Zo(),je=4):je=t===cr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,Se===null&&(Ge=1,Ws(e,Ct(t,e.current)))}function Hf(){var e=Et.current;return e===null?!0:(be&4194048)===be?Dt===null:(be&62914560)===be||(be&536870912)!==0?e===Dt:!1}function Tf(){var e=A.H;return A.H=za,e===null?za:e}function zf(){var e=A.A;return A.A=O0,e}function ri(){Ge=4,Cn||(be&4194048)!==be&&Et.current!==null||(Ll=!0),(Hn&134217727)===0&&(cl&134217727)===0||He===null||Dn(He,be,jt,!1)}function _r(e,t,n){var l=Oe;Oe|=2;var a=Tf(),i=zf();(He!==e||be!==t)&&(ii=null,Yl(e,t)),t=!1;var r=Ge;e:do try{if(je!==0&&Se!==null){var f=Se,x=Ot;switch(je){case 8:Ar(),r=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var B=je;if(je=0,Ot=null,Vl(e,f,x,B),n&&Ll){r=0;break e}break;default:B=je,je=0,Ot=null,Vl(e,f,x,B)}}k0(),r=Ge;break}catch(_){Cf(e,_)}while(!0);return t&&e.shellSuspendCounter++,nn=Pn=null,Oe=l,A.H=a,A.A=i,Se===null&&(He=null,be=0,ws()),r}function k0(){for(;Se!==null;)Df(Se)}function w0(e,t){var n=Oe;Oe|=2;var l=Tf(),a=zf();He!==e||be!==t?(ii=null,si=St()+500,Yl(e,t)):Ll=ua(e,t);e:do try{if(je!==0&&Se!==null){t=Se;var i=Ot;t:switch(je){case 1:je=0,Ot=null,Vl(e,t,i,1);break;case 2:case 9:if(Xo(i)){je=0,Ot=null,Mf(t);break}t=function(){je!==2&&je!==9||He!==e||(je=7),$t(e)},i.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Xo(i)?(je=0,Ot=null,Mf(t)):(je=0,Ot=null,Vl(e,t,i,7));break;case 5:var r=null;switch(Se.tag){case 26:r=Se.memoizedState;case 5:case 27:var f=Se;if(r?vm(r):f.stateNode.complete){je=0,Ot=null;var x=f.sibling;if(x!==null)Se=x;else{var B=f.return;B!==null?(Se=B,ui(B)):Se=null}break t}}je=0,Ot=null,Vl(e,t,i,5);break;case 6:je=0,Ot=null,Vl(e,t,i,6);break;case 8:Ar(),Ge=6;break e;default:throw Error(u(462))}}A0();break}catch(_){Cf(e,_)}while(!0);return nn=Pn=null,A.H=l,A.A=a,Oe=n,Se!==null?0:(He=null,be=0,ws(),Ge)}function A0(){for(;Se!==null&&!Pp();)Df(Se)}function Df(e){var t=af(e.alternate,e,mn);e.memoizedProps=e.pendingProps,t===null?ui(e):Se=t}function Mf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Pd(n,t,t.pendingProps,t.type,void 0,be);break;case 11:t=Pd(n,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:Qc(t);default:cf(n,t),t=Se=To(t,mn),t=af(n,t,mn)}e.memoizedProps=e.pendingProps,t===null?ui(e):Se=t}function Vl(e,t,n,l){nn=Pn=null,Qc(t),Hl=null,Na=0;var a=t.return;try{if(S0(e,a,t,n,be)){Ge=1,Ws(e,Ct(n,e.current)),Se=null;return}}catch(i){if(a!==null)throw Se=a,i;Ge=1,Ws(e,Ct(n,e.current)),Se=null;return}t.flags&32768?(ve||l===1?e=!0:Ll||(be&536870912)!==0?e=!1:(Cn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Et.current,l!==null&&l.tag===13&&(l.flags|=16384))),Rf(t,e)):ui(t)}function ui(e){var t=e;do{if((t.flags&32768)!==0){Rf(t,Cn);return}e=t.return;var n=y0(t.alternate,t,mn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ge===0&&(Ge=5)}function Rf(e,t){do{var n=v0(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Ge=6,Se=null}function Uf(e,t,n,l,a,i,r,f,x){e.cancelPendingCommit=null;do oi();while($e!==0);if((Oe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=gc,rh(e,n,i,r,f,x),e===He&&(Se=He=null,be=0),Gl=t,zn=e,pn=n,Nr=i,kr=a,kf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,T0(fs,function(){return Vf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,a=L.p,L.p=2,r=Oe,Oe|=4;try{E0(e,t,n)}finally{Oe=r,L.p=a,A.T=l}}$e=1,Lf(),qf(),Gf()}}function Lf(){if($e===1){$e=0;var e=zn,t=Gl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null;var l=L.p;L.p=2;var a=Oe;Oe|=4;try{bf(t,e);var i=Yr,r=Oo(e.containerInfo),f=i.focusedElem,x=i.selectionRange;if(r!==f&&f&&f.ownerDocument&&Bo(f.ownerDocument.documentElement,f)){if(x!==null&&mc(f)){var B=x.start,_=x.end;if(_===void 0&&(_=B),"selectionStart"in f)f.selectionStart=B,f.selectionEnd=Math.min(_,f.value.length);else{var z=f.ownerDocument||document,j=z&&z.defaultView||window;if(j.getSelection){var w=j.getSelection(),W=f.textContent.length,se=Math.min(x.start,W),_e=x.end===void 0?se:Math.min(x.end,W);!w.extend&&se>_e&&(r=_e,_e=se,se=r);var v=Eo(f,se),b=Eo(f,_e);if(v&&b&&(w.rangeCount!==1||w.anchorNode!==v.node||w.anchorOffset!==v.offset||w.focusNode!==b.node||w.focusOffset!==b.offset)){var E=z.createRange();E.setStart(v.node,v.offset),w.removeAllRanges(),se>_e?(w.addRange(E),w.extend(b.node,b.offset)):(E.setEnd(b.node,b.offset),w.addRange(E))}}}}for(z=[],w=f;w=w.parentNode;)w.nodeType===1&&z.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<z.length;f++){var T=z[f];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Ei=!!Gr,Yr=Gr=null}finally{Oe=a,L.p=l,A.T=n}}e.current=t,$e=2}}function qf(){if($e===2){$e=0;var e=zn,t=Gl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=A.T,A.T=null;var l=L.p;L.p=2;var a=Oe;Oe|=4;try{pf(e,t.alternate,t)}finally{Oe=a,L.p=l,A.T=n}}$e=3}}function Gf(){if($e===4||$e===3){$e=0,Ip();var e=zn,t=Gl,n=pn,l=kf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Gl=zn=null,Yf(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Tn=null),Ji(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ra,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=A.T,a=L.p,L.p=2,A.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var f=l[r];i(f.value,{componentStack:f.stack})}}finally{A.T=t,L.p=a}}(pn&3)!==0&&oi(),$t(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===wr?Va++:(Va=0,wr=e):Va=0,Xa(0)}}function Yf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oa(t)))}function oi(){return Lf(),qf(),Gf(),Vf()}function Vf(){if($e!==5)return!1;var e=zn,t=Nr;Nr=0;var n=Ji(pn),l=A.T,a=L.p;try{L.p=32>n?32:n,A.T=null,n=kr,kr=null;var i=zn,r=pn;if($e=0,Gl=zn=null,pn=0,(Oe&6)!==0)throw Error(u(331));var f=Oe;if(Oe|=4,Of(i.current),vf(i,i.current,r,n),Oe=f,Xa(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ra,i)}catch{}return!0}finally{L.p=a,A.T=l,Yf(e,t)}}function Xf(e,t,n){t=Ct(n,t),t=ir(e.stateNode,t,2),e=kn(e,t,2),e!==null&&(oa(e,2),$t(e))}function Ne(e,t,n){if(e.tag===3)Xf(e,e,n);else for(;t!==null;){if(t.tag===3){Xf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tn===null||!Tn.has(l))){e=Ct(n,e),n=Xd(2),l=kn(t,n,2),l!==null&&(Qd(n,l,t,e),oa(l,2),$t(l));break}}t=t.return}}function Cr(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new j0;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Br=!0,a.add(n),e=_0.bind(null,e,t,n),t.then(e,e))}function _0(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,He===e&&(be&n)===n&&(Ge===4||Ge===3&&(be&62914560)===be&&300>St()-ai?(Oe&2)===0&&Yl(e,0):Or|=n,ql===be&&(ql=0)),$t(e)}function Qf(e,t){t===0&&(t=Ru()),e=$n(e,t),e!==null&&(oa(e,t),$t(e))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qf(e,n)}function H0(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Qf(e,n)}function T0(e,t){return Xi(e,t)}var di=null,Xl=null,Hr=!1,fi=!1,Tr=!1,Mn=0;function $t(e){e!==Xl&&e.next===null&&(Xl===null?di=Xl=e:Xl=Xl.next=e),fi=!0,Hr||(Hr=!0,D0())}function Xa(e,t){if(!Tr&&fi){Tr=!0;do for(var n=!1,l=di;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=a&~(r&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,$f(l,i))}else i=be,i=xs(l,l===He?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ua(l,i)||(n=!0,$f(l,i));l=l.next}while(n);Tr=!1}}function z0(){Zf()}function Zf(){fi=Hr=!1;var e=0;Mn!==0&&Q0()&&(e=Mn);for(var t=St(),n=null,l=di;l!==null;){var a=l.next,i=Kf(l,t);i===0?(l.next=null,n===null?di=a:n.next=a,a===null&&(Xl=n)):(n=l,(e!==0||(i&3)!==0)&&(fi=!0)),l=a}$e!==0&&$e!==5||Xa(e),Mn!==0&&(Mn=0)}function Kf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-bt(i),f=1<<r,x=a[r];x===-1?((f&n)===0||(f&l)!==0)&&(a[r]=ch(f,t)):x<=t&&(e.expiredLanes|=f),i&=~f}if(t=He,n=be,n=xs(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qi(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ua(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Qi(l),Ji(n)){case 2:case 8:n=Du;break;case 32:n=fs;break;case 268435456:n=Mu;break;default:n=fs}return l=Jf.bind(null,e),n=Xi(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Qi(l),e.callbackPriority=2,e.callbackNode=null,2}function Jf(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var l=be;return l=xs(e,e===He?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Af(e,l,t),Kf(e,St()),e.callbackNode!=null&&e.callbackNode===n?Jf.bind(null,e):null)}function $f(e,t){if(oi())return null;Af(e,t,!0)}function D0(){K0(function(){(Oe&6)!==0?Xi(zu,z0):Zf()})}function zr(){if(Mn===0){var e=Al;e===0&&(e=ms,ms<<=1,(ms&261888)===0&&(ms=256)),Mn=e}return Mn}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ys(""+e)}function Ff(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function M0(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Wf((a[ot]||null).action),r=l.submitter;r&&(t=(t=r[ot]||null)?Wf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var f=new Os("action","action",null,l,a);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Mn!==0){var x=r?Ff(a,r):new FormData(a);er(n,{pending:!0,data:x,method:a.method,action:i},null,x)}}else typeof i=="function"&&(f.preventDefault(),x=r?Ff(a,r):new FormData(a),er(n,{pending:!0,data:x,method:a.method,action:i},i,x))},currentTarget:a}]})}}for(var Dr=0;Dr<Sc.length;Dr++){var Mr=Sc[Dr],R0=Mr.toLowerCase(),U0=Mr[0].toUpperCase()+Mr.slice(1);qt(R0,"on"+U0)}qt(ko,"onAnimationEnd"),qt(wo,"onAnimationIteration"),qt(Ao,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(e0,"onTransitionRun"),qt(t0,"onTransitionStart"),qt(n0,"onTransitionCancel"),qt(_o,"onTransitionEnd"),hl("onMouseEnter",["mouseout","mouseover"]),hl("onMouseLeave",["mouseout","mouseover"]),hl("onPointerEnter",["pointerout","pointerover"]),hl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa));function Pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var f=l[r],x=f.instance,B=f.currentTarget;if(f=f.listener,x!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=B;try{i(a)}catch(_){ks(_)}a.currentTarget=null,i=x}else for(r=0;r<l.length;r++){if(f=l[r],x=f.instance,B=f.currentTarget,f=f.listener,x!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=B;try{i(a)}catch(_){ks(_)}a.currentTarget=null,i=x}}}}function ge(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var l=e+"__bubble";n.has(l)||(If(t,e,2,!1),n.add(l))}function Rr(e,t,n){var l=0;t&&(l|=4),If(n,e,l,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[mi]){e[mi]=!0,Xu.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||Rr(n,!1,e),Rr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Rr("selectionchange",!1,t))}}function If(e,t,n,l){switch(wm(t)){case 2:var a=mx;break;case 8:a=px;break;default:a=Ir}n=a.bind(null,t,n,e),a=void 0,!ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Lr(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var f=l.stateNode.containerInfo;if(f===a)break;if(r===4)for(r=l.return;r!==null;){var x=r.tag;if((x===3||x===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;f!==null;){if(r=fl(f),r===null)return;if(x=r.tag,x===5||x===6||x===26||x===27){l=i=r;continue e}f=f.parentNode}}l=l.return}no(function(){var B=i,_=nc(n),z=[];e:{var j=Co.get(e);if(j!==void 0){var w=Os,W=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":w=Hh;break;case"focusin":W="focus",w=rc;break;case"focusout":W="blur",w=rc;break;case"beforeblur":case"afterblur":w=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=so;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Dh;break;case ko:case wo:case Ao:w=Bh;break;case _o:w=Rh;break;case"scroll":case"scrollend":w=gh;break;case"wheel":w=Lh;break;case"copy":case"cut":case"paste":w=jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=co;break;case"toggle":case"beforetoggle":w=Gh}var se=(t&4)!==0,_e=!se&&(e==="scroll"||e==="scrollend"),v=se?j!==null?j+"Capture":null:j;se=[];for(var b=B,E;b!==null;){var T=b;if(E=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||E===null||v===null||(T=ma(b,v),T!=null&&se.push(Za(b,T,E))),_e)break;b=b.return}0<se.length&&(j=new w(j,W,null,n,_),z.push({event:j,listeners:se}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",j&&n!==tc&&(W=n.relatedTarget||n.fromElement)&&(fl(W)||W[dl]))break e;if((w||j)&&(j=_.window===_?_:(j=_.ownerDocument)?j.defaultView||j.parentWindow:window,w?(W=n.relatedTarget||n.toElement,w=B,W=W?fl(W):null,W!==null&&(_e=h(W),se=W.tag,W!==_e||se!==5&&se!==27&&se!==6)&&(W=null)):(w=null,W=B),w!==W)){if(se=so,T="onMouseLeave",v="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(se=co,T="onPointerLeave",v="onPointerEnter",b="pointer"),_e=w==null?j:fa(w),E=W==null?j:fa(W),j=new se(T,b+"leave",w,n,_),j.target=_e,j.relatedTarget=E,T=null,fl(_)===B&&(se=new se(v,b+"enter",W,n,_),se.target=E,se.relatedTarget=_e,T=se),_e=T,w&&W)t:{for(se=q0,v=w,b=W,E=0,T=v;T;T=se(T))E++;T=0;for(var te=b;te;te=se(te))T++;for(;0<E-T;)v=se(v),E--;for(;0<T-E;)b=se(b),T--;for(;E--;){if(v===b||b!==null&&v===b.alternate){se=v;break t}v=se(v),b=se(b)}se=null}else se=null;w!==null&&em(z,j,w,se,!1),W!==null&&_e!==null&&em(z,_e,W,se,!0)}}e:{if(j=B?fa(B):window,w=j.nodeName&&j.nodeName.toLowerCase(),w==="select"||w==="input"&&j.type==="file")var Ee=xo;else if(po(j))if(So)Ee=Fh;else{Ee=$h;var ee=Jh}else w=j.nodeName,!w||w.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?B&&ec(B.elementType)&&(Ee=xo):Ee=Wh;if(Ee&&(Ee=Ee(e,B))){ho(z,Ee,n,_);break e}ee&&ee(e,j,B),e==="focusout"&&B&&j.type==="number"&&B.memoizedProps.value!=null&&Ii(j,"number",j.value)}switch(ee=B?fa(B):window,e){case"focusin":(po(ee)||ee.contentEditable==="true")&&(vl=ee,pc=B,va=null);break;case"focusout":va=pc=vl=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,jo(z,n,_);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":jo(z,n,_)}var me;if(oc)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else yl?fo(e,n)&&(ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ye="onCompositionStart");ye&&(ro&&n.locale!=="ko"&&(yl||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&yl&&(me=lo()):(yn=_,sc="value"in yn?yn.value:yn.textContent,yl=!0)),ee=pi(B,ye),0<ee.length&&(ye=new io(ye,e,null,n,_),z.push({event:ye,listeners:ee}),me?ye.data=me:(me=mo(n),me!==null&&(ye.data=me)))),(me=Vh?Xh(e,n):Qh(e,n))&&(ye=pi(B,"onBeforeInput"),0<ye.length&&(ee=new io("onBeforeInput","beforeinput",null,n,_),z.push({event:ee,listeners:ye}),ee.data=me)),M0(z,e,B,n,_)}Pf(z,t)})}function Za(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ma(e,n),a!=null&&l.unshift(Za(e,a,i)),a=ma(e,t),a!=null&&l.push(Za(e,a,i))),e.tag===3)return l;e=e.return}return[]}function q0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function em(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var f=n,x=f.alternate,B=f.stateNode;if(f=f.tag,x!==null&&x===l)break;f!==5&&f!==26&&f!==27||B===null||(x=B,a?(B=ma(n,i),B!=null&&r.unshift(Za(n,B,x))):a||(B=ma(n,i),B!=null&&r.push(Za(n,B,x)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var G0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function tm(e){return(typeof e=="string"?e:""+e).replace(G0,`
`).replace(Y0,"")}function nm(e,t){return t=tm(t),tm(e)===t}function Ae(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Sl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Sl(e,""+l);break;case"className":gs(e,"class",l);break;case"tabIndex":gs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gs(e,n,l);break;case"style":eo(e,l,i);break;case"data":if(t!=="object"){gs(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ys(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",a.name,a,null),Ae(e,t,"formEncType",a.formEncType,a,null),Ae(e,t,"formMethod",a.formMethod,a,null),Ae(e,t,"formTarget",a.formTarget,a,null)):(Ae(e,t,"encType",a.encType,a,null),Ae(e,t,"method",a.method,a,null),Ae(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ys(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Pt);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ys(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ss(e,"popover",l);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ss(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=xh.get(n)||n,Ss(e,n,l))}}function qr(e,t,n,l,a,i){switch(n){case"style":eo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Sl(e,l):(typeof l=="number"||typeof l=="bigint")&&Sl(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[ot]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ss(e,n,l)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,i,r,n,null)}}a&&Ae(e,t,"srcSet",n.srcSet,n,null),l&&Ae(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var f=i=r=a=null,x=null,B=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":a=_;break;case"type":r=_;break;case"checked":x=_;break;case"defaultChecked":B=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:Ae(e,t,l,_,n,null)}}Wu(e,i,f,x,B,r,a,!1);return;case"select":ge("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(f=n[a],f!=null))switch(a){case"value":i=f;break;case"defaultValue":r=f;break;case"multiple":l=f;default:Ae(e,t,a,f,n,null)}t=i,n=r,e.multiple=!!l,t!=null?xl(e,!!l,t,!1):n!=null&&xl(e,!!l,n,!0);return;case"textarea":ge("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(f=n[r],f!=null))switch(r){case"value":l=f;break;case"defaultValue":a=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:Ae(e,t,r,f,n,null)}Pu(e,l,a,i);return;case"option":for(x in n)n.hasOwnProperty(x)&&(l=n[x],l!=null)&&(x==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ae(e,t,x,l,n,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Qa.length;l++)ge(Qa[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(l=n[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,B,l,n,null)}return;default:if(ec(t)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&qr(e,t,_,l,n,void 0));return}}for(f in n)n.hasOwnProperty(f)&&(l=n[f],l!=null&&Ae(e,t,f,l,n,null))}function V0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,f=null,x=null,B=null,_=null;for(w in n){var z=n[w];if(n.hasOwnProperty(w)&&z!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":x=z;default:l.hasOwnProperty(w)||Ae(e,t,w,null,l,z)}}for(var j in l){var w=l[j];if(z=n[j],l.hasOwnProperty(j)&&(w!=null||z!=null))switch(j){case"type":i=w;break;case"name":a=w;break;case"checked":B=w;break;case"defaultChecked":_=w;break;case"value":r=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:w!==z&&Ae(e,t,j,w,l,z)}}Pi(e,r,f,x,B,_,i,a);return;case"select":w=r=f=j=null;for(i in n)if(x=n[i],n.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":w=x;default:l.hasOwnProperty(i)||Ae(e,t,i,null,l,x)}for(a in l)if(i=l[a],x=n[a],l.hasOwnProperty(a)&&(i!=null||x!=null))switch(a){case"value":j=i;break;case"defaultValue":f=i;break;case"multiple":r=i;default:i!==x&&Ae(e,t,a,i,l,x)}t=f,n=r,l=w,j!=null?xl(e,!!n,j,!1):!!l!=!!n&&(t!=null?xl(e,!!n,t,!0):xl(e,!!n,n?[]:"",!1));return;case"textarea":w=j=null;for(f in n)if(a=n[f],n.hasOwnProperty(f)&&a!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ae(e,t,f,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":j=a;break;case"defaultValue":w=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==i&&Ae(e,t,r,a,l,i)}Fu(e,j,w);return;case"option":for(var W in n)j=n[W],n.hasOwnProperty(W)&&j!=null&&!l.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:Ae(e,t,W,null,l,j));for(x in l)j=l[x],w=n[x],l.hasOwnProperty(x)&&j!==w&&(j!=null||w!=null)&&(x==="selected"?e.selected=j&&typeof j!="function"&&typeof j!="symbol":Ae(e,t,x,j,l,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)j=n[se],n.hasOwnProperty(se)&&j!=null&&!l.hasOwnProperty(se)&&Ae(e,t,se,null,l,j);for(B in l)if(j=l[B],w=n[B],l.hasOwnProperty(B)&&j!==w&&(j!=null||w!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,t));break;default:Ae(e,t,B,j,l,w)}return;default:if(ec(t)){for(var _e in n)j=n[_e],n.hasOwnProperty(_e)&&j!==void 0&&!l.hasOwnProperty(_e)&&qr(e,t,_e,void 0,l,j);for(_ in l)j=l[_],w=n[_],!l.hasOwnProperty(_)||j===w||j===void 0&&w===void 0||qr(e,t,_,j,l,w);return}}for(var v in n)j=n[v],n.hasOwnProperty(v)&&j!=null&&!l.hasOwnProperty(v)&&Ae(e,t,v,null,l,j);for(z in l)j=l[z],w=n[z],!l.hasOwnProperty(z)||j===w||j==null&&w==null||Ae(e,t,z,j,l,w)}function lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function X0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,f=a.duration;if(i&&f&&lm(r)){for(r=0,f=a.responseEnd,l+=1;l<n.length;l++){var x=n[l],B=x.startTime;if(B>f)break;var _=x.transferSize,z=x.initiatorType;_&&lm(z)&&(x=x.responseEnd,r+=_*(x<f?1:(f-B)/(x-B)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gr=null,Yr=null;function hi(e){return e.nodeType===9?e:e.ownerDocument}function am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xr=null;function Q0(){var e=window.event;return e&&e.type==="popstate"?e===Xr?!1:(Xr=e,!0):(Xr=null,!1)}var im=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(e){return cm.resolve(null).then(e).catch(J0)}:im;function J0(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function rm(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),Jl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Ka(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ka(n);for(var i=n.firstChild;i;){var r=i.nextSibling,f=i.nodeName;i[da]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Ka(e.ownerDocument.body);n=a}while(n);Jl(t)}function um(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Qr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Qr(n),Wi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $0(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[da])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Mt(e.nextSibling),e===null)break}return null}function W0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mt(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mt(e.nextSibling),e===null))return null;return e}function Zr(e){return e.data==="$?"||e.data==="$~"}function Kr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function F0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jr=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Mt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function mm(e,t,n){switch(t=hi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ka(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var Rt=new Map,pm=new Set;function xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hn=L.d;L.d={f:P0,r:I0,D:ex,C:tx,L:nx,m:lx,X:sx,S:ax,M:ix};function P0(){var e=hn.f(),t=ci();return e||t}function I0(e){var t=ml(e);t!==null&&t.tag===5&&t.type==="form"?_d(t):hn.r(e)}var Ql=typeof document>"u"?null:document;function hm(e,t,n){var l=Ql;if(l&&typeof t=="string"&&t){var a=At(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),pm.has(a)||(pm.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),it(t,"link",e),et(t),l.head.appendChild(t)))}}function ex(e){hn.D(e),hm("dns-prefetch",e,null)}function tx(e,t){hn.C(e,t),hm("preconnect",e,t)}function nx(e,t,n){hn.L(e,t,n);var l=Ql;if(l&&e&&t){var a='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+At(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+At(n.imageSizes)+'"]')):a+='[href="'+At(e)+'"]';var i=a;switch(t){case"style":i=Zl(e);break;case"script":i=Kl(e)}Rt.has(i)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rt.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ja(i))||t==="script"&&l.querySelector($a(i))||(t=l.createElement("link"),it(t,"link",e),et(t),l.head.appendChild(t)))}}function lx(e,t){hn.m(e,t);var n=Ql;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Kl(e)}if(!Rt.has(i)&&(e=O({rel:"modulepreload",href:e},t),Rt.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($a(i)))return}l=n.createElement("link"),it(l,"link",e),et(l),n.head.appendChild(l)}}}function ax(e,t,n){hn.S(e,t,n);var l=Ql;if(l&&e){var a=pl(l).hoistableStyles,i=Zl(e);t=t||"default";var r=a.get(i);if(!r){var f={loading:0,preload:null};if(r=l.querySelector(Ja(i)))f.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rt.get(i))&&$r(e,n);var x=r=l.createElement("link");et(x),it(x,"link",e),x._p=new Promise(function(B,_){x.onload=B,x.onerror=_}),x.addEventListener("load",function(){f.loading|=1}),x.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Si(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:f},a.set(i,r)}}}function sx(e,t){hn.X(e,t);var n=Ql;if(n&&e){var l=pl(n).hoistableScripts,a=Kl(e),i=l.get(a);i||(i=n.querySelector($a(a)),i||(e=O({src:e,async:!0},t),(t=Rt.get(a))&&Wr(e,t),i=n.createElement("script"),et(i),it(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function ix(e,t){hn.M(e,t);var n=Ql;if(n&&e){var l=pl(n).hoistableScripts,a=Kl(e),i=l.get(a);i||(i=n.querySelector($a(a)),i||(e=O({src:e,async:!0,type:"module"},t),(t=Rt.get(a))&&Wr(e,t),i=n.createElement("script"),et(i),it(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function xm(e,t,n,l){var a=(a=de.current)?xi(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zl(n.href),n=pl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zl(n.href);var i=pl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(Ja(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Rt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rt.set(e,n),i||cx(a,e,n,r.state))),t&&l===null)throw Error(u(528,""));return r}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Kl(n),n=pl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Zl(e){return'href="'+At(e)+'"'}function Ja(e){return'link[rel="stylesheet"]['+e+"]"}function Sm(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function cx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),it(t,"link",n),et(t),e.head.appendChild(t))}function Kl(e){return'[src="'+At(e)+'"]'}function $a(e){return"script[async]"+e}function gm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+At(n.href)+'"]');if(l)return t.instance=l,et(l),l;var a=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),it(l,"style",a),Si(l,n.precedence,e),t.instance=l;case"stylesheet":a=Zl(n.href);var i=e.querySelector(Ja(a));if(i)return t.state.loading|=4,t.instance=i,et(i),i;l=Sm(n),(a=Rt.get(a))&&$r(l,a),i=(e.ownerDocument||e).createElement("link"),et(i);var r=i;return r._p=new Promise(function(f,x){r.onload=f,r.onerror=x}),it(i,"link",l),t.state.loading|=4,Si(i,n.precedence,e),t.instance=i;case"script":return i=Kl(n.src),(a=e.querySelector($a(i)))?(t.instance=a,et(a),a):(l=n,(a=Rt.get(i))&&(l=O({},n),Wr(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),et(a),it(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Si(l,n.precedence,e));return t.instance}function Si(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var f=l[r];if(f.dataset.precedence===t)i=f;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $r(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gi=null;function bm(e,t,n){if(gi===null){var l=new Map,a=gi=new Map;a.set(n,l)}else a=gi,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[da]||i[nt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var f=l.get(r);f?f.push(i):l.set(r,[i])}}return l}function ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function rx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ux(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Zl(l.href),i=t.querySelector(Ja(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,et(i);return}i=t.ownerDocument||t,l=Sm(l),(a=Rt.get(a))&&$r(l,a),i=i.createElement("link"),et(i);var r=i;r._p=new Promise(function(f,x){r.onload=f,r.onerror=x}),it(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=bi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fr=0;function ox(e,t){return e.stylesheets&&e.count===0&&vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&vi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Fr===0&&(Fr=62500*X0());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Fr?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yi=null;function vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yi=new Map,t.forEach(dx,e),yi=null,bi.call(e))}function dx(e,t){if(!(t.state.loading&4)){var n=yi.get(e);if(n)var l=n.get(null);else{n=new Map,yi.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=bi.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Wa={$$typeof:$,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function fx(e,t,n,l,a,i,r,f,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.hiddenUpdates=Zi(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Em(e,t,n,l,a,i,r,f,x,B,_,z){return e=new fx(e,t,n,r,x,B,_,z,f),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=_c(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},zc(i),e}function Bm(e){return e?(e=Ol,e):Ol}function Om(e,t,n,l,a,i){a=Bm(a),l.context===null?l.context=a:l.pendingContext=a,l=Nn(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=kn(e,l,t),n!==null&&(xt(n,e,t),wa(n,e,t))}function jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pr(e,t){jm(e,t),(e=e.alternate)&&jm(e,t)}function Nm(e){if(e.tag===13||e.tag===31){var t=$n(e,67108864);t!==null&&xt(t,e,67108864),Pr(e,67108864)}}function km(e){if(e.tag===13||e.tag===31){var t=Nt();t=Ki(t);var n=$n(e,t);n!==null&&xt(n,e,t),Pr(e,t)}}var Ei=!0;function mx(e,t,n,l){var a=A.T;A.T=null;var i=L.p;try{L.p=2,Ir(e,t,n,l)}finally{L.p=i,A.T=a}}function px(e,t,n,l){var a=A.T;A.T=null;var i=L.p;try{L.p=8,Ir(e,t,n,l)}finally{L.p=i,A.T=a}}function Ir(e,t,n,l){if(Ei){var a=eu(l);if(a===null)Lr(e,t,l,Bi,n),Am(e,l);else if(xx(a,e,t,n,l))l.stopPropagation();else if(Am(e,l),t&4&&-1<hx.indexOf(e)){for(;a!==null;){var i=ml(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Xn(i.pendingLanes);if(r!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;r;){var x=1<<31-bt(r);f.entanglements[1]|=x,r&=~x}$t(i),(Oe&6)===0&&(si=St()+500,Xa(0))}}break;case 31:case 13:f=$n(i,2),f!==null&&xt(f,i,2),ci(),Pr(i,2)}if(i=eu(l),i===null&&Lr(e,t,l,Bi,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Lr(e,t,l,null,n)}}function eu(e){return e=nc(e),tu(e)}var Bi=null;function tu(e){if(Bi=null,e=fl(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===31){if(e=N(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bi=e,null}function wm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eh()){case zu:return 2;case Du:return 8;case fs:case th:return 32;case Mu:return 268435456;default:return 32}default:return 32}}var nu=!1,Un=null,Ln=null,qn=null,Fa=new Map,Pa=new Map,Gn=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Ia(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ml(t),t!==null&&Nm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function xx(e,t,n,l,a){switch(t){case"focusin":return Un=Ia(Un,e,t,n,l,a),!0;case"dragenter":return Ln=Ia(Ln,e,t,n,l,a),!0;case"mouseover":return qn=Ia(qn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Fa.set(i,Ia(Fa.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Pa.set(i,Ia(Pa.get(i)||null,e,t,n,l,a)),!0}return!1}function _m(e){var t=fl(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){km(n)});return}}else if(t===31){if(t=N(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);tc=l,n.target.dispatchEvent(l),tc=null}else return t=ml(n),t!==null&&Nm(t),e.blockedOn=n,!1;t.shift()}return!0}function Cm(e,t,n){Oi(e)&&n.delete(t)}function Sx(){nu=!1,Un!==null&&Oi(Un)&&(Un=null),Ln!==null&&Oi(Ln)&&(Ln=null),qn!==null&&Oi(qn)&&(qn=null),Fa.forEach(Cm),Pa.forEach(Cm)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,nu||(nu=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Sx)))}var Ni=null;function Hm(e){Ni!==e&&(Ni=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ni===e&&(Ni=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(tu(l||n)===null)continue;break}var i=ml(n);i!==null&&(e.splice(t,3),t-=3,er(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function Jl(e){function t(x){return ji(x,e)}Un!==null&&ji(Un,e),Ln!==null&&ji(Ln,e),qn!==null&&ji(qn,e),Fa.forEach(t),Pa.forEach(t);for(var n=0;n<Gn.length;n++){var l=Gn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&Gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[ot]||null;if(typeof i=="function")r||Hm(n);else if(r){var f=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[ot]||null)f=r.formAction;else if(tu(a)!==null)continue}else f=r.action;typeof f=="function"?n[l+1]=f:(n.splice(l,3),l-=3),Hm(n)}}}function Tm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function lu(e){this._internalRoot=e}ki.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,l=Nt();Om(n,l,e,t,null,null)},ki.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Om(e.current,2,null,e,null,null),ci(),t[dl]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&_m(e)}};var zm=o.version;if(zm!=="19.2.3")throw Error(u(527,zm,"19.2.3"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var gx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{ra=wi.inject(gx),gt=wi}catch{}}return ts.createRoot=function(e,t){if(!p(e))throw Error(u(299));var n=!1,l="",a=qd,i=Gd,r=Yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Em(e,1,!1,null,null,n,l,null,a,i,r,Tm),e[dl]=t.current,Ur(e),new lu(t)},ts.hydrateRoot=function(e,t,n){if(!p(e))throw Error(u(299));var l=!1,a="",i=qd,r=Gd,f=Yd,x=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(f=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=Em(e,1,!0,t,n??null,l,a,x,i,r,f,Tm),t.context=Bm(null),n=t.current,l=Nt(),l=Ki(l),a=Nn(l),a.callback=null,kn(n,a,l),n=l,t.current.lanes=n,oa(t,n),$t(t),e[dl]=t.current,Ur(e),new ki(t)},ts.version="19.2.3",ts}var Xm;function Hx(){if(Xm)return iu.exports;Xm=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),iu.exports=Cx(),iu.exports}var Tx=Hx();const ls={1:["breastLump","nippleDischarge","orangePeel"],2:["lymphNode","nippleRetraction","skinDimple"]},Qm=["cellRepair","hormoneBalance","immuneBoost","detox"],ou=()=>({memories:{1:null,2:null,3:null},completed:!1}),vu={currentPhase:"mainMenu",currentPerspective:null,currentMemoryPoint:1,currentBoss:null,hasWatchedPromotion:!1,allPerspectivesUnlocked:!1,perspectivesData:{child:ou(),adult:ou(),elder:ou()},unlockedBosses:[],defeatedBosses:[],unlockedSkills:[...Qm],equippedSkills:[...Qm],beSkillSources:{},playthrough:1,skipStory:!1,hasCompletedTutorial:!1,battleState:null,lastUsedNegativeSkillSource:null};function zx(c,o){switch(o.type){case"SET_PHASE":return{...c,currentPhase:o.payload};case"SET_PERSPECTIVE":return{...c,currentPerspective:o.payload};case"SET_MEMORY_POINT":return{...c,currentMemoryPoint:o.payload};case"SET_BOSS":return{...c,currentBoss:o.payload};case"SET_PLAYTHROUGH":return{...c,playthrough:o.payload};case"SET_SKIP_STORY":return{...c,skipStory:o.payload};case"COMPLETE_TUTORIAL":return{...c,hasCompletedTutorial:!0};case"COMPLETE_MEMORY":{const{perspective:p,memoryPoint:h,result:y}=o.payload,N=c.perspectivesData[p];return{...c,perspectivesData:{...c.perspectivesData,[p]:{...N,memories:{...N.memories,[h]:y}}}}}case"COMPLETE_PERSPECTIVE":{const p=c.currentPerspective;if(!p)return c;const h=c.perspectivesData[p];return h.completed?c:{...c,perspectivesData:{...c.perspectivesData,[p]:{...h,completed:!0}}}}case"COMPLETE_PROMOTION_AND_UNLOCK":return{...c,hasWatchedPromotion:!0,allPerspectivesUnlocked:!0,currentPhase:"mainMenu"};case"SWITCH_PERSPECTIVE":return{...c,currentPerspective:o.payload};case"UNLOCK_BOSS":return c.unlockedBosses.includes(o.payload)?c:{...c,unlockedBosses:[...c.unlockedBosses,o.payload]};case"DEFEAT_BOSS":return c.defeatedBosses.includes(o.payload)?c:{...c,defeatedBosses:[...c.defeatedBosses,o.payload]};case"UNLOCK_SKILL":return c.unlockedSkills.includes(o.payload)?c:{...c,unlockedSkills:[...c.unlockedSkills,o.payload]};case"EQUIP_SKILL":const d=c.equippedSkills.map(p=>p===o.payload.oldSkill?o.payload.newSkill:p);return{...c,equippedSkills:d};case"SET_EQUIPPED_SKILLS":return{...c,equippedSkills:o.payload};case"RECORD_BE_SKILL_SOURCE":return{...c,beSkillSources:{...c.beSkillSources,[o.payload.skillId]:o.payload.memoryPoint}};case"SET_BATTLE_STATE":return{...c,battleState:o.payload};case"USE_SKILL_IN_BATTLE":if(!c.battleState)return c;const u=[...c.battleState.usedSkills,o.payload.skillId];return{...c,battleState:{...c.battleState,usedSkills:u,bossHealth:Math.max(0,100-u.length*25),currentRound:c.battleState.currentRound+1},lastUsedNegativeSkillSource:o.payload.negativeSkillSource??c.lastUsedNegativeSkillSource};case"RESET_BATTLE":return{...c,battleState:{bossHealth:100,usedSkills:[],failed:!1,currentRound:0},lastUsedNegativeSkillSource:null};case"RESET_GAME":return vu;case"START_NEW_GAME":{const p=c.allPerspectivesUnlocked?{perspectivesData:c.perspectivesData,unlockedSkills:c.unlockedSkills,equippedSkills:c.equippedSkills,beSkillSources:c.beSkillSources,hasCompletedTutorial:c.hasCompletedTutorial,hasWatchedPromotion:c.hasWatchedPromotion,allPerspectivesUnlocked:c.allPerspectivesUnlocked}:{};return{...vu,...p,currentPerspective:o.payload,currentPhase:"realityTrigger"}}case"START_WEEK2":return{...c,playthrough:2,unlockedBosses:[],defeatedBosses:[],currentMemoryPoint:1,currentBoss:null,battleState:null,lastUsedNegativeSkillSource:null};default:return c}}const xp=C.createContext(null);function Dx({children:c}){const[o,d]=C.useReducer(zx,vu),u=C.useCallback(K=>{d({type:"START_NEW_GAME",payload:K})},[]),p=C.useCallback(()=>{d({type:"START_WEEK2"})},[]),h=C.useCallback((K,ie)=>{const $=ie||o.currentPerspective||"child";return o.perspectivesData[$].memories[K]??null},[o.perspectivesData,o.currentPerspective]),y=C.useCallback((K,ie)=>{const $=o.currentPerspective||"child";d({type:"COMPLETE_MEMORY",payload:{perspective:$,memoryPoint:K,result:ie}});const ue=ls[o.playthrough][K-1];ue&&d({type:"UNLOCK_BOSS",payload:ue})},[o.currentPerspective,o.playthrough]),N=C.useCallback(K=>{const ie=ls[o.playthrough][K-1];return ie?[ie]:[]},[o.playthrough]),g=C.useCallback(K=>{N(K).forEach($=>{d({type:"UNLOCK_BOSS",payload:$})})},[N]),m=C.useCallback(K=>{d({type:"DEFEAT_BOSS",payload:K})},[]),k=C.useCallback((K,ie)=>{d({type:"EQUIP_SKILL",payload:{newSkill:K,oldSkill:ie}})},[]),O=C.useCallback(K=>{d({type:"UNLOCK_SKILL",payload:K})},[]),D=C.useCallback(K=>{d({type:"SET_BOSS",payload:K}),d({type:"SET_BATTLE_STATE",payload:{bossHealth:100,usedSkills:[],failed:!1,currentRound:0}}),d({type:"SET_PHASE",payload:"bossBattle"})},[]),q=C.useCallback((K,ie,$)=>{ie&&d({type:"SET_BATTLE_STATE",payload:{...o.battleState,failed:!0}}),d({type:"USE_SKILL_IN_BATTLE",payload:{skillId:K,negativeSkillSource:$}})},[o.battleState]),Z=C.useCallback(()=>{d({type:"RESET_GAME"})},[]),Q=C.useCallback(K=>{const ie=o.currentPerspective||"child",$=o.perspectivesData[ie].memories[K];return $==="HE"||$==="BE"},[o.perspectivesData,o.currentPerspective]),I={state:o,dispatch:d,startNewGame:u,startWeek2:p,completeMemoryPoint:y,unlockBossForMemory:g,defeatBoss:m,equipSkill:k,unlockSkill:O,startBattle:D,useSkillInBattle:q,resetGame:Z,getMemoryResult:h,canChallengeBoss:Q,getBossesForMemory:N};return s.jsx(xp.Provider,{value:I,children:c})}function Pe(){const c=C.useContext(xp);if(!c)throw new Error("useGame must be used within a GameProvider");return c}const Di=["欢迎来到乳腺守护者的世界，准备好开启你的守护之旅了吗？","每月一次乳房自查很重要，早发现、早就医，是最靠谱的健康习惯！","酒精会刺激乳腺组织增生，能少喝就少喝，健康永远排在第一位～","坏情绪可不会自己跑掉，多给自己一点放松的时间，也是在守护乳腺主城呀。","中老年女性也要坚持每年做乳腺体检，很多早期病变都是没有痛感的哦。","每条故事线都有 HE 和 BE 两种结局，不同的选择会走向不一样的结果哦～","二周目会开启时光回溯功能，可以无限重玩记忆点，去解锁更圆满的结局吧！","首页的知识手册里藏着所有 BOSS 图鉴和科普内容，随时都能查看哦。","二周目通关后会解锁未来医院彩蛋，里面藏着关于癌症治疗的未来展望哦。","你知道吗？三阴性乳腺癌缺少三类经典治疗靶点，一直是临床里的难题。","和线性 RNA 不一样，环状 RNA 的闭环结构更稳定，能更持久地激活免疫系统。","三阴性乳腺癌的治疗虽然有难度，但科学家们一直都在寻找新的方向哦。","游戏结束后记得填写守护者评估报告，看看自己收获了多少知识吧～","你的每一份反馈都很珍贵，会让《乳腺守护者》变得越来越好哦！","嘿！别总熬夜啦，规律作息才是乳腺健康的最佳守护盾哦！"];function Sp(c){var o,d,u="";if(typeof c=="string"||typeof c=="number")u+=c;else if(typeof c=="object")if(Array.isArray(c)){var p=c.length;for(o=0;o<p;o++)c[o]&&(d=Sp(c[o]))&&(u&&(u+=" "),u+=d)}else for(d in c)c[d]&&(u&&(u+=" "),u+=d);return u}function gp(){for(var c,o,d=0,u="",p=arguments.length;d<p;d++)(c=arguments[d])&&(o=Sp(c))&&(u&&(u+=" "),u+=o);return u}const Mx=(c,o)=>{const d=new Array(c.length+o.length);for(let u=0;u<c.length;u++)d[u]=c[u];for(let u=0;u<o.length;u++)d[c.length+u]=o[u];return d},Rx=(c,o)=>({classGroupId:c,validator:o}),bp=(c=new Map,o=null,d)=>({nextPart:c,validators:o,classGroupId:d}),Mi="-",Zm=[],Ux="arbitrary..",Lx=c=>{const o=Gx(c),{conflictingClassGroups:d,conflictingClassGroupModifiers:u}=c;return{getClassGroupId:y=>{if(y.startsWith("[")&&y.endsWith("]"))return qx(y);const N=y.split(Mi),g=N[0]===""&&N.length>1?1:0;return yp(N,g,o)},getConflictingClassGroupIds:(y,N)=>{if(N){const g=u[y],m=d[y];return g?m?Mx(m,g):g:m||Zm}return d[y]||Zm}}},yp=(c,o,d)=>{if(c.length-o===0)return d.classGroupId;const p=c[o],h=d.nextPart.get(p);if(h){const m=yp(c,o+1,h);if(m)return m}const y=d.validators;if(y===null)return;const N=o===0?c.join(Mi):c.slice(o).join(Mi),g=y.length;for(let m=0;m<g;m++){const k=y[m];if(k.validator(N))return k.classGroupId}},qx=c=>c.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=c.slice(1,-1),d=o.indexOf(":"),u=o.slice(0,d);return u?Ux+u:void 0})(),Gx=c=>{const{theme:o,classGroups:d}=c;return Yx(d,o)},Yx=(c,o)=>{const d=bp();for(const u in c){const p=c[u];Nu(p,d,u,o)}return d},Nu=(c,o,d,u)=>{const p=c.length;for(let h=0;h<p;h++){const y=c[h];Vx(y,o,d,u)}},Vx=(c,o,d,u)=>{if(typeof c=="string"){Xx(c,o,d);return}if(typeof c=="function"){Qx(c,o,d,u);return}Zx(c,o,d,u)},Xx=(c,o,d)=>{const u=c===""?o:vp(o,c);u.classGroupId=d},Qx=(c,o,d,u)=>{if(Kx(c)){Nu(c(u),o,d,u);return}o.validators===null&&(o.validators=[]),o.validators.push(Rx(d,c))},Zx=(c,o,d,u)=>{const p=Object.entries(c),h=p.length;for(let y=0;y<h;y++){const[N,g]=p[y];Nu(g,vp(o,N),d,u)}},vp=(c,o)=>{let d=c;const u=o.split(Mi),p=u.length;for(let h=0;h<p;h++){const y=u[h];let N=d.nextPart.get(y);N||(N=bp(),d.nextPart.set(y,N)),d=N}return d},Kx=c=>"isThemeGetter"in c&&c.isThemeGetter===!0,Jx=c=>{if(c<1)return{get:()=>{},set:()=>{}};let o=0,d=Object.create(null),u=Object.create(null);const p=(h,y)=>{d[h]=y,o++,o>c&&(o=0,u=d,d=Object.create(null))};return{get(h){let y=d[h];if(y!==void 0)return y;if((y=u[h])!==void 0)return p(h,y),y},set(h,y){h in d?d[h]=y:p(h,y)}}},Eu="!",Km=":",$x=[],Jm=(c,o,d,u,p)=>({modifiers:c,hasImportantModifier:o,baseClassName:d,maybePostfixModifierPosition:u,isExternal:p}),Wx=c=>{const{prefix:o,experimentalParseClassName:d}=c;let u=p=>{const h=[];let y=0,N=0,g=0,m;const k=p.length;for(let Q=0;Q<k;Q++){const I=p[Q];if(y===0&&N===0){if(I===Km){h.push(p.slice(g,Q)),g=Q+1;continue}if(I==="/"){m=Q;continue}}I==="["?y++:I==="]"?y--:I==="("?N++:I===")"&&N--}const O=h.length===0?p:p.slice(g);let D=O,q=!1;O.endsWith(Eu)?(D=O.slice(0,-1),q=!0):O.startsWith(Eu)&&(D=O.slice(1),q=!0);const Z=m&&m>g?m-g:void 0;return Jm(h,q,D,Z)};if(o){const p=o+Km,h=u;u=y=>y.startsWith(p)?h(y.slice(p.length)):Jm($x,!1,y,void 0,!0)}if(d){const p=u;u=h=>d({className:h,parseClassName:p})}return u},Fx=c=>{const o=new Map;return c.orderSensitiveModifiers.forEach((d,u)=>{o.set(d,1e6+u)}),d=>{const u=[];let p=[];for(let h=0;h<d.length;h++){const y=d[h],N=y[0]==="[",g=o.has(y);N||g?(p.length>0&&(p.sort(),u.push(...p),p=[]),u.push(y)):p.push(y)}return p.length>0&&(p.sort(),u.push(...p)),u}},Px=c=>({cache:Jx(c.cacheSize),parseClassName:Wx(c),sortModifiers:Fx(c),...Lx(c)}),Ix=/\s+/,eS=(c,o)=>{const{parseClassName:d,getClassGroupId:u,getConflictingClassGroupIds:p,sortModifiers:h}=o,y=[],N=c.trim().split(Ix);let g="";for(let m=N.length-1;m>=0;m-=1){const k=N[m],{isExternal:O,modifiers:D,hasImportantModifier:q,baseClassName:Z,maybePostfixModifierPosition:Q}=d(k);if(O){g=k+(g.length>0?" "+g:g);continue}let I=!!Q,K=u(I?Z.substring(0,Q):Z);if(!K){if(!I){g=k+(g.length>0?" "+g:g);continue}if(K=u(Z),!K){g=k+(g.length>0?" "+g:g);continue}I=!1}const ie=D.length===0?"":D.length===1?D[0]:h(D).join(":"),$=q?ie+Eu:ie,ue=$+K;if(y.indexOf(ue)>-1)continue;y.push(ue);const M=p(K,I);for(let J=0;J<M.length;++J){const X=M[J];y.push($+X)}g=k+(g.length>0?" "+g:g)}return g},tS=(...c)=>{let o=0,d,u,p="";for(;o<c.length;)(d=c[o++])&&(u=Ep(d))&&(p&&(p+=" "),p+=u);return p},Ep=c=>{if(typeof c=="string")return c;let o,d="";for(let u=0;u<c.length;u++)c[u]&&(o=Ep(c[u]))&&(d&&(d+=" "),d+=o);return d},nS=(c,...o)=>{let d,u,p,h;const y=g=>{const m=o.reduce((k,O)=>O(k),c());return d=Px(m),u=d.cache.get,p=d.cache.set,h=N,N(g)},N=g=>{const m=u(g);if(m)return m;const k=eS(g,d);return p(g,k),k};return h=y,(...g)=>h(tS(...g))},lS=[],We=c=>{const o=d=>d[c]||lS;return o.isThemeGetter=!0,o},Bp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Op=/^\((?:(\w[\w-]*):)?(.+)\)$/i,aS=/^\d+\/\d+$/,sS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,iS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,cS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,uS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$l=c=>aS.test(c),pe=c=>!!c&&!Number.isNaN(Number(c)),Vn=c=>!!c&&Number.isInteger(Number(c)),du=c=>c.endsWith("%")&&pe(c.slice(0,-1)),xn=c=>sS.test(c),oS=()=>!0,dS=c=>iS.test(c)&&!cS.test(c),jp=()=>!1,fS=c=>rS.test(c),mS=c=>uS.test(c),pS=c=>!F(c)&&!P(c),hS=c=>la(c,wp,jp),F=c=>Bp.test(c),rl=c=>la(c,Ap,dS),fu=c=>la(c,yS,pe),$m=c=>la(c,Np,jp),xS=c=>la(c,kp,mS),Ai=c=>la(c,_p,fS),P=c=>Op.test(c),ns=c=>aa(c,Ap),SS=c=>aa(c,vS),Wm=c=>aa(c,Np),gS=c=>aa(c,wp),bS=c=>aa(c,kp),_i=c=>aa(c,_p,!0),la=(c,o,d)=>{const u=Bp.exec(c);return u?u[1]?o(u[1]):d(u[2]):!1},aa=(c,o,d=!1)=>{const u=Op.exec(c);return u?u[1]?o(u[1]):d:!1},Np=c=>c==="position"||c==="percentage",kp=c=>c==="image"||c==="url",wp=c=>c==="length"||c==="size"||c==="bg-size",Ap=c=>c==="length",yS=c=>c==="number",vS=c=>c==="family-name",_p=c=>c==="shadow",ES=()=>{const c=We("color"),o=We("font"),d=We("text"),u=We("font-weight"),p=We("tracking"),h=We("leading"),y=We("breakpoint"),N=We("container"),g=We("spacing"),m=We("radius"),k=We("shadow"),O=We("inset-shadow"),D=We("text-shadow"),q=We("drop-shadow"),Z=We("blur"),Q=We("perspective"),I=We("aspect"),K=We("ease"),ie=We("animate"),$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ue=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],M=()=>[...ue(),P,F],J=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto","contain","none"],Y=()=>[P,F,g],ce=()=>[$l,"full","auto",...Y()],he=()=>[Vn,"none","subgrid",P,F],Te=()=>["auto",{span:["full",Vn,P,F]},Vn,P,F],Ce=()=>[Vn,"auto",P,F],ct=()=>["auto","min","max","fr",P,F],Ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Le=()=>["start","end","center","stretch","center-safe","end-safe"],A=()=>["auto",...Y()],L=()=>[$l,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Y()],R=()=>[c,P,F],V=()=>[...ue(),Wm,$m,{position:[P,F]}],oe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],S=()=>["auto","cover","contain",gS,hS,{size:[P,F]}],H=()=>[du,ns,rl],U=()=>["","none","full",m,P,F],G=()=>["",pe,ns,rl],ne=()=>["solid","dashed","dotted","double"],de=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[pe,du,Wm,$m],Xe=()=>["","none",Z,P,F],ke=()=>["none",pe,P,F],kt=()=>["none",pe,P,F],Qt=()=>[pe,P,F],Lt=()=>[$l,"full",...Y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xn],breakpoint:[xn],color:[oS],container:[xn],"drop-shadow":[xn],ease:["in","out","in-out"],font:[pS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xn],shadow:[xn],spacing:["px",pe],text:[xn],"text-shadow":[xn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$l,F,P,I]}],container:["container"],columns:[{columns:[pe,F,P,N]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:M()}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:X()}],"overscroll-x":[{"overscroll-x":X()}],"overscroll-y":[{"overscroll-y":X()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ce()}],"inset-x":[{"inset-x":ce()}],"inset-y":[{"inset-y":ce()}],start:[{start:ce()}],end:[{end:ce()}],top:[{top:ce()}],right:[{right:ce()}],bottom:[{bottom:ce()}],left:[{left:ce()}],visibility:["visible","invisible","collapse"],z:[{z:[Vn,"auto",P,F]}],basis:[{basis:[$l,"full","auto",N,...Y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,$l,"auto","initial","none",F]}],grow:[{grow:["",pe,P,F]}],shrink:[{shrink:["",pe,P,F]}],order:[{order:[Vn,"first","last","none",P,F]}],"grid-cols":[{"grid-cols":he()}],"col-start-end":[{col:Te()}],"col-start":[{"col-start":Ce()}],"col-end":[{"col-end":Ce()}],"grid-rows":[{"grid-rows":he()}],"row-start-end":[{row:Te()}],"row-start":[{"row-start":Ce()}],"row-end":[{"row-end":Ce()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ct()}],"auto-rows":[{"auto-rows":ct()}],gap:[{gap:Y()}],"gap-x":[{"gap-x":Y()}],"gap-y":[{"gap-y":Y()}],"justify-content":[{justify:[...Ie(),"normal"]}],"justify-items":[{"justify-items":[...Le(),"normal"]}],"justify-self":[{"justify-self":["auto",...Le()]}],"align-content":[{content:["normal",...Ie()]}],"align-items":[{items:[...Le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Le(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ie()}],"place-items":[{"place-items":[...Le(),"baseline"]}],"place-self":[{"place-self":["auto",...Le()]}],p:[{p:Y()}],px:[{px:Y()}],py:[{py:Y()}],ps:[{ps:Y()}],pe:[{pe:Y()}],pt:[{pt:Y()}],pr:[{pr:Y()}],pb:[{pb:Y()}],pl:[{pl:Y()}],m:[{m:A()}],mx:[{mx:A()}],my:[{my:A()}],ms:[{ms:A()}],me:[{me:A()}],mt:[{mt:A()}],mr:[{mr:A()}],mb:[{mb:A()}],ml:[{ml:A()}],"space-x":[{"space-x":Y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Y()}],"space-y-reverse":["space-y-reverse"],size:[{size:L()}],w:[{w:[N,"screen",...L()]}],"min-w":[{"min-w":[N,"screen","none",...L()]}],"max-w":[{"max-w":[N,"screen","none","prose",{screen:[y]},...L()]}],h:[{h:["screen","lh",...L()]}],"min-h":[{"min-h":["screen","lh","none",...L()]}],"max-h":[{"max-h":["screen","lh",...L()]}],"font-size":[{text:["base",d,ns,rl]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[u,P,fu]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",du,F]}],"font-family":[{font:[SS,F,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[p,P,F]}],"line-clamp":[{"line-clamp":[pe,"none",P,fu]}],leading:[{leading:[h,...Y()]}],"list-image":[{"list-image":["none",P,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",P,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",P,rl]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[pe,"auto",P,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",P,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",P,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:V()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:S()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Vn,P,F],radial:["",P,F],conic:[Vn,P,F]},bS,xS]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:U()}],"rounded-s":[{"rounded-s":U()}],"rounded-e":[{"rounded-e":U()}],"rounded-t":[{"rounded-t":U()}],"rounded-r":[{"rounded-r":U()}],"rounded-b":[{"rounded-b":U()}],"rounded-l":[{"rounded-l":U()}],"rounded-ss":[{"rounded-ss":U()}],"rounded-se":[{"rounded-se":U()}],"rounded-ee":[{"rounded-ee":U()}],"rounded-es":[{"rounded-es":U()}],"rounded-tl":[{"rounded-tl":U()}],"rounded-tr":[{"rounded-tr":U()}],"rounded-br":[{"rounded-br":U()}],"rounded-bl":[{"rounded-bl":U()}],"border-w":[{border:G()}],"border-w-x":[{"border-x":G()}],"border-w-y":[{"border-y":G()}],"border-w-s":[{"border-s":G()}],"border-w-e":[{"border-e":G()}],"border-w-t":[{"border-t":G()}],"border-w-r":[{"border-r":G()}],"border-w-b":[{"border-b":G()}],"border-w-l":[{"border-l":G()}],"divide-x":[{"divide-x":G()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":G()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ne(),"hidden","none"]}],"divide-style":[{divide:[...ne(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,P,F]}],"outline-w":[{outline:["",pe,ns,rl]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",k,_i,Ai]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",O,_i,Ai]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[pe,rl]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":G()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",D,_i,Ai]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[pe,P,F]}],"mix-blend":[{"mix-blend":[...de(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[P,F]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ue()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:V()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:S()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",P,F]}],filter:[{filter:["","none",P,F]}],blur:[{blur:Xe()}],brightness:[{brightness:[pe,P,F]}],contrast:[{contrast:[pe,P,F]}],"drop-shadow":[{"drop-shadow":["","none",q,_i,Ai]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",pe,P,F]}],"hue-rotate":[{"hue-rotate":[pe,P,F]}],invert:[{invert:["",pe,P,F]}],saturate:[{saturate:[pe,P,F]}],sepia:[{sepia:["",pe,P,F]}],"backdrop-filter":[{"backdrop-filter":["","none",P,F]}],"backdrop-blur":[{"backdrop-blur":Xe()}],"backdrop-brightness":[{"backdrop-brightness":[pe,P,F]}],"backdrop-contrast":[{"backdrop-contrast":[pe,P,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,P,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,P,F]}],"backdrop-invert":[{"backdrop-invert":["",pe,P,F]}],"backdrop-opacity":[{"backdrop-opacity":[pe,P,F]}],"backdrop-saturate":[{"backdrop-saturate":[pe,P,F]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,P,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Y()}],"border-spacing-x":[{"border-spacing-x":Y()}],"border-spacing-y":[{"border-spacing-y":Y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",P,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",P,F]}],ease:[{ease:["linear","initial",K,P,F]}],delay:[{delay:[pe,P,F]}],animate:[{animate:["none",ie,P,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[Q,P,F]}],"perspective-origin":[{"perspective-origin":M()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:kt()}],"scale-x":[{"scale-x":kt()}],"scale-y":[{"scale-y":kt()}],"scale-z":[{"scale-z":kt()}],"scale-3d":["scale-3d"],skew:[{skew:Qt()}],"skew-x":[{"skew-x":Qt()}],"skew-y":[{"skew-y":Qt()}],transform:[{transform:[P,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:M()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Lt()}],"translate-x":[{"translate-x":Lt()}],"translate-y":[{"translate-y":Lt()}],"translate-z":[{"translate-z":Lt()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",P,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Y()}],"scroll-mx":[{"scroll-mx":Y()}],"scroll-my":[{"scroll-my":Y()}],"scroll-ms":[{"scroll-ms":Y()}],"scroll-me":[{"scroll-me":Y()}],"scroll-mt":[{"scroll-mt":Y()}],"scroll-mr":[{"scroll-mr":Y()}],"scroll-mb":[{"scroll-mb":Y()}],"scroll-ml":[{"scroll-ml":Y()}],"scroll-p":[{"scroll-p":Y()}],"scroll-px":[{"scroll-px":Y()}],"scroll-py":[{"scroll-py":Y()}],"scroll-ps":[{"scroll-ps":Y()}],"scroll-pe":[{"scroll-pe":Y()}],"scroll-pt":[{"scroll-pt":Y()}],"scroll-pr":[{"scroll-pr":Y()}],"scroll-pb":[{"scroll-pb":Y()}],"scroll-pl":[{"scroll-pl":Y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",P,F]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[pe,ns,rl,fu]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},BS=nS(ES);function Sn(...c){return BS(gp(c))}const OS=5e3;function Fm(c){if(Di.length<2)return c;let o=c;for(;o===c;)o=Math.floor(Math.random()*Di.length);return o}function jS(){const[c,o]=C.useState(()=>Math.floor(Math.random()*Di.length)),d=C.useCallback(()=>o(u=>Fm(u)),[]);return C.useEffect(()=>{if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;const u=window.setInterval(()=>o(p=>Fm(p)),OS);return()=>window.clearInterval(u)},[]),{line:Di[c],next:d}}function qi({className:c="",bubbleClassName:o=""}){const{line:d}=jS();return s.jsx("div",{className:Sn("pointer-events-none",c),children:s.jsxs("div",{className:Sn("relative w-max max-w-[min(280px,72vw)] rounded-2xl border-2 border-pink-300 bg-pink-100/95 px-3 py-2 text-[13px] font-bold leading-snug text-pink-950 shadow-md sm:text-sm",o),children:[d,s.jsx("span",{className:"absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 rounded-sm border-b-2 border-r-2 border-pink-300 bg-pink-100"})]})})}function Pm(){const{dispatch:c}=Pe();return s.jsxs("div",{className:"relative min-h-screen w-full overflow-hidden",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-bg.avif",alt:"",className:"absolute inset-0 h-full w-full object-cover"}),s.jsxs("div",{className:"relative z-20 flex min-h-screen flex-col items-center justify-center gap-5 px-4 pt-[18vh]",children:[s.jsx("button",{type:"button",className:"w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95",onClick:()=>c({type:"SET_PHASE",payload:"perspectiveSelect"}),children:s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-start.avif",alt:"开始游戏",className:"w-full drop-shadow-lg",draggable:!1})}),s.jsx("button",{type:"button",className:"w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95",onClick:()=>c({type:"SET_PHASE",payload:"knowledgeBook"}),children:s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-book.avif",alt:"知识手册",className:"w-full drop-shadow-lg",draggable:!1})})]}),s.jsxs("div",{className:"absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed2843093104553e.avif",alt:"Bottom Stage",className:"w-full h-auto",draggable:!1}),s.jsx(qi,{className:"absolute bottom-[28%] right-[6%] z-20"})]}),s.jsx("div",{className:"absolute bottom-6 left-6 z-20 flex flex-col items-center space-y-2",children:s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/home/qr-home.avif",alt:"守护者健康档案问卷二维码",className:"h-28 w-28 rounded-lg shadow-md md:h-32 md:w-32"})})]})}const Vt=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("rounded-xl border bg-card text-card-foreground shadow",c),...o}));Vt.displayName="Card";const NS=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("flex flex-col space-y-1.5 p-6",c),...o}));NS.displayName="CardHeader";const kS=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("font-semibold leading-none tracking-tight",c),...o}));kS.displayName="CardTitle";const wS=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("text-sm text-muted-foreground",c),...o}));wS.displayName="CardDescription";const Xt=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("p-6 pt-0",c),...o}));Xt.displayName="CardContent";const AS=C.forwardRef(({className:c,...o},d)=>s.jsx("div",{ref:d,className:Sn("flex items-center p-6 pt-0",c),...o}));AS.displayName="CardFooter";const _S=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CS=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,d,u)=>u?u.toUpperCase():d.toLowerCase()),Im=c=>{const o=CS(c);return o.charAt(0).toUpperCase()+o.slice(1)},Cp=(...c)=>c.filter((o,d,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===d).join(" ").trim(),HS=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};var TS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zS=C.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:p="",children:h,iconNode:y,...N},g)=>C.createElement("svg",{ref:g,...TS,width:o,height:o,stroke:c,strokeWidth:u?Number(d)*24/Number(o):d,className:Cp("lucide",p),...!h&&!HS(N)&&{"aria-hidden":"true"},...N},[...y.map(([m,k])=>C.createElement(m,k)),...Array.isArray(h)?h:[h]]));const Re=(c,o)=>{const d=C.forwardRef(({className:u,...p},h)=>C.createElement(zS,{ref:h,iconNode:o,className:Cp(`lucide-${_S(Im(c))}`,`lucide-${c}`,u),...p}));return d.displayName=Im(c),d};const DS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Hp=Re("arrow-left",DS);const MS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ep=Re("arrow-right",MS);const RS=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],US=Re("baby",RS);const LS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],qS=Re("book-open",LS);const GS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Tp=Re("brain",GS);const YS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ri=Re("check",YS);const VS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zi=Re("chevron-left",VS);const XS=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tp=Re("compass",XS);const QS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ZS=Re("eye-off",QS);const KS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],as=Re("lock",KS);const JS=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],np=Re("package",JS);const $S=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],WS=Re("play",$S);const FS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],PS=Re("rotate-ccw",FS);const IS=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],zp=Re("scroll-text",IS);const eg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Dp=Re("settings",eg);const tg=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Mp=Re("skip-forward",tg);const ng=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],mu=Re("skull",ng);const lg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ul=Re("sparkles",lg);const ag=[["path",{d:"m11 19-6-6",key:"s7kpr"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"m8 16-4 4",key:"1oqv8h"}],["path",{d:"M9.5 17.5 21 6V3h-3L6.5 14.5",key:"pkxemp"}]],ku=Re("sword",ag);const sg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Bu=Re("triangle-alert",sg);const ig=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],cg=Re("undo",ig);const rg=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],ug=Re("user-round",rg);const og=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dg=Re("user",og);const fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rp=Re("x",fg),__igemCharacterUrls={"./assets/characters/adult-protagonist/主角-坚定.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-86e003dbc7e71a48.avif","./assets/characters/adult-protagonist/主角-好奇.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f4119406020d66cd.avif","./assets/characters/adult-protagonist/主角-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1533f0ae21cf7fde.avif","./assets/characters/adult-protagonist/主角-恐惧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d648cfc06b123afb.avif","./assets/characters/adult-protagonist/主角-懊悔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8792713b8bb4d74c.avif","./assets/characters/adult-protagonist/主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-10fb50c4535a5605.avif","./assets/characters/adult-protagonist/主角-温暖.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ce91a8150b6aee2.avif","./assets/characters/adult-protagonist/主角-焦虑.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5f6d12c8370c0111.avif","./assets/characters/adult-protagonist/主角-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67c3a7f2747590a1.avif","./assets/characters/adult-protagonist/主角-紧张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a6a01fe0aa316f61.avif","./assets/characters/adult-protagonist/主角-轻松.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1ada2d37a61820e.avif","./assets/characters/bosses/乳头内陷-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d625d7ceefbf2aea.avif","./assets/characters/bosses/乳头内陷-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb764dc56227cb9.avif","./assets/characters/bosses/乳头溢液-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d946498aef50c20c.avif","./assets/characters/bosses/乳头溢液-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-257df97dd619fb0f.avif","./assets/characters/bosses/乳房硬块-BOSS-嚣张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-df6a796e340e1f8f.avif","./assets/characters/bosses/乳房硬块-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5906d5be24ee758a.avif","./assets/characters/bosses/乳房硬块-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-57c102f32f289e4c.avif","./assets/characters/bosses/橘皮样改变-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f45398ae0ef9b7e7.avif","./assets/characters/bosses/橘皮样改变-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-37ed08d784a9721e.avif","./assets/characters/bosses/腋下淋巴结肿大-BOSS-嚣张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-776d4d18307889ec.avif","./assets/characters/bosses/腋下淋巴结肿大-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-76283d3dea7d4b0f.avif","./assets/characters/bosses/腋下淋巴结肿大-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-24af81f51cdf9563.avif","./assets/characters/bosses/酒窝征-BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1098c0cb94adc62.avif","./assets/characters/bosses/酒窝征-BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-513cd0422c2cd7ad.avif","./assets/characters/cells/内分泌调节细胞-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebab765466ad83e9.avif","./assets/characters/cells/内分泌调节细胞-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f389fbf6e6a6e55e.avif","./assets/characters/cells/内分泌调节细胞-紊乱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-59b91126a020c951.avif","./assets/characters/cells/分泌细胞-健康.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-14522979c06b60c8.avif","./assets/characters/cells/分泌细胞-委屈.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-70e8d1bc6c1aeb8a.avif","./assets/characters/cells/分泌细胞-干瘪.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-13923cf19c0c9c4b.avif","./assets/characters/cells/分泌细胞-异常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b4a0cd60215d9386.avif","./assets/characters/cells/分泌细胞-恐惧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ab70e0610e183b8.avif","./assets/characters/cells/分泌细胞-愉悦.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b3b3b1d3e3ab3faa.avif","./assets/characters/cells/分泌细胞-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-eb097512eb1518e2.avif","./assets/characters/cells/分泌细胞-肿胀.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-49defde4be69e2b4.avif","./assets/characters/cells/分泌细胞-胀痛.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fd837499afb179a7.avif","./assets/characters/cells/分泌细胞-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-81a7d25336d89b86.avif","./assets/characters/cells/巨噬细胞-小巧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-31706bf5d6583076.avif","./assets/characters/cells/巨噬细胞-活泼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cbd60ed9c8db9dd2.avif","./assets/characters/cells/巨噬细胞-爽朗.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eaf2d5a4619f726.avif","./assets/characters/cells/巨噬细胞-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1dd2b638c568c40b.avif","./assets/characters/cells/巨噬细胞-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-878d31eb185b4a56.avif","./assets/characters/cells/巨噬细胞-醉酒.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75fd4d95accb0356.avif","./assets/characters/cells/淋巴细胞-傲娇.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab36ca8e501cdf4e.avif","./assets/characters/cells/淋巴细胞-急促.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-23f6acc2255fdbcf.avif","./assets/characters/cells/淋巴细胞-无助.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e9151dc84a31a684.avif","./assets/characters/cells/淋巴细胞-期待.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3748ac9e82fa8eff.avif","./assets/characters/cells/淋巴细胞-欢快.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-868d49516b57aae8.avif","./assets/characters/cells/淋巴细胞-活泼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-62655366ff6fceb7.avif","./assets/characters/cells/淋巴细胞-肿大.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f68caa64596ca8c1.avif","./assets/characters/cells/淋巴细胞-警惕.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6f125d789d735ef.avif","./assets/characters/cells/雌激素调节细胞-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed632e4bf5e8c396.avif","./assets/characters/cells/雌激素调节细胞-紊乱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-836b24a9358ee394.avif","./assets/characters/child-protagonist/主角-任性.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7588b25a156888e0.avif","./assets/characters/child-protagonist/主角-固执.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5467d6289edad5a.avif","./assets/characters/child-protagonist/主角-害怕.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-be646ea140412020.avif","./assets/characters/child-protagonist/主角-开心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7decf36a003b8ca3.avif","./assets/characters/child-protagonist/主角-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c0f5c636da1209c.avif","./assets/characters/child-protagonist/主角-愧疚.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-99be70d57cca4253.avif","./assets/characters/child-protagonist/主角-懂事.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a8d55f1b642610c8.avif","./assets/characters/child-protagonist/主角-懵懂.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5da085f644ce2b3.avif","./assets/characters/child-protagonist/主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4d8df5ef1eb47283.avif","./assets/characters/child-protagonist/主角-焦急.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9223322784865f85.avif","./assets/characters/elder-protagonist/主角-固执.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64813de5038fa6d9.avif","./assets/characters/elder-protagonist/主角-坚定.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ad46082606151a5f.avif","./assets/characters/elder-protagonist/主角-安心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4ccde2f2d81cc09c.avif","./assets/characters/elder-protagonist/主角-恐惧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9387c4949776fbf9.avif","./assets/characters/elder-protagonist/主角-愧疚.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8c3d3e3e04015ec9.avif","./assets/characters/elder-protagonist/主角-懊悔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebc388bc163d79ba.avif","./assets/characters/elder-protagonist/主角-执迷.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-812e6836b7ef9dcd.avif","./assets/characters/elder-protagonist/主角-期待.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-995ef28eaf212680.avif","./assets/characters/elder-protagonist/主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-15a293efb50caaae.avif","./assets/characters/elder-protagonist/主角-温暖.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-77032cbe91e14b38.avif","./assets/characters/elder-protagonist/主角-焦虑.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-927830818ebd25ec.avif","./assets/characters/elder-protagonist/主角-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7b0e65986d41fac.avif","./assets/characters/family/儿媳-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1af45dc9d3ac1b07.avif","./assets/characters/family/儿媳-温柔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f2a9fe2f7d70e20c.avif","./assets/characters/family/儿媳-细心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5ee2ae82de57338.avif","./assets/characters/family/儿媳-贴心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3cfc41dad36b8979.avif","./assets/characters/family/儿子-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ec1eb2a2a58748c.avif","./assets/characters/family/儿子-愤怒.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-58a8a94ded629bde.avif","./assets/characters/family/儿子-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-efb3e5d87952f4f2.avif","./assets/characters/family/儿子-焦急.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-514766616060b217.avif","./assets/characters/family/儿子-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1c6ff47aea8b76d6.avif","./assets/characters/family/儿子-诚恳.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f741731ba9e7fd4e.avif","./assets/characters/family/女儿-哭泣.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-39899006093fcdf0.avif","./assets/characters/family/女儿-委屈.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3eb83ce65c99efa.avif","./assets/characters/family/女儿-恳求.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-87a78a6fd3915cfc.avif","./assets/characters/family/女儿-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc6bf73316efd4c7.avif","./assets/characters/family/女儿-无奈.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2fdb69c8ea39147c.avif","./assets/characters/family/女儿-温柔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75826a24895f9f29.avif","./assets/characters/family/妈妈-失落.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67d0c9360f6f5605.avif","./assets/characters/family/妈妈-委屈.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ca285093db58783f.avif","./assets/characters/family/妈妈-开心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a41329458428c310.avif","./assets/characters/family/妈妈-感动.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ce1d885abcba8ad4.avif","./assets/characters/family/妈妈-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3edc7ee9dc02db29.avif","./assets/characters/family/妈妈-欣慰.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dd5bfc96c4ba934f.avif","./assets/characters/family/妈妈-消沉.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-45710fa50b1ae7dc.avif","./assets/characters/family/妈妈-温柔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9eb3b4fd4578df4f.avif","./assets/characters/family/妈妈-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3067c7af3bc4879c.avif","./assets/characters/family/妈妈-疼痛.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7109dffa3b1ae3b5.avif","./assets/characters/family/妈妈-苍白.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c9e7fbceee8e81e2.avif","./assets/characters/family/妈妈-难过.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d59356fa52676baa.avif","./assets/characters/family/妈妈-麻木.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-84565938e126791e.avif","./assets/characters/family/小孙女-活泼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64526baa4723e711.avif","./assets/characters/family/小孙女-软糯.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab02ee09784ddc90.avif","./assets/characters/family/爸爸-严肃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8019bbe9966becac.avif","./assets/characters/family/爸爸-稳重.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc14808f2f3ef297.avif","./assets/characters/medical/乳腺科医生(专家)-专业.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5b7c6fdf5fad0e9e.avif","./assets/characters/medical/乳腺科医生(专家)-严肃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-297fc1025a328e31.avif","./assets/characters/medical/乳腺科医生(专家)-温和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-bed21f5a0ef01527.avif","./assets/characters/medical/民间老郎中-神秘.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5bcb190fc6f3bec.avif","./assets/characters/medical/社区医生-专业.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-194c173967057a2b.avif","./assets/characters/medical/药店店员-友善.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f432d7283d569e04.avif","./assets/characters/medical/药店店员-随意.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1f7e1d736c3f06ce.avif","./assets/characters/medical/营养师-专业.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3b026af7443238fa.avif","./assets/characters/neighbors/刘阿姨-附和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-708369a36bad567e.avif","./assets/characters/neighbors/张阿姨-热心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5cb85c40decc488e.avif","./assets/characters/neighbors/李阿姨-附和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ef7b571b0efdca2.avif","./assets/characters/neighbors/王阿姨-热心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2ab13e8a593eac8.avif","./assets/characters/neighbors/群友-友善.jpg":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8af297d0665588bf.avif","./assets/characters/neighbors/群友-友善.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3ceeac5f6d649527.avif","./assets/characters/neighbors/邻居-热心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c887dd4577b09e0.avif","./assets/characters/paimon/派蒙-严肃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif","./assets/characters/paimon/派蒙-傲娇.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-434bb619e66a69c9.avif","./assets/characters/paimon/派蒙-哽咽.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d792a22d27151718.avif","./assets/characters/paimon/派蒙-开心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a430f89a8ff59a13.avif","./assets/characters/paimon/派蒙-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-473bda5e4b004f41.avif","./assets/characters/paimon/派蒙-愤怒.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883732e8c72dedfb.avif","./assets/characters/paimon/派蒙-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cb740afc662bc583.avif","./assets/characters/paimon/派蒙-撇嘴.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f8744d5a7c3a8626.avif","./assets/characters/paimon/派蒙-无奈.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883afbad87e62248.avif","./assets/characters/paimon/派蒙-期待.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1a24f9c59d4a0018.avif","./assets/characters/paimon/派蒙-欣慰.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-82fd993980e0290f.avif","./assets/characters/paimon/派蒙-温柔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c5eb634862b1fe07.avif","./assets/characters/paimon/派蒙-焦急.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc83f760eafb6b42.avif","./assets/characters/paimon/派蒙-绝望.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e2e8ac5350b65d04.avif","./assets/characters/paimon/派蒙-认真.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d00a5925b7918c2c.avif","./assets/characters/paimon/派蒙-赞许.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9f0b19fb0cc9f960.avif","./assets/characters/paimon/派蒙-软糯.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3a549d6cb5f1889.avif","./assets/characters/paimon/派蒙-郑重.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif","./assets/characters/paimon/派蒙-雀跃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-425fe5b22cfb2243.avif","./assets/characters/paimon/派蒙-骄傲.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6941a93e304d1d4.avif","./assets/characters/workplace/同事-同情.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7b3bda239c9c5da2.avif","./assets/characters/workplace/同事-担忧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ff34e6102ea44186.avif","./assets/characters/workplace/同事-起哄.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3106a1e4133d514b.avif","./assets/characters/workplace/小李-同情.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d748911d9095622c.avif","./assets/characters/workplace/小李-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-711333d4ba556996.avif","./assets/characters/workplace/小李-苦相.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-79c3c20642c0cbba.avif","./assets/characters/workplace/小李-谨慎.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6b02189d88b08cc2.avif","./assets/characters/workplace/张总-笑意.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a653b84c58e06521.avif","./assets/characters/workplace/张总-随和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-22dfa8ca0964136f.avif","./assets/characters/workplace/王哥-友善.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a4cf97f5a2a770ba.avif","./assets/characters/workplace/甲方总负责人-严肃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7f1491f0b3263f67.avif","./assets/characters/workplace/甲方总负责人-满意.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-83ec1fa58f392e1e.avif","./assets/characters/workplace/经理-威严.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb8b1b33b04ee1d.avif","./assets/characters/workplace/经理-愣住.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3526f88489aa29b9.avif","./assets/characters/workplace/经理-愤怒.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6c7319b0feb951d0.avif","./assets/characters/workplace/经理-满意.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7dab67333e0683a.avif","./assets/characters/workplace/经理-缓和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2e0f4755029434c7.avif","./assets/characters/child-protagonist/幼年主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4d8df5ef1eb47283.avif","./assets/characters/child-protagonist/幼年主角-懵懂.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5da085f644ce2b3.avif","./assets/characters/child-protagonist/幼年主角-任性.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7588b25a156888e0.avif","./assets/characters/child-protagonist/幼年主角-懂事.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a8d55f1b642610c8.avif","./assets/characters/child-protagonist/幼年主角-愧疚.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-99be70d57cca4253.avif","./assets/characters/child-protagonist/幼年主角-开心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7decf36a003b8ca3.avif","./assets/characters/child-protagonist/幼年主角-害怕.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-be646ea140412020.avif","./assets/characters/child-protagonist/幼年主角-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c0f5c636da1209c.avif","./assets/characters/child-protagonist/幼年主角-焦急.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9223322784865f85.avif","./assets/characters/child-protagonist/幼年主角-固执.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5467d6289edad5a.avif","./assets/characters/adult-protagonist/青壮年主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-10fb50c4535a5605.avif","./assets/characters/adult-protagonist/青壮年主角-焦虑.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5f6d12c8370c0111.avif","./assets/characters/adult-protagonist/青壮年主角-坚定.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-86e003dbc7e71a48.avif","./assets/characters/adult-protagonist/青壮年主角-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67c3a7f2747590a1.avif","./assets/characters/adult-protagonist/青壮年主角-懊悔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8792713b8bb4d74c.avif","./assets/characters/adult-protagonist/青壮年主角-轻松.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1ada2d37a61820e.avif","./assets/characters/adult-protagonist/青壮年主角-好奇.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f4119406020d66cd.avif","./assets/characters/adult-protagonist/青壮年主角-温暖.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ce91a8150b6aee2.avif","./assets/characters/adult-protagonist/青壮年主角-心疼.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1533f0ae21cf7fde.avif","./assets/characters/adult-protagonist/青壮年主角-紧张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a6a01fe0aa316f61.avif","./assets/characters/adult-protagonist/青壮年主角-恐惧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d648cfc06b123afb.avif","./assets/characters/elder-protagonist/老年主角-正常.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-15a293efb50caaae.avif","./assets/characters/elder-protagonist/老年主角-焦虑.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-927830818ebd25ec.avif","./assets/characters/elder-protagonist/老年主角-坚定.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ad46082606151a5f.avif","./assets/characters/elder-protagonist/老年主角-懊悔.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebc388bc163d79ba.avif","./assets/characters/elder-protagonist/老年主角-疲惫.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7b0e65986d41fac.avif","./assets/characters/elder-protagonist/老年主角-期待.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-995ef28eaf212680.avif","./assets/characters/elder-protagonist/老年主角-执迷.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-812e6836b7ef9dcd.avif","./assets/characters/elder-protagonist/老年主角-恐惧.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9387c4949776fbf9.avif","./assets/characters/elder-protagonist/老年主角-温暖.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-77032cbe91e14b38.avif","./assets/characters/elder-protagonist/老年主角-愧疚.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8c3d3e3e04015ec9.avif","./assets/characters/elder-protagonist/老年主角-固执.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64813de5038fa6d9.avif","./assets/characters/elder-protagonist/老年主角-安心.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4ccde2f2d81cc09c.avif","./assets/characters/medical/乳腺科医生（专家）-专业.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5b7c6fdf5fad0e9e.avif","./assets/characters/medical/乳腺科医生（专家）-严肃.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-297fc1025a328e31.avif","./assets/characters/medical/乳腺科医生（专家）-温和.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-bed21f5a0ef01527.avif","./assets/characters/bosses/乳头内陷 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb764dc56227cb9.avif","./assets/characters/bosses/乳头内陷 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d625d7ceefbf2aea.avif","./assets/characters/bosses/乳头溢液 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-257df97dd619fb0f.avif","./assets/characters/bosses/乳头溢液 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d946498aef50c20c.avif","./assets/characters/bosses/腋下淋巴结肿大 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-24af81f51cdf9563.avif","./assets/characters/bosses/腋下淋巴结肿大 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-76283d3dea7d4b0f.avif","./assets/characters/bosses/腋下淋巴结肿大 BOSS-嚣张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-776d4d18307889ec.avif","./assets/characters/bosses/乳房硬块 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-57c102f32f289e4c.avif","./assets/characters/bosses/乳房硬块 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5906d5be24ee758a.avif","./assets/characters/bosses/乳房硬块 BOSS-嚣张.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-df6a796e340e1f8f.avif","./assets/characters/bosses/酒窝征 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-513cd0422c2cd7ad.avif","./assets/characters/bosses/酒窝征 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1098c0cb94adc62.avif","./assets/characters/bosses/橘皮样改变 BOSS-虚弱.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-37ed08d784a9721e.avif","./assets/characters/bosses/橘皮样改变 BOSS-狰狞.png":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f45398ae0ef9b7e7.avif"},__igemCharacterUrl=c=>__igemCharacterUrls[c]||"",mg=(c,o,d)=>__igemCharacterUrl(`./assets/characters/${c}/${o}-${d}.png`),xe=(c,o,d,u="character")=>d.map(p=>({id:`${c}-${o}-${p}`,name:o,state:p,category:u,path:mg(c,o,p)}));[...xe("child-protagonist","幼年主角",["正常","懵懂","任性","懂事","愧疚","开心","害怕","心疼","焦急","固执"]),...xe("adult-protagonist","青壮年主角",["正常","焦虑","坚定","疲惫","懊悔","轻松","好奇","温暖","心疼","紧张","恐惧"]),...xe("elder-protagonist","老年主角",["正常","焦虑","坚定","懊悔","疲惫","期待","执迷","恐惧","温暖","愧疚","固执","安心"]),...xe("paimon","派蒙",["开心","心疼","郑重","哽咽","焦急","无奈","软糯","雀跃","赞许","严肃","傲娇","期待","骄傲","认真","撇嘴","愤怒","绝望","温柔","担忧","欣慰"]),...xe("family","妈妈",["温柔","疲惫","苍白","感动","难过","委屈","开心","消沉","麻木","失落","欣慰","疼痛","担忧"],"support"),...xe("family","爸爸",["稳重","严肃"],"support"),...xe("family","儿子",["心疼","焦急","担忧","愤怒","疲惫","诚恳"],"support"),...xe("family","女儿",["担忧","温柔","无奈","恳求","委屈","哭泣"],"support"),...xe("family","儿媳",["温柔","细心","担忧","贴心"],"support"),...xe("family","小孙女",["活泼","软糯"],"support"),...xe("workplace","经理",["威严","缓和","满意","愣住","愤怒"],"support"),...xe("workplace","小李",["苦相","谨慎","疲惫","同情"],"support"),...xe("workplace","张总",["随和","笑意"],"support"),...xe("workplace","甲方总负责人",["严肃","满意"],"support"),...xe("workplace","王哥",["友善"],"support"),...xe("workplace","同事",["同情","起哄","担忧"],"support"),...xe("medical","乳腺科医生（专家）",["专业","严肃","温和"],"support"),...xe("medical","社区医生",["专业"],"support"),...xe("medical","营养师",["专业"],"support"),...xe("medical","药店店员",["友善","随意"],"support"),...xe("medical","民间老郎中",["神秘"],"support"),...xe("neighbors","张阿姨",["热心"],"support"),...xe("neighbors","李阿姨",["附和"],"support"),...xe("neighbors","王阿姨",["热心"],"support"),...xe("neighbors","刘阿姨",["附和"],"support"),...xe("neighbors","邻居",["热心"],"support"),...xe("neighbors","群友",["友善"],"support")];[...xe("cells","分泌细胞",["健康","虚弱","愉悦","委屈","疲惫","胀痛","恐惧","肿胀","异常","干瘪"],"cell"),...xe("cells","巨噬细胞",["爽朗","疲惫","虚弱","小巧","活泼","醉酒"],"cell"),...xe("cells","淋巴细胞",["活泼","无助","欢快","肿大","傲娇","期待","急促","警惕"],"cell"),...xe("cells","内分泌调节细胞",["正常","紊乱","疲惫"],"cell"),...xe("cells","雌激素调节细胞",["正常","紊乱"],"cell")];[...xe("bosses","乳头内陷 BOSS",["虚弱","狰狞"],"boss"),...xe("bosses","乳头溢液 BOSS",["虚弱","狰狞"],"boss"),...xe("bosses","腋下淋巴结肿大 BOSS",["虚弱","狰狞","嚣张"],"boss"),...xe("bosses","乳房硬块 BOSS",["虚弱","狰狞","嚣张"],"boss"),...xe("bosses","酒窝征 BOSS",["虚弱","狰狞"],"boss"),...xe("bosses","橘皮样改变 BOSS",["虚弱","狰狞"],"boss")];const Ui=c=>c.replaceAll("（","(").replaceAll("）",")").replaceAll(" ","-").replaceAll("/","-").replaceAll("：","-").replaceAll(":","-").replaceAll("--","-"),pg={大脑记忆中枢:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fcf3e5b58aeb3ce5.avif","乳腺主城（正常）":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-412f3a7b8b24775d.avif","乳腺主城（黑雾笼罩）":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-047e67c9be1efcde.avif",卧室:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed30c8f4302fa91a.avif",客厅:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5c4f8664a1c54ca.avif",家庭客厅:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5c4f8664a1c54ca.avif",厨房:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9d3e37ef1e6c3b30.avif",妈妈的卧室:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-88a1c210c220473e.avif",书房:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc9077dbf6389410.avif",公园:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e8e7751527b1e320.avif",职场办公室:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-332ab15a0b610546.avif",酒店包厢:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2f9bd8242411076.avif",小区花园:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b431430bab60140.avif",正规医院:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-74104c96eb5cb995.avif",社区医院:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1d251cb2c515bb19.avif",三甲医院:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b927d70cbba32aba.avif",体检中心:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6fbc1501d5ab275c.avif",办公室:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-332ab15a0b610546.avif",家里:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5c4f8664a1c54ca.avif",医院:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-74104c96eb5cb995.avif",社区:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b431430bab60140.avif",碎片化记忆中枢:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d86801d4bb250a80.avif",生信筛选研究像素背景图:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3b594860f39b1556.avif","环状 RNA 载体像素背景图":"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b8cf9fbacba24d1.avif",免疫通路像素背景图:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e0ca2290d4c1fffd.avif",多癌种拓展平台像素背景图:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-35e8815df3a72e5c.avif",激活的碎片化记忆中枢:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5faa2658424ec329.avif",结尾页:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3245b6e388a3a048.avif"},hg={派蒙:"paimon",妈妈:"family",爸爸:"family",儿子:"family",女儿:"family",儿媳:"family",小孙女:"family",经理:"workplace",小李:"workplace",张总:"workplace",甲方总负责人:"workplace",王哥:"workplace",同事:"workplace","乳腺科医生（专家）":"medical",乳腺科医生:"medical",医生:"medical",社区医生:"medical",营养师:"medical",药店店员:"medical",民间老郎中:"medical",张阿姨:"neighbors",李阿姨:"neighbors",王阿姨:"neighbors",刘阿姨:"neighbors",邻居:"neighbors",群友:"neighbors",分泌细胞:"cells",巨噬细胞:"cells",淋巴细胞:"cells",内分泌调节细胞:"cells",雌激素调节细胞:"cells"},xg={乳腺科医生:"乳腺科医生（专家）",乳腺科专家:"乳腺科医生（专家）",医生:"乳腺科医生（专家）",民间郎中:"民间老郎中","乳房酒窝征 BOSS":"酒窝征 BOSS","酒窝综合征 BOSS":"酒窝征 BOSS","乳房橘皮样改变 BOSS":"橘皮样改变 BOSS","橘皮样皮肤改变 BOSS":"橘皮样改变 BOSS","乳房硬结节 BOSS":"乳房硬块 BOSS"},Sg={主角:{窘迫:"焦虑",慌乱:"焦虑",眩晕:"疲惫",绝望:"恐惧",痛苦:"恐惧",虚弱:"疲惫"},派蒙:{正常:"开心"},经理:{紧张:"威严",尴尬:"愣住"},小李:{紧张:"谨慎"},女儿:{心疼:"担忧"},儿子:{开心:"心疼",轻松:"诚恳"},"乳房硬块 BOSS":{败退:"虚弱"},"腋下淋巴结肿大 BOSS":{败退:"虚弱"},"乳头内陷 BOSS":{败退:"虚弱",嚣张:"狰狞"},"乳头溢液 BOSS":{败退:"虚弱",嚣张:"狰狞"},"酒窝征 BOSS":{败退:"虚弱",嚣张:"狰狞"},"橘皮样改变 BOSS":{败退:"虚弱",嚣张:"狰狞"}},gg={breastLump:"乳房硬块 BOSS",lymphNode:"腋下淋巴结肿大 BOSS",nippleRetraction:"乳头内陷 BOSS",nippleDischarge:"乳头溢液 BOSS",skinDimple:"酒窝征 BOSS",orangePeel:"橘皮样改变 BOSS"};function Ut(c){if(c)return pg[c.trim()]}function Fe(c,o,d){const u=c.replace("（意识音）","").trim(),p=o.trim(),h=xg[u]||u,y=u==="主角"&&d==="child"&&p==="好奇"?"懵懂":u==="主角"&&d==="child"&&p==="坚定"?"懂事":u==="主角"&&d==="adult"&&p==="期待"?"好奇":u==="主角"&&d==="elder"&&p==="好奇"?"期待":u==="主角"&&d==="elder"&&p==="开心"?"安心":u==="主角"&&d==="elder"&&p==="轻松"?"温暖":Sg[h]?.[p]||p;let N=hg[h];if(u==="主角"&&(N=`${d||"child"}-protagonist`),u.includes("BOSS")&&(N="bosses"),!!N)return __igemCharacterUrl(`./assets/characters/${N}/${Ui(h)}-${Ui(y)}.png`)}function ol(c,o="狰狞"){const d=gg[c];if(d)return __igemCharacterUrl(`./assets/characters/bosses/${Ui(d)}-${Ui(o)}.png`)}const lp={child:{name:"幼年视角",description:"10岁女孩 · 守护妈妈的乳腺世界",icon:s.jsx(US,{className:"w-10 h-10"}),color:"text-amber-600",bgColor:"bg-amber-50 hover:bg-amber-100"},adult:{name:"青壮年视角",description:"32岁职场女性 · 守护自己的健康人生",icon:s.jsx(dg,{className:"w-10 h-10"}),color:"text-blue-600",bgColor:"bg-blue-50 hover:bg-blue-100"},elder:{name:"老年视角",description:"65岁奶奶 · 岁月安康，乳腺守护",icon:s.jsx(ug,{className:"w-10 h-10"}),color:"text-purple-600",bgColor:"bg-purple-50 hover:bg-purple-100"}};function bg(){const{startNewGame:c}=Pe(),o=d=>{c(d)};return s.jsxs("div",{className:"min-h-screen relative bg-gradient-to-b from-pink-50 to-white p-4 flex flex-col items-center justify-center",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-135d89785bcf245d.avif",alt:"",className:"pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"}),s.jsxs("div",{className:"relative z-10 mb-12 text-center",children:[s.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"请选择你的冒险视角"}),s.jsx("p",{className:"text-gray-500 mt-2",children:"每个视角都有独特的记忆与故事"})]}),s.jsx("div",{className:"relative z-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3",children:Object.keys(lp).map(d=>{const u=lp[d],p=Fe("主角",d==="child"?"正常":d==="elder"?"安心":"坚定",d);return s.jsx(Vt,{className:`cursor-pointer transition-all hover:scale-105 ${u.bgColor} border-2 border-transparent hover:border-pink-300`,onClick:()=>o(d),children:s.jsxs(Xt,{className:"p-8 flex flex-col items-center text-center",children:[s.jsx("div",{className:`${u.color} mb-6 h-28 flex items-end justify-center`,children:p?s.jsx("img",{src:p,alt:u.name,className:"max-h-28 object-contain drop-shadow-md"}):u.icon}),s.jsx("h3",{className:`text-xl font-bold ${u.color} mb-3`,children:u.name}),s.jsx("p",{className:"text-sm text-gray-600",children:u.description})]})},d)})}),s.jsx("div",{className:"relative z-10 mx-auto mt-12 max-w-2xl rounded-lg bg-pink-50 p-4",children:s.jsx("p",{className:"text-sm text-pink-700 text-center",children:"选择后将进入该视角的完整剧情体验，包括一周目和二周目"})})]})}function ap(c,o){if(typeof c=="function")return c(o);c!=null&&(c.current=o)}function yg(...c){return o=>{let d=!1;const u=c.map(p=>{const h=ap(p,o);return!d&&typeof h=="function"&&(d=!0),h});if(d)return()=>{for(let p=0;p<u.length;p++){const h=u[p];typeof h=="function"?h():ap(c[p],null)}}}}var vg=Symbol.for("react.lazy"),Li=Nx[" use ".trim().toString()];function Eg(c){return typeof c=="object"&&c!==null&&"then"in c}function Up(c){return c!=null&&typeof c=="object"&&"$$typeof"in c&&c.$$typeof===vg&&"_payload"in c&&Eg(c._payload)}function Bg(c){const o=jg(c),d=C.forwardRef((u,p)=>{let{children:h,...y}=u;Up(h)&&typeof Li=="function"&&(h=Li(h._payload));const N=C.Children.toArray(h),g=N.find(kg);if(g){const m=g.props.children,k=N.map(O=>O===g?C.Children.count(m)>1?C.Children.only(null):C.isValidElement(m)?m.props.children:null:O);return s.jsx(o,{...y,ref:p,children:C.isValidElement(m)?C.cloneElement(m,void 0,k):null})}return s.jsx(o,{...y,ref:p,children:h})});return d.displayName=`${c}.Slot`,d}var Og=Bg("Slot");function jg(c){const o=C.forwardRef((d,u)=>{let{children:p,...h}=d;if(Up(p)&&typeof Li=="function"&&(p=Li(p._payload)),C.isValidElement(p)){const y=Ag(p),N=wg(h,p.props);return p.type!==C.Fragment&&(N.ref=u?yg(u,y):y),C.cloneElement(p,N)}return C.Children.count(p)>1?C.Children.only(null):null});return o.displayName=`${c}.SlotClone`,o}var Ng=Symbol("radix.slottable");function kg(c){return C.isValidElement(c)&&typeof c.type=="function"&&"__radixId"in c.type&&c.type.__radixId===Ng}function wg(c,o){const d={...o};for(const u in o){const p=c[u],h=o[u];/^on[A-Z]/.test(u)?p&&h?d[u]=(...N)=>{const g=h(...N);return p(...N),g}:p&&(d[u]=p):u==="style"?d[u]={...p,...h}:u==="className"&&(d[u]=[p,h].filter(Boolean).join(" "))}return{...c,...d}}function Ag(c){let o=Object.getOwnPropertyDescriptor(c.props,"ref")?.get,d=o&&"isReactWarning"in o&&o.isReactWarning;return d?c.ref:(o=Object.getOwnPropertyDescriptor(c,"ref")?.get,d=o&&"isReactWarning"in o&&o.isReactWarning,d?c.props.ref:c.props.ref||c.ref)}const sp=c=>typeof c=="boolean"?`${c}`:c===0?"0":c,ip=gp,_g=(c,o)=>d=>{var u;if(o?.variants==null)return ip(c,d?.class,d?.className);const{variants:p,defaultVariants:h}=o,y=Object.keys(p).map(m=>{const k=d?.[m],O=h?.[m];if(k===null)return null;const D=sp(k)||sp(O);return p[m][D]}),N=d&&Object.entries(d).reduce((m,k)=>{let[O,D]=k;return D===void 0||(m[O]=D),m},{}),g=o==null||(u=o.compoundVariants)===null||u===void 0?void 0:u.reduce((m,k)=>{let{class:O,className:D,...q}=k;return Object.entries(q).every(Z=>{let[Q,I]=Z;return Array.isArray(I)?I.includes({...h,...N}[Q]):{...h,...N}[Q]===I})?[...m,O,D]:m},[]);return ip(c,y,g,d?.class,d?.className)},Cg=_g("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ue=C.forwardRef(({className:c,variant:o,size:d,asChild:u=!1,...p},h)=>{const y=u?Og:"button";return s.jsx(y,{className:Sn(Cg({variant:o,size:d,className:c})),ref:h,...p})});Ue.displayName="Button";const ea="relative rounded-none bg-[#FFFDF8] border-4 border-[#3E2723] shadow-[0_8px_0_rgba(0,0,0,0.35)]",ta="pointer-events-none absolute inset-1 border-2 border-[#D4A373]",wu="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none",ss="absolute -top-5 left-4 z-10 flex items-center gap-1.5 rounded-none border-2 border-[#3E2723] bg-[#6B2D5C] px-4 py-0.5 text-sm font-bold tracking-wider text-[#FFE082] shadow-[0_2px_0_#3E2723] select-none",Gi="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-none border border-[#3E2723] bg-[#4A2040] text-[10px]",is="min-h-[52px] text-[#2B1B17] text-base md:text-lg leading-relaxed font-medium",cs="italic text-[#5D4037] font-normal",Au="mt-4 flex items-center justify-between border-t-2 border-dashed border-[#D4A373] pt-2",Lp="absolute bottom-2 right-3 flex items-center gap-1 text-xs font-bold text-[#8D6E63] select-none",_u="flex items-center gap-1 text-xs font-bold text-[#8D6E63] select-none",na="inline-block animate-bounce text-[#D81B60]",qp="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md",Gp="text-center text-lg font-bold text-stone-800 mb-4 drop-shadow-sm md:text-xl",Yp="w-full max-w-xl bg-white/95 border-2 border-pink-200 text-stone-700 shadow-lg px-6 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer hover:border-pink-400 hover:bg-pink-50/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,114,182,0.35)]",Vp="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-sm font-bold text-white shadow-sm mr-3";function Hg(c,o=30){const[d,u]=C.useState(0);return C.useEffect(()=>{u(0)},[c]),C.useEffect(()=>{if(d>=c.length)return;const p=setTimeout(()=>u(h=>h+1),o);return()=>clearTimeout(p)},[d,c,o]),{displayed:c.slice(0,d),isComplete:d>=c.length,showAll:()=>u(c.length)}}function Yi(c,o){const[d,u]=C.useState(0),[p,h]=C.useState(!1),[y,N]=C.useState(!1),[g,m]=C.useState(!1),k=c[d],O=d>=c.length-1,{displayed:D,isComplete:q,showAll:Z}=Hg(k?.text??"");C.useEffect(()=>{if(!p||g||O||!k)return;const ue=setTimeout(()=>{u(d+1)},1500+k.text.length*45);return()=>clearTimeout(ue)},[p,g,O,d,c,k]);const Q=C.useCallback(()=>{if(y){N(!1);return}if(g){m(!1);return}if(!q){Z();return}d<c.length-1?u(d+1):o()},[y,g,q,Z,d,c.length,o]),I=C.useCallback(()=>{h(!1),Q()},[Q]),K=C.useCallback(()=>{u(ue=>Math.max(0,ue-1))},[]),ie=c.slice(0,d+1);return{index:d,setIndex:u,current:k,isLast:O,displayed:D,isComplete:q,isAuto:p,toggleAuto:()=>h(ue=>!ue),isHidden:y,hideUi:()=>N(!0),showLog:g,setShowLog:m,log:ie,advance:Q,skip:Q,back:K,handleScreenClick:I,hiddenUiClass:`transition-opacity duration-300${y?" opacity-0 pointer-events-none":""}`}}const Wl=c=>o=>{o.stopPropagation(),c()},Fl="flex items-center gap-1 rounded-none border-2 border-[#3E2723] px-2.5 py-1 text-xs font-bold shadow-[0_2px_0_#3E2723] transition-all select-none active:translate-y-0.5 active:shadow-none",Pl="bg-[#FFFDF8]/90 text-[#3E2723] hover:bg-[#FFE082]";function rs({className:c="",extra:o,canBack:d=!1,onBack:u,isAuto:p,onToggleAuto:h,onSkip:y,onHide:N,onShowLog:g,onSettings:m}){return s.jsxs("div",{className:`absolute top-4 right-4 z-40 flex flex-wrap items-center justify-end gap-2 select-none ${c}`,children:[o,u&&s.jsxs("button",{className:`${Fl} ${d?Pl:"cursor-not-allowed border-[#3E2723]/40 bg-[#E8E0D4] text-[#3E2723]/40 shadow-none"}`,disabled:!d,onClick:Wl(u),children:[s.jsx(zi,{className:"h-3.5 w-3.5"}),"回退"]}),s.jsxs("button",{className:`${Fl} ${p?"scale-105 bg-[#E91E63] text-white":Pl}`,onClick:Wl(h),children:[s.jsx(WS,{className:"h-3.5 w-3.5"}),"AUTO"]}),s.jsxs("button",{className:`${Fl} ${Pl}`,onClick:Wl(y),children:[s.jsx(Mp,{className:"h-3.5 w-3.5"}),"SKIP"]}),s.jsxs("button",{className:`${Fl} ${Pl}`,onClick:Wl(N),children:[s.jsx(ZS,{className:"h-3.5 w-3.5"}),"隐藏"]}),s.jsxs("button",{className:`${Fl} ${Pl}`,onClick:Wl(g),children:[s.jsx(zp,{className:"h-3.5 w-3.5"}),"回顾"]}),m&&s.jsxs("button",{className:`${Fl} ${Pl}`,onClick:Wl(m),children:[s.jsx(Dp,{className:"h-3.5 w-3.5"}),"设置"]})]})}function us({open:c,onClose:o,entries:d}){const[u,p]=C.useState(!1);return C.useEffect(()=>{if(c){const h=requestAnimationFrame(()=>p(!0));return()=>cancelAnimationFrame(h)}p(!1)},[c]),c?s.jsx("div",{className:"absolute inset-0 z-50 bg-black/30",onClick:h=>{h.stopPropagation(),o()},children:s.jsxs("div",{className:`absolute right-0 top-0 flex h-full w-[min(420px,88vw)] flex-col border-l-4 border-[#3E2723] bg-[#2B1B17]/85 shadow-[0_0_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 ${u?"translate-x-0":"translate-x-full"}`,onClick:h=>h.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between border-b-2 border-[#D4A373]/50 px-4 py-3",children:[s.jsxs("h3",{className:"flex items-center gap-2 text-sm font-bold tracking-wider text-[#FFE082]",children:[s.jsx(zp,{className:"h-4 w-4"}),"剧情回顾"]}),s.jsx("button",{className:"flex h-7 w-7 items-center justify-center border-2 border-[#3E2723] bg-[#6B2D5C] text-[#FFE082] shadow-[0_2px_0_#3E2723]",onClick:h=>{h.stopPropagation(),o()},children:s.jsx(Rp,{className:"h-4 w-4"})})]}),s.jsx("div",{className:"flex-1 space-y-3 overflow-y-auto p-4",children:d.map((h,y)=>s.jsxs("div",{className:"rounded-none border-l-4 border-[#6B2D5C]/60 bg-white/5 px-3 py-2",children:[h.speaker&&h.speaker!=="旁白"?s.jsx("p",{className:"mb-1 text-xs font-bold tracking-wider text-[#FFE082]",children:h.speaker}):null,s.jsx("p",{className:`text-sm leading-relaxed ${h.speaker==="旁白"?"italic text-[#C9B8A8]":"text-[#F5EFE6]"}`,children:h.text})]},y))})]})}):null}const Tg={child:[{speaker:"旁白",text:"医院的走廊里，消毒水的味道弥漫在空气中。"},{speaker:"旁白",text:"10岁的你坐在妈妈病房的陪护小床上，手里紧紧攥着一本绘本。"},{speaker:"旁白",text:"妈妈刚做完检查，医生说需要进一步观察。"},{speaker:"旁白",text:"你看着妈妈苍白的脸，心里又害怕又担心..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}],adult:[{speaker:"旁白",text:"体检中心的走廊里，你手里攥着刚拿到的体检报告。"},{speaker:"旁白",text:'报告单上"乳腺结节"四个字让你的心猛地一沉。'},{speaker:"旁白",text:"32岁的你，一直以为自己还年轻，健康问题离自己很远。"},{speaker:"旁白",text:'医生的话在耳边回响："需要定期复查，注意生活习惯..."'},{speaker:"旁白",text:"你坐在休息区的椅子上，思绪万千..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}],elder:[{speaker:"旁白",text:"社区医院的诊室里，你坐在医生对面。"},{speaker:"旁白",text:"65岁的你，一直觉得自己身体还算硬朗。"},{speaker:"旁白",text:"但最近胸口的硬块让你不得不来医院检查。"},{speaker:"旁白",text:'医生的话让你心里七上八下："建议去大医院做进一步检查..."'},{speaker:"旁白",text:"你走出诊室，手里紧紧攥着女儿小时候送的布娃娃..."},{speaker:"旁白",text:"突然，一阵温暖的光芒包裹了你..."},{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界..."}]},zg={child:{title:"幼年视角·穿越触发",icon:"🏥"},adult:{title:"青壮年视角·穿越触发",icon:"📋"},elder:{title:"老年视角·穿越触发",icon:"🧸"}};function Dg(){const{state:c,dispatch:o}=Pe(),d=c.currentPerspective,u=Tg[d],p=zg[d],[h,y]=C.useState(!1),[N,g]=C.useState(!1),m=Yi(u,()=>{g(!0),setTimeout(()=>{o({type:"SET_PHASE",payload:"tutorial"})},3e3)}),k=m.current,O=m.isLast,D=Ut(d==="child"?"正规医院":d==="adult"?"体检中心":"社区医院"),q=Fe("主角",d==="child"?"害怕":"焦虑",d),Z=()=>{switch(d){case"child":return"from-amber-900/80 to-amber-950";case"adult":return"from-blue-900/80 to-blue-950";case"elder":return"from-purple-900/80 to-purple-950";default:return"from-gray-900/80 to-gray-950"}},Q=I=>I?I==="旁白"?"📖":"👤":null;return N?s.jsx("div",{className:"min-h-screen bg-white flex items-center justify-center animate-pulse",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:"✨"}),s.jsx("p",{className:"text-xl text-pink-600",children:"正在穿越到微观世界..."})]})}):s.jsxs("div",{className:`min-h-screen bg-gradient-to-b ${Z()} relative overflow-hidden`,onClick:m.handleScreenClick,children:[D&&s.jsx("img",{src:D,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70"}),q&&s.jsx("img",{src:q,alt:"主角",className:"absolute bottom-40 right-8 hidden max-h-[52vh] max-w-[34vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] md:block"}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none",children:s.jsx("div",{className:"text-9xl",children:p.icon})}),s.jsxs("div",{className:"absolute top-8 left-0 right-0 text-center z-10",children:[s.jsx("div",{className:"text-5xl mb-2",children:p.icon}),s.jsx("h1",{className:"text-2xl font-bold text-white/80 mb-1",children:p.title})]}),s.jsx(rs,{className:m.hiddenUiClass,canBack:m.index>0,onBack:m.back,isAuto:m.isAuto,onToggleAuto:m.toggleAuto,onSkip:m.skip,onHide:m.hideUi,onShowLog:()=>m.setShowLog(!0),onSettings:()=>y(!0)}),s.jsx("div",{className:`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${m.hiddenUiClass}`,children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),k?.speaker&&k.speaker!=="旁白"&&s.jsxs("div",{className:ss,children:[s.jsx("span",{className:Gi,children:Q(k.speaker)}),s.jsx("span",{children:k.speaker})]}),s.jsx("p",{className:`${is} ${k?.speaker==="旁白"?cs:""}`,children:m.displayed}),s.jsxs("div",{className:Au,children:[s.jsxs("span",{className:"text-xs font-medium text-[#8D6E63]",children:[m.index+1," / ",u.length]}),!O&&s.jsxs("span",{className:_u,children:["点击继续",s.jsx("span",{className:na,children:"▼"})]}),O&&s.jsx("span",{className:"text-xs font-medium text-[#D81B60] animate-pulse",children:"即将穿越..."})]})]})}),s.jsx(us,{open:m.showLog,onClose:()=>m.setShowLog(!1),entries:m.log}),h&&s.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:I=>I.stopPropagation(),children:s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[s.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[s.jsx(Dp,{className:"w-4 h-4"}),"设置"]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"文字速度"}),s.jsx("input",{type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"音量"}),s.jsx("input",{type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),s.jsx(Ue,{className:"w-full mt-4",onClick:()=>y(!1),children:"关闭"})]})})]})}const cp=[{speaker:"旁白",text:"当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...",background:"main"},{speaker:"旁白",text:'主角在朦胧中醒来，脚下温润，光点漂浮，远处黑雾弥漫，茫然道："我这是在哪？好陌生……"',background:"main"},{speaker:"派蒙",text:"主人！你终于来了，我们被症状BOSS欺负惨了！",background:"main"},{speaker:"主角",text:"你是谁？这里是……我的体内？",background:"main"},{speaker:"派蒙",text:"我是乳腺主城守护精灵派蒙！这里就是你的乳腺，BOSS在黑雾里作乱，你的习惯也在悄悄伤害我们。",background:"main"},{speaker:"主角",text:"我？怎么会？",background:"main"},{speaker:"派蒙",text:"先去核心区域，我帮你弄明白怎么守护这里！",background:"main"},{speaker:"旁白",text:'场景切换至大脑记忆中枢，派蒙指着发光神经元："这里是大脑记忆中枢，能回看你的过往选择哦！"',background:"memory"},{speaker:"派蒙",text:"我们可以通过神经元进入记忆点，重新经历过去的事情，改写曾经的做法～",background:"memory"},{speaker:"派蒙",text:"不同的选择会触发不一样的结局，中枢还会根据结局教你专属技能呢！",background:"memory"},{speaker:"派蒙",text:"不管结局是HE还是BE，只要通关记忆点，就能解锁对应的BOSS挑战～这可是拯救乳腺主城的唯一捷径哦！",background:"memory"},{speaker:"旁白",text:"场景切换至病变乳腺组织边界，BOSS挑战界面浮现，三个锁定图标排列。",background:"boss"},{speaker:"派蒙",text:"这里是病变乳腺组织，就是坏家伙BOSS们的战场啦！远处的黑雾全是它们搞的鬼～",background:"boss"},{speaker:"派蒙",text:"你看这三个暗戳戳的BOSS图标，它们分别对应记忆点1、2、3哦！",background:"boss"},{speaker:"派蒙",text:"通关记忆点1→解锁BOSS1；通关记忆点2→解锁BOSS2，以此类推啦！",background:"boss"},{speaker:"派蒙",text:"只要打败当前所有BOSS，就能把我们从苦难里救出来啦！冲鸭～",background:"boss"},{speaker:"派蒙",text:"送你4个基础技能，帮你开局对抗BOSS！",background:"boss"},{speaker:"派蒙",text:"【细胞修复术】修细胞，【激素平衡】稳状态，【免疫强化】增战力，【毒素净化】清污染。",background:"boss"},{speaker:"派蒙",text:"用记忆点的技能+基础技能，打败所有BOSS，守护乳腺主城！",background:"boss"},{speaker:"派蒙",text:"准备好，冒险开始！",background:"boss"}],Mg={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化"};function Rg(){const{state:c,dispatch:o}=Pe(),[d,u]=C.useState(!1),[p,h]=C.useState(!1),y=Yi(cp,()=>h(!0)),N=y.current,g=y.isLast,m=Fe("派蒙","开心"),k=Fe("主角","坚定",c.currentPerspective||"adult"),O=N.background==="memory"?Ut("大脑记忆中枢"):N.background==="boss"?Ut("乳腺主城（黑雾笼罩）"):Ut("乳腺主城（正常）"),D=()=>{o({type:"COMPLETE_TUTORIAL"}),o({type:"SET_PHASE",payload:"microWorldMain"})},q=Q=>Q?Q==="派蒙"?"🧚":Q==="主角"?"👤":Q==="旁白"?"📖":"👤":null,Z=()=>{switch(N.background){case"main":return s.jsxs("div",{className:"absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200",children:[s.jsxs("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 text-center",children:[s.jsx("h2",{className:"text-2xl font-bold text-pink-700",children:"微观乳腺主城"}),s.jsx("p",{className:"text-sm text-pink-600/70",children:"一周目 · 核心枢纽"})]}),s.jsx("div",{className:"absolute top-36 left-1/2 -translate-x-1/2 w-80",children:s.jsxs("div",{className:"bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm",children:[s.jsx("div",{className:"w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0",children:m?s.jsx("img",{src:m,alt:"派蒙",className:"h-full w-full rounded-full object-cover"}):s.jsx("span",{className:"text-2xl",children:"🧚"})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm font-medium text-pink-700",children:"派蒙"}),s.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。"})]})]})}),s.jsxs("div",{className:"absolute top-72 left-1/2 -translate-x-1/2 w-80 space-y-4",children:[s.jsx(Vt,{className:"bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 opacity-60",children:s.jsxs(Xt,{className:"p-5 flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center",children:s.jsx(Tp,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-blue-700",children:"大脑记忆中枢"}),s.jsx("p",{className:"text-xs text-blue-600/70",children:"回溯记忆，学习技能"})]})]})}),s.jsx(Vt,{className:"bg-gradient-to-r from-red-50 to-red-100 border-red-200 opacity-60",children:s.jsxs(Xt,{className:"p-5 flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center",children:s.jsx(ku,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-red-700",children:"病变的乳腺组织"}),s.jsx("p",{className:"text-xs text-red-600/70",children:"挑战症状BOSS (0个已解锁)"})]})]})})]}),s.jsx("div",{className:"absolute bottom-20 left-4 opacity-20",children:s.jsx("div",{className:"w-8 h-8 bg-pink-400 rounded-full animate-pulse"})}),s.jsx("div",{className:"absolute top-24 right-4 opacity-15",children:s.jsx("div",{className:"w-6 h-6 bg-pink-500 rounded-full animate-bounce"})})]});case"memory":return s.jsxs("div",{className:"absolute inset-0 bg-gradient-to-b from-indigo-100 to-purple-100",children:[s.jsx("div",{className:"absolute top-4 left-4",children:s.jsx("span",{className:"text-indigo-600 text-sm",children:"← 返回主城"})}),s.jsxs("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 text-center",children:[s.jsx("h2",{className:"text-2xl font-bold text-indigo-700",children:"大脑记忆中枢"}),s.jsx("p",{className:"text-sm text-indigo-600/70",children:"一周目 · 记忆点通关后锁定"})]}),s.jsxs("div",{className:"absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3",children:[s.jsxs("div",{className:"bg-yellow-100 rounded-xl p-4 border border-yellow-300 flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold",children:"1"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-gray-800",children:"记忆点标题"}),s.jsx("p",{className:"text-xs text-gray-600",children:"记忆点描述"})]}),s.jsx("span",{className:"text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded",children:"可进入"})]}),s.jsxs("div",{className:"bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60",children:[s.jsx("div",{className:"w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold",children:"2"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-gray-800",children:"记忆点标题"}),s.jsx("p",{className:"text-xs text-gray-600",children:"记忆点描述"})]}),s.jsx("span",{className:"text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded",children:"未解锁"})]}),s.jsxs("div",{className:"bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60",children:[s.jsx("div",{className:"w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold",children:"3"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-gray-800",children:"记忆点标题"}),s.jsx("p",{className:"text-xs text-gray-600",children:"记忆点描述"})]}),s.jsx("span",{className:"text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded",children:"未解锁"})]})]}),s.jsx("div",{className:"absolute bottom-32 left-1/2 -translate-x-1/2 w-80",children:s.jsxs("div",{className:"bg-white/80 rounded-xl p-4",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"已装备技能"}),s.jsx("div",{className:"flex flex-wrap gap-2",children:c.equippedSkills.map(Q=>s.jsx("span",{className:"text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded",children:Mg[Q]||Q},Q))})]})})]});case"boss":return s.jsxs("div",{className:"absolute inset-0 bg-gradient-to-b from-red-900 to-red-950",children:[s.jsx("div",{className:"absolute top-4 left-4",children:s.jsx("span",{className:"text-red-300 text-sm",children:"← 返回主城"})}),s.jsxs("div",{className:"absolute top-16 left-1/2 -translate-x-1/2 text-center",children:[s.jsx("h2",{className:"text-2xl font-bold text-red-400",children:"病变的乳腺组织"}),s.jsx("p",{className:"text-sm text-red-300/70",children:"BOSS挑战区 · 第1周目"})]}),s.jsxs("div",{className:"absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3",children:[s.jsxs("div",{className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:s.jsx("img",{src:ol("breastLump","狰狞"),alt:"乳房硬块BOSS",className:"h-full w-full object-cover"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-red-200",children:"乳房硬块BOSS"}),s.jsx("p",{className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点1"})]}),s.jsxs("span",{className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[s.jsx("span",{children:"🔒"})," 未解锁"]})]}),s.jsxs("div",{className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:s.jsx("img",{src:ol("nippleDischarge","狰狞"),alt:"乳头溢液BOSS",className:"h-full w-full object-cover"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-red-200",children:"乳头溢液BOSS"}),s.jsx("p",{className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点2"})]}),s.jsxs("span",{className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[s.jsx("span",{children:"🔒"})," 未解锁"]})]}),s.jsxs("div",{className:"bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden",children:s.jsx("img",{src:ol("orangePeel","狰狞"),alt:"橘皮样改变BOSS",className:"h-full w-full object-cover"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"font-bold text-red-200",children:"橘皮样改变BOSS"}),s.jsx("p",{className:"text-xs text-red-300/70",children:"解锁条件: 通关记忆点3"})]}),s.jsxs("span",{className:"text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1",children:[s.jsx("span",{children:"🔒"})," 未解锁"]})]})]}),s.jsx("div",{className:"absolute bottom-40 left-1/2 -translate-x-1/2 w-80",children:s.jsxs("div",{className:"bg-red-900/60 rounded-xl p-4 border border-red-700",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-sm text-red-200",children:"挑战进度"}),s.jsx("span",{className:"text-sm text-red-400",children:"0 / 3 已击败"})]}),s.jsx("div",{className:"w-full h-2 bg-red-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-red-500 w-0"})})]})}),s.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 w-80",children:s.jsx("div",{className:"bg-red-800/40 rounded-xl p-3 border border-red-700/50",children:s.jsx("p",{className:"text-xs text-red-300/80 text-center",children:"提示：通关对应记忆点即可挑战对应BOSS。击败全部3个BOSS即可触发结局。"})})})]});default:return null}};return s.jsxs("div",{className:"min-h-screen relative overflow-hidden",onClick:y.handleScreenClick,children:[Z(),O&&s.jsx("img",{src:O,alt:"",className:"absolute inset-0 z-[1] h-full w-full object-cover opacity-25 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"}),s.jsxs("div",{className:"absolute inset-x-0 bottom-40 z-[3] hidden md:flex items-end justify-between px-8 pointer-events-none",children:[k&&s.jsx("img",{src:k,alt:"主角",className:"max-h-[44vh] max-w-[30vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"}),N.speaker==="派蒙"&&m&&s.jsx("img",{src:m,alt:"派蒙",className:"max-h-[42vh] max-w-[28vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]"}),N.background==="boss"&&s.jsx("img",{src:ol("breastLump","狰狞"),alt:"BOSS",className:"max-h-[36vh] max-w-[24vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]"})]}),s.jsx("div",{className:`${wu} z-[4]`}),s.jsx(rs,{className:y.hiddenUiClass,canBack:y.index>0,onBack:y.back,isAuto:y.isAuto,onToggleAuto:y.toggleAuto,onSkip:y.skip,onHide:y.hideUi,onShowLog:()=>y.setShowLog(!0),onSettings:()=>u(!0)}),!p&&s.jsx("div",{className:`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${y.hiddenUiClass}`,children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),N?.speaker&&N.speaker!=="旁白"&&s.jsxs("div",{className:ss,children:[s.jsx("span",{className:Gi,children:N.speaker==="派蒙"&&m?s.jsx("img",{src:m,alt:"派蒙",className:"h-full w-full object-cover"}):N.speaker==="主角"&&k?s.jsx("img",{src:k,alt:"主角",className:"h-full w-full object-cover"}):q(N.speaker)}),s.jsx("span",{children:N.speaker})]}),s.jsx("p",{className:`${is} ${N?.speaker==="旁白"?cs:""}`,children:y.displayed}),s.jsxs("div",{className:Au,children:[s.jsxs("span",{className:"text-xs font-medium text-[#8D6E63]",children:[y.index+1," / ",cp.length]}),!g&&s.jsxs("span",{className:_u,children:["点击继续",s.jsx("span",{className:na,children:"▼"})]})]})]})}),s.jsx(us,{open:y.showLog,onClose:()=>y.setShowLog(!1),entries:y.log}),p&&s.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md",onClick:Q=>Q.stopPropagation(),children:s.jsxs("div",{className:"max-w-md w-full p-6 text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),s.jsx("h2",{className:"text-2xl font-bold text-stone-800 mb-2",children:"新手引导完成！"}),s.jsx("p",{className:"text-stone-600 mb-6",children:"你已经了解了游戏的基本玩法。现在，开始你的乳腺守护冒险吧！"}),s.jsx("div",{className:"rounded-xl bg-white/60 border border-pink-200/80 p-4 mb-6",children:s.jsx("p",{className:"text-sm text-stone-700",children:"💡 提示：通关记忆点解锁BOSS，击败所有BOSS触发结局"})}),s.jsx(Ue,{size:"lg",className:"rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]",onClick:D,children:"开始冒险"})]})}),d&&s.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:Q=>Q.stopPropagation(),children:s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"设置"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"文字速度"}),s.jsx("input",{type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"音量"}),s.jsx("input",{type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),s.jsx(Ue,{className:"w-full mt-4",onClick:()=>u(!1),children:"关闭"})]})})]})}const Il={child:{name:"幼年视角",description:"守护妈妈的乳腺世界",age:"10岁",character:"小女孩",possessive:"妈妈的",color:"amber"},adult:{name:"青壮年视角",description:"守护自己的健康人生",age:"32岁",character:"职场女性",possessive:"自己的",color:"blue"},elder:{name:"老年视角",description:"岁月安康，乳腺守护",age:"65岁",character:"奶奶",possessive:"属于你的",color:"purple"}},Cu={breastLump:{id:"breastLump",name:"乳房硬块BOSS",description:"乳腺异常增生的具象化，坚硬的肿块压迫着乳腺组织",symptoms:["乳房出现无痛性硬块","肿块边界不清","质地较硬"],science:{mechanism:"乳腺细胞异常增殖形成结节，可能由激素紊乱、遗传因素等引起",earlySigns:["乳房出现无痛肿块","皮肤凹陷","乳头溢液"],medicalAdvice:"发现硬块应立即就医，进行乳腺超声或钼靶检查"},skills:[{name:"硬结侵噬",description:"硬结在乳房组织中无声蔓延",feedback:"BOSS凝聚黑雾，一枚质地坚硬、边缘不规则的硬结正在乳房组织中无声蔓延..."},{name:"硬结增殖",description:"原有硬块迅速增大",feedback:"BOSS释放暗能，原有硬块迅速增大，表面凸起更多细小硬结，与周围组织粘连愈发紧密..."},{name:"深层浸润",description:"硬块向深层组织浸润",feedback:"BOSS穿透乳腺浅筋膜，硬块向深层组织浸润，牵拉周围神经，引发持续性放射性胀痛..."},{name:"隐匿扩散",description:"在乳房其他象限形成隐匿硬块",feedback:"BOSS释放隐形孢子，在乳房其他象限形成微小隐匿硬块，仅通过影像学检查可发现..."}],week:1},skinDimple:{id:"skinDimple",name:"酒窝征BOSS",description:"乳腺皮肤牵拉的具象化，皮肤出现凹陷如酒窝",symptoms:["乳房皮肤凹陷","呈现酒窝样改变","皮肤与深层组织粘连"],science:{mechanism:"肿瘤侵犯Cooper韧带，牵拉皮肤形成凹陷",earlySigns:["皮肤局部凹陷","站立时明显","平躺可能减轻"],medicalAdvice:"酒窝征是乳腺癌的典型表现，需立即就医"},skills:[{name:"韧带挛缩术",description:"皮肤中央缓缓凹陷形成酒窝",feedback:'BOSS牵动暗紫色的Cooper韧带，皮肤中央缓缓凹陷，形成一个诡异的"酒窝"...'},{name:"多灶凹陷",description:"乳房皮肤出现多个散在凹陷",feedback:"BOSS缠绕多处Cooper韧带，乳房皮肤出现多个散在凹陷，如星点分布，活动时牵拉感加剧..."},{name:"筋膜粘连",description:"韧带与胸壁筋膜粘连",feedback:"BOSS将Cooper韧带与胸壁筋膜粘连，凹陷部位固定不动，按压时伴随牵拉痛..."},{name:"凹陷破溃",description:"凹陷中心皮肤破溃",feedback:"BOSS持续收缩韧带，凹陷中心皮肤因缺血坏死，出现浅表破溃，渗出淡黄色液体..."}],week:2},orangePeel:{id:"orangePeel",name:"橘皮样改变BOSS",description:"淋巴回流障碍的具象化，皮肤呈现橘皮样外观",symptoms:["乳房皮肤粗糙","毛孔明显凹陷","呈现橘皮样改变"],science:{mechanism:"淋巴回流受阻，真皮层水肿，毛囊口明显凹陷",earlySigns:["皮肤毛孔粗大","皮肤增厚粗糙","呈现橘皮样"],medicalAdvice:"橘皮样改变是乳腺癌晚期表现，需紧急就医"},skills:[{name:"淋巴淤阻咒",description:"皮肤形成橘皮样纹理",feedback:"BOSS堵塞皮下淋巴管，皮肤逐渐增厚、水肿，毛孔处凹陷形成密集的橘皮样纹理..."},{name:"水肿蔓延",description:"水肿从乳房蔓延至胸壁",feedback:"BOSS扩大淋巴管阻塞范围，水肿从乳房蔓延至胸壁、腋窝，皮肤紧绷发亮，按压无凹陷..."},{name:"毛孔角化",description:"毛孔扩大变硬",feedback:"BOSS刺激水肿皮肤的毛囊角质增生，毛孔扩大变硬，橘皮纹理加粗，伴随皮肤瘙痒..."},{name:"淋巴管栓堵",description:"彻底阻塞主淋巴管",feedback:"BOSS形成实性淋巴栓，彻底阻塞主淋巴管，乳房呈球形肿胀，皮肤温度升高..."}],week:1},lymphNode:{id:"lymphNode",name:"腋下淋巴结肿大BOSS",description:"淋巴系统异常的化身，肿胀的淋巴结堵塞淋巴回流",symptoms:["腋下出现肿块","淋巴结肿大","可能伴有压痛"],science:{mechanism:"淋巴系统免疫功能异常，淋巴结反应性增生或转移",earlySigns:["腋下无痛肿块","淋巴结质地变硬","活动度差"],medicalAdvice:"腋下淋巴结肿大需警惕乳腺癌转移，应及时检查"},skills:[{name:"淋巴粘连术",description:"淋巴结融合成团",feedback:"BOSS向腋窝扩散，淋巴结由小变大、由少变多，质地坚硬如石，最终融合成团并与周围组织粘连..."},{name:"淋巴结破溃",description:"淋巴结破溃流脓",feedback:"BOSS侵蚀肿大淋巴结，皮肤表面破溃，流出暗红色血性脓液，伴随恶臭..."},{name:"区域扩散",description:"肿大淋巴结蔓延",feedback:"BOSS沿淋巴链扩散，肿大淋巴结从腋窝蔓延至锁骨上、胸骨旁，形成串珠状硬块..."},{name:"淋巴压迫",description:"压迫腋静脉与神经",feedback:"BOSS融合的淋巴结团压迫腋静脉与神经，导致上臂肿胀、麻木，活动受限..."}],week:2},nippleDischarge:{id:"nippleDischarge",name:"乳头溢液BOSS",description:"乳腺分泌异常的化身，异常分泌物从乳头流出",symptoms:["乳头有异常分泌物","分泌物可能带血","单侧单孔溢液"],science:{mechanism:"乳腺导管内病变刺激分泌细胞异常分泌",earlySigns:["乳头溢液","溢液带血","自发性溢液"],medicalAdvice:"乳头溢液尤其是血性溢液需及时就医检查"},skills:[{name:"导管逆流",description:"暗红色液体从乳头渗出",feedback:"BOSS腐蚀乳腺导管，暗红色液体从乳头单孔渗出，在非哺乳期异常流淌..."},{name:"溢液增多",description:"溢液变为持续性",feedback:"BOSS扩张病变导管，乳头溢液从间断性变为持续性，液体量增多，呈鲜红色血性..."},{name:"多管溢液",description:"多个乳孔同时渗出",feedback:"BOSS侵犯多个乳腺导管，乳头多个乳孔同时渗出溢液，液体混合黏液与凝血块..."},{name:"导管闭塞",description:"导管内形成癌栓",feedback:"BOSS在导管内形成癌栓，溢液突然停止，乳头出现胀痛，触摸可及导管内硬块..."}],week:1},nippleRetraction:{id:"nippleRetraction",name:"乳头内陷BOSS",description:"乳腺导管挛缩的具象化，牵拉乳头向内凹陷",symptoms:["乳头向内凹陷","乳头位置异常","可能伴有分泌物"],science:{mechanism:"乳腺导管周围纤维组织挛缩，牵拉乳头向内",earlySigns:["乳头逐渐内陷","乳晕皮肤皱缩","乳头方向改变"],medicalAdvice:"突然出现乳头内陷需警惕乳腺癌，应及时就医"},skills:[{name:"纤维牵拉",description:"乳头被牵向一侧",feedback:"BOSS收缩乳管纤维，乳头被无形之力牵向一侧，逐渐扁平、回缩，最终陷入乳晕后方..."},{name:"乳头固定",description:"乳头与乳晕组织粘连",feedback:"BOSS将乳头与乳晕组织粘连固定，内陷乳头无法手动拉出，伴随乳晕皮肤增厚..."},{name:"乳头破溃",description:"乳头顶端破溃结痂",feedback:"BOSS持续牵拉乳管，内陷乳头因摩擦与缺血，顶端出现破溃、结痂，反复不愈..."},{name:"乳晕浸润",description:"乳晕出现硬质斑块",feedback:"BOSS向乳晕扩散，乳晕出现硬质斑块，与内陷乳头连成一体，边界模糊..."}],week:2}},Ug={child:"幼年 · 10岁",adult:"青壮年 · 32岁",elder:"老年 · 65岁"},Lg={child:"bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300",adult:"bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300",elder:"bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300"},qg={child:"text-amber-700",adult:"text-blue-700",elder:"text-purple-700"};function Gg(){const{state:c,dispatch:o}=Pe(),[d,u]=C.useState(!1),p=c.currentPerspective||"child",h=ls[c.playthrough],y=c.defeatedBosses.filter(q=>h.includes(q)).length,N=Object.values(c.perspectivesData[p].memories).filter(Boolean).length,g=Fe("派蒙","开心"),m=Fe("主角","坚定",p),k=Ut("乳腺主城（正常）"),O=c.unlockedBosses.filter(q=>h.includes(q)).length,D=q=>{o({type:"SWITCH_PERSPECTIVE",payload:q}),u(!1)};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4 relative overflow-hidden",children:[k&&s.jsx("img",{src:k,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-35"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-pink-50/75 via-pink-100/70 to-pink-200/85"}),s.jsxs("div",{className:"relative z-20 pb-32",children:[s.jsxs("div",{className:"text-center pt-4 pb-6",children:[s.jsx("h2",{className:"text-2xl font-bold text-pink-700",children:"微观乳腺主城"}),s.jsxs("p",{className:"text-sm text-pink-600/70",children:[c.playthrough===1?"一周目":"二周目"," · 核心枢纽",c.allPerspectivesUnlocked&&` · ${Il[p].name}`]})]}),c.allPerspectivesUnlocked&&s.jsxs("button",{className:"absolute top-4 right-4 z-30 flex items-center gap-2 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/95 px-3 py-2 text-xs font-bold text-[#3E2723] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none",onClick:()=>u(!0),children:[s.jsx(tp,{className:"h-4 w-4 text-[#6B2D5C]"}),"切换视角 · 时光回溯"]}),s.jsx("div",{className:"max-w-md mx-auto mb-6",children:s.jsxs("div",{className:"bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm",children:[s.jsx("div",{className:"w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden",children:g?s.jsx("img",{src:g,alt:"派蒙",className:"h-full w-full object-cover"}):s.jsx("span",{className:"text-2xl",children:"🧚"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:"text-sm font-medium text-pink-700",children:"派蒙"}),s.jsx("p",{className:"text-xs text-gray-600 mt-1",children:"这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。"})]}),m&&s.jsx("img",{src:m,alt:Il[p].name,className:"h-14 w-14 flex-shrink-0 rounded-full border-2 border-pink-300 object-cover"})]})}),s.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[s.jsx(Vt,{className:"cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200",onClick:()=>o({type:"SET_PHASE",payload:"memoryCenter"}),children:s.jsxs(Xt,{className:"p-5 flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center",children:s.jsx(Tp,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-blue-700",children:"大脑记忆中枢"}),s.jsx("p",{className:"text-xs text-blue-600/70",children:"回溯记忆，学习技能"})]})]})}),s.jsx(Vt,{className:"cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-red-50 to-red-100 border-red-200",onClick:()=>o({type:"SET_PHASE",payload:"bossEntry"}),children:s.jsxs(Xt,{className:"p-5 flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center",children:s.jsx(ku,{className:"w-7 h-7 text-white"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-red-700",children:"病变的乳腺组织"}),s.jsxs("p",{className:"text-xs text-red-600/70",children:["挑战症状BOSS (",O,"个已解锁)"]})]})]})})]}),s.jsxs("div",{className:"max-w-md mx-auto mt-6 p-4 bg-white/60 rounded-xl",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"当前进度"}),s.jsxs("div",{className:"space-y-2 text-xs",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"text-gray-600",children:"记忆点进度"}),s.jsxs("span",{className:"text-pink-600",children:[N,"/3"]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"text-gray-600",children:"BOSS解锁进度"}),s.jsxs("span",{className:"text-pink-600",children:[O,"/",h.length]})]}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx("span",{className:"text-gray-600",children:"已击败BOSS"}),s.jsxs("span",{className:"text-pink-600",children:[y,"/",h.length]})]})]})]}),s.jsx("div",{className:"fixed bottom-4 left-4 opacity-20 pointer-events-none",children:s.jsx("div",{className:"w-8 h-8 bg-pink-400 rounded-full animate-pulse"})}),s.jsx("div",{className:"fixed top-20 right-4 opacity-15 pointer-events-none",children:s.jsx("div",{className:"w-6 h-6 bg-pink-500 rounded-full animate-bounce"})})]}),s.jsxs("div",{className:"absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed2843093104553e.avif",alt:"Bottom Stage",className:"w-full h-auto",draggable:!1}),s.jsx(qi,{className:"absolute bottom-[28%] right-[6%] z-20"})]}),d&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-[#2B1B17]/60 p-4 backdrop-blur-sm",onClick:()=>u(!1),children:s.jsxs("div",{className:"w-full max-w-lg rounded-none border-4 border-[#3E2723] bg-[#FFFDF8] p-5 shadow-[0_6px_0_#3E2723]",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"mb-4 flex items-center justify-between border-b-2 border-[#D4A373] pb-3",children:[s.jsxs("h3",{className:"flex items-center gap-2 text-base font-bold text-[#3E2723]",children:[s.jsx(tp,{className:"h-5 w-5 text-[#6B2D5C]"}),"时光回溯 · 视角切换"]}),s.jsx("button",{className:"flex h-7 w-7 items-center justify-center border-2 border-[#3E2723] bg-[#6B2D5C] text-[#FFE082] shadow-[0_2px_0_#3E2723]",onClick:()=>u(!1),children:s.jsx(Rp,{className:"h-4 w-4"})})]}),s.jsx("p",{className:"mb-4 text-xs leading-relaxed text-[#8D6E63]",children:"记忆与技能背包跨视角共享，各视角的 HE / BE 记忆点进度完全保留。"}),s.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:Object.keys(Il).map(q=>{const Z=c.perspectivesData[q],Q=Object.values(Z.memories).filter(Boolean).length,I=q===p;return s.jsxs("button",{className:`rounded-none border-2 p-3 text-left shadow-[0_3px_0_#3E2723] transition-all active:translate-y-0.5 active:shadow-none ${Lg[q]} ${I?"border-[#6B2D5C] ring-2 ring-[#E91E63]":"border-[#3E2723] hover:brightness-105"}`,onClick:()=>D(q),children:[s.jsx("p",{className:`text-sm font-bold ${qg[q]}`,children:Il[q].name}),s.jsx("p",{className:"mt-0.5 text-xs text-[#5D4037]",children:Ug[q]}),s.jsxs("p",{className:"mt-2 text-xs font-medium text-[#8D6E63]",children:["记忆已探索: ",Q,"/3"]}),Z.completed&&s.jsx("p",{className:"mt-1 text-xs font-bold text-[#E91E63]",children:"已完整通关"}),I&&s.jsx("p",{className:"mt-1 text-xs font-bold text-[#6B2D5C]",children:"当前视角"})]},q)})})]})})]})}const Xp={child:{1:{id:1,title:"任性粘人，熬妈陪伴",description:"任性粘人，熬妈陪伴",perspective:"child",intro:`开场：大脑记忆中枢→记忆唤醒
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
旁白：记忆点 3 通关完成，已成功解锁两大 BOSS—— 乳房酒窝征 BOSS、乳房橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["skinDimple","orangePeel"],skillHE:{id:"warmComfort",name:"温暖安慰",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"ignorantMockery",name:"无知嘲笑",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}}},adult:{1:{id:1,title:"职场酒局的被迫应酬",description:"职场酒局的被迫应酬",perspective:"adult",intro:`开场：微观世界→大脑记忆中枢
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
旁白：记忆点通关・已解锁两大 BOSS—— 乳房硬块 BOSS、腋下淋巴结肿大 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["breastLump","nippleDischarge"],skillHE:{id:"refuseAlcohol",name:"拒绝酒精",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"forcedDrinking",name:"被迫饮酒",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}},2:{id:2,title:"熬夜赶项目的健康透支",description:"熬夜赶项目的健康透支",perspective:"adult",intro:`开场：微观世界→大脑记忆中枢
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
旁白：记忆点 3 通关完成，已成功解锁两大病症 BOSS—— 酒窝征 BOSS、橘皮样改变 BOSS！可前往病变乳腺组织进行挑战！`}],bossUnlocked:["orangePeel","skinDimple"],skillHE:{id:"scientificTreatment",name:"科学治疗",description:"正向记忆技能",type:"positive",effect:"驱散黑雾，稳定乳腺主城。",icon:"heart"},skillBE:{id:"folkRemedy",name:"迷信偏方",description:"负面记忆技能",type:"negative",effect:"加重黑雾，使 BOSS 更容易觉醒。",icon:"danger"}}}};function Yg(c,o){return Xp[c][o]}const Vg={child:[{title:"任性粘人，熬妈陪伴",description:"7岁那年冬夜，缠着妈妈玩到深夜",color:"bg-amber-100 border-amber-300"},{title:"熬夜学习，让妈牵挂",description:"9岁期中考试前，偷偷刷题到凌晨",color:"bg-blue-100 border-blue-300"},{title:"无知嘲笑，健康认知缺失",description:"看到妈妈乳房变化，随口说出伤人的话",color:"bg-purple-100 border-purple-300"}],adult:[{title:"职场酒局的被迫应酬",description:"为了项目被迫参加酒局，喝了太多酒",color:"bg-red-100 border-red-300"},{title:"熬夜赶项目的健康透支",description:"为白衣计划连续熬夜，内分泌彻底紊乱",color:"bg-orange-100 border-orange-300"},{title:"私自滥用减肥药与保健品",description:"盲目跟风吃网红减肥药，体内激素爆炸",color:"bg-pink-100 border-pink-300"}],elder:[{title:"隐瞒病情，怕连累子女",description:"发现乳房硬块却偷偷忍着，瞒着不说",color:"bg-teal-100 border-teal-300"},{title:"忽视体检，拖延乳腺隐患",description:"儿女催做体检却一拖再拖，忽视小不适",color:"bg-cyan-100 border-cyan-300"},{title:"盲目听信偏方，延误治疗",description:"不信正规医院，听信街坊的民间偏方",color:"bg-indigo-100 border-indigo-300"}]},rp={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},up={cellRepair:"修复受损的乳腺细胞",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境"},pu=["cellRepair","hormoneBalance","immuneBoost","detox"];function Xg(){const{state:c,dispatch:o,equipSkill:d}=Pe(),u=c.currentPerspective,p=Object.values(Xp[u]).map(M=>({title:M.title,description:M.description,color:Vg[u][M.id-1]?.color||"bg-white border-gray-200"})),[h,y]=C.useState(null),[N,g]=C.useState(null),[m,k]=C.useState(!1),O=M=>{const J=c.perspectivesData[u].memories[M+1]??null;return c.playthrough===2?J==="HE"?{status:"completed",label:"HE通关(可重玩)",color:"text-green-600 bg-green-100",canReplay:!0}:J==="BE"?{status:"failed",label:"BE通关(可重玩)",color:"text-red-600 bg-red-100",canReplay:!0}:{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0}:J==="HE"?{status:"completed",label:"HE通关(已锁定)",color:"text-green-600 bg-green-100",canReplay:!1}:J==="BE"?{status:"failed",label:"BE通关(已锁定)",color:"text-red-600 bg-red-100",canReplay:!1}:M===0?{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0}:c.perspectivesData[u].memories[M]??null?{status:"unlocked",label:"可进入",color:"text-blue-600 bg-blue-100",canReplay:!0}:{status:"locked",label:"未解锁",color:"text-gray-400 bg-gray-100",canReplay:!1}},D=M=>{const J=O(M);J.status!=="locked"&&(!J.canReplay&&(J.status==="completed"||J.status==="failed")||(o({type:"SET_MEMORY_POINT",payload:M+1}),o({type:"SET_PHASE",payload:"visualNovel"})))},q=M=>{y(M)},Z=()=>{y(null),g(null)},Q=(M,J)=>{M.preventDefault(),g(J)},I=()=>{g(null)},K=(M,J)=>{if(M.preventDefault(),!h)return;const X=c.equippedSkills[J],Y=c.equippedSkills.indexOf(h);if(Y!==-1){const ce=[...c.equippedSkills];ce[Y]=X,ce[J]=h,o({type:"EQUIP_SKILL",payload:{newSkill:h,oldSkill:X}}),o({type:"SET_EQUIPPED_SKILLS",payload:ce})}else d(h,X);y(null),g(null)},ie=M=>{if(!h&&pu.includes(M))y(M);else if(h){const J=c.equippedSkills.indexOf(M);if(J!==-1){const X=c.equippedSkills[J];d(h,X)}y(null)}},$=M=>pu.includes(M),ue=M=>M==="cellRepair"?"🔧":M==="hormoneBalance"?"⚖️":M==="immuneBoost"?"🛡️":M==="detox"?"💧":"✨";return s.jsxs("div",{className:"min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50 p-4",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7ca05375bcf1f7f2.avif",alt:"",className:"absolute inset-0 h-full w-full object-cover"}),s.jsxs(Ue,{variant:"ghost",className:"absolute top-4 left-4 z-30 text-indigo-100 hover:bg-white/10",onClick:()=>o({type:"SET_PHASE",payload:"microWorldMain"}),children:[s.jsx(Hp,{className:"w-5 h-5 mr-1"}),"返回主城"]}),s.jsxs("div",{className:"relative z-20 pb-32",children:[s.jsxs("div",{className:"text-center pt-16 pb-8",children:[s.jsx("h2",{className:"text-2xl font-bold text-indigo-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]",children:"大脑记忆中枢"}),s.jsx("p",{className:"text-sm text-indigo-200/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]",children:c.playthrough===1?"一周目 · 记忆点通关后锁定":"二周目 · 时光回溯已开启"})]}),s.jsx("div",{className:"max-w-lg mx-auto space-y-4",children:p.map((M,J)=>{const X=O(J),Y=X.status!=="locked"&&X.canReplay;return s.jsx(Vt,{className:`${M.color} ${Y?"cursor-pointer hover:shadow-lg":"opacity-70"} 
                transition-all hover:scale-[1.01]`,onClick:()=>D(J),children:s.jsxs(Xt,{className:"p-4 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${X.color}`,children:[X.status==="completed"&&s.jsx(Ri,{className:"w-5 h-5"}),X.status==="failed"&&s.jsx(ul,{className:"w-5 h-5"}),X.status==="unlocked"&&s.jsx("span",{className:"text-lg",children:J+1}),X.status==="locked"&&s.jsx(as,{className:"w-5 h-5"})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-gray-800",children:M.title}),s.jsx("p",{className:"text-xs text-gray-600",children:M.description})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[c.playthrough===2&&(X.status==="completed"||X.status==="failed")&&s.jsx(PS,{className:"w-4 h-4 text-amber-500"}),s.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${X.color}`,children:X.label})]})]})},J)})}),s.jsxs("div",{className:"max-w-lg mx-auto mt-8 p-4 bg-white/70 rounded-xl",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h3",{className:"font-bold text-gray-700",children:"已装备技能"}),c.playthrough===2&&s.jsxs(Ue,{variant:"ghost",size:"sm",className:"text-indigo-600",onClick:()=>k(!m),children:[s.jsx(np,{className:"w-4 h-4 mr-1"}),m?"收起技能库":"打开技能库"]})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:c.equippedSkills.map((M,J)=>s.jsxs("div",{className:`relative p-3 rounded-xl border-2 transition-all ${N===J?"border-indigo-500 bg-indigo-50 scale-105":h&&!$(M)?"border-dashed border-gray-300 bg-gray-50":"border-gray-200 bg-white"} ${c.playthrough===2?"cursor-pointer":""}`,onDragOver:X=>c.playthrough===2&&Q(X,J),onDragLeave:I,onDrop:X=>c.playthrough===2&&K(X,J),onClick:()=>c.playthrough===2&&ie(M),children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:ue(M)}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"font-medium text-gray-800 text-sm truncate",children:rp[M]||M}),s.jsx("p",{className:"text-xs text-gray-500 truncate",children:up[M]||"记忆点技能"})]})]}),h&&N===J&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-indigo-100/80 rounded-xl",children:s.jsx("span",{className:"text-indigo-600 font-medium text-sm",children:"替换"})})]},J))})]}),c.playthrough===2&&m&&s.jsxs("div",{className:"max-w-lg mx-auto mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx(np,{className:"w-5 h-5 text-amber-600"}),s.jsx("h3",{className:"font-bold text-amber-800",children:"技能库"}),s.jsx("span",{className:"text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full",children:"拖拽替换"})]}),s.jsx("p",{className:"text-xs text-amber-700 mb-3",children:"将下方技能拖拽到上方技能槽，或点击技能后点击目标位置进行替换"}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:pu.map(M=>s.jsxs("div",{draggable:!0,className:`p-3 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all ${h===M?"border-amber-500 bg-amber-100 scale-105 shadow-lg":"border-amber-200 bg-white hover:border-amber-400 hover:shadow-md"}`,onDragStart:()=>q(M),onDragEnd:Z,onClick:()=>ie(M),children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:ue(M)}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("p",{className:"font-medium text-gray-800 text-sm truncate",children:rp[M]}),s.jsx("p",{className:"text-xs text-gray-500 truncate",children:up[M]})]})]}),h===M&&s.jsx("div",{className:"mt-2 text-center",children:s.jsx("span",{className:"text-xs text-amber-600",children:"已选中，点击目标位置替换"})})]},M))})]}),s.jsx("div",{className:"max-w-lg mx-auto mt-6 p-4 bg-indigo-50 rounded-lg",children:s.jsxs("p",{className:"text-xs text-indigo-700",children:[s.jsx("strong",{children:"提示："}),c.playthrough===1?"一周目：通关记忆点可解锁对应BOSS挑战。HE结局获得正向技能，BE结局获得负面技能。记忆点通关后锁定，不可重玩。":"二周目：时光回溯已开启，所有记忆点均可无限重玩，HE/BE都能反复选择。打开技能库可自由替换初始技能。"]})})]}),s.jsxs("div",{className:"absolute bottom-0 right-0 z-20 pointer-events-none flex flex-col items-end",children:[s.jsx(qi,{className:"mb-2 mr-6",bubbleClassName:"max-w-xs"}),s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1362a7dd5a2da203.avif",alt:"Stage Platform",className:"w-[380px] h-auto max-w-[88vw] object-contain md:w-[460px]",draggable:!1})]})]})}function op(c){if(c.type==="HE"||c.type==="BE")return c.type;if(c.route==="HE"||c.route==="BE")return c.route;const o=`${c.result||""}${c.paimonDialogue||""}`;return o.includes("BE 主线")||o.includes("BOSS 彻底觉醒")||o.includes("任性")?"BE":"HE"}function Vi(c){const o=c.trim();return o==="————"||/^旁白[：:].*屏幕右上角弹出/.test(o)||/^【(?:场景切换|立绘|特殊|剧情跳转|剧情汇流)：/.test(o)||/^【脚本结束】$/.test(o)||/^(?:开场|第[一二三四五六七八九十]+幕|主线\s*\d+|主线剧情|结局\s*\d+|HE 主线|BE 主线|HE 结局|BE 结局|拒酒周旋主线|妥协饮酒主线|合理下班主线|熬夜透支主线|科学控药主线|滥用药物主线|及时就医主线|隐瞒拖延主线|按时体检主线|拖延体检主线|科学治疗主线|偏方延误主线)(?:（.*）)?(?:[：:].*)?$/.test(o)||/^[^：:]{1,32}结局(?:对应版)?(?:（.*）)?(?:[：:].*)?$/.test(o)||/^分支\s*\d+[：:]/.test(o)||/^互动\s*\d+[：:]/.test(o)||/^选\s*\d+[：:]/.test(o)||/^选项\s*[A-Za-z0-9]+[：:]/.test(o)}function Qp(c){if(!c)return{speaker:void 0,text:""};const o=c.match(/^([^：:]{1,24})[：:](.*)$/);return!o||c.startsWith("选项")?{speaker:void 0,text:c}:{speaker:o[1].trim(),text:o[2].trim()}}function Hu(c){return!c||/^(开场|第[一二三四五六七八九十]+幕|HE 主线|BE 主线)$/.test(c.speaker||"")?!1:c.text.split(`
`).filter(d=>d.trim()&&!Vi(d)).length>0&&c.speaker!=="舞台指示"}function dp(c,o){for(let d=o+1;d<c.length;d+=1)if(Hu(c[d]))return d;return null}function Qg(c,o){for(let d=o-1;d>=0;d-=1)if(Hu(c[d]))return d;return null}function Zp(c){if(!c)return null;const o=c.split(`
`).map((d,u)=>({text:d.trim(),rawIndex:u})).filter(d=>d.text&&!Vi(d.text));return o.length>0?o:null}function hu(c,o,d){return c.slice(o,d).map((u,p)=>({text:u.trim(),rawIndex:o+p})).filter(u=>u.text&&!Vi(u.text))}function Zg(c){return c.trim().match(/^选项\s*\d+[：:](.*)$/)?.[1]?.trim()||c.trim()}function Kg(c){const o={entries:[],beforeEntries:[],afterEntries:[],inlineChoices:[]};if(!c)return o;const d=c.split(`
`),u=Zp(c)??[],p=d.findIndex((k,O)=>k.trim().match(/^选项\s*1[：:]/)&&d[O+1]?.trim().match(/^选项\s*2[：:]/)&&d[O+2]?.trim().match(/^选项\s*3[：:]/));if(p<0)return{...o,entries:u};const h=[1,2,3].map(k=>d.findIndex((O,D)=>D>p&&O.trim().match(new RegExp(`^互动\\s*${k}[：:]`))));if(h.some(k=>k<0))return{...o,entries:u};const y=d.findIndex((k,O)=>O>Math.max(...h)&&(k.trim().startsWith("主线剧情")||k.includes("所有互动选项汇流后")||k.includes("所有互动选项汇流后")));if(y<0)return{...o,entries:u};const N=hu(d,0,p),g=hu(d,y,d.length),m=h.map((k,O)=>{const D=O<h.length-1?h[O+1]:y;return{text:Zg(d[p+O]),entries:hu(d,k,D)}});return{entries:u,beforeEntries:N,afterEntries:g,inlineChoices:m}}function Jg(c){return Zp(c)?.map(o=>o.text)??null}function $g(c){const o=Jg(c);return o?o.map((d,u)=>s.jsx("p",{className:"mb-3 last:mb-0",children:Qp(d).text||d},u)):null}function Wg(){const{state:c,dispatch:o,completeMemoryPoint:d}=Pe(),u=c.currentPerspective,p=c.currentMemoryPoint,h=Yg(u,p),y=C.useMemo(()=>dp(h.scenes,-1)??0,[h.scenes]),[N,g]=C.useState(y),[m,k]=C.useState(!1),[O,D]=C.useState(null),[q,Z]=C.useState(!1),[Q,I]=C.useState(!1),[K,ie]=C.useState(!1),[$,ue]=C.useState(null),[M,J]=C.useState(!1),[X,Y]=C.useState(!1),[ce,he]=C.useState(null),[Te,Ce]=C.useState(!1),[ct,Ie]=C.useState(!1),[Le,A]=C.useState(!1),[L,R]=C.useState(!1),V=h.scenes[N],oe=C.useMemo(()=>Fg(u,p),[u,p]),S=C.useMemo(()=>Kp(oe,Tu(h.scenes.slice(0,N+1),u)),[oe,h.scenes,N,u]),H=C.useMemo(()=>ce==="HE"?h.secondChoicesHE:h.secondChoicesBE,[ce,h.secondChoicesBE,h.secondChoicesHE]),U=C.useMemo(()=>mp(H[0]?.result,u,S),[H,u,S]),G=C.useMemo(()=>Pg($?.result,u,S),[$?.result,u,S]);C.useEffect(()=>{g(y),k(!1),D(null),Z(!1),I(!1),ie(!1),ue(null),J(!1),Y(!1),he(null),Ce(!1)},[y,p,u]),C.useEffect(()=>{if(ct&&!m&&!q&&!Q&&!K&&!M&&!X){const ae=window.setTimeout(()=>{ne()},1500+(V?.text.length??0)*45);return()=>window.clearTimeout(ae)}});const ne=()=>{if(Te){Ce(!1);return}const ae=dp(h.scenes,N);ae!==null?g(ae):k(!0)},de=()=>{if(c.playthrough===1)return;const ae=Qg(h.scenes,N);ae!==null&&g(ae)},le=ae=>{D(ae),he(op(ae)),k(!1),Z(!0)},Xe=()=>{if(Z(!1),O?.nextChoices?.length){I(!0);return}ie(!0)},ke=ae=>{D(ae),he(op(ae)),I(!1),Z(!0)},kt=ae=>{ue(ae),ie(!1),J(!0)},Qt=()=>{Lt()},Lt=()=>{ce&&(d(p,ce),o({type:"SET_PHASE",payload:"skillReplace"}))},os=()=>{c.playthrough!==1&&(g(y),k(!1),D(null),Z(!1),I(!1),ie(!1),ue(null),J(!1),Y(!1),he(null))},Wt=()=>u==="child"?"from-amber-900/80 to-amber-950":u==="adult"?"from-blue-900/80 to-blue-950":"from-purple-900/80 to-purple-950",sa=ae=>ae?ae.includes("派蒙")?"P":ae.includes("妈妈")?"M":ae.includes("爸爸")?"F":ae.includes("医生")?"D":ae.includes("BOSS")?"!":ae.includes("旁白")?"N":ae.slice(0,1):"◆",ia=V?.speaker==="旁白";return s.jsxs("div",{className:`min-h-screen bg-gradient-to-b ${Wt()} relative overflow-hidden`,onClick:()=>{Ie(!1),ne()},children:[S.background&&s.jsx("img",{src:S.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-55 pointer-events-none"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none"}),s.jsx("div",{className:`absolute inset-0 flex items-center justify-center ${S.background?"opacity-0":"opacity-20"} pointer-events-none`,children:s.jsxs("div",{className:"text-8xl md:text-9xl",children:[u==="child"&&["🧸","📚","🎀"][p-1],u==="adult"&&["🍷","💻","💊"][p-1],u==="elder"&&["🏠","🩺","🌿"][p-1]]})}),S.portraits.length>0&&s.jsx("div",{className:"absolute inset-x-0 bottom-40 z-10 flex items-end justify-center gap-2 px-4 pointer-events-none md:gap-8",children:S.portraits.map((ae,ds)=>s.jsx("img",{src:ae.path,alt:`${ae.role} / ${ae.state}`,className:`max-h-[46vh] md:max-h-[58vh] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] ${S.portraits.length===1?"max-w-[72vw]":S.portraits.length>3?"max-w-[20vw]":"max-w-[33vw]"}`,onError:ca=>{ca.currentTarget.style.display="none"}},`${ae.role}-${ae.state}-${ds}`))}),s.jsxs("div",{className:"absolute top-4 left-4 right-4 z-20 text-white/80",children:[s.jsx("div",{className:"text-sm",children:h.title}),s.jsx("div",{className:"text-xs text-white/55",children:h.description})]}),s.jsx(rs,{canBack:c.playthrough===2&&N!==y,onBack:c.playthrough===2?de:void 0,isAuto:ct,onToggleAuto:()=>Ie(!ct),onSkip:ne,onHide:()=>Ce(!0),onShowLog:()=>R(!0),onSettings:()=>A(!0),extra:c.playthrough===2?s.jsxs("button",{className:"flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-2.5 py-1 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all select-none hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none",onClick:ae=>{ae.stopPropagation(),os()},children:[s.jsx(cg,{className:"h-3.5 w-3.5"}),"回溯"]}):void 0}),s.jsx(us,{open:L,onClose:()=>R(!1),entries:h.scenes.slice(0,N+1).filter(Hu).map(ae=>({speaker:ae.speaker,text:ae.text}))}),!Te&&s.jsx("div",{className:"absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16",children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),V?.speaker&&V.speaker!=="旁白"&&s.jsxs("div",{className:ss,children:[s.jsx("span",{className:Gi,children:fp(V.speaker,u,S)?s.jsx("img",{src:fp(V.speaker,u,S),alt:V.speaker,className:"h-full w-full object-cover"}):sa(V.speaker)}),s.jsx("span",{children:V.speaker})]}),s.jsx("div",{className:`${is} ${ia?cs:""} max-h-[42vh] overflow-y-auto pr-1`,children:$g(V?.text)}),s.jsx("div",{className:Lp,children:s.jsx("span",{className:na,children:"▼"})})]})}),m&&s.jsx(xu,{title:"你会如何选择？",children:h.firstChoices.map(ae=>s.jsx(Su,{choice:ae,onClick:()=>le(ae)},ae.id))}),q&&O&&s.jsx(gu,{title:"分支剧情",action:O.nextChoices?.length?"继续选择":"进入后续选择",baseVisual:S,perspective:u,onContinue:Xe,scriptText:O.result}),Q&&O?.nextChoices?.length&&s.jsx(xu,{title:"接下来你会怎么做？",visual:mp(O.result,u,S),children:O.nextChoices.map(ae=>s.jsx(Su,{choice:ae,onClick:()=>ke(ae)},ae.id))}),K&&ce&&s.jsx(xu,{title:ce==="HE"?"HE 主线：接下来怎么守护？":"BE 主线：接下来会怎么发展？",visual:U,children:H.map(ae=>s.jsx(Su,{choice:ae,onClick:()=>kt(ae)},ae.id))}),M&&$&&s.jsx(gu,{title:"后续剧情",action:"继续",baseVisual:S,perspective:u,onContinue:Qt,scriptText:$.result}),X&&O&&s.jsxs(gu,{title:ce==="HE"?"HE 反馈":"BE 反馈",action:"继续",visual:G,onContinue:Lt,children:[s.jsxs("p",{className:"mb-3 font-medium text-pink-600",children:["派蒙：",O.paimonDialogue]}),s.jsx("p",{className:"rounded-lg bg-pink-100/80 p-3 text-stone-700",children:O.microEffect})]}),Le&&s.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center z-40",onClick:ae=>ae.stopPropagation(),children:s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"设置"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("label",{className:"block text-sm text-gray-600",children:["文字速度",s.jsx("input",{type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),s.jsxs("label",{className:"block text-sm text-gray-600",children:["音量",s.jsx("input",{type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),s.jsx(Ue,{className:"w-full mt-4",onClick:()=>A(!1),children:"关闭"})]})})]})}function Fg(c,o){const d={child:{1:"妈妈的卧室",2:"书房",3:"妈妈的卧室"},adult:{1:"职场办公室",2:"职场办公室",3:"卧室"},elder:{1:"社区医院",2:"体检中心",3:"小区花园"}},u=c==="child"?"软糯":c==="elder"?"温柔":"严肃",p=Fe("主角","正常",c),h=Fe("派蒙",u);return{background:Ut(d[c][o]),portraits:[p?{role:"主角",state:"正常",path:p}:null,h?{role:"派蒙",state:u,path:h}:null].filter(y=>!!y)}}function Kp(c,o){return{background:o.background||c.background,portraits:o.portraits.length>0?o.portraits:c.portraits}}function Tu(c,o){let d,u=[];for(const p of c){const h=p.text.match(/【场景切换：([^】]+)】/);h&&(d=Ut(h[1]));const y=p.text.match(/【立绘：([^】]+)】/);y&&(u=y[1].split(/[、,，]/).map(N=>{const[g,m]=N.split("/").map(O=>O.trim()),k=g&&m?Fe(g,m,o):void 0;return k?{role:g,state:m,path:k}:null}).filter(N=>!!N).slice(0,5))}return{background:d,portraits:u}}function fp(c,o,d){return c?c.includes("派蒙")?Fe("派蒙","开心"):c.includes("主角")?d.portraits.find(p=>p.role==="主角")?.path||Fe("主角","正常",o):d.portraits.find(p=>c.includes(p.role))?.path:void 0}function Pg(c,o,d){if(!c)return d;const u=c.split(`
`).map(h=>({text:h})),p=Tu(u,o);return{background:p.background||d.background,portraits:p.portraits.length>0?p.portraits:d.portraits}}function Jp(c,o,d,u){if(!c||o===void 0||!d)return u;const p=c.split(`
`).slice(0,o+1).map(h=>({text:h}));return Kp(u,Tu(p,d))}function mp(c,o,d){if(!c)return d;const u=c.split(`
`),p=u.findIndex(y=>y.trim()&&!Vi(y)),h=p>=0?p:u.length-1;return Jp(c,h,o,d)}function Ig(c,o){if(!c||!o)return null;const d=c.split(`
`),u=d.findIndex(h=>h.includes("第三幕")||h.includes("插入式微观科普"));if(u<0)return null;const p=d.findIndex((h,y)=>y>u&&!h.trim().startsWith("【")&&(h.includes("防线稳固结局")||h.includes("黑雾笼罩结局")||h.includes("防线修复结局")||h.includes("黑雾蔓延结局")||h.includes("守护成功结局")||h.includes("风险加重结局")||h.includes("及时就医结局")||h.includes("隐瞒拖延结局")||h.includes("按时体检结局")||h.includes("拖延体检结局")||h.includes("科学治疗结局")||h.includes("偏方延误结局")||/^HE 结局/.test(h.trim())||/^BE 结局/.test(h.trim())||/^结局\s*[12]/.test(h.trim())));return p<0?null:o.find(h=>h.rawIndex>p)??null}function xu({title:c,children:o,visual:d}){return s.jsxs("div",{className:qp,onClick:u=>u.stopPropagation(),children:[d?.background&&s.jsx("img",{src:d.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-35"}),d&&d.portraits.length>0&&s.jsx("div",{className:"absolute inset-x-0 bottom-24 flex items-end justify-center gap-3 px-4 pointer-events-none opacity-80",children:d.portraits.map((u,p)=>s.jsx("img",{src:u.path,alt:"",className:`${d.portraits.length>3?"max-h-[38vh] max-w-[19vw]":"max-h-[44vh] max-w-[34vw]"} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`,onError:h=>{h.currentTarget.style.display="none"}},`${u.role}-${u.state}-${p}`))}),s.jsxs("div",{className:"relative z-30 max-w-2xl w-full p-4",children:[s.jsx("p",{className:Gp,children:c}),s.jsx("div",{className:"flex flex-col gap-3.5 items-center max-h-[72vh] overflow-y-auto pr-1 w-full",children:o})]})]})}function Su({choice:c,onClick:o}){return s.jsxs("button",{className:Yp,onClick:d=>{d.stopPropagation(),o()},children:[s.jsx("span",{className:Vp,children:c.id.replace(/^(c|he|be)/,"")}),c.text]})}function gu({title:c,action:o,visual:d,baseVisual:u,perspective:p,children:h,onContinue:y,scriptText:N}){const g=C.useMemo(()=>Kg(N),[N]),[m,k]=C.useState(null),[O,D]=C.useState(!1),q=C.useMemo(()=>g.inlineChoices.length===0?g.entries:m===null?g.beforeEntries:[...g.beforeEntries,...g.inlineChoices[m].entries,...g.afterEntries],[g,m]),[Z,Q]=C.useState(0),I=q?.[Z],K=Qp(I?.text),ie=K.speaker==="旁白"||!K.speaker&&!!I,$=C.useMemo(()=>Ig(N,q),[N,q]),ue=$!==null&&I!==void 0&&I.rawIndex<$.rawIndex,M=C.useMemo(()=>Jp(N,I?.rawIndex,p,u||d||{portraits:[]}),[N,I?.rawIndex,p,u,d]),J=!q||Z>=q.length-1;C.useEffect(()=>{Q(0),k(null),D(!1)},[N]);const X=()=>{if(q&&!J){Q(he=>he+1);return}if(g.inlineChoices.length>0&&m===null){D(!0);return}y?.()},Y=()=>{if(!q||$===null)return;const he=q.findIndex(Te=>Te.rawIndex===$.rawIndex);he>=0&&Q(he)},ce=he=>{k(he),D(!1),Q(g.beforeEntries.length)};return s.jsxs("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/50 via-white/40 to-pink-200/60 backdrop-blur-md",onClick:he=>{he.stopPropagation(),X()},children:[M.background&&s.jsx("img",{src:M.background,alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-45"}),s.jsx("div",{className:"absolute inset-0 bg-white/25"}),M.portraits.length>0&&s.jsx("div",{className:"absolute inset-x-0 bottom-40 flex items-end justify-center gap-3 px-4 pointer-events-none",children:M.portraits.map((he,Te)=>s.jsx("img",{src:he.path,alt:`${he.role} / ${he.state}`,className:`${M.portraits.length>3?"max-h-[38vh] max-w-[19vw]":"max-h-[44vh] max-w-[34vw]"} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`,onError:Ce=>{Ce.currentTarget.style.display="none"}},`${he.role}-${he.state}-${Te}`))}),s.jsx("div",{className:`${wu} z-10`}),I?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16",children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),K.speaker&&K.speaker!=="旁白"&&s.jsx("div",{className:ss,children:s.jsx("span",{children:K.speaker||c})}),s.jsx("p",{className:`${is} ${ie?cs:""} whitespace-pre-wrap`,children:K.text||I.text}),s.jsx("div",{className:Lp,children:s.jsx("span",{className:na,children:"▼"})})]})}),ue&&s.jsx(Ue,{variant:"secondary",className:"rounded-none border-2 border-[#3E2723] bg-[#FFFDF8] text-[#6B2D5C] shadow-[0_3px_0_#3E2723] hover:bg-[#F3E5CE] hover:text-[#6B2D5C] absolute right-4 top-4 z-20",onClick:he=>{he.stopPropagation(),Y()},children:"跳过科普"}),O&&g.inlineChoices.length>0&&s.jsx("div",{className:`${qp}`,onClick:he=>he.stopPropagation(),children:s.jsxs("div",{className:"relative z-30 w-[min(760px,calc(100vw-2rem))] px-4",children:[s.jsx("p",{className:Gp,children:"你会如何选择？"}),s.jsx("div",{className:"flex flex-col gap-3.5 items-center",children:g.inlineChoices.map((he,Te)=>s.jsxs("button",{className:Yp,onClick:()=>ce(Te),children:[s.jsx("span",{className:Vp,children:Te+1}),he.text]},`${he.text}-${Te}`))})]})})]}):s.jsx("div",{className:"relative z-10 w-full max-w-3xl p-4",children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),s.jsx("h3",{className:"mb-4 font-bold text-[#6B2D5C]",children:c}),s.jsx("div",{className:"max-h-[64vh] overflow-y-auto pr-2 leading-relaxed text-[#2B1B17]",children:h}),o&&y&&s.jsxs("div",{className:"mt-4 flex justify-end",children:[s.jsx("span",{className:"text-xs font-bold text-[#8D6E63]",children:"点击任意处继续"}),s.jsx("span",{className:`${na} ml-1`,children:"▼"})]})]})})]})}const Ci=[{id:"cellRepair",name:"细胞修复术",description:"修复受损的乳腺细胞，恢复组织健康",type:"positive",effect:"修复乳腺细胞损伤",icon:"heal"},{id:"hormoneBalance",name:"激素平衡",description:"调节内分泌，维持激素稳定",type:"positive",effect:"平衡雌激素水平",icon:"balance"},{id:"immuneBoost",name:"免疫强化",description:"增强免疫系统，提高抵抗力",type:"positive",effect:"提升免疫细胞活性",icon:"shield"},{id:"detox",name:"毒素净化",description:"清除体内毒素，净化乳腺环境",type:"positive",effect:"清除有害物质",icon:"cleanse"}],Ou={1:{he:{id:"accompanyCare",name:"陪伴关怀",description:"多陪伴妈妈，让她好好休息",type:"positive",effect:"缓解妈妈疲劳，驱散BOSS黑雾",icon:"heart",source:"幼年线记忆点1·任性粘人"},be:{id:"willfulClingy",name:"任性粘人",description:"缠着妈妈熬夜陪伴",type:"negative",effect:"让妈妈劳累，BOSS黑雾强化",icon:"danger",source:"幼年线记忆点1·任性粘人"}},2:{he:{id:"reasonableSchedule",name:"合理安排",description:"合理规划时间，不让妈妈牵挂",type:"positive",effect:"让妈妈安心，BOSS无法靠近",icon:"clock",source:"幼年线记忆点2·熬夜学习"},be:{id:"stubbornStudy",name:"固执熬夜",description:"偷偷熬夜学习不让妈妈休息",type:"negative",effect:"让妈妈牵挂，BOSS黑雾蔓延",icon:"danger",source:"幼年线记忆点2·熬夜学习"}},3:{he:{id:"warmComfort",name:"温暖安慰",description:"关心妈妈情绪，给她温暖支持",type:"positive",effect:"驱散妈妈心结，BOSS彻底消散",icon:"sparkle",source:"幼年线记忆点3·无知嘲笑"},be:{id:"ignorantMockery",name:"无知嘲笑",description:"随口说出伤害妈妈的话",type:"negative",effect:"让妈妈伤心，BOSS彻底觉醒",icon:"danger",source:"幼年线记忆点3·无知嘲笑"}}},$p={1:{he:{id:"refuseAlcohol",name:"拒绝酒精",description:"远离酒精刺激，保护乳腺健康",type:"positive",effect:"减少激素紊乱，BOSS无法成型",icon:"shield",source:"青壮年线记忆点1·职场酒局"},be:{id:"forcedDrinking",name:"被迫饮酒",description:"为了工作不得不喝酒",type:"negative",effect:"刺激乳腺组织，BOSS黑雾扩散",icon:"danger",source:"青壮年线记忆点1·职场酒局"}},2:{he:{id:"adequateSleep",name:"充足睡眠",description:"保持规律作息，维持内分泌稳定",type:"positive",effect:"平衡激素水平，BOSS虚弱消散",icon:"moon",source:"青壮年线记忆点2·熬夜赶项目"},be:{id:"stayUpLate",name:"熬夜透支",description:"为了项目连续熬夜",type:"negative",effect:"内分泌紊乱，BOSS黑雾笼罩",icon:"danger",source:"青壮年线记忆点2·熬夜赶项目"}},3:{he:{id:"rationalMedication",name:"理性用药",description:"拒绝三无产品，科学管理身材",type:"positive",effect:"避免激素风暴，BOSS无法存在",icon:"pill",source:"青壮年线记忆点3·滥用减肥药"},be:{id:"abuseDrugs",name:"滥用药物",description:"盲目服用三无减肥药",type:"negative",effect:"激素风暴，BOSS彻底觉醒",icon:"danger",source:"青壮年线记忆点3·滥用减肥药"}}},Wp={1:{he:{id:"timelyMedical",name:"及时就医",description:"发现异常立即就医，早发现早治疗",type:"positive",effect:"消除早期病灶，BOSS被成功清除",icon:"hospital",source:"老年线记忆点1·隐瞒病情"},be:{id:"hideIllness",name:"隐瞒病情",description:"独自硬扛，不告诉子女",type:"negative",effect:"加重病情，BOSS彻底觉醒",icon:"danger",source:"老年线记忆点1·隐瞒病情"}},2:{he:{id:"regularCheckup",name:"定期体检",description:"按时进行乳腺检查，防患于未然",type:"positive",effect:"预防疾病发生，BOSS被成功驱散",icon:"clipboard",source:"老年线记忆点2·忽视体检"},be:{id:"delayCheckup",name:"拖延体检",description:"把体检当成瞎折腾",type:"negative",effect:"错失早期发现机会，BOSS黑雾蔓延",icon:"danger",source:"老年线记忆点2·忽视体检"}},3:{he:{id:"scientificTreatment",name:"科学治疗",description:"相信专业医生，坚持正规治疗",type:"positive",effect:"阻断病情恶化，BOSS被成功驱散",icon:"stethoscope",source:"老年线记忆点3·迷信偏方"},be:{id:"folkRemedy",name:"迷信偏方",description:"听信民间偏方，延误正规治疗",type:"negative",effect:"病情恶化，BOSS彻底觉醒",icon:"danger",source:"老年线记忆点3·迷信偏方"}}},Fp={cellRepair:Ci[0],hormoneBalance:Ci[1],immuneBoost:Ci[2],detox:Ci[3],...Object.entries(Ou).reduce((c,[,o])=>({...c,[o.he.id]:o.he,[o.be.id]:o.be}),{}),...Object.entries($p).reduce((c,[,o])=>({...c,[o.he.id]:o.he,[o.be.id]:o.be}),{}),...Object.entries(Wp).reduce((c,[,o])=>({...c,[o.he.id]:o.he,[o.be.id]:o.be}),{})};function eb(c,o){switch(c){case"child":return Ou[o];case"adult":return $p[o];case"elder":return Wp[o];default:return Ou[1]}}const Hi={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},bu={cellRepair:"修复受损的乳腺细胞，恢复组织健康",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境",accompanyCare:"多陪伴妈妈，让她好好休息",willfulClingy:"缠着妈妈熬夜陪伴",reasonableSchedule:"合理规划时间，不让妈妈牵挂",stubbornStudy:"偷偷熬夜学习不让妈妈休息",warmComfort:"关心妈妈情绪，给她温暖支持",ignorantMockery:"随口说出伤害妈妈的话",refuseAlcohol:"远离酒精刺激，保护乳腺健康",forcedDrinking:"为了工作不得不喝酒",adequateSleep:"保持规律作息，维持内分泌稳定",stayUpLate:"为了项目连续熬夜",rationalMedication:"拒绝三无产品，科学管理身材",abuseDrugs:"盲目服用三无减肥药",timelyMedical:"发现异常立即就医，早发现早治疗",hideIllness:"独自硬扛，不告诉子女",regularCheckup:"按时进行乳腺检查，防患于未然",delayCheckup:"把体检当成瞎折腾",scientificTreatment:"相信专业医生，坚持正规治疗",folkRemedy:"听信民间偏方，延误正规治疗"},tb={cellRepair:"修复乳腺细胞损伤",hormoneBalance:"平衡雌激素水平",immuneBoost:"提升免疫细胞活性",detox:"清除有害物质",accompanyCare:"缓解妈妈疲劳，驱散BOSS黑雾",willfulClingy:"让妈妈劳累，BOSS黑雾强化",reasonableSchedule:"让妈妈安心，BOSS无法靠近",stubbornStudy:"让妈妈牵挂，BOSS黑雾蔓延",warmComfort:"驱散妈妈心结，BOSS彻底消散",ignorantMockery:"让妈妈伤心，BOSS彻底觉醒",refuseAlcohol:"减少激素紊乱，BOSS无法成型",forcedDrinking:"刺激乳腺组织，BOSS黑雾扩散",adequateSleep:"平衡激素水平，BOSS虚弱消散",stayUpLate:"内分泌紊乱，BOSS黑雾笼罩",rationalMedication:"避免激素风暴，BOSS无法存在",abuseDrugs:"激素风暴，BOSS彻底觉醒",timelyMedical:"消除早期病灶，BOSS被成功清除",hideIllness:"加重病情，BOSS彻底觉醒",regularCheckup:"预防疾病发生，BOSS被成功驱散",delayCheckup:"错失早期发现机会，BOSS黑雾蔓延",scientificTreatment:"阻断病情恶化，BOSS被成功驱散",folkRemedy:"病情恶化，BOSS彻底觉醒"},nb=["willfulClingy","stubbornStudy","ignorantMockery","forcedDrinking","stayUpLate","abuseDrugs","hideIllness","delayCheckup","folkRemedy"];function lb(){const{state:c,dispatch:o,equipSkill:d,unlockSkill:u}=Pe(),p=c.currentPerspective,h=c.currentMemoryPoint,y=c.perspectivesData[p].memories[h]??null,N=eb(p,h),g=y==="HE"?N.he:N.be,[m,k]=C.useState(null),[O,D]=C.useState(!1),[q,Z]=C.useState(!1),Q=c.equippedSkills.includes(g.id),I=M=>nb.includes(M),K=M=>{if(c.playthrough!==1||!I(M))return!1;const J=c.beSkillSources[M];return!(!J||y==="HE"&&J===h)},ie=M=>{if(K(M)){Z(!0);return}k(M)},$=()=>{m&&(u(g.id),y==="BE"&&o({type:"RECORD_BE_SKILL_SOURCE",payload:{skillId:g.id,memoryPoint:h}}),d(g.id,m),D(!0))},ue=()=>{o({type:"SET_PHASE",payload:"memoryCenter"})};return Q&&!O?s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4",onClick:ue,children:s.jsx(Vt,{className:"max-w-md w-full",children:s.jsxs(Xt,{className:"p-8 text-center",children:[s.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:s.jsx(ul,{className:"w-8 h-8 text-blue-500"})}),s.jsx("h3",{className:"text-xl font-bold text-blue-700 mb-2",children:"技能已拥有"}),s.jsxs("p",{className:"text-gray-600 mb-6",children:["你已经拥有此技能 ",s.jsx("strong",{children:Hi[g.id]||g.name}),s.jsx("br",{}),s.jsx("span",{className:"text-sm text-gray-500",children:"点击任意处跳过学习阶段"})]}),s.jsxs(Ue,{className:"bg-blue-500 hover:bg-blue-600",onClick:ue,children:["继续冒险",s.jsx(ep,{className:"w-4 h-4 ml-2"})]})]})})}):O?s.jsx("div",{className:"min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4",children:s.jsx(Vt,{className:"max-w-md w-full",children:s.jsxs(Xt,{className:"p-8 text-center",children:[s.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:s.jsx(Ri,{className:"w-8 h-8 text-green-500"})}),s.jsx("h3",{className:"text-xl font-bold text-green-700 mb-2",children:"技能学习成功！"}),s.jsxs("p",{className:"text-gray-600 mb-6",children:["你已学会 ",s.jsx("strong",{children:Hi[g.id]||g.name}),s.jsx("br",{}),s.jsx("span",{className:"text-sm text-gray-500",children:bu[g.id]||g.description})]}),s.jsxs(Ue,{className:"bg-green-500 hover:bg-green-600",onClick:ue,children:["继续冒险",s.jsx(ep,{className:"w-4 h-4 ml-2"})]})]})})}):s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 relative",children:[s.jsxs("div",{className:"text-center pt-8 pb-6",children:[s.jsx("h2",{className:"text-2xl font-bold text-blue-700",children:"技能学习"}),s.jsx("p",{className:"text-sm text-blue-600/70",children:"通关记忆点获得新技能"})]}),s.jsxs("div",{className:"max-w-lg mx-auto",children:[s.jsx(Vt,{className:`mb-6 ${g.type==="negative"?"border-red-300 bg-red-50":"border-green-300 bg-green-50"}`,children:s.jsx(Xt,{className:"p-6",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:`w-16 h-16 rounded-full flex items-center justify-center ${g.type==="negative"?"bg-red-100":"bg-green-100"}`,children:g.type==="negative"?s.jsx(Bu,{className:"w-8 h-8 text-red-500"}):s.jsx(ul,{className:"w-8 h-8 text-green-500"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h3",{className:"font-bold text-lg",children:Hi[g.id]||g.name}),s.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${g.type==="negative"?"bg-red-200 text-red-700":"bg-green-200 text-green-700"}`,children:g.type==="negative"?"负面":"正向"})]}),s.jsx("p",{className:"text-sm text-gray-600",children:bu[g.id]||g.description}),s.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["效果: ",tb[g.id]||g.effect]})]})]})})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"font-bold text-gray-700 mb-3",children:"选择要替换的技能"}),s.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"你最多只能携带4个技能，请选择要替换的技能"}),s.jsx("div",{className:"space-y-2",children:c.equippedSkills.map(M=>{const J=Hi[M]||M,X=bu[M]||"",Y=m===M,ce=K(M);return s.jsx("button",{className:`w-full p-4 rounded-xl text-left transition-all border-2 relative overflow-hidden ${ce?"border-red-300 bg-red-50 cursor-not-allowed":Y?"border-blue-500 bg-blue-50":"border-gray-200 bg-white hover:border-blue-300"}`,onClick:()=>ie(M),children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[ce&&s.jsx("div",{className:"w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0",children:s.jsx("span",{className:"text-white text-sm",children:"😈"})}),s.jsxs("div",{children:[s.jsx("span",{className:`font-medium ${ce?"text-red-700":"text-gray-800"}`,children:J}),s.jsx("p",{className:`text-xs ${ce?"text-red-500":"text-gray-500"}`,children:X})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[ce&&s.jsxs("div",{className:"flex items-center gap-1 text-red-500",children:[s.jsx(as,{className:"w-5 h-5"}),s.jsx("span",{className:"text-xs",children:"已锁定"})]}),!ce&&Y&&s.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:s.jsx(Ri,{className:"w-4 h-4 text-white"})})]})]})},M)})})]}),s.jsx("div",{className:"flex gap-4",children:s.jsx(Ue,{className:"flex-1 bg-blue-500 hover:bg-blue-600",disabled:!m,onClick:$,children:"确认替换"})}),s.jsx("p",{className:"text-center text-xs text-gray-400 mt-4",children:"必须从当前携带的4个技能中替换1个"})]}),q&&s.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",onClick:()=>Z(!1),children:s.jsx("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",onClick:M=>M.stopPropagation(),children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:s.jsx(as,{className:"w-8 h-8 text-red-500"})}),s.jsx("h3",{className:"text-lg font-bold text-red-700 mb-2",children:"技能已锁定"}),s.jsx("p",{className:"text-gray-600 text-sm mb-6",children:"该负面技能只能被其对应记忆点的正面技能替换哦~不管如何...快去打BOSS吧！"}),s.jsx(Ue,{className:"w-full bg-red-500 hover:bg-red-600",onClick:()=>Z(!1),children:"知道了"})]})})})]})}function ab(){const{state:c,dispatch:o,startBattle:d,getBossesForMemory:u}=Pe(),p=ls[c.playthrough],h=g=>{for(const m of[1,2,3])if(u(m).includes(g))return m;return null},y=g=>{const m=h(g),k=c.unlockedBosses.includes(g),O=c.defeatedBosses.includes(g);return{isUnlocked:k,isDefeated:O,canChallenge:k&&!O,memoryPoint:m}},N=g=>{const{isUnlocked:m,canChallenge:k}=y(g);!m||!k||d(g)};return s.jsxs("div",{className:"min-h-screen relative overflow-hidden bg-gradient-to-b from-red-950 to-gray-900 p-4",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-de2fbe3bfd45475e.avif",alt:"",className:"absolute inset-0 h-full w-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-red-950/55"}),s.jsxs(Ue,{variant:"ghost",className:"absolute top-4 left-4 z-30 text-gray-400",onClick:()=>o({type:"SET_PHASE",payload:"microWorldMain"}),children:[s.jsx(Hp,{className:"w-5 h-5 mr-1"}),"返回主城"]}),s.jsxs("div",{className:"relative z-20 pb-32",children:[s.jsxs("div",{className:"text-center pt-16 pb-8",children:[s.jsx("h2",{className:"text-2xl font-bold text-red-400",children:"病变的乳腺组织"}),s.jsxs("p",{className:"text-sm text-red-300/70",children:["BOSS挑战区 · 第",c.playthrough,"周目"]})]}),s.jsx("div",{className:"max-w-lg mx-auto space-y-4",children:p.map(g=>{const m=Cu[g],k=y(g),O=k.isUnlocked&&k.canChallenge&&!k.isDefeated;return s.jsx(Vt,{className:`${k.isDefeated?"bg-green-100 border-green-300":"bg-red-100 border-red-300"} 
                ${O?"cursor-pointer hover:shadow-lg":"opacity-70"} 
                transition-all hover:scale-[1.01]`,onClick:()=>N(g),children:s.jsxs(Xt,{className:"p-4 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden",children:s.jsx("img",{src:ol(g,k.isDefeated?"虚弱":"狰狞"),alt:m.name,className:"h-full w-full object-cover"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold text-gray-800",children:m.name}),s.jsx("p",{className:"text-xs text-gray-600",children:m.description}),s.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["解锁条件: 通关记忆点",k.memoryPoint||"-"]})]})]}),s.jsx("div",{children:k.isDefeated?s.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full",children:[s.jsx(Ri,{className:"w-3 h-3"}),"已击败"]}):O?s.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs rounded-full",children:[s.jsx(ku,{className:"w-3 h-3"}),"可挑战"]}):k.isUnlocked?s.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white text-xs rounded-full",children:[s.jsx(as,{className:"w-3 h-3"}),"需通关记忆点"]}):s.jsxs("span",{className:"inline-flex items-center gap-1 px-3 py-1 bg-gray-500 text-white text-xs rounded-full",children:[s.jsx(as,{className:"w-3 h-3"}),"未解锁"]})})]})},g)})}),s.jsxs("div",{className:"max-w-lg mx-auto mt-8 p-4 bg-black/30 rounded-xl",children:[s.jsxs("div",{className:"flex justify-between items-center text-sm",children:[s.jsx("span",{className:"text-gray-400",children:"挑战进度"}),s.jsxs("span",{className:"text-red-400",children:[c.defeatedBosses.filter(g=>p.includes(g)).length," / ",p.length," 已击败"]})]}),s.jsx("div",{className:"mt-2 h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all",style:{width:`${c.defeatedBosses.filter(g=>p.includes(g)).length/p.length*100}%`}})})]}),s.jsx("div",{className:"max-w-lg mx-auto mt-4 p-4 bg-red-900/20 rounded-lg",children:s.jsxs("p",{className:"text-xs text-red-300",children:[s.jsx("strong",{children:"提示："}),"通关对应记忆点后即可挑战本周目的症状BOSS。 击败本周目全部3个BOSS即可进入下一阶段。"]})})]}),s.jsxs("div",{className:"absolute bottom-0 right-0 z-20 pointer-events-none flex flex-col items-end",children:[s.jsx(qi,{className:"mb-2 mr-6",bubbleClassName:"max-w-xs"}),s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1362a7dd5a2da203.avif",alt:"Stage Platform",className:"w-[380px] h-auto max-w-[88vw] object-contain md:w-[460px]",draggable:!1})]})]})}function sb(){const{state:c,dispatch:o,useSkillInBattle:d,defeatBoss:u}=Pe(),[p]=C.useState(c.currentBoss),[h,y]=C.useState(!1),[N,g]=C.useState(null),[m,k]=C.useState(0),[O,D]=C.useState({show:!1,text:"",type:null}),[q,Z]=C.useState(!1),[Q,I]=C.useState(!1),[K,ie]=C.useState(!1),[$,ue]=C.useState(!1),M=Cu[p],J=M.skills,X=c.currentPerspective==="child"?"懂事":"坚定",Y=ls[c.playthrough],ce=c.defeatedBosses.filter(V=>Y.includes(V)).length,he=c.equippedSkills.map(V=>Fp[V]).filter(Boolean),Te=V=>c.beSkillSources[V];C.useEffect(()=>{K||(ie(!0),setTimeout(()=>{const V=J[0];D({show:!0,text:`${M.name} 使用了 ${V?.name}！
${V?.feedback}`,type:"boss"}),Z(!1)},500))},[K,M,J]);const Ce=()=>{if(O.show)if(D({show:!1,text:"",type:null}),O.type==="boss")Z(!0);else if(O.type==="player")if((c.battleState?.usedSkills.length||0)>=4)$||(ue(!0),u(p)),g("win"),y(!0);else{const oe=m+1;k(oe),setTimeout(()=>{const S=J[oe];D({show:!0,text:`${M.name} 使用了 ${S?.name}！
${S?.feedback}`,type:"boss"}),Z(!1)},300)}else O.type==="negative"&&I(!0)},ct=()=>{I(!1),o({type:"SET_PHASE",payload:"beEnding"})},Ie=V=>{if(!(c.battleState?.usedSkills.includes(V.id)||N||!q))if(Z(!1),V.type==="negative"){D({show:!0,text:`你使用了负面技能【${V.name}】！
${V.effect}

眼前一黑，你感到一阵眩晕...`,type:"negative"});const oe=Te(V.id);d(V.id,!0,oe)}else D({show:!0,text:`你使用了【${V.name}】！
${V.effect}

${V.description}`,type:"player"}),d(V.id,!1)},Le=()=>{confirm("是否放弃战斗？")&&o({type:"SET_PHASE",payload:"bossEntry"})},A=()=>{N==="win"&&(ce>=Y.length?c.playthrough===1?o({type:"SET_PHASE",payload:"heEnding"}):(o({type:"COMPLETE_PERSPECTIVE"}),o({type:"SET_PHASE",payload:"specialEnding"})):o({type:"SET_PHASE",payload:"bossEntry"}))},L=c.battleState?Math.max(0,100-c.battleState.usedSkills.length*25):100,R=()=>{switch(O.type){case"player":return"bg-blue-900/90 border-blue-500 text-blue-100";case"boss":return"bg-red-900/90 border-red-500 text-red-100";case"negative":return"bg-red-950/95 border-red-700 text-red-200";default:return"bg-gray-900/90 border-gray-500"}};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 p-4 relative",onClick:O.show&&!Q?Ce:void 0,children:[s.jsx("img",{src:Ut("乳腺主城（黑雾笼罩）"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-25"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-950/60 via-red-950/40 to-gray-950/90"}),Q&&s.jsx("div",{className:"fixed inset-0 bg-black/90 z-[60] flex items-center justify-center",children:s.jsxs("div",{className:"text-center max-w-md p-8",children:[s.jsx("div",{className:"text-6xl mb-4 animate-pulse",children:"😵"}),s.jsx("p",{className:"text-red-500 text-2xl mb-2",children:"眼前一黑..."}),s.jsx("p",{className:"text-red-400 text-lg mb-8",children:"你感到一阵眩晕"}),s.jsx("p",{className:"text-gray-400 mb-8",children:"你使用了负面技能，黑雾强化了BOSS，乳腺主城受到了严重损伤..."}),s.jsx(Ue,{size:"lg",className:"bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg",onClick:ct,children:"继续"})]})}),s.jsxs("div",{className:"relative z-10 h-screen flex flex-col",children:[s.jsx("div",{className:"flex justify-end p-4",children:s.jsxs("div",{className:"bg-black/50 rounded-xl p-4 max-w-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-600 to-purple-800 rounded-full flex items-center justify-center animate-pulse overflow-hidden",children:s.jsx("img",{src:ol(p,L<50?"虚弱":"狰狞"),alt:M.name,className:"h-full w-full object-cover"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-red-400 font-bold",children:M.name}),s.jsx("p",{className:"text-xs text-gray-400",children:M.description})]})]}),s.jsxs("div",{className:"mt-2",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1",children:[s.jsx("span",{children:"HP"}),s.jsxs("span",{children:[L,"%"]})]}),s.jsx("div",{className:"h-3 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500",style:{width:`${L}%`}})})]})]})}),s.jsx("div",{className:"flex-1 flex items-end p-4",children:s.jsx("div",{className:"bg-black/50 rounded-xl p-4",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden",children:s.jsx("img",{src:Fe("主角",X,c.currentPerspective||"adult"),alt:"守护者",className:"h-full w-full object-cover"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-blue-400 font-bold",children:"守护者"}),s.jsx("p",{className:"text-xs text-gray-400",children:"健康状态"})]})]})})}),O.show?s.jsxs("div",{className:`mx-4 mb-4 rounded-2xl p-6 border-2 ${R()} backdrop-blur-sm animate-in slide-in-from-bottom duration-300`,onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:"flex items-start gap-4",children:[s.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${O.type==="player"?"bg-blue-500":O.type==="boss"?"bg-red-500":"bg-red-700"}`,children:s.jsx("span",{className:"text-2xl",children:O.type==="player"?"✨":O.type==="boss"?"👹":"⚠️"})}),s.jsxs("div",{className:"flex-1",children:[s.jsx("p",{className:`text-sm font-medium mb-2 ${O.type==="player"?"text-blue-300":O.type==="boss"?"text-red-300":"text-red-400"}`,children:O.type==="player"?"我方行动":O.type==="boss"?"BOSS攻击":"危险！使用了负面技能"}),s.jsx("p",{className:"text-white text-lg leading-relaxed whitespace-pre-line",children:O.text})]})]}),O.type!=="negative"&&s.jsx("div",{className:"mt-6 text-center",children:s.jsx("p",{className:"text-white/60 text-sm animate-pulse",children:"点击任意位置继续"})})]}):s.jsxs("div",{className:"bg-black/60 rounded-t-2xl p-4",children:[s.jsx("div",{className:"text-center mb-3",children:s.jsx("span",{className:`text-sm px-4 py-1 rounded-full ${q?"bg-blue-500/30 text-blue-300":"bg-red-500/30 text-red-300"}`,children:q?"◆ 你的回合":"◆ BOSS回合"})}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:he.map(V=>{const oe=c.battleState?.usedSkills.includes(V.id);return s.jsxs("button",{disabled:oe||N!==null||!q,className:`p-4 rounded-xl text-left transition-all ${oe?"bg-gray-700 opacity-50 cursor-not-allowed":V.type==="negative"?"bg-red-900/50 hover:bg-red-800/50 border border-red-700":"bg-blue-900/50 hover:bg-blue-800/50 border border-blue-700"} ${!q&&!oe?"opacity-50 cursor-not-allowed":""}`,onClick:()=>Ie(V),children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:`font-medium ${V.type==="negative"?"text-red-300":"text-blue-300"}`,children:V.name}),V.type==="negative"&&s.jsx("span",{className:"text-xs text-red-500",children:"⚠️"})]}),s.jsx("p",{className:"text-xs text-gray-400 mt-1",children:V.description})]},V.id)})}),s.jsx("div",{className:"flex justify-end",children:s.jsx(Ue,{variant:"ghost",size:"sm",className:"text-gray-400 hover:text-white",onClick:Le,disabled:N!==null,children:"放弃战斗"})})]})]}),h&&N==="win"&&s.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center z-50",children:s.jsxs("div",{className:"bg-gray-900 rounded-2xl p-8 max-w-md text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"战斗胜利！"}),s.jsxs("p",{className:"text-gray-300 mb-4",children:["你成功驱散了",M.name,"的黑雾！",s.jsx("br",{}),"乳腺主城的细胞们安全了。"]}),s.jsxs("p",{className:"text-gray-400 text-sm mb-4",children:["已击败BOSS: ",ce,"/",Y.length]}),s.jsx(Ue,{className:"bg-green-500 hover:bg-green-600",onClick:A,children:"继续冒险"})]})})]})}function ib(){const{state:c,dispatch:o}=Pe(),d=c.currentPerspective,u=Il[d].possessive,p=()=>{const y=c.lastUsedNegativeSkillSource||c.currentMemoryPoint;o({type:"SET_MEMORY_POINT",payload:y}),o({type:"SET_PHASE",payload:"visualNovel"})},h=()=>{const y=c.lastUsedNegativeSkillSource;return y?`记忆点${y}`:"当前记忆点"};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden",children:[s.jsx("img",{src:Ut("乳腺主城（黑雾笼罩）"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-25"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-950/90"}),s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.3)_0%,_transparent_70%)]"})}),s.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("h1",{className:"text-4xl font-bold text-gray-400 mb-2",children:"遗憾的结局"}),s.jsx("div",{className:"w-24 h-1 bg-gray-600 mx-auto rounded-full"})]}),s.jsxs("div",{className:"max-w-2xl w-full bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-700",children:[s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("img",{src:ol("breastLump","狰狞"),alt:"BOSS",className:"mx-auto mb-4 max-h-36 object-contain drop-shadow-lg"}),s.jsx("p",{className:"text-gray-400 text-sm",children:"医院诊室冷调场景，医生手持报告单轻声讲解"})]}),s.jsxs("div",{className:"space-y-4 text-gray-300 leading-relaxed",children:[s.jsx("p",{children:"微观乳腺世界的冒险，终究以遗憾收场。"}),s.jsx("p",{children:"一次任性的选择，一次对健康的忽视，让负面的力量不断蔓延， 黑雾吞噬了家园，BOSS的伤害终是刻进了现实。"}),s.jsx("p",{children:"当「恶性」二字出现在检查报告单上，才懂那些被忽略的小习惯， 早已成为压垮健康的最后一根稻草。"}),s.jsxs("p",{className:"text-gray-400 italic border-l-4 border-gray-600 pl-4 my-6",children:["但冒险从未真正结束，微观世界的大门仍为你敞开， 回到记忆的起点，修正每一个选择，重拾守护的力量， 你依然有机会改写结局，守护好",u,"乳腺健康。"]}),s.jsx("p",{className:"text-pink-400 font-medium text-center",children:"别放弃，从头再来，一切都还来得及。"})]})]}),s.jsxs("div",{className:"mt-8 text-center",children:[s.jsxs("p",{className:"text-gray-400 text-sm mb-4",children:["将返回",h(),"重新选择"]}),s.jsx(Ue,{size:"lg",className:"bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-xl text-lg",onClick:p,children:"重新游玩该记忆点"})]})]}),s.jsx("div",{className:"absolute bottom-8 left-8 opacity-20",children:s.jsx("div",{className:"w-12 h-12 border-2 border-gray-500 rounded-full"})}),s.jsx("div",{className:"absolute top-12 right-12 opacity-10",children:s.jsx("div",{className:"w-8 h-8 border-2 border-gray-500 rounded-full"})})]})}function cb(){const{state:c,dispatch:o}=Pe(),d=c.currentPerspective,u=Il[d].possessive,p=Fe("派蒙","欣慰"),h=()=>{o({type:"SET_PHASE",payload:"week2Transition"})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden",children:[s.jsx("img",{src:Ut("正规医院"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-30"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-pink-50/75 to-pink-100/90"}),s.jsx("div",{className:"absolute inset-0 opacity-20",children:s.jsx("div",{className:"w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.4)_0%,_transparent_70%)]"})}),s.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col items-center justify-center p-6",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("h1",{className:"text-4xl font-bold text-pink-600 mb-2",children:"一周目通关！"}),s.jsx("div",{className:"w-24 h-1 bg-pink-400 mx-auto rounded-full"})]}),s.jsxs("div",{className:"max-w-2xl w-full bg-white/70 rounded-2xl p-8 backdrop-blur-sm border border-pink-200 shadow-lg",children:[s.jsxs("div",{className:"text-center mb-6",children:[p&&s.jsx("img",{src:p,alt:"派蒙",className:"mx-auto mb-4 max-h-36 object-contain drop-shadow-md"}),s.jsx("p",{className:"text-pink-500 text-sm",children:"医院诊室暖光场景，医生手持报告单微笑递出"})]}),s.jsxs("div",{className:"space-y-4 text-gray-700 leading-relaxed",children:[s.jsxs("p",{children:["穿越微观乳腺世界的冒险落幕了，你用坚定的选择改掉了伤害乳腺的坏习惯， 成功驱散了所有黑雾，守护了",u,"乳腺家园。"]}),s.jsx("p",{children:"当现实的检查报告单递到手中，「良性」二字是最好的答案 —— 微观世界的健康，终是照进了现实。"}),s.jsx("p",{className:"text-pink-600 italic border-l-4 border-pink-400 pl-4 my-6",children:"往后的日子里，愿你始终保持健康的生活习惯，好好爱自己、爱身边人， 让这份守护延续，岁岁安康，万事顺遂。"}),s.jsx("p",{className:"text-pink-500 text-center",children:"乳腺主城的派蒙和所有细胞，会一直为你祝福，为你守护～"})]})]}),s.jsx("div",{className:"mt-8",children:s.jsx(Ue,{size:"lg",className:"bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-xl text-lg",onClick:h,children:"继续探索二周目"})})]}),s.jsx("div",{className:"absolute bottom-8 left-8 opacity-30",children:s.jsx("div",{className:"w-12 h-12 bg-pink-300 rounded-full animate-pulse"})}),s.jsx("div",{className:"absolute top-12 right-12 opacity-20",children:s.jsx("div",{className:"w-8 h-8 bg-pink-400 rounded-full animate-bounce"})})]})}function rb(){const{startWeek2:c,dispatch:o}=Pe(),d=Fe("派蒙","期待"),u=()=>{c(),o({type:"SET_PHASE",payload:"microWorldMain"})};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col items-center justify-center p-6 relative overflow-hidden",children:[s.jsx("img",{src:Ut("大脑记忆中枢"),alt:"",className:"absolute inset-0 h-full w-full object-cover opacity-30"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-amber-50/75 to-amber-100/90"}),s.jsxs("div",{className:"absolute inset-0 opacity-20",children:[s.jsx("div",{className:"absolute top-1/3 left-1/3 w-48 h-48 bg-amber-300 rounded-full blur-3xl animate-pulse"}),s.jsx("div",{className:"absolute bottom-1/3 right-1/3 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse"})]}),s.jsxs("div",{className:"relative z-10 max-w-lg w-full text-center",children:[d&&s.jsx("img",{src:d,alt:"派蒙",className:"mx-auto mb-6 max-h-40 object-contain drop-shadow-md"}),s.jsx("h2",{className:"text-3xl font-bold text-amber-700 mb-6",children:"时光回溯能力觉醒"}),s.jsx("div",{className:"bg-white/70 rounded-2xl p-6 backdrop-blur-sm border border-amber-200 shadow-lg mb-8",children:s.jsx("p",{className:"text-lg text-amber-800 leading-relaxed",children:"还有未击败的病症BOSS，神经细胞因心情愉悦激活时光回溯能力，记忆点锁定状态重置，即刻开启二次守护之旅！"})}),s.jsxs("div",{className:"bg-amber-50 rounded-xl p-4 mb-8 border border-amber-200",children:[s.jsx("h4",{className:"font-bold text-amber-700 mb-3",children:"二周目特性"}),s.jsxs("ul",{className:"space-y-2 text-sm text-amber-600 text-left",children:[s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-amber-400 rounded-full"}),"记忆点全部解锁，可无限重玩"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-amber-400 rounded-full"}),"新增回退按钮，可返回上一句剧情"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-amber-400 rounded-full"}),"挑战3个全新BOSS"]}),s.jsxs("li",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-amber-400 rounded-full"}),"解锁专属治愈结局"]})]})]}),s.jsx(Ue,{size:"lg",className:"bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 rounded-xl text-xl",onClick:u,children:"继续探索"})]})]})}function ub(){const{state:c,dispatch:o}=Pe(),[d,u]=C.useState(!1),[p,h]=C.useState(!1),y=c.currentPerspective,N=[{speaker:"旁白",text:'老家客厅，夕阳斜照。老人刚挂完和女儿的视频电话，手里摩挲着体检单上"良性"两个字，眼眶微红。'},{speaker:"旁白",text:'客厅的木质五斗柜上，摆着一排老物件：女儿小时候抱到掉毛的布娃娃"小花"、1998年拍的全家福相框、儿子儿时玩的铁皮小汽车。'},{speaker:"旁白",text:"一缕细碎的暖金色星光从窗外飘进来——是乳腺主城的健康星光，轻轻落在五斗柜上，顺着相框边缘滑到布娃娃小花身上。"},{text:"小花的布制小眼睛，竟悄悄眨了一下。"},{speaker:"旁白",text:'深夜，老人卧室。老人睡得浅，想伸手摸床头柜的水杯，刚抬胳膊，就听到轻轻的"哒哒"声。'},{speaker:"旁白",text:"是铁皮小汽车从五斗柜滑下来，顺着床沿慢慢滚到床头柜边，把水杯推到老人手边。"},{speaker:"旁白",text:"布娃娃小花从枕头边坐起来，布制的小手拿着老人的降压药，轻轻放在水杯旁。"},{speaker:"老人",text:"是你们啊……我的小宝贝们，来陪奶奶了。"},{speaker:"旁白",text:"三天后，女儿推开家门，第一眼就看到客厅的五斗柜——布娃娃小花坐在相框上，两只小手扒着相框边缘，像在跟她打招呼。"},{speaker:"旁白",text:"铁皮小汽车停在相框前，车头对着门口，像在等她回家。"},{speaker:"女儿",text:"妈，对不起，以前总让你一个人……以后我调回老家，天天陪着你。"},{speaker:"旁白",text:'慢慢的，小区里的老人们都知道了老人的"神奇老物件"，每天都有人来跟小花"问健康"。'},{speaker:"旁白",text:"小花指一指青菜，就是让多吃蔬菜；铁皮小汽车转一圈，就是让多散步。"},{speaker:"旁白",text:'这些老物件，成了社区的"健康小信使"，而老人，成了社区的健康宣传员。'},{speaker:"旁白",text:"傍晚，老家小院，夕阳把天空染成暖金色。老人坐在藤椅上，女儿给她剥橘子，布娃娃小花靠在老人腿上，铁皮小汽车在脚边绕圈。"},{speaker:"老人",text:"谢谢你们啊，小宝贝们。"},{speaker:"旁白",text:'小花的小脑袋蹭了蹭老人的脸，星光落在老人的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟老人说："奶奶，要一直健健康康的呀～"'}],g=[{speaker:"旁白",text:"医院乳腺科病房，清晨的阳光斜斜洒在白色病床上。小女孩猛地睁开眼，额头还带着一点薄汗。"},{speaker:"旁白",text:"梦里的画面还清晰着：乳腺主城里粉色的小精灵围着她，一起打碎了黑乎乎的硬块BOSS。"},{speaker:"旁白",text:"她扑到妈妈的病床边，妈妈刚做完良性乳腺结节切除手术，正靠在床头看着她，眼里带着温柔的笑意。"},{speaker:"小女孩",text:"妈妈！我梦见我去了你身体里的小城堡，好多粉色小精灵和我一起，打跑了让你疼的怪物！你有没有感觉好一点？"},{speaker:"妈妈",text:"宝贝，妈妈也做了一模一样的梦。梦见我的小宝贝变成小战士，跟着亮晶晶的小精灵，把那些硬块都赶走了。"},{speaker:"旁白",text:"一缕细碎的暖粉色星光，从病房的窗户缝里飘进来，轻轻落在妈妈的胸口纱布上——那是乳腺主城里的小精灵，跟着母女共梦的纽带，从梦境飘到了现实。"},{speaker:"妈妈",text:"宝贝，妈妈胸口突然不疼了，暖暖的，像有小太阳贴在上面。"},{speaker:"小女孩",text:"妈妈！你看！小精灵真的来了！它们变成星光了！"},{speaker:"旁白",text:"接下来的几天，星光小精灵就一直守在病房里——小女孩给妈妈喂水，星光会绕着水杯转一圈；妈妈躺着无聊，小女孩给她唱儿歌，星光会跟着歌声的节奏飘。"},{speaker:"旁白",text:"星光在病房里摆成小星星、小花朵的样子，给妈妈带来欢乐。"},{speaker:"旁白",text:"小女孩回到学校，想起之前嘲笑过小雨（小雨的妈妈也有乳腺问题），主动找到小雨道歉。"},{speaker:"小女孩",text:"小雨，对不起，我之前不该嘲笑你。乳腺不舒服不是丢人的事，有好多粉色星光小精灵，会保护我们的妈妈。"},{speaker:"旁白",text:"小女孩把星光精灵和妈妈的故事，悄悄告诉了班里的同学们，大家都听得入了迷。"},{speaker:"旁白",text:'班里的孩子们自发成立了"妈妈守护小队"，每天提醒妈妈规律作息、少生气、定期体检。'},{speaker:"旁白",text:"傍晚的阳台，夕阳把天空染成暖橙色，妈妈坐在藤椅上，小女孩趴在她的腿上。无数缕粉色的星光小精灵，绕着母女俩慢悠悠地飘。"},{speaker:"妈妈",text:"谢谢我的小宝贝，谢谢星光小精灵。以后妈妈会一直健健康康的，陪着我的小宝贝长大。"},{speaker:"小女孩和妈妈",text:"我们一起，守护彼此，一直在一起～"}],m=[{speaker:"旁白",text:"医院乳腺科病房，白色床单被罩，阳光透过窗户洒在床头。主角从乳腺主城的梦境中醒来，胸口的闷痛已消失不见，取而代之的是淡淡的暖意。"},{speaker:"医生",text:"恭喜你，结节是良性的，以后保持健康习惯，定期复查就行。"},{speaker:"旁白",text:"一缕柔白星光从窗外飘进来，轻轻落在她的手背上。星光顺着手臂往上爬，落在她的胸口。"},{speaker:"旁白",text:'眼前突然闪过童年的画面：小时候，她摔倒哭着回家，妈妈也是这样轻轻揉着她的伤口，说"疼了就说，不用硬扛"。'},{speaker:"旁白",text:"星光映出童年的小院：小时候，她因为考试没考好，躲在院子里哭，妈妈走过来，轻轻擦去她的眼泪。"},{speaker:"妈妈（回忆）",text:"宝贝，努力就好，不用逼自己做第一名，你开心健康，比什么都重要。"},{speaker:"旁白",text:'她想起自己为了业绩熬夜、对着家人发脾气，不就是怕"不够好"吗？而妈妈从小教她的，从来都不是"必须优秀"，而是"好好爱自己"。'},{speaker:"旁白",text:"「回溯记忆点2：职场边界的建立」星光映出童年的餐桌。"},{speaker:"妈妈（回忆）",text:"宝贝，以后不管做什么工作，都要守住自己的底线，身体是自己的，不用为了讨好别人委屈自己。"},{speaker:"旁白",text:'她想起职场酒局上，自己一次次被迫拼酒的样子——妈妈早就教过她要守边界，是她自己为了"合群"，慢慢丢了底线。'},{speaker:"旁白",text:"「回溯记忆点3：理性养生的觉醒」星光映出童年的厨房。"},{speaker:"妈妈（回忆）",text:"宝贝，健康不是靠吃保健品，是靠好好吃饭、好好睡觉。"},{speaker:"旁白",text:'她想起自己跟风买的三无减肥药——妈妈早就教过她科学养生，是她自己被"快速变美"的噱头冲昏了头。'},{speaker:"旁白",text:"病房门被推开，妈妈提着保温桶走进来。主角扑进妈妈怀里，放声大哭。"},{speaker:"主角",text:"妈，对不起，我以后再也不熬夜、不喝酒、不乱吃保健品了，我要好好爱自己，不让你担心。"},{speaker:"妈妈",text:"傻孩子，知道错了就好，妈妈从来没指望你多优秀，只希望你健健康康、开开心心的。"},{speaker:"旁白",text:'出院后，主角回到职场，开始了一系列"小改变"：拒绝无意义的酒局、按时下班、每周健身三次、定期体检。'},{speaker:"旁白",text:"她把自己的经历写成一篇《乳腺健康日记》，发在公司内网，没想到引发了全公司的关注。"},{speaker:"旁白",text:'公司开始推行"健康工作制"：禁止强制加班、提供健身补贴、每年组织全员体检。'},{speaker:"旁白",text:"傍晚，主角站在公司楼下，夕阳把天空染成暖橙色。无数缕柔白的星光小精灵，绕着她慢悠悠地飘。"},{speaker:"主角",text:"谢谢星光小精灵，谢谢妈妈，更谢谢那个终于学会爱自己的我。"},{speaker:"旁白",text:'星光落在她的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟她说："你终于学会爱自己了，以后也要一直健健康康的呀～"'}],O=(()=>{switch(y){case"child":return g;case"adult":return m;case"elder":return N;default:return N}})(),D=Yi(O,()=>{}),q=D.current,Z=D.isLast,Q=()=>{h(!0)},I=()=>{o({type:"SET_PHASE",payload:"promotionVideo"})},K=()=>{switch(y){case"child":return"from-pink-900/80 to-pink-950";case"adult":return"from-blue-900/80 to-blue-950";case"elder":return"from-amber-900/80 to-amber-950";default:return"from-amber-900/80 to-amber-950"}},ie=$=>$?$==="老人"?"👵":$==="女儿"?"👩":$==="小女孩"?"👧":$==="妈妈"?"👩":$==="小女孩和妈妈"?"👩‍👧":$==="主角"?"👩‍💼":$==="医生"?"👨‍⚕️":$==="妈妈（回忆）"?"👩‍🦳":$==="旁白"?"📖":"👤":null;return p?s.jsxs("div",{className:"min-h-screen bg-white p-6 flex flex-col",children:[s.jsxs("div",{className:"text-center pt-8 pb-8",children:[s.jsx("h1",{className:"text-3xl font-bold text-red-600",children:"乳腺健康科普核心数据"}),s.jsx("p",{className:"text-gray-500 mt-2",children:"了解三阴性乳腺癌，守护女性健康"})]}),s.jsxs("div",{className:"flex-1 max-w-4xl mx-auto w-full space-y-6 pb-24",children:[s.jsxs("div",{className:"bg-red-50 rounded-xl p-6 border border-red-200",children:[s.jsxs("h2",{className:"text-xl font-bold text-red-700 mb-4 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🔬"}),"什么是三阴性乳腺癌？"]}),s.jsxs("p",{className:"text-gray-700 leading-relaxed",children:["三阴性乳腺癌（Triple-Negative Breast Cancer, TNBC）是指雌激素受体（ER）、孕激素受体（PR）和人表皮生长因子受体2（HER2） 均为阴性的乳腺癌类型，约占所有乳腺癌的",s.jsx("span",{className:"font-bold text-red-600",children:"15%-20%"}),"。"]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[s.jsxs("div",{className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[s.jsx("div",{className:"text-4xl font-bold text-orange-600",children:"15-20%"}),s.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"占乳腺癌比例"})]}),s.jsxs("div",{className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[s.jsx("div",{className:"text-4xl font-bold text-orange-600",children:"40-50岁"}),s.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"高发年龄段"})]}),s.jsxs("div",{className:"bg-orange-50 rounded-xl p-5 border border-orange-200 text-center",children:[s.jsx("div",{className:"text-4xl font-bold text-orange-600",children:"3-5年"}),s.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"复发高峰期"})]})]}),s.jsxs("div",{className:"bg-yellow-50 rounded-xl p-6 border border-yellow-200",children:[s.jsxs("h2",{className:"text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"⚠️"}),"疾病特点与风险"]}),s.jsxs("ul",{className:"space-y-3 text-gray-700",children:[s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-yellow-600 mt-1",children:"•"}),s.jsxs("span",{children:[s.jsx("strong",{children:"侵袭性强："}),"肿瘤细胞分化差、增殖快，易发生远处转移"]})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-yellow-600 mt-1",children:"•"}),s.jsxs("span",{children:[s.jsx("strong",{children:"预后较差："}),"5年生存率约77%，低于其他类型乳腺癌"]})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-yellow-600 mt-1",children:"•"}),s.jsxs("span",{children:[s.jsx("strong",{children:"治疗选择有限："}),"缺乏内分泌治疗和靶向治疗靶点"]})]}),s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"text-yellow-600 mt-1",children:"•"}),s.jsxs("span",{children:[s.jsx("strong",{children:"复发风险高："}),"术后3-5年为复发高峰期"]})]})]})]}),s.jsxs("div",{className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[s.jsxs("h2",{className:"text-xl font-bold text-green-700 mb-4 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🔍"}),"早期筛查建议"]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{className:"bg-white rounded-lg p-4",children:[s.jsx("h3",{className:"font-bold text-green-700 mb-2",children:"20-39岁"}),s.jsx("p",{className:"text-sm text-gray-600",children:"每3年进行一次乳腺临床检查"})]}),s.jsxs("div",{className:"bg-white rounded-lg p-4",children:[s.jsx("h3",{className:"font-bold text-green-700 mb-2",children:"40岁以上"}),s.jsx("p",{className:"text-sm text-gray-600",children:"每年进行乳腺X线检查和临床检查"})]})]})]}),s.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[s.jsxs("h2",{className:"text-xl font-bold text-blue-700 mb-4 flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"💪"}),"预防措施"]}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl mb-2",children:"😴"}),s.jsx("div",{className:"text-sm text-gray-700",children:"规律作息"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl mb-2",children:"🥗"}),s.jsx("div",{className:"text-sm text-gray-700",children:"健康饮食"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl mb-2",children:"🏃‍♀️"}),s.jsx("div",{className:"text-sm text-gray-700",children:"适量运动"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl mb-2",children:"😊"}),s.jsx("div",{className:"text-sm text-gray-700",children:"保持心情"})]})]})]}),s.jsx("div",{className:"text-center text-xs text-gray-400",children:"数据来源：中国抗癌协会乳腺癌诊治指南、美国癌症协会（ACS）"})]}),s.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t p-4",children:s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsx(Ue,{size:"lg",className:"w-full bg-red-500 hover:bg-red-600 text-white",onClick:I,children:"继续"})})})]}):s.jsxs("div",{className:`min-h-screen bg-gradient-to-b ${K()} relative overflow-hidden`,onClick:D.handleScreenClick,children:[s.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none",children:s.jsxs("div",{className:"text-9xl",children:[y==="child"&&"👩‍👧",y==="adult"&&"💼",y==="elder"&&"🏠"]})}),s.jsxs("div",{className:"absolute top-8 left-0 right-0 text-center z-10",children:[s.jsx("div",{className:"text-5xl mb-2",children:"🌟"}),s.jsx("h1",{className:"text-3xl font-bold text-white mb-1",children:"完美通关！"}),s.jsxs("p",{className:"text-white/70 text-sm",children:[y==="child"&&"幼年线专属结局",y==="adult"&&"青壮年线专属结局",y==="elder"&&"老年线专属结局"]})]}),s.jsx("div",{className:`${wu} z-10`}),s.jsx(rs,{className:D.hiddenUiClass,canBack:D.index>0,onBack:D.back,isAuto:D.isAuto,onToggleAuto:D.toggleAuto,onSkip:D.skip,onHide:D.hideUi,onShowLog:()=>D.setShowLog(!0),onSettings:()=>u(!0)}),s.jsx("div",{className:`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${D.hiddenUiClass}`,children:s.jsxs("div",{className:`${ea} p-5 md:p-6`,children:[s.jsx("div",{className:ta}),q?.speaker&&q.speaker!=="旁白"&&s.jsxs("div",{className:ss,children:[s.jsx("span",{className:Gi,children:ie(q.speaker)}),s.jsx("span",{children:q.speaker})]}),s.jsx("p",{className:`${is} ${q?.speaker==="旁白"?cs:""}`,children:D.displayed}),s.jsxs("div",{className:Au,children:[s.jsxs("span",{className:"text-xs font-medium text-[#8D6E63]",children:[D.index+1," / ",O.length]}),!Z&&s.jsxs("span",{className:_u,children:["点击继续",s.jsx("span",{className:na,children:"▼"})]})]})]})}),s.jsx(us,{open:D.showLog,onClose:()=>D.setShowLog(!1),entries:D.log}),Z&&s.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md",onClick:$=>$.stopPropagation(),children:s.jsxs("div",{className:"max-w-md w-full p-6 text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),s.jsx("h2",{className:"text-2xl font-bold text-stone-800 mb-2",children:"剧情体验完成！"}),s.jsx("p",{className:"text-stone-600 mb-6",children:"两次穿越微观乳腺世界的冒险，你用智慧和勇气守护了乳腺健康。"}),s.jsx("div",{className:"space-y-3",children:s.jsxs(Ue,{size:"lg",className:"w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]",onClick:Q,children:[s.jsx(qS,{className:"w-5 h-5 mr-2"}),"查看乳腺健康科普"]})})]})}),d&&s.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center z-50",onClick:$=>$.stopPropagation(),children:s.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-sm w-full",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"设置"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"文字速度"}),s.jsx("input",{type:"range",className:"w-full",min:"1",max:"5",defaultValue:"3"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-sm text-gray-600",children:"音量"}),s.jsx("input",{type:"range",className:"w-full",min:"0",max:"100",defaultValue:"50"})]})]}),s.jsx(Ue,{className:"w-full mt-4",onClick:()=>u(!1),children:"关闭"})]})})]})}const pp={cellRepair:"细胞修复术",hormoneBalance:"激素平衡",immuneBoost:"免疫强化",detox:"毒素净化",accompanyCare:"陪伴关怀",willfulClingy:"任性粘人",reasonableSchedule:"合理安排",stubbornStudy:"固执熬夜",warmComfort:"温暖安慰",ignorantMockery:"无知嘲笑",refuseAlcohol:"拒绝酒精",forcedDrinking:"被迫饮酒",adequateSleep:"充足睡眠",stayUpLate:"熬夜透支",rationalMedication:"理性用药",abuseDrugs:"滥用药物",timelyMedical:"及时就医",hideIllness:"隐瞒病情",regularCheckup:"定期体检",delayCheckup:"拖延体检",scientificTreatment:"科学治疗",folkRemedy:"迷信偏方"},hp={cellRepair:"修复受损的乳腺细胞，恢复组织健康",hormoneBalance:"调节内分泌，维持激素稳定",immuneBoost:"增强免疫系统，提高抵抗力",detox:"清除体内毒素，净化乳腺环境",accompanyCare:"多陪伴妈妈，让她好好休息",willfulClingy:"缠着妈妈熬夜陪伴",reasonableSchedule:"合理规划时间，不让妈妈牵挂",stubbornStudy:"偷偷熬夜学习不让妈妈休息",warmComfort:"关心妈妈情绪，给她温暖支持",ignorantMockery:"随口说出伤害妈妈的话",refuseAlcohol:"远离酒精刺激，保护乳腺健康",forcedDrinking:"为了工作不得不喝酒",adequateSleep:"保持规律作息，维持内分泌稳定",stayUpLate:"为了项目连续熬夜",rationalMedication:"拒绝三无产品，科学管理身材",abuseDrugs:"盲目服用三无减肥药",timelyMedical:"发现异常立即就医，早发现早治疗",hideIllness:"独自硬扛，不告诉子女",regularCheckup:"按时进行乳腺检查，防患于未然",delayCheckup:"把体检当成瞎折腾",scientificTreatment:"相信专业医生，坚持正规治疗",folkRemedy:"听信民间偏方，延误正规治疗"},ob={cellRepair:"修复乳腺细胞损伤",hormoneBalance:"平衡雌激素水平",immuneBoost:"提升免疫细胞活性",detox:"清除有害物质",accompanyCare:"缓解妈妈疲劳，驱散BOSS黑雾",willfulClingy:"让妈妈劳累，BOSS黑雾强化",reasonableSchedule:"让妈妈安心，BOSS无法靠近",stubbornStudy:"让妈妈牵挂，BOSS黑雾蔓延",warmComfort:"驱散妈妈心结，BOSS彻底消散",ignorantMockery:"让妈妈伤心，BOSS彻底觉醒",refuseAlcohol:"减少激素紊乱，BOSS无法成型",forcedDrinking:"刺激乳腺组织，BOSS黑雾扩散",adequateSleep:"平衡激素水平，BOSS虚弱消散",stayUpLate:"内分泌紊乱，BOSS黑雾笼罩",rationalMedication:"避免激素风暴，BOSS无法存在",abuseDrugs:"激素风暴，BOSS彻底觉醒",timelyMedical:"消除早期病灶，BOSS被成功清除",hideIllness:"加重病情，BOSS彻底觉醒",regularCheckup:"预防疾病发生，BOSS被成功驱散",delayCheckup:"错失早期发现机会，BOSS黑雾蔓延",scientificTreatment:"阻断病情恶化，BOSS被成功驱散",folkRemedy:"病情恶化，BOSS彻底觉醒"},Ti="rounded-2xl border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(139,100,140,0.10)] backdrop-blur-md";function db(){const{dispatch:c}=Pe(),[o,d]=C.useState("boss"),[u,p]=C.useState(null),[h,y]=C.useState(null),N=Object.values(Cu),g=Object.values(Fp);return s.jsxs("div",{className:"relative min-h-screen isolate p-4 md:p-6",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-17d4e78208d018f2.avif",alt:"",className:"absolute inset-0 h-full w-full object-cover -z-10"}),s.jsxs("button",{type:"button",className:"absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-[#9C4674] shadow-[0_4px_16px_rgba(139,100,140,0.12)] backdrop-blur-md transition-all hover:bg-white/80 active:scale-95",onClick:()=>c({type:"SET_PHASE",payload:"mainMenu"}),children:[s.jsx(zi,{className:"h-4 w-4"}),"返回"]}),s.jsxs("div",{className:"flex flex-col items-center gap-2 pt-14 pb-6 md:pt-16",children:[s.jsx("h2",{className:"font-serif text-3xl font-bold tracking-wide text-[#5A4868] md:text-4xl",children:"知识手册"}),s.jsxs("div",{className:"flex w-56 items-center gap-3",children:[s.jsx("span",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A2C8]/70"}),s.jsx(ul,{className:"h-3.5 w-3.5 text-[#C878A8]"}),s.jsx("span",{className:"h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A2C8]/70"})]}),s.jsx("p",{className:"text-sm text-[#857497]",children:"乳腺健康知识图鉴"})]}),s.jsxs("div",{className:"mx-auto mb-6 flex max-w-md gap-3",children:[s.jsxs("button",{className:`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${o==="boss"?"bg-[#9C4674] text-white shadow-[0_6px_18px_rgba(156,70,116,0.35)]":"border border-white/60 bg-white/55 text-[#5A4868] backdrop-blur-sm hover:bg-white/75"}`,onClick:()=>{d("boss"),y(null)},children:[s.jsx(mu,{className:"h-4 w-4"}),"BOSS图鉴"]}),s.jsxs("button",{className:`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${o==="skill"?"bg-[#9C4674] text-white shadow-[0_6px_18px_rgba(156,70,116,0.35)]":"border border-white/60 bg-white/55 text-[#5A4868] backdrop-blur-sm hover:bg-white/75"}`,onClick:()=>{d("skill"),p(null)},children:[s.jsx(ul,{className:"h-4 w-4"}),"技能图鉴"]})]}),o==="boss"&&s.jsx("div",{className:"mx-auto max-w-4xl",children:u?s.jsxs("div",{className:`${Ti} p-6 md:p-8`,children:[s.jsxs("button",{type:"button",className:"mb-6 flex items-center gap-1 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-sm font-medium text-[#5A4868] backdrop-blur-sm transition-all hover:bg-white/80 active:scale-95",onClick:()=>p(null),children:[s.jsx(zi,{className:"h-4 w-4"}),"返回列表"]}),(()=>{const m=N.find(k=>k.id===u);return m?s.jsxs("div",{children:[s.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[s.jsx("div",{className:"flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E8A4C8]/30 ring-1 ring-white/60",children:s.jsx(mu,{className:"h-8 w-8 text-[#96497E]"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-serif text-2xl font-bold text-[#5A4868]",children:m.name}),s.jsx("span",{className:`mt-1 inline-block rounded-full px-3 py-0.5 text-xs ${m.week===1?"bg-[#C4B0E0]/35 text-[#6B5878]":"bg-[#E8A4C8]/40 text-[#96497E]"}`,children:m.week===1?"一周目BOSS":"二周目BOSS"})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"症状表现"}),s.jsx("ul",{className:"list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]",children:m.symptoms.map((k,O)=>s.jsx("li",{children:k},O))})]}),s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"发病机制"}),s.jsx("p",{className:"leading-relaxed text-[#6B5878]",children:m.science.mechanism})]}),s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"早期征兆"}),s.jsx("ul",{className:"list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]",children:m.science.earlySigns.map((k,O)=>s.jsx("li",{children:k},O))})]}),s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"医疗建议"}),s.jsx("p",{className:"leading-relaxed text-[#6B5878]",children:m.science.medicalAdvice})]}),s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-3 text-sm font-semibold text-[#9C4674]",children:"BOSS技能"}),s.jsx("div",{className:"space-y-3",children:m.skills.map((k,O)=>s.jsxs("div",{className:"rounded-xl bg-[#F7EDF4]/80 p-3.5",children:[s.jsx("p",{className:"font-medium text-[#5A4868]",children:k.name}),s.jsx("p",{className:"mt-0.5 text-sm text-[#6B5878]",children:k.description}),s.jsx("p",{className:"mt-1 text-xs text-[#857497]",children:k.feedback})]},O))})]})]})]}):null})()]}):s.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:N.map(m=>s.jsxs("div",{className:`${Ti} group cursor-pointer p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(139,100,140,0.20)]`,onClick:()=>p(m.id),children:[s.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[s.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8A4C8]/30 ring-1 ring-white/60",children:s.jsx(mu,{className:"h-6 w-6 text-[#96497E]"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h3",{className:"truncate font-serif text-lg font-bold text-[#5A4868]",children:m.name}),s.jsx("span",{className:`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs ${m.week===1?"bg-[#C4B0E0]/35 text-[#6B5878]":"bg-[#E8A4C8]/40 text-[#96497E]"}`,children:m.week===1?"一周目":"二周目"})]})]}),s.jsx("p",{className:"line-clamp-2 text-sm leading-relaxed text-[#6B5878]",children:m.description})]},m.id))})}),o==="skill"&&s.jsx("div",{className:"mx-auto max-w-4xl",children:h?s.jsxs("div",{className:`${Ti} p-6 md:p-8`,children:[s.jsxs("button",{type:"button",className:"mb-6 flex items-center gap-1 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-sm font-medium text-[#5A4868] backdrop-blur-sm transition-all hover:bg-white/80 active:scale-95",onClick:()=>y(null),children:[s.jsx(zi,{className:"h-4 w-4"}),"返回列表"]}),(()=>{const m=g.find(k=>k.id===h);return m?s.jsxs("div",{children:[s.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[s.jsx("div",{className:`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-1 ring-white/60 ${m.type==="positive"?"bg-[#7A9AE8]/20":"bg-[#A878C8]/20"}`,children:m.type==="positive"?s.jsx(ul,{className:"h-8 w-8 text-[#4A68B0]"}):s.jsx(Bu,{className:"h-8 w-8 text-[#7A5298]"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-serif text-2xl font-bold text-[#5A4868]",children:pp[m.id]||m.name}),s.jsx("span",{className:`mt-1 inline-block rounded-full px-3 py-0.5 text-xs ${m.type==="positive"?"bg-[#7A9AE8]/20 text-[#4A68B0]":"bg-[#A878C8]/20 text-[#7A5298]"}`,children:m.type==="positive"?"正向技能":"负面技能"})]})]}),s.jsxs("div",{className:"space-y-5",children:[s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"技能描述"}),s.jsx("p",{className:"leading-relaxed text-[#6B5878]",children:hp[m.id]||m.description})]}),s.jsxs("div",{className:"border-t border-[#C8A2C8]/25 pt-4",children:[s.jsx("h4",{className:"mb-2 text-sm font-semibold text-[#9C4674]",children:"技能效果"}),s.jsx("p",{className:"leading-relaxed text-[#6B5878]",children:ob[m.id]||m.effect})]})]})]}):null})()]}):s.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:g.map(m=>s.jsxs("div",{className:`${Ti} cursor-pointer p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(139,100,140,0.20)]`,onClick:()=>y(m.id),children:[s.jsxs("div",{className:"mb-3 flex items-center gap-3",children:[s.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-white/60 ${m.type==="positive"?"bg-[#7A9AE8]/20":"bg-[#A878C8]/20"}`,children:m.type==="positive"?s.jsx(ul,{className:"h-6 w-6 text-[#4A68B0]"}):s.jsx(Bu,{className:"h-6 w-6 text-[#7A5298]"})}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("h3",{className:"truncate font-serif text-lg font-bold text-[#5A4868]",children:pp[m.id]||m.name}),s.jsx("span",{className:`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs ${m.type==="positive"?"bg-[#7A9AE8]/20 text-[#4A68B0]":"bg-[#A878C8]/20 text-[#7A5298]"}`,children:m.type==="positive"?"正向技能":"负面技能"})]})]}),s.jsx("p",{className:"text-sm leading-relaxed text-[#6B5878]",children:hp[m.id]||m.description})]},m.id))})})]})}function fb(){const{dispatch:c}=Pe(),o=[{bg:"碎片化记忆中枢",speaker:"旁白",text:"熟悉的神经元光晕在四周缓缓漂浮，记忆的余温还未完全散去。"},{speaker:"派蒙",state:"认真",text:"你刚刚走完了这一段人生旅程，完成了属于这个阶段的守护。"},{speaker:"派蒙",state:"温柔",text:"其实，关于乳腺健康的考验，散落在人生的每一个时期。"},{speaker:"派蒙",text:"童年时对家人的牵挂，成年后对自己的关照，年老时对疾病的直面…… 它们都是守护的一部分。"},{speaker:"派蒙",text:"此刻你的记忆，正和另外两个人生阶段轻轻共振。"},{speaker:"派蒙",text:"而所有当下的守护，最终都指向同一个方向——那就是未来，更多的治疗可能。"},{speaker:"派蒙",text:"你看，这些正在闪光的，就是和此刻共振的、未来的记忆碎片。"},{speaker:"派蒙",text:"它们连在一起，就是研究者们为三阴性乳腺癌寻找答案的路径。"},{bg:"生信筛选研究像素背景图",speaker:"研究员A",text:"我们先通过大量文献挖掘与生物信息学筛选，锁定了三阴性乳腺癌细胞表面多种高表达、特异性较强的抗原表位。"},{speaker:"研究员A",text:"后续生信数据验证也证明，这类抗原能够顺利被人体免疫细胞识别、加工并呈递，是精准治疗的核心突破口。"},{bg:"环状 RNA 载体像素背景图",speaker:"研究员B",text:"找到靶点后，我们需要稳定可靠的递送载体，为此我们选择了环状 RNA 作为全新运载工具。"},{speaker:"研究员B",text:'我们摒弃传统单一靶点设计，搭建了可同时搭载多种抗原的 "即插即用" 模块化多靶点平台。'},{bg:"免疫通路像素背景图",speaker:"研究员C",text:"和线性 RNA 不同，环状 RNA 结构更稳定，能够持续在体内合成肿瘤抗原。"},{speaker:"研究员C",text:"稳定表达的抗原可以充分激活树突状细胞，进而唤醒杀伤性 T 细胞，诱发强效的抗肿瘤免疫应答。"},{bg:"多癌种拓展平台像素背景图",speaker:"研究员D",text:'这套 "即插即用" 模块化平台的价值，并不局限于三阴性乳腺癌。'},{speaker:"研究员D",text:"仅替换靶点模块，我们就能定制适配多种实体肿瘤的个性化疫苗，帮助更多患者远离肿瘤复发，重获生活的希望。"},{bg:"激活的碎片化记忆中枢",speaker:"派蒙",state:"雀跃",text:"哇塞！工程化的齿轮已经开始转动了！"},{speaker:"派蒙",state:"认真",text:"从靶点筛选、载体构建、免疫机制验证到广谱平台拓展，完整的工程研发闭环已经成型。"},{speaker:"派蒙",state:"温柔",text:"今天，你守护的是当下的健康。"},{speaker:"派蒙",text:"未来，我们希望能守护每一位患者，重新拥抱生活的机会。"},{speaker:"派蒙",state:"期待",text:"守护，永远从了解开始。"},{speaker:"派蒙",text:"如果可以的话，请在结束时填写问卷留下你的感受吧。"},{speaker:"派蒙",text:"你的每一份反馈，都会让这份守护变得更完整。"},{speaker:"派蒙",state:"欣慰",text:"点击「返回主界面」，回到最初的开始。"},{speaker:"派蒙",text:"也许下一次，我们还会在守护的旅途中再见。"}],d=Yi(o,()=>{}),u=d.current,p=d.isLast,h=D=>{let q="碎片化记忆中枢";for(let Z=0;Z<=D;Z++)o[Z].bg&&(q=o[Z].bg);return q},y=D=>{let q="认真";for(let Z=0;Z<=D;Z++)o[Z].state&&(q=o[Z].state);return q},N=Ut(h(d.index)),g=Fe("派蒙",y(d.index)),m=u?.speaker==="派蒙",k=()=>{c({type:"SET_PHASE",payload:"endingPage"})},O=D=>{if(D==="研究员A")return Fe("社区医生","专业");if(D==="研究员B")return Fe("药店店员","友善");if(D==="研究员C")return Fe("乳腺科医生（专家）","专业");if(D==="研究员D")return Fe("营养师","专业")};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-pink-900/80 to-pink-950 relative overflow-hidden",onClick:d.handleScreenClick,children:[N&&s.jsx("img",{src:N,alt:"",className:"absolute inset-0 h-full w-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/45 via-pink-950/10 to-black/35"}),m&&g&&s.jsx("img",{src:g,alt:"派蒙",className:"absolute bottom-24 right-2 z-10 h-[50%] max-h-[420px] object-contain drop-shadow-2xl md:right-6"}),s.jsxs("div",{className:"absolute top-8 left-0 right-0 text-center z-10",children:[s.jsx("div",{className:"text-4xl mb-2 drop-shadow-md",children:"🔬"}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]",children:"未来 · 治疗的可能"}),s.jsx("p",{className:"text-white/80 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]",children:"三阴性乳腺癌工程研发联动剧情"})]}),s.jsx(rs,{className:d.hiddenUiClass,extra:s.jsxs("button",{className:"flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-2.5 py-1 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all select-none hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none",onClick:D=>{D.stopPropagation(),k()},children:[s.jsx(Mp,{className:"h-3.5 w-3.5"}),"跳过科普"]}),canBack:d.index>0,onBack:d.back,isAuto:d.isAuto,onToggleAuto:d.toggleAuto,onSkip:d.skip,onHide:d.hideUi,onShowLog:()=>d.setShowLog(!0)}),s.jsx("div",{className:`absolute bottom-16 left-4 right-4 z-20 ${d.hiddenUiClass}`,children:s.jsxs("div",{className:"bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10",children:[u?.speaker&&s.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[s.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-lg bg-pink-400/30",children:u.speaker==="派蒙"&&g?s.jsx("img",{src:g,alt:"派蒙",className:"h-full w-full object-cover"}):O(u.speaker)?s.jsx("img",{src:O(u.speaker),alt:u.speaker,className:"h-full w-full object-cover"}):s.jsx("span",{children:"📖"})}),s.jsx("span",{className:"text-pink-300 font-medium",children:u.speaker})]}),s.jsx("p",{className:`text-white text-lg leading-relaxed ${u?.speaker==="旁白"?"text-gray-300":""}`,children:d.displayed}),s.jsxs("div",{className:"flex justify-between items-center mt-4 pt-3 border-t border-white/10",children:[s.jsxs("span",{className:"text-white/50 text-xs",children:[d.index+1," / ",o.length]}),!p&&s.jsx("span",{className:"text-white/50 text-xs animate-pulse",children:"点击继续 →"})]})]})}),s.jsx(us,{open:d.showLog,onClose:()=>d.setShowLog(!1),entries:d.log}),p&&s.jsx("div",{className:"absolute inset-0 bg-black/70 flex items-center justify-center z-40",onClick:D=>D.stopPropagation(),children:s.jsxs("div",{className:"max-w-md w-full p-6 text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🔬"}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"工程研发之旅结束"}),s.jsx("p",{className:"text-white/70 mb-6",children:"从靶点筛选到广谱平台，三阴性乳腺癌的治疗路径已在你眼前展开。"}),s.jsx("div",{className:"space-y-3",children:s.jsx(Ue,{size:"lg",className:"w-full bg-pink-500 hover:bg-pink-600 text-white",onClick:k,children:"进入结尾页"})})]})})]})}function mb(){const{dispatch:c}=Pe(),o=()=>{c({type:"COMPLETE_PROMOTION_AND_UNLOCK"})};return s.jsxs("div",{className:"min-h-screen relative overflow-hidden bg-black",children:[s.jsx("img",{src:"https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3245b6e388a3a048.avif",alt:"",className:"absolute inset-0 h-full w-full object-cover"}),s.jsx("button",{onClick:o,className:"absolute right-[3%] top-[8%] z-30 h-[24%] w-[16.5%] rounded-xl transition hover:bg-white/10 active:scale-95","aria-label":"返回首页",title:"返回首页"})]})}const pb=["https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc9077dbf6389410.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e8e7751527b1e320.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-88a1c210c220473e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-332ab15a0b610546.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2f9bd8242411076.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-412f3a7b8b24775d.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-047e67c9be1efcde.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed30c8f4302fa91a.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9d3e37ef1e6c3b30.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fcf3e5b58aeb3ce5.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5c4f8664a1c54ca.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b927d70cbba32aba.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6fbc1501d5ab275c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b431430bab60140.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-74104c96eb5cb995.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1d251cb2c515bb19.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-86e003dbc7e71a48.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f4119406020d66cd.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1533f0ae21cf7fde.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d648cfc06b123afb.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8792713b8bb4d74c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-10fb50c4535a5605.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ce91a8150b6aee2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5f6d12c8370c0111.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67c3a7f2747590a1.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a6a01fe0aa316f61.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1ada2d37a61820e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d625d7ceefbf2aea.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb764dc56227cb9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d946498aef50c20c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-257df97dd619fb0f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-df6a796e340e1f8f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5906d5be24ee758a.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-57c102f32f289e4c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f45398ae0ef9b7e7.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-37ed08d784a9721e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-776d4d18307889ec.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-76283d3dea7d4b0f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-24af81f51cdf9563.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1098c0cb94adc62.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-513cd0422c2cd7ad.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebab765466ad83e9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f389fbf6e6a6e55e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-59b91126a020c951.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-14522979c06b60c8.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-70e8d1bc6c1aeb8a.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-13923cf19c0c9c4b.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b4a0cd60215d9386.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ab70e0610e183b8.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b3b3b1d3e3ab3faa.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-eb097512eb1518e2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-49defde4be69e2b4.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fd837499afb179a7.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-81a7d25336d89b86.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-31706bf5d6583076.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cbd60ed9c8db9dd2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eaf2d5a4619f726.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1dd2b638c568c40b.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-878d31eb185b4a56.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75fd4d95accb0356.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab36ca8e501cdf4e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-23f6acc2255fdbcf.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e9151dc84a31a684.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3748ac9e82fa8eff.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-868d49516b57aae8.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-62655366ff6fceb7.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f68caa64596ca8c1.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6f125d789d735ef.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed632e4bf5e8c396.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-836b24a9358ee394.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7588b25a156888e0.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5467d6289edad5a.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-be646ea140412020.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7decf36a003b8ca3.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c0f5c636da1209c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-99be70d57cca4253.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a8d55f1b642610c8.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5da085f644ce2b3.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4d8df5ef1eb47283.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9223322784865f85.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64813de5038fa6d9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ad46082606151a5f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4ccde2f2d81cc09c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9387c4949776fbf9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8c3d3e3e04015ec9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebc388bc163d79ba.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-812e6836b7ef9dcd.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-995ef28eaf212680.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-15a293efb50caaae.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-77032cbe91e14b38.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-927830818ebd25ec.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7b0e65986d41fac.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1af45dc9d3ac1b07.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f2a9fe2f7d70e20c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5ee2ae82de57338.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3cfc41dad36b8979.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ec1eb2a2a58748c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-58a8a94ded629bde.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-efb3e5d87952f4f2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-514766616060b217.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1c6ff47aea8b76d6.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f741731ba9e7fd4e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-39899006093fcdf0.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3eb83ce65c99efa.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-87a78a6fd3915cfc.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc6bf73316efd4c7.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2fdb69c8ea39147c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75826a24895f9f29.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67d0c9360f6f5605.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ca285093db58783f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a41329458428c310.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ce1d885abcba8ad4.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3edc7ee9dc02db29.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dd5bfc96c4ba934f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-45710fa50b1ae7dc.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9eb3b4fd4578df4f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3067c7af3bc4879c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7109dffa3b1ae3b5.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c9e7fbceee8e81e2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d59356fa52676baa.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-84565938e126791e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64526baa4723e711.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab02ee09784ddc90.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8019bbe9966becac.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc14808f2f3ef297.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5b7c6fdf5fad0e9e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-297fc1025a328e31.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-bed21f5a0ef01527.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5bcb190fc6f3bec.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-194c173967057a2b.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f432d7283d569e04.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1f7e1d736c3f06ce.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3b026af7443238fa.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-708369a36bad567e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5cb85c40decc488e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ef7b571b0efdca2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2ab13e8a593eac8.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8af297d0665588bf.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3ceeac5f6d649527.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c887dd4577b09e0.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-434bb619e66a69c9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d792a22d27151718.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a430f89a8ff59a13.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-473bda5e4b004f41.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883732e8c72dedfb.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cb740afc662bc583.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f8744d5a7c3a8626.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883afbad87e62248.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1a24f9c59d4a0018.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-82fd993980e0290f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c5eb634862b1fe07.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc83f760eafb6b42.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e2e8ac5350b65d04.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d00a5925b7918c2c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9f0b19fb0cc9f960.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3a549d6cb5f1889.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-425fe5b22cfb2243.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6941a93e304d1d4.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7b3bda239c9c5da2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ff34e6102ea44186.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3106a1e4133d514b.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d748911d9095622c.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-711333d4ba556996.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-79c3c20642c0cbba.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6b02189d88b08cc2.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a653b84c58e06521.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-22dfa8ca0964136f.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a4cf97f5a2a770ba.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7f1491f0b3263f67.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-83ec1fa58f392e1e.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb8b1b33b04ee1d.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3526f88489aa29b9.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6c7319b0feb951d0.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7dab67333e0683a.avif","https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2e0f4755029434c7.avif"];function hb(){return s.jsx("div",{"aria-hidden":"true",className:"pointer-events-none fixed -left-[9999px] -top-[9999px] h-px w-px overflow-hidden opacity-0",children:pb.map(c=>s.jsx("img",{src:c,alt:"",loading:"eager"},c))})}const xb="breast-guardian-game";function yu(c,o={}){window.parent!==window&&window.parent.postMessage({source:xb,type:c,...o},window.location.origin)}function Sb(){const{state:c}=Pe(),o=C.useRef(null);return C.useEffect(()=>{yu("breast-guardian:ready");const d=u=>{u.key==="Escape"&&(u.preventDefault(),yu("breast-guardian:close"))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]),C.useEffect(()=>{["beEnding","heEnding","specialEnding"].includes(c.currentPhase)&&o.current!==c.currentPhase&&(o.current=c.currentPhase,yu("breast-guardian:complete",{stats:{perspective:c.currentPerspective??null,ending:c.currentPhase}}))},[c.currentPhase,c.currentPerspective]),null}function gb(){const{state:c}=Pe();switch(c.currentPhase){case"mainMenu":return s.jsx(Pm,{});case"perspectiveSelect":return s.jsx(bg,{});case"realityTrigger":return s.jsx(Dg,{});case"tutorial":return s.jsx(Rg,{});case"microWorldMain":return s.jsx(Gg,{});case"memoryCenter":return s.jsx(Xg,{});case"visualNovel":return s.jsx(Wg,{});case"skillReplace":return s.jsx(lb,{});case"bossEntry":return s.jsx(ab,{});case"bossBattle":return s.jsx(sb,{});case"beEnding":return s.jsx(ib,{});case"heEnding":return s.jsx(cb,{});case"week2Transition":return s.jsx(rb,{});case"specialEnding":return s.jsx(ub,{});case"knowledgeBook":return s.jsx(db,{});case"promotionVideo":return s.jsx(fb,{});case"endingPage":return s.jsx(mb,{});default:return s.jsx(Pm,{})}}function bb(){return s.jsxs(Dx,{children:[s.jsx(Sb,{}),s.jsx(hb,{}),s.jsx(gb,{})]})}Tx.createRoot(document.getElementById("root")).render(s.jsx(C.StrictMode,{children:s.jsx(bb,{})}));
