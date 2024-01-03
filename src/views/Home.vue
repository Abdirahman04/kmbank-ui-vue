<template>
  <div class="home container">
    <h1>Home Page</h1>
    <div class="card my-2" v-for="user in users" :key="user.id">
      <div class="card-body">
        <div class="card-title">
          <h3 class="text-danger">{{ user.firstName }} {{ user.lastName }}</h3>
        </div>
        <div class="card-text">
          <h4>Age:     {{ user.age }}</h4>
          <h4>Email:   {{ user.email }}</h4>
          <h4>Balance: {{  user.balance}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUsers } from '@/utils/apiService.js'

export default {
  data() {
    return {
      users: null
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      getUsers().then(data => this.users = data)
    }
  }
}
</script>
