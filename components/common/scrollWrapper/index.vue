<template>
  <div ref="bsWrapper" class="pulldown-bswrapper">
    <div class="pulldown-scroller">
      <div class="pulldown-tips-wrapper">
        <div v-show="beforePullDown">
          <span>下拉更新</span>
        </div>
        <div v-show="!beforePullDown">
          <div v-show="isPullingDown">
            <span>加载中...</span>
          </div>
          <div v-show="!isPullingDown">
            <span>更新成功</span>
          </div>
        </div>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)

export default {
  name: 'ScrollWrapper',
  scroll: null,
  props: {
    onPullDown: { type: Function, default: () => {} },
  },
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
    }
  },
  mounted() {
    this.initScroll()

    this.bindEvents()
  },
  methods: {
    initScroll() {
      const bsWrapper = this.$refs.bsWrapper
      // const content = this.$refs.content
      this.bscroll = new BScroll(bsWrapper, {
        mouseWheel: true,
        click: true,
        tap: 'tap',
        // bounceTime: 800,
        pullDownRefresh: {
          threshold: 50,
          stop: 50,
        },
        // pullDownRefresh: true,
        probeType: 3,
        scrollY: true,
        HWCompositing: true,
        // scrollX: false,
        // bounce: false,
        // momentum: false,
        // useTransition: false,
        // useTransform: true,
        // preventDefault: false,
        // stopPropagation: false,
        // preventDefaultException: {
        //   tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        // },
      })
    },
    bindEvents() {
      // this.bscroll.on('pullingDown', this.onPullDown.bind(null, this.bscroll))
      this.bscroll.on('pullingDown', async () => {
        this.beforePullDown = false
        this.isPullingDown = true

        await this.onPullDown.call(null, this.bscroll)

        this.isPullingDown = false

        setTimeout(() => {
          setTimeout(() => {
            this.beforePullDown = true
            // 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            this.bscroll.refresh()
          }, 500)
          this.bscroll.finishPullDown() // 回弹，恢复启动
        }, 1500)
      })
    },
  },
}
</script>

<style lang="less" scoped>
.pulldown-bswrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.pulldown-tips-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
</style>
