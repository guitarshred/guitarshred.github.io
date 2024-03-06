var counter = 0; // Initialize counter variable

// Function to increase counter and update display
function increaseCounter() {
  counter++; // Increase the counter by 1
  document.getElementById("counter").innerText = counter; // Update counter display
  window.location.href = "unity:"+counter; // Pass counter value to Unity

  window.location.href = "unityscheme://counterValue?value=" + counter;
}

// Option to send the final value of the counter to Unity before closing
// You should call this function before closing the web view if needed.
function sendFinalCounterValueToUnity() {
  window.location.href = "unity:"+counter; // Sends final counter value
}

function sendFinalCounterValueToUnity() {
  // Use a custom scheme to close the WebView and send the final value
  window.location.href = "unityscheme://counterValue?value=" + counter;
}
