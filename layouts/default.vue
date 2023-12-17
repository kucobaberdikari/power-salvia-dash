<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

import Sidebar from "~/components/sidebar/Sidebar.vue";

import { closeSidebar, sidebarOpen } from "../components/store";

const route = useRoute();

onMounted(() => {
  // set the html tag attribute overflow to hidden when component is mounted
  document.documentElement.style.overflow = "hidden";
});

watch(route, () => {
  // close sidebar on route changes when viewport is less than 1024px
  if (sidebarOpen && window.innerWidth < 1024) {
    closeSidebar();
  }
});
</script>

<template>
  <div class="relative h-screen overflow-hidden bg-gray-100 lg:p-4">
    <div class="flex items-start">
      <Overlay />
      <Sidebar mobile-orientation="start"/>
      <div
       class="flex h-screen w-full flex-col pl-0 lg:space-y-4" 
        :class="sidebarOpen ? 'lg:w-full':'lg:pl-4 lg:w-[calc(100%-16rem)]'"
        >
        <navbar/>
        <main class="h-screen overflow-auto px-2 pb-36 md:pb-8 pt-0">
          <slot/>
        </main>
      </div>
    </div>
  </div>
</template>

