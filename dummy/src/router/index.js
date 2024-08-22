import Home from "@/pages/Home.vue";
import JobDetails from "@/pages/JobDetails.vue";
import JobsPage from "@/pages/JobsPage.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import useAuthStore from "@/stores/AuthStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:"home",
      path:"/",
      component:Home
    },
    {
      name:"Login",
      path:"/Login",
      component:Login
    },
    {
      name:"Register",
      path:"/Register",
      component:Register
    },
    {
      name:"Jobs",
      path:"/jobs",
      component:JobsPage,
      meta:{
        requiresAuth:true
      }
    },
    {
      name:"JobDetails",
      path:"/Job/:id",
      component:JobDetails,
      meta:{
        requiresAuth:true
      }
    }
  ],
});
router.beforeEach((to,from,next)=>{
  const AuthStore = useAuthStore()
  if(to.meta.requiresAuth && !AuthStore.isAuthenticated){
    next("/Login")
  }else{
    next();
  }
})

export default router;
