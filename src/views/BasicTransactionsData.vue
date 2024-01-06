<template>
    <div class="basic-transactions-data container">
        <button class="btn btn-danger" @click="back">Back</button>
        <h1 class="text-info">BASIC TRANSACTIONS</h1>
        <table class="table table-striped table-bordered border border-2 border-primary">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>User ID</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="trans in transactions" :key="trans.id">
                    <td>{{ trans.id }}</td>
                    <td>{{ trans.userId }}</td>
                    <td>{{ trans.transactionType }}</td>
                    <td>{{ trans.balance }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getBasicTransactions } from '@/utils/apiService.js'

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
            getBasicTransactions().then(data => this.transactions = data);
        },
        back() {
            this.$router.push({ name: 'statistics' });
        },
    },
}
</script>