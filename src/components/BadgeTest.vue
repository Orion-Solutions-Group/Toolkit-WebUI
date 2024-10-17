<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import { defineProps, ref } from 'vue';
import { useField, defineRule, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// Définir la règle pour la validation du label
defineRule('required', (value: string | any[]) => {
  if (!value || value.length === 0) {
    return 'Le label est obligatoire';
  }
  return true;
});

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'bg-blue-500',
  },
  size: {
    type: String,
    default: 'medium',
    validator(value: string) {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
  variant: {
    type: String,
    default: 'filled',
    validator(value: string) {
      return ['filled', 'outline'].includes(value);
    },
  },
  leftIcon: {
    type: String,
    required: false,
  },
  rightIcon: {
    type: String,
    required: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const { value: validatedLabel } = useField('label', yup.string().required('Le label est obligatoire'));


const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-xs py-1 px-2';
    case 'large':
      return 'text-lg py-2 px-4';
    default:
      return 'text-sm py-1.5 px-3';
  }
});

const variantClasses = computed(() => {
  if (props.variant === 'filled') {
    return `${props.color} text-white`;
  } else if (props.variant === 'outline') {
    const borderColor = props.color.replace('bg-', 'border-');
    const textColor = props.color.replace('bg-', 'text-');
    return `${borderColor} ${textColor} border bg-transparent`;
  }
  return '';
});

const dotClass = computed(() => (props.dot ? 'relative' : ''));

const clickableClass = computed(() => (props.clickable ? 'cursor-pointer hover:bg-opacity-75' : ''));

const visibleClass = computed(() => (props.visible ? 'block' : 'hidden'));
</script>

<template>
  <!-- Le badge avec ses styles et options -->
  <span
    v-if="visible"
    :class="[
      'inline-flex items-center rounded-full transition ease-in-out duration-150',
      sizeClasses,
      variantClasses,
      dotClass,
      clickableClass,
      visibleClass
    ]"
  >
    <!-- Icône à gauche si défini -->
    <i v-if="leftIcon" :class="[leftIcon, 'mr-2']"></i>

    <!-- Texte du label -->
    {{ label }}

    <!-- Icône à droite si défini -->
    <i v-if="rightIcon" :class="[rightIcon, 'ml-2']"></i>

    <!-- Petit point rouge de notification si dot est true -->
    <span v-if="dot" class="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></span>
  </span>

  <!-- Message d'erreur pour le label s'il ne respecte pas la règle de validation -->
  <ErrorMessage name="label" />
</template>

<style scoped>
/* Aucun style personnalisé n'est nécessaire, tout est géré par Tailwind */
</style>
