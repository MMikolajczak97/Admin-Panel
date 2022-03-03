import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import axios from 'axios'
import { state, user } from '../types/types'

Vue.use(Vuex)

const store: StoreOptions<state> = {
  state: {
    users: [],
    selectedUserDetails: {
      id: null,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      }

    },
    showDeleteDialog: false,
    selectedUser: {
      name: "",
    }
  },
  getters: {
  },
  mutations: {
    setUsers(state, users: user[]) {
      state.users = users;
    },
    setSelectedUserDetails(state, userDetails: user) {
      state.selectedUserDetails = userDetails;
    },
    toggleShowDeleteDialog(state) {
      state.showDeleteDialog = !state.showDeleteDialog;
    },
    selectUser(state, user: { name: string }) {
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
}

export default new Vuex.Store<state>(store)
