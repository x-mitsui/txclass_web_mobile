<template>
  <div>
    <CommonMobileHeader :back-icon-show="true" :list-icon-show="false" />
    <CommonScrollWrapper :on-pull-down="onPullDown"> </CommonScrollWrapper>
    <CommonFooter />
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  loading: false,
  async asyncData({ $axios }) {
    const { courseTabData } = await $axios.$get('/get_list_Data')

    return {
      courseTabData: [{ id: 0, title: '全部课程' }].concat(courseTabData),
    }
  },
  data() {
    return {
      courseTabData: [],
    }
  },
  methods: {
    async getListData() {
      const { courseTabData } = await this.$axios.$get('/get_list_Data')
      this.courseTabData = [{ id: 0, title: '全部课程' }].concat(courseTabData)
    },
    async onPullDown(scroll) {
      await this.getHomeData()
    },
  },
}
</script>

<style lang="less" scoped></style>
