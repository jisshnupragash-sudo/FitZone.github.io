document.getElementById("trialForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
  form.reset();
  form.classList.remove("was-validated");
});

