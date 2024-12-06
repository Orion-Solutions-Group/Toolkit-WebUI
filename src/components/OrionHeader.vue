<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';

interface MenuLink {
  name: string;
  path?: string;
  children?: MenuLink[];
  action?: string;
  iconSrc?: string;
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
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
});

const isMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

const toggleDropdown = (dropdown: string) => {
  activeDropdown.value = activeDropdown.value === dropdown ? null : dropdown;
};

const closeAllDropdowns = () => {
  activeDropdown.value = null;
  isMenuOpen.value = false;
};

const emit = defineEmits(['logout']);
const handleLogout = () => {
  emit('logout');
  closeAllDropdowns();
};
</script>

<template>
  <header class="bg-white shadow-md text-black w-full">
    <nav class="flex items-center">
      <div class="flex items-center">
        <slot name="logo">
          <router-link to="/" @click="closeAllDropdowns">
            <img :src="logoSrc" alt="Logo" class="w-16 h-auto" />
          </router-link>
        </slot>
      </div>
      <div class="hidden md:flex space-x-8 items-center mx-auto">
        <template v-for="link in menuLinks" :key="link.name">
          <div
            v-if="link.children && link.children.length > 0"
            class="relative"
          >
            <button
              @click="toggleDropdown(link.name)"
              class="flex items-center rounded py-2 cursor-pointer"
            >
              <img
                v-if="link.iconSrc"
                :src="link.iconSrc"
                alt=""
                class="w-4 h-auto mr-2"
              />
              {{ link.name }}
              <svg
                class="w-2.5 h-2.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              v-if="activeDropdown === link.name"
              class="absolute top-12 mt-2 w-56 bg-white shadow-md rounded-md py-2"
            >
              <router-link
                v-for="child in link.children"
                :key="child.name"
                :to="child.path"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                @click="closeAllDropdowns"
              >
                <img
                  v-if="child.iconSrc"
                  :src="child.iconSrc"
                  alt=""
                  class="w-6 h-6 mr-2 inline"
                />
                {{ child.name }}
              </router-link>
            </div>
          </div>
          <router-link
            v-else
            :to="link.path"
            class="hover:text-blue-600 flex items-center"
            @click="closeAllDropdowns"
          >
            <img
              v-if="link.iconSrc"
              :src="link.iconSrc"
              alt=""
              class="w-6 h-6 mr-2"
            />
            {{ link.name }}
          </router-link>
        </template>
      </div>
      <div v-if="!isLoggedIn" class="hidden md:flex">
        <router-link
          to="/login"
          class="px-4 py-2 mr-5 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
          >Connexion</router-link
        >
      </div>
      <div v-else class="hidden md:flex">
        <button
          @click="toggleDropdown('user')"
          class="px-4 py-2 mr-5 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Profil
        </button>
        <div
          v-if="activeDropdown === 'user'"
          class="absolute right-0 top-12 mt-2 w-48 bg-white shadow-md rounded-md py-2"
        >
          <template v-for="link in userMenuLinks" :key="link.name">
            <router-link
              v-if="link.path"
              :to="link.path"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              @click="closeAllDropdowns"
            >
              {{ link.name }}
            </router-link>
            <button
              v-else-if="link.action === 'logout'"
              @click="handleLogout"
              class="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              {{ link.name }}
            </button>
          </template>
        </div>
      </div>
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-gray-700 hover:text-blue-600 ml-auto mr-2"
        :class="{ 'text-blue-600': isMenuOpen }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="[
            'h-6 w-6 transform transition-transform duration-300',
            isMenuOpen ? 'rotate-90' : 'rotate-0',
          ]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        v-if="isMenuOpen"
        class="absolute top-10 left-0 w-full bg-white shadow-md md:hidden mt-5"
      >
        <template v-for="link in menuLinks" :key="link.name">
          <router-link
            :to="link.path"
            class="py-2 px-4 hover:text-blue-600 hover:bg-gray-100 flex items-center"
            @click="closeAllDropdowns"
          >
            <img
              v-if="link.iconSrc"
              :src="link.iconSrc"
              alt=""
              class="w-6 h-6 mr-2"
            />
            {{ link.name }}
          </router-link>
        </template>
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="block py-2 px-4 hover:text-blue-600 hover:bg-gray-100"
          >Connexion</router-link
        >
        <button
          v-else
          @click="handleLogout"
          class="block py-2 px-4 hover:text-blue-600 hover:bg-gray-100 w-full text-left"
        >
          Déconnexion
        </button>
      </div>
    </nav>
  </header>
</template>
