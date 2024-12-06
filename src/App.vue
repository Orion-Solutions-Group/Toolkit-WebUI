<script setup lang="ts">
import OrionLayout from '@/components/OrionLayout.vue';
import logoSrc from '@/assets/logo_blanc.png';

const handleLogout = () => {
  console.log('Logout');
};

const menuLinks = [
  { name: 'Accueil', path: '/' },
  {
    name: 'Applications',
    children: [
      {
        name: 'Kairos',
        path: '/kairos',
        iconSrc: 'https://cdn-icons-png.flaticon.com/256/1581/1581942.png',
      },
      { name: 'Mercure', path: '/mercure' },
      { name: 'Vulcain', path: '/vulcain' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const userMenuLinks = [
  { name: 'Profil', path: '/profile' },
  { name: 'Déconnexion', action: 'logout' },
];

const sidebarItems = [
  { name: 'Dashboard', path: '#', icon: '#icon-dashboard' },
  { name: 'Kanban', path: '#', icon: '#icon-kanban', badge: 'Pro' },
  { name: 'Inbox', path: '#', icon: '#icon-inbox', badge: '3' },
  { name: 'Users', path: '#', icon: '#icon-users' },
  { name: 'Products', path: '#', icon: '#icon-products' },
  {
    name: 'Settings',
    path: '#',
    icon: '#icon-settings',
    badge: 'Nique ta mère',
  },
];
</script>

<template>
  <OrionLayout
    :logoSrc="logoSrc"
    :menuLinks="menuLinks"
    :userMenuLinks="userMenuLinks"
    :sidebarItems="sidebarItems"
    :isLoggedIn="true"
    @logout="handleLogout"
  >
    <template #header-content>
      <div class="text-gray-700">
        <h2 class="text-2xl font-semibold">Bienvenue</h2>
        <p class="text-sm text-gray-500">Gérez vos projets facilement.</p>
      </div>
    </template>

    <div>
      <h1 class="text-3xl font-bold">Contenu Principal</h1>
      <p class="mt-2 text-gray-600">Voici la zone de travail principale.</p>
    </div>
  </OrionLayout>
</template>
