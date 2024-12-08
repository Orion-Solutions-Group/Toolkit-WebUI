import type { App } from 'vue';

import OrionBreadcrumb from './components/OrionBreadcrumb.vue';
import OrionBadge from '@/components/OrionBadge.vue';
import OrionButton from '@/components/OrionButton.vue';
import OrionCalendar from '@/components/OrionCalendar.vue';
import OrionDrawer from '@/components/OrionDrawer.vue';
import OrionForm from '@/components/OrionForm.vue';
import OrionInput from '@/components/OrionInput.vue';
import OrionInputDropdown from '@/components/OrionInputDropdown.vue';
import OrionLayout from '@/components/OrionLayout.vue';
import OrionModal from '@/components/OrionModal.vue';
import OrionProgressBar from '@/components/OrionProgressBar.vue';
import OrionSidebar from '@/components/OrionSidebar.vue';
import OrionTable from '@/components/OrionTable.vue';
import OrionCard from '@/components/OrionCard.vue';

import type { OrionBreadcrumbProps, OrionDrawerProps } from './types/types';

const OrionToolkitPlugin = {
  install(app: App) {
    // Enregistrement des composants
    app.component('OrionBreadcrumb', OrionBreadcrumb);
    app.component('OrionBadge', OrionBadge);
    app.component('OrionButton', OrionButton);
    app.component('OrionCalendar', OrionCalendar);
    app.component('OrionDrawer', OrionDrawer);
    app.component('OrionForm', OrionForm);
    app.component('OrionInput', OrionInput);
    app.component('OrionInputDropdown', OrionInputDropdown);
    app.component('OrionLayout', OrionLayout);
    app.component('OrionModal', OrionModal);
    app.component('OrionProgressBar', OrionProgressBar);
    app.component('OrionSidebar', OrionSidebar);
    app.component('OrionTable', OrionTable);
    app.component('OrionCard', OrionCard);
  },
};

export {
  OrionToolkitPlugin,
  OrionBreadcrumb,
  OrionBadge,
  OrionButton,
  OrionCalendar,
  OrionDrawer,
  OrionForm,
  OrionInput,
  OrionInputDropdown,
  OrionLayout,
  OrionModal,
  OrionProgressBar,
  OrionSidebar,
  OrionTable,
  OrionCard,
};
