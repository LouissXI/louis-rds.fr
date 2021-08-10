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

typewriter.pauseFor(1000).typeString("👋 Bonjour").start();

// Buttons

document.getElementById("github-btn").onclick = function() {openLinkInAnotherTab("https://github.com/LouissXI")}
document.getElementById("discord-btn").onclick = function() {openLinkInAnotherTab("https://discord.com/api/oauth2/authorize?client_id=756860663476912208&permissions=8&scope=applications.commands%20bot")}
document.getElementById("twitter-btn").onclick = function() {openLinkInAnotherTab("https://twitter.com/louiss_XI")}
document.getElementById("instagram-btn").onclick = function() {openLinkInAnotherTab("https://instagram.com/louis_ravignot")}
document.getElementById("spotify-btn").onclick = function() {openLinkInAnotherTab("https://open.spotify.com/user/21wa3isyhcvoxhtdjv2qm4zai")}
document.getElementById("youtube-btn").onclick = function() {openLinkInAnotherTab("https://www.youtube.com/channel/UCfltZx9e9JVRpxOQR6dazUg")}

function openLinkInAnotherTab(url){
    window.open(url, '_blank').focus()
}