# 路面与钢轨衔接

![](/images/joints-example.jpg)

对于初学者，最具可操作性的一般准则是：

- 钢轨轴线与路面对齐
- 钢轨上沿与路面齐平
- 不将带坡度的钢轨直接与路面衔接
- 双轨添加辅助单轨

## 双轨

- 使用 `10_AdjustableRoad → [A]DoubleRail` 对齐路面
- 添加 `10_AdjustableRoad → [A]SingleRail` 对齐路面
- 设置辅助单轨参数为 `length = 0.8` `height = -0.2`

此时辅助单轨倾角约为 15°，上述参数可以根据个人喜好和实际情况微调。

## 双弯轨

出于美观性和辅助轨制作难度考虑，并不建议双弯轨直接衔接路面，可以先使用较短的双轨衔接。

- 使用 `10_AdjustableRoad → [A]DoubleRail` 对齐路面
- 将两根弯轨分别与双轨的两轨对齐
- 删除双轨
- 添加 `10_AdjustableRoad → [S]SingleRailNoAlign` 对齐路面（[顶点对齐 + 坐标对齐](/start/alignment.md#顶点对齐-坐标对齐)）
- 根据实际情况自行调节辅助单轨的参数

仅供参考，页首图中的两根辅助轨参数分别为：

- `length = 0.9` `height = -0.2` `rotationY = 45°`
- `length = 0.9` `height = -0.2` `rotationX = 30°`
