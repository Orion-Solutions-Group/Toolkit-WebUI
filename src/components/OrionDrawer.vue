<template>
  <div
    v-if="isOpen || animationActive"
    class="fixed inset-0 z-[10000] flex justify-end"
  >
    <div
      class="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
      @click="closeDrawer"
    ></div>
    <div
      class="relative w-1/3 h-full bg-white dark:bg-gray-800 p-4 shadow-lg transform transition-transform duration-500 ease-in-out"
      :class="drawerClasses"
      @transitionend="handleTransitionEnd"
    >
      <button
        @click="closeDrawer"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
      >
        ✕
      </button>
      <div class="mt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrionDrawer',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      animationActive: false,
    };
  },
  computed: {
    drawerClasses() {
      return this.isOpen ? 'translate-x-0' : 'translate-x-full';
    },
  },
  watch: {
    isOpen() {
      this.animationActive = true;
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('update:isOpen', false);
    },
    handleTransitionEnd() {
      if (!this.isOpen) {
        this.animationActive = false;
      }
    },
  },
};
</script>
