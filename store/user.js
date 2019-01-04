import shortid from 'shortid'

export const state = () => ({
  name: null,
  id: null
})

export const mutations = {
  setName(state, name) {
    state.name = name
    state.id = shortid()
  }
}
