export const state = () => ({
  token: '',
  id: 0,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  selectTab(state, id) {
    state.id = id
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('setToken', 'abc')
  },
}
