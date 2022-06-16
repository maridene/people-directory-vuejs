<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Employee Directory
          <router-link to="/employees/add" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i
          ></router-link>
        </p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit
          mollitia rerum vitae. Aperiam dignissimos molestias nobis recusandae
          similique, voluptates voluptatibus. At distinctio, non odio officia
          perspiciatis porro recusandae similique.
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name.."
                  />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Spinner-->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner />
        </div>
      </div>
    </div>
  </div>

  <!-- Error Message -->
  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h4 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="!loading && employees.length">
    <div class="row">
      <div class="col-md-6" v-for="employee of employees" :key="employee">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="employee.photo" alt="" class="employee-img" />
              </div>
              <div class="col-sm-7">
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
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  :to="`/employees/view/${employee.id}`"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  :to="`/employees/edit/${employee.id}`"
                  class="btn btn-primary my-1"
                >
                  <i class="fa fa-pen"></i>
                </router-link>
                <button
                  class="btn btn-danger my-1"
                  @click="clickDelete(employee.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EmployeesService } from "@/services/employeesService";
import Spinner from "@/components/Spinner";

export default {
  name: "EmployeeDirectory",
  components: { Spinner },
  data: function () {
    return {
      loading: false,
      employees: [],
      errorMessage: null,
    };
  },
  async created() {
    try {
      this.loading = true;
      let response = await this.getAllEmployeesData();
      setTimeout(
        function () {
          this.employees = response.data;
          this.loading = false;
        }.bind(this),
        2000
      );
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
  methods: {
    getAllEmployeesData: async function () {
      return EmployeesService.getAllEmployees();
    },
    clickDelete: async function (id) {
      try {
        let response = await EmployeesService.deleteEmployee(id);
        if (response) {
          this.loading = true;
          let response = await this.getAllEmployeesData();
          setTimeout(
            function () {
              this.employees = response.data;
              this.loading = false;
            }.bind(this),
            2000
          );
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
