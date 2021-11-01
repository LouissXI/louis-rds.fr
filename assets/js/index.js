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

typewriter.pauseFor(1000).typeString("👋 Hello").start();

// Buttons

document.getElementById("github-btn").onclick = function() {openLinkInAnotherTab("https://github.com/LouissXI")}
document.getElementById("discord-btn").onclick = function() {openLinkInAnotherTab("https://discord.gg/we3WzvFM5C")}
document.getElementById("twitter-btn").onclick = function() {openLinkInAnotherTab("https://twitter.com/louiss_XI")}
document.getElementById("instagram-btn").onclick = function() {openLinkInAnotherTab("https://instagram.com/louis_ravignot")}
document.getElementById("spotify-btn").onclick = function() {openLinkInAnotherTab("https://open.spotify.com/user/21wa3isyhcvoxhtdjv2qm4zai")}
document.getElementById("youtube-btn").onclick = function() {openLinkInAnotherTab("https://www.youtube.com/channel/UCgANb_PGe6Ep0D0Nk5XeIdw")}

function openLinkInAnotherTab(url) {
    window.open(url, '_blank').focus()
}