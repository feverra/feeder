(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{349:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bot?n("main",{staticClass:"main-container main-container--bot-profile"},[t.bot.nickname&&t.nicknames?n("h2",{staticClass:"title"},[t._v("\n\t\t"+t._s(t.$t("bot-delete",{name:t.bot.nickname}))+"\n\t")]):n("h2",{staticClass:"title"},[t._v("\n\t\t"+t._s(t.$t("bot-delete",{name:t.bot.name}))+"\n\t")]),t._v(" "),n("div",{staticClass:"form-item"},[n("div",{staticClass:"form-item__buttons form-item__buttons--center"},[n("button",{staticClass:"button button--cancel",on:{click:t.onDelete}},[t.deleting?n("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):n("span",[t._v(t._s(t.$t("delete")))])],1),t._v(" "),n("button",{staticClass:"button button--confirm",on:{click:function(e){return t.$parent.back()}}},[t._v("\n\t\t\t\t"+t._s(t.$t("cancel"))+"\n\t\t\t")])])])]):t._e()};o._withStripped=!0;var r=n(3),i=n(14);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"bot-delete",data:()=>({deleting:!1}),computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(r.c)({nicknames:"settings/nicknames"}),{bot(){return this.$store.getters["bots/bot"](this.$route.params.bot)}}),created(){this.bot||this.$router.replace({name:"bots"})},methods:{async onDelete(){this.deleting=!0;try{await this.$http.del("bot/".concat(this.bot.name)),await Object(i.a)(1e3),await this.$store.dispatch("bots/updateBot",{name:this.bot.name}),this.$router.push({name:"bots"})}finally{this.deleting=!1}}}},l=n(1),b=Object(l.a)(c,o,[],!1,null,null,null);b.options.__file="src/views/modals/BotDelete.vue";e.default=b.exports}}]);