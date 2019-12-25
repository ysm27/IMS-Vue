{% extends './manage_layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/manage.css">
{% endblock %}

{% block content %}
  <div class="add-user">
    <a class="add-btn" href="/manage/user_create">添加用户</a>
  </div>
  <div class="table-container">
    <table class="table-info" cellspacing='0'>
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>电话</th>
        <th>密码</th>
        <th>操作</th>
      </tr>
      {% for val in users %}
      <tr>
        <td>{{val.id}}</td>
        <td>{{val.name}}</td>
        <td>{{val.phone}}</td>
        <td>{{val.password}}</td>
        <td class="operation">
          <a id="edit-user" href="/manage/user_edit/{{val.id}}" data-id="{{val.id}}">编辑</a>
          <span id="delete-user" data-id="{{val.id}}">删除</span>
        </td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/user_delete.js"></script>
{% endblock %}