<template>
    <div class="register container">
        <h1>REGISTER</h1>
        <form id="registerForm" class="border border-3 p-3 m-2 border-primary">
            <div class="row g-4">
                <div class="col mb-3 form-floating">
                    <input type="text" id="fname" class="form-control" placeholder="first name" required>
                    <label for="fname" class="form-label px-4">First name</label>
                </div>
                <div class="col mb-3 form-floating">
                    <input type="text" id="lname" class="form-control" placeholder="last name" required>
                    <label for="lname" class="form-label px-4">Last name</label>
                </div>
            </div>
            <div class="mb-3 form-floating">
                <input type="date" id="dob" class="form-control" placeholder="00-00-0000" required>
                <label for="dob" class="form-label">Date of birth</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" id="email" class="form-control" placeholder="email address" required>
                <label for="email" class="form-label">Email address</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" id="acc" class="form-control" placeholder="000000000" required>
                <label for="acc" class="form-label">Account number</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="password" id="pass" class="form-control" placeholder="password" required>
                <label for="pass" class="form-label">Password</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="password" id="cpass" class="form-control" placeholder="confirm password" required>
                <label for="cpass" class="form-label">Confirm password</label>
            </div>
            <button id="btn" class="btn btn-lg btn-info">Register</button>
        </form>

        <h3 id="err"></h3>
    </div>
</template>