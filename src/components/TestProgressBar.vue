<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { defineRule, ErrorMessage } from 'vee-validate';

// Définir une règle pour valider la progression entre 0 et 100
defineRule('progress', (value: number) => {
  if (value < 0 || value > 100) {
    return 'La progression doit être entre 0 et 100';
  }
  return true;
});

// Déclaration des props
const props = defineProps({
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
  color: {
    type: String,
    default: 'bg-blue-500',
  },
  showPercentage: {
    type: Boolean,
    default: true,
  },
  height: {
    type: String,
    default: 'h-4', // Par exemple, h-4 pour une barre fine
  },
  width: {
    type: String,
    default: 'w-full', // Pleine largeur par défaut
  },
  steps: {
    type: Number,
    default: 0, // Pas d'étapes par défaut
  },
});

// Utilisation de Vee-Validate pour valider que le progress est entre 0 et 100


// Animation fluide pour la barre de progression
const animatedProgress = ref(props.progress);

// Regarder les changements de progress et animer
watch(() => props.progress, (newVal) => {
  animatedProgress.value = newVal;
});

// Calcul des étapes si steps est défini
const stepWidth = computed(() => {
  return props.steps > 0 ? `${100 / props.steps}%` : '100%';
});
</script>

<template>
  <div class="progress-container">
    <!-- Affichage du pourcentage si le prop showPercentage est activé -->
    <div v-if="showPercentage" class="mb-2 text-right font-medium text-sm">
      {{ props.progress }}%
    </div>

    <!-- Conteneur de la barre de progression -->
    <div :class="['relative', width, 'bg-gray-200', height, 'rounded']">
      <!-- Barre de progression animée -->
      <div
        :class="['absolute left-0 top-0 rounded', height, color, 'transition-all ease-in-out duration-500']"
        :style="{ width: `${animatedProgress.valueOf}%` }"
      >
        <!-- Affichage du pourcentage à l'intérieur de la barre si configuré -->
        <span v-if="!showPercentage" class="text-white text-sm font-semibold pl-2">
          {{ props.progress }}%
        </span>
      </div>

      <!-- Si steps est défini, ajouter des marques pour les étapes -->
      <div v-if="steps > 0" class="absolute inset-0 flex">
        <span
          v-for="step in steps"
          :key="step"
          :style="{ width: stepWidth }"
          class="h-full border-r border-white"
        ></span>
      </div>
    </div>

    <!-- Message d'erreur pour la validation si le progrès est hors limites -->
    <ErrorMessage name="progress" />
  </div>
</template>
