const fs = require('fs').promises

fs.readFile('1.txt')
  .then(data => {
    console.log('ARCHIVO 1')
    console.log(data)
    console.log('-----------------------------')
    console.log('-----------------------------')
    console.log('-----------------------------')
    console.log('------------ FIN ------------')

    fs.readFile('2.txt')
      .then(data => {
        console.log('ARCHIVO 2')
        console.log(data)
        console.log('-----------------------------')
        console.log('-----------------------------')
        console.log('-----------------------------')
        console.log('------------ FIN ------------')

        fs.readFile('3.txt')
          .then(data => {
            console.log('ARCHIVO 3')
            console.log(data)
            console.log('-----------------------------')
            console.log('-----------------------------')
            console.log('-----------------------------')
            console.log('------------ FIN ------------')
          })
      })
  })
  .catch(err => {
    console.log('error')
  })
