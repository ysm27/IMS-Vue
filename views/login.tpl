{% extends './layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/login.css">
{% endblock %}

{% block content %}
  <div class="page">
    <div class="login">
      <img class="logo" src="/images/logo.png" alt="logo">
      <div class="login-title"><span>极客信息发布管理</span></div>
      <div class="login-content">
        <input id="phone" type="text" name="phone" placeholder="手机号码">
        <input id="password" type="password" name="password" placeholder="登录密码">
        <button id="login-btn" class="login-btn">登录</button>
      </div>
    </div>
  </div>
{% endblock %}

{% block js %}
  <script src="/javascripts/login.js"></script>
{% endblock %}
