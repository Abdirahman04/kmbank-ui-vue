<template>
    <div class="transfer-transaction container">
        <h1>Transfer Transactions</h1>
        <button class="btn btn-danger" @click="back">Back</button>
        <div class="row">
            <div class="card col-4 bg-dark text-info" v-for="transaction in list" :key="transaction.id">
                <div class="card-body">
                    <div class="card-title"><h3>ID: {{ transaction.id }}</h3></div>
                    <div class="card-text fw-bold">
                        <p>Sender ID: {{ transaction.senderId }}</p>
                        <p>Recipient ID: {{ transaction.recipientId }}</p>
                        <p class="text-warning">{{ transaction.balance }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTransferTransactionById } from '@/utils/apiService.js'

export default {
    data() {
        return {
            list: null,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const id = JSON.parse(localStorage.getItem('userData')).id;
            getTransferTransactionById(id).then(data => this.list = data);
        },
        back() {
            this.$router.push({ name: 'dashboard' });
        },
    },
}
</script>