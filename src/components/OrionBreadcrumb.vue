<template>
  <div class="p-4 bg-white shadow-md rounded-lg dark:bg-gray-800">
    <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="flex items-center text-gray-500 font-semibold dark:text-white-dark space-x-4 text-sm"
      >
        <li class="flex items-center">
          <component
            :is="homeIcon"
            class="mr-2 h-5 w-5 text-primary"
            v-if="homeIcon"
          ></component>
          <a
            href="javascript:;"
            class="hover:text-gray-700 dark:hover:text-white-dark transition-colors duration-200"
            >Home</a
          >
        </li>
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center space-x-4"
        >
          <svg
            class="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <component
            :is="item.icon"
            class="mr-2 h-5 w-5 text-primary"
            v-if="item.icon"
          ></component>
          <a
            :href="item.href"
            :class="
              index === items.length - 1
                ? 'text-primary'
                : 'hover:text-gray-700 dark:hover:text-white-dark transition-colors duration-200'
            "
          >
            {{ item.label }}
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      required: true,
      validator: (value) =>
        value.every(
          (item) => 'label' in item && 'href' in item && 'icon' in item
        ),
    },
    homeIcon: {
      type: Object,
      required: false,
    },
  },
};
</script>
