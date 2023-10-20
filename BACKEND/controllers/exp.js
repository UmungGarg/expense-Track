const User = require('../models/exp');

exports.getAddUser = async (req,res,next) => {
    try {
      const users = await User.findAll();
      console.log(users);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

exports.postAddUser = async(req,res,next) => {
    const expAmount = req.body.fname;
    const description = req.body.emale;
    const category = req.body.fon;
    const data = await User.create( {expAmount: expAmount, description: description, category: category });
    console.log(data);
    res.status(201).json({newUserDetail:data});
    };

exports.postDeleteUser = async(req,res,next) => {
  const userId = req.params.expId;
  User.findByPk(userId)
  .then(user => {
    return user.destroy();
  })
  .catch(err => console.log(err));
}
    
exports.postEditUser = async(req,res,next) => {
  const expAmount = req.body.fname;
  const description = req.body.emale;
  const category = req.body.fon;
  const data = await User.create( {expAmount: expAmount, description: description, category:category });
  console.log(data);
  res.status(201).json({newUserDetail:data});
  };