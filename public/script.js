const videoPlayer = document.getElementById("video-player");
const generateButton = document.getElementById("generate-button");

//Adding youtube video IDs that will generate.
const videoLinks = [               
  "https://www.youtube.com/embed/C3TYCw1ctIw",
  "https://www.youtube.com/embed/FgrBGt5N3eM",
  "https://www.youtube.com/embed/fCVm5U2ob8U",
  "https://www.youtube.com/embed/es4x5R-rV9s"
];

let currentVideoIndex = -1;

generateButton.addEventListener("click", () => {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * videoLinks.length);
      } while (randomIndex === currentVideoIndex);      // Generating video until different index is found.

    currentVideoIndex = randomIndex;
    videoPlayer.src = videoLinks[randomIndex];
});
