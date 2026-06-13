// le code JS 
const barres = document.querySelectorAll('.barre');
barres.forEach(function(barre) {
    const pourcentage = barre.getAttribute('data-pourcentage');
    console.log(pourcentage);
    const progression = barre.querySelector('.progression');
    progression.style.width = pourcentage + '%';
    
});
const humburger = document.querySelector('#humburger');
const menu = document.querySelector('#navbar ul');

humburger.addEventListener('click', function() {
    menu.classList.toggle('ouvert');
});