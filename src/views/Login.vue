<template>
  <v-card width="400" class="mx-auto mt-6">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye':  'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn to="/signup" color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" @click="login()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false
    };
  },
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
    login() {
      this.signedIn = true;
    }
  }
};
</script>