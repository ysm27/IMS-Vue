<template>
  <div class="article-page">
    <div class="add-article">
      <el-button
        class="add-btn"
        type="primary"
        icon="el-icon-circle-plus"
        @click="handleCreateArticle()"
        >添加文章</el-button
      >
    </div>
    <div class="table-container">
      <el-table :data="articleData" style="width: 100%" height="600">
        <el-table-column fixed prop="id" label="id" width="150">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="400">
        </el-table-column>
        <el-table-column prop="class_name" label="分类" width="150">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-edit"
              @click="handleEditArticle(scope.row.id)"
              >编辑</el-button
            >
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-delete"
              @click="handleDeleteArticle(scope.row, scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import articleService from "@/global/service/article";

export default {
  data() {
    return {
      articleData: [],
      formBoxShow: false
    };
  },
  created() {
    articleService.list().then(res => {
      this.articleData = res.data;
    });
  },
  methods: {
    handleCreateArticle() {
      this.$router.push({ name: "ArticleCreate" });
    },
    handleEditArticle(id) {
      this.$router.push({ name: "ArticleEdit", params: { id: id } });
    },
    handleDeleteArticle(data, index) {
      let reply = confirm("确定删除该文章吗？");
      if (reply) {
        console.log(data.id);
        articleService.delete(data.id).then(res => {
          if (res.code === 200) {
            console.log(res, res.data);
            this.$message.success("删除成功");
            this.articleData.splice(index, 1);
          } else {
            this.$message.error(res.message);
          }
        });
      }
    }
  }
};
</script>

<style lang="less">
.add-btn {
  width: 120px;
  font-size: 18px;
  padding: 12px 10px;
  margin-bottom: 20px;
}
.operation-btn {
  padding: 10px 10px;
  margin-right: 20px;
}
.el-table {
  width: 90%;
}
</style>
