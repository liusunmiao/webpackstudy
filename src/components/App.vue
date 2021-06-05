<template>
<!--这里用于定义vue组件的模板内容-->
  <div>
    <h1>这是App根组件</h1>
  </div>
</template>
<script>
// 这里用于定义vue组件的业务逻辑
export default {
  data(){
    //返回私有数据
    return {};
  },
  methods:{

  }
}
</script>
<style scoped>
  /*这里用于定义组件的样式  添加scoped 防止组件之间的样式冲突*/
  h1{
    color: red;
  }
</style>