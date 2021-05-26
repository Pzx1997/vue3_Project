<template>
    <template v-if="submenuList.children">
        <el-submenu :index="submenuList.path">
            <template #title>
                <span>{{ submenuList.name }}</span>
            </template>

            <el-menu-item-group>
                <el-menu-item
                    v-for="item in submenuList.children"
                    :key="item.keyPath"
                    :index="item.path"
                    @click="handleClickNav"
                >{{ item.name }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </template>

    <template v-else>
        <el-menu-item :index="submenuList.path" @click="handleClickNav">
            <template #title>{{ submenuList.name }}</template>
        </el-menu-item>
    </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationRaw, useRouter } from 'vue-router';

export default defineComponent({
    props: ["submenuList"] as string[],
    setup() {

        const router = useRouter();

        const handleClickNav = (data: { index: RouteLocationRaw; }) => {
            console.log(data);
            router.push(data.index)
        }

        return {
            handleClickNav,
        }
    },
});
</script>

<style lang="less" scoped>
</style>
