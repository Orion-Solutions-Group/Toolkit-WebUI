<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionButton
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionButton est un bouton personnalisable avec des options telles que
        l'état de chargement, les icônes positionnées, et les styles dynamiques.
        Il est conçu pour s'adapter facilement à divers scénarios dans une
        interface utilisateur.
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
            <strong>label</strong> : <em>String</em> (requis) - Le texte affiché
            dans le bouton.
          </li>
          <li>
            <strong>loading</strong> : <em>Boolean</em> (par défaut: false) -
            Affiche un état de chargement avec un spinner.
          </li>
          <li>
            <strong>icon</strong> : <em>String</em> (optionnel) - Classe CSS de
            l'icône à afficher.
          </li>
          <li>
            <strong>iconPosition</strong> : <em>String</em> (par défaut: "left")
            - Position de l'icône, soit "left", soit "right".
          </li>
          <li>
            <strong>disabled</strong> : <em>Boolean</em> (par défaut: false) -
            Désactive le bouton.
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
        <OrionButton
          :label="'Cliquer ici'"
          :loading="buttonLoading"
          :icon="'icon-check'"
          :iconPosition="'left'"
          :disabled="buttonDisabled"
          @click="handleAction"
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
  &lt;div&gt;
    &lt;OrionButton
      :label="'Cliquer ici'"
      :loading="buttonLoading"
      :icon="'icon-check'"
      :iconPosition="'left'"
      :disabled="handleAction"
    /&gt;
    &lt;button
      @click="toggleLoading"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4"
    &gt;
      Basculer l'état de chargement
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue';
import OrionButton from '@/components/OrionButton.vue';

const buttonLoading = ref(false);
const buttonDisabled = ref(false);

const handleAction = () => {
  buttonLoading.value = !buttonLoading.value;
};
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OrionButton from '@/components/OrionButton.vue';

const buttonLoading = ref(false);
const buttonDisabled = ref(false);

const handleAction = () => {
  buttonLoading.value = !buttonLoading.value;
};
</script>
