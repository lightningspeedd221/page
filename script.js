
function Refresh()
{
    location.reload();
}

function Pages(pagenbr)
{
    if(pagenbr == 1)
    {
        window.location.href = "index.html";
    }
    else if(pagenbr == 2)
    {
        window.location.href = "about.html";
    }
    else if(pagenbr == 3)
    {
        window.location.href = "spam.html";
    }
    else
    {
        alert("Unknown page");
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//* Hide loading screen when page is loaded
window.addEventListener("load", async function() {
    await delay(1000);
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    //Video();
});//


function Video() {
    // Get video and audio elements
    const video = document.getElementById('backgroundVideo');
    const audio = document.getElementById('backgroundAudio');
    audio.volume = 0.4;
    // Play both at the same time
    video.play();
    audio.play();
}
