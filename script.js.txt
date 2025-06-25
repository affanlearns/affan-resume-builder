// Live Preview Update
function updatePreview() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const hobbies = document.getElementById("hobbies").value;
  const template = document.getElementById("templateSelect").value;

  const output = document.getElementById("resumeOutput");
  output.className = template === "2" ? "template-2" : "template-1";

  let html = `<h2>${name}</h2>`;
  html += `<p><strong>Email:</strong> ${email}</p>`;
  html += `<p><strong>Phone:</strong> ${phone}</p>`;
  html += `<p><strong>LinkedIn:</strong> ${linkedin}</p>`;
  html += `<h3>Education</h3><p>${education}</p>`;
  html += `<h3>Experience</h3><p>${experience}</p>`;
  html += `<h3>Skills</h3><p>${skills}</p>`;
  html += `<h3>Hobbies</h3><p>${hobbies}</p>`;

  const img = document.getElementById("photoPreview");
  if (img.src && img.style.display !== "none") {
    html = `<img src="${img.src}" style="width:100px; border-radius:50%; margin-bottom:10px;">` + html;
  }

  output.innerHTML = html;
}

// Form Inputs Change Detection
document.querySelectorAll("input, textarea, select").forEach(input => {
  input.addEventListener("input", updatePreview);
});

// Photo Upload Preview
document.getElementById("photoUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("photoPreview");
      img.src = e.target.result;
      img.style.display = "block";
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
});

// PDF Download
document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.html(document.getElementById("resumeOutput"), {
    callback: function (pdf) {
      pdf.save("resume.pdf");
    },
    x: 10,
    y: 10
  });
});

// Save as Image
document.getElementById("saveImageBtn").addEventListener("click", function () {
  const element = document.getElementById("resumeOutput");
  html2canvas(element).then(canvas => {
    const link = document.createElement("a");
    link.download = "resume.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
