document.addEventListener('DOMContentLoaded', () => {
  const barra = document.getElementById('barra-superior');
  const offsetTop = barra.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetTop) {
      barra.classList.add('fija');
    } else {
      barra.classList.remove('fija');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const abrirPopup = document.getElementById('abrir-popup');
  const cerrarPopup = document.getElementById('cerrar-popup');
  const popup = document.getElementById('popup-despliegue');
    
  abrirPopup.addEventListener('click', () => {
    popup.classList.add('mostrar');
  });
    
  cerrarPopup.addEventListener('click', () => {
    popup.classList.remove('mostrar');
  });
    
  window.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && e.target !== abrirPopup) {
      popup.classList.remove('mostrar');
    }
  });
    
    link1.addEventListener('click', (e) => {
    if (popup.contains (e.target) && e.target !== abrirPopup) {  
    popup.classList.remove('mostrar');
    }
    });
    
    link2.addEventListener('click', (e) => {
    if (popup.contains (e.target) && e.target !== abrirPopup) {  
    popup.classList.remove('mostrar');
    }
    });
  
    link3.addEventListener('click', (e) => {
    if (popup.contains (e.target) && e.target !== abrirPopup) {  
    popup.classList.remove('mostrar');
    }
    });
});