document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
    var selectedColor = document.getElementById('selectedColor');
    var hexCode = document.getElementById('hexCode');

    colorPicker.addEventListener('input', function() {
        var selectedHex = colorPicker.value;
        selectedColor.style.backgroundColor = selectedHex;
        hexCode.innerText = selectedHex;
    });
});
