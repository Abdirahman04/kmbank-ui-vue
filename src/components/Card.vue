<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title"><h3>{{ ctitle }}</h3></div>
            <div class="card-text"><p class="h5">==&gt; <span class="text-danger">{{ ctext }}</span></p></div>
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