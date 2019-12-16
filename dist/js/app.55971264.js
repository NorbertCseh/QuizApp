(function(i){function t(t){for(var s,l,r=t[0],p=t[1],a=t[2],u=0,j=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&j.push(e[l][0]),e[l]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(i[s]=p[s]);c&&c(t);while(j.length)j.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var i,t=0;t<o.length;t++){for(var n=o[t],s=!0,r=1;r<n.length;r++){var p=n[r];0!==e[p]&&(s=!1)}s&&(o.splice(t--,1),i=l(l.s=n[0]))}return i}var s={},e={app:0},o=[];function l(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return i[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=i,l.c=s,l.d=function(i,t,n){l.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:n})},l.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,t){if(1&t&&(i=l(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var s in i)l.d(n,s,function(t){return i[t]}.bind(null,s));return n},l.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return l.d(t,"a",t),t},l.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var c=p;o.push([0,"chunk-vendors"]),n()})({0:function(i,t,n){i.exports=n("56d7")},"034f":function(i,t,n){"use strict";var s=n("85ec"),e=n.n(s);e.a},1766:function(i,t,n){"use strict";var s=n("7a8b"),e=n.n(s);e.a},"19cc":function(i,t,n){"use strict";var s=n("d105"),e=n.n(s);e.a},"56d7":function(i,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),e=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Header",{attrs:{correctQuestions:i.correctQuestions,totalQuestions:i.totalQuestions}}),i.questions.length?n("QuizBox",{directives:[{name:"show",rawName:"v-show",value:10!==i.totalQuestions,expression:"totalQuestions!==10"}],attrs:{currentQuestion:i.questions[i.index],nextQuestion:i.nextQuestion,increment:i.increment,totalQuestions:i.totalQuestions,collectAnswears:i.collectAnswears,replaceChars:i.replaceChars}}):i._e(),10===i.totalQuestions?n("Score",{attrs:{answeredQuestions:i.answeredQuestions}}):i._e()],1)}),l=[],r=(n("a15b"),n("1276"),function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",[n("b-nav",[n("b-nav-item",{attrs:{disabled:""}},[i._v("Correct answears")]),n("b-nav-item",{attrs:{disabled:""}},[i._v(i._s(i.correctQuestions)+"/"+i._s(i.totalQuestions))]),10===i.totalQuestions?n("b-button",{on:{click:function(t){return i.reloadPage()}}},[i._v("Start new game")]):i._e()],1)],1)}),p=[],a={props:["correctQuestions","totalQuestions"],methods:{reloadPage:function(){window.location.reload()}}},c=a,u=n("2877"),j=Object(u["a"])(c,r,p,!1,null,null,null),d=j.exports,h=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",[n("b-jumbotron",{scopedSlots:i._u([{key:"lead",fn:function(){return[i._v(" "+i._s(i.replaceChars(i.currentQuestion.question))+" ")]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("b-list-group",i._l(i.shuffeledAnswears,(function(t,s){return n("b-button",{key:s,class:i.changeClass(s),attrs:{variant:"light",disabled:i.answered},on:{click:function(t){return t.preventDefault(),i.selectAnswear(s)}}},[i._v(i._s(i.replaceChars(t)))])})),1),n("b-button",{attrs:{variant:"success",disabled:10===i.totalQuestions||!i.answered,hidden:10===i.totalQuestions},on:{click:i.nextQuestion}},[i._v("Next")])],1)],1)},f=[],m=(n("99af"),n("c975"),n("a9e3"),n("2909")),w=n("2ef0"),b={props:{currentQuestion:Object,nextQuestion:Function,increment:Function,totalQuestions:Number,collectAnswears:Function,replaceChars:Function},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedAnswear=null,this.answered=!1,this.shuffleAnswears()}}},data:function(){return{selectedAnswear:null,correctAnswer:null,shuffeledAnswears:[],answered:!1}},methods:{shuffleAnswears:function(){var i=[].concat(Object(m["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffeledAnswears=w.shuffle(i),this.correctAnswer=this.shuffeledAnswears.indexOf(this.currentQuestion.correct_answer)},selectAnswear:function(i){this.selectedAnswear=i;var t=!1;this.selectedAnswear===this.correctAnswer&&(t=!0),this.answered=!0,this.increment(t),this.collectAnswears(this.currentQuestion.question,this.currentQuestion.correct_answer,this.shuffeledAnswears[this.selectedAnswear])},changeClass:function(i){var t="";return this.answered&&this.correctAnswer===i?t="correct ":this.answered&&this.selectedAnswear===i&&this.correctAnswer!==i?t="wrong":this.answered&&this.selectedAnswear!==i&&this.correctAnswer!==i&&(t=""),t}}},v=b,g=(n("19cc"),Object(u["a"])(v,h,f,!1,null,"cf8d1f3c",null)),A=g.exports,Q=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("b-table",{attrs:{hover:"",items:i.answeredQuestions,fields:i.fields}})},y=[],_={props:{answeredQuestions:Array},data:function(){return{fields:[{key:"index",label:""},{key:"question",label:"Question"},{key:"correctAnswear",label:"Correct Answer"},{key:"selectedAnswear",label:"Selected Answer"}]}},methods:{changeClass:function(i,t){return i===t?"correct":"wrong "}}},x=_,O=(n("1766"),Object(u["a"])(x,Q,y,!1,null,"02d19020",null)),C=O.exports,q=n("bc3a"),k={name:"app",components:{Header:d,QuizBox:A,Score:C},data:function(){return{questions:[],index:0,correctQuestions:0,totalQuestions:0,answeredQuestions:[],isCorrect:!1}},methods:{nextQuestion:function(){this.index++},increment:function(i){i?(this.correctQuestions++,this.isCorrect=!0):this.isCorrect=!1,this.totalQuestions++},collectAnswears:function(i,t,n){var s={index:this.index+1+".",question:this.replaceChars(i),correctAnswear:this.replaceChars(t),selectedAnswear:this.replaceChars(n),_rowVariant:this.isCorrect?"success":"danger"};this.answeredQuestions.push(s)},replaceChars:function(i){return i=i.split("&amp;").join("&"),i=i.split("&gt;").join(">"),i=i.split("&lt;").join("<"),i=i.split("&quot;").join('"'),i=i.split("&#039;").join("'"),i=i.split("&eacute;").join("é"),i=i.split("&deg;").join("°"),i=i.split("&frasl;").join("/"),i=i.split("&sbquo;").join("‚"),i=i.split("&bdquo;").join("„"),i=i.split("&dagger;").join("†"),i=i.split("&Dagger;").join("‡"),i=i.split("&permil;").join("‰"),i=i.split("&lsaquo;").join("‹"),i=i.split("&lsquo;").join("‘"),i=i.split("&rsquo;").join("’"),i=i.split("&ldquo;").join("“"),i=i.split("&rdquo;").join("”"),i=i.split("&trade;").join("™"),i=i.split("&rsaquo;").join("›"),i=i.split("&nbsp;").join(" "),i=i.split("&iexcl;").join("¡"),i=i.split("&cent;").join("¢"),i=i.split("&pound;").join("£"),i=i.split("&curren;").join("¤"),i=i.split("&yen;").join("¥"),i=i.split("&brvbar;").join("¦"),i=i.split("&sect;").join("§"),i=i.split("&uml;").join("¨"),i=i.split("&copy;").join("©"),i=i.split("&ordf;").join("ª"),i=i.split("&laquo;").join("«"),i=i.split("&not;").join("¬"),i=i.split("&shy;").join("­"),i=i.split("&reg;").join("®"),i=i.split("&macr;").join("¯"),i=i.split("&deg;").join("°"),i=i.split("&plusmn;").join("±"),i=i.split("&sup2;").join("²"),i=i.split("&sup3;").join("³"),i=i.split("&acute;").join("´"),i=i.split("&micro;").join("µ"),i=i.split("&para;").join("¶"),i=i.split("&middot;").join("·"),i=i.split("&cedil;").join("¸"),i=i.split("&sup1;").join("¹"),i=i.split("&ordm;").join("º"),i=i.split("&raquo;").join("»"),i=i.split("&frac14;").join("¼"),i=i.split("&frac12;").join("½"),i=i.split("&frac34;").join("¾"),i=i.split("&iquest;").join("¿"),i=i.split("&Agrave;").join("À"),i=i.split("&Aacute;").join("Á"),i=i.split("&Acirc;").join("Â"),i=i.split("&Atilde;").join("Ã"),i=i.split("&Auml;").join("Ä"),i=i.split("&Aring;").join("Å"),i=i.split("&AElig;").join("Æ"),i=i.split("&Ccedil;").join("Ç"),i=i.split("&Egrave;").join("È"),i=i.split("&Eacute;").join("É"),i=i.split("&Ecirc;").join("Ê"),i=i.split("&Euml;").join("Ë"),i=i.split("&Igrave;").join("Ì"),i=i.split("&Iacute;").join("Í"),i=i.split("&Icirc;").join("Î"),i=i.split("&Iuml;").join("Ï"),i=i.split("&ETH;").join("Ð"),i=i.split("&Ntilde;").join("Ñ"),i=i.split("&Ograve;").join("Ò"),i=i.split("&Oacute;").join("Ó"),i=i.split("&Ocirc;").join("Ô"),i=i.split("&Otilde;").join("Õ"),i=i.split("&Ouml;").join("Ö"),i=i.split("&times;").join("×"),i=i.split("&Oslash;").join("Ø"),i=i.split("&Ugrave;").join("Ù"),i=i.split("&Uacute;").join("Ú"),i=i.split("&Ucirc;").join("Û"),i=i.split("&Uuml;").join("Ü"),i=i.split("&Yacute;").join("Ý"),i=i.split("&THORN;").join("Þ"),i=i.split("&szlig;").join("ß"),i=i.split("&agrave;").join("à"),i=i.split("&aacute;").join("á"),i=i.split("&acirc;").join("â"),i=i.split("&atilde;").join("ã"),i=i.split("&auml;").join("ä"),i=i.split("&aring;").join("å"),i=i.split("&aelig;").join("æ"),i=i.split("&ccedil;").join("ç"),i=i.split("&egrave;").join("è"),i=i.split("&eacute;").join("é"),i=i.split("&ecirc;").join("ê"),i=i.split("&euml;").join("ë"),i=i.split("&igrave;").join("ì"),i=i.split("&iacute;").join("í"),i=i.split("&icirc;").join("î"),i=i.split("&iuml;").join("ï"),i=i.split("&eth;").join("ð"),i=i.split("&ntilde;").join("ñ"),i=i.split("&ograve;").join("ò"),i=i.split("&oacute;").join("ó"),i=i.split("&ocirc;").join("ô"),i=i.split("&otilde;").join("õ"),i=i.split("&ouml;").join("ö"),i=i.split("&divide;").join("÷"),i=i.split("&oslash;").join("ø"),i=i.split("&ugrave;").join("ù"),i=i.split("&uacute;").join("ú"),i=i.split("&ucirc;").join("û"),i=i.split("&uuml;").join("ü"),i=i.split("&yacute;").join("ý"),i=i.split("&thorn;").join("þ"),i=i.split("&yuml;").join("ÿ"),i=i.split("&fnof;").join("ƒ"),i=i.split("&Alpha;").join("Α"),i=i.split("&Beta;").join("Β"),i=i.split("&Gamma;").join("Γ"),i=i.split("&Delta;").join("Δ"),i=i.split("&Epsilon;").join("Ε"),i=i.split("&Zeta;").join("Ζ"),i=i.split("&Eta;").join("Η"),i=i.split("&Theta;").join("Θ"),i=i.split("&Iota;").join("Ι"),i=i.split("&Kappa;").join("Κ"),i=i.split("&Lambda;").join("Λ"),i=i.split("&Mu;").join("Μ"),i=i.split("&Nu;").join("Ν"),i=i.split("&Xi;").join("Ξ"),i=i.split("&Omicron;").join("Ο"),i=i.split("&Pi;").join("Π"),i=i.split("&Rho;").join("Ρ"),i=i.split("&Sigma;").join("Σ"),i=i.split("&Tau;").join("Τ"),i=i.split("&Upsilon;").join("Υ"),i=i.split("&Phi;").join("Φ"),i=i.split("&Chi;").join("Χ"),i=i.split("&Psi;").join("Ψ"),i=i.split("&Omega;").join("Ω"),i=i.split("&alpha;").join("α"),i=i.split("&beta;").join("β"),i=i.split("&gamma;").join("γ"),i=i.split("&delta;").join("δ"),i=i.split("&epsilon;").join("ε"),i=i.split("&zeta;").join("ζ"),i=i.split("&eta;").join("η"),i=i.split("&theta;").join("θ"),i=i.split("&iota;").join("ι"),i=i.split("&kappa;").join("κ"),i=i.split("&lambda;").join("λ"),i=i.split("&mu;").join("μ"),i=i.split("&nu;").join("ν"),i=i.split("&xi;").join("ξ"),i=i.split("&omicron;").join("ο"),i=i.split("&pi;").join("π"),i=i.split("&rho;").join("ρ"),i=i.split("&sigmaf;").join("ς"),i=i.split("&sigma;").join("σ"),i=i.split("&tau;").join("τ"),i=i.split("&upsilon;").join("υ"),i=i.split("&phi;").join("φ"),i=i.split("&chi;").join("χ"),i=i.split("&psi;").join("ψ"),i=i.split("&omega;").join("ω"),i=i.split("&thetasym;").join("ϑ"),i=i.split("&upsih;").join("ϒ"),i=i.split("&piv;").join("ϖ"),i=i.split("&bull;").join("•"),i=i.split("&hellip;").join("…"),i=i.split("&prime;").join("′"),i=i.split("&Prime;").join("″"),i=i.split("&oline;").join("‾"),i=i.split("&image;").join("ℑ"),i=i.split("&weierp;").join("℘"),i=i.split("&real;").join("ℜ"),i=i.split("&alefsym;").join("ℵ"),i=i.split("&larr;").join("←"),i=i.split("&uarr;").join("↑"),i=i.split("&rarr;").join("→"),i=i.split("&darr;").join("↓"),i=i.split("&harr;").join("↔"),i=i.split("&crarr;").join("↵"),i=i.split("&lArr;").join("⇐"),i=i.split("&uArr;").join("⇑"),i=i.split("&rArr;").join("⇒"),i=i.split("&dArr;").join("⇓"),i=i.split("&hArr;").join("⇔"),i=i.split("&forall;").join("∀"),i=i.split("&part;").join("∂"),i=i.split("&exist;").join("∃"),i=i.split("&empty;").join("∅"),i=i.split("&nabla;").join("∇"),i=i.split("&isin;").join("∈"),i=i.split("&notin;").join("∉"),i=i.split("&ni;").join("∋"),i=i.split("&prod;").join("∏"),i=i.split("&sum;").join("∑"),i=i.split("&minus;").join("−"),i=i.split("&lowast;").join("∗"),i=i.split("&radic;").join("√"),i=i.split("&prop;").join("∝"),i=i.split("&infin;").join("∞"),i=i.split("&ang;").join("∠"),i=i.split("&and;").join("∧"),i=i.split("&or;").join("∨"),i=i.split("&cap;").join("∩"),i=i.split("&cup;").join("∪"),i=i.split("&int;").join("∫"),i=i.split("&there4;").join("∴"),i=i.split("&sim;").join("∼"),i=i.split("&cong;    ").join("≅"),i=i.split("&asymp;").join("≈"),i=i.split("&ne;").join("≠"),i=i.split("&equiv;").join("≡"),i=i.split("&le;").join("≤"),i=i.split("&ge;").join("≥"),i=i.split("&sub;").join("⊂"),i=i.split("&sup;").join("⊃"),i=i.split("&nsub;").join("⊄"),i=i.split("&sube;").join("⊆"),i=i.split("&supe;").join("⊇"),i=i.split("&oplus;").join("⊕"),i=i.split("&otimes;").join("⊗"),i=i.split("&perp;").join("⊥"),i=i.split("&sdot;").join("⋅"),i=i.split("&lceil;").join("⌈"),i=i.split("&rceil;").join("⌉"),i=i.split("&lfloor;").join("⌊"),i=i.split("&rfloor;").join("⌋"),i=i.split("&lang;").join("〈"),i=i.split("&rang;").join("〉"),i=i.split("&loz;").join("◊"),i=i.split("&spades;").join("♠"),i=i.split("&clubs;").join("♣"),i=i.split("&hearts;").join("♥"),i=i.split("&diams;").join("♦"),i}},mounted:function(){var i=this;q.get("https://opentdb.com/api.php?amount=10").then((function(i){return i.data.results})).then((function(t){i.questions=t}))}},P=k,E=(n("034f"),Object(u["a"])(P,o,l,!1,null,null,null)),S=E.exports;s["default"].config.productionTip=!1,s["default"].use(e["a"]),new s["default"]({render:function(i){return i(S)}}).$mount("#app")},"7a8b":function(i,t,n){},"85ec":function(i,t,n){},d105:function(i,t,n){}});
//# sourceMappingURL=app.55971264.js.map