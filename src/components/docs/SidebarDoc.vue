<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionSidebar
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionSidebar est un composant de barre latérale configurable, conçu pour
        afficher un menu de navigation avec des icônes, badges, et une
        personnalisation des couleurs.
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
            <strong>items</strong> : <em>Array</em> (requis) - Liste des
            éléments du menu. Chaque élément peut avoir les propriétés suivantes
            :
            <ul class="ml-4 space-y-2">
              <li>
                <strong>name</strong> : <em>String</em> (requis) - Nom de
                l'élément du menu.
              </li>
              <li>
                <strong>path</strong> : <em>String</em> (optionnel) - Lien de
                navigation de l'élément.
              </li>
              <li>
                <strong>icon</strong> : <em>String</em> (optionnel) - Icône SVG
                associée à l'élément.
              </li>
              <li>
                <strong>badge</strong> : <em>String</em> (optionnel) - Badge
                associé à l'élément.
              </li>
            </ul>
          </li>
          <li>
            <strong>sidebarId</strong> : <em>String</em> (par défaut :
            `'default-sidebar'`) - ID unique pour le conteneur de la barre
            latérale.
          </li>
          <li>
            <strong>sidebarTitle</strong> : <em>String</em> (par défaut :
            `'Sidebar'`) - Titre affiché en haut de la barre latérale.
          </li>
          <li>
            <strong>color</strong> : <em>String</em> (optionnel) - Couleur de
            fond personnalisée pour la barre latérale.
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
  &lt;!-- Exemple 1 : Barre latérale avec des éléments simples --&gt;
  &lt;orion-sidebar
    :items="[
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' }
    ]"
    sidebarTitle="Menu principal"
    color="bg-gray-100"
  /&gt;

  &lt;!-- Exemple 2 : Barre latérale avec icônes et badges --&gt;
  &lt;orion-sidebar
    :items="[
      { name: 'Dashboard', path: '/dashboard', icon: '#icon-dashboard', badge: '4' },
      { name: 'Paramètres', path: '/settings', icon: '#icon-settings' }
    ]"
    sidebarTitle="Navigation"
    color="bg-gray-900 text-white"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionSidebar from '@/components/OrionSidebar.vue';
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>
