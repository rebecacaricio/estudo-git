let arr = ['Rebeca', 26, 1.77, true]

console.log(arr)

console.log('Primeiro Elemento:', arr[0])
console.log('Segundo Elemento:', arr[1])
console.log('Terceiro Elemento:', arr[2])
console.log('Qaurto Elemento:', arr[3])

console.log('Tamanho do array:', arr.length)

for (let i = 0; i < 4; i++) {
    console.log(arr[i])
}

for (let Elemento of arr) {
    console.log(Elemento)
}