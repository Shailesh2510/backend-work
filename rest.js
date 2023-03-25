const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
const productcontroller = require('./controller/product');




// routes .......
 const router = express.Router();


 Router

     .post('/products', productcontroller.createproduct)
     .get('/products',productcontroller.  getallproducts)
     .get('/products', productcontroller.getproduct)
     .put('/products',  productcontroller.replaceproduct)
     .patch('/products',productcontroller. updateproduct)
     .delete('/products', productcontroller.deleteproduct)  
      
     exports.router = router;


server.listen(8080, () => {
  console.log('server started');
});