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
                <table class="table">
                    <tr>
                        <td>Account Number</td>
                        <td>{{ user.accountNumber }}</td>
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
            <div class="container">
              <div class="row">
                  <div class="col-4" v-for="card in cards" :key="card.id">
                      <div class="card btn btn-outline-primary" @click="redirect(card.id)">
                          <div class="card-body">
                              <div class="card-title">
                                  <h3 class="text-warning">{{ card.title }}</h3>
                              </div>
                              <div class="card-text">
                                  <p>{{ card.text }}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
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
        accountNumber: '',
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        password: '',
        balance: ''
      },
      accountNumber: '',
      cards: [
        {id: 1, title: 'Deposit', text: 'You can deposit any amount from 10 shillings'},
        {id: 2, title: 'Withdraw', text: 'You can withdraw any amount from 10 shillings'},
        {id: 3, title: 'Transfer', text: 'You can transfer amount to a different user'},
        {id: 4, title: 'Basic transactions', text: 'View your basic transactions'},
        {id: 5, title: 'Transfer transactions', text: 'view your transfer transactions'},
      ],
    };
  },
  mounted() {
    this.accountNumber = localStorage.getItem('accountNumber');
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
        const user = localStorage.getItem('userData');
        this.user = JSON.parse(user);
    },
    logout() {
        localStorage.clear();
        this.$router.push({ name: 'home' });
    },
    redirect(id) {
        if (id === 1) this.$router.push({ name: 'deposit' });
        else if (id === 2) this.$router.push({ name: 'withdraw' });
        else if (id === 3) this.$router.push({ name: 'transfer' });
        else this.$router.push({ name: 'basictransactions' });
    },
  },
};
</script>
