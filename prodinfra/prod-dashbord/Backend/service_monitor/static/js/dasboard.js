document.addEventListener("DOMContentLoaded", () => {
  fetchServiceStatus();
});

function fetchServiceStatus() {
  fetch("/api/services/service/1/status/")
    .then((res) => res.json())
    .then((data) => {
      const el = document.getElementById("service-status");
      el.textContent = `Status: ${data.status}`;
      el.style.color = data.status === "healthy" ? "green" : "red";
    });
}

function restartService() {
  fetch("/api/services/service/1/restart/", { method: "POST" })
    .then((res) => res.json())
    .then((data) => alert(`Restart: ${data.status}`));
}

function stopService() {
  fetch("/api/services/service/1/stop/", { method: "POST" })
    .then((res) => res.json())
    .then((data) => alert(`Stop: ${data.status}`));
}