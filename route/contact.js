const express = require('express');

const {getcontact, createcontact, updatecontact, deletecontact,getcontactbyid} = require("../controllers/contact");
const ContactRouter = express.Router();


//get all contacts
ContactRouter.get('/', getcontact);
   

//get a single contact
ContactRouter.get ('/:id', getcontactbyid);


//create a new contact
ContactRouter.post ('/', createcontact);


//update a contact
ContactRouter.put ('/:id', updatecontact);

//delete a contact
ContactRouter.delete ('/:id', deletecontact);

module.exports = ContactRouter;