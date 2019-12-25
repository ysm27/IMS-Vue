<template>
  <div class="user-page">
    <div class="add-user">
      <el-button
        class="add-btn"
        type="primary"
        icon="el-icon-circle-plus"
        @click="handleAddUser"
        >添加用户</el-button
      >
      <el-dialog
        :title="formBoxTitle"
        :visible.sync="formBoxShow"
        :show-close="false"
      >
        <el-form>
          <el-form-item class="user-input" label="姓名" label-width="120px">
            <el-input autocomplete="off" v-model="formBoxValue.name"></el-input>
          </el-form-item>
          <el-form-item class="user-input" label="电话" label-width="120px">
            <el-input
              autocomplete="off"
              v-model="formBoxValue.phone"
            ></el-input>
          </el-form-item>
          <el-form-item class="user-input" label="密码" label-width="120px">
            <el-input
              autocomplete="off"
              v-model="formBoxValue.password"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleSave">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="table-container">
      <el-table :data="userData" style="width: 100%" height="600">
        <el-table-column fixed prop="id" label="id" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话"> </el-table-column>
        <el-table-column prop="password" label="密码"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-edit"
              @click="handleEditUser(scope.row, scope.$index)"
              >编辑</el-button
            >
            <el-button
              class="operation-btn"
              type="primary"
              icon="el-icon-delete"
              @click="handleDeleteUser(scope.row, scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import userService from "@/global/service/user";

export default {
  data() {
    return {
      userData: [],
      formBoxShow: false,
      formBoxTitle: "",
      formBoxValue: {
        name: "",
        phone: "",
        password: ""
      },
      formBoxId: null,
      dataIndex: null
    };
  },
  created() {
    userService.list().then(res => {
      this.userData = res.data;
    });
  },
  methods: {
    handleAddUser() {
      this.formBoxShow = true;
      this.formBoxTitle = "添加用户";
      this.formBoxId = "";
      this.formBoxValue.name = "";
      this.formBoxValue.phone = "";
      this.formBoxValue.password = "";
    },
    handleEditUser(data, index) {
      this.formBoxShow = true;
      this.formBoxTitle = "编辑用户";
      this.formBoxId = data.id;
      this.formBoxValue.name = data.name;
      this.formBoxValue.phone = data.phone;
      this.formBoxValue.password = data.password;
      this.dataIndex = index;
    },
    handleDeleteUser(data, index) {
      let reply = confirm("确定删除该用户？");
      if (reply) {
        userService.delete(data.id).then(() => {
          this.userData.splice(index, 1);
          this.$message.success("删除成功");
        });
      }
    },
    handleSave() {
      let id = this.formBoxId;
      let name = this.formBoxValue.name;
      let phone = this.formBoxValue.phone;
      let password = this.formBoxValue.password;
      let params = { name, phone, password };
      let index = this.dataIndex;
      if (!name || !phone || !password) {
        this.$message.error("缺少必要参数");
        return;
      }
      if (id) {
        userService
          .update(id, params)
          .then(res => {
            this.userData[index].name = name;
            this.userData[index].phone = phone;
            this.userData[index].password = password;
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
        userService
          .insert(params)
          .then(res => {
            let id = res.data;
            params.id = id;
            this.userData.push(params);
            this.formBoxShow = false;
            this.$message.success("添加成功");
          })
          .catch(() => {
            this.formBoxShow = false;
          });
      }
    },
    handleCancel() {
      this.formBoxShow = false;
      this.formBoxId = "";
      this.formBoxValue.name = "";
      this.formBoxValue.phone = "";
      this.formBoxValue.password = "";
    }
  }
};
</script>

<style lang="less" scoped>
.add-user {
  .add-btn {
    width: 120px;
    font-size: 18px;
    padding: 12px 10px;
    margin-bottom: 20px;
  }
}
.operation-btn {
  padding: 10px 10px;
  margin-right: 20px;
}
.user-input {
  width: 350px;
}
</style>
