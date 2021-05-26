const input = 31;

function isPrime(angka) {
  let counterPembagi = 0;
  let hasil;
  for (let i = 2; i <= angka; i++) {
    if (angka % i === 0) {
      counterPembagi++;
    }
  }
  if (counterPembagi > 1) {
    hasil = false;
  } else {
    hasil = true;
  }
  return hasil;
}

function getPrimes(num) {
  let result = '';

  if (num > 2) {
    for (let i = 2; i < num; i++) {
      if (isPrime(i)) {
        result += i + ', ';
      }
    }
  } else if (+num === 2) {
    result = num;
  } else if (+num < 2) {
    result = 'Invalid number'
  }

  return result;
}

console.log(getPrimes(input));