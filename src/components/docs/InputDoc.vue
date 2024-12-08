<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionInput
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionInput est un composant d'entrée de texte qui permet à l'utilisateur
        de saisir des informations, avec des résultats d'auto-complétion et des
        icônes.
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
            <strong>modelValue</strong> : <em>String</em> (requis) - La valeur
            de l'entrée.
          </li>
          <li>
            <strong>label</strong> : <em>String</em> (requis) - L'étiquette
            associée à l'entrée.
          </li>
          <li>
            <strong>type</strong> : <em>String</em> (par défaut: "text") - Le
            type de l'entrée.
          </li>
          <li>
            <strong>error</strong> : <em>String</em> (par défaut: "") - Message
            d'erreur à afficher.
          </li>
          <li>
            <strong>isLoading</strong> : <em>Boolean</em> (par défaut: false) -
            Indique si un chargement est en cours.
          </li>
          <li>
            <strong>autoCompleteResults</strong> : <em>Array</em> (par défaut:
            []) - Résultats d'auto-complétion.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Exemple d'utilisation
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;template&gt;
  &lt;OrionInput
    v-model="value"
    label="Nom"
    placeholder="Entrez votre nom"
    :autoCompleteResults="['John', 'Jane', 'Joe']"
    leftIcon="icon-user"
    rightIcon="icon-search"
    :isLoading="false"
    margin="my-4"
  /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionInput from '@/components/OrionInput.vue';

const value = '';
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>
