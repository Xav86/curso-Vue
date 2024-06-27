<template>
    <div class="cadastro">
        <h4>Rota pai</h4>
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome">
        <input type="email" name="email" id="email" placeholder="Digite seu email">
        <button>Enviar</button>
        <h4>{{ parametroPassado }}</h4>
        <router-view/>
    </div>
</template>

<script>
export default {
    created() {
        // console.log("TESTEEE");
        // console.log(this.$route.params.numero);
        // this.parametroPassado = this.$route.params.numero;
    },
    data() {
        return {
            parametroPassado: "Nada"
        }
    }

}
</script>
