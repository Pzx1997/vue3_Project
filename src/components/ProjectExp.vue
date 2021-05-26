<template>
  <div class="project_container">
    <h2 class="title">项目经验</h2>
    <swiper
      :slides-per-view="3"
      :space-between="150"
      :centeredSlides="true"
      class="swiper"
      effect="coverflow"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: true,
      }"
    >
      <swiper-slide class="project_item">
        <div class="project_item_title">
          <a href="#"> <i class="el-icon-link"></i> 物业后台管理系统</a>
        </div>
        <div class="project_item_description">项目描述项目描述项目描述</div>
        <div class="project_item_content">工作内容</div>
        <div class="project_item_stack">技术栈</div>
      </swiper-slide>

      <swiper-slide class="project_item">
        <div class="project_item_title">
          <a href="#"> <i class="el-icon-link"></i> 物业后台管理系统</a>
        </div>
        <div class="project_item_description">项目描述项目描述项目描述</div>
        <div class="project_item_content">工作内容</div>
        <div class="project_item_stack">技术栈</div>
      </swiper-slide>

      <swiper-slide class="project_item">
        <div class="project_item_title">
          <a href="#"> <i class="el-icon-link"></i> 物业后台管理系统</a>
        </div>
        <div class="project_item_description">项目描述项目描述项目描述</div>
        <div class="project_item_content">工作内容</div>
        <div class="project_item_stack">技术栈</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SwiperCore, { Navigation, EffectCoverflow, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";

SwiperCore.use([Navigation, EffectCoverflow, EffectFade]);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    onMounted(() => {});
  },
});
</script>

<style lang="less" scoped>
.project_container {
  height: 100vh;
  //   background-color: #645353;
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

  .swiper {
    height: 100%;
  }

  .project_item {
    background-color: #00000087;
    border-radius: 20px;
    height: 700px;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    color: #ccc;

    &:hover {
      background-color: #000000db;
      color: #fff;
    }
  }

  .project_item_title {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration-line: none;

      &:hover {
        color: #ef8e61;
      }
    }
  }

  .project_item_description {
    margin: 10px 0;
  }

  .project_item_content {
    margin-bottom: 10px;
  }
}
</style>