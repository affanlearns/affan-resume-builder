// Wait for form submission
document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default form action

  // Get user input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  // Access jsPDF from window
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Resume", 90, 20);

  // Body
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  let y = 40;

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

  // Save PDF
  doc.save("resume.pdf");
});
