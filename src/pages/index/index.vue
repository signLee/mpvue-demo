<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <open-data type="userNickName"></open-data>
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <progress :percent="percent" show-info />
    <p>{{year}}年已经过去了{{day}}天，{{percent}}%</p>
    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <button open-type="share" lang="zh_CN" @getuserinfo="onGotUserInfo">
      分享页面
    </button>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
      获取用户信息
    </button>
    <a href="/pages/test/main" class="counter">去往测试页面</a>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/src/utils";
import card from '@/components/card'
import store from '@/pages/counter/store'

export default {
  data () {
    return {
      progressPercent: 0,
      showMsg: ''
    }
  },

  components: {
    card
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    day () {
      return parseInt(this.calcDay() / 1000 / 60 / 60 / 24)
    },
    percent () {
      return ((this.day / this.getDayOfYear()) * 100).toFixed(1)
    }
  },
  methods: {
    getDayOfYear () {
      return this.isLeapYear() ? 366 : 365
    },
    isLeapYear () {
      if (this.year % 400 === 0) {
        return true
      } else if (this.year % 4 === 0 && this.year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    calcDay () {
      let startDay = new Date()
      startDay.setMonth(0)
      startDay.setDate(1)
      return new Date().getTime() - startDay.getTime()
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },
  mounted () {
     const data = get("/address/deleteAction", {
        id: id
      }).then((res) => {
        console.log(res)
      });
  },
  onShow () {
    console.log(store)
  },
  created () {
    this.progressPercent = 1
    this.showMsg = new Date().getFullYear()
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
