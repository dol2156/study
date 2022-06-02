<template>
  <header>
    <nav>
      <ul>
        <li class="on">
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
  <main>
    <router-view/>
  </main>
</template>
<script>
export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
    };
  },
}
</script>
<style>
header{ outline:1px dashed red; box-shadow:0px 0px 10px cornflowerblue; }
header{ background-color:green; }
header > nav{ padding-left:10px; padding-right:10px; }
header > nav > ul{}
header > nav > ul > li{ display:inline-block; }
header > nav > ul > li + li{ margin-left:10px; }
header > nav > ul > li > a{ color:white; font-size:20px; line-height:35px; }
header > nav > ul > li > a{ opacity:0.5; }
header > nav > ul > li.on > a{ opacity:1; }
header > nav > ul > li > a:hover{ text-decoration:underline; }
</style>