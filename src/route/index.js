import VueRouter from 'vue-router'
import Vue from 'vue'
import createCode from '@/views/CreateCode.vue'
import stepView from '@/views/stepView.vue'

Vue.use(VueRouter)

const routet=new VueRouter({
  routes:[{path:'/creat',component:createCode},{path:'/',component:stepView}]
})
export default routet