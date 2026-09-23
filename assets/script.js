document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("today");
  if (el) {
    try {
      el.textContent = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      /* silent — non-essential */
    }
  }
});
