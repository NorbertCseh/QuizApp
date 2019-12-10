<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>{{
        replaceChars(currentQuestion.question)
      }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-button
          variant="light"
          v-for="(answer, index) in shuffeledAnswears"
          :key="index"
          @click.prevent="selectAnswear(index)"
          :class="changeClass(index)"
          :disabled="answered"
          >{{ replaceChars(answer) }}</b-button
        >
      </b-list-group>
      <b-button
        variant="success"
        @click="nextQuestion"
        :disabled="totalQuestions === 10 || !answered"
        :hidden="totalQuestions === 10"
        >Next</b-button
      >
      <b-button :hidden="totalQuestions !== 10" @click="reloadPage()">
        Start new Quiz</b-button
      >
    </b-jumbotron>
  </div>
</template>

<script>
const _ = require("lodash");

export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    increment: Function,
    totalQuestions: Number
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedAnswear = null;
        this.answered = false;
        this.shuffleAnswears();
      }
    }
  },
  data() {
    return {
      selectedAnswear: null,
      correctAnswer: null,
      shuffeledAnswears: [],
      answered: false
    };
  },
  methods: {
    shuffleAnswears() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffeledAnswears = _.shuffle(answers);
      this.correctAnswer = this.shuffeledAnswears.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    selectAnswear(index) {
      this.selectedAnswear = index;
      let isCorrect = false;

      if (this.selectedAnswear === this.correctAnswer) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    changeClass(index) {
      let answerClass = "";
      if (this.answered && this.correctAnswer === index) {
        answerClass = "correct ";
      } else if (
        this.answered &&
        this.selectedAnswear === index &&
        this.correctAnswer !== index
      ) {
        answerClass = "wrong";
      } else if (
        this.answered &&
        this.selectedAnswear !== index &&
        this.correctAnswer !== index
      ) {
        answerClass = "";
      }
      return answerClass;
    },
    replaceChars(str) {
      str = str.split("&amp;").join("&");
      str = str.split("&gt;").join(">");
      str = str.split("&lt;").join("<");
      str = str.split("&quot;").join('"');
      str = str.split("&#039;").join("'");
      str = str.split("&eacute;").join("é");
      return str;
    },
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.correct {
  background-color: lightgreen;
}
.wrong {
  background-color: lightcoral;
}

.list-group-item:hover {
  background: azure;
  cursor: pointer;
}
</style>
