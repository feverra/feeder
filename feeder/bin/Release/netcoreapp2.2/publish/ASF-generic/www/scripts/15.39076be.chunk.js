(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{220:function(s,e,t){var a=t(313);"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);(0,t(5).default)("2cd2fde3",a,!1,{})},312:function(s,e,t){"use strict";var a=t(220);t.n(a).a},313:function(s,e,t){(s.exports=t(4)(!1)).push([s.i,".log{display:grid;grid-template-rows:1fr}.log>div{min-height:0}\n",""])},341:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this.$createElement,e=this._self._c||s;return e("main",{staticClass:"main-container main-container--fullheight log"},[e("div",{staticClass:"container"},[e("asf-log")],1)])};a._withStripped=!0;var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{ref:"terminal",staticClass:"terminal"},s._l(s.log,function(e){e.type;var a=e.message;return t("div",{staticClass:"terminal-message terminal-message--truncated"},[t("span",{staticClass:"terminal-message__content"},[t("span",{staticClass:"terminal-message__time"},[s._v("["+s._s(a.time.toLocaleTimeString())+"]")]),s._v(" "),t("span",{staticClass:"terminal-message__level",class:"terminal-message__level--"+a.level.toLowerCase()},[s._v(s._s(a.level))]),s._v(" "),t("span",{staticClass:"terminal-message__logger"},[s._v(s._s(a.logger))]),s._v(" "),t("span",[s._v(">")]),s._v(" "),t("span",{staticClass:"terminal-message__text"},[s._v(s._s(a.text))])])])}),0)};n._withStripped=!0;var i=t(3),l={name:"asf-log",data:()=>({log:[]}),computed:Object(i.c)({password:"auth/password"}),watch:{log(){this.$refs.terminal.scrollTop<this.$refs.terminal.scrollHeight-this.$refs.terminal.clientHeight-20||this.$nextTick(()=>{this.$refs.terminal.scrollTop=Math.max(0,this.$refs.terminal.scrollHeight-this.$refs.terminal.clientHeight)})}},created(){const s="".concat(window.__BASE_URL__.replace(/^http/,"ws"),"api/nlog").concat(this.password?"?password=".concat(encodeURIComponent(this.password)):"");this.ws=new WebSocket(s),this.ws.onopen=this.onOpen.bind(this),this.ws.onmessage=this.onMessage.bind(this),this.ws.onclose=this.onClose.bind(this)},beforeDestroy(){this.ws.close()},methods:{onOpen(s){},onMessage(s){const e=JSON.parse(s.data).Result;this.log.push({type:"in",message:this.parseMessage(e)})},parseMessage(s){const[e,t,a,n,...i]=s.split("|");return{time:new Date(e.replace(/-/g,"/")),process:t,level:a,logger:n,text:i.join("|")}},onClose(s){}}},o=t(1),r=Object(o.a)(l,n,[],!1,null,null,null);r.options.__file="src/components/AsfLog.vue";var c={name:"log",metaInfo(){return{title:this.$t("log")}},components:{AsfLog:r.exports}},p=(t(312),Object(o.a)(c,a,[],!1,null,null,null));p.options.__file="src/views/Log.vue";e.default=p.exports}}]);