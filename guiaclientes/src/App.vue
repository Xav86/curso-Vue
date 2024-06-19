<template>
  <div id="app">
    <!-- <input type="text" v-model="nomeUsuario"> -->
    <!-- <Cliente :nome="nomeUsuario" email="gustavo@gustavo.com" idade="19"/> -->

    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <h3>{{ index + 1 }}</h3>
      <Cliente :cliente="cliente" :showIdade="true" />
      <hr>
      <h4>Edição: </h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
    </div>

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
      },
      clientes: [
        {
          id: 1,
          nome: "Cliente1",
          email: "Cliente1@Cliente1.com",
          idade: 124
        },
        {
          id: 4,
          nome: "Cliente2",
          email: "Cliente2@Cliente2.com",
          idade: 49
        },
        {
          id: 34587,
          nome: "Cliente3",
          email: "Cliente3@Cliente3.com",
          idade: 91
        },
        {
          id: 3,
          nome: "Cliente4",
          email: "Cliente4@Cliente4.com",
          idade: 32
        },
        {
          id: 3,
          nome: "Cliente4",
          email: "Cliente4@Cliente4.com",
          idade: 32
        },
        {
          id: 56,
          nome: "Cliente5.0",
          email: "Cliente5@Cliente5.com",
          idade: 32
        }
      ]
    }
  },
  components: {
    Cliente,
  }
}
</script>

<style>

</style>