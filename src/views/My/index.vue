<template>
  <div>
    <div class="MyTitle" >
      <img class="MyBg" src="'http://liufusong.top:8080" />
      <div class="MyInfo">
        <div class="MyIcon">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="头像"
          />
        </div>
        <div class="MyUser">
          <div class="MyName">游客</div>
          <van-button
            class="LoginBtn"
            color="#21b97a"
            type="primary"
            @click="login"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <div class="MyGrid">
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="idcard" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="MyAd">
      <img
        class="ad"
        src="http://liufusong.top:8080/img/profile/join.png"
        alt="ad"
      />
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push('Login')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
* {
  box-sizing: border-box;
}
.MyBg {
  width: 375px;
}
.MyTitle {
  position: relative;
  min-height: 300px;
}
.MyInfo {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.MyIcon {
  img {
    width: 100%;
    border-radius: 50%;
  }
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}

.MyName {
  margin-top: -10px;
  margin-bottom: 10px;
}
.LoginBtn {
  border-radius: 5px;
}
.MyGrid {
  margin-top: 10px;
}
/deep/.van-grid-item__icon {
  font-size: 20px;
}

.MyAd {
  text-align: center;
  .ad {
    width: 92%;
    text-align: center;
  }
}
</style>
