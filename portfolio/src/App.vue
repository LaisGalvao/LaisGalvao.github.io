<template>
  <div id="app" :style="{ background: theme.backgroundColor, color: theme.textColor }">
    <NavbarComponent />
    <MainContent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import MainContent from "@/components/MainContent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    MainContent,
    FooterComponent,
  },
  data() {
    return {
      theme: {
        backgroundColor: "#171717",
        textColor: "#ffffff", // Cor do texto no tema escuro
        primaryColor: "#7d14f5", // Cor primária
      },
    };
  },
};
</script>

<style>
/* Adicione estilos globais aqui, se necessário */
</style>
