import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login/', component: '@/pages/login.tsx' },
  ],
  fastRefresh: {},
  "theme": {
    "primary-color": "#3B43F2",
  },
});
