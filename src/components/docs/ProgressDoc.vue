<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionProgressBar
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionProgressBar est un composant simple et élégant permettant
        d'afficher une barre de progression animée. Il prend en charge les
        pourcentages visibles, les étapes et les couleurs personnalisées.
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
            <strong>progress</strong> : <em>Number</em> (requis, par défaut :
            `0`) - Valeur de la progression, entre `0` et `100`.
          </li>
          <li>
            <strong>color</strong> : <em>String</em> (par défaut :
            `bg-blue-500`) - Couleur de la barre de progression.
          </li>
          <li>
            <strong>showPercentage</strong> : <em>Boolean</em> (par défaut :
            `true`) - Affiche ou masque le pourcentage au-dessus ou à
            l'intérieur de la barre.
          </li>
          <li>
            <strong>steps</strong> : <em>Number</em> (par défaut : `0`) - Nombre
            d'étapes visibles sous forme de marques dans la barre.
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Aperçu interactif
      </h2>
      <div class="space-y-6">
        <!-- Exemple 1 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Barre avec pourcentage affiché
          </h3>
          <OrionProgressBar :progress="75" />
        </div>

        <!-- Exemple 2 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Barre avec étapes visibles
          </h3>
          <OrionProgressBar :progress="50" :steps="5" color="bg-green-500" />
        </div>

        <!-- Exemple 3 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Barre sans pourcentage visible
          </h3>
          <OrionProgressBar
            :progress="90"
            :showPercentage="false"
            color="bg-red-500"
          />
        </div>
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
  &lt;!-- Exemple 1 : Barre avec pourcentage affiché --&gt;
  &lt;orion-progress-bar :progress="75" /&gt;

  &lt;!-- Exemple 2 : Barre avec étapes visibles --&gt;
  &lt;orion-progress-bar :progress="50" :steps="5" color="bg-green-500" /&gt;

  &lt;!-- Exemple 3 : Barre sans pourcentage visible --&gt;
  &lt;orion-progress-bar :progress="90" :showPercentage="false" color="bg-red-500" /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionProgressBar from '@/components/OrionProgressBar.vue';
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionProgressBar from '@/components/OrionProgressBar.vue';
</script>
