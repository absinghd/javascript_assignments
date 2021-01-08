  
const express = require ('express');
const router = express.Router();
const Chef = require('../models/chef');

// get a list of chefs from the db
router.get('/chefs', function(req, res, next){
    res.send({type: 'GET'});
});

// add a new chef to the db
router.post('/chefs', function(req, res, next){
    // var chef = new Chef(req.body);
    // chef.save();...or just do it like this ->
    Chef.create(req.body).then(function(chef){
        res.send(chef)
    }).catch(next)

});

// update a chef in the db
router.put('/chefs/:id', function(req, res, next){
    Chef.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Chef.findOne({_id: req.params.id}).then(function(chef){
            res.send(chef);
        });
    }).catch(next)
});

// delete a chef from the db
router.delete('/chefs/:id', function(req, res, next){
    Chef.findByIdAndRemove({_id: req.params.id}).then(function(chef){
        res.send({type: 'DELETE'}, chef);
    })
});

module.exports = router;