# 钢轨拼接

对于初学者，最具可操作性的一般准则是：

- 使用[可形变元件](/glossary/adjustable-object.md)制作直钢轨
- 使用半径差为 1 的弯轨元件制作圆弧或螺旋钢轨
- 不设计侧轨
- 保持钢轨衔接自然，不出现断层、缺口和穿模

::: tip

为避免滥用，起步版块不讲解单轨。

由于 Ballex 所有物体受到 20rad/s 的角速度限制，不推荐设计侧轨，强烈不建议设计侧轨螺旋。

:::

## 水平双轨

- 直接使用 `10_AdjustableRoad → [A]DoubleRail` 即可
- 设置 `length` 参数控制长度，点击 `generate` 即可生成钢轨
- 如果两端仍然拼接钢轨，可以改用 `10_AdjustableRoad → [A]DoubleRailNoAlign`，下同

::: tip

出于易用性考虑，不再推荐使用 `03_IronRail → 1_Straight` 中的元件。

:::

## 斜坡双轨

- 只建议设计 15°，30° 或 45° 的斜坡
- 根据坡度在 `03_IronRail → 2_Circle` 中选取 `RC_15_R100` `RC_30_R100` 或 `RC_45_R100`，接在斜坡起点作为衔接轨
- 旋转 `10_AdjustableRoad → [A]DoubleRail` 作为斜坡
- 在斜坡末端也添加衔接轨，便于拼接后续元件

## 圆弧双轨与螺旋双轨

- 挑选 `03_IronRail → 2_Circle` `03_IronRail → 3_Helix` 中圆心角相同，切变高度 `H` 相同，半径 `R` 数值相差 100 的两段钢轨，分别作为内外轨
- 反向螺旋可缩放 `scaleZ = -1` 得到

## 护栏

直接使用 `10_AdjustableRoad → [A]GuardRail` `10_AdjustableRoad → [A]GuardRailL` 即可。

::: tip

出于易用性考虑，不再推荐使用 `03_IronRail → 5_GuardRail` 中的元件。

:::

## 缺面处理

使用 `10_AdjustableRoad → [A]DoubleRail` 接在缺面处，设置极短的长度（例如 0.001）即可。

## 穿模闪烁处理

在起步阶段，并不建议制作钢轨岔路。如果在同一根钢轨末端衔接多根钢轨，它们重合的部分的材质会穿模闪烁。这时，微调其中一根钢轨的 `Y` 坐标（例如 ±0.001）即可解决该问题。
