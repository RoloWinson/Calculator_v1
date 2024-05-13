function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Ошибка';
  }
}


let clearInput = false;

function appendToDisplay(value) {
    if (clearInput) {
        clearDisplay();
        clearInput = false;
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Ошибка';
        clearInput = true;
    }
}
