<template>
  <h1 class="text-red-700">{{ msg }}</h1>

  <button @click="count++">count is: {{ count }}</button>
  <h1>Base-URL : {{ base_url }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const base_url = process.env;
    return {
      count,
      base_url,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>