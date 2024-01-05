<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title"><h3>{{ title }}</h3></div>
            <div class="card-text"><p>{{ text }}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>