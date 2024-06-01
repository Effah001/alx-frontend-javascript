export default function createIteratorObject(report) {
  function* employeeGenerator(employees) {
    for (const department of Object.values(employees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator(report.allEmployees);
}
