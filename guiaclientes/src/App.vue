<template>
  <div id="app">
    <!-- <input type="text" v-model="nomeUsuario"> -->
    <!-- <Cliente :nome="nomeUsuario" email="gustavo@gustavo.com" idade="19"/> -->
    <h3>Cadastro: </h3>
      <div class="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
      </div>
      <input type="text" placeholder="nome" v-model="nomeField"> <br>
      <input type="email" placeholder="email" v-model="emailField"> <br>
      <input type="number" placeholder="idade" v-model="idadeField"> <br>
      <small id="nomeErro" v-show="deuErro">Erro ao cadastrar, preencha os campos corretamente</small> <br>
      <button @click="cadastrarUsuario">Cadastar</button>
    <hr>
    <div v-for="(cliente, index) in orderClientes" :key="cliente.id">
      <h3>{{ index + 1 }}</h3>
      <Cliente :cliente="cliente" :showIdade="true" @meDelete="deletarUsuario($event)"/> 
    </div>

  </div>
</template>

<script>
import _ from 'lodash';
import Cliente from './components/Cliente.vue';

export default {
  name: 'App',
  data() {
    return {
      deuErro: false,
      nomeField: "",
      emailField: "",
      idadeField: 0,
      clientes: [
        {
          id: 1,
          nome: "Cliente1",
          email: "Cliente1@Cliente1.com",
          idade: 124
        },
        {
          id: 34587,
          nome: "Cliente3",
          email: "Cliente3@Cliente3.com",
          idade: 91
        },
        {
          id: 4,
          nome: "Cliente2",
          email: "Cliente2@Cliente2.com",
          idade: 49
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
  },
  methods: {
    cadastrarUsuario: function() {
      if((this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3) || (this.emailField == "" || this.emailField == " " || this.emailField.length < 3) || (this.idadeField == 0)) {
        this.deuErro = true;
      } else {

        this.clientes.push({
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField,
          id: Date.now()
        });
        this.nomeField = "";
        this.emailField = "";
        this.idadeField = 0;
        this.deuErro = false;
      }
    },
    deletarUsuario: function($event) {
      console.log("Recebendo evento");
      var id = $event.idDoCliente;
      var novoArray = this.clientes.filter(cliente => cliente.id != id);
      this.clientes = novoArray;
    }
  },
  computed: {
    orderClientes: function() {
      return _.orderBy(this.clientes, ['nome'],['asc'])
    }
  }
}

</script>

<style>
  #nomeErro {
    color: red;
  }
</style>