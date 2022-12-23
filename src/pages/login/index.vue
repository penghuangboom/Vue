<template>
  <div>
    登录？
  </div>
</template>
<script setup lang="ts">
  // import debug from '@/utils/debug';
  import watermark from '@/utils/lib/watermark';
  import copyPaste from '@/utils/lib/copy-paste';
  const router = useRouter();
  // 进入登录页时获取debug参数
  onMounted(() => {
    // debug.config(route.query.debug);
    // watermark.remove();
    copyPaste.enable();
  });
  onBeforeUnmount(() => {
    const username = '', mobile = '';
    watermark.add({
      content: username + ' ' + mobile,
    });
    copyPaste.disable();
  });
</script>
