<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Employee</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea explicabo
          hic nisi pariatur perferendis quis reiciendis suscipit temporibus
          voluptatum. Adipisci assumenda delectus eligendi eveniet illo illum in
          recusandae sunt tempore.
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
          <Spinner />
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="!loading && !errorMessage">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="submit()">
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
          <div class="mb-2" v-if="departments.length">
            <select v-model="employee.departmentId" class="form-control">
              <option value="">Select Department</option>
              <option :value="dep.id" v-for="dep of departments" :key="dep.id">
                {{ dep.name }}
              </option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Save" />
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
import Spinner from "@/components/Spinner";

export default {
  name: "EditEmployee",
  components: { Spinner },
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
      employeeId: this.$route.params.employeeId,
      loading: false,
      errorMessage: null,
      departments: [],
    };
  },
  async created() {
    try {
      this.loading = true;
      let response = await EmployeesService.getEmployee(this.employeeId);
      this.employee = response.data;
      let depResponse = await EmployeesService.getAllDepartments();
      this.departments = depResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    submit: async function () {
      try {
        this.loading = true;
        let response = await EmployeesService.updateEmployee(
          this.employee,
          this.employeeId
        );
        this.loading = false;
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/employee/edit/${this.employeeId}`);
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
