# AI 博客写作技巧指南

> **适用场景**：自动化技术博客生成系统
> **最后更新**：2026-03-01
> **版本**：1.0

---

## 📋 目录

1. [图片路径规范](#1-图片路径规范)
2. [代码高亮规范](#2-代码高亮规范)
3. [Markdown 格式规范](#3-markdown-格式规范)
4. [YAML Front Matter 规范](#4-yaml-front-matter-规范)
5. [写作风格指南](#5-写作风格指南)
6. [常见错误与避免方法](#6-常见错误与避免方法)

---

## 1. 图片路径规范

### ⚠️ 关键规则

**图片引用路径必须从 `/_posts/` 目录开始计算**，而不是从根目录或博客文件所在目录开始。

### ✅ 正确示例

```markdown
<!-- 博客文件位置：/Users/zhangzheng/workspace/EricZZ.github.io/_posts/2026-03-01-xxx.md -->
<!-- 图片位置：/Users/zhangzheng/workspace/EricZZ.github.io/_posts/images/image.png -->

![图片描述](/images/post_images/image.png)
```

### ❌ 错误示例

```markdown
<!-- 错误 1：使用绝对路径 -->
![图片描述](file:///Users/zhangzheng/workspace/EricZZ.github.io/_posts/images/image.png)

<!-- 错误 2：路径从根目录开始 -->
![图片描述](/images/image.png)

<!-- 错误 3：相对路径错误 -->
![图片描述](images/image.png)
```

### 📁 图片存储结构

```
EricZZ.github.io/
├── _posts/
│   ├── 2026-03-01-xxx.md          ← 博客文件
│   └── images/                    ← 该博客的图片目录
│       ├── cover_001.png
│       └── diagram_002.png
└── images/
    └── post_images/               ← Jekyll 全局图片目录
        ├── multiagent_cover_001.png
        └── multiagent_architecture_002.png
```

### 🔄 图片路径转换规则

| 原始路径 | 转换后路径 |
|---------|-----------|
| `research/ai-hotspot-today/images/xxx.png` | `/images/post_images/xxx.png` |
| `artifacts/image.png` | `/images/post_images/image.png` |

---

## 2. 代码高亮规范

### ⚠️ 关键问题

Jekyll 对 Markdown 代码块的渲染有特殊要求，**不能使用标准的 Markdown 代码块语法**。

### ✅ 正确示例

```markdown
{% highlight console %}
pip install tensorflow
pip install pytorch
{% endhighlight %}

{% highlight python %}
def hello_world():
    print("Hello, World!")
{% endhighlight %}

{% highlight bash %}
git push origin main
{% endhighlight %}
```

### ❌ 错误示例

```markdown
<!-- 错误 1：使用标准 Markdown 代码块 -->
```python
def hello_world():
    print("Hello, World!")
```

<!-- 错误 2：缺少 highlight 标签 -->
```python
代码内容
```

<!-- 错误 3：使用错误的语法 -->
{% codeblock %}
代码内容
{% endcodeblock %}
```

### 🎨 支持的语法高亮语言

- `python` - Python 代码
- `bash` / `console` - Shell 命令
- `javascript` - JavaScript 代码
- `java` - Java 代码
- `cpp` / `c++` - C++ 代码
- `ruby` - Ruby 代码
- `json` - JSON 数据
- `yaml` / `yml` - YAML 配置
- `sql` - SQL 查询
- `html` - HTML 标记
- `css` - CSS 样式

---

## 3. Markdown 格式规范

### 📝 标题层级

```markdown
# 一级标题（仅用于文章标题，已在 YAML Front Matter 中定义）

## 二级标题（主要章节）

### 三级标题（子章节）

#### 四级标题（更细的划分）
```

### 📌 引用块

```markdown
> **核心问题**：为什么我们需要多个 AI 协作？
> 
> 这个问题的答案，藏在人类协作的进化史中。

> **注意**：这是一个重要的提示。
```

### 📊 列表格式

```markdown
- 无序列表项 1
- 无序列表项 2
  - 子列表项 1
  - 子列表项 2

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3
```

### 🔗 链接格式

```markdown
[链接文本](https://example.com)
[链接文本](/posts/2024/01/example/)
[链接文本](https://example.com "标题提示")
```

### 📷 图片格式

```markdown
![图片描述](/images/post_images/image.png)
![图片描述](/images/post_images/image.png "图片标题")
```

### 📐 LaTeX 公式

```markdown
行内公式：$E = mc^2$

块级公式：
$$
u_i(a_1, ..., a_n) = \text{payoff for agent } i
$$

多行公式：
$$
\begin{aligned}
Q_i(s, a_i) &= Q_i^{\text{local}}(s_i, a_i) \\
            &+ \lambda \cdot Q_i^{\text{global}}(s, a_{-i})
\end{aligned}
$$
```

---

## 4. YAML Front Matter 规范

### 📋 必需字段

```yaml
---
title: '文章标题'
date: 2026-03-01
permalink: /posts/2026/03/article-title/
tags:
  - 标签 1
  - 标签 2
  - 标签 3
categories:
  - 分类 1
  - 分类 2
---
```

### 🔍 字段说明

| 字段 | 说明 | 示例 |
|-----|------|------|
| `title` | 文章标题（必须用单引号包裹） | `'多智能体系统革命'` |
| `date` | 发布日期（YYYY-MM-DD 格式） | `2026-03-01` |
| `permalink` | 永久链接（推荐格式） | `/posts/2026/03/article-title/` |
| `tags` | 标签列表（可选，建议 3-5 个） | `['AI', '多智能体', '技术']` |
| `categories` | 分类列表（可选，建议 1-2 个） | `['AI 技术前沿', '深度分析']` |

### 📝 permalink 格式规范

```
/posts/{YEAR}/{MONTH}/{kebab-case-title}/
```

**正确示例**：
- `/posts/2026/03/multi-agent-system-revolution/`
- `/posts/2024/09/generative-model-development/`

**错误示例**：
- `/posts/2026/03/多智能体系统革命/`（中文路径可能导致问题）
- `/posts/2026/multi-agent-system-revolution/`（缺少月份）

---

## 5. 写作风格指南

### 🎯 核心风格特征

1. **幽默风趣**：使用生动的比喻和轻松的语言
2. **技术深度**：包含专业术语、公式、技术细节
3. **结构清晰**：章节分明，逻辑连贯
4. **个人视角**：融入个人观点和体验
5. **图文并茂**：配合图表、代码、公式

### ✍️ 写作技巧

#### 5.1 引人入胜的开头

```markdown
想象一下，如果你让一个 AI 同时写代码、画图、写报告、做 PPT，
它可能会像新手村玩家一样手忙脚乱。但如果你给它组建一支「专业团队」——
一个负责编程、一个负责设计、一个负责文档，结果会怎样？

**答案正在 OpenAI GPT-5 的多智能体协作功能中揭晓**。
```

#### 5.2 使用比喻和类比

```markdown
- "智能体像「训练有素的士兵」——执行指令精准，但缺乏灵活性"
- "当 AI 开始「组队打怪」"
- "从「单打独斗」到「团队协作」"
```

#### 5.3 技术深度与通俗性结合

```markdown
**专业术语** + **通俗解释**

例如：
"多智能体系统（Multi-Agent Systems, MAS）—— 多个 AI 协同工作的架构"
```

#### 5.4 包含个人思考

```markdown
> **核心问题**：为什么我们需要多个 AI 协作？单个超级智能不是更好吗？
> 
> 这个问题的答案，藏在人类协作的进化史中。
```

---

## 6. 常见错误与避免方法

### ❌ 错误 1：图片路径错误

**问题**：图片路径使用了绝对路径或从错误目录开始

**解决**：
1. 确认图片存储位置：`_posts/images/` 或 `images/post_images/`
2. 使用相对路径：`/images/post_images/xxx.png`
3. 避免使用 `file://` 协议

### ❌ 错误 2：代码高亮渲染失败

**问题**：Markdown 代码块渲染后带有额外的 XML 标签

**解决**：
1. 使用 `{% highlight language %}` 语法
2. 必须包含 `{% endhighlight %}` 结束标签
3. 不要使用标准的 ```language 代码块

### ❌ 错误 3：YAML Front Matter 格式错误

**问题**：缺少分隔线或字段格式错误

**解决**：
1. 确保文件开头有 `---` 分隔线
2. 确保文件内容有 `---` 结束分隔线
3. 字符串字段使用单引号包裹

### ❌ 错误 4：文件名不规范

**问题**：博客文件名不符合 Jekyll 命名规范

**解决**：
1. 格式：`YYYY-MM-DD-title.md`
2. 标题使用英文和连字符（kebab-case）
3. 避免中文字符（可能导致 URL 问题）

### ❌ 错误 5：缺少图片说明

**问题**：图片引用没有 alt 文本

**解决**：
```markdown
<!-- 好 -->
![多智能体系统协作示意图](/images/post_images/multiagent_cover_001.png)

<!-- 差 -->
![image.png](/images/post_images/multiagent_cover_001.png)
```

---

## 📚 检查清单

在发布博客前，请确保完成以下检查：

- [ ] YAML Front Matter 格式正确
- [ ] 图片路径使用 `/images/post_images/` 格式
- [ ] 代码块使用 `{% highlight %}` 语法
- [ ] 所有公式使用 LaTeX 格式
- [ ] 标题层级清晰（H2、H3、H4）
- [ ] 链接和引用格式正确
- [ ] 文件名符合 `YYYY-MM-DD-title.md` 规范
- [ ] permalink 包含年月信息
- [ ] 至少包含 2-4 张配图
- [ ] 字数在 2000-3000 字之间

---

## 🔧 自动化脚本中的检查步骤

在自动化博客生成流程中，应包含以下验证步骤：

1. **图片路径验证**
   ```python
   # 检查所有图片引用是否符合规范
   if not re.search(r'/images/post_images/.*\.png', image_path):
       raise ValueError(f"图片路径格式错误：{image_path}")
   ```

2. **代码高亮验证**
   ```python
   # 检查代码块是否使用 highlight 语法
   if re.search(r'^```', content, re.MULTILINE):
       raise ValueError("检测到标准 Markdown 代码块，应使用 {% highlight %} 语法")
   ```

3. **YAML Front Matter 验证**
   ```python
   # 检查必需的字段
   required_fields = ['title', 'date', 'permalink']
   for field in required_fields:
       if field not in front_matter:
           raise ValueError(f"缺少必需字段：{field}")
   ```

4. **图片文件存在性验证**
   ```python
   # 检查所有引用的图片文件是否存在
   for image_path in image_refs:
       if not os.path.exists(image_path):
           raise ValueError(f"图片文件不存在：{image_path}")
   ```

---

## 📖 参考资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Kramdown 文档](https://kramdown.gettalong.org/)
- [MathJax 公式支持](https://docs.mathjax.org/en/latest/)

---

**祝写作愉快！** ✍️🚀
