// conversão de tipos

// coerção explícita (manual)
const numero = 10;

console.log(numero, typeof numero)
const numeroEmFormatodeString = String(numero)
console.log(numeroEmFormatodeString, typeof numeroEmFormatodeString)

console.log(Number ('123'))
console.log(parseFloat ('123.3'))
console.log(Boolean (1))

console.clear()

// Coerção Implícita (automática)

console.log(10 + '1')
//ele vai converter tudo pra text e juntar

console.log(10 - 1)
// na subtração ele entende e fica tudo número

console.log(10 - 'xxx')
// NaN not a number


