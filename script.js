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
    let guess = +document.getElementById('root-guess').value;
    let result = guess;
    let result2 = approximation(result);

    while (Math.abs(result2 - result) > 0.001) {
        result = result2;
        result2 = approximation(result);
        result2 = Math.round(result2 * 1000) / 1000;
    }


    document.getElementById('root-result').value = result2;
});

function polynomial(coefficients, exponents, x) {
    let result = 0;
    let polynomialString = '';

    for (let i = 0; i < coefficients.length; i++) {
        let coeff = parseFloat(coefficients[i]);
        let expo = parseFloat(exponents[i]);

        if (isNaN(coeff) || isNaN(expo)) continue;

        let term = coeff * Math.pow(x, expo);
        result += term;

        let sign = coeff >= 0 && i > 0 ? ' + ' : ' ';
        polynomialString += `${sign}${coeff}x^${expo}`;
    }

    return { polynomialString, result };
}

document.getElementById('poly-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let coeffInput = document.getElementById('poly-coeff').value.trim();
    let expoInput = document.getElementById('poly-expo').value.trim();
    let xValue = parseFloat(document.getElementById('poly-value').value);

    if (!coeffInput || !expoInput || isNaN(xValue)) {
        alert('Please enter valid coefficients, exponents, and an X value.');
        return;
    }

    let coefficients = coeffInput.split(' ');
    let exponents = expoInput.split(' ');

    if (coefficients.length !== exponents.length) {
        alert('Uneven amount of coefficients and exponents entered.');
        return;
    }

    if (coefficients.some(c => isNaN(parseFloat(c))) || exponents.some(e => isNaN(parseFloat(e)))) {
        alert('Please enter only numeric values for coefficients and exponents.');
        return;
    }

    let { polynomialString, result } = polynomial(coefficients, exponents, xValue);

    document.getElementById('poly-fxn').value = polynomialString;
    document.getElementById('poly-result').value = result.toFixed(3);
});