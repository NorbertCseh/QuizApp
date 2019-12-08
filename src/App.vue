<template>
  <div id="app">
    <Header />
    <QuizBox
      v-if="questions.length"
      v-bind:currentQuestion="questions[index]"
      v-bind:nextQuestion="nextQuestion"
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
      index: 0
    };
  },
  methods: {
    nextQuestion() {
      this.index++;
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
