const ArticleCreate = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#create-btn').on('click', this.articleCreate)
  },
  articleCreate: function(){
    let title = $('#title').val();
    let classify_id = $('.classify_id:selected').val();
    let content = $('#content').val();
    if(!title || !classify_id || !content){
      alert('缺少重要参数')
      return
    }
    $.ajax({
      url: '/api/manage/article',
      data: {title, classify_id, content},
      type: 'POST',
      success: function(data){
        if(data.code === 200){
          alert('新建成功');
          location.href = '/manage/article';
        }else{
          console.log(data)
        }
      },
      error: function(err){
        console.log(err)
      }
    })
  },
}
ArticleCreate.init();