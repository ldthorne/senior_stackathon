/*!CK:3283480087!*//*1453346341,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["j+iuk"]); }

__d('ChatContentSearchFlyout.react',['ChatContentSearchResults.react','ChatContentSearchTrendingIndicator.react','Keys','MessengerSearchInput.react','ReactComponentWithPureRenderMixin','React','MercuryShareAttachmentRenderLocations','XUITextInput.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=m.PropTypes,s=' ',t=/\s+/g,u=m.createClass({displayName:'ChatContentSearchFlyout',mixins:[l],propTypes:{location:r.oneOf(n.getValues()),onEscKeyDown:r.func,onResultsLoaded:r.func,onSelect:r.func.isRequired,query:r.string},getInitialState:function(){return {query:this.props.query,viewerEnteredText:false};},componentWillReceiveProps:function(v){if(!this.state.viewerEnteredText)this.setState({query:v.query});},render:function(){var v=this._normalize(this.state.query);return (m.createElement('div',{className:"_1er4",onKeyDown:this._handleKeyDown},m.createElement('div',{className:"_3mtr"},this._renderTextInput()),m.createElement('div',{className:"_3mts"},m.createElement(h,{onResultsLoaded:this.props.onResultsLoaded,onSelect:this.props.onSelect,query:v}),m.createElement(i,{shown:v.length===0}))));},_renderTextInput:function(){var v=this.props.location===n.MESSENGER?k:o;return (m.createElement(v,{className:"_4qcs",isFocused:true,onChange:this._handleInputChange,onClear:(function(){this.setState({query:'',viewerEnteredText:false});}).bind(this),placeholder:q._("Search GIFs & stickers across apps..."),ref:'input',value:this.state.query||''}));},_handleInputChange:function(v){this.setState({query:v.target.value,viewerEnteredText:v.target.value.length>0});},_normalize:function(v){return (v||'').trim().replace(t,s).toLowerCase();},_handleKeyDown:function(v){if(v.keyCode===j.ESC&&this.props.onEscKeyDown)this.props.onEscKeyDown();}});f.exports=u;},null);