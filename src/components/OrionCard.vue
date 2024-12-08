<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'OrionCard',
  props: {
    profileImage: {
      type: String as PropType<string>,
      default: '/assets/vue.svg',
    },
  },
});
</script>

<template>
  <div class="bg-white w-full flex justify-center items-center">
    <div class="w-full max-w-md rounded-3xl overflow-hidden bg-transparent">
      <div class="bg-transparent h-16 relative">
        <div
          v-if="profileImage"
          class="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <img
            class="w-20 h-20 rounded-full border-4 border-black"
            :src="profileImage"
            alt="Profile Picture"
          />
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>
