<template>
  <ul class="new_item_list">
    <li v-for="(item, idx) in this.propsData.list_data" :key="item.id" :data-idx="idx">
      <div class="left_area">
        <div class="point">{{ item.points }}</div>
      </div>
      <div class="right_area">
        <div class="shell">
          <template v-if="item.domain">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="item.url">{{ item.title }}</router-link>
          </template>
          <div class="info">
            {{ item.time_ago }}
            <router-link to="/user">{{ item.user }}</router-link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name : "NewsListCpnt",
  props:['propsData'],
  created() {
    // 인스턴스가 생성된 후 동기적으로 호출
    console.log("NewsListCpnt created");
  },
}
</script>
<style lang="scss" scoped>
.new_item_list {
  a:hover {
    text-decoration: underline;
  }
  
  > li {
    display: flex;
    width: 100%;
    
    > div {
      outline: 1px dashed red;
      box-shadow: 0px 0px 10px cornflowerblue;
      min-height: 50px;
      display: flex;
      align-items: center;
      
      > a {
        outline: 1px dashed red;
        box-shadow: 0px 0px 10px cornflowerblue;
      }
    }
    
    > div.left_area {
      width: 50px;
      min-width: 50px;
      justify-content: center;
      
      > .point {
        font-weight: 700;
        color: green;
      }
    }
    
    > div.right_area {
      flex-grow: 1;
      padding-left: 10px;
      padding-right: 10px;
      
      > .shell {
        > .info {
          color: #666666;
          font-size: 14px;
        }
      }
    }
    
  }
  
  > li + li {
    margin-top: 10px;
  }
}
</style>