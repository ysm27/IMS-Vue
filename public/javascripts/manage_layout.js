const PAGE = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#article').on('click', this.showList);
  },
  showList: function(){
    $('#article').toggleClass('active');
    $('#article-list').toggleClass('active');
  },
}
PAGE.init();