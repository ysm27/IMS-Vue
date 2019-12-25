{% extends './manage_layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/manage.css">
{% endblock %}

{% block content %}
  <div class="add-user">
    <a class="add-btn" href="/manage/classify_create">添加分类</a>
  </div>
  <div class="table-container">
    <table class="table-info" cellspacing='0'>
      <tr>
        <th>id</th>
        <th>分类名称</th>
        <th>操作</th>
      </tr>
      {% for val in classify %}
      <tr>
        <td>{{val.id}}</td>
        <td>{{val.name}}</td>
        <td class="operation">
          <a href="/manage/classify_edit/{{val.id}}">编辑</a>
          <span id="delete-classify" data-id="{{val.id}}">删除</span>
        </td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/classify_delete.js"></script>
{% endblock %}

