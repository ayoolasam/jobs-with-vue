<script setup>
import TheHeader from "./components/Header.vue";
import TheFooter from './components/Footer.vue'
import { RouterView } from "vue-router";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter/>
</template>

<style scoped>


</style>
