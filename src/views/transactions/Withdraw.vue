<template>
    <div class="withdraw container">
        <button class="btn btn-danger" @click="back">Back</button>
        <div class="row">
            <div class="row">
                <div class="col"><h4>How much do you want to withdraw?</h4></div>
            </div>
        </div>
        <div class="row">
            <div class="row">
                <form class="p-3 border border-3 border-primary">
                    <div class="row form-floating">
                        <input type="number" id="amount" class="form-control" placeholder="amount">
                        <label for="amount" class="form-label">Enter amount</label>
                    </div>
                    <div class="row form-floating">
                        <input type="password" id="pass" class="form-control" placeholder="password">
                        <label for="pass" class="form-label">Enter password</label>
                    </div>
                    <button id="btn" class="btn btn-info">Withdraw</button>
                </form>
            </div>
            <div class="row"><div class="col"><h3 id="err"></h3></div></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>