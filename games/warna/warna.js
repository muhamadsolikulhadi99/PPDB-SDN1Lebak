/* =========================
   ELEMENT
========================= */

const pertanyaan =
document.getElementById("pertanyaan");

const scoreText =
document.getElementById("score");

const warnaButtons =
document.querySelectorAll(".warna");

const benarSound =
document.getElementById("benarSound");

const salahSound =
document.getElementById("salahSound");

/* =========================
   LIST WARNA
========================= */

const warnaList = [

  "merah",
  "biru",
  "hijau",
  "kuning",
  "ungu",
  "orange",
  "pink",
  "coklat",
  "hitam",
  "putih",
  "abu",
  "laut"

];

/* =========================
   RANDOM JAWABAN
========================= */

let jawaban =
warnaList[
  Math.floor(
    Math.random() *
    warnaList.length
  )
];

let score = 0;

/* =========================
   UPDATE SOAL
========================= */

function updateSoal(){

  pertanyaan.innerHTML =
  `Klik warna ${jawaban}!`;

}

updateSoal();

/* =========================
   EVENT KLIK
========================= */

warnaButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const pilih =
    btn.classList[1];

    if(pilih === jawaban){

      benarSound.currentTime = 0;

      benarSound.play();

      score++;

      scoreText.innerHTML =
      score;

      alert(
        "🎉 Hebat! Jawaban Benar"
      );

    } else {

      salahSound.currentTime = 0;

      salahSound.play();

      alert(
        "❌ Ups, Coba Lagi"
      );

    }

    jawaban =
    warnaList[
      Math.floor(
        Math.random() *
        warnaList.length
      )
    ];

    updateSoal();

  });

});