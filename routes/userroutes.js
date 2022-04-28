const express = require('express');

const routes = express.Router();
const usercontroller = require('../controllers/usercontroller');



function intilization() {
  postRoutes()
  deleteRoutes()
 getRoutes()
 patchRoutes()
}

intilization()

function postRoutes() {
  routes.post('/addStudent', usercontroller.addStudent)


 }
 function patchRoutes(){
  routes.patch('/update', usercontroller.update)
 }
   function deleteRoutes() {
      routes.delete('/delete', usercontroller.delete)
    }
   function getRoutes() {
   routes.get('/get', usercontroller.get)
   routes.get('/getpage',usercontroller.getpage)
   }


module.exports=routes;
