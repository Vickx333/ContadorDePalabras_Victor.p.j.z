let formulario = document.querySelector('form');

let textDefault = document.querySelector('.btntextdefault');
textDefault.addEventListener('click', () => {
     document.querySelector('textarea').value = "Érase una vez una niñita que lucía una hermosa capa de color rojo. Como la niña la usaba muy a menudo, todos la llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la llamó y le dijo: —Abuelita no se siente muy bien, he horneado unas galletitas y quiero que tú se las lleves. —Claro que sí —respondió Caperucita Roja, poniéndose su capa y llenando su canasta de galletas recién horneadas. Antes de salir, su mamá le dijo: — Escúchame muy bien, quédate en el camino y nunca hables con extraños. —Yo sé mamá —respondió Caperucita Roja y salió inmediatamente hacia la casa de la abuelita."
});


formulario.addEventListener('submit', (e) => {
     e.preventDefault();
     let textoAContar = document.querySelector('textarea').value;


     textoAContar = textoAContar.toLowerCase();

     textoAContar = textoAContar.replace(/[^\w\s]/g, '');

     let palabras = textoAContar.split(' ');

     let aplicaciones = {};
     palabras.forEach(function (palabras) {
          aplicaciones[palabras] = (aplicaciones[palabras] || 0) + 1;

     });
     let resultado = document.getElementById('resultado');
     resultado.innerHTML = JSON.stringify(aplicaciones);
     console.log(aplicaciones)


});
