import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import DataStore from "@/global/storage/index";

Vue.use(Router);
Vue.use(NProgress);

const appRouter = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  const TOKEN = DataStore.getToken();
  if( !TOKEN && to.name !== "Login") {
    next({ name: "Login", replace: true});
    return
  }
  if( TOKEN ) {
    if(to.name === "Login") {
      next({ name: "Article", replace: true });
      return
    }
  }
  next();
});

appRouter.afterEach(() => {
  NProgress.done();
});

export default appRouter;
