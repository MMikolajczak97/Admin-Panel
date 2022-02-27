import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    selectedUserDetails: {},
    showDeleteDialog: false,
    selectedUser: {}
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSelectedUserDetails(state, userDetails) {
      state.selectedUserDetails = userDetails;
    },
    toggleShowDeleteDialog(state) {
      state.showDeleteDialog = !state.showDeleteDialog;
    },
    selectUser(state, user) {
      state.selectedUser = user;
    }

  },
  actions: {
    async fetchUsers({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      commit('setUsers', res.data);
    },
    async fetchUserDetails({ commit }, id) {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      commit('setSelectedUserDetails', res.data);
    }
  },
  modules: {
  }
})
