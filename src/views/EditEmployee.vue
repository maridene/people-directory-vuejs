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
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URL" />
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Company" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Title" />
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select Department</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Save" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt=""
          class="employee-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditEmployee",
};
</script>

<style scoped></style>
