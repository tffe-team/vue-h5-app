<template>
  <div id="noFound" class="rui-flex">
    <header class="rui-header rui-header-bank-card">
         <h2 class="title">{{title}}</h2>
   </header>
   <div class="flex">
      <ul class="rui-list">
        <li class="item" v-for="(item, i) in list" :key="i">
          <div class="label flex">{{item.title}}</div>
        </li>
      </ul>
   </div>
 </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Action, Getter} from 'vuex-class'
@Component
export default class Welcome extends Vue {
  @Getter('list') list: any
  @Action('getListData') getListData: any
  title = '列表页'
  mounted() {
    if (!this.list.length) {
      this.getListData({
        page_num: 1,
        per_page_num: 20
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex{
    background-color: #fff;
  }
</style>
