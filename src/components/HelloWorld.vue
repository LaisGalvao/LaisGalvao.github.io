<template>
  <div>
    <Header />
    <Banner />
    <div class="card-container">
      <Portfolio />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import Portfolio from "./Portfolio.vue";
export default {
  name: "HelloWorld",
  components: {
    Header: Header,
    Banner: Banner,
    Portfolio: Portfolio,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100%;
}

.card-container {
  clear: both;
  margin-top: 100vh;
  position: relative;
}

@media screen and (max-width: 619px){
  
.card-container {
  clear: both;
  margin-top: 80vh;
  position: relative;
}
}
</style>
