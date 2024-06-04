export default function filterStudentsByLocation(location) {
  const students = getListStudents();
  return students.filter(student => student.location === location);
}
