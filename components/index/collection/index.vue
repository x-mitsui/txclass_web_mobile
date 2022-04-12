<template>
  <div class="collection-wrapper">
    <IndexCollectionItem
      v-for="item of collectionData"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  name: 'CollectionCpn',
  props: {
    collectionData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped></style>
