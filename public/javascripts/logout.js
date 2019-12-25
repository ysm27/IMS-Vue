const LogoutPage = {
  init: function(){
    this.bind()
  },
  bind: function(){
    $('#logout').on('click', this.logout);
  },
  logout: function(){
    $.ajax({
      url: '/api/logout',
      type: 'GET',
      success: function(data){
        if(data.code === 200){
          alert('退出成功');
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
LogoutPage.init();