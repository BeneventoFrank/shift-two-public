import Vue from 'vue';
import Router from 'vue-router';
import RecentWork from './pages/RecentWork.vue'
import Home from './pages/Home.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home},
    },
    {
      path: '/recent-work',
      name: 'recent-work',
      components: { default: RecentWork},
    }    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
