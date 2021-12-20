import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'welcome',
        component: WelcomePage
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router