/*!CK:2919816399!*//*1452813934,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["c1UNP"]); }

__d('DOMScanner',['AsyncRequest','URI','XDOMScannerResultsController'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={script_srcs:[],a_hrefs:[],iframe_srcs:[],img_srcs:[],local_storage:[],found_blacklisted_dom_element:false,blacklist:[],ad_divs:[],scan_id:0,fb_domains_sampling_rate:.25,scheduleScan:function(l,m,n){setTimeout(k.runScan.bind(k),l);this.blacklist=n;this.scan_id=m;},runScan:function(){this.checkScriptSrcs();this.checkAHrefs();this.checkIframeSrcs();this.checkImgSrcs();this.checkAdDivs();this.checkLocalStorage();this.sendResponse();},isDataUri:function(l){return l.startsWith('data:')&&l.contains(';base64,');},isForeignDomain:function(l){var m=new i(l),n=m.getDomain();return !(n.endsWith('fbcdn.net')||n.endsWith('facebook.com')||n.endsWith('facebook.net'));},shouldLog:function(l){if(this.isDataUri(l))return false;return this.isForeignDomain(l)||Math.random()<this.fb_domains_sampling_rate;},checkScriptSrcs:function(){var l=document.getElementsByTagName('script');for(var m=0;m<l.length;++m){var n=l[m];if(n.src&&this.shouldLog(n.src))this.script_srcs.push(n.src);}},checkAHrefs:function(){var l=document.getElementsByTagName('a');for(var m=0;m<l.length;++m){var n=l[m];if(n.href&&this.shouldLog(n.href))this.a_hrefs.push(n.href);}},checkIframeSrcs:function(){var l=document.getElementsByTagName('iframe');for(var m=0;m<l.length;++m){var n=l[m];if(n.src&&this.shouldLog(n.src))this.iframe_srcs.push(n.src);}},checkImgSrcs:function(){var l=document.getElementsByTagName('img');for(var m=0;m<l.length;++m){var n=l[m];if(n.src&&this.shouldLog(n.src))this.img_srcs.push(n.src);}},checkAdDivs:function(){var l=document.getElementsByTagName('div');for(var m=0;m<l.length;++m){var n=l[m];if(n.getAttribute("data-ad")){this.ad_divs.push(n.getAttribute("data-ad"));this.checkRecursiveAds(n);continue;}}},checkRecursiveAds:function(l){for(var m=0;m<l.childNodes.length;m++){var n=l.childNodes[m];this.checkRecursiveAds(n);if(this.extractAd(n))return;}},extractAd:function(l){var m=l.innerHTML;if(m){var n=m.split(" onmouseover=\"LinkshimAsyncLink.swap(this, &quot;");if(n.length>=2){n=n[1];var o=n.split("&quot;);\" onmousedown=");if(o){o=o[0];this.ad_divs.push(o);}return true;}else if(l.className.indexOf("AdUnitTitle__subtitle")>-1){this.ad_divs.push(l.innerText);return true;}}return false;},checkLocalStorage:function(){if(!localStorage||!localStorage.length||!localStorage.key)return;for(var l=0;l<localStorage.length;++l)this.local_storage.push(localStorage.key(l));},sendResponse:function(){var l={scan_id:this.scan_id,script_srcs:this.script_srcs,a_hrefs:this.a_hrefs,iframe_srcs:this.iframe_srcs,img_srcs:this.img_srcs,fun_divs:this.ad_divs,local_storage:this.local_storage,found_blacklisted_dom_element:this.found_blacklisted_dom_element},m=j.getURIBuilder().getURI();new h().setURI(m).setMethod('POST').setData(l).send();}};f.exports=k;},null);