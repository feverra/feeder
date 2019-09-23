(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{191:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"config-editor"},[e.categories?[e._l(e.categories,function(t){return e.categoryFields(t.name).length?i("config-category",{key:t.name,attrs:{name:t.name}},e._l(e.categoryFields(t.name),function(t){return i(e.componentFromField(t),{key:t.param,tag:"component",staticClass:"form-item--config",attrs:{schema:t,"current-value":e.model[t.paramName]},on:{update:e.updateModel}})}),1):e._e()}),e._v(" "),e.uncategorizedFields.length?i("config-category",{key:"Other",attrs:{name:e.$t("other")}},e._l(e.uncategorizedFields,function(t){return i(e.componentFromField(t),{key:t.param,tag:"component",staticClass:"form-item--config",attrs:{schema:t,"current-value":e.model[t.paramName]},on:{update:e.updateModel}})}),1):e._e()]:e._e(),e._v(" "),e.categories?e._e():[i("fieldset",{staticClass:"config-uncategorized"},e._l(e.uncategorizedFields,function(t){return i(e.componentFromField(t),{key:t.param,tag:"component",staticClass:"form-item--config",attrs:{schema:t,"current-value":e.model[t.paramName]},on:{update:e.updateModel}})}),1)]],2)};s._withStripped=!0;var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-item__input",attrs:{id:e.field,type:"text",name:e.field,placeholder:e.placeholder},domProps:{value:e.value},on:{blur:e.onBlur,keypress:e.onKeyPress,input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),e.hasErrors?i("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};n._withStripped=!0;var a=function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"form-item__description"},on:{enter:this.enter,"after-enter":this.afterEnter,leave:this.leave}},[t("div",{staticClass:"form-item__description",class:{"form-item__description--shown":this.shown}},[t("div",{staticClass:"form-item__description-content",domProps:{innerHTML:this._s(this.description)}})])])};a._withStripped=!0;var l={name:"input-description",props:{description:String,shown:Boolean},methods:{enter(e){e.style.width=getComputedStyle(e).width,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";const{height:t}=getComputedStyle(e);e.style.width=null,e.style.position=null,e.style.visibility=null,e.style.height=0,setTimeout(()=>e.style.height=t,0)},afterEnter(e){e.style.height="auto"},leave(e){e.style.height=getComputedStyle(e).height,setTimeout(()=>e.style.height=0,0)}}},r=(i(260),i(1)),o=Object(r.a)(l,a,[],!1,null,null,null);o.options.__file="src/components/ConfigFields/InputDescription.vue";var u=o.exports,c=function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"form-item__label"},[this._v(this._s(this.label)+"\n\t"),this.hasDescription?t("font-awesome-icon",{staticClass:"form-item__description-icon",attrs:{icon:"question"},on:{click:this.$parent.toggleDescription}}):this._e()],1)};c._withStripped=!0;var m={name:"input-label",props:{label:String,field:String,hasDescription:Boolean}},p=Object(r.a)(m,c,[],!1,null,null,null);p.options.__file="src/components/ConfigFields/InputLabel.vue";var h=p.exports;const d=/^[1-9][0-9]{16,17}$/;function v(e){return"".concat(e).split("").every(e=>!Number.isNaN(e))}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return function(i){const s=[];return v(i)||s.push("not a number"),i<e&&s.push("lesser than allowed (".concat(e,")")),i>t&&s.push("greater than allowed (".concat(t,")")),s}}var _={byte:f(0,255),uint16:f(0,65535),uint32:f(0,4294967295),uint64:function(e){const t=[];return v(e)||t.push("not a number"),d.test("".concat(e))||"0"==="".concat(e)||t.push("not valid steamid"),t}},g={components:{InputLabel:h,InputDescription:u},props:{schema:{type:Object,required:!0},currentValue:!0},data(){const e=void 0!==this.currentValue?this.currentValue:this.schema.defaultValue;return{value:"object"==typeof e?JSON.parse(JSON.stringify(e)):e,showDescription:!1}},computed:{defaultValue(){return this.schema.defaultValue},label(){return this.schema.label||this.schema.param||this.schema.paramName},field(){return this.schema.paramName},placeholder(){return this.schema.placeholder||this.schema.defaultValue},description(){return this.schema.description},hasDescription(){return!!this.description},isValid(){return!this.hasErrors},hasErrors(){return this.errors.length},errors(){return _.hasOwnProperty(this.schema.type)?_[this.schema.type](this.value,this.schema):[]},errorText(){return this.errors.map(e=>"Value is ".concat(e,"!")).join(" ")}},watch:{value:{handler:"update",deep:!0}},methods:{update(){const e="object"==typeof this.value?JSON.parse(JSON.stringify(this.value)):this.value;this.$emit("update",e,this.field)},toggleDescription(){this.showDescription=!this.showDescription}}},b=Object(r.a)(g,void 0,void 0,!1,null,null,null);b.options.__file="src/components/ConfigFields/Input.vue";var y=b.exports,w={name:"input-string",mixins:[y],methods:{onBlur(){""===this.value&&(this.value=this.defaultValue)},onKeyPress(e){if("uint64"!==this.schema.type)return!0;const t=e.which?e.which:e.keyCode;return!(t>31&&(t<48||t>57)&&46!==t)||e.preventDefault()}}},C=Object(r.a)(w,n,[],!1,null,null,null);C.options.__file="src/components/ConfigFields/InputString.vue";var D=C.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"form-item__buttons"},[i("button",{staticClass:"button",class:{"button--active":e.value},on:{click:function(t){t.preventDefault(),e.value=!0}}},[e._v("\n\t\t\t\t✔\n\t\t\t")]),e._v(" "),i("button",{staticClass:"button",class:{"button--active":!e.value},on:{click:function(t){t.preventDefault(),e.value=!1}}},[e._v("\n\t\t\t\t✖\n\t\t\t")])])]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};V._withStripped=!0;var x={name:"input-boolean",mixins:[y]},E=Object(r.a)(x,V,[],!1,null,null,null);E.options.__file="src/components/ConfigFields/InputBoolean.vue";var k=E.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"form-item__input",attrs:{id:e.field,type:"number",name:e.field,placeholder:e.placeholder},domProps:{value:e.value},on:{blur:[e.onBlur,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.value=e._n(t.target.value))}}}),e._v(" "),e.hasErrors?i("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};N._withStripped=!0;var O={name:"input-number",mixins:[y],methods:{onBlur(){""===this.value&&(this.value=this.defaultValue)}}},F=Object(r.a)(O,N,[],!1,null,null,null);F.options.__file="src/components/ConfigFields/InputNumber.vue";var $=F.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item input-option"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"input-option__field"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.flagValue,expression:"flagValue"}],staticClass:"form-item__input",attrs:{id:e.field},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.flagValue=t.target.multiple?i:i[0]}}},e._l(e.flags,function(t,s){return i("option",{directives:[{name:"show",rawName:"v-show",value:0===t||!((e.value&t)===t),expression:"flagValue === 0 || !((value & flagValue) === flagValue)"}],domProps:{value:t}},[e._v("\n\t\t\t\t\t"+e._s(s)+"\n\t\t\t\t")])}),0),e._v(" "),i("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addFlag(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("add"))+"\n\t\t\t")])]),e._v(" "),i("div",{staticClass:"input-option__items"},e._l(32,function(t){return e.value&1<<t?i("button",{staticClass:"button input-option__item",on:{click:function(i){return i.preventDefault(),e.removeFlag(1<<t)}}},[e._v("\n\t\t\t\t"+e._s(e.resolveFlagName(1<<t))+"\n\t\t\t")]):e._e()}),0)]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};S._withStripped=!0;var j={name:"input-flag",mixins:[y],data(){return{flagValue:this.schema.defaultValue}},computed:{flags(){return this.schema.values}},methods:{addFlag(){(this.flagValue||0===this.flagValue)&&(0===this.flagValue&&(this.value=0),this.value|=this.flagValue,this.flagValue=this.schema.defaultValue)},removeFlag(e){this.value&=~e},resolveFlagName(e){return Object.keys(this.flags).find(t=>this.flags[t]===e)}}},I=Object(r.a)(j,S,[],!1,null,null,null);I.options.__file="src/components/ConfigFields/InputFlag.vue";var P=I.exports,K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"input-option__field"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],staticClass:"form-item__input",attrs:{id:e.field,disabled:!e.availableEnumValues.length},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.element=t.target.multiple?i:i[0]}}},[e._l(e.enumValues,function(t,s){return i("option",{directives:[{name:"show",rawName:"v-show",value:!e.value.includes(t),expression:"!value.includes(enumValue)"}],domProps:{value:t}},[e._v("\n\t\t\t\t\t"+e._s(s)+"\n\t\t\t\t")])}),e._v(" "),e.availableEnumValues.length?e._e():i("option",{attrs:{disabled:""},domProps:{value:void 0}},[e._v("\n\t\t\t\t\t"+e._s(e.$t("input-all-selected"))+"\n\t\t\t\t")])],2),e._v(" "),i("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("add"))+"\n\t\t\t")])]),e._v(" "),i("div",{staticClass:"input-option__items"},e._l(e.value,function(t,s){return i("button",{staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v("\n\t\t\t\t"+e._s(e.resolveOption(t))+"\n\t\t\t")])}),0)]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};K._withStripped=!0;var L={name:"input-set",mixins:[y],data:()=>({element:null}),computed:{availableEnumValues(){const e=[];for(const t of Object.keys(this.enumValues))this.value.includes(this.enumValues[t])||e.push(this.enumValues[t]);return e},enumValues(){return this.schema.values.values}},created(){this.value.sort(),this.element=this.getDefaultElement()},methods:{getDefaultElement(){return this.availableEnumValues[0]},addElement(){(this.element||0===this.element)&&(this.value.includes(this.element)||(this.value.push(this.element),this.value.sort(),this.element=this.getDefaultElement()))},removeElement(e){this.value.splice(e,1),this.element=this.getDefaultElement()},resolveOption(e){return Object.keys(this.enumValues).find(t=>this.enumValues[t]===e)}}},A=Object(r.a)(L,K,[],!1,null,null,null);A.options.__file="src/components/ConfigFields/InputSet.vue";var B=A.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"input-option__field"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],staticClass:"form-item__input",attrs:{id:e.field,disabled:!e.availableEnumValues.length},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.element=t.target.multiple?i:i[0]}}},[e._l(e.enumValues,function(t,s){return i("option",{directives:[{name:"show",rawName:"v-show",value:!e.value.includes(t),expression:"!value.includes(enumValue)"}],domProps:{value:t}},[e._v("\n\t\t\t\t\t"+e._s(s)+"\n\t\t\t\t")])}),e._v(" "),e.availableEnumValues.length?e._e():i("option",{attrs:{disabled:""},domProps:{value:void 0}},[e._v("\n\t\t\t\t\t"+e._s(e.$t("input-all-selected"))+"\n\t\t\t\t")])],2),e._v(" "),i("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("add"))+"\n\t\t\t")])]),e._v(" "),i("div",{staticClass:"input-option__items"},e._l(e.value,function(t,s){return i("button",{staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v("\n\t\t\t\t"+e._s(e.resolveOption(t))+"\n\t\t\t")])}),0)]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};M._withStripped=!0;var T={name:"input-list",mixins:[y],data:()=>({element:null}),computed:{availableEnumValues(){const e=[];for(const t of Object.keys(this.enumValues))this.value.includes(this.enumValues[t])||e.push(this.enumValues[t]);return e},enumValues(){return this.schema.values.values}},created(){this.element=this.getDefaultElement()},methods:{getDefaultElement(){return this.availableEnumValues[0]},addElement(){(this.element||0===this.element)&&(this.value.includes(this.element)||(this.value.push(this.element),this.element=this.getDefaultElement()))},removeElement(e){this.value.splice(e,1),this.element=this.getDefaultElement()},resolveOption(e){return Object.keys(this.enumValues).find(t=>this.enumValues[t]===e)}}},z=Object(r.a)(T,M,[],!1,null,null,null);z.options.__file="src/components/ConfigFields/InputList.vue";var q=z.exports,J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"input-option__field"},[i("div",{staticClass:"form-item__input form-item__input--tag-wrapper",class:{"form-item__input--focus":e.focus}},[e._l(e.value,function(t,s){return i("button",{staticClass:"form-item__tag",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[i("span",{staticClass:"form-item__tag-value"},[e._v(e._s(t))]),e._v(" "),i("font-awesome-icon",{staticClass:"form-item__tag-remove",attrs:{icon:"times"}})],1)}),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.element,expression:"element"}],staticClass:"form-item__input form-item__input--tag",attrs:{type:"text"},domProps:{value:e.element},on:{keydown:e.onKeyDown,focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.element=t.target.value)}}})],2),e._v(" "),i("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("add"))+"\n\t\t\t")])]),e._v(" "),e.hasErrors?i("span",{staticClass:"form-item__error"},[e._v(e._s(e.errorText))]):e._e()]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};J._withStripped=!0;var W={name:"input-tag",mixins:[y],data:()=>({focus:!1,element:""}),computed:{isString(){return["string","uint64"].includes(this.schema.values.type)},isNumber(){return["uint32","uint16"].includes(this.schema.values.type)},errors(){return _.hasOwnProperty(this.schema.values.type)?_[this.schema.values.type](this.element):[]},isValid:()=>!0},watch:{element(e,t){isNaN(e)&&(this.element=t)}},methods:{addElement(){if(this.hasErrors)return;const e=this.isNumber?parseInt(this.element,10):this.element;(e||0===e)&&(this.value.includes(e)||(this.value.push(e),this.element=""))},removeElement(e){this.value.splice(e,1),this.element=""},onKeyDown(e){const t=e.which?e.which:e.keyCode;return[9,13,188,32].includes(t)?(this.addElement(),e.preventDefault()):8!==t||this.element&&this.element.length?void 0:(this.value.splice(-1),e.preventDefault())},onFocus(){this.focus=!0},onBlur(){this.focus=!1}}},U=Object(r.a)(W,J,[],!1,null,null,null);U.options.__file="src/components/ConfigFields/InputTag.vue";var H=U.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-item__input",attrs:{id:e.field,name:e.field},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.value=t.target.multiple?i:i[0]}}},e._l(e.values,function(t,s){return"Max"===s&&e.isLastValue(t)?e._e():i("option",{domProps:{value:t}},[e._v("\n\t\t\t\t"+e._s(s)+"\n\t\t\t")])}),0)]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};Z._withStripped=!0;var G={name:"input-enum",mixins:[y],computed:{values(){return this.schema.values}},methods:{isLastValue(e){return e===Math.max(...Object.values(this.values))}}},Q=Object(r.a)(G,Z,[],!1,null,null,null);Q.options.__file="src/components/ConfigFields/InputEnum.vue";var R=Q.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("div",{staticClass:"input-option__field input-option__field--three"},[e.keyIsString?i("input",{directives:[{name:"model",rawName:"v-model",value:e.elementKey,expression:"elementKey"}],staticClass:"form-item__input",attrs:{id:e.field+"-key",type:"text"},domProps:{value:e.elementKey},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addElement(t)},input:function(t){t.target.composing||(e.elementKey=t.target.value)}}}):e._e(),e._v(" "),e.valueIsEnum?i("select",{directives:[{name:"model",rawName:"v-model",value:e.elementValue,expression:"elementValue"}],staticClass:"form-item__input",attrs:{id:e.field+"-value"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.elementValue=t.target.multiple?i:i[0]}}},e._l(e.schema.value.values,function(t,s){return i("option",{domProps:{value:t}},[e._v("\n\t\t\t\t\t"+e._s(s)+"\n\t\t\t\t")])}),0):e._e(),e._v(" "),i("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addElement(t)}}},[e._v("\n\t\t\t\t"+e._s(e.$t("add"))+"\n\t\t\t")])]),e._v(" "),i("div",{staticClass:"input-option__items"},e._l(e.value,function(t,s){return i("button",{staticClass:"button input-option__item",on:{click:function(t){return t.preventDefault(),e.removeElement(s)}}},[e._v("\n\t\t\t\t"+e._s(s)+" => "+e._s(e.resolveValue(t))+"\n\t\t\t")])}),0)]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};X._withStripped=!0;var Y={name:"input-dictionary",mixins:[y],data:()=>({elementKey:null,elementValue:null}),computed:{keyIsString(){return["string","uint64"].includes(this.schema.key.type)},valueIsEnum(){return"enum"===this.schema.value.type},valueAvailableEnumValues(){const e=[];for(const t of Object.keys(this.schema.value.values))e.push(this.schema.value.values[t]);return e}},created(){this.elementKey=this.getDefaultKey(),this.elementValue=this.getDefaultValue()},methods:{getDefaultKey:()=>null,getDefaultValue(){return this.valueIsEnum?this.valueAvailableEnumValues[0]:null},resolveValue(e){return this.valueIsEnum?Object.keys(this.schema.value.values).find(t=>this.schema.value.values[t]===e):e},addElement(){!this.elementValue&&0!==this.elementValue||!this.elementKey&&0!==this.elementKey||(this.$set(this.value,this.elementKey,this.elementValue),this.elementValue=this.getDefaultValue(),this.elementKey=this.getDefaultKey())},removeElement(e){this.$delete(this.value,e)}}},ee=Object(r.a)(Y,X,[],!1,null,null,null);ee.options.__file="src/components/ConfigFields/InputDictionary.vue";var te=ee.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item"},[i("input-label",{attrs:{label:e.label,"has-description":e.hasDescription}}),e._v(" "),i("div",{staticClass:"form-item__value"},[i("span",{staticClass:"input-unknown"},[e._v(e._s(e.$t("input-unknown-type")))])]),e._v(" "),e.hasDescription?i("input-description",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}],attrs:{description:e.description}}):e._e()],1)};ie._withStripped=!0;var se={name:"input-unknown",mixins:[y]},ne=(i(262),Object(r.a)(se,ie,[],!1,null,null,null));ne.options.__file="src/components/ConfigFields/InputUnknown.vue";var ae=ne.exports,le=function(){var e=this.$createElement,t=this._self._c||e;return t("fieldset",{staticClass:"config-category form-group"},[this.name?t("legend",{staticClass:"form-group__legend"},[this._v("\n\t\t"+this._s(this.name)+"\n\t")]):this._e(),this._v(" "),this._t("default")],2)};le._withStripped=!0;var re={name:"config-category",props:{name:String},computed:{isValid(){return this.$children.every(e=>e.isValid)}}},oe=Object(r.a)(re,le,[],!1,null,null,null);oe.options.__file="src/components/ConfigCategory.vue";var ue={name:"config-editor",components:{ConfigCategory:oe.exports},props:{fields:{type:Array,required:!0},model:{type:Object,required:!0},categories:Array,descriptions:Object,extendedFields:Object},computed:{uncategorizedFields(){if(!this.categories)return this.fields;const e=this.categories.map(e=>e.fields).reduce((e,t)=>[...e,...t],[]);return this.fields.filter(t=>!e.includes(t.param))},categoryFields(){return e=>{if(!this.categories)return[];const t=this.categories.find(t=>{let{name:i}=t;return i===e});return t?this.getFields(t.fields).sort((e,i)=>t.fields.indexOf(e.paramName)-t.fields.indexOf(i.paramName)):[]}},isValid(){return this.$children.every(e=>e.isValid)}},mounted(){window.addEventListener("resize",this.computeLabelWidth),this.computeLabelWidth()},beforeDestroy(){window.removeEventListener("resize",this.computeLabelWidth)},methods:{componentFromField(e){switch(e.type){case"string":case"uint64":return D;case"boolean":return k;case"uint32":case"uint16":case"byte":return $;case"flag":return P;case"enum":return R;case"hashSet":case"list":return["enum"].includes(e.values.type)?"list"===e.type?q:B:["byte","uint16","uint32","uint64","string"].includes(e.values.type)?H:ae;case"dictionary":return te;default:return ae}},updateModel(e,t){const i=this.fields.find(e=>e.paramName===t);i&&void 0!==i.defaultValue&&this.isDefault(e,i)?delete this.model[t]:this.model[t]=e},isDefault(e,t){return this.isEqual(e,t.defaultValue,t.type)},isEqual(e,t,i){if(typeof e!=typeof t)return!1;switch(i){case"uint32":case"byte":case"uint16":case"uint64":case"string":case"boolean":return e===t;case"hashSet":return e.length===t.length&&e.every(e=>t.includes(e));case"list":return e.length===t.length&&e.every((e,i)=>e===t[i]);case"dictionary":return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(i=>e[i]===t[i])}return!1},getFields(e){return this.fields.filter(t=>e.includes(t.param))},computeLabelWidth(){this.$el.style.setProperty("--label-width","auto"),this.$nextTick(()=>{const e=Math.max(...Array.from(this.$el.querySelectorAll(".form-item__label")).map(e=>Math.ceil(parseFloat(getComputedStyle(e).width))));this.$el.style.setProperty("--label-width","".concat(e,"px"))})}}},ce=(i(264),Object(r.a)(ue,s,[],!1,null,null,null));ce.options.__file="src/components/ConfigEditor.vue";t.a=ce.exports},194:function(e,t,i){var s=i(261);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(5).default)("02c509cb",s,!1,{})},195:function(e,t,i){var s=i(263);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(5).default)("150fe10b",s,!1,{})},196:function(e,t,i){var s=i(265);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(5).default)("2a549083",s,!1,{})},260:function(e,t,i){"use strict";var s=i(194);i.n(s).a},261:function(e,t,i){(e.exports=i(4)(!1)).push([e.i,".form-item__description{backface-visibility:hidden;perspective:1000px;transform:translateZ(0);will-change:height}.form-item__description-enter,.form-item__description-leave-to{opacity:0}.form-item__description-enter-active,.form-item__description-leave-active{transition:height .25s, opacity .25s}\n",""])},262:function(e,t,i){"use strict";var s=i(195);i.n(s).a},263:function(e,t,i){(e.exports=i(4)(!1)).push([e.i,".input-unknown{color:var(--color-theme);font-weight:600}\n",""])},264:function(e,t,i){"use strict";var s=i(196);i.n(s).a},265:function(e,t,i){(e.exports=i(4)(!1)).push([e.i,".config-editor{margin-bottom:1em}.config-editor:last-child{margin-bottom:0}.config-uncategorized{border:0 solid var(--color-border);padding:0 1em 1em}\n",""])}}]);