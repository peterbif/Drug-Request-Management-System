import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: 'login',
  // },

  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },

    
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    beforeEnter:((to, from, next) => {
      //  alert(localStorage.getItem('auth'))
        if(!localStorage.getItem('auth')){ 
          // if(!store.state.token){ 
        router.push({
          path: '/login',
        })
      }else{
     return    next();
      }

    })
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/pages/user.vue'),
    beforeEnter:((to, from, next) => {
      //  alert(localStorage.getItem('auth'))
        if(!localStorage.getItem('auth')){ 
          // if(!store.state.token){ 
        router.push({
          path: '/login',
        })
      }else{
     return    next();
      }

    })
  },


  {
    path: '/viewdrug',
    name: 'viewdrug',
    component: () => import('@/views/pages/viewdrug.vue'),
  },

  // {
  //   path: '/staffcategory',
  //   name: 'staffcategory',
  //   component: () => import('@/views/pages/StaffCategory'),
  //   beforeEnter:((to, from, next) => {
  //     //  alert(localStorage.getItem('auth'))
  //       if(!localStorage.getItem('auth')){ 
  //         // if(!store.state.token){ 
  //       router.push({
  //         path: '/login',
  //       })
  //     }else{
  //    return    next();
  //     }

  //   })
  // },

  {
    path: '/drug',
    name: 'drug',
    component: () => import('@/views/pages/drug.vue'),
    beforeEnter:((to, from, next) => {
      //  alert(localStorage.getItem('auth'))
        if(!localStorage.getItem('auth')){ 
          // if(!store.state.token){ 
        router.push({
          path: '/login',
        })
      }else{
     return    next();
      }

    })
  },

 
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/pages/Logout.vue'), 
    
  },

  





 

  // {
  //   path: '/typography',
  //   name: 'typography',
  //   component: () => import('@/views/typography/Typography.vue'),
  // },
  // {
  //   path: '/icons',
  //   name: 'icons',
  //   component: () => import('@/views/icons/Icons.vue'),
  // },
  // {
  //   path: '/cards',
  //   name: 'cards',
  //   component: () => import('@/views/cards/Card.vue'),
  // },
  // {
  //   path: '/simple-table',
  //   name: 'simple-table',
  //   component: () => import('@/views/simple-table/SimpleTable.vue'),
  // },
  // {
  //   path: '/form-layouts',
  //   name: 'form-layouts',
  //   component: () => import('@/views/form-layouts/FormLayouts.vue'),
  // },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: () => import('@/views/pages/account-settings/profile.vue'),
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },


  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('@/views/pages/resetpassword.vue'),
    meta: {
      layout: 'blank',
    },
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import('@/views/pages/Register.vue'),
  //   meta: {
  //     layout: 'blank',
  //   },
  // },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEnter;(to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
 
  const authRequired = !publicPages.includes(to.path);
  // const authRequired2 = publicPages2.includes(to.path);
  const loggedIn = localStorage.getItem('auth');

  if (authRequired && !loggedIn) {
    next('/login');
  }else{

  next();
  }
}


export default router
