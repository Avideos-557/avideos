let isEvenClick = localStorage.getItem('isEvenClick') === 'true';
let shouldRedirect = localStorage.getItem('shouldRedirect') === 'true';

body.addEventListener('click', (event) => {
  isEvenClick = !isEvenClick; // Toggle even/odd click
  localStorage.setItem('isEvenClick', isEvenClick.toString());

  if (isEvenClick && shouldRedirect) {
    // Redirect to ad website
    window.location.href = 'https://www.profitableratecpm.com/m5u0fm024?key=915f5541df37252209d1ab523c2cc8e5';
    shouldRedirect = false;
    localStorage.setItem('shouldRedirect', shouldRedirect.toString());
  } else if (!isEvenClick) {
    shouldRedirect = true;
    localStorage.setItem('shouldRedirect', shouldRedirect.toString());
  }
});
