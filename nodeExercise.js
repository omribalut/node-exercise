// // // Exercise 1
// // const express = require('express')
// // const app = express()

// // app.get('/', function (req, res) {

// //     res.send('This text returned from my nodejs server') //The function send of the response, sending back the data we supply
// // })

// // app.listen(3000)

// // // Exercise 2
// // const express = require('express')
// // const app = express()

// // app.get('/', (req, res) => {

// //     const { num1, num2 } = req.query
// //     const result = Number(num1) + Number(num2)
// //     res.send(`Result: ${result}`)
// // })
// // app.listen(3000)

// // // Exercise 3
// // const express = require('express')
// // const app = express()

// // app.get('/:year', (req, res) => {

// //     const year = req.params.year
// //     res.send(`you were born in ${year}`)
// // })
// // app.listen(3000)

// // // Exercise 4
// const express = require('express')
// const fs = require('fs') //fs is file system package, allow to read/write/manipulation on files
// const path = require('path') //Allow us to manipulate path of files and more
// const cors = require("cors")//Allow us to connect with other services that run on other ports
// const bodyParser = require("body-parser")
// const app = express()
// app.use(bodyParser.json())
// app.use(cors())

// const personsArray = []
// const message = {message: "This person doesn't exist"}

// app.get('/', function (req, res) {
//     const fileFullName = path.join(__dirname, './nodeExercise.html')
//     fs.readFile(fileFullName, 'utf-8', (error, htmlString) => {
//         res.send(htmlString)
//     })
// })


// app.post('/persons', function (req, res) {
//     const user = req.body;
//     personsArray.push(user)
//     console.log(personsArray);
// })

// app.get('/persons/:id', function (req, res) {
//     const personId = req.params.id
//     //request.params is an object containing properties to the named route || and request.query comes from query parameters in the URL
//     const person = personsArray.find((person) => {
//         return person.id === personId
//     })
//     if (person) {
//         res.json(person)
//     }
//     else {
//         res.json(message)
//     }

// })

// app.listen(3000)
