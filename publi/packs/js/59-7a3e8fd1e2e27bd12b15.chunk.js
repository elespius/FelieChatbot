(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{170:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"small"},colorScheme:{type:String,default:""}},computed:{colorSchemeClasses:function(){return"primary"===this.colorScheme?"before:!border-t-woot-500":"warning"===this.colorScheme?"before:!border-t-yellow-500":"success"===this.colorScheme?"before:!border-t-success-500":this.colorScheme}}},a=(n(371),n(5)),s=Object(a.a)(r,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"spinner",class:`${t.size} ${t.colorSchemeClasses}`})}),[],!1,null,"25f4edd6",null);e.a=s.exports},220:function(t,e,n){"use strict";n(49),n(65);e.a={methods:{useInstallationName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return t.replace(/Chatwoot/g,e)}}}},2653:function(t,e,n){"use strict";var r=n(235),a=n.n(r),s=(window.chatwootConfig||{}).apiHost,o=void 0===s?"":s,i=a.a.create({baseURL:"".concat(o,"/")});e.a=i},2656:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return f}));n(1775),n(7),n(22),n(10),n(4),n(30);var r=n(51),a=n(2653),s=n(1926);function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function i(t,e,n,r,a,s,o){try{var i=t[s](o),u=i.value}catch(c){return void n(c)}i.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(t){i(s,r,a,o,u,"next",t)}function u(t){i(s,r,a,o,u,"throw",t)}o(void 0)}))}}var c=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,i,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.ssoAccountId,i=e.ssoConversationId,u=o(e,["ssoAccountId","ssoConversationId"]),t.prev=1,t.next=4,a.a.post("auth/sign_in",u);case 4:c=t.sent,Object(r.e)(c),Object(r.c)(),window.location=Object(s.a)({ssoAccountId:n,ssoConversationId:i,user:c.data.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),Object(r.g)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("api/v1/accounts.json",{account_name:e.accountName.trim(),user_full_name:e.fullName.trim(),email:e.email,password:e.password,h_captcha_client_response:e.hCaptchaClientResponse});case 3:return n=t.sent,Object(r.e)(n),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),Object(r.g)(t.t0);case 11:return t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.confirmationToken,t.prev=1,t.next=4,a.a.post("auth/confirmation",{confirmation_token:n});case 4:s=t.sent,Object(r.e)(s),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.g)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,s,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.resetPasswordToken,s=e.password,o=e.confirmPassword,t.prev=1,t.next=4,a.a.put("auth/password",{reset_password_token:n,password_confirmation:o,password:s});case 4:i=t.sent,Object(r.e)(i),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.g)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,t.abrupt("return",a.a.post("auth/password",{email:n}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},2671:function(t,e,n){"use strict";n(41);var r={components:{Spinner:n(170).a},props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},buttonText:{type:String,default:""},buttonClass:{type:String,default:""},iconClass:{type:String,default:""},type:{type:String,default:"submit"}},computed:{computedClass:function(){return"\n        ".concat(this.disabled?"opacity-40 hover:bg-woot-500":"","\n        ").concat(this.buttonClass||" ","\n      ")}},methods:{onClick:function(){this.$emit("click")}}},a=n(5),s=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"flex items-center w-full justify-center rounded-md bg-woot-500 py-3 px-3 text-base font-medium text-white shadow-sm hover:bg-woot-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-woot-500 cursor-pointer",class:t.computedClass,attrs:{type:t.type,"data-testid":"submit_button",disabled:t.disabled},on:{click:t.onClick}},[e("span",[t._v(t._s(t.buttonText))]),t._v(" "),t.iconClass?e("fluent-icon",{staticClass:"icon",attrs:{icon:t.iconClass}}):t._e(),t._v(" "),t.loading?e("spinner"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},2672:function(t,e,n){"use strict";n(45);var r={props:{label:{type:String,default:""},name:{type:String,required:!0},type:{type:String,default:"text"},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},value:{type:[String,Number],default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},dataTestid:{type:String,default:""}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},a=n(5),s=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.label?e("label",{staticClass:"flex justify-between text-sm font-medium leading-6 text-slate-900 dark:text-white",class:{"text-red-500":t.hasError},attrs:{for:t.name}},[t._v("\n    "+t._s(t.label)+"\n    "),t._t("default")],2):t._e(),t._v(" "),e("div",{staticClass:"mt-1"},[e("input",{staticClass:"block w-full rounded-md border-0 px-3 py-3 appearance-none shadow-sm ring-1 ring-inset text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-woot-500 sm:text-sm sm:leading-6 outline-none dark:bg-slate-700",class:{"focus:ring-red-600 ring-red-600":t.hasError,"dark:ring-slate-600 dark:focus:ring-woot-500 ring-slate-200":!t.hasError},attrs:{id:t.name,name:t.name,type:t.type,autocomplete:"off",required:t.required,placeholder:t.placeholder,"data-testid":t.dataTestid},domProps:{value:t.value},on:{input:t.onInput,blur:function(e){return t.$emit("blur")}}}),t._v(" "),t.errorMessage&&t.hasError?e("span",{staticClass:"text-xs leading-2 text-red-400"},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.a=s.exports},297:function(t,e,n){},3386:function(t,e,n){"use strict";n.r(e);n(10),n(4),n(8),n(11),n(9),n(12);var r=n(57),a=n(220),s=n(25),o=n(2672),i=n(2656),u=n(2671);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={components:{FormInput:o.a,SubmitButton:u.a},mixins:[a.a],data:function(){return{credentials:{email:""},resetPassword:{message:"",showLoading:!1},error:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(s.mapGetters)({globalConfig:"globalConfig/get"})),validations:{credentials:{email:{required:r.required,email:r.email,minLength:Object(r.minLength)(4)}}},methods:{showAlert:function(t){this.resetPassword.showLoading=!1,bus.$emit("newToastMessage",t)},submit:function(){var t=this;this.resetPassword.showLoading=!0,Object(i.c)(this.credentials).then((function(e){var n=t.$t("RESET_PASSWORD.API.SUCCESS_MESSAGE");e.data&&e.data.message&&(n=e.data.message),t.showAlert(n)})).catch((function(e){var n,r,a=t.$t("RESET_PASSWORD.API.ERROR_MESSAGE");null!==e&&void 0!==e&&null!==(n=e.response)&&void 0!==n&&null!==(r=n.data)&&void 0!==r&&r.message&&(a=e.response.data.message),t.showAlert(a)}))}}},p=d,f=n(5),m=Object(f.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col bg-woot-25 min-h-full w-full py-12 sm:px-6 lg:px-8 justify-center dark:bg-slate-900"},[e("form",{staticClass:"sm:mx-auto sm:w-full sm:max-w-lg bg-white dark:bg-slate-800 p-11 shadow sm:shadow-lg sm:rounded-lg",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("h1",{staticClass:"mb-1 text-left text-2xl font-medium tracking-tight text-slate-900 dark:text-white"},[t._v("\n      "+t._s(t.$t("RESET_PASSWORD.TITLE"))+"\n    ")]),t._v(" "),e("p",{staticClass:"text-sm text-slate-600 dark:text-woot-50 tracking-normal font-normal leading-6 mb-4"},[t._v("\n      "+t._s(t.useInstallationName(t.$t("RESET_PASSWORD.DESCRIPTION"),t.globalConfig.installationName))+"\n    ")]),t._v(" "),e("div",{staticClass:"column log-in-form space-y-5"},[e("form-input",{attrs:{name:"email_address","has-error":t.$v.credentials.email.$error,"error-message":t.$t("RESET_PASSWORD.EMAIL.ERROR"),placeholder:t.$t("RESET_PASSWORD.EMAIL.PLACEHOLDER")},on:{input:t.$v.credentials.email.$touch},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email","string"===typeof e?e.trim():e)},expression:"credentials.email"}}),t._v(" "),e("SubmitButton",{attrs:{disabled:t.$v.credentials.email.$invalid||t.resetPassword.showLoading,"button-text":t.$t("RESET_PASSWORD.SUBMIT"),loading:t.resetPassword.showLoading}})],1),t._v(" "),e("p",{staticClass:"text-sm text-slate-600 dark:text-woot-50 mt-4 -mb-1"},[t._v("\n      "+t._s(t.$t("RESET_PASSWORD.GO_BACK_TO_LOGIN"))+"\n      "),e("router-link",{staticClass:"text-link",attrs:{to:"/auth/login"}},[t._v("\n        "+t._s(t.$t("COMMON.CLICK_HERE"))+".\n      ")])],1)])])}),[],!1,null,null,null);e.default=m.exports},371:function(t,e,n){"use strict";n(297)}}]);
//# sourceMappingURL=59-7a3e8fd1e2e27bd12b15.chunk.js.map