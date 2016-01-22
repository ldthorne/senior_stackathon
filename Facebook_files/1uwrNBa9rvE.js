/*!CK:2243316220!*//*1453201645,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hKLRc"]); }

__d("HubbleContext",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={get:function(j){return h[j];},getPageID:function(){return h.page&&h.page.id;},setContext:function(j){h=j;},setKey:function(j,k){h[j]=k;},reset:function(){h={};}};f.exports=i;},null);
__d('HubbleLogger',['BanzaiLogger','ErrorUtils','HubbleContext','HubbleSurfaces','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=null,n=null,o=null,p=null,q=Object.keys(k).map(function(s){return k[s];}),r={getStatefulFields:function(){return {pageid:j.getPageID(),platform:o,prev_section:p,section:m,surface:n};},logAction:function(s){h.log('HubbleLoggerConfig',babelHelpers._extends({},this.getStatefulFields(),{action:s}));},logMetric:function(s,t){h.log('HubbleLoggerConfig',babelHelpers._extends({},this.getStatefulFields(),{metric:s,metric_value:t}));},reset:function(){m=null;n=null;o=null;p=null;},setActiveSection:function(s){p=m;m=s;},setActiveSurface:function(s){if(!l(q,s)){i.reportError('Hubble: Invalid surface value: '+s);return;}n=s;},setPlatform:function(s){o=s;}};f.exports=r;},null);
__d('FansJewel',['AsyncRequest'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';j.subscribe('marked-seen',function(){new h('/ajax/pages/fans_seen.php').setMethod('POST').send();});}f.exports=i;},null);
__d("XPagesPresenceController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/presence\/",{});},null);
__d('PagePresencePoller',['ActorURI','AsyncRequest','UserActivity','XPagesPresenceController'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=90000,m=0,n=function(p){m=Date.now();var q=h.create(k.getURIBuilder().getURI(),p);new i().setURI(q).send();},o={init:function(p){j.subscribe(function(){if(Date.now()-m>l)n(p);});setInterval(function(){if(j.isActive())n(p);},l);}};f.exports=o;},null);
__d('PagesTimelineChaining',['Arbiter','PageLikeConstants','Parent','Style','UIPagelet','Event','CSS','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q={_recentlyLikedPageIDs:{},container:null,init:function(r,s){this.container=r;if(!this._showChainSuggestions(s.pageID))this._subscriptions=[h.subscribe(i.LIKED,this.onLike.bind(this,s.pageID)),h.subscribe(i.UNLIKED,this.onUnlike.bind(this))];},onLike:function(r,s,t){if(t.profile_id===r&&j.byClass(t.target,"_5d_i")){this._recentlyLikedPageIDs[r]=true;this._showChainSuggestions(r);this._subscriptions.forEach(function(u){return h.unsubscribe(u);});this._subscriptions=[];}},onUnlike:function(r,s){l.loadFromEndpoint('PagesLikeCheckupPagelet',this.container,{},{displayCallback:this.displayCallback.bind(this)});this._subscriptions.forEach(function(t){return h.unsubscribe(t);});this._subscriptions=[];},displayCallback:function(r){r();var s=this.container.firstChild;if(s)k.set(this.container,'height',s.offsetHeight+'px');},_showChainSuggestions:function(r){if(!(r in this._recentlyLikedPageIDs))return false;l.loadFromEndpoint('PagesTimelineChainingPagelet',this.container,{pageID:r},{displayCallback:this.displayCallback.bind(this)});return true;},dismissCallback:function(r,s){n.hide(this.container);delete this._recentlyLikedPageIDs[s];if(this._subscriptions.length){this._subscriptions.forEach(function(t){return h.unsubscribe(t);});this._subscriptions=[];}},attachDismissCallback:function(r,s,t){m.listen(r,'click',this.dismissCallback.bind(this,s,t));}};f.exports=q;},null);
__d("XSEOEngagementMetricController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/xsemc\/",{});},null);
__d('SEOEngagementMetric',['AsyncRequest','Event','Parent','XSEOEngagementMetricController','setTimeout'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m='client_load',n='retain',o='click',p='submit',q=11000,r={_category:'',_id:'',init:function(s,t){this._category=s;this._id=t;l((function(){return this._log(n);}).bind(this),q);i.listen(document,'click',(function(u){var v=u.target||u.srcElement;if(j.byTag(v,'a')){this._log(o);}else if(j.byTag(v,'button'))this._log(p);}).bind(this));i.listen(document,'submit',(function(u){return this._log(p);}).bind(this));this._log(m);},_log:function(event){var s=Date.now()/1000,t={category:this._category,id:this._id,client_time:s,event:event};h.post(k.getURIBuilder().getURI(),t);}};f.exports=r;},null);