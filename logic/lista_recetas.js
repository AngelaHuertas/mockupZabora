const btnFiltroAlimentos = document.getElementById('btnFiltroAlimentos');
const btnFiltroGeneral = document.getElementById('btnFiltroGeneral');
const panelAlimentos = document.getElementById('panelAlimentos');
const panelGeneral = document.getElementById('panelGeneral');
const main = document.querySelector('main');

btnFiltroAlimentos.addEventListener('click', () => {
    panelAlimentos.style.display = panelAlimentos.style.display === 'none' ? 'block' : 'none';
    main.classList.toggle('desplazado-izq');
});

btnFiltroGeneral.addEventListener('click', () => {
    panelGeneral.style.display = panelGeneral.style.display === 'none' ? 'block' : 'none';
    main.classList.toggle('desplazado-der');
});

document.querySelectorAll('.alimentos span').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('seleccionado');
    });
});

document.querySelectorAll('.categorias span').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('seleccionado');
    });
});

