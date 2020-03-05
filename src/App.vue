<template>
  <div id="app">
    <VeritasHeader v-if="$route.path == '/veritasregister'"></VeritasHeader>
    <Header v-else></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import VeritasHeader from "./components/VeritasHeader";
import Footer from "./components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    VeritasHeader,
    Footer
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
