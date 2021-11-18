<template>
  <nav class="nav-header">
    <ul class="nav-list">
      <li>
        <a href=""><i class="icon icon-home"></i>Home</a>
      </li>
      <li>
        <a href=""><i class="icon icon-artigo"></i>Artigos</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>
<style scoped>
.icon {
  display: inline-block;
  position: relative;
  float: left;
  margin-top: -5%;
}

.icon-home {
  width: 30px;
  height: 30px;
  content: url(../assets/home-icon.png);
}

.icon-artigo {
  width: 30px;
  height: 30px;
  content: url(../assets/doc-icon.png);
}

.nav-header {
  width: 100%;
  height: 55px;
  background-color: #350061;
  top: 0;
}

.nav-list {
  color: whitesmoke;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 15px 0 0 10px;
  position: relative;
}
@media screen and (min-width: 320px) and (max-width: 468px) {
  .icon {
    display: block;
    position: absolute;
    float: left;
    margin-top: 0%;
  }

  .icon-home,
  .icon-artigo {
    left: calc(25%);
  }
  li {
    display: block;
    margin: 0 10px;
    padding: 2px;
  }
  ul {
    margin: 0;
  }
}
a {
  color: #42b983;
}
</style>
