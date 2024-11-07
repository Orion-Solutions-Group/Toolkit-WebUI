<template>
  <div class="relative w-full max-w-sm mx-auto">
    <input
        type="text"
        v-model="query"
        @input="search"
        placeholder="Rechercher..."
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <ul
        v-if="filteredResults.length > 0 && showResults"
        class="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
    >
      <li
          v-for="(result, index) in filteredResults"
          :key="index"
          @click="selectResult(result)"
          class="px-4 py-2 cursor-pointer hover:bg-indigo-100"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const query = ref('');
    const showResults = ref(false);

    const filteredResults = computed(() => {
      console.log('items', props.items);
      console.log('isArray', Array.isArray(props.items));
      if (Array.isArray(props.items)) {
        return props.items.filter((item) =>
            item.toLowerCase().includes(query.value.toLowerCase())
        );
      }
      return [];  // Retourne un tableau vide si 'items' n'est pas un tableau
    });

    const search = () => {
      showResults.value = query.value.length > 0;
    };

    const selectResult = (result) => {
      query.value = result;
      showResults.value = false;
      emit('select', result);  // Émettre l'événement 'select' avec le résultat sélectionné
    };

    return {
      query,
      showResults,
      filteredResults,
      search,
      selectResult,
    };
  },
});
</script>
