const catInput = document.getElementById('catName');
const place = document.getElementById('location');
const addCat =  document.getElementById('addCat');
const cats =  document.getElementById('cats');

addCat.addEventListener('submit', function(event) {
    event.preventDefault();

    cats.appendChild(addFigure(catInput.value, place.value));
});

function addFigure(catName, place) {
    const figure = document.createElement('figure');
    figure.className = 'card';
    const img = document.createElement('img');
    size = Math.floor(Math.random() * 100 + 100); 
    img.src = 'http://placekitten.com/' + size + '/300';
    img.alt = 'cat image';
    const figcaption = document.createElement('figcaption');
    const h2 = document.createElement('h2');
    const location = document.createElement('div');
    location.className = 'location';
    location.innerText = place ? place : 'unknown';
    h2.innerText = catName;
    figcaption.appendChild(h2);
    figcaption.appendChild(location);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.classList.add('pop');

    return figure;
}
