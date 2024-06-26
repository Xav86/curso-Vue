<template>
    <div :class="{'cliente-descricao': !isPremium, 'cliente-premium': isPremium}">
        
        <h4>Nome: {{ cliente.nome }}</h4>
        <hr>
        <p>Email: {{ tudoMaiusculo }}</p>
        <p v-if="showIdade === true">Idade: {{ cliente.idade }}</p>
        <p v-else>O usuário não quis mostrar a idade </p>
        <!-- <p v-show="showIdade === true">Idade: {{ cliente.idade }}</p> -->
        <!-- <p v-if="showIdade === true">Idade: {{ cliente.idade }}</p> 
        <p v-else-if="showIdade === false">Idade: {{ cliente.idade }}</p> -->
        <button @click="mudarCor($event)">Mudar cor!</button>
        <button @click="emitirEventoDelete">Deletar</button>
        <h4>idEspecial: {{ idEspecial }}</h4>
        <Produto/>
    </div>

</template>

<script>
import Produto from './Produto.vue'

export default {
    data() {
        return {
            numero: "2346-25234",
            descricao: "Lorem ipsum dolor sit amet",
            isPremium: false,
            normalSize: true
        }
    },
    name: 'Cliente',
    components: {
        Produto
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    },
    methods: {
        mudarCor: function($event) {
            console.log($event);
            this.isPremium = !this.isPremium;
        },
        emitirEventoDelete: function() {
        console.log("Emitindo do filho");
        this.$emit("meDelete",{idDoCliente: this.cliente.id, comida: "Abacaxi", armaBranca: "Espada", component: this});
        
    },
    testar: function() {
        console.log("Testando para valer!");
        alert("Isso não é um alert")
    }
    },
    computed: {
        tudoMaiusculo: function() {
        return this.cliente.email.toUpperCase();
        },
        idEspecial: function() {
            return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
        }
    },
}

</script>

<style scoped>
    .cliente-descricao {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f2f2f2;
    }

    .cliente-nome {
        color: #2c2ca0;
    }

    .cliente-premium {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffee00;
        background-color: #0f0f0f;
    }

    .normalSize {
        width: auto;
        height: auto;
    }

    .miniSize {
        width: 200px;
        height: 100px;
    }

</style>