const opositores = [
  {
    id: 1,
    nombre: 'Pepe',
    especialidad: 'Informática'
  },
  {
    id: 2,
    name: 'Leyre',
    especialidad: 'Sistemas y aplicaciones informáticas'
  }
]

const notas = [
  {
    id: 1,
    prueba: 'Práctica',
    nota: 3.5
  },
  {
    id: 1,
    prueba: 'Teórica',
    nota: 6.5
  },
  {
    id: 2,
    prueba: 'Práctica',
    nota: 3.5
  },
  {
    id: 2,
    prueba: 'Teórica',
    nota: 6.5
  }
]

// crea promesa para obtener los datos del opositor 1
const getOpositor = id => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find(opositor => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}

// crea promesa para obtener las notas del opositor 1
getOpositor(1)
  .then(opositor => {
    console.log(opositor)
  })
  .catch(e => {
    console.log(e)
  })

getOpositor(5)
  .then(opositor => {
    console.log(opositor)
  })
  .catch(e => {
    console.log(e)
  })

// crea promesa para obtener el nombre y las notas del opositor1
const getNotas = id => {
  return new Promise((resolve, reject) => {
    const notasOpositor = notas.filter(nota => nota.id === id)
    if (notasOpositor.length) {
      resolve(notasOpositor)
    } else {
      reject(new Error(`No se ha encontrado notas del opositor con id: ${id}.`))
    }
  })
}

getNotas(1)
  .then(notas => {
    console.log('Nota recibida')
  })
  .catch(e => {
    console.log(e)
  })

getNotas(5)
  .then(notas => console.log('Nota recibida'))
  .catch(e => console.log(e))
