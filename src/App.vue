<script setup lang="ts">
import { ref } from 'vue';
import OrionModal from './components/OrionModal.vue';
import BadgeComponent from './components/TestBadge.vue';
const showModal = ref(false);

const handleAccept = () => {
  showModal.value = false;
  console.log('Modal accepted');
  console.log('showModal', showModal.value);
};
</script>

<template>
  <h1 class="text-3xl font-bold underline mb-4">Test du composant Badge</h1>

  <!-- Test du label, marges et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test avec label, marges et padding</h2>
    <BadgeComponent
      label="Badge avec marges"
      margin="my-4"
      padding="px-4 py-2"
    />
    <BadgeComponent label="Petit Badge" margin="my-2" padding="px-2 py-1" />
    <BadgeComponent
      label="Grand Badge"
      margin="mt-6 mb-4"
      padding="px-8 py-4"
    />
  </div>

  <!-- Test des couleurs du badge -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des couleurs du badge</h2>
    <BadgeComponent label="Succès" color="bg-green-500" />
    <BadgeComponent label="Erreur" color="bg-red-500" />
    <BadgeComponent label="Information" color="bg-blue-500" />
  </div>

  <!-- Test des tailles du badge -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des tailles du badge</h2>
    <BadgeComponent label="Petit Badge" size="text-xs" />
    <BadgeComponent label="Moyen Badge" size="text-sm" />
    <BadgeComponent label="Grand Badge" size="text-lg" />
  </div>

  <!-- Test des variantes du badge -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test des variantes du badge</h2>
    <BadgeComponent label="Badge Plein" variant="full" color="bg-yellow-500" />
    <BadgeComponent
      label="Badge Outline"
      variant="outline"
      color="bg-purple-500"
    />
  </div>

  <!-- Test des icônes gauche et droite -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test avec icône à gauche et à droite</h2>
    <BadgeComponent label="Icône gauche" leftIcon="fa fa-check" />
    <BadgeComponent label="Icône droite" rightIcon="fa fa-arrow-right" />
  </div>

  <!-- Test de l'état de notification (dot) -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état de notification</h2>
    <BadgeComponent label="Notification" dot color="bg-orange-500" />
  </div>

  <!-- Test de l'état cliquable -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état cliquable</h2>
    <BadgeComponent label="Cliquable" clickable color="bg-pink-500" />
  </div>

  <!-- Test de la visibilité conditionnelle -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de la visibilité conditionnelle</h2>
    <BadgeComponent label="Visible" visible />
    <BadgeComponent label="Invisible" :visible="false" />
  </div>
</template>
