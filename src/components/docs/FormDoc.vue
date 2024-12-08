<!-- Section Documentation -->
<template>
  <div class="space-y-10">
    <section>
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        OrionForm
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        OrionForm est un composant de mise en page divisé conçu pour afficher
        une image d'un côté et un formulaire ou un contenu personnalisé de
        l'autre. Il prend en charge la personnalisation de la position de
        l'image.
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
            <strong>imageUrl</strong> : <em>String</em> (requis) - URL de
            l'image à afficher.
          </li>
          <li>
            <strong>position</strong> : <em>String</em> (par défaut : "left") -
            Position de l'image ("left" ou "right").
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
        <OrionForm imageUrl="https://via.placeholder.com/600" position="left">
          <div class="text-center">
            <h2 class="text-xl font-semibold">Titre du formulaire</h2>
            <form class="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Nom"
                class="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                class="w-full p-2 border rounded-lg"
              />
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Soumettre
              </button>
            </form>
          </div>
        </OrionForm>
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
  &lt;orion-form imageUrl="https://via.placeholder.com/600" position="left"&gt;
    &lt;div class="text-center"&gt;
      &lt;h2 class="text-xl font-semibold"&gt;Titre du formulaire&lt;/h2&gt;
      &lt;form class="mt-4 space-y-4"&gt;
        &lt;input
          type="text"
          placeholder="Nom"
          class="w-full p-2 border rounded-lg"
        /&gt;
        &lt;input
          type="email"
          placeholder="Email"
          class="w-full p-2 border rounded-lg"
        /&gt;
        &lt;button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        &gt;
          Soumettre
        &lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/orion-form&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import OrionForm from '@/components/OrionForm.vue';
&lt;/script&gt;</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OrionForm from '@/components/OrionForm.vue';
</script>
