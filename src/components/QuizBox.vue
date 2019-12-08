<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <p v-for="(answer, index) in possibleAnswears" :key="index">
        {{ answer }}
      </p>

      <b-button variant="primary">Submit</b-button>
      <b-button variant="success" @click="nextQuestion">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    possibleAnswears: []
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.answers();
      }
    }
  },
  methods: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      this.possibleAnswears = answers;
    }
  }
};
</script>

<style></style>
