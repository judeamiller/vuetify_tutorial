<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title class="title">
      <img class="logo" src="@/assets/logo.svg" alt="vue logo" />
      Vuetify Tutorial
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-desktop-link`"
        text
        rounded
        :to="link.url"
        :class="{'d-none': !link.show}"
      >{{link.label}}</v-btn>
      <v-btn text rounded v-if="signedIn" @click="signOut()">Sign Out</v-btn>
    </v-toolbar-items>
    <v-menu>
      <template v-slot:activator="{ on: menu }">
        <v-app-bar-nav-icon class="hidden-md-and-up" v-on="{ ...menu }"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.url">
          <v-list-item-title>{{ link.label }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="signedIn" @click="signOut()">Sign Out</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: ["links"],
  computed: {
    signedIn: {
      get() {
        return this.$store.getters.signedIn;
      },
      set(newValue) {
        this.$store.commit("setSignedIn", newValue);
      }
    }
  },
  methods: {
    signOut() {
      this.signedIn = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  line-height: 2rem;
  text-align: center;
  .logo {
    display: inline;
    height: 1.5rem;
  }
}
</style>