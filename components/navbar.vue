<script setup lang="ts">
import { toggleSidebar} from "./store";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
// import { ref } from "vue";

// const showMenu = ref(false);

// const togglemenu = () => {
//   showMenu.value = !showMenu.value;
// };

// const show = ref(false);
</script>

<template>
  <header
    class="relative z-10 h-16 w-full items-center bg-white shadow md:h-20 lg:rounded-2xl"
  >
    <div class="relative mx-auto flex h-full flex-col justify-center px-3">
      <div class="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
        <div class="relative left-0 flex h-full w-3/4">
          <div class="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="text-4xl text-gray-500 focus:outline-none"
              @click="toggleSidebar"
            >
              &#8801;
            </button>
          </div>
          <div class="group relative flex h-full w-36 items-center lg:w-64">
            <div
              class="absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden"
            >
              <svg
                fill="none"
                class="relative h-5 w-5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <svg
              class="pointer-events-none absolute left-0 ml-4 hidden h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
            <input
              type="text"
              class="block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-600 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        <div
          class=" relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0 "
        >
        <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm">
        <i class="cursor-pointer fa fa-bell text-slate-600"></i>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 min-w-44 w-auto text-sm origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:right-0 lg:left-auto">
        <div class="py-1 ">
          <MenuItem v-slot="{ active }">
            <a class=" ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript:;">
              <div class="flex py-1">
                <div class="my-auto">
                  <img src="../assets/images/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl" />
                </div>
                <div class="flex flex-col justify-center">
                  <h6 class="mb-1 text-sm font-normal leading-normal "><span class="font-semibold">New message</span> from Laur</h6>
                  <p class="mb-0 text-xs leading-tight text-slate-400 ">
                    <i class="mr-1 fa fa-clock"></i>
                    13 minutes ago
                  </p>
                </div>
              </div>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a class="ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
              <div class="flex py-1">
                <div class="my-auto">
                  <img src="../assets/images/small-logos/logo-spotify.svg" class="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl" />
                </div>
                <div class="flex flex-col justify-center">
                  <h6 class="mb-1 text-sm font-normal leading-normal"><span class="font-semibold">New album</span> by Travis Scott</h6>
                  <p class="mb-0 text-xs leading-tight text-slate-400">
                    <i class="mr-1 fa fa-clock"></i>
                    1 day
                  </p>
                </div>
              </div>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a class=" ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript:;">
              <div class="flex py-1">
                <div class="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-nav-brand bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                  <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>credit-card</title>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(453.000000, 454.000000)">
                            <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                            <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <h6 class="mb-1 text-sm font-normal leading-normal">Payment successfully completed</h6>
                  <p class="mb-0 text-xs leading-tight text-slate-400">
                    <i class="mr-1 fa fa-clock"></i>
                    2 days
                  </p>
                </div>
              </div>
            </a>
          </MenuItem>
         
        </div>
      </MenuItems>
    </transition>
  </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* .dropdown:hover .dropdown-menu {
  display:block !important;
} */
</style>