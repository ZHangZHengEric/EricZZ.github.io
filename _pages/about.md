---
layout: home
permalink: /
title: "张正 Eric ZZ"
description: "Sage 创建者，毕业于清华大学计算机系，当前关注 Proactive Agent 与多模态模型。Creator of Sage, focused on proactive agents and multimodal models."
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
    <h1 id="personal-intro-title" class="personal-reveal">
      <span data-language-content="zh">你好，<br class="personal-intro__mobile-break">我是张正。</span>
      <span data-language-content="en" lang="en">Hi, I'm Eric Zhang.</span>
    </h1>
    <p class="personal-intro__lead personal-reveal">
      <span data-language-content="zh">Sage 创建者，当前关注 Proactive Agent 与多模态模型。</span>
      <span data-language-content="en" lang="en">Creator of Sage, currently focused on proactive agents and multimodal models.</span>
    </p>

    <div class="personal-intro__copy personal-reveal">
      <div class="bilingual-pair">
        <p data-language-content="zh">我是 <strong>Sage 创建者</strong>，毕业于清华大学计算机系。目前主要关注 Proactive Agent 与多模态模型，研究如何让智能系统理解更丰富的环境信息，并在合适的时机主动规划和完成任务。</p>
        <p data-language-content="en" lang="en">I am the creator of <strong>Sage</strong> and graduated from the Department of Computer Science and Technology at Tsinghua University. My current research focuses on proactive agents and multimodal models: how intelligent systems can understand richer environments, then plan and act at the right moment.</p>
      </div>
      <div class="bilingual-pair">
        <p data-language-content="zh">我的研究与实践覆盖自然语言处理、基础模型训练、语音交互和多模态学习，包含数据治理、模型训练、评测、推理与部署，也包括复杂 Agent 系统的架构设计与产品化。</p>
        <p data-language-content="en" lang="en">My research and engineering experience spans natural language processing, foundation-model training, speech interaction, and multimodal learning—from data governance, training, evaluation, inference, and deployment to the architecture and productization of complex agent systems.</p>
      </div>
      <div class="bilingual-pair">
        <p data-language-content="zh">我曾主导 Atom-1B / 7B / 13B 系列大语言模型及其数据、训练、评测、推理与部署体系；主导语音理解与语音识别方向的多模态大模型研发，在多个真实使用场景中达到当时 SOTA 水平；并联合发起 Llama 中文社区。近年来，我从零创建并持续主导 Sage 的产品与技术演进。</p>
        <p data-language-content="en" lang="en">I led the Atom-1B / 7B / 13B model series and its end-to-end data, training, evaluation, inference, and deployment stack. I also led multimodal-model development for speech understanding and recognition, reaching state-of-the-art performance in multiple real-world scenarios, and co-founded the Llama Chinese Community. More recently, I created Sage and continue to lead its product and technical evolution.</p>
      </div>
    </div>

    <nav class="personal-links personal-reveal" aria-label="个人链接 / Personal links">
      <a href="{{ site.baseurl }}/open-source/"><i class="fas fa-code-branch" aria-hidden="true"></i><span data-language-content="zh">关于 Sage</span><span data-language-content="en" lang="en">About Sage</span> <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/ZHangZHengEric" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i>GitHub <span aria-hidden="true">↗</span></a>
      <a href="mailto:zhengzhang13@icloud.com"><i class="fas fa-envelope" aria-hidden="true"></i><span data-language-content="zh">联系</span><span data-language-content="en" lang="en">Email</span></a>
    </nav>
  </div>
</section>

<section class="personal-section personal-writing" id="writing" aria-labelledby="writing-title">
  <div class="personal-shell">
    <header class="personal-section__header">
      <h2 id="writing-title"><span data-language-content="zh">最近写作</span><span data-language-content="en" lang="en">Recent Writing</span></h2>
      <a href="{{ site.baseurl }}/year-archive/"><span data-language-content="zh">全部文章</span><span data-language-content="en" lang="en">All Posts</span></a>
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
      <h2 id="work-title"><span data-language-content="zh">工作与研究</span><span data-language-content="en" lang="en">Work &amp; Research</span></h2>
      <a href="{{ site.baseurl }}/cv/"><span data-language-content="zh">完整经历</span><span data-language-content="en" lang="en">Full CV</span></a>
    </header>

    <div class="personal-work__list">
      <article class="personal-work__item" id="sage">
        <p class="personal-work__meta">Sage</p>
        <h3><span data-language-content="zh">Sage 创建者</span><span data-language-content="en" lang="en">Creator of Sage</span></h3>
        <div class="personal-work__description">
          <p data-language-content="zh">从零创建并持续主导 Sage，探索如何把规划、执行、自检、记忆与工具调用组织成可靠的 Agent 系统。<a class="personal-work__link" href="{{ site.baseurl }}/open-source/"><i class="fas fa-arrow-right" aria-hidden="true"></i>了解项目</a></p>
          <p data-language-content="en" lang="en">Created Sage from the ground up and continue to lead its development, exploring how planning, execution, self-checking, memory, and tool use can form a reliable agent system. <a class="personal-work__link" href="{{ site.baseurl }}/open-source/"><i class="fas fa-arrow-right" aria-hidden="true"></i>About Sage</a></p>
        </div>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Speech & Multimodal</p>
        <h3><span data-language-content="zh">语音理解与语音识别</span><span data-language-content="en" lang="en">Speech Understanding &amp; Recognition</span></h3>
        <div class="personal-work__description">
          <p data-language-content="zh">主导语音多模态大模型研发，在多个真实使用场景中达到当时 SOTA 水平，覆盖从数据、训练、评测到部署的完整链路。</p>
          <p data-language-content="en" lang="en">Led multimodal-model development for speech understanding and recognition, reaching state-of-the-art performance across multiple real-world scenarios and covering the full pipeline from data and training to evaluation and deployment.</p>
        </div>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Foundation Models</p>
        <h3><span data-language-content="zh">Atom 系列大语言模型</span><span data-language-content="en" lang="en">Atom Language Models</span></h3>
        <div class="personal-work__description">
          <p data-language-content="zh">主导 Atom-1B / 7B / 13B 系列模型研发，建立大规模中文语料治理与训练体系，模型累计下载量超过 20 万次。</p>
          <p data-language-content="en" lang="en">Led the Atom-1B / 7B / 13B model series and built its large-scale Chinese corpus governance and training stack. The models have been downloaded more than 200,000 times.</p>
        </div>
      </article>
      <article class="personal-work__item">
        <p class="personal-work__meta">Open Source</p>
        <h3><span data-language-content="zh">Llama 中文社区</span><span data-language-content="en" lang="en">Llama Chinese Community</span></h3>
        <div class="personal-work__description">
          <p data-language-content="zh">作为联合发起人参与建设中文大模型开源生态，社区 GitHub Stars 超过 14k，并参与出版《Llama 大模型实践指南》。</p>
          <p data-language-content="en" lang="en">Co-founded the Llama Chinese Community, helping grow an open-source ecosystem with more than 14k GitHub stars, and co-authored the <em>Llama Large Model Practice Guide</em>.</p>
        </div>
      </article>
    </div>
  </div>
</section>
