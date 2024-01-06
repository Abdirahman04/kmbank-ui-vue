<template>
    <div class="withdraw container">
        <button class="btn btn-danger" @click="back">Back</button>
        <div class="row">
            <div class="row">
                <div class="col lavender"><h4>How much do you want to withdraw?</h4></div>
            </div>
        </div>
        <div class="row">
            <div class="row">
                <form class="p-3 border border-3 border-primary">
                    <div class="row form-floating">
                        <input type="number" id="amount" class="form-control" placeholder="amount" v-model="fetchBody.balance">
                        <label for="amount" class="form-label">Enter amount</label>
                    </div>
                    <div class="row form-floating">
                        <input type="password" id="pass" class="form-control" placeholder="password" v-model="form.password">
                        <label for="pass" class="form-label">Enter password</label>
                    </div>
                    <button id="btn" class="btn btn-info" @click.prevent="withdrawAmount(form,fetchBody)">Withdraw</button>
                </form>
            </div>
            <div class="row"><div class="col"><h3 id="err"></h3></div></div>
        </div>
    </div>
</template>

<script>
import { login,withdraw,getUserByAccNumberRaw,getUserByAccNumber } from '@/utils/apiService.js'

export default {
    data() {
        return {
            form: {
                accountNumber: JSON.parse(localStorage.getItem('accountNumber')),
                password: ''
            },
            fetchBody: {
                id: JSON.parse(localStorage.getItem('userData')).id,
                balance: ''
            }
        };
    },
    methods: {
        back() {
            this.$router.push({ name: 'dashboard' })
        },
        withdrawAmount(loginBody, withdrawBody) {
            login(loginBody).then(data => {
                if(data) {
                    withdraw(withdrawBody).then(res => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! Status: ${res.status}`);
                        }
                        getUserByAccNumber(this.form.accountNumber).then(data => {
                            localStorage.setItem('userData', JSON.stringify(data));
                            getUserByAccNumberRaw(this.form .accountNumber).then(data2 => {
                                localStorage.setItem('userDataRaw', JSON.stringify(data2));
                                this.$router.push({ name: 'dashboard' });
                            })
                        })
                    })
                }
                else alert('Incorrect password!');
            })
        },
    }
}
</script>