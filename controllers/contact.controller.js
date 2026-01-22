const Contact = require('../models/contact.model.js');

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: 'message send successfully' });
  } catch (error) {
    console.error('Database Save Error:', error);
    return res.status(500).json({
      message: 'message not delivered',
      errorDetails: error.message,
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find().skip(skip).limit(limit);

    res.status(200).json({
      status: 'success',
      page,
      results: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch contacts' });
  }
};

module.exports = { contactForm, getAllContacts };
