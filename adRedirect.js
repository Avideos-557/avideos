document.addEventListener('DOMContentLoaded', function () {
  document.body.style.height = '100vh';
  document.body.style.cursor = 'pointer'; // So people know they can click

  document.body.addEventListener('click', function () {
    let clickCount = localStorage.getItem('adClickCount');
    clickCount = clickCount ? parseInt(clickCount) : 0;

    clickCount++;
    localStorage.setItem('adClickCount', clickCount);

    if (clickCount % 2 === 1) {
      window.location.href = 'https://flirtatiousmoviesbrightly.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5'; // Replace with your real URL
    }
  });
});
