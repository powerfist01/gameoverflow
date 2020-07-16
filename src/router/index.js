import Vue from "vue";
import VueRouter from "vue-router";
import News from "../views/News.vue";
import Index from "../components/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/blogs",
    name: "Blogs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blogs.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
