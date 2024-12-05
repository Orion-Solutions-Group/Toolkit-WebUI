<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, watch } from 'vue';
import { useField, defineRule, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: String,
    default: '',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  leftIcon: {
    type: String,
    required: false,
  },
  rightIcon: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autoCompleteResults: {
    type: Array as () => string[],
    default: () => [],
  },
  margin: {
    type: String,
    default: '', // Classe de marge personnalisable (ex: 'my-2')
  },
  padding: {
    type: String,
    default: 'px-4 py-2', // Classe de padding par défaut
  },
});

const inputRef = ref(props.modelValue);
const isFocused = ref(false);
const displayResults = ref(false);

const toggleResults = (state: boolean) => {
  displayResults.value = state;
};

const handleFocus = () => {
  isFocused.value = true;
  toggleResults(true);
};

const handleBlur = () => {
  isFocused.value = false;
  setTimeout(() => toggleResults(false), 200);
};

const emitValue = (value: string) => {
  inputRef.value = value;
  toggleResults(false);
  emit('update:modelValue', value);
};

watch(inputRef, (newVal) => {
  emit('update:modelValue', newVal);
});

const inputClass = computed(() => {
  return [
    'w-full rounded-md border',
    props.padding,
    props.disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white',
    isFocused.value ? 'border-blue-500' : 'border-gray-300',
    props.error ? 'border-red-500' : '',
  ];
});
</script>

<template>
  <div :class="['custom-input w-full', margin]">
    <label v-if="label" class="block mb-1 font-medium text-gray-700">{{ label }}</label>

    <div class="relative w-full">
      <i v-if="leftIcon" :class="[leftIcon, 'absolute left-3 top-1/2 transform -translate-y-1/2']"></i>

      <input
        :type="type"
        v-model="inputRef"
        :class="inputClass"
        :placeholder="placeholder"
        :disabled="disabled || isLoading"
        @focus="handleFocus"
        @blur="handleBlur"
        class="w-full"
      />

      <i v-if="rightIcon" :class="[rightIcon, 'absolute right-3 top-1/2 transform -translate-y-1/2']"></i>

      <div v-if="isLoading" class="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg class="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
      </div>

      <ul v-if="displayResults && autoCompleteResults.length" class="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
        <li
          v-for="(result, index) in autoCompleteResults"
          :key="index"
          class="px-4 py-2 cursor-pointer hover:bg-gray-100"
          @click="emitValue(result)"
        >
          {{ result }}
        </li>
      </ul>
    </div>

    <p v-if="error" class="mt-1 text-red-500 text-sm">{{ error }}</p>
  </div>
</template>
