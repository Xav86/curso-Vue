<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h2 class="card-header-title is-size-2">Registro de usuário:</h2>
            </div>
            <div class="card-content">
                <div v-if="error != undefined">
                    <div class="notification is-danger  is-light">
                    <p>{{ error }}</p>
                    </div>
                </div>
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
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            error: undefined,
        }
    },
    methods: {
        register() {
            axios.post('http://localhost:8686/user', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(res => {
                console.log(res);
                alert('Cadastro efetuado com sucesso!');
                this.$router.push({name: 'home'});
            }).catch(err => {
                let msgErro = err.response.data;
                console.log(msgErro);
                if(!msgErro) {
                    this.error = 'Error X('
                } else {
                    this.error = msgErro;
                }

            });
            // console.log(this.name);
            // console.log(this.email);
            // console.log(this.password);
        }

    }
}
</script>

<style>

</style>