<template>
  <div>
    <router-view />

    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" replace to="/message"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="contact" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
