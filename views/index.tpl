{% extends './layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/style.css">
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
        <ul class="article-list">
          {% for val in classifysData %}
          <li class="article-item">
            <div class="item-content">
              <div class="item-index">{{val.index}}</div>
              <div class="item-mainer">
                <div class="article-title"><a href="/article_detail/{{val.id}}">{{val.title}}</a></div>
                <div class="article-time">{{val.created_time_display}}</div>
              </div>
            </div>
          </li>
          {% endfor %}           
        </ul>
        {% if pagination.pageArray.length > 1 %}
        <div id="pagination" class="pagination">
          {% for val in pagination.pageArray %}
          <a class="pagination-item {% if val == pagination.current %}active{% endif %}" href="/?page={{val}}&classify_id={{classify_id}}">{{val}}</a>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
  </div>

{% endblock %}

{% block js %}
{% endblock %}
