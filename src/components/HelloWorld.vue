<template>
      <van-form @submit="submit">
       <van-field name="用户名" label="用户名" placeholder="请输入用户名" v-model="userName" :rules="[{ required: true, message: '请填写用户名'}]"/>
       <van-field type="password" name="密码" label="密码" placeholder="请输入密码" v-model="password" :rules="[{ required: true, message: '请填写密码'}]"/>
       <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"  :loading="loading"
          loading-text="加载中">提交</van-button>
       </div>
    </van-form>
</template>

<script>
export default {
  data(){
    return {
      userName:"2222222222222222222222222222222222222222",
      password:"233333333333333333333333333333333333333"
    }
  },
  methods:{
    submit(){
      this.$router.push('/creatCode')
    }
    }

}
</script>

<style>

</style>