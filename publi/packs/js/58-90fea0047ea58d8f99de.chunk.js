(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{2654:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return s}));a(41);var o=function(t){var e=window.chatwootConfig,a=e.hostURL,o=e.helpCenterURL;return"".concat(o||a||"","/hc/").concat(t)},s=function(t,e,a,s){var l=o(t);return"".concat(l,"/articles/").concat(s)}},2715:function(t,e,a){},2716:function(t,e,a){},2790:function(t,e,a){"use strict";a(2715)},2791:function(t,e,a){"use strict";a(2716)},2809:function(t,e,a){"use strict";var o={mixins:[a(1778).a],props:{locales:{type:Array,default:function(){return[]}},selectedLocaleCode:{type:String,default:""}},methods:{changeDefaultLocale:function(t){this.$emit("change-default-locale",{localeCode:t})},deleteLocale:function(t){this.$emit("delete",{localeCode:t})}}},s=(a(2790),a(5)),l=Object(s.a)(o,(function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.NAME"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CODE"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.ARTICLE_COUNT"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CATEGORIES"))+"\n      ")]),t._v(" "),e("th",{attrs:{scope:"col"}})])]),t._v(" "),t._m(0),t._v(" "),e("tbody",t._l(t.locales,(function(a){return e("tr",{key:a.code},[e("td",[e("span",[t._v(t._s(t.localeName(a.code)))]),t._v(" "),a.code===t.selectedLocaleCode?e("woot-label",{staticClass:"default-status",attrs:{title:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DEFAULT_LOCALE"),"color-scheme":"warning",small:!0,variant:"smooth"}}):t._e()],1),t._v(" "),e("td",[e("span",[t._v(t._s(a.code))])]),t._v(" "),e("td",[e("span",[t._v(t._s(a.articles_count))])]),t._v(" "),e("td",[e("span",[t._v(t._s(a.categories_count))])]),t._v(" "),e("td",[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"arrow-swap","color-scheme":"primary",disabled:a.code===t.selectedLocaleCode},on:{click:function(e){return t.changeDefaultLocale(a.code)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"delete","color-scheme":"secondary",disabled:a.code===t.selectedLocaleCode},on:{click:function(e){return t.deleteLocale(a.code)}}})],1)])})),0)])}),[function(){var t=this._self._c;return t("tr",[t("td",{staticClass:"horizontal-line",attrs:{colspan:"100%"}})])}],!1,null,"1f23c0e2",null);e.a=l.exports},2810:function(t,e,a){"use strict";a(30),a(83),a(8),a(10),a(68),a(97),a(37),a(7),a(22);var o=a(301),s=a(79),l=a(57),n=a(1948),r=a(87);function c(t,e,a,o,s,l,n){try{var r=t[l](n),c=r.value}catch(i){return void a(i)}r.done?e(c):Promise.resolve(c).then(o,s)}var i={components:{Modal:o.a},mixins:[s.a],props:{show:{type:Boolean,default:!0},portal:{type:Object,default:function(){return{}}}},data:function(){return{selectedLocale:"",isUpdating:!1}},computed:{addedLocales:function(){return this.portal.config.allowed_locales.map((function(t){return t.code}))},locales:function(){var t=this.portal.config.allowed_locales.map((function(t){return t.code}));return Object.keys(n.a).map((function(t){return{id:t,name:n.a[t],code:t}})).filter((function(e){return!t.includes(e.code)}))}},validations:{selectedLocale:{required:l.required}},methods:{onCreate:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!e.$v.$invalid){t.next=3;break}return t.abrupt("return");case 3:return(a=e.addedLocales).push(e.selectedLocale),e.isUpdating=!0,t.prev=6,t.next=9,e.$store.dispatch("portals/update",{portalSlug:e.portal.slug,config:{allowed_locales:a}});case 9:e.alertMessage=e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.SUCCESS_MESSAGE"),e.onClose(),e.$track(r.h.CREATE_LOCALE,{localeAdded:e.selectedLocale,totalLocales:a.length,from:e.$route.name}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),e.alertMessage=(null===t.t0||void 0===t.t0?void 0:t.t0.message)||e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.ERROR_MESSAGE");case 17:return t.prev=17,e.showAlert(e.alertMessage),e.isUpdating=!1,t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[6,14,17,21]])})),function(){var e=this,a=arguments;return new Promise((function(o,s){var l=t.apply(e,a);function n(t){c(l,o,s,n,r,"next",t)}function r(t){c(l,o,s,n,r,"throw",t)}n(void 0)}))})()},onClose:function(){this.$emit("cancel")}}},E=i,u=(a(2791),a(5)),d=Object(u.a)(E,(function(){var t=this,e=t._self._c;return e("modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("woot-modal-header",{attrs:{"header-title":t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.TITLE"),"header-content":t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.SUB_TITLE")}}),t._v(" "),e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.onCreate.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("label",{class:{error:t.$v.selectedLocale.$error}},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.LABEL"))+"\n        "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLocale,expression:"selectedLocale"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedLocale=e.target.multiple?a:a[0]}}},t._l(t.locales,(function(a){return e("option",{key:a.name,domProps:{value:a.id}},[t._v("\n            "+t._s(a.name)+"-"+t._s(a.code)+"\n          ")])})),0),t._v(" "),t.$v.selectedLocale.$error?e("span",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.ERROR"))+"\n        ")]):t._e()]),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CANCEL"))+"\n          ")]),t._v(" "),e("woot-button",[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CREATE"))+"\n          ")])],1)])])])],1)}),[],!1,null,"30b24ea8",null);e.a=d.exports},3369:function(t,e,a){"use strict";a.r(e);a(141),a(10),a(4),a(8),a(11),a(9),a(12);var o=a(25),s=a(79),l=(a(30),a(37),a(83),a(7),a(22),a(261)),n=a(2809),r=a(267),c=a(87);function i(t,e,a,o,s,l,n){try{var r=t[l](n),c=r.value}catch(i){return void a(i)}r.done?e(c):Promise.resolve(c).then(o,s)}function E(t){return function(){var e=this,a=arguments;return new Promise((function(o,s){var l=t.apply(e,a);function n(t){i(l,o,s,n,r,"next",t)}function r(t){i(l,o,s,n,r,"throw",t)}n(void 0)}))}}var u={components:{thumbnail:l.a,LocaleItemTable:n.a},mixins:[s.a,r.a],props:{portal:{type:Object,default:function(){}},status:{type:String,default:"",values:["archived","draft","published"]}},data:function(){return{showDeleteConfirmationPopup:!1,alertMessage:"",selectedPortalForDelete:{}}},computed:{labelColor:function(){return"Archived"===this.status?"warning":"success"},deleteMessageValue:function(){return" ".concat(this.selectedPortalForDelete.name,"?")},locales:function(){return this.portal?this.portal.config.allowed_locales:[]},allowedLocales:function(){var t=this;return Object.keys(this.locales).map((function(e){return t.locales[e].code}))},articleCount:function(){return this.portal.config.allowed_locales.reduce((function(t,e){return t+e.articles_count}),0)}},methods:{addLocale:function(){this.$emit("add-locale",this.portal.id)},openSite:function(){this.$emit("open-site",this.portal.slug)},openSettings:function(){this.fetchPortalAndItsCategories(),this.navigateToPortalEdit()},onClickOpenDeleteModal:function(t){this.selectedPortalForDelete=t,this.showDeleteConfirmationPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},fetchPortalAndItsCategories:function(){var t=this;return E(regeneratorRuntime.mark((function e(){var a,o,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("portals/index");case 2:a=t.portal,o=a.slug,s=a.config.allowed_locales,l={portalSlug:o,locale:s[0].code},t.$store.dispatch("portals/show",l),t.$store.dispatch("categories/index",l);case 6:case"end":return e.stop()}}),e)})))()},onClickDeletePortal:function(){var t=this;return E(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selectedPortalForDelete.slug,e.prev=1,e.next=4,t.$store.dispatch("portals/delete",{portalSlug:a});case 4:t.selectedPortalForDelete={},t.closeDeletePopup(),t.alertMessage=t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.API.DELETE_SUCCESS"),t.updateUISettings({last_active_portal_slug:void 0,last_active_locale_code:void 0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.API.DELETE_ERROR");case 13:return e.prev=13,t.showAlert(t.alertMessage),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},changeDefaultLocale:function(t){var e=t.localeCode;this.updatePortalLocales({allowedLocales:this.allowedLocales,defaultLocale:e,successMessage:this.$t("HELP_CENTER.PORTAL.CHANGE_DEFAULT_LOCALE.API.SUCCESS_MESSAGE"),errorMessage:this.$t("HELP_CENTER.PORTAL.CHANGE_DEFAULT_LOCALE.API.ERROR_MESSAGE")}),this.$track(c.h.SET_DEFAULT_LOCALE,{newLocale:e,from:this.$route.name})},deletePortalLocale:function(t){var e=t.localeCode,a=this.allowedLocales.filter((function(t){return t!==e})),o=this.portal.meta.default_locale;this.updatePortalLocales({allowedLocales:a,defaultLocale:o,successMessage:this.$t("HELP_CENTER.PORTAL.DELETE_LOCALE.API.SUCCESS_MESSAGE"),errorMessage:this.$t("HELP_CENTER.PORTAL.DELETE_LOCALE.API.ERROR_MESSAGE")}),this.$track(c.h.DELETE_LOCALE,{deletedLocale:e,from:this.$route.name})},updatePortalLocales:function(t){var e=this;return E(regeneratorRuntime.mark((function a(){var o,s,l,n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=t.allowedLocales,s=t.defaultLocale,l=t.successMessage,n=t.errorMessage,a.prev=1,a.next=4,e.$store.dispatch("portals/update",{portalSlug:e.portal.slug,config:{default_locale:s,allowed_locales:o}});case 4:e.alertMessage=l,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),e.alertMessage=(null===a.t0||void 0===a.t0?void 0:a.t0.message)||n;case 10:return a.prev=10,e.showAlert(e.alertMessage),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[1,7,10,13]])})))()},navigateToPortalEdit:function(){this.$router.push({name:"edit_portal_information",params:{portalSlug:this.portal.slug}})}}},d=a(5),L=Object(d.a)(u,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"bg-white dark:bg-slate-900 rounded-md relative flex mb-3 p-4 border border-solid border-slate-100 dark:border-slate-600"},[e("thumbnail",{attrs:{username:t.portal.name,variant:"square"}}),t._v(" "),e("div",{staticClass:"ml-2 rtl:ml-0 rtl:mr-2 flex-grow"},[e("header",{staticClass:"flex items-start justify-between mb-8"},[e("div",[e("div",{staticClass:"flex items-center"},[e("h2",{staticClass:"mb-0 text-lg text-slate-800 dark:text-slate-100"},[t._v("\n              "+t._s(t.portal.name)+"\n            ")]),t._v(" "),e("woot-label",{staticClass:"my-0 mx-2",attrs:{title:t.status,"color-scheme":t.labelColor,size:"small",variant:"smooth"}})],1),t._v(" "),e("p",{staticClass:"text-sm mb-0 text-slate-700 dark:text-slate-200"},[t._v("\n            "+t._s(t.articleCount)+"\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.COUNT_LABEL"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex flex-row gap-1"},[e("woot-button",{attrs:{variant:"smooth",size:"small","color-scheme":"primary"},on:{click:t.addLocale}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.ADD"))+"\n          ")]),t._v(" "),e("woot-button",{attrs:{variant:"hollow",size:"small","color-scheme":"secondary"},on:{click:t.openSite}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.VISIT"))+"\n          ")]),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.SETTINGS"),expression:"\n              $t(\n                'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.SETTINGS'\n              )\n            ",modifiers:{"top-end":!0}}],attrs:{variant:"hollow",size:"small",icon:"settings","color-scheme":"secondary"},on:{click:t.openSettings}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.DELETE"),expression:"\n              $t('HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.DELETE')\n            ",modifiers:{"top-end":!0}}],attrs:{variant:"hollow","color-scheme":"alert",size:"small",icon:"delete"},on:{click:function(e){return t.onClickOpenDeleteModal(t.portal)}}})],1)]),t._v(" "),e("div",{staticClass:"mb-12"},[e("h2",{staticClass:"text-slate-800 dark:text-slate-100 font-medium mb-2 text-base"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.TITLE"))+"\n        ")]),t._v(" "),e("div",{staticClass:"flex justify-between mr-[6.25rem] rtl:mr-0 rtl:ml-[6.25rem] max-w-[80vw]"},[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.NAME")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.name)+"\n              ")])]),t._v(" "),e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.DOMAIN")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.custom_domain)+"\n              ")])])]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.SLUG")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.slug)+"\n              ")])]),t._v(" "),e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.TITLE")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.page_title)+"\n              ")])])]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.THEME")))]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-4 h-4 rounded-md mr-1 rtl:mr-0 rtl:ml-1 border border-solid border-slate-25 dark:border-slate-800",style:{background:t.portal.color}})])]),t._v(" "),e("div",{staticClass:"flex items-start flex-col mb-4"},[e("label",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.PORTAL_CONFIG.ITEMS.SUB_TEXT")))]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-300"},[t._v("\n                "+t._s(t.portal.header_text)+"\n              ")])])])])]),t._v(" "),e("div",{staticClass:"mb-12"},[e("h2",{staticClass:"text-slate-800 dark:text-slate-100 font-medium mb-2 text-base"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TITLE"))+"\n        ")]),t._v(" "),e("locale-item-table",{attrs:{locales:t.locales,"selected-locale-code":t.portal.meta.default_locale},on:{"change-default-locale":t.changeDefaultLocale,delete:t.deletePortalLocale}})],1)])],1),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.onClickDeletePortal,title:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.TITLE"),message:t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.MESSAGE"),"message-value":t.deleteMessageValue,"confirm-text":t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.YES"),"reject-text":t.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.DELETE_PORTAL.NO")},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null).exports,_=a(170),T=a(1919),p=a(2810),A=a(2654);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var P={components:{PortalListItem:L,EmptyState:T.a,Spinner:_.a,AddLocale:p.a},mixins:[s.a],data:function(){return{isAddLocaleModalOpen:!1,selectedPortal:{}}},computed:f(f({},Object(o.mapGetters)({portals:"portals/allPortals",meta:"portals/getMeta",isFetching:"portals/isFetchingPortals"})),{},{portalStatus:function(){return this.archived?"Archived":"Live"},shouldShowEmptyState:function(){return!this.isFetching&&!this.portals.length}}),methods:{openPortal:function(t){window.open(Object(A.b)(t),"_blank")},addPortal:function(){this.$router.push({name:"new_portal_information"})},closeAddLocaleModal:function(){this.isAddLocaleModalOpen=!1,this.selectedPortal={}},addLocale:function(t){this.isAddLocaleModalOpen=!0,this.selectedPortal=this.portals.find((function(e){return e.id===t}))}}},h=Object(d.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-2 px-4 w-full max-w-full"},[e("div",{staticClass:"flex justify-between items-center mt-0 mb-2 mx-0 h-12"},[e("div",{staticClass:"flex items-center"},[e("woot-sidemenu-icon"),t._v(" "),e("h1",{staticClass:"my-0 mx-2 text-2xl text-slate-800 dark:text-slate-100"},[t._v("\n        "+t._s(t.$t("HELP_CENTER.PORTAL.HEADER"))+"\n      ")])],1),t._v(" "),e("woot-button",{attrs:{"color-scheme":"primary",icon:"add",size:"small"},on:{click:t.addPortal}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.PORTAL.NEW_BUTTON"))+"\n    ")])],1),t._v(" "),e("div",{staticClass:"h-[90vh] overflow-y-scroll"},[t._l(t.portals,(function(a){return e("portal-list-item",{key:a.id,attrs:{portal:a,status:t.portalStatus},on:{"add-locale":t.addLocale,"open-site":t.openPortal}})})),t._v(" "),t.isFetching?e("div",{staticClass:"items-center flex text-base justify-center p-40"},[e("spinner"),t._v(" "),e("span",[t._v(t._s(t.$t("HELP_CENTER.PORTAL.LOADING_MESSAGE")))])],1):t.shouldShowEmptyState?e("empty-state",{attrs:{title:t.$t("HELP_CENTER.PORTAL.NO_PORTALS_MESSAGE")}}):t._e()],2),t._v(" "),e("woot-modal",{attrs:{show:t.isAddLocaleModalOpen,"on-close":t.closeAddLocaleModal},on:{"update:show":function(e){t.isAddLocaleModalOpen=e}}},[e("add-locale",{attrs:{show:t.isAddLocaleModalOpen,portal:t.selectedPortal},on:{cancel:t.closeAddLocaleModal}})],1)],1)}),[],!1,null,null,null);e.default=h.exports}}]);
//# sourceMappingURL=58-90fea0047ea58d8f99de.chunk.js.map