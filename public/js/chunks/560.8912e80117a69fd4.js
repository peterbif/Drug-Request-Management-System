(self.webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free=self.webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free||[]).push([[560],{87757:function(t,e,r){t.exports=r(35666)},87787:function(t,e,r){"use strict";var n,o=r(70538),a=r(25706);(n=(n=o.default)||o.default)&&!n.__composition_api_installed__&&n.use(a.ZP);o.default,o.default.version;Symbol("vuelidate#injectChildResults"),Symbol("vuelidate#removeChildResults")},2991:function(t){t.exports="/images/mask-dark.png?adc03bf1e813b450e4b930a8fa907e3f"},77544:function(t){t.exports="/images/mask-light.png?77718bde08a293dba49a8d0e35b031f2"},990:function(t){t.exports="/images/tree-3.png?9dc4b192cc72b872a692b8b2ae0e30c2"},37621:function(t){t.exports="/images/tree.png?fb4c6f08be7bec2860b6361574f172d7"},22513:function(t,e,r){"use strict";var n=r(1519),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".auth-wrapper{align-items:center;display:flex;flex-basis:100%;min-height:calc(var(--vh, 1vh)*100);width:100%}.auth-wrapper a{text-decoration:unset}.auth-wrapper.auth-v1{align-items:center;justify-content:center;overflow:hidden;padding:1.5rem}.auth-wrapper.auth-v1 .auth-mask-bg{bottom:0;position:absolute;width:100%}.auth-wrapper.auth-v1 .auth-tree,.auth-wrapper.auth-v1 .auth-tree-3{position:absolute}.auth-wrapper.auth-v1 .auth-tree{bottom:0;left:0}.auth-wrapper.auth-v1 .auth-tree-3{bottom:0;right:0}.auth-wrapper.auth-v1 .auth-inner{width:35rem;z-index:1}.auth-wrapper.auth-v1 .auth-inner .auth-card{padding:.9375rem .875rem}@media (max-width:800px){.auth-v1 .auth-mask-bg,.auth-v1 .auth-tree,.auth-v1 .auth-tree-3{display:none}}",""]),e.Z=o},35666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function v(){}function w(){}function g(){}var y={};c(y,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(S([])));_&&_!==r&&n.call(_,a)&&(y=_);var x=g.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return w.prototype=g,c(x,"constructor",g),c(g,"constructor",w),w.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),c(x,s,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},51560:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return P}});var n=r(15861),o=r(87757),a=r.n(o),i=r(55317),s=r(25706),c=(r(87787),r(9669)),u=r.n(c),l={data:function(){return{allSecretQuestions:[],valid:!0,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(t)||"Min. 8 characters with at least one capital letter, a number and a special character."}],confirmPasswordRules:[function(t){return!!t||"Password Confrimation  is required"}],answerRules:[function(t){return!!t||"Answer to the  secret question is required"}],form:new Form({email:"",password:"",secret_question_id:"",answer:"",password_confirmation:""})}},setup:function(){var t=(0,s.iH)(!1);(0,s.iH)(""),(0,s.iH)("");return{isPasswordVisible:t,socialLink:[{icon:i.JPJ,color:"#4267b2",colorInDark:"#4267b2"},{icon:i.SGh,color:"#1da1f2",colorInDark:"#1da1f2"},{icon:i.LcO,color:"#272727",colorInDark:"#fff"},{icon:i._5o,color:"#db4437",colorInDark:"#db4437"}],icons:{mdiEyeOutline:i._VZ,mdiEyeOffOutline:i.qS7}}},computed:{passwordConfirmationRule:function(){var t=this;return function(){return t.form.password===t.form.password_confirmation||"Password must match"}}},methods:{getAllSecretQuestions:function(){var t=this;return(0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/api/allSecretQuestions").then((function(e){t.allSecretQuestions=e.data.allSecretQuestions})).catch((function(){}));case 2:case"end":return e.stop()}}),e)})))()},resetpassword:function(){var t=this;return(0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.form.validate(),e.next=3,t.form.post("api/auth/resetPassword").then((function(e){"password reset"==e.data.success&&(t.$toastr.success("reset password successfully","Success"),t.$router.push("/login"),t.form.reset())})).catch((function(e){t.$toastr.error("Can not resetpassword",e)}));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAllSecretQuestions()}},f=r(93379),h=r.n(f),d=r(22513),p={insert:"head",singleton:!1},m=(h()(d.Z,p),d.Z.locals,r(51900)),v=r(43453),w=r.n(v),g=r(50665),y=r(53489),b=r(85893),_=r(5255),x=r(83240),k=r(16474),E=r(84807),L=r(55444),C=(0,m.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper auth-v1"},[n("div",{staticClass:"auth-inner"},[n("v-card",{staticClass:"auth-card"},[n("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[n("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[n("v-img",{staticClass:"me-3",attrs:{src:r(40011).default,"max-height":"30px","max-width":"30px",alt:"logo",contain:""}}),t._v(" "),n("h1",{staticClass:"text-2xl font-weight-semibold text-center"},[t._v("Drug Request Management System")])],1)],1),t._v(" "),n("v-card-text",[n("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2 text-center"},[t._v("Reset Password")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("Please select the secret question and provide answer to reset password")])]),t._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t.form.errors.has("error")||t.form.errors.has("email")?n("v-alert",{attrs:{dense:"",type:"error"}},[t._v("\n          "+t._s(t.form.errors.get("error")||t.form.errors.get("email"))+" \n        ")]):t._e(),t._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Email",placeholder:"john@example.com",rules:t.emailRules},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-select",{staticClass:"mb-3",attrs:{items:t.allSecretQuestions,"item-text":"name","item-value":"id",label:"Select Your Secret Question",solo:"",rules:[function(t){return!!t||" Secret Question is required"}]},model:{value:t.form.secret_question_id,callback:function(e){t.$set(t.form,"secret_question_id",e)},expression:"form.secret_question_id"}}),t._v(" "),n("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Answer to the secret question",rules:[function(t){return!!t||"Answer to the  secret question is required"}]},model:{value:t.form.answer,callback:function(e){t.$set(t.form,"answer",e)},expression:"form.answer"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",type:t.isPasswordVisible?"text":"password",label:"New Password",placeholder:"············","append-icon":t.isPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,rules:t.passwordRules,required:""},on:{"click:append":function(e){t.isPasswordVisible=!t.isPasswordVisible}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",type:t.isPasswordVisible?"text":"password",label:"Confirm New Password",placeholder:"············","append-icon":t.isPasswordVisible?t.icons.mdiEyeOffOutline:t.icons.mdiEyeOutline,rules:t.confirmPasswordRules.concat(t.passwordConfirmationRule)},on:{"click:append":function(e){t.isPasswordVisible=!t.isPasswordVisible}},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}}),t._v(" "),n("v-btn",{staticClass:"mt-6",attrs:{block:"",color:"primary",disabled:!(t.form.email&&t.form.secret_question_id&&t.form.answer&&t.form.password&&t.form.password_confirmation)},on:{click:t.resetpassword}},[t._v(" Reset ")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[n("span",{staticClass:"me-2"},[t._v(" Got an Account? ")]),t._v(" "),n("router-link",{attrs:{to:{name:"login"}}},[t._v(" Login here! ")])],1)],1)],1),t._v(" "),n("img",{staticClass:"auth-mask-bg",attrs:{height:"173",src:r(1383)("./mask-"+(t.$vuetify.theme.dark?"dark":"light")+".png").default}}),t._v(" "),n("v-img",{staticClass:"auth-tree",attrs:{width:"247",height:"185",src:r(37621).default}}),t._v(" "),n("v-img",{staticClass:"auth-tree-3",attrs:{width:"377",height:"289",src:r(990).default}})],1)}),[],!1,null,null,null),P=C.exports;w()(C,{VAlert:g.Z,VBtn:y.Z,VCard:b.Z,VCardText:_.ZB,VCardTitle:_.EB,VForm:x.Z,VImg:k.Z,VSelect:E.Z,VTextField:L.Z})},1383:function(t,e,r){var n={"./mask-dark.png":2991,"./mask-light.png":77544};function o(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=1383},15861:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);