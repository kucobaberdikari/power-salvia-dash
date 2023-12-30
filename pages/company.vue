<template>
  <div class="w-full flex flex-wrap sm:-ml-3 mt-5">
  <div class="flex-none w-full ">
    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
      <div class="flex p-6 pb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent justify-between">
        <h6 class="capitalize">Perawatan masuk</h6>
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
            <input
              type="text"
              class="block w-full rounded-2xl bg-gray-100 py-1.5 pl-4 pr-4 leading-normal text-gray-600 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
          </div>
      </div>
      <div class="flex-auto px-0 pt-0 pb-2">
        <div class="overflow-x-auto">
          <table class="items-center w-full mb-2 align-top border-collapse text-slate-500" >
            <thead class="align-bottom">
              <tr>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-700">ID Pelanggan</th>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-700">Name</th>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-700">Alamat</th>
                <th class="pr-6  py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-700">Telepon</th>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-700">Jenis Perawatan</th>
                <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-700"></th>
              </tr>
            </thead>
            <tbody >
             <tr v-for="c in perawatan" :key="c.id" class="pb-2">
              <td class="py-2 px-6 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.id_pelanggan}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.nama}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.alamat}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.telepon}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.perawatan}}
              </td>
              <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                <button class="text-md font-semibold leading-tight py-2 px-2 rounded-l-lg w-16 bg-blue-button-light text-white hover:bg-blue-button-dark hover:text-white"> Edit </button>
                <button @click="onToggle" class="text-md font-semibold leading-tight py-2 px-2 w-16 bg-blue-button-light text-white hover:bg-green-button-light hover:text-white"> Detail </button>
                <button class="text-md font-semibold leading-tight py-2 px-2 rounded-r-lg w-16 bg-blue-button-light text-white hover:bg-red-button hover:text-white"> Delete </button>
              </td>
             </tr>
            </tbody>
            <tbody v-if="error">
              <tr>
                <td class="mx-auto py-6 text-center align-center" colspan="5">
                  <i class="far fa-exclamation-circle text-gray-400 text-4xl font-light mr-4"></i>
                  <span class="text-gray-400 text-4xl capitalize">oopss... data not found</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


<transition name="fade" class="-mt-96 block ">
  <div v-if="isModalVisible" >
    <div
      @click="onToggle"
      class="absolute bg-black opacity-60 inset-0 z-0"
    ></div>
    <div
      class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
    >
    <section class=" flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-gray-800">
        New Role
    </div>
    <p class="mt-4 text-base leading-7 text-center mb-6 text-gray-400">
        Manage your employees to achieve <br>
        a bigger goals for your company
    </p>
    <form class="w-full ">
        <div class="form-group">
            <label for="" class="ml-5 text-grey">Role Name</label>
            <input type="text" class="input-field" value="Product Marketing">
        </div>
        <div class="form-group mt-5">
            <label for="idRes" class="ml-5 text-grey">Responsibility</label>
            <ul id="listResp" class="flex flex-col gap-4">
              <li v-for="(resp,index) in responsibilities" key="index" class="inline-flex items-center w-full gap-5">
                <input type="text" :value="resp" id="idRes" name="responsibility" class="w-full input-field">
                <a href="#" role="button" id="addRsp" @click="removeResponsibility(index)" >
                    <img src="../assets/images/svgs/ric-close-red.svg" alt="removeresp">
                </a>
              </li>
              <li class="inline-flex items-center w-full gap-5">
                <input type="text" v-model="responsibility" id="idRes" name="responsibility" class="w-full input-field">
                <a href="#" role="button" id="addRsp" @click="addResponsibility" >
                    <img src="../assets/images/svgs/ric-plus.svg" alt="addresp">
                </a>
              </li>
            </ul>
        </div>
    </form>
</section>
<div class="p-3 mt-2 text-center space-x-4 md:block">
  <button
    class="mb-2 md:mb-0 bg-blue-button-light px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg "
  >
    Save
  </button>
  <button
    @click="onToggle"
    class="mb-2 md:mb-0 bg-white border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-gray-600 rounded-md hover:shadow-lg"
  >
    Close
  </button>
</div>
    </div>
  </div>
</transition>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isOpen = ref(false);

const isModalVisible = computed(() => isOpen.value);

const onToggle = () => {
  isOpen.value = !isOpen.value;
};

const responsibility = ref('');
const responsibilities = ref([]);

const addResponsibility = () => {
  if (responsibility.value.trim() !== '') {
    responsibilities.value.unshift(responsibility.value);
    responsibility.value = '';
  }
};

const removeResponsibility = (index) => {
  responsibilities.value.splice(index, 1);
};

const { data:perawatan, error} = await useLazyFetch("http://127.0.0.1:8000/api/perawatan", {
    // transform: (_perawatan) => _perawatan.data
  });


</script>


<style scoped>

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

 .hover\:bg-red-button:hover {
  --tw-bg-opacity: 1;
  background-color: #df0171;
}
</style>