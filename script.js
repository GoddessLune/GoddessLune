
function showTier(tier) {
  let msg = "";
  if (tier === "pig") {
    msg = "🐷 Dungeon Pig: Submit and be humiliated.";
  } else if (tier === "worshipper") {
    msg = "💎 Dungeon Worshipper: Tribute for custom punishment.";
  } else if (tier === "sub") {
    msg = "👑 Dungeon Submissive: Prepare for ritual and reward.";
  }
  alert(msg);
}
