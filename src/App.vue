<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showAcc:false,
      activeName:['1'],
      loading:false,
      userName:'',
      password:''
    }
  },
   methods:{
     clickEvent(){
       console.log('1111')
       this.$toast('路由跳转成功')
     },
     submit(){
       this.loading=true
        console.log(3333)
        setTimeout(()=>{
          this.loading=false
        },8000)
     }
  }
}
</script>

<style>
</style>
