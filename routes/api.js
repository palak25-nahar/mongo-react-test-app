const express = require('express');
const router = express.Router();

const Notebook = require('../models/notebook')

//Routes
router.get('/', (req, res) => {

    Notebook.find({})
        .then((data) => {
            console.log('Data:', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('Error:', error)
        })

});

router.post('/save', (req, res) => {
    console.log('Body', req.body)
    const data = req.body;
    const newNotebook = new Notebook(data);

    newNotebook.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry internal server error' })
            return;
        }
        return res.status(200).json({ msg: 'Your data has een saved!' })

    })

})

router.get('/name', (req, res) => {
    const data = {
        username: 'xyz',
        age: 25
    };
    res.json(data)
});

module.exports = router