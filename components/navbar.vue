<template>
  <header class="bg-primary dark:bg-slate-900">
    <nav
      class="flex items-center justify-between gap-6 pt-8 pb-4 mx-40 mb-4 text-base text-slate-600 dark:text-teal-200">
      <div class="flex items-center gap-4">
        <nuxt-link :to="localePath('/')">{{ $t('about_title') }}</nuxt-link>
        <nuxt-link to="#project">{{ $t('projects_title') }}</nuxt-link>
      </div>
      <div class="px-4 border rounded-full cursor-default border-slate-600">
        <span class="font-semibold">Full Stack Maestro</span>
      </div>
      <div class="flex items-center gap-4">
        <LangSwitch />
        <ThemeSwitch />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<style></style>
