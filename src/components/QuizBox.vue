<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>{{ currentQuestion.question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffeledAnswears"
          :key="index"
          @click.prevent="selectAnswear(index)"
          :class="changeClass(index)"
        >{{ answer }}</b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswear()"
        :disabled="selectedAnswear === null || answered"
      >Submit</b-button>
      <b-button variant="success" @click="nextQuestion">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
const _ = require("lodash");

export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    increment: Function
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
    },
    submitAnswear() {
      let isCorrect = false;

      if (this.selectedAnswear === this.correctAnswer) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    changeClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedAnswear === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctAnswer === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedAnswear === index &&
        this.correctAnswer !== index
      ) {
        answerClass = "wrong";
      }
      return answerClass;
    }
  }
};
</script>

<style>
.selected {
  background-color: lightblue;
}
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
