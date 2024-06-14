<template>
  <div id="app">
    <input type="text" v-model="clienteUsuario.nome">
    <input type="text" v-model="clienteUsuario.email">
    <!-- <input type="text" v-model="nomeUsuario"> -->
    <!-- <Cliente :nome="nomeUsuario" email="gustavo@gustavo.com" idade="19"/> -->
    <Cliente :cliente="clienteUsuario"/>
  </div>
</template>

<script>
import Cliente from './components/Cliente.vue';

export default {
  name: 'App',
  data() {
    return {
      clienteUsuario: {
        nome: "Gustavo",
        email: "gustavo@gustavo.com",
        idade: 19
      }
    }
  },
  components: {
    Cliente,
  }
}
</script>

<style>

</style>