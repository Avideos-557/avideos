document.addEventListener('DOMContentLoaded', () => {
  const adLink = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';

  // Automatically open ad after 5 seconds
  setTimeout(() => {
    window.open(adLink, '_blank');
  }, 5000); // 5000 ms = 5 seconds; change this delay if you want

  // Open ad on every click as before
  const openAdOnClick = (e) => {
    window.open(adLink, '_blank');
    // Let the click do its normal action
  };

  document.addEventListener('click', openAdOnClick, true);
});
