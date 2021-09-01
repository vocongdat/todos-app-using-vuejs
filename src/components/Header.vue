<template>
    <header>
        <h1>{{ title }}</h1>
        <p>{{ $t('addTask') }}</p>
        <Button
            @btn-click="$emit('toggle-add-task')"
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'pink'"
        />
    </header>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Hello World',
        },
        showAddTask: Boolean,
    },
    components: {
        Button,
    },
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 20px;
}
</style>
