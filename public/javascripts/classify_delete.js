const ClassifyDelete = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('.table-container').on('click','#delete-classify',this.deleteClassify);
  },
  deleteClassify: function(){
    let id = $(this).data('id');
    console.log(id)
    if(!id){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/classify',
      data: {id},
      type: 'DELETE',
      success: function(data){
        if(data.code === 200){
          alert('删除成功');
          location.reload();
        }else{
          console.log(data)
        }
      },
      error: function(err){
        console.log(err);
      }
    })
  }
}
ClassifyDelete.init();