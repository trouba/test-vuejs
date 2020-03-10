<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <div class="footer">
      <p>
        Illustrations by Katerina Limpitsouni for
        <a href="https://undraw.co/" target="_blank">undraw.co</a>
      </p>
      <p>
        Made by
        <a href="http://www.nicolasr.website" target="_blank">NicolasR</a>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("retrieveLocalStorageCart");
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}

.footer {
  padding: 40px;
}
</style>
