<template>
    <div class="nav">
        <router-link :to="{ name: 'Home', hash: '#bottom' }">Home</router-link>
        | <router-link :to="{ name: 'Invoice' }">Invoice</router-link> |
        <router-link :to="{ name: 'About', params: { id: '123' } }"
            >About</router-link
        >
    </div>
</template>

<script>
export default {
    name: 'TheNavigation',
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    a {
        text-decoration: none;
        color: black;
        display: inline-block;
        padding: 0 10px;
        transition: all 0.5s ease-in-out;
        &:hover {
            color: red;
            text-decoration: underline;
        }
    }
    .router-link-exact-active {
        color: blueviolet;
    }
}
</style>
