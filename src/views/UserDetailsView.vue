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

<script>
export default {
  name: "UserDetailsView",
  data() {
    return {
      userDetails: {},
    };
  },
  methods: {
    joinAddressData(data) {
      const { street, suite, city, zipcode, geo } = data;
      let address = [street, suite, city, zipcode];
      address =
        address.join(", ") + ` (Szerokość: ${geo.lat}, Długość: ${geo.lng})`;

      return address;
    },
  },

  async created() {
    await this.$store.dispatch("fetchUserDetails", this.$route.params.id);
    this.userDetails = this.$store.state.selectedUserDetails;

    this.userDetails = {
      id: { header: "ID", value: this.userDetails.id },
      name: { header: "Imię i nazwisko", value: this.userDetails.name },
      username: { header: "Login", value: this.userDetails.username },
      email: { header: "E-mail", value: this.userDetails.email },
      address: {
        header: "Adres zamieszkania",
        value: this.joinAddressData(this.userDetails.address),
      },
      phoneNumber: { header: "Numer telefonu", value: this.userDetails.phone },
      website: {
        header: "Strona internetowa",
        value: this.userDetails.website,
      },
      companyName: {
        header: "Nazwa firmy",
        value: this.userDetails.company.name,
      },
      companyCatchphrase: {
        header: "Motto firmy",
        value: this.userDetails.company.catchPhrase,
      },
      companyBS: { header: "BS", value: this.userDetails.company.bs },
    };
  },
};
</script>

<style>
</style>