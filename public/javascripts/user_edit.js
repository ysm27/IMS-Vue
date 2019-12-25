const EditUser = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#edit-btn').on('click',this.editUser);
  },
  editUser: function(){
    let id = $(this).data('id');
    let name = $('#name').val();
    let phone = $('#phone').val();
    let password = $('#password').val();
    if(!id || !name || !phone || !password){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/user_edit/' + id,
      data: {id,name,phone,password},
      type: 'PUT',
      success: function(data){
        if(data.code === 200){
          alert('编辑成功')
          location.href = '/manage/user';
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
EditUser.init();