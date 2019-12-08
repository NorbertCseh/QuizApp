<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>{{ currentQuestion.question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item v-for="(answer, index) in shuffeledAnswears" :key="index">{{ answer }}</b-list-group-item>
      </b-list-group>

      <b-button variant="primary">Submit</b-button>
      <b-button variant="success" @click="nextQuestion">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
const _ = require("lodash");

export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswears();
      }
    }
  },
  data() {
    return {
      selectedAnswear: null,
      correctAnswer: null,
      shuffeledAnswears: []
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
    }
  },
  selectAnswear(index) {
    this.selectedAnswear = index;
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
