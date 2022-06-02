const ContactSchema = require('../model/contact');


exports.getcontact = async (req, res) => {
    try {
        const contacts = await ContactSchema.find();
        res.status(200).send({Msg : 'This is the list', contacts});
    } catch (error) {
        res.status(500).send({Msg : 'Error in getting contacts'});
    }
}

exports.getcontactbyid = async (req, res) => {
    try {
        const contact = await ContactSchema.findById(req.params.id);
        res.status(200).send({Msg : 'This is the contact', contact});
    } catch (error) {
        res.status(500).send({Msg : 'Error in getting contact'});
    }
}

exports.createcontact = async (req, res) => {  
    try {
        const contactss = new ContactSchema(req.body);
        await contactss.save();
        res.status(200).send({Msg : 'Contact was created successfully', contactss});
    } catch (error) {
        console.log(error);
        res.status(500).send({Msg : 'Error in creating contact'});
    }
}   


exports.updatecontact = async (req, res) => {
    try {
        const contact = await ContactSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send({Msg : 'Contact was updated successfully', contact});
    } catch (error) {
        res.status(500).send({Msg : 'Error in updating contact'});
    }
}

exports.deletecontact = async (req, res) => {
    try {
        await ContactSchema.findByIdAndDelete(req.params.id);
        res.status(200).send({Msg : 'Contact was deleted successfully'});
    } catch (error) {
        res.status(500).send({Msg : 'Error in deleting contact'});
    }
}