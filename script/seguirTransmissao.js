document.getElementById("btn-enviar").addEventListener("click", function () {
    this.classList.remove("btn-outline-primary");
    this.classList.add("btn-success");
    this.innerHTML = '<i class="bi bi-check-circle-fill"></i> Seguindo';
  });