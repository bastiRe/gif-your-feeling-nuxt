export const state = () => ({
  name: null
})

export const mutations = {
  setName(state, name) {
    state.name = name
  }
}
