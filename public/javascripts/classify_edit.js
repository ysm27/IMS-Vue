const ClassifyEdit = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#edit-btn').on('click', this.classifyEdit);
  },
  classifyEdit: function(){
    let id = $(this).data('id');
    let name = $('#name').val();
    if(!id || !name){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/classify_edit/' + id,
      data: {id, name},
      type: 'PUT',
      success: function(data){
        if(data.code === 200){
          alert('编辑成功');
          location.href = '/manage/classify';
        }else{
          console.log(data)
        }
      },
      error: function(err){
        console.log(err)
      }
    })
  }
}
ClassifyEdit.init();