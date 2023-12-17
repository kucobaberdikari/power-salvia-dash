<template>
  <div class="w-full flex flex-wrap -ml-3 mt-5">
  <div class="flex-none w-full px-3">
    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
      <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
        <h6 class="">Employee table</h6>
      </div>
      <div class="flex-auto px-0 pt-0 pb-2">
        <div class="p-0 overflow-x-auto">
          <table class="items-center w-full mb-0 align-top border-collapse text-slate-500" >
            <thead class="align-bottom">
              <tr>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">ID</th>
                <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Campaign Name</th>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Goal Amount</th>
                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Current Amount</th>
                <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
              </tr>
            </thead>
            <tbody >
            <tr>
              <td class="py-2 px-6 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                99123
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                John Michael
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                Rp. 500.000.000
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                Rp. 200.000.000
              </td>
              <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-500"> Edit </a>
              </td>
            </tr>
             <!-- <tr>
              <td class="py-2 px-6 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.id}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.name}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.goal_amount}}
              </td>
              <td class="p-2 align-middle text-left bg-transparent border-b text-slate-900 whitespace-nowrap shadow-transparent">
                {{c.current_amount}}
              </td>
              <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                  <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-500"> Edit </a>
                </td>
             </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>




</template>

<script setup>

// const {data:post} = await useLazyFetch("http://127.0.0.1:8081/api/v1/campaigns", {
//   transform: (_post) => _post.data
// });




</script>