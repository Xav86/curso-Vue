<template>
    <div id="cliente-descricao">
        
        <h4>Nome: {{ cliente.nome }}</h4>
        <hr>
        <p>Email: {{ cliente.email }}</p>
        <p>Idade: {{ cliente.idade }}</p>
        <Produto/>
    </div>

</template>

<script>
import Produto from './Produto.vue'

export default {
    data() {
        return {
            numero: "2346-25234",
            descricao: "Lorem ipsum dolor sit amet"
        }
    },
    name: 'Cliente',
    components: {
        Produto
    },
    props: {
        cliente: Object
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