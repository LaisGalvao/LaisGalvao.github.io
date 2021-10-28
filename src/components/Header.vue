<template>
    <nav class="nav-header">
      <ul class="nav-list">
        <li>Home</li>
        <li>Artigos</li>
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
.nav-header {
  width: 100%;
  height: 50px;
  background-color: #350061;
  top: 0
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
  margin: 10px 0 0 10px;
  position: relative;
}
@media screen and (min-width: 320px) and (max-width: 468px) {
  li {
  display: block;
  margin:0 10px;
  padding: 2px;
}
ul{
  margin: 0;
}

}
a {
  color: #42b983;
}
</style>

