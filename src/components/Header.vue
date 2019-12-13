<template>
  <div>
    <b-nav>
      <b-nav-item disabled>Correct answears</b-nav-item>
      <b-nav-item disabled>{{correctQuestions}}/{{totalQuestions}}</b-nav-item>
      <b-button @click="reloadPage()" v-if="totalQuestions===10">Start new game</b-button>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["correctQuestions", "totalQuestions"],
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style></style>
