var express = require('express'); 
const vechile_controlers= require('../controllers/vechile'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', vechile_controlers.vechile_view_all_Page ); 
module.exports = router; 

// GET request for one costume. 
router.get('/vechile/:id', vechile_controlers.vechile_detail);


 