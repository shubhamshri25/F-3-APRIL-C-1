let addBtn = document.getElementById("add-user-btn");
let employeeForm = document.getElementById("employee-form");
let messageDiv = document.getElementById("message");
let employeesDiv = document.getElementById("employees");
let employees = [];
let idCounter = 1;

// function to add user
function addUser() {
  let nameVal = document.getElementById("name").value;
  let professionVal = document.getElementById("profession").value;
  let ageVal = document.getElementById("age").value;
  //   console.log(nameVal,professionVal,ageVal);

  //   checking for null values
  if (!nameVal || !professionVal || !ageVal) {
    message.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.classList.add("error");
    return;
  }

  // pushing the values into array if all fields are correctly filled
  const newEmployee = { id: idCounter++, nameVal, professionVal, ageVal };
  employees.push(newEmployee);

  displayEmployee();
  message.textContent = "Success : Employee Added!";
  message.classList.remove("error");
  message.classList.add("success");
}

// function to display the employees
function displayEmployee() {
  employeesDiv.innerHTML = " ";

  let nameValInput = document.getElementById("name");
  nameValInput.value = "";
  let professionValInput = document.getElementById("profession");
  professionValInput.value = "";
  let ageValInput = document.getElementById("age");
  ageValInput.value = "";

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.innerHTML = `
    <div class="employee-div"> <p>${employee.id}.</p>
    <p>Name: ${employee.nameVal}</p>
    <p>Profession: ${employee.professionVal}</p>
    <p>Age: ${employee.ageVal}</p>
    </div>
    <button onclick="deleteEmployee(${employee.id})" >Delete User</button>
    `;
    employeesDiv.appendChild(employeeDiv);
  });
}

// function to delete employees
function deleteEmployee(id) {
    // --idCounter;
  employees = employees.filter((employee) => employee.id !== id);
  displayEmployee();
}

addBtn.addEventListener("click", addUser);
