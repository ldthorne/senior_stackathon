/*!CK:1345847983!*//*1453176878,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wetkW"]); }

__d("CommerceSelfServeNUXType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FIRST_ORDER_BANNER:"first_order_banner",FIRST_ORDER_MODAL:"first_order_modal",SHOP_TAB_IN_PUBLISHING_TOOLS:"shop_tab_pt_self_serve_nux",SHOP_TAB_ON_PAGE:"shop_tab_page_self_serve_nux"};},null);
__d('TabBarItem.react',['React','ReactDOM','Focus','Event','Keys','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=h.createClass({displayName:'TabBarItem',propTypes:{wrapper:o.func.isRequired,shouldWrapTab:o.bool,tabIndex:o.oneOf([-1,0]),selected:o.bool,focused:o.bool,hideFocusRing:o.bool,mockSpacebarClick:o.bool},getDefaultProps:function(){return {wrapper:h.createClass({displayName:'wrapper',render:function(){return h.createElement('li',this.props,this.props.children);}}),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};},render:function(){var q=this.props,r=q.selected,s=q.focused,t=q.hideFocusRing,u=q.shouldWrapTab,v="_45hc"+(r?' '+"_1hqh":''),w=s&&t?"_468f":'';if(u)return this._renderWrappedTabBarItem(v,w);return this._renderTabBarItem(n(v,w));},_renderWrappedTabBarItem:function(q,r){var s=this.props,t=s.className,u=s.href,v=s.ajaxify,w=s.tabIndex,x=s.rel,y=s.target,z=s.selected,aa=s.wrapper,ba=s.mockSpacebarClick;u=u||'#';var ca={};if(ba)ca.onKeyDown=this.onKeyDown;var da=h.createElement('a',{ref:'tab',ajaxify:v,href:u,role:'tab',rel:x,target:y,tabIndex:w,className:r,'aria-selected':z},this.props.children);return (h.createElement(aa,babelHelpers._extends({},this.props,{tabIndex:null,className:n(t,q),role:'presentation'}),h.cloneElement(da,ca)));},_renderTabBarItem:function(q){var r=this.props,s=r.className,t=r.href,u=r.selected,v=r.mockSpacebarClick;t=t||'#';var w={};if(v)w.onKeyDown=this.onKeyDown;var x=h.createElement('a',babelHelpers._extends({},this.props,{href:t,ref:'tab',role:'tab',className:n(s,q),'aria-selected':u}),this.props.children);return h.cloneElement(x,w);},componentDidMount:function(){this.focus();},componentDidUpdate:function(){this.focus();},focus:function(){if(this.props.focused)j.set(this.refs.tab);},onKeyDown:function(event){var q=k.getKeyCode(event);if(q===l.SPACE&&this.refs.tab){i.findDOMNode(this.refs.tab).click();k.prevent(event);}}});f.exports=p;},null);
__d('TabBar.react',['React','ReactDOM','ReactChildren','TabBarItem.react','Event','RTLKeys','BootloadedComponent.react','JSResource','cx','fbt','joinClasses','invariant','setTimeout','clearTimeout','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=h.PropTypes,x=q._("More"),y=h.createClass({displayName:'TabBarItemWrapper',statics:{getComponent:function(aa){return aa.component;}},render:function(){return this.props.component;}}),z=h.createClass({displayName:'TabBar',_blurTimeout:null,propTypes:{activeTabKey:w.string,alwaysShowActive:w.bool,defaultActiveTabKey:w.string,dropdownMenuClassName:w.string,maxTabsVisible:w.number.isRequired,moreLabel:w.string,onTabClick:w.func.isRequired,dropdownTabComponent:w.func.isRequired,onWidthCalculated:w.func.isRequired,shouldCalculateVisibleTabs:w.bool},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:k,maxTabsVisible:Infinity,moreLabel:x,onTabClick:v.thatReturnsTrue,onWidthCalculated:v,shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true};},setWidth:function(aa){i.findDOMNode(this).style.width=aa;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var aa=this.getTabs(),ba=aa.length,ca=this.getActiveTabIndex(),da=aa[ca],ea=this.getActiveTabIndex(true),fa,ga,ha;if(da)fa=da.key;if(this.state.shouldCalculateVisibleTabs){ga=aa.map((function(ra,sa){return this._wrapTab(ra,sa,fa,null,ea,false,false);}).bind(this));if(ba>2){var ia=this.props.dropdownTabComponent;ga.push(h.createElement(ia,{key:'_dropdown',ref:'more',className:"_45hd _2pik"},h.createElement('span',{className:"_1b0"},this.props.moreLabel)));}}else{var ja=this._groupTabsByVisibility();ga=ja.visibleTabs;ha=ja.extraTabs;var ka=this._isDropdownSelected(),la=this.state.visibleTabsCount,ma=this.state.focusedTabKey;ma=ma&&this.getFocusedTabIndex()===-1?z.MORE_TAB_KEY:ma;ga=ga.map((function(ra,sa){return this._wrapTab(ra,sa,fa,ma,ea,true,true);}).bind(this));ha=ha.map((function(ra,sa){return this._wrapTab(ra,sa,fa,null,ea,true,false);}).bind(this));if(ha.length){var na;if(la===0&&da)na=da;var oa=na&&na.props.children||this.props.moreLabel,pa='_dropdown',qa=h.createElement(n,{bootloadLoader:o('TabBarDropdownItem.react'),bootloadPlaceholder:h.createElement('div',null),menuClassName:this.props.dropdownMenuClassName,selected:ka,focused:ma===z.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,pa),onBlur:this.onBlur,key:pa,ref:'more',label:oa,tabComponent:this.props.dropdownTabComponent},ha);if(la===0){ga=qa;}else ga.push(qa);}}return (h.createElement('ul',babelHelpers._extends({},this.props,{className:r(this.props.className,"_43o4"),role:'tablist',onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),ga));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillUnmount:function(){u(this._blurTimeout);},componentWillReceiveProps:function(aa){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:aa.activeTabKey||this.state.activeTabKey});},shouldComponentUpdate:function(aa,ba){if(this.state.focusedTabKey&&!ba.focusedTabKey)return false;if(!this.state.focusedTabKey&&!ba.focusedTabKey&&this.state.previousFocusedTabKey&&!ba.previousFocusedTabKey)return false;return true;},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){this.props.onWidthCalculated(i.findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var aa=this.getTabs(),ba=aa.length,ca=Math.min(ba,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:ca,shouldCalculateVisibleTabs:false});return;}var da=[];for(var ea=0;ea<ba;ea++)da.push(i.findDOMNode(this.refs[ea]).offsetWidth);var fa=this.getActiveTabIndex();if(this.props.alwaysShowActive&&fa!==-1){aa.unshift(aa.splice(fa,1)[0]);da.unshift(da.splice(fa,1)[0]);}var ga=i.findDOMNode(this).offsetWidth;ca=0;var ha=0;for(ea=0;ea<ba;ea++){var ia=da[ea];if(ha+ia>ga){if(ca>0&&ba>2){var ja=i.findDOMNode(this.refs.more).offsetWidth;while(ca>0&&(ha+ja>ga||ba-ca<2)){ca--;ha-=da[ca];}}else ca=0;break;}ca++;ha+=ia;}this.setState({visibleTabsCount:Math.min(ca,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var aa=arguments.length<=0||arguments[0]===undefined?false:arguments[0],ba=this.state.activeTabKey,ca=[];if(aa){var da=this._groupTabsByVisibility(),ea=da.visibleTabs;ca=ea;}else ca=this.getTabs();return ca.findIndex(function(fa){return fa&&fa.key===ba;});},getFocusedTabIndex:function(){var aa=this.state.focusedTabKey||this.state.previousFocusedTabKey,ba=this._groupTabsByVisibility(),ca=ba.visibleTabs;return ca.findIndex(function(da){return da&&da.key===aa;});},getFocusedTab:function(){var aa=this.state.focusedTabKey,ba=this._groupTabsByVisibility(),ca=ba.visibleTabs,da=ca.findIndex(function(ea){return ea&&ea.key===aa;});return ca[da];},onClick:function(aa,event){var ba=this.props.onTabClick(aa,event);if(ba!==false&&this.isMounted())this.activateTab(aa);},onMouseDown:function(){this.setState({hideFocusRing:true});},onKeyDown:function(event){var aa=l.getKeyCode(event);switch(aa){case m.UP:case m.getRight():case m.DOWN:case m.getLeft():var ba,ca,da,ea=this._groupTabsByVisibility(),fa=ea.visibleTabs,ga=aa===m.UP||aa===m.getLeft(),ha=ga?-1:1,ia=ga?0:fa.length-1,ja=this.getFocusedTabIndex();if(ja===-1&&ha===-1)ja=fa.length;if(ja===-1){da=null;}else if(ja===ia&&ha===1){da=z.MORE_TAB_KEY;}else{ba=ga?Math.max:Math.min;ca=ba(ja+ha,ia);da=fa[ca].key;}if(da)this.setState({focusedTabKey:da,hideFocusRing:false});break;case m.RETURN:var ka=this.getFocusedTab();if(ka){var la=ka.key,ma=this.props.onTabClick(la,event);if(ma!==false&&this.isMounted())this.activateTab(la);}break;}},onKeyUp:function(event){if(l.getKeyCode(event)===m.TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false});},onFocus:function(aa,event){u(this._blurTimeout);if(aa!==this.state.focusedTabKey){this.setState({focusedTabKey:aa,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation();}},onBlur:function(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=t((function(){this.setState({previousFocusedTabKey:null});}).bind(this),z.BLUR_TIMEOUT);},_wrapTab:function(aa,ba,ca,da,ea,fa,ga){!(aa.key!==z.MORE_TAB_KEY)?s(0):undefined;var ha=ca===aa.key,ia=da===aa.key,ja={selected:ha,focused:ia,tabIndex:ha||ea===-1&&ba===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(fa){ja.onClick=this.onClick.bind(this,aa.key);ja.onMouseDown=this.onMouseDown;}else ja.mockSpacebarClick=false;if(ga){ja.onFocus=this.onFocus.bind(this,aa.key);ja.onBlur=this.onBlur;}aa=h.cloneElement(aa,ja);return (h.createElement(y,{key:aa.key,component:aa,ref:ba}));},activateTab:function(aa){if(aa)this.setState({activeTabKey:aa,focusedTabKey:aa,shouldCalculateVisibleTabs:true});},getTabs:function(){var aa=[];j.forEach(this.props.children,function(ba){if(ba)aa.push(ba);});return aa;},_groupTabsByVisibility:function(){var aa=this.state.visibleTabsCount,ba=this.getTabs(),ca=this.getActiveTabIndex(),da,ea,fa;if(!this.props.alwaysShowActive||ca<aa||aa===0){fa=ba.slice(aa);ea=ba.slice(0,aa);}else{da=ba.splice(ca,1)[0];var ga=aa>0?aa-1:0;fa=ba.slice(ga);ea=ba.slice(0,ga);ea.push(da);}return {visibleTabs:ea,extraTabs:fa};},_isDropdownSelected:function(){var aa=this.state.visibleTabsCount,ba=this.getActiveTabIndex(),ca=!this.props.alwaysShowActive&&ba>=aa||aa===0&&ba>-1;return ca;}});z.MORE_TAB_KEY='_moreTab';z.BLUR_TIMEOUT=120;z.Tab=k;f.exports=z;},null);
__d('XUIPageNavigationItem.react',['React','TabBarItem.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIPageNavigationItem',propTypes:{selected:m.bool},getDefaultProps:function(){return {selected:false};},render:function(){var o="_5vwz"+(this.props.selected?' '+"_5vwy":'');return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,o)}),h.createElement('div',{className:"_4jq5"},this.props.children),h.createElement('span',{className:"_13xf"})));}});f.exports=n;},null);
__d('XUIPageNavigationGroup.react',['React','TabBar.react','XUIPageNavigationItem.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'XUIPageNavigationGroup',propTypes:{moreLabel:k.string,maxTabsVisible:function(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))return new Error('Invalid `'+n+'` supplied to `'+o+'`, '+'expected positive integer.');},width:k.string},getDefaultProps:function(){return {maxTabsVisible:Infinity};},componentDidUpdate:function(){this.refs.bar.setWidth(this.props.width);},componentDidMount:function(){this.refs.bar.setWidth(this.props.width);},render:function(){return h.createElement(i,babelHelpers._extends({},this.props,{ref:'bar'}),this.props.children);}});l.Item=j;f.exports=l;},null);
__d('XUIPageNavigation.react',['Arbiter','CSS','DOMQuery','Event','LeftRight.react','React','ReactDOM','ReactChildren','ReactComponentWithPureRenderMixin','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','XUIPageNavigationGroup.react','csx','cx','invariant','joinClasses','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa=m.PropTypes,ba=15,ca='bluebar',da='caret',ea=m.createClass({displayName:'XUIPageNavigation',mixins:[p],propTypes:{selectedIndicator:aa.oneOf([da,ca]),caretColor:aa.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),size:aa.oneOf(['small','medium']),scrollThreshold:aa.number},getDefaultProps:function(){return {selectedIndicator:ca,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0};},getInitialState:function(){return {activeTabKey:undefined,leftWidth:null};},componentDidMount:function(){this._subscriptions=new q();this.resizeNavbarGroups();this._listenForNavbarResize();var fa="^.fixed_elem._5vx1";this.wrapper=j.scry(n.findDOMNode(this),fa)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(r.subscribe('change',(function(){if(r.isTiny()){this._bound.remove();}else this._setViewportBounds();}).bind(this)));}if(this.wrapper||j.scry(n.findDOMNode(this),"^._k").length)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(fa,event){if(this.props.onTabClick){var ga=this.props.onTabClick(fa,event);if(!ga)return ga;}if(!k.$E(event).isDefaultRequested())this.setState({activeTabKey:fa});},onWidthCalculated:function(fa,ga){this[fa?'_rightWidth':'_leftWidth']=ga;},render:function(){var fa=this.props.selectedIndicator,ga=this.props.size,ha="_5vx2"+(ga==='small'?' '+"_5vx3":'')+(ga==='medium'?' '+"_5vx4":'')+(fa===da?' '+"_5vx5":'')+(fa===ca?' '+"_5vx6":''),ia=null;if(fa===da){var ja=this.props.caretColor;ia=(ja==='bg-blue'?"_2d2c":'')+(ja==='fbui-desktop-wash'?' '+"_4_np":'')+(ja==='fbui-desktop-background-light'?' '+"_4_nr":'')+(ja==='fbui-red'?' '+"_4_ns":'')+(ja==='fbui-green'?' '+"_4_nv":'')+(ja==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(ja==='white'?' '+"_5-f":'');}var ka=y(ha,ia,this.props.className),la=[],ma=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;o.forEach(this.props.children,(function(na,oa){var pa={onTabClick:this.onTabClick,activeTabKey:ma,onWidthCalculated:this.onWidthCalculated.bind(this,oa),ref:oa?'right':'left',key:oa};if(oa===0)pa.width=this.state.leftWidth;la.push(m.cloneElement(na,pa));}).bind(this));!(la.length===1||la.length===2)?x(0):undefined;return (m.createElement('div',{className:ka},m.createElement(l,{className:"_5vx7"},la)));},_setViewportBounds:function(){var fa=this.wrapper.offsetHeight,ga=t.getTop();this._bound=t.addTop(ga+fa);h.subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(k.listen(window,'resize',z(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(k.listen(window,'scroll',(function(){var fa=s.getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===fa)return;this._hasDropshadow=fa;i.conditionClass(n.findDOMNode(this),"_51j8",fa);}).bind(this)));},resizeNavbarGroups:function(){if(!this.refs.left)return;var fa=n.findDOMNode(this).clientWidth;if(isNaN(fa))return;if(!isNaN(this._leftWidth)&&this.refs.right){var ga;ga=fa-this._leftWidth-ba;if(this._leftWidth<ga)ga=this._leftWidth-ba;this.setState({rightWidth:ga+'px'});}if(!isNaN(this._rightWidth)){var ha;ha=fa-this._rightWidth-ba;if(ha<this._rightWidth)ha=this._rightWidth+ba;this.setState({leftWidth:ha+'px'});}else if(!this.refs.right)this.setState({leftWidth:fa+'px'});}});ea.Group=u;ea.Item=u.Item;ea.Indicator={BlueBar:ca,Caret:da};f.exports=ea;},null);
__d('ComposerXPages',['Arbiter','CurrentUser','DOM','DOMScroll','URI','Event','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={initScrollToComposer:function(p){m.listen(p,'click',(function(){this._scrollAndFocus(n('pagelet_timeline_recent'));}).bind(this));},initScrollToComposerWithUserVoice:function(p,q){m.listen(p,'click',(function(){var r=n(q);h.inform('ComposerXPages/composePostWithActor',{actorID:i.getID(),callback:function(){j.find(r,'textarea.input').focus();}});this._scrollAndFocus(r);}).bind(this));},scrollToComposer:function(p){var q=window.location.href;if(l.getRequestURI().getQueryData().focus_composer||l.getRequestURI().getQueryData().scroll_to_composer){m.listen(window,'load',(function(){this._scrollAndFocus(p);}).bind(this));}else if(q.indexOf("focus_composer")!=-1)this._scrollAndFocus(p);},registerForAutoClose:function(p,q){h.subscribe('Pages/composeFinished',function(r,s){if(s.composerID===q){p.hide();if(s.contentID)h.inform('composer/publish',{content_id:s.contentID,matchData:{content_id:s.contentID}});}});},_scrollAndFocus:function(p){k.scrollTo(p,500,false,false,0,function(){j.find(p,'textarea.input').focus();});}};f.exports=o;},null);
__d('ContextRowEventLogger',['Event','BanzaiLogger'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={registerContextRowClickAction:function(k,l){h.listen(k,'click',function(){i.log('PageContextRowEventsLoggerConfig',l);});}};f.exports=j;},null);
__d("XCommerceSelfServeMerchantNUXSeenController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/commerce\/self-serve\/merchant\/mark-nux-seen\/",{page_id:{type:"Int",required:true},nux_type:{type:"Enum",required:true,enumType:1}});},null);
__d('PagesNavigationTabNUX.react',['AsyncRequest','CommerceSelfServeNUXType','React','XCommerceSelfServeMerchantNUXSeenController','XUIAmbientNUX.react','fbt','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=j.createClass({displayName:'PagesNavigationTabNUX',propTypes:{contextRef:o.func.isRequired,pageID:o.string.isRequired,shown:o.bool.isRequired,tab:o.string.isRequired},getInitialState:function(){return {shown:true};},componentDidMount:function(){var q=k.getURIBuilder().setInt('page_id',this.props.pageID).setEnum('nux_type',i.SHOP_TAB_ON_PAGE).getURI();new h(q).send();},render:function(){!(this.props.tab==='shop')?n(0):undefined;if(!this.props.shown)return null;return (j.createElement(l,{contextRef:(function(){return this.props.contextRef(this.props.tab);}).bind(this),customwidth:250,key:this.props.tab,onCloseButtonClick:(function(){return this.setState({shown:false});}).bind(this),position:'above',shown:this.state.shown,width:'custom'},m._("New! Visit this tab to manage your new Shop.")));}});f.exports=p;},null);
__d("XPageTabsReorderingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/tabs\/reorder\/",{page_id:{type:"Int",required:true},__asyncDialog:{type:"Int"}});},null);
__d('PagesNavigationBar.react',['AsyncRequest','DOM','DOMContainer.react','Event','PagesEventObserver','PagesEventType','PagesNavigationTabNUX.react','React','ReactDOM','XPageTabsReorderingController','XUIPageNavigation.react','XUIPageNavigationGroup.react','XUIPageNavigationItem.react','UIPagelet','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x=o.PropTypes,y='manage_tabs',z=8,aa=o.createClass({displayName:'PagesNavigationBar',propTypes:{isPresence:x.bool.isRequired,pageID:x.string.isRequired,selectedKey:x.string.isRequired,showAddSection:x.bool.isRequired,showManageSections:x.bool.isRequired,tabsData:x.array.isRequired,visibleTabs:x.number.isRequired},getInitialState:function(){return {leftChildWidth:'100%',pagesActionsPageletDOM:i.create('div',{className:"_58gm"}),showNUXes:false};},shouldComponentUpdate:function(ba,ca){return this.props.pageID!==ba.pageID||this.state.leftChildWidth!==ca.leftChildWidth;},componentDidMount:function(){this._fetchPagesActionsSection();this.setState({showNUXes:true});},render:function(){return (o.createElement('div',null,this._getTabNavigationSection(),this._getPagesActionsSection(),this._getTabNUXes()));},_resize:function(ba){ba();if(this.state.pagesActionsPageletDOM===null)return;var ca=this.state.pagesActionsPageletDOM.clientWidth+z,da=p.findDOMNode(this).clientWidth-ca;k.fire(window,'resize',{});this.setState({leftChildWidth:da+'px'});},_getPagesActionsSection:function(){if(!this.props.isPresence&&!this.props.showAddSection)return null;return (o.createElement('div',{className:"_4c6a"},o.createElement(j,null,this.state.pagesActionsPageletDOM)));},_fetchPagesActionsSection:function(){if(!this.props.isPresence&&!this.props.showAddSection)return;u.loadFromEndpoint('PagesActionsPagelet',this.state.pagesActionsPageletDOM,{page:this.props.pageID,tabkey:this.props.selectedKey,onlyshowaddsection:!this.props.isPresence},{displayCallback:this._resize});},_getTabNavigationSection:function(){var ba=this.props.tabsData.map(function(ea){return (o.createElement(t,{href:ea.href,rel:ea.rel,ajaxify:ea.ajaxify,key:ea.key},o.createElement('span',{ref:ea.key},ea.label)));}),ca=this._getManageSectionsTab();if(ca!==null)ba.push(ca);var da=ba.length===this.props.visibleTabs+1?ba.length:this.props.visibleTabs;return (o.createElement('div',{style:{width:this.state.leftChildWidth}},o.createElement(r,{defaultActiveTabKey:this.props.selectedKey,onTabClick:this._onTabClick},o.createElement(s,{maxTabsVisible:da},ba))));},_getTabNUXes:function(){return this.props.tabsData.map((function(ba){return ba.show_nux?o.createElement(n,{contextRef:(function(ca){return this.refs[ca];}).bind(this),key:ba.key+'_nux',pageID:this.props.pageID,shown:this.state.showNUXes,tab:ba.key}):null;}).bind(this));},_onTabClick:function(ba){l.notify(m.CLICK_PROFILE_NAVBAR_TAB,this.props.pageID,{tab_key:ba,is_www_presence:this.props.isPresence});if(ba===y){var ca=q.getURIBuilder().setInt('page_id',this.props.pageID).getURI();new h(ca).setData({rel:'dialog'}).send();return false;}return true;},_getManageSectionsTab:function(){if(!this.props.showManageSections)return null;return (o.createElement(t,{className:"_3ew_",key:y},w._("Manage Tabs")));}});f.exports=aa;},null);
__d('PagesPostsSection',['Arbiter','LoadingIndicator.react','Parent','React','ReactDOM','UIPagelet','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={HIGHLIGHTS:0,ALL_POSTS:1};function p(q,r,s,t){'use strict';this.$PagesPostsSection1=q;this.$PagesPostsSection2=s;this.$PagesPostsSection3=t||o.HIGHLIGHTS;this.$PagesPostsSection4=null;if(r){this.$PagesPostsSection5=r;this.$PagesPostsSection5.setPostClickHandler(this.$PagesPostsSection6.bind(this));}if(!this.$PagesPostsSection2.hidden)this.$PagesPostsSection4=h.subscribe('PagesTimelineSearch/search',this.$PagesPostsSection7.bind(this));}p.prototype.$PagesPostsSection7=function(q,r){'use strict';var s=j.byClass(this.$PagesPostsSection1,"_1k4h");s.parentNode.style.minHeight=window.innerHeight+'px';l.render(k.createElement(i,{size:'small',color:'white',className:'loadingIndicator'}),this.$PagesPostsSection1);this.$PagesPostsSection2.search_query=r.query;m.loadFromEndpoint('PagePostsSectionPagelet',s.parentNode,this.$PagesPostsSection2,{displayCallback:(function(t){if(this.$PagesPostsSection4){h.unsubscribe(this.$PagesPostsSection4);this.$PagesPostsSection4=null;}t();h.inform('PagesTimelineSearch/searchDone',{query:r.query});}).bind(this)});};p.prototype.$PagesPostsSection6=function(q,r){'use strict';var s=j.byClass(this.$PagesPostsSection1,"_1k4h");s.parentNode.style.minHeight=window.innerHeight+'px';l.render(k.createElement(i,{size:'small',color:'white',className:'loadingIndicator'}),this.$PagesPostsSection1);r.item.disable();if(this.$PagesPostsSection3!=o.ALL_POSTS){this.$PagesPostsSection3=o.ALL_POSTS;this.$PagesPostsSection2.show_all_posts=true;}else{this.$PagesPostsSection3=o.HIGHLIGHTS;this.$PagesPostsSection2.show_all_posts=false;}m.loadFromEndpoint('PagePostsSectionPagelet',s,this.$PagesPostsSection2,{displayCallback:function(t){t();r.item.enable();}});};f.exports=p;},null);
__d('PagesPostsSections',['Arbiter','CSS','DOM','DOMScroll','Event','PagesTimelineController','ScrollingPager','Vector','csx','queryThenMutateDOM','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=120,t='PagesPostsSections/scrollListener';function u(v){'use strict';this.$PagesPostsSections1=v;this.$PagesPostsSections2={};this.$PagesPostsSections3=0;this.$PagesPostsSections4=0;for(var w=0;w<this.$PagesPostsSections1.length;w++){this.$PagesPostsSections2[this.$PagesPostsSections1[w].key]={section:this.$PagesPostsSections1[w].section,index:w};this.$PagesPostsSections1[w].loaded=!w;this.$PagesPostsSections1[w].fire_on_scroll_enabled=true;this.$PagesPostsSections1[w].first_posts_loaded=!w;}var x=function(y,z){if(z.section_index+1<this.$PagesPostsSections1.length){i.show(this.$PagesPostsSections1[z.section_index+1].section);h.inform('dom-scroll');}if(this.$PagesPostsSections3<this.$PagesPostsSections1.length-1)this.$PagesPostsSections1[++this.$PagesPostsSections3].loaded=true;};r(h.subscribe(m.SECTION_FULLY_LOADED,x.bind(this)));r(h.subscribe(m.LOAD_SECTION,this.loadSection.bind(this)));r(l.listen(window,'scroll',this.scrollListener.bind(this)));r(h.subscribe(m.FIRST_POSTS_LOADED,this.firstPostsLoaded.bind(this)));r(h.subscribe(m.REMOVE_SECTION,this.removeSection.bind(this)));}u.prototype.firstPostsLoaded=function(v,w){'use strict';var x=document.getElementsByClassName('ego_ads_boost_post_nux_context');if(x.length){var y=o.getScrollPosition().x,z=o.getElementPosition(x[0]).y-s;k.scrollTo(new o(y,z,'document'));}var aa=this.$PagesPostsSections2[w.section_key];aa.section.style.minHeight='';this.$PagesPostsSections1[aa.index].first_posts_loaded=true;};u.prototype.loadSection=function(v,w){'use strict';var x=this.$PagesPostsSections2[w.section_key].section,y=this.$PagesPostsSections2[w.section_key].index;for(var z=0;z<y;z++){if(z!==y)this.setFireOnScroll(z,false);if(z>=this.$PagesPostsSections3){i.show(this.$PagesPostsSections1[z].section);this.$PagesPostsSections1[z].loaded=true;}}this.$PagesPostsSections3=y;if(!this.$PagesPostsSections1[y].first_posts_loaded){if(!this.$PagesPostsSections1[y].fire_on_scroll_enabled)this.setFireOnScroll(y,true);x.style.minHeight=window.innerHeight+'px';}if(!y&&!this.$PagesPostsSections1[y].loaded){k.scrollTo(document.body);}else{i.show(x);this.$PagesPostsSections1[this.$PagesPostsSections3].loaded=true;var aa=o.getScrollPosition().x,ba=o.getElementPosition(x).y-s;k.scrollTo(new o(aa,ba,'document'));}};u.prototype.setFireOnScroll=function(v,w){'use strict';var x=this.$PagesPostsSections1[v].section,y=j.scry(x,"div._5t6j"),z=y.length?y[y.length-1]:null;if(z){var aa=n.getInstance(z.id);if(aa){this.$PagesPostsSections1[v].fire_on_scroll_enabled=w;if(w){aa.register();}else aa.removeOnVisible();}}};u.prototype.scrollListener=function(event){'use strict';q(this.getActiveSectionIndex.bind(this),(function(){m.activateScrubberItem(this.$PagesPostsSections1[this.$PagesPostsSections4].key);}).bind(this),t);};u.prototype.getActiveSectionIndex=function(){'use strict';var v=0;for(var w=0;w<this.$PagesPostsSections1.length;w++){var x=this.$PagesPostsSections1[w].section,y=o.getElementPosition(x,'viewport').y;if(y>s)break;if(this.$PagesPostsSections1[w].loaded)v=w;}if(v!=this.$PagesPostsSections4)this.$PagesPostsSections4=v;};u.prototype.removeSection=function(v,w){'use strict';var x=this.$PagesPostsSections2[w.section_key].index;this.$PagesPostsSections1[x].loaded=false;i.hide(this.$PagesPostsSections2[w.section_key].section);};f.exports=u;},null);
__d('PlaceActionLink',['AsyncRequest','Dialog'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={start_claim_link:function(k){var l=new h().setMethod('POST').setURI('/ajax/places/claim/start_claim.php').setData({id:k});new i().setAsync(l).show();return false;},refer_claim_link:function(k){var l=new h().setMethod('POST').setURI('/ajax/places/claim/refer_claim.php').setData({id:k});new i().setAsync(l).show();return false;}};f.exports=j;},null);
__d('legacy:place-action-link',['PlaceActionLink'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.PlaceActionLink=c('PlaceActionLink');},3);
__d('ProfileCoverEditControls',['ArbiterMixin','Event','mixin'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,j(h));l=k&&k.prototype;function m(n,o,p,q){'use strict';l.constructor.call(this);this.root=n;this.save=o;this.cancel=p;this.input=q;i.listen(o,'click',(function(){this.inform('save');}).bind(this));i.listen(p,'click',(function(){this.inform('cancel');}).bind(this));}m.prototype.getSaveButton=function(){'use strict';return this.save;};m.prototype.getCancelButton=function(){'use strict';return this.cancel;};m.prototype.getInput=function(){'use strict';return this.input;};f.exports=m;},null);
__d('XUIPageNavigationShim',['DOMContainer.react','React','isNode'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=(function(){var n=0;return function(){return 'XUIPageNavigationShim-'+n++;};})();function l(n){var o;if(n.children){o=n.children.map(function(q){if(typeof q==='object'&&typeof q.ctor==='function'){return l(q);}else if(j(q)){return i.createElement(h,{key:k()},q);}else return q;});if(o.length===1)o=o[0];}var p=n.ctor;return (i.createElement(p,babelHelpers._extends({key:k()},n.props),o));}var m=i.createClass({displayName:'XUIPageNavigationShim',render:function(){return l(this.props);}});f.exports=m;},null);