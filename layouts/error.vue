<template>
  <div class="container">
    <CommonMobileHeader :back-icon-show="true" :list-icon-show="false" />
    <CommonError />
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
}
</script>
