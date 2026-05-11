/* =========================
   ELEMENT
========================= */

const hasil =
document.getElementById('hasil');

/* =========================
   AUDIO
========================= */

const semangatAudio =
document.getElementById(
  'semangatAudio'
);

const pintarAudio =
document.getElementById(
  'pintarAudio'
);

const hebatAudio =
document.getElementById(
  'hebatAudio'
);

const islamAudio =
document.getElementById(
  'islamAudio'
);

/* =========================
   STOP ALL AUDIO
========================= */

function stopAllAudio(){

  const allAudio = [

    semangatAudio,
    pintarAudio,
    hebatAudio,
    islamAudio

  ];

  allAudio.forEach(audio => {

    audio.pause();

    audio.currentTime = 0;

  });

}

/* =========================
   PLAY FUNCTION
========================= */

function playTepuk(type){

  stopAllAudio();

  if(type === 'semangat'){

    hasil.innerHTML =
    '👏 TEPUK SEMANGAT 👏<br>Prok Prok Prok YES!';

    semangatAudio.play();

  }

  else if(type === 'pintar'){

    hasil.innerHTML =
    '🎓 TEPUK PINTAR 🎓<br>Aku Anak Pintar!';

    pintarAudio.play();

  }

  else if(type === 'hebat'){

    hasil.innerHTML =
    '⭐ TEPUK HEBAT ⭐<br>Aku Hebat Luar Biasa!';

    hebatAudio.play();

  }

  else if(type === 'islam'){

    hasil.innerHTML =
    '🕌 TEPUK ISLAMI 🕌<br>Bismillah Anak Sholeh!';

    islamAudio.play();

  }

}