import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feedPost: [
      {
        'id' : 1,
        'author' : '홍성표',
        'like' : ['김철현', '차유미'],
        'image' : [],
        'comment' : [
          {
            'author' : '김철현',
            'text' : '강아지가 귀여워요'
          },
          {
            'author' : '차유미',
            'text' : '강아지 강아지'
          },
        ],

        'createdAt' : '2021-01-07'
      },
      {
        'id' : 2,
        'author' : '홍성표',
        'like' : ['김철현', '차유미'],
        'image' : [],
        'comment' : [
          {
            'author' : '김철현',
            'text' : '강아지가 귀여워요'
          },
          {
            'author' : '차유미',
            'text' : '강아지 강아지'
          },
        ],

        'createdAt' : '2021-01-08'
      },
      {
        'id' : 3,
        'author' : '홍성표',
        'like' : ['김철현', '차유미'],
        'image' : [],
        'comment' : [
          {
            'author' : '김철현',
            'text' : '강아지가 귀여워요'
          },
          {
            'author' : '차유미',
            'text' : '강아지 강아지'
          },
        ],

        'createdAt' : '2021-01-09'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    
  },
  modules: {
  }
})
