<template>
  <div class="relative">
    <OnClickOutside @trigger="isOpen = false">
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="py-0.5 px-2 flex justify-center items-center bg-primary dark:bg-slate-900 w-full transition text-center text-base capitalize">
        <Icon :name="itemFlag(locale)" class="w-5 h-5 mr-2" />
        {{ locale }}
        <Icon name="iconamoon:arrow-down-2" />
      </button>

      <Transition
        :enterActiveClass="`transition ease-out duration-100`"
        :enterFromClass="`opacity-0 scale-90`"
        :enterToClass="`opacity-100 scale-100`"
        :leaveActiveClass="`transition ease-in duration-100`"
        :leaveFromClass="`opacity-100 scale-100`"
        :leaveToClass="`opacity-0 scale-90`">
        <div
          v-if="isOpen"
          class="absolute top-0 mt-8 -ml-5 overflow-hidden rounded shadow-md bg-slate-50 dark:bg-slate-800">
          <div v-for="item in locales" :key="typeof item === 'object' ? item.code : item">
            <div
              @click="changeLanguage(typeof item === 'object' ? item.code : item)"
              :class="`cursor-pointer hover:bg-teal-500 hover:text-white transition flex items-center text-base w-full ${
                locale === item ? 'bg-teal-500 text-white' : 'text-slate-900 dark:text-slate-50'
              }`"
              class="text-slate-900 px-2 py-0.5">
              <Icon :name="typeof item === 'object' ? itemFlag(item.code) : itemFlag(item)" class="w-5 h-5 mr-2" />
              {{ typeof item === 'object' ? item.name : item }}
            </div>
          </div>
        </div>
      </Transition>
    </OnClickOutside>
  </div>
</template>

<script lang="ts" setup>
import { OnClickOutside } from '@vueuse/components';

const isOpen = ref(false);
const { locales, locale, setLocale } = useI18n();

const changeLanguage = (lang: string) => {
  setLocale(lang);
  isOpen.value = false;
};

const itemFlag = (lang: string) => {
  switch (lang) {
    case 'en':
      return 'flag:us-4x3';
    case 'id':
      return 'twemoji:flag-indonesia';
    default:
      return 'twemoji:flag-indonesia';
  }
};
</script>

<style></style>
