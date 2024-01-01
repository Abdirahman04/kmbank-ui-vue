<template>
    <div class="dashboard container">
        <h1>Dashboard</h1>
        <div
            class="card bg-dark my-1 col-8"
            v-for="user in list"
            :key="user.id"
            :v-if="!list"
        >
            <div class="card-body">
                <div class="card-title text-warning"><h2>{{ user.firstName }} {{ user.lastName }}</h2></div>
                <div class="card-body text-primary">
                    <h4>Age: {{ user.age }}</h4>
                    <h4>Email: {{ user.email }}</h4>
                    <h4 class="text-danger">Amount: {{ user.balance }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUsers } from '@/utils/apiService.js';

export default {
    data() {
        return {
            list: null,
        };
    },
    async created() {
        await getUsers().then(data => {
            this.list = data;
        })
    },
}
</script>