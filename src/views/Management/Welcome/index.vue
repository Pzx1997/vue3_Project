<template>
    <ChatRoom :chatWidth="800" :chatHeight="600" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        return reactive({});
    },
});
</script>

<style lang="less" scope>
</style>
