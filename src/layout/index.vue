<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="231px">
            <Menus />
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <span>王小虎</span>
            </el-header>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Menus from "./Menus.vue";

export default defineComponent({
    components: {
        Menus,
    },
    setup() {
        return reactive({});
    },
});
</script>

<style lang="less" scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
    height: 100%;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 4px;
        /*height: 4px;*/
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #dddee0;
        box-shadow: inset 0 0 5px #dddee0;
        -webkit-box-shadow: inset 0 0 5px #dddee0;
    }
}

/*滚动条样式*/
// &::-webkit-scrollbar
 &::-webkit-scrollbar {
    width: 4px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px #dddee0;
    -webkit-box-shadow: inset 0 0 5px #dddee0;
    background: #dddee0;
}

&::-webkit-scrollbar-track {
    border-radius: 0;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.1);
}
</style>
