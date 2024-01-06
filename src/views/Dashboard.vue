<template>
  <div class="dashboard container" v-if="accountNumber">
    <div class="row">
        <h1 class="col mint">Dashboard</h1>
        <button class="btn btn-danger col-1 m-2" @click="logout">Logout</button>
    </div>
    <div class="card dashboard-card">
        <div class="card-body">
            <div class="card-title">
                <h3>{{ user.firstName }} {{ user.lastName }}</h3>
            </div>
            <div class="card-text">
                <table class="table">
                    <tr>
                        <td class="h4 tag">Account Number</td>
                        <td class="h5 taglet">{{ user.accountNumber }}</td>
                    </tr>
                    <tr>
                        <td class="h4 tag">Email</td>
                        <td class="h5 taglet">{{ user.email }}</td>
                    </tr>
                    <tr>
                        <td class="h4 tag">Balance</td>
                        <td class="h5 taglet">{{ user.balance }}</td>
                    </tr>
                </table>
            </div>
            <button class="btn btn-lg btn-warning m-2" @click="profile">Profile</button>
            <div class="container">
              <div class="row">
                  <div class="col" v-for="card in cards" :key="card.id">
                      <button class="btn btn-info" @click="redirect(card.id)">{{ card.title }}</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
  <h1 class="text-danger" v-else>You need to login first!</h1>
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
        {id: 1, title: 'Deposit'},
        {id: 2, title: 'Withdraw'},
        {id: 3, title: 'Transfer'},
        {id: 4, title: 'Basic transactions'},
        {id: 5, title: 'Transfer transactions'},
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
        else if (id === 4) this.$router.push({ name: 'basictransactions' });
        else this.$router.push({ name: 'transfertransactions' });
    },
    profile() {
        this.$router.push({ name: 'profile' });
    },
  },
};
</script>

<style scoped>
  .dashboard-card {
    background: linear-gradient(to bottom right, #f44, #555);
    color: white;
  }
  .btn-card {
    background: linear-gradient(#aaa,#bbb,#ccc,#ddd);
  }
  .tag {
    font-family: algerian;
  }
  .taglet {
    font-family: calibri;
  }
</style>