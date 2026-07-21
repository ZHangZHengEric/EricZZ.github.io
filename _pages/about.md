---
layout: home
permalink: /
title: "张正 Eric ZZ"
description: "Sage 创建者，毕业于清华大学计算机系，当前关注 Proactive Agent 与多模态模型。"
author_profile: false
header:
  image: 2026-03-15-sage-ai-editorial-cover.png
redirect_from:
  - /about/
  - /about.html
---

<section class="personal-intro" aria-labelledby="personal-intro-title">
  <div class="personal-shell personal-intro__inner">
    <p class="personal-kicker personal-reveal">张正 · Eric ZZ</p>
    <h1 id="personal-intro-title" class="personal-reveal">你好，<br class="personal-intro__mobile-break">我是张正。</h1>
    <p class="personal-intro__lead personal-reveal">Sage 创建者，当前关注 Proactive Agent 与多模态模型。</p>

    <div class="personal-intro__copy personal-reveal">
      <p>
        我是 <strong>Sage 创建者</strong>，毕业于清华大学计算机系。目前主要关注 Proactive Agent 与多模态模型，研究如何让智能系统理解更丰富的环境信息，并在合适的时机主动规划和完成任务。
      </p>
      <p>
        我的研究与实践覆盖自然语言处理、基础模型训练、语音交互和多模态学习，包含数据治理、模型训练、评测、推理与部署，也包括复杂 Agent 系统的架构设计与产品化。
      </p>
      <p>
        我曾主导 Atom-1B / 7B / 13B 系列大语言模型及其数据、训练、评测、推理与部署体系；主导语音理解与语音识别方向的多模态大模型研发，在多个真实使用场景中达到当时 SOTA 水平；并联合发起 Llama 中文社区。近年来，我从零创建并持续主导 Sage 的产品与技术演进。
      </p>
    </div>

    <nav class="personal-links personal-reveal" aria-label="个人链接">
      <a href="{{ site.baseurl }}/open-source/"><i class="fas fa-code-branch" aria-hidden="true"></i>关于 Sage <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/ZHangZHengEric" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i>GitHub <span aria-hidden="true">↗</span></a>
      <a href="mailto:zhengzhang13@icloud.com"><i class="fas fa-envelope" aria-hidden="true"></i>联系我</a>
    </nav>
  </div>
</section>

<section class="personal-section personal-writing" id="writing" aria-labelledby="writing-title">
  <div class="personal-shell">
    <header class="personal-section__header">
      <h2 id="writing-title">最近写作</h2>
      <a href="{{ site.baseurl }}/year-archive/">全部文章</a>
    </header>

    <div class="personal-writing__list">
      {% for post in site.posts limit:5 %}
        <a class="personal-writing__item" href="{{ site.baseurl }}{{ post.url }}">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
          <h3>{{ post.title }}</h3>
          <span aria-hidden="true">↗</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="personal-section personal-work" id="work" aria-labelledby="work-title">
  <div class="personal-shell">
    <header class="personal-section__header">
      <h2 id="work-title">工作与研究</h2>
      <a href="{{ site.baseurl }}/cv/">完整经历</a>
    </header>

    <div class="personal-work__list">
      <article class="personal-work__item" id="sage">
        <p class="personal-work__meta">Sage</p>
        <h3>Sage 创建者</h3>
        <p>从零创建并持续主导 Sage，探索如何把规划、执行、自检、记忆与工具调用组织成可靠的 Agent 系统。<a class="personal-work__link" href="{{ site.baseurl }}/open-source/"><i class="fas fa-arrow-right" aria-hidden="true"></i>了解项目</a></p>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Speech & Multimodal</p>
        <h3>语音理解与语音识别</h3>
        <p>主导语音多模态大模型研发，在多个真实使用场景中达到当时 SOTA 水平，覆盖从数据、训练、评测到部署的完整链路。</p>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Foundation Models</p>
        <h3>Atom 系列大语言模型</h3>
        <p>主导 Atom-1B / 7B / 13B 系列模型研发，建立大规模中文语料治理与训练体系，模型累计下载量超过 20 万次。</p>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Open Source</p>
        <h3>Llama 中文社区</h3>
        <p>作为联合发起人参与建设中文大模型开源生态，社区 GitHub Stars 超过 14k，并参与出版《Llama 大模型实践指南》。</p>
      </article>
    </div>
  </div>
</section>
