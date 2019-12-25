{% extends './manage_layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/user_create.css">
{% endblock %}

{% block content %}
  <div class="content">
    <a class="content-title" href="/manage/user">返回用户列表 >></a>
    <div class="info-list">
      <input id="new-name" class="info-item" type="text" name="name" placeholder="姓名">
      <input id="new-phone" class="info-item" type="text" name="phone" placeholder="电话">
      <input id="new-password" class="info-item" type="text" name="password" placeholder="密码">
      <button id="create-btn" class="save" data-id="{{users.id}}">新建</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/user_create.js"></script>
{% endblock %}