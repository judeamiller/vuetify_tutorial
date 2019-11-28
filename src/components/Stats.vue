<template>
  <v-card>
    <v-card-title>{{ stat.title }}</v-card-title>
    <v-card-text class="display-2">{{ stat.value }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    stat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>