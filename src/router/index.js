import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Deposit from '@/views/transactions/Deposit.vue'
import Withdraw from '@/views/transactions/Withdraw.vue'
import Transfer from '@/views/transactions/Transfer.vue'
import BasicTransactions from '@/views/transactions/BasicTransactions'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/deposit', name: 'deposit', component: Deposit },
  { path: '/withdraw', name: 'withdraw', component: Withdraw },
  { path: '/transfer', name: 'transfer', component: Transfer },
  { path: '/basictransactions', name: 'basictransactions', component: BasicTransactions },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
