<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        Comment créer une documentation pour un composant
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        Ce guide décrit les étapes nécessaires pour ajouter une nouvelle
        documentation à votre projet Orion.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Étape 1 : Créer un fichier pour le composant de documentation
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          Allez dans le dossier <code>src/docs</code> et créez un fichier Vue
          nommé <code>NomDuComposantDoc.vue</code>. <br />Exemple :
        </p>
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;template&gt;
  &lt;div class="space-y-10"&gt;
    &lt;section&gt;
      &lt;h1 class="text-3xl font-bold"&gt;Titre de votre composant&lt;/h1&gt;
      &lt;p class="text-gray-600"&gt;Description ici.&lt;/p&gt;
    &lt;/section&gt;
    ...
  &lt;/div&gt;
&lt;/template&gt;
</code>
        </pre>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Étape 2 : Ajouter le composant au gestionnaire de documentation
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          Ouvrez le fichier <code>Documentation.vue</code> (ou similaire) et
          ajoutez une condition <code>v-if</code> pour intégrer votre composant
          de documentation.<br />
          Exemple :
        </p>
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;div v-if="getCurrentValueOfCurrentComponent() === 'NomDuComposant'"&gt;
  &lt;NomDuComposantDoc
    componentTitle="Titre"
    componentDescription="Description"
    ...
  /&gt;
&lt;/div&gt;
</code>
        </pre>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Étape 3 : Ajouter une entrée dans le menu de navigation
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          Ajoutez une entrée dans le menu de navigation pour permettre aux
          utilisateurs de sélectionner ce composant dans la documentation.
          <br />Exemple :
        </p>
        <pre
          class="overflow-x-auto bg-gray-900 text-white p-4 rounded-lg text-sm"
        >
<code>&lt;ul v-if="openMenu === 'composants'"&gt;
  &lt;li @click="currentComponent = 'NomDuComposant'"&gt;
    &lt;a href="#"&gt;Nom Du Composant&lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</code>
        </pre>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Exemple de résultat
      </h2>
      <div
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
      >
        <p class="text-gray-600 dark:text-gray-300">
          Une fois les étapes terminées, votre documentation sera intégrée et
          affichée dans le toolkit Orion.
        </p>
      </div>
    </section>
  </div>
</template>
