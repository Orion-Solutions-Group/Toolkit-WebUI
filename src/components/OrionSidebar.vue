<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';

interface MenuItem {
  name: string;
  path?: string;
  icon?: string;
  badge?: string;
}

defineProps({
  items: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  sidebarId: {
    type: String,
    default: 'default-sidebar',
  },
  sidebarTitle: {
    type: String,
    default: 'Sidebar',
  },
});
const isOpen = ref(false);
</script>

<template>
  <div>
    <button
      :data-drawer-target="sidebarId"
      :data-drawer-toggle="sidebarId"
      aria-controls="sidebarId"
      type="button"
      @click="isOpen = !isOpen"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        :class="{ 'rotate-90 transition-transform': isOpen }"
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
    <aside
      :id="sidebarId"
      :class="[
        'fixed top-0 left-0 z-40 w-64 h-screen transition-transform',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'sm:translate-x-0',
      ]"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          {{ sidebarTitle }}
        </h3>
        <ul class="space-y-2 font-medium">
          <li v-for="item in items" :key="item.name">
            <a
              :href="item.path || '#'"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                v-if="item.icon"
                :class="'w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <use :href="item.icon"></use>
              </svg>
              <span class="ms-3 flex-1">{{ item.name }}</span>
              <span
                v-if="item.badge"
                class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {{ item.badge }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
