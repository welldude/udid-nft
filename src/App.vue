<template>
  <router-view />
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
store.dispatch("dapp/checkInjected");
store.dispatch("dapp/AccountsChangedHandler");
</script>

<style lang="less">
#app {
  color: #fff;
  font-family: Fira Code;
}
</style>
