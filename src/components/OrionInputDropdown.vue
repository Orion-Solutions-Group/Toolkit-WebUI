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
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      query: "",
      showResults: false,
    };
  },
  computed: {
    filteredResults() {
      return this.items.filter(item =>
          item.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  methods: {
    search() {
      this.showResults = this.query.length > 0;
    },
    selectResult(result) {
      this.query = result;
      this.showResults = false;
      this.$emit("select", result);
    },
  },
};
</script>
