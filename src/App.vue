<script setup lang="ts">
import { ref } from 'vue';
import OrionModal from './components/OrionModal.vue';
import TestProgressBar from "@/components/OrionProgressBar.vue";

const showModal = ref(false);

const handleAccept = () => {
  showModal.value = false;
  console.log('Modal accepted');
  console.log("showModal", showModal.value);
};

// Données pour les différents tests
const progressValue = ref(50);

// Fonctions pour la validation des valeurs
const decreaseProgress = () => {
  progressValue.value = -10;
};

const increaseProgress = () => {
  progressValue.value = 110;
};
</script>

<template>
  <h1 class="text-3xl font-bold underline mb-4">Test du composant TestProgressBar</h1>

  <!-- Test de la progression simple avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de la progression simple</h2>
    <TestProgressBar :progress="50" color="bg-green-500" margin="my-4" padding="p-2" />
    <TestProgressBar :progress="75" color="bg-blue-500" margin="my-2" padding="p-1" />
    <TestProgressBar :progress="100" color="bg-red-500" margin="my-6" padding="p-3" />
  </div>

  <!-- Test de l'affichage du pourcentage avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'affichage du pourcentage</h2>
    <TestProgressBar :progress="40" color="bg-yellow-500" :showPercentage="true" margin="my-4" padding="p-2" />
    <TestProgressBar :progress="90" color="bg-purple-500" :showPercentage="false" margin="mt-6 mb-3" padding="px-4 py-2" />
  </div>

  <!-- Test des couleurs de la barre avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des couleurs de la barre</h2>
    <TestProgressBar :progress="60" color="bg-indigo-500" margin="my-4" padding="px-6 py-2" />
    <TestProgressBar :progress="45" color="bg-pink-500" margin="my-2" padding="p-4" />
    <TestProgressBar :progress="30" color="bg-teal-500" margin="my-3" padding="px-2 py-1" />
  </div>

  <!-- Test des tailles de la barre avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des tailles de la barre</h2>
    <TestProgressBar :progress="70" color="bg-orange-500" height="h-1" margin="mb-2" padding="px-4" />
    <TestProgressBar :progress="50" color="bg-blue-500" height="h-2" margin="mb-4" padding="py-3" />
    <TestProgressBar :progress="90" color="bg-red-500" height="h-6" margin="mt-2" padding="p-2" />
  </div>

  <!-- Test de l'affichage des étapes avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'affichage des étapes</h2>
    <TestProgressBar :progress="25" color="bg-green-500" height="h-4" :steps="4" margin="mb-4" padding="p-1" />
    <TestProgressBar :progress="50" color="bg-yellow-500" height="h-2" :steps="5" margin="my-2" padding="px-3" />
    <TestProgressBar :progress="75" color="bg-purple-500" height="h-6" :steps="10" margin="my-6" padding="py-3" />
  </div>

  <!-- Test de la validation des valeurs avec margin et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de la validation des valeurs</h2>
    <TestProgressBar :progress="progressValue" color="bg-red-500" margin="my-4" padding="px-4 py-2" />
    <button @click="decreaseProgress" class="btn-primary mt-2">Diminuer à -10%</button>
    <button @click="increaseProgress" class="btn-primary mt-2">Augmenter à 110%</button>
  </div>
</template>

<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
