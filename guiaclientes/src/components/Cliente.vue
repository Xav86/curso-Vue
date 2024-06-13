<template>
    <div id="cliente-descricao">
        <h2 class="cliente-nome">Cliente aqui!</h2>
        <h3>Descrição do cliente: Bla Bla Bla</h3>
        <Produto/>
    </div>

</template>

<script>
import Produto from './Produto.vue'

export default {
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
        color: #2cafc1;
        background-color: #f2f2f2;
    }

    .cliente-nome {
        color: #2c2ca0;
    }
</style>