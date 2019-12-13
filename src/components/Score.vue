<template>
  <b-table hover :items="answeredQuestions" :fields="fields"></b-table>
</template>

<script>
export default {
  props: {
    answeredQuestions: Array
  },
  data() {
    return {
      fields: [
        {
          key: "index",
          label: ""
        },
        {
          key: "question",
          label: "Question"
        },
        {
          key: "correctAnswear",
          label: "Correct Answer"
        },
        {
          key: "selectedAnswear",
          label: "Selected Answer"
        }
      ]
    };
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
.wrong {
  background: red;
}
.correct {
  background: green;
}
</style>
