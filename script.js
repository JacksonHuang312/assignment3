function heron(a, b, c) {
    return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow((a * a + b * b - c * c), 2));
};

document.getElementById('heron-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const a = document.getElementById('heron-a').value;
    const b = document.getElementById('heron-b').value;
    const c = document.getElementById('heron-c').value;

    const result = heron(a, b, c);
    document.getElementById('heron-result').value = result;
});


function ambiguousCase(a, b, angle) {
    if (angle == 90) {
        return "Right Triangle";
    }
    const h = b * Math.sin(angle * Math.PI / 180);

    if (angle < 90) {
        if (a < h) {
            return "No Triangle";
        }
        if (a > b) {
            return "One Triangle";
        }
        if (h < a && a < b) {
            return "Two Triangles";
        }
        if (a == h) {
            return "Right Triangle";
        } else {
            return "No Solution";
        }
    }

    if (angle > 90) {
        if (a <= b) {
            return "No Triangle";
        }
        if (a > b) {
            return "One Triangle";
        } else {
            return "No Triangle";
        }
    }
}

document.getElementById('ambig-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const a = document.getElementById('ambig-a').value;
    const b = document.getElementById('ambig-b').value;
    const angle = document.getElementById('ambig-angle').value;

    const result = ambiguousCase(a, b, angle);
    document.getElementById('ambig-result').value = result;
});

function approximation(guess) {

    const a = Math.pow(guess, 4);
    const b = Math.pow(guess, 3);
    const c = Math.pow(guess, 2);
    const fxn = (6 * a - 13 * b - 18 * c + 7 * guess + 6);
    const fxnPrime = (24 * b - 39 * c - 36 * guess + 7);
    return (guess - fxn / fxnPrime);

}

document.getElementById('newton-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const a = document.getElementById('root-guess').value;
    const result = approximation(a);
    document.getElementById('root-result').value = result;
});