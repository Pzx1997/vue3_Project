<template>
  <div class="experience_container">
    <h2 class="title">工作经历</h2>
    <div class="cardList">
      <div class="cardList_item">
        <div class="cardList_item_title">XXXXXXXXXX公司</div>
        <div class="cardList_item_content">XXXXX</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="less" scoped>
.experience_container {
  height: 100vh;
  text-align: center;
  overflow: hidden;

  .title {
    margin-top: 100px;
    margin-bottom: 30px;
    color: #fff;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 2px;
      background-color: #fff;
    }
  }

  .cardList {
    display: flex;
    justify-content: center;

    .cardList_item {
      width: 400px;
      height: 400px;
      background-color: #00000087;
      color: #ccc;
      padding: 20px;
      box-sizing: border-box;

      .cardList_item_title {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
      }

      .cardList_item_content {
        text-align: left;
        margin-top: 10px;
      }
    }
  }
}
</style>