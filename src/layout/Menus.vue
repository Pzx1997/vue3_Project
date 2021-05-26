<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->
    <div class="title">Logo</div>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
        <Submenu v-for="item in menuData[0].children" :key="item.name" :submenuList="item" />
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Submenu from "./Submenu.vue";
import { useRouter } from "vue-router";
import { StateType } from "./type";

export default defineComponent({
    components: {
        Submenu,
    },
    setup() {
        const state: StateType = reactive({
            isCollapse: false,
            menuData: [],
        });

        const router = useRouter().getRoutes();
        state.menuData = router.filter((v) => {
            return v.name === "Layout"
        })

        return {
            ...toRefs(state),
        };
    },
});
</script>

<style lang="less" scoped>
.title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 600px;
    flex: 1;
    overflow: hidden auto;
}
</style>
