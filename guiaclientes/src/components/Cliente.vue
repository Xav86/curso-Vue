<template>
    <div id="cliente-descricao">
        <input type="text" v-model="nome">
        <input type="email" :value="email">
        <hr>
        <h2 class="cliente-nome">{{ nome }}</h2>
        <h3>Descrição do cliente: {{ descricao }}</h3>
        <Produto/>
    </div>

</template>

<script>
import Produto from './Produto.vue'

export default {
    data() {
        return {
            nome: "Gustavo",
            numero: "2346-25234",
            email: "gustavo@gustavo.com",
            idade: 19,
            descricao: "Lorem ipsum dolor sit amet"
        }
    },
    name: 'Cliente',
    components: {
        Produto
    }
}
</script>

<style scoped>
    #cliente-descricao {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f2f2f2;
    }

    .cliente-nome {
        color: #2c2ca0;
    }
</style>