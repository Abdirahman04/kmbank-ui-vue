<template>
  <div class="statistics container">
    <h2 class="sunflower">Statistics Page</h2>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col">
              <card ctitle="No. of Users" :ctext="statistics.users"></card>
            </div>
            <div class="col">
              <card ctitle="Total Money" :ctext="statistics.amount"></card>
            </div>
          </div>
          <div class="row my-5 p-5">
            <div class="col"><button class="btn btn-lg btn-outline-danger" @click="goToUsers">Users</button></div>
            <div class="col"><button class="btn btn-lg btn-outline-info" @click="goToBasicTransactions">B.Transactions</button></div>
            <div class="col"><button class="btn btn-lg btn-outline-warning" @click="goToTransferTransactions">T.Transactions</button></div>
          </div>
        </div>
        <div class="col-4">
          <card ctitle="No. of transactions" :ctext="statistics.transactions"></card>
          <card ctitle="No. of B.transactions" :ctext="statistics.basic"></card>
          <card ctitle="No. of deposits" :ctext="statistics.deposit"></card>
          <card ctitle="No. of withdrawals" :ctext="statistics.withdraw"></card>
          <card ctitle="No. of T.transactions" :ctext="statistics.transfer"></card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
import { getStatistics } from '@/utils/apiService.js'

export default {
  data() {
    return {
      statistics: {
        users: '',
        amount: '',
        basic: '',
        transfer: '',
        transactions: '',
        deposit: '',
        withdraw: ''
      }
    };
  },
  components: {
    'card': Card
  },
  methods: {
    getData() {
      getStatistics().then(data => {
        this.statistics.users = data.numberOfUsers;
        this.statistics.amount = data.totalAmount;
        this.statistics.basic = data.numberOfBasicTransactions;
        this.statistics.transfer = data.numberOfTransferTransactions;
        this.statistics.transactions = data.numberOfTransactions;
        this.statistics.deposit = data.numberOfDeposits;
        this.statistics.withdraw = data.numberOfWithdrawals;
      })
    },
    goToUsers() {
      this.$router.push({ name: 'usersdata' });
    },
    goToBasicTransactions() {
      this.$router.push({ name: 'basictransactionsdata' });
    },
    goToTransferTransactions() {
      this.$router.push({ name: 'transfertransactionsdata' });
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style scoped>
  .statistics {
    height: 80%;
  }
</style>