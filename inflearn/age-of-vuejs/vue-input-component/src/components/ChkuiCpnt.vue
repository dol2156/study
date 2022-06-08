<template>
  <div class="chkui">
    <input
      :id="elementId"
      type="checkbox"
      :checked="isChecked"
      @change="onChange(chkIdx)"
    />
    <label :for="elementId">{{ chkIdx }} {{ isChecked }}</label>
  </div>
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
  data() {
    return {
      elementId: null,
    };
  },
  created() {
    this.elementId = this.uuidv4("inp");
  },
  mounted() {},
  methods: {
    uuidv4(prefix = "uuid") {
      return (
        prefix +
        "_" +
        ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        )
      );
    },
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
