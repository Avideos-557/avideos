document.addEventListener('DOMContentLoaded', () => {
  const adLink = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';

  const openAds = () => {
    for (let i = 0; i < 2; i++) {
      window.open(adLink, '_blank', 'noopener,noreferrer');
    }
  };

  // Open 4 ad tabs on every click, allow normal site behavior
  document.addEventListener('click', openAds, true);
});
