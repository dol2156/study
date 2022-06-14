<template>
  <div>HI</div>
</template>

<script>
export default {
  created() {
    console.log("computed");

    this.$_Sample.talk("WOW");

    const result = this.$_Array.reverse([1, 2, 3]);
    console.log(result);

    const arr = [{ name: "강석민" }, { name: "김나은" }];
    const result2 = this.$_Json.copy(arr);
    console.log(result2);
  },
};
</script>

<style lang="scss"></style>
