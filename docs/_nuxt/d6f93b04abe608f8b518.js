(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(t,s,n){"use strict";n.r(s);n(30);var e=n(4),i=n.n(e),a={props:{question:{type:Object,required:!0}}},o=n(9),r=Object(o.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"box"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"title"},[t._v("\n        "+t._s(t.question.question)+"\n      ")]),t._v(" "),n("div",{staticClass:"tags is-medium"},t._l(t.question.answers,function(s){return n("span",{key:s.name,staticClass:"tag",class:{"is-success":"true"==s.value}},[t._v("\n          "+t._s(s.name)+"\n        ")])}),0)]),t._v(" "),n("div",{staticClass:"column is-3"},[n("p",{staticClass:"has-text-right"},[t._v("\n        Crée par : "),n("strong",[t._v(t._s(t.question.created_by.username))])])])]),t._v(" "),n("div",{staticClass:"field has-addons"},[n("p",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-info",attrs:{to:{name:"dashboard-questions-question",params:{question:t.question.id}}}},[n("b-icon",{attrs:{icon:"content-copy"}}),t._v(" "),n("span",[t._v("Modifier")])],1)],1),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-danger"},[n("b-icon",{attrs:{icon:"delete"}}),t._v(" "),n("span",[t._v("Supprimer")])],1)])])])},[],!1,null,null,null);r.options.__file="QuestionBox.vue";var u={components:{QuestionBox:r.exports},asyncData:function(){var t=i()(regeneratorRuntime.mark(function t(s){var n,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.$axios,t.next=3,n.$get("/api/questions");case 3:return e=t.sent,t.abrupt("return",{questions:e.questions});case 5:case"end":return t.stop()}},t,this)}));return function(s){return t.apply(this,arguments)}}()},c=Object(o.a)(u,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section"},[s("div",{staticClass:"container"},this._l(this.questions,function(t){return s("QuestionBox",{key:t.id,attrs:{question:t}})}),1)])},[],!1,null,null,null);c.options.__file="list.vue";s.default=c.exports}}]);