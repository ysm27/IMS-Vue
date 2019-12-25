<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/stylesheets/layout.css">
  {% block css %}
  {% endblock %}
</head>
<body>
  {% block content %}
  {% endblock %}

  <script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>

  {% block js %}
  {% endblock %}
</body>
</html>