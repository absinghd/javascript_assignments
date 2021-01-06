  
const express = require ('express');
const router = express.Router();

// get a list of chefs from the db
router.get('/chefs', function(req, res){
    res.send({type: 'GET'});
});

// add a new chef to the db
router.post('/chefs', function(req, res){
    res.send({type: 'POST'});
});

// update a chef in the db
router.put('/chefs/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a chef from the db
router.delete('/chefs/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;