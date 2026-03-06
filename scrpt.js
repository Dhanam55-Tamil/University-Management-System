function loginFaculty() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const dept = document.getElementById("dept").value.trim().toLowerCase();

  const found = facultyList.find(f =>
    f.name.toLowerCase().includes(name) &&
    f.dept.toLowerCase().includes(dept)
  );

  if (!found) {
    alert("Faculty not found");
    return;
  }

  localStorage.setItem("selectedFaculty", JSON.stringify(found));
  window.location.href = "faculty-profile.html";
}