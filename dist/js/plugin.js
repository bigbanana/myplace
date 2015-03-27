/* build : 564493634@qq.com 2015-03-27 09:25:20 */
define("jquery.clearInput",["jquery"],function(t){function i(e){this.options=t.extend(!0,{},i.options,e),this.$el=t(e.el),this.init()}t.extend(i.prototype,{init:function(){var i=this;this.options.height=this.$el.outerHeight();var e=this.options.height;this.$button=t('<a href="javascript:;">&times;</a>').css({position:"absolute",display:"none",height:e,width:e,fontSize:Math.ceil(.9*e),fontWeight:700,color:"#000",lineHeight:e+"px",verticalAlign:"middle",textDecoration:"none",textAlign:"center"}).appendTo(t(document.body)),this.$button.on("mousedown",t.proxy(this.clear,this)),this.$el.on("focus keyup input propertychange",function(t){"focus"==t.type&&i.position(),i.action()}),this.$el.on("blur",t.proxy(this.hide,this)),this.position()},show:function(){this.$button.show()},hide:function(){this.$button.hide()},position:function(){var t=this.$el.outerWidth(),i=this.$el.offset();i.left=i.left+t-this.options.height,this.$button.css(i)},action:function(){""!==this.$el.val()?this.show():this.hide()},clear:function(){this.$el.val("").trigger("focus")}}),t.extend(i,{options:{}}),t.fn.extend({clearInput:function(e){e=e||{};var n=Array.prototype.slice.apply(arguments);return n.shift(),this.each(function(){var o=t(this),s=o.data("clearInput");return"object"==t.type(e)&&(e=t.extend({},e,{el:o}),s=new i(e),o.data("clearInput",s)),"string"==t.type(e)&&s[e].apply(s,n),this})}})});
define("jquery.easing",["jquery"],function(n){n.easing.jswing=n.easing.swing,n.extend(n.easing,{def:"easeOutQuad",swing:function(n,e,t,u,a){return jQuery.easing[jQuery.easing.def](n,e,t,u,a)},easeInQuad:function(n,e,t,u,a){return u*(e/=a)*e+t},easeOutQuad:function(n,e,t,u,a){return-u*(e/=a)*(e-2)+t},easeInOutQuad:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e+t:-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,a){return u*(e/=a)*e*e+t},easeOutCubic:function(n,e,t,u,a){return u*((e=e/a-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e+t:u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,a){return u*(e/=a)*e*e*e+t},easeOutQuart:function(n,e,t,u,a){return-u*((e=e/a-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e+t:-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,a){return u*(e/=a)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,a){return u*((e=e/a-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,a){return(e/=a/2)<1?u/2*e*e*e*e*e+t:u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,a){return-u*Math.cos(e/a*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,a){return u*Math.sin(e/a*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,a){return-u/2*(Math.cos(Math.PI*e/a)-1)+t},easeInExpo:function(n,e,t,u,a){return 0==e?t:u*Math.pow(2,10*(e/a-1))+t},easeOutExpo:function(n,e,t,u,a){return e==a?t+u:u*(-Math.pow(2,-10*e/a)+1)+t},easeInOutExpo:function(n,e,t,u,a){return 0==e?t:e==a?t+u:(e/=a/2)<1?u/2*Math.pow(2,10*(e-1))+t:u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,a){return-u*(Math.sqrt(1-(e/=a)*e)-1)+t},easeOutCirc:function(n,e,t,u,a){return u*Math.sqrt(1-(e=e/a-1)*e)+t},easeInOutCirc:function(n,e,t,u,a){return(e/=a/2)<1?-u/2*(Math.sqrt(1-e*e)-1)+t:u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i))+t},easeOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(1==(e/=a))return t+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*a-r)*Math.PI/i)+u+t},easeInOutElastic:function(n,e,t,u,a){var r=1.70158,i=0,s=u;if(0==e)return t;if(2==(e/=a/2))return t+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)+t:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*a-r)*Math.PI/i)*.5+u+t},easeInBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*(e/=a)*e*((r+1)*e-r)+t},easeOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),u*((e=e/a-1)*e*((r+1)*e+r)+1)+t},easeInOutBack:function(n,e,t,u,a,r){return void 0==r&&(r=1.70158),(e/=a/2)<1?u/2*e*e*(((r*=1.525)+1)*e-r)+t:u/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},easeInBounce:function(n,e,t,u,a){return u-jQuery.easing.easeOutBounce(n,a-e,0,u,a)+t},easeOutBounce:function(n,e,t,u,a){return(e/=a)<1/2.75?7.5625*u*e*e+t:2/2.75>e?u*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?u*(7.5625*(e-=2.25/2.75)*e+.9375)+t:u*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(n,e,t,u,a){return a/2>e?.5*jQuery.easing.easeInBounce(n,2*e,0,u,a)+t:.5*jQuery.easing.easeOutBounce(n,2*e-a,0,u,a)+.5*u+t}})});
define("jquery.marquee",["jquery"],function(t){function i(i){this.options=t.extend(!0,{},arguments.callee.options,i),this.$el=t(i.el).addClass("ui-marquee"),this.init()}return t.extend(i.prototype,{init:function(){var i,e,s,h=this.options;if(this.$items=this.$el.children().addClass("ui-marquee-li"),"left"==this.options.direction&&this.$items.css({"float":"left"}),i=this.$items.innerWidth(),e=this.$items.innerHeight(),t.extend(this.options,{width:i,height:e,showWidth:i*this.$items.length,showHeight:e*this.$items.length}),this.$items.detach(),this.$items.length>=h.visible)switch(this.$items=this.$items.add(this.$items.slice(0,h.visible).clone()),s=this.$items.length,this.$itemBox=t('<div class="ui-marquee-list"></div>').append(this.$items).appendTo(this.$el),this.$el.css({overflow:"hidden",zoom:1}),this.$itemBox.css({overflow:"hidden",zoom:1}),h.direction){case"left":this.$el.css({width:h.visible*h.width}),this.$itemBox.css({width:s*h.width});break;case"up":this.$el.css({height:h.visible*h.height}),this.$itemBox.css({height:s*h.height})}this.$itemBox.hover(t.proxy(this.stop,this),t.proxy(this.start,this)),this.start()},roll:function(){var t=this.options,i=this.$el;"left"==t.direction&&i.scrollLeft(i.scrollLeft()>=t.showWidth?0:i.scrollLeft()+t.step),"up"==t.direction&&i.scrollTop(i.scrollTop()>=t.showHeight?0:i.scrollTop()+t.step)},start:function(){this.timer=setInterval(t.proxy(this.roll,this),this.options.speed)},stop:function(){clearInterval(this.timer)}}),t.extend(i,{options:{direction:"up",speed:30,step:1,visible:1}}),t.extend(t.fn,{marquee:function(e){e=e||{};var s=Array.prototype.slice.apply(arguments);return s.shift(),this.each(function(){var h=t(this),o=h.data("marquee");return"object"==t.type(e)&&(e=t.extend({},e,{el:h}),o=new i(e),h.data("marquee",o)),"string"==t.type(e)&&o[e].apply(o,s),this})}}),i});
(function(){var t,e,n,r,s,o,i,u,a,c,l,p,h,f,g,d,m,y,v,w,b,k,S,q,L,x,P,T,R,j,E,O,M,A,N,_,F,C,U,W,X,D,H,I,z,G,B,J,K,Q=[].slice,V={}.hasOwnProperty,Y=function(t,e){function n(){this.constructor=t}for(var r in e)V.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Z=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(b={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},R=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,w=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(t){return setTimeout(t,50)},w=function(t){return clearTimeout(t)}),M=function(t){var e,n;return e=R(),(n=function(){var r;return r=R()-e,r>=33?(e=R(),t(r,function(){return E(n)})):setTimeout(n,33-r)})()},O=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?Q.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},k=function(){var t,e,n,r,s,o,i;for(e=arguments[0],r=2<=arguments.length?Q.call(arguments,1):[],o=0,i=r.length;i>o;o++)if(n=r[o])for(t in n)V.call(n,t)&&(s=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=s&&"object"==typeof s?k(e[t],s):e[t]=s);return e},m=function(t){var e,n,r,s,o;for(n=e=0,s=0,o=t.length;o>s;s++)r=t[s],n+=Math.abs(r),e++;return n/e},q=function(t,e){var n,r,s;if(null==t&&(t="options"),null==e&&(e=!0),s=document.querySelector("[data-pace-"+t+"]")){if(n=s.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(o){return r=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},i=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)s.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return s}},t.prototype.trigger=function(){var t,e,n,r,s,o,i,u,a;if(n=arguments[0],t=2<=arguments.length?Q.call(arguments,1):[],null!=(i=this.bindings)?i[n]:void 0){for(s=0,a=[];s<this.bindings[n].length;)u=this.bindings[n][s],r=u.handler,e=u.ctx,o=u.once,r.apply(null!=e?e:this,t),a.push(o?this.bindings[n].splice(s,1):s++);return a}},t}(),c=window.Pace||{},window.Pace=c,k(c,i.prototype),j=c.options=k({},b,window.paceOptions,q()),B=["ajax","document","eventLag","elements"],H=0,z=B.length;z>H;H++)F=B[H],j[F]===!0&&(j[F]=b[F]);a=function(t){function e(){return J=e.__super__.constructor.apply(this,arguments)}return Y(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(t=document.querySelector(j.target),!t)throw new a;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return t=this.getElement(),t.className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){a=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(j.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",i=["webkitTransform","msTransform","transform"],s=0,o=i.length;o>s;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),u=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(o=this.bindings[t],i=[],r=0,s=o.length;s>r;r++)n=o[r],i.push(n.call(this,e));return i}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),D=window.XMLHttpRequest,X=window.XDomainRequest,W=window.WebSocket,S=function(t,e){var n,r,s;s=[];for(r in e.prototype)try{s.push(null==t[r]&&"function"!=typeof e[r]?"function"==typeof Object.defineProperty?Object.defineProperty(t,r,{get:function(){return e.prototype[r]},configurable:!0,enumerable:!0}):t[r]=e.prototype[r]:void 0)}catch(o){n=o}return s},P=[],c.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Q.call(arguments,1):[],P.unshift("ignore"),n=e.apply(null,t),P.shift(),n},c.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Q.call(arguments,1):[],P.unshift("track"),n=e.apply(null,t),P.shift(),n},_=function(t){var e;if(null==t&&(t="GET"),"track"===P[0])return"force";if(!P.length&&j.ajax){if("socket"===t&&j.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Z.call(j.ajax.trackMethods,e)>=0)return!0}return!1},l=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,s){return _(r)&&n.trigger("request",{type:r,url:s,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new D(e),t(n),n};try{S(window.XMLHttpRequest,D)}catch(r){}if(null!=X){window.XDomainRequest=function(){var e;return e=new X,t(e),e};try{S(window.XDomainRequest,X)}catch(r){}}if(null!=W&&j.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new W(t,e):new W(t),_("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{S(window.WebSocket,W)}catch(r){}}}return Y(e,t),e}(u),I=null,L=function(){return null==I&&(I=new l),I},N=function(t){var e,n,r,s;for(s=j.ajax.ignoreURLs,n=0,r=s.length;r>n;n++)if(e=s[n],"string"==typeof e){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},L().on("request",function(e){var n,r,s,o,i;return o=e.type,s=e.request,i=e.url,N(i)?void 0:c.running||j.restartOnRequestAfter===!1&&"force"!==_(o)?void 0:(r=arguments,n=j.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var e,n,i,u,a,l;if(e="socket"===o?s.readyState<2:0<(u=s.readyState)&&4>u){for(c.restart(),a=c.sources,l=[],n=0,i=a.length;i>n;n++){if(F=a[n],F instanceof t){F.watch.apply(F,r);break}l.push(void 0)}return l}},n))}),t=function(){function t(){var t=this;this.elements=[],L().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,r,s;return r=t.type,e=t.request,s=t.url,N(s)?void 0:(n="socket"===r?new f(e):new g(e),this.elements.push(n))},t}(),g=function(){function t(t){var e,n,r,s,o,i,u=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,t.addEventListener("progress",function(t){return u.progress=t.lengthComputable?100*t.loaded/t.total:u.progress+(100-u.progress)/2},!1),i=["load","abort","timeout","error"],r=0,s=i.length;s>r;r++)e=i[r],t.addEventListener(e,function(){return u.progress=100},!1);else o=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?u.progress=100:3===t.readyState&&(u.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}}return t}(),f=function(){function t(t){var e,n,r,s,o=this;for(this.progress=0,s=["error","open"],n=0,r=s.length;r>n;n++)e=s[n],t.addEventListener(e,function(){return o.progress=100},!1)}return t}(),r=function(){function t(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),o=t.selectors,n=0,r=o.length;r>n;n++)e=o[n],this.elements.push(new s(e))}return t}(),s=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},j.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),o=function(){function t(){var t,e,n,r,s,o=this;this.progress=0,t=0,s=[],r=0,n=R(),e=setInterval(function(){var i;return i=R()-n-50,n=R(),s.push(i),s.length>j.eventLag.sampleCount&&s.shift(),t=m(s),++r>=j.eventLag.minSamples&&t<j.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=100*(3/(t+3))},50)}return t}(),h=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=j.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=O(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=O(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/j.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,j.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),C=null,A=null,y=null,U=null,d=null,v=null,c.running=!1,x=function(){return j.restartOnPushState?c.restart():void 0},null!=window.history.pushState&&(G=window.history.pushState,window.history.pushState=function(){return x(),G.apply(window.history,arguments)}),null!=window.history.replaceState&&(K=window.history.replaceState,window.history.replaceState=function(){return x(),K.apply(window.history,arguments)}),p={ajax:t,elements:r,document:n,eventLag:o},(T=function(){var t,n,r,s,o,i,u,a;for(c.sources=C=[],i=["ajax","elements","document","eventLag"],n=0,s=i.length;s>n;n++)t=i[n],j[t]!==!1&&C.push(new p[t](j[t]));for(a=null!=(u=j.extraSources)?u:[],r=0,o=a.length;o>r;r++)F=a[r],C.push(new F(j));return c.bar=y=new e,A=[],U=new h})(),c.stop=function(){return c.trigger("stop"),c.running=!1,y.destroy(),v=!0,null!=d&&("function"==typeof w&&w(d),d=null),T()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var t;return c.running=!0,y.render(),t=R(),v=!1,d=M(function(e,n){var r,s,o,i,u,a,l,p,f,g,d,m,w,b,k,S;for(p=100-y.progress,s=d=0,o=!0,a=m=0,b=C.length;b>m;a=++m)for(F=C[a],g=null!=A[a]?A[a]:A[a]=[],u=null!=(S=F.elements)?S:[F],l=w=0,k=u.length;k>w;l=++w)i=u[l],f=null!=g[l]?g[l]:g[l]=new h(i),o&=f.done,f.done||(s++,d+=f.tick(e));return r=d/s,y.update(U.tick(e,r)),y.done()||o||v?(y.update(100),c.trigger("done"),setTimeout(function(){return y.finish(),c.running=!1,c.trigger("hide")},Math.max(j.ghostTime,Math.max(j.minTime-(R()-t),0)))):n()})},c.start=function(t){k(j,t),c.running=!0;try{y.render()}catch(e){a=e}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"function"==typeof define&&define.amd?define("pace",[],function(){return c}):"object"==typeof exports?module.exports=c:j.startOnPageLoad&&c.start()}).call(this);
define("jquery.plax",["jquery"],function(r){function t(r){var t=[0,0,0],n=r.css("-webkit-transform")||r.css("-moz-transform")||r.css("-ms-transform")||r.css("-o-transform")||r.css("transform");if("none"!==n){var o=n.split("(")[1].split(")")[0].split(","),e=0,a=0,i=0;16==o.length?(e=parseFloat(o[o.length-4]),a=parseFloat(o[o.length-3]),i=parseFloat(o[o.length-2])):(e=parseFloat(o[o.length-2]),a=parseFloat(o[o.length-1]),i=0),t=[e,a,i]}return t}function n(r){if(0===r.offsetWidth||0===r.offsetHeight)return!1;for(var t=document.documentElement.clientHeight,n=r.getClientRects(),o=0,e=n.length;e>o;o++){var a=n[o],i=a.top>0?a.top<=t:a.bottom>0&&a.bottom<=t;if(i)return!0}return!1}function o(){var r,t=document.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var o in n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",r=window.getComputedStyle(t).getPropertyValue(n[o]));return document.body.removeChild(t),void 0!==r&&r.length>0&&"none"!==r}function e(){return b===!0?!1:void 0!==window.DeviceOrientationEvent}function a(r){if(x=r.gamma,y=r.beta,90===Math.abs(window.orientation)){var t=x;x=y,y=t}return window.orientation<0&&(x=-x,y=-y),d=null===d?x:d,v=null===v?y:v,{x:x-d,y:y-v}}function i(r){if(!((new Date).getTime()<l+f)){l=(new Date).getTime();var t=null!=m.offset()?m.offset().left:0,o=null!=m.offset()?m.offset().top:0,i=r.pageX-t,s=r.pageY-o;if(n(g[0].obj[0].parentNode)){if(e()){if(void 0===r.gamma)return void(b=!0);values=a(r),i=values.x/c,s=values.y/c,i=p>i?p:i>u?u:i,s=p>s?p:s>u?u:s,i=(i+1)/2,s=(s+1)/2}var d,y,v=i/(e()===!0?u:m.width()),x=s/(e()===!0?u:m.height());for(y=g.length;y--;)d=g[y],h.useTransform&&!d.background?(newX=d.transformStartX+d.inversionFactor*d.xRange*v,newY=d.transformStartY+d.inversionFactor*d.yRange*x,newZ=d.transformStartZ,d.obj.css({transform:"translate3d("+newX+"px,"+newY+"px,"+newZ+"px)"})):(newX=d.startX+d.inversionFactor*d.xRange*v,newY=d.startY+d.inversionFactor*d.yRange*x,d.background?d.obj.css("background-position",newX+"px "+newY+"px"):d.obj.css("left",newX).css("top",newY))}}}var s=25,f=1/s*1e3,l=(new Date).getTime(),g=[],m=r(window),c=30,u=1,p=-1,d=null,v=null,b=!1,h=null,w={useTransform:!0};r.fn.plaxify=function(n){return h=r.extend({},w,n),h.useTransform=h.useTransform?o():!1,this.each(function(){for(var o=-1,e={xRange:r(this).data("xrange")||0,yRange:r(this).data("yrange")||0,zRange:r(this).data("zrange")||0,invert:r(this).data("invert")||!1,background:r(this).data("background")||!1},a=0;a<g.length;a++)this===g[a].obj.get(0)&&(o=a);for(var i in n)0==e[i]&&(e[i]=n[i]);if(e.inversionFactor=e.invert?-1:1,e.obj=r(this),e.background){if(pos=(e.obj.css("background-position")||"0px 0px").split(/ /),2!=pos.length)return;if(x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/),y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/),!x||!y)return;e.originX=e.startX=x[2]||0,e.originY=e.startY=y[2]||0,e.transformOriginX=e.transformStartX=0,e.transformOriginY=e.transformStartY=0,e.transformOriginZ=e.transformStartZ=0}else{var s=e.obj.position(),f=t(e.obj);e.obj.css({transform:f.join()+"px",top:s.top,left:s.left,right:"",bottom:""}),e.originX=e.startX=s.left,e.originY=e.startY=s.top,e.transformOriginX=e.transformStartX=f[0],e.transformOriginY=e.transformStartY=f[1],e.transformOriginZ=e.transformStartZ=f[2]}e.startX-=e.inversionFactor*Math.floor(e.xRange/2),e.startY-=e.inversionFactor*Math.floor(e.yRange/2),e.transformStartX-=e.inversionFactor*Math.floor(e.xRange/2),e.transformStartY-=e.inversionFactor*Math.floor(e.yRange/2),e.transformStartZ-=e.inversionFactor*Math.floor(e.zRange/2),o>=0?g.splice(o,1,e):g.push(e)})},r.plax={enable:function(t){t&&(t.activityTarget&&(m=t.activityTarget||r(window)),"number"==typeof t.gyroRange&&t.gyroRange>0&&(c=t.gyroRange)),m.bind("mousemove.plax",function(r){i(r)}),e()&&(window.ondeviceorientation=function(r){i(r)})},disable:function(t){if(r(document).unbind("mousemove.plax"),window.ondeviceorientation=void 0,t&&"boolean"==typeof t.restorePositions&&t.restorePositions)for(var n=g.length;n--;)layer=g[n],h.useTransform&&!layer.background?layer.obj.css("transform","translate3d("+layer.transformOriginX+"px,"+layer.transformOriginY+"px,"+layer.transformOriginZ+"px)").css("top",layer.originY):g[n].background?layer.obj.css("background-position",layer.originX+"px "+layer.originY+"px"):layer.obj.css("left",layer.originX).css("top",layer.originY);t&&"boolean"==typeof t.clearLayers&&t.clearLayers&&(g=[])}},"undefined"!=typeof ender&&r.ender(r.fn,!0)});
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t.util.clone(e[r]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(e,a,n,r){r=r||t.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==a)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=i[o]}return t.languages.DFS(t.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,a,n){for(var r in e)e.hasOwnProperty(r)&&(a.call(e,r,e[r],n||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],a):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],a,r))}},highlightAll:function(e,a){for(var n,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;n=r[i++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,r,i){for(var s,l,o=n;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=n.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var c={element:n,language:s,grammar:l,code:u};if(t.hooks.run("before-highlight",c),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){c.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c)},g.postMessage(JSON.stringify({language:c.language,code:c.code}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(n),t.hooks.run("after-highlight",c)}}},highlight:function(e,n,r){var i=t.tokenize(e,n);return a.stringify(t.util.encode(i),r)},tokenize:function(e,a){var n=t.Token,r=[e],i=a.rest;if(i){for(var s in i)a[s]=i[s];delete a.rest}e:for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var l=a[s];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],c=u.inside,g=!!u.lookbehind,p=0,d=u.alias;u=u.pattern||u;for(var f=0;f<r.length;f++){var m=r[f];if(r.length>e.length)break e;if(!(m instanceof n)){u.lastIndex=0;var h=u.exec(m);if(h){g&&(p=h[1].length);var y=h.index-1+p,h=h[0].slice(p),v=h.length,w=y+v,k=m.slice(0,y+1),b=m.slice(w+1),P=[f,1];k&&P.push(k);var x=new n(s,c?t.tokenize(h,c):h,d);P.push(x),b&&P.push(b),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+l+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var a=t.getAttribute("data-src"),n=(a.match(/\.(\w+)$/)||[,""])[1],r=e[n]||n,i=document.createElement("code");i.className="language-"+r,t.textContent="",i.textContent="Loading…",t.appendChild(i);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(i.textContent=s.responseText,Prism.highlightElement(i)):i.textContent=s.status>=400?"✖ Error "+s.status+" while fetching file: "+s.statusText:"✖ Error: File does not exist or is empty")},s.send(null)})}}();
define(function(){if("undefined"==typeof window)return{load:function(e,t,n){n()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/)||0,n=!1,r=!0;t[1]||t[7]?n=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]?r=!1:t[4]&&(n=parseInt(t[4])<18);var o={};o.pluginBuilder="./css-builder";var a,s,l,i=function(){a=document.createElement("style"),e.appendChild(a),s=a.styleSheet||a.sheet},u=0,c=[],d=function(e){u++,32==u&&(i(),u=0),s.addImport(e),a.onload=f},f=function(){l();var e=c.shift();return e?(l=e[1],void d(e[0])):void(l=null)},h=function(e,t){if(s&&s.addImport||i(),s&&s.addImport)l?c.push([e,t]):(d(e),l=t);else{a.textContent='@import "'+e+'";';var n=setInterval(function(){try{a.sheet.cssRules,clearInterval(n),t()}catch(e){}},10)}},p=function(t,n){var o=document.createElement("link");if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},setTimeout(n,7)};else var a=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==o.href)return clearInterval(a),n()}},10);o.href=t,e.appendChild(o)};return o.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},o.load=function(e,t,r){(n?h:p)(t.toUrl(e+".css"),r)},o});
define("jquery.sliderbox",["jquery","underscore","jquery.easing"],function(t){var i=function(i){this.options=t.extend(!0,{},arguments.callee.options,i),this.$el=t(i.el),this.init()};return t.extend(i.prototype,{init:function(){this.$items=this.$el.children().css({"float":"left"}).detach().addClass("ui-sliderbox-item"),this.$itemBox=t('<div class="ui-sliderbox-box"></div>').css({position:"absolute",left:0,top:0}).append(this.$items).appendTo(this.$el),this.current=0;var i=this.$items.eq(0).outerWidth(!0),e=this.$items.eq(0).outerHeight(!0);this.options.item={width:i,height:e},this.$itemBox.css(2==this.options.direction?{height:e*this.$items.length}:{width:i*this.$items.length}),this.$el.css({position:"relative",overflow:"hidden",width:i,height:e}).addClass("ui-sliderbox"),this.options.control&&this.initControl(),this.slider(0)},initControl:function(){function i(){clearInterval(s.timer),s.timer=setInterval(t.proxy(s.next,s),s.options.delay)}function e(){clearInterval(s.timer)}var s=this;this.$controlBox=t('<div class="ui-sliderbox-control"></div>').appendTo(this.$el),this.$items.each(function(t){s.$controlBox.append('<a href="javascript:;">'+t+"</a>")}),this.$controlBox.on("click","a",function(){var i=t(this);s.slider(i.index())}),this.options.auto&&(this.$el.hover(e,i),i())},slider:function(t){var i=this.options.fx;t=(this.$items.length+t)%this.$items.length,endCss=2==this.direction?{top:this.options.item.height*t}:{left:-this.options.item.width*t},this.$itemBox.stop(!0).animate(endCss,{duration:i.duration,easing:i.easing}),this.$controlBox.children().removeClass("active").eq(t).addClass("active"),this.current=t},prev:function(){this.slider(this.current-1)},next:function(){this.slider(this.current+1)}}),t.extend(i,{options:{direction:"1",displayNumber:1,control:!0,auto:!0,delay:3e3,fx:{duration:400,easing:"easeOutExpo"}}}),t.fn.extend({sliderbox:function(e){e=e||{};var s=Array.prototype.slice.apply(arguments);return s.shift(),this.each(function(){var o=t(this),n=o.data("sliderbox");return"object"==t.type(e)&&(e=t.extend({},e,{el:o}),n=new i(e),o.data("sliderbox",n)),"string"==t.type(e)&&n[e].apply(n,s),this})}}),i});
define("jquery.waterfall",["jquery","underscore","jquery.easing"],function(t,e){var i=function(n){this.options=t.extend(!0,{},i.options,n),this.$el=t(n.el).css({position:"relative"});var o=[];t.extend(this,{createHeight:function(){o=new Array,t.each(e.range(this.options.column),function(){o.push(0)})},getHeight:function(t){return o[t]||o},setHeight:function(t,e){o[t]=e},getMinHeight:function(){return Math.min.apply(null,o)},getMaxHeight:function(){return Math.max.apply(null,o)},getMinIndex:function(){return e(o).indexOf(this.getMinHeight())||0}}),this.createHeight(),this.init()};return t.extend(i.prototype,{init:function(){var t=this;list=this.$el.children().detach().toArray(),t.append(list)},append:function(e){var i=this;e instanceof t&&(e=e.toArray()),t.isArray(e)||(e=[e]),t.each(e,function(){var e=t(this).css({visibility:"hidden"}).appendTo(i.$el),n={width:e.outerWidth(!0),height:e.outerHeight(!0)},o=i.getMinIndex(),r=i.getMinHeight();e.css({position:"absolute",left:o*n.width,top:r}),i.setHeight(o,r+n.height)}),this.$el.height(this.getMaxHeight()),this.show(e)},show:function(e){var i=this,n=i.options.fx;t.each(i.options.sort(e),function(){var e=t(this);i.$el.delay(n.delay).queue(function(){var o=e.position(),r=t.extend({visibility:"visible"},o,i.options.from(o,e)),s=t.extend(o,i.options.to(o,e));e.css(r).animate(s,{duration:n.duration,easing:n.easing}),t(i.$el).dequeue()})})},refresh:function(){this.createHeight(),this.append(this.$el.css({height:0}).stop(!0,!0).children().detach().stop(!0,!0))}}),t.extend(i,{options:{column:2,fx:{delay:100,duration:200,easing:"linear"},from:function(){return{left:300,top:0,opacity:0}},to:function(t){return{left:t.left,top:t.top,opacity:1}},sort:function(t){return t}}}),t.fn.extend({waterfall:function(e){e=e||{};var n=Array.prototype.slice.apply(arguments);return n.shift(),this.each(function(){var o=t(this),r=o.data("waterfall");return"object"==t.type(e)&&(e=t.extend({},e,{el:o}),r=new i(e),o.data("waterfall",r)),"string"==t.type(e)&&r[e].apply(r,n),this})}}),i});