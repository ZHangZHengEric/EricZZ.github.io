---
title: "Unveiling Uncertainty: Calibration and Performance of Multimodal Large Language Models | 揭示不确定性：多模态大语言模型的校准与性能"
collection: publications
category: conferences
permalink: /publication/2024-01-01-unveiling-uncertainty
excerpt: 'Analyzing uncertainty in multimodal LLMs | 多模态大语言模型的不确定性分析'
date: 2025-01-01
venue: 'Proceedings of the 31st International Conference on Computational Linguistics | 第31届国际计算语言学会议'
paperurl: 'https://aclanthology.org/2025.coling-main.208.pdf'
citation: 'Zijun Chen, Wenbo Hu, Guande He, Zhijie Deng, Zheng Zhang, Richang Hong. (2024). "Unveiling Uncertainty: Calibration and Performance of Multimodal Large Language Models"'
---

多模态大语言模型(MLLMs)结合视觉和文本数据进行图像描述和视觉问答等任务。在医疗和自动驾驶等关键领域，准确的不确定性校准对可靠应用至关重要。本研究探讨了多种MLLM在不同场景下的校准表现，包括视觉微调前后以及基础LLM多模态训练前后的变化。我们发现这些模型普遍存在校准不足问题，且不同场景间校准差异不显著。研究还揭示了文本与视觉信息整合对不确定性的不同影响。

Multimodal large language models (MLLMs) combine visual and textual data for tasks like image captioning and visual question answering. Proper uncertainty calibration is crucial for reliable use in critical areas like healthcare and autonomous driving. This study investigates several MLLMs' calibration performance across scenarios including pre/post visual fine-tuning and pre/post multimodal training of base LLMs. We observed prevalent miscalibration with insignificant differences across scenarios, and revealed distinct uncertainty impacts from text versus integrated multimodal information.

为评估MLLM处理未知情况的能力，我们开发了IDK("我不知道")数据集。研究发现MLLM倾向于给出答案而非承认不确定性，但通过提示优化可改善这种自我评估行为。最后，我们提出了温度缩放和迭代提示优化等技术来校准MLLM并增强模型可靠性。这些发现为多模态应用中负责任地部署MLLM提供了重要见解。

To evaluate MLLMs' handling of unknowns, we developed the IDK ("I don't know") dataset. Findings show MLLMs tend to provide answers rather than admit uncertainty, though prompt optimization can improve this self-assessment. We propose techniques like temperature scaling and iterative prompt optimization to calibrate MLLMs and enhance reliability. These insights are crucial for responsible MLLM deployment in multimodal applications.
