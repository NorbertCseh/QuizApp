<template>
  <div id="app" class="container">
    <Header :correctQuestions="correctQuestions" :totalQuestions="totalQuestions" />
    <QuizBox
      v-if="questions.length"
      v-show="totalQuestions!==10"
      v-bind:currentQuestion="questions[index]"
      v-bind:nextQuestion="nextQuestion"
      :increment="increment"
      :totalQuestions="totalQuestions"
      :collectAnswears="collectAnswears"
      :replaceChars="replaceChars"
    />
    <Score v-if="totalQuestions===10" :answeredQuestions="answeredQuestions" />
  </div>
</template>

<script>
const axios = require("axios");

import Header from "./components/Header.vue";
import QuizBox from "./components/QuizBox.vue";
import Score from "./components/Score.vue";

export default {
  name: "app",
  components: {
    Header,
    QuizBox,
    Score
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctQuestions: 0,
      totalQuestions: 0,
      answeredQuestions: [],
      isCorrect: false
    };
  },
  methods: {
    nextQuestion() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.correctQuestions++;
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
      this.totalQuestions++;
    },
    collectAnswears(question, correctAnswear, selectedAnswear) {
      let questionObj = {
        index: this.index + 1 + ".",
        question: this.replaceChars(question),
        correctAnswear: this.replaceChars(correctAnswear),
        selectedAnswear: this.replaceChars(selectedAnswear),
        _rowVariant: this.isCorrect ? "success" : "danger"
      };
      this.answeredQuestions.push(questionObj);
    },
    replaceChars(str) {
      str = str.split("&amp;").join("&");
      str = str.split("&gt;").join(">");
      str = str.split("&lt;").join("<");
      str = str.split("&quot;").join('"');
      str = str.split("&#039;").join("'");
      str = str.split("&eacute;").join("é");
      str = str.split("&deg;").join("°");
      str = str.split("&frasl;").join("/");
      str = str.split("&sbquo;").join("‚");
      str = str.split("&bdquo;").join("„");
      str = str.split("&dagger;").join("†");
      str = str.split("&Dagger;").join("‡");
      str = str.split("&permil;").join("‰");
      str = str.split("&lsaquo;").join("‹");
      str = str.split("&lsquo;").join("‘");
      str = str.split("&rsquo;").join("’");
      str = str.split("&ldquo;").join("“");
      str = str.split("&rdquo;").join("”");
      str = str.split("&trade;").join("™");
      str = str.split("&rsaquo;").join("›");
      str = str.split("&nbsp;").join(" ");
      str = str.split("&iexcl;").join("¡");
      str = str.split("&cent;").join("¢");
      str = str.split("&pound;").join("£");
      str = str.split("&curren;").join("¤");
      str = str.split("&yen;").join("¥");
      str = str.split("&brvbar;").join("¦");
      str = str.split("&sect;").join("§");
      str = str.split("&uml;").join("¨");
      str = str.split("&copy;").join("©");
      str = str.split("&ordf;").join("ª");
      str = str.split("&laquo;").join("«");
      str = str.split("&not;").join("¬");
      str = str.split("&shy;").join("­");
      str = str.split("&reg;").join("®");
      str = str.split("&macr;").join("¯");
      str = str.split("&deg;").join("°");
      str = str.split("&plusmn;").join("±");
      str = str.split("&sup2;").join("²");
      str = str.split("&sup3;").join("³");
      str = str.split("&acute;").join("´");
      str = str.split("&micro;").join("µ");
      str = str.split("&para;").join("¶");
      str = str.split("&middot;").join("·");
      str = str.split("&cedil;").join("¸");
      str = str.split("&sup1;").join("¹");
      str = str.split("&ordm;").join("º");
      str = str.split("&raquo;").join("»");
      str = str.split("&frac14;").join("¼");
      str = str.split("&frac12;").join("½");
      str = str.split("&frac34;").join("¾");
      str = str.split("&iquest;").join("¿");
      str = str.split("&Agrave;").join("À");
      str = str.split("&Aacute;").join("Á");
      str = str.split("&Acirc;").join("Â");
      str = str.split("&Atilde;").join("Ã");
      str = str.split("&Auml;").join("Ä");
      str = str.split("&Aring;").join("Å");
      str = str.split("&AElig;").join("Æ");
      str = str.split("&Ccedil;").join("Ç");
      str = str.split("&Egrave;").join("È");
      str = str.split("&Eacute;").join("É");
      str = str.split("&Ecirc;").join("Ê");
      str = str.split("&Euml;").join("Ë");
      str = str.split("&Igrave;").join("Ì");
      str = str.split("&Iacute;").join("Í");
      str = str.split("&Icirc;").join("Î");
      str = str.split("&Iuml;").join("Ï");
      str = str.split("&ETH;").join("Ð");
      str = str.split("&Ntilde;").join("Ñ");
      str = str.split("&Ograve;").join("Ò");
      str = str.split("&Oacute;").join("Ó");
      str = str.split("&Ocirc;").join("Ô");
      str = str.split("&Otilde;").join("Õ");
      str = str.split("&Ouml;").join("Ö");
      str = str.split("&times;").join("×");
      str = str.split("&Oslash;").join("Ø");
      str = str.split("&Ugrave;").join("Ù");
      str = str.split("&Uacute;").join("Ú");
      str = str.split("&Ucirc;").join("Û");
      str = str.split("&Uuml;").join("Ü");
      str = str.split("&Yacute;").join("Ý");
      str = str.split("&THORN;").join("Þ");
      str = str.split("&szlig;").join("ß");
      str = str.split("&agrave;").join("à");
      str = str.split("&aacute;").join("á");
      str = str.split("&acirc;").join("â");
      str = str.split("&atilde;").join("ã");
      str = str.split("&auml;").join("ä");
      str = str.split("&aring;").join("å");
      str = str.split("&aelig;").join("æ");
      str = str.split("&ccedil;").join("ç");
      str = str.split("&egrave;").join("è");
      str = str.split("&eacute;").join("é");
      str = str.split("&ecirc;").join("ê");
      str = str.split("&euml;").join("ë");
      str = str.split("&igrave;").join("ì");
      str = str.split("&iacute;").join("í");
      str = str.split("&icirc;").join("î");
      str = str.split("&iuml;").join("ï");
      str = str.split("&eth;").join("ð");
      str = str.split("&ntilde;").join("ñ");
      str = str.split("&ograve;").join("ò");
      str = str.split("&oacute;").join("ó");
      str = str.split("&ocirc;").join("ô");
      str = str.split("&otilde;").join("õ");
      str = str.split("&ouml;").join("ö");
      str = str.split("&divide;").join("÷");
      str = str.split("&oslash;").join("ø");
      str = str.split("&ugrave;").join("ù");
      str = str.split("&uacute;").join("ú");
      str = str.split("&ucirc;").join("û");
      str = str.split("&uuml;").join("ü");
      str = str.split("&yacute;").join("ý");
      str = str.split("&thorn;").join("þ");
      str = str.split("&yuml;").join("ÿ");
      str = str.split("&fnof;").join("ƒ");
      str = str.split("&Alpha;").join("Α");
      str = str.split("&Beta;").join("Β");
      str = str.split("&Gamma;").join("Γ");
      str = str.split("&Delta;").join("Δ");
      str = str.split("&Epsilon;").join("Ε");
      str = str.split("&Zeta;").join("Ζ");
      str = str.split("&Eta;").join("Η");
      str = str.split("&Theta;").join("Θ");
      str = str.split("&Iota;").join("Ι");
      str = str.split("&Kappa;").join("Κ");
      str = str.split("&Lambda;").join("Λ");
      str = str.split("&Mu;").join("Μ");
      str = str.split("&Nu;").join("Ν");
      str = str.split("&Xi;").join("Ξ");
      str = str.split("&Omicron;").join("Ο");
      str = str.split("&Pi;").join("Π");
      str = str.split("&Rho;").join("Ρ");
      str = str.split("&Sigma;").join("Σ");
      str = str.split("&Tau;").join("Τ");
      str = str.split("&Upsilon;").join("Υ");
      str = str.split("&Phi;").join("Φ");
      str = str.split("&Chi;").join("Χ");
      str = str.split("&Psi;").join("Ψ");
      str = str.split("&Omega;").join("Ω");
      str = str.split("&alpha;").join("α");
      str = str.split("&beta;").join("β");
      str = str.split("&gamma;").join("γ");
      str = str.split("&delta;").join("δ");
      str = str.split("&epsilon;").join("ε");
      str = str.split("&zeta;").join("ζ");
      str = str.split("&eta;").join("η");
      str = str.split("&theta;").join("θ");
      str = str.split("&iota;").join("ι");
      str = str.split("&kappa;").join("κ");
      str = str.split("&lambda;").join("λ");
      str = str.split("&mu;").join("μ");
      str = str.split("&nu;").join("ν");
      str = str.split("&xi;").join("ξ");
      str = str.split("&omicron;").join("ο");
      str = str.split("&pi;").join("π");
      str = str.split("&rho;").join("ρ");
      str = str.split("&sigmaf;").join("ς");
      str = str.split("&sigma;").join("σ");
      str = str.split("&tau;").join("τ");
      str = str.split("&upsilon;").join("υ");
      str = str.split("&phi;").join("φ");
      str = str.split("&chi;").join("χ");
      str = str.split("&psi;").join("ψ");
      str = str.split("&omega;").join("ω");
      str = str.split("&thetasym;").join("ϑ");
      str = str.split("&upsih;").join("ϒ");
      str = str.split("&piv;").join("ϖ");
      str = str.split("&bull;").join("•");
      str = str.split("&hellip;").join("…");
      str = str.split("&prime;").join("′");
      str = str.split("&Prime;").join("″");
      str = str.split("&oline;").join("‾");
      str = str.split("&image;").join("ℑ");
      str = str.split("&weierp;").join("℘");
      str = str.split("&real;").join("ℜ");
      str = str.split("&alefsym;").join("ℵ");
      str = str.split("&larr;").join("←");
      str = str.split("&uarr;").join("↑");
      str = str.split("&rarr;").join("→");
      str = str.split("&darr;").join("↓");
      str = str.split("&harr;").join("↔");
      str = str.split("&crarr;").join("↵");
      str = str.split("&lArr;").join("⇐");
      str = str.split("&uArr;").join("⇑");
      str = str.split("&rArr;").join("⇒");
      str = str.split("&dArr;").join("⇓");
      str = str.split("&hArr;").join("⇔");
      str = str.split("&forall;").join("∀");
      str = str.split("&part;").join("∂");
      str = str.split("&exist;").join("∃");
      str = str.split("&empty;").join("∅");
      str = str.split("&nabla;").join("∇");
      str = str.split("&isin;").join("∈");
      str = str.split("&notin;").join("∉");
      str = str.split("&ni;").join("∋");
      str = str.split("&prod;").join("∏");
      str = str.split("&sum;").join("∑");
      str = str.split("&minus;").join("−");
      str = str.split("&lowast;").join("∗");
      str = str.split("&radic;").join("√");
      str = str.split("&prop;").join("∝");
      str = str.split("&infin;").join("∞");
      str = str.split("&ang;").join("∠");
      str = str.split("&and;").join("∧");
      str = str.split("&or;").join("∨");
      str = str.split("&cap;").join("∩");
      str = str.split("&cup;").join("∪");
      str = str.split("&int;").join("∫");
      str = str.split("&there4;").join("∴");
      str = str.split("&sim;").join("∼");
      str = str.split("&cong;    ").join("≅");
      str = str.split("&asymp;").join("≈");
      str = str.split("&ne;").join("≠");
      str = str.split("&equiv;").join("≡");
      str = str.split("&le;").join("≤");
      str = str.split("&ge;").join("≥");
      str = str.split("&sub;").join("⊂");
      str = str.split("&sup;").join("⊃");
      str = str.split("&nsub;").join("⊄");
      str = str.split("&sube;").join("⊆");
      str = str.split("&supe;").join("⊇");
      str = str.split("&oplus;").join("⊕");
      str = str.split("&otimes;").join("⊗");
      str = str.split("&perp;").join("⊥");
      str = str.split("&sdot;").join("⋅");
      str = str.split("&lceil;").join("⌈");
      str = str.split("&rceil;").join("⌉");
      str = str.split("&lfloor;").join("⌊");
      str = str.split("&rfloor;").join("⌋");
      str = str.split("&lang;").join("〈");
      str = str.split("&rang;").join("〉");
      str = str.split("&loz;").join("◊");
      str = str.split("&spades;").join("♠");
      str = str.split("&clubs;").join("♣");
      str = str.split("&hearts;").join("♥");
      str = str.split("&diams;").join("♦");
      return str;
    }
  },
  mounted() {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(response => {
        return response.data.results;
      })
      .then(responseJson => {
        this.questions = responseJson;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
