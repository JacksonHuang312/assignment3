function heron(a, b, c) {
   return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow((a * a + b * b - c * c), 2));
}

document.getElementById('heron-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = document.getElementById('heron-a').value;
    const b = document.getElementById('heron-b').value;
    const c = document.getElementById('heron-c').value;

    const result = heron(a, b, c);
    document.getElementById('heron-result').value = result;
});