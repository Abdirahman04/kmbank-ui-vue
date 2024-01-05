<template>
    <div v-if="isVisible" class="update-form container bg-dark p-3">
        <button class="btn btn-danger" @click="remove">X</button>
        <form id="registerForm" class="border border-3 p-1 border-warning">
            <div class="row g-4">
                <div class="col mb-3 form-floating">
                    <input type="text" id="fname" class="form-control" placeholder="first name" required v-model="form.firstName">
                    <label for="fname" class="form-label px-4">First name</label>
                </div>
                <div class="col mb-3 form-floating">
                    <input type="text" id="lname" class="form-control" placeholder="last name" required v-model="form.lastName">
                    <label for="lname" class="form-label px-4">Last name</label>
                </div>
            </div>
            <div class="mb-3 form-floating">
                <input type="date" id="dob" class="form-control" placeholder="00-00-0000" required v-model="form.dob">
                <label for="dob" class="form-label">Date of birth</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" id="email" class="form-control" placeholder="email address" required v-model="form.email">
                <label for="email" class="form-label">Email address</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" id="acc" class="form-control" placeholder="000000000" required v-model="form.accountNumber">
                <label for="acc" class="form-label">Account number</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="password" id="pass" class="form-control" placeholder="password" required v-model="form.password">
                <label for="pass" class="form-label">Password</label>
            </div>
            <button id="btn" class="btn btn-lg btn-info" @click.prevent="edit">Edit</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        formDefaultData: {
            type: Array,
            required: true
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            form: {
                firstName: this.formDefaultData[0],
                lastName: this.formDefaultData[1],
                dob: this.formDefaultData[2],
                email: this.formDefaultData[3],
                accountNumber: this.formDefaultData[4],
                password: this.formDefaultData[5]
            }
        };
    },
    methods: {
        edit() {
            this.$emit('form-submit',this.form);
        },
        remove() {
            this.$emit('remove');
        },
    },
}
</script>

<style scoped>
    .update-form {
        width: 70%;
        position: fixed;
        left: 150px;
        top: 50px;
        border-radius: 2%;
        box-shadow: 0 0 200px rgba(0,0,0,0.9);
    }
    .disp {
        display: none;
    }
</style>