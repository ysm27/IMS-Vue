const Login = () => import(/* webpackChunkName: "" */ "@/views/Login.vue");
const Article = () =>
  import(/* webpackChunkName: "article" */ "@/views/Article.vue");
const ArticleCreate = () =>
  import(/* webpackChunkName: "article" */ "@/views/ArticleCreate.vue");
const ArticleEdit = () =>
  import(/* webpackChunkName: "article" */ "@/views/ArticleEdit.vue");
const User = () => import(/* webpackChunkName: "user" */ "@/views/User.vue");
const Classify = () =>
  import(/* webpackChunkName: "classify" */ "@/views/Classify.vue");
const ArticleShow = () =>
  import(/* webpackChunkName: "articleshow" */ "@/views/ArticleShow.vue");
import BasicLayout from "@/components/BasicLayout.vue";

export default [
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/",
    component: ArticleShow,
    name: "ArticleShow"
  },
  {
    path: "/manage",
    name: "Root",
    component: BasicLayout,
    children: [
      {
        path: "/article",
        name: "ArticleRoot",
        component: { render: h => h("router-view") },
        meta: {
          nav: {
            icon: "el-icon-tickets",
            title: "文章管理"
          },
          breadcrumb: {
            title: "文章列表"
          }
        },
        children: [
          {
            path: "/article",
            name: "Article",
            component: Article
          },
          {
            path: "/article/create",
            name: "ArticleCreate",
            component: ArticleCreate,
            meta: {
              breadcrumb: {
                title: "创建"
              }
            }
          },
          {
            path: "/article/edit/:id",
            name: "ArticleEdit",
            component: ArticleEdit,
            meta: {
              breadcrumb: {
                title: "编辑"
              }
            }
          }
        ]
      },
      {
        path: "/user",
        name: "User",
        component: User,
        meta: {
          nav: {
            icon: "el-icon-user",
            title: "用户管理"
          },
          breadcrumb: {
            title: "用户列表"
          }
        }
      },
      {
        path: "/classify",
        name: "Classify",
        component: Classify,
        meta: {
          nav: {
            icon: "el-icon-paperclip",
            title: "分类管理"
          },
          breadcrumb: {
            title: "分类列表"
          }
        }
      }
    ]
  }
];
