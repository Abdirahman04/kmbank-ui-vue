<template>
    <div class="transfer container">
        <button class="btn btn-danger" @click="back">Back</button>
        <div class="row">
            <div class="row">
                <div class="col"><h4>Would you like to transfer money?</h4></div>
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
                        <input type="number" id="recipient" class="form-control" placeholder="recipient" v-model="fetchBody.recipientId">
                        <label for="recipient" class="form-label">Who do you want to transfer to</label>
                    </div>
                    <div class="row form-floating">
                        <input type="password" id="pass" class="form-control" placeholder="password" v-model="form.password">
                        <label for="pass" class="form-label">Enter password</label>
                    </div>
                    <button id="btn" class="btn btn-info" @click.prevent="transferAmount(form,fetchBody)">Transfer</button>
                </form>
            </div>
            <div class="row"><div class="col"><h3 id="err"></h3></div></div>
        </div>
    </div>
</template>

<script>
import { send,login,getUserByAccNumberRaw,getUserByAccNumber } from '@/utils/apiService.js'

export default {
    data() {
        return {
            form: {
                accountNumber: JSON.parse(localStorage.getItem('accountNumber')),
                password: ''
            },
            fetchBody: {
                senderId: JSON.parse(localStorage.getItem('userData')).id,
                recipientId: '',
                balance: ''
            }
        };
    },
    methods: {
        back() {
            this.$router.push({ name: 'dashboard' })
        },
        transferAmount(loginBody, transferBody) {
            console.log(transferBody);
            login(loginBody).then(data => {
                if(data) {
                    getUserByAccNumberRaw(this.fetchBody.recipientId).then(data => {
                        const sendBody = {
                            senderId: this.fetchBody.senderId,
                            recipientId: data.id,
                            balance: this.fetchBody.balance
                        }

                        send(sendBody).then(res => {
                            console.log(res);
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
                    }).catch(err => alert(err))
                }
                else alert('Incorrect password!');
            })
        },
    }
}
</script>