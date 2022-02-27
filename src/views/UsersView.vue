<template>
  <div>
    <v-data-table :headers="headers" :items="this.$store.state.users">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Lista użytkowników</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary">Dodaj</v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.name="{ item }">
        <router-link :to="{ name: 'userDetails', params: { id: item.id } }">
          {{ item.name }}
        </router-link>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <DeleteWarning></DeleteWarning>
  </div>
</template>

<script>
import DeleteWarning from "../components/DeleteWarning.vue";

export default {
  name: "UsersView",
  components: {
    DeleteWarning,
  },
  data() {
    return {
      headers: [
        { text: "ID", align: "start", value: "id" },
        { text: "Imię i nazwisko", value: "name" },
        { text: "Login", value: "username" },
        { text: "E-mail", value: "email" },
        { text: "Nr telefonu", value: "phone" },
        { text: "Firma", value: "company.name" },
        { text: "Akcje", value: "actions", sortable: false },
      ],
    };
  },

  methods: {
    deleteItem(item) {
      this.$store.commit("selectUser", item);
      this.$store.commit("toggleShowDeleteDialog");
    },
  },

  async created() {
    await this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
</style>