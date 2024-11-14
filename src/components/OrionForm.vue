<template>
  <div class="flex flex-wrap items-center h-screen">
    <!-- Affichage de l'image à gauche et le contenu à droite -->
    <div v-if="position === 'left'" class="w-full md:w-3/5 h-full">
      <img
        v-if="isValidUrl(imageUrl)"
        :src="imageUrl"
        alt="Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      v-if="position === 'left'"
      class="w-full md:w-2/5 h-full p-6 flex items-center justify-center"
    >
      <slot></slot>
    </div>

    <!-- Affichage du contenu à gauche et de l'image à droite -->
    <div
      v-else
      class="w-full md:w-2/5 h-full p-6 flex flex-col items-center justify-center"
    >
      <slot></slot>
    </div>
    <div v-if="position === 'right'" class="w-full md:w-3/5 h-full">
      <img
        v-if="isValidUrl(imageUrl)"
        :src="imageUrl"
        alt="Image"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value),
    },
  },
  methods: {
    isValidUrl(url) {
      try {
        new URL(url);
        return true;
      } catch (_) {
        return false;
      }
    },
  },
};
</script>

<style scoped>
/* Assurez-vous que le body et html prennent toute la hauteur */
html,
body,
#app {
  height: 100%;
}
</style>
