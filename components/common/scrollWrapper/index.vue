<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'ScrollWrapper',
  props: {},
  mounted() {
    this.initScroll()
  },
  methods: {
    initScroll() {
      const wrapper = this.$refs.wrapper
      // const content = this.$refs.content
      const scroll = new BScroll(wrapper, {
        mouseWheel: true,
        click: true,
        tap: true,
        pullDownRefresh: {
          threshold: 50,
          stop: 20,
        },
        probeType: 3,
        scrollY: true,
        scrollX: false,
        bounce: false,
        momentum: false,
        useTransition: false,
        useTransform: true,
        preventDefault: false,
        stopPropagation: false,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        },
      })
      scroll.on('scroll', () => {
        this.$emit('scroll', scroll)
      })
      scroll.on('scrollEnd', () => {
        this.$emit('scrollEnd', scroll)
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
