/*!CK:2602992640!*//*1453348932,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["HfyvS"]); }

__d("PrivacyConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},ExpansionType:{NONE:0,TAGS_ONLY:1}};},null);
__d('LayerHideOnBlur',['requestAnimationFrame'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();};i.prototype.disable=function(){'use strict';this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;};i.prototype._detach=function(){'use strict';this._onBlur&&this._onBlur.unsubscribe();this._onBlur=null;};i.prototype._attach=function(){'use strict';this._onBlur=this._layer.subscribe('blur',(function(){return h((function(){this._layer.hide();return false;}).bind(this));}).bind(this));};Object.assign(i.prototype,{_subscriptions:null,_onBlur:null});f.exports=i;},null);
__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n={createSpec:function(o){return {displayName:o.displayName,propTypes:{behaviors:m.object,className:m.string,modal:m.bool,autohide:m.number,width:m.number,titleID:m.string,causalElement:m.object,causalElementRef:m.func,shown:m.bool,layerHideOnBlur:m.bool,hideOnEscape:m.bool,onToggle:m.func,fixedTopPosition:m.number},createLayer:function(p){var q=this.props.className,r=babelHelpers._extends({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:q?q.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},o||{}),s=babelHelpers._extends({},o.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)s.LayerHideOnBlur=i;if(this.props.hideOnEscape===true)s.LayerHideOnEscape=j;r.addedBehaviors=this.enumerateBehaviors(s);var t=new h(r,p);t.conditionShow(this.props.shown);return t;},receiveProps:function(p,q){this.updateBehaviors(q.behaviors,p.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(p.shown);this.layer.setWidth(p.width);p.shown&&this.layer.updatePosition();}},_getCausalElement:function(){var p;if(this.props.causalElementRef){p=l.findDOMNode(this.props.causalElementRef());}else p=this.props.causalElement;return p;}};}};f.exports=n;},null);
__d('ReactAbstractContextualDialog',['ContextualDialog','ContextualDialogArrow','LayerAutoFocus','LayerHideOnEscape','LayerRefocusOnHide','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p={createSpec:function(q){return {displayName:q.displayName,propTypes:{position:o.oneOf(['above','below','left','right']),alignment:o.oneOf(['left','center','right']),offsetX:o.number,offsetY:o.number,width:o.number,autoFocus:o.bool,focusContextOnHide:o.bool,arrowBehavior:o.func,behaviors:o.object,shown:o.bool,context:o.object,contextRef:o.func,hoverContext:o.object,hoverContextRef:o.func,hoverShowDelay:o.number,hoverHideDelay:o.number,hideOnEscape:o.bool,onBeforeHide:o.func,onToggle:o.func,hasActionableContext:o.bool},immutableProps:{modal:null},createLayer:function(r){var s=this.props.context||n.findDOMNode(this.props.contextRef()),t=this.props.hoverContext||this.props.hoverContextRef&&n.findDOMNode(this.props.hoverContextRef()),u=babelHelpers._extends({context:s,hoverContext:t,hoverShowDelay:this.props.hoverShowDelay,hoverHideDelay:this.props.hoverHideDelay,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,width:this.props.width,shouldSetARIAProperties:!this.props.hasActionableContext,arrowBehavior:this.props.arrowBehavior||i,addedBehaviors:this.enumerateBehaviors(this.props.behaviors)},q||{}),v=new h(u,r);if(this.props.contextBounds)v.setContextWithBounds(s,this.props.contextBounds);if(this.props.autoFocus!==false)v.enableBehavior(j);if(this.props.hideOnEscape===true)v.enableBehavior(k);if(this.props.focusContextOnHide===false)v.disableBehavior(l);if(this.props.onBeforeHide)v.subscribe('beforehide',this.props.onBeforeHide);v.conditionShow(this.props.shown);return v;},receiveProps:function(r,s){this.updateBehaviors(s.behaviors,r.behaviors);var t=r.context||r.contextRef&&n.findDOMNode(r.contextRef());if(t)if(r.contextBounds){this.layer.setContextWithBounds(t,r.contextBounds);}else this.layer.setContext(t);this.layer.setPosition(r.position).setAlignment(r.alignment).setOffsetX(r.offsetX).setOffsetY(r.offsetY).setWidth(r.width).conditionShow(r.shown);}};}};f.exports=p;},null);
__d('LoadingIndicator.react',['React','Image.react','cx','keyMirror','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k({white:true,blue:true,black:true}),o=k({small:true,medium:true,large:true}),p={white:{large:l('/images/loaders/indicator_blue_large.gif'),medium:l('/images/loaders/indicator_blue_medium.gif'),small:l('/images/loaders/indicator_blue_small.gif')},blue:{large:l('/images/loaders/indicator_white_large.gif'),small:l('/images/loaders/indicator_white_small.gif')},black:{large:l('/images/loaders/indicator_black.gif')}},q=h.createClass({displayName:'LoadingIndicator',render:function(){var r=this.props.color,s=this.props.size;if(!p[r])return h.createElement('span',null);if(!p[r][s])return h.createElement('span',null);var t=this.props.showonasync?"uiLoadingIndicatorAsync":'',u=p[r][s];return (h.createElement(i,babelHelpers._extends({},this.props,{src:u,className:m(this.props.className,t)})));}});q.SIZES=o;q.COLORS=n;f.exports=q;},null);
__d('XUIDialogCancelButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogCancelButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'cancel',label:j._("Cancel")})));}});f.exports=k;},null);
__d('XUIDialogOkayButton.react',['React','XUIDialogButton.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIDialogOkayButton',propTypes:{action:m.oneOf(['confirm','cancel','button']).isRequired},render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,"_2z1w"),action:this.props.action,label:k._("OK")})));}});f.exports=n;},null);
__d('LayerDestroyOnHide',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';var i=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe('hide',function(){setTimeout(i,0);});};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;},null);
__d('LayerFadeOnHide',['Animation','Layer','Style','UserAgent_DEPRECATED','emptyFunction','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o){'use strict';this._layer=o;}n.prototype.enable=function(){'use strict';if(k.ie()<9)return;this._subscription=this._layer.subscribe('starthide',this._handleStartHide.bind(this));};n.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};n.prototype._getDuration=function(){'use strict';return 150;};n.prototype._handleStartHide=function(){'use strict';var o=true,p=i.subscribe('show',function(){p.unsubscribe();o=false;});m((function(){p.unsubscribe();p=null;var q=(function(){this._layer.finishHide();}).bind(this);if(o){this._animate(q);}else q();}).bind(this),0);return false;};n.prototype._animate=function(o){'use strict';var p=this._layer.getRoot();new h(p).from('opacity',1).to('opacity',0).duration(this._getDuration()).ondone(function(){j.set(p,'opacity','');o();}).go();};n.forDuration=function(o){var p,q;'use strict';p=babelHelpers.inherits(r,n);q=p&&p.prototype;function r(){p.apply(this,arguments);}r.prototype._getDuration=l.thatReturns(o);return r;};Object.assign(n.prototype,{_subscription:null});f.exports=n;},null);
__d('SimpleXUIDialog',['DialogX','LayerDestroyOnHide','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnBlur','LayerHideOnEscape','React','XUIDialogCancelButton.react','XUIDialogBody.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){'use strict';if(c.__markCompiled)c.__markCompiled();var u=445,v={show:function(w,x,y,z){var aa=n.createElement(r,{action:'cancel',use:'confirm'});return this.showEx(w,x,aa,y,z);},showConfirm:function(w,x,y,z){var aa=false,ba=n.createElement('div',null,n.createElement(o,{onClick:function(){aa=false;}}),n.createElement(r,{action:'cancel',className:z&&z.autofocusConfirm?"autofocus":'',use:'confirm',onClick:function(){aa=true;}}));function ca(){y(aa);}return this.showEx(w,x,ba,ca,z);},showEx:function(w,x,y,z,aa){aa=aa||{};var ba=[i,k,j,m];if(aa.hideOnBlur!==false)ba.push(l);var ca={width:aa.width||u,xui:true,addedBehaviors:ba};if(x)x=n.createElement(s,{showCloseButton:true},x);if(y)y=n.createElement(q,{'data-testid':'simple_xui_dialog_footer'},y);var da=n.createElement('div',null,x,n.createElement(p,null,w),y),ea=new h(ca,da);if(z)ea.subscribe('hide',z);ea.show();return ea;}};f.exports=v;},null);
__d('ReactLayer',['React','ReactDOM','ReactBrowserEventEmitter','SubscriptionsHandler','emptyFunction','getObjectValues','invariant','renderSubtreeIntoContainer','requestAnimationFrame'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q={componentDidMount:function(){this._layerContainer=document.createElement('div');this._renderContentIntoContainer();this.layer=this.createLayer(this._layerContainer);!this.layer?n(0):undefined;this.layerSubscriptions=new k();this.layerSubscribe('show',(function(){return this.props.onToggle&&this.props.onToggle(true);}).bind(this));this.layerSubscribe('hide',(function(){return this.props.onToggle&&this.props.onToggle(false);}).bind(this));this.layerSubscribe('blur',(function(){return this.props.onBlur&&this.props.onBlur();}).bind(this));this._resetBehaviors();},componentDidUpdate:function(s){this._renderContentIntoContainer();this.receiveProps(this.props,s);},componentWillUnmount:function(){i.unmountComponentAtNode(this._layerContainer);this._layerContainer=null;if(this.layerSubscriptions){this.layerSubscriptions.release();this.layerSubscriptions=null;}if(this.layer){this.layer.destroy();this.layer=null;}},_renderContentIntoContainer:function(){var s=false;o(this,h.createElement('div',null,this.props.children),this._layerContainer,(function(){if(s)p((function(){if(this.layer&&this.layer.isShown())this.layer.updatePosition();}).bind(this));}).bind(this));s=true;},render:function(){return null;},enumerateBehaviors:function(s){s=this.getEffectiveBehaviors(s);return m(s).filter(l.thatReturnsArgument);},_resetBehaviors:function(){this._diffBehaviors({},this.props.behaviors);},updateBehaviors:function(s,t){this._diffBehaviors(s,t);},_diffBehaviors:function(s,t){s=this.getEffectiveBehaviors(s);t=this.getEffectiveBehaviors(t);var u;for(u in s)if(!t[u])this.layer.disableBehavior(s[u]);for(u in t){var v=s[u],w=t[u];if(v&&w){!(v===w)?n(0):undefined;continue;}v&&this.layer.disableBehavior(v);w&&this.layer.enableBehavior(w);}},getEffectiveBehaviors:function(s){if(!this.getDefaultEnabledBehaviors)return s||{};return babelHelpers._extends({},this.getDefaultEnabledBehaviors(),s);},layerSubscribe:function(s,t){var u=this.layer,v=u.subscribe||u.addListener;this.layerSubscriptions.addSubscriptions(v.call(u,s,function(w,x){j.isEnabled()&&t(w,x);}));}},r={createClass:function(s){return h.createClass({mixins:[q,s]});}};f.exports=r;},null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass(h.createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:i}}));f.exports=k;},null);
__d('HasLayerContextMixin',['ReactDOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getContextNode:function(){var j=this.props.context;if(this.props.contextRef){var k=this.props.contextRef();j=k&&h.findDOMNode(k);}return j;}};f.exports=i;},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={swap:function(n,o){var p=k.ie()<=8;if(p){var q=j.create('wbr',{},null);j.appendContent(n,q);}n.href=o;if(p)j.remove(q);},referrer_log:function(n,o,p){var q=h('meta_referrer');q.content='origin';m.swap(n,o);setTimeout(function(){q.content=l.default_meta_referrer_policy;new i(p,{}).send();},100);}};f.exports=m;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('PagesEventObserver',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='pages_client_logging',j={VITAL_WAIT:h.VITAL_WAIT,logData_DEPRECATED:function(k,l){var m={delay:l||h.VITAL_WAIT};h.post(i,k,m);},notify:function(event,k,l,m,n){var o=babelHelpers._extends({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||h.VITAL_WAIT};h.post(i,o,p);}};f.exports=j;},null);
__d("clamp",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){if(i<j)return j;if(i>k)return k;return i;}f.exports=h;},null);
__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k){var l=h();if(k===window)k=l;var m=i(k),n=k===l?document.documentElement:k,o=k.scrollWidth-n.clientWidth,p=k.scrollHeight-n.clientHeight;m.x=Math.max(0,Math.min(m.x,o));m.y=Math.max(0,Math.min(m.y,p));return m;}f.exports=j;},null);
__d('InlineBlock.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l={baseline:null,bottom:"_6d",middle:"_6b",top:"_6e"},m=h.createClass({displayName:'InlineBlock',propTypes:{alignv:k.oneOf(['baseline','bottom','middle','top']),height:k.number,fullWidth:k.bool},getDefaultProps:function(){return {alignv:'baseline',fullWidth:false};},render:function(){var n=l[this.props.alignv],o="_6a";if(this.props.fullWidth)o=j(o,"_5u5j");var p=j(o,n);if(this.props.height!=null){var q=h.createElement('div',{className:j("_6a",n),style:{height:this.props.height+'px'}});return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,o),height:null}),q,h.createElement('div',{className:p},this.props.children)));}else return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,p)}),this.props.children));}});f.exports=m;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('ErrorDialog',['Dialog','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={showAsyncError:function(k){try{return j.show(k.getErrorSummary(),k.getErrorDescription());}catch(l){alert(k);}},show:function(k,l,m,n){return new h().setTitle(k).setBody(l).setButtons([h.OK]).setStackable(true).setModal(true).setHandler(m||i).setButtonsMessage(n||'').show();}};f.exports=j;},null);
__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v;r.subscribe(['show','hide'],function(x,y){var z=k.get(y.getActive(),'Popover');if(z)if(x==='show'){z.showLayer();}else z.hideLayer();});u=babelHelpers.inherits(w,t(i));v=u&&u.prototype;function w(x,y,z,aa){'use strict';v.constructor.call(this);this._root=x;this._triggerElem=y;this._behaviors=z;this._config=aa||{};this._disabled=!!this._config.disabled;this._listeners=new q();if(!this._disabled&&(y.nodeName!=='A'||y.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();y.setAttribute('role','button');k.set(x,'Popover',this);if(r.getActive()===x)this.showLayer();}w.prototype.ensureInit=function(){'use strict';if(!this._layer)this._init();};w.prototype.showLayer=function(){'use strict';this.ensureInit();this._layer.show();r.show(this._root);j.addClass(this._root,'selected');this.inform('show');};w.prototype.getContentRoot=function(){'use strict';return this._root;};w.prototype.getLayer=function(){'use strict';return this._layer;};w.prototype.hideLayer=function(){'use strict';this._layer.hide();};w.prototype.isShown=function(){'use strict';return this._layer&&this._layer.isShown();};w.prototype.setLayerContent=function(x){'use strict';this.ensureInit();if(this._layer.setContent)this._layer.setContent(x);};w.prototype._init=function(){'use strict';var x=this._config.layer;x.enableBehaviors([p]);r.createInstance(x.getRoot()).setSticky(false);x.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&x.enableBehaviors(this._behaviors);this._layer=x;this.inform('init',null,h.BEHAVIOR_PERSISTENT);};w.prototype._onLayerHide=function(){'use strict';r.hide(this._root);j.removeClass(this._root,'selected');this.inform('hide');if(o.getKeyDownCode()===n.ESC)m.set(this._triggerElem);};w.prototype.enable=function(){'use strict';if(!this._disabled)return;this._listeners.engage();this._setupClickListener();this._setupKeyListener();this._disabled=false;};w.prototype.disable=function(){'use strict';if(this._disabled)return;if(this.isShown())this.hideLayer();this._listeners.release();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};w.prototype._setupClickListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'click',s(r.bootstrap,this._triggerElem)));};w.prototype._setupKeyListener=function(){'use strict';this._listeners.addSubscriptions(l.listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};w.prototype._handleKeyEvent=function(event){'use strict';if(event.getModifiers().any)return;var x=l.getKeyCode(event);switch(x){case n.SPACE:case n.DOWN:case n.UP:if(x===n.SPACE||!this.isShown())r.bootstrap(this._triggerElem);break;default:return;}event.prevent();};w.prototype.destroy=function(){'use strict';this.disable();k.remove(this._root,'Popover');};Object.assign(w.prototype,{_layer:null});f.exports=w;},null);
__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,k);m=l&&l.prototype;n.prototype._init=function(){'use strict';var o=new h({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:16}},j.create('div'));o.enableBehaviors([i]);this._config.layer=o;if(this._config.alignh)o.setAlignment(this._config.alignh);if(this._config.layer_content)o.setContent(this._config.layer_content);if(this._config.position)o.setPosition(this._config.position);if(this._config.arrowDimensions)o.setArrowDimensions(this._config.arrowDimensions);m._init.call(this);};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('VirtualCursorStatus',['AccessibilityConfig','Event','KeyStatus','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=false,n=false;function o(event){if(!h.a11yVirtualCursorTrigger)return false;var s=j.isKeyDown(),t=event.clientX,u=event.clientY,v=event.offsetX,w=event.offsetY,x=event.mozInputSource,y=event.getTarget(),z=y.clientWidth,aa=y.clientHeight;if(t===0&&u===0&&n)return true;if(u<0&&t<0&&!n&&!s)return true;if((v<0||v>z||(w<0||w>aa))&&!n&&!s)return true;if(x===0)return true;return false;}function p(){n=true;l(function(){n=false;});}function q(event){m=o(event);l(function(){m=false;});}var r={isVirtualCursorTriggered:function(){return m;},add:function(s){!s?k(0):undefined;var t=i.listen(s,'click',q),u=i.listen(s,'mouseup',p);return {remove:function(){t.remove();u.remove();}};}};f.exports=r;},null);
__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;s=babelHelpers.inherits(u,r(i,k));t=s&&s.prototype;function u(v,w,x,y){'use strict';t.constructor.call(this);this._popover=v;this._triggerElem=w;this._getInitialMenu=typeof x!=='function'?function(){return x;}:x;this._subscriptions=new p();this._subscriptions.addSubscriptions(v.subscribe('init',this._onLayerInit.bind(this)),v.subscribe('show',this._onPopoverShow.bind(this)),v.subscribe('hide',this._onPopoverHide.bind(this)),l.listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this)),q.add(this._triggerElem));y&&this.enableBehaviors(y);}u.prototype.getContentRoot=function(){'use strict';return this._popover.getContentRoot();};u.prototype.setMenu=function(v){'use strict';if(this._menu&&this._menu!==v)this._menu.destroy();this._menu=v;var w=v.getRoot();this._popover.setLayerContent(w);v.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();j.owns(this._triggerElem,w);this.inform('setMenu',null,h.BEHAVIOR_PERSISTENT);};u.prototype.setInitialFocus=function(v,w){'use strict';if(w)v.focusAnItem();};u.prototype.getPopover=function(){'use strict';return this._popover;};u.prototype.getTriggerElem=function(){'use strict';return this._triggerElem;};u.prototype.getInitialMenu=function(){'use strict';return this._getInitialMenu();};u.prototype.getMenu=function(){'use strict';return this._menu;};u.prototype._onLayerInit=function(){'use strict';if(!this._menu)this.setMenu(this._getInitialMenu());this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};u.prototype._onPopoverShow=function(){'use strict';var v=o.isKeyDown()||q.isVirtualCursorTriggered();if(this._menu){this._menu.onShow();this.setInitialFocus(this._menu,v);}this._popoverShown=true;};u.prototype._onPopoverHide=function(){'use strict';if(this._menu)this._menu.onHide();this._popoverShown=false;};u.prototype._handleKeyEvent=function(v,w){'use strict';var x=l.getKeyCode(w);if(x===n.TAB){this._popover.hideLayer();m.set(this._triggerElem);return;}if(w.getModifiers().any)return;switch(x){case n.RETURN:return;default:if(this._menu.handleKeydown(x,w)===false){this._menu.blur();this._menu.handleKeydown(x,w);}break;}w.prevent();};u.prototype._handleKeyEventOnTrigger=function(v){'use strict';var w=l.getKeyCode(v),x=String.fromCharCode(w).toLowerCase();if(/^\w$/.test(x)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(w,v)===false){this._popover.hideLayer();m.set(this._triggerElem);}}};u.prototype._onMenuDone=function(v){'use strict';var w=o.isKeyDown();setTimeout((function(){this._popover.hideLayer();if(w)m.set(this._triggerElem);}).bind(this),0);};u.prototype.enable=function(){'use strict';this._popover.enable();};u.prototype.disable=function(){'use strict';this._popover.disable();};u.prototype.destroy=function(){'use strict';this._subscriptions.release();this._popover.destroy();this._getInitialMenu().destroy();this._menu&&this._menu.destroy();};Object.assign(u.prototype,{_popoverShown:false});f.exports=u;},null);
__d("SelectableMenuUtils",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={doesItemSupportSelect:function(j){return i(j);},isSelected:function(j){return i(j)&&j.isSelected();}};function i(j){return j.select&&j.deselect&&j.isSelected;}f.exports=h;},null);
__d('XUIError',['Promise','ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';n.listen(document.documentElement,'mouseover',function(event){if(o.byClass(r(),aa))return;var oa=o.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});n.listen(document.documentElement,'focusin',function(event){var oa=o.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});n.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new h(function(oa,pa){j.loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(qa,ra,sa){oa(babelHelpers._extends({React:qa,ReactDOM:ra},sa.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},l.get(oa,y));}function fa(oa,pa){l.set(oa,y,pa);}function ga(oa,pa){l.set(oa,y,babelHelpers._extends({},l.get(oa,y),pa));}function ha(oa){l.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.ReactDOM,sa=pa.dialog,ta=pa.dialogMessageNode,ua=ea(oa),va=ua.message;if(va==null)return;var wa=qa.isValidElement(va);if(ia&&!wa)ra.unmountComponentAtNode(ta);if(wa){ra.render(va,ta);}else{!(typeof va==='string'||u(va))?t(0):undefined;if(typeof va==='string')va=w(va);m.setContent(ta,va);}ia=wa;sa.setContext(oa).setPosition(ua.position||'right').setAlignment(ua.alignh||(ua.position==='above'||ua.position==='below'?'right':null)).show();i.notify(s(ta));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.ReactDOM,ra=oa.dialog,sa=oa.dialogMessageNode;if(!da)return;if(ia){qa.unmountComponentAtNode(sa);ia=false;}ra.hide();da=null;});}function ma(oa){if(m.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;k.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){k.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d('MenuSelectableItem',['CSS','MenuItem','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;function m(n){'use strict';l.constructor.call(this,n);this._selected=!!this._data.selected;}m.prototype.getIcon=function(){'use strict';return this._data.icon;};m.prototype.isSelected=function(){'use strict';return this._selected;};m.prototype.select=function(){'use strict';if(this.isDisabled())return false;h.addClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','true');this._selected=true;};m.prototype.deselect=function(){'use strict';h.removeClass(this._root,"_54nd");this._anchor.setAttribute('aria-selected','false');this._selected=false;};m.prototype.render=function(){'use strict';var n=l.render.call(this);if(this._data.selected){h.addClass(n,"_54nd");this._anchor.setAttribute('aria-selected','true');}return n;};Object.assign(m.prototype,{_selected:false});f.exports=m;},null);
__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;n.prototype.focusAnItem=function(){'use strict';for(var o=0;o<this._items.length;o++)if(k.isSelected(this._items[o]))if(this._focusItem(this._items[o])!==false)return true;return m.focusAnItem.call(this);};n.prototype.setValue=function(o){'use strict';if(!this._root)this._render();var p=j(o);this._items.forEach(function(q){if(k.doesItemSupportSelect(q))if(i(p,q.getValue())){q.select();}else if(k.isSelected(q))q.deselect();});this.inform('change',this.getSelection());};n.prototype._handleItemClick=function(o,p){'use strict';if(!k.doesItemSupportSelect(o))return m._handleItemClick.call(this,o,p);var q=this.inform('itemclick',{item:o,event:p});if(q)return;if(this._config.multiple){var r=k.isSelected(o)?o.deselect():o.select();if(r!==false)this.inform('change',this.getSelection());}else{if(!k.isSelected(o))if(o.select()!==false){this._items.forEach(function(s){if(k.isSelected(s)&&s!==o)s.deselect();});this.inform('change',this.getSelection());}this.done();}return o.handleClick();};n.prototype.getSelection=function(){'use strict';var o=[];this._items.forEach(function(p){if(k.isSelected(p))o.push({label:p.getLabel(),value:p.getValue(),item:p});});if(!this._config.multiple)o=o[0];return o;};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('MenuTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={className:"_569t"};},null);
__d('ContextualLayerPositionClassOnContext',['CSS','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){'use strict';this._layer=l;}j.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){h.removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};j.prototype._updateClassName=function(l,m){'use strict';var n=this._layer.getContext(),o=k(m);if(this._prevClassName){if(this._prevClassName===o)return;h.removeClass(n,this._prevClassName);}h.addClass(n,o);this._prevClassName=o;};function k(l){var m=l.getAlignment(),n=l.getPosition();if(n==='below'){if(m==='left'){return "_nk";}else if(m==='right'){return "_nl";}else return "_nm";}else if(n==='above'){if(m==='left'){return "_nn";}else if(m==='right'){return "_no";}else return "_np";}else if(n==='left'){return "_nq";}else return "_nr";}Object.assign(j.prototype,{_subscription:null,_prevClassName:null});f.exports=j;},null);
__d('ContextualDialogXUITheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};f.exports=i;},null);
__d('XUIAmbientNUXTheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null);
__d("XPrivacyRemindersDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool",defaultValue:false}});},null);