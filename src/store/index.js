import Vue from 'vue';
import Vuex from 'vuex';
import utils from './modules/util'
import  media from './modules/media'
import posts from './modules/posts'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    utils,
    media,
    posts,
},
  strict: true
});