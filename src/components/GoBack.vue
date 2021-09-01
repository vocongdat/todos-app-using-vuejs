<template>
    <div class="goback">
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script>
export default {
    name: 'GoBack',
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style></style>
