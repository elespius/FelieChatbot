(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1774:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return m})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return s}));var r=function(t,e,n){var r;return function(){var a=null,i=arguments,s=function(){r=null,n||t.apply(a,i)},l=n&&!r;clearTimeout(r),r=window.setTimeout(s,e),l&&t.apply(a,i)}},a=function(t){var e=t.replace("#","");return.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16)>186?"#000000":"#FFFFFF"},i=function(t){var e="";if(t>=60&&t<3600){var n=Math.floor(t/60);e=n+" Min";var r=60===n?0:Math.floor(t%60);return e+(r>0?" "+r+" Sec":"")}if(t>=3600&&t<86400){var a=Math.floor(t/3600);e=a+" Hr";var i=t%3600<60||24===a?0:Math.floor(t%3600/60);return e+(i>0?" "+i+" Min":"")}if(t>=86400){var s=Math.floor(t/86400);e=s+" Day";var l=t%86400<3600||s>=364?0:Math.floor(t%86400/3600);return e+(l>0?" "+l+" Hr":"")}return Math.floor(t)+" Sec"},s=function(t,e,n){void 0===t&&(t=""),void 0===e&&(e=1024),void 0===n&&(n=!1);var r=t;return t.length>e&&(r=t.substring(0,e)),n&&(r+="..."),r};function l(t){try{var e=String(t).toLowerCase();return Boolean(JSON.parse(e))}catch(n){return!1}}function o(t){return t.slice().sort((function(t,e){return t-e}))}function c(t,e){var n,r,a,i=(r=1,(a=e)<(n=0)?n:a>r?r:a),s=(t.length-1)*i,l=Math.floor(s),o=s-l;return void 0!==t[l+1]?t[l]+o*(t[l+1]-t[l]):t[l]}var u=function(t,e){var n=o(t);return e.map((function(t){return c(n,t)}))},f=/{{(.*?)}}/g,p=function(t){return(t||"").replace(/\b(\w)/g,(function(t){return t.toUpperCase()}))},d=function(t){var e=t.user,n=null!=e&&e.name?e.name.split(" ").shift():"";return p(n)},v=function(t){var e=t.user;if(e&&e.name){var n=e.name.split(" ").length>1?e.name.split(" ").pop():"";return p(n)}return""},g=function(t){var e,n=t.conversation,r=n.meta,a=r.assignee,i=r.sender,s=n.id;return{"contact.name":p((null==i?void 0:i.name)||""),"contact.first_name":d({user:i}),"contact.last_name":v({user:i}),"contact.email":null==i?void 0:i.email,"contact.phone":null==i?void 0:i.phone_number,"contact.id":null==i?void 0:i.id,"conversation.id":s,"agent.name":p((null==a?void 0:a.name)||""),"agent.first_name":d({user:a}),"agent.last_name":v({user:a}),"agent.email":null!=(e=null==a?void 0:a.email)?e:""}},h=function(t){var e=t.message,n=t.variables;return e.replace(f,(function(t,e){return n[e.trim()]?n[e.trim().toLowerCase()]:""}))},m=function(t){var e=t.message,n=t.variables,r=e.replace(/```(?:.|\n)+?```/g,"").match(f);return r?r.map((function(t){return t.replace("{{","").replace("}}","").trim()})).filter((function(t){return!n[t]})):[]}},1775:function(t,e,n){"use strict";var r=n(24),a=n(210).trim;r({target:"String",proto:!0,forced:n(1918)("trim")},{trim:function(){return a(this)}})},1918:function(t,e,n){var r=n(19),a=n(222);t.exports=function(t){return r((function(){return!!a[t]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[t]()||a[t].name!==t}))}},2162:function(t,e,n){var r=n(58),a=/"/g;t.exports=function(t,e,n,i){var s=String(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),l+">"+s+"</"+e+">"}},2163:function(t,e,n){var r=n(19);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},2995:function(t,e,n){},3305:function(t,e,n){"use strict";var r=n(24),a=n(2162);r({target:"String",proto:!0,forced:n(2163)("link")},{link:function(t){return a(this,"a","href",t)}})},3306:function(t,e,n){"use strict";n(2995)},3349:function(t,e,n){"use strict";n.r(e);n(68),n(97),n(41),n(10),n(4),n(8),n(11),n(9),n(12),n(45);var r=n(25),a=n(1774),i=n(2062),s=(n(83),n(64),n(37),{name:"GroupedAvatars",components:{Thumbnail:n(261).a},props:{users:{type:Array,default:function(){return[]}}}}),l=n(5),o={name:"AvailableAgents",components:{GroupedAvatars:Object(l.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},t._l(t.users,(function(t,n){return e("span",{key:t.id,class:(n?"-ml-4":"")+" inline-block rounded-full text-white shadow-solid"},[e("thumbnail",{attrs:{size:"36px",username:t.name,src:t.avatar,"has-border":""}})],1)})),0)}),[],!1,null,null,null).exports},props:{agents:{type:Array,default:function(){return[]}}},computed:{users:function(){return this.agents.slice(0,4).map((function(t){return{id:t.id,avatar:t.avatar_url,name:t.name}}))}}},c=Object(l.a)(o,(function(){return(0,this._self._c)("grouped-avatars",{attrs:{users:this.users}})}),[],!1,null,null,null).exports,u=n(352),f=n(1801),p=n(307),d=n(89),v=n(343);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={name:"TeamAvailability",components:{AvailableAgents:c,FluentIcon:p.a},mixins:[u.a,i.a,f.a],props:{availableAgents:{type:Array,default:function(){}},hasConversation:{type:Boolean,default:!1},unreadCount:{type:Number,default:0}},computed:h(h({},Object(r.mapGetters)({widgetColor:"appConfig/getWidgetColor"})),{},{textColor:function(){return Object(a.c)(this.widgetColor)},isOnline:function(){var t=this.channelConfig.workingHoursEnabled,e=this.availableAgents.length>0;return t?this.isInBetweenTheWorkingHours:e}}),methods:{startConversation:function(){this.$emit("start-conversation"),this.hasConversation||d.a.sendMessage({event:"onEvent",eventIdentifier:v.c,data:{hasConversation:!1}})}}},w=Object(l.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 shadow-sm rounded-md bg-white dark:bg-slate-700"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:""},[e("div",{staticClass:"text-sm font-medium text-slate-700 dark:text-slate-50"},[t._v("\n        "+t._s(t.isOnline?t.$t("TEAM_AVAILABILITY.ONLINE"):t.$t("TEAM_AVAILABILITY.OFFLINE"))+"\n      ")]),t._v(" "),e("div",{staticClass:"text-sm mt-1 text-slate-500 dark:text-slate-100"},[t._v("\n        "+t._s(t.replyWaitMessage)+"\n      ")])]),t._v(" "),t.isOnline?e("available-agents",{attrs:{agents:t.availableAgents}}):t._e()],1),t._v(" "),e("button",{staticClass:"inline-flex text-sm font-medium rounded-md py-1 mt-2 px-2 -ml-2 leading-6 text-slate-800 dark:text-slate-50 justify-between items-center hover:bg-slate-25 dark:hover:bg-slate-800",style:{color:t.widgetColor},on:{click:t.startConversation}},[e("span",{staticClass:"pr-2 text-sm"},[t._v("\n      "+t._s(t.hasConversation?t.$t("CONTINUE_CONVERSATION"):t.$t("START_CONVERSATION"))+"\n    ")]),t._v(" "),e("fluent-icon",{attrs:{icon:"arrow-right",size:"14"}})],1)])}),[],!1,null,null,null).exports,y=(n(3305),{components:{FluentIcon:p.a},props:{link:{type:String,default:""},title:{type:String,default:""}},data:function(){return{}},methods:{onClick:function(){this.$emit("click",this.link)}}}),C={components:{ArticleListItem:Object(l.a)(y,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"py-1 flex items-center justify-between -mx-1 px-1 hover:bg-slate-25 dark:hover:bg-slate-600 rounded cursor-pointer text-slate-700 dark:text-slate-50 dark:hover:text-slate-25 hover:text-slate-900",attrs:{role:"button"},on:{click:t.onClick}},[e("button",{staticClass:"underline-offset-2 text-sm leading-6 text-left"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("span",{staticClass:"pl-1 arrow"},[e("fluent-icon",{attrs:{icon:"arrow-right",size:"14"}})],1)])}),[],!1,null,null,null).exports},props:{articles:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{onClick:function(t){this.$emit("click",t)}}},O=Object(l.a)(C,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"py-2",attrs:{role:"list"}},t._l(t.articles,(function(n){return e("article-list-item",{key:n.slug,attrs:{link:n.link,title:n.title},on:{click:t.onClick}})})),1)}),[],!1,null,null,null).exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k={components:{FluentIcon:p.a,ArticleList:O},props:{title:{type:String,default:""},articles:{type:Array,default:function(){return[]}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.mapGetters)({widgetColor:"appConfig/getWidgetColor"})),methods:{onArticleClick:function(t){this.$emit("view",t)}}},x=k,j=(n(3306),{components:{CategoryCard:Object(l.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-sm font-medium text-slate-800 dark:text-slate-50 mb-0"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("article-list",{attrs:{articles:t.articles},on:{click:t.onArticleClick}}),t._v(" "),e("button",{staticClass:"inline-flex text-sm font-medium rounded-md px-2 py-1 -ml-2 leading-6 text-slate-800 dark:text-slate-50 justify-between items-center hover:bg-slate-25 dark:hover:bg-slate-800 see-articles",style:{color:t.widgetColor},on:{click:function(e){return t.$emit("view-all")}}},[e("span",{staticClass:"pr-2 text-sm"},[t._v(t._s(t.$t("PORTAL.VIEW_ALL_ARTICLES")))]),t._v(" "),e("fluent-icon",{attrs:{icon:"arrow-right",size:"14"}})],1)],1)}),[],!1,null,"109d0cc8",null).exports},props:{articles:{type:Array,default:function(){return[]}},categoryPath:{type:String,default:""}},methods:{onArticleClick:function(t){this.$emit("view",t)}}}),P=Object(l.a)(j,(function(){var t=this;return(0,t._self._c)("category-card",{attrs:{title:t.$t("PORTAL.POPULAR_ARTICLES"),articles:t.articles.slice(0,6)},on:{"view-all":function(e){return t.$emit("view-all")},view:t.onArticleClick}})}),[],!1,null,null,null).exports,S=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 space-y-4 bg-white dark:bg-slate-700"},[e("div",{staticClass:"space-y-2 animate-pulse"},[e("div",{staticClass:"h-6 bg-slate-100 dark:bg-slate-500 rounded w-2/5"})]),t._v(" "),e("div",{staticClass:"space-y-2 animate-pulse"},[e("div",{staticClass:"h-4 bg-slate-100 dark:bg-slate-500 rounded"}),t._v(" "),e("div",{staticClass:"h-4 bg-slate-100 dark:bg-slate-500 rounded"}),t._v(" "),e("div",{staticClass:"h-4 bg-slate-100 dark:bg-slate-500 rounded"})]),t._v(" "),e("div",{staticClass:"space-y-2 animate-pulse"},[e("div",{staticClass:"h-4 bg-slate-100 dark:bg-slate-500 rounded w-1/5"})])])}],!1,null,null,null).exports,I=n(298),L=n(1784);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M={name:"Home",components:{ArticleHero:P,TeamAvailability:w,ArticleCardSkeletonLoader:S},mixins:[u.a,L.a,I.a],props:{hasFetched:{type:Boolean,default:!1},isCampaignViewClicked:{type:Boolean,default:!1}},computed:E(E({},Object(r.mapGetters)({availableAgents:"agent/availableAgents",activeCampaign:"campaign/getActiveCampaign",conversationSize:"conversation/getConversationSize",unreadMessageCount:"conversation/getUnreadMessageCount",popularArticles:"article/popularArticles",articleUiFlags:"article/uiFlags"})),{},{widgetLocale:function(){return this.$i18n.locale||"en"},portal:function(){return window.chatwootWebChannel.portal},showArticles:function(){return this.portal&&!this.articleUiFlags.isFetching&&this.popularArticles.length},defaultLocale:function(){var t=this.widgetLocale,e=this.portal.config,n=e.allowed_locales,r=e.default_locale;return n.includes(t)?t:r}}),mounted:function(){if(this.portal&&0===this.popularArticles.length){var t=this.defaultLocale;this.$store.dispatch("article/fetch",{slug:this.portal.slug,locale:t})}},methods:{startConversation:function(){return this.preChatFormEnabled&&!this.conversationSize?this.replaceRoute("prechat-form"):this.replaceRoute("messages")},openArticleInArticleViewer:function(t){var e="".concat(t,"?show_plain_layout=true");this.prefersDarkMode&&(e="".concat(e,"&theme=dark")),this.$router.push({name:"article-viewer",params:{link:e}})},viewAllArticles:function(){var t=this.defaultLocale,e=window.chatwootWebChannel.portal.slug;this.openArticleInArticleViewer("/hc/".concat(e,"/").concat(t))}}},$=Object(l.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"z-50 rounded-md w-full flex flex-1 flex-col",class:{"pb-2":t.showArticles,"justify-end":!t.showArticles}},[e("div",{staticClass:"px-4 pt-4 w-full"},[e("team-availability",{attrs:{"available-agents":t.availableAgents,"has-conversation":!!t.conversationSize,"unread-count":t.unreadMessageCount},on:{"start-conversation":t.startConversation}})],1),t._v(" "),t.showArticles?e("div",{staticClass:"px-4 py-2 w-full"},[e("div",{staticClass:"p-4 rounded-md bg-white dark:bg-slate-700 shadow-sm w-full"},[t.articleUiFlags.isFetching||t.articleUiFlags.isError||!t.popularArticles.length?t._e():e("article-hero",{attrs:{articles:t.popularArticles},on:{view:t.openArticleInArticleViewer,"view-all":t.viewAllArticles}})],1)]):t._e(),t._v(" "),t.articleUiFlags.isFetching?e("div",{staticClass:"px-4 py-2 w-full"},[e("div",{staticClass:"p-4 rounded-md bg-white dark:bg-slate-700 shadow-sm w-full"},[e("article-card-skeleton-loader")],1)]):t._e()])}),[],!1,null,null,null);e.default=$.exports}}]);
//# sourceMappingURL=57-a09eae72a76be3743652.chunk.js.map