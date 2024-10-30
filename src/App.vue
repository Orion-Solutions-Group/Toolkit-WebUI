<script setup lang="ts">
import { ref } from 'vue';
import InputTest from '@/components/InputTest.vue';

const inputWithIcons = ref('');
const inputWithError = ref('');
const inputLoading = ref('');
const inputWithSuggestions = ref('');
const inputEmail = ref('');
const inputPassword = ref('');
const inputPlaceholder = ref('');
const inputDisabled = ref('');

const inputError = ref('');
const loadingState = ref(false);
const autoSuggestions = ref(['Suggestion 1', 'Suggestion 2', 'Autre Suggestion']);

const validateInput = () => {
  if (inputWithError.value.length < 3) {
    inputError.value = 'La saisie doit contenir au moins 3 caractères.';
  } else {
    inputError.value = '';
  }
};

const toggleError = () => {
  inputError.value = inputError.value ? '' : 'Une erreur est survenue.';
};

const toggleLoading = () => {
  loadingState.value = !loadingState.value;
};
</script>

<template>
  <h1 class="text-3xl font-bold underline mb-4">Test du composant CustomInput</h1>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'icône gauche et droite</h2>
    <InputTest
      v-model="inputWithIcons"
      label="Email avec icônes"
      type="email"
      leftIcon="fa fa-envelope"
      rightIcon="fa fa-check"
      placeholder="Entrez votre email"
    />
  </div>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test du message d'erreur</h2>
    <InputTest
      v-model="inputWithError"
      label="Nom d'utilisateur avec erreur"
      type="text"
      :error="inputError"
      placeholder="Entrez un nom d'utilisateur"
    />
    <button @click="toggleError" class="btn-primary mt-2">Simuler une erreur</button>
  </div>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état de chargement</h2>
    <InputTest
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

  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'auto-complétion</h2>
    <InputTest
      v-model="inputWithSuggestions"
      label="Nom d'utilisateur avec auto-complétion"
      type="text"
      placeholder="Tapez pour voir les suggestions"
      :autoCompleteResults="['Suggestion 1', 'Suggestion 2', 'Test', 'Utilisateur']"
    />
  </div>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test du type d'input</h2>
    <InputTest
      v-model="inputEmail"
      label="Email"
      type="email"
      placeholder="Entrez votre email"
    />
    <InputTest
      v-model="inputPassword"
      label="Mot de passe"
      type="password"
      placeholder="Entrez votre mot de passe"
    />
  </div>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test du placeholder</h2>
    <InputTest
      v-model="inputPlaceholder"
      label="Champ avec placeholder"
      type="text"
      placeholder="Ceci est un placeholder"
    />
  </div>

  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état désactivé</h2>
    <InputTest
      v-model="inputDisabled"
      label="Champ désactivé"
      type="text"
      placeholder="Ce champ est désactivé"
      :disabled="true"
    />
  </div>
</template>
