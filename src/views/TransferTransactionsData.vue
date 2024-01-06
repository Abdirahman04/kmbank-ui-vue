<template>
    <div class="basic-transactions-data container">
        <button class="btn btn-danger" @click="back">Back</button>
        <h1 class="text-primary">TRANSFER TRANSACTIONS</h1>
        <table class="table table-striped table-bordered border border-2 border-danger">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Sender ID</th>
                    <th>Recipient ID</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="trans in transactions" :key="trans.id">
                    <td>{{ trans.id }}</td>
                    <td>{{ trans.senderId }}</td>
                    <td>{{ trans.recipientId }}</td>
                    <td>{{ trans.balance }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getTransferTransactions } from '@/utils/apiService.js'

export default {
    data() {
        return {
            transactions: []
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            getTransferTransactions().then(data => this.transactions = data);
        },
        back() {
            this.$router.push({ name: 'statistics' });
        },
    },
}
</script>