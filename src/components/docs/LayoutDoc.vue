<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionLayout
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionLayout est un composant de mise en page intégré combinant la
        sidebar et le header de Orion.
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
            affiché dans le Header.
          </li>
          <li>
            <strong>menuLinks</strong> : <em>Array</em> (requis) - Liens du menu
            principal du Header. Chaque lien peut contenir :
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
                <strong>iconSrc</strong> : <em>String</em> (optionnel) - Icône
                associée.
              </li>
              <li>
                <strong>action</strong> : <em>String</em> (optionnel) - Action
                spécifique (ex : logout).
              </li>
            </ul>
          </li>
          <li>
            <strong>userMenuLinks</strong> : <em>Array</em> (par défaut : []) -
            Liens du menu utilisateur dans le Header. Structure similaire à
            `menuLinks`.
          </li>
          <li>
            <strong>sidebarItems</strong> : <em>Array</em> (requis) - Liens du
            menu de la Sidebar. Chaque élément peut contenir :
            <ul class="ml-4 list-disc">
              <li>
                <strong>name</strong> : <em>String</em> - Nom de l'élément.
              </li>
              <li>
                <strong>path</strong> : <em>String</em> (optionnel) - Chemin
                associé.
              </li>
              <li>
                <strong>icon</strong> : <em>String</em> (optionnel) - Icône
                associée.
              </li>
              <li>
                <strong>badge</strong> : <em>String</em> (optionnel) - Étiquette
                affichée à côté de l'élément.
              </li>
            </ul>
          </li>
          <li>
            <strong>isLoggedIn</strong> : <em>Boolean</em> (par défaut : false)
            - Indique si l'utilisateur est connecté.
          </li>
          <li>
            <strong>sidebarColor</strong> : <em>String</em> (par défaut :
            "bg-gray-900") - Couleur ou classe de style de la Sidebar.
          </li>
          <li>
            <strong>headerColor</strong> : <em>String</em> (par défaut :
            "bg-white") - Couleur ou classe de style du Header.
          </li>
        </ul>
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
  &lt;orion-layout
    :logoSrc="'https://via.placeholder.com/100'"
    :menuLinks="menuLinks"
    :userMenuLinks="userMenuLinks"
    :sidebarItems="sidebarItems"
    :isLoggedIn="true"
    @logout="handleLogout"
  &gt;
    &lt;div class="p-4"&gt;
      &lt;h2 class="text-xl font-semibold"&gt;Contenu Principal&lt;/h2&gt;
      &lt;p class="mt-2 text-gray-600"&gt;Voici la zone principale de contenu.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/orion-layout&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionLayout from '@/components/OrionLayout.vue';

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

const sidebarItems = [
  { name: 'Tableau de bord', path: '/dashboard', icon: 'icon-dashboard' },
  { name: 'Projets', path: '/projects', icon: 'icon-projects', badge: '4' },
  { name: 'Messages', path: '/messages', icon: 'icon-messages', badge: '9+' },
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
