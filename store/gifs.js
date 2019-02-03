import axios from 'axios'
import debounce from 'lodash.debounce'

const apiKey = process.env.giphyApiKey

const getGifs = (query, callback) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=50`
    )
    .then(result => callback(result))
}

const debouncedGetGifs = debounce(getGifs, 800)

export const state = () => ({
  searchResult: [],
  loading: false
})

export const actions = {
  search: async function({ commit }, query) {
    commit('setLoading', true)
    commit('setSearchResult', [])
    if (process.browser) {
      window.$nuxt.$loading.start()
    }

    if (query.length > 0) {
      debouncedGetGifs(query, function({ data }) {
        const gifs = data.data.map(gifData => gifData.images.fixed_width.url)
        if (process.browser) {
          window.$nuxt.$loading.finish()
        }
        commit('setLoading', false)
        commit('setSearchResult', gifs)
      })
    } else {
      if (process.browser) {
        window.$nuxt.$loading.finish()
      }
      commit('setLoading', false)
      commit('setSearchResult', [])
    }
  }
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setSearchResult(state, gifs) {
    state.searchResult = gifs
  }
}
