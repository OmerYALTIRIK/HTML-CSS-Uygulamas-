function scrollFn() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('.menu').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      document.querySelector('.menu').style.backgroundColor = 'transparent';
    }
  }