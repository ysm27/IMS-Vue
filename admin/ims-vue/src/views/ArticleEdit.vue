<template>
  <div class="article-Edit-page">
    <el-button
      class="back-btn"
      type="primary"
      @click="() => this.$router.back()"
      >返回文章列表</el-button
    >
    <div class="page-main">
      <el-form class="form-container">
        <el-form-item label="标题" label-width="60px">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="分类" label-width="60px">
          <el-select v-model="article.classify_id">
            <el-option
              v-for="item in classify"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="content-input" label="内容" label-width="60px">
          <quillEditor
            class="quill-editor"
            v-model="article.content"
            ref="myQuillEditor"
            :option="editorOption"
          ></quillEditor>
        </el-form-item>
        <el-form-item label-width="60px">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            @click="handleEditArticle"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import classifyService from "@/global/service/classify";
import articleService from "@/global/service/article";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import hljs from "highlight.js";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      article: {
        title: "",
        classify_id: "",
        content: ""
      },
      classify: [],
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    };
  },
  created() {
    classifyService.list().then(res => {
      this.classify = res.data;
    });
    let id = this.$route.params.id;
    articleService.single(id).then(res => {
      this.article = res.data[0];
    });
  },
  methods: {
    handleEditArticle() {
      let id = this.$route.params.id;
      let title = this.article.title;
      let classify_id = this.article.classify_id;
      let content = this.article.content;
      let params = { title, classify_id, content };
      if (!title || !classify_id || !content) {
        this.$message.error("缺少重要参数");
        return;
      }
      articleService.update(id, params).then(res => {
        if (res.code === 200) {
          this.$message.success("修改成功");
          this.$router.push({ name: "Article" });
        } else {
          this.$message.error(res.message);
        }
      });
    }
  },
  components: {
    quillEditor: quillEditor
  }
};
</script>

<style lang="less">
.back-btn {
  margin-bottom: 20px;
}
.form-container {
  width: 80%;
}
.quill-editor {
  line-height: 24px;
}
.content-input {
  margin-bottom: 50px;
}
</style>
