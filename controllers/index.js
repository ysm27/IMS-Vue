const Classify = require('../models/classify');
const Article = require('../models/article');
const { formatTime } = require('../utils/date')

const classifyController = {
  renderIndex: async function(req,res,next) {
    let page = req.query.page || 1;
    let limit = 2;
    let classify_id = req.query.classify_id;
    let classifysData;
    let index;
    if(!classify_id){
      index = await Article.count();
      classifysData = await Article.all().offset(limit * (page - 1)).limit(limit);
    }else{
      index = await Article.select({classify_id}).count('id as sum')
      classifysData = await Article.select({classify_id}).offset(limit * (page - 1)).limit(limit);
    }
    let sum = index[0].sum;
    let pageNumber = Math.ceil(sum/limit);
    let pageArray = new Array(pageNumber).fill('').map((item, index) => index + 1);
    res.locals.pagination = {
      current: page,
      pageArray: pageArray
    }
    const articleDisplay = classifysData.map((data, index) => {
      data.created_time_display = formatTime(data.created_time);
      data.index = limit * (page - 1) + index +1;
      return data
    })
    res.locals.classifysData = articleDisplay;
    const classify = await Classify.all();
    res.locals.classify = classify;
    res.locals.classify_id = classify_id || 0;
    res.render('index',res.locals);
  },
  renderArticle: async function(req,res,next) {
    let id = req.params.id;
    const articles = await Article.select({ id });
    const articlesDisplay = articles.map(data => {
      data.created_time_display = formatTime(data.created_time);
      return data
    })
    const article = articlesDisplay[0];
    const classify = await Classify.all();
    res.locals.classify = classify;
    res.locals.article = article;
    res.render('article_detail', res.locals);
  },

}
module.exports = classifyController;