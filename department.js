const params = new URLSearchParams(window.location.search);
const dept = params.get("dept");

document.getElementById("deptName").innerText = dept + " Department";

// Syllabus map
const syllabusMap = {
  "Computer Science": "pdfs/cs_2023.pdf",
  "Tamil": "pdfs/tamil_2023.pdf",
  "English": "pdfs/english_2023.pdf",
  "Mathematics": "pdfs/maths_2023.pdf",
  "Commerce": "pdfs/commerce_2023.pdf"
};

document.getElementById("syllabusLink").href = syllabusMap[dept];

// Student PDFs
const key = dept.toLowerCase().replace(" ", "");
const pdfs = [
  `pdfs/${key}_2023.pdf`,
  `pdfs/${key}_2024.pdf`,
  `pdfs/${key}_2025.pdf`,
  `pdfs/${key}_2026.pdf`
];

const pdfList = document.getElementById("pdfList");
pdfs.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${p}" target="_blank">${p}</a>`;
  pdfList.appendChild(li);
});

// Faculty filter
const facultyBox = document.getElementById("facultyList");
const filtered = facultyList.filter(f => f.dept === dept);

filtered.forEach(f => {
  const div = document.createElement("div");
  div.className = "faculty-card";
  div.innerHTML = `
    <img src="${f.photo}">
    <div>
      <b>${f.name}</b><br>
      <small>${f.designation}</small>
    </div>
  `;
  facultyBox.appendChild(div);
});