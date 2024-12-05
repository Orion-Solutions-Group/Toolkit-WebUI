<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  onClick: Function as PropType<(event: Event) => void>,
  loading: {
    type: Boolean,
    default: false,
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'left', // ou 'right'
    validator(value: string) {
      return ['left', 'right'].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: String,
    default: '', // Option pour les marges (ex: 'my-2')
  },
  padding: {
    type: String,
    default: 'px-4 py-2', // Option pour le padding par défaut
  },
});
const isDisabled = computed(() => props.loading || props.disabled);
const handleClick = (event: Event) => {
  if (!isDisabled.value && props.onClick) {
    props.onClick(event);
  }
};
</script>
 
<template>
<button
    :disabled="isDisabled"
    @click="handleClick"
    :class="[
      'btn',
      padding,
      'text-white bg-blue-500 rounded-md hover:bg-blue-600',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'flex items-center justify-center transition ease-in-out duration-150',
      margin,
      { 'cursor-progress': loading },
    ]"
>
<!-- Icône à gauche si iconPosition est 'left' -->
<span v-if="icon && iconPosition === 'left'" class="btn__icon mr-2">
<i :class="icon"></i>
</span>
 
    <!-- Texte du bouton -->
<span v-if="!loading">{{ label }}</span>
 
    <!-- Loader si loading est true -->
<span v-if="loading" class="btn__loader">
<!-- Un petit loader Tailwind ou custom -->
<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
</svg>
</span>
 
    <!-- Icône à droite si iconPosition est 'right' -->
<span v-if="icon && iconPosition === 'right'" class="btn__icon ml-2">
<i :class="icon"></i>
</span>
</button>
</template>
 
<style scoped>
/* Styles personnalisés si nécessaire */
</style>