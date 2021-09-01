import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true,
    },
    {
        path: '/about/:id',
        name: 'About',
        props: true,
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
        beforeEnter: (to, from, next) => {
            const exits = '123';
            if (exits === to.params.id) {
                next();
            } else {
                next({ name: 'NotFound' });
            }
        },
    },
    {
        path: '/user',
        name: 'User',
        component: () =>
            import(/* webpackChunkName: "User" */ '../views/User.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/invoice',
        name: 'Invoice',
        component: () =>
            import(/* webpackChunkName: "Invoice" */ '../views/Invoices.vue'),
    },
    {
        path: '/404',
        alias: '*',
        name: 'NotFound',
        component: () =>
            import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
    },
];

const router = new Router({
    mode: 'history',
    // linkExactActiveClass: 'vue-active-class',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {};
            if (to.hash) {
                position.selector = to.hash;
                position.behavior = 'smooth';
                console.log(position);
                if (document.querySelector(to.hash)) return position;
            }
            return false;
        }
    },
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // if (!auth.loggedIn()) {
        if (this.task === 1) {
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
