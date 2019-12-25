const Base = require('./base');
const knex = require('./knex');

class Article extends Base{
  constructor(props = 'article'){
    super(props)
  }
}

module.exports = new Article();