const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

//to use validateToken to use in this ContactRouter only
router.use(validateToken)

router.route('/').get(contactController.getContacts).post(contactController.createContact)
router.route('/:id').get(contactController.getContact).put(contactController.updateContact).delete(contactController.deleteContact)


module.exports = router;

