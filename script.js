document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;
  const template = document.getElementById("templateSelect").value;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;

  if (template === "2") {
    doc.setFillColor(240, 240, 240);
    doc.rect(10, 10, 190, 277, 'F');
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Resume", 90, y);
  y += 20;

  const imgElement = document.getElementById("photoPreview");
  if (imgElement.src && imgElement.style.display !== "none") {
    doc.addImage(imgElement, "JPEG", 150, 10, 40, 40);
  }

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  doc.text(`Name: ${name}`, 20, y); y += 10;
  doc.text(`Email: ${email}`, 20, y); y += 10;
  doc.text(`Phone: ${phone}`, 20, y); y += 15;

  doc.setFont("helvetica", "bold");
  doc.text("Education:", 20, y); y += 8;
  doc.setFont("helvetica", "normal");
  doc.text(education, 20, y); y += 15;

  doc.setFont("helvetica", "bold");
  doc.text("Experience:", 20, y); y += 8;
  doc.setFont("helvetica", "normal");
  doc.text(experience, 20, y); y += 15;

  doc.setFont("helvetica", "bold");
  doc.text("Skills:", 20, y); y += 8;
  doc.setFont("helvetica", "normal");
  doc.text(skills, 20, y);

  doc.save("resume.pdf");
});

// Photo preview
document.getElementById("photoUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("photoPreview");
      img.src = e.target.result;
      img.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});
