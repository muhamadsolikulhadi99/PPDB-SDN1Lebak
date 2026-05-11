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

let jawaban =
warnaList[
  Math.floor(
    Math.random() *
    warnaList.length
  )
];

let score = 0;

function updateSoal(){

  pertanyaan.innerHTML =
  `Klik warna ${jawaban}!`;

}

updateSoal();

warnaButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const pilih =
    btn.classList[1];

    if(pilih === jawaban){

      benarSound.play();

      score++;

      scoreText.innerHTML =
      score;

      alert(
        "🎉 Hebat! Jawaban Benar"
      );

    } else {

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