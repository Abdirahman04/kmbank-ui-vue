<template>
    <div class="login container">
        <div class="row">
            <div>
                <h1 class="sunflower">LOGIN</h1>
            </div>
        </div>
        <div class="row my-5">
            <form class="border border-3 p-3 border-primary">
                <div class="mb-3 form-floating">
                    <input type="text" id="accNumber" class="form-control" placeholder="account number" v-model="form.accountNumber">
                    <label for="accNumber" class="form-label">Account number</label>
                </div>
                <div class="mb-3 form-floating">
                    <input type="password" id="password" class="form-control" placeholder="password" v-model="form.password">
                    <label for="password" class="form-label">Password</label>
                </div>
                <button id="btn" class="btn btn-lg btn-info" @click.prevent="loginCheck">Login</button>
            </form>
            <h3 id="err"></h3>
        </div>
    </div>
</template>

<script>
import { login,getUserByAccNumberRaw,getUserByAccNumber } from '../utils/apiService.js';

export default {
    data() {
        return {
            form: {
                accountNumber: '',
                password: '',
            },
        };
    },
    methods: {
        loginCheck() {
            login(this.form).then(data => {
                if (data) {
                    localStorage.setItem('accountNumber', this.form.accountNumber);
                    getUserByAccNumber(this.form.accountNumber).then(data => {
                        localStorage.setItem('userData', JSON.stringify(data));
                        getUserByAccNumberRaw(this.form .accountNumber).then(data2 => {
                            localStorage.setItem('userDataRaw', JSON.stringify(data2));
                            this.$router.push({ name: 'dashboard' });
                        })
                    })
                }
                else alert('Incorrect credentials')
            });
        },
    },
}
</script>