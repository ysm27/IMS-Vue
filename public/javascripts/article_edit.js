const ArticleEdit = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#create-btn').on('click', this.articleEdit);
  },
  articleEdit: function(){
    let id = $(this).data('id');
    let title = $('#title').val();
    let classify_id = $('.classify_id:selected').val();
    let content = $('#content').val();
    if(!id || !title || !classify_id || !content){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/article/' + id,
      data: {id,title,classify_id,content},
      type: 'PUT',
      success: function(data){
        if(data.code === 200){
          alert('编辑成功');
          location.href = '/manage/article';
        }else{
          console.log(data)
        }
      },
      error: function(err){
        console.log(err)
      },
    })
  }
}
ArticleEdit.init();