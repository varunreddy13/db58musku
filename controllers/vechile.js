var vechile = require('../models/vechile'); 
 
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
        theCostumes = await vechile.find(); 
        res.render('vechile', { title: 'vechile Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST. 
exports.vechile_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new vechile(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.vName = req.body.vName; 
    document.vEngine = req.body.vEngine; 
    document.vCost = req.body.vCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Costume. 
exports.vechile_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await vechile.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle vechile update form on PUT. 
exports.vechile_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await vechile.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.vName)  
               toUpdate.vName = req.body.vName; 
        if(req.body.vEngine) toUpdate.vEngine = req.body.vEngine; 
        if(req.body.vCost) toUpdate.vCost = req.body.vCost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 