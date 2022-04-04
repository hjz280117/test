<template>
  <div id="app">
    <router-view></router-view>
    <div id="items">
      <item :path="'/home'">
        <template v-slot:before>
          <img class="img" src="./assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:after>
          <img class="img" src="./assets/img/tabbar/home_change.svg" />
        </template>
        <template v-slot:name><div>首页</div></template>
      </item>
      <item :path="'/Classify'">
        <template v-slot:before>
          <img class="img" src="./assets/img/tabbar/classify.svg" />
        </template>
        <template v-slot:after>
          <img class="img" src="./assets/img/tabbar/classify_change.svg" />
        </template>
        <template v-slot:name><div>目录</div></template>
      </item>
      <item :path="'/shopping'">
        <template v-slot:before>
          <img class="img" src="./assets/img/tabbar/shopping.svg" />
        </template>
        <template v-slot:after>
          <img class="img" src="./assets/img/tabbar/shopping_change.svg" />
        </template>
        <template v-slot:name><div>购物车</div></template>
      </item>
      <item :path="'/mine'">
        <template v-slot:before>
          <img class="img" src="./assets/img/tabbar/mine.svg" />
        </template>
        <template v-slot:after>
          <img class="img" src="./assets/img/tabbar/mine_change.svg" />
        </template>
        <template v-slot:name><div>我的</div></template>
      </item>
    </div>
  </div>
</template>

<script>
import item from "./components/bottom_items/item.vue";
export default {
  name: "#App",
  components: {
    item,
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
#items {
  display: flex;
  position: fixed;
  background: lightcyan;
  height: 49px;
  right: 0;
  left: 0;
  bottom: 0;
}
#items img {
  height: 25px;
}
</style>
