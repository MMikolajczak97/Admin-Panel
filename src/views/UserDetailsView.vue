<template>
  <div>
    <v-toolbar>
      <router-link class="mr-5" :to="{ name: 'users' }">
        <v-icon>mdi-arrow-left</v-icon>
      </router-link>

      <v-toolbar-title>
        Szczegóły użytkownika: {{ userDetails.name.value }}
      </v-toolbar-title>
    </v-toolbar>
    <v-container class="mt-4 pa-0">
      <v-card>
        <v-row v-for="item in userDetails" no-gutters dense>
          <v-col cols="3">
            <v-card class="pa-2" tile flat>
              {{ item.header + ":" }}
            </v-card>
          </v-col>
          <v-col cols="9">
            <v-card class="pa-2" tile flat> {{ item.value }}</v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { user, userDetailsViewState } from "../types/types";
import store from "../store/store";

export default Vue.extend({
  name: "UserDetailsView",
  data(): userDetailsViewState {
    return {
      userDetails: {
        id: { header: "ID", value: null },
        name: { header: "Imię i nazwisko", value: "" },
        username: { header: "Login", value: "" },
        email: { header: "E-mail", value: "" },
        address: {
          header: "Adres zamieszkania",
          value: "",
        },
        phoneNumber: { header: "Numer telefonu", value: "" },
        website: {
          header: "Strona internetowa",
          value: "",
        },
        companyName: {
          header: "Nazwa firmy",
          value: "",
        },
        companyCatchphrase: {
          header: "Motto firmy",
          value: "",
        },
        companyBS: { header: "BS", value: "" },
      },
    };
  },
  methods: {
    joinAddressData(data: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    }): string {
      const address: string[] = [
        data.street,
        data.suite,
        data.city,
        data.zipcode,
      ];
      const joinedAddress: string =
        address.join(", ") +
        ` (Szerokość: ${data.geo.lat}, Długość: ${data.geo.lng})`;

      return joinedAddress;
    },
  },

  async created() {
    await store.dispatch("fetchUserDetails", this.$route.params.id);

    const selectedUserDetails: user = store.state.selectedUserDetails;

    this.userDetails.id.value = selectedUserDetails.id;
    this.userDetails.name.value = selectedUserDetails.name;
    this.userDetails.username.value = selectedUserDetails.username;
    this.userDetails.email.value = selectedUserDetails.email;
    this.userDetails.address.value = this.joinAddressData(
      selectedUserDetails.address
    );
    this.userDetails.phoneNumber.value = selectedUserDetails.phone;
    this.userDetails.website.value = selectedUserDetails.website;
    this.userDetails.companyName.value = selectedUserDetails.company.name;
    this.userDetails.companyCatchphrase.value =
      selectedUserDetails.company.catchPhrase;
    this.userDetails.companyBS.value = selectedUserDetails.company.bs;
  },
});
</script>

<style>
</style>