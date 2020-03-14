<template>
  <div v-bind:id="id">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    id: Number,
  },
  data: function() {
    return {
      message: 'test',
    };
  },
};
</script>

<style scoped>
div {
  height: 50px;
  width: 50px;
  border: solid black 2px;
}
</style>
