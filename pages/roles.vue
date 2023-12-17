<script setup lang="ts">
// import from '../components/add-responsibility';

defineProps({
  title: {
    type: String,
    default: "",
  },
});

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

// return {
//   responsibility,
//   responsibilities,
//   addResponsibility,
//   removeResponsibility,
// };

</script>

<template>
  <div class="flex flex-col flex-wrap sm:flex-row lg:mb-20">
    <div class="w-full pl-2">

      <div class="mb-8">
        <div class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
          <div>
            <div class="text-xl font-medium text-dark">
              Available
            </div>
            <p class="text-grey">Empower company</p>
          </div>
          <button @click="onToggle" class="w-40 h-12 rounded-full bg-blue-button-light text-white text-lg font-medium hover:drop-shadow-lg hover:shadow-purple-progress">New Role</button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="!flex-row card items-center gap-4 ">
          <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
            <img src="../assets/images/svgs/ric-flag.svg" alt="">
            <div>
                <div class="mb-1 font-semibold text-dark">
                    Product Designer
                </div>
                <p class="text-grey">
                    12 people assigned
                </p>
            </div>
        </div>
        <div class="items-center card !flex-row gap-4 ">
          <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
          <img src="../assets/images/svgs/ric-flag.svg" alt="">
          <div>
            <div class="mb-1 font-semibold text-dark">
                iOS Engineer
            </div>
            <p class="text-grey">
                12 people assigned
            </p>
          </div>
        </div>
        <div class="items-center card !flex-row gap-4 ">
            <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
            <img src="../assets/images/svgs/ric-flag.svg" alt="">
            <div>
                <div class="mb-1 font-semibold text-dark">
                    Marketing
                </div>
                <p class="text-grey">
                    12 people assigned
                </p>
            </div>
        </div>
        <div class="items-center card !flex-row gap-4 ">
            <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
            <img src="../assets/images/svgs/ric-flag.svg" alt="">
            <div>
                <div class="mb-1 font-semibold text-dark">
                    DevOps Power
                </div>
                <p class="text-grey">
                    12 people assigned
                </p>
            </div>
        </div>
        <div class="items-center card !flex-row gap-4 ">
            <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
            <img src="../assets/images/svgs/ric-flag.svg" alt="">
            <div>
                <div class="mb-1 font-semibold text-dark">
                    Quality Assurance
                </div>
                <p class="text-grey">
                    12 people assigned
                </p>
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

<style scoped>
  .card:hover {
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.15);
  }

  .fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>