document.addEventListener('DOMContentLoaded', () => {
  let toggle = localStorage.getItem('adToggle');

  // Only show overlay if toggle is 'off' or null
  if (!toggle || toggle === 'off') {
    createOverlay();
  }

  function createOverlay() {
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
      localStorage.setItem('adToggle', 'on');
      window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5'; // Replace with your link
    });
  }

  // If overlay is not shown, monitor next click to bring it back
  if (toggle === 'on') {
    document.addEventListener('click', (e) => {
      localStorage.setItem('adToggle', 'off');
    }, { once: true });
  }
});
