<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Modal</h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        Le composant Modal est utilisé pour afficher une boîte de dialogue avec
        des options de personnalisation. Il prend en charge les tailles, les
        types, les icônes, et permet de capturer des actions utilisateur.
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
            <strong>title</strong> : <em>String</em> (par défaut: "Modal Title")
            - Le titre affiché dans le modal.
          </li>
          <li>
            <strong>cancelText</strong> : <em>String</em> (par défaut: "Cancel")
            - Texte du bouton d'annulation.
          </li>
          <li>
            <strong>confirmText</strong> : <em>String</em> (par défaut: "Okay,
            got it") - Texte du bouton de confirmation.
          </li>
          <li>
            <strong>open</strong> : <em>Boolean</em> (par défaut: false) -
            Détermine si le modal est ouvert ou fermé.
          </li>
          <li>
            <strong>icon</strong> : <em>Object</em> (optionnel) - Icône
            personnalisée pour le modal.
          </li>
          <li>
            <strong>size</strong> : <em>String</em> (par défaut: "lg") - Taille
            du modal. Options : "sm", "md", "lg", "xl".
          </li>
          <li>
            <strong>type</strong> : <em>String</em> (par défaut: "primary") -
            Type du modal. Options : "primary", "danger", "success".
          </li>
          <li>
            <strong>customColor</strong> : <em>String</em> (optionnel) - Couleur
            personnalisée pour l'icône et le bouton de confirmation.
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
          @click="isModalOpen = true"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Ouvrir le modal
        </button>
        <OrionModal
          :title="'Confirmation'"
          :cancelText="'Annuler'"
          :confirmText="'Confirmer'"
          :open="isModalOpen"
          :type="'danger'"
          @accept="handleConfirm"
          @update:open="(value: boolean) => (isModalOpen = value)"
        >
          <p class="text-sm text-gray-600 dark:text-gray-300">
            Êtes-vous sûr de vouloir effectuer cette action ? Cette opération
            est irréversible.
          </p>
        </OrionModal>
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
      @click="isModalOpen = true"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    &gt;
      Ouvrir le modal
    &lt;/button&gt;
    &lt;Modal
      :title="'Confirmation'"
      :cancelText="'Annuler'"
      :confirmText="'Confirmer'"
      :open="isModalOpen"
      :type="'danger'"
      @accept="handleConfirm"
      @update:open="(value) =&gt; (isModalOpen = value)"
    &gt;
      &lt;p class="text-sm text-gray-600 dark:text-gray-300"&gt;
        Êtes-vous sûr de vouloir effectuer cette action ? Cette opération est irréversible.
      &lt;/p&gt;
    &lt;/Modal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const handleConfirm = () => {
  console.log('Action confirmée');
};
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionModal from '@/components/OrionModal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const handleConfirm = () => {
  console.log('Action confirmée');
};
</script>
