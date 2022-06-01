<template>
  <div>App : {{ message }}</div>
  <button id="show-modal" @click="showModal=true">Show Modal</button>
  <transition name="modal">
    <AppModal v-if="showModal" @close="showModal=false">
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </AppModal>
  </transition>
</template>
<script>
import AppModal from "@/components/AppModal";
export default {
  name : "App",
  components : {AppModal},
  data() {
    return {
      message : "Hello Vue",
      showModal : false,
    };
  },
}
</script>
<style>
</style>