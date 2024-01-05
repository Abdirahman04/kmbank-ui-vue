<template>
    <div class="profile container">
    <button class="btn btn-danger" @click="back">Back</button>
        <h1>Profile</h1>
        <div class="card">
            <div class="card-body">
                <div class="card-title"><h2>{{ user.id }}</h2></div>
                <div class="card-text">
                    <h3>Name:             {{ user.fname }} {{ user.lname }}</h3>
                    <h3>Account number:   {{ user.accNumber }}</h3>
                    <h3>Age:              {{ user.age }}</h3>
                    <h3>Email address:    {{ user.email }}</h3>
                    <h3>Password:         **********</h3>
                    <h3 class="text-danger">Balance:          {{ user.balance }}</h3>
                </div>
                <div class="row">
                    <button class="btn btn-outline-info col-3">Edit</button>
                    <button class="btn btn-outline-danger col-3">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                id: '',
                accNumber: '',
                fname: '',
                lname: '',
                age: '',
                dob: '',
                email: '',
                pass: '',
                amount: ''
            }
        };
    },
    mounted() {
        this.userData();
    },
    methods: {
        userData() {
            const userRaw = JSON.parse(localStorage.getItem('userDataRaw'));
            const userFine = JSON.parse(localStorage.getItem('userData'));
            const user = {
                id: userRaw.id,
                accNumber: userRaw.accountNumber,
                fname: userRaw.firstName,
                lname: userRaw.lastName,
                age: userFine.age,
                dob: userRaw.dob,
                email: userRaw.email,
                pass: userRaw.password,
                amount: userFine.balance
            };
            this.user = user;
        },
        back() {
            this.$router.push({ name: 'dashboard' });
        },
    },
}
</script>