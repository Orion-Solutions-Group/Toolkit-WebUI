<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'left',
    validator(value: string) {
      return ['left', 'right'].includes(value);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const isDisabled = computed(() => props.loading || props.disabled);
</script>

<template>
  <button
    :disabled="isDisabled"
    :class="[
      'btn',
      'text-white bg-blue-500 rounded-lg hover:bg-blue-600',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'flex items-center justify-center transition ease-in-out duration-150',
      'p-3',
      { 'cursor-progress': loading },
    ]"
  >
    <div class="flex items-center space-x-1">
      <span
        v-if="icon && iconPosition === 'left' && !loading"
        class="btn__icon"
      >
        <i :class="icon"></i>
      </span>
      <span v-if="loading" class="btn__loader flex items-center justify-center">
        <svg
          class="animate-spin h-5 w-5 text-white mt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </span>
      <span>{{ label }}</span>
      <span
        v-if="icon && iconPosition === 'right' && !loading"
        class="btn__icon"
      >
        <i :class="icon"></i>
      </span>
    </div>
  </button>
</template>
