export default function filterStudentsByLocation(students, location) {
  return students.filter((student) => student.location === location);
}
