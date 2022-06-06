<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <router-link to="/ask">Ask</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name : "HeaderCpnt",
};
</script>
<style lang="scss" scoped>
header {
  background-color: green;
  
  > nav {
    > ul {
      padding: 10px;
      
      > li {
        display: inline-block;
        
        > a {
          opacity: 0.5;
          display: inline-flex;
          color: white;
          font-size: 24px;
        }
        
        > a.router-link-active {
          opacity: 1;
        }
      }
      
      > li + li {
        margin-left: 10px;
      }
    }
  }
}
</style>
