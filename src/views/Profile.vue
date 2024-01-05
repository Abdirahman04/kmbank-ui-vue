<template>
    <div class="profile container">
    <button class="btn btn-danger" @click="back">Back</button>
        <h1>Profile</h1>
        <div class="card">
            <div class="card-body">
                <div class="card-title"><h2>{{ user.id }}</h2></div>
                <div class="card-text">
                    <h3>Name: {{ user.fname }} {{ user.lname }}</h3>
                    <h3>Account number: {{ user.accNumber }}</h3>
                    <h3>Age: {{ user.age }}</h3>
                    <h3>Email address: {{ user.email }}</h3>
                    <h3>Password: **********</h3>
                    <h3 class="text-danger">Balance: {{ user.amount }}</h3>
                </div>
                <div class="row">
                    <button class="btn btn-outline-info col-3" @click="updateBtn">Edit</button>
                    <button class="btn btn-outline-danger col-3" @click="deleteUser">Delete</button>
                </div>
            </div>
        </div>
        <update-form :formDefaultData="dataArray" :isVisible="isEdit" @form-submit="edit" @remove="updateBtn"></update-form>
    </div>
</template>

<script>
import UpdateForm from '@/components/UpdateForm'
import { updateUser, getUserByAccNumber, getUserByAccNumberRaw, deleteUser } from '@/utils/apiService.js'

export default {
    components: {
        'update-form': UpdateForm,
    },
    computed: {
        dataArray() {
            const userRaw = JSON.parse(localStorage.getItem('userDataRaw'));
            console.log(userRaw);
            return [
                userRaw.firstName,
                userRaw.lastName,
                new Date(userRaw.dob).toLocaleDateString('en-CA'),
                userRaw.email,
                userRaw.accountNumber,
                userRaw.password
            ];
        },
    },
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
            },
            isEdit: false,
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
        edit(formData) {
            console.log(formData);
            updateUser(this.user.id, formData).then(res => {
                if(res.ok) {
                    localStorage.setItem('accountNumber', formData.accountNumber);
                    getUserByAccNumber(formData.accountNumber).then(data => {
                        localStorage.setItem('userData', JSON.stringify(data));
                        getUserByAccNumberRaw(formData.accountNumber).then(data2 => {
                            localStorage.setItem('userDataRaw', JSON.stringify(data2));
                            this.$router.go(0);
                        })
                    })
                }
            })
        },
        updateBtn() {
            this.isEdit = !this.isEdit;
        },
        deleteUser() {
            let bool = confirm("Are you sure you want to delete your account?");
            if(bool) {
                deleteUser(this.user.id).then(res => {
                    if(res.ok) {
                        localStorage.clear();
                        this.$router.push({ name: 'home' });
                    }
                })
            }
        },
    },
}
</script>