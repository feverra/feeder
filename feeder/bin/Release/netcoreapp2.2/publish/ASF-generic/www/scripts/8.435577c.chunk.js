(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(t,e,n){"use strict";function r(t){return"en-US"!==t?"-".concat(t):""}n.d(e,"a",function(){return r})},177:function(t,e,n){"use strict";function r(t,e){const n=t.split(".").map(t=>parseInt(t,10)),r=e.split(".").map(t=>parseInt(t,10)),a=Math.max(n.length,r.length);for(let i=0;i<a;++i){const t=n[i]||0,e=r[i]||0;if(t!==e)return t>e?1:-1}return 0}n.d(e,"a",function(){return r})},180:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(6),a=n(177),i=n(176);async function s(t,e,n){const s=await async function(t,e,n){const s=Object(i.a)(n),o="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/".concat(t).concat(s);if(!e)return o;const c=await r.e("www/send",{url:"https://api.github.com/repos/JustArchiNET/ArchiSteamFarm/releases?per_page=20"}),u=JSON.parse(c),l=u.findIndex(t=>Object(a.a)(e,t.tag_name)>-1);if(-1===l){const t=u[0].tag_name;return Object(a.a)(e,t),o}if(0===l)return o;const m=new Date(u[l-1].published_at),f=await r.e("www/send",{url:"https://github.com/JustArchiNET/ArchiSteamFarm/wiki/".concat(t).concat(s,"/_history")}),d=document.createElement("html");d.innerHTML=f;const p=Array.from(d.querySelectorAll(".js-wiki-history-revision")).map(t=>({releaseTime:new Date(t.querySelector("relative-time").getAttribute("datetime")),version:t.querySelector(".js-wiki-history-checkbox").value})).find(t=>{let{releaseTime:e}=t;return e<m});return p?"https://github.com/JustArchiNET/ArchiSteamFarm/wiki/".concat(t).concat(s,"/").concat(p.version):o}(t,e,n);return await r.e("www/send",{url:s})}},186:function(t,e,n){"use strict";var r=n(6);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const o=new Map,c=new Map,u=/\[[^\]]+]/g;async function l(t){if(c.has(t))return c.get(t);const e=r.d("structure/".concat(encodeURIComponent(t)));return c.set(t,e),e}async function m(t){const e=function(t){const e=t.match(u);return e?e.map(t=>t.slice(1,t.length-1)):[]}(t);switch(t.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await m(e[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await m(e[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await m(e[0]),value:await m(e[1])};default:return d(t)}}function f(t){const e={};for(const n of Object.keys(t))e[n]=parseInt(t[n],10);return e}async function d(t){"ArchiSteamFarm.BotConfig"===t&&l(t);const e=await async function(t){if(o.has(t))return o.get(t);const e=r.d("type/".concat(encodeURIComponent(t)));return o.set(t,e),e}(t);switch(e.Properties.BaseType){case"System.Object":return async function(t,e){const n={type:"object",body:{}},[r,a]=await Promise.all([l(t),Promise.all(Object.keys(e.Body).map(async t=>({param:t,type:await m(e.Body[t])})))]);for(const s of a){const{param:t,type:a}=s,o="System.UInt64"!==e.Body[t]?t:"s_".concat(t);n.body[t]=i({defaultValue:r[t],paramName:o,param:t},a)}return n}(t,e);case"System.Enum":return{type:(e.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:f(e.Body)};default:return{type:"unknown",typeDefinition:e,structureDefinition:await l(t)}}}e.a=d},187:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(180),a=n(176),i=n(0);async function s(t,e){const n=i.a("cache:parameter-descriptions:".concat(e));if(n){const{timestamp:t,descriptions:e}=n;if(t>Date.now()-864e5)return e}const s={},c=await Object(r.a)("Configuration",t,e),u=document.createElement("html");u.innerHTML=c;const l=Array.from(u.querySelectorAll("h3 > code"));for(const r of l){const t=r.innerText,n=[];let i=r.parentElement.nextElementSibling;for(;i&&"hr"!==i.tagName.toLowerCase();){o(i.querySelectorAll('a[href^="#"]'),"Configuration",Object(a.a)(e)),n.push(i.outerHTML),i=i.nextElementSibling}s[t]=n.join(" ")}return i.c("cache:parameter-descriptions:".concat(e),{timestamp:Date.now(),descriptions:s}),s}function o(t,e,n){for(const r of t)r&&(r.setAttribute("href","https://github.com/JustArchiNET/ArchiSteamFarm/wiki/".concat(e).concat(n).concat(r.hash)),r.setAttribute("target","_blank"))}},188:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const r=/"s_(\w+)":\s*"(\d+)"/g;function a(t){return JSON.stringify(t,null,2).replace(r,'"$1":$2')}},189:function(t,e,n){"use strict";function r(t,e){for(const n of t)if(n.name===e)return!0;return!1}n.d(e,"a",function(){return r})},205:function(t,e,n){var r=n(283);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5).default)("6bea2620",r,!1,{})},282:function(t,e,n){"use strict";var r=n(205);n.n(r).a},283:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".main-container--bot-create{max-width:1000px}\n",""])},347:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main-container main-container--bot-create"},[n("h2",{staticClass:"title"},[t._v("\n\t\t"+t._s(t.$t("bot-new"))+"\n\t")]),t._v(" "),t.loading?n("h3",{staticClass:"subtitle"},[n("font-awesome-icon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1):n("div",{staticClass:"container"},[t.displayCategories?n("config-editor",{attrs:{fields:t.fields,model:t.model,categories:t.categories}}):n("config-editor",{attrs:{fields:t.fields,model:t.model}}),t._v(" "),n("div",{staticClass:"form-item"},[n("div",{staticClass:"form-item__buttons"},[n("button",{staticClass:"button button--confirm",on:{click:t.onCreate}},[t.creating?n("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):n("span",[t._v(t._s(t.$t("create")))])],1),t._v(" "),n("button",{staticClass:"button button--link pull-right",on:{click:t.onDownload}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("download-raw-config"))+"\n\t\t\t\t")])])])],1)])};r._withStripped=!0;var a=n(3),i=n(191),s=n(186),o=n(187),c=n(188),u=n(14),l=n(189);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"bot-create",components:{ConfigEditor:i.a},data(){return{loading:!0,creating:!1,fields:[],model:{},categories:[{name:this.$t("basic"),fields:["Name","SteamLogin","SteamPassword","Enabled","Paused","OnlineStatus","BotBehaviour"]},{name:this.$t("security"),fields:["PasswordFormat","UseLoginKeys"]},{name:this.$t("access"),fields:["SteamUserPermissions","SteamParentalCode"]},{name:this.$t("trade"),fields:["SteamTradeToken","AcceptGifts","SendTradePeriod","SendOnFarmingFinished","TradingPreferences","LootableTypes","TransferableTypes","MatchableTypes"]},{name:this.$t("farming"),fields:["FarmingOrders","AutoSteamSaleEvent","IdlePriorityQueueOnly","IdleRefundableGames","FarmOffline","ShutdownOnFarmingFinished"]},{name:this.$t("customization"),fields:["SteamMasterClanID","RedeemingPreferences","GamesPlayedWhileIdle","CustomGamePlayedWhileFarming","CustomGamePlayedWhileIdle"]},{name:this.$t("performance"),fields:["HoursUntilCardDrops"]}]}},computed:Object(a.c)({version:"asf/version",displayCategories:"settings/displayCategories",bots:"bots/bots"}),async created(){await this.loadConfig(),document.getElementById("Name").focus()},methods:{async loadConfig(){const[{body:t},e]=await Promise.all([Object(s.a)("ArchiSteamFarm.BotConfig"),Object(o.a)(this.version,this.$i18n.locale)]);this.model={},this.fields=[{defaultValue:"",param:"Name",paramName:"Name",type:"string",description:this.$t("name-description")},...Object.keys(t).map(n=>(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach(function(e){f(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t})({description:e[n]},t[n]))],this.loading=!1},async onCreate(){if(!this.creating)if(this.model.Name)if("ASF"!==this.model.Name)if(Object(l.a)(this.bots,this.model.Name))this.$error(this.$t("bot-create-name-exist",{name:this.model.Name}));else{this.creating=!0;try{await this.$http.post("bot/".concat(this.model.Name),{botConfig:this.model}),await Object(u.a)(1e3),await this.$store.dispatch("bots/updateBot",{name:this.model.Name}),this.$parent.close()}catch(t){this.$error(t.message)}finally{this.creating=!1}}else this.$error(this.$t("bot-create-name-asf"));else this.$error(this.$t("bot-create-name"))},async onDownload(){const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(Object(c.a)(this.model)))),t.setAttribute("download","".concat(this.model.Name,".json")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},p=(n(282),n(1)),h=Object(p.a)(d,r,[],!1,null,null,null);h.options.__file="src/views/modals/BotCreate.vue";e.default=h.exports}}]);