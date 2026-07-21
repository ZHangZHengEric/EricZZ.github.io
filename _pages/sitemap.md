---
layout: archive
title: "站点地图"
title_en: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

<p data-language-content="zh">这里列出了网站中的页面与文章，也提供可供程序读取的 <a href="{{ base_path }}/sitemap.xml">XML 版本</a>。</p>
<p data-language-content="en" lang="en">This page lists the pages and posts on the site. An <a href="{{ base_path }}/sitemap.xml">XML version</a> is also available.</p>

<h2><span data-language-content="zh">页面</span><span data-language-content="en" lang="en">Pages</span></h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

<h2><span data-language-content="zh">文章</span><span data-language-content="en" lang="en">Posts</span></h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
