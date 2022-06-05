<template>
  <nav>
    <ul>
      <li>
        <router-link to="/home">Go to HOME</router-link>
      </li>
      <li>
        <router-link to="/news">Go to NEWS</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <button type="button" @click="onHomeClick">HOME</button>
      </li>
      <li>
        <button type="button" @click="onNewsClick">NEWS</button>
      </li>
    </ul>
    <ul>
      <router-link
        to="/home"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <li
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
        >
          <a class="btnui" :href="href" @click="navigate" target="_blank">{{
            route.fullPath
          }}</a>
        </li>
      </router-link>
      <router-link
        to="/news"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <li
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
        >
          <a class="btnui" :href="href" @click="navigate" target="_blank">{{
            route.fullPath
          }}</a>
        </li>
      </router-link>
    </ul>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue",
    };
  },
  methods: {
    onHomeClick() {
      this.$router.push("/home");
    },
    onNewsClick() {
      this.$router.push("/news");
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
  color: black;
}
button {
  cursor: pointer;
}
nav {
}
nav > ul {
  list-style: none;
  padding: 0;
}
nav > ul > li {
  display: inline-block;
}
nav > ul > li + li {
  margin-left: 10px;
}
nav > ul > li > a {
}
.btnui {
  display: inline-block;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 35px;
  border: 1px solid #999;
  background-color: #ddd;
  color: inherit;
}
.router-link-active {
  color: red;
  font-weight: bold;
}
.router-link-exact-active {
  /* color: blue; */
  font-weight: bold;
}
</style>
