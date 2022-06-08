<template>
  <label class="chkui">
    <input type="checkbox" :checked="isChecked" @change="onChange(chkIdx)" />
    <div>{{ chkIdx }} {{ isChecked }}</div>
  </label>
</template>

<script>
export default {
  props: {
    chkIdx: {
      type: Number,
    },
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onChange(index) {
      const checked = event.target.checked;
      this.is_checked = checked;
      this.$emit("eChange", index, checked);
    },
  },
};
</script>

<style scoped>
.chkui {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: 1px solid red;
  width: 200px;
  height: 35px;
  user-select: none;
}
.chkui:hover {
  background-color: #eee;
}
.chkui > * {
  cursor: pointer;
}
</style>
