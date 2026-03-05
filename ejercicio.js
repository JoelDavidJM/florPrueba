const clases = [
    {
        numero: 1,
        titulo: 'class 1',
        descripcion: 'variable'
    },
    {
        numero: 2,
        titulo: 'class 2',
        descripcion: 'variable'
    },
    {
        numero: 3,
        titulo: 'class 3',
        descripcion: 'variable'
    },
    {
        numero: 4,
        titulo: 'class 4',
        descripcion: 'variable'
    },
    {
        numero: 5,
        titulo: 'class 5',
        descripcion: 'variable'
    }
]

// fghjklyhjk
const titulos = clases.map((clase) => clase.titulo.toUpperCase());

console.log(titulos)