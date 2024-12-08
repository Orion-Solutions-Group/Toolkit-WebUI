<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionDrawer
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionDrawer est un composant coulissant (drawer) permettant d'afficher
        du contenu sur le côté de l'écran. Il supporte les animations fluides et
        offre une expérience utilisateur moderne.
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
            <strong>isOpen</strong> : <em>Boolean</em> (requis) - Contrôle si le
            drawer est ouvert ou fermé.
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
        <button
          @click="toggleDrawer"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Ouvrir le drawer
        </button>
        <OrionDrawer :isOpen="drawerOpen" @update:isOpen="drawerOpen = $event">
          <div class="p-4">
            <h2 class="text-xl font-semibold">Contenu du Drawer</h2>
            <p class="mt-2 text-gray-600">
              Voici un exemple de contenu affiché dans le drawer.
            </p>
          </div>
        </OrionDrawer>
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
  &lt;div&gt;
    &lt;button
      @click="toggleDrawer"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    &gt;
      Ouvrir le drawer
    &lt;/button&gt;
    &lt;orion-drawer :isOpen="drawerOpen" @update:isOpen="drawerOpen = $event"&gt;
      &lt;div class="p-4"&gt;
        &lt;h2 class="text-xl font-semibold"&gt;Contenu du Drawer&lt;/h2&gt;
        &lt;p class="mt-2 text-gray-600"&gt;
          Voici un exemple de contenu affiché dans le drawer.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/orion-drawer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionDrawer from '@/components/OrionDrawer.vue';
import { ref } from 'vue';

const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionDrawer from '@/components/OrionDrawer.vue';
import { ref } from 'vue';

const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};
</script>
