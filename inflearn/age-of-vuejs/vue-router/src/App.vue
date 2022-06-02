<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Go to HOME</router-link>
      </li>
      <li>
        <router-link to="/news">Go to NEWS</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <button
          type="button"
          @click="onHomeClick"
        >HOME
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onNewsClick"
        >NEWS
        </button>
      </li>
    </ul>
  </nav>
  <router-view/>
</template>
<script>
export default {
  name : "App",
  data() {
    return {
      message : "Hello Vue",
    };
  },
  methods : {
    onHomeClick() {
      this.$router.push('/home');
    },
    onNewsClick() {
      this.$router.push('/news');
    },
  },
}
</script>
<style>
button{ cursor:pointer; }
nav{}
nav > ul{ list-style:none; padding:0; }
nav > ul > li{ display:inline-block; }
nav > ul > li + li{ margin-left:10px; }
nav > ul > li > a{}
</style>