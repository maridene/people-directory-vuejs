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
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                  alt=""
                  class="employee-img"
                />
              </div>
              <div class="col-sm-7">
                <ul>
                  <li class="list-group-item">
                    Name : <span class="fw-bold">Name</span>
                  </li>
                  <li class="list-group-item">
                    Email : <span class="fw-bold">Name</span>
                  </li>
                  <li class="list-group-item">
                    Mobile : <span class="fw-bold">Name</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  to="/employees/view/:employeeId"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  to="/employees/edit/:employeeId"
                  class="btn btn-primary my-1"
                >
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1">
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
export default {
  name: "EmployeeDirectory",
};
</script>

<style scoped></style>
