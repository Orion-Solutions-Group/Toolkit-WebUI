<template>
  <div>
    <button @click="toggleDrawer" class="px-4 py-2 text-red-50 bg-green-700 rounded">Open Drawer</button>
    <OrionDrawer :isOpen="isDrawerOpen" @update:close="isDrawerOpen = $event">
      <h2 class="text-xl font-semibold mb-4">Informations</h2>
      <p>Contenu du drawer ici...</p>
    </OrionDrawer>
  </div>
</template>

<script>
import OrionDrawer from '@/components/OrionDrawer.vue';

export default {
  components: {
    OrionDrawer,
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
};
</script>
