{% extends './manage_layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/user_create.css">

{% endblock %}

{% block content %}
  <div class="content">
    <a class="content-title" href="/manage/user">返回用户列表 >></a>
    <div class="info-list">
      <input id="name" class="info-item" type="text" name="name" placeholder="姓名" value="{{users.name}}">
      <input id="phone" class="info-item" type="text" name="phone" placeholder="电话" value="{{users.phone}}">
      <input id="password" class="info-item" type="text" name="password" placeholder="密码" value="{{users.password}}">
      <button id="edit-btn" class="save" data-id="{{users.id}}">保存</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/user_edit.js"></script>
{% endblock %}