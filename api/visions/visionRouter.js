const router = require('express').Router();  // makes this file a router
const dbModel = require('./visionModel');

router
    .get('/', (req, res) => { 
        dbModel.findAll()
            .then(post => {
                res.status(200).json(post)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
    })

    
router  
.get('/:id', (req, res) => {
    const {id} = req.params
    
    dbModel.findById(id)
        .then(post => {
            if(!post){
                res.status(404).json({ message: 'post not found' })
            } else {
                res.status(200).json(post)
            } 
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router 
.post('/', (req, res) => {
    const {body} = req

    dbModel.addVision(body)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json(err)  
        })
})

router  
.delete('/:id', (req, res) => {
    const {id} = req.params

    dbModel.deleteVision(id)
        .then(() => res.sendStatus(204))
        .catch(err => {
            res.status(500).json(err)
        })
})

router
.put('/:id', (req, res) => {
    const {id} = req.params
    const {body} = req

    dbModel.editVision(id, body) 
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router