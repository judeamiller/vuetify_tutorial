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
    <v-row>
      <v-col cols="8">
        <EmployeesTable :employees="employees" @employee-selected="selectEmployee" />
      </v-col>
      <v-col cols="4">
        <EventTimeline :timeline="timeline" />
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{selectedEmployee.name}}, {{selectedEmployee.title}}
      <v-btn color="pink" text @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
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
      snackbar: false,
      selectedEmployee: {
        name: "",
        title: ""
      }
    };
  },
  methods: {
    selectEmployee(event) {
      this.snackbar = true;
      this.selectedEmployee.title = event.title;
      this.selectedEmployee.name = event.name;
    }
  }
};
</script>

<style></style>
