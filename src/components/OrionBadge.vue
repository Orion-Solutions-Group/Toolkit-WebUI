<script setup lang="ts">
import { computed, defineProps } from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  margin: {
    type: String,
    default: '', // ex: 'my-2'
  },
  padding: {
    type: String,
    default: 'px-4 py-2', // ex: 'px-4 py-2'
  },
  color: {
    type: String,
    default: 'bg-blue-500',
  },
  size: {
    type: String,
    default: 'text-sm',
    validator(val: string) {
      return ['text-xs', 'text-sm', 'text-lg'].includes(val);
    },
  },
  variant: {
    type: String,
    default: 'full',
    validator(value: string) {
      return ['full', 'outline'].includes(value);
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
const badgeClass = computed(() => {
  const baseClasses = [
    'inline-flex items-center rounded-full', // Coins arrondis pour le badge
    props.padding,
    props.size,
    props.clickable ? 'cursor-pointer hover:bg-opacity-75 transition' : '',
    props.variant === 'outline'
      ? `border ${props.color.replace('bg', 'border')} ${props.color.replace(
          'bg',
          'text'
        )} bg-transparent`
      : `${props.color} text-white`,
  ];
  return baseClasses.join(' ');
});
</script>

<template>
  <div v-if="visible" :class="[badgeClass, margin]">
    <span v-if="dot" class="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
    <i v-if="leftIcon" :class="[leftIcon, 'mr-2']"></i>
    <!-- Directement afficher le label ici -->
    <span>{{ label }}</span>
    <i v-if="rightIcon" :class="[rightIcon, 'ml-2']"></i>
  </div>
</template>
