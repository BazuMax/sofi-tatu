import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MenuLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') },
      { path: '/record', component: () => import('pages/TheRecord.vue') },
      { path: '/projects', component: () => import('pages/TheProjects.vue') },
      { path: '/profile', component: () => import('pages/TheProfile.vue') },
      {
        path: '/affiliates',
        component: () => import('pages/TheAffiliates.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
