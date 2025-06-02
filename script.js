
function showTier(tier) {
  let msg = "";
  if (tier === "pig") {
    msg = "🐷 Tribute Pig: Your offering is received.";
  } else if (tier === "worshipper") {
    msg = "💎 Loyal Worshipper: Greater devotion recognized.";
  } else if (tier === "sub") {
    msg = "👑 Devoted Submissive: Prepare to be blessed.";
  }
  alert(msg);
}

function enterRealm() {
  var audio = document.getElementById("mystic-audio");
  audio.volume = 0; // Start silent
  audio.play();
  document.getElementById("music-controls").style.display = "block";

  // Gradual fade-in
  var fadeAudio = setInterval(function () {
    if (audio.volume < 0.5) {
      audio.volume += 0.01;
    } else {
      clearInterval(fadeAudio);
    }
  }, 200);
}

function togglePlay() {
  var audio = document.getElementById("mystic-audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggleMute() {
  var audio = document.getElementById("mystic-audio");
  audio.muted = !audio.muted;
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
