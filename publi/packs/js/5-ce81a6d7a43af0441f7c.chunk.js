(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1793:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));a(1775),a(49),a(65);var r=function(){var t=12*(window.devicePixelRatio||1),e=document.createElement("canvas");if(!e.getContext||!e.getContext("2d")||"function"!==typeof e.getContext("2d").fillText)return!1;var a=e.getContext("2d");return a.fillStyle="#f00",a.textBaseline="top",a.font="32px Arial",a.fillText("\ud83d\udc28",0,0),0!==a.getImageData(t,t,1,1).data[0]},n=function(t){return t?t.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"").replace(/\s+/g," ").trim():""}},1930:function(t,e,a){},1931:function(t,e,a){},1943:function(t,e,a){"use strict";a(45),a(49),a(266),a(268),a(65);var r={name:"Avatar",props:{username:{type:String,default:""},size:{type:Number,default:40}},computed:{style:function(){return{fontSize:"".concat(Math.floor(this.size/2.5),"px")}},userInitial:function(){var t=this.username.split(/[ -]/).reduce((function(t,e){return t+e.charAt(0)}),"");return t.length>2&&-1!==t.search(/[A-Z]/)&&(t=t.replace(/[a-z]+/g,"")),t=t.substring(0,2).toUpperCase()}}},n=(a(2164),a(5)),s=Object(n.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"avatar-container",style:t.style,attrs:{"aria-hidden":"true"}},[t._t("default",(function(){return[t._v(t._s(t.userInitial))]}))],2)}),[],!1,null,"139a08b4",null);e.a=s.exports},2164:function(t,e,a){"use strict";a(1930)},2165:function(t,e,a){"use strict";a(1931)},261:function(t,e,a){"use strict";a(45),a(49),a(65),a(41);var r=a(1943),n=a(1793),s={components:{Avatar:r.a},props:{src:{type:String,default:""},size:{type:String,default:"40px"},badge:{type:String,default:""},username:{type:String,default:""},status:{type:String,default:""},hasBorder:{type:Boolean,default:!1},shouldShowStatusAlways:{type:Boolean,default:!1},title:{type:String,default:""},variant:{type:String,default:"circle"}},data:function(){return{hasImageLoaded:!1,imgError:!1}},computed:{userNameWithoutEmoji:function(){return Object(n.b)(this.username)},showStatusIndicator:function(){return!!this.shouldShowStatusAlways||("online"===this.status||"busy"===this.status)},avatarSize:function(){return Number(this.size.replace(/\D+/g,""))},badgeSrc:function(){return{instagram_direct_message:"instagram-dm",facebook:"messenger","twitter-tweet":"twitter-tweet","twitter-dm":"twitter-dm",whatsapp:"whatsapp",sms:"sms","Channel::Line":"line","Channel::Telegram":"telegram","Channel::WebWidget":""}[this.badge]},badgeStyle:function(){var t=Math.floor(this.avatarSize/3),e="".concat(t+2,"px");return{width:e,height:e,borderRadius:"".concat(t/2,"px")}},statusStyle:function(){var t="".concat(this.avatarSize/4,"px");return{width:t,height:t}},thumbnailClass:function(){var t=this.hasBorder?"border border-solid border-white dark:border-slate-700/50":"",e="circle"===this.variant?"thumbnail-rounded":"thumbnail-square";return"user-thumbnail ".concat(t," ").concat(e)},thumbnailBoxClass:function(){var t="circle"===this.variant?"is-rounded":"";return"user-thumbnail-box ".concat(t)},shouldShowImage:function(){return!!this.src&&(!!this.hasImageLoaded&&!this.imgError)}},watch:{src:function(t,e){t!==e&&this.imgError&&(this.imgError=!1)}},methods:{onImgError:function(){this.imgError=!0},onImgLoad:function(){this.hasImageLoaded=!0}}},i=(a(2165),a(5)),u=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{class:t.thumbnailBoxClass,style:{height:t.size,width:t.size},attrs:{title:t.title}},[t._t("default",(function(){return[e("img",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowImage,expression:"shouldShowImage"}],class:t.thumbnailClass,attrs:{src:t.src},on:{load:t.onImgLoad,error:t.onImgError}}),t._v(" "),e("Avatar",{directives:[{name:"show",rawName:"v-show",value:!t.shouldShowImage,expression:"!shouldShowImage"}],class:t.thumbnailClass,attrs:{username:t.userNameWithoutEmoji,size:t.avatarSize}})]})),t._v(" "),t.badgeSrc?e("img",{staticClass:"source-badge",style:t.badgeStyle,attrs:{src:`/integrations/channels/badges/${t.badgeSrc}.png`,alt:"Badge"}}):t._e(),t._v(" "),t.showStatusIndicator?e("div",{class:`source-badge user-online-status user-online-status--${t.status}`,style:t.statusStyle}):t._e()],2)}),[],!1,null,"478e95b6",null);e.a=u.exports}}]);
//# sourceMappingURL=5-ce81a6d7a43af0441f7c.chunk.js.map