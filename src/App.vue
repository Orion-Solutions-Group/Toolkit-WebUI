<script setup lang="ts">

import { ref } from 'vue';
import OrionModal from './components/OrionModal.vue';
import TestProgressBar from "@/components/TestProgressBar.vue";

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

  <!-- Test de la progression simple -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de la progression simple</h2>
    <TestProgressBar :progress="50" color="bg-green-500" />
    <TestProgressBar :progress="75" color="bg-blue-500" />
    <TestProgressBar :progress="100" color="bg-red-500" />
  </div>

  <!-- Test de l'affichage du pourcentage -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'affichage du pourcentage</h2>
    <TestProgressBar :progress="40" color="bg-yellow-500" :showPercentage="true" />
    <TestProgressBar :progress="90" color="bg-purple-500" :showPercentage="false" />
  </div>

  <!-- Test des couleurs de la barre -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des couleurs de la barre</h2>
    <TestProgressBar :progress="60" color="bg-indigo-500" />
    <TestProgressBar :progress="45" color="bg-pink-500" />
    <TestProgressBar :progress="30" color="bg-teal-500" />
  </div>

  <!-- Test des tailles de la barre -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des tailles de la barre</h2>
    <TestProgressBar :progress="70" color="bg-orange-500" height="h-1" />
    <TestProgressBar :progress="50" color="bg-blue-500" height="h-2" />
    <TestProgressBar :progress="90" color="bg-red-500" height="h-6" />
  </div>

  <!-- Test de l'affichage des étapes -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'affichage des étapes</h2>
    <TestProgressBar :progress="25" color="bg-green-500" height="h-4" :steps="4" />
    <TestProgressBar :progress="50" color="bg-yellow-500" height="h-2" :steps="5" />
    <TestProgressBar :progress="75" color="bg-purple-500" height="h-6" :steps="10" />
  </div>

  <!-- Test de la validation des valeurs -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de la validation des valeurs</h2>
    <TestProgressBar :progress="progressValue" color="bg-red-500" />
    <button @click="decreaseProgress" class="btn-primary mt-2">Diminuer à -10%</button>
    <button @click="increaseProgress" class="btn-primary mt-2">Augmenter à 110%</button>
  </div>


</template>




