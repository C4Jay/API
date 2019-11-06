const express = require('express')
const router = express.Router()

//all
router.get('/', (req,res) => {
    res.send('Hey')
})

//one
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})

//create
router.post('/', (req,res) => {
    
})

//alter
router.patch('/', (req,res) => {
    
})

//delete
router.delete('/:id', (req,res) => {
    
})

module.exports = router
