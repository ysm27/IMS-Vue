const User = require('../models/user');
const { formatTime } = require('../utils/date');

const UserController = {
  show: async function(req,res,next){
    try{
      const users = await User.all();
      res.locals.users = users.map(data => {
        data.created_time_display = formatTime(data.created_time)
        return data
      });
      res.locals.nav = 'user';
      res.render('manage/user', res.locals);
    }catch(e){
      res.locals.error = e;
      res.render('error', res.locals);
    }
  },
  all: async function(req,res,next){
    try{
      let users = await User.all();
      const data = users.map(data => {
        data.created_time_display = formatTime(data.created_time)
        return data
      });
      res.json({
        code:200,
        data
      })
    }catch(e){
      res.json({
        code: 0,
        message: "服务器错误"
      })
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let created_time = new Date();
    if(!name || !phone || !password){
      res.json({ code: 0, data: 'params empty!'})
      return
    }
    try{
      const users = await User.insert({name, phone, password, created_time});
      res.locals.users = users;
      res.json({ code: 200, data: users});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'});
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    if(!id || !name || !phone || !password){
      res.json({ code: 0, data: 'params empty!'})
      return
    }
    try{
      const users = await User.update(id, {name, phone, password});
      res.locals.users = users;
      res.json({ code: 200, message: '修改成功'});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'});
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await User.delete(id);
      res.locals.users = users;
      res.json({ code: 200, message: '删除成功'});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'})
    }
  },
  renderEdit: async function(req,res,next){
    try{
      let id = req.params.id;
      const users = await User.select({id});
      res.locals.users = users[0]
      res.locals.nav = 'user';
      res.render('manage/user_edit.tpl', res.locals);
    }catch(e){
      console.log(e)
      res.locals.error = e;
      res.render('error', res.locals);
    }
  },
  renderCreate: async function(req,res,next){
    res.locals.nav = 'user';
    res.render('manage/user_create')
  },
  
}

module.exports = UserController;