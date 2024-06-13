<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <hr>
    <h2>Lista de produtos</h2>
    <Produto/>
    <Produto/>
    <Produto/>

  </div>
</template>

<script>
import Cliente from './components/Cliente.vue';
import Produto from './components/Produto.vue';

export default {
  name: 'App',
  components: {
    Cliente,
    Produto
  }
}
</script>

<style>

</style>