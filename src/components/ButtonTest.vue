<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({

label: {
  type: String,
  required: true,
},
onClick: {
  type: Function,
  required: false,
},
loading: {
  type: Boolean,
  default: false,
},
icon: {
  type: String,
  required: false,
},
iconPosition: {
  type: String,
  default: 'left', // ou 'right'
  validator(value: any) {
    return ['left', 'right'].includes(value);
  },
},
// type: {
//   type: String,
//   default: 'button',
//   validator(value: any) {
//     return ['button', 'submit', 'reset'].includes(value);
//   },
// },
disabled: {
  type: Boolean,
  default: false,
},
});

const isDisabled = computed(() => props.loading || props.disabled);

const handleClick = (event: Event) => {
    if (!isDisabled.value && props.onClick) {props.onClick(event);}
};

</script>


<template>
  <button
    :disabled="isDisabled"
    @click="handleClick"
    class="btn"
    :class="{ 'btn--loading': loading, 'btn--disabled': isDisabled }"
  >
    <span v-if="icon && iconPosition === 'left'" class="btn__icon">
      <i :class="icon"></i>
    </span>
    
    <span v-if="!loading">{{ label }}</span>
    
    <span v-if="loading" class="btn__loader">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </span>

    <span v-if="icon && iconPosition === 'right'" class="btn__icon">
      <i :class="icon"></i>
    </span>
  </button>
</template>



<style scoped>
.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.btn__icon {
  margin-right: 8px;
}

.btn__loader {
  display: flex;
  align-items: center;
}

.btn--disabled,
.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn--loading {
  cursor: progress;
}

.spinner {
  animation: rotate 1s linear infinite;
  width: 20px;
  height: 20px;
}

.spinner .path {
  stroke: #fff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
