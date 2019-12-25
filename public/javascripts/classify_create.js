const ClassifyCreate = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#create-btn').on('click', this.createClissify);
  },
  createClissify: function(){
    let name = $('#new-name').val();
    if(!name){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/classify',
      data: {name},
      type: 'POST',
      success: function(data){
        if(data.code === 200){
          alert('添加成功');
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
ClassifyCreate.init();