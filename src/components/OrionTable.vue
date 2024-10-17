<template>
  <div :class="['p-4', tableClass]">
    <table class="min-w-full bg-white">
      <thead>
      <tr>
        <th v-for="column in columns" :key="column.key" class="py-2 px-4 border-b text-left">
          <button @click="sortTable(column.key)" class="flex items-center space-x-1">
            <span>{{ column.label }}</span>
            <span v-if="sortKey === column.key">
                <svg
                    v-if="sortDirection === 'asc'"
                    class="w-4 h-4 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <svg
                    v-else
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in sortedRows" :key="index" :class="rowClass(index)">
        <td v-for="column in columns" :key="column.key" class="py-2 px-4 border-b">{{ row[column.key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'OrionTable',
  props: {
    rows: {
      type: Array as () => Array<Record<string, any>>,
      required: true,
    },
    columns: {
      type: Array as () => Array<{ key: string; label: string }>,
      required: true,
    },
    type: {
      type: String,
      default: 'basic', // Valeur par défaut si aucune n'est fournie
    },
  },
  setup(props) {
    const sortKey = ref<string | null>(null);
    const sortDirection = ref<'asc' | 'desc'>('asc');

    const sortTable = (key: string) => {
      if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
      } else {
        sortKey.value = key;
        sortDirection.value = 'asc';
      }
    };

    const sortedRows = computed(() => {
      if (!sortKey.value) return props.rows;

      return [...props.rows].sort((a, b) => {
        const modifier = sortDirection.value === 'asc' ? 1 : -1;
        const key = sortKey.value as keyof typeof a;
        if (a[key] < b[key]) return -1 * modifier;
        if (a[key] > b[key]) return 1 * modifier;
        return 0;
      });
    });

    // Définir les classes selon la prop `type`
    const tableClass = computed(() => {
      switch (props.type) {
        case 'striped':
          return 'table-striped';
        case 'bordered':
          return 'border border-gray-300';
        case 'hover':
          return 'table-hover';
        default:
          return '';
      }
    });

    const rowClass = (index: number) => {
      if (props.type === 'striped') {
        return index % 2 === 0 ? 'bg-gray-100' : '';
      } else if (props.type === 'hover') {
        return 'hover:bg-gray-200';
      } else {
        return '';
      }
    };

    return {
      sortKey,
      sortDirection,
      sortTable,
      sortedRows,
      tableClass,
      rowClass,
    };
  },
});
</script>

<style scoped>

.table-striped tbody tr:nth-child(odd) {
  background-color: #f9fafb;
}

.table-hover tbody tr:hover {
  background-color: #f3f4f6;
}
</style>