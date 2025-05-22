document.addEventListener('DOMContentLoaded', () => {
  let clickCount = parseInt(localStorage.getItem('adClickCount') || '0');

  const adLink = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';

  // On any click anywhere
  const handleClick = () => {
    clickCount++;
    localStorage.setItem('adClickCount', clickCount.toString());

    if (clickCount % 2 === 1) {
      // Odd clicks: open ad in new tab
      window.open(adLink, '_blank');
    }

    // Remove this listener to prevent multiple triggers in one session
    document.removeEventListener('click', handleClick);
  };

  // Set up single-time click listener on entire page
  document.addEventListener('click', handleClick);
});
