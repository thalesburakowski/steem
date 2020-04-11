const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({ message: 'Boa noite' })
})

module.exports = router