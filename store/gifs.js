import axios from 'axios'
import debounce from 'lodash.debounce'

const apiKey = process.env.giphyApiKey
const pageSize = 40

const getGifs = (query, offset, callback) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${pageSize}&offset=${offset}`
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
    commit('setQuery', query)
    commit('setLoading', true)
    commit('setSearchResult', [])
    if (process.browser) {
      window.$nuxt.$loading.start()
    }

    if (query.length > 0) {
      debouncedGetGifs(query, 0, function({ data }) {
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
  },
  loadMore: async function({ commit, state }) {
    commit('setLoading', true)
    getGifs(state.query, state.searchResult.length, function({ data }) {
      const gifs = data.data.map(gifData => gifData.images.fixed_width.url)
      commit('setLoading', false)
      commit('appendToSearchResult', gifs)
    })
  }
}

export const mutations = {
  setQuery(state, value) {
    state.query = value
  },
  setLoading(state, value) {
    state.loading = value
  },
  setSearchResult(state, gifs) {
    state.searchResult = gifs
  },
  appendToSearchResult(state, gifs) {
    state.searchResult = state.searchResult.concat(gifs)
  }
}
