<script setup lang="ts">
import { ref } from 'vue';

import CustomInput from './components/InputTest.vue'; // Assurez-vous que le chemin est correct

const inputValue = ref(''); // Lier la valeur de l'input
const inputError = ref('');
const loadingState = ref(false);
const autoSuggestions = ref(['Suggestion 1', 'Suggestion 2', 'Autre Suggestion']);

// Fonction pour simuler une validation simple
const validateInput = () => {
  if (inputValue.value.length < 3) {
    inputError.value = 'La saisie doit contenir au moins 3 caractères.';
  } else {
    inputError.value = '';
  }
};

// Fonction pour simuler un chargement dynamique
const toggleLoading = () => {
  loadingState.value = !loadingState.value;
};
</script>
<template>
  <h1 class="text-3xl font-bold underline mb-4">Test du composant CustomInput</h1>

  <!-- Icônes gauche et droite -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'icône gauche et droite</h2>
    <CustomInput
      v-model="inputWithIcons"
      label="Email avec icônes"
      type="email"
      leftIcon="fa fa-envelope"
      rightIcon="fa fa-check"
      placeholder="Entrez votre email"
    />
  </div>

  <!-- Message d'erreur -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test du message d'erreur</h2>
    <CustomInput
      v-model="inputWithError"
      label="Nom d'utilisateur avec erreur"
      type="text"
      :error="inputError"
      placeholder="Entrez un nom d'utilisateur"
    />
    <button @click="toggleError" class="btn-primary mt-2">Simuler une erreur</button>
  </div>

  <!-- État de chargement -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état de chargement</h2>
    <CustomInput
      v-model="inputLoading"
      label="Chargement de l'input"
      type="text"
      :isLoading="loadingState"
      placeholder="Saisissez quelque chose"
    />
    <button @click="toggleLoading" class="btn-primary mt-2">
      {{ loadingState ? 'Arrêter le chargement' : 'Démarrer le chargement' }}
    </button>
  </div>

  <!-- Auto-complétion -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'auto-complétion</h2>
    <CustomInput
      v-model="inputWithSuggestions"
      label="Nom d'utilisateur avec auto-complétion"
      type="text"
      placeholder="Tapez pour voir les suggestions"
      :autoCompleteResults="['Suggestion 1', 'Suggestion 2', 'Test', 'Utilisateur']"
    />
  </div>

  <!-- Types d'input -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test du type d'input</h2>
    <CustomInput
      v-model="inputEmail"
      label="Email"
      type="email"
      placeholder="Entrez votre email"
    />
    <CustomInput
      v-model="inputPassword"
      label="Mot de passe"
      type="password"
      placeholder="Entrez votre mot de passe"
    />
  </div>

  <!-- Placeholder -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test du placeholder</h2>
    <CustomInput
      v-model="inputPlaceholder"
      label="Champ avec placeholder"
      type="text"
      placeholder="Ceci est un placeholder"
    />
  </div>

  <!-- État désactivé -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état désactivé</h2>
    <CustomInput
      v-model="inputDisabled"
      label="Champ désactivé"
      type="text"
      placeholder="Ce champ est désactivé"
      :disabled="true"
    />
  </div>
</template>






