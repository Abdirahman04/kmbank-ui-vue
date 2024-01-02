<template>
  <div class="dashboard container">
    <div class="row">
        <h1 class="col">Dashboard</h1>
        <button class="btn btn-danger col-1" @click="logout">Logout</button>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                <h3>{{ user.firstName }} {{ user.lastName }}</h3>
            </div>
            <div class="card-text">
                <table>
                    <tr>
                        <td>Age</td>
                        <td>{{ user.age }}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{ user.email }}</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>{{ user.balance }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getUserByAccNumber } from "@/utils/apiService.js";

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        balance: ''
      },
      accountNumber: '',
    };
  },
  mounted() {
    this.accountNumber = localStorage.getItem('accountNumber');
    this.getUserInfo(this.accountNumber);
    console.log('hello');
  },
  methods: {
    getUserInfo(acc) {
        getUserByAccNumber(acc).then(data => this.user = data);
    },
    logout() {
        localStorage.clear();
        this.$router.push({ name: 'home' });
    },
  },
};
</script>
