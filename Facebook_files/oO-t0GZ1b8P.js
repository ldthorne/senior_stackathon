/*!CK:3871930434!*//*1452813850,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GDPNz"]); }

__d("P2PTransferRiskResult",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SUCCESS:"SUCCESS",UNDER_MANUAL_REVIEW:"UNDER_MANUAL_REVIEW",REQUIRE_VERIFICATION:"REQUIRE_VERIFICATION"};},null);
__d('MessengerContextualDialog.react',['ContextualLayerAutoFlipHorizontal','LayerHideOnEscape','ReactAbstractContextualDialog','ReactLayer','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=12,n=k.createClass(j.createSpec({addedBehaviors:[h,i],displayName:'MessengerContextualDialog',shouldSetARIAProperties:false,theme:{wrapperClassName:"_1r_9",arrowDimensions:{offset:m,length:16}}}));f.exports=n;},null);
__d('P2PEditCreditCardDialog.react',['CreditCardFormParam','CurrentEnvironment','Link.react','React','P2PAPI','P2PAPIUtils','P2PCreditCard','P2PCreditCardForm.react','P2PLoadingMask.react','P2PLinkConstants','P2PDialog.react','P2PDialogTitle.react','P2PDialogBody.react','P2PDialogFooter.react','P2PButton.react','P2PText.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){'use strict';if(c.__markCompiled)c.__markCompiled();var z='fbP2PEditCreditCardDialog_learnMoreSentenceID',aa=k.PropTypes,ba=k.createClass({displayName:'P2PEditCreditCardDialog',propTypes:{asyncRequestState:aa.object.isRequired,creditCard:aa.instanceOf(n).isRequired,onCancel:aa.func.isRequired,onSuccess:aa.func.isRequired,saveButtonText:aa.string,showCancelButton:aa.bool},getInitialState:function(){return {formData:{},isValid:false,loading:false,requestID:'',saveErrors:null};},getDefaultProps:function(){return {saveButtonText:y._("Save"),showCancelButton:true,width:i.messengerdotcom?350:300};},componentWillReceiveProps:function(ca){var da=ca.asyncRequestState?ca.asyncRequestState[this.state.requestID]:null;if(da){this.setState({requestID:''});if(da.error){this.handleOnSaveError(da.error);}else this.handleOnSaveSuccess(da);}},clearSaveErrors:function(){this.setState({saveErrors:null});},onSaveClick:function(ca){var da={},ea=m.genRequestID();da[h.CREDENTIAL_ID]=this.props.creditCard.getCredentialId();this.clearSaveErrors();this.setState({loading:true,requestID:ea});l.updateCreditCard(babelHelpers._extends({requestID:ea},da,this.state.formData));},handleOnSaveSuccess:function(ca){this.props.onSuccess(ca);},onCancelClick:function(ca){this.props.onCancel();},handleOnSaveError:function(ca){this.setState({loading:false,saveErrors:ca});},isSaveDisabled:function(){return !this.state.isValid||this.state.loading;},isCancelDisabled:function(){return this.state.loading;},handleValidation:function(ca,da){this.setState({isValid:ca,formData:da});},getPrefilledFormData:function(){var ca={};ca[h.CARD_NUMBER]=this.props.creditCard.getCreditCardNumberMask();ca[h.CARD_EXPIRATION]=this.props.creditCard.getExpFormattedShort();ca[h.ZIP]=this.props.creditCard.getZipCode();return ca;},handleErrorDialogOKClick:function(){this.clearSaveErrors();},onToggle:function(ca){if(!ca)this.props.onCancel();},render:function(){var ca,da=this.props.text;if(!da)da=y._("Please update the expiration date for your card ending in {card numbers}.",[y.param('card numbers',this.props.creditCard.getCreditCardNumber())]);if(this.props.showCancelButton)ca=k.createElement(v,{use:'default',size:'medium',label:y._("Cancel"),disabled:this.isCancelDisabled(),onClick:this.onCancelClick});return (k.createElement(r,{behaviors:this.props.behaviors,layerHideOnBlur:false,onToggle:this.onToggle,repositionOnUpdate:true,shown:true,width:this.props.width},k.createElement(s,null,y._("Update Debit Card")),k.createElement(t,null,k.createElement(w,{className:"_3-96",type:'primary'},da),k.createElement(o,{onValidation:this.handleValidation,saveErrors:this.state.saveErrors,editMode:true,prefilledFormData:this.getPrefilledFormData(),cscMaxLength:this.props.creditCard.getMaxCSCLength()}),k.createElement(w,{className:"_3-8y",id:z,type:'secondary'},y._("Your payment info is stored securely. {Learn more about p2p link}",[y.param('Learn more about p2p link',k.createElement(j,{'aria-describedby':z,href:q.addDebitCardHelpURI,target:'_blank'},y._("Learn more.")))]))),k.createElement(u,null,ca,k.createElement(v,{use:'confirm',size:'medium',label:this.props.saveButtonText,disabled:this.isSaveDisabled(),onClick:this.onSaveClick})),k.createElement(p,{visible:this.state.loading})));}});f.exports=ba;},null);
__d('P2PConfirmAmountDialog.react',['CurrentEnvironment','React','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PDialogTitle.react','P2PLoadingMask.react','P2PText.react','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=i.PropTypes,t=h.messengerdotcom,u=i.createClass({displayName:'P2PConfirmAmountDialog',propTypes:{amount:s.string,currencySymbol:s.string,onCancel:s.func,onConfirm:s.func,receiverName:s.string},getDefaultProps:function(){return {amount:'',currencySymbol:'',onCancel:q,onConfirm:q,receiverName:s.string};},getInitialState:function(){return {loading:false};},handleCancelClick:function(){this.props.onCancel();},handleConfirmClick:function(){this.setState({loading:true});this.props.onConfirm();},getFormattedAmount:function(){var v=this.props.amount,w=parseFloat(v).toFixed(2);return this.props.currencySymbol+''+w;},render:function(){var v=t?350:300;return (i.createElement(k,{behaviors:this.props.behaviors,layerHideOnBlur:false,shown:true,width:v},i.createElement(n,{showCloseButton:false},r._("Confirm Payment")),i.createElement(l,null,i.createElement(p,{type:'primary'},r._("Do you want to pay {recipient name} {amount}?",[r.param('recipient name',this.props.receiverName),r.param('amount',this.getFormattedAmount())]))),i.createElement(m,null,i.createElement(j,{label:r._("Cancel"),onClick:this.handleCancelClick,use:'default'}),i.createElement(j,{label:r._("Pay"),onClick:this.handleConfirmClick,use:'confirm'})),i.createElement(o,{visible:this.state.loading})));}});f.exports=u;},null);
__d('P2PGroupSendDialog.react',['CurrentEnvironment','Image.react','immutable','ImmutableObject','MessengerContextualDialog.react','P2PActions','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PText.react','React','ScrollableArea.react','XUIContextualDialog.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){'use strict';if(c.__markCompiled)c.__markCompiled();var w=r.PropTypes,x=r.createClass({displayName:'P2PGroupSendDialog',propTypes:{amount:w.string,currency:w.string,flyoutAlignment:w.string,onToggle:w.func.isRequired,p2pEligibilities:w.object,participants:w.instanceOf(j.List),referrer:w.string,threadID:w.string.isRequired,threadFBID:w.string.isRequired},componentDidMount:function(){if(this.props.amount){this.log(o.UI_ACTN_INITIATE_GROUP_SEND_TRIGGER,{raw_amount:this.props.amount,currency:this.props.currency});}else this.log(o.UI_ACTN_INITIATE_GROUP_SEND);},log:function(y,z){n.log(y,babelHelpers._extends({www_event_flow:p.UI_FLOW_P2P_GROUP_SEND},z));},_handleToggle:function(y){this.props.onToggle(y);this.log(o.UI_ACTN_GROUP_SEND_CANCELLED);},_handleBlur:function(){this._handleToggle(false);},isP2PIneligible:function(y){var z=this.props.p2pEligibilities;return z?z[y.userID]===false:true;},renderParticipantRow:function(y){var z=h.messengerdotcom,aa=z?32:40,ba=this.isP2PIneligible(y),ca;if(ba)ca=r.createElement(q,{className:"_4cof",type:'primary'},v._("Isn't able to receive money right now"));return (r.createElement('li',{className:"_4cog"+(ba?' '+"_4coh":''),key:y.id,onClick:this.handleGroupThreadClicked.bind(this,y)},r.createElement('div',{className:"_4coi"},r.createElement(i,{className:"_4coj",height:aa,src:y.big_image_src||y.image_src,width:aa})),r.createElement('div',{className:"_4cok"},r.createElement(q,{className:"_4col",type:'primary'},y.name),ca)));},renderGroupList:function(){return (r.createElement(s,{height:178},r.createElement('ul',null,this.props.participants?this.props.participants.map(this.renderParticipantRow):null)));},handleGroupThreadClicked:function(y){if(this.isP2PIneligible(y))return;this.props.onToggle(false);m.chatSendViewOpened({amount:this.props.amount,referrer:this.props.referrer,threadID:this.props.threadID,groupSendRecipientUserID:y.userID,groupThreadFBID:this.props.threadFBID});this.log(o.UI_ACTN_GROUP_SEND_RECIPIENT_PICKED,{raw_amount:this.props.amount,currency:this.props.currency,object_id:y.userID});},render:function(){var y=h.messengerdotcom,z=y?l:t,aa=y?302:280;return (r.createElement(z,{alignment:this.props.flyoutAlignment?this.props.flyoutAlignment:y?'right':'left',context:this.props.context,onBlur:this._handleBlur,onToggle:this._handleToggle,shown:true,width:aa,position:'above'},r.createElement('div',{className:"_4com"+(y?' '+"_4con":'')},r.createElement(q,{className:"_4coo",type:'primary',weight:'bold'},v._("Select a person")),this.renderGroupList())));}});f.exports=x;},null);
__d('P2PSendMoneyAmountInput.react',['CurrentEnvironment','React','ReactDOM','XUIError.react','P2PAmountUtils','cx','emptyFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=i.PropTypes,q=1,r=i.createClass({displayName:'P2PSendMoneyAmountInput',propTypes:{currencySymbol:p.string,disabled:p.bool,isRequesting:p.bool,onInputChange:p.func,value:p.string},getDefaultProps:function(){return {currencySymbol:'$',disabled:false,isRequesting:false,onInputChange:n,value:''};},getInitialState:function(){var s;if(h.messengerdotcom){s=236;}else s=200;return {inputError:null,maxInputWidth:s,value:this.props.value,width:''};},componentDidMount:function(){this.updateAmount(this.state.value);if(!this.props.disabled)this.initDelayedFocus();},initDelayedFocus:function(){setTimeout(this.focus);},focus:function(){var s,t=this.state.value,u=0;if(this.isMounted()&&this.refs.textInput){s=j.findDOMNode(this.refs.textInput);s.focus();if(t){u=t.length;s.setSelectionRange(u,u);}}},handleAmountInputChange:function(s){var t=s.target.value;this.clearInputError();this.updateAmount(t);},clearInputError:function(){this.setState({inputError:null});},setInputError:function(s){this.setState({inputError:s});},handleAmountInputBlur:function(s){var t=s.target.value,u=t.split('.'),v=u[0],w=u[1];if(w){if(w.length===1)this.updateAmount(t+'0');}else if(w==='')this.updateAmount(v);},updateAmount:function(s){var t=true,u,v=l.isAmountOverLegalLimit(s);s=l.sanitizeAmount(s);u=parseFloat(s);if(v){t=false;this.setInputError(o._("Please enter a smaller amount"));}var w=s.split('.'),x=w[0],y=w[1];if(y!==undefined){s=(x&&parseFloat(x)!==0?x:'0')+'.'+y.substr(0,2);}else if(x)if(parseFloat(x)===0){s='0';}else if(x.length>1&&x[0]==='0')s=s.substr(1,s.length);this.setValue(s);u=parseFloat(s);t=t&&!isNaN(u)&&u>0;this.props.onInputChange(s,t);},setValue:function(s){this.setState({value:s},this.updateWidth);},updateWidth:function(){var s=this.getMockWidth();if(s)this.setState({width:Math.min(s,this.state.maxInputWidth)});},getMockWidth:function(){var s=j.findDOMNode(this.refs.mock_input);return s.offsetWidth+q;},render:function(){var s,t=!this.state.value.length,u,v;if(t)s=i.createElement('div',{ref:'placeholder_input',className:"_1-sv"},'0');return (i.createElement('div',{className:"_ipw"+(this.props.isRequesting?' '+"_1c9h":'')},i.createElement('label',null,v,i.createElement('div',{className:"_4puh"+(t?' '+"_1-sy":'')},u,s,i.createElement('div',{ref:'mock_input',className:"_5fbs"},this.state.value),i.createElement(k,{xuiError:this.state.inputError},i.createElement('span',{className:"_1-sz"},i.createElement('input',{autofocus:true,className:"_5fbv",disabled:this.props.disabled,onBlur:this.handleAmountInputBlur,onChange:this.handleAmountInputChange,ref:'textInput',style:{width:this.state.width},value:this.state.value})))))));}});f.exports=r;},null);
__d('P2PSendMoneyDialog.react',['Arbiter','CreditCardFormParam','CurrentEnvironment','Image.react','ImageBlock.react','Link.react','MessengerContextualDialog.react','P2PAPI','P2PAddCreditCardDialog.react','P2PButton.react','P2PCreditCardStore','P2PChooseCreditCardForm.react','P2PConfirmAmountDialog.react','P2PCreditCard','P2PDialog.react','P2PDialogTitle.react','P2PEditCreditCardDialog.react','P2PGKValues','P2PLinkConstants','P2PLoadingMask.react','P2PLogger','P2PMemoField.react','P2PMemoText.react','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PSendMoneyAmountInput.react','P2PSendMoneyDialogActionHeader.react','P2PText.react','P2PVerifyCreditCardDialog.react','React','ReactLayeredComponentMixin','XUIContextualDialog.react','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa){'use strict';if(c.__markCompiled)c.__markCompiled();var qa=ka.PropTypes,ra=j.messengerdotcom,sa=y.P2PRequestMoneyEnabled,ta=pa._("Change"),ua=pa._("Add Debit Card"),va=100,wa=ka.createClass({displayName:'P2PSendMoneyDialog',mixins:[la],propTypes:{amount:qa.string,currency:qa.string.isRequired,currencySymbol:qa.string.isRequired,groupThreadFBID:qa.string,flyoutAlignment:qa.string,memoText:qa.string,onError:qa.func.isRequired,onPaymentRequestError:qa.func.isRequired,onPaymentRequestSuccess:qa.func.isRequired,onSendSuccess:qa.func.isRequired,onToggle:qa.func.isRequired,platformData:qa.object,receiver:qa.object,referrer:qa.string,paymentRequestID:qa.string,p2pEligibilities:qa.object,useModal:qa.bool},getDefaultProps:function(){return {amount:'',receiver:{},useModal:false};},getInitialState:function(){var xa=r.getAll();return {asyncRequestState:r.getAsyncRequestState(),addCreditCardDialogShown:false,amount:this.props.amount,creditCardsFetchError:r.failedCreditCardFetch(),creditCards:xa,confirmAmountDialogShown:false,isAmountValid:false,isCreditCardsFetchComplete:r.isCreditCardsFetchComplete(),isPaying:true,isRequesting:false,loading:false,memoText:this.props.memoText,selectedCard:xa[0],showChooseCreditCardForm:false,verifyCreditCardDialogShown:false};},creditCardStoreSub:null,_isAmountVerified:false,passwordCancelSubscribeToken:null,getEventFlow:function(){return (this.props.paymentRequestID||this.isRequesting()?fa.UI_FLOW_P2P_REQUEST:fa.UI_FLOW_P2P_SEND);},log:function(xa,ya){ba.log(xa,babelHelpers._extends({www_event_flow:this.getEventFlow(),object_id:this.props.receiver&&this.props.receiver.userID,memo_text:this.state.memoText,request_id:this.props.paymentRequestID},this.getPlatformLoggingData(),ya,this.getReferrer()));},componentWillUnmount:function(){if(this.passwordCancelSubscribeToken!==null){h.unsubscribe(this.passwordCancelSubscribeToken);this.passwordCancelSubscribeToken=null;}if(this.creditCardStoreSub){this.creditCardStoreSub.remove();this.creditCardStoreSub=null;}},componentWillMount:function(){this.creditCardStoreSub=r.addListener('change',this.onCreditCardStoreChange);this.log(ea.UI_ACTN_INITIATE_SEND);},getPlatformLoggingData:function(){var xa=this.props.platformData&&this.props.platformData.loggingData;if(xa)return {platform_logging_data:xa};return null;},getReferrer:function(){var xa=this.props.referrer;if(xa)return {www_event_referrer:xa};return null;},onAmountInputChange:function(xa,ya){this.setState({amount:xa,isAmountValid:ya});},onCreditCardStoreChange:function(){var xa=r.getAll(),ya;if(this.state.selectedCard)ya=xa.filter((function(za){return (za.getCredentialId()===this.state.selectedCard.getCredentialId());}).bind(this))[0];if(!ya)ya=xa[0];this.setState({asyncRequestState:r.getAsyncRequestState(),creditCards:xa,isCreditCardsFetchComplete:r.isCreditCardsFetchComplete(),selectedCard:ya,creditCardsFetchError:r.failedCreditCardFetch()});},shouldShowConfirmAmountDialog:function(){var xa=parseFloat(this.state.amount);return (!this._isAmountVerified&&xa>=va);},shouldShowVerifyCreditCardDialog:function(){return !this.state.selectedCard.getIsVerified();},shouldShowEditCreditCardDialog:function(){return this.state.selectedCard.isExpired();},handleSendClick:function(xa){if(this.isSendButtonDisabled())return false;this.log(ea.UI_ACTN_SEND_CLICKED,{raw_amount:this.state.amount,currency:this.props.currency});this._isAmountVerified=false;this.initiatePayment();},handleRequestClick:function(xa){if(this.isRequestButtonDisabled())return false;this.log(ea.UI_ACTN_REQUEST_CLICKED,{raw_amount:this.state.amount,currency:this.props.currency});this.createPaymentRequest();},initiatePayment:function(){if(this.shouldShowConfirmAmountDialog()){this.hideAllDialogs();this.setState({confirmAmountDialogShown:true});this.log(ea.UI_ACTN_CONFIRM_AMOUNT,{raw_amount:this.state.amount,currency:this.props.currency});return;}else if(this.shouldShowEditCreditCardDialog()){this.hideAllDialogs();this.setState({editCreditCardDialogShown:true});this.log(ea.UI_ACTN_EDIT_CARD,{raw_amount:this.state.amount,currency:this.props.currency});return;}else if(this.shouldShowVerifyCreditCardDialog()){this.hideAllDialogs();this.setState({verifyCreditCardDialogShown:true});this.log(ea.UI_ACTN_VERIFY_CSC,{raw_amount:this.state.amount,currency:this.props.currency});return;}this.createTransaction();},isPayingForRequest:function(){return !!this.props.paymentRequestID;},isPaying:function(){return this.state.isPaying===true;},isRequesting:function(){return this.state.isRequesting===true;},shouldShowLoading:function(){return (!this.state.addCreditCardDialogShown&&!this.state.confirmAmountDialogShown&&!this.state.verifyCreditCardDialogShown&&!this.state.editCreditCardDialogShown);},createTransaction:function(){var xa={};this.setState({loading:this.shouldShowLoading()});xa[i.CREDENTIAL_ID]=this.state.selectedCard.getCredentialId();xa.amount=this.state.amount;xa.receiverId=this.props.receiver&&this.props.receiver.userID;xa.memoText=this.state.memoText;xa.paymentRequestID=this.props.paymentRequestID;if(this.props.groupThreadFBID)xa.group_thread_fbid=this.props.groupThreadFBID;if(this.props.platformData)xa.platform_context_id=this.props.platformData.platformContextID;this.passwordCancelSubscribeToken=h.subscribeOnce('PasswordReauthDialogCancelClick',this.handlePasswordReauthDialogCancelClick);o.createTransaction({formData:xa,error:this.setCreateTransferError,success:this.setCreateTransferSuccess});this.log(ea.UI_ACTN_CONFIRM_SEND,{raw_amount:this.state.amount,currency:this.props.currency});},createPaymentRequest:function(){this.setState({loading:this.shouldShowLoading()});o.createPaymentRequest({formData:{amount:this.state.amount,memoText:this.state.memoText,group_thread_fbid:this.props.groupThreadFBID,requesteeID:this.props.receiver&&this.props.receiver.userID},error:this.setCreatePaymentRequestError,success:this.setCreatePaymentRequestSuccess});this.log(ea.UI_ACTN_CONFIRM_REQUEST,{raw_amount:this.state.amount,currency:this.props.currency});},hideAllDialogs:function(){this.setState({addCreditCardDialogShown:false,confirmAmountDialogShown:false,verifyCreditCardDialogShown:false,editCreditCardDialogShown:false});},isDialogShowing:function(){return !!(this.state.addCreditCardDialogShown||this.state.confirmAmountDialogShown||this.state.verifyCreditCardDialogShown||this.state.editCreditCardDialogShown);},setCreateTransferError:function(xa){if(this.isMounted()){this.hideAllDialogs();this.setState({loading:false});}this.props.onError(xa);this.log(ea.UI_ACTN_SEND_FAIL);},setCreateTransferSuccess:function(xa){if(this.isMounted()){this.setState({loading:false});this.hideAllDialogs();}this.props.onSendSuccess(xa);this.log(ea.UI_ACTN_SEND_SUCCESS);},setCreatePaymentRequestError:function(xa){if(this.isMounted()){this.hideAllDialogs();this.setState({loading:false});}this.props.onPaymentRequestError(xa.error);this.log(ea.UI_ACTN_REQUEST_FAIL);},setCreatePaymentRequestSuccess:function(xa){if(this.isMounted()){this.setState({loading:false});this.hideAllDialogs();}this.props.onPaymentRequestSuccess();this.log(ea.UI_ACTN_REQUEST_SUCCESS,{request_id:xa.id});},handlePasswordReauthDialogCancelClick:function(){this.passwordCancelSubscribeToken=null;this.setState({loading:false});this.hideAllDialogs();},onAddCreditCardCancel:function(){this.setState({addCreditCardDialogShown:false});},onAddCreditCardSuccess:function(xa){var ya=this.state.creditCards.filter(function(za){var ab=za.getCredentialId();return (xa[i.CREDENTIAL_ID]===ab);})[0];this.setState({selectedCard:ya});if(this.state.isAmountValid){this.initiatePayment();}else{this.setState({addCreditCardDialogShown:false});this.focusAmountInput();}},onEditCreditCardSuccess:function(){this.initiatePayment();},onEditCreditCardCancel:function(){this.setState({editCreditCardDialogShown:false});},focusAmountInput:function(){if(this.refs.send_money_amount_input)this.refs.send_money_amount_input.focus();},_handleToggle:function(xa){this.props.onToggle(xa);if(!this.state.loading)this.log(ea.UI_ACTN_SEND_MONEY_CANCELLED);},_handleBlur:function(){this._handleToggle(false);},handleAddCreditCardClick:function(){this.setState({addCreditCardDialogShown:true,showChooseCreditCardForm:false});this.log(ea.UI_ACTN_CHANGE_CARD);},handleBackClick:function(){this.setState({showChooseCreditCardForm:false},(function(){this.focusAmountInput();}).bind(this));},handleChooseCardNextClick:function(){var xa=this.refs.choose_credit_card_form.getSelectedCard();this.setState({selectedCard:xa,showChooseCreditCardForm:false},(function(){this.focusAmountInput();}).bind(this));},handleAddCardNextClick:function(){this.setState({addCreditCardDialogShown:true});},handleChangeSelectedCardClick:function(){var xa={};if(this.state.creditCards.length===1){xa.addCreditCardDialogShown=true;this.log(ea.UI_ACTN_CHANGE_CARD);}else{xa.showChooseCreditCardForm=true;this.log(ea.UI_ACTN_INITIATE_CHOOSE_CARD);}this.setState(xa);},onConfirmAmountCancel:function(){this.setState({confirmAmountDialogShown:false});},onConfirmAmountSuccess:function(){this._isAmountVerified=true;this.initiatePayment();},onVerifyCreditCardSuccess:function(){this.initiatePayment();},onVerifyCreditCardCancel:function(){this.setState({verifyCreditCardDialogShown:false});},handleMemoChange:function(xa){this.setState({memoText:xa});},isSendButtonDisabled:function(){return (!this.state.isAmountValid||!this.state.creditCards.length||this.state.loading);},isRequestButtonDisabled:function(){return !this.state.isAmountValid||this.state.loading;},isAddCardNextButtonDisabled:function(){return !this.state.isAmountValid;},renderAddDebitCardLink:function(){return (ka.createElement(ia,{className:"_42h3",type:'secondary',ref:'send_money_dialog_add_card_text'},ka.createElement(m,{className:"_49nm",href:'#',onClick:this.handleAddCreditCardClick},ua)));},renderSelectedCard:function(){var xa=this.state.selectedCard;return (ka.createElement(ia,{className:"_21x5",size:'small',type:'primary'},ka.createElement('div',{className:"_49nn"},xa.getName()),ka.createElement('div',{className:"_21wx"},xa.getCreditCardNumberFormatted()),ka.createElement('div',{className:"_21ww"},'\u00b7'),ka.createElement(m,{className:"_21wy",onClick:this.handleChangeSelectedCardClick,href:'#'},ta)));},renderFormButtons:function(){var xa,ya=ra&&this.props.useModal?ka.createElement(q,{label:pa._("Cancel"),onClick:(function(){this._handleToggle(false);}).bind(this),type:'secondary'}):null;if(this.isRequesting()){xa=ka.createElement('div',null,ya,this.renderRequestButton());}else if(!this.state.creditCards.length){xa=ka.createElement('div',null,ya,this.renderAddCardNextButton());}else if(this.state.showChooseCreditCardForm){xa=ka.createElement('div',null,this.renderChooseCardBackButton(),this.renderChooseCardNextButton());}else xa=ka.createElement('div',null,ya,this.renderPayButton());return xa;},renderChooseCardBackButton:function(){return (ka.createElement(q,{label:pa._("Back"),onClick:this.handleBackClick,ref:'back_button',size:'medium',type:'secondary',use:'default'}));},renderAddCardNextButton:function(){return (ka.createElement(q,{disabled:this.isAddCardNextButtonDisabled(),label:pa._("Next"),onClick:this.handleAddCardNextClick,ref:'add_card_next_button',size:'medium',type:'primary',use:'default'}));},renderChooseCardNextButton:function(){return (ka.createElement(q,{label:pa._("Next"),onClick:this.handleChooseCardNextClick,ref:'choose_card_next_button',size:'medium',type:'primary',use:'confirm'}));},renderPayButton:function(){return (ka.createElement(q,{disabled:this.isSendButtonDisabled(),label:pa._("Pay"),onClick:this.handleSendClick,ref:'send_button',size:'medium',type:'primary',use:'confirm'}));},renderRequestButton:function(){return (ka.createElement(q,{disabled:this.isRequestButtonDisabled(),label:pa._("Request"),onClick:this.handleRequestClick,ref:'request_button',size:'medium',type:'primary',use:'confirm'}));},renderPaymentDetails:function(){var xa;if(this.isRequesting())return null;if(this.state.creditCards.length){if(this.state.showChooseCreditCardForm){xa=this.renderAddDebitCardLink();}else xa=this.renderSelectedCard();}else if(this.state.creditCardsFetchError){xa=ka.createElement('div',{className:"_2abl"},ka.createElement(ia,{type:'secondary',ref:'send_money_dialog_add_card_next_text'},pa._("Sorry, we couldn't fetch your details. Please check your internet connection or refresh this page and try again.")));}else xa=ka.createElement('div',{className:"_2abl"},ka.createElement(ia,{type:'secondary',ref:'send_money_dialog_add_card_next_text'},pa._("Sending money is free and secure")));return xa;},isRecipientIneligible:function(){var xa=this.props.receiver;return !!(xa&&this.props.p2pEligibilities&&this.props.p2pEligibilities[xa.userID]===false);},renderFooter:function(){var xa,ya=this.props.receiver,za=ya?ya.short_name:'';if(this.isRecipientIneligible()){xa=ka.createElement(ia,{className:"_2pi8",type:'secondary'},pa._("{receiverName} isn't able to receive money right now. {Learn more about p2p link}",[pa.param('receiverName',za),pa.param('Learn more about p2p link',ka.createElement(m,{href:z.receiverIneligibleHelpURI,target:'_blank'},pa._("Learn More.")))]));}else if(!this.state.isCreditCardsFetchComplete){xa=ka.createElement('div',{className:"_2-vg"},ka.createElement(na,{className:"_2-vh"}));}else xa=[ka.createElement('div',{className:"_21x4",key:'paymentDetails'},this.renderPaymentDetails()),ka.createElement('div',{className:"_4zf-",key:'formButtons'},this.renderFormButtons())];return (ka.createElement('div',{className:"_5p-k"},xa));},renderMemo:function(){var xa=this.isPayingForRequest(),ya=this.props.memoText;if(!y.P2PWWWMemoField||xa&&!ya)return null;if(xa&&ya)return (ka.createElement('div',{className:"_5exl"},ka.createElement(da,{memoText:ya})));return (ka.createElement('div',{className:"_5exl"},ka.createElement(ca,{defaultValue:ya,disabled:this.isRecipientIneligible(),isRequesting:this.isRequesting(),onChange:this.handleMemoChange})));},renderSendMoneyForm:function(){var xa=ra?32:40,ya=pa._("Send to");if(this.isRequesting())ya=pa._("Request to");return (ka.createElement('div',null,ka.createElement('div',{className:"_49no _2pi4",ref:'send_money_dialog_title'},ka.createElement(l,{spacing:'large'},ka.createElement(k,{className:"_5p-i",height:xa,src:this.props.receiver&&(this.props.receiver.big_image_src||this.props.receiver.image_src),width:xa}),ka.createElement('div',{className:"_3-8w"},ka.createElement(ia,{type:'secondary'},ya),ka.createElement(ia,{className:"_5p-j",size:'small',type:'primary',weight:'bold'},this.props.receiver&&this.props.receiver.name))),ka.createElement(m,{className:"_49np",href:z.helpCenterURI,target:'_blank'})),ka.createElement('div',{className:"_2abm"},this.renderMainContainer()),this.renderMemo(),ka.createElement('div',{className:"_21w-"+(this.isRecipientIneligible()?' '+"_3orf":'')+(ra?' '+"_4eb_":'')},this.renderFooter())));},renderMainContainer:function(){var xa;if(this.state.showChooseCreditCardForm){xa=ka.createElement('div',{className:"_xn7"},ka.createElement(s,{creditCards:this.state.creditCards,selectedCard:this.state.selectedCard,ref:'choose_credit_card_form'}));}else xa=ka.createElement('div',{className:"_2abn"},ka.createElement(ga,{currencySymbol:this.props.currencySymbol,disabled:this.isPayingForRequest()||this.isRecipientIneligible(),isRequesting:this.isRequesting(),onInputChange:this.onAmountInputChange,ref:'send_money_amount_input',value:this.state.amount}));return xa;},renderActionToggleHeader:function(){var xa=this.isPaying(),ya=this.isRequesting();if(this.isPayingForRequest()||!sa)return null;return (ka.createElement('div',{className:"_4uvi"},ka.createElement(ha,{isPaying:xa,isRequesting:ya,onPayClick:(function(){if(!this.isPaying())this.setState({isPaying:true,isRequesting:false},(function(){this.focusAmountInput();this.log(ea.UI_ACTN_INITIATE_SEND);}).bind(this));}).bind(this),onRequestClick:(function(){if(!this.isRequesting())this.setState({isPaying:false,isRequesting:true},(function(){this.focusAmountInput();this.log(ea.UI_ACTN_INITIATE_REQUEST);}).bind(this));}).bind(this)})));},renderLayers:function(){var xa={},ya,za,ab=this.props.receiver&&this.props.receiver.short_name,bb;if(this.props.useModal)bb={LayerFadeOnShow:false};if(this.state.addCreditCardDialogShown){if(this.state.isAmountValid){za=pa._("Please enter a debit card to send {Amount} to {Recipient name}. Credit cards can't be used.",[pa.param('Amount',this.props.currencySymbol+this.state.amount),pa.param('Recipient name',ab)]);ya=pa._("Pay");}xa.addCreditCard=ka.createElement(p,{behaviors:bb,eventFlow:this.getEventFlow(),loggingData:this.getPlatformLoggingData(),onCancel:this.onAddCreditCardCancel,onSuccess:this.onAddCreditCardSuccess,ref:'send_money_dialog_add_credit_card_form',saveButtonText:ya,showCancelButton:!!ra,text:za});}else if(this.state.confirmAmountDialogShown){xa.confirmAmount=ka.createElement(t,{amount:this.state.amount,behaviors:bb,currencySymbol:this.props.currencySymbol,onCancel:this.onConfirmAmountCancel,onConfirm:this.onConfirmAmountSuccess,receiverName:ab});}else if(this.state.verifyCreditCardDialogShown){xa.verifyCreditCard=ka.createElement(ja,{asyncRequestState:this.state.asyncRequestState,behaviors:bb,creditCard:this.state.selectedCard,isSending:true,onCancel:this.onVerifyCreditCardCancel,onSuccess:this.onVerifyCreditCardSuccess});}else if(this.state.editCreditCardDialogShown)xa.confirmAmount=ka.createElement(x,{asyncRequestState:this.state.asyncRequestState,behaviors:bb,creditCard:this.state.selectedCard,onCancel:this.onEditCreditCardCancel,onSuccess:this.onEditCreditCardSuccess});return xa;},renderIneligibleMask:function(){if(!this.isRecipientIneligible())return null;return ka.createElement('div',{className:"_3org"});},render:function(){var xa,ya=null,za={},ab=ra?286:260;if(this.props.useModal&&this.isDialogShowing())return null;if(this.props.useModal){xa=v;ya=ka.createElement(w,null,pa._("Confirm Payment"));za={layerHideOnBlur:false};ab=ra?350:ab;}else{xa=ra?n:ma;za={alignment:this.props.flyoutAlignment?this.props.flyoutAlignment:ra?'right':'left',context:this.props.context,position:this.props.position||'above',onBlur:this._handleBlur};}return (ka.createElement(xa,babelHelpers._extends({onToggle:this._handleToggle,shown:true,width:ab},za),ka.createElement('div',{className:"_21x9"+(ra?' '+"_1pka":'')+(sa?' '+"_4uvl":'')+(this.props.useModal?' '+"_35wt":'')},ya,this.renderActionToggleHeader(),this.renderSendMoneyForm(),this.renderIneligibleMask(),ka.createElement(aa,{ref:'send_money_dialog_loader',visible:this.state.loading}))));}});f.exports=wa;},null);