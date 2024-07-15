import anime from 'animejs';

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    anime({
      targets: link,
      scale: 1.1,
      duration: 200,
      easing: 'easeInOut',
    });
  });

  link.addEventListener('mouseout', () => {
    anime({
      targets: link,
      scale: 1,
      duration: 200,
      easing: 'easeInOut',
    });
  });
});