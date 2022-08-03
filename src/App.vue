<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import NavbarComponent from "./layout/NavbarComponent.vue";
import FooterComponent from "./layout/FooterComponent.vue";
import CardComponent from "./components/CardComponent.vue";
</script>

<template>
  <NavbarComponent />
  <HelloWorld msg="Olá, sou a Laís!" />
  <div class="py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <div v-for="card in cards" :key="card.title">
      <CardComponent
        :imgSrc="card.imgSrc"
        :title="card.title"
        :desc="card.desc"
        :link="card.link"
        :repo="card.repo"
      />
    </div>
  </div>
  <FooterComponent />
</template>
<script>
export default {
  computed: {
    cards() {
      return [
        {
          title: "Márcio Elétrica",
          imgSrc:
            "https://github.com/LaisGalvao/Marcio_Eletrica/blob/master/src/assets/banner/eletrica01.jpg",
          desc: "Um website voltado para divulgação de serviços de um eletricista residencial.",
          link: "https://galvaoeletrica.netlify.app/",
          repo: "https://github.com/LaisGalvao/Marcio_Eletrica",
        },
        {
          title: "Instagram Clone",
          imgSrc:
            "https://github.com/LaisGalvao/recriando-instagram/blob/master/img/phone.gif",
          desc: "Criando uma réplica simples do instagram usando HTML, CSS e Javascript",
          link: "https://laisgram.netlify.app/",
          repo: "https://github.com/LaisGalvao/recriando-instagram",
        },
        {
          title: "Netflix CLone",
          imgSrc:
            "https://github.com/LaisGalvao/recriando-netflix/blob/main/img/ezgif.com-gif-maker.gif",
          desc: "Criando um clone da interface da Netflix utilizando HTML, CSS e JavaScript.",
          link: "https://laiscloneflix.netlify.app/",
          repo: "https://github.com/LaisGalvao/recriando-netflix",
        },
        {
          title: "Renovar Estofados",
          imgSrc:
            "https://github.com/LaisGalvao/Renovar-Estofados/blob/master/src/assets/img/banner/sofa02.jpg",
          desc: "Um e-commerce criado para meu projeto integrador do curso técnico em 2018",
          link: "https://renovar-estofados.vercel.app/",
          repo: "https://github.com/LaisGalvao/Renovar-Estofados",
        },
      ];
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
