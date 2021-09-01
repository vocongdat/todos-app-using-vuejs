<template>
    <div>
        <button @click="increment">Increate</button>
        <button @click="deCreate">Decreate</button>
        <input type="number" v-model="data" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Count',
    data() {
        return {
            data: 0,
        };
    },
    methods: {
        // ...mapMutations({
        //     inCreate: 'INCREMENT',
        // }),
        // () {
        //     if (this.data === 0) return;
        //     this.$store.commit('', Number(this.data));
        // },
        deCreate() {
            this.$store.state.count--;
        },
        ...mapActions({
            increment: 'increment',
        }),
    },
};
</script>

<style></style>
