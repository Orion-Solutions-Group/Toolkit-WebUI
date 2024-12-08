<script setup lang="ts">
import OrionHeader from '@/components/OrionHeader.vue';
import OrionSidebar from '@/components/OrionSidebar.vue';
import type { PropType } from 'vue';

interface MenuLink {
  name: string;
  path?: string;
  children?: MenuLink[];
  iconSrc?: string;
  action?: string;
}

interface MenuItem {
  name: string;
  path?: string;
  icon?: string;
  badge?: string;
}

defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
  menuLinks: {
    type: Array as PropType<MenuLink[]>,
    required: true,
    default: () => [],
  },
  userMenuLinks: {
    type: Array as PropType<MenuLink[]>,
    required: false,
    default: () => [],
  },
  sidebarItems: {
    type: Array as PropType<MenuItem[]>,
    required: true,
    default: () => [],
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  sidebarColor: {
    type: String,
    default: 'bg-gray-900',
  },
  headerColor: {
    type: String,
    default: 'bg-white',
  },
});

const emit = defineEmits(['logout']);
const handleLogout = () => {
  emit('logout');
};
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="flex-shrink-0 w-64 text-white">
      <OrionSidebar
        :items="sidebarItems"
        sidebar-title="Kairos CRM"
        :color="sidebarColor"
      />
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Header -->
      <header class="w-full shadow flex items-center h-16">
        <OrionHeader
          :logoSrc="logoSrc"
          :menuLinks="menuLinks"
          :userMenuLinks="userMenuLinks"
          :isLoggedIn="isLoggedIn"
          @logout="handleLogout"
          :color="headerColor"
        />
      </header>
      <main class="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
