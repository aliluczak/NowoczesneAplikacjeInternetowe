var elementList = document.querySelector('ul');
var buttons = document.querySelectorAll('button');


function addActivity() {
    var inputText = document.querySelector('input');
    var newActivity = document.createElement('li');
    newActivity.innerHTML = inputText.value;

    var newButton = document.createElement('button');
    var textOnButton = document.createTextNode('-');
    newButton.appendChild(textOnButton);
    newActivity.appendChild(newButton);

    newButton.addEventListener('click', function() {
        elementList.removeChild(event.target.parentElement);
    });

    elementList.appendChild(newActivity);

};

buttons[0].addEventListener('click', addActivity);
buttons[1].addEventListener('click', function () {
    elementList.removeChild(event.target.parentElement);
});
