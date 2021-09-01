<template>
    <div class="demo-slot">
        <slot></slot>
        <p>{{ todos | toString }}</p>
        <p>{{ todoDone | toString }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'DemoSlot',
    computed: {
        ...mapGetters({ todoDone: 'doneTodos' }),
        todos() {
            return this.$store.state.todos;
        },
    },
    filters: {
        toString(array) {
            if (array.length <= 0) return '';
            return array.map((todo) => todo.text).join(' - ');
        },
    },
};
</script>

<style></style>
