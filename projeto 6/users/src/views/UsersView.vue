<template>
    <div class="container">
        <h1>Painel ADM</h1>
        <div class="table-container">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Cargo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.ID">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{processRole(user.role)}}</td>
                        <td class="space-button">
                            <button class="button is-primary">Editar</button>
                            <button class="button is-danger" @click="showhideModal(user.ID)">Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div :class="{modal: true, 'is-active': showModal}">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="card">
                        <header class="card-header align-text">
                            <p class="card-header-title">Deseja deletar este usuário?</p>
                        </header>
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item" @click="deleteUser">confirmar</a>
                            <a href="#" class="card-footer-item" @click="hideModal">cancelar</a>
                        </footer>
                    </div>
                </div>
            <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
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

        axios.get('http://localhost:8686/user', req).then(res => {
            console.log(res);
            this.users = res.data;
        }).catch(err => {
            console.log(err);
        });
        // console.log('Olá')
    },
    data() {
        return {
            users: [],
            showModal: false,
            deleteUserId: -1
        }
    },
    methods: {
        processRole: function(value) {
            if (value === 0) {
                return 'Usuário comun';
            } else if(value === 1) {
                return 'Administrador';
            } else {
                return 'Cargo indefinido'
            }
        },
        hideModal() {
            this.showModal = false;
        },
        showhideModal(id) {
            this.deleteUserId = id;
            this.showModal = true;
        },
        deleteUser() {

            const req = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            }

            axios.delete(`http://localhost:8686/user/${this.deleteUserId}`, req).then(res => {
                alert('Usuário deletado');
                this.showModal = false;
                console.log(res);
                window.location.reload();
            }).catch(err => {
                console.log(err)
                this.showModal = false;
            });
        }
    }
}
</script>

<style scoped>
    .space-button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 7px;
    }

    .align-text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>