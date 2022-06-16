<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Employee</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, in?
        </p>
      </div>
    </div>
  </div>

  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner />
        </div>
      </div>
    </div>
  </div>

  <div v-if="!loading && errorMessage">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="!loading && isValid()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="employee.photo" alt="" class="employee-img-big" />
      </div>
      <div class="col-md-6">
        <ul>
          <li class="list-group-item">
            Name : <span class="fw-bold">{{ employee.name }}</span>
          </li>
          <li class="list-group-item">
            Email : <span class="fw-bold">{{ employee.email }}</span>
          </li>
          <li class="list-group-item">
            Mobile : <span class="fw-bold">{{ employee.mobile }}</span>
          </li>
          <li class="list-group-item">
            Company : <span class="fw-bold">{{ employee.company }}</span>
          </li>
          <li class="list-group-item">
            Title : <span class="fw-bold">{{ employee.title }}</span>
          </li>
          <li class="list-group-item">
            Department : <span class="fw-bold">{{ department.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/" class="btn btn-success">
          <i class="fa fa-arrow-alt-circle-left"></i>
          Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { EmployeesService } from "@/services/employeesService";
import Spinner from "@/components/Spinner";

export default {
  name: "ViewEmployee",
  components: { Spinner },
  data: function () {
    return {
      employeeId: this.$route.params.employeeId,
      loading: false,
      employee: {},
      errorMessage: null,
      department: {},
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await EmployeesService.getEmployee(this.employeeId);
      this.employee = response.data;
      let depResponse = await EmployeesService.getDepartment(
        this.employee.departmentId
      );
      this.department = depResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    isValid: function () {
      return (
        Object.keys(this.employee).length && Object.keys(this.department).length
      );
    },
  },
};
</script>

<style scoped></style>
