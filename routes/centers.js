const express = require('express')
const router = express.Router()
const Center = require('../models/Center')

//Add Traing Center
router.post('/add', async (req, res) => {
    //Create Center
    try {
        const newCenter = new Center(req.body);
        //Save and Respond
        const center = await newCenter.save()
        res.status(200).json(center);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false });
    }
});
//Get all Traing Center
router.get('/all', async (req, res) => {
    try {
        const centers = await Center.find()
        res.json({ success: true, data: centers })
    } catch (error) {
        return res.status(500).json({ success: false });
    }
});

module.exports = router;