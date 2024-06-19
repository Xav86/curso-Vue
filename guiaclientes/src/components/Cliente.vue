<template>
    <div :class="{'cliente-descricao': !isPremium, 'cliente-premium': isPremium}">
        
        <h4>Nome: {{ cliente.nome }}</h4>
        <hr>
        <p>Email: {{ cliente.email }}</p>
        <p v-if="showIdade === true">Idade: {{ cliente.idade }}</p>
        <p v-else>O usuário não quis mostrar a idade </p>
        <!-- <p v-show="showIdade === true">Idade: {{ cliente.idade }}</p> -->
        <!-- <p v-if="showIdade === true">Idade: {{ cliente.idade }}</p> 
        <p v-else-if="showIdade === false">Idade: {{ cliente.idade }}</p> -->
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
            isPremium: false
        }
    },
    name: 'Cliente',
    components: {
        Produto
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    }
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
</style>