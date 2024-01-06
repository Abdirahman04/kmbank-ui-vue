<template>
    <div class="users-data container mt-5">
    <button class="btn btn-danger" @click="back">Back</button>
        <h1 class="text-warning">USERS</h1>
        <table class="table table-striped table-bordered border border-2 border-info">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Account number</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.accountNumber }}</td>
                    <td>{{ user.balance }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getUsers } from '@/utils/apiService.js'

export default {
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            getUsers().then(data => this.users = data);
        },
        back() {
            this.$router.push({ name: 'statistics' });
        },
    },
}
</script>