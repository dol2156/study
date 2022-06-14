<template>
  <div>is_checked_list : {{ is_checked_list }}</div>
  <br />
  <ChkuiCpnt
    v-for="(item, index) in is_checked_list"
    :chkIdx="index"
    :isChecked="item"
    :key="item.id"
    @eChange="eChange"
  ></ChkuiCpnt>
</template>

<script>
import ChkuiCpnt from "@/components/ChkuiCpnt.vue";

export default {
  name: "App",
  data() {
    return {
      is_checked_list: [true, false, true, false],
    };
  },
  methods: {
    eChange(index, checked) {
      this.is_checked_list[index] = checked;
    },
  },
  components: { ChkuiCpnt },
};
</script>

<style></style>
