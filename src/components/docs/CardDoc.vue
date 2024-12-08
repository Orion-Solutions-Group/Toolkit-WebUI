<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionCard
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionCard est un composant de carte personnalisable qui affiche une
        image de profil en haut, avec un emplacement pour du contenu
        supplémentaire via des slots.
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
            <strong>profileImage</strong> : <em>String</em> (par défaut :
            "/assets/vue.svg") - URL de l'image de profil affichée en haut de la
            carte.
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
        <OrionCard :profileImage="'https://via.placeholder.com/50'">
          <div class="mt-7 p-6 text-center">
            <h2 class="text-xl font-semibold">Nom de l'utilisateur</h2>
            <p class="text-gray-600">
              Description ou informations supplémentaires.
            </p>
          </div>
        </OrionCard>
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
  &lt;orion-card :profileImage="'https://via.placeholder.com/150'"&gt;
    &lt;div class="p-6 text-center"&gt;
      &lt;h2 class="text-xl font-semibold"&gt;Nom de l'utilisateur&lt;/h2&gt;
      &lt;p class="text-gray-600"&gt;Description ou informations supplémentaires.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/orion-card&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionCard from '@/components/OrionCard.vue';
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionCard from '@/components/OrionCard.vue';
</script>
