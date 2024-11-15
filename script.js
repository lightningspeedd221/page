
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
    await delay(2000);
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    //Video();
});//

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') || 
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

document.addEventListener('DOMContentLoaded',async () => {
    delay(2000);
    // Select video and audio elements
    const video = document.getElementById('backgroundVideo');
    const audio = document.getElementById('backgroundAudio');
    await delay(2000);
    // Play video and audio
    video.play();
    audio.play().catch(error => {
        console.log("Audio autoplay failed. User interaction may be required:", error);
    });
});
