(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{F6xZ:function(e,t,n){"use strict";var o=n("tTTe"),r=n("Wq0v"),a=n("m+Pj"),s=n("q1tI"),i=n.n(s),u=i.a.createElement;t.a=function(e){var t=e.title,n=e.children;return u(i.a.Fragment,null,u(a.a,{title:t}),u(o.a,null,n),u(r.a,null))}},T1Xd:function(e,t,n){"use strict";n.d(t,"a",(function(){return Lo})),n.d(t,"b",(function(){return Do})),n.d(t,"c",(function(){return Uo})),n.d(t,"d",(function(){return Bo})),n.d(t,"e",(function(){return Co}));var o=n("q1tI"),r=n.n(o),a=n("i8i4"),s=n.n(a);var i=function(e,...t){0};var u=function(e,t,{error:n}={}){return null};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l{constructor(e){c(this,"key",void 0),this.key=e}}class d extends l{}class f extends l{}var p={AbstractRecoilValue:l,RecoilState:d,RecoilValueReadOnly:f,isRecoilValue:function(e){return e instanceof d||e instanceof f}},h=p.AbstractRecoilValue,v=p.RecoilState,S=p.RecoilValueReadOnly,g=p.isRecoilValue,m=Object.freeze({__proto__:null,AbstractRecoilValue:h,RecoilState:v,RecoilValueReadOnly:S,isRecoilValue:g});class y{}const w=new y;class b extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const T=new Map,A=new Map;class R extends Error{}var E={nodes:T,recoilValues:A,registerNode:function(e){if(T.has(e.key)){const t=`Duplicate atom key "${e.key}". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.`;u(t)}T.set(e.key,e);const t=null==e.set?new m.RecoilValueReadOnly(e.key):new m.RecoilState(e.key);return A.set(e.key,t),t},getNode:function(e){const t=T.get(e);if(null==t)throw new R(`Missing definition for RecoilValue: "${e}""`);return t},getNodeMaybe:function(e){return T.get(e)},NodeMissingError:R,DefaultValue:y,DEFAULT_VALUE:w,RecoilValueNotReady:b};var _={enqueueExecution:function(e,t){t()}};var V={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n},mapByDeletingMultipleFromMap:function(e,t){const n=new Map(e);return t.forEach(e=>n.delete(e)),n}};const{mapByDeletingFromMap:M,mapBySettingInMap:N,setByAddingToSet:k}=V,{getNode:L,getNodeMaybe:D}=E,B=Object.freeze(new Set);class U extends Error{}var C={getNodeLoadable:function(e,t,n){return L(n).get(e,t)},peekNodeLoadable:function(e,t,n){return L(n).peek(e,t)},setNodeValue:function(e,t,n,o){const r=L(n);if(null==r.set)throw new U("Attempt to set read-only RecoilValue: "+n);return r.set(e,t,o)},setUnvalidatedAtomValue:function(e,t,n){var o;const r=D(t);return null===r||void 0===r||null===(o=r.invalidate)||void 0===o||o.call(r),{...e,atomValues:M(e.atomValues,t),nonvalidatedAtoms:N(e.nonvalidatedAtoms,t,n),dirtyAtoms:k(e.dirtyAtoms,t)}},getDownstreamNodes:function(e,t,n){const o=new Set,r=Array.from(n),a=e.getGraph(t.version);for(let i=r.pop();i;i=r.pop()){var s;o.add(i);const e=null!==(s=a.nodeToNodeSubscriptions.get(i))&&void 0!==s?s:B;for(const t of e)o.has(t)||r.push(t)}return o}};var I=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n};var O=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};var F=function(e,t){if(null!=e)return e;throw new Error(null!==t&&void 0!==t?t:"Got unexpected null or undefined")};function P(e,t,n){const{nodeDeps:o,nodeToNodeSubscriptions:r}=t;e.forEach((e,t)=>{const a=o.get(t);if(a&&n&&a!==n.nodeDeps.get(t))return;o.set(t,new Set(e));if((null==a?e:I(e,a)).forEach(e=>{r.has(e)||r.set(e,new Set);F(r.get(e)).add(t)}),a){I(a,e).forEach(e=>{if(!r.has(e))return;const n=F(r.get(e));n.delete(t),0===n.size&&r.delete(e)})}})}var x={addToDependencyMap:function(e,t,n){n.has(e)||n.set(e,new Set),F(n.get(e)).add(t)},cloneGraph:function(e){return{nodeDeps:O(e.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:O(e.nodeToNodeSubscriptions,e=>new Set(e))}},graph:function(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}},mergeDepsIntoDependencyMap:function(e,t){e.forEach((e,n)=>{t.has(n)||t.set(n,new Set);const o=F(t.get(n));e.forEach(e=>o.add(e))})},saveDependencyMapToStore:function(e,t,n){var o,r,a,s;const i=t.getState();n!==i.currentTree.version&&n!==(null===(o=i.nextTree)||void 0===o?void 0:o.version)&&n!==(null===(r=i.previousTree)||void 0===r?void 0:r.version)&&u("Tried to save dependencies to a discarded tree");const c=t.getGraph(n);if(P(e,c),n===(null===(a=i.previousTree)||void 0===a?void 0:a.version)){P(e,t.getGraph(i.currentTree.version),c)}if(n===(null===(s=i.previousTree)||void 0===s?void 0:s.version)||n===i.currentTree.version){var l;const n=null===(l=i.nextTree)||void 0===l?void 0:l.version;if(void 0!==n){P(e,t.getGraph(n),c)}}}};var $={trace:function(e,t,n){return n()},wrap:function(e){return e}};var G=function(...e){const t=new Set;for(const n of e)for(const e of n)t.add(e);return t};const{mapByDeletingFromMap:W,mapByDeletingMultipleFromMap:z}=V,{getNodeLoadable:j,setNodeValue:q,setUnvalidatedAtomValue:J}=C,{saveDependencyMapToStore:K}=x,{DefaultValue:H,RecoilValueNotReady:X}=E,{AbstractRecoilValue:Z,RecoilState:Q,RecoilValueReadOnly:Y,isRecoilValue:ee}=m;function te(e,t){const n=O(e,e=>e);return t.forEach((e,t)=>{"hasValue"===e.state&&e.contents instanceof H?n.delete(t):n.set(t,e)}),n}function ne(e,t,n){const{key:o}=t;$.trace("set RecoilValue",o,()=>e.replaceState($.wrap(r=>{const a=function(e,{key:t},n){if("function"===typeof n){var o;const r=e.getState(),a=null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,s=j(e,a,t)[1];if("loading"===s.state)throw new X(t);if("hasError"===s.state)throw s.contents;return n(s.contents)}return n}(e,t,n),[s,i]=q(e,r,o,a),u=new Set(i.keys());return K(s,e,r.version),{...r,dirtyAtoms:G(r.dirtyAtoms,u),atomValues:te(r.atomValues,i),nonvalidatedAtoms:z(r.nonvalidatedAtoms,u)}})))}let oe=0;var re={RecoilValueReadOnly:Y,AbstractRecoilValue:Z,RecoilState:Q,getRecoilValueAsLoadable:function(e,{key:t},n=e.getState().currentTree){var o,r;const a=e.getState();n.version!==a.currentTree.version&&n.version!==(null===(o=a.nextTree)||void 0===o?void 0:o.version)&&n.version!==(null===(r=a.previousTree)||void 0===r?void 0:r.version)&&u("Tried to read from a discarded tree");const[s,i]=j(e,n,t);return K(s,e,n.version),i},setRecoilValue:ne,setRecoilValueLoadable:function(e,t,n){if(n instanceof H)return ne(e,t,n);const{key:o}=t;$.trace("set RecoilValue",o,()=>e.replaceState($.wrap(e=>{const t=new Set([o]);return{...e,dirtyAtoms:G(e.dirtyAtoms,t),atomValues:te(e.atomValues,new Map([[o,n]])),nonvalidatedAtoms:W(e.nonvalidatedAtoms,o)}})))},markRecoilValueModified:function(e,{key:t}){$.trace("mark RecoilValue modified",t,()=>e.replaceState($.wrap(e=>({...e,dirtyAtoms:G(e.dirtyAtoms,new Set([t]))}))))},setUnvalidatedRecoilValue:function(e,{key:t},n){$.trace("set unvalidated persisted atom",t,()=>e.replaceState($.wrap(e=>J(e,t,n))))},subscribeToRecoilValue:function(e,{key:t},n){const o=oe++,r=e.getState();return r.nodeToComponentSubscriptions.has(t)||r.nodeToComponentSubscriptions.set(t,new Map),F(r.nodeToComponentSubscriptions.get(t)).set(o,["TODO debug name",n]),{release:()=>{const n=e.getState(),r=n.nodeToComponentSubscriptions.get(t);void 0!==r&&r.has(o)?(r.delete(o),0===r.size&&n.nodeToComponentSubscriptions.delete(t)):u(`Subscription missing at release time for atom ${t}. This is a bug in Recoil.`)}}},isRecoilValue:ee,applyAtomValueWrites:te};var ae=function*(e){for(const t of e)for(const e of t)yield e};var se=function*(e,t){let n=0;for(const o of e)t(o,n++)&&(yield o)};const ie=new Map;function ue(e){var t;return null!==(t=ie.get(e))&&void 0!==t&&t}ue.setPass=e=>{ie.set(e,!0)},ue.setFail=e=>{ie.set(e,!1)};var ce=ue;var le=function(e,t){return function*(){let n=0;for(const o of e)yield t(o,n++)}()};const{graph:de}=x;let fe=0;const pe=()=>fe++;function he(){const e=pe();return{version:e,stateID:e,transactionMetadata:{},dirtyAtoms:new Set,atomValues:new Map,nonvalidatedAtoms:new Map}}var ve={makeEmptyTreeState:he,makeEmptyStoreState:function(){const e=he();return{currentTree:e,nextTree:null,previousTree:null,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:(new Map).set(e.version,de()),versionsUsedByComponent:new Map}},getNextTreeStateVersion:pe};const{getDownstreamNodes:Se,peekNodeLoadable:ge}=C,{graph:me}=x,{DEFAULT_VALUE:ye,recoilValues:we}=E,{getRecoilValueAsLoadable:be,setRecoilValue:Te}=re,{getNextTreeStateVersion:Ae,makeEmptyStoreState:Re}=ve;function Ee(e){return le(e,e=>F(we.get(e)))}class _e{constructor(e){c(this,"_store",void 0),c(this,"getLoadable",e=>be(this._store,e)),c(this,"getPromise",e=>ce("recoil_async_selector_refactor")?this.getLoadable(e).toPromise().then(({value:e})=>e):this.getLoadable(e).toPromise()),c(this,"getNodes_UNSTABLE",e=>{if(!0===(null===e||void 0===e?void 0:e.isModified)){if(!1===(null===e||void 0===e?void 0:e.isInitialized))return[];return Ee(this._store.getState().currentTree.dirtyAtoms)}const t=this._store.getState().knownAtoms,n=this._store.getState().knownSelectors;return null==(null===e||void 0===e?void 0:e.isInitialized)?we.values():!0===e.isInitialized?Ee(ae([this._store.getState().knownAtoms,this._store.getState().knownSelectors])):se(we.values(),({key:e})=>!t.has(e)&&!n.has(e))}),c(this,"getDeps_UNSTABLE",e=>{this.getLoadable(e);const t=this._store.getGraph(this._store.getState().currentTree.version).nodeDeps.get(e.key);return Ee(null!==t&&void 0!==t?t:[])}),c(this,"getSubscribers_UNSTABLE",({key:e})=>{const t=this._store.getState().currentTree;return{nodes:Ee(se(Se(this._store,t,new Set([e])),t=>t!==e))}}),c(this,"getInfo_UNSTABLE",e=>{var t;const{key:n}=e,o=this._store.getState().currentTree,r=this._store.getGraph(o.version);return{loadable:ge(this._store,o,n),isActive:this._store.getState().knownAtoms.has(n)||this._store.getState().knownSelectors.has(n),isSet:o.atomValues.has(n),isModified:o.dirtyAtoms.has(n),type:this._store.getState().knownAtoms.has(n)?"atom":this._store.getState().knownSelectors.has(n)?"selector":void 0,deps:Ee(null!==(t=r.nodeDeps.get(n))&&void 0!==t?t:[]),subscribers:this.getSubscribers_UNSTABLE(e)}}),c(this,"map",e=>{const t=new Ne(this);return e(t),Me(t.getStore_INTERNAL())}),c(this,"asyncMap",async e=>{const t=new Ne(this);return await e(t),Me(t.getStore_INTERNAL())}),this._store={getState:()=>e,replaceState:t=>{e.currentTree=t(e.currentTree)},getGraph:t=>{const n=e.graphsByVersion;if(n.has(t))return F(n.get(t));const o=me();return n.set(t,o),o},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw new Error("Cannot subscribe to Snapshots")}}}getStore_INTERNAL(){return this._store}getID(){return this.getID_INTERNAL()}getID_INTERNAL(){return this._store.getState().currentTree.stateID}}function Ve(e,t,n=!1){const o=e.getState(),r=n?Ae():t.version;return{currentTree:n?{version:r,stateID:r,transactionMetadata:{...t.transactionMetadata},dirtyAtoms:new Set(t.dirtyAtoms),atomValues:new Map(t.atomValues),nonvalidatedAtoms:new Map(t.nonvalidatedAtoms)}:t,nextTree:null,previousTree:null,knownAtoms:new Set(o.knownAtoms),knownSelectors:new Set(o.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:(new Map).set(r,e.getGraph(t.version)),versionsUsedByComponent:new Map}}function Me(e,t="current"){const n=e.getState(),o="current"===t?n.currentTree:F(n.previousTree);return new _e(Ve(e,o))}class Ne extends _e{constructor(e){super(Ve(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0)),c(this,"set",(e,t)=>{const n=this.getStore_INTERNAL();Te(n,e,t)}),c(this,"reset",e=>Te(this.getStore_INTERNAL(),e,ye))}}var ke={Snapshot:_e,MutableSnapshot:Ne,freshSnapshot:function(){return new _e(Re())},cloneSnapshot:Me},Le=ke.Snapshot,De=ke.MutableSnapshot,Be=ke.freshSnapshot,Ue=ke.cloneSnapshot,Ce=Object.freeze({__proto__:null,Snapshot:Le,MutableSnapshot:De,freshSnapshot:Be,cloneSnapshot:Ue});const{useContext:Ie,useEffect:Oe,useMemo:Fe,useRef:Pe,useState:xe}=r.a,{getDownstreamNodes:$e,setNodeValue:Ge,setUnvalidatedAtomValue:We}=C,{graph:ze,saveDependencyMapToStore:je}=x,{cloneGraph:qe}=x,{applyAtomValueWrites:Je}=re,{freshSnapshot:Ke}=Ce,{getNextTreeStateVersion:He,makeEmptyStoreState:Xe}=ve,{mapByDeletingMultipleFromMap:Ze}=V;function Qe(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const Ye=Object.freeze({getState:Qe,replaceState:Qe,getGraph:Qe,subscribeToTransactions:Qe,addTransactionMetadata:Qe});let et=!1;function tt(e){if(et)throw new Error("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");if(null===e.nextTree){const t=e.currentTree.version,n=He();e.nextTree={...e.currentTree,version:n,stateID:n,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(n,qe(F(e.graphsByVersion.get(t))))}}const nt=r.a.createContext({current:Ye}),ot=()=>Ie(nt),rt=r.a.createContext(null);function at(e){const t=e.getState(),n=t.currentTree,o=n.dirtyAtoms;if(o.size){for(const[n,s]of t.nodeTransactionSubscriptions)if(o.has(n))for(const[t,o]of s)o(e);for(const[n,o]of t.transactionSubscriptions)o(e);const r=$e(e,n,o);for(const e of r){const o=t.nodeToComponentSubscriptions.get(e);if(o)for(const[e,[t,r]]of o)r(n)}let a="[available in dev build]";0,t.suspendedComponentResolvers.forEach(e=>$.trace("value became available, waking components",a,e))}t.queuedComponentCallbacks_DEPRECATED.forEach(e=>e(n)),t.queuedComponentCallbacks_DEPRECATED.splice(0,t.queuedComponentCallbacks_DEPRECATED.length)}function st(e){const t=ot(),[n,o]=xe([]);return e.setNotifyBatcherOfChange(()=>o({})),Oe(()=>{_.enqueueExecution("Batcher",()=>{const e=t.current.getState(),{nextTree:n}=e;if(null===n)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,at(t.current);const o=F(e.previousTree).version;e.graphsByVersion.delete(o),e.previousTree=null})}),null}let it=0;var ut={useStoreRef:ot,useRecoilMutableSource:()=>Ie(rt),RecoilRoot:function({initializeState_DEPRECATED:e,initializeState:t,store_INTERNAL:n,children:o}){var a;let s;const i=Pe(null),u=null!==(a=r.a.createMutableSource)&&void 0!==a?a:r.a.unstable_createMutableSource,c=null!==n&&void 0!==n?n:{getState:()=>s.current,replaceState:e=>{const t=l.current.getState();tt(t);const n=F(t.nextTree);let o;try{et=!0,o=e(n)}finally{et=!1}o!==n&&(t.nextTree=o,F(i.current)())},getGraph:e=>{const t=s.current.graphsByVersion;if(t.has(e))return F(t.get(e));const n=ze();return t.set(e,n),n},subscribeToTransactions:(e,t)=>{if(null==t){const{transactionSubscriptions:t}=l.current.getState(),n=it++;return t.set(n,e),{release:()=>{t.delete(n)}}}{const{nodeTransactionSubscriptions:n}=l.current.getState();n.has(t)||n.set(t,new Map);const o=it++;return F(n.get(t)).set(o,e),{release:()=>{const e=n.get(t);e&&(e.delete(o),0===e.size&&n.delete(t))}}}},addTransactionMetadata:e=>{tt(l.current.getState());for(const t of Object.keys(e))F(l.current.getState().nextTree).transactionMetadata[t]=e[t]}},l=Pe(c);s=Pe(null!=e?function(e,t){const n=Xe();return t({set:(t,o)=>{const r=n.currentTree,[a,s]=Ge(e,r,t.key,o),i=new Set(s.keys());je(a,e,r.version);const u=Ze(r.nonvalidatedAtoms,i);n.currentTree={...r,dirtyAtoms:G(r.dirtyAtoms,i),atomValues:Je(r.atomValues,s),nonvalidatedAtoms:u}},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=We(n.currentTree,t,e)})}}),n}(c,e):null!=t?function(e){return Ke().map(e).getStore_INTERNAL().getState()}(t):Xe());const d=Fe(()=>u?u(s,()=>s.current.currentTree.version):null,[u,s]);return r.a.createElement(nt.Provider,{value:l},r.a.createElement(rt.Provider,{value:d},r.a.createElement(st,{setNotifyBatcherOfChange:function(e){i.current=e}}),o))},sendEndOfBatchNotifications_FOR_TESTING:at};var ct=function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n};var lt=function(e,t){const n=new Set;for(const o of e)t(o)&&n.add(o);return n};var dt=function(e,t){if(!e)throw new Error(t)};var ft,pt=function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t};const{useCallback:ht,useEffect:vt,useMemo:St,useRef:gt,useState:mt}=r.a,{DEFAULT_VALUE:yt,getNode:wt,nodes:bt}=E,{useRecoilMutableSource:Tt,useStoreRef:At}=ut,{isRecoilValue:Rt}=m,{AbstractRecoilValue:Et,getRecoilValueAsLoadable:_t,setRecoilValue:Vt,setRecoilValueLoadable:Mt,setUnvalidatedRecoilValue:Nt,subscribeToRecoilValue:kt}=re,{Snapshot:Lt,cloneSnapshot:Dt}=Ce,{setByAddingToSet:Bt}=V;function Ut(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state){throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)})}throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}const Ct=null!==(ft=r.a.useMutableSource)&&void 0!==ft?ft:r.a.unstable_useMutableSource;function It(e){return!Ct||"undefined"!==typeof window&&window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?function(e){const t=At(),[n,o]=mt([]);return vt(()=>{const n=t.current,r=kt(n,e,t=>{$.trace("RecoilValue subscription fired",e.key,()=>{o([])})});return $.trace("initial update on subscribing",e.key,()=>{n.getState().nextTree?n.getState().queuedComponentCallbacks_DEPRECATED.push($.wrap(()=>{o([])})):o([])}),()=>r.release(n)},[e,t]),_t(t.current,e)}(e):function(e){const t=At(),n=ht(()=>_t(t.current,e,t.current.getState().currentTree),[t,e]),o=ht((n,o)=>{const r=t.current,a=kt(r,e,()=>{$.trace("RecoilValue subscription fired",e.key,()=>{o()})});return()=>a.release(r)},[e,t]);return Ct(Tt(),n,o)}(e)}function Ot(e){const t=At();return Ut(It(e),e,t)}function Ft(e){const t=At();return ht(n=>{Vt(t.current,e,n)},[t,e])}function Pt(e){const t=At();vt(()=>t.current.subscribeToTransactions(e).release,[e,t])}function xt(e){const t=e.atomValues,n=O(ct(t,(e,t)=>{const n=wt(t).persistence_UNSTABLE;return null!=n&&"none"!==n.type&&"hasValue"===e.state}),e=>e.contents);return pt(e.nonvalidatedAtoms,n)}function $t(){const e=At();return ht(t=>{var n;const o=e.current.getState(),r=null!==(n=o.nextTree)&&void 0!==n?n:o.currentTree,a=t.getStore_INTERNAL().getState().currentTree;s.a.unstable_batchedUpdates(()=>{const n=new Set;for(const e of[r.atomValues.keys(),a.atomValues.keys()])for(const t of e){var o,s;(null===(o=r.atomValues.get(t))||void 0===o?void 0:o.contents)!==(null===(s=a.atomValues.get(t))||void 0===s?void 0:s.contents)&&wt(t).shouldRestoreFromSnapshots&&n.add(t)}n.forEach(t=>{Mt(e.current,new Et(t),a.atomValues.has(t)?F(a.atomValues.get(t)):yt)}),e.current.replaceState(e=>({...e,stateID:t.getID_INTERNAL()}))})},[e])}class Gt{}const Wt=new Gt;var zt={recoilComponentGetRecoilValueCount_FOR_TESTING:{current:0},useGotoRecoilSnapshot:$t,useRecoilCallback:function(e,t){const n=At(),o=$t();return ht((...t)=>{const r=Dt(n.current);function a(e,t){Vt(n.current,e,t)}function i(e){Vt(n.current,e,yt)}let u=Wt;return s.a.unstable_batchedUpdates(()=>{u=e({set:a,reset:i,snapshot:r,gotoSnapshot:o})(...t)}),u instanceof Gt&&dt(!1),u},null!=t?[...t,n]:void 0)},useRecoilInterface:function(){const e=At(),[t,n]=mt([]),o=gt(new Set);o.current=new Set;const r=gt(new Set),a=gt(new Map),s=ht(t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))},[e,a]);return vt(()=>{const t=e.current;function u(e,t){a.current.has(t)&&n([])}I(o.current,r.current).forEach(e=>{if(a.current.has(e))return void i(`Double subscription to RecoilValue "${e}"`);const n=kt(t,new Et(e),t=>{$.trace("RecoilValue subscription fired",e,()=>{u(0,e)})});a.current.set(e,n),$.trace("initial update on subscribing",e,()=>{t.getState().nextTree?t.getState().queuedComponentCallbacks_DEPRECATED.push($.wrap(()=>{u(t.getState(),e)})):u(t.getState(),e)})}),I(r.current,o.current).forEach(e=>{s(e)}),r.current=o.current}),vt(()=>{const e=a.current;return()=>e.forEach((e,t)=>s(t))},[s]),St(()=>{function t(t){return n=>{Vt(e.current,t,n)}}function n(t){return o.current.has(t.key)||(o.current=Bt(o.current,t.key)),_t(e.current,t)}function r(t){return Ut(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>Vt(e.current,t,yt)}}},[o,e])},useRecoilSnapshot:function(){const e=At(),[t,n]=mt(()=>Dt(e.current));return Pt(ht(e=>n(Dt(e)),[])),t},useRecoilState:function(e){return[Ot(e),Ft(e)]},useRecoilStateLoadable:function(e){return[It(e),Ft(e)]},useRecoilTransactionObserver:function(e){Pt(ht(t=>{e({snapshot:Dt(t,"current"),previousSnapshot:Dt(t,"previous")})},[e]))},useRecoilValue:Ot,useRecoilValueLoadable:It,useResetRecoilState:function(e){const t=At();return ht(()=>{Vt(t.current,e,yt)},[t,e])},useSetRecoilState:Ft,useSetUnvalidatedAtomValues:function(){const e=At();return(t,n={})=>{s.a.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>Nt(e.current,new Et(n),t))})}},useTransactionObservation_DEPRECATED:function(e){Pt(ht(t=>{let n=t.getState().previousTree;const o=t.getState().currentTree;n||(u("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"),n=t.getState().currentTree);const r=xt(o),a=xt(n),s=O(bt,e=>{var t,n,o,r;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.persistence_UNSTABLE)||void 0===n?void 0:n.type)&&void 0!==t?t:"none",backButton:null!==(o=null===(r=e.persistence_UNSTABLE)||void 0===r?void 0:r.backButton)&&void 0!==o&&o}}}),i=lt(o.dirtyAtoms,e=>r.has(e)||a.has(e));e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})},[e]))},useTransactionSubscription_DEPRECATED:Pt};const{useMemo:jt}=r.a,{RecoilRoot:qt,useStoreRef:Jt}=ut;var Kt=function(){const e=Jt().current;return jt(()=>function({children:t}){return r.a.createElement(qt,{store_INTERNAL:e},t)},[e])};var Ht=function(e){return!!e&&"function"===typeof e.then};const Xt={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return Ht(t)?Yt(t):Zt(t)}catch(t){return Ht(t)?Yt(t.next(()=>e(this.contents))):Qt(t)}if("loading"===this.state)return Yt(this.contents.then(e).catch(t=>{if(Ht(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function Zt(e){return Object.freeze({state:"hasValue",contents:e,...Xt})}function Qt(e){return Object.freeze({state:"hasError",contents:e,...Xt})}function Yt(e){return Object.freeze({state:"loading",contents:e,...Xt})}var en={loadableWithValue:Zt,loadableWithError:Qt,loadableWithPromise:Yt,loadableLoading:function(){return Yt(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?Zt(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?Qt(F(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):Yt(ce("recoil_async_selector_refactor")?Promise.all(e.map(e=>e.contents)).then(e=>({value:e})):Promise.all(e.map(e=>e.contents)))}};const tn=Symbol("ArrayKeyedMap"),nn=new Map;class on{constructor(e){if(this._base=new Map,e instanceof on)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:nn}),void 0===n?void 0:n.get(tn)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach(e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r}),r.set(tn,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(tn),this}entries(){const e=[];return function t(n,o){n.forEach((n,r)=>{r===tn?e.push([o,n]):t(n,o.concat(r))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var rn=on;var an=function(){return new rn};var sn={startPerfBlock:function(e){return()=>null}};const{loadableWithError:un,loadableWithPromise:cn,loadableWithValue:ln}=en,{getNodeLoadable:dn,peekNodeLoadable:fn,setNodeValue:pn}=C,{addToDependencyMap:hn,mergeDepsIntoDependencyMap:vn,saveDependencyMapToStore:Sn}=x,{DEFAULT_VALUE:gn,RecoilValueNotReady:mn,registerNode:yn}=E,{AbstractRecoilValue:wn}=m,{getRecoilValueAsLoadable:bn,isRecoilValue:Tn,setRecoilValueLoadable:An}=re,{startPerfBlock:Rn}=sn,En=Object.freeze(new Set);function _n(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=F(e.get(n));t.push(n),t.push(o.state),t.push(o.contents)}return t}const Vn=new Map;var Mn=function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!==o&&void 0!==o?o:an();function s(e){e.getState().knownSelectors.add(t)}function i(e,t){if("loading"===t.state){let n=Vn.get(t);void 0===n&&Vn.set(t,n=new Set),n.add(e)}}function u(e,n){const o=Vn.get(e);if(void 0!==o){for(const e of o)An(e,new wn(t),n);Vn.delete(e)}}function c(e,o){var r;const s=new Map,c=null!==(r=e.getGraph(o.version).nodeDeps.get(t))&&void 0!==r?r:En,l=_n(new Map(Array.from(c).sort().map(t=>{const[n,r]=dn(e,o,t);return vn(n,s),Sn(s,e,o.version),[t,r]}))),d=a.get(l);if(null!=d)return i(e,d),[s,d];const[f,p,h]=function(e,o){const r=Rn(t),a=new Map,s=new Map;function i({key:n}){hn(t,n,s);const[r,i]=dn(e,o,n);if(a.set(n,i),vn(r,s),Sn(s,e,o.version),"hasValue"===i.state)return i.contents;throw i.contents}try{const e=n({get:i}),t=Tn(e)?i(e):e;let o;return Ht(t)?o=cn(t.finally(r)):(r(),o=ln(t)),[s,o,a]}catch(u){let n;return void 0!==u.then?n=cn(u.then(()=>{const n=bn(e,new wn(t));if("hasError"===n.state)throw n.contents;return n.contents}).finally(r)):(r(),n=un(u)),[s,n,a]}}(e,o);vn(f,s),Sn(s,e,o.version);const v=_n(h);return i(e,p),function(e,t){"loading"!==t.state||t.contents.then(n=>{const o=ln(n);return a=a.set(e,o),u(t,o),n}).catch(n=>{if(Ht(n))return n;const o=un(n);return a=a.set(e,o),u(t,o),n}),a=a.set(e,t)}(v,p),[s,p]}function l(e,n){var o;const r=null!==(o=e.getGraph(n.version).nodeDeps.get(t))&&void 0!==o?o:En,s=new Map(Array.from(r).sort().map(t=>[t,fn(e,n,t)])),i=new Map;for(const[t,a]of s.entries()){if(null==a)return;i.set(t,a)}const u=_n(i);return a.get(u)}function d(e,t){return s(e),c(e,t)}if(null!=r){return yn({key:t,peek:l,get:d,set:function(e,t,n){s(e);const o=new Map,a=new Map;function i({key:n}){const[r,a]=dn(e,t,n);if(vn(r,o),"hasValue"===a.state)return a.contents;throw"loading"===a.state?new mn(n):a.contents}function u(n,r){const s="function"===typeof r?r(i(n)):r,[u,c]=pn(e,t,n.key,s);vn(u,o),c.forEach((e,t)=>a.set(t,e))}return r({set:u,get:i,reset:function(e){u(e,gn)}},n),[o,a]},dangerouslyAllowMutability:e.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1})}return yn({key:t,peek:l,get:d,dangerouslyAllowMutability:e.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1})};const{loadableWithError:Nn,loadableWithPromise:kn,loadableWithValue:Ln}=en,{DEFAULT_VALUE:Dn,DefaultValue:Bn,registerNode:Un}=E,{isRecoilValue:Cn}=m,{markRecoilValueModified:In,setRecoilValue:On,setRecoilValueLoadable:Fn}=re;function Pn(e){const{key:t,persistence_UNSTABLE:n}=e;let o=Ht(e.default)?kn(e.default.then(e=>(o=Ln(e),e)).catch(e=>{throw o=Nn(e),e})):Ln(e.default),r=void 0;function a(n,r,a){if(n.getState().knownAtoms.has(t))return;if(n.getState().knownAtoms.add(t),"loading"===o.state){function i(){var e;(null!==(e=n.getState().nextTree)&&void 0!==e?e:n.getState().currentTree).atomValues.has(t)||In(n,s)}o.contents.then(i).catch(i)}let c=Dn;if(null!=e.effects_UNSTABLE){let r=!0;function l(e){if(r){const t=c instanceof Bn||Ht(c)?"hasValue"===o.state?o.contents:Dn:c;c="function"===typeof e?e(t):e}else{if(Ht(e))throw new Error("Setting atoms to async values is not implemented.");On(n,s,e)}}const i=()=>l(Dn);function d(e){n.subscribeToTransactions(n=>{let{currentTree:r,previousTree:a}=n.getState();a||(u("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"),a=r);const s=r.atomValues.get(t);if(null==s||"hasValue"===s.state){var i;const n=null!=s?s.contents:Dn,r=null!==(i=a.atomValues.get(t))&&void 0!==i?i:o,u="hasValue"===r.state?r.contents:Dn;e(n,u)}},t)}for(const t of null!==(f=e.effects_UNSTABLE)&&void 0!==f?f:[]){var f;t({node:s,trigger:a,setSelf:l,resetSelf:i,onSet:d})}r=!1}c instanceof Bn||r.atomValues.set(t,Ht(c)?kn(function(e,n){const o=n.then(n=>{var r,a;return(null===(a=(null!==(r=e.getState().nextTree)&&void 0!==r?r:e.getState().currentTree).atomValues.get(t))||void 0===a?void 0:a.contents)===o&&On(e,s,n),n}).catch(n=>{var r,a;throw(null===(a=(null!==(r=e.getState().nextTree)&&void 0!==r?r:e.getState().currentTree).atomValues.get(t))||void 0===a?void 0:a.contents)===o&&Fn(e,s,Nn(n)),n});return o}(n,c)):Ln(c))}const s=Un({key:t,peek:function(e,n){var a,s,i;return null!==(a=null!==(s=n.atomValues.get(t))&&void 0!==s?s:null===(i=r)||void 0===i?void 0:i[1])&&void 0!==a?a:o},get:function(e,s){if(a(e,s,"get"),s.atomValues.has(t))return[new Map,F(s.atomValues.get(t))];if(s.nonvalidatedAtoms.has(t)){if(null!=r)return r;if(null==n)return i(`Tried to restore a persisted value for atom ${t} but it has no persistence settings.`),[new Map,o];const e=s.nonvalidatedAtoms.get(t),a=n.validator(e,Dn),u=a instanceof Bn?o:Ln(a);return r=[new Map,u],r}return[new Map,o]},set:function(e,n,o){if(a(e,n,"set"),n.atomValues.has(t)){const e=F(n.atomValues.get(t));if("hasValue"===e.state&&o===e.contents)return[new Map,new Map]}else if(!n.nonvalidatedAtoms.has(t)&&o instanceof Bn)return[new Map,new Map];return r=void 0,[new Map,(new Map).set(t,Ln(o))]},invalidate:function(){r=void 0},dangerouslyAllowMutability:e.dangerouslyAllowMutability,persistence_UNSTABLE:e.persistence_UNSTABLE?{type:e.persistence_UNSTABLE.type,backButton:e.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0});return s}function xn(e){const{default:t,...n}=e;return Cn(t)?function(e){const t=xn({...e,default:Dn,persistence_UNSTABLE:void 0===e.persistence_UNSTABLE?void 0:{...e.persistence_UNSTABLE,validator:t=>t instanceof Bn?t:F(e.persistence_UNSTABLE).validator(t,Dn)},effects_UNSTABLE:e.effects_UNSTABLE});return Mn({key:e.key+"__withFallback",get:({get:n})=>{const o=n(t);return o instanceof Bn?e.default:o},set:({set:e},n)=>e(t,n),dangerouslyAllowMutability:e.dangerouslyAllowMutability})}({...n,default:t}):Pn({...n,default:t})}var $n=xn;var Gn=function(e,t={allowFunctions:!1}){return function e(t,n,o){if("string"===typeof t&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if(!0!==(null===n||void 0===n?void 0:n.allowFunctions))throw new Error("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(null===t)return"null";var r;if("object"!==typeof t)return null!==(r=JSON.stringify(t))&&void 0!==r?r:"";if(Ht(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((t,o)=>e(t,n,o.toString()))}]`;if("function"===typeof t.toJSON)return e(t.toJSON(o),n,o);if(t instanceof Map){const r={};for(const[o,a]of t)r["string"===typeof o?o:e(o,n)]=a;return e(r,n,o)}return t instanceof Set?e(Array.from(t).sort((t,o)=>e(t,n).localeCompare(e(o,n))),n,o):null!=t[Symbol.iterator]&&"function"===typeof t[Symbol.iterator]?e(Array.from(t),n,o):`{${Object.keys(t).filter(e=>void 0!==t[e]).sort().map(o=>`${e(o,n)}:${e(t[o],n,o)}`).join(",")}}`}(e,t)};var Wn=function(){const e=new Map,t={get:t=>e.get(Gn(t)),set:(n,o)=>(e.set(Gn(n),o),t),map:e};return t};let zn=0;var jn=function(e){var t,n;let o=null!==(t=null===(n=e.cacheImplementationForParams_UNSTABLE)||void 0===n?void 0:n.call(e))&&void 0!==t?t:Wn();return t=>{var n,r;const a=o.get(t);if(null!=a)return a;const s=`${e.key}__selectorFamily/${null!==(n=Gn(t,{allowFunctions:!0}))&&void 0!==n?n:"void"}/${zn++}`,i=n=>e.get(t)(n),u=null===(r=e.cacheImplementation_UNSTABLE)||void 0===r?void 0:r.call(e);let c;if(null!=e.set){const n=e.set;c=Mn({key:s,get:i,set:(e,o)=>n(t)(e,o),cacheImplementation_UNSTABLE:u,dangerouslyAllowMutability:e.dangerouslyAllowMutability})}else c=Mn({key:s,get:i,cacheImplementation_UNSTABLE:u,dangerouslyAllowMutability:e.dangerouslyAllowMutability});return o=o.set(t,c),c}};const{DEFAULT_VALUE:qn,DefaultValue:Jn}=E;var Kn=function(e){let t=Wn();const n={key:e.key,default:qn,persistence_UNSTABLE:e.persistence_UNSTABLE};let o;o=$n(n);const r=jn({key:e.key+"__atomFamily/Default",get:t=>({get:n})=>{const r=n("function"===typeof o?o(t):o);return r instanceof Jn?"function"===typeof e.default?e.default(t):e.default:r},dangerouslyAllowMutability:e.dangerouslyAllowMutability});return n=>{var o;const a=t.get(n);if(null!=a)return a;const s=$n({...e,key:`${e.key}__${null!==(o=Gn(n))&&void 0!==o?o:"void"}`,default:r(n),effects_UNSTABLE:"function"===typeof e.effects_UNSTABLE?e.effects_UNSTABLE(n):e.effects_UNSTABLE});return t=t.set(n,s),s}};const Hn=jn({key:"__constant",get:e=>()=>e,cacheImplementationForParams_UNSTABLE:an});var Xn=function(e){return Hn(e)};const Zn=jn({key:"__error",get:e=>()=>{throw new Error(e)},cacheImplementationForParams_UNSTABLE:an});var Qn=function(e){return Zn(e)};var Yn=function(e){return e};const{loadableWithError:eo,loadableWithPromise:to,loadableWithValue:no}=en;function oo(e,t){const n=Array(t.length).fill(void 0),o=Array(t.length).fill(void 0);for(const[a,s]of t.entries())try{n[a]=e(s)}catch(r){o[a]=r}return[n,o]}function ro(e){return null!=e&&!Ht(e)}function ao(e){return Array.isArray(e)?e:Object.getOwnPropertyNames(e).map(t=>e[t])}function so(e){return e.hasOwnProperty("value")?e.value:e}function io(e,t){return Array.isArray(e)?t:Object.getOwnPropertyNames(e).reduce((e,n,o)=>({...e,[n]:t[o]}),{})}function uo(e,t,n){return io(e,n.map((e,n)=>null==e?no(t[n]):Ht(e)?to(e):eo(e)))}var co={waitForNone:jn({key:"__waitForNone",get:e=>({get:t})=>{const n=ao(e),[o,r]=oo(t,n);return uo(e,o,r)}}),waitForAny:jn({key:"__waitForAny",get:e=>({get:t})=>{const n=ao(e),[o,r]=oo(t,n);if(r.some(e=>null==e))return uo(e,o,r);if(r.every(ro))throw r.find(ro);if(ce("recoil_async_selector_refactor"))return new Promise((t,n)=>{for(const[a,s]of r.entries())Ht(s)&&s.then(n=>{o[a]=so(n),r[a]=null,t(uo(e,o,r))}).catch(e=>{r[a]=e,r.every(ro)&&n(r[0])})});throw new Promise((t,n)=>{for(const[a,s]of r.entries())Ht(s)&&s.then(n=>{o[a]=n,r[a]=null,t(uo(e,o,r))}).catch(e=>{r[a]=e,r.every(ro)&&n(r[0])})})}}),waitForAll:jn({key:"__waitForAll",get:e=>({get:t})=>{const n=ao(e),[o,r]=oo(t,n);if(r.every(e=>null==e))return io(e,o);const a=r.find(ro);if(null!=a)throw a;if(ce("recoil_async_selector_refactor"))return Promise.all(r).then(t=>io(e,t.map(so)));throw Promise.all(r).then(t=>io(e,t))}}),noWait:jn({key:"__noWait",get:e=>({get:t})=>{try{return no(t(e))}catch(n){return Ht(n)?to(n):eo(n)}}})};const{DefaultValue:lo}=E,{RecoilRoot:fo}=ut,{isRecoilValue:po}=m,{useGotoRecoilSnapshot:ho,useRecoilCallback:vo,useRecoilSnapshot:So,useRecoilState:go,useRecoilStateLoadable:mo,useRecoilTransactionObserver:yo,useRecoilValue:wo,useRecoilValueLoadable:bo,useResetRecoilState:To,useSetRecoilState:Ao,useSetUnvalidatedAtomValues:Ro,useTransactionObservation_DEPRECATED:Eo}=zt,{noWait:_o,waitForAll:Vo,waitForAny:Mo,waitForNone:No}=co;var ko={DefaultValue:lo,RecoilRoot:fo,useRecoilBridgeAcrossReactRoots_UNSTABLE:Kt,atom:$n,selector:Mn,atomFamily:Kn,selectorFamily:jn,constSelector:Xn,errorSelector:Qn,readOnlySelector:Yn,useRecoilValue:wo,useRecoilValueLoadable:bo,useRecoilState:go,useRecoilStateLoadable:mo,useSetRecoilState:Ao,useResetRecoilState:To,useRecoilCallback:vo,useGotoRecoilSnapshot:ho,useRecoilSnapshot:So,useRecoilTransactionObserver_UNSTABLE:yo,useTransactionObservation_UNSTABLE:Eo,useSetUnvalidatedAtomValues_UNSTABLE:Ro,noWait:_o,waitForNone:No,waitForAny:Mo,waitForAll:Vo,isRecoilValue:po},Lo=ko.RecoilRoot,Do=ko.atom,Bo=ko.useRecoilValue,Uo=ko.useRecoilState,Co=ko.useSetRecoilState}}]);