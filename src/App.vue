<template>
  <v-app>
    <v-app-bar app clipped-left color="grey-lighten-2">
      <v-toolbar-title>Logo</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app clipped color="grey-darken-2" permanent>
      <v-list flat>
        <v-list-item :to="{ name: 'home' }">
          <v-list-item-title>Strona główna</v-list-item-title>
        </v-list-item>
        <v-list-group group="administration" no-action>
          <template v-slot:activator>
            <v-list-item-title>Administracja</v-list-item-title>
          </template>
          <v-list-item :to="{ name: 'users' }">
            <v-list-item-title>Użytkownicy</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="ma-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
