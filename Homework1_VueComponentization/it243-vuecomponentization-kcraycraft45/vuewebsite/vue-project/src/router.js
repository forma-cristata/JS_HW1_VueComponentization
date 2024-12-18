import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ClassesView from '@/views/ClassesView.vue';
import ContactView from '@/views/ContactView.vue';
import ShowsView from '@/views/ShowsView.vue'
import TrainingsView from '@/views/TrainingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/shows',
      name: 'shows',
      component: ShowsView,
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: TrainingsView,
    },
  ],
})

export default router
