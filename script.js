/* =========================
   SLIDER
========================= */

const slide =
document.getElementById("slide");

if (slide) {

  const images = [

    "assets/img/slide1.jpg",
    "assets/img/slide2.jpg",
    "assets/img/slide3.jpg"

  ];

  let index = 0;

  setInterval(() => {

    index++;

    if (index >= images.length) {

      index = 0;

    }

    slide.src = images[index];

  }, 3000);

}

/* =========================
   MUSIC
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

if (musicBtn && music) {

  musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

      music.play()
      .then(() => {

        musicBtn.innerHTML =
        "⏸ Pause Musik";

        isPlaying = true;

      })
      .catch(() => {

        alert(
          "Browser memblokir audio otomatis."
        );

      });

    } else {

      music.pause();

      musicBtn.innerHTML =
      "🔊 Putar Musik";

      isPlaying = false;

    }

  });

}

/* =========================
   ANIMASI SCROLL
========================= */

const fadeElements =
document.querySelectorAll('.fade-in');

function checkFade() {

  fadeElements.forEach(el => {

    const position =
    el.getBoundingClientRect().top;

    const screenPosition =
    window.innerHeight / 1.15;

    if (position < screenPosition) {

      el.classList.add('show');

    }

  });

}

window.addEventListener(
  'scroll',
  checkFade
);

window.addEventListener(
  'load',
  checkFade
);

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

  const loading =
  document.getElementById("loading");

  if (loading) {

    setTimeout(() => {

      loading.style.opacity = "0";

      setTimeout(() => {

        loading.style.display =
        "none";

      }, 500);

    }, 1500);

  }

});

/* =========================
   DARK MODE
========================= */

const darkBtn =
document.getElementById('darkBtn');

/* LOAD DARK MODE */

if (
  localStorage.getItem("darkMode")
  === "enabled"
) {

  document.body.classList.add(
    "dark-mode"
  );

}

if (darkBtn) {

  darkBtn.addEventListener('click', () => {

    document.body.classList.toggle(
      'dark-mode'
    );

    if (
      document.body.classList.contains(
        "dark-mode"
      )
    ) {

      localStorage.setItem(
        "darkMode",
        "enabled"
      );

    } else {

      localStorage.setItem(
        "darkMode",
        "disabled"
      );

    }

  });

}

/* =========================
   INPUT KARTU SISWA
========================= */

const inputNama =
document.getElementById("inputNama");

const namaSiswa =
document.getElementById("namaSiswa");

if (inputNama && namaSiswa) {

  inputNama.addEventListener(
    "keyup",
    () => {

      if (
        inputNama.value.trim() === ""
      ) {

        namaSiswa.innerHTML =
        "Nama Anak";

      } else {

        namaSiswa.innerHTML =
        inputNama.value;

      }

    }
  );

}

/* =========================
   EFEK TYPING
========================= */

const typing =
document.querySelector(".typing");

if (typing) {

  const text =
  typing.textContent;

  typing.textContent = "";

  let i = 0;

  function typeWriter() {

    if (i < text.length) {

      typing.textContent +=
      text.charAt(i);

      i++;

      setTimeout(
        typeWriter,
        60
      );

    }

  }

  typeWriter();

}

/* =========================
   NAVBAR ACTIVE
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".menu a");

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
      section.offsetTop;

      if (
        pageYOffset >=
        sectionTop - 150
      ) {

        current =
        section.getAttribute("id");

      }

    });

    navLinks.forEach(link => {

      link.classList.remove(
        "active"
      );

      if (
        link.getAttribute("href")
        === `#${current}`
      ) {

        link.classList.add(
          "active"
        );

      }

    });

  }
);

/* =========================
   CONFETTI FORM
========================= */

const btnDaftar =
document.querySelector(
  ".btn-daftar"
);

if (btnDaftar) {

  btnDaftar.addEventListener(
    "click",
    () => {

      confetti({

        particleCount: 150,
        spread: 100,
        origin: {
          y: 0.6
        }

      });

    }
  );

}

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
  "✨ Website PPDB SDN 1 Lebak Aktif ✨"
);