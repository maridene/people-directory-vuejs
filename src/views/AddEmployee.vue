<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Employee</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consequatur cum eligendi, esse hic illo illum incidunt iure maiores
          molestias nam obcaecati pariatur possimus, quibusdam rem, suscipit
          velit. Consequuntur, ratione!
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input
              required
              v-model="employee.name"
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="employee.photo"
              type="text"
              class="form-control"
              placeholder="Photo URL"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="employee.email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="employee.mobile"
              type="number"
              class="form-control"
              placeholder="Mobile"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="employee.company"
              type="text"
              class="form-control"
              placeholder="Company"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="employee.title"
              type="text"
              class="form-control"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <select
              v-model="employee.departmentId"
              class="form-control"
              v-if="departments.length"
            >
              <option value="">Select Department</option>
              <option :value="dep.id" v-for="dep of departments" :key="dep.id">
                {{ dep.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="employee.photo" alt="" class="employee-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { EmployeesService } from "@/services/employeesService";

export default {
  name: "AddEmployee",
  data: function () {
    return {
      employee: {
        name: "",
        photo: "",
        email: "",
        mobile: "",
        company: "",
        title: "",
        departmentId: "",
      },
      departments: [],
    };
  },
  created: async function () {
    try {
      let res = await EmployeesService.getAllDepartments();
      this.departments = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    submitCreate: async function () {
      try {
        let response = await EmployeesService.createEmployee(this.employee);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/employees/add");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
