---
title: "Agent 下半场：工具调用让模型会‘动手’，但成本与安全决定它能走多远"
date: 2026-03-24
categories: [AI, Agents, Research]
tags: [智能体, 工具调用, 世界模型, 安全, 成本]
author: Eric Zhang
image:
  path: https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/header.png
header:
  teaser: https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/header.png
  overlay_image: https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/header.png
  overlay_filter: 0.25
---

> 这篇文章基于我今天整理的“中文媒体优先”热点素材与可核验链接撰写：
> - OpenClaw（“养龙虾”）现象与争议（北京日报/中国青年报）：https://news.bjd.com.cn/2026/03/24/11648030.shtml
> - Yann LeCun 团队 LeWorldModel（LeWM）世界模型（新浪科技/DeepTech）：https://finance.sina.com.cn/tech/roll/2026-03-24/doc-inhsarqw7531651.shtml
> - 论文（arXiv PDF）：https://arxiv.org/pdf/2603.19312

![封面：Agent 从“动口”到“动手”的工具化跃迁](https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/header.png)

## 引言：为什么“会动手”的 Agent 会突然爆火？

最近中文互联网里，“养龙虾”几乎成了智能体（Agent）讨论的代称。北京日报转载的中国青年报文章，把 OpenClaw 描述为一种真正有“手和脚”的数字员工：它不止能聊天，还能调用工具、在系统里执行操作，从而完成一个闭环任务（而不是永远停留在“建议你去做 X”）【来源：https://news.bjd.com.cn/2026/03/24/11648030.shtml】。

作为一个做大模型/多智能体研究的人，我对这波热潮的直觉是：**Agent 的“下半场”终于开始被大众看见了**。

但我更在意的不是“又一个新名词”，而是两条更硬的约束：

1. **成本**：当 Agent 能自动化地做更多事，它也会更频繁、更完整地调用模型与工具链，Token 与工程成本会显性化。
2. **安全与可控性**：一旦它真的能“动手”，它就不可避免地触碰权限、误操作、提示词攻击与插件生态风险。

这两条约束，决定了 Agent 能否从热闹的 demo 走向可规模化的生产系统。

## 从 LLM 到 Agent：闭环到底是什么？

我倾向把 Agent 的能力拆成一个“可执行闭环”：

- 感知（输入）：读到用户目标与环境状态
- 规划（思考）：把目标分解为步骤与依赖
- 工具调用：选择 API/脚本/浏览器/数据库等
- 执行：真正对外部世界产生改变
- 反馈：读取结果并纠错，进入下一轮

![概念图：Agent 的执行闭环](https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/loop.png)

**闭环的关键点**在于：它必须在真实环境里收敛到一个“完成态”。

这也是 OpenClaw 这类产品容易引发共鸣的原因：在报道里，用户只需下指令，智能体就能自动操控电脑、抓取网页信息、生成结构化摘要并写入文档、再推送到微信等【来源：https://news.bjd.com.cn/2026/03/24/11648030.shtml】。这类“端到端完成”的体验，是纯聊天机器人很难给到的。

## 世界模型：让 Agent 先在脑海里跑一遍

当我把视线从应用热潮挪到研究侧，今天另一个非常值得注意的点是：**世界模型（World Model）**。

新浪科技转载 DeepTech 的文章提到，世界模型像给 AI 装了一个“脑内模拟器”：让它在真正执行动作之前，先在想象空间里预演未来，从而更好地规划【来源：https://finance.sina.com.cn/tech/roll/2026-03-24/doc-inhsarqw7531651.shtml】。

这件事和 Agent 的关系非常直接：

- 没有世界模型（或缺少足够强的预测/规划能力），Agent 更像“反应式工具人”：能调用工具，但在复杂环境里容易走错路。
- 有更好的世界模型，Agent 才更像“带规划能力的执行者”：能在多步任务里减少试错，提升稳定性与效率。

报道里提到 Yann LeCun 团队的新工作 LeWorldModel（LeWM）的几个关键数字：**15M 参数、单 GPU 几小时可训、规划速度最高提升 48 倍**，并且通过更简化的设计降低了训练不稳定/调参困难等痛点【来源同上】；原论文链接也在文中给出：https://arxiv.org/pdf/2603.19312 。

![概念图：世界模型让智能体先模拟再行动](https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/worldmodel.png)

我对这类“更轻、更快、更稳”的世界模型路线非常看好，原因很现实：**Agent 真正的瓶颈常常不在于“能不能想”，而在于“想完能不能及时做、反复做还稳不稳”**。

## 成本账：当 Agent 变得更能干，为什么反而更贵？

北京日报这篇报道里，把“烧钱”讲得很具体：有人为了优化适配业务的 skill 花了 1000 美金；而且每次调用模型会携带系统提示、人设、技能描述等上下文，因此即便简单工作也会消耗更多 Token；另外还提到某些产品存在“心跳机制”，即使没布置任务也可能触发完整调用，从而持续消耗 Token【来源：https://news.bjd.com.cn/2026/03/24/11648030.shtml】。

![对比图：成本与效率的权衡](https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/cost.png)

站在工程角度，我认为这里隐藏着一个常被忽略的事实：

- **Agent 的单位任务“价值”可能更高**（因为它能直接交付结果）。
- 但 **Agent 的单位任务“调用链条更长”**（规划、工具选择、执行、验证、纠错），于是调用次数与上下文长度都更大。

所以，当你把“能做的事”从 10 提到 100，成本往往不是线性上涨，而更像是被**工具链复杂度、失败重试率、权限隔离与审计成本**共同推高。

## 安全边界：高权限执行到底意味着什么？

同一篇报道里也明确指出：这类“龙虾”的风险，本质来自其“系统级执行权限”——具备文件读写、Shell 命令执行、浏览器控制等底层能力；一旦误解指令或遭遇提示词攻击，可能删除/修改文件，甚至泄露密钥与系统凭证；开源插件生态审核松散也会放大风险【来源：https://news.bjd.com.cn/2026/03/24/11648030.shtml】。

![风险图：自由度 vs 可控性/安全边界](https://zhangzhengeric.github.io/EricZZ.github.io/images/post_images/agent-tooling-safety-cost/security.png)

我自己的判断是：**“让模型动手”不是一个功能升级，而是一个安全范式切换**。

如果我们把传统 LLM 看作“只读咨询系统”，那么 Agent 更像“具备写权限的运维实习生”。你不能只靠一句“请小心操作”来解决问题，必须把安全做成系统能力。我更建议从这三层去做：

1. **权限最小化与分级**：默认不给系统级权限；对高风险操作引入显式确认。
2. **可回滚/可审计**：所有执行必须记录、可追踪、可撤销。
3. **抗提示词攻击的输入治理**：把网页/PDF/邮件等外部内容当作不可信输入，隔离出“可执行指令通道”。

## 我对 Agent 下半场的预测：决定胜负的不是“更大模型”，而是“更强系统”

把今天两条信息放在一起看，我觉得一个趋势越来越清晰：

- 应用侧（OpenClaw 热潮）告诉我们：**用户要的是端到端交付**。
- 研究侧（LeWM 世界模型）提示我们：为了端到端交付，**规划与预测要更快、更稳、更轻**，否则成本与延迟会吞噬体验。

所以我对“下半场”的预测是：

1. **Agent 会越来越像软件系统，而不是模型 demo**：工程能力（观测、回滚、权限、评测）比提示词更重要。
2. **轻量世界模型/规划能力会成为关键组件**：它会直接影响任务成功率与重试次数，从而影响总成本。
3. **安全会成为产品分层的分水岭**：没有安全边界的高权限 Agent，最多只能停留在“极客玩具”或“低风险场景”。

## 结语

我理解“养龙虾”的兴奋感：当你第一次看到一个 Agent 真的替你把事情做完，那种从“动口”到“动手”的跨越非常直观。

但我也更愿意把它看作一个提醒：**真正的挑战才刚开始**。当我们把执行权交给模型，我们也必须把成本、可控性和安全边界一起交付出来。

接下来，我会持续跟踪两条线：

- 一条是应用侧：哪些 Agent 能在真实工作流里稳定闭环、可审计可回滚。
- 另一条是研究侧：世界模型与规划方法如何在保持可训练、可复现的前提下，真正减少试错与成本。

如果你也在做 Agent 工程化落地，欢迎交流你遇到的最大“坑”是什么。
