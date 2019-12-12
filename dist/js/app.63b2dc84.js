(function(e){function t(t){for(var s,i,a=t[0],c=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},4740:function(e,t,n){"use strict";var s=n("a9c9"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{correctQuestions:e.correctQuestions,totalQuestions:e.totalQuestions}}),e.questions.length?n("QuizBox",{attrs:{currentQuestion:e.questions[e.index],nextQuestion:e.nextQuestion,increment:e.increment,totalQuestions:e.totalQuestions,collectAnswears:e.collectAnswears}}):e._e(),n("Score",{attrs:{answeredQuestions:e.answeredQuestions}})],1)}),i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",[n("b-nav-item",{attrs:{disabled:""}},[e._v("Correct answears")]),n("b-nav-item",{attrs:{disabled:""}},[e._v(e._s(e.correctQuestions)+"/"+e._s(e.totalQuestions))])],1)],1)},c=[],u={props:["correctQuestions","totalQuestions"]},l=u,d=n("2877"),f=Object(d["a"])(l,a,c,!1,null,null,null),h=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.replaceChars(e.currentQuestion.question))+" ")]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",e._l(e.shuffeledAnswears,(function(t,s){return n("b-button",{key:s,class:e.changeClass(s),attrs:{variant:"light",disabled:e.answered},on:{click:function(t){return t.preventDefault(),e.selectAnswear(s)}}},[e._v(e._s(e.replaceChars(t)))])})),1),n("b-button",{attrs:{variant:"success",disabled:11===e.totalQuestions||!e.answered,hidden:11===e.totalQuestions},on:{click:e.nextQuestion}},[e._v("Next")]),n("b-button",{attrs:{hidden:11!==e.totalQuestions},on:{click:function(t){return e.reloadPage()}}},[e._v("Start new Quiz")])],1)],1)},w=[],b=(n("99af"),n("c975"),n("a15b"),n("a9e3"),n("1276"),n("2909")),v=n("2ef0"),Q={props:{currentQuestion:Object,nextQuestion:Function,increment:Function,totalQuestions:Number,collectAnswears:Function},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedAnswear=null,this.answered=!1,this.shuffleAnswears()}}},data:function(){return{selectedAnswear:null,correctAnswer:null,shuffeledAnswears:[],answered:!1}},methods:{shuffleAnswears:function(){var e=[].concat(Object(b["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffeledAnswears=v.shuffle(e),this.correctAnswer=this.shuffeledAnswears.indexOf(this.currentQuestion.correct_answer)},selectAnswear:function(e){this.selectedAnswear=e;var t=!1;this.selectedAnswear===this.correctAnswer&&(t=!0),this.answered=!0,this.increment(t),this.collectAnswears(this.replaceChars(this.currentQuestion.question),this.currentQuestion.correct_answer,this.shuffeledAnswears[this.selectedAnswear])},changeClass:function(e){var t="";return this.answered&&this.correctAnswer===e?t="correct ":this.answered&&this.selectedAnswear===e&&this.correctAnswer!==e?t="wrong":this.answered&&this.selectedAnswear!==e&&this.correctAnswer!==e&&(t=""),t},replaceChars:function(e){return e=e.split("&amp;").join("&"),e=e.split("&gt;").join(">"),e=e.split("&lt;").join("<"),e=e.split("&quot;").join('"'),e=e.split("&#039;").join("'"),e=e.split("&eacute;").join("é"),e},reloadPage:function(){window.location.reload()}}},m=Q,A=(n("4740"),Object(d["a"])(m,p,w,!1,null,"39bb1da6",null)),_=A.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",[e._v("Table")]),n("b-table",{class:e.changeClass(e.correctAnswear,e.selectedAnswear),attrs:{hover:"",items:e.answeredQuestions}})],1)},x=[],j={props:{answeredQuestions:Array},methods:{changeClass:function(e,t){return e===t?"correct":"wrong "}}},y=j,O=(n("876e"),Object(d["a"])(y,g,x,!1,null,"dda39df4",null)),C=O.exports,P=n("bc3a"),S={name:"app",components:{Header:h,QuizBox:_,Score:C},data:function(){return{questions:[],index:0,correctQuestions:0,totalQuestions:1,answeredQuestions:[]}},methods:{nextQuestion:function(){this.index++},increment:function(e){e&&this.correctQuestions++,this.totalQuestions++},collectAnswears:function(e,t,n){var s={index:this.index+1+".",question:e,correctAnswear:t,selectedAnswear:n};this.answeredQuestions.push(s)}},mounted:function(){var e=this;P.get("https://opentdb.com/api.php?amount=10").then((function(e){return e.data.results})).then((function(t){e.questions=t}))}},k=S,q=(n("034f"),Object(d["a"])(k,o,i,!1,null,null,null)),$=q.exports;s["default"].config.productionTip=!1,s["default"].use(r["a"]),new s["default"]({render:function(e){return e($)}}).$mount("#app")},"85ec":function(e,t,n){},"876e":function(e,t,n){"use strict";var s=n("b62f"),r=n.n(s);r.a},a9c9:function(e,t,n){},b62f:function(e,t,n){}});
//# sourceMappingURL=app.63b2dc84.js.map