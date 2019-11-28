<template>
  <v-container>
    <h1>Dashboard</h1>
    <v-row>
      <v-col v-for="sale in sales" :key="sale.title">
        <SalesGraph :sale="sale" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(stat, i) in stats" :key="i">
        <StatCard :stat="stat" />
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar">
      You have selected {{ currentItem }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import EmployeesTable from "@/components/EmployeesTable";
import EventTimeline from "@/components/Timeline";
import SalesGraph from "@/components/SalesGraph";
import StatCard from "@/components/Stats";

// json imports
import employeesData from "../assets/data/employees.json";
import timelineData from "../assets/data/timeline.json";
import salesData from "../assets/data/sales.json";
import statisticsData from "../assets/data/stats.json";

export default {
  name: "Dashboard",
  components: { EmployeesTable, EventTimeline, SalesGraph, StatCard },
  data() {
    return {
      // set json imports to data variables
      sales: salesData,
      timeline: timelineData,
      employees: employeesData,
      stats: statisticsData,
      currentItem: "",

      snackbar: false
    };
  },
  methods: {}
};
</script>

<style></style>
