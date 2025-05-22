document.addEventListener('DOMContentLoaded', () => {
  let clickCount = localStorage.getItem('adClickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;

  const isOddClick = clickCount % 2 === 0; // YES: 0 = 1st click, 2 = 3rd, etc.

  if (isOddClick) {
    // Odd-numbered click (1st, 3rd, 5th...) — show overlay and redirect
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
      overlay.remove();
      localStorage.setItem('adClickCount', (clickCount + 1).toString());
      window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';
    });
  } else {
    // Even-numbered click (2nd, 4th...) — no redirect
    document.addEventListener('click', () => {
      localStorage.setItem('adClickCount', (clickCount + 1).toString());
    }, { once: true });
  }
});
