(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{170:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"small"},colorScheme:{type:String,default:""}},computed:{colorSchemeClasses:function(){return"primary"===this.colorScheme?"before:!border-t-woot-500":"warning"===this.colorScheme?"before:!border-t-yellow-500":"success"===this.colorScheme?"before:!border-t-success-500":this.colorScheme}}},a=(n(371),n(5)),o=Object(a.a)(r,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"spinner",class:`${t.size} ${t.colorSchemeClasses}`})}),[],!1,null,"25f4edd6",null);e.a=o.exports},1774:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return g})),n.d(e,"i",(function(){return s}));var r=function(t,e,n){var r;return function(){var a=null,o=arguments,s=function(){r=null,n||t.apply(a,o)},i=n&&!r;clearTimeout(r),r=window.setTimeout(s,e),i&&t.apply(a,o)}},a=function(t){var e=t.replace("#","");return.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16)>186?"#000000":"#FFFFFF"},o=function(t){var e="";if(t>=60&&t<3600){var n=Math.floor(t/60);e=n+" Min";var r=60===n?0:Math.floor(t%60);return e+(r>0?" "+r+" Sec":"")}if(t>=3600&&t<86400){var a=Math.floor(t/3600);e=a+" Hr";var o=t%3600<60||24===a?0:Math.floor(t%3600/60);return e+(o>0?" "+o+" Min":"")}if(t>=86400){var s=Math.floor(t/86400);e=s+" Day";var i=t%86400<3600||s>=364?0:Math.floor(t%86400/3600);return e+(i>0?" "+i+" Hr":"")}return Math.floor(t)+" Sec"},s=function(t,e,n){void 0===t&&(t=""),void 0===e&&(e=1024),void 0===n&&(n=!1);var r=t;return t.length>e&&(r=t.substring(0,e)),n&&(r+="..."),r};function i(t){try{var e=String(t).toLowerCase();return Boolean(JSON.parse(e))}catch(n){return!1}}function l(t){return t.slice().sort((function(t,e){return t-e}))}function u(t,e){var n,r,a,o=(r=1,(a=e)<(n=0)?n:a>r?r:a),s=(t.length-1)*o,i=Math.floor(s),l=s-i;return void 0!==t[i+1]?t[i]+l*(t[i+1]-t[i]):t[i]}var c=function(t,e){var n=l(t);return e.map((function(t){return u(n,t)}))},d=/{{(.*?)}}/g,p=function(t){return(t||"").replace(/\b(\w)/g,(function(t){return t.toUpperCase()}))},f=function(t){var e=t.user,n=null!=e&&e.name?e.name.split(" ").shift():"";return p(n)},m=function(t){var e=t.user;if(e&&e.name){var n=e.name.split(" ").length>1?e.name.split(" ").pop():"";return p(n)}return""},h=function(t){var e,n=t.conversation,r=n.meta,a=r.assignee,o=r.sender,s=n.id;return{"contact.name":p((null==o?void 0:o.name)||""),"contact.first_name":f({user:o}),"contact.last_name":m({user:o}),"contact.email":null==o?void 0:o.email,"contact.phone":null==o?void 0:o.phone_number,"contact.id":null==o?void 0:o.id,"conversation.id":s,"agent.name":p((null==a?void 0:a.name)||""),"agent.first_name":f({user:a}),"agent.last_name":m({user:a}),"agent.email":null!=(e=null==a?void 0:a.email)?e:""}},g=function(t){var e=t.message,n=t.variables;return e.replace(d,(function(t,e){return n[e.trim()]?n[e.trim().toLowerCase()]:""}))},v=function(t){var e=t.message,n=t.variables,r=e.replace(/```(?:.|\n)+?```/g,"").match(d);return r?r.map((function(t){return t.replace("{{","").replace("}}","").trim()})).filter((function(t){return!n[t]})):[]}},220:function(t,e,n){"use strict";n(49),n(65);e.a={methods:{useInstallationName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return t.replace(/Chatwoot/g,e)}}}},2653:function(t,e,n){"use strict";var r=n(235),a=n.n(r),o=(window.chatwootConfig||{}).apiHost,s=void 0===o?"":o,i=a.a.create({baseURL:"".concat(s,"/")});e.a=i},2656:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return f}));n(1775),n(7),n(22),n(10),n(4),n(30);var r=n(51),a=n(2653),o=n(1926);function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function i(t,e,n,r,a,o,s){try{var i=t[o](s),l=i.value}catch(u){return void n(u)}i.done?e(l):Promise.resolve(l).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,l,"next",t)}function l(t){i(o,r,a,s,l,"throw",t)}s(void 0)}))}}var u=function(){var t=l(regeneratorRuntime.mark((function t(e){var n,i,l,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.ssoAccountId,i=e.ssoConversationId,l=s(e,["ssoAccountId","ssoConversationId"]),t.prev=1,t.next=4,a.a.post("auth/sign_in",l);case 4:u=t.sent,Object(r.e)(u),Object(r.c)(),window.location=Object(o.a)({ssoAccountId:n,ssoConversationId:i,user:u.data.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),Object(r.g)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=l(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("api/v1/accounts.json",{account_name:e.accountName.trim(),user_full_name:e.fullName.trim(),email:e.email,password:e.password,h_captcha_client_response:e.hCaptchaClientResponse});case 3:return n=t.sent,Object(r.e)(n),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),Object(r.g)(t.t0);case 11:return t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=l(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.confirmationToken,t.prev=1,t.next=4,a.a.post("auth/confirmation",{confirmation_token:n});case 4:o=t.sent,Object(r.e)(o),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.g)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=l(regeneratorRuntime.mark((function t(e){var n,o,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.resetPasswordToken,o=e.password,s=e.confirmPassword,t.prev=1,t.next=4,a.a.put("auth/password",{reset_password_token:n,password_confirmation:s,password:o});case 4:i=t.sent,Object(r.e)(i),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.g)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=l(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,t.abrupt("return",a.a.post("auth/password",{email:n}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},2671:function(t,e,n){"use strict";n(41);var r={components:{Spinner:n(170).a},props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},buttonText:{type:String,default:""},buttonClass:{type:String,default:""},iconClass:{type:String,default:""},type:{type:String,default:"submit"}},computed:{computedClass:function(){return"\n        ".concat(this.disabled?"opacity-40 hover:bg-woot-500":"","\n        ").concat(this.buttonClass||" ","\n      ")}},methods:{onClick:function(){this.$emit("click")}}},a=n(5),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"flex items-center w-full justify-center rounded-md bg-woot-500 py-3 px-3 text-base font-medium text-white shadow-sm hover:bg-woot-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-woot-500 cursor-pointer",class:t.computedClass,attrs:{type:t.type,"data-testid":"submit_button",disabled:t.disabled},on:{click:t.onClick}},[e("span",[t._v(t._s(t.buttonText))]),t._v(" "),t.iconClass?e("fluent-icon",{staticClass:"icon",attrs:{icon:t.iconClass}}):t._e(),t._v(" "),t.loading?e("spinner"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},2672:function(t,e,n){"use strict";n(45);var r={props:{label:{type:String,default:""},name:{type:String,required:!0},type:{type:String,default:"text"},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},value:{type:[String,Number],default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},dataTestid:{type:String,default:""}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},a=n(5),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.label?e("label",{staticClass:"flex justify-between text-sm font-medium leading-6 text-slate-900 dark:text-white",class:{"text-red-500":t.hasError},attrs:{for:t.name}},[t._v("\n    "+t._s(t.label)+"\n    "),t._t("default")],2):t._e(),t._v(" "),e("div",{staticClass:"mt-1"},[e("input",{staticClass:"block w-full rounded-md border-0 px-3 py-3 appearance-none shadow-sm ring-1 ring-inset text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-woot-500 sm:text-sm sm:leading-6 outline-none dark:bg-slate-700",class:{"focus:ring-red-600 ring-red-600":t.hasError,"dark:ring-slate-600 dark:focus:ring-woot-500 ring-slate-200":!t.hasError},attrs:{id:t.name,name:t.name,type:t.type,autocomplete:"off",required:t.required,placeholder:t.placeholder,"data-testid":t.dataTestid},domProps:{value:t.value},on:{input:t.onInput,blur:function(e){return t.$emit("blur")}}}),t._v(" "),t.errorMessage&&t.hasError?e("span",{staticClass:"text-xs leading-2 text-red-400"},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.a=o.exports},2801:function(t,e,n){"use strict";n(7),n(136),n(16),n(20),n(21),n(196);var r={props:{label:{type:String,default:""}}},a=n(5),o={components:{SimpleDivider:Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative my-4 section-separator"},[t._m(0),t._v(" "),t.label?e("div",{staticClass:"relative flex justify-center text-sm"},[e("span",{staticClass:"bg-white dark:bg-slate-800 px-2 text-slate-500 dark:text-white"},[t._v("\n      "+t._s(t.label)+"\n    ")])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"absolute inset-0 flex items-center",attrs:{"aria-hidden":"true"}},[t("div",{staticClass:"w-full border-t border-slate-200 dark:border-slate-600"})])}],!1,null,null,null).exports},props:{showSeparator:{type:Boolean,default:!0}},methods:{getGoogleAuthUrl:function(){var t=window.chatwootConfig.googleOAuthClientId,e=window.chatwootConfig.googleOAuthCallbackUrl,n=new URLSearchParams({client_id:t,redirect_uri:e,response_type:"code",scope:"email profile"}).toString();return"".concat("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount","?").concat(n)}}},s=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("a",{staticClass:"inline-flex w-full justify-center rounded-md bg-white py-3 px-4 shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-600 hover:bg-slate-50 focus:outline-offset-0 dark:bg-slate-700 dark:hover:bg-slate-700",attrs:{href:t.getGoogleAuthUrl()}},[e("img",{staticClass:"h-6",attrs:{src:"/assets/images/auth/google.svg",alt:"Google Logo"}}),t._v(" "),e("span",{staticClass:"text-base font-medium ml-2 text-slate-600 dark:text-white"},[t._v("\n      "+t._s(t.$t("LOGIN.OAUTH.GOOGLE_LOGIN"))+"\n    ")])]),t._v(" "),t.showSeparator?e("simple-divider",{ref:"divider",staticClass:"uppercase",attrs:{label:t.$t("COMMON.OR")}}):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},297:function(t,e,n){},3385:function(t,e,n){"use strict";n.r(e);n(49),n(65),n(10),n(4),n(8),n(11),n(9),n(12);var r=n(57),a=n(220),o=n(2671),s=n(25),i=n(1774),l=n(2801),u=n(2672),c=n(2656),d=n(170);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={"no-account-found":"LOGIN.OAUTH.NO_ACCOUNT_FOUND","business-account-only":"LOGIN.OAUTH.BUSINESS_ACCOUNTS_ONLY"},g={components:{FormInput:u.a,GoogleOAuthButton:l.a,Spinner:d.a,SubmitButton:o.a},mixins:[a.a],props:{ssoAuthToken:{type:String,default:""},ssoAccountId:{type:String,default:""},ssoConversationId:{type:String,default:""},config:{type:String,default:""},email:{type:String,default:""},authError:{type:String,default:""}},data:function(){return{credentials:{email:"",password:""},loginApi:{message:"",showLoading:!1,hasErrored:!1},error:""}},validations:{credentials:{password:{required:r.required},email:{required:r.required,email:r.email}}},computed:f(f({},Object(s.mapGetters)({globalConfig:"globalConfig/get"})),{},{showGoogleOAuth:function(){return Boolean(window.chatwootConfig.googleOAuthClientId)},showSignupLink:function(){return Object(i.g)(window.chatwootConfig.signupEnabled)}}),created:function(){var t=this;if(this.ssoAuthToken&&this.submitLogin(),this.authError){var e,n=null!==(e=h[this.authError])&&void 0!==e?e:"LOGIN.API.UNAUTH";this.showAlert(this.$t(n)),window.requestIdleCallback((function(){var e=t.$route.query;t.$router.replace({query:f(f({},e),{},{error:void 0})})}))}},methods:{showAlert:function(t){this.loginApi.showLoading=!1,this.loginApi.message=t,bus.$emit("newToastMessage",this.loginApi.message)},submitLogin:function(){var t=this;if(!this.$v.credentials.email.$invalid||this.email){this.loginApi.hasErrored=!1,this.loginApi.showLoading=!0;var e={email:this.email?decodeURIComponent(this.email):this.credentials.email,password:this.credentials.password,sso_auth_token:this.ssoAuthToken,ssoAccountId:this.ssoAccountId,ssoConversationId:this.ssoConversationId};Object(c.a)(e).then((function(){t.showAlert(t.$t("LOGIN.API.SUCCESS_MESSAGE"))})).catch((function(e){t.email&&(window.location="/app/login"),t.loginApi.hasErrored=!0,t.showAlert((null===e||void 0===e?void 0:e.message)||t.$t("LOGIN.API.UNAUTH"))}))}else this.showAlert(this.$t("LOGIN.EMAIL.ERROR"))}}},v=n(5),b=Object(v.a)(g,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"flex flex-col bg-woot-25 min-h-screen w-full py-20 sm:px-6 lg:px-8 dark:bg-slate-900"},[e("section",{staticClass:"max-w-5xl mx-auto"},[e("img",{staticClass:"mx-auto h-8 w-auto block dark:hidden",attrs:{src:t.globalConfig.logo,alt:t.globalConfig.installationName}}),t._v(" "),t.globalConfig.logoDark?e("img",{staticClass:"mx-auto h-8 w-auto hidden dark:block",attrs:{src:t.globalConfig.logoDark,alt:t.globalConfig.installationName}}):t._e(),t._v(" "),e("h2",{staticClass:"mt-6 text-center text-3xl font-medium text-slate-900 dark:text-woot-50"},[t._v("\n      "+t._s(t.useInstallationName(t.$t("LOGIN.TITLE"),t.globalConfig.installationName))+"\n    ")]),t._v(" "),t.showSignupLink?e("p",{staticClass:"mt-3 text-center text-sm text-slate-600 dark:text-slate-400"},[t._v("\n      "+t._s(t.$t("COMMON.OR"))+"\n      "),e("router-link",{staticClass:"text-link lowercase",attrs:{to:"auth/signup"}},[t._v("\n        "+t._s(t.$t("LOGIN.CREATE_NEW_ACCOUNT"))+"\n      ")])],1):t._e()]),t._v(" "),e("section",{staticClass:"bg-white shadow sm:mx-auto mt-11 sm:w-full sm:max-w-lg dark:bg-slate-800 p-11 sm:shadow-lg sm:rounded-lg",class:{"mb-8 mt-15":!t.showGoogleOAuth,"animate-wiggle":t.loginApi.hasErrored}},[t.email?e("div",{staticClass:"flex items-center justify-center"},[e("spinner",{attrs:{"color-scheme":"primary",size:""}})],1):e("div",[t.showGoogleOAuth?e("GoogleOAuthButton"):t._e(),t._v(" "),e("form",{staticClass:"space-y-5",on:{submit:function(e){return e.preventDefault(),t.submitLogin.apply(null,arguments)}}},[e("form-input",{attrs:{name:"email_address",type:"text","data-testid":"email_input",required:"",label:t.$t("LOGIN.EMAIL.LABEL"),placeholder:t.$t("LOGIN.EMAIL.PLACEHOLDER"),"has-error":t.$v.credentials.email.$error},on:{input:t.$v.credentials.email.$touch},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email","string"===typeof e?e.trim():e)},expression:"credentials.email"}}),t._v(" "),e("form-input",{attrs:{type:"password",name:"password","data-testid":"password_input",required:"",label:t.$t("LOGIN.PASSWORD.LABEL"),placeholder:t.$t("LOGIN.PASSWORD.PLACEHOLDER"),"has-error":t.$v.credentials.password.$error},on:{input:t.$v.credentials.password.$touch},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password","string"===typeof e?e.trim():e)},expression:"credentials.password"}},[t.globalConfig.disableUserProfileUpdate?t._e():e("p",[e("router-link",{staticClass:"text-link",attrs:{to:"auth/reset/password"}},[t._v("\n              "+t._s(t.$t("LOGIN.FORGOT_PASSWORD"))+"\n            ")])],1)]),t._v(" "),e("submit-button",{attrs:{disabled:t.loginApi.showLoading,"button-text":t.$t("LOGIN.SUBMIT"),loading:t.loginApi.showLoading}})],1)],1)])])}),[],!1,null,null,null);e.default=b.exports},371:function(t,e,n){"use strict";n(297)}}]);
//# sourceMappingURL=49-99e2e8e277626c8f5c87.chunk.js.map