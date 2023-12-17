<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    required: true,
  },
});
const route = useRoute();
</script>

<template>
  <li>
    <router-link :to="to">
      <span
        class="my-2 flex w-full items-center justify-start p-4 font-thin uppercase text-gray-500 transition-colors duration-200 lg:hover:text-blue-button-light"
        :class="
          route.path === to &&
          'bg-gradient-to-r border-r-4 border-blue-button-light from-white to-blue-100 text-blue-button-dark'
        "
      >
        <span>
         <i :class="icon"></i>
        </span>
        <span class="mx-4 text-sm font-normal">
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>

