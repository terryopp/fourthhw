window.onload = function() {
  const calc = new Calc();

  const n = document.getElementById('n');
  const start = document.getElementById('start');
  const answer = document.getElementById('answer');
  const answer1 = document.getElementById('first');
  const answer2 = document.getElementById('second');

  function writting () {
    answer1.innerHTML = calc.first.join(', ');
    answer2.innerHTML = calc.second.join(', ');
  }

  n.addEventListener('keyup', () => {
    if (n.value*1 > 1) calc.creating(n.value*1);
    writting();
  });

  start.addEventListener('click', () => {
    calc.randomize();
    writting();
  });
}