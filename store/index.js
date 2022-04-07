export const state = () => ({
  token: '',
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    commit('setToken', 'abc')
  },
}
