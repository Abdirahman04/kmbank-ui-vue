<template>
    <div class="update-form container">
        <form id="registerForm" class="border border-3 p-3 border-warning">
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
            <div class="mb-3 form-floating">
                <input type="password" id="cpass" class="form-control" placeholder="confirm password" required>
                <label for="cpass" class="form-label">Confirm password</label>
            </div>
            <button id="btn" class="btn btn-lg btn-info" @click.prevent="register">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .update-form {
        width: 80%;
        position: fixed;
        left: 50px;
        top: 50px;
    }
</style>