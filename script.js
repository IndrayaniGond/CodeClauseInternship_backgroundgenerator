document.getElementById('generateBtn').addEventListener('click', generateBackground);

function generateBackground() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const gradientType = document.getElementById('gradientType').value;

    let backgroundValue;
    switch (gradientType) {
        case 'linear':
            backgroundValue = `linear-gradient(to right, ${color1}, ${color2})`;
            break;
        case 'radial':
            backgroundValue = `radial-gradient(circle, ${color1}, ${color2})`;
            break;
        case 'conic':
            backgroundValue = `conic-gradient(from 90deg, ${color1}, ${color2})`;
            break;
        case 'repeating-linear':
            backgroundValue = `repeating-linear-gradient(45deg, ${color1}, ${color2} 10%)`;
            break;
        case 'repeating-radial':
            backgroundValue = `repeating-radial-gradient(circle, ${color1}, ${color2} 10%)`;
            break;
        default:
            backgroundValue = `linear-gradient(to right, ${color1}, ${color2})`;
    }

    document.body.style.background = backgroundValue;
    document.getElementById('cssCode').querySelector('span').textContent = `background: ${backgroundValue};`;
}
