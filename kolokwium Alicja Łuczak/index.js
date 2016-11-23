var button = document.querySelector('button');
var list = document.querySelector('table');

button.addEventListener('click',
    function () {
        var carName = document.querySelector('input');
        var carBrand = document.querySelector('select');
        console.log(carBrand.options[carBrand.selectedIndex].value);

        var newCar = document.createElement('tr');

        var newCarName = document.createElement('p');
        var newCarNameText = document.createTextNode(carName.value);
        newCarName.appendChild(newCarNameText);
        newCar.appendChild(newCarName);

        var newCarBrand = document.createElement('p');
        var newCarBrandText = document.createTextNode(carBrand.options[carBrand.selectedIndex].value);
        newCarBrand.appendChild(newCarBrandText);
        newCar.appendChild(newCarBrand);

        var carRent = document.createElement('div');
        carRent.className = 'rent';
        var carRentTextParagraph = document.createElement('p');
        var carRentText = document.createTextNode('Wypo¿yczony');
        carRentTextParagraph.appendChild(carRentText);

        var carRentCheckbox = document.createElement('input');
        carRentCheckbox.type = 'checkbox';
        carRent.appendChild(carRentCheckbox);

        newCar.appendChild(carRent);

        var newButton = document.createElement('button');
        var textOnButton = document.createTextNode('Usuñ');
        newButton.appendChild(textOnButton);
        newCar.appendChild(newButton);

        newButton.addEventListener('click', function () {
           list.removeChild(event.target.parentElement);
        });

        list.appendChild(newCar);
    });