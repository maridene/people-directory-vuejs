import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeeDirectory from "@/views/EmployeeDirectory";
import AddEmployee from "@/views/AddEmployee";
import EditEmployee from "@/views/EditEmployee";
import ViewEmployee from "@/views/ViewEmployee";
import PageNotFund from "@/views/PageNotFund";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/employees",
    component: HomeView,
  },
  {
    path: "/employees",
    name: "EmployeeDirectory",
    component: EmployeeDirectory,
  },
  {
    path: "/employees/add",
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/employees/edit/:employeeId",
    name: "EditEmployee",
    component: EditEmployee,
  },
  {
    path: "/employees/view/:employeeId",
    name: "ViewEmployee",
    component: ViewEmployee,
  },
  {
    path: "/:pathMath(.*)*",
    name: "PageNotFound",
    component: PageNotFund,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
