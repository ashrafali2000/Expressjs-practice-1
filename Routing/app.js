const express = require("express");
const app = express();
// const bodyParser = require('body-parser')
const router = require("./routes/router")
const PORT = 3000;

// body parser
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// All method routes
//   app.all('/secret', (req, res, next) => {
//    req.secret = "it is form secret section...";
//     next()
//   })

  // GET method route
// app.get('/secret', (req, res) => {
//     res.send(req.secret)
//   })
  
  // POST method route
//   app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })

// ROUTE PATHs
// This route path will match requests to /random.text.
// app.get('/random.text', (req, res) => {
//     res.send('random.text')
//   })

// This route path will match ashrafalachakzai and ashrafkaliachakzai.
// app.get('/ashrafk?ali?achakzai', (req, res) => {
//     res.send('ashrafk?ali')
//   })

// This route path will match ashrafalikakozai and ashrafffaliiikakozai.
// app.get('/ashraf+ali+kakozai', (req, res) => {
//     res.send('ashraf+ali+kakozai')
//   })

//This route path will match ashrafali, ashrafkhanali, ashrafRANDOMali, ashraf123ali, and so on.
// app.get('/ashraf*ali', (req, res) => {
//     res.send('ashraf*ali')
//   })

//This route path will match ashrafkakozai, ashrafalikakozai
// app.get('/ashraf(ali)?kakozai', (req, res, next) => {
//     if(req.path === '/ashrafkakozai'){
//         next()
//     }
//   })
// app.get("/ashraf(ali)?kakozai", (req, res) => {
//     res.send("hello user");
// })

// This route path will match anything with an “a” in it.
// app.get(/a/, (req, res) => {
//     res.send('/ashraf/')
//   })

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
// app.get(/.*fly$/, (req, res) => {
//     res.send('lastfly')
//   })

// Route parameters
// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
//   })

// Route handlers
// app.get('/example/a', (req, res) => {
//     res.send('Hello from A!')
//   })

// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function1 ...')
//     next()
//   }, (req, res, next) => {
//     console.log('the response will be sent by the next function2...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from B!')
// })

// An array of callback functions can handle a route. For example:
// const func1 = (req, res, next) =>{
// console.log("func1 is running...");
// next()
// }
// const func2 = (req, res, next) =>{
// console.log("func2 is running...");
// next()
// }
// const func3 = (req, res, next) =>{
// res.send("Hello from func3");
// }

// app.use("/", [func1, func2, func3]);


// A combination of independent functions and arrays of functions can handle a route. For example:
// const func1 =  (req, res, next) => {
//     console.log('func1')
//     next()
//   }
  
//   const func2 =  (req, res, next) => {
//     console.log('func2')
//     next()
//   }
  
//   app.get('/', [func1, func2], (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
//   }, (req, res) => {
//     res.send('Hello from func3!')
//   })

// app.route()

// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })

app.use('/router', router)

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})