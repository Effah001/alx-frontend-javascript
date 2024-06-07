interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Francis',
  lastName: 'Effah',
  age: 23,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Frank',
  lastName: 'Asare',
  age: 21,
  location: 'California',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const tableBody = document.getElementById('student-table-body') as HTMLTableSectionElement;

  tableBody.innerHTML = '';

  studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;
    row.appendChild(lastNameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = student.age.toString();
    row.appendChild(ageCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });
}

renderTable();
