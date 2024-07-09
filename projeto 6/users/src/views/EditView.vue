<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h2 class="card-header-title is-size-2">Edição de usuário:</h2>
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
            </div>
            <div class="card-footer p-3 is-end">
                <button class="button is-success card-footer-item" @click="update">Editar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created() {

        const req = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        axios.get(`http://localhost:8686/user/${this.$route.params.id}`, req).then(res => {
            console.log(res);

            this.name = res.data.name;
            this.email = res.data.email;
            this.id = res.data.ID;

        }).catch(err => {
            console.log(err.response)
            this.$router.push({name: 'Users'});
        });

    },
    data() {
        return {
            name: '',
            email: '',
            id: -1,
            error: undefined,
        }
    },
    methods: {
        update() {

            const req = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.put('http://localhost:8686/user', {
                name: this.name,
                email: this.email,
                id: this.id
            }, req).then(res => {
                console.log(res);
                alert('Edição efetuado com sucesso!');
                this.$router.push({name: 'Users'});
            }).catch(err => {
                let msgErro = err.response.data;
                    console.log(msgErro);
                if(!msgErro) {
                    this.error = 'Error X('
                } else {
                    this.error = msgErro;
                }

            });
        }

    }
}
</script>

<style>

</style>