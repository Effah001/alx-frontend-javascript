export default function getStudentIdsSum(students) {
  const totalIdSum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return totalIdSum;
}
