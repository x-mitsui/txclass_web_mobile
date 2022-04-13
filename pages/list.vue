<template>
  <div class="list-page">
    <CommonMobileHeader :back-icon-show="true" :list-icon-show="false" />
    <ListTab :tab-data="courseTabData" />
    <CommonScrollWrapper :on-pull-down="onPullDown">
      <CommonCourseList :course-data="curCourseData" />
    </CommonScrollWrapper>
    <CommonFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { filterData } from '@/utils/tools'
export default {
  name: 'ListPage',
  loading: false,
  async asyncData({ $axios }) {
    const [result0, result1] = await Promise.all([
      $axios.$get('/get_course_tab_data'),
      $axios.$get('/get_course_data'),
    ])
    const { courseTabData } = result0
    const { courseData } = result1

    return {
      courseTabData: [{ id: 0, title: '全部课程' }].concat(courseTabData),
      courseData,
      curCourseData: courseData,
    }
  },

  data() {
    return {
      courseTabData: [],
      courseData: [],
      curCourseData: [],
    }
  },
  computed: {
    ...mapState(['id']),
  },
  watch: {
    id(newV) {
      this.curCourseData = filterData(this.courseData, newV)
    },
  },
  methods: {
    async getCourseData() {
      const { courseData } = await this.$axios.$get('/get_course_data')
      this.courseData = courseData
      this.curCourseData = filterData(courseData, this.$store.state.id)
    },
    async onPullDown(scroll) {
      await this.getCourseData()
    },
  },
}
</script>

<style lang="less" scoped>
.list-page {
  height: 100%;
}
</style>
