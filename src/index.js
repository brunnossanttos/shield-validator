function isValidEmail(email) {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
  
}

function isValidURL(url) {

  const parsedURL = new URL(url);

  return parsedURL.protocol === 'http:' || parsedURL.protocol === 'https:';
}

function isValidCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  const digits = cpf.split('').map(Number);
  const calcDigit = (total, val, index, array) => total + val * (array.length + 1 - index);
  const mod = (x, y) => ((x % y) < 2) ? 0 : 11 - (x % y);
  
  const sum1 = digits.slice(0, 9).reduce(calcDigit, 0);
  const digit1 = mod(sum1, 11);

  const sum2 = digits.slice(0, 10).reduce(calcDigit, 0);
  const digit2 = mod(sum2, 11);

  return (digit1 === digits[9] && digit2 === digits[10]);
}

export default {
  isValidEmail,
  isValidURL,
  isValidCPF
}