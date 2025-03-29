function sendRequest() {
  const urlInput = document.getElementById('urlInput').value.trim();

  if (!urlInput) {
    alert('Please enter a URL');
    return;
  }

  const encodedUrl = encodeURIComponent(urlInput);
  const proxyUrl = `https://broken-wind-2e35.uraverageopdoge.workers.dev/?url=${encodedUrl}`;

  fetch(proxyUrl)
    .then(response => response.text()) // You can change .text() to .json() depending on the response
    .then(data => {
      document.getElementById('response').textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'An error occurred while proxying the URL.';
    });
}
