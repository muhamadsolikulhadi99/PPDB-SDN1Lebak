<<<<<<< HEAD
/* =========================
   MINI PIANO ANAK
========================= */

const keys =
document.querySelectorAll('.key');

/* =========================
   AUDIO MAP
========================= */

const sounds = {

  do : new Audio('../../assets/audio/do.mp3'),
  re : new Audio('../../assets/audio/re.mp3'),
  mi : new Audio('../../assets/audio/mi.mp3'),
  fa : new Audio('../../assets/audio/fa.mp3'),
  sol : new Audio('../../assets/audio/sol.mp3'),
  la : new Audio('../../assets/audio/la.mp3'),
  si : new Audio('../../assets/audio/si.mp3')

};

/* =========================
   PLAY SOUND
========================= */

keys.forEach(key => {

  key.addEventListener('click', () => {

    const note =
    key.dataset.note;

    const sound =
    sounds[note];

    if(sound){

      sound.currentTime = 0;

      sound.play();

    }

    /* ANIMATION */

    key.classList.add('active');

    setTimeout(() => {

      key.classList.remove('active');

    }, 150);

  });

});

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener(
  'keydown',
  (e) => {

    const keyMap = {

      a : 'do',
      s : 're',
      d : 'mi',
      f : 'fa',
      g : 'sol',
      h : 'la',
      j : 'si'

    };

    const note =
    keyMap[e.key];

    if(note){

      const pianoKey =
      document.querySelector(
        `[data-note="${note}"]`
      );

      pianoKey.click();

    }

  }
=======
/* =========================
   MINI PIANO ANAK
========================= */

const keys =
document.querySelectorAll('.key');

/* =========================
   AUDIO MAP
========================= */

const sounds = {

  do : new Audio('../../assets/audio/do.mp3'),
  re : new Audio('../../assets/audio/re.mp3'),
  mi : new Audio('../../assets/audio/mi.mp3'),
  fa : new Audio('../../assets/audio/fa.mp3'),
  sol : new Audio('../../assets/audio/sol.mp3'),
  la : new Audio('../../assets/audio/la.mp3'),
  si : new Audio('../../assets/audio/si.mp3')

};

/* =========================
   PLAY SOUND
========================= */

keys.forEach(key => {

  key.addEventListener('click', () => {

    const note =
    key.dataset.note;

    const sound =
    sounds[note];

    if(sound){

      sound.currentTime = 0;

      sound.play();

    }

    /* ANIMATION */

    key.classList.add('active');

    setTimeout(() => {

      key.classList.remove('active');

    }, 150);

  });

});

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener(
  'keydown',
  (e) => {

    const keyMap = {

      a : 'do',
      s : 're',
      d : 'mi',
      f : 'fa',
      g : 'sol',
      h : 'la',
      j : 'si'

    };

    const note =
    keyMap[e.key];

    if(note){

      const pianoKey =
      document.querySelector(
        `[data-note="${note}"]`
      );

      pianoKey.click();

    }

  }
>>>>>>> 308872333275f77c03aad154043451933debc45e
);