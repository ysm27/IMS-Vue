const Article = require('../models/article');
const Classfy = require('../models/classify');
const { formatTime } = require('../utils/date');

const ArticleController = {
  show: async function(req,res,next){
    try{
      const article = await Article.all()
      .leftJoin('classify','classify.id','article.classify_id')
      .column(
        'article.id',
        'article.title',
        'article.classify_id',
        'article.content',
        'article.created_time',
        {'class_id':'classify.id'},
        {'class_name':'classify.name'}
      );

      res.locals.article = article;
      res.locals.nav = 'article';
      res.render('manage/article', res.locals);
    }catch(e){
      res.locals.error = e;
      res.render('error', res.locals);
    }
  },
  all: async function(req,res,next){
    try{
      const article = await Article.all()
      .leftJoin('classify','classify.id','article.classify_id')
      .column(
        'article.id',
        'article.title',
        'article.classify_id',
        'article.content',
        'article.created_time',
        {'class_id':'classify.id'},
        {'class_name':'classify.name'}
      );
      const data = article.map(data => {
        data.created_time_display = formatTime(data.created_time)
        return data
      });
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
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    let created_time = new Date();
    if(!title || !classify_id || !content){
      res.json({ code: 0, data: 'params empty'});
      return
    }
    try{
      const article = await Article.insert({title, classify_id,content,created_time});
      res.locals.article = article;
      res.json({ code: 200, data: article});
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'})
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let title = req.body.title;
    let classify_id = req.body.classify_id;
    let content = req.body.content;
    if(!id || !title || !classify_id || !content){
      res.json({ coode: 0, data: 'params empty'});
      return
    }
    try{
      const article = await Article.update(id, {title,classify_id,content});
      res.locals.article = article;
      res.json({ code: 200, data: article})
    }catch(e){
      console.log(e);
      res.json({ code: 0, message: '内部错误'})
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    if(!id){
      res.json({ code: 0, data: 'params empty'})
      return
    }
    try{
      const article = await Article.delete(id);
      res.locals.article = article;
      res.json({ code: 200, data: article})
    }catch(e){
      console.log(e)
      res.json({ code: 0, message: '内部错误'})
    }
  },
  renderEdit: async function(req,res,next){
    try{
      let id = req.params.id;
      const article = await Article.select({id});
      res.locals.article = article[0];
      const classify = await Classfy.all();
      res.locals.classify = classify;
      res.locals.nav = 'article';
      res.render('manage/article_edit', res.locals)
    }catch(e){
      res.locals.error = e;
      res.render('error', res.locals)
    }
  },
  renderCreate: async function(req,res,next){
    try{
      const classify = await Classfy.all();
      res.locals.classify = classify;
      res.locals.nav = 'article';
      res.render('manage/article_create')
    }catch(e){
      res.locals.error = e;
      res.render('error', res.locals);
    }
  },
  single :async function(req,res,next){
    let id = req.params.id
    try{
      const single = await Article.select({id})
        res.json({
          code:200,
          data:single
        })
    }catch(err){
      console.log(err)
      res.json({
        code:0,
        message:"服务器错误"
      })
    }
  }
}

module.exports = ArticleController;