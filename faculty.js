// Predefined faculty list (from PDF)
const facultyList = [
  {
    name: "Dr. M. Rajamoorthy",
    dept: "Principal",
    designation: "Principal (F.A.C.)",
    qualification: "M.Sc.,M.Phil., B.Ed., Ph.D.",
    email: "rajamoorthy@gmail.com",
    mobile: "9442359395",
    photo: "images/faculty/rajamoorthy.jpeg"
  },
  {
    name: "Dr. S. Nandakumar",
    dept: "Mathematics",
    designation: "Associative Professor",
    qualification: "M.Sc., M.Phil., B.Ed., PGDCA.,Ph.D.,",
    email: "nandha12@gmail.com",
    mobile: "9488892941",
    photo: "images/faculty/nandhakumar.jpeg"
  },
  {
    name: "Dr. S. Vadivelan",
    dept: "Tamil",
    designation: "Assistant Professor",
    qualification: "M.A., M.Phil., Ph.D.",
    email: "vadivelanaki@gmail.com",
    mobile: "9976996912",
    photo: "images/faculty/vedivelan.jpeg"
  },
  {
    name: "Dr. G. Bhavani",
    dept: "Tamil",
    designation: "Assistant Professor",
    qualification: "M.A., M.Phil., Ph.D.",
    email: "bavani@gmail.com",
    mobile: "9489873461",
    photo: "images/faculty/bavani.jpeg"
  },
  {
    name: "Dr. G. Karthikeyan",
    dept: "Computer Science",
    designation: "Assistant Professor",
    qualification: "M.sc., M.Phil., Ph.D. ",
    email: "gkarthikeyan2007@gmail.com",
    mobile: "9750282827",
    photo: "images/faculty/karthikeyan.jpeg"
  },
  {
    name: "Mr. M. Rajendran",
    dept: "Computer Science",
    designation: "Assistant Professor",
    qualification: "MCA, M.Phil.",
    email: "rajendranmaha@yahoo.co.in",
    mobile: "9842326033",
    photo: "images/faculty/rajendran.jpeg"
  },
  {
    name: "Dr. K. Sakthimurugan",
    dept: "Commerce",
    designation: "Assistant Professor",
    qualification: "M.com., M.Phil., Ph.D.",
    email: "sakthi24@gmail.com",
    mobile: "9488834195",
    photo: "images/faculty/sakthimurugan.jpeg"
  },
  {
    name: "Dr. S. Jaiganesh",
    dept: "Commerce",       
    designation: "Assistant Professor",
    qualification: "M.com., M.Phil.",
    email: "jaiganesh@gmail.com",
    mobile: "8344206435",
    photo: "images/faculty/jaiganesh.jpeg"
  },
  {
    name: "Dr. P. Jayachandran ",
    dept: "Tamil",
    designation: "Assistant Professor",
    qualification: "M.A., M.Phil., Ph.D.",
    email: "gacsjayankondam@gmail.com",
    mobile: "8248955386",
    photo: "images/faculty/default.jpeg"
  },
  {
    name: "Dr. K. Anbarasan",
    dept: "Physical Education",
    designation: "Physical Director",
    photo: "images/faculty/anbarasan.jpeg",
    qualification: "MPES, M.PHIL, Ph.D",
    email: "anbarasan@gascjayankondam.edu.in",
    phone: "9489229685"
  },
  {
    name: "Dr. R. Natarajan",
    dept: "Library",
    designation: "Assistant Professor In Librarian",
    qualification: "M.Lib., I.Sc., M.Phil., Ph.D.,",
    email: "cdmnatraj1972@gmail.com",
    mobile: "8248214089",
    photo: "images/faculty/natarajan.jpg"
  },

  // GL & PTA
  { name: "Dr. A. Akila", dept: "Commerce", designation: "Guest Lecturer", qualification: "M.com., M.Phil., Ph.D.", email: "akila15@gmail.com", mobile: "6081384208", photo: "images/faculty/akila.jpeg" },
  { name: "Dr. P. Rayadurai", dept: "Tamil", designation: "Guest Lecturer", qualification: "M.A., M.Phil.,Ph.D.", email: "gacsjayankondam@gmail.com", mobile: "9095557874", photo: "images/faculty/rayadhurai.jpeg" },
  { name: "Dr. K. Velmurugan", dept: "Tamil", designation: "Guest Lecturer", qualification: "M.A., M.Phil.,B.ED., NET., Ph.D.", email: "gacsjayankondam@gmail.com", mobile: "7373145639", photo: "images/faculty/velmurugan.jpeg" },
  { name: "Dr. U. Kalaiselvi", dept: "Tamil", designation: "Guest Lecturer", qualification: "M.A., M.Phil.,B.ED., NET.", email: "gacsjayankondam@gmail.com", mobile: "9095789245", photo: "images/faculty/kalaiselvi.jpeg" },
  { name: "Dr. R. Ambiga", dept: "Tamil", designation: "Guest Lecturer", qualification: "M.A., M.Phil.,B.ED.,Ph.D.", email: "gacsjayankondam@gmail.com", mobile: "9159240967", photo: "images/faculty/ambika.jpeg" },
  { name: "Dr. M. Prabakaran", dept: "Tamil", designation: "Guest Lecturer", qualification: "M.A., M.phil., DTED.,B.ED.,NET", email: "gacsjayankondam@gmail.com", mobile: "6380015644", photo: "images/faculty/prabakaran.jpeg" },
  { name: "Dr. D. Rathika", dept: "Computer Science", designation: "Guest Lecturer", qualification: "M.Sc., M.Phil., SET, Ph.D", email: "gacsjayankondam@gmail.com", mobile: "9942141110", photo: "images/faculty/rathiga.jpeg" },
  { name: "Dr. K. Durgadevi", dept: "Commerce", designation: "Guest Lecturer", qualification: "M. Com., M. Phil., Ph. D., SET", email: "gacsjayankondam@gmail.com", mobile: "8610607522", photo: "images/faculty/durgadevi.jpeg" },
  { name: "Dr. R. Kayalvizhi", dept: "English", designation: "Guest Lecturer", qualification: "M.A.,B.Ed.,Ph.D.,", email: "kayalcdm63@gmail.com", mobile: "9344306582", photo: "images/faculty/kayalvizhi.jpeg" },
  { name: "Dr. G. Kalayarasi", dept: "English", designation: "Guest Lecturer", qualification: "M.A., Ph.D.", email: "Kalai978793@gmail.com", mobile: "9787938068", photo: "images/faculty/kalaiyarasi.jpeg" },
  { name: "Dr. J. Priya", dept: "English", designation: "Guest Lecturer", qualification: "M.A., Ph.D.,", email: "priya.avn92@gmail.com", mobile: "7639503175", photo: "images/faculty/priya.jpeg" },
  { name: "Dr. S. Elakkiya", dept: "English", designation: "Guest Lecturer", qualification: "M.A.,B.Ed.,Ph.D.,", email: "iaslikkiya13@gmail.com", mobile: "8300569530", photo: "images/faculty/elakkiya.jpeg" },
  { name: "Dr. P. Mekala", dept: "English", designation: "Guest Lecturer", qualification: "M.A.,B.Ed.,Ph.D.,", email: "mekalathirumal377@gmail.com", mobile: "7397600364", photo: "images/faculty/mekala.jpeg" },
  { name: "Dr. G. Kolanchinathan", dept: "Commerce", designation: "Guest Lecturer", qualification: "M.com., M.Phil., M.B.A., PHDCA., Ph.D.", email: "kolanchi24@gmail.com", mobile: "9626240366", photo: "images/faculty/kolanchi.jpeg" },
  { name: "Dr. A. Senthil", dept: "Commerce", designation: "Guest Lecturer", qualification: "M.com., M.Phil., Ph.D.", email: "gacsjayankondam@gmail.com", mobile: "9894244409", photo: "images/faculty/senthiA.jpeg" },
  { name: "Dr. R. G. Akalya", dept: "Mathematics", designation: "Guest Lecturer", qualification: "M.Sc.,M.Ed., M.Phil.,Ph.D.,", email: "gacsjayankondam@gmail.com", mobile: "6380866177", photo: "images/faculty/akalya.jpeg" },
  { name: "Dr. R. Seethadevi", dept: "Mathematics", designation: "Guest Lecturer", qualification: "M.Sc.,B.Ed.,M.Phil., Ph.D.,DPL.,", email: "gacsjayankondam@gmail.com", mobile: "6374165391", photo: "images/faculty/seethadevi.jpeg" },
  { name: "Dr. G. Senthil", dept: "Tamil", designation: "Guest Lecturer", qualification: "", email: "gacsjayankondam@gmail.com", mobile: "9786341891", photo: "images/faculty/senthil.jpeg" },
  { name: "Mrs. S. Mekala", dept: "Computer Science", designation: "C.L.P. Lecturer", qualification: "M.C.A.,M.Phil.", email: "gacsjayankondam@gmail.com", mobile: "9486087086", photo: "images/faculty/megala.jpeg" },
  { name: "Mrs. K. Roshini ", dept: "Computer Science", designation: "C.L.P. Lecturer", qualification: "M.C.A.", email: "gacsjayankondam@gmail.com", mobile: "9363057312", photo: "images/faculty/roshini.jpeg" },
  { name: "Mrs. K. Devi", dept: "Maths", designation: "P.T.A. Lecturer", qualification: "M.Sc., B.Ed., M.Phil., PGDCA.,", email: "gacsjayankondam@gmail.com", mobile: "9348760245", photo: "images/faculty/devim.jpeg" },
  { name: "Ms. J. Najin", dept: "English", designation: "P.T.A. Lecturer", qualification: "M.A.,M.Phil.", email: "najin402@gmail.com", mobile: "8220430846", photo: "images/faculty/najin.jpeg" },
  { name: "Mr. S. Raja", dept: "Computer Science", designation: "P.T.A. Lecturer", qualification: "M.SC., B.ED., M.Phil.", email: "raja123@gmail.com", mobile: "7639948464", photo: "images/faculty/raja.jpeg" },
  { name: "Mr. N. Vignesh Sharma", dept: "Mathematics", designation: "P.T.A. Lecturer", qualification: "M.Sc., M.Ed.,M.Phil.,PGDCA.,", email: "gacsjayankondam@gmail.com", mobile: "8807302680", photo: "images/faculty/vigneshsarma.jpeg" },
  { name: "Mrs. A. Anbarasi", dept: "English", designation: "P.T.A. Lecturer", qualification: "M.A.,M.Phil.,", email: "gacsjayankondam@gmail.com", mobile: "9363910332", photo: "images/faculty/anbarasi.jpeg" },
  { name: "Ms. N. Sangari ", dept: "English", designation: "P.T.A. Lecturer", qualification: "M.A.,B.ED.", email: "gacsjayankondam@gmail.com", mobile: "6380249255", photo: "images/faculty/sankari.jpeg" },
  { name: "Ms. G. Kasthuipraba ", dept: "English", designation: "P.T.A. Lecturer", qualification: "M.A., B.ED.", email: "gacsjayankondam@gmail.com", mobile: "7882142452", photo: "images/faculty/kasthuripraba.jpeg" },
  { name: "Dr. R. Sathiyadevi", dept: "Tamil", designation: "P.T.A. Lecturer", qualification: "", email: "gacsjayankondam@gmail.com", mobile: "8508492680", photo: "images/faculty/sathiyadevi.jpeg" },
  { name: "Mr. S. Kumar", dept: "Tamil", designation: "P.T.A. Lecturer", qualification: "M.A.,M.Phil.,B.Ed.,NET,SET", email: "gacsjayankondam@gmail.com", mobile: "9688983399", photo: "images/faculty/kumar.jpeg" },
  { name: "Mr. P. Rajagopal", dept: "Library Assistant", designation: "P.T.A. Lecturer", qualification: "M.SC, B.ED,.", email: "gacsjayankondam@gmail.com", mobile: "7867891185", photo: "images/faculty/rajagopal.jpeg" },
  { name: "Mr. R. Ganesan", dept: "office Staff", designation: "Bursar", qualification: "B.A.", email: "gacsjayankondam@gmail.com", mobile: "9788107984", photo: "images/faculty/ganesh.jpeg" },
  { name: "Mr. K. Suresh", dept: "office Staff", designation: "Superintendent", qualification: "M.SC.", email: "gacsjayankondam@gmail.com", mobile: "9789175449", photo: "images/faculty/suresh.jpeg" },
  { name: "Mrs. T. Veerammal", dept: "office Staff", designation: "Assistant", qualification: "B.SC.", email: "gacsjayankondam@gmail.com", mobile: "7502954557", photo: "images/faculty/veerammal.jpeg" },
  { name: "Mr. N. Sundararaman", dept: "office Staff", designation: "Assistant Programmer", qualification: " B.SC.", email: "gacsjayankondam@gmail.com", mobile: "9443398009", photo: "images/faculty/sundhar raman.jpeg" },
  { name: "Mr. K.R. Palanisamy", dept: "office Staff", designation: "Junior Assistant", qualification: " M.B.A.", email: "gacsjayankondam@gmail.com", mobile: "9943270578", photo: "images/faculty/palanisamy.jpeg" },
  { name: "Mr. K. Manivelan", dept: "office Staff", designation: "Junior Assistant", qualification: " M.A.", email: "gacsjayankondam@gmail.com", mobile: "6385425959", photo: "images/faculty/manivelan.jpeg" },
  { name: "Mr. A. Aravazhi", dept: "office Staff", designation: "Junior Assistant(Depu.)", qualification: " M.A.", email: "gacsjayankondam@gmail.com", mobile: "8144448568", photo: "images/faculty/aravazhi.jpeg" }
];

// LOGIN PAGE
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("facultyLogin");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.toLowerCase().trim();
      const dept = document.getElementById("dept").value.toLowerCase().trim();

      const faculty = facultyList.find(f =>
        f.name.toLowerCase().includes(name) &&
        f.dept.toLowerCase().includes(dept)
      );

      if (faculty) {
        localStorage.setItem("facultyProfile", JSON.stringify(faculty));
        window.location.href = "faculty-profile.html";  // ✅ redirect fix
      } else {
        alert("Faculty not found!");
      }
    });
  }
});