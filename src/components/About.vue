<template>
  <div class="about_container">
    <h2 class="title">关于我</h2>
    <div class="main_box">
      <div class="box">
        <div class="info">
          <div class="box_item">
            <div class="box_item_icon el-icon-location-information"></div>
            <div class="text">坐标/广州</div>
          </div>
          <div class="box_item">
            <!-- <div class="box_item_icon el-icon-location-information"></div> -->
            <div class="box_item_icon">
              <img src="/src/assets/icon/xueli.svg" alt="" />
            </div>
            <div class="text">学历/本科</div>
          </div>
          <div class="box_item">
            <!-- <div class="box_item_icon el-icon-location-information"></div> -->
            <div class="box_item_icon">
              <img src="/src/assets/icon/zaizhiyuangong.svg" alt="" />
            </div>
            <div class="text">状态/在职</div>
          </div>
        </div>

        <div class="experience">
          <div>X年互联网从业经验</div>
          <div>XXX</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="less" scoped>
.about_container {
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

  .main_box {
    background-color: #00000087;

    .box {
      color: #ccc;
      width: 1000px;
      height: 600px;
      margin: 0 auto;
      .info {
        display: flex;
        justify-content: space-evenly;

        .box_item {
          display: flex;
          flex-direction: column;

          .box_item_icon {
            width: 80px;
            height: 80px;
            background-color: rgba(238, 238, 238, 0.281);
            border-radius: 50%;
            font-size: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            margin-top: 80px;

            img {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>