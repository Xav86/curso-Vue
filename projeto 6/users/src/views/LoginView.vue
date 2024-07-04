<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h2 class="card-header-title is-size-2">Login</h2>
            </div>
            <div class="card-content">
                <div v-if="error != undefined">
                    <div class="notification is-danger  is-light">
                    <p>{{ error }}</p>
                    </div>
                </div>
                <label for="">Email</label>
                <input class="input" type="email" placeholder="email@email.com" v-model="email" />
                <label for="">Senha</label>
                <input class="input" type="password" placeholder="******" v-model="password" />
            </div>
            <div class="card-footer p-3 is-end">
                <button class="button is-success card-footer-item" @click="login">Logar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: undefined,
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:8686/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                console.log(res)
                // if (res.data.status == false){
                //     let msgErro = res.data.err;
                //     console.log(msgErro);
                //     if(!msgErro) {
                //         this.error = 'Error X('
                //     } else {
                //         this.error = msgErro;
                //     }
                // } else {
                    localStorage.setItem('token', res.data.token);
                    this.$router.push({name: 'home'});
                // }
            }).catch(err => {
                let msgErro = err.response.data.err;
                console.log(msgErro);
                if(!msgErro) {
                    this.error = 'Error X('
                } else {
                    this.error = msgErro;
                }
            })
        }

    }
}
</script>

<style>

</style>