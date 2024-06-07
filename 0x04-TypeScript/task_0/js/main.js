var student1 = {
    firstName: 'Francis',
    lastName: 'Effah',
    age: 23,
    location: 'New York',
};
var student2 = {
    firstName: 'Frank',
    lastName: 'Asare',
    age: 21,
    location: 'California',
};
var studentsList = [student1, student2];
function renderTable() {
    var tableBody = document.getElementById('student-table-body');
    tableBody.innerHTML = '';
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var lastNameCell = document.createElement('td');
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);
        var ageCell = document.createElement('td');
        ageCell.textContent = student.age.toString();
        row.appendChild(ageCell);
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
}
renderTable();
