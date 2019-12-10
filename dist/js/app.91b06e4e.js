(function(e){function t(t){for(var r,i,u=t[0],c=t[1],a=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{correctQuestions:e.correctQuestions,totalQuestions:e.totalQuestions}}),e.questions.length?n("QuizBox",{attrs:{currentQuestion:e.questions[e.index],nextQuestion:e.nextQuestion,increment:e.increment,totalQuestions:e.totalQuestions}}):e._e()],1)}),i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",[n("b-nav-item",{attrs:{disabled:""}},[e._v("Correct answears")]),n("b-nav-item",{attrs:{disabled:""}},[e._v(e._s(e.correctQuestions)+"/"+e._s(e.totalQuestions))])],1)],1)},c=[],a={props:["correctQuestions","totalQuestions"]},l=a,f=n("2877"),d=Object(f["a"])(l,u,c,!1,null,null,null),h=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(e._s(e.currentQuestion.question))]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.shuffeledAnswears,(function(t,r){return n("b-button",{key:r,class:e.changeClass(r),attrs:{variant:"light"},on:{click:function(t){return t.preventDefault(),e.selectAnswear(r)}}},[e._v(e._s(t))])})),1),n("b-button",{attrs:{variant:"success",disabled:9===e.totalQuestions},on:{click:e.nextQuestion}},[e._v("Next")])],1)],1)},b=[],w=(n("99af"),n("c975"),n("a9e3"),n("2909")),v=n("2ef0"),Q={props:{currentQuestion:Object,nextQuestion:Function,increment:Function,totalQuestions:Number},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedAnswear=null,this.answered=!1,this.shuffleAnswears()}}},data:function(){return{selectedAnswear:null,correctAnswer:null,shuffeledAnswears:[],answered:!1}},methods:{shuffleAnswears:function(){var e=[].concat(Object(w["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffeledAnswears=v.shuffle(e),this.correctAnswer=this.shuffeledAnswears.indexOf(this.currentQuestion.correct_answer)},selectAnswear:function(e){this.selectedAnswear=e;var t=!1;this.selectedAnswear===this.correctAnswer&&(t=!0),this.answered=!0,this.increment(t)},changeClass:function(e){var t="";return this.answered&&this.correctAnswer===e?t="correct disabled":this.answered&&this.selectedAnswear===e&&this.correctAnswer!==e?t="wrong disabled":this.answered&&this.selectedAnswear!==e&&this.correctAnswer!==e&&(t="disabled"),t},newQuiz:function(){}}},m=Q,_=(n("738e"),Object(f["a"])(m,p,b,!1,null,"27aa9454",null)),x=_.exports,y=n("bc3a"),A={name:"app",components:{Header:h,QuizBox:x},data:function(){return{questions:[],index:0,correctQuestions:0,totalQuestions:0}},methods:{nextQuestion:function(){this.index++,this.totalQuestions++},increment:function(e){e&&this.correctQuestions++}},mounted:function(){var e=this;y.get("https://opentdb.com/api.php?amount=10").then((function(e){return e.data.results})).then((function(t){e.questions=t}))}},g=A,O=(n("034f"),Object(f["a"])(g,o,i,!1,null,null,null)),j=O.exports;r["default"].config.productionTip=!1,r["default"].use(s["a"]),new r["default"]({render:function(e){return e(j)}}).$mount("#app")},"738e":function(e,t,n){"use strict";var r=n("e065"),s=n.n(r);s.a},"85ec":function(e,t,n){},e065:function(e,t,n){}});
//# sourceMappingURL=app.91b06e4e.js.map