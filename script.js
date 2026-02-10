let opened = false;

document.querySelector(".valentines").addEventListener("click", () => {
  const card = document.querySelector(".card");

  if (!opened) {
    card.style.top = "-110px"; // keluar setengah
    opened = true;
  } else {
    card.style.top = "20px";
    opened = false;
  }
});
