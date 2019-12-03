<template>
  <v-app>
    <Navbar :links="links" />
    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-foot-link`"
          color="white"
          text
          rounded
          class="my-2"
          :class="{'d-none': !link.show}"
        >{{ link.label }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text xs12" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify Tutorial</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },

  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
          show: true
        },
        {
          label: "About",
          url: "/about",
          show: true
        },
        {
          label: "Login",
          url: "/login",
          show: true
        },
        {
          label: "Sign Up",
          url: "/signup",
          show: true
        },
        {
          label: "Dashboard",
          url: "/dashboard",
          show: true
        }
      ]
    };
  },
  computed: {
    signedIn() {
      return this.$store.getters.signedIn;
    }
  },

  watch: {
    signedIn(newData) {
      console.log("newData is", newData);
      if (newData === true) {
        this.links.forEach(element => {
          if (element.label == "Sign Up" || element.label == "Login") {
            element.show = false;
          }
        });
      } else {
        this.links.forEach(element => {
          if (element.label == "Sign Up" || element.label == "Login") {
            element.show = true;
          }
        });
      }
    }
  }
};
</script>
