<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h2 class="card-header-title is-size-2">Registro de usuário:</h2>
            </div>
            <div class="card-content">
                <label for="">Nome</label>
                <input class="input" type="text" placeholder="Nome do usuáiro" v-model="name" />
                <label for="">Email</label>
                <input class="input" type="email" placeholder="email@email.com" v-model="email" />
                <label for="">Senha</label>
                <input class="input" type="password" placeholder="******" v-model="password" />
            </div>
            <div class="card-footer p-3 is-end">
                <button class="button is-success card-footer-item" @click="register">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            console.log(this.name);
            console.log(this.email);
            console.log(this.password);
        }

    }
}
</script>

<style>

</style>