const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', new Date())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Router home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Router')
})

module.exports = router