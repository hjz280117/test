<!--  -->
<template>
  <div class="item" @click="click">
    <div v-if="isactive"><slot name="after"></slot></div>
    <div v-else><slot name="before"></slot></div>
    <div><slot name="name"></slot></div>
  </div>
</template>

<script>
export default {
  name: "#app",
  data() {
    return {};
  },
  props:{
    path:String
  },
  computed:{
    isactive(){
      //this.$route 显示的是当前的活跃的功能模块的相关信息
      return this.$route.path.indexOf(this.path) !== -1
      
    },
  },
  methods:{
    click(){
      console.log(this.$route.path);
      //用当前的path(this.path)来替换掉$router的路径
      this.$router.replace(this.path)
    }
  }
};
</script>
<style>
.item {
  flex: 1;
  text-align: center;
}
</style>