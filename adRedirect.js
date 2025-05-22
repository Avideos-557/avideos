document.addEventListener('DOMContentLoaded', () => {
  let clickCount = localStorage.getItem('adClickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;

  const isOddClick = (clickCount + 1) % 2 === 1;

  if (isOddClick) {
    // Create overlay for odd clicks
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
      clickCount++;
      localStorage.setItem('adClickCount', clickCount.toString());

      // Redirect to your ad link
      setTimeout(() => {
        window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';
      }, 100);
    });
  } else {
    // Even click: just increment counter
    document.addEventListener('click', () => {
      clickCount++;
      localStorage.setItem('adClickCount', clickCount.toString());
    }, { once: true });
  }
});
