document.addEventListener('click', function () {
  let clickCount = localStorage.getItem('adClickCount');
  clickCount = clickCount ? parseInt(clickCount) : 0;

  clickCount++;
  localStorage.setItem('adClickCount', clickCount);

  // Redirect only on odd-numbered clicks
  if (clickCount % 2 === 1) {
    window.location.href = 'https://yourdirectlink.com'; // replace with your real URL
  }
});
