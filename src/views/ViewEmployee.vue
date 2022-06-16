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
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt=""
          class="employee-img-big"
        />
      </div>
      <div class="col-md-6">
        <ul>
          <li class="list-group-item">
            Name : <span class="fw-bold">Name</span>
          </li>
          <li class="list-group-item">
            Email : <span class="fw-bold">Email</span>
          </li>
          <li class="list-group-item">
            Mobile : <span class="fw-bold">Mobile</span>
          </li>
          <li class="list-group-item">
            Company : <span class="fw-bold">Mobile</span>
          </li>
          <li class="list-group-item">
            Title : <span class="fw-bold">Mobile</span>
          </li>
          <li class="list-group-item">
            Department : <span class="fw-bold">Mobile</span>
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
export default {
  name: "ViewEmployee",
};
</script>

<style scoped></style>
