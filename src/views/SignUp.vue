<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Sign Up</h1>
        <v-form>
          <v-text-field v-model="email" label="Email" type="email"></v-text-field>
          <v-autocomplete
            label="Which Browser Are You Using?"
            :items="browsers"
            v-model="selectedBrowser"
          ></v-autocomplete>
          <v-text-field label="Birthday" readonly></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox label="Agree to terms and conditions." v-model="accept"></v-checkbox>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar v-model="showAlert" color="pink">
      You picked the ONLY wrong choice. Any other browser will do. May I suggest &nbsp;
      <a
        href="https://www.mozilla.org/en-US/firefox/new"
        target="blank"
      >Firefox</a>
      <v-btn color="black" @click="selectedBrowser = null">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      browsers: [
        "Chrome",
        "Firefox",
        "Safari",
        "Edge",
        "Opera",
        "Brave",
        "Internet Explorer"
      ],
      selectedBrowser: null,
      email: "",
      birthday: "",
      accept: false,
      showAlert: false
    };
  },
  computed: {},
  watch: {
    selectedBrowser(value) {
      value == "Internet Explorer"
        ? (this.showAlert = true)
        : (this.showAlert = false);
    }
  }
};
</script>