<template>
<div>
  <van-steps direction="vertical" :active="0">
  <van-step>
    <h3 class="title">【城市】物流状态1</h3>
    <p class="num">2016-07-12 12:40</p>
    <template #active-icon>
    <van-icon name="location"  color="#1989fa" />
    <div class="time">
    <p>2020</p>
    <p>12-19</p>
    </div>
  </template>
  </van-step>
  <van-step>
    <h3 class="title">【城市】物流状态2</h3>
    <p class="num">2016-07-11 10:00</p>
    <template #active-icon>
    <van-icon name="location"  color="#1989fa" />
    <div class="time">
    <p>2020</p>
    <p>12-19</p>
    </div>
  </template>
  </van-step>
  <van-step>
    <h3 class="title">快件已发货</h3>
    <p class="num">2016-07-10 09:30</p>
  <template #active-icon>
    <van-icon name="location"  color="#1989fa" />
    <div class="time">
    <p>2020</p>
    <p>12-19</p>
    </div>
  </template>
  </van-step>
</van-steps>
<van-circle v-model="currentRate" size="120px" :text="text" :rate="rate" color="#fff" layer-color="#999" :speed="100" />
<!-- <van-circle v-model="currentRate" size="120px"  :rate="30" :speed="100" :text="text" /> -->
</div>
</template>

<script>
export default {
  data(){
    return {
      // currentRate:10,
      rate:10,
      currentRate: 0,
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  }
}
</script>

<style scoped>
.van-steps--vertical {
    padding: 0 0 0 70px;
}
.title {
  margin: 0 0;
}
.num {
  margin: 8px 0 18px;
}
.time {
  position: absolute;
  top: -12px;
  left: -40px;
  text-align: center;
}
</style>
