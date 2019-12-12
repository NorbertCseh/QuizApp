<template>
  <div class="container">
    <h2>Table</h2>
    <b-table
      hover
      :items="answeredQuestions"
      :class="changeClass(correctAnswear, selectedAnswear)"
    ></b-table>
  </div>
</template>

<script>
export default {
  props: {
    answeredQuestions: Array
  },
  methods: {
    changeClass(correctAnswear, selectedAnswear) {
      if (correctAnswear === selectedAnswear) {
        return "correct";
      } else {
        return "wrong ";
      }
    }
  }
};
</script>

<style scoped>
td.wrong {
  background: red;
}
td.correct {
  background: green;
}
</style>
