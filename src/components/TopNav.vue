<template>
  <div class="topNav">
    <div
      v-for="(item, index) in navbarList"
      :key="item.name + index"
      class="nav"
      @click="handleClickNav(item.domName)"
    >
      {{ item.name }}
    </div>
    <el-dropdown trigger="click">
      <div class="nav">
        个人中心
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <router-link to="/login">
              后台管理
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const handleClickNav = (domName: string) => {
      document.querySelector(`.${domName}`)?.scrollIntoView({
        // 平滑度过
        behavior: "smooth",
        // 上边框与视窗顶部平齐
        block: "start",
      });
    };

    return reactive({
      navbarList: [
        {
          name: "简介",
          domName: "info",
        },
        {
          name: "关于我",
          domName: "about_container",
        },
        {
          name: "项目经验",
          domName: "project_container",
        },
        {
          name: "工作经历",
          domName: "experience_container",
        },
      ],
      handleClickNav,
    });
  },
});
</script>

<style lang="less" scoped>
.topNav {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  top: 10px;
  right: 40px;
  z-index: 77;

  .nav {
    width: 140px;
    color: #ccc;
    font-weight: bold;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;

    &:hover {
      background-color: transparent;
      border: 1px solid black;
      border-radius: 30px;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
