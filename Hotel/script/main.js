document.addEventListener("DOMContentLoaded", function () {
  // Création du carousel pour les meilleurs chambres de l'hotel
  new Splide("#rooms-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
  }).mount();

  // Création du carousel pour les avis clients
  new Splide("#avis_client", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
  }).mount();

  // Initialisation des animations AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });
});

// Fonction de réservation
function reserver(disponible) {
  const btn = event.currentTarget;
  let msg = btn.parentElement.querySelector(".reservation-message");
  if (msg) msg.remove();

  msg = document.createElement("div");
  msg.className = "reservation-message";
  msg.style.marginTop = "8px";
  msg.style.fontWeight = "bold";
  msg.style.fontSize = "1rem";

  if (disponible) {
    btn.style.background = "#179c3a";
    btn.style.color = "#fff";
    msg.textContent = "Chambre réservée avec succès !";
    msg.style.color = "#179c3a";
  } else {
    btn.style.background = "#c0392b";
    btn.style.color = "#fff";
    msg.textContent = "La chambre est actuellement indisponible.";
    msg.style.color = "#c0392b";
  }
  btn.parentElement.appendChild(msg);
  setTimeout(() => {
    btn.style.background = "";
    btn.style.color = "";
    msg.remove();
  }, 2000);
}

function reserverHotel() {
  const btn2 = event.currentTarget;
  let msg2 = btn2.parentElement.querySelector(".reservation-message");
  if (msg2) msg2.remove();

  msg2 = document.createElement("div");
  msg2.className = "reservation-message";
  msg2.style.marginTop = "8px";
  msg2.style.fontWeight = "bold";
  msg2.style.fontSize = "1rem";
  msg2.textContent = "Recherche des chambres disponibles...";
  msg2.style.color = "#1a2332";
  btn2.parentElement.appendChild(msg2);

  setTimeout(() => {
    msg2.textContent = "";
    window.location.href = "reservation.html";
  }, 1800);
}

document.querySelector(".mobile-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("active");
});
