(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{2805:function(t,e,r){"use strict";r(4),r(31),r(37);var n=r(1923),a=r(57),i={title:{required:a.required,minLength:Object(a.minLength)(2)},description:{},showOnSidebar:{}},s={components:{WootSubmitButton:n.a},props:{onSubmit:{type:Function,default:function(){}},submitInProgress:{type:Boolean,default:!1},formData:{type:Object,default:function(){}},submitButtonText:{type:String,default:""}},data:function(){var t=this.formData||{},e=t.description,r=void 0===e?"":e,n=t.name,a=void 0===n?"":n,i=t.allow_auto_assign;return{description:r,title:a,allowAutoAssign:void 0===i||i}},validations:i,methods:{handleSubmit:function(){this.$v.$touch(),this.$v.$invalid||this.onSubmit({description:this.description,name:this.title,allow_auto_assign:this.allowAutoAssign})}}},o=r(5),l=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-0 flex flex-wrap"},[e("div",{staticClass:"flex-shrink-0 flex-grow-0 w-[65%]"},[e("form",{staticClass:"mx-0 flex flex-wrap",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("woot-input",{staticClass:"w-full",class:{error:t.$v.title.$error},attrs:{label:t.$t("TEAMS_SETTINGS.FORM.NAME.LABEL"),placeholder:t.$t("TEAMS_SETTINGS.FORM.NAME.PLACEHOLDER")},on:{input:t.$v.title.$touch},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),t._v(" "),e("woot-input",{staticClass:"w-full",class:{error:t.$v.description.$error},attrs:{label:t.$t("TEAMS_SETTINGS.FORM.DESCRIPTION.LABEL"),placeholder:t.$t("TEAMS_SETTINGS.FORM.DESCRIPTION.PLACEHOLDER")},on:{input:t.$v.description.$touch},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}}),t._v(" "),e("div",{staticClass:"w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.allowAutoAssign,expression:"allowAutoAssign"}],attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(t.allowAutoAssign)?t._i(t.allowAutoAssign,!0)>-1:t.allowAutoAssign},on:{change:function(e){var r=t.allowAutoAssign,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=t._i(r,true);n.checked?i<0&&(t.allowAutoAssign=r.concat([true])):i>-1&&(t.allowAutoAssign=r.slice(0,i).concat(r.slice(i+1)))}else t.allowAutoAssign=a}}}),t._v(" "),e("label",{attrs:{for:"conversation_creation"}},[t._v("\n          "+t._s(t.$t("TEAMS_SETTINGS.FORM.AUTO_ASSIGN.LABEL"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[e("div",{staticClass:"w-full"},[e("woot-submit-button",{attrs:{disabled:t.$v.title.$invalid||t.submitInProgress,"button-text":t.submitButtonText,loading:t.submitInProgress}})],1)])],1)])])}),[],!1,null,null,null);e.a=l.exports},3417:function(t,e,r){"use strict";r.r(e);r(30),r(49),r(65),r(10),r(4),r(8),r(11),r(9),r(12),r(7),r(22);var n=r(2805),a=r(271),i=r(135),s=r(79),o=r(25),l=r(170);function u(t,e,r,n,a,i,s){try{var o=t[i](s),l=o.value}catch(u){return void r(u)}o.done?e(l):Promise.resolve(l).then(n,a)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m={components:{TeamForm:n.a,PageHeader:i.a,Spinner:l.a},mixins:[s.a],data:function(){return{enabledFeatures:{}}},computed:p({teamData:function(){var t=this.$route.params.teamId;return this.$store.getters["teams/getTeam"](t)},showTeamForm:function(){return this.teamData.id&&!this.uiFlags.isFetching}},Object(o.mapGetters)({uiFlags:"teams/getUIFlags"})),methods:{updateTeam:function(t){var e,r=this;return(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.$route.params.teamId,e.next=4,r.$store.dispatch("teams/update",p({id:n},t));case 4:a.a.replace({name:"settings_teams_edit_members",params:{page:"edit",teamId:n}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r.showAlert(r.$t("TEAMS_SETTINGS.TEAM_FORM.ERROR_MESSAGE"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(t){u(i,n,a,s,o,"next",t)}function o(t){u(i,n,a,s,o,"throw",t)}s(void 0)}))})()}}},f=m,v=r(5),b=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wizard-body w-[75%] flex-shrink-0 flex-grow-0 max-w-[75%]"},[e("page-header",{attrs:{"header-title":t.$t("TEAMS_SETTINGS.EDIT_FLOW.CREATE.TITLE"),"header-content":t.$t("TEAMS_SETTINGS.EDIT_FLOW.CREATE.DESC")}}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[t.showTeamForm?e("team-form",{attrs:{"on-submit":t.updateTeam,"submit-in-progress":!1,"submit-button-text":t.$t("TEAMS_SETTINGS.EDIT_FLOW.CREATE.BUTTON_TEXT"),"form-data":t.teamData}}):e("spinner")],1)],1)}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=101-ec48c7ba35bbe4d8b2f3.chunk.js.map