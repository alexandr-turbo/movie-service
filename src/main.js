import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import capitalize from '@/filters/capitalize'
import movieGenresMixin from "@/mixins/movieGenresMixin";

// Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.filter('capitalize', capitalize)

Vue.mixin({
  data() {
    return {
      globalImgAddress: 'https://image.tmdb.org/t/p/w',
      // globalNoImgAddress: '@/assets/no-image.png'
    }
  }
})
Vue.mixin(movieGenresMixin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
