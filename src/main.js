import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";

Vue.use(VueRouter)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/home', mode: 'harsh', alias: '/', component: HomePage },
  { path: '/about', mode: 'harsh', component: AboutPage },
  { path: '/resume', mode: 'harsh',  component: ResumePage },
  { path: '/projects', mode: 'harsh', component: ProjectsPage }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
