var vechile = require('../models/vechile'); 
 
// List of all vechiles 
exports.vechile_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: vechile list'); 
}; 
 
// for a specific vechile. 
exports.vechile_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: vechile detail: ' + req.params.id); 
}; 
 
// Handle vechile create on POST. 
exports.vechile_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: vechile create POST'); 
}; 
 
// Handle vechile delete form on DELETE. 
exports.vechile_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: vechile delete DELETE ' + req.params.id); 
}; 
 
// Handle vechile update form on PUT. 
exports.vechile_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: vechile update PUT' + req.params.id); 
}; 
// List of all vechiles 
exports.vechile_list = async function(req, res) { 
    try{ 
        thevechiles = await vechile.find(); 
        res.send(thevechiles); 
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
        thevechiles = await vechile.find(); 
        res.render('vechile', { title: 'vechile Search Results', results: thevechiles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle vechile create on POST. 
exports.vechile_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new vechile(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"vechile_type":"goat", "cost":12, "size":"large"} 
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

// for a specific vechile. 
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

// Handle vechile delete on DELETE. 
exports.vechile_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await vechile.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 



 // Handle a show one view with id specified by query 
 exports.vechile_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await vechile.findById( req.query.id) 
        res.render('vechiledetail',  
{ title: 'vechile Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a vechile. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.vechile_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('vechilecreate', { title: 'vechile Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a vechile. 
// query provides the id 
exports.vechile_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await vechile.findById(req.query.id) 
        res.render('vechileupdate', { title: 'vechile Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.vechile_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await vechile.findById(req.query.id) 
        res.render('vechiledelete', { title: 'vechile Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 