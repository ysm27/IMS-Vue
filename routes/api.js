var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user');
var ClassifyController = require('../controllers/classify');
var ArticleController = require('../controllers/article');
var AuthController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/manage/user', UserController.all);
router.post('/manage/user', UserController.insert);
router.put('/manage/user/:id', UserController.update);
router.delete('/manage/user/:id', UserController.delete);

router.get('/manage/classify', ClassifyController.all);
router.post('/manage/classify', ClassifyController.insert);
router.put('/manage/classify/:id', ClassifyController.update);
router.delete('/manage/classify/:id', ClassifyController.delete);

router.get('/manage/article', ArticleController.all);
router.get('/manage/article/:id', ArticleController.single);
router.post('/manage/article', ArticleController.insert);
router.put('/manage/article/:id', ArticleController.update);
router.delete('/manage/article/:id', ArticleController.delete);

router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);



module.exports = router;
