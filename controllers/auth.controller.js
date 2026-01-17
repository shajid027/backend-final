const User = require('../models/user.model.js');

/* Home Logic */

const home = async (req, res) => {
  try {
    res.status(200).send('This is a Home page');
  } catch (error) {
    console.log(error);
  }
};

/* Registration Logic */

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: 'User already exist' });
    }

    const createUser = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({ message: createUser });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

module.exports = { home, register };
