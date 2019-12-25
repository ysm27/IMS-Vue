const Classify = require('../models/classify');

const IndexController = {
  show: async function(req,res,next){
    try{
      const classify = await Classify.all();
      res.locals.classify = classify;
      res.locals.nav = 'classify';
      res.render('manage/classify', res.locals);
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  all: async function(req,res,next){
    try{
      const data = await Classify.all();
      res.json({
        code: 200,
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
    if(!name){
      res.json({ code: 0, data: 'params empty!'});
      return
    }
    try{
      const classify = await Classify.insert({ name});
      res.locals.classify = classify;
      res.json({ code: 200, data: classify});
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误'})
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    if(!name){
      res.json({ code: 0, data: 'params empty'});
      return
    }
    try{
      const classify = await Classify.update(id, {name});
      res.json({ code: 200, data: classify});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'})
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await Classify.delete(id);
      res.locals.classify = classify;
      res.json({ code: 200, message: '删除成功'});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'})
    }
  },
  renderEdit: async function(req,res,next){
    try{
      let id = req.params.id;
      const classify = await Classify.select({id});
      res.locals.classify = classify[0];
      res.locals.nav = 'classify';
      res.render('manage/classify_edit', res.locals);
    }catch(e){
      res.locals.error = e;
      res.render('error', res.locals);
    }
  },
  renderCreate: async function(req,res,next){
    res.locals.nav = 'classify';
    res.render('manage/classify_create')
  }
}

module.exports = IndexController;