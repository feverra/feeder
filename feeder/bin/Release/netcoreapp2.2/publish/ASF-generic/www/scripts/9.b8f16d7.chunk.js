(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(t,e,i){"use strict";var s=i(184),o="Copy to clipboard: #{key}, Enter";t.exports=function(t,e){var i,n,a,r,l,c,d=!1;e||(e={}),i=e.debug||!1;try{if(a=s(),r=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=t,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(i){i.stopPropagation(),e.format&&(i.preventDefault(),i.clipboardData.clearData(),i.clipboardData.setData(e.format,t))}),document.body.appendChild(c),r.selectNodeContents(c),l.addRange(r),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){i&&console.error("unable to copy using execCommand: ",p),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),d=!0}catch(p){i&&console.error("unable to copy using clipboardData: ",p),i&&console.error("falling back to prompt"),n=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:o),window.prompt(n,t)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(r):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return d}},184:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,i=[],s=0;s<t.rangeCount;s++)i.push(t.getRangeAt(s));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||i.forEach(function(e){t.addRange(e)}),e&&e.focus()}}},197:function(t,e,i){var s=i(267);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(5).default)("0a21cc3f",s,!1,{})},198:function(t,e,i){var s=i(269);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(5).default)("04a72519",s,!1,{})},266:function(t,e,i){"use strict";var s=i(197);i.n(s).a},267:function(t,e,i){(t.exports=i(4)(!1)).push([t.i,".dropdown__item{align-items:center;display:inline-flex;justify-content:space-between;padding:0.5em 1.5em;text-align:right;white-space:nowrap}.button--small .dropdown__item{padding:0.25em 0.5em}.dropdown__item:hover{background:var(--color-navigation-dark)}.dropdown__item-icon+.dropdown__item-name{margin-left:1em}.dropdown__item-icon{font-size:0.8em}.dropdown__item--disabled{color:var(--color-text-disabled);cursor:not-allowed}.dropdown__item--disabled:hover{background:var(--color-navigation)}\n",""])},268:function(t,e,i){"use strict";var s=i(198);i.n(s).a},269:function(t,e,i){(t.exports=i(4)(!1)).push([t.i,".dropdown{position:relative}.dropdown--active{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}.dropdown--active .dropdown__icon{transform:rotate(180deg)}.dropdown__icon{margin-left:0.5em;transition:transform .3s}.dropdown__items{background:var(--color-navigation);border-radius:0.1875em 0 0.1875em 0.1875em;color:var(--color-text);display:flex;flex-direction:column;margin:0;min-width:100%;overflow:hidden;padding:0;position:absolute;right:0;top:100%;user-select:none}\n",""])},339:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"main-container main-container--fullheight"},[i("div",{staticClass:"container"},[t.displayCategories?i("config-editor",{attrs:{fields:t.fields,categories:t.categories,model:t.model}}):i("config-editor",{attrs:{fields:t.fields,model:t.model}}),t._v(" "),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-item__buttons"},[i("button",{staticClass:"button button--confirm",on:{click:t.save}},[t._v("\n\t\t\t\t\t"+t._s(t.$t("save"))+"\n\t\t\t\t")]),t._v(" "),i("dropdown",{staticClass:"button--confirm pull-right",attrs:{label:t.$t("debug"),disabled:!t.sentryInstalled}},[i("li",{staticClass:"dropdown__item",on:{click:t.captureSnapshot}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("snapshot-capture"))+"\n\t\t\t\t\t")]),t._v(" "),i("li",{staticClass:"dropdown__item",class:{"dropdown__item--disabled":!t.storedEventsCount},on:{click:t.copyStoredEvents}},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("log-copy"))+"\n\t\t\t\t\t")])])],1)])],1)])};s._withStripped=!0;var o=i(183),n=i(3),a=i(191),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"dropdown button button-confirm",class:[{"dropdown--active":t.open,"button--disabled":t.disabled,"button--small":t.small},t.buttonStyle?"button--"+t.buttonStyle:null],on:{click:t.toggle}},[i("span",{staticClass:"dropdown__label"},[t._v(t._s(t.label))]),t._v(" "),i("font-awesome-icon",{staticClass:"dropdown__icon",attrs:{icon:"angle-down"}}),t._v(" "),t.open?i("ul",{staticClass:"dropdown__items"},[t._l(t.items,function(t){return i("dropdown-item",{key:t.name,attrs:{item:t}})}),t._v(" "),t._t("default")],2):t._e()],1)};r._withStripped=!0;var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.action?i("li",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"dropdown__item",on:{click:t.onClick}},[t.item.icon?i("font-awesome-icon",{staticClass:"dropdown__item-icon",attrs:{icon:t.item.icon}}):t._e(),t._v(" "),i("span",{staticClass:"dropdown__item-name"},[t._v(t._s(t.item.name))])],1):t.item.link?i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"dropdown__item",attrs:{tag:"li",to:t.item.link}},[t.item.icon?i("font-awesome-icon",{staticClass:"dropdown__item-icon",attrs:{icon:t.item.icon}}):t._e(),t._v(" "),i("span",{staticClass:"dropdown__item-name"},[t._v(t._s(t.item.name))])],1):i("li",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"dropdown__item"},[t.item.icon?i("font-awesome-icon",{staticClass:"dropdown__item-icon",attrs:{icon:t.item.icon}}):t._e(),t._v(" "),i("span",{staticClass:"dropdown__item-name"},[t._v(t._s(t.item.name))])],1)};l._withStripped=!0;var c={name:"dropdown-item",props:{item:Object},computed:{active(){return!this.item.condition||("function"==typeof this.item.condition?this.item.condition():this.item.condition)}},methods:{onClick(){this.item.action&&this.item.action()}}},d=(i(266),i(1)),p=Object(d.a)(c,l,[],!1,null,null,null);p.options.__file="src/components/utils/DropdownItem.vue";var m={name:"dropdown",components:{DropdownItem:p.exports},props:{label:String,disabled:Boolean,small:Boolean,buttonStyle:String,items:Array},data:()=>({open:!1}),watch:{disabled(t){t&&(this.open=!1)}},methods:{toggle(){this.disabled||(this.open=!this.open)}}},u=(i(268),Object(d.a)(m,r,[],!1,null,null,null));u.options.__file="src/components/utils/Dropdown.vue";var h=u.exports;function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={name:"ui-configuration",metaInfo(){return{title:this.$t("ui-configuration")}},components:{ConfigEditor:a.a,Dropdown:h},data(){const t=[{name:this.$t("general"),fields:[this.$t("default-page"),this.$t("notification-position"),this.$t("notify-release")]},{name:this.$t("commands"),fields:[this.$t("timestamps")]},{name:this.$t("bots"),fields:[this.$t("bot-nicknames"),this.$t("bot-game-name"),this.$t("bot-fav-buttons")]},{name:this.$t("config"),fields:[this.$t("display-categories")]},{name:this.$t("debug"),fields:[this.$t("logging"),this.$t("reporting")]}];return{fields:[{param:this.$t("default-page"),paramName:"defaultView",type:"enum",defaultValue:"home",values:{[this.$t("bots")]:"home",[this.$t("commands")]:"commands",[this.$t("log")]:"log",[this.$t("releases")]:"releases",[this.$t("last-visited-page")]:"_last-visited-page"},description:this.$t("default-page-description")},{param:this.$t("notification-position"),paramName:"notificationPosition",type:"enum",defaultValue:"rightBottom",values:{[this.$t("notification-position-left-top")]:"leftTop",[this.$t("notification-position-left-bottom")]:"leftBottom",[this.$t("notification-position-right-top")]:"rightTop",[this.$t("notification-position-right-bottom")]:"rightBottom",[this.$t("notification-position-center-top")]:"centerTop",[this.$t("notification-position-center-bottom")]:"centerBottom"},description:this.$t("notification-position-description")},{param:this.$t("notify-release"),paramName:"notifyRelease",type:"boolean",description:this.$t("notify-release-description")},{param:this.$t("timestamps"),paramName:"timestamps",type:"boolean",description:this.$t("timestamps-description")},{param:this.$t("bot-nicknames"),paramName:"nicknames",type:"boolean",description:this.$t("bot-nicknames-description")},{param:this.$t("bot-game-name"),paramName:"gameName",type:"boolean",description:this.$t("bot-game-name-description")},{param:this.$t("bot-fav-buttons"),paramName:"favButtons",type:"flag",defaultValue:0,values:{[this.$t("bot-fav-buttons-none")]:0,[this.$t("bot-fav-buttons-2fa")]:1,[this.$t("bot-fav-buttons-bgr")]:2,[this.$t("bot-fav-buttons-config")]:4,[this.$t("bot-fav-buttons-pause")]:8},description:this.$t("bot-fav-buttons-description")},{param:this.$t("display-categories"),paramName:"displayCategories",type:"boolean",description:this.$t("display-categories-description")},{param:this.$t("logging"),paramName:"sentryInstalled",type:"boolean",description:this.$t("logging-description")},{param:this.$t("reporting"),paramName:"sentryReporting",type:"boolean",description:this.$t("reporting-description")}],categories:t,model:{defaultView:this.$store.getters["settings/defaultView"],notificationPosition:this.$store.getters["settings/notificationPosition"],notifyRelease:this.$store.getters["settings/notifyRelease"],timestamps:this.$store.getters["settings/timestamps"],nicknames:this.$store.getters["settings/nicknames"],gameName:this.$store.getters["settings/gameName"],favButtons:this.$store.getters["settings/favButtons"],displayCategories:this.$store.getters["settings/displayCategories"],sentryInstalled:this.$store.getters["settings/sentryInstalled"],sentryReporting:this.$store.getters["settings/sentryReporting"]},storedEvents:this.$sentry.storedEvents}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(i,!0).forEach(function(e){f(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},Object(n.c)({sentryInstalled:"settings/sentryInstalled",displayCategories:"settings/displayCategories"}),{storedEventsCount(){return this.storedEvents.length}}),methods:{save(){this.model.sentryInstalled?this.$sentry.install(this.$store):this.$sentry.destroy(),this.model.sentryReporting?this.$sentry.enableReporting():this.$sentry.disableReporting(),this.$store.dispatch("settings/setDefaultView",this.model.defaultView),this.$store.dispatch("settings/setNotificationPosition",this.model.notificationPosition),this.$store.dispatch("settings/setNotifyRelease",this.model.notifyRelease),this.$store.dispatch("settings/setTimestamps",this.model.timestamps),this.$store.dispatch("settings/setNicknames",this.model.nicknames),this.$store.dispatch("settings/setGameName",this.model.gameName),this.$store.dispatch("settings/setFavButtons",this.model.favButtons),this.$store.dispatch("settings/setDisplayCategories",this.model.displayCategories),this.$store.dispatch("settings/setSentryInstalled",this.model.sentryInstalled),this.$store.dispatch("settings/setSentryReporting",this.model.sentryReporting),this.$snotify.setDefaults({toast:{position:this.model.notificationPosition}}),this.$success(this.$t("settings-saved"))},copyStoredEvents(){this.storedEventsCount&&(o(JSON.stringify(this.$sentry.storedEvents)),this.$info(this.$t("log-copied")))},captureSnapshot(){this.$sentry.captureSnapshot(),this.$info(this.$t("snapshot-captured"))}}},b=Object(d.a)(v,s,[],!1,null,null,null);b.options.__file="src/views/UIConfiguration.vue";e.default=b.exports}}]);