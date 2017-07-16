(function() {
  const navbarLinks = document.getElementById('navbar-links');
  const hamburger = document.querySelector('.hamburger');

  navbarLinks.addEventListener('click', e => {
    console.log('click');
  });

  hamburger.addEventListener('click', () => {
    console.log('hamburger clicked');
    const isShowing = navbarLinks.classList.contains('showing');
    isShowing
      ? navbarLinks.classList.remove('showing')
      : navbarLinks.classList.add('showing');
  });
})();
