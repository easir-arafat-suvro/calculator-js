// get the button value onclick

function replyClick(clickedId) {
    const buttonElement = document.getElementById(clickedId);
    const buttonValue = buttonElement.innerText;
    const screenElement = document.getElementById('screen');
    const screenValue = screenElement.innerText;


    if (
        buttonValue == 1 || buttonValue == 2 || buttonValue == 3 || buttonValue == 4 || buttonValue == 5 || buttonValue == 6 || buttonValue == 7 || buttonValue == 8 || buttonValue == 9 || buttonValue == 0 || buttonValue == '.' || buttonValue == '/' || buttonValue == '*' || buttonValue == '-' || buttonValue == '+'
    ) {
        screenElement.innerText = screenValue + buttonValue;
    }
    else if (buttonValue == '=') {
        screenElement.innerText = eval(screenValue);
    }
    else if (buttonValue == 'AC') {
        screenElement.innerText = '';
    }
}

