<template>
  <div class="w-full flex flex-wrap -ml-2 lg:mb-20">
    <div class="w-full pl-2">

      <div class="mb-8">
        <div class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
          <div>
            <div class="text-xl font-medium text-dark">
              Statistics
            </div>
            <p class="text-grey">Your team powers</p>
          </div>
          <button class="w-40 h-12 rounded-full bg-blue-button-light text-white text-lg font-medium hover:drop-shadow-lg hover:shadow-purple-progress">Add Employee</button>
        </div>
      </div>
       
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11 mb-6">
        <!-- card 1 -->
        <div class="card gap-y-10">
          <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400 capitalize mb-3">in total</p>
            <span class="text-3xl font-bold text-dark">
              425,000
            </span>
          </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card gap-y-10">
          <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400 capitalize mb-3">Active</p>
            <span class="text-3xl font-bold text-dark">
              205,399
            </span>
          </div>
          </div>
        </div>
        <!-- card 3 -->
        <div class="card gap-y-10">
          <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-400 capitalize mb-3">Inactive</p>
            <span class="text-3xl font-bold text-dark">
              142,593
            </span>
          </div>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
        <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <h6 class="">Employee table</h6>
        </div>
        <div class="flex-auto px-0 pt-0 pb-2">
          <div class="p-0 overflow-x-auto">
            <table class="items-center w-full mb-0 align-top border-collapse text-slate-500">
              <thead class="align-bottom">
                <tr>
                  <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">EMPLOYEE</th>
                  <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                  <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                  <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                  <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">John Michael</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Manager</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Organization</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">23/04/18</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Alexa Liras</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">alexa@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programator</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">11/01/19</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user3" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Laurent Perrier</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">laurent@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Executive</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Projects</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">19/09/17</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user4" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Michael Levi</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">michael@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programator</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">24/12/08</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user5" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Richard Gran</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">richard@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Manager</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Executive</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">04/10/21</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user6" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Miriam Eric</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">miriam@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programtor</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">14/09/20</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">John Michael</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">john@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Manager</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Organization</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">23/04/18</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user2" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Alexa Liras</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">alexa@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programator</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">11/01/19</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user3" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Laurent Perrier</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">laurent@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Executive</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Projects</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">19/09/17</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-3.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user4" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Michael Levi</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">michael@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programator</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-emerald-500 to-teal-400 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">24/12/08</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user5" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Richard Gran</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">richard@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Manager</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Executive</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">04/10/21</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <div class="flex py-1">
                      <div>
                        <img src="../assets/images/team-4.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user6" />
                      </div>
                      <div class="flex flex-col justify-center">
                        <h6 class="mb-0 text-sm leading-normal ">Miriam Eric</h6>
                        <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">miriam@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <p class="mb-0 text-xs font-semibold leading-tight  dark:opacity-80">Programtor</p>
                    <p class="mb-0 text-xs leading-tight  dark:opacity-80 text-slate-400">Developer</p>
                  </td>
                  <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <span class="bg-gradient-to-tl from-slate-600 to-slate-300 text-xs rounded-full p-2  inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">inactive</span>
                  </td>
                  <td class="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <span class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400">14/09/20</span>
                  </td>
                  <td class="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                    <a href="javascript:;" class="text-xs font-semibold leading-tight  dark:opacity-80 text-slate-400"> Edit </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
