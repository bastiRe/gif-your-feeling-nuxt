import shortid from 'shortid'

export const state = () => {
  let user = {
    name: null,
    id: null
  }

  try {
    const storedUser = localStorage.getItem('user')
    user = JSON.parse(storedUser)
  } catch (e) {}

  return user
}

export const mutations = {
  setName(state, name) {
    state.name = name
    state.id = shortid()
    localStorage.setItem('user', JSON.stringify(state))
  }
}
