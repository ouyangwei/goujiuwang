import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import store from '../store'



// 路由表,设置路由切换   vue-router原理：vue-router会去监听浏览器地址栏的变化，当地址栏变化之后进行组件切换
let routes = [
    {
        path:'/',
        name:'home',
        component:() => import('../components/pages/Home/Home.vue')
    },
    {
        path:'/home',
        name:'home',
        component:() => import('../components/pages/Home/Home.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:() => import('../components/pages/Cart/Cart.vue'),
        
    },
    {
        path:'/welfare',
        name:'welfare',
        component:() => import('../components/pages/Welfare/Welfare.vue'),
        
    },
    {
        path:'/classify',
        name:'classify',
        component:() => import('../components/pages/Classify/Classify.vue'),
        
    },
    {
        path:'/mine',
        name:'mine',
        component:()=>import('../components/pages/Mine/Mine.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../components/pages/Login/Login.vue')
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('../components/pages/Register/Register.vue')
    },
    {
        path:'/forget',
        name:'forget',
        component:()=>import('../components/pages/Forget/Forget.vue')
    },
    {path:"*",redirect:'/'} //默认跳转
]

const router = new VueRouter({
    mode:'history',
    routes
})

// 全局路由守卫
// let need_user_state = ['mine']
// router.beforeEach((to,from,next)=>{
//     let need_us = need_user_state.some(name=>to.name === name)
//     if(need_us && !store.state.commons.user_state ){
//         next('login');
//         return false
//     }
//     next();
// })

export default router



// import Vue from 'vue'
// import VueRouter from 'vue-router'
// // import store from '../store'
// Vue.use(VueRouter)

// import AppHome from '../components/pages/Home/Home.vue'
// import AppConcat from '../components/pages/Concat/Concat.vue'
// import AppMine from '../components/pages/Mine/Mine.vue'
// import AppLogin from '../components/pages/Login/Login.vue'

// let routes = [
//     {
//         path:'/',
//         name:'home',
//         component:AppHome
//     },
//     {
//         path:'/concat',
//         name:'concat',
//         component:AppConcat
//     },
//     {
//         path:'/mine',
//         name:'mine',
//         component:AppMine
//     },
//     {
//         path:'/login',
//         name:'login',
//         component:AppLogin
//     }
// ]


// const router = new VueRouter({
//     mode:'history',
//     routes
// })

// // router.beforeEach((to,from,next) => {
// //     let need_user_state = ['mine']
// //     let need_us = need_user_state.some(function(name){
// //         return name === to.name
// //     })
// //     if(need_us && !store.state.commons.user_state){
// //         next('login')
// //         return false
// //     }
// //     next()
// // })

// export default router