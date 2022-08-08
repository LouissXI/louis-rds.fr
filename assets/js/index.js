//  TypeWriter

const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
};

var typewriter = new Typewriter(document.getElementById('writer'), {
    loop: false,
    delay: 75,
    stringSplitter
});

const hour = getHour();
var stringtoshow;
if (hour >= 0 && hour < 5) {
    stringtoshow = "💤Bonne nuit"
} else if(hour >= 18) {
    stringtoshow = "👋 Bonsoir";
} else {
    stringtoshow = "👋 Bonjour";
}

typewriter.pauseFor(1000).typeString(stringtoshow).start();

// Buttons

document.getElementById("github-btn").onclick = function() {openLinkInAnotherTab("https://github.com/LouissXI")}
document.getElementById("discord-btn").onclick = function() {openLinkInAnotherTab("https://discord.gg/we3WzvFM5C")}
document.getElementById("twitter-btn").onclick = function() {openLinkInAnotherTab("https://twitter.com/LouisssXI")}
document.getElementById("spotify-btn").onclick = function() {openLinkInAnotherTab("https://open.spotify.com/user/21wa3isyhcvoxhtdjv2qm4zai")}
document.getElementById("youtube-btn").onclick = function() {openLinkInAnotherTab("https://www.youtube.com/channel/UCgANb_PGe6Ep0D0Nk5XeIdw")}

// Utility functions

function openLinkInAnotherTab(url) {
    window.open(url, '_blank').focus()
}

function getHour() {
    var d = new Date();
    var n = d.getHours();
    return n;
}
