<template>
  <div class="teacher-item">
    <a :href="item.href" target="_blank" class="item-lk">
      <div class="cover">
        <img
          :src="IMG_BASE + item.profilePicKey"
          :alt="item.name"
          class="teacher-img"
        />
      </div>
      <h1 class="teacher-name">{{ item.name }}</h1>
      <div class="info">
        <p class="line-1">课程数:{{ item.courseNum }}</p>
        <p class="line-2">学生数:{{ item.studentsNum }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { URL } from '@/config/config'
export default {
  name: 'TeacherItem',
  props: {
    item: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      IMG_BASE: URL.IMG_BASE,
    }
  },
}
</script>

<style lang="less" scoped>
.teacher-item {
  width: 47%;
  padding-right: 10px;
  margin-bottom: 10px;

  .item-lk {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cover {
      width: 120px;
      height: 120px;

      .teacher-img {
        border-radius: 50%;
      }
    }

    .teacher-name {
      font-size: 16px;
      margin-top: 15px;
    }

    .info {
      font-size: 14px;

      p {
        margin: 10px 0;
        color: #666;
      }
    }
  }
}
</style>
