<template>
  <NavBar />
  <router-view />
  <AppFooter />
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppFooter,
    NavBar,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o app ocupe toda a altura da tela */
}
router-view {
  flex: 1; /* Faz o router-view ocupar o espaço disponível */
}
app-footer {
  flex-shrink: 0; /* Evita que o footer seja comprimido */
}

</style>

