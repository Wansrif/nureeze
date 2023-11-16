<template>
  <header>
    <nav class="bg-teal-500 dark:bg-slate-800 dark:text-teal-200">
      <ul class="flex justify-center items-center gap-6 text-slate-50 p-4 text-lg">
        <li>
          <nuxt-link :to="localePath('/')">{{ $t('about_title') }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#project">{{ $t('projects_title') }}</nuxt-link>
        </li>
        <li>
          <LangSwitch />
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<style></style>
