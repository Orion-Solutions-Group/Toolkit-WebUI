<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        Breadcrumb
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        Breadcrumb est un composant de navigation hiérarchique pour afficher et
        naviguer entre plusieurs niveaux de contenu.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Props
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <ul class="space-y-4">
          <li>
            <strong>items</strong> : <em>Array</em> (requis) - Liste des
            éléments, chaque élément doit contenir :
            <ul class="ml-6 list-disc text-sm text-gray-600 dark:text-gray-400">
              <li>
                <strong>label</strong> : <em>String</em> - Texte de l'élément.
              </li>
              <li>
                <strong>href</strong> : <em>String</em> - Lien vers la page
                associée.
              </li>
              <li>
                <strong>icon</strong> : <em>Object</em> (optionnel) - Icône
                associée à l'élément.
              </li>
            </ul>
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
        <OrionBreadcrumb :items="breadcrumbItems" />
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
  &lt;OrionBreadcrumb
    :items="breadcrumbItems"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionBreadcrumb from '@/components/OrionBreadcrumb.vue';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/dashboard', icon: null },
  { label: 'Settings', href: '/settings', icon: null },
  { label: 'Profile', href: '/profile', icon: null },
];
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionBreadcrumb from '@/components/OrionBreadcrumb.vue';

const breadcrumbItems = [
  { label: 'Dashboard', href: '/dashboard', icon: null },
  { label: 'Settings', href: '/settings', icon: null },
  { label: 'Profile', href: '/profile', icon: null },
];
</script>
