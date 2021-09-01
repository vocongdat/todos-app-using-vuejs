<template>
    <footer>
        <p>Copyright &copy; 2021</p>
        <TheNavigation />
        <p id="home"></p>
    </footer>
</template>

<script>
import TheNavigation from './TheNavigation.vue';

export default {
    name: 'Footer',
    components: {
        TheNavigation,
    },
};
</script>

<style lang="scss" scoped>
a {
    color: #333;
}
footer {
    margin-top: 30px;
    text-align: center;
}
</style>
