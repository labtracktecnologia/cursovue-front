const state = () => {
  return {
    user: null
  }
}

const getters = {
  profileImage (state) {
    return (state.user && state.user.url) || 'img/profile.png'
  }
}

const mutations = {
  setUserProfile(state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
