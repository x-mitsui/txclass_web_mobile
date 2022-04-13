<template>
  <div class="list-item">
    <a :href="item.href" target="_blank" class="course-lk">
      <div class="cover">
        <img v-lazy="posterUrl" :alt="item.courseName" />
      </div>
      <div class="info">
        <h1 class="course-tt">{{ item.courseName }}</h1>
        <p class="course-desc">{{ item.description.replace(/（.*?）/, '') }}</p>
        <p :class="priceClass">
          {{ item.price === '0' ? '免费' : `￥${item.price}` }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import { URL } from '@/config/config'
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      priceClass: ['course-price', { free: this.item.price === '0' }],
    }
  },

  computed: {
    posterUrl() {
      return URL.IMG_BASE + this.item.posterKey
    },
  },
}
</script>

<style lang="less" scoped>
.list-item {
  height: 100px;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 1px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;

  .course-lk {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    .cover {
      width: 142px;
      height: 100%;
      background-color: #efefef;
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-left: 152px;
      box-sizing: border-box;

      .course-tt {
        display: -webkit-box;
        height: 36px;
        font-size: 14px;
        line-height: 18px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      .course-desc {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        color: #666;
      }

      .course-price {
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        color: #f40;

        &.free {
          color: #5fb41b;
        }
      }
    }
  }
}
</style>
