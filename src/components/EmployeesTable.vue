<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="5"
    class="elevation-1"
    @click:row="selectRow"
    :multi-sort="true"
  ></v-data-table>
</template>
</template>

<script>
export default {
  name: "EmployeesTable",
  props: ["employees"],
  data() {
    return {
      headers: [
        { text: "Employee ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Position Title", value: "title" },
        { text: "Salary", value: "salary" }
      ],
      selectedEmployee: {
        name: null,
        title: null
      }
    };
  },
  methods: {
    selectRow(event) {
      this.selectedEmployee.name = event.name;
      this.selectedEmployee.title = event.title;
      // emit to parent
      this.$emit("employee-selected", this.selectedEmployee);
    }
  }
};
</script>

<style lang="scss" scoped>
// TODO: add styles
</style>