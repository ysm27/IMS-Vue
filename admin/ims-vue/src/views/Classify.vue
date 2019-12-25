<template>
  <div class="classify-page">
    <div class="add-classify">
      <el-button
        class="add-btn"
        type="primary"
        icon="el-icon-circle-plus"
        @click="handleAddClassify"
        >添加分类</el-button
      >
      <el-dialog
        :title="formBoxTitle"
        :visible.sync="formBoxShow"
        :show-close="false"
      >
        <el-form>
          <el-form-item label="请输入分类名称" label-width="120px">
            <el-input class="classify-input" v-model="name"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="formBoxShow = false">取 消</el-button>
          <el-button type="primary" @click="handleSave">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="table-container">
      <el-table :data="classifyData" style="width: 100%" height="600">
        <el-table-column fixed prop="id" label="id" width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="分类名称"
          width="450"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-edit"
              @click="handleEditClassify(scope.row, scope.$index)"
              >编辑</el-button
            >
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-delete"
              @click="handleDeleteClassify(scope.row, scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import classifyService from "@/global/service/classify";

export default {
  data() {
    return {
      formBoxShow: false,
      classifyData: [],
      formBoxTitle: "",
      name: "",
      dataIndex: "",
      formBoxId: ""
    };
  },
  created() {
    classifyService.list().then(res => {
      this.classifyData = res.data;
    });
  },
  methods: {
    handleAddClassify() {
      this.formBoxShow = true;
      this.formBoxTitle = "添加分类";
      this.name = "";
      this.formBoxId = "";
    },
    handleEditClassify(data, index) {
      this.formBoxShow = true;
      this.formBoxTitle = "编辑分类";
      this.name = data.name;
      this.dataIndex = index;
      this.formBoxId = data.id;
    },
    handleDeleteClassify(data, index) {
      let reply = confirm("确定删除该分类吗？");
      if (reply) {
        classifyService.delete(data.id).then(() => {
          this.classifyData.splice(index, 1);
          this.$message.success("删除成功");
        });
      }
    },
    handleSave() {
      let id = this.formBoxId;
      let name = this.name;
      let params = { name };
      let index = this.dataIndex;
      if (!name) {
        this.$message.error("缺少必要参数");
      }
      if (id) {
        classifyService
          .update(id, params)
          .then(res => {
            this.classifyData[index].name = name;
            this.formBoxShow = false;
            if (res.code === 200) {
              this.$message.success("修改成功");
            } else {
              this.$message.error(res.message);
            }
          })
          .catch(() => {
            this.formBoxShow = false;
          });
      } else {
        classifyService
          .insert(params)
          .then(res => {
            let id = res.data;
            params.id = id;
            this.classifyData.push(params);
            this.formBoxShow = false;
            this.$message.success("添加成功");
          })
          .catch(() => {
            this.formBoxShow = false;
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
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
.classify-input {
  width: 35%;
}
</style>
