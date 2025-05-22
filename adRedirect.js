document.addEventListener('DOMContentLoaded', () => {
  const adLink = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';

  const openAdOnClick = (e) => {
    // Open ad in a new tab
    window.open(adLink, '_blank');
    // Do NOT prevent default — let the site behave normally
  };

  // Listen for ALL clicks on the document
  document.addEventListener('click', openAdOnClick, true);
});
