const output = document.getElementById('result');

const handlePress = (e) => {
  output.value = e.keyCode;
};

window.addEventListener('keydown', handlePress);