<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-zA-Z0-9_-]{6,16}$/, message: '用户名必须6-16位' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>

    <div class="go-reg"><a href="#/registe">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'adminNo1',
      // name: '',
      password: '123123'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('SetUser', res.data.body)
        this.$toast.success('登录成功')
        if (this.$store.state.user && this.$store.state.user.token) {
          this.$router.push('/my')
        } else {
          this.$toast.fail('账号/密码错误')
        }
      } catch (err) {
        this.$toast.fail('登录失败')
      }
    },
    fn () {
      console.log(123)
      this.$router.back()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-btn {
  background-color: #21b97a;
  border-radius: 3px;
  color: #fff;
}
.go-reg {
  text-align: center;
  font-size: 18px;
}
.van-field {
  height: 60px;
  padding-top: 30px;
}
.van-button {
  font-size: 17px;
}
</style>
