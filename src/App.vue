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
      <CardComponent :title="card.title" :desc="card.desc" :link="card.link" />
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
          desc: "oi",
          link: "https://galvaoeletrica.netlify.app/",
        },
        {
          title: "Instagram Clone",
          desc: "oi",
          link: "https://laisgram.netlify.app/",
        },
        {
          title: "Netflix CLone",
          desc: "oi",
          link: "https://laiscloneflix.netlify.app/",
        },
        {
          title: "Renovar Estofados",
          desc: "oi",
          link: "https://renovar-estofados.vercel.app/",
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
