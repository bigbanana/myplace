/* build : 564493634@qq.com 2015-03-27 18:21:33 */
var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){(i||!hasProp(e,n))&&(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}function newContext(e){function t(e){var t,i;for(t=0;t<e.length;t++)if(i=e[t],"."===i)e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function i(e,i,r){var n,a,o,s,u,c,p,d,l,f,h,m,g=i&&i.split("/"),v=y.map,b=v&&v["*"];if(e&&(e=e.split("/"),p=e.length-1,y.nodeIdCompat&&jsSuffixRegExp.test(e[p])&&(e[p]=e[p].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join("/")),r&&v&&(g||b)){o=e.split("/");e:for(s=o.length;s>0;s-=1){if(c=o.slice(0,s).join("/"),g)for(u=g.length;u>0;u-=1)if(a=getOwn(v,g.slice(0,u).join("/")),a&&(a=getOwn(a,c))){d=a,l=s;break e}!f&&b&&getOwn(b,c)&&(f=getOwn(b,c),h=s)}!d&&f&&(d=f,l=h),d&&(o.splice(0,l,d),e=o.join("/"))}return n=getOwn(y.pkgs,e),n?n:e}function r(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName?(t.parentNode.removeChild(t),!0):void 0})}function n(e){var t=getOwn(y.paths,e);return t&&isArray(t)&&t.length>1?(t.shift(),q.require.undef(e),q.makeRequire(null,{skipMap:!0})([e]),!0):void 0}function a(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function o(e,t,r,n){var o,s,u,c,p=null,d=t?t.name:null,l=e,f=!0,h="";return e||(f=!1,e="_@r"+(T+=1)),c=a(e),p=c[0],e=c[1],p&&(p=i(p,d,n),s=getOwn(M,p)),e&&(p?h=s&&s.normalize?s.normalize(e,function(e){return i(e,d,n)}):-1===e.indexOf("!")?i(e,d,n):e:(h=i(e,d,n),c=a(h),p=c[0],h=c[1],r=!0,o=q.nameToUrl(h))),u=!p||s||r?"":"_unnormalized"+(A+=1),{prefix:p,name:h,parentMap:t,unnormalized:!!u,url:o,originalName:l,isDefine:f,id:(p?p+"!"+h:h)+u}}function s(e){var t=e.id,i=getOwn(S,t);return i||(i=S[t]=new q.Module(e)),i}function u(e,t,i){var r=e.id,n=getOwn(S,r);!hasProp(M,r)||n&&!n.defineEmitComplete?(n=s(e),n.error&&"error"===t?i(n.error):n.on(t,i)):"defined"===t&&i(M[r])}function c(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(S,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit("error",e)))}),r||req.onError(e))}function p(){globalDefQueue.length&&(apsp.apply(O,[O.length,0].concat(globalDefQueue)),globalDefQueue=[])}function d(e){delete S[e],delete k[e]}function l(e,t,i){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,n){var a=r.id,o=getOwn(S,a);!o||e.depMatched[n]||i[a]||(getOwn(t,a)?(e.defineDep(n,M[a]),e.check()):l(o,t,i))}),i[r]=!0)}function f(){var e,t,i=1e3*y.waitSeconds,a=i&&q.startTime+i<(new Date).getTime(),o=[],s=[],u=!1,p=!0;if(!b){if(b=!0,eachProp(k,function(e){var i=e.map,c=i.id;if(e.enabled&&(i.isDefine||s.push(e),!e.error))if(!e.inited&&a)n(c)?(t=!0,u=!0):(o.push(c),r(c));else if(!e.inited&&e.fetched&&i.isDefine&&(u=!0,!i.prefix))return p=!1}),a&&o.length)return e=makeError("timeout","Load timeout for modules: "+o,null,o),e.contextName=q.contextName,c(e);p&&each(s,function(e){l(e,{},{})}),a&&!t||!u||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0,f()},50)),b=!1}}function h(e){hasProp(M,e[0])||s(o(e[0],null,!0)).init(e[1],e[2])}function m(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,"load","onreadystatechange"),m(t,q.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e;for(p();O.length;){if(e=O.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var b,x,q,E,w,y={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},S={},k={},j={},O=[],M={},P={},R={},T=1,A=1;return E={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?M[e.map.id]=e.exports:e.exports=M[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(y.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},x=function(e){this.events=getOwn(j,e.id)||{},this.map=e,this.shim=getOwn(y.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?void q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(i,a,r,n)}catch(o){e=o}else n=q.execCb(i,a,r,n);if(this.map.isDefine&&void 0===n&&(t=this.module,t?n=t.exports:this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else n=a;this.exports=n,this.map.isDefine&&!this.ignore&&(M[i]=n,req.onResourceLoad&&req.onResourceLoad(q,this.map,this.depMaps)),d(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=o(e.prefix);this.depMaps.push(r),u(r,"defined",bind(this,function(r){var n,a,p,l=getOwn(R,this.map.id),f=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,function(e){return i(e,h,!0)})||""),a=o(e.prefix+"!"+f,this.map.parentMap),u(a,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),p=getOwn(S,a.id),void(p&&(this.depMaps.push(a),this.events.error&&p.on("error",bind(this,function(e){this.emit("error",e)})),p.enable()))):l?(this.map.url=q.nameToUrl(l),void this.load()):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(S,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&d(e.map.id)}),c(e)}),n.fromText=bind(this,function(i,r){var a=e.name,u=o(a),p=useInteractive;r&&(i=r),p&&(useInteractive=!1),s(u),hasProp(y.config,t)&&(y.config[a]=y.config[t]);try{req.exec(i)}catch(d){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+d,d,[t]))}p&&(useInteractive=!0),this.depMaps.push(u),q.completeLoad(a),m([a],n)}),void r.load(e.name,m,n,y))})),q.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(E,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,u(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback?u(e,"error",bind(this,this.errback)):this.events.error&&u(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=S[i],hasProp(E,i)||!r||r.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(S,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:y,contextName:e,registry:S,defined:M,urlFetched:P,defQueue:O,Module:x,makeModuleMap:o,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=y.shim,i={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?(y[t]||(y[t]={}),mixin(y[t],e,!0,!0)):y[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(R[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,i){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),t[i]=e}),y.shim=t),e.packages&&each(e.packages,function(e){var t,i;e="string"==typeof e?{name:e}:e,i=e.name,t=e.location,t&&(y.paths[i]=e.location),y.pkgs[i]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(S,function(e,t){e.inited||e.map.unnormalized||(e.map=o(t))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function a(i,r,u){var p,d,l;return n.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof i?isFunction(r)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(E,i)?E[i](S[t.id]):req.get?req.get(q,i,t,a):(d=o(i,t,!1,!0),p=d.id,hasProp(M,p)?M[p]:c(makeError("notloaded",'Module name "'+p+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),q.nextTick(function(){v(),l=s(o(null,t)),l.skipMap=n.skipMap,l.init(i,r,u,{enabled:!0}),f()}),a)}return n=n||{},mixin(a,{isBrowser:isBrowser,toUrl:function(e){var r,n=e.lastIndexOf("."),a=e.split("/")[0],o="."===a||".."===a;return-1!==n&&(!o||n>1)&&(r=e.substring(n,e.length),e=e.substring(0,n)),q.nameToUrl(i(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(M,o(e,t,!1,!0).id)},specified:function(e){return e=o(e,t,!1,!0).id,hasProp(M,e)||hasProp(S,e)}}),t||(a.undef=function(e){p();var i=o(e,t,!0),n=getOwn(S,e);r(e),delete M[e],delete P[i.url],delete j[e],eachReverse(O,function(t,i){t[0]===e&&O.splice(i,1)}),n&&(n.events.defined&&(j[e]=n.events),d(e))}),a},enable:function(e){var t=getOwn(S,e.id);t&&s(e).enable()},completeLoad:function(e){var t,i,r,a=getOwn(y.shim,e)||{},o=a.exports;for(p();O.length;){if(i=O.shift(),null===i[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);h(i)}if(r=getOwn(S,e),!t&&!hasProp(M,e)&&r&&!r.inited){if(!(!y.enforceDefine||o&&getGlobal(o)))return n(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,a.deps||[],a.exportsFn])}f()},nameToUrl:function(e,t,i){var r,n,a,o,s,u,c,p=getOwn(y.pkgs,e);if(p&&(e=p),c=getOwn(R,e))return q.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(r=y.paths,n=e.split("/"),a=n.length;a>0;a-=1)if(o=n.slice(0,a).join("/"),u=getOwn(r,o)){isArray(u)&&(u=u[0]),n.splice(0,a,u);break}s=n.join("/"),s+=t||(/^data\:|\?/.test(s)||i?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":y.baseUrl)+s}return y.urlArgs?s+((-1===s.indexOf("?")?"?":"&")+y.urlArgs):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);return n(t.id)?void 0:c(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.16",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,a,o=defContextName;return isArray(e)||"string"==typeof e||(a=e,isArray(t)?(e=t,t=i,i=r):e=[]),a&&a.context&&(o=a.context),n=getOwn(contexts,o),n||(n=contexts[o]=req.s.newContext(o)),a&&n.configure(a),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e){var t=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return t.type=e.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return r=req.createNode(n,t,i),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=i,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(i),e.completeLoad(t)}catch(a){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,a,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,i){var r,n;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")])),(n?n.defQueue:globalDefQueue).push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),window.config=window.config||{deps:[]},require.config({baseUrl:"http://static.yaozh.com/js",urlArgs:"v=1.1"+(new Date).getTime(),waitSeconds:5,map:{"*":{css:"require.css"}},deps:["global"].concat(config.deps)}),require.config({shim:{pace:{deps:["css!../css/plugin/pace-theme-flash"]},prism:{deps:["css!../css/plugin/prism-twilight"]}}}),require.config({paths:{global:"global",jquery:"lib",backbone:"lib",underscore:"lib",outer:"module",pace:"plugin/pace",prism:"plugin/prism","require.css":"plugin/require-css-plugin","jquery.plax":"plugin/plax","jquery.easing":"plugin/jquery.easing.1.3","jquery.validate":"plugin/jquery.validate",validate:"plugin/validate","jquery.waterfall":"plugin/waterfall","jquery.sliderbox":"plugin/sliderbox","jquery.clearInput":"plugin/clearInput","jquery.marquee":"plugin/marquee",preloadjs:"other/preloadjs",TweenMax:"other/TweenMax",ie6:"special/ie6",DD_belatedPNG:"special/DD_belatedPNG"}});