const UserCreatePage = {
  init: function(){
    this.bind();
  },
  bind: function(){
    $('#create-btn').on('click', this.createUser);
  },
  createUser: function(){
    let name = $('#new-name').val();
    let phone = $('#new-phone').val();
    let password = $('#new-password').val();
    if(!name || !phone || !password){
      alert('缺少重要参数');
      return
    }
    $.ajax({
      url: '/api/manage/user',
      data: {name, phone, password},
      type: 'POST',
      success: function(data){
        if(data.code === 200){
          alert('添加成功');
          location.href = '/manage/user';
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
UserCreatePage.init();