<template>
  <swiper ref="indexSwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) of sliderData" :key="index">
      <IndexSwipperItem :data="item"></IndexSwipperItem>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'SwiperCpn',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    sliderData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        loopedSlides: 1,
        autoplay: true,
        disableOnInteraction: false, // 交互后是否取消轮播
        pauseOnMouseEnter: true,
        on: {
          slideChangeTransitionEnd() {
            this.autoplay.start() // disableOnInteraction没用就加这个玩意儿
          },
        },
      },
    }
  },
}
</script>

<style lang="less" scoped>
/deep/ .swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
