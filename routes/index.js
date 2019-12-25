var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');
var ClassifyController = require('../controllers/classify');
var ArticleController = require('../controllers/article');
var IndexController = require('../controllers/index');

/* GET home page. */
router.get('/', IndexController.renderIndex);
router.get('/article_detail/:id', IndexController.renderArticle);

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/manage/user', UserController.show);
router.get('/manage/user_create', UserController.renderCreate);
router.get('/manage/user_edit/:id', UserController.renderEdit);


router.get('/manage/classify', ClassifyController.show);
router.get('/manage/classify_create', ClassifyController.renderCreate);
router.get('/manage/classify_edit/:id', ClassifyController.renderEdit);

router.get('/manage/article', ArticleController.show);
router.get('/manage/article_create', ArticleController.renderCreate);
router.get('/manage/article_edit/:id', ArticleController.renderEdit);




module.exports = router;
