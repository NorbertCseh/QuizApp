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
