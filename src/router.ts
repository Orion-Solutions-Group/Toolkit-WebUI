import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Homedoc from '@/components/docs/Homedoc.vue';
import Tests from '@/components/tests.vue';

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Homedoc,
  },
  {
    path: '/test',
    name: 'Test',
    component: Tests,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
