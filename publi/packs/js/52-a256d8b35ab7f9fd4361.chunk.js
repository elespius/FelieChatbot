(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1912:function(e,t,n){"use strict";n(64),n(49),n(65),n(1913),n(136),n(16),n(7),n(20),n(21),n(196),n(9);var r=n(1915),a=n.n(r),s=(n(370),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(e){e.children.forEach((function(e){"image"===e.type&&function(e){var t=e.attrGet("src");if(t){var n=new URL(t).searchParams.get("cw_image_height");n&&e.attrSet("style","height: ".concat(n,";"))}}(e)}))},u=n(1807)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(e){e.renderer.rules.mention=function(e,t){return'<span class="prosemirror-mention-node">'.concat(e[t].content,"</span>")},e.inline.ruler.before("link","mention",(function(e,t){var n,r,a,i,o,c,u="",l=e.posMax;return 91===e.src.charCodeAt(e.pos)&&(a=e.pos+1,!((r=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)&&(n=e.src.slice(a,r),(i=r+1)<l&&40===e.src.charCodeAt(i)&&(i+=1,(o=e.md.helpers.parseLinkDestination(e.src,i,e.posMax)).ok&&(u=e.md.normalizeLink(o.str),e.md.validateLink(u)?i=o.pos:u=""),i+=1),!!u.match(new RegExp(s))&&(t||(e.pos=a,e.posMax=r,(c=e.push("mention","")).href=u,c.content=n),e.pos=i,e.posMax=l,!0)))}))})).use((function(e){e.core.ruler.after("inline","add-image-height",(function(e){e.tokens.forEach((function(e){"inline"===e.type&&c(e)}))}))})).use(a.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),l=/(^|[^@\w])@(\w{1,15})\b/g,f=/(^|\s)#(\w+)/g,m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,e),this.message=t||"",this.isAPrivateNote=r,this.isATweet=n}var t,n,r;return t=e,(n=[{key:"formatMessage",value:function(){var e=this.message;return this.isATweet&&!this.isAPrivateNote&&(e=(e=e.replace(l,"$1[@$2](http://twitter.com/$2)")).replace(f,"$1[#$2](https://twitter.com/hashtag/$2)")),u.render(e)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&o(t.prototype,n),r&&o(t,r),e}(),p=m;t.a={methods:{formatMessage:function(e,t,n){return new p(e,t,n).formattedMessage},getPlainText:function(e,t){return new p(e,t).plainText},truncateMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<100?e:"".concat(e.slice(0,97),"...")},highlightContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.getPlainText(e),a=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return r.replace(new RegExp("(".concat(a,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}},2720:function(e,t,n){e.exports=n.p+"media/dashboard/assets/images/chatwoot_bot-905112376e6493b37e2cecea8f9dc50c.png"},2721:function(e,t,n){},2722:function(e,t,n){},2795:function(e,t,n){"use strict";n(2721)},2796:function(e,t,n){"use strict";n(2722)},2800:function(e,t,n){"use strict";n(10),n(4),n(8),n(11),n(9),n(12),n(31),n(7),n(33),n(16),n(20),n(21),n(64),n(37),n(69);var r=n(25),a=n(352),s=n(302),i=n(307),o=(n(45),n(41),n(1912)),c=n(261),u=n(89),l=n(298),f={name:"UnreadMessage",components:{Thumbnail:c.a},mixins:[o.a,a.a,l.a],props:{message:{type:String,default:""},showSender:{type:Boolean,default:!1},sender:{type:Object,default:function(){}},campaignId:{type:Number,default:null}},computed:{companyName:function(){return"".concat(this.$t("UNREAD_VIEW.COMPANY_FROM")," ").concat(this.channelConfig.websiteName)},avatarUrl:function(){var e=n(2720),t=this.useInboxAvatarForBot?this.inboxAvatarUrl:e;if(this.isSenderExist(this.sender)){var r=this.sender.avatar_url;return r}return t},agentName:function(){return this.isSenderExist(this.sender)?this.sender.available_name:this.useInboxAvatarForBot?this.channelConfig.websiteName:this.$t("UNREAD_VIEW.BOT")},availabilityStatus:function(){if(this.isSenderExist(this.sender)){var e=this.sender.availability_status;return e}return null}},methods:{isSenderExist:function(e){return e&&!Object(u.d)(e)},onClickMessage:function(){this.campaignId?bus.$emit(s.b,this.campaignId):bus.$emit(s.d)}}},m=(n(2795),n(5)),p=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"chat-bubble-wrap"},[t("button",{staticClass:"chat-bubble agent",class:e.$dm("bg-white","dark:bg-slate-50"),on:{click:e.onClickMessage}},[e.showSender?t("div",{staticClass:"row--agent-block"},[t("thumbnail",{attrs:{src:e.avatarUrl,size:"20px",username:e.agentName,status:e.availabilityStatus}}),e._v(" "),t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.agentName,expression:"agentName"}],staticClass:"agent--name"}),e._v(" "),t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.companyName,expression:"companyName"}],staticClass:"company--name"})],1):e._e(),e._v(" "),t("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.formatMessage(e.message,!1),expression:"formatMessage(message, false)"}],staticClass:"message-content"})])])}),[],!1,null,"7f6a0adb",null).exports,g=n(380);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,s=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return s}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"Unread",components:{FluentIcon:i.a,UnreadMessage:p},mixins:[a.a],props:{messages:{type:Array,required:!0}},computed:v(v({},Object(r.mapGetters)({unreadMessageCount:"conversation/getUnreadMessageCount",widgetColor:"appConfig/getWidgetColor"})),{},{sender:function(){return d(this.messages,1)[0].sender||{}},isBackgroundLighter:function(){return Object(g.b)(this.widgetColor)}}),methods:{openConversationView:function(){bus.$emit(s.d)},closeFullView:function(){this.$emit("close")},getMessageContent:function(e){var t=e.attachments,n=e.content,r=t&&t.length;return n||(r?"\ud83d\udcd1":"")}}},O=(n(2796),Object(m.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"unread-wrap"},[t("div",{staticClass:"close-unread-wrap"},[t("button",{staticClass:"button small close-unread-button",on:{click:e.closeFullView}},[t("span",{staticClass:"flex items-center"},[t("fluent-icon",{staticClass:"mr-1",attrs:{icon:"dismiss",size:"12"}}),e._v("\n        "+e._s(e.$t("UNREAD_VIEW.CLOSE_MESSAGES_BUTTON"))+"\n      ")],1)])]),e._v(" "),t("div",{staticClass:"unread-messages"},e._l(e.messages,(function(n,r){return t("unread-message",{key:n.id,attrs:{"message-type":n.messageType,"message-id":n.id,"show-sender":!r,sender:n.sender,message:e.getMessageContent(n),"campaign-id":n.campaignId}})})),1),e._v(" "),t("div",{staticClass:"open-read-view-wrap"},[e.unreadMessageCount?t("button",{staticClass:"button clear-button",on:{click:e.openConversationView}},[t("span",{staticClass:"flex items-center",class:{"is-background-light":e.isBackgroundLighter},style:{color:e.widgetColor}},[t("fluent-icon",{staticClass:"mr-2",attrs:{size:"16",icon:"arrow-right"}}),e._v("\n        "+e._s(e.$t("UNREAD_VIEW.VIEW_MESSAGES_BUTTON"))+"\n      ")],1)]):e._e()])])}),[],!1,null,"3663ea63",null));t.a=O.exports},3381:function(e,t,n){"use strict";n.r(t);n(10),n(4),n(8),n(11),n(9),n(12);var r=n(25),a=n(89);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"Campaigns",components:{UnreadMessageList:n(2800).a},computed:i(i({},Object(r.mapGetters)({campaign:"campaign/getActiveCampaign"})),{},{messages:function(){var e=this.campaign,t=e.sender,n=e.id;return[{content:e.message,sender:t,campaignId:n}]}}),methods:{closeFullView:function(){a.a.isIFrame()&&(a.a.sendMessage({event:"setCampaignReadOn"}),a.a.sendMessage({event:"toggleBubble"}),bus.$emit("snooze-campaigns"))}}},u=n(5),l=Object(u.a)(c,(function(){var e=this;return(0,e._self._c)("unread-message-list",{attrs:{messages:e.messages},on:{close:e.closeFullView}})}),[],!1,null,null,null);t.default=l.exports},380:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));n(49),n(65);var r=n(256),a=function(e){var t=e.replace("#","");return(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>225},s=function(e,t){for(var n=e,a=0;a<20;a+=1){if(Object(r.a)(n,t)>=3.1)break;var s=Object(r.b)(n)<.5?"#fff":"#151718";n=Object(r.c)(n,s,.05)}return Object(r.d)(n)}}}]);
//# sourceMappingURL=52-a256d8b35ab7f9fd4361.chunk.js.map