const express = require('express')
const router = express.Router()
const Subscriber = require('../m/subscriber')

//all
router.get('/', async (req,res) => {
    try {
        const subscribers = await Subscriber.find() 
        res.json(subscribers)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//one
router.get('/:id', gSus, (req,res) => {
    res.send(res.subscriber.name)
})

//create
router.post('/', async (req,res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json( { message: err.message } )

    }
})


//alter
router.patch('/', (req,res) => {
    
})



//delete
router.delete('/:id', (req,res) => {
    
})








async function gSus(req,res,next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'could not find'} )
        }
    }
    catch(err) {
        return res.status(406).json({ message: err.message })

    }

    res.subscriber = subscriber
    next()
}

module.exports = router
