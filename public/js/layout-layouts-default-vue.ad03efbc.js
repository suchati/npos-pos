(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-layouts-default-vue"],{7496:function(t,a,i){"use strict";var e=i("5530"),n=(i("df86"),i("7560")),r=i("58df");a["a"]=Object(r["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var a=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(e["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[a])}})},"7b3d":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app",[i("v-main",{class:t.$vuetify.theme.dark?"":"grey lighten-2"},[i("v-container",[i("v-fade-transition",{attrs:{mode:"out-in"}},[i("router-view")],1)],1)],1)],1)},n=[],r={name:"Default"},s=r,o=i("2877"),d=i("6544"),c=i.n(d),p=i("7496"),u=i("a523"),f=i("0789"),l=i("f6c4"),v=Object(o["a"])(s,e,n,!1,null,null,null);a["default"]=v.exports;c()(v,{VApp:p["a"],VContainer:u["a"],VFadeTransition:f["d"],VMain:l["a"]})},a523:function(t,a,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var e=i("e8f2"),n=i("d9f7");a["a"]=Object(e["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var i,e=a.props,r=a.data,s=a.children,o=r.attrs;return o&&(r.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),s)}})},bd0c:function(t,a,i){},df86:function(t,a,i){},f6c4:function(t,a,i){"use strict";i("bd0c");var e=i("d10f");a["a"]=e["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,a=t.bar,i=t.top,e=t.right,n=t.footer,r=t.insetFooter,s=t.bottom,o=t.left;return{paddingTop:"".concat(i+a,"px"),paddingRight:"".concat(e,"px"),paddingBottom:"".concat(n+r+s,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var a={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,a,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=layout-layouts-default-vue.ad03efbc.js.map