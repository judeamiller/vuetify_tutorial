<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title>Vuetify Tutorial</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      text
      rounded
      :to="link.url"
    >{{link.label}}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["links"]
};
</script>