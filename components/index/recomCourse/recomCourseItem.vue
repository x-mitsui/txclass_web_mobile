<template>
  <div class="recom-course-item">
    <a :href="item.href" target="_blank">
      <div class="cover">
        <img v-lazy="coverURL" :alt="item.title" class="poster-img" />
      </div>
      <h1 class="course-tt">{{ item.title }}</h1>
      <div class="info">
        <img
          v-lazy="teacherImgURL"
          :alt="item.teacherName"
          class="teacher-img"
        />
        <span class="name">{{ item.teacherName }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgBase: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    coverURL() {
      return this.imgBase + this.item.imgKey
    },
    teacherImgURL() {
      return this.imgBase + this.item.teacherImgKey
    },
  },
}
</script>

<style lang="less" scoped>
.recom-course-item {
  width: 50%;
  padding-left: 10px;
  .poster-img {
    width: 100%;
  }
  .course-tt {
    display: -webkit-box;
    height: 36px;
    margin: 5px 0;
    font-size: 14px;
    line-height: 18px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .teacher-img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .name {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
