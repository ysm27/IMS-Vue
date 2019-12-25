const LoginPage = {
  init: function(){
    this.bind()
  },
  bind: function(){
    $('#login-btn').on('click', this.login)
  },
  login: function(){
    let phone = $('#phone').val()
    let password = $('#password').val()
    if(!phone || !password){
      alert('缺少重要参数')
      return
    }
    $.ajax({
      url: '/api/login',
      data: {phone, password},
      type: 'POST',
      success: function(data){
        if(data.code === 200){
          alert('登录成功');
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

LoginPage.init();