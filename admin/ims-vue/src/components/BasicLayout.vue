<template>
  <div class="page-wrapper">
    <div class="page-sider">
      <Sider />
    </div>
    <div class="page-mainer">
      <div class="page-header">
        <Header />
      </div>
      <div class="page-body">
        <router-view></router-view>
      </div>
      <div class="page-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/LayoutHeader";
import Footer from "@/components/LayoutFooter";
import Sider from "@/components/LayoutSider";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Sider
  }
};
</script>

<style scoped lang="less">
.page-wrapper {
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
}

.page-sider {
  position: relative;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  width: 240px;
}

.page-mainer {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-header {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  height: 64px;
  min-height: 64px;
}

.page-body {
  flex: 1;
  padding: 40px;
}
</style>
