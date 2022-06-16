import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export class EmployeesService {
  static serverUrl = "http://localhost:9000";

  static getAllEmployees() {
    let dataUrl = `${this.serverUrl}/employees`;
    return axios.get(dataUrl);
  }

  static getEmployee(id) {
    let dataUrl = `${this.serverUrl}/employees/${id}`;
    return axios.get(dataUrl);
  }

  static createEmployee(employee) {
    employee.id = uuidv4();
    let dataUrl = `${this.serverUrl}/employees/`;
    return axios.post(dataUrl, employee);
  }

  static updateEmployee(employee, id) {
    let dataUrl = `${this.serverUrl}/employees/${id}`;
    return axios.put(dataUrl, employee);
  }

  static deleteEmployee(id) {
    let dataUrl = `${this.serverUrl}/employees/${id}`;
    return axios.delete(dataUrl);
  }

  static getAllDepartments() {
    let dataUrl = `${this.serverUrl}/departments`;
    return axios.get(dataUrl);
  }

  static getDepartment(id) {
    let dataUrl = `${this.serverUrl}/departments/${id}`;
    return axios.get(dataUrl);
  }

  static getEmployeeDepartment(employee) {
    return this.getDepartment(employee.departmentId);
  }
}
