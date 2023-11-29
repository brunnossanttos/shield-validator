function isStrongPassword(password) {
  if (password.length < 8) {
    return 'Por favor coloque pelo menos 8 caracteres.';
  }

  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return 'Por favor insira pelo menos um caractere especial.';
  }

  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return 'Por favor coloque pelo menos uma letra maiuscula.';
  }

  const digitRegex = /\d/g;
  const digitCount = (password.match(digitRegex) || []).length;
  if (digitCount < 2) {
    return 'Por favor coloque pelo menos dois numeros';
  }

  return true;
}

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

function isValidCNPJ(cnpj) {
  const cleanCNPJ = cnpj.replace(/\D/g, '');

  if (cleanCNPJ.length !== 14) {
    return false;
  }

  const cnpjRegex = /^(\d{2}\.\d{3}\.\d{3}\/0001-\d{2}|\d{14})$/;
  return cnpjRegex.test(cnpj);
}

function isValidRG(rg) {
  const cleanRG = rg.replace(/\D/g, '');

  if (cleanRG.length !== 9) {
    return false;
  }

  const rgRegex = /^(\d{2}\.\d{3}\.\d{3}-\d{1})$/;
  return rgRegex.test(rg);
}

function isValidPhoneNumber(phoneNumber) {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  if (cleanPhoneNumber.length !== 10) {
    return false;
  }
   const phoneRegex = /^(\(\d{2,}\)\s?)?\d{8,}$/;
  return phoneRegex.test(cleanPhoneNumber);
}

function isValidCellphoneNumber(cellphoneNumber) {
  const cleanCellphoneNumber = cellphoneNumber.replace(/\D/g, '');
  if (cleanCellphoneNumber.length !== 11) {
    return false;
  }
   const cellphoneRegex = /^(\(\d{2,}\)\s?)?\d{8,}$/;
  return cellphoneRegex.test(cleanCellphoneNumber);
}

function isValidCEP(cep) {
  const cleanCEP = cep.replace(/\D/g, '');

  if (cleanCEP.length !== 8) {
    return false;
  }

  const cepRegex = /^(\d{5}-\d{3}|\d{8})$/;
  return cepRegex.test(cleanCEP);
}

module.export = {
  isStrongPassword,
  isValidEmail,
  isValidURL,
  isValidCPF,
  isValidCNPJ,
  isValidRG,
  isValidPhoneNumber,
  isValidCellphoneNumber,
  isValidCEP
}