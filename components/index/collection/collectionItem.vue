<template>
  <div class="collection-item">
    <CommonMainTitle :title="item.title" :link-show="true"> </CommonMainTitle>
    <CommonCollectionList :course-data="item.courseDataList" />
  </div>
</template>

<script>
export default {
  name: 'CollectionItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="less" scoped></style>
