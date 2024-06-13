<template>
    <div id="produto-container">
        <h3>Produto</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorum!</p>
        <input type="text" placeholder="Preço" value="100">
        <button>Comprar!</button>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    #produto-container {
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>