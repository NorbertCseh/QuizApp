<template>
  <div id="app">
    <Header :correctQuestions="correctQuestions" :totalQuestions="totalQuestions" />
    <QuizBox
      v-if="questions.length"
      v-bind:currentQuestion="questions[index]"
      v-bind:nextQuestion="nextQuestion"
      :increment="increment"
      :totalQuestions="totalQuestions"
      :collectAnswears="collectAnswears"
    />
    <Score :answeredQuestions="answeredQuestions" />
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
      totalQuestions: 1,
      answeredQuestions: []
    };
  },
  methods: {
    nextQuestion() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.correctQuestions++;
      }
      this.totalQuestions++;
    },
    collectAnswears(question, correctAnswear, selectedAnswear) {
      let questionObj = {
        index: this.index + 1 + ".",
        question: question,
        correctAnswear: correctAnswear,
        selectedAnswear: selectedAnswear
      };
      this.answeredQuestions.push(questionObj);
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
