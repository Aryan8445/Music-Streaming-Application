import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import UserProfile from '../views/UserProfile.vue';
import CreatorProfile from '../views/CreatorDashboard.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import LandingPage from '../views/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/creator-profile',
    name: 'CreatorProfile',
    component: CreatorProfile,
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
