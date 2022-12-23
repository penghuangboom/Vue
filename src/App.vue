<script setup lang="ts">
  // import HelloWorld from './components/HelloWorld.vue'
  // import debug from './utils/debug';
  import watermark from '@/utils/lib/watermark';
  import copyPaste from '@/utils/lib/copy-paste';
  onMounted(() => {
    // debug.init();
    const username = '', mobile = '';
    // } = auth.getUser();
    watermark.add({ content: username + ' ' + mobile });
    copyPaste.disable();
  });
  onBeforeUnmount(() => {
    watermark.remove();
    copyPaste.enable();
  });
</script>
<template>
  <router-view></router-view>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
