<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/stylesheets/manage_layout.css">
  {% block css %}
  {% endblock %}
</head>
<body>
  <div class="page">
      <div class="page-header">
        <div class="header-left">
          <img class="logo" src="/images/logo.png" alt="logo">
          <span>信息管理</span>
        </div>
        <div class="header-right">
          <a id="logout" class="logout" href="/api/logout">退出系统</a>
        </div>
      </div>
      <div class="page-mainer">
        <div class="nav-list">
          <a class="nav-item {% if nav == 'user'%}active{% endif %}" href="/manage/user">用户管理</a>
          <a class="nav-item {% if nav == 'classify'%}active{% endif %}" href="/manage/classify">分类管理</a>
          <a id="article" class="nav-item article-manage {% if nav == 'article'%}active{% endif %}" href="javascript:;">文章管理</a>
          <div id="article-list" class="article-list">
            <a class="nav-item {% if nav == 'article'%}active{% endif %}" href="/manage/article">文章列表</a>
            <a class="nav-item {% if nav == 'article'%}active{% endif %}" href="/manage/article_create">新建文章</a>
          </div>
        </div>
        <div class="page-content">
          <div class="content-container">
            {% block content %}
            {% endblock %}
          </div>
          <div class="page-footer">Copyright © 2019 Design by jikexueyuan All Rights Reserved</div>
        </div>
      </div>
    </div>

  <script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
  <script src="/javascripts/manage_layout.js"></script>
  <script src="/javascripts/logout.js"></script>

  {% block js %}
  {% endblock %}
</body>
</html>





