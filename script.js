let gambar = [
  "image/malioboro.jpg",
  "image/candi-prambanan.jpg",
  "image/pantai-parangtritis.jpg",
  "image/heha-sky-view.jpg",
  "image/tebing-breksi.jpg"
];

let nomor = 0;
let welcomeImg = document.getElementById("welcomeimg");

setInterval(function () {
  nomor++;

  if (nomor >= gambar.length) {
    nomor = 0;
  }

  welcomeImg.src = gambar[nomor];
}, 5000);