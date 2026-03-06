document.getElementById("studentLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const regno = document.getElementById("regno").value;
  const password = document.getElementById("password").value;

  if (regno !== "" && password !== "") {
    document.getElementById("loginMessage").innerText = "✅ Login successfully!";
    document.getElementById("loginMessage").style.color = "green";
  } else {
    document.getElementById("loginMessage").innerText = "❌ Please enter details!";
    document.getElementById("loginMessage").style.color = "red";
  }
});