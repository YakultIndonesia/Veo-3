function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  const style = document.getElementById("style").value;
  const duration = document.getElementById("duration").value;

  if (!prompt) {
    alert("Please enter a video description.");
    return;
  }

  const loading = document.getElementById("loading");
  const resultVideo = document.getElementById("resultVideo");

  loading.style.display = "block";
  resultVideo.style.display = "none";

  // Simulate loading + AI processing
  setTimeout(() => {
    loading.style.display = "none";
    resultVideo.style.display = "block";
  }, 3000);
}

document.getElementById("duration").addEventListener("input", function() {
  document.getElementById("durationLabel").textContent = this.value + "s";
});
