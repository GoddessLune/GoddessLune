
function showTier(tier) {
    let msg = "";
    if (tier === "pig") {
        msg = "🐖 You chose Tribute Pig. Your obedience is noticed. Pay and await my next command.";
    } else if (tier === "worshipper") {
        msg = "💎 You chose Loyal Worshipper. Only the devoted receive my attention. Tribute and be seen.";
    } else if (tier === "sub") {
        msg = "👑 You chose Devoted Sub. Prepare for the privilege of my voice and custom ritual. Tribute now.";
    }
    alert(msg);
}
