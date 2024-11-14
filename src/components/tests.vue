<template>
  <div>
    <Breadcrumb :items="breadcrumbItems" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/OrionBreadcrumb.vue';
import { HomeIcon, ServerIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumbItems: [
        { label: 'Documentation', href: '#', icon: HomeIcon },
        { label: 'Database', href: '#', icon: ServerIcon },
        { label: 'Replication', href: '', icon: ServerIcon },
      ],
    };
  },
};
</script>
