const fs = require('fs')

// const numero1 = fs.readFileSync('./numero1', 'utf-8')
// const numero2 = fs.readFileSync('./numero2', 'utf-8')
// console.log(
// `El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`
// )

// fs.readFile('./numero1', (err, data) => {
//   if (err) console.log(err)
//   const numero1 = parseInt(data)
//   fs.readFile('./numero2', (err, data) => {
//     if (err) console.log(err)
//     const numero2 = parseInt(data)
//     console.log(`El resultado de la suma es  ${numero1 + numero2}`)
//   })
// }) 

const customReadFile = (filename)=>{
  return new Promise((resolve, reject) => {
    fs.readFile('fileName', (err, data) => {
      if (err) reject()
      return resolve(data)
    }
  });

}
