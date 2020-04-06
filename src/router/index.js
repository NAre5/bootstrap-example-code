import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import recipePage from "../views/recipePage.vue";
import notFound from "../views/notFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/recipe/:author/:recipeName",
    name: "recipePage",
    component: recipePage,
    props: true
  },
  {
    path: "/notFound",
    name: "notFound",
    component: notFound
  },
  {
    // will match everything
    path: "*",
    redirect: { name: "notFound" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
