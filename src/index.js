import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles.scss";


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("luck-btn").addEventListener("click", () => {
    alert("🍀 Happy St. Patricks Day! May the luck of the Irish be with you! 🌈");
  });
});
