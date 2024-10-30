<script setup lang="ts">
<<<<<<< HEAD
import OrionCalendar from './components/OrionCalendar.vue';
</script>

<template>
  <OrionCalendar />
</template>
=======
import { ref } from 'vue';
import OrionModal from './components/OrionModal.vue';
import CustomButton from './components/ButtonTest.vue'; // Assurez-vous que le chemin est correct

const showModal = ref(false);

const handleAccept = () => {
  showModal.value = false;
  console.log('Modal accepted');
  console.log("showModal", showModal.value);
};
</script>

<template>
  <h1 class="text-3xl font-bold underline mb-4">
    Test du composant CustomButton
  </h1>

  <!-- Test avec label, marges et padding -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test avec label, marges et padding</h2>
    <CustomButton label="Bouton avec marges" margin="my-4" padding="px-6 py-3" />
    <CustomButton label="Petit bouton" margin="my-2" padding="px-2 py-1" />
    <CustomButton label="Grand bouton" margin="mt-6 mb-4" padding="px-8 py-4" />
  </div>

  <!-- Test avec icône à gauche et à droite -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test avec icône à gauche et à droite</h2>
    <CustomButton label="Icône gauche" icon="fa fa-check" iconPosition="left" margin="my-4" />
    <CustomButton label="Icône droite" icon="fa fa-arrow-right" iconPosition="right" margin="my-4" />
  </div>

  <!-- Test de l'état de chargement -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état de chargement</h2>
    <CustomButton label="Chargement..." :loading="true" margin="my-4" padding="px-4 py-2" />
    <CustomButton label="Normal" :loading="false" margin="my-4" padding="px-4 py-2" />
  </div>

  <!-- Test de l'état désactivé -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test de l'état désactivé</h2>
    <CustomButton label="Désactivé" :disabled="true" margin="my-4" padding="px-4 py-2" />
    <CustomButton label="Actif" :disabled="false" margin="my-4" padding="px-4 py-2" />
  </div>

  <!-- Test du bouton cliquable avec fonction -->
  <div class="my-4">
    <h2 class="text-xl font-bold">Test du bouton cliquable avec fonction</h2>
    <CustomButton
      label="Clique-moi"
      margin="my-4"
      padding="px-4 py-2"
      @click="handleAccept"
    />
  </div>

  <!-- Bouton pour ouvrir le modal -->
  <button @click="showModal = true" class="btn-primary">Ouvrir le modal</button>
  <div>
    <OrionModal
      :open="showModal"
      title="Supprimer un client ?"
      message="Voulez-vous vraiment supprimer ce client ? Cette action est irréversible."
      confirmText="Accepter"
      cancelText="Annuler"
      @accept="handleAccept"
      @update:open="handleAccept"
      size="lg"
    />
  </div>
</template>


>>>>>>> a7d2366 (Add marging and padding to button)
