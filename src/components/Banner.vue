<template>
  <div class="container">
    <div id="banner-img">
      <section class="conteudo">
        <br />
        <h1 style="text-align:center">Olá, meu nome é Laís!👋</h1>
        <span>Esta é uma página em construção!</span>
        <br />
        <ul style="list-style-type:none;text-align:center;padding: 0;margin: 5%;">
          <li class="list-item">
            🔭 Atualmente sou estagiária em desenvolvimento fullstack
          </li>
          <li class="list-item">
            🌱 Atualmente, busco desenvolver através do meu trabalho habilidades
            em: HTML, CSS, JavaScript, e alguns frameworks, como Laravel e
            Vue.js
          </li>
          <li class="list-item">😄 Pronomes: Ela/dela (She/her)</li>
          <li class="list-item">
            ⚡ Coisas que gosto nas horas vagas: Patinar, andar de skate, tocar
            guitarra, desenhar, ler e comer bastante
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#banner-img {
  background: url("../assets/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 100vh;
  width: 100%;
}

.container {
  width: 100%;
  position: relative;
}

.conteudo {
  width: 70%;
  height: auto;
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 15%;
  padding-bottom: 5%;
  background: rgba(255, 255, 255, 0.75);
  opacity: 0.9;
   border-color: linear-gradient(
    90deg,
    rgba(53, 0, 97, 1) 0%,
    rgba(46, 86, 128, 1) 32%,
    rgba(68, 183, 149, 1) 68%,
    rgba(76, 212, 155, 1) 83%
  );
  border: solid 1px;
  border-radius: 15px;
}

.list-item {
  position: relative;
  list-style-type: none;
}

@media screen and (max-width: 619px) {
  #banner-img {
  background: url("../assets/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: 75vh;
  width: 100%;
}
}
</style>
