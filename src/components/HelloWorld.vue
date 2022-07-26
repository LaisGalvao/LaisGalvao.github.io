<script setup>
import { ref } from "vue";
import JumbotronComponent from "../layout/JumbotronComponent.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <JumbotronComponent/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
