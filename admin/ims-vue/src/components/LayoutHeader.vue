<template>
  <div class="header-section">
    <div class="header-left">
      <Breadcrumb />
    </div>
    <div class="header-right">
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid userInfo-avatar"></i>
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button class="logout-btn" @click="logout" icon="el-icon-video-pause">退出系统</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/BasicBreadcrumb";
import userService from '@/global/service/user';

export default {
  name: "Header",
  data() {
    return {
      userInfo: {}
    }
  },
  created() {
    userService.userInfo().then(res => {
      this.userInfo = res;
    })
  },
  components: {
    Breadcrumb
  },
  methods: {
    logout() {
      userService.accountLogout();
    }
  },
};
</script>

<style lang="less" scoped>
.header-section {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  .header-left {
    width: 30%;
    height: 100%;
  }
  .header-right {
    height: 100%;
    position: absolute;
    right: 30px;
    .user-info {
      height: 100%;
      .el-dropdown {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        transition: all 0.2s ease;
        cursor: pointer;
        .el-dropdown-link {
          width: 80px;
          .userInfo-avatar {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: #ccc;
            border-radius: 50%;
            outline: none;
            margin: 0 10px;
          }
        }
      }
      .el-dropdown:hover {
        background-color: #ecf5ff;
      }
    }
  }
}
.logout-btn{
  width: 100px;
  height: 35px;
  padding: 0;
  text-align: center;
}
</style>
