
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
