{% extends './manage_layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/manage.css">
  <link rel="stylesheet" href="/stylesheets/article_create.css">
{% endblock %}

{% block content %}
  <div class="return">
    <a class="return-article" href="/manage/article">返回文章列表 >></a>
  </div>
  <div class="create-container">
    <div class="article-title">
      <span>标题</span>
      <input id="title" class="title-input" type="text" name="title">
    </div>
    <div class="article-classify">
      <span>分类</span>
      <select class="classify" name="classify_id">
        {% for val in classify %}
        <option class="classify_id" value="{{val.id}}">{{val.name}}</option>
        {% endfor %}
      </select>
    </div>
    <div class="article-content">
      <span>内容</span>
      <textarea id="content" class="content-input" name="content"cols="30" rows="10"></textarea>
    </div>
    <div id="create-btn" class="create-btn">提交</div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/article_create.js"></script>
{% endblock %}
