{% extends './manage_layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/user_create.css">

{% endblock %}

{% block content %}
  <div class="content">
    <a class="content-title" href="/manage/classify">返回分类列表 >></a>
    <div class="info-list">
      <input id="name" class="info-item" type="text" name="name" placeholder="分类名称" value="{{classify.name}}">
      <button id="edit-btn" class="save" data-id="{{classify.id}}">保存</button>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/classify_edit.js"></script>
{% endblock %}