<template>
  <div class="breadcrumb-section" v-if="breadcrumbValue.length">
    <el-breadcrumb class="breadcrumb-list" v-if="breadcrumbValue.length">
      <template v-for="item in breadcrumbValue">
        <el-breadcrumb-item :key="item.name">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadecrumb",
  props: {
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    breadcrumbValue() {
      const { breadcrumb } = this;
      if (breadcrumb.length) {
        return breadcrumb;
      }
      return this.$route.matched
        .filter(data => data.meta && data.meta.breadcrumb)
        .map(data => ({
          name: data.meta.breadcrumb.title,
          to: data.meta.breadcrumb.replace ? { name: data.name } : undefined
        }));
    }
  }
};
</script>

<style lang="less" scoped>
.breadcrumb-section {
  height: 100%;
  background-color: #fff;
  padding: 28px 0 0 32px;
  padding-bottom: 0;
  overflow: hidden;
  flex: none;
  .breadcrumb-list,
  .breadcrumb-description {
    margin-bottom: 16px;
  }
}
</style>
