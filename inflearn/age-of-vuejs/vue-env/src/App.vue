<template>
  <div>BASE_URL : {{ getBaseUrl }}</div>
</template>
<script>
export default {
  name : "App",
  data() {
    return {
      env : process.env,
    };
  },
  computed : {
    getBaseUrl() {
      // development, production, test
      const config = {
        BASE_URL : ""
      }
      if (this.env.NODE_ENV === "development") {
        config.BASE_URL = "http://localhost:3000";
      } else {
        config.BASE_URL = "http://www.example.com";
      }
      
      return config.BASE_URL;
    }
  },
}
</script>
<style>
</style>