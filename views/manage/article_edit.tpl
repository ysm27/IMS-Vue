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
      <input id="title" class="title-input" type="text" name="title" value="{{article.title}}">
    </div>
    <div class="article-classify">
      <span>分类</span>
      <select id="classify_id" class="classify" name="classify_id">
        {% for val in classify %}
        <option class="classify_id" value="{{val.id}}" {{'selected' if article.classify_id == val.id else ''}}>{{val.name}}</option>
        {% endfor %}

        <!-- <option class="classify_id" value="1" {{'selected' if article.classify_id == 1 else ''}}>技术动态</option>
        <option class="classify_id" value="2" {{'selected' if article.classify_id == 2 else ''}}>极客新闻</option>
        <option class="classify_id" value="3" {{'selected' if article.classify_id == 3 else ''}}>通知公告</option>
        <option value="4" {{'selected' if article.classify_id == 4 else ''}}>技术热点</option>
        <option class="classify_id" value="5" {{'selected' if article.classify_id == 5 else ''}}>新课列表</option> -->
      </select>
    </div>
    <div class="article-content">
      <span>内容</span>
      <textarea id="content" class="content-input" name="content"cols="30" rows="10">{{article.content}}</textarea>
    </div>
    <div id="create-btn" class="create-btn" data-id="{{article.id}}">提交</div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/article_edit.js"></script>
{% endblock %}
