document.addEventListener('DOMContentLoaded', () => {
  // Get click count or start at 0
  let clickCount = localStorage.getItem('adClickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;

  // Check if this is an odd-numbered click
  const isOdd = (clickCount + 1) % 2 === 1;

  if (isOdd) {
    // Create the overlay only for odd clicks
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '9999';
    overlay.style.cursor = 'pointer';
    overlay.style.background = 'transparent';

    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      // Increase click count and save
      clickCount++;
      localStorage.setItem('adClickCount', clickCount);

      // Redirect
      window.location.href = 'https://yourdirectlink.com'; // Replace with your link
    });
  } else {
    // Even click: just count it on any click and remove overlay logic
    document.addEventListener('click', () => {
      clickCount++;
      localStorage.setItem('adClickCount', clickCount);
    }, { once: true });
  }
});
