<template>
  <button @click="next" class="focus:outline-none">
    <div v-if="colorMode.preference === 'light'">
      <Icon name="akar-icons:sun-fill" class="w-5 h-5" />
    </div>
    <div v-if="colorMode.preference === 'dark'">
      <Icon name="akar-icons:moon-fill" class="w-5 h-5" />
    </div>
    <div v-if="colorMode.preference === 'system'">
      <Icon name="ic:round-computer" class="w-5 h-5" />
    </div>
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

// cycle through the 3 modes
const next = () => {
  const modes = ['light', 'dark', 'system'];
  const current = modes.indexOf(colorMode.preference);
  const next = modes[(current + 1) % modes.length];
  colorMode.preference = next;
};
</script>

<style></style>
