console.log("Freya.js loaded");

document.getElementById("mic-icon").addEventListener("click", () => {
  fetch("/speech-to-text")
    .then(response => response.json())
    .then(data => {
      const transcription = data.transcription;
      const response = data.response;

      console.log("Transcription:", transcription); // Debug print
      console.log("Response:", response); // Debug print

      // Update the text box with the transcription
      document.getElementById("input-box").value = transcription;

      // Display the Mistral output in the textarea
      document.getElementById("mistral-output").value = response;

      // Send the response to the text-to-speech route
      fetch("/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `text=${encodeURIComponent(response)}`,
      })
        .then(response => {
          if (response.ok) {
            return response.blob();
          } else {
            throw new Error("Failed to generate speech");
          }
        })
        .then(blob => {
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          audio.play(); // Automatically play the audio
        })
        .catch(error => console.error("Error:", error));
    })
    .catch(error => console.error("Error:", error));
});
