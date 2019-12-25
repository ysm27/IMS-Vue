{% extends './layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/article_detail.css">
{% endblock %}

{% block content %}
  <div class="page">
    <div class="page-head">
      <div class="nav-list">
        <a class="nav-item {% if classify_id == 0 %}active{% endif %}" href="/">全部</a>
            {% for val in classify %}
        <a class="nav-item {% if classify_id == val.id %}active{% endif %}" href="/?classify_id={{val.id}}">{{val.name}}</a>
            {% endfor %}
      </div>
    </div>
    <div class="page-mainer">
      <div class="mainer-container">
        <div class="article-title">{{article.title}}</div>
        <div class="article-time">{{article.created_time_display}}</div>
        <div class="article-content">
          {{article.content}}
        </div>
      </div>
    </div>
  </div>
{% endblock %}