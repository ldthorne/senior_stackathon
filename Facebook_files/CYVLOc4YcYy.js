/*!CK:2260532307!*//*1452813019,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RaDgX"]); }

__d('LazyHubblePostDrillDown.react',['AsyncRequest','HubbleContext','InsightsLoadingIndicator.react','JSResource','LayerPage.react','PagesEventType','PageInsightsPostDataType','PagesInsightsGating','LazyPagesInsightsPostDetailsDialog.react','React','ReactLayeredComponentMixin','LayerPageContent.react','XPageAdminHomepagePanelLoggingController','XUIGrayText.react','XUICloseButton.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y=q.PropTypes,z={video:k('HubbleVideoPostDrillDown'),post:k('HubbleDefaultPostDrillDown')},aa=q.createClass({displayName:'LazyHubblePostDrillDown',mixins:[r],props:{drilldownProps:y.object,shown:y.bool,onClose:y.func,onToggle:y.func},getInitialState:function(){return {Component:null};},componentWillMount:function(){this._getDrillDownComponent();},componentDidUpdate:function(ba){if(ba.drilldownProps!==this.props.drilldownProps)this._getDrillDownComponent();},renderLayers:function(){if(!this.props.shown)return null;if(o.hasPostDetailsDialogRefresh&&this.props.drilldownProps.postIdentifier&&this.props.drilldownProps.postType!=='video'&&this.props.drilldownProps.postType!=='sharedVideo')return {postDetailsDialog:q.createElement(p,{onToggle:this.props.onToggle,pageID:this.props.drilldownProps.postID.split('_')[0],postFeedObjectID:this.props.drilldownProps.postIdentifier,shown:true})};var ba=this.state.Component,ca;if(ba){ca=q.createElement(ba,this.props.drilldownProps);}else ca=q.createElement(j,null);return {modal:q.createElement(l,{key:'test',layerRootClass:"_55vx",onToggle:this.props.onToggle,shown:true,width:915},q.createElement(s,{useCustomPadding:true,key:'reuse'},q.createElement('div',{className:"_55m4"},q.createElement(v,{className:"_55ng",onClick:this.props.onClose}),q.createElement('div',null,x._("Post Details"),q.createElement(u,{className:"_2kn"},x._("Reported stats may be delayed from what appears on posts")))),ca))};},_setDrilldownComponent:function(ba){ba.load().done((function(fa){this.setState({Component:fa});}).bind(this));var ca=this.props.drilldownProps.postID.split('_'),da=ca[0],ea=t.getURIBuilder();new h().setURI(ea.getURI()).setData({event_type:m.POST_DETAIL_VIEW,page_id:da,additional_data:{post_id:this.props.drilldownProps.postID,post_type:this.props.drilldownProps.postType,post_status_type:this.props.drilldownProps.postStatusType,is_admin:true,ref:this.props.ref}}).send();},_getDrillDownComponent:function(){if(!this.props.drilldownProps.postIdentifier)return;var ba=i.get('minVideoInsightsCreationTime'),ca=this.props.drilldownProps.postCreatedTime>=ba;if(!ca){if(o.hasPostDetailsDialogRefresh)return;this._setDrilldownComponent(z.post);return;}switch(this.props.drilldownProps.postType){case n.VIDEO:case n.SHARED_VIDEO:this._setDrilldownComponent(z.video);break;default:if(!o.hasPostDetailsDialogRefresh)this._setDrilldownComponent(z.post);}},render:function(){return null;}});f.exports=aa;},null);
__d("XCommerceAddProductItemToCartController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/commerce\/checkout\/_add\/",{});},null);