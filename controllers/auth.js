const authCodeFunc = require('../utils/authCode');
const User = require('../models/user');

const AuthController = {
  login: async function(req,res,next){
    let phone = req.body.phone;
    let password = req.body.password;
    if(!phone || !password){
      res.json({ code: 0, data: 'params empty'})
      return
    }
    try{
      const users = await User.select({phone, password});
      const user = users[0];
      if(user){
        let auth_code = phone + '\t' + password + '\t' + user.id + '\t';
        auth_code = authCodeFunc(auth_code, 'ENCODE');
        res.cookie('ac', auth_code, { maxAge: 24* 60 * 60 * 1000, httpOnly: true });
        res.json({ code: 200, data: {token: auth_code}, message: '登录成功'})
      }else{
        res.json({ code: 0, message: '登录失败，没有此用户！' })
      }
    }catch(e){
      res.json({ code: 0, message: '系统问题请管理员处理' })
    }
  },
  logout: async function(req,res,next){
    res.clearCookie('ac');
    res.redirect('/login')
  }
}

module.exports = AuthController;