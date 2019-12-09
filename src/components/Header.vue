<template>
  <div>
    <b-nav>
      <b-nav-item disabled>Correct answears</b-nav-item>
      <b-nav-item disabled>{{correctQuestions}}/{{totalQuestions}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["correctQuestions", "totalQuestions"]
};
</script>

<style></style>
