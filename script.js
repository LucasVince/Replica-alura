const cabecalho = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    cabecalho.style.position = 'fixed';
    cabecalho.style.padding = '20px';
    cabecalho.style.opacity = '95%';
} else {
    cabecalho.style.position = 'relative';
    cabecalho.style.padding = '40px 20px 20px 20px';
    cabecalho.style.opacity = '100%';
  }
});