<template>
  <div class="login-page">
    <div class="login">
      <div class="login-title"><span>信息发布管理系统</span></div>
      <el-form
        class="sign-form"
        :model="signForm"
        status-icon
        :rules="rules"
        ref="signForm"
      >
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-phone"
            type="number"
            v-model="signForm.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="signForm.password"
            placeholder="请输入密码"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <div>
          <el-button
            class="sign-submit"
            type="primary"
            @click="submitForm"
            :loading="submitLoad"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import userService from '@/global/service/user';
import DataStore from "@/global/storage/index";

export default {
  data() {
    return {
      submitLoad: false,
      signForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            trigger: "blur",
            pattern: /^1[3456789]\d{9}$/,
            message: "目前只支持中国大陆的手机号码"
          }
        ],
        password: { required: true, message: "请输入密码", trigger: "blur" }
      },
      btnLoading: false
    };
  },
  methods: {
    submitForm() {
      this.$refs["signForm"].validate(valid => {
        if (!valid) return;
        this.submitLoad = true;
        let data = {
          phone: this.signForm.phone,
          password: this.signForm.password
        };
        userService
          .loginPassword(data)
          .then(res => {
            if (res.code === 200) {
              let token = res.data.token;
              DataStore.setToken("token", token);
              this.$router.push({ name: "Article" })
            } else {
              this.$message.error("登录失败，账号密码错误");
              this.submitLoad = false;
            }
          })
          .catch((e) => {
            console.log(e)
            this.$message.error("服务器错误，请联系管理员");
            this.submitLoad = false;
          });
      });
    }
  }
};
</script>

<style lang="less">
.login-page {
  width: 100%;
  height: 100vh;
  background-size: cover;
  .login {
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-title {
      font-size: 30px;
      margin: 50px auto;
      text-align: center;
    }
  }
}
.sign-submit{
    display: block;
    width: 100%;
    background-color: #35b558;
  }
</style>
