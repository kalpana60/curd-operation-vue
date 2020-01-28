<template>
  <div id="app">
    <todo-head></todo-head>
    <todo-list></todo-list>
  </div>
</template>
<script>
import TodoList from "@/components/TodoList.vue";

import TodoButton from "@/components/TodoButton.vue";

export default {
  name: "app",

  components: {
    TodoList,

    TodoButton
  }
};
</script>

<style lang="scss"></style>
