<template>
  <div id="app">
    <VeritasHeader v-if="$route.path == '/veritasregister'"></VeritasHeader>
    <router-view />
  </div>
</template>
<script>
import VeritasHeader from "./components/VeritasHeader";
export default {
  name: "Home",
  components: {
    VeritasHeader
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
