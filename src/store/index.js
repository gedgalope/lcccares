import Vue from 'vue';
import Vuex from 'vuex';
import utils from './modules/util'
import  media from './modules/media'
import posts from './modules/posts'
import services from './modules/services'
import team from './modules/team'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    utils,
    media,
    posts,
    services,
    team,
},
  strict: true
});