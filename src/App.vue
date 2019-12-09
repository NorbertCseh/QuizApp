<template>
  <div id="app">
    <Header :correctQuestions="correctQuestions" :totalQuestions="totalQuestions" />
    <QuizBox
      v-if="questions.length"
      v-bind:currentQuestion="questions[index]"
      v-bind:nextQuestion="nextQuestion"
      :increment="increment"
    />
  </div>
</template>

<script>
const axios = require("axios");

import Header from "./components/Header.vue";
import QuizBox from "./components/QuizBox.vue";

export default {
  name: "app",
  components: {
    Header,
    QuizBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctQuestions: 0,
      totalQuestions: 0
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
