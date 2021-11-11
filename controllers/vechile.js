var Costume = require('../models/vechile'); 
 
// List of all Costumes 
exports.vechile_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume list'); 
}; 
 
// for a specific Costume. 
exports.vechile_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.vechile_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.vechile_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.vechile_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 
// List of all Costumes 
exports.vechile_list = async function(req, res) { 
    try{ 
        theCostumes = await vechile.find(); 
        res.send(theCostumes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 // VIEWS 
// Handle a show all view 
exports.vechile_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await Costume.find(); 
        res.render('vechile', { title: 'vechile Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 