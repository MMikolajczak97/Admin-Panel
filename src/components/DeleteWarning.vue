<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-subtitle-2">
          Czy na pewno chcesz usunąć użytkownika?
        </v-card-title>

        <v-card-text class="text-h5">
          {{ $store.state.selectedUser.name }}
        </v-card-text>
        <v-alert class="mx-6" dense icon="mdi-alert" type="warning">
          Wszystkie dane użytkownika zostaną usunięte!
        </v-alert>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="grey"
            @click="$store.commit('toggleShowDeleteDialog')"
          >
            Anuluj
          </v-btn>
          <v-btn
            text
            color="red"
            @click="$store.commit('toggleShowDeleteDialog')"
          >
            Usuń
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/store";

export default Vue.extend({
  name: "DeleteWarning",

  computed: {
    dialog: {
      get(): boolean {
        return store.state.showDeleteDialog;
      },
      set(value) {
        store.commit("toggleShowDeleteDialog");
      },
    },
  },
});
</script>

<style>
</style>