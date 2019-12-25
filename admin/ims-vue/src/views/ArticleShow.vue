<template>
  <div class="article-show">
    <div class="page-main">
      <div class="page-title">极客学院文章发布</div>
      <div class="nav-list">
        <el-button
          type="primary"
          plain
          :autofocus="true"
          @click="showArticle(0)"
          >全部文章</el-button
        >
        <el-button
          type="success"
          plain
          v-for="item in classify"
          :key="item.id"
          @click="showArticle(item.id)"
          >{{ item.name }}</el-button
        >
      </div>
      <div class="article-list">
        <div class="article-item" v-for="item in filterArticle" :key="item.id">
          <div class="article-img"><img src="@/assets/jiagou.png" /></div>
          <div class="article-title">{{ item.title }}</div>
          <div class="article-desc">{{ item.content }}</div>
          <div class="article-info">
            <div class="author">iwen</div>
            <div class="created-time">{{ item.created_time_display }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleService from "@/global/service/article";
import classifyService from "@/global/service/classify";

export default {
  data() {
    return {
      article: [],
      classify: [],
      filterArticle: []
    };
  },
  created() {
    articleService.list().then(res => {
      this.article = res.data;
      this.filterArticle = this.article;
    });
    classifyService.list().then(res => {
      this.classify = res.data;
    });
  },

  methods: {
    showArticle(id) {
      if (id == 0) {
        return (this.filterArticle = this.article);
      }
      this.filterArticle = this.article.filter(item => {
        return item.classify_id === id;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.page-main {
  background-color: #f1f1f1;
  text-align: center;
  padding-top: 50px;
  height: 100%;
  .page-title {
    font-size: 28px;
    margin-bottom: 50px;
  }
  .nav-list {
    .el-button {
      border-radius: 30px;
      margin-right: 50px;
      font-size: 18px;
    }
  }
  .article-list {
    width: 1100px;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    .article-item {
      width: 300px;
      padding: 20px;
      background: #fff;
      margin: 0 60px 60px 0;
      .article-img {
        img {
          width: 100%;
        }
      }
      .article-title {
        text-align: start;
        margin: 20px 0;
      }
      .article-desc {
        height: 140px;
        text-align: start;
        color: #716c6c;
        font-size: 14px;
      }
      .article-info {
        display: flex;
        justify-content: space-between;
        color: #716c6c;
        font-size: 14px;
        margin-top: 20px;
        .author {
          color: #4062e2;
        }
      }
    }
  }
}
</style>
