<template>
    <div class="card border-primary d-card">
        <div class="card-body">
            <div class="card-title text-center"><h3>{{ ctitle }}</h3></div>
            <div class="card-text text-center"><p class="h4"><span class="text-warning">{{ ctext }}</span></p></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ctitle: {
            type: [String, Number],
            required: true
        },
        ctext: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .d-card {
        background: linear-gradient(to bottom right, #6da5c0, #294d61);
    }
</style>