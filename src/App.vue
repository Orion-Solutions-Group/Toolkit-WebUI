<script setup lang="ts">
import OrionHeader from '@/components/OrionHeader.vue';
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
];

const userMenuLinks = [
  { name: 'Profil', path: '/profile' },
  { name: 'Déconnexion', action: 'logout' },
];
</script>

<template>
  <OrionHeader
    :logoSrc="logoSrc"
    :menuLinks="menuLinks"
    :userMenuLinks="userMenuLinks"
    :isLoggedIn="true"
    @logout="handleLogout"
  />
</template>
