welcomeMessage();

/// Welcome Message
function welcomeMessage() {
  let username = prompt("Enter your name:");
  if (username) {
    document.getElementById("username").innerHTML = username;
  } else {
    alert("Welcome to my portfolio!");
  }
}

/// Form Validation + Output
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let message = document.getElementById("message").value;

  if (name === "" || dob === "" || !gender || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Show results in the right box
  document.getElementById("outName").textContent = name;
  document.getElementById("outDob").textContent = dob;
  document.getElementById("outGender").textContent = gender.value;
  document.getElementById("outMessage").textContent = message;
}

/// Live current time
function updateTime() {
  document.getElementById("currentTime").textContent = new Date().toString();
}
setInterval(updateTime, 1000);
updateTime();
