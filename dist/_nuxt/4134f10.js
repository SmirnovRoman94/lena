/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{331:function(e,t,n){"use strict";n.d(t,"a",(function(){return je})),n.d(t,"b",(function(){return He})),n.d(t,"c",(function(){return Fe})),n.d(t,"d",(function(){return Be}));var r=n(322),o=n(298),c=n(323);const l="firebasestorage.googleapis.com";class h extends o.c{constructor(code,e){super(d(code),`Firebase Storage: ${e} (${d(code)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(code){return d(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(code){return"storage/"+code}function _(){return new h("unknown","An unknown error occurred, please check the error payload for server response.")}function f(){return new h("canceled","User canceled the upload/download.")}function m(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function w(e){return new h("invalid-argument",e)}function v(){return new h("app-deleted","The Firebase app was deleted.")}function k(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function y(e){throw new h("internal-error","Internal error: "+e)}class R{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=R.makeFromUrl(e,t)}catch(t){return new R(e,"")}if(""===n.path)return n;throw new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function c(e){e.path_=decodeURIComponent(e.path)}const d=t.replace(/[.]/g,"\\."),_=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${d}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let i=0;i<_.length;i++){const t=_[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new R(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new h("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class T{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function x(p){return"string"==typeof p||p instanceof String}function O(p){return C()&&p instanceof Blob}function C(){return"undefined"!=typeof Blob}function P(e,t,n,r){if(r<t)throw w(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw w(`Invalid value for '${e}'. Expected ${n} or less.`)}function U(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function S(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var I;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(I||(I={}));class E{constructor(e,t,n,r,o,c,l,h,d,_,f){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=_,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new A(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===I.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===I.ABORT;return void e(!1,new A(!1,null,t))}const c=-1!==this.successCodes_.indexOf(o);e(!0,new A(c,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=_();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?v():f())}else{r(new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new A(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,c=null,l=!1,h=0;function d(){return 2===h}let _=!1;function f(...e){_||(_=!0,t.apply(null,e))}function m(t){o=setTimeout((()=>{o=null,e(v,d())}),t)}function w(){c&&clearTimeout(c)}function v(e,...t){if(_)return void w();if(e)return w(),void f.call(null,e,...t);if(d()||l)return w(),void f.call(null,e,...t);let n;r<64&&(r*=2),1===h?(h=2,n=0):n=1e3*(r+Math.random()),m(n)}let k=!1;function y(e){k||(k=!0,w(),_||(null!==o?(e||(h=2),clearTimeout(o),m(0)):e||(h=1)))}return m(0),c=setTimeout((()=>{l=!0,y(!0)}),n),y}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class A{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function z(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function M(...e){const t=z();if(void 0!==t){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}if(C())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}const B="raw",j="base64",F="base64url",H="data_url";class N{constructor(data,e){this.data=data,this.contentType=e||null}}function L(e,t){switch(e){case B:return new N($(t));case j:case F:return new N(D(e,t));case H:return new N(function(e){const t=new X(e);return t.base64?D(j,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw k(H,"Malformed data URL.")}return $(t)}(t.rest)}(t),new X(t).contentType)}throw _()}function $(e){const b=[];for(let i=0;i<e.length;i++){let t=e.charCodeAt(i);if(t<=127)b.push(t);else if(t<=2047)b.push(192|t>>6,128|63&t);else if(55296==(64512&t)){if(i<e.length-1&&56320==(64512&e.charCodeAt(i+1))){t=65536|(1023&t)<<10|1023&e.charCodeAt(++i),b.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else b.push(239,191,189)}else 56320==(64512&t)?b.push(239,191,189):b.push(224|t>>12,128|t>>6&63,128|63&t)}return new Uint8Array(b)}function D(e,t){switch(e){case j:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw k(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case F:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw k(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw k(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class X{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw k(H,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(s,e){if(!(s.length>=e.length))return!1;return s.substring(s.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class G{constructor(data,e){let t=0,n="";O(data)?(this.data_=data,t=data.size,n=data.type):data instanceof ArrayBuffer?(e?this.data_=new Uint8Array(data):(this.data_=new Uint8Array(data.byteLength),this.data_.set(new Uint8Array(data))),t=this.data_.length):data instanceof Uint8Array&&(e?this.data_=data:(this.data_=new Uint8Array(data.length),this.data_.set(data)),t=data.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(O(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new G(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new G(n,!0)}}static getBlob(...e){if(C()){const t=e.map((e=>e instanceof G?e.data_:e));return new G(M.apply(null,t))}{const t=e.map((e=>x(e)?L(B,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let i=0;i<e.length;i++)r[o++]=e[i]})),new G(r,!0)}}uploadData(){return this.data_}}function V(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function W(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function K(e,t){return t}class J{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||K}}let Z=null;function Y(){if(Z)return Z;const e=[];e.push(new J("bucket")),e.push(new J("generation")),e.push(new J("metageneration")),e.push(new J("name","fullPath",!0));const t=new J("name");t.xform=function(e,t){return function(e){return!x(e)||e.length<2?e:W(e)}(t)},e.push(t);const n=new J("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new J("timeCreated")),e.push(new J("updated")),e.push(new J("md5Hash",null,!0)),e.push(new J("cacheControl",null,!0)),e.push(new J("contentDisposition",null,!0)),e.push(new J("contentEncoding",null,!0)),e.push(new J("contentLanguage",null,!0)),e.push(new J("contentType",null,!0)),e.push(new J("metadata","customMetadata",!0)),Z=e,Z}function Q(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new R(n,path);return t._makeStorageReference(r)}})}(r,e),r}function ee(e,t,n){const r=V(t);if(null===r)return null;return Q(e,r,n)}function te(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class ne{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function se(e){if(!e)throw _()}function re(e,t){return function(n,text){const r=ee(e,text,t);return se(null!==r),r}}function oe(e,t){return function(n,text){const r=ee(e,text,t);return se(null!==r),function(e,t,n,r){const o=V(t);if(null===o)return null;if(!x(o.downloadTokens))return null;const c=o.downloadTokens;if(0===c.length)return null;const l=encodeURIComponent;return c.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return U("/b/"+l(o)+"/o/"+l(path),n,r)+S({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function ie(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new h("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new h("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new h("unauthorized","User does not have permission to access '"+path+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ae(e){const t=ie(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new h("object-not-found","Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ce(e,t,n){const r=U(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new ne(r,"GET",re(e,n),o);return c.errorHandler=ae(t),c}function ue(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function le(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};const h=function(){let e="";for(let i=0;i<2;i++)e+=Math.random().toString().slice(2);return e}();l["Content-Type"]="multipart/related; boundary="+h;const d=ue(t,r,o),_="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+te(d,n)+"\r\n--"+h+"\r\nContent-Type: "+d.contentType+"\r\n\r\n",f="\r\n--"+h+"--",body=G.getBlob(_,r,f);if(null===body)throw m();const w={name:d.fullPath},v=U(c,e.host,e._protocol),k=e.maxUploadRetryTime,y=new ne(v,"POST",re(e,n),k);return y.urlParams=w,y.headers=l,y.body=body.uploadData(),y.errorHandler=ie(t),y}class he{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function de(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){se(!1)}return se(!!n&&-1!==(t||["active"]).indexOf(n)),n}const _e=262144;function pe(e,t,n,r,o,c,l,d){const _=new he(0,0);if(l?(_.current=l.current,_.total=l.total):(_.current=0,_.total=r.size()),r.size()!==_.total)throw new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const f=_.total-_.current;let w=f;o>0&&(w=Math.min(w,o));const v=_.current,k=v+w,y={"X-Goog-Upload-Command":w===f?"upload, finalize":"upload","X-Goog-Upload-Offset":`${_.current}`},body=r.slice(v,k);if(null===body)throw m();const R=t.maxUploadRetryTime,T=new ne(n,"POST",(function(e,text){const n=de(e,["active","final"]),o=_.current+w,l=r.size();let h;return h="final"===n?re(t,c)(e,text):null,new he(o,l,"final"===n,h)}),R);return T.headers=y,T.body=body.uploadData(),T.progressCallback=d||null,T.errorHandler=ie(e),T}const fe="running",ge="paused",me="success",be="canceled",we="error";function ve(e){switch(e){case"running":case"pausing":case"canceling":return fe;case"paused":return ge;case"success":return me;case"canceled":return be;default:return we}}class ke{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function ye(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class Re{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=I.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=I.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw y("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Te extends Re{initXhr(){this.xhr_.responseType="text"}}function xe(){return new Te}class Oe{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Y(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l=ue(t,r,o),h={name:l.fullPath},d=U(c,e.host,e._protocol),_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},body=te(l,n),f=e.maxUploadRetryTime,m=new ne(d,"POST",(function(e){let t;de(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){se(!1)}return se(x(t)),t}),f);return m.urlParams=h,m.headers=_,m.body=body,m.errorHandler=ie(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,xe,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const o=e.maxUploadRetryTime,c=new ne(n,"POST",(function(e){const t=de(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){se(!1)}n||se(!1);const o=Number(n);return se(!isNaN(o)),new he(o,r.size(),"final"===t)}),o);return c.headers={"X-Goog-Upload-Command":"query"},c.errorHandler=ie(t),c}(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,xe,t,n);this._request=o,o.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=_e*this._chunkMultiplier,t=new he(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let c;try{c=pe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const l=this._ref.storage._makeRequest(c,xe,r,o);this._request=l,l.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){_e*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ce(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,xe,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=le(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,xe,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=f(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ve(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new ke(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const i=this._observers.indexOf(e);-1!==i&&this._observers.splice(i,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ve(this._state)){case me:ye(this._resolve.bind(null,this.snapshot))();break;case be:case we:ye(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ve(this._state)){case fe:case ge:e.next&&ye(e.next.bind(e,this.snapshot))();break;case me:e.complete&&ye(e.complete.bind(e))();break;default:e.error&&ye(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ce{constructor(e,t){this._service=e,this._location=t instanceof R?t:R.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ce(e,t)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new R(this._location.bucket,e);return new Ce(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Pe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=U(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new ne(r,"GET",oe(e,n),o);return c.errorHandler=ae(t),c}(e.storage,e._location,Y());return e.storage.makeRequestWithTokens(t,xe).then((e=>{if(null===e)throw new h("no-download-url","The given file does not have any download URLs.");return e}))}function Ue(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new R(e._location.bucket,n);return new Ce(e.storage,r)}function Se(e,path){if(e instanceof qe){const t=e;if(null==t._bucket)throw new h("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const n=new Ce(t,t._bucket);return null!=path?Se(n,path):n}return void 0!==path?Ue(e,path):e}function Ie(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof qe)return new Ce(e,t);throw w("To use ref(service, url), the first argument must be a Storage instance.")}return Se(e,t)}function Ee(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:R.makeFromBucketSpec(n,e)}class qe{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?R.makeFromBucketSpec(r,this._host):Ee(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Ee(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ce(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new T(v());{const o=function(e,t,n,r,o,c){const l=S(e.urlParams),h=e.url+l,d=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(d,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(d,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(d,c),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(d,r),new E(h,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ae="@firebase/storage",ze="0.9.0",Me="storage";function Be(e,data,t){return function(e,data,t){return e._throwIfRoot("uploadBytesResumable"),new Oe(e,new G(data),t)}(e=Object(o.k)(e),data,t)}function je(e){return Pe(e=Object(o.k)(e))}function Fe(e,t){return Ie(e=Object(o.k)(e),t)}function He(e=Object(r.getApp)(),t){e=Object(o.k)(e);return Object(r._getProvider)(e,Me).getImmediate({identifier:t})}function Ne(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return new qe(n,o,c,t,r.SDK_VERSION)}Object(r._registerComponent)(new c.a(Me,Ne,"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(Ae,ze,""),Object(r.registerVersion)(Ae,ze,"esm2017")}}]);