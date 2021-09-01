<template>
    <button :style="{ backgroundColor: color }" class="btn" @click="onClick()">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: 'Add',
        },
        color: {
            type: String,
            default: 'blue',
        },
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        },
    },
};
</script>

<style></style>
