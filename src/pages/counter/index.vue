<template>
  <div class="counter-warp">
    <view class="section__title">movable-view区域小于movable-area</view>
      <movable-area style="height: 200px; width: 200px; background: red;">
        <movable-view
          style="height: 50px; width: 50px; background: blue;"
          :x="x"
          :y="y"
          direction="all"
        ></movable-view>
      </movable-area>
      <view class="btn-area">
        <button size="mini" bindtap="tap">click me to move to (30px, 30px)</button>
      </view>
      <view class="section__title">movable-view区域大于movable-area</view>
      <movable-area style="height: 100px; width: 100px; background: red;">
        <movable-view
          style="height: 200px; width: 200px; background: blue;"
          direction="all"
        ></movable-view>
      </movable-area>
      <view class="section__title">可放缩</view>
      <movable-area
        style="height: 200px; width: 200px; background: red;"
        scale-area
      >
        <movable-view
          style="height: 50px; width: 50px; background: blue;"
          direction="all"
          bindchange="onChange"
          bindscale="onScale"
          scale
          scale-min="0.5"
          scale-max="4"
          scale-value="2"
        ></movable-view>
      </movable-area>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
     <button  @click="scanBook">
      调试扫码
    </button>
    <video
      id="myVideo"
      src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      :controls="false"
      event-model="bubble"
    >
      <cover-view class="controls">
        <cover-view class="time">00:00</cover-view>
      </cover-view>
    </video>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  onReady () {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  methods: {
    tap (e) {
      this.setData({
        x: 30,
        y: 30
      })
    },
    onChange (e) {
      console.log(e.detail)
    },
    onScale (e) {
      console.log(e.detail)
    },
    play () {
      this.videoCtx.play()
    },
    pause () {
      this.videoCtx.pause()
    },
    scanBook () {
      console.log(1111)
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
