import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Statistics from "@/views/Statistics.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Deposit from "@/views/transactions/Deposit.vue";
import Withdraw from "@/views/transactions/Withdraw.vue";
import Transfer from "@/views/transactions/Transfer.vue";
import BasicTransactions from "@/views/transactions/BasicTransactions";
import TransferTransactions from "@/views/transactions/TransferTransactions";
import Profile from "@/views/Profile";
import UsersData from "@/views/UsersData";
import BasicTransactionsData from '@/views/BasicTransactionsData'
import TransferTransactionsData from '@/views/TransferTransactionsData'

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/statistics", name: "statistics", component: Statistics },
  { path: "/register", name: "register", component: Register },
  { path: "/login", name: "login", component: Login },
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/deposit", name: "deposit", component: Deposit },
  { path: "/withdraw", name: "withdraw", component: Withdraw },
  { path: "/transfer", name: "transfer", component: Transfer },
  {
    path: "/basictransactions",
    name: "basictransactions",
    component: BasicTransactions,
  },
  {
    path: "/transfertransactions",
    name: "transfertransactions",
    component: TransferTransactions,
  },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/usersdata", name: "usersdata", component: UsersData },
  { path: "/basictransactionsdata", name: "basictransactionsdata", component: BasicTransactionsData },
  { path: "/transfertransactionsdata", name: "transfertransactionsdata", component: TransferTransactionsData },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
