<template>
  <div id="noFound" class="rui-flex">
    <header class="rui-header rui-header-bank-card">
         <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex">
     <div class="m-content">
       内容介绍内容介绍
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      title: '标题'
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex{
    background-color: #fff;
  }
  .m-content{
    width: 1.6rem;
    height: 1.6rem;
    margin: .8rem auto;
  }
</style>
