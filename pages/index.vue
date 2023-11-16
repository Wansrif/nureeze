<template>
  <div class="min-h-[calc(100vh-60px)]">
    <h1 v-html="$t('about_me')" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Portfolio',
  meta: [{ name: 'description', content: 'Redwan Sarif Portfolio' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<style></style>
