var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var vechile_controller = require('../controllers/vechile'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// vechile ROUTES /// 
 
// POST request for creating a vechile.  
router.post('/vechile', vechile_controller.vechile_create_post); 
 
// DELETE request to delete vechile. 
router.delete('/vechile/:id', vechile_controller.vechile_delete); 
 
// PUT request to update vechile. 
router.put('/vechile/:id', 
vechile_controller.vechile_update_put); 
 
// GET request for one vechile. 
router.get('/vechile/:id', vechile_controller.vechile_detail); 
 
// GET request for list of all vechile items. 
router.get('/vechile', vechile_controller.vechile_list); 
 
module.exports = router; 
 