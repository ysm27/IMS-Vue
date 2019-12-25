{% extends './manage_layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/manage.css">
{% endblock %}

{% block content %}
  <div class="add-user">
    <a class="add-btn" href="/manage/article_create">新建文章</a>
  </div>
  <div class="table-container">
    <table class="table-info" cellspacing='0'>
      <tr>
        <th>index</th>
        <th>标题</th>
        <th>分类</th>
        <th>操作</th>
      </tr>
      {% for val in article %}

      <tr>
        <td>{{val.id}}</td>
        <td>{{val.title}}</td>
        <td>
            {% if val.classify_id == val.class_id %}
              {{val.class_name}}
            {% endif %}
        </td>
        <td class="operation">
          <a href="/manage/article_edit/{{val.id}}">编辑</a>
          <span id="delete-btn" data-id="{{val.id}}">删除</span>
        </td>
      </tr>
      {% endfor %}
    </table>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/article_delete.js"></script>
{% endblock %}