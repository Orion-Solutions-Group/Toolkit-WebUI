<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionTable
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionTable est un composant de tableau réactif et flexible, conçu pour
        afficher des données avec des colonnes dynamiques, un tri intégré, des
        styles configurables et des actions personnalisées.
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
            <strong>rows</strong> : <em>Array</em> (requis) - Liste des objets
            représentant les données de chaque ligne.
          </li>
          <li>
            <strong>columns</strong> : <em>Array</em> (requis) - Liste des
            colonnes à afficher. Chaque colonne doit avoir :
            <ul class="ml-4 space-y-2">
              <li>
                <strong>key</strong> : <em>String</em> - Clé de la propriété
                dans l'objet ligne.
              </li>
              <li>
                <strong>label</strong> : <em>String</em> - Nom affiché pour la
                colonne.
              </li>
            </ul>
          </li>
          <li>
            <strong>type</strong> : <em>String</em> (par défaut : `'basic'`) -
            Type de tableau. Les valeurs possibles sont :
            <ul class="ml-4 space-y-2">
              <li>
                <strong>`basic`</strong> : Tableau simple sans style
                particulier.
              </li>
              <li>
                <strong>`striped`</strong> : Tableau avec des lignes alternées
                de couleur.
              </li>
              <li><strong>`hover`</strong> : Lignes surlignées au survol.</li>
              <li>
                <strong>`bordered`</strong> : Tableau avec des bordures autour
                des cellules.
              </li>
            </ul>
          </li>
          <li>
            <strong>actions</strong> : <em>Array</em> (optionnel) - Liste
            d'actions pour chaque ligne. Chaque action doit avoir :
            <ul class="ml-4 space-y-2">
              <li>
                <strong>label</strong> : <em>String</em> - Nom du bouton
                d'action.
              </li>
              <li>
                <strong>handler</strong> : <em>Function</em> - Fonction exécutée
                lors du clic sur le bouton.
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
      <div class="space-y-6">
        <!-- Exemple 1 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Tableau simple
          </h3>
          <OrionTable :rows="sampleRows" :columns="sampleColumns" />
        </div>

        <!-- Exemple 2 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Tableau avec tri et lignes alternées
          </h3>
          <OrionTable
            :rows="sampleRows"
            :columns="sampleColumns"
            type="striped"
          />
        </div>

        <!-- Exemple 3 -->
        <div>
          <h3 class="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Tableau avec actions personnalisées
          </h3>
          <OrionTable
            :rows="sampleRows"
            :columns="sampleColumns"
            :actions="sampleActions"
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
  &lt;!-- Exemple 1 : Tableau simple --&gt;
  &lt;orion-table :rows="sampleRows" :columns="sampleColumns" /&gt;

  &lt;!-- Exemple 2 : Tableau avec tri et lignes alternées --&gt;
  &lt;orion-table :rows="sampleRows" :columns="sampleColumns" type="striped" /&gt;

  &lt;!-- Exemple 3 : Tableau avec actions personnalisées --&gt;
  &lt;orion-table :rows="sampleRows" :columns="sampleColumns" :actions="sampleActions" /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionTable from '@/components/OrionTable.vue';

type TableAction = {
  label: string; // Libellé du bouton d'action
  handler: (row: Record&lt;string, any&gt;) =&gt; void; // Fonction déclenchée au clic, recevant la ligne en paramètre
};

const sampleRows = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

const sampleColumns = [
  { key: 'name', label: 'Nom' },
  { key: 'age', label: 'Âge' },
];

const sampleActions: TableAction[] = [
  { label: 'Modifier', handler: (row) =&gt; console.log('Modifier', row) },
  { label: 'Supprimer', handler: (row) =&gt; console.log('Supprimer', row) },
];
&lt;/script&gt;
</code>
</pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionTable from '@/components/OrionTable.vue';

type TableAction = {
  label: string; // Libellé du bouton d'action
  handler: (row: Record<string, any>) => void; // Fonction déclenchée au clic, recevant la ligne en paramètre
};

const sampleRows = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

const sampleColumns = [
  { key: 'name', label: 'Nom' },
  { key: 'age', label: 'Âge' },
];

const sampleActions: TableAction[] = [
  { label: 'Modifier', handler: (row) => console.log('Modifier', row) },
  { label: 'Supprimer', handler: (row) => console.log('Supprimer', row) },
];
</script>
