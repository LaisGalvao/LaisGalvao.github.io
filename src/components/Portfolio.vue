<template>
  <section class="card-projetos">
    <figure>
      <img class="img-card" src="../assets/marcio-eletrica.png" alt="" />
    </figure>
    <button class="call-action">
      <a
        class="call-link"
        href="https://github.com/LaisGalvao/Marcio_Eletrica"
        target="blank"
      >
        Ver no GitHub</a
      >
    </button>
  </section>

  <section class="card-projetos">
    <figure>
      <img class="img-card" src="../assets/recriando-instagram.png" alt="" />
    </figure>
    <button class="call-action">
      <a
        class="call-link"
        href="https://github.com/LaisGalvao/recriando-instagram"
        target="blank"
      >
        Ver no GitHub</a
      >
    </button>
  </section>

  <section class="card-projetos">
    <figure>
      <img class="img-card" src="../assets/renovar-estofados.png" alt="" />
    </figure>
    <button class="call-action">
      <a
        class="call-link"
        href="https://github.com/LaisGalvao/Renovar-Estofados"
        target="blank"
      >
        Ver no GitHub</a
      >
    </button>
  </section>

  <section class="card-projetos">
    <figure>
      <img class="img-card" src="../assets/recriando-netflix.png" alt="" />
    </figure>
    <button class="call-action">
      <a
        class="call-link"
        href="https://github.com/LaisGalvao/recriando-netflix"
        target="blank"
      >
        Ver no GitHub</a
      >
    </button>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.card-projetos {
  width: 250px;
  height: 300px;
  background: whitesmoke;
  border: 0.9px solid;
  border-color: gray;
  border-radius: 15px;
  position: relative;
  display: inline-flex;
  margin: 1%;
  opacity: 0.9;
}

.card-projetos:hover {
  background: #4cd49b;
  border-color: linear-gradient(
    90deg,
    rgba(53, 0, 97, 1) 0%,
    rgba(46, 86, 128, 1) 32%,
    rgba(68, 183, 149, 1) 68%,
    rgba(76, 212, 155, 1) 83%
  );
  border: solid 1px;
}

/*#4cd49b;*/

.img-card {
  position: absolute;
  width: 75%;
  height: 30vh;
}

.call-action {
  border: none;
  background: #350061;
  color: whitesmoke;
  width: 100px;
  height: 10%;
  border-radius: 5px;
  position: absolute;
  align-content: center;
  left: 30%;
  top: 80%;
}

.call-action:hover {
  background: #4cd49b;
  border: solid 1px #350061;
}

.call-link {
  text-decoration: none;
  color: whitesmoke;
}

.call-link:hover {
  color: #350061;
}

@media screen and (max-width: 619px) {
  .card-projetos {
    width: 310px;
    height: 300px;
    background: #4cd49b;
    border-radius: 15px;
    position: relative;
    display: inline-flex;
    margin: 1%;
    opacity: 0.9;
  }
  .img-card {
  position: absolute;
  width: 70%;
  height: 35vh;
}
}
</style>
