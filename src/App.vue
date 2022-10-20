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
  <h1 class="text-center font-bold text-3xl py-8 px-4">Meus projetos </h1>
  <div id="projetos" class="py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    
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
          title: "Game Memory Project",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/game-memory/master/image.png",
          desc: "SISTEMA DE GAMIFICAÇÃO EM TRATAMENTOS DE DOENÇAS RELACIONADAS À MEMÓRIA.",
          link: "https://gamememoryproject.netlify.app/",
          repo: "https://github.com/Game-Memory-Project",
        },
        {
          title: "Márcio Elétrica",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/Marcio_Eletrica/master/image.png",
          desc: "Criação de um website voltado para divulgação de serviços de um eletricista residencial.",
          link: "https://galvaoeletrica.netlify.app/",
          repo: "https://github.com/LaisGalvao/Marcio_Eletrica",
        },
        {
          title: "Instagram Clone",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/recriando-instagram/master/image.png",
          desc: "Criando uma réplica simples do instagram usando HTML, CSS e Javascript",
          link: "https://laisgram.netlify.app/",
          repo: "https://github.com/LaisGalvao/recriando-instagram",
        },
        {
          title: "Netflix Clone",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/recriando-netflix/main/image.png",
          desc: "Criando um clone da interface da Netflix utilizando HTML, CSS e JavaScript.",
          link: "https://laiscloneflix.netlify.app/",
          repo: "https://github.com/LaisGalvao/recriando-netflix",
        },
        {
          title: "Renovar Estofados",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/Renovar-Estofados/master/image.png",
          desc: "Um e-commerce criado para meu projeto integrador do curso técnico em 2018",
          link: "https://renovar-estofados.vercel.app/",
          repo: "https://github.com/LaisGalvao/Renovar-Estofados",
        },
        {
          title: "DevBlog",
          imgSrc:
            "https://raw.githubusercontent.com/LaisGalvao/aulas-front-end/main/image.png",
          desc: "Um pequeno blog (em construção) afim de compartilhar conhecimento de front-end básico",
          link: "https://laisgalvaodevblog.netlify.app/",
          repo: "https://github.com/LaisGalvao/aulas-front-end",
        },
        {
          title: "Sidebar Accessible",
          imgSrc:"https://raw.githubusercontent.com/LaisGalvao/sidebar-accessible/main/image.png",
          desc:"Um componente Vue simples criado para estudar sobre acessibilidade em menus de navegação.",
          link:"https://sidebar-accessible.vercel.app/",
          repo:"https://github.com/LaisGalvao/sidebar-accessible"
        },
        {
          title:"Bitcoin Show",
          imgSrc:"https://raw.githubusercontent.com/LaisGalvao/bitcoinshow-frontend-app/main/bitcoinshow-frontend-app/image.png",
          desc:"Uma interface que consome a API CoinGecko e mostra o valor de criptomoedas por data (em construção)",
          link:"https://bitcoinshow-frontend-app.vercel.app/",
          repo:"https://github.com/LaisGalvao/bitcoinshow-frontend-app"
        }
      ];
    },
  },
};
</script>

<style>
html{
  scroll-behavior: smooth !important;
}
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
