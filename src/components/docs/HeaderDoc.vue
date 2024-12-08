<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionHeader
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionHeader est un composant de navigation personnalisable. Il supporte
        un logo, un menu principal avec des sous-menus, une gestion des
        utilisateurs connectés, et un affichage responsive adapté aux appareils
        mobiles.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Props
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <ul class="space-y-4 text-gray-600 dark:text-gray-300">
          <li>
            <strong>logoSrc</strong> : <em>String</em> (requis) - URL du logo
            affiché dans le header.
          </li>
          <li>
            <strong>menuLinks</strong> : <em>Array</em> (requis) - Liste des
            liens du menu principal. Chaque élément peut contenir :
            <ul class="ml-4 list-disc">
              <li><strong>name</strong> : <em>String</em> - Nom du lien.</li>
              <li>
                <strong>path</strong> : <em>String</em> (optionnel) - Chemin du
                lien.
              </li>
              <li>
                <strong>children</strong> : <em>Array</em> (optionnel) -
                Sous-menu.
              </li>
              <li>
                <strong>iconSrc</strong> : <em>String</em> (optionnel) - URL
                d'une icône pour le lien.
              </li>
            </ul>
          </li>
          <li>
            <strong>userMenuLinks</strong> : <em>Array</em> (par défaut : []) -
            Liens du menu utilisateur. Structure similaire à `menuLinks`.
          </li>
          <li>
            <strong>isLoggedIn</strong> : <em>Boolean</em> (par défaut : false)
            - Indique si l'utilisateur est connecté.
          </li>
          <li>
            <strong>color</strong> : <em>String</em> (optionnel) - Couleur ou
            classe personnalisée pour le header.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Aperçu interactif
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <OrionHeader
          :logoSrc="'https://via.placeholder.com/100'"
          :menuLinks="menuLinks"
          :userMenuLinks="userMenuLinks"
          :isLoggedIn="true"
          color="bg-white"
          @logout="handleLogout"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Code d'exemple
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;template&gt;
  &lt;orion-header
    :logoSrc="'https://via.placeholder.com/100'"
    :menuLinks="menuLinks"
    :userMenuLinks="userMenuLinks"
    :isLoggedIn="true"
    color="bg-white"
    @logout="handleLogout"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionHeader from '@/components/OrionHeader.vue';

const menuLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', children: [
      { name: 'Service 1', path: '/services/1' },
      { name: 'Service 2', path: '/services/2' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const userMenuLinks = [
  { name: 'Profil', path: '/profile' },
  { name: 'Déconnexion', action: 'logout' },
];

const handleLogout = () => {
  console.log('Utilisateur déconnecté.');
};
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionHeader from '@/components/OrionHeader.vue';

const menuLinks = [
  { name: 'Accueil', path: '/' },
  {
    name: 'Services',
    children: [
      { name: 'Service 1', path: '/services/1' },
      { name: 'Service 2', path: '/services/2' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const userMenuLinks = [
  { name: 'Profil', path: '/profile' },
  { name: 'Déconnexion', action: 'logout' },
];

const handleLogout = () => {
  console.log('Utilisateur déconnecté.');
};
</script>
